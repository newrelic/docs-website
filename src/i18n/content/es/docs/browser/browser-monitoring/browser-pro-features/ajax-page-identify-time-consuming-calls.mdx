---
title: 'Página AJAX: Identifique llamadas que consumen mucho tiempo'
metaDescription: Use New Relic's browser monitoring AJAX page to pinpoint problems with your end users' experience when you have time-consuming or failing AJAX calls.
freshnessValidatedDate: never
translationType: machine
---

Nuestra UI <InlinePopover type="browser"/><DNT>**AJAX**</DNT> muestra solicitudes AJAX recientes desde el navegador al extremo externo, como el dominio HTTP o HTTPS. Esta información ayuda a identificar problemas con la experiencia del usuario final cuando tiene llamadas AJAX fallidas o que consumen mucho tiempo y que actualizan partes de una página web en su sitio. Puede revisar los problemas por tipo de dispositivo, incluido el navegador de escritorio, los dispositivos móviles y las tabletas.

## Qué solucionar [#troubleshooting]

A continuación se ofrecen algunos consejos de resolución de problemas para identificar problemas de rendimiento con su aplicación:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Resolución de problemas de llamadas AJAX
      </th>

      <th>
        Ejemplos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Problemas en toda la solicitud
      </td>

      <td>
        Si no está seguro de dónde está el problema o si desea trazar sus solicitudes de principio a fin, haga clic en el enlace [rastreo distribuido](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) en la UI <DNT>**AJAX**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        Problemas de tiempo
      </td>

      <td>
        [Los porcentajes de tiempo](#time-percentage-example) total, las solicitudes de rendimiento por minuto (rpm) y las tasas promedio de transferencia de datos por solicitud pueden ayudar a identificar problemas de sincronización.

        * Busque picos grandes en el gráfico

          <DNT>
            **Average data transfer per request**
          </DNT>

          de la página de resumen

          <DNT>
            **AJAX**
          </DNT>

          .

        * Analice las tendencias de sus datos utilizando el menú desplegable

          <DNT>
            **Group By**
          </DNT>

          para evaluar su rendimiento de AJAX mediante URL de solicitud, nombres de operaciones GraphQL y muchos otros campos.

        * En la pestaña

          <DNT>
            **AJAX performance**
          </DNT>

          de la llamada individual, busque correlaciones entre los valores elevados de tiempo de devolución de llamada y las tasas de transferencia de datos.
      </td>
    </tr>

    <tr>
      <td>
        Problemas extremos
      </td>

      <td>
        Busque cualquier valor atípico extremo e investigue las solicitudes individuales realizadas por ellos.

        El gráfico <DNT>**Status codes**</DNT> en la página de resumen <DNT>**AJAX**</DNT> proporciona información sobre el comportamiento de devolución de la llamada. Si ve una gran cantidad de códigos de estado fuera del rango `200` , esto puede indicar un problema con su extremo AJAX.
      </td>
    </tr>

    <tr>
      <td>
        Problemas específicos de ubicación de páginas web
      </td>

      <td>
        Examine posibles problemas de AJAX dentro del contexto de la página donde se cargan. Seleccione una transacción AJAX, luego seleccione cualquier traza de la tabla [<DNT>**Session traces with AJAX**</DNT>](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle) .
      </td>
    </tr>
  </tbody>
</table>

## Cómo hacerlo [#ajax-dashboard]

Para solucionar problemas con solicitudes AJAX para su aplicación:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX**
   </DNT>

   .

2. Seleccione el tipo de dispositivo: escritorio (predeterminado), móvil y tableta.

3. Haga clic en una solicitud AJAX.

Una vez que se haya concentrado en una solicitud de Ajax, es hora de investigar. Pruebe algunas de estas estrategias:

<CollapserGroup>
  <Collapser
    id="ajax-summary"
    title="Comience con gráficos de resumen AJAX"
  >
    La página de resumen proporciona varios cuadros para ayudarle a solucionar problemas de llamadas AJAX.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Página de resumen de AJAX
          </th>

          <th>
            Comentarios
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Grupos y filtros
          </td>

          <td>
            Utilice cualquiera de las opciones <DNT>**Sort by**</DNT> disponibles en la UI. Todas las solicitudes AJAX que tardan más de dos minutos se filtran automáticamente
          </td>

          <td>
            Utilice la opción <DNT>**Group by**</DNT> para seleccionar `requestUrl` o `groupedRequestUrl` para obtener más flexibilidad al ver sus datos.
          </td>
        </tr>

        <tr>
          <td>
            Extremo
          </td>

          <td>
            El gráfico <DNT>**Throughput**</DNT> muestra los cinco extremos con mayor rendimiento. Si la llamada tiene más de cinco extremos, se consolidarán en el gráfico como <DNT>**Other**</DNT>.
          </td>
        </tr>

        <tr>
          <td>
            Llamadas de New Relic
          </td>

          <td>
            Es posible que vea nuestro propio monitoreo de llamadas AJAX del navegador a su aplicación. Esto es normal porque toda la actividad se captura durante la sesión browser .
          </td>
        </tr>

        <tr>
          <td>
            Faltan datos del navegador
          </td>

          <td>
            Los detalles de sincronización de AJAX no están disponibles en IE 7, IE 8 o Chrome para el navegador iOS. Si no ve los datos esperados de otros navegadores, siga nuestros [procedimientos de resolución de problemas AJAX](/docs/browser/new-relic-browser/troubleshooting/troubleshoot-ajax-data-collection).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="ajax-performancex"
    title="Obtenga detalles mediante llamadas o visitas a la página"
  >
    Después de seleccionar una llamada específica en la página de resumen <DNT>**AJAX**</DNT> , puede profundizar en información detallada con el enlace <DNT>**AJAX performance**</DNT> . Esto incluye un enlace directo a [los detalles del rastreo de sesión](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle).

    Desde aquí también puede seleccionar la pestaña para obtener datos de rendimiento por páginas vistas. (Si las solicitudes del servidor de su aplicación superan con creces la transacción `PageView` de su browser , esto se debe a que algunas solicitudes a su backend se realizan a través de AJAX. Para obtener más información, consulte nuestros [procedimientos de resolución de problemas](/docs/browser/new-relic-browser/troubleshooting/app-server-requests-greatly-outnumber-browser-pageview-transactions)).

    <img
      title="New Relic browser monitoring: AJAX details"
      alt="A screenshot of the AJAX details UI in New Relic"
      src="/images/browser_screenshot-full_ajax-details.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX > (select an AJAX call)**</DNT>: este ejemplo muestra detalles de rendimiento para una llamada AJAX específica. También puede ver los detalles del rendimiento por páginas vistas.
    </figcaption>

    AJAX extremo en el gráfico <DNT>**Average response time**</DNT> aparece como cuatro o dos períodos de tiempo. Esto depende de si existen [cabeceras de rastreo multiaplicación](/docs/apm/transactions/cross-application-traces/cross-application-tracing#security).

    * Cuatro períodos de tiempo (

      <DNT>
        **Application time**
      </DNT>

      ,

      <DNT>
        **Queue time**
      </DNT>

      ,

      <DNT>
        **Network time**
      </DNT>

      y

      <DNT>
        **Callback time**
      </DNT>

      ): Estas llamadas AJAX se realizan contra el monitor de aplicaciones por parte de

      <InlinePopover type="apm"/>

      agente que proporciona encabezados de seguimiento de múltiples aplicaciones.

    * Dos períodos de tiempo (

      <DNT>
        **Response time**
      </DNT>

      y

      <DNT>
        **Callback time**
      </DNT>

      ): Estas llamadas AJAX se realizan contra aplicaciones que no están monitoreadas por el agente APM o que están monitoreadas por un agente que no proporciona encabezados de seguimiento de aplicaciones múltiples.
  </Collapser>

  <Collapser
    id="distributed tracing"
    title="Traza tus peticiones de principio a fin"
  >
    Para trazar tus solicitudes de principio a fin, también puedes hacer clic en el enlace [rastreo distribuido](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) en la UI <DNT>**AJAX**</DNT>.

    * Para ver una lista de rastreo distribuido, haga clic en el enlace en la UI

      <DNT>
        **AJAX**
      </DNT>

      en el nivel de resumen de AJAX.

    * Para ver toda la traza filtrada por su aplicación y un tipo de solicitud específico, haga clic en el enlace rastreo distribuido para la solicitud que seleccione en la UI

      <DNT>
        **AJAX**
      </DNT>

      .
  </Collapser>

  <Collapser
    id="time-percentage-example"
    title="Ejemplo de porcentaje de tiempo"
  >
    Cuando ordena la lista de categorías AJAX por <DNT>**Total time percentage**</DNT>, la lista muestra el porcentaje de cada categoría AJAX. Además, el gráfico muestra las principales solicitudes con los porcentajes de tiempo más altos.

    Para presentar esta información, browser toma el tiempo de solicitud acumulativo para cada categoría AJAX y lo divide por el tiempo de solicitud acumulativo para todas las solicitudes AJAX. Esto ayuda a identificar dónde optimizar el tiempo de respuesta, porque las solicitudes de alto rendimiento se verán favorecidas sobre las solicitudes de bajo rendimiento.

    <DNT>
      **Example: Calculating time percentages for two AJAX categories**
    </DNT>

    Este ejemplo utiliza dos categorías AJAX: `api1.example.com` y `api2.example.com`.

    * Tu `api1.example.com` recibe una visita y tarda 1 segundo (1000 ms) en responder (1 x 1 segundo = 1 segundo).

    * Tu `api2.example.com` recibe 500 visitas y tarda 1 ms en responder (500 x 1 ms = 500 ms o 0,5 segundos).

      El tiempo de solicitud acumulativo para todas sus categorías AJAX es 1500 ms o 1,5 segundos. Para obtener los porcentajes de tiempo, divida cada categoría AJAX por el tiempo de solicitud acumulado y luego multiplique por 100 para obtener el porcentaje.

      Entonces, `api1.example.com` es el 67 % (1000 dividido por 1500, multiplicado por 100) y `api2.example.com` es el 33 % (500 dividido entre 1500, multiplicado por 100) del porcentaje de tiempo total.

      <table>
        <thead>
          <tr>
            <th>
              <DNT>
                **Time calculations**
              </DNT>
            </th>

            <th>
              <DNT>
                **api1**
              </DNT>
            </th>

            <th>
              <DNT>
                **api2**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Número de visitas
            </td>

            <td>
              1
            </td>

            <td>
              500
            </td>
          </tr>

          <tr>
            <td>
              Hora de responder
            </td>

            <td>
              1 segundo (1000 ms)

              1 golpe x 1000 ms = 1000 ms (1 segundo)
            </td>

            <td>
              1 milisegundo (1 ms)

              500 visitas x 1 ms = 500 ms (0,5 segundos)
            </td>
          </tr>

          <tr>
            <td>
              Tiempo de solicitud acumulado para todas las categorías AJAX
            </td>

            <td>
              1000 ms + 500 ms = 1500 ms (1,5 segundos)
            </td>

            <td>
              1000 ms + 500 ms = 1500 ms (1,5 segundos)
            </td>
          </tr>

          <tr>
            <td>
              Porcentaje de tiempo = Categoría / 1500 ms de tiempo de solicitud acumulativo x 100 para porcentaje
            </td>

            <td>
              1000 ms/1500 x 100 = 67%
            </td>

            <td>
              500 ms/1500 x 100 = 33%
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>

## Que sigue [#next]

Además de la UI <DNT>**AJAX**</DNT>, también puedes utilizar estos recursos:

* Ayude a prevenir que ocurran problemas utilizando [alerta](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-alerts) e [inteligencia aplicada](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-applied-intelligence) para sus indicadores de rendimiento clave.
* Utilice [el monitoreo de aplicaciones de una sola página (SPA)](/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring). Esto es valioso para cualquier aplicación que utilice solicitudes AJAX para extraer contenido de forma dinámica y crear una experiencia fluida para el usuario.
* [consulta tus datos](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data) en la UI o por API. Por ejemplo, puede consultar con [el evento del navegador predeterminado](/docs/insights/insights-data-sources/default-data/browser-default-events-insights), usar [SPA `AjaxRequest`](/attribute-dictionary/?event=AjaxRequest) para datos geográficos y del navegador, u obtener sus propios [datos personalizados](/docs/telemetry-data-platform/get-data-new-relic/getting-started/introduction-new-relic-data-ingest-apis-sdks) en New Relic.
* Visualice y comparta sus datos con [gráficos](/docs/insights/use-insights-ui/manage-dashboards/chart-types) y [paneles](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards).
