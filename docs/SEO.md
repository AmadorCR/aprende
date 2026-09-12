# Aprende - Estrategia SEO

Este documento define la estrategia SEO inicial de Aprende Centro Multidisciplinar.

Debe leerse junto a:

- `docs/PROJECT.md`
- `docs/DESIGN.md`
- `docs/CONTENT.md`

Este archivo es exclusivamente documental. No implementa metadata, sitemap, `robots.txt`, JSON-LD, analitica ni cambios de codigo.

## 1. Objetivo

El SEO es una prioridad del proyecto.

El objetivo principal es conseguir visibilidad organica para Aprende Centro Multidisciplinar, especialmente en busquedas relacionadas con sus servicios en Priego de Cordoba y su area geografica relevante.

La estrategia debe combinar:

- SEO local;
- SEO tecnico;
- arquitectura de informacion;
- contenido util;
- rendimiento;
- accesibilidad;
- datos estructurados.

No utilizar tecnicas artificiales de posicionamiento.

## 2. Principio SEO

Aplicar:

> Una pagina debe existir porque responde a una intencion real del usuario, no unicamente porque queramos posicionar una keyword.

Evitar:

- keyword stuffing;
- paginas practicamente duplicadas;
- creacion masiva de landings;
- textos artificialmente largos;
- repetir "Priego de Cordoba" constantemente;
- headings escritos exclusivamente para buscadores;
- contenido oculto;
- claims inventados;
- FAQs creadas unicamente para insertar keywords.

El SEO debe estar orientado primero a usuarios reales y despues a motores de busqueda.

## 3. SEO local

Aprende es un centro fisico situado en:

```text
Calle Trasmonjas 8, Bajo
14800 Priego de Córdoba
Córdoba
España
```

Codigo postal:

```text
14800
```

Telefono:

```text
+34 638 21 20 64
```

El posicionamiento local debe ser prioritario.

La informacion NAP relevante debe mantenerse consistente:

- Name
- Address
- Phone

Nombre:

```text
Aprende Centro Multidisciplinar
```

Direccion:

```text
la direccion oficial confirmada
```

Telefono:

```text
el telefono oficial confirmado
```

No introducir variantes arbitrarias de estos datos entre paginas.

## 4. Area geografica

Ubicacion principal:

```text
Priego de Cordoba
```

Provincia:

```text
Cordoba
```

No crear automaticamente paginas para localidades cercanas.

Ejemplos de estrategia no permitida sin justificacion:

```text
/psicologia-cabra
/psicologia-alcaudete
/psicologia-lucena
```

Solo trabajar otras localidades cuando exista una estrategia real, contenido util y una relacion autentica con el area atendida.

No crear doorway pages.

## 5. Intenciones de busqueda

La estrategia debe contemplar diferentes tipos de intencion.

### Marca

Ejemplos conceptuales:

- Aprende Priego
- Aprende Centro Multidisciplinar
- Aprende Priego de Cordoba

### Servicio + localizacion

Ejemplos conceptuales que deberan validarse posteriormente:

- terapia psicologica Priego de Cordoba
- psicologo Priego de Cordoba
- terapia psicologica infantil Priego de Cordoba
- neuropsicologia Priego de Cordoba
- evaluacion psicopedagogica Priego de Cordoba
- dificultades de aprendizaje Priego de Cordoba
- tecnicas de estudio Priego de Cordoba
- pedagogia terapeutica Priego de Cordoba

Estos ejemplos no significan que exista volumen suficiente ni que debamos crear automaticamente una landing para cada busqueda.

Investigacion de keywords definitiva:

```text
TBD
```

### Informacional

En una fase futura podrian existir busquedas relacionadas con:

- dificultades de aprendizaje;
- tecnicas de estudio;
- comunicacion y lenguaje;
- orientacion a familias;
- NEAE;
- terapia psicologica;
- neuropsicologia;
- estimulacion cognitiva;
- habilidades sociales.

No crear todavia un blog unicamente para capturar estas busquedas.

## 6. Arquitectura SEO inicial

Rutas principales:

```text
/
/servicios
/equipo
/centro
/aviso-legal
/privacidad
/cookies
```

La arquitectura permite:

```text
/servicios/[slug]
```

Las paginas individuales de servicios se crearan unicamente cuando exista suficiente justificacion.
La configuracion de servicios puede marcar esa decision con una propiedad de datos como `hasDetailPage`, sin que ello implique crear ahora la pagina ni contenido SEO ficticio.

Posibles rutas a evaluar:

```text
/servicios/neuroeducacion
/servicios/terapia-psicologica
/servicios/neuropsicologia
/servicios/evaluacion-psicopedagogica
/servicios/comunicacion-lenguaje
/servicios/tecnicas-estudio
```

No considerar esta lista definitiva.

No crear inicialmente:

