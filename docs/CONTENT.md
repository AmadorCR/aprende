# Aprende - Arquitectura de contenidos

Este documento define la arquitectura de informacion inicial de la nueva web de Aprende Centro Multidisciplinar.

Debe leerse junto a:

- `docs/PROJECT.md`
- `docs/DESIGN.md`
- `docs/SEO.md`, cuando exista una estrategia SEO detallada

Este documento no contiene textos comerciales definitivos. Cuando una decision, dato o texto no este confirmado, se mantiene explicitamente como `TBD`.

## 1. Principio general

La nueva web debe tener una arquitectura sencilla, clara y facil de mantener.

La navegacion principal propuesta es:

- Inicio
- Servicios
- Equipo
- El centro

No se creara inicialmente una pagina independiente de contacto.

El contacto debe estar disponible de forma transversal mediante:

- WhatsApp
- email
- Instagram
- TikTok como canal social no prioritario para contacto

El header puede incorporar un CTA de contacto, preferentemente orientado a WhatsApp. El footer debe incluir tambien los canales de contacto.

## 2. Objetivo de la navegacion

Una persona que no conoce Aprende debe poder responder rapidamente:

1. Que es Aprende.
2. Si puede ayudarle con lo que necesita.
3. Que servicios ofrece.
4. Quien trabaja alli.
5. Como es el centro.
6. Como contactar.

Evitar estructuras complejas, menus extensos y rutas que no respondan a una necesidad actual.

## 3. Mapa inicial de paginas

| Pagina | Ruta | Objetivo |
| --- | --- | --- |
| Inicio | `/` | Presentar Aprende, orientar al visitante y facilitar el contacto. |
| Servicios | `/servicios` | Organizar las areas de intervencion y ayudar a identificar servicios relevantes. |
| Servicio individual | `/servicios/[slug]` | Explicar un servicio concreto solo cuando exista contenido suficiente y razon estrategica. |
| Equipo | `/equipo` | Presentar a las personas que forman Aprende con informacion profesional confirmada. |
| El centro | `/centro` | Mostrar las instalaciones y explicar el espacio fisico. |
| Aviso legal | `/aviso-legal` | Contenido juridico pendiente de validacion. |
| Privacidad | `/privacidad` | Contenido juridico pendiente de validacion. |
| Cookies | `/cookies` | Contenido juridico pendiente de validacion. |

No crear por ahora:

- `/contacto`
- blog
- recursos
- noticias
- area privada
- formularios

La arquitectura debe permitir incorporar esas secciones en el futuro si aparece una necesidad real.

## 4. Home

Ruta: `/`

La Home debe ser una pagina de presentacion y orientacion. No debe explicar exhaustivamente todos los servicios.

Principio de contenido:

> La Home orienta. Las paginas especificas explican.

Orden de secciones:

1. Header
2. Hero + Destacados
3. Como podemos ayudarte
4. Equipo
5. El centro
6. Hablamos?
7. Footer

### 4.1 Header

Contenido:

- logo de Aprende
- enlace a Inicio
- enlace a Servicios
- enlace a Equipo
- enlace a El centro
- CTA de contacto

Caracteristicas:

- sencillo
- sticky
- responsive
- logo siempre visible
- sin exceso de enlaces

El CTA principal debe dirigir preferentemente a WhatsApp.

Texto exacto del CTA:

```text
TBD
```

### 4.2 Hero

Debe responder de forma inmediata:

- quien es Aprende
- que tipo de centro es
- a quien atiende
- que puede hacer el visitante despues

Debe aparecer el nombre:

```text
Aprende Centro Multidisciplinar
```

Eslogan oficial:

```text
Aprende, recupera y prospera.
```

Debe existir un mensaje introductorio breve.

Contenido inicial configurable centralizado en `src/content/site.ts`:

```text
eyebrow: "Aprende · Centro Multidisciplinar"
title: "Atencion especializada, centrada en cada persona."
description: "Un espacio multidisciplinar donde abordamos el aprendizaje, la comunicacion y el lenguaje, la terapia psicologica, la neuropsicologia y la evaluacion desde una atencion individualizada."
primaryCTA: "Hablar por WhatsApp"
secondaryCTA: "Conocer nuestros servicios" -> /servicios
slogan: "Aprende, recupera y prospera."
image: pendiente
```

El CTA principal debe utilizar el WhatsApp centralizado del sitio. La zona visual derecha del Hero prioriza destacados activos configurados en `src/content/highlights.ts`; si no hay destacados activos, debe mostrarse un fallback visual discreto preparado para incorporar posteriormente una fotografia real. No debe sustituirse por fotografia de stock.

