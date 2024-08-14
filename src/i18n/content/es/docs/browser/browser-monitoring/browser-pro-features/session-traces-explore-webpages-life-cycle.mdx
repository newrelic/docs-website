---
title: 'Rastreo de sesión: Explora el ciclo de vida de una página web'
metaDescription: 'For New Relic browser monitoring, the session traces feature lets you see a timeline of the technical and user-triggered events for a webpage''s full life cycle.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra UI <InlinePopover type="browser"/><DNT>**Session traces**</DNT> proporciona un cronograma detallado del evento de carga e interacción durante el ciclo de vida completo de una página web, con una duración de hasta diez minutos. Después de seleccionar la URL de la sesión o el rastreo de ID de sesión, puede utilizar la visualización detallada en cascada y la descripción general del mapa de calor para examinar la métrica e identificar problemas relacionados con:

* Tiempo de carga de la página
* Cargas de activos individuales
* Interacción del usuario
* solicitudes AJAX
* Devolución de llamada
* Errores y otros eventos durante la sesión.

## Identificar problemas y soluciones. [#benefits]

<img
  title="Session trace error details"
  alt="A screenshot of error details in a browser session trace"
  src="/images/browser_screenshot-full_session-traces.webp"
/>

<figcaption>
  Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > Browser > (select an app) > Session traces**</DNT>: este es un ejemplo de parte de la gran cantidad de información que puede explorar en un rastreo de sesión.
</figcaption>