- `/contacto`;
- blog;
- recursos;
- noticias;
- area privada;
- formularios.

## 7. Una intencion principal por pagina

Cada pagina SEO relevante debe tener una intencion principal claramente identificable.

Evitar que multiples paginas compitan por exactamente la misma intencion.

Antes de crear una nueva landing:

1. determinar intencion;
2. comprobar si ya existe una pagina que la cubre;
3. decidir si realmente merece una URL independiente;
4. evitar canibalizacion.

## 8. Home

La Home debe posicionar principalmente:

- marca;
- tipo de centro;
- ubicacion;
- propuesta general.

No intentar posicionar exhaustivamente todos los servicios desde la Home.

Concepto de title inicial:

```text
Aprende Centro Multidisciplinar | Priego de Cordoba
```

Debe validarse posteriormente.

Meta description:

```text
TBD
```

La Home debe mencionar naturalmente:

- Aprende Centro Multidisciplinar;
- Priego de Cordoba;
- principales areas de actividad.

Sin repetir terminos artificialmente.

## 9. Servicios

Ruta:

```text
/servicios
```

Debe funcionar como pagina hub.

Objetivo:

- explicar las areas;
- facilitar navegacion;
- proporcionar contexto semantico;
- enlazar a landings especificas cuando existan.

No intentar que `/servicios` sustituya a todas las paginas especificas.

La organizacion inicial documentada en `docs/CONTENT.md` es:

1. Aprendizaje y educacion
2. Comunicacion y lenguaje
3. Terapia psicologica
4. Neuropsicologia
5. Evaluacion y orientacion

Esta taxonomia principal esta definida. Las paginas concretas de servicios y su estrategia SEO todavia deben validarse.

## 10. Landings de servicios

Cuando exista una landing individual debe contener contenido original y suficiente.

Estructura orientativa:

- H1;
- introduccion;
- que es;
- cuando puede resultar util;
- como trabaja Aprende;
- a quien se dirige;
- informacion profesional relevante;
- ubicacion cuando resulte natural;
- CTA.

No establecer un numero minimo artificial de palabras.

La extension debe responder adecuadamente a la intencion.

No diagnosticar al visitante ni prometer resultados.

## 11. Titles

Cada pagina indexable debe tener un title unico.

Principios:

- descriptivo;
- conciso;
- intencion principal clara;
- marca cuando corresponda;
- localizacion cuando sea relevante.

Evitar:

```text
Inicio | Aprende
```

Preferir titulos descriptivos.

Ejemplo conceptual:

```text
Evaluacion psicopedagogica en Priego de Cordoba | Aprende
```

No utilizar este ejemplo como definitivo hasta validar la estrategia.

Titles definitivos:

```text
TBD
```

## 12. Meta descriptions

Cada pagina SEO relevante debe disponer de una descripcion util y especifica.

No duplicarlas automaticamente.

Las meta descriptions deben:

- explicar el contenido;
- resultar naturales;
- ayudar al usuario a decidir si la pagina responde a su busqueda.

No rellenarlas de keywords.

Descriptions definitivas:

```text
TBD
```

## 13. Headings

Cada pagina debe tener un H1 principal coherente.

Mantener una jerarquia semantica:

```text
H1 -> H2 -> H3
```

No seleccionar headings por tamano visual.

La apariencia se controla mediante CSS.

Evitar multiples headings utilizados unicamente para introducir keywords.

## 14. URLs

Las URLs deben ser:

- cortas;
- descriptivas;
- estables;
- en minusculas;
- sin parametros innecesarios.

Utilizar palabras separadas mediante guiones.

Evitar URLs basadas en:

- IDs;
- fechas;
- estructuras internas;
- categorias innecesariamente profundas.

## 15. Enlazado interno

Crear relaciones naturales entre paginas.

Ejemplo:

```text
Home -> Servicios -> Servicio especifico -> Equipo / profesional relevante -> Contacto
```

Las paginas especificas pueden enlazar a servicios relacionados cuando resulte util.

No crear enlaces internos unicamente para manipular SEO.

Los anchor texts deben describir el destino.

Evitar utilizar constantemente:

```text
haz clic aqui
```

## 16. Canonical

Todas las paginas indexables deben disponer de canonical correcto cuando corresponda.

Evitar multiples URLs para el mismo contenido.

La URL de produccion definitiva:

```text
TBD
```

No hardcodear un dominio definitivo hasta confirmarlo.

## 17. Sitemap

Generar posteriormente un sitemap XML.

Debe contener unicamente URLs:

- canonicas;
- publicas;
- indexables.

No incluir paginas inexistentes o contenido duplicado.

Next.js puede generar el sitemap mediante su mecanismo correspondiente.

No implementarlo durante esta tarea.

## 18. Robots

Crear posteriormente una estrategia de `robots.txt`.

