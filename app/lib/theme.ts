export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Inline script that runs before the first paint so the page never flashes
 * the wrong theme. A stored choice wins; otherwise the system preference
 * (prefers-color-scheme) decides. Storage access is guarded because it can
 * throw in private windows or when site data is blocked.
 */
export const themeInitScript = `(function () {
  var stored = null;
  try { stored = window.localStorage.getItem('${THEME_STORAGE_KEY}'); } catch (e) {}
  var dark = stored
    ? stored === 'dark'
    : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
})();`;

/** Flips the theme on <html> and persists the choice. Returns the new theme. */
export function toggleTheme(): Theme {
  const root = document.documentElement;
  const next: Theme = root.classList.contains("dark") ? "light" : "dark";
  root.classList.toggle("dark", next === "dark");
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage is unavailable: the theme still applies for this page view.
  }
  return next;
}
