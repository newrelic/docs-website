---
title: Seguridad para monitoreo de navegador
tags:
  - Browser
  - Browser monitoring
  - Performance quality
metaDescription: Security considerations and data collection details for browser.
freshnessValidatedDate: never
translationType: machine
---

Nuestro [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)proporciona información valiosa sobre cómo se comporta su aplicación o sitio cuando se carga en un navegador web. browser sólo registra datos de rendimiento, como se explica en este documento. **No** registra ningún dato utilizado o almacenado por la aplicación de monitor a menos que la configure explícitamente para hacerlo.

Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Datos reportados [#data]

Browser informa muchos tipos diferentes de datos para ayudarle a analizar el rendimiento de su sitio web. <DNT>**only**</DNT> informa datos de visitas a páginas, a menos que te hayas suscrito a [la característica Pro](http://newrelic.com/browser-monitoring/pricing). También puede [habilitar la funcionalidad](/docs/browser/new-relic-browser/welcome-new-relic-browser/new-relic-browser#enhanced-features) para solicitudes AJAX, errores de JavaScript y rastreo de sesión.

Para la mayoría de los tipos de datos, el navegador [transmite los datos de forma segura](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-page-load-timing#transmission) mediante cifrado HTTPS. El agente del navegador transmite datos al [recopilador](/docs/accounts-partnerships/getting-started-new-relic/glossary#collector) de New Relic utilizando el dominio `bam.nr-data.net` o `bam-cell.nr-data.net`.

A continuación se muestra un resumen de los tipos de datos reportados por el monitoreo del navegador.

<CollapserGroup>
  <Collapser
    id="page-view-data"
    title="Datos de vista de página"
  >
    Estos datos se informan una vez por vista de página y constan de:

    * Datos de tiempo de carga de página

    * Nombre del controlador de la aplicación del lado del servidor que sirvió la página, si está disponible (oculto en la página y durante la transmisión)

    * Parámetro personalizado adicional establecido por el controlador de la aplicación del lado del servidor, si está disponible (ofuscado en la página y durante la transmisión)

    * Parámetro personalizado adicional establecido por la [API del agente del navegador](/docs/browser/new-relic-browser/browser-agent-apis/report-data-events-browser-agent-api), si se establece antes de cargar la página

      Esta información aparece en la [página<DNT>**Page views**</DNT> ](/docs/browser/new-relic-browser/dashboard-details/page-views-dashboard). Por razones de seguridad de los datos, browser no registra ni recopila cadenas de consulta de URL.

      Los datos del lado del servidor solo se pueden recopilar cuando el host también está instrumentado por New Relic y el agente inyecta la instrumentación de monitoreo del navegador. Para obtener más información sobre cómo recopilamos y presentamos estos datos, consulte [Instrumentación para el tiempo de carga de la página](/docs/browser/new-relic-browser/page-load-timing/instrumentation-page-load-timing).
  </Collapser>

  <Collapser
    id="ajax-data"
    title="Datos de temporización AJAX"
  >
    Cuando está habilitado, browser informa periódicamente datos de tiempo AJAX hasta que el usuario sale de la página o la cierra. (New Relic filtra automáticamente todas las solicitudes AJAX que tardan más de dos minutos). Los datos incluyen:

    * Nombre de host, puertos y rutas (pero no el parámetro de búsqueda/consulta) de las URL de solicitud AJAX

    * Código de estado HTTP de las respuestas

    * Tamaño en bytes de los cuerpos de los mensajes de solicitud

    * Nombre del controlador de la aplicación del lado del servidor que atiende la solicitud AJAX y los datos de tiempo del lado del servidor (ofuscados en la página y durante la transmisión), cuando el agente New Relic inyecta la instrumentación del browser

    * Datos de tiempo para la transacción AJAX

    * Datos de tiempo para la devolución de llamada AJAX

      Esta información aparece en la [página<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls).
  </Collapser>

  <Collapser
    id="js-errors-data"
    title="Datos de error de JavaScript"
  >
    Cuando está habilitado, browser informa periódicamente datos sobre cada error que ocurre en la página hasta que el usuario sale de la página o la cierra. Esta información aparece en la [página<DNT>**JavaScript errors**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/js-errors-dashboard-examining-errors-over-time).

    Para cada error, los datos incluyen:

    * Clase de excepción del error.

    * Mensaje de error que contiene texto arbitrario

    * Rastreo del stack del error, que puede contener nombres de funciones y URL del script que causa el error

      Los mensajes de error normalmente no contienen información confidencial o sensible. Sin embargo, es posible que los mensajes se construyan intencionalmente con información confidencial. Antes de habilitar el informe de errores de JavaScript, asegúrese de que su sitio web no exponga ninguna información confidencial en el mensaje de error.
  </Collapser>

  <Collapser
    id="session-trace-data"
    title="Rastreo de datos de sesión"
  >
    Cuando está habilitado, browser informa periódicamente datos sobre los detalles del ciclo de vida de una sola página, incluida la interacción del usuario, las cargas de AJAX y los errores de JavaScript, hasta que el usuario sale de la página o la cierra. New Relic deja de registrar automáticamente más datos después de diez minutos. Los datos incluyen:

    * Detalles del tiempo de carga de activos

    * Interacción del usuario, como desplazamiento, desplazamiento del mouse y clic.

    * Tiempo de error de JavaScript y otra información de error de JavaScript

    * Evento Javascript activado

      Rastreo de sesión se capturan aleatoriamente a una velocidad fija entre las vistas de la página del monitor. La información del rastreo de sesión aparece en la [página<DNT>**Session traces**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle).
  </Collapser>

  <Collapser
    id="spa-data"
    title="Datos SPA"
  >
    Si utiliza el monitoreo de la aplicación de página única (SPA) del browser, New Relic informa los siguientes datos una vez por cada carga de página o cambio de ruta.

    * datos del navegador para [visitas a páginas](#page-view-data), [temporización AJAX](#ajax-data), [errores de JavaScript](#js-errors-data) y [rastreo de sesión](#session-trace-data)

    * Fragmentos de hash asociados con cambios de ruta SPA

    * Parámetro personalizado adicional agregado desde la [API SPA](/docs/browser/new-relic-browser/browser-agent-apis/new-relic-spa-api)

      Cuando se ha habilitado el monitoreo de SPA, esta información aparece en la [página<DNT>**Page views**</DNT> ](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser).

      Los datos del lado del servidor solo se pueden recopilar cuando el host también está instrumentado por New Relic y el agente inyecta el monitoreo de la instrumentación del navegador. Para obtener más información sobre cómo recopilamos y presentamos estos datos, consulte [Instrumentación para el tiempo de carga de la página](/docs/browser/new-relic-browser/page-load-timing/instrumentation-page-load-timing).
  </Collapser>
</CollapserGroup>

## Cadenas de consulta de URL [#url-strings]

El agente del navegador utiliza el atributo HTTP `referer` para rastrear las URL de las páginas. En ocasiones, las URL pueden contener datos de consulta ingresados por el usuario potencialmente confidenciales (por ejemplo, el nombre de un usuario). Por razones de seguridad de los datos, browser no registra ni recopila cadenas de consulta de URL.

## Dirección IP del visitante [#visitors-ip]

Browser utiliza la dirección IP del visitante para enriquecer los datos para una segmentación adicional de los visitantes. Detalles como [`ASN` y `geoID`](/docs/browser/new-relic-browser/browser-pro-features/filterable-geography-webpage-metrics-location#metrics) se asignan a los datos del navegador desde la dirección IP. Por razones de seguridad de los datos, browser no conserva la dirección IP del visitante para realizar informes. La dirección IP se obtiene en el encabezado HTTP de la solicitud al [recopilador](/docs/accounts-partnerships/getting-started-new-relic/glossary#collector) de New Relic.

New Relic no retiene la dirección IP del visitante después de que se haya asignado el atributo. El valor de la dirección IP se sobrescribe dentro de las 24 horas posteriores a la recopilación de datos.

## Tipos browser [#types]

Browser determina el tipo browser a partir del encabezado `User-Agent` y la ubicación geográfica según la dirección IP del browser. New Relic no conserva la dirección IP, solo el país y la región asociados con los datos de rendimiento.

Esta información aparece en la [página<DNT>**Geography**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/geography-webpage-performance-location)de la aplicación seleccionada. Además, los detalles sobre tipos de navegador específicos aparecen en la [página<DNT>**Browsers**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/browsers-problem-patterns-type-or-location)de la aplicación seleccionada.

## Acceso CDN [#traces]

El tiempo de carga de la página requiere acceso a la red de entrega de contenido (CDN), donde está alojado el archivo JavaScript de la utilidad de New Relic (`nr.js`). El nombre de dominio del archivo (`js-agent.newrelic.com`) permanece estático, pero el número en la ruta (versión) puede cambiar periódicamente.

El agente de New Relic inyecta una etiqueta `script` (o la pega en la página web para aplicaciones independientes) que hace referencia al JavaScript en la CDN, que luego el browser carga. El JavaScript cargado recopila e informa la métrica dinámicamente al dominio `bam.nr-data.net` o `bam-cell.nr-data.net`.

<Callout variant="important">
  Si su usuario final está detrás de un firewall o proxy y no tiene acceso a la CDN o a [las redes](/docs/apm/new-relic-apm/getting-started/networks) de New Relic (incluidas `bam.nr-data.net` y `bam-cell.nr-data.net`), el monitoreo del navegador no funcionará.
</Callout>

## Galletas

<Callout variant="important">
  Para el agente actual (versión 1217 y superior), el uso de cookies ha quedado obsoleto.
</Callout>

Monitoreo de browser crea [cookies](/docs/browser/new-relic-browser/page-load-timing-resources/new-relic-cookies) en el navegador del usuario final. Si el usuario tiene las cookies deshabilitadas, el tiempo de carga de la página (a veces denominado monitoreo de usuarios reales o RUM) no podrá rastrear las sesiones correctamente. Además, si el usuario tiene un navegador antiguo que no admite la [API de especificación de tiempo de navegación](/docs/browser/new-relic-browser/browser-agent-apis/navigation-timing-api), el tiempo de carga de la página no podrá realizar un seguimiento del tiempo de respuesta con tanta precisión.

Las cookies de New Relic generadas por un agente del navegador anterior a la versión 995 pueden no contener el atributo `secure` . Esto se debe a que [la transmisión de datos](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-page-load-timing#transmission) de tiempo de carga de la página en versiones anteriores a la versión 995 usa HTTP cuando la página es HTTP, pero usa HTTPS cuando la página es HTTPS. Todas las versiones del agente del navegador superiores a la versión 995 siempre utilizarán el indicador `secure` para las cookies y transmitirán a través de HTTPS.

Los datos de JavaScript y AJAX pueden contener información más confidencial, por lo que se <DNT>**always**</DNT> transmiten a través de HTTPS. La transmisión de estas cookies mediante HTTP o el acceso a ellas desde JavaScript no supone un riesgo de seguridad significativo, porque las cookies no se utilizan para tomar decisiones de seguridad ni permitir el acceso a una cuenta. Se utilizan únicamente para recopilar datos de rendimiento, con cualquier dato identificable oculto.

Para los clientes sujetos a pautas especiales para la recopilación de cookies, como aquellas bajo las [Directrices ICO GDPR/PECR](https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/) de la UE, ahora ofrecemos la opción de deshabilitar la recopilación de cookies para su aplicación. Consulte nuestras [notas de la versión del agente del navegador v1169](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1169) para obtener más información.

<Callout variant="important">
  Si su sitio utiliza [P3P](http://www.w3.org/p3p/), debe configurarse para permitir estas cookies.
</Callout>

## Solicitudes JSONP [#jsonp]

Las métricas de tiempo de carga de la página se informan a New Relic mediante un script `GET`, también conocido como solicitud JSONP. El script `GET` devuelve un valor que posteriormente se almacena en una cookie y se utiliza para activar la captura de trazas.