Rastreo de sesión te ayuda a entender:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Asuntos
      </th>

      <th>
        Utilice los datos del rastreo de sesión para hacer esto.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Problemas de backend
      </td>

      <td>
        Vea cuánto tiempo pasa desde que comienza la solicitud hasta que finaliza la actividad de backend y comienza el proceso de carga de DOM.
      </td>
    </tr>

    <tr>
      <td>
        Problemas con el tiempo de carga de la página
      </td>

      <td>
        Explore datos que le ayuden a responder preguntas como:

        * ¿Cuál es la experiencia [de carga de la página](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process) de su usuario?
        * ¿Cuánto tiempo lleva completar el procesamiento DOM o las solicitudes AJAX?
        * ¿Por qué una página se carga más lentamente que otras?
        * ¿Cuál es el contexto para un evento individual durante una sesión?
      </td>
    </tr>

    <tr>
      <td>
        Core web vitals
      </td>

      <td>
        Mire los segmentos de tiempo para la interacción con la siguiente pintura y la pintura con contenido más grande para identificar problemas de rendimiento que afectan sus [core web vitals](/docs/tutorial-improve-site-performance/guide-to-monitoring-core-web-vitals).
      </td>
    </tr>

    <tr>
      <td>
        evento JavaScript
      </td>

      <td>
        Examine la secuencia de [JavaScript](#slow-javascript-execution) y el evento browser para comprender:

        * ¿Cuáles tardan más que otros?
        * ¿Cuándo ocurre cada evento?
      </td>
    </tr>

    <tr>
      <td>
        Errores
      </td>

      <td>
        Ordene o filtre los errores para ver qué patrones surgen. Por ejemplo, puede comprobar si los errores aumentan en función de:

        * Tipo browser (Google Chrome, Mozilla Firefox, etc.)
        * Un tipo de dispositivo específico (escritorio, tableta, móvil)
      </td>
    </tr>
  </tbody>
</table>

Al conectar el rendimiento con la experiencia del usuario y la interacción con el rendimiento, la capacidad de ver todos los eventos en la sesión del usuario puede ayudarle a identificar áreas problemáticas e identificar soluciones. También puedes crear un vínculo permanente para compartir esta información con otros.

## Empezar [#requirements]

Para utilizar nuestra característica de rastreo de sesión, asegúrese de estar utilizando el [tipo de agente Pro o Pro+SPA](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/#agent-types) para monitoreo de navegador. Si utiliza [varios nombres para una aplicación](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app), el rastreo de sesión solo informará a la [aplicación más específica](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app#most-least-specific).

Monitoreo de browser captura aleatoriamente trazas solo de navegadores que soportan [Resource Timing API](https://www.w3.org/TR/resource-timing/). rastreo de sesión se muestrean aleatoriamente y se almacenan a un ritmo de 90/hora. Puede hojear hasta 500 trazas a la vez.

## Seleccione un rastreo de sesión [#index]

<img
  title="browser_sessiontraces_overview.png"
  alt="browser_sessiontraces_overview.png"
  src="/images/browser_screenshot-full_session-trace-details.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Session traces**</DNT>: busque por URL o ID de rastreo de sesión, u ordene cualquier columna, luego haga clic en el enlace para usar los detalles del rastreo de sesión interactivo.
</figcaption>

Para seleccionar un rastreo de sesión específico:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select a browser app) > Session traces**
   </DNT>

   .

2. Para limitar el índice a una URL específica o ID de rastreo de sesión, utilice la ventana de búsqueda.

3. Para buscar otros patrones, cambie el orden de clasificación en cualquier columna.

4. Haga clic en el enlace rastreo de sesión y luego use la página de detalles para profundizar en información detallada.

Para un análisis más profundo, también puedes consultar atributos como [`session`](/attribute-dictionary/?event=BrowserInteraction&attribute=session), [`sessionTraceId`](/attribute-dictionary/?event=AjaxRequest&attribute=sessionTraceId), [`largestContentfulPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=largestContentfulPaint), etc. Para obtener más información, consulte nuestra documentación sobre [monitoreo de datos de eventos del navegador](/docs/data-apis/understand-data/event-data/events-reported-browser-monitoring/) así como nuestro [diccionario de datos](/attribute-dictionary/?dataSource=Browser+agent).

## Definiciones de segmentos de sesión [#segment-defs]

Para las aplicaciones que se han [implementado utilizando el método copiar/pegar](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser) en New Relic, el monitoreo del navegador incluye la aplicación web y el tiempo de cola en `Network` tiempo como parte del [proceso de tiempo de carga de la página](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process). Esto se debe a que el monitoreo del navegador depende del agente del lado del servidor para pasar los valores de la aplicación al agente del navegador mediante autoinyección.

Puede ver información detallada sobre cómo se desglosa este tiempo de backend desde el punto de vista del browser. El rastreo de sesión informa sobre todos los eventos relacionados con la red disponibles, para que pueda ver caso por caso cómo el browser dedica tiempo a las búsquedas de DNS y otros eventos de red.

Las mediciones para cada segmento indican cuánto tiempo transcurrió una sesión en la que finalizó el segmento. Por ejemplo, si `Page load` es `6.9s`, esto significa que el evento de carga de la página se completó 6,9 segundos después de que comenzó la solicitud.

La siguiente tabla describe cada segmento del rastreo de sesión, con un enlace al diccionario de datos para obtener más detalles sobre estos atributos.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        segmento de sesión
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [Backend](/attribute-dictionary/?event=PageView&attribute=backendDuration)
      </td>

      <td>
        El tiempo desde que comenzó la solicitud hasta que finalizó la actividad de backend y comenzó la carga de DOM.
      </td>
    </tr>

    <tr>
      <td>
        [Procesamiento DOM](/attribute-dictionary/?event=PageView&attribute=domProcessingDuration)
      </td>

      <td>
        El tiempo desde que comenzó la solicitud hasta que finalizó el procesamiento DOM.
      </td>
    </tr>

    <tr>
      <td>
        [Carga de página](/attribute-dictionary/?event=BrowserInteraction)
      </td>

      <td>
        El tiempo desde que comenzó la solicitud hasta que se disparó el evento de carga de la página.
      </td>
    </tr>

    <tr>
      <td>
        [Esperando en AJAX](/attribute-dictionary/?event=AjaxRequest)
      </td>

      <td>
        El tiempo desde que comenzó la solicitud hasta que finalizó la actividad de AJAX.
      </td>
    </tr>

    <tr>
      <td>
        [Primera interacción](/attribute-dictionary/?event=PageViewTiming&attribute=firstInteraction)
      </td>

      <td>
        El tiempo desde que comenzó la solicitud hasta que se registró la primera actividad del usuario, como un clic del mouse o un desplazamiento.
      </td>
    </tr>

    <tr>
      <td>
        [Interacción con la siguiente pintura (INP)](/attribute-dictionary/?event=PageViewTiming&attribute=interactionToNextPaint)
      </td>

      <td>
        Core web vitals: Mide la rapidez con la que una página web responde visualmente a las acciones del usuario, como clics o toques.
      </td>
    </tr>

    <tr>
      <td>
        [Pintura con contenido más grande](/attribute-dictionary/?event=PageViewTiming&attribute=largestContentfulPaint)
      </td>

      <td>
        Métricas web principales: El tiempo de renderizado del elemento de contenido más grande que es visible en la ventana gráfica.
      </td>
    </tr>

    <tr>
      <td>
        [Duración](/attribute-dictionary/?event=BrowserInteraction&attribute=duration)
      </td>

      <td>
        La duración total de la sesión.
      </td>
    </tr>
  </tbody>
</table>

## Ejecución y repintado lentos de JavaScript [#slow-javascript-execution]

El rastreo de sesión lo ayuda a identificar la devolución de llamada en su código JavaScript que se ejecuta lentamente y bloquea la ejecución de llamadas posteriores en el hilo principal del browser. Estas llamadas deben ejecutarse rápidamente para permitir que el browser vuelva a pintar rápidamente la página en respuesta a las acciones del usuario.

El rastreo de sesión resalta cualquier devolución de llamada de más de 33 ms. Si se llaman en rápida sucesión (como dentro de un bucle `requestAnimationFrame` ), la devolución de llamada de más de 33 ms reduce la velocidad de fotogramas por debajo de 30 fotogramas por segundo. Esta velocidad le parece lenta al usuario.
