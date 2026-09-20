import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Solutions } from "./Solutions";

describe("Solutions", () => {
  it("renders the soluciones section with its heading", () => {
    const { container } = render(<Solutions />);
    expect(container.querySelector("section#soluciones")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Soluciones" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Empezar por el problema, no por la herramienta."),
    ).toBeInTheDocument();
  });

  it("renders the three solution cards with their footer links", () => {
    render(<Solutions />);
    const cards: Array<[string, string, string, string]> = [
      ["PUERTA DE ENTRADA", "Consultoría de gestión", "Conocé nuestra consultoría →", "#contacto"],
      ["GESTIÓN DIARIA", "Panel de gestión y asistente", "Conocé la plataforma →", "#plataforma"],
      ["PLANIFICACIÓN", "Planificación operativa", "Conocé las herramientas →", "#calidad"],
    ];
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    for (const [eyebrow, title, linkLabel, href] of cards) {
      expect(screen.getByText(eyebrow)).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: title })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: linkLabel })).toHaveAttribute("href", href);
    }
    expect(
      screen.getByText("Diagnóstico · pasajeros · km · IPK · rentabilidad"),
    ).toBeInTheDocument();
  });
});
