import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    window.localStorage.clear();
  });

  it("renders an accessible button", () => {
    render(<ThemeToggle />);
    expect(
      screen.getByRole("button", { name: "Cambiar tema" }),
    ).toBeInTheDocument();
  });

  it("toggles the dark class and persists the theme on each click", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: "Cambiar tema" });

    fireEvent.click(button);
    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("theme")).toBe("dark");

    fireEvent.click(button);
    expect(document.documentElement).not.toHaveClass("dark");
    expect(window.localStorage.getItem("theme")).toBe("light");
  });
});
