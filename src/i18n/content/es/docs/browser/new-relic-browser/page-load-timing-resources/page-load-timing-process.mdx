---
title: Cómo New Relic mide el tiempo de carga de la página
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: Time-based explanation of how a web page load event happens and how that corresponds to browser's page load timing measurements.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica:

* Cómo se carga una página web

* Cómo mide

  <InlinePopover type="browser">
    [](/docs/browser/new-relic-browser/getting-started/new-relic-browser)
  </InlinePopover>

  el tiempo de carga de la página, también conocido como monitoreo de usuarios reales (RUM)

<Callout variant="tip">
  Esta es una descripción del tiempo de carga de página tradicional y sincrónico. El navegador también puede monitor [el tiempo de carga de la página de forma asincrónica](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring).
</Callout>

## Proceso de carga de página [#process]

Estos son los pasos principales en la carga de la mayoría de las páginas web. Los números del 1 al 6 en el diagrama corresponden a los pasos numerados a continuación.

<img
  title="browser-pageload-timeline.png"
  alt="browser-pageload-timeline.png"
  src="/images/browser_diagram_page-load-timeline.webp"
/>

<figcaption>
  <DNT>**Page load timeline:**</DNT> Los pasos involucrados en la carga de una página web. Los gráficos de monitoreo de navegador muestran los siguientes segmentos de ese proceso: <DNT>**[Network](#h3-network)**</DNT>, <DNT>**[Web application](#h3-app-time)**</DNT>, <DNT>**[DOM processing](#h3-dom)**</DNT> y <DNT>**[Page rendering](#h3-page)**</DNT>.
</figcaption>

1. La carga de una página comienza cuando un usuario selecciona un hipervínculo, envía un formulario o escribe una URL en un browser. Esto también se conoce como

   <DNT>
     **initial request**
   </DNT>

   o

   <DNT>
     **navigation start**
   </DNT>

   . La acción del usuario envía un

   <DNT>
     **request**
   </DNT>

   a través de la red al servidor de la aplicación web.

2. La solicitud llega a la solicitud para su trámite. (La solicitud puede tardar algún tiempo en comenzar a procesarse. Esto podría ser el resultado de

   <DNT>
     **request queuing**
   </DNT>

   o podrían ser otros factores).

3. La aplicación finaliza el procesamiento y envía un HTML

   <DNT>
     **response**
   </DNT>

   de regreso a través de la red al browser del usuario. A veces se hace referencia a esto como

   <DNT>
     **response start**
   </DNT>

   o

   <DNT>
     **first byte**
   </DNT>

   .

4. (Tiempo hasta el primer byte) El browser del usuario comienza a recibir la respuesta HTML y comienza a procesar el modelo de objetos de documento, o

   <DNT>
     **DOM**
   </DNT>

   .

5. El DOM termina de cargarse; este punto se conoce como

   <DNT>
     **DOM ready**
   </DNT>

   . Usando el DOM, el browser del usuario comienza a representar la página.

6. La página termina de mostrarse en el browser del usuario y se activa

   <DNT>
     **window load event**
   </DNT>

   . (Para páginas que usan [carga asincrónica](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring), algunos elementos pueden continuar cargándose después de que ocurra el evento de carga de la ventana).

## Gráficos de tiempo de carga de la página en monitoreo de navegador [#page-load-charts]

Monitoreo de browser captura los principales segmentos de tiempo de carga de la página en la [página <DNT>**Summary**</DNT> ](/docs/browser/new-relic-browser/getting-started/browser-overview-website-performance-glance)y la [página<DNT>**Page views**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/page-views-understanding-your-sites-popularity)del navegador. Si tiene habilitado el monitoreo de SPA, tendrá acceso tanto a este gráfico como [a los gráficos específicos de SPA](/docs/browser/single-page-app-monitoring/use-spa-data/view-spa-data-new-relic-browser). Los gráficos muestran:

* Red
* Tiempo de aplicación web
* Procesamiento DOM
* Representación de página
* Otros segmentos según corresponda, como colas de solicitudes

Los colores del gráfico coinciden con los colores del [diagrama de tiempo de carga de la página](#process).

<img
  title="page_load_overview.png"
  alt="page_load_overview.png"
  src="/images/browser_screenshot-full_page-load-chart.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Summary**</DNT>: El gráfico de tiempo de carga aparece en las páginas <DNT>**Summary**</DNT> y <DNT>**Page views**</DNT> .
</figcaption>

La forma en que el navegador recopila estos tiempos depende de la capacidad del navegador para utilizar la [API de especificación de tiempos de navegación](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-browser-monitoring). Puede agregar un evento de tiempo de carga de página personalizado con la [API del agente del navegador](/docs/browser/new-relic-browser/browser-apis/using-browser-apis).

A continuación se muestran descripciones de la actividad incluida en los segmentos del gráfico de tiempo de carga browser :

<CollapserGroup>
  <Collapser
    id="h3-app-time"
    title="Aplicación web"
  >
    El tiempo de la aplicación web incluye el tiempo pasado en el servidor de la aplicación. Esto solo se puede determinar si un <InlinePopover type="apm"/>agente proporcionó la instrumentación browser para el tiempo de carga de la página.
  </Collapser>

  <Collapser
    id="h3-network"
    title="Red"
  >
    La capa de red incluye el tiempo dedicado a redirecciones, así como a solicitar y recibir HTML. No incluye el tiempo en el servidor ni para activos estáticos.

    La medición del tiempo de red comienza desde el clic inicial en un enlace. El tiempo de red incluye DNS y puede incluir más de una búsqueda si tiene redireccionamientos en su sitio, TCP (incluido el firewall, a menos que haya configurado [el monitoreo del tiempo de cola de solicitudes](/docs/apm/other-features/request-queueing/request-queuing-tracking-frontend-time)) y el tiempo de conexión SSL.

    * Si <DNT>**have**</DNT> configuró el monitoreo del tiempo de la cola de solicitudes, entonces el tiempo de la red <DNT>**does not**</DNT> incluye cualquiera de los tiempos de la cola de solicitudes que ocurren después del encabezado X-Request.

    * Si <DNT>**have not**</DNT> configuró el monitoreo del tiempo de la cola de solicitudes, entonces el tiempo de la red <DNT>**does**</DNT> incluirá todo el tiempo de la cola de solicitudes.

      La [API de especificación de tiempo de navegación](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-browser-monitoring) proporciona un desglose detallado del tiempo de la red. (Para navegadores antiguos, el cronómetro comienza en el momento "antes del evento de descarga").

      Para las aplicaciones que se han [implementado mediante el método de copiar y pegar](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser), el navegador incluye la aplicación web y el tiempo de cola en el tiempo de red. Esto se debe a que browser depende del agente del lado del servidor para pasar los valores de la aplicación al agente del navegador mediante autoinyección.

      Para obtener más información sobre cómo se divide este tiempo de backend desde el punto de vista del navegador, utilice la [página<DNT>**Session traces**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle). El rastreo de sesión informa sobre todos los eventos relacionados con la red disponibles, para que pueda ver caso por caso cómo el browser dedica tiempo a búsquedas de DNS y otros eventos de red.

      <Callout variant="important">
        Incluso con la cola de solicitudes configurada, la configuración del servidor frontend aún puede afectar el tiempo de la red. Esto se debe a que el servidor frontend no agrega el encabezado del tiempo de cola hasta que realmente acepta y procesa la solicitud. Si el servidor de interfaz de usuario está configurado de alguna manera que hace que las solicitudes comiencen a acumularse y se pongan en cola en el socket de escucha que el servidor de interfaz de usuario utiliza para aceptar conexiones, verá un aumento en el tiempo de red para el monitoreo del navegador. Los encabezados de tiempo de cola nunca pueden tener en cuenta el trabajo pendiente en este socket de escucha.
      </Callout>
  </Collapser>

  <Collapser
    id="h3-dom"
    title="Procesamiento DOM"
  >
    El procesamiento DOM es el tiempo que lleva analizar el HTML en un DOM y recuperar o ejecutar un script sincrónico. Si el browser comienza a descargar imágenes en esta fase, el tiempo de carga de la página capturará el tiempo de carga de la imagen.

    Las capas de procesamiento DOM y representación de páginas incluyen el tiempo de red para activos estáticos (activos que no se recuperan explícitamente después de cargar la página). Sin embargo, si una script en la página inserta dinámicamente una etiqueta de imagen y carga imágenes después de que finaliza el servidor o el sistema de entrega de contenido (CDN), el tiempo de carga de la página no puede capturar el tiempo de carga de la imagen.
  </Collapser>

  <Collapser
    id="h3-page"
    title="Representación de página"
  >
    La fase de representación de la página es el tiempo entre que se completa el DOM y el evento de carga de la ventana. Esta fase mide el procesamiento del contenido de la página en el lado browsery, a menudo, incluye tiempo para que se carguen los scripts y los activos estáticos.
  </Collapser>

  <Collapser
    id="h3-request"
    title="Solicitar cola"
  >
    <DNT>**Request queuing**</DNT> Se mostrará en el gráfico de tiempo de carga si esa cuenta tiene vinculado el monitoreo del navegador y APM. En New Relic, [la cola de solicitudes](/docs/apm/applications-menu/features/request-queuing-tracking-frontend-time) se refiere al tiempo entre una solicitud que ingresa a sus sistemas de producción y llega a su aplicación. Dependiendo de las características específicas de su infraestructura de producción, este tiempo puede incluir una cola real en la que ingresan las solicitudes o puede representar otras funciones que toman tiempo (como el equilibrio de carga o la latencia de la red interna).
  </Collapser>
</CollapserGroup>

## Solicitudes del servidor de aplicaciones frente a transacciones browser [#rpm-vs-ppm]

A menudo, el número de transacciones del servidor de aplicaciones (solicitudes por minuto o <DNT>**rpm**</DNT>) es mayor que el número de transacciones browser (páginas por minuto o <DNT>**ppm**</DNT>) para la misma aplicación. Para más información, consulta los [procedimientos de resolución de problemas](/docs/browser/new-relic-browser/troubleshooting/app-server-requests-greatly-outnumber-browser-transactions).

## Valor atípico [#outliers]

No importa qué tan bien funcione su aplicación, habrá algunos navegadores, plataformas y redes lentos que harán que su tiempo de respuesta agregado general parezca más lento. Para minimizar el sesgo causado por el valor atípico, el tiempo de carga de la página limita y escala el tiempo de respuesta del usuario final que es mayor que 4,5 veces la configuración Apdex T browser de su aplicación a 4,5 veces el Apdex T, o a 13,5 segundos, lo que sea mayor. ([El valor atípico del histograma](/docs/data-analysis/user-interface-functions/histograms-viewing-data-distribution#outliers) se corta al 95%).

Por ejemplo, si [el umbral Apdex T del usuario final](/docs/browser/new-relic-browser/installation-configuration/browser-settings-ui-options-browser-monitoring#apdex) de su aplicación es de 8 segundos, ese tiempo de respuesta se limitará a 36 segundos. Esto minimiza el impacto de estos tiempos de respuesta en su solicitud general, pero aún permite tener en cuenta las puntuaciones de Apdex "frustradas".

Para [el monitoreo de SPA](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring), los valores atípicos se manejan de manera diferente. Cuando la duración de la carga de una página inicial o del cambio de ruta alcanza los 30 minutos, ese evento se trata como datos no válidos y se descarta.

## Próximos pasos [#next-steps]

Obtenga más información sobre el tiempo de carga de la página con estos documentos:

* [Acerca del evento PageViewTiming](/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details)
* [Cookies creadas por el tiempo de carga de la página](/docs/browser/browser-monitoring/page-load-timing-resources/new-relic-cookies-used-browser)
* [Recopilación de cookies y seguimiento de sesiones.](/docs/browser/browser-monitoring/page-load-timing-resources/cookie-collection-session-tracking)
* [Cómo se monitorean las páginas en caché](/docs/browser/new-relic-browser/page-load-timing-resources/cached-pages)
* [Comparar el tiempo de carga de la página browser y Sintético](/docs/browser/new-relic-browser/page-load-timing-resources/compare-page-load-performance-browser-synthetics)

Si aún no lo ha hecho, cree su cuenta New Relic gratuita a continuación para comenzar a monitorear sus datos hoy.

<InlineSignup/>
