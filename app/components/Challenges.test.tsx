import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Challenges } from "./Challenges";

describe("Challenges", () => {
  it("renders the desafios section with its heading and lead paragraph", () => {
    const { container } = render(<Challenges />);
    expect(container.querySelector("section#desafios")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "¿Dónde gana y dónde pierde rentabilidad tu operación?",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/No alcanza con mirar el total de pasajeros o kilómetros/),
    ).toBeInTheDocument();
  });

  it("renders the six challenge cards", () => {
    render(<Challenges />);
    const cards: Array<[string, string]> = [
      ["Kilómetros improductivos", "Oferta donde la demanda no la justifica."],
      ["Demanda no captada", "Pasajeros que no encuentran la oferta adecuada."],
      ["Regularidad", "Adelantos, atrasos y huecos que deterioran el servicio."],
      ["Recaudación", "Datos comerciales sin lectura operativa."],
      ["Productividad", "Diferencias entre ramales, coches y conductores."],
      ["Normativa", "Cambios que exigen reacción y seguimiento."],
    ];
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(6);
    for (const [title, text] of cards) {
      expect(screen.getByRole("heading", { level: 3, name: title })).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });
});
