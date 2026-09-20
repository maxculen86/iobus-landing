import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Method } from "./Method";

describe("Method", () => {
  it("renders the metodo section with its heading", () => {
    const { container } = render(<Method />);
    expect(container.querySelector("section#metodo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Cómo trabajamos" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Datos reales. Criterio. Acción. Medición."),
    ).toBeInTheDocument();
  });

  it("renders the five numbered steps", () => {
    render(<Method />);
    const steps: Array<[string, string, string]> = [
      ["1", "Observar", "Datos y operación"],
      ["2", "Diagnosticar", "Causa y oportunidad"],
      ["3", "Decidir", "Qué conviene hacer"],
      ["4", "Implementar", "Quién, cómo y cuándo"],
      ["5", "Medir", "Antes y después"],
    ];
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(5);
    for (const [number, title, text] of steps) {
      const heading = screen.getByRole("heading", { level: 3, name: title });
      const card = heading.parentElement as HTMLElement;
      expect(card).toHaveTextContent(number);
      expect(card).toHaveTextContent(text);
    }
  });

  it("renders the traceability strip", () => {
    render(<Method />);
    expect(screen.getByText("TRAZABILIDAD")).toBeInTheDocument();
    expect(
      screen.getByText("Fuente · período · criterio de cálculo · estado de validación."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("La mejora debe poder explicarse y defenderse."),
    ).toBeInTheDocument();
  });
});
