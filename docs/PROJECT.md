# Aprende Centro Multidisciplinar

Este documento define que es el proyecto Aprende, cuales son sus objetivos principales y que restricciones deben respetar futuros agentes Codex que trabajen en este repositorio.

Este archivo es una fuente de contexto permanente. No define el sistema visual completo, la arquitectura definitiva de contenidos ni la estrategia SEO detallada. Esos aspectos se documentaran en archivos especificos dentro de `docs/`.

## Identidad del proyecto

- Nombre completo: Aprende Centro Multidisciplinar.
- Nombre corto de marca: Aprende.
- Eslogan oficial: "Aprende, recupera y prospera."
- Ubicacion del centro: Priego de Cordoba, Cordoba, Espana.
- Tipo de proyecto: web corporativa informativa para un centro multidisciplinar.

El eslogan forma parte de la identidad de marca, pero no debe repetirse de forma excesiva en la web. Debe estar centralizado como contenido/configuracion y no hardcodeado repetidamente en componentes.

Se esta valorando incorporar un lema de marca adicional. Ese lema todavia no tiene texto definitivo, pero debe tratarse como contenido configurable y centralizado. No debe inventarse ni tratarse como definitivo hasta que exista una decision explicita.

## Web existente

La organizacion dispone actualmente de una web:

<https://www.neuroaprende.net/>

La nueva web no debe considerarse un simple rediseno de la web existente.

La web actual podra utilizarse posteriormente como referencia para recuperar informacion valida, pero la nueva web tendra arquitectura, jerarquia de contenidos, diseno y experiencia de usuario propios.

No se deben copiar automaticamente textos, estructura ni diseno de la web anterior.

## Naturaleza de la web

La web sera principalmente informativa y estara orientada a:

- presentar el centro;
- presentar sus profesionales;
- explicar sus servicios;
- mostrar las instalaciones;
- facilitar el contacto directo con Aprende.

La web sera principalmente estatica. Actualmente no existe necesidad de base de datos, autenticacion, cuentas de usuario, backend propio, APIs internas complejas ni gestion de estado global.

No deben incorporarse estas tecnologias salvo que aparezca posteriormente un requisito real.

## Objetivos principales

La nueva web debe:

1. Presentar Aprende de forma profesional.
2. Explicar de manera clara que servicios ofrece el centro.
3. Facilitar que una persona identifique rapidamente si Aprende puede ayudarle.
4. Presentar al equipo profesional.
5. Mostrar las instalaciones y transmitir confianza.
6. Facilitar el contacto directo con Aprende.
7. Mejorar el posicionamiento SEO, especialmente el SEO local.
8. Funcionar correctamente en movil, tablet y escritorio.
9. Ser rapida, accesible y sencilla de mantener.
10. Permitir incorporar nuevos servicios y profesionales en el futuro sin necesidad de redisenar la aplicacion.

## Publico

La web no debe disenarse exclusivamente para publico infantil.

Aprende trabaja o puede dirigirse a:

- infancia;
- adolescencia;
- adultos;
- familias;
- parejas;
- personas que necesitan apoyo educativo;
- personas que necesitan atencion psicologica;
- personas que buscan valoracion o evaluacion;
- familias que necesitan orientacion.

Por este motivo, el diseno debe evitar una estetica excesivamente infantil.

## Areas generales

La taxonomia principal de servicios esta definida. Las cinco grandes areas son:

1. Aprendizaje y educacion.
2. Comunicacion y lenguaje.
3. Terapia psicologica.
4. Neuropsicologia.
5. Evaluacion y orientacion.

Taxonomia principal = las cinco grandes areas mediante las que organizamos los servicios.

Servicios = intervenciones o prestaciones concretas existentes dentro de esas areas.

Los servicios iniciales activos se organizan dentro de las cinco areas y se mantienen como contenido configurable en `src/content/services.ts`.

Entre los servicios o lineas de trabajo actualmente activos se encuentran:

- pedagogia terapeutica;
- neuroeducacion;
- dificultades de aprendizaje;
- refuerzo academico;
- tecnicas de estudio;
- audicion y lenguaje;
- comunicacion;
- lenguaje;
- terapia psicologica infantil;
- terapia psicologica en adolescentes;
- terapia psicologica en adultos;
- terapia de pareja;
- terapia familiar;
- estimulacion cognitiva;
- habilidades sociales;
- evaluacion psicopedagogica;
- valoracion de dificultades;
- orientacion a familias;
- necesidades especificas de apoyo educativo.

