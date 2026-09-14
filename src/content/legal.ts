import { siteConfig } from "@/content/site";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalPageContent = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const legalSiteInfo = {
  name: siteConfig.fullName,
  addressLines: siteConfig.address.lines,
  email: siteConfig.email,
  phone: siteConfig.phone,
  // TODO: completar NIF/CIF cuando el titular lo confirme.
  taxId: null,
  // TODO: completar razon social o titularidad juridica cuando se confirme.
  legalOwner: null,
  // TODO: completar domicilio fiscal si difiere de la direccion publica confirmada.
  fiscalAddress: null,
  // TODO: validar texto legal definitivo con asesoramiento profesional antes de produccion.
} as const;

export const legalPages = {
  legalNotice: {
    title: "Aviso legal",
    intro:
      "Esta pagina recoge informacion general sobre el uso de este sitio web. Algunos datos legales del titular estan pendientes de confirmacion y se incorporaran cuando sean validados.",
    sections: [
      {
        title: "Identificacion del titular",
        paragraphs: [
          `${legalSiteInfo.name} es el nombre publico del centro.`,
          `Direccion publica: ${legalSiteInfo.addressLines.join(", ")}.`,
          `Correo electronico de contacto: ${legalSiteInfo.email}.`,
          `Telefono de contacto: ${legalSiteInfo.phone}.`,
        ],
      },
      {
        title: "Objeto del sitio web",
        paragraphs: [
          "Este sitio web tiene finalidad informativa. Presenta el centro, sus areas de trabajo, el equipo y los canales de contacto disponibles.",
          "La informacion publicada no sustituye una valoracion profesional individual ni constituye asesoramiento juridico, sanitario o educativo personalizado.",
        ],
      },
      {
        title: "Condiciones de uso",
        paragraphs: [
          "La persona usuaria se compromete a utilizar este sitio web de forma responsable, conforme a la legislacion aplicable, la buena fe y el respeto a terceros.",
          "No esta permitido utilizar el sitio para fines ilicitos, danar su funcionamiento o intentar acceder a zonas, sistemas o datos no autorizados.",
        ],
      },
      {
        title: "Propiedad intelectual e industrial",
        paragraphs: [
          "Los contenidos propios de este sitio, incluyendo textos, estructura, diseno, elementos graficos y recursos de marca, pertenecen a sus titulares correspondientes o se utilizan con autorizacion.",
          "No se permite la reproduccion, distribucion o transformacion de los contenidos sin autorizacion, salvo en los casos permitidos por la ley.",
        ],
      },
      {
        title: "Responsabilidad",
        paragraphs: [
          "Se procura que la informacion del sitio sea clara, actualizada y correcta. Aun asi, pueden existir errores u omisiones, especialmente en contenidos pendientes de validacion definitiva.",
          "El centro no se responsabiliza del uso indebido de la informacion publicada ni de decisiones tomadas sin una consulta profesional adecuada.",
        ],
      },
      {
        title: "Enlaces externos",
        paragraphs: [
          "Este sitio puede incluir enlaces a canales externos, como redes sociales o aplicaciones de mensajeria. Esos servicios se rigen por sus propias condiciones y politicas.",
          "La inclusion de un enlace externo no implica control sobre su contenido ni responsabilidad sobre cambios realizados por terceros.",
        ],
      },
      {
        title: "Legislacion aplicable",
        paragraphs: [
          "El uso de este sitio web se rige por la legislacion espanola que resulte aplicable.",
          "Cualquier informacion legal pendiente se completara cuando sea confirmada por la titularidad del centro o por asesoramiento especializado.",
        ],
      },
    ],
  },
  privacy: {
    title: "Politica de privacidad",
    intro:
      "Esta politica explica de forma general como pueden tratarse los datos personales cuando una persona contacta con Aprende Centro Multidisciplinar por los canales disponibles.",
    sections: [
      {
        title: "Responsable del tratamiento",
        paragraphs: [
          "El responsable del tratamiento se completara cuando la titularidad legal del centro este confirmada.",
          `Para consultas relacionadas con privacidad puede utilizarse el correo de contacto: ${legalSiteInfo.email}.`,
        ],
      },
      {
        title: "Datos que pueden tratarse",
        paragraphs: [
          "Actualmente la web no incluye formulario de contacto. Los datos personales pueden recibirse si la persona decide contactar voluntariamente por WhatsApp, email, telefono o redes sociales.",
        ],
        items: [
          "Datos identificativos y de contacto facilitados por la persona interesada.",
          "Informacion incluida voluntariamente en el mensaje enviado.",
          "Datos tecnicos o de cuenta que puedan tratar las plataformas externas utilizadas para comunicarse.",
        ],
      },
      {
        title: "Finalidades",
        paragraphs: [
          "Los datos facilitados se utilizaran para responder consultas, gestionar comunicaciones solicitadas por la persona interesada y mantener el contacto relacionado con los servicios del centro.",
          "No se recogen datos mediante formularios en esta web.",
        ],
      },
      {
        title: "Base juridica",
        paragraphs: [
          "La base juridica concreta dependera del tipo de comunicacion y de la relacion que exista con la persona interesada.",
          "De forma general, el tratamiento puede apoyarse en la solicitud realizada por la propia persona, en el consentimiento cuando corresponda o en obligaciones legales aplicables.",
        ],
      },
      {
        title: "Conservacion",
        paragraphs: [
          "Los datos se conservaran durante el tiempo necesario para atender la consulta o mantener la relacion correspondiente, y posteriormente durante los plazos que puedan exigir las obligaciones legales aplicables.",
          "Los plazos concretos deben validarse legalmente antes de considerarse definitivos.",
        ],
      },
      {
        title: "Destinatarios",
        paragraphs: [
          "No se han definido proveedores, encargados de tratamiento ni transferencias internacionales especificas para este sitio web.",
          "Cuando la comunicacion se realice mediante servicios externos, como WhatsApp, email o redes sociales, esos servicios pueden tratar datos conforme a sus propias politicas.",
        ],
      },
      {
        title: "Derechos",
        paragraphs: [
          "Las personas interesadas pueden solicitar el acceso, rectificacion, supresion, oposicion, limitacion del tratamiento y portabilidad de sus datos cuando proceda.",
          `Para ejercer estos derechos o plantear una consulta de privacidad, puede escribirse a ${legalSiteInfo.email}.`,
        ],
      },
      {
        title: "Seguridad",
        paragraphs: [
          "Se aplicaran medidas razonables para proteger la informacion recibida y evitar accesos no autorizados, perdida o uso indebido.",
          "No debe enviarse informacion sensible por canales no adecuados si no es necesario para la consulta inicial.",
        ],
      },
      {
        title: "Contacto",
        paragraphs: [
          `Email: ${legalSiteInfo.email}.`,
          `Telefono: ${legalSiteInfo.phone}.`,
        ],
      },
      {
        title: "Cambios en la politica",
        paragraphs: [
          "Esta politica podra actualizarse cuando cambien los canales de contacto, las herramientas utilizadas por la web o la informacion legal confirmada.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politica de cookies",
    intro:
      "Esta pagina describe el uso de cookies en el estado actual del sitio web. No se ha implementado todavia banner de consentimiento, analitica ni herramientas externas.",
    sections: [
      {
        title: "Uso actual de cookies",
        paragraphs: [
          "En el estado actual del sitio no se han incorporado cookies no esenciales, herramientas de analitica, publicidad, mapas incrustados ni servicios externos de marketing.",
          "Si en el futuro se anaden herramientas que utilicen cookies o tecnologias similares, esta politica se actualizara antes de su uso efectivo.",
        ],
      },
      {
        title: "Cookies tecnicas",
        paragraphs: [
          "El sitio puede requerir elementos tecnicos propios del navegador o de la plataforma de alojamiento para funcionar correctamente, pero no se ha configurado una recogida propia de cookies con fines de analitica o marketing.",
        ],
      },
      {
        title: "Servicios externos",
        paragraphs: [
          "Los enlaces a WhatsApp, email, Instagram o TikTok llevan a servicios externos. Al acceder a ellos, esas plataformas pueden aplicar sus propias politicas de cookies y privacidad.",
          "Este sitio no controla las cookies que puedan establecer terceros fuera de sus propias paginas.",
        ],
      },
      {
        title: "Cambios futuros",
        paragraphs: [
          "Si se incorporan analitica, mapas, embeds, herramientas de marketing u otros servicios externos, se revisara esta politica y se valorara la necesidad de un sistema de consentimiento adecuado.",
        ],
      },
      {
        title: "Gestion desde el navegador",
        paragraphs: [
          "La persona usuaria puede revisar, bloquear o eliminar cookies desde la configuracion de su navegador. Las opciones concretas dependen del navegador utilizado.",
        ],
      },
    ],
  },
} satisfies Record<string, LegalPageContent>;
