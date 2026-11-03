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
  homeHelpAreas: {
    title: "Cómo podemos ayudarte",
    description:
      "Trabajamos desde distintas áreas para ofrecer una atención adaptada a cada persona, sus necesidades y su momento.",
    cta: {
      label: "Ver todos los servicios",
      href: "/servicios",
    },
  },
  homeTeam: {
    eyebrow: "El equipo",
    title: "Profesionales que trabajan contigo",
    description:
      "Un equipo multidisciplinar que combina diferentes áreas de especialización para ofrecer una atención coordinada e individualizada.",
    profileCTA: {
      label: "Conocer perfil",
      href: "/equipo",
    },
  },
  homeCenter: {
    eyebrow: "El centro",
    title: "Un espacio pensado para acompañarte",
    description:
      "Aprende es un centro multidisciplinar situado en Priego de Córdoba, diseñado para ofrecer un entorno cercano, tranquilo y profesional en el que trabajar de forma individualizada.",
    images: [
      {
        id: "main",
        src: "/images/center/web/Recepción.jpeg",
        alt: "Mostrador de recepción de Aprende",
        label: "Fotografía principal del centro",
        featured: true,
      },
      {
        id: "secondary",
        src: "/images/center/web/Sala de espera.jpeg",
        alt: "Sala de espera junto a la recepción de Aprende",
        label: "Fotografía secundaria del centro",
        featured: false,
      },
    ],
    cta: {
      label: "Conocer el centro",
      href: "/centro",
    },
  },
  homeContact: {
    title: "¿Hablamos?",
    description:
      "Si tienes dudas, quieres contarnos tu caso o necesitas orientación sobre qué servicio puede encajar mejor, puedes escribirnos directamente.",
    primaryCTA: {
      label: "Hablar por WhatsApp",
      channel: "whatsapp",
    },
    secondaryCTA: {
      label: "Escribir por email",
      channel: "email",
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Servicios",
      title: "¿Cómo podemos ayudarte?",
      description:
        "En Aprende trabajamos desde distintas áreas para ofrecer una atención adaptada a las necesidades de cada persona y cada familia.",
      secondaryDescription:
        "Puedes explorar nuestras áreas de trabajo o contactar con nosotros si no tienes claro qué tipo de atención necesitas.",
    },
    contact: {
      title: "¿No sabes qué servicio necesitas?",
      description:
        "Cuéntanos brevemente qué necesitas y te orientaremos sobre la opción que puede encajar mejor contigo.",
      primaryCTA: {
        label: "Hablar por WhatsApp",
        channel: "whatsapp",
      },
      secondaryCTA: {
        label: "Escribir por email",
        channel: "email",
      },
    },
  },
  centerPage: {
    hero: {
      eyebrow: "El centro",
      title: "Un espacio pensado para acompañarte",
      description:
        "Aprende es un centro multidisciplinar situado en Priego de Córdoba, diseñado para ofrecer un entorno cercano, tranquilo y profesional en el que trabajar de forma individualizada.",
      secondaryDescription:
        "Buscamos que cada persona y cada familia encuentre un espacio cómodo, cuidado y adaptado al trabajo que realizamos en las distintas áreas del centro.",
    },
    environment: {
      title: "Un entorno para trabajar con tranquilidad",
      paragraphs: [
        "El espacio de Aprende está pensado para favorecer una atención individualizada y un trabajo tranquilo, tanto con niños y adolescentes como con personas adultas y familias.",
        "La organización del centro busca que cada intervención pueda desarrollarse en un entorno cuidado y profesional, manteniendo una atención cercana y adaptada a las necesidades de cada persona.",
      ],
    },
    location: {
      title: "Dónde estamos",
      description:
        "Estamos en Priego de Córdoba. Puedes utilizar la dirección para localizarnos o escribirnos si necesitas resolver alguna duda antes de venir.",
      mapsUrl: null,
    },
    contact: {
      title: "¿Quieres contactar con nosotros?",
      description:
        "Si quieres resolver alguna duda o contarnos qué necesitas, puedes escribirnos directamente.",
      primaryCTA: {
        label: "Hablar por WhatsApp",
        channel: "whatsapp",
      },
      secondaryCTA: {
        label: "Escribir por email",
        channel: "email",
      },
    },
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
