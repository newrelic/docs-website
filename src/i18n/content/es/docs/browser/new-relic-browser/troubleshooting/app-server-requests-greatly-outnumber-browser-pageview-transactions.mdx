---
title: Las solicitudes del servidor de aplicaciones superan con creces la transacción PageView browser
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Browser can report higher number of browser transactions (PPM) than are reported by APM or other monitoring services.
freshnessValidatedDate: never
translationType: machine
---

## Problema

A menudo, el número de transacciones del servidor de aplicaciones (solicitudes por minuto o <DNT>**rpm**</DNT>) es mayor que el número de transacciones browser (páginas por minuto o <DNT>**ppm**</DNT>) para la misma aplicación. Incluso los sitios donde todas las páginas están orientadas a la web (sin API ni componentes exclusivos de backend) pueden tener entre dos y diez veces más transacciones que las vistas de páginas registradas browser .

## Solución

Algunas razones comunes por las que esto puede ocurrir son:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="instrumentation"
    title="Instrumentación"
  >
    No instrumentas todas las páginas de tu aplicación, o no todas las páginas utilizan instrumentación automática.
  </Collapser>

  <Collapser
    className="freq-link"
    id="webpage-format"
    title="Formato de página web"
  >
    Las páginas web no son <DNT>**text/html**</DNT>. (Para evitar dañar los datos, browser no instrumenta páginas que no sean HTML, porque no están diseñadas para ser analizadas por un browser).
  </Collapser>

  <Collapser
    className="freq-link"
    id="ajax-requests"
    title="solicitudes AJAX"
  >
    Algunas solicitudes a su backend se realizan a través de AJAX. El rendimiento de AJAX se rastrea por separado en [la página<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls)del navegador.
  </Collapser>

  <Collapser
    className="freq-link"
    id="request-source"
    title="Fuente de solicitud"
  >
    Algunas solicitudes no provienen de un navegador web completamente funcional. Por ejemplo, son llamadas API, o provienen de dispositivos que no interpretan JavaScript, como lectores de feeds RSS o indexadores de motores de búsqueda.
  </Collapser>

  <Collapser
    className="freq-link"
    id="browsers"
    title="Navegador"
  >
    Algunas solicitudes provienen de navegadores muy antiguos (anteriores a IE 7) o provienen de navegadores que bloquean cookies o JavaScript. Por ejemplo, la extensión Ghostery para Firefox bloqueará el tiempo de carga de la página.
  </Collapser>

  <Collapser
    className="freq-link"
    id="cache"
    title="Cache"
  >
    Existe un caché entre su servidor de aplicaciones y su usuario final. Dependiendo de si las páginas almacenadas en caché están instrumentadas correctamente, esto puede hacer que el equilibrio se incline en la otra dirección, con más rendimiento browser que del servidor de aplicaciones.
  </Collapser>

  <Collapser
    className="freq-link"
    id="user-behavior"
    title="Comportamiento del usuario"
  >
    El usuario sale de la página antes de que termine de cargarse o antes de llegar al <DNT>**window.onload() event**</DNT>.

    Su informe de rendimiento semanal de New Relic incluye el número de visitas a la página. Este es el número total de cargas de página que hemos registrado durante el período de tiempo. Después de que el browser de un usuario final carga una página que incluye el tiempo de carga de la página, JavaScript carga e informa sus datos de tiempo. Si el usuario sale de la página antes de que se ejecute JavaScript, no se envían datos para esa página y no se incluyen en el informe total de visitas a la página.
  </Collapser>
</CollapserGroup>
