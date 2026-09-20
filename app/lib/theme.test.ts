import "@testing-library/jest-dom";
import { THEME_STORAGE_KEY, themeInitScript, toggleTheme } from "./theme";

function mockPrefersDark(matches: boolean) {
  window.matchMedia = jest.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
}

function runInitScript() {
  new Function(themeInitScript)();
}

const isDark = () => document.documentElement.classList.contains("dark");

describe("theme", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    window.localStorage.clear();
    mockPrefersDark(false);
  });

  describe("themeInitScript", () => {
    it("applies the stored dark theme before paint", () => {
      window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
      runInitScript();
      expect(isDark()).toBe(true);
    });

    it("prefers the stored light theme over the system preference", () => {
      mockPrefersDark(true);
      window.localStorage.setItem(THEME_STORAGE_KEY, "light");
      runInitScript();
      expect(isDark()).toBe(false);
    });

    it("falls back to prefers-color-scheme when nothing is stored", () => {
      mockPrefersDark(true);
      runInitScript();
      expect(isDark()).toBe(true);
    });

    it("stays light when nothing is stored and the system is light", () => {
      runInitScript();
      expect(isDark()).toBe(false);
    });

    it("falls back to prefers-color-scheme when storage is unavailable", () => {
      mockPrefersDark(true);
      jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
        throw new Error("blocked");
      });
      runInitScript();
      expect(isDark()).toBe(true);
      jest.restoreAllMocks();
    });
  });

  describe("toggleTheme", () => {
    it("switches to dark and persists the choice", () => {
      expect(toggleTheme()).toBe("dark");
      expect(isDark()).toBe(true);
      expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    });

    it("switches back to light and persists the choice", () => {
      document.documentElement.classList.add("dark");
      expect(toggleTheme()).toBe("light");
      expect(isDark()).toBe(false);
      expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
    });

    it("still toggles the class when storage is unavailable", () => {
      jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
        throw new Error("blocked");
      });
      expect(toggleTheme()).toBe("dark");
      expect(isDark()).toBe(true);
      jest.restoreAllMocks();
    });
  });
});
