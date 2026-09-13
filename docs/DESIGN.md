# Aprende - Design System

Este documento define el sistema visual y los principios de experiencia que deben seguir los futuros desarrollos de la web de Aprende Centro Multidisciplinar.

Antes de tomar decisiones visuales o implementar nuevas interfaces, revisar tambien `docs/PROJECT.md`, `docs/CONTENT.md` y `docs/SEO.md` cuando existan criterios relacionados.

## 1. Objetivo visual

La web de Aprende Centro Multidisciplinar debe transmitir principalmente:

- profesionalidad;
- confianza;
- cercania;
- claridad;
- tranquilidad;
- atencion individualizada.

Debe resultar accesible y cercana sin adquirir una estetica infantil.

Aprende trabaja con infancia, adolescencia, adultos, parejas y familias, por lo que la identidad visual debe funcionar para todos estos publicos.

La web debe sentirse moderna y actual, pero no seguir tendencias visuales que puedan quedar obsoletas rapidamente.

## 2. Principio general

La interfaz debe seguir el principio:

> Menos elementos, mayor intencion.

Cada elemento visual debe tener una funcion.

Evitar anadir elementos unicamente para rellenar espacio.

Priorizar:

- espacio en blanco;
- jerarquia visual;
- fotografias reales;
- tipografia;
- composicion;
- colores corporativos utilizados estrategicamente.

## 3. Identidad corporativa

Los colores corporativos de Aprende son:

- Brand Cyan: `#60C4F9`;
- Brand Purple: `#9D5ACC`;
- Brand Pink: `#BA46B4`.

Estos tres colores son los colores principales para el sistema de diseno.

La identidad visual incorpora tambien tonos intermedios del degradado corporativo:

```text
Brand Violet: #7D75E3
Brand Blue:   #69A1F0
```

Violet y Blue funcionan principalmente como tonos intermedios de la identidad/degradado, no como colores principales del sistema.

El degradado corporativo de referencia es:

```css
linear-gradient(
  90deg,
  #BA46B4 0%,
  #9D5ACC 30%,
  #7D75E3 55%,
  #69A1F0 75%,
  #60C4F9 100%
)
```

Aunque el proyecto evita generalmente los degradados decorativos genericos, este degradado es una excepcion porque forma parte de la identidad visual real de Aprende. Debe utilizarse con moderacion.

Usos potenciales:

- identidad de marca;
- determinados detalles;
- elementos destacados;
- recursos graficos;
- determinados tratamientos tipograficos cuando sean apropiados.

No utilizarlo automaticamente como fondo de grandes secciones ni convertir toda la interfaz en un degradado.

## 4. Sistema de color

La web utilizara predominantemente:

### Fondo principal

Blanco o practicamente blanco.

### Fondos secundarios

Grises neutros extremadamente claros o variantes muy suaves derivadas del sistema visual.

### Texto

Gris muy oscuro / practicamente negro.

Evitar negro puro cuando un gris oscuro proporcione mejor integracion visual.

### Colores corporativos

Cian, morado y rosa deben utilizarse como colores de acento.

Usos adecuados:

- botones;
- enlaces;
- iconos;
- estados hover/focus;
- palabras destacadas;
- pequenos elementos graficos;
- identificadores de categorias;
- determinados titulos;
- detalles decorativos discretos.

Evitar:

- grandes bloques saturados innecesariamente;
- parrafos completos en colores corporativos;
- utilizar simultaneamente los tres colores en todos los componentes;
- comprometer el contraste por respetar un color de marca.

La accesibilidad prevalece sobre la estetica.

## 5. Distribucion de colores

No establecer una regla rigida del tipo "cada servicio tiene un color" hasta que se valide visualmente.

Los tres colores pertenecen a una unica identidad.

El sistema debe permitir combinarlos de forma coherente sin convertir la web en una interfaz multicolor.

La pagina debe percibirse como una unica marca.

## 6. Tipografia

La tipografia definitiva de la web sera Inter.

Utilizar una unica familia tipografica.

Pesos previstos:

- Regular 400;
- Medium 500;
- SemiBold 600;
- Bold 700.

Evitar:

- tipografias manuscritas para contenido;
- tipografias infantiles;
- serif ornamentales;
- utilizar varias familias sin necesidad;
- incorporar una segunda tipografia salvo que exista posteriormente una necesidad explicita.

Objetivo:

- maxima legibilidad;
- simplicidad;
- elegancia;
- buena lectura en movil y escritorio;
- neutralidad suficiente para que la personalidad visual proceda principalmente de la identidad de Aprende.

