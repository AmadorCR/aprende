import type { Professional } from "@/types/professional";

export const professionals = [
  {
    id: "cristina-marin",
    slug: "cristina-marin",
    name: "Cristina Marín",
    role: "Neuroeducadora",
    secondaryRoles: ["Pedagogía Terapéutica (PT)", "Audición y Lenguaje (AL)"],
    professionalRegistration: "",
    shortBio:
      "Neuroeducadora, Doctora en Educación y especialista en Pedagogía Terapéutica y Audición y Lenguaje. Acompaña procesos de aprendizaje, comunicación, lenguaje y orientación educativa desde una intervención individualizada.",
    bio: `Soy Cristina, neuroeducadora, Doctora en Educación y especialista en Pedagogía Terapéutica y Audición y Lenguaje. Mi trabajo se centra en comprender cómo aprende cada persona para poder ofrecer una intervención individualizada, basada en sus necesidades, fortalezas y ritmo de aprendizaje.

En Aprende acompaño principalmente a niños y adolescentes con dificultades de aprendizaje, necesidades educativas, dificultades en comunicación y lenguaje o problemas relacionados con la organización y las estrategias de estudio. También realizo evaluación y orientación educativa y trabajo conjuntamente con las familias cuando el proceso lo requiere.

Mi formación académica, la investigación y la experiencia práctica me permiten abordar cada caso desde una perspectiva educativa rigurosa, intentando que cada intervención tenga un propósito claro y pueda trasladarse al día a día de la persona.`,
    workingApproach:
      `Mi forma de trabajar parte de conocer a la persona antes que centrarnos únicamente en una dificultad o diagnóstico. No entiendo la intervención como una sucesión de fichas o actividades aisladas, sino como un proceso en el que primero necesitamos saber qué está ocurriendo, qué capacidades tiene la persona, dónde aparecen las dificultades y qué estrategias pueden ayudarle.

Trabajo desde una intervención individualizada, con objetivos concretos y adaptados a cada caso. Intento que las actividades tengan sentido y que aquello que trabajamos en sesión pueda generalizarse al colegio, al estudio, a casa y a la vida cotidiana.

También considero fundamental respetar los ritmos de cada persona. Busco generar un espacio de confianza, pero manteniendo una intervención estructurada y profesional.

Cuando el caso lo requiere, mantengo coordinación con la familia y con otros profesionales o centros educativos, porque entiendo que una intervención funciona mejor cuando existe una visión conjunta y coherente de las necesidades de la persona.

En definitiva, mi forma de trabajar combina evaluación, individualización, estrategias prácticas, acompañamiento y seguimiento, con el objetivo de que la persona no solo consiga realizar una tarea, sino que comprenda mejor cómo aprende y adquiera herramientas que le permitan avanzar con mayor autonomía.`,
    education: [
      "Doctora en Innovación Didáctica y Formación del Profesorado.",
      "Especialista en Pedagogía Terapéutica (PT).",
      "Especialista en Audición y Lenguaje (AL).",
    ],
    specializations: [
      "Neuroeducación.",
      "Dificultades de aprendizaje.",
      "Evaluación e intervención educativa.",
      "Comunicación y lenguaje.",
      "Necesidades específicas de apoyo educativo.",
      "Lengua de Signos.",
    ],
    workAreas: [
      "Neuroeducación.",
      "Dificultades de aprendizaje.",
      "Pedagogía Terapéutica.",
      "Comunicación y lenguaje.",
      "Técnicas y estrategias de estudio.",
      "Autonomía y organización del aprendizaje.",
      "Evaluación psicopedagógica.",
      "Estimulación cognitiva.",
      "Habilidades sociales.",
      "Intervención y acompañamiento en necesidades específicas de apoyo educativo.",
      "Orientación y acompañamiento a familias.",
    ],
    experienceAreas: [
      "Educación e intervención individualizada con niños y adolescentes.",
      "Dificultades de aprendizaje y necesidades específicas de apoyo educativo.",
      "Desarrollo de estrategias de aprendizaje y autonomía.",
      "Intervención en comunicación y lenguaje.",
      "Evaluación y orientación educativa.",
      "Investigación y formación en el ámbito educativo.",
      "Divulgación y participación en actividades académicas relacionadas con educación y neuroeducación.",
    ],
    areas: [
      "aprendizaje-educacion",
      "comunicacion-lenguaje",
      "neuropsicologia",
      "evaluacion-orientacion",
    ],
    image: {
      src: "/images/team/cristina-marin.jpg",
      alt: "Cristina Marín",
    },
    enabled: true,
    order: 1,
  },
  {
    id: "irene-zamora",
    slug: "irene-zamora",
    name: "Irene Zamora",
    role: "Psicoterapeuta",
    secondaryRoles: [],
    professionalRegistration: "AN-12620",
    // PLACEHOLDER pendiente de validacion por Irene antes de publicarse como texto definitivo.
    shortBio:
      "Acompana procesos psicologicos y familiares desde su formacion en psicologia sanitaria, terapia familiar y neuropsicologia infantil.",
    // PLACEHOLDER pendiente de validacion por Irene antes de publicarse como texto definitivo.
    bio: "",
    // PLACEHOLDER pendiente de validacion por Irene antes de publicarse como texto definitivo.
    workingApproach:
      "Trabaja desde un acompanamiento psicologico cercano, profesional y adaptado a cada situacion.",
    education: [
      "Grado en Psicologia",
      "Experta en Terapia Familiar Sistemica",
      "Experta en Neuropsicologia Infantil",
      "Master en Psicologia General Sanitaria",
      "Master en Atencion Temprana y TDAH",
    ],
    specializations: [
      "Area de Psicoterapia y Acompanamiento Psicologico y Familiar",
    ],
    workAreas: [],
    experienceAreas: [],
    areas: ["terapia-psicologica", "neuropsicologia"],
    image: {
      src: "/images/team/irene-zamora.jpg",
      alt: "Irene Zamora",
    },
    enabled: true,
    order: 2,
  },
] satisfies Professional[];
