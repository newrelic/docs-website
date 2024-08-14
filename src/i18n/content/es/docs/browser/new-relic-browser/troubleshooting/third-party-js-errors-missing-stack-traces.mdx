---
title: Errores JS de terceros que faltan rastreo del stack
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Third-party JS errors aren't visible in Browser due to the same origin policy. Use cross-origin resource sharing (CORS) to solve this problem.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Los eventos de error de JavaScript (JS) se compilan en la [página de errores<InlinePopover type="browser"/>de JS](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-examining-errors-over-time). De forma predeterminada, están agrupados por mensaje de error. Cuando seleccionas un único evento de error, verás más detalles en su lista <DNT>**Error Instances**</DNT> . En algunos casos, es posible que una o más instancias no tengan un rastreo del stack.

<Callout variant="tip">
  En su lugar, verá el mensaje "<DNT>**This error is likely coming from a third-party site and no stack trace is available**</DNT> ".
</Callout>

## Solución

Habilitar el intercambio de recursos entre orígenes (CORS) puede eliminar este problema, exponiendo todos los detalles del error JS a su aplicación y permitiendo que el agente del navegador capture el rastreo de la pila del error.

Hay muchos recursos en línea que brindan información sobre la habilitación y configuración de CORS. Este artículo de MDN tiene una [descripción detallada de CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), con una sección sobre [la configuración de encabezados de respuesta](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers) y otra sobre [el atributo de configuración de CORS](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes). El sitio web Enable CORS tiene información [sobre cómo habilitar CORS para varias plataformas](http://enable-cors.org/server.html).  
<DNT>**New Relic is not responsible for the accuracy of third-party websites.**</DNT>

<Callout variant="caution">
  Este documento pretende ser únicamente una introducción general al uso de CORS. Debido a posibles problemas de seguridad, recomendamos investigar antes de implementar cualquier cambio que afecte la seguridad de su aplicación o recursos. La implementación óptima de CORS dependerá de los sistemas que esté utilizando y de sus consideraciones de seguridad.
</Callout>

Aquí hay instrucciones generales sobre cómo implementar CORS:

1. Agregue el código `Access-Control-Allow-Origin` a los encabezados de respuesta de cualquier recurso de terceros que proporcione JavaScript a su aplicación:

   ```
   Access-Control-Allow-Origin: YOUR_DOMAIN
   ```

   Establecer un dominio, o un dominio múltiple, le dará a esos dominios específicos acceso a los detalles de error traza y otros recursos disponibles. Este artículo de MDN puede contener información útil sobre [cómo configurar encabezados de respuesta](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers), como agregar múltiples dominios o usar un comodín en lugar de un dominio.

2. En su aplicación, haga que el browser cargue archivos JavaScript usando el atributo CORS `crossorigin`:

   ```html
   <script src="EXTERNAL_LOCATION/script.js" crossorigin> </script>
   ```

   Este artículo de MDN puede contener información útil sobre [el atributo de configuración CORS](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes).

## Causa

La causa más común del problema del rastreo del stack faltante es la política del mismo origen. Esta es una política de seguridad que evita que un recurso web acceda a datos de otro recurso a menos que ambos tengan el mismo origen. En este contexto, <DNT>**origin**</DNT> es la combinación del esquema de URI, el nombre de host y el número de puerto. La política evita que código malicioso obtenga acceso a otros recursos web.

La política del mismo origen es importante para la seguridad de Internet, pero puede dificultar el trabajo conjunto de los recursos web. Específicamente, pueden surgir problemas si tiene un script JS alojado en redes de entrega de contenido (CDN) u otras ubicaciones externas. New Relic puede ver los errores provenientes de esos scripts pero no puede acceder a sus datos.
