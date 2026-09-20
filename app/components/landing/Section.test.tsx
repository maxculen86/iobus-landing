import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Section, SectionHeader } from "./Section";

describe("Section", () => {
  it("renders a landmark with the given id and offsets the sticky header", () => {
    render(
      <Section id="inicio" aria-label="Demo">
        <p>content</p>
      </Section>,
    );
    const section = screen.getByRole("region", { name: "Demo" });
    expect(section).toHaveAttribute("id", "inicio");
    expect(section).toHaveClass("scroll-mt-16");
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("renders a decorative texture layer only when a texture is requested", () => {
    const { container, rerender } = render(
      <Section id="inicio" aria-label="A" background="surface">
        x
      </Section>,
    );
    expect(container.querySelector("[aria-hidden='true']")).toBeNull();

    rerender(
      <Section id="inicio" aria-label="A" background="tex2">
        x
      </Section>,
    );
    expect(container.querySelector("[aria-hidden='true']")).toHaveClass(
      "bg-io-tex2",
    );
  });
});

describe("SectionHeader", () => {
  it("renders the title as h2 followed by the description", () => {
    render(<SectionHeader title="Título" description="Descripción" />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Título" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Descripción")).toBeInTheDocument();
  });
});
