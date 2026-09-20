import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the section with the inicio id", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("section#inicio")).toBeInTheDocument();
  });

  it("renders the headline and supporting copy", () => {
    render(<Hero />);
    expect(screen.getByText("GESTIÓN PARA EMPRESAS DE TRANSPORTE")).toBeInTheDocument();
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(
      "Más claridad en los datos.Mejores decisiones.Mayor rentabilidad.",
    );
    expect(
      screen.getByText(/Acompañamos a empresas de transporte de pasajeros/),
    ).toBeInTheDocument();
  });

  it("links the calls to action to the method and contact sections", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: "Conocé cómo trabajamos →" }),
    ).toHaveAttribute("href", "#metodo");
    expect(screen.getByRole("link", { name: "Hablemos" })).toHaveAttribute(
      "href",
      "#contacto",
    );
  });

  it("renders the simulated KPI card", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: "La operación, en una sola lectura" }),
    ).toBeInTheDocument();
    expect(screen.getByText("SIMULACIÓN")).toBeInTheDocument();

    const card = screen.getByRole("heading", {
      name: "La operación, en una sola lectura",
    }).parentElement?.parentElement as HTMLElement;
    const expected: Array<[string, string, string]> = [
      ["Pasajeros", "32.344", "Demanda"],
      ["Kilómetros", "10.065", "Eficiencia"],
      ["IPK", "3,22", "Productividad"],
      ["Recaudación", "↑ 4,3%", "Resultado"],
    ];
    for (const [label, value, tag] of expected) {
      expect(within(card).getByText(label)).toBeInTheDocument();
      expect(within(card).getByText(value)).toBeInTheDocument();
      expect(within(card).getByText(tag)).toBeInTheDocument();
    }
    expect(
      within(card).getByText("La tecnología acompaña. La gestión conduce."),
    ).toBeInTheDocument();
  });
});