## 7. Jerarquia tipografica

La interfaz debe distinguir claramente:

- H1;
- H2;
- H3;
- body;
- texto secundario;
- labels;
- botones.

Los titulos deben tener presencia, pero evitar tamanos exagerados propios de landing pages promocionales.

En desktop, evitar H1 gigantes que ocupen practicamente toda la pantalla.

En movil, los titulos deben adaptarse mediante tipografia responsive.

Utilizar `clamp()` cuando resulte apropiado.

## 8. Negritas y palabras destacadas

Se permite utilizar colores corporativos en determinadas palabras destacadas.

Ejemplo conceptual:

> "Una forma diferente de **aprender**."

La palabra destacada puede utilizar un color corporativo.

Esta tecnica debe utilizarse con moderacion.

No convertir cada negrita del texto en un color diferente.

No utilizar multiples colores dentro de una misma frase salvo que exista una razon de marca especifica.

## 9. Layout

La web debe utilizar un sistema de contenedores consistente.

Caracteristicas:

- contenido centrado;
- ancho maximo controlado;
- margenes laterales adecuados;
- abundante espacio entre secciones;
- responsive desde movil.

Evitar que los parrafos ocupen todo el ancho disponible en pantallas grandes.

La longitud de linea debe favorecer la lectura.

## 10. Espaciado

Utilizar una escala de espaciado consistente.

Priorizar composiciones con espacio suficiente.

No intentar rellenar todos los espacios vacios.

El espacio en blanco forma parte del diseno.

Las secciones deben distinguirse principalmente mediante:

- espaciado;
- cambios muy suaves de fondo;
- composicion;

y no mediante lineas o cajas innecesarias.

## 11. Bordes

Preferencia por bordes redondeados moderados.

Evitar:

- esquinas completamente cuadradas si rompen con la identidad;
- radios extremadamente grandes en todos los elementos;
- convertir todos los elementos en pills.

Los botones pueden tener un radio mayor que cards o contenedores.

## 12. Sombras

Utilizar sombras unicamente cuando ayuden a comunicar profundidad o interaccion.

Preferencia:

- sombras muy suaves;
- baja opacidad;
- poca elevacion.

Evitar cards con sombras fuertes flotando sobre el fondo.

No utilizar sombras como decoracion sistematica.

## 13. Header

El header debe ser:

- sencillo;
- limpio;
- responsive;
- siempre accesible durante la navegacion.

El logo de Aprende debe permanecer visible.

Preferencia tecnica/visual:

```css
position: sticky;
```

en lugar de `fixed`, salvo que posteriormente exista una razon para cambiarlo.

En desktop debe mostrar:

- logo;
- navegacion principal;
- CTA principal si resulta conveniente.

En movil:

- logo;
- control de navegacion claramente identificable.

No saturar el header con enlaces.

El fondo debe mantener suficiente contraste cuando el usuario haga scroll.

## 14. Logo

El logo de Aprende debe tener presencia suficiente para identificar inmediatamente la marca.

Existen actualmente diferentes variantes del logo de Aprende:

- isotipo circular/espiral;
- logo horizontal;
- logo vertical;
- logotipo basado principalmente en la palabra "Aprende".

El isotipo utiliza el degradado corporativo.

La nueva denominacion del centro es:

```text
Aprende Centro Multidisciplinar
```

Algunos recursos graficos existentes contienen todavia el texto:

```text
Centro de Neuropsicologia
```

Estos recursos pueden utilizarse como referencia de identidad, y el isotipo y la palabra/logotipo "Aprende" continuan siendo validos. Las variantes que incluyan "Centro de Neuropsicologia" no deben publicarse como identidad definitiva de la nueva web sin actualizar ese descriptor.

Usos previstos:

- Header desktop: preferencia por version horizontal simplificada `[isotipo] Aprende`.
- Header movil: preferencia por `[isotipo] Aprende` adaptado al espacio disponible.
- Favicon: utilizar unicamente el isotipo.
- Footer: puede utilizar una composicion con `Aprende` y `Centro Multidisciplinar`.
- Hero: no repetir automaticamente un logo grande si la marca ya esta claramente visible en el header.

Preferir recursos:

1. SVG transparente.
2. PNG transparente de alta resolucion.

Evitar JPEG para logos finales cuando exista una alternativa adecuada.

No:

- deformarlo;
- recolorearlo arbitrariamente;
- anadir efectos;
- sombras;
- gradientes;
- animaciones.

