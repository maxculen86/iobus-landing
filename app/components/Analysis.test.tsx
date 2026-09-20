import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Analysis } from "./Analysis";

describe("Analysis", () => {
  it("renders the analisis section with its heading", () => {
    const { container } = render(<Analysis />);
    expect(container.querySelector("section#analisis")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Qué analizamos" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("La operación completa, sin perder de vista el negocio."),
    ).toBeInTheDocument();
  });

  it("renders the eight analysis cards", () => {
    render(<Analysis />);
    const cards: Array<[string, string]> = [
      ["Pasajeros", "Cantidad · horarios · paradas · perfiles"],
      ["Kilómetros", "Productivos · vacíos · improductivos"],
      ["IPK", "Línea · ramal · día · hora"],
      ["Recaudación", "Evolución · secciones · aporte"],
      ["Regularidad", "Cabeceras · adelantos · atrasos"],
      ["Conductores", "Rendimiento · seccionamiento"],
      ["Subsidios", "SISTAU · componentes · participación"],
      ["Normativa", "Tarifas · parámetros · requisitos"],
    ];
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(8);
    for (const [title, text] of cards) {
      expect(screen.getByRole("heading", { level: 3, name: title })).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });
});
