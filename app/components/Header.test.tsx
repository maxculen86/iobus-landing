import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Header } from "./Header";

const EXPECTED_LINKS: Array<[string, string]> = [
  ["Desafíos", "#desafios"],
  ["Soluciones", "#soluciones"],
  ["Análisis", "#analisis"],
  ["Plataforma", "#plataforma"],
  ["Casos", "#casos"],
  ["Método", "#metodo"],
  ["Calidad", "#calidad"],
  ["Nosotros", "#nosotros"],
];

describe("Header", () => {
  it("links the logo to the hero section", () => {
    render(<Header />);
    const logoLink = screen.getAllByRole("link", { name: /iobus/i })[0];
    expect(logoLink).toHaveAttribute("href", "#inicio");
  });

  it("renders the eight section anchors in order", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Principal" });
    const links = within(nav).getAllByRole("link");

    expect(links.map((link) => [link.textContent, link.getAttribute("href")])).toEqual(
      EXPECTED_LINKS,
    );
  });

  it("renders the Contacto call to action and the theme toggle", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Contacto" })).toHaveAttribute(
      "href",
      "#contacto",
    );
    expect(
      screen.getByRole("button", { name: "Cambiar tema" }),
    ).toBeInTheDocument();
  });

  describe("mobile menu", () => {
    it("is closed by default", () => {
      render(<Header />);
      expect(
        screen.queryByRole("navigation", { name: "Menú móvil" }),
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Abrir menú" }),
      ).toHaveAttribute("aria-expanded", "false");
    });

    it("lists the same eight anchors plus Contacto when opened", () => {
      render(<Header />);
      fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));

      const menu = screen.getByRole("navigation", { name: "Menú móvil" });
      const links = within(menu).getAllByRole("link");
      expect(
        links.map((link) => [link.textContent, link.getAttribute("href")]),
      ).toEqual([...EXPECTED_LINKS, ["Contacto", "#contacto"]]);
    });

    it("closes after choosing a link", () => {
      render(<Header />);
      fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
      const menu = screen.getByRole("navigation", { name: "Menú móvil" });

      fireEvent.click(within(menu).getByRole("link", { name: "Casos" }));

      expect(
        screen.queryByRole("navigation", { name: "Menú móvil" }),
      ).not.toBeInTheDocument();
    });
  });
});