Mantener siempre su relacion de aspecto.

Preferir SVG cuando este disponible.

## 15. Hero

La direccion conceptual definida para el Hero de la Home es:

```text
Profesionalidad + cercania
```

El Hero debe comunicar en pocos segundos:

1. quien es Aprende;
2. que tipo de centro es;
3. que puede encontrar el visitante;
4. cual es la siguiente accion.

Debe tener poco texto.

El eslogan oficial:

> "Aprende, recupera y prospera."

puede ocupar una posicion relevante en el Hero.

No repetir el eslogan innecesariamente en otras secciones.

La configuracion inicial del contenido textual del Hero esta centralizada en `src/content/site.ts`. La zona visual derecha del Hero puede mostrar destacados activos gestionados desde `src/content/highlights.ts`. Si no existen destacados activos, debe utilizarse un fallback visual discreto preparado para una futura fotografia real cuando exista material adecuado.

Cuando se disene visualmente, el criterio previsto es:

- Desktop: composicion aproximada 55/45, texto a un lado, destacados activos o fallback visual al otro, dos CTA y eslogan en posicion secundaria.
- Mobile: una sola columna con texto, CTA principal, CTA secundario, destacados activos o fallback visual y eslogan.

Los destacados del Hero deben ser configurables, tener navegacion manual cuando haya varios, no utilizar autoplay y mostrar como maximo recomendado tres elementos activos. Su visibilidad se controla mediante `enabled`, `startDate`, `endDate` y `order`.

Preferencia fotografica:

1. fotografia real de Cristina e Irene en el centro;
2. fotografia real del centro;
3. composicion fotografica real solo si resulta visualmente limpia.

El Hero NO debe:

- ocupar varias pantallas;
- contener parrafos largos;
- utilizar claims genericos;
- incorporar animaciones llamativas sin funcion;
- parecer una landing de startup tecnologica.
- utilizar fotografia de stock, estetica infantil, imagen generica de nino haciendo deberes, ilustraciones genericas de IA, un listado saturado de servicios o un logo gigante repetido.

## 16. Lema

Existe la posibilidad de incorporar un lema adicional al eslogan.

No es necesario definir ahora el lema definitivo. El lema sera contenido configurable y centralizado para que pueda modificarse posteriormente sin cambiar componentes.

Conceptualmente debe existir una propiedad equivalente a:

```text
motto: "Lema principal"
```

No inventar ni implementar un texto definitivo de lema hasta que sea proporcionado explicitamente.

El lema tendra una funcion distinta del eslogan:

- Eslogan: identidad/memoria de marca.
- Lema: filosofia o posicionamiento.

## 17. Cards

Utilizar cards unicamente cuando ayuden a agrupar informacion.

Casos apropiados:

- servicios;
- profesionales;
- canales de contacto.

No convertir todas las secciones en conjuntos de cards.

Las cards deben ser:

- limpias;
- sencillas;
- con jerarquia clara;
- sin informacion innecesaria.

Evitar el patron repetitivo de:

```text
icono + titulo + parrafo + boton
```

en absolutamente toda la pagina.

## 18. Botones

Debe existir una jerarquia clara:

### Primary

Accion principal.

Ejemplo:

WhatsApp / contactar.

### Secondary

Navegacion o informacion secundaria.

Ejemplo:

Conocer servicios.

### Text link

Acciones de baja prioridad.

Los botones deben tener:

- texto explicito;
- estados hover;
- estados focus;
- estados active cuando proceda;
- tamano tactil accesible.

Evitar CTA ambiguos como:

- "Descubre mas"
- "Empezar"
- "Explorar"

cuando pueda utilizarse una accion mas concreta.

Preferir:

- "Ver servicios"
- "Conocer al equipo"
- "Escribir por WhatsApp"

## 19. Contacto

La web no tendra formulario.

Los canales son:

- WhatsApp;
- email;
- Instagram.

Deben representarse mediante iconos reconocibles y texto.

No depender exclusivamente del icono para comunicar la accion.

Ejemplo:

```text
[icono WhatsApp]

WhatsApp
Escribenos
```

La seccion de contacto debe ser extremadamente sencilla.

## 20. Iconografia

Utilizar una unica familia o sistema coherente de iconos.

No mezclar multiples estilos.

Los iconos deben:

- tener funcion;
- ser reconocibles;
- mantener grosores visuales coherentes.

No utilizar iconos como decoracion arbitraria.

La libreria concreta se decidira posteriormente.

No instalar ninguna durante esta tarea.