Los destacados del Hero son contenido local configurable. Deben mostrarse solo cuando `enabled` sea verdadero y sus fechas opcionales de inicio/fin esten vigentes. El maximo visual recomendado es de 3 destacados activos, con navegacion manual y sin autoplay.

Evitar:

- parrafos largos
- estadisticas inventadas
- testimonios inventados
- claims absolutos
- lenguaje comercial agresivo

### 4.3 Como podemos ayudarte

Objetivo:

Permitir que una persona identifique rapidamente el area que puede necesitar sin obligarla a conocer terminologia profesional.

Debe mostrar las principales areas de intervencion mediante elementos visuales sencillos. En Home se presenta como una composicion editorial breve, con las areas activas obtenidas desde `src/content/services.ts`, enlaces hacia `/servicios` y sin listar todos los servicios concretos.

La taxonomia principal de servicios esta definida. Las cinco grandes areas son:

1. Aprendizaje y educacion
2. Comunicacion y lenguaje
3. Terapia psicologica
4. Neuropsicologia
5. Evaluacion y orientacion

Taxonomia principal = las cinco grandes areas mediante las que organizamos los servicios.

Servicios = intervenciones o prestaciones concretas existentes dentro de esas areas.

Mantener la arquitectura conceptual sencilla:

```text
Area
Servicio
```

No crear niveles adicionales de subcategorias salvo que posteriormente exista una necesidad real.

#### Aprendizaje y educacion

Servicios iniciales activos:

- Pedagogia Terapeutica
- Neuroeducacion
- Dificultades de aprendizaje
- Refuerzo academico
- Tecnicas de estudio

Altas capacidades no esta activo actualmente. La estructura de datos debe permitir anadirlo posteriormente modificando contenido, sin cambiar componentes.

#### Comunicacion y lenguaje

Servicios iniciales activos:

- Audicion y Lenguaje
- Comunicacion
- Lenguaje

No utilizar el termino "logopedia" para describir servicios que no sean prestados como logopedia.

#### Terapia psicologica

Servicios iniciales activos:

- Terapia psicologica infantil
- Terapia psicologica en adolescentes
- Terapia psicologica en adultos
- Terapia de pareja
- Terapia familiar

#### Neuropsicologia

Servicios iniciales activos:

- Estimulacion cognitiva
- Habilidades sociales

La lista completa de servicios de Neuropsicologia todavia puede ampliarse posteriormente.

#### Evaluacion y orientacion

Servicios iniciales activos:

- Evaluacion psicopedagogica
- Valoracion de dificultades
- Orientacion a familias
- Necesidades Especificas de Apoyo Educativo (NEAE)

No asumir automaticamente que cada servicio sera una pagina independiente.

Las areas, servicios y profesionales se mantienen como contenido configurable y tipado en `src/content/` y `src/types/`. Los componentes posteriores deberan consumir esos datos, respetar `enabled` para ocultar elementos temporalmente y utilizar `order` para ordenar sin hardcodear listados.

### 4.4 Equipo

Mostrar una presentacion breve del equipo.

Actualmente deben contemplarse:

- Cristina
- Irene

No inventar:

- titulaciones
- especialidades
- numeros de colegiacion
- biografias

La Home debe mostrar solo informacion resumida.

CTA:

```text
Conocer al equipo
```

Destino:

```text
/equipo
```

La arquitectura debe permitir incorporar profesionales adicionales en el futuro.

### 4.5 El centro

Presentacion visual breve de las instalaciones.

Priorizar fotografias reales.

Objetivos:

- mostrar el espacio
- generar confianza
- transmitir cercania
- reforzar que Aprende es un centro fisico real situado en Priego de Cordoba

Texto:

```text
TBD
```

CTA:

```text
Conocer el centro
```

Destino:

```text
/centro
```

No utilizar fotografias de stock para representar las instalaciones.

### 4.6 CTA final / Contacto

La Home debe terminar con una llamada clara a contactar.

Concepto:

```text
Hablamos?
```

Texto definitivo:

```text
TBD
```

Mostrar un bloque de CTA muy simple con:

1. WhatsApp: contacto/conversion principal.
2. Email: contacto secundario.

#### WhatsApp

Canal principal de contacto.

#### Email

Canal alternativo.

No repetir telefono, direccion ni redes sociales en esta seccion. Esos datos se muestran en el Footer.

No utilizar formulario. No solicitar informacion clinica o sensible.

### 4.7 Footer

Debe incluir como minimo:

- logo / Aprende
- nombre completo
- ubicacion
- telefono
- email
- Instagram
- TikTok
- navegacion principal
- aviso legal
- privacidad
- cookies

Datos concretos no confirmados:

```text
TBD
```

Puede aparecer discretamente el eslogan:

```text
Aprende, recupera y prospera.
```

Evitar un footer excesivamente grande.

## 5. Servicios

Ruta: `/servicios`

