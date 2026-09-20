export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** Section ids rendered on the landing page, in page order. */
export const SECTION_IDS = [
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
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const homeLink: NavLink = { label: "Inicio", href: "#inicio" };

export const headerLinks: NavLink[] = [
  { label: "Desafíos", href: "#desafios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Análisis", href: "#analisis" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Casos", href: "#casos" },
  { label: "Método", href: "#metodo" },
  { label: "Calidad", href: "#calidad" },
  { label: "Nosotros", href: "#nosotros" },
];

export const contactLink: NavLink = { label: "Contacto", href: "#contacto" };

export const footerColumns: FooterColumn[] = [
  {
    title: "Qué hacemos",
    links: [
      { label: "Soluciones", href: "#soluciones" },
      { label: "Casos", href: "#casos" },
      { label: "Plataforma", href: "#plataforma" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Calidad", href: "#calidad" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];
