---
title: 'Excepciones manejadas: analizar tendencias, prevenir fallas, investigar ocurrencias'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Crashes
metaDescription: 'Use the handled exceptions UI to analyze major factors contributing to poor mobile app experience, and use filterable data to find a resolution.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra característica de monitoreo de excepciones manejadas lo ayuda a identificar factores importantes que contribuyen a una experiencia deficiente en la aplicación móvil y a utilizar datos filtrables para encontrar una resolución más rápidamente. También puede utilizar la [API de excepciones manejadas](#hex-api) para personalizar los datos que envía y utilizar NRQL para consultar y compartir los datos.

<img
  title="Mobile Handled Exceptions"
  alt="Mobile Handled Exceptions"
  src="/images/mobile_screenshot-full_handled-exceptions-summary.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> A medida que explora la gran cantidad de datos en los gráficos y las tablas, utilice grupos y filtros para descubrir patrones que le ayuden a determinar la causa raíz de las excepciones de las aplicaciones móviles.
</figcaption>

## Característica

Manejar las excepciones a medida que ocurren puede ayudar a mejorar la experiencia del usuario en su aplicación móvil, pero no es suficiente para detectar excepciones. También es necesario saber cómo prevenirlos. Nuestra característica Excepciones manejadas le ayuda a responder este tipo de preguntas:

* ¿Cuántos tipos diferentes de excepciones manejadas se producen? Una tasa de ocurrencia alta puede indicar que necesita realizar cambios en los sistemas backend.
* ¿Por qué el uso de la aplicación por parte del usuario resulta en un intento/captura? ¿Cuál es el contexto de las excepciones?
* ¿Cuándo pueden las respuestas de un entorno de prueba a las excepciones manejadas indicar problemas adicionales y más graves?
* ¿Qué habría causado un bloqueo si la excepción no se hubiera detectado en producción? ¿Qué más (en el código o en la API backend) sigue afectando la experiencia del usuario?

Al utilizar excepciones controladas, puede identificar y resolver este tipo de problemas más rápidamente.

## Requisitos

Para ver los datos de excepciones manejadas, su aplicación debe cumplir estos requisitos:

* <DNT>
    **Android:**
  </DNT>

  [Agente Android versión 5.15.0 o superior](/docs/release-notes/mobile-release-notes/android-release-notes)

* <DNT>
    **iOS:**
  </DNT>

  [Versión del agente iOS 5.15.0 o superior](/docs/release-notes/mobile-release-notes/ios-release-notes)

## Gráficos de porcentaje de excepción [#percentage-charts]

Comience con los gráficos de porcentaje <DNT>**Users affected**</DNT> y <DNT>**Sessions affected**</DNT> para ver si hay picos, caídas o patrones inesperados con excepciones en general. Si el gráfico <DNT>**Users affected**</DNT> está vacío, significa que no hubo sesiones de usuario durante el período de tiempo seleccionado.

Utilice esto para responder preguntas como:

* ¿Hay algún pico cerca del lanzamiento de una versión reciente?
* ¿Hay algún período en el que el porcentaje de usuarios se haya visto afectado significativamente por la excepción?
* ¿Hay períodos sin incidentes?

