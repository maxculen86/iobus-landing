import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AboutUs } from "./AboutUs";

describe("AboutUs", () => {
  it("renders the nosotros section with its heading", () => {
    const { container } = render(<AboutUs />);
    expect(container.querySelector("section#nosotros")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Nosotros" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Conocemos el transporte. Trabajamos para mejorarlo."),
    ).toBeInTheDocument();
  });

  it("renders the mission and vision cards", () => {
    render(<AboutUs />);
    expect(screen.getByText("MISIÓN")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Mejorar la gestión del transporte de pasajeros.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Acompañar a las empresas en la mejora operativa y económica/),
    ).toBeInTheDocument();
    expect(screen.getByText("VISIÓN")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Ser referentes en gestión del transporte.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Ser reconocidos por conocimiento del sector/),
    ).toBeInTheDocument();
  });

  it("renders the six values", () => {
    render(<AboutUs />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Nuestros valores" }),
    ).toBeInTheDocument();
    const values: Array<[string, string]> = [
      ["Pasajero", "Respeto por quien viaja."],
      ["Integridad", "Información defendible."],
      ["Compromiso", "Involucrarnos con el problema."],
      ["Personas", "Valorar experiencia y desarrollo."],
      ["Mejora continua", "Observar, actuar y medir."],
      ["Resultados", "Beneficios concretos y sostenibles."],
    ];
    for (const [title, text] of values) {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });
});