Estimulacion cognitiva y habilidades sociales quedan actualmente asociadas al area principal de Neuropsicologia.

Altas capacidades no esta activo actualmente, pero la arquitectura de datos debe permitir incorporarlo posteriormente sin modificar componentes.

No debe existir una categoria principal denominada "Desarrollo". La organizacion concreta de servicios se desarrolla en `docs/CONTENT.md`.

La arquitectura debe permitir incorporar nuevas disciplinas y profesionales en el futuro.

## Equipo

La nueva etapa del centro esta encabezada actualmente por:

- Cristina;
- Irene.

La arquitectura debe permitir anadir y retirar profesionales facilmente.

La informacion profesional, biografia y forma de trabajar de Cristina Marin han sido proporcionadas directamente por Cristina y se consideran contenido real confirmado. La informacion de Irene continua pendiente de validacion/actualizacion final.

No deben inventarse titulaciones, numeros de colegiacion, especialidades ni credenciales.

## Identidad visual general

La identidad corporativa utiliza:

- Brand Cyan: `#60C4F9`;
- Brand Purple: `#9D5ACC`;
- Brand Pink: `#BA46B4`.

La identidad visual incorpora un degradado corporativo que transiciona entre rosa/morado, violeta, azul y cian. Los tonos intermedios son:

- Brand Violet: `#7D75E3`;
- Brand Blue: `#69A1F0`.

La web debe utilizar estos colores de manera controlada.

Principios generales:

- fondos predominantemente claros;
- texto predominantemente oscuro;
- colores corporativos utilizados como acentos;
- posibilidad de utilizar colores corporativos en determinadas palabras o textos destacados;
- buen contraste;
- diseno limpio;
- diseno profesional;
- evitar saturacion visual;
- utilizar el degradado corporativo con moderacion como recurso de identidad, no como fondo automatico de grandes secciones.

Las reglas completas del sistema visual se definen en `docs/DESIGN.md`.

## Filosofia de contenido

La nueva web debe reducir considerablemente la cantidad de texto visible respecto a una web corporativa tradicional.

Principio general:

> Menos texto, mayor claridad.

Cada seccion debe comunicar una idea principal de forma rapida.

Cuando un servicio necesite explicacion adicional, se utilizaran paginas especificas o mecanismos de ampliacion de informacion.

Reducir texto no significa perjudicar el SEO. Las paginas especificas de servicios deberan contener suficiente contenido semantico para explicar correctamente cada servicio y permitir su posicionamiento.

## Navegacion

Debe existir una barra superior sencilla.

Caracteristicas:

- visible durante la navegacion;
- logo de Aprende siempre visible;
- navegacion sencilla;
- responsive;
- sin menus excesivamente complejos.

La arquitectura definitiva de navegacion se especificara posteriormente.

## Contacto

La web no tendra formulario de contacto.

No implementar:

- formularios de contacto;
- almacenamiento de solicitudes;
- backend para contacto;
- base de datos de contactos.

Los canales principales de contacto seran:

1. WhatsApp.
2. Correo electronico.
3. Instagram como presencia social, confianza y descubrimiento.
4. TikTok como presencia social y descubrimiento.

TikTok no debe tratarse como canal de contacto prioritario.

Estos canales deben presentarse mediante iconos claramente reconocibles y llamadas a la accion sencillas.

El objetivo es minimizar la friccion para contactar con el centro.

## Conversion

La principal conversion de la web consiste en que una persona interesada contacte con Aprende.

Los principales CTA deben dirigir a:

- WhatsApp;
- email;
- Instagram cuando sea apropiado para presencia social o confianza.

TikTok puede enlazarse como canal social, pero no debe sustituir a WhatsApp ni email como via de contacto.

No deben utilizarse CTA genericos sin una finalidad clara.

## SEO

El posicionamiento SEO es una prioridad del proyecto.

Debe prestarse especial atencion al SEO local relacionado con Aprende y Priego de Cordoba.

La estrategia SEO detallada se definira en `docs/SEO.md`.

La busqueda de posicionamiento nunca debe justificar:

- keyword stuffing;
- textos artificiales;
- repeticion excesiva;
- contenido creado exclusivamente para motores de busqueda.

El contenido debe escribirse primero para personas y estructurarse correctamente para buscadores.

