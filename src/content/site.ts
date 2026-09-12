export const siteConfig = {
  name: "Aprende",
  fullName: "Aprende Centro Multidisciplinar",
  slogan: "Aprende, recupera y prospera.",
  motto: "Lema principal",
  homeHero: {
    eyebrow: "Aprende · Centro Multidisciplinar",
    title: "Atención especializada, centrada en cada persona.",
    description:
      "Un espacio multidisciplinar donde abordamos el aprendizaje, la comunicación y el lenguaje, la terapia psicológica, la neuropsicología y la evaluación desde una atención individualizada.",
    primaryCTA: {
      label: "Hablar por WhatsApp",
      href: null,
      channel: "whatsapp",
    },
    secondaryCTA: {
      label: "Conocer nuestros servicios",
      href: "/servicios",
    },
    slogan: "Aprende, recupera y prospera.",
    image: null,
  },
  phone: "638 21 20 64",
  whatsapp: "+34 638 21 20 64",
  email: "clinicaneuroaprende@gmail.com",
  socialNetworks: {
    instagram: {
      handle: "@aprendepriego",
      url: "https://www.instagram.com/aprendepriego/",
    },
    tiktok: {
      handle: "@aprendepriego",
      url: "https://www.tiktok.com/@aprendepriego",
    },
  },
  address: {
    street: "Calle Trasmonjas 8, Bajo",
    postalCode: "14800",
    locality: "Priego de Córdoba",
    province: "Córdoba",
    country: "España",
    lines: [
      "Calle Trasmonjas 8, Bajo",
      "14800 Priego de Córdoba",
      "Córdoba",
      "España",
    ],
  },
  businessHours: {
    days: "",
    timeSlots: {
      morning: "10:00-13:30",
      afternoon: "17:00-20:00",
    },
  },
} as const;
