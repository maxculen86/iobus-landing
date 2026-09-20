import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the tagline and the copyright line", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "Gestión y soluciones para empresas de transporte de pasajeros.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("© 2026 iobus. Todos los derechos reservados."),
    ).toBeInTheDocument();
  });

  it("renders the two link columns with their anchors", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", { name: "Qué hacemos" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Empresa" })).toBeInTheDocument();

    const expected: Array<[string, string]> = [
      ["Soluciones", "#soluciones"],
      ["Casos", "#casos"],
      ["Plataforma", "#plataforma"],
      ["Calidad", "#calidad"],
      ["Nosotros", "#nosotros"],
      ["Contacto", "#contacto"],
    ];
    for (const [label, href] of expected) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    }
  });
});