Objetivo:

Presentar de forma organizada todas las areas disponibles y permitir identificar rapidamente el servicio o area relevante.

No presentar una lista desordenada de especialidades.

### 5.1 Introduccion

Titulo conceptual:

```text
Como podemos ayudarte?
```

Texto introductorio breve:

```text
TBD
```

### 5.2 Organizacion inicial

Utilizar inicialmente estas areas:

1. Aprendizaje y educacion
2. Comunicacion y lenguaje
3. Terapia psicologica
4. Neuropsicologia
5. Evaluacion y orientacion

Esta taxonomia principal esta definida.

### 5.3 Servicios individuales

La arquitectura tecnica contempla:

```text
/servicios/[slug]
```

Esto no significa que todos los servicios deban tener automaticamente una landing propia.

Crear una pagina especifica solo cuando exista una razon:

- suficiente contenido
- necesidad de explicar el servicio
- relevancia para usuarios
- relevancia SEO

Posibles paginas futuras:

```text
/servicios/neuroeducacion
/servicios/terapia-psicologica
/servicios/neuropsicologia
/servicios/evaluacion-psicopedagogica
/servicios/comunicacion-lenguaje
/servicios/tecnicas-estudio
```

Estas URLs son propuestas y deberan validarse mediante la estrategia SEO.

## 6. Plantilla de servicio

Las paginas especificas de servicio deben seguir aproximadamente esta estructura.

### 6.1 Hero

Contenido:

- nombre del servicio
- explicacion breve
- CTA de contacto

### 6.2 Que es

Explicacion clara y comprensible.

### 6.3 Cuando puede ser util

Explicar situaciones o necesidades habituales.

No diagnosticar al visitante.

### 6.4 Como trabajamos

Explicar el enfoque de Aprende en relacion con ese servicio.

### 6.5 A quien se dirige

Cuando corresponda:

- infancia
- adolescencia
- adultos
- familias

### 6.6 Profesional / area responsable

Mostrar solo informacion profesional confirmada.

### 6.7 CTA final

Contacto mediante:

- WhatsApp
- email

Instagram puede aparecer como canal secundario cuando sea apropiado.

No incluir formulario.

## 7. Equipo

Ruta: `/equipo`

Objetivo:

Presentar a las personas que forman Aprende y transmitir profesionalidad y confianza.

### 7.1 Introduccion

Texto breve sobre el caracter multidisciplinar del centro.

Texto definitivo:

```text
TBD
```

### 7.2 Profesionales

Actualmente:

#### Cristina

La informacion profesional de Cristina Marin ha sido proporcionada directamente por Cristina y se considera contenido real confirmado para la nueva web.

Informacion confirmada:

- Nombre: Cristina Marin
- Rol principal: Neuroeducadora
- Roles secundarios: Pedagogia Terapeutica (PT) y Audicion y Lenguaje (AL)
- Formacion principal:
  - Doctora en Innovacion Didactica y Formacion del Profesorado.
  - Especialista en Pedagogia Terapeutica (PT).
  - Especialista en Audicion y Lenguaje (AL).
- Bio y forma de trabajar: contenido real confirmado, centralizado en `src/content/professionals.ts`.
- Areas relacionadas: Aprendizaje y educacion, Comunicacion y lenguaje, Neuropsicologia, Evaluacion y orientacion.

Cristina no debe asociarse a Terapia psicologica.

#### Irene

Informacion:

- Nombre publicado: Irene Zamora
- Rol principal publicado: Psicoterapeuta
- Numero de colegiada publicado: AN-12620
- Responsabilidad publicada: Area de Psicoterapia y Acompanamiento Psicologico y Familiar
- Formacion publicada pendiente de validacion final con Irene:
  - Grado en Psicologia
  - Experta en Terapia Familiar Sistemica
  - Experta en Neuropsicologia Infantil
  - Master en Psicologia General Sanitaria
  - Master en Atencion Temprana y TDAH

Los datos de Irene proceden de la web anterior y estan pendientes de validacion final por Irene antes de considerarse contenido definitivo de la nueva web. Los campos `shortBio`, `bio` y `workingApproach`, cuando existan en datos de Irene, son PLACEHOLDERS temporales y deben revisarse antes de publicarse.

Para cada profesional, la estructura debe poder contener:

- fotografia
- nombre
- funcion
- titulaciones relevantes
- areas de trabajo
- breve presentacion

No inventar ninguna informacion.

No convertir las biografias en curriculums excesivamente largos.

La arquitectura debe admitir nuevos profesionales.

## 8. El centro

Ruta: `/centro`

Objetivo:

Mostrar las instalaciones y explicar que tipo de espacio es Aprende.

Debe apoyarse principalmente en contenido visual real.

### 8.1 Contenido potencial