Principio:

permitir rastreo del contenido publico relevante.

No bloquear recursos necesarios para renderizar correctamente la web.

Durante entornos de preview/staging debe evitarse indexacion accidental cuando corresponda.

La configuracion definitiva dependera del hosting.

No implementarlo durante esta tarea.

## 19. Structured Data

Implementar posteriormente datos estructurados mediante JSON-LD cuando sean apropiados.

Para la entidad principal evaluar:

```text
Organization
LocalBusiness
```

Utilizar el tipo mas especifico unicamente cuando represente correctamente la actividad real de Aprende.

No seleccionar automaticamente un subtipo medico o sanitario para todo el centro.

Informacion potencial:

- name;
- alternateName cuando corresponda;
- url;
- logo;
- telephone;
- address;
- sameAs;
- image;
- openingHoursSpecification, cuando tambien esten confirmados los dias concretos de apertura.

No inventar:

- ratings;
- reviews;
- priceRange;
- geo coordinates;
- opening hours;
- servicios;
- acreditaciones.

Datos pendientes:

```text
TBD
```

## 20. Person structured data

Se podra valorar `Person` para profesionales cuando exista informacion publica y confirmada.

No anadir automaticamente:

- titulos;
- credenciales;
- afiliaciones;
- especialidades.

Todo debe corresponder a informacion real proporcionada.

## 21. Service structured data

Se podra valorar `Service` para paginas individuales de servicios.

Utilizar unicamente cuando represente correctamente el contenido real de la pagina.

No generar decenas de servicios estructurados para intentar mejorar posicionamiento.

## 22. Breadcrumbs

Las paginas profundas deberian poder utilizar breadcrumbs.

Ejemplo:

```text
Inicio -> Servicios -> Terapia psicologica
```

Ademas de ayudar a navegacion, se podra evaluar `BreadcrumbList` structured data.

No mostrar breadcrumbs innecesarios en paginas de primer nivel.

## 23. Imagenes y SEO

Las imagenes deben:

- tener nombres descriptivos cuando sea razonable;
- utilizar `alt` util;
- estar optimizadas;
- disponer de dimensiones adecuadas;
- evitar cargas innecesarias.

Ejemplo:

Preferir:

```text
centro-aprende-priego.webp
```

frente a:

```text
IMG_4837.webp
```

cuando sea practico.

El `alt` debe describir la imagen.

No introducir keywords artificialmente en todos los `alt`.

Imagenes decorativas:

```text
alt=""
```

cuando corresponda.

Prioridad de imagenes:

```text
fotografia real > ilustracion > fotografia de stock
```

No utilizar imagenes de menores sin confirmacion expresa de autorizacion.

## 24. Performance

El rendimiento forma parte de la estrategia SEO y UX.

Priorizar:

- Server Components cuando sean apropiados;
- minimo JavaScript cliente;
- imagenes optimizadas;
- fuentes optimizadas;
- lazy loading cuando corresponda;
- evitar dependencias pesadas.

Objetivo de referencia:

Lighthouse alto en:

- Performance;
- Accessibility;
- Best Practices;
- SEO.

No sacrificar UX real unicamente para alcanzar una puntuacion perfecta.

## 25. Core Web Vitals

Prestar atencion especialmente a:

- LCP;
- INP;
- CLS.

Evitar:

- imagenes Hero sin dimensiones;
- fuentes que provoquen layout shift;
- scripts innecesarios;
- JavaScript excesivo;
- animaciones pesadas.

## 26. Mobile SEO

La web debe ser mobile-first.

No ocultar en movil contenido SEO relevante que si aparezca en desktop salvo que exista una razon de UX.

La experiencia movil debe ofrecer el mismo contenido esencial.

## 27. Contenido duplicado

No duplicar descripciones completas entre:

- Home;
- Servicios;
- landings;
- profesionales.

Cada pagina debe tener una funcion.

La Home resume.

Servicios organiza.

Las landings explican.

Equipo presenta profesionales.

## 28. SEO y contenido generado por IA

No publicar automaticamente textos generados sin revision.

Todo contenido debe:

- representar correctamente Aprende;
- aportar informacion real;
- responder a una necesidad;
- ser revisado antes de produccion.

No producir paginas masivamente unicamente para posicionamiento.

## 29. Google Business Profile

La estrategia SEO local debera mantener coherencia con el perfil real de Google Business Profile de Aprende.

Debe existir consistencia especialmente en:

- nombre;
- direccion;
- telefono;
- web;
- horarios;
- categoria de negocio.

Informacion actual del perfil:

```text
TBD
```

La gestion y optimizacion del perfil se realizara como tarea separada.

## 30. Redes sociales y horario confirmado

Instagram y TikTok son canales sociales confirmados de Aprende.

Instagram:

```text
@aprendepriego
https://www.instagram.com/aprendepriego/
```

