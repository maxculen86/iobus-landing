import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UseCases } from "./UseCases";

describe("UseCases", () => {
  it("renders the casos section with its heading", () => {
    const { container } = render(<UseCases />);
    expect(container.querySelector("section#casos")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Casos de aplicación" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Problemas concretos que iobus puede ayudar a resolver."),
    ).toBeInTheDocument();
  });

  it("renders the six use-case cards", () => {
    render(<UseCases />);
    const cards: Array<[string, string]> = [
      ["Recuperar pasajeros", "Detectar demanda no captada y reforzar donde existe oportunidad."],
      ["Reducir kilómetros improductivos", "Reasignar oferta sin perder cobertura relevante."],
      ["Mejorar IPK", "Ubicar mejor los mismos recursos."],
      ["Mejorar regularidad", "Reducir huecos, adelantos y atrasos."],
      ["Ordenar recaudación", "Cruzar pasajeros, secciones y comportamiento."],
      ["Cambios operativos", "Fundamentar modificaciones con datos verificables."],
    ];
    for (const [title, text] of cards) {
      expect(screen.getByRole("heading", { level: 3, name: title })).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });

  it("renders the before / action / after case block", () => {
    render(<UseCases />);
    expect(
      screen.getByText("CASO DE APLICACIÓN · LÍNEA ANÓNIMA · SIMULACIÓN"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Recuperar pasajeros sin aumentar kilómetros",
      }),
    ).toBeInTheDocument();

    const columns: Array<[string, string[]]> = [
      ["ANTES", ["31.700 pasajeros / día", "10.200 km", "IPK 3,11"]],
      ["ACCIÓN IOBUS", ["Revisión hora por hora", "Recupero de servicios", "Redistribución de oferta"]],
      ["DESPUÉS", ["32.340 pasajeros / día", "10.065 km", "IPK 3,22"]],
    ];
    for (const [label, lines] of columns) {
      const column = screen.getByText(label).parentElement as HTMLElement;
      for (const line of lines) {
        expect(column).toHaveTextContent(line);
      }
    }
    expect(screen.getByText("Más pasajeros con menos kilómetros.")).toBeInTheDocument();
  });
});
