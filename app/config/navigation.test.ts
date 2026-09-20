import {
  SECTION_IDS,
  contactLink,
  footerColumns,
  headerLinks,
} from "./navigation";

const idFromHref = (href: string) => href.replace(/^#/, "");

describe("navigation config", () => {
  it("lists the eight header anchors in design order", () => {
    expect(headerLinks.map((link) => link.label)).toEqual([
      "Desafíos",
      "Soluciones",
      "Análisis",
      "Plataforma",
      "Casos",
      "Método",
      "Calidad",
      "Nosotros",
    ]);
  });

  it("points every header and footer link at a known section id", () => {
    const footerLinks = footerColumns.flatMap((column) => column.links);
    const allLinks = [...headerLinks, contactLink, ...footerLinks];

    for (const link of allLinks) {
      expect(link.href.startsWith("#")).toBe(true);
      expect(SECTION_IDS).toContain(idFromHref(link.href));
    }
  });

  it("declares the sections in page order", () => {
    expect(SECTION_IDS).toEqual([
      "inicio",
      "desafios",
      "soluciones",
      "analisis",
      "plataforma",
      "casos",
      "metodo",
      "calidad",
      "nosotros",
      "contacto",
    ]);
  });
});