Para examinar los datos con mayor detalle: debajo de cualquier gráfico, seleccione [<DNT>**Expand chart**</DNT>](#top5-image).

<CollapserGroup>
  <Collapser
    id="percentage-charts-image"
    title="Ejemplo de gráficos de porcentaje de excepción"
  >
    <img
      title="Mobile Handled Exceptions: Percentage charts"
      alt="Mobile Handled Exceptions: Percentage charts"
      src="/images/mobile_screenshot-full_handled-exception-percentages.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> Los gráficos de porcentajes le ayudan a ver rápidamente picos, caídas o patrones inesperados, con excepciones en general.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Grupos y filtros [#groups-filters]

Utilice los grupos y filtros para examinar los atributos en busca de fallas, dispositivos, ubicaciones u otros atributos personalizados con más detalle. Puede seleccionar un grupo y luego filtrar por datos específicos. Utilice esto para hacer cosas como:

* Agrupe la lista por ubicación de excepción (predeterminada), causa, compilación o versión de la aplicación, dispositivos, conexiones u otro atributo personalizado. Esto le permite descubrir patrones en sus excepciones para determinar la causa raíz.

* Utilice el [selector de tiempo](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) para ajustar el período de tiempo seleccionado actualmente.

* Filtre por un

  <DNT>
    **Version**
  </DNT>

  específico o por uno o más atributos

  <DNT>
    **Filter**
  </DNT>

  , como `appVersion`, `exceptionLocationMethod`, `lastInteraction`, o cualquiera de la [lista más larga](/docs/insights/insights-data-sources/default-data/mobile-events-attributes) de atributos estándar y personalizados.

Los filtros seleccionados actualmente aparecen en la parte superior de la página de la UI . Puede cerrarlos, agregar otros filtros o seleccionar otros grupos y filtros.

<CollapserGroup>
  <Collapser
    id="groups-filters-image"
    title="Ejemplo de grupos y filtros"
  >
    <img
      title="Mobile Handled Exceptions: Groups and filters"
      alt="Mobile Handled Exceptions: Groups and filters"
      src="/images/mobile_screenshot-full_handled-exception-groups.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> Agrupe los datos por atributo que más le interesen y luego seleccione uno o más filtros para ayudar a identificar causas específicas detrás de las excepciones.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Principales ubicaciones de excepción [#top5-exceptions]

Utilice la tabla <DNT>**Top exception locations**</DNT> para buscar u ordenar patrones en el tipo de excepción que seleccionó entre los [grupos y filtros](#groups-filters). Esto incluye:

* Ubicaciones recurrentes en el rastreo del stack
* Versión de la aplicación móvil
* Numero de incidentes
* Número de usuarios afectados durante el [periodo de tiempo seleccionado](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker)

Por ejemplo, puede agrupar por `Exception Message`, filtrar por mensaje `timeout` y luego seleccionar ubicaciones de tiempo de espera individuales de la tabla para revisar el rastreo del hilo de la pila y los detalles sobre cada aparición.

* Para filtrar o agrupar por otro atributo, utilice la ventana de búsqueda de la tabla o seleccione cualquiera de los filtros disponibles. Por ejemplo, filtre por tipo de ocurrencia, dispositivo, ubicación específica o cualquier atributo personalizado.
* Para buscar otros patrones históricos, cambie el período de tiempo seleccionado.

<CollapserGroup>
  <Collapser
    id="top-image"
    title="Ejemplo de ubicaciones de excepción principales"
  >
    <img
      title="Mobile Handled Exceptions: Top locations"
      alt="Mobile Handled Exceptions: Top locations"
      src="/images/mobile_screenshot-full_handled-exception-locations.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> Este ejemplo muestra el botón <DNT>**Expand chart**</DNT> y enlaces al generador de consultas, donde puede consultar, crear un panel y compartir los datos de excepciones manejadas.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Enlaces del generador de consultas [#insights]

<DNT>**Handled exceptions**</DNT> Los gráficos usan atributos predeterminados para eventos móviles (incluido [`MobileHandledException`](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes)), junto con cualquier atributo personalizado que haya agregado a este tipo de evento. Cuando pasa el mouse sobre los gráficos, aparecen [enlaces directos](#top5-image) debajo de ellos. Estos enlaces al generador de consultas le permiten analizar los datos de su aplicación móvil aún más profundamente.

* <DNT>
    **View query**
  </DNT>

  enlace: vea la [consulta NRQL](/docs/insights/new-relic-insights/using-new-relic-query-language/using-nrql) utilizada para calcular los datos del gráfico.

* <DNT>
    **View in query builder**
  </DNT>

  enlace: [vea el gráfico](/docs/insights/new-relic-insights/using-insights-interface/query-page-creating-editing-nrql-queries) y compártalo con otros.

## Tabla de ubicaciones de excepción [#locations-table]

La tabla <DNT>**Exception locations**</DNT> complementa los gráficos. Enumera dónde aparecen las cinco excepciones principales manejadas en su hilo de rastreo de la pila y las vincula a detalles relevantes. Cada fila le ayuda a encontrar respuestas a preguntas como:

* ¿Cuántas de estas excepciones ocurrieron dentro del [período de tiempo](#time-period) seleccionado?
* ¿Una versión específica de la aplicación tiene un número mayor (o menor) de usuarios afectados?
* ¿Qué excepción tiene el menor número de ocurrencias?

Puede cambiar el orden de clasificación o las opciones de filtro para centrarse solo en los tipos de excepciones que más le importan a usted y a sus equipos. Para ver [detalles adicionales del hilo para cada aparición](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/handled-exceptions-occurrences) de la excepción, seleccione un registro de la tabla <DNT>**Top exceptions location**</DNT> .

<CollapserGroup>
  <Collapser
    id="table-image"
    title="Ejemplo de tabla de ubicaciones de excepción"
  >
    <img
      title="Mobile Handled Exceptions: Locations table"
      alt="Mobile Handled Exceptions: Locations table"
      src="/images/mobile_screenshot-full_handled-exception-location-example.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (click on an exception):**</DNT> Para continuar a la página <DNT>**Occurrences**</DNT> de la excepción manejada, seleccione cualquier fila de la tabla.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Detalles de ocurrencia de excepción manejada [#hex-occurrences]

Para ver detalles de cada aparición de una excepción manejada:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions**
   </DNT>

   .

2. En la tabla

   <DNT>
     **Top exception locations**
   </DNT>

   , seleccione una excepción controlada en cualquier fila.

La página <DNT>**Occurrences**</DNT> muestra detalles sobre la excepción seleccionada, incluidos datos desglosados por tipo de dispositivo o sistema operativo, número de usuarios afectados, ocurrencias totales para el período de tiempo seleccionado, atributo y más.

<img
  title="Mobile Handled Exceptions: Occurrences"
  alt="Mobile Handled Exceptions: Occurrences"
  src="/images/mobile_screenshot-full_handled-exception-occurrences.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (select an exception) > Occurrences:**</DNT> Utilice los detalles del hilo para examinar más a fondo los patrones en el rastreo del stack en busca de una excepción manejada.
</figcaption>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Encuentra patrones generales
      </td>

      <td>
        Desde la página <DNT>**Occurrences**</DNT> :

        * Revise la información

          <DNT>
            **Summary**
          </DNT>

          de la ocurrencia seleccionada.

        * Compare los gráficos

          <DNT>
            **Occurrence by version**
          </DNT>

          y

          <DNT>
            **Breakdown of handled exception type**
          </DNT>

          .

        * En el gráfico

          <DNT>
            **Breakdown of handled exception type**
          </DNT>

          , alterne entre `Device type` y `OS version`.

        * Utilice el [selector de tiempo](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) para ajustar el período de tiempo seleccionado actualmente.

        * Para buscar otros patrones, seleccione

          <DNT>
            **Back to handled exceptions**
          </DNT>

          .
      </td>
    </tr>

    <tr>
      <td>
        Encuentra patrones más específicos
      </td>

      <td>
        Haga cualquiera de las siguientes cosas:

        * En la parte superior de la página, seleccione un

          <DNT>
            **Version**
          </DNT>

          específico o seleccione uno o más

          <DNT>
            **Filter**
          </DNT>

          .

        * Examina los datos en el hilo.

        * Desde los detalles

          <DNT>
            **Stack trace**
          </DNT>

          , desplácese por el número de apariciones.

        * Utilice el [selector de tiempo](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) para ajustar el período de tiempo seleccionado actualmente.
      </td>
    </tr>

    <tr>
      <td>
        Encuentra patrones de atributo
      </td>

      <td>
        Revise las listas de [`MobileHandledException`atributo](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes) relacionados con la ocurrencia, que incluyen:

        * Excepciones manejadas
        * Dispositivo
        * Conexión
        * Ubicación
        * Otros, como [el atributo personalizado](/docs/insights/insights-data-sources/custom-events/insert-custom-events-attributes-mobile-data) que creaste
      </td>
    </tr>

    <tr>
      <td>
        Consultar o visualizar los datos de ocurrencia
      </td>

      <td>
        Utilice New Relic para [consultar los datos](/docs/insights/nrql-new-relic-query-language/using-nrql/query-page-create-edit-nrql-queries) o [crear un panel](/docs/insights/use-insights-ui/manage-dashboards/create-edit-copy-insights-dashboards) que pueda ver o compartir.
      </td>
    </tr>
  </tbody>
</table>

### traza de evento para una ocurrencia [#event-trail]

El gráfico <DNT>**Event trail**</DNT> le permite ver el evento de marca de tiempo previo a una excepción manejada.

<img
  title="event trail chart for handled exceptions"
  alt="event trail chart for handled exceptions"
  src="/images/mobile_screenshot-full_event-trail-handled-exceptions.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (click an exception) > (scroll down to Event trail chart):**</DNT> Vea la traza de evento del evento previo a una excepción manejada.
</figcaption>

## Rastreo del stack sin simbolizar [#unsymbolicated]

New Relic no almacena el rastreo de la pila sin símbolos para las excepciones manejadas. Esto es diferente al [accidente traza de evento](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-crash-event-trail). Puede [cargar un dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps) más tarde según sea necesario, ya que las nuevas excepciones manejadas se simbolizarán.

## API de excepciones manejadas [#hex-api]

Nuestra característica <DNT>**Handled exceptions**</DNT> incluye automáticamente un atributo predeterminado que puede usar para explorar los datos de excepciones manejadas en el generador de consultas y obtener detalles específicos:

* Utilice el [método`recordHandledExceptions()` ](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-handled-exceptions/).

* [consulta](/docs/insights/nrql-new-relic-query-language/using-nrql/query-page-create-edit-nrql-queries) el tipo de evento [`MobileHandledException`](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes) . Para obtener más información, consulte los [ejemplos de NRQL](/docs/insights/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-mobile#mobilehandledexception-examples) para

  <InlinePopover type="mobile"/>

  .

## Crear atributo personalizado y evento

También puedes agregar [atributo personalizado](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile/#custom-attributes) y [evento personalizado](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile). Una vez que los crees, selecciona y consulta el atributo en la página <DNT>**Handled exceptions**</DNT> .
