import type { ServiceArea } from "@/types/service";

// Editable service detail copy for the /servicios in-page interaction.
// These texts are centralized here so final reviewed copy can replace them without component changes.
export const serviceAreas = [
  {
    id: "aprendizaje-educacion",
    slug: "aprendizaje-educacion",
    name: "Aprendizaje y educación",
    shortDescription:
      "Apoyo en dificultades de aprendizaje, técnicas de estudio, autonomía y estrategias educativas.",
    enabled: true,
    order: 1,
    services: [
      {
        id: "pedagogia-terapeutica",
        slug: "pedagogia-terapeutica",
        name: "Pedagogía Terapéutica",
        shortDescription: "",
        detail: {
          introduction:
            "Acompañamiento educativo especializado para favorecer el aprendizaje, la autonomía y la participación del alumnado desde una intervención adaptada a sus necesidades.",
          focus: [
            "Diseño de estrategias de aprendizaje ajustadas al perfil de cada persona.",
            "Apoyo en habilidades instrumentales, organización y autonomía escolar.",
            "Coordinación orientativa con la familia para facilitar continuidad fuera del centro.",
          ],
          audience:
            "Puede ser útil para niños, niñas y adolescentes que necesitan apoyo específico en su proceso educativo o presentan dificultades para seguir el ritmo académico habitual.",
        },
        enabled: true,
        featured: false,
        order: 1,
        hasDetailPage: false,
      },
      {
        id: "neuroeducacion",
        slug: "neuroeducacion",
        name: "Neuroeducación",
        shortDescription: "",
        detail: {
          introduction:
            "Intervención educativa que tiene en cuenta cómo aprende cada persona para adaptar las estrategias, los tiempos y la forma de trabajar.",
          focus: [
            "Atención, memoria, planificación y otras habilidades relacionadas con el aprendizaje.",
            "Estrategias para comprender, practicar y consolidar contenidos.",
            "Orientación para mejorar hábitos y confianza ante las tareas escolares.",
          ],
          audience:
            "Puede ayudar a alumnado que necesita entender mejor su forma de aprender y construir estrategias más eficaces para estudiar y afrontar las tareas.",
        },
        enabled: true,
        featured: false,
        order: 2,
        hasDetailPage: false,
      },
      {
        id: "dificultades-aprendizaje",
        slug: "dificultades-aprendizaje",
        name: "Dificultades de aprendizaje",
        shortDescription: "",
        detail: {
          introduction:
            "Apoyo para identificar y abordar dificultades que interfieren en el aprendizaje, siempre desde una mirada individualizada y prudente.",
          focus: [
            "Lectura, escritura, razonamiento, comprensión y procesos básicos de aprendizaje.",
            "Detección de barreras que dificultan el rendimiento o la autonomía.",
            "Propuestas de trabajo adaptadas al momento evolutivo y educativo.",
          ],
          audience:
            "Puede ser útil cuando una familia observa esfuerzo elevado, bloqueo, bajo rendimiento o dificultades persistentes en tareas escolares concretas.",
        },
        enabled: true,
        featured: false,
        order: 3,
        hasDetailPage: false,
      },
      {
        id: "refuerzo-academico",
        slug: "refuerzo-academico",
        name: "Refuerzo académico",
        shortDescription: "",
        detail: {
          introduction:
            "Apoyo académico orientado a reforzar contenidos, mejorar la organización y acompañar el estudio de forma clara y estructurada.",
          focus: [
            "Comprensión y práctica de contenidos escolares.",
            "Organización de tareas, tiempos de estudio y seguimiento semanal.",
            "Acompañamiento para ganar seguridad y autonomía progresiva.",
          ],
          audience:
            "Puede encajar con alumnado que necesita apoyo continuado para afianzar contenidos o mejorar su forma de organizar el trabajo escolar.",
        },
        enabled: true,
        featured: false,
        order: 4,
        hasDetailPage: false,
      },
      {
        id: "tecnicas-estudio",
        slug: "tecnicas-estudio",
        name: "Técnicas de estudio",
        shortDescription: "",
        detail: {
          introduction:
            "Trabajo específico sobre hábitos, métodos y estrategias de estudio para que la persona aprenda a estudiar con más orden y sentido.",
          focus: [
            "Planificación, gestión del tiempo y preparación de exámenes.",
            "Subrayado, esquemas, resúmenes y estrategias de repaso.",
            "Autonomía, constancia y revisión de la propia forma de estudiar.",
          ],
          audience:
            "Puede ser útil para estudiantes que dedican tiempo al estudio pero necesitan mejorar organización, método o seguridad ante evaluaciones.",
        },
        enabled: true,
        featured: false,
        order: 5,
        hasDetailPage: false,
      },
    ],
  },
  {
    id: "comunicacion-lenguaje",
    slug: "comunicacion-lenguaje",
    name: "Comunicación y lenguaje",
    shortDescription:
      "Intervención en comunicación, lenguaje y necesidades relacionadas con Audición y Lenguaje.",
    enabled: true,
    order: 2,
    services: [
      {
        id: "audicion-lenguaje",
        slug: "audicion-lenguaje",
        name: "Audición y Lenguaje",
        shortDescription: "",
        detail: {
          introduction:
            "Intervención centrada en necesidades relacionadas con Audición y Lenguaje, comunicación y desarrollo lingüístico.",
          focus: [
            "Comprensión, expresión y uso funcional del lenguaje.",
            "Comunicación en contextos cotidianos y educativos.",
            "Orientaciones para acompañar el lenguaje desde la familia.",
          ],
          audience:
            "Puede ser útil para niños, niñas o adolescentes con necesidades relacionadas con comunicación, lenguaje oral o participación comunicativa.",
        },
        enabled: true,
        featured: false,
        order: 1,
        hasDetailPage: false,
      },
      {
        id: "comunicacion",
        slug: "comunicacion",
        name: "Comunicación",
        shortDescription: "",
        detail: {
          introduction:
            "Apoyo para favorecer la comunicación funcional, la expresión de necesidades y la participación en distintos contextos.",
          focus: [
            "Intención comunicativa, turnos, comprensión y expresión.",
            "Recursos comunicativos adaptados a la persona y su entorno.",
            "Acompañamiento a familias para facilitar la comunicación diaria.",
          ],
          audience:
            "Puede encajar cuando existen dificultades para expresar, comprender o participar de manera cómoda en la comunicación cotidiana.",
        },
        enabled: true,
        featured: false,
        order: 2,
        hasDetailPage: false,
      },
      {
        id: "lenguaje",
        slug: "lenguaje",
        name: "Lenguaje",
        shortDescription: "",
        detail: {
          introduction:
            "Intervención orientada a mejorar aspectos del lenguaje que influyen en la comprensión, la expresión y el aprendizaje.",
          focus: [
            "Vocabulario, estructura de frases, comprensión y narración.",
            "Uso del lenguaje en situaciones sociales y escolares.",
            "Estrategias para reforzar el lenguaje de forma natural y progresiva.",
          ],
          audience:
            "Puede ser útil cuando se observan dificultades para comprender instrucciones, expresarse con claridad o usar el lenguaje según la edad y el contexto.",
        },
        enabled: true,
        featured: false,
        order: 3,
        hasDetailPage: false,
      },
    ],
  },
  {
    id: "terapia-psicologica",
    slug: "terapia-psicologica",
    name: "Terapia psicológica",
    shortDescription:
      "Acompañamiento psicológico en infancia, adolescencia, edad adulta, pareja y familia.",
    enabled: true,
    order: 3,
    services: [
      {
        id: "terapia-psicologica-infantil",
        slug: "terapia-psicologica-infantil",
        name: "Terapia psicológica infantil",
        shortDescription: "",
        detail: {
          introduction:
            "Acompañamiento psicológico para la infancia, adaptado a la edad y al contexto familiar, con una intervención cercana y respetuosa.",
          focus: [
            "Gestión emocional, conducta, autoestima y habilidades de afrontamiento.",
            "Acompañamiento ante cambios, miedos, dificultades relacionales o malestar.",
            "Orientación a la familia para comprender y acompañar mejor el proceso.",
          ],
          audience:
            "Puede ser útil para niños y niñas que atraviesan malestar emocional, dificultades de conducta o situaciones que afectan a su bienestar cotidiano.",
        },
        enabled: true,
        featured: false,
        order: 1,
        hasDetailPage: false,
      },
      {
        id: "terapia-psicologica-adolescentes",
        slug: "terapia-psicologica-adolescentes",
        name: "Terapia psicológica en adolescentes",
        shortDescription: "",
        detail: {
          introduction:
            "Espacio de acompañamiento para adolescentes que necesitan comprender lo que les ocurre y encontrar recursos para afrontar su día a día.",
          focus: [
            "Regulación emocional, autoestima, relaciones y toma de decisiones.",
            "Acompañamiento ante ansiedad, tristeza, cambios vitales o conflictos.",
            "Trabajo coordinado con la familia cuando resulta conveniente.",
          ],
          audience:
            "Puede encajar con adolescentes que expresan malestar, bloqueo, dificultades relacionales o necesidad de un espacio profesional de escucha.",
        },
        enabled: true,
        featured: false,
        order: 2,
        hasDetailPage: false,
      },
      {
        id: "terapia-psicologica-adultos",
        slug: "terapia-psicologica-adultos",
        name: "Terapia psicológica en adultos",
        shortDescription: "",
        detail: {
          introduction:
            "Acompañamiento psicológico para personas adultas que buscan comprender su situación y desarrollar recursos personales de afrontamiento.",
          focus: [
            "Gestión emocional, estrés, ansiedad, autoestima y relaciones.",
            "Acompañamiento en momentos de cambio, bloqueo o dificultad personal.",
            "Clarificación de necesidades, límites y estrategias de autocuidado.",
          ],
          audience:
            "Puede ser útil para personas adultas que sienten malestar, sobrecarga o dificultades personales y desean iniciar un proceso de acompañamiento.",
        },
        enabled: true,
        featured: false,
        order: 3,
        hasDetailPage: false,
      },
      {
        id: "terapia-pareja",
        slug: "terapia-pareja",
        name: "Terapia de pareja",
        shortDescription: "",
        detail: {
          introduction:
            "Espacio de trabajo para parejas que necesitan revisar su forma de comunicarse, resolver conflictos o tomar decisiones con acompañamiento profesional.",
          focus: [
            "Comunicación, escucha y expresión de necesidades.",
            "Gestión de conflictos, acuerdos y dinámicas de relación.",
            "Acompañamiento en etapas de cambio o desgaste relacional.",
          ],
          audience:
            "Puede ser útil para parejas que atraviesan dificultades de comunicación, conflictos recurrentes o dudas sobre cómo cuidar la relación.",
        },
        enabled: true,
        featured: false,
        order: 4,
        hasDetailPage: false,
      },
      {
        id: "terapia-familiar",
        slug: "terapia-familiar",
        name: "Terapia familiar",
        shortDescription: "",
        detail: {
          introduction:
            "Intervención orientada a comprender dinámicas familiares y favorecer formas de relación más claras, cuidadas y funcionales.",
          focus: [
            "Comunicación familiar, normas, límites y convivencia.",
            "Acompañamiento ante conflictos, cambios o etapas de transición.",
            "Orientación para mejorar la cooperación entre miembros de la familia.",
          ],
          audience:
            "Puede ser útil para familias que necesitan apoyo para gestionar conflictos, cambios familiares o dificultades de convivencia.",
        },
        enabled: true,
        featured: false,
        order: 5,
        hasDetailPage: false,
      },
    ],
  },
  {
    id: "neuropsicologia",
    slug: "neuropsicologia",
    name: "Neuropsicología",
    shortDescription:
      "Intervención orientada a procesos cognitivos, estimulación cognitiva y habilidades sociales.",
    enabled: true,
    order: 4,
    services: [
      {
        id: "estimulacion-cognitiva",
        slug: "estimulacion-cognitiva",
        name: "Estimulación cognitiva",
        shortDescription: "",
        detail: {
          introduction:
            "Trabajo orientado a mantener, reforzar o entrenar procesos cognitivos mediante actividades adaptadas a la persona.",
          focus: [
            "Atención, memoria, planificación, razonamiento y flexibilidad cognitiva.",
            "Actividades graduadas según necesidades, ritmo y objetivos.",
            "Estrategias para favorecer autonomía en tareas cotidianas o educativas.",
          ],
          audience:
            "Puede ser útil para personas que necesitan reforzar habilidades cognitivas por dificultades observadas, cambios evolutivos o necesidades de apoyo específicas.",
        },
        enabled: true,
        featured: false,
        order: 1,
        hasDetailPage: false,
      },
      {
        id: "habilidades-sociales",
        slug: "habilidades-sociales",
        name: "Habilidades sociales",
        shortDescription: "",
        detail: {
          introduction:
            "Intervención para mejorar la forma de relacionarse, expresar necesidades y participar en situaciones sociales con mayor seguridad.",
          focus: [
            "Comunicación, escucha, turnos, empatía y resolución de conflictos.",
            "Comprensión de situaciones sociales y práctica de respuestas adecuadas.",
            "Autoestima, seguridad personal y participación en grupo.",
          ],
          audience:
            "Puede ser útil para infancia, adolescencia o personas que encuentran dificultades para relacionarse, expresar límites o desenvolverse socialmente.",
        },
        enabled: true,
        featured: false,
        order: 2,
        hasDetailPage: false,
      },
    ],
  },
  {
    id: "evaluacion-orientacion",
    slug: "evaluacion-orientacion",
    name: "Evaluación y orientación",
    shortDescription:
      "Evaluación psicopedagógica, valoración de dificultades y orientación a familias.",
    enabled: true,
    order: 5,
    services: [
      {
        id: "evaluacion-psicopedagogica",
        slug: "evaluacion-psicopedagogica",
        name: "Evaluación psicopedagógica",
        shortDescription: "",
        detail: {
          introduction:
            "Proceso de valoración orientado a comprender el perfil de aprendizaje de una persona y orientar las decisiones educativas y familiares.",
          focus: [
            "Recogida de información sobre aprendizaje, contexto y necesidades.",
            "Exploración de habilidades relevantes para el rendimiento y la autonomía.",
            "Orientaciones prácticas para familia y entorno educativo cuando proceda.",
          ],
          audience:
            "Puede ser útil cuando existen dudas sobre el aprendizaje, el rendimiento, la evolución escolar o las necesidades de apoyo de un alumno o alumna.",
        },
        enabled: true,
        featured: false,
        order: 1,
        hasDetailPage: false,
      },
      {
        id: "valoracion-dificultades",
        slug: "valoracion-dificultades",
        name: "Valoración de dificultades",
        shortDescription: "",
        detail: {
          introduction:
            "Primera aproximación profesional para comprender dificultades observadas y orientar qué pasos pueden ser adecuados.",
          focus: [
            "Escucha de la demanda y análisis de la situación actual.",
            "Identificación de áreas que requieren exploración o intervención.",
            "Orientación inicial sobre opciones de apoyo y próximos pasos.",
          ],
          audience:
            "Puede ser útil para familias o personas que no tienen claro qué ocurre, qué servicio necesitan o cómo empezar a abordar una dificultad.",
        },
        enabled: true,
        featured: false,
        order: 2,
        hasDetailPage: false,
      },
      {
        id: "orientacion-familias",
        slug: "orientacion-familias",
        name: "Orientación a familias",
        shortDescription: "",
        detail: {
          introduction:
            "Espacio de orientación para ayudar a las familias a comprender necesidades, tomar decisiones y acompañar mejor en casa.",
          focus: [
            "Pautas educativas, comunicación familiar y acompañamiento emocional.",
            "Comprensión de dificultades de aprendizaje, conducta o desarrollo.",
            "Coordinación de criterios para actuar con más claridad y calma.",
          ],
          audience:
            "Puede ser útil para familias que buscan orientación profesional ante dudas educativas, emocionales o de convivencia.",
        },
        enabled: true,
        featured: false,
        order: 3,
        hasDetailPage: false,
      },
      {
        id: "necesidades-especificas-apoyo-educativo",
        slug: "necesidades-especificas-apoyo-educativo",
        name: "Necesidades Específicas de Apoyo Educativo (NEAE)",
        shortDescription: "",
        detail: {
          introduction:
            "Acompañamiento relacionado con necesidades específicas de apoyo educativo, orientado a comprender la situación y adaptar la intervención.",
          focus: [
            "Identificación de necesidades educativas y barreras para el aprendizaje.",
            "Estrategias de apoyo, autonomía y adaptación de la forma de estudiar.",
            "Orientación a familias para favorecer continuidad y seguimiento.",
          ],
          audience:
            "Puede ser útil para alumnado con necesidades educativas que requieren apoyos ajustados, orientación familiar o intervención psicopedagógica.",
        },
        enabled: true,
        featured: false,
        order: 4,
        hasDetailPage: false,
      },
    ],
  },
] satisfies ServiceArea[];