- presentacion breve
- fotografias de instalaciones
- diferentes espacios
- ubicacion
- filosofia del espacio
- accesibilidad fisica, solo si existe informacion confirmada
- como llegar, si posteriormente resulta util

No inventar caracteristicas de las instalaciones.

### 8.2 Galeria

Debe estar preparada para utilizar fotografias reales.

Evitar carruseles complejos salvo que exista una razon de UX.

Preferir una composicion visual sencilla y responsive.

## 9. Contacto

No crear inicialmente una ruta `/contacto`.

Los canales de contacto estaran disponibles en:

- header
- Home
- paginas de servicios
- footer
- otras paginas cuando sea relevante

### 9.1 WhatsApp

Canal principal.

Numero visible:

```text
638 21 20 64
```

Formato tecnico internacional:

```text
+34 638 21 20 64
```

### 9.2 Email

```text
clinicaneuroaprende@gmail.com
```

### 9.3 Instagram

```text
@aprendepriego
https://www.instagram.com/aprendepriego/
```

### 9.4 TikTok

```text
@aprendepriego
https://www.tiktok.com/@aprendepriego
```

TikTok es un canal social de Aprende, pero no un canal de contacto prioritario.

### 9.5 Direccion

```text
Calle Trasmonjas 8, Bajo
14800 Priego de Córdoba
Córdoba
España
```

La direccion debe mantenerse como dato estructurado reutilizable para footer, SEO, datos estructurados e informacion de contacto.

### 9.6 Horario

Franjas horarias confirmadas:

```text
Manana: 10:00-13:30
Tarde: 17:00-20:00
```

Los dias concretos de apertura siguen pendientes de confirmacion. No generar todavia `openingHours` de Schema.org ni asumir apertura de lunes a viernes o todos los dias.

## 10. Paginas legales

Rutas:

- `/aviso-legal`
- `/privacidad`
- `/cookies`

El contenido juridico definitivo sera proporcionado o validado posteriormente.

No generar textos legales definitivos automaticamente.

## 11. Contenido futuro

La arquitectura debe permitir incorporar en el futuro:

- recursos
- articulos
- noticias
- nuevos profesionales
- nuevos servicios

No crear ahora una seccion de blog o recursos solo porque pueda ser necesaria en el futuro.

Aplicar YAGNI.

## 12. Reglas de redaccion

El contenido de Aprende debe utilizar lenguaje:

- profesional
- comprensible
- cercano
- directo
- respetuoso

Evitar lenguaje:

- excesivamente clinico cuando no sea necesario
- infantilizado
- comercial agresivo
- grandilocuente
- generico

Evitar expresiones como:

- transforma tu vida
- alcanza tu maximo potencial
- descubre la mejor version de ti
- resultados garantizados
- soluciones para todo
- metodo revolucionario

No utilizar lenguaje que pueda implicar garantias de resultados.

## 13. Cantidad de texto

Principio:

```text
La Home orienta. Las paginas especificas explican.
```

Home:

- contenido breve
- orientacion rapida
- pocas ideas por seccion

Servicios:

- contenido intermedio
- organizacion clara por areas
- posibilidad de ampliar cuando sea necesario

Landing especifica de servicio:

- contenido suficiente para explicar correctamente el servicio
- estructura semantica adecuada
- utilidad para usuarios
- capacidad de trabajar SEO sin keyword stuffing

No reducir artificialmente el contenido de paginas SEO solo por mantener una estetica minimalista.

## 14. CTA

Prioridad general:

1. WhatsApp
2. Navegacion hacia servicios o informacion relevante
3. Email
4. Instagram
5. TikTok

Instagram no debe sustituir a un canal directo de contacto cuando la intencion del usuario sea solicitar informacion o cita.
TikTok debe tratarse como presencia social y descubrimiento, no como canal de contacto prioritario.

Los CTA deben ser concretos. Evitar textos ambiguos cuando pueda utilizarse una accion clara.

## 15. Informacion pendiente

Mantener explicitamente como `TBD`:

- lema
- dias concretos de apertura
- textos definitivos
- validacion final de la informacion profesional de Irene
- textos placeholder de `shortBio`, `bio` y `workingApproach` de Irene
- que servicios tendran landing propia
- fotografias disponibles
- imagen del Hero
- CTA exactos
- posibles nuevos profesionales

No resolver automaticamente estos puntos.

## 16. Principio final

Cuando exista conflicto entre mostrar mas informacion y mantener claridad:

1. priorizar claridad en la Home
2. ofrecer ampliacion en paginas especificas
3. mantener suficiente contenido semantico donde sea necesario para SEO

La web debe permitir que alguien que no conoce Aprende entienda rapidamente:

```text
que es, que ofrece, quien trabaja alli y como contactar.
```