TikTok:

```text
@aprendepriego
https://www.tiktok.com/@aprendepriego
```

Estas URLs podran utilizarse:

- en footer;
- contacto;
- `sameAs` dentro de structured data cuando corresponda.

TikTok debe considerarse presencia social y descubrimiento, no canal de contacto prioritario.

Los horarios confirmados actualmente son:

```text
Manana: 10:00-13:30
Tarde: 17:00-20:00
```

Los dias concretos de apertura siguen pendientes de confirmacion. No generar todavia `openingHoursSpecification` ni asumir apertura de lunes a viernes o todos los dias.

## 31. Open Graph

Cada pagina relevante debera disponer posteriormente de metadata social adecuada:

- title;
- description;
- URL;
- image.

Crear una imagen Open Graph corporativa cuando se disponga de identidad visual definitiva.

Imagen:

```text
TBD
```

## 32. Favicon y marca

Implementar posteriormente:

- favicon;
- iconos correspondientes;
- metadata de marca.

Utilizar recursos oficiales.

No generar una identidad alternativa.

## 33. Migracion desde neuroaprende.net

La web existente se encuentra actualmente en:

```text
https://www.neuroaprende.net/
```

Cuando la nueva web sustituya a la anterior sera necesario analizar:

- URLs existentes;
- paginas indexadas;
- backlinks relevantes;
- contenido que conserve valor;
- redirects 301 necesarios;
- cambio de dominio si lo hubiera.

No eliminar la web antigua ni sustituir URLs sin realizar previamente este analisis.

Crear un mapa:

```text
URL antigua -> URL nueva
```

antes del despliegue definitivo.

Evitar perdidas innecesarias de autoridad SEO.

## 34. Dominio

Dominio definitivo:

```text
TBD
```

Si se mantiene `neuroaprende.net`, conservar correctamente URLs utiles y redireccionar las modificadas.

Si se cambia de dominio, sera necesaria una estrategia especifica de migracion.

No asumir ninguna de las dos opciones.

## 35. Indexacion de paginas legales

Decidir posteriormente si determinadas paginas legales deben indexarse.

No asumir automaticamente que todas las paginas deben formar parte de la estrategia organica.

## 36. Medicion

Antes de produccion se debera valorar/configurar:

- Google Search Console;
- herramienta de analitica;
- medicion de Core Web Vitals.

Herramienta de analitica:

```text
TBD
```

No instalar Google Analytics ni ninguna plataforma durante esta tarea.

La implementacion debera respetar los requisitos de privacidad y consentimiento aplicables.

## 37. Conversiones

Aunque no exista formulario, deben poder medirse posteriormente eventos importantes, respetando privacidad y consentimiento.

Posibles eventos:

- click WhatsApp;
- click email;
- click Instagram;
- navegacion a servicio;
- click en llamada telefonica cuando exista.

No implementar tracking todavia.

## 38. Investigacion SEO pendiente

Antes de cerrar definitivamente las paginas de servicios debe realizarse investigacion real sobre:

- consultas;
- intencion;
- competencia local;
- resultados actuales;
- variaciones terminologicas;
- oportunidades.

No asumir que el nombre tecnico que utiliza un profesional coincide con el termino que busca una familia.

Ejemplo:

Un servicio puede denominarse profesionalmente de una manera y ser buscado mediante otra expresion.

La arquitectura debe equilibrar rigor profesional e intencion de busqueda.

## 39. KPIs futuros

Una vez publicada la web podran analizarse:

- impresiones organicas;
- clicks organicos;
- CTR;
- consultas;
- posiciones;
- paginas de entrada;
- clicks en WhatsApp;
- clicks en email;
- trafico local;
- Core Web Vitals.

No fijar objetivos numericos sin disponer de baseline.

## 40. Elementos pendientes

Mantener como `TBD`:

- dominio definitivo;
- dias concretos de apertura;
- Google Business Profile;
- keywords definitivas;
- volumenes de busqueda;
- competencia SEO;
- paginas definitivas de servicios;
- titles definitivos;
- descriptions definitivas;
- structured data definitivo;
- herramienta de analitica;
- imagen Open Graph;
- estrategia de migracion;
- redirects;
- datos adicionales de LocalBusiness.

Tambien permanecen pendientes, segun otros documentos del proyecto:

- lema;
- recursos finales de logo;
- sistema definitivo de iconos;
- estilo fotografico final;
- fotografias disponibles;
- informacion completa de Irene;
- CTA exactos.

## Principio final

La estrategia debe seguir este orden:

1. Ayudar al usuario.
2. Representar correctamente a Aprende.
3. Construir una arquitectura clara.
4. Facilitar a los buscadores comprender el contenido.
5. Optimizar segun datos reales despues del lanzamiento.

Nunca invertir ese orden.
