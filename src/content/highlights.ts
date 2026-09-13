export type Highlight = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  href: string | null;
  enabled: boolean;
  startDate?: string;
  endDate?: string;
  order: number;
};

// DEMO content only. Replace these items with real Aprende highlights before production.
export const highlights = [
  {
    id: "demo-neae",
    title: "DEMO · Becas NEAE",
    description: "Ejemplo de aviso destacado sobre plazos y solicitudes.",
    image: {
      src: "/images/highlights/demo-neae.svg",
      alt: "Gráfico demo para becas NEAE",
    },
    href: null,
    enabled: true,
    startDate: "2026-01-01",
    endDate: "2027-12-31",
    order: 1,
  },
  {
    id: "demo-agenda",
    title: "DEMO · Apertura de agenda",
    description: "Ejemplo de destacado para comunicar la apertura de agenda.",
    image: {
      src: "/images/highlights/demo-agenda.svg",
      alt: "Gráfico demo para apertura de agenda",
    },
    href: null,
    enabled: true,
    startDate: "2026-01-01",
    endDate: "2027-12-31",
    order: 2,
  },
  {
    id: "demo-taller",
    title: "DEMO · Taller en Aprende",
    description: "Ejemplo de destacado para comunicar una actividad del centro.",
    image: {
      src: "/images/highlights/demo-taller.svg",
      alt: "Gráfico demo para taller en Aprende",
    },
    href: null,
    enabled: true,
    startDate: "2026-01-01",
    endDate: "2027-12-31",
    order: 3,
  },
] as const satisfies readonly Highlight[];
