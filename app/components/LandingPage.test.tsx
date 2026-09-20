import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SECTION_IDS } from "~/config/navigation";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders every section once, in the documented order", () => {
    const { container } = render(<LandingPage />);
    const ids = Array.from(container.querySelectorAll("main > section")).map(
      (section) => section.id,
    );
    expect(ids).toEqual([...SECTION_IDS]);
  });

  it("has a target for every in-page anchor in the header, sections and footer", () => {
    const { container } = render(<LandingPage />);
    const anchors = Array.from(
      container.querySelectorAll<HTMLAnchorElement>("a[href^='#']"),
    );
    expect(anchors.length).toBeGreaterThan(0);

    for (const anchor of anchors) {
      const id = (anchor.getAttribute("href") as string).slice(1);
      expect(container.querySelector(`[id="${id}"]`)).not.toBeNull();
    }
  });

  it("places the header before the content and the footer after it", () => {
    const { container } = render(<LandingPage />);
    const header = container.querySelector("header");
    const main = container.querySelector("main");
    const footer = container.querySelector("footer");
    expect(header?.nextElementSibling).toBe(main);
    expect(main?.nextElementSibling).toBe(footer);
  });
});