## Responsive

El proyecto debe seguir un enfoque mobile-first.

La experiencia movil es prioritaria debido a que una parte importante del trafico puede proceder de redes sociales y busquedas realizadas desde smartphone.

La web debe funcionar correctamente en:

- smartphones;
- tablets;
- ordenadores.

## Accesibilidad

Objetivo minimo: WCAG 2.2 AA cuando resulte aplicable.

Debe prestarse especial atencion a:

- contraste;
- navegacion mediante teclado;
- focus visible;
- HTML semantico;
- textos alternativos;
- tamano de elementos interactivos;
- labels accesibles;
- reduccion de movimiento cuando el usuario lo solicite.

## Rendimiento

La web debe priorizar:

- carga rapida;
- imagenes optimizadas;
- JavaScript limitado;
- dependencias minimas;
- ausencia de animaciones innecesarias.

Evitar incorporar librerias pesadas para resolver necesidades sencillas.

## Arquitectura tecnica

Stack inicial:

- Next.js;
- TypeScript;
- Tailwind CSS;
- App Router.

Principios:

- arquitectura sencilla;
- componentes reutilizables;
- contenido separado de presentacion;
- configuracion centralizada;
- evitar sobreingenieria;
- evitar dependencias innecesarias.

La web sera principalmente estatica.

Actualmente no existe necesidad de:

- base de datos;
- autenticacion;
- cuentas de usuario;
- backend propio;
- APIs internas complejas;
- gestion de estado global.

No incorporar estas tecnologias salvo que aparezca posteriormente un requisito real.

## Mantenibilidad

La aplicacion debe permitir modificar facilmente:

- profesionales;
- servicios;
- datos de contacto;
- textos;
- imagenes;
- informacion corporativa.

Evitar duplicar informacion en multiples componentes.

Los datos reutilizables deberan mantenerse centralizados siempre que resulte razonable.

## Fotografias

Se priorizaran fotografias reales de:

- instalaciones;
- profesionales;
- centro;
- actividades cuando proceda y exista autorizacion adecuada.

Evitar depender de fotografias de stock genericas.

No utilizar imagenes de menores sin que exista confirmacion expresa de que pueden utilizarse.

## Estilo que debe evitarse

La web no debe parecer:

- una web infantil;
- una plantilla generica de clinica;
- una landing comercial agresiva;
- una web generada automaticamente por IA.

Evitar especialmente:

- gradientes excesivos;
- blur decorativo innecesario;
- exceso de cards;
- animaciones constantes;
- iconografia generica sin proposito;
- textos de marketing vacios;
- claims absolutos;
- fotografias de stock genericas;
- elementos visuales sin funcion.

## Claims y rigor

No realizar afirmaciones medicas, psicologicas, educativas o terapeuticas que no esten respaldadas por informacion proporcionada explicitamente.

No utilizar expresiones absolutas como:

- garantizamos resultados;
- solucionamos cualquier problema;
- tenemos un remedio para todo;
- resultados asegurados.

No inventar informacion sobre tratamientos, resultados, experiencia profesional o cualificaciones.

## Legal y privacidad

La arquitectura contempla:

- aviso legal;
- politica de privacidad;
- politica de cookies.

El contenido juridico definitivo se incorporara posteriormente.

No inventar textos juridicos definitivos.

La web no debe solicitar informacion clinica o sensible mediante formularios.

## Evolucion

El proyecto debe estar preparado para evolucionar.

Posibles necesidades futuras:

- nuevos profesionales;
- nuevas disciplinas;
- nuevos servicios;
- articulos o recursos;
- mejoras SEO;
- nuevos canales de contacto.

Esto no justifica implementar funcionalidades que actualmente no son necesarias.

Principio de evolucion:

> Preparar la arquitectura para crecer sin construir hoy funcionalidades que todavia no necesitamos.

## Relacion con otros documentos

Este archivo define que es el proyecto y cuales son sus objetivos.

Otros documentos definiran aspectos especificos:

- `docs/DESIGN.md`: sistema visual y experiencia de usuario.
- `docs/CONTENT.md`: arquitectura de informacion, paginas y contenido.
- `docs/SEO.md`: estrategia SEO.
- `AGENTS.md`: reglas operativas que deben seguir los agentes que modifiquen el repositorio.

En caso de duda sobre una decision de producto, no debe inventarse. Debe senalarse como pendiente de decision.
