import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Platform } from "./Platform";

describe("Platform", () => {
  it("renders the plataforma section with its heading", () => {
    const { container } = render(<Platform />);
    expect(container.querySelector("section#plataforma")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Plataforma" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Consultar la operación sin perder trazabilidad."),
    ).toBeInTheDocument();
  });

  it("lists the example queries", () => {
    render(<Platform />);
    const queries = screen.getByText("EJEMPLOS DE CONSULTAS").parentElement as HTMLElement;
    for (const query of [
      "¿Por qué bajó el IPK del ramal B?",
      "¿Dónde hay kilómetros improductivos?",
      "¿Qué cambió desde ayer?",
      "¿Qué servicios conviene revisar?",
      "¿Hubo cambios normativos?",
    ]) {
      expect(within(queries).getByText(query)).toBeInTheDocument();
    }
  });

  it("describes the four parts of an answer", () => {
    render(<Platform />);
    const anatomy = screen.getByText("LA RESPUESTA DEBE INCLUIR").parentElement as HTMLElement;
    const expected: Array<[string, string]> = [
      ["Hallazgo", "Qué está pasando."],
      ["Fuente", "De dónde sale."],
      ["Impacto", "Por qué importa."],
      ["Próximo paso", "Qué revisar o hacer."],
    ];
    for (const [title, text] of expected) {
      expect(within(anatomy).getByText(title)).toBeInTheDocument();
      expect(within(anatomy).getByText(text)).toBeInTheDocument();
    }
    expect(
      within(anatomy).getByText(
        "Una herramienta para consultar y gestionar mejor la operación.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the simulated assistant conversation", () => {
    render(<Platform />);
    expect(screen.getByText("Asistente iobus")).toBeInTheDocument();
    expect(screen.getByText("SIMULACIÓN")).toBeInTheDocument();

    for (const label of ["HALLAZGO", "FUENTE", "IMPACTO", "PRÓXIMO PASO"]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
    expect(
      screen.getByText(/El IPK del ramal B cayó de 3,28 a 3,05/),
    ).toBeInTheDocument();
    expect(screen.getByText(/SUBE \+ hoja de ruta/)).toBeInTheDocument();
    expect(screen.getByText(/Unos 340 km diarios/)).toBeInTheDocument();
    expect(screen.getByText(/Revisar la franja 9–12 h/)).toBeInTheDocument();
    expect(screen.getByText("Preguntá sobre la operación…")).toBeInTheDocument();
  });

  it("shows the user question and the suggestion chips", () => {
    render(<Platform />);
    // The question appears once in the query list and once as the chat message.
    expect(
      screen.getAllByText("¿Por qué bajó el IPK del ramal B?"),
    ).toHaveLength(2);
    // Chips repeat three of the example queries.
    expect(screen.getAllByText("¿Dónde hay kilómetros improductivos?")).toHaveLength(2);
    expect(screen.getAllByText("¿Qué cambió desde ayer?")).toHaveLength(2);
    expect(screen.getAllByText("¿Hubo cambios normativos?")).toHaveLength(2);
  });
});