## 21. Fotografias

Prioridad:

```text
fotografia real > ilustracion > fotografia de stock
```

Especialmente para:

- equipo;
- instalaciones;
- centro.

Las fotografias deben transmitir autenticidad.

Evitar fotografias stock de:

- ninos sonriendo artificialmente;
- terapeutas posando;
- familias genericas;
- situaciones clinicas artificiales.

No utilizar fotografias de menores sin confirmacion expresa de autorizacion.

## 22. Imagenes

Optimizar imagenes para web.

Cuando resulte posible utilizar:

- WebP;
- AVIF.

Next.js `Image` debe utilizarse cuando aporte optimizacion adecuada.

Evitar cargar imagenes con resoluciones muy superiores a las necesarias.

## 23. Animaciones

Principio:

> Si la animacion no mejora la comprension, probablemente no es necesaria.

Se permiten:

- transiciones suaves;
- hover;
- pequenos cambios de estado;
- apariciones discretas cuando esten justificadas.

Evitar:

- parallax;
- scroll hijacking;
- elementos flotando constantemente;
- texto animado;
- grandes transiciones de entrada;
- animaciones en todas las secciones.

Respetar:

```css
prefers-reduced-motion
```

## 24. Responsive

Disenar mobile-first.

La interfaz debe adaptarse correctamente al menos a:

- movil pequeno;
- movil estandar;
- movil grande;
- tablet;
- laptop;
- desktop.

No disenar primero desktop y posteriormente "encoger" la interfaz.

Las decisiones de diseno deben considerar desde el inicio la experiencia movil.

## 25. Navegacion movil

Debe ser:

- sencilla;
- rapida;
- accesible;
- facil de cerrar;
- navegable mediante teclado cuando proceda.

No utilizar interacciones complejas.

## 26. Accesibilidad visual

Objetivo:

```text
WCAG 2.2 AA
```

Garantizar:

- contraste suficiente;
- focus visible;
- tamano tactil adecuado;
- jerarquia semantica;
- texto legible;
- no depender exclusivamente del color.

Los colores corporativos deberan adaptarse cuando sea necesario para garantizar contraste.

## 27. Aspecto que debe evitarse

Evitar especificamente la estetica frecuente de paginas generadas automaticamente por IA:

- gradiente azul/morado ocupando grandes superficies;
- blobs difuminados;
- glow;
- glassmorphism;
- cards flotantes;
- sombras exageradas;
- icono dentro de circulo en todas las secciones;
- exceso de bordes redondeados;
- enormes titulares de marketing;
- multiples badges;
- estadisticas inventadas;
- testimonios inventados;
- animaciones constantes;
- ilustraciones genericas;
- composicion de startup SaaS.

Aprende debe parecer un centro real con identidad propia.

## 28. Tono visual

La combinacion final debe situarse aproximadamente entre:

```text
Profesional <-> Cercano
Serio       <-> Humano
Moderno     <-> Atemporal
```

Nunca:

```text
Infantil <-> Corporativo frio
```

La web debe transmitir competencia profesional sin resultar clinica, distante o institucional.

## 29. Consistencia

Antes de crear un nuevo patron visual, comprobar si existe ya un componente que resuelva la misma necesidad.

No introducir:

- nuevos radios;
- nuevos colores;
- nuevas sombras;
- nuevos tamanos;
- nuevas variantes de botones;

sin una razon.

El sistema visual debe crecer de forma controlada.

## 30. Decisiones pendientes

Mantener explicitamente como pendientes:

### Lema

Texto definitivo pendiente. La decision de tratarlo como contenido configurable ya esta tomada.

### Recursos finales de logo

Pendiente disponer de versiones definitivas actualizadas con "Centro Multidisciplinar" y formatos web adecuados.

### Sistema definitivo de iconos

```text
TBD
```

### Estilo fotografico final

Pendiente de revisar las fotografias reales disponibles.

### Diseno definitivo del Hero

La direccion conceptual esta definida, pero el diseno visual final y la fotografia real definitiva siguen pendientes.

No resolver automaticamente estas decisiones.

## Relacion con otros documentos

`PROJECT.md` define que estamos construyendo.

`DESIGN.md` define como debe sentirse y comportarse visualmente.

`CONTENT.md` definira arquitectura de informacion y contenido.

`SEO.md` definira estrategia de posicionamiento.

`AGENTS.md` definira las reglas operativas para Codex.

En caso de conflicto, no tomar decisiones arbitrarias. Identificar el conflicto antes de implementar.
