import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Quality } from "./Quality";

describe("Quality", () => {
  it("renders the calidad section with its heading", () => {
    const { container } = render(<Quality />);
    expect(container.querySelector("section#calidad")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Calidad y mejora continua" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Detectar oportunidades es sólo el principio. La mejora debe implementarse y sostenerse.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the six checklist items", () => {
    render(<Quality />);
    const items: Array<[string, string]> = [
      ["Planes de acción", "Implementación, responsables y seguimiento."],
      ["Procesos", "Mapas y procedimientos para ordenar la gestión."],
      ["Capacitación", "Personal operativo y administrativo."],
      ["Factibilidad", "Cambios de parámetros operativos."],
      ["KPIs a medida", "Indicadores adaptados a la empresa."],
      ["Mejora continua", "Seguimiento, revisión y ajuste de acciones."],
    ];
    for (const [title, text] of items) {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    }
    expect(screen.getAllByText("✓")).toHaveLength(6);
  });
});
