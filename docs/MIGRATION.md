# Migracion SEO

## Objetivo

Migrar la web antigua preservando URLs relevantes mediante redirecciones permanentes.

## Redirect map

| Old path | New path | Reason |
|---|---|---|
| `/neuroeducacion` | `/servicios` | Contenido integrado en Servicios |
| `/psicoterapia/` | `/servicios` | Contenido integrado en Servicios |
| `/sobre-nosotros/` | `/equipo` | Nueva pagina de equipo |
| `/aprende-online-` | `/servicios` | Servicio online discontinuado |

## Pre-launch

- confirmar dominio definitivo;
- confirmar www/non-www;
- configurar `NEXT_PUBLIC_SITE_URL`;
- mantener preview en noindex;
- comprobar build;
- comprobar redirects;
- comprobar sitemap;
- comprobar robots;
- comprobar canonical;
- comprobar HTTPS.

## Launch

- desplegar nueva web;
- activar dominio;
- activar indexabilidad unicamente en produccion;
- comprobar redirects desde URLs antiguas;
- comprobar sitemap;
- comprobar robots;
- comprobar metadata/canonical;
- comprobar 404.

## Post-launch

- verificar URLs antiguas;
- comprobar que responden con redirect permanente;
- comprobar destinos;
- revisar indexacion;
- enviar sitemap a Google Search Console si posteriormente se obtiene acceso;
- monitorizar 404;
- no retirar redirects prematuramente.

## Redirects a largo plazo

Estas redirecciones deben mantenerse a largo plazo. No tienen una fecha automatica de eliminacion y no deben tratarse como redirects temporales.

## Comprobaciones de produccion

- La publicacion definitiva debe utilizar HTTPS; normalmente se configura en hosting o proxy, no mediante reglas manuales en Next.js.
- Debe existir una unica variante canonica del dominio, con o sin `www`, segun se confirme en la fase de publicacion.
- No debe bloquearse el rastreo de las URLs antiguas en `robots.txt`, porque los buscadores necesitan acceder a ellas para descubrir la redireccion permanente.
