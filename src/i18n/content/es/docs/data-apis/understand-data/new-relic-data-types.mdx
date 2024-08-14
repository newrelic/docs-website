---
title: 'New Relic : métrica, evento, log y traza (MELT)'
tags:
  - Ingest and manage data
  - Understand data
metaDescription: 'An overview of the MELT data New Relic reports: metrics, events, logs, and traces (spans).'
freshnessValidatedDate: never
translationType: machine
---

La plataforma New Relic se basa en los cuatro tipos telemetry data fundamentales que creemos que son necesarios para un monitoreo completo y efectivo del sistema: [métrica](#metrics), [evento](#event-data), [registros](#log-data) y [traza](#trace-data) (a menudo denominado "MELT" en la industria de observabilidad).

Después de [registrarse para obtener una cuenta gratuita de New Relic](https://newrelic.com/signup) e [instalar](/docs/using-new-relic/cross-product-functions/install-configure/install-new-relic) cualquiera de nuestros servicios de monitoreo, puede comenzar a trabajar con sus datos.

## Comience a comprender nuestros datos [#get-started]

En este documento, daremos una explicación bastante técnica de nuestros tipos de datos MELT principales, su estructura y cómo se utilizan en nuestra característica. Puede utilizar la mayoría de nuestras características sin necesidad de comprender la estructura de datos subyacente. Pero comprender mejor esto puede ayudarle [a introducir datos en New Relic](/docs/data-apis/custom-data/get-custom-data-from-any-source), comprender los datos que ve en nuestra UI y [consultar y registrar sus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data).

## Métrica

Primero, explicaremos la definición de métrica desde la perspectiva de la industria del monitoreo y luego explicaremos cómo New Relic maneja la métrica.

### Métrica en la industria del monitoreo [#metrics-conceptual]

En la industria del monitoreo de software, una métrica significa una medida numérica de una aplicación o sistema. Las métricas generalmente se informan en un cronograma regular.

Dos tipos principales de métrica son:

* Datos agregados. Por ejemplo: un recuento de eventos durante un minuto o la tasa de algún evento por minuto.
* Un estado numérico en un momento determinado. Por ejemplo: una lectura de temperatura de la CPU o un estado de "% de CPU usado".

Las métricas son relativamente fáciles de informar y almacenar porque un solo registro puede representar un rango de tiempo. También se pueden agregar cada vez más con el tiempo. Por ejemplo, los datos por minuto pueden "acumularse" en agregaciones por hora después de un cierto período de tiempo y, eventualmente, pueden acumularse en una agregación por día. Este enfoque es eficaz para el almacenamiento de datos a largo plazo.

Métrica es una solución sólida para almacenar datos a largo plazo y comprender las tendencias a lo largo del tiempo. Una posible desventaja es que puede resultar difícil realizar un análisis detallado de datos más antiguos que se han agregado a lo largo del tiempo; cuando se requieren muchos detalles sobre acciones importantes específicas, se pueden utilizar [datos de eventos](#event-data) .

### Métrica en New Relic [#metrics-new-relic]

Conceptualmente, "métrica" es una categoría amplia y general. Hay varias formas en que New Relic mide e informa métricas pero, en la práctica, cuando se utiliza la UI de New Relic, normalmente no será necesario comprender cómo sucede esto exactamente. En nuestra documentación, normalmente solo nos referiremos a "métrica", independientemente de cómo se reporten esos datos, a menos que haya una razón por la que necesite saber más (como entender [cómo consultar sus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data)).

Estas son algunas de las formas en que se informan y almacenan las métricas en la plataforma New Relic:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="dimensional-metrics"
    title="Métricas dimensionales (el tipo de datos métrica)"
  >
    En la industria del monitoreo, las métricas "dimensionales" se refieren a datos métricos que tienen una variedad de [atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) (dimensiones) adjuntos, como atributos relacionados con la duración (hora de inicio, hora de finalización), ID de entidad, región, host y más. Este nivel de detalle permite realizar análisis y consultas en profundidad.

    En New Relic, estos datos métricos se adjuntan a nuestro tipo de datos [`Metric`](/docs/data-apis/understand-data/metric-data/metric-data-type) . Este es nuestro tipo de datos de métrica principal y lo utilizan muchas de nuestras herramientas, incluidas:

    * Nuestras integraciones con servicios de telemetría de terceros, como nuestra [integración OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/opentelemetry-introduction), nuestra [integración Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic) y nuestra [integración DropWizard](/docs/more-integrations/open-source-telemetry-integrations/dropwizard/dropwizard-reporter).

    * La [API métrica](/docs/introduction-new-relic-metric-api) (la API subyacente utilizada por las herramientas anteriores).

    * El [servicio evento-a-métrica](/docs/data-ingest-apis/get-data-new-relic/metric-api/introduction-events-metrics-service).

      Para consultar el tipo de datos `Metric` , podría utilizar una consulta NRQL como:

      ```sql
      Select * from Metric
      ```

      A medida que pasa el tiempo, las métricas se agregan cada vez más en períodos de tiempo más grandes. Esto se hace para optimizar su capacidad de consultar datos durante un largo período de tiempo.

      Para obtener más detalles sobre los datos `Metric` , consulte [la estructura de datos`Metric` ](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type). Para obtener consejos sobre cómo consultar estos datos, consulte [ejemplos de consulta métrica](/docs/data-ingest-apis/get-data-new-relic/metric-api/view-query-you-metric-data).

      Algunos de nuestros otros tipos de datos métricos están expuestos como métricos dimensionales y están disponibles para consulta. Por ejemplo:

    * [APM intervalo de tiempo de datos métricos](/docs/data-apis/understand-data/metric-data/query-apm-metric-timeslice-data-nrql)

    * [Algunos datos de infraestructura](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-infrastructure-dimensional-metrics-nrql)
  </Collapser>

  <Collapser
    className="freq-link"
    id="timeslice-data"
    title="Intervalo de tiempo de datos métricos (utilizado por APM, browser, móvil)"
  >
    El APM, browser y <InlinePopover type="mobile"/>de New Relic informan y muestran métricas en un formato de datos simple al que nos referimos como <DNT>**metric timeslice data**</DNT>. Un intervalo de tiempo de métrica consta de tres partes: un nombre de métrica, el segmento de tiempo que representa la métrica (el "intervalo de tiempo") y un valor numérico (la medición).

    Por ejemplo: un intervalo de tiempo de métrica <InlinePopover type="apm"/>para el tiempo dedicado a una transacción concreta se denomina `WebTransaction/URI/foo` y puede tener un tiempo de respuesta de 0,793 para un intervalo de tiempo de un minuto de 10:20 a. m. a 10:21 a. m. Estas métricas suelen seguir un patrón como `<category>/<class>/<method>`.

    Nuestro agente (APM, browser y dispositivo móvil) puede recopilar miles de intervalos de tiempo métricos por minuto para una variedad de rendimiento métrico. Por ejemplo: tasa de errores, uso de ancho de banda y tiempo de recolección de basura. También tienes la posibilidad de crear [métricas personalizadas](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics).

    Los datos de intervalo de tiempo de métrica son un tipo de datos livianos y carecen del detalle que tienen [las métricas dimensionales](#dimensional-metrics) .

    Formas de explorar y consultar intervalo de tiempo de datos métricos:

    * Para APM: los datos del intervalo de tiempo de métrica se convierten a dimensional métrica y se pueden [consultar vía NRQL](/docs/query-metric-timeslice-data-dimensional-metrics)

    * Utilice la [API REST](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2)

      Si desea obtener más información sobre la estructura de los datos de intervalo de tiempo de métrica y ver algunos ejemplos, expanda el colapsador a continuación.

      <CollapserGroup>
        <Collapser
          id="metric-timeslice-examples"
          title="Ejemplos de intervalo de tiempo de métrica"
        >
          A continuación se muestran algunos ejemplos comunes de datos de intervalo de tiempo de métrica, centrándose en los más comunes utilizados por la aplicación Ruby.

          <DNT>
            **ActiveMerchant**
          </DNT>

          New Relic rastrea una variedad de métricas sobre `ActiveMerchant` transacciones que se pueden utilizar para análisis de negocios y monitoreo del rendimiento. Las métricas se resumen tanto por operación como por puerta de enlace.

          <table>
            <thead>
              <tr>
                <th style={{ width: "150px" }}>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th style={{ width: "150px" }}>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `ActiveMerchant/.*`
                </td>

                <td>
                  `ActiveMerchant/PayJunctionGateway`
                </td>

                <td/>
              </tr>

              <tr>
                <td>
                  `ActiveMerchant/gateway/.*`
                </td>

                <td>
                  `ActiveMerchant/gateway/PayJunctionGateway/purchase`
                </td>

                <td>
                  PayJunctionGateway
                </td>
              </tr>

              <tr>
                <td>
                  `ActiveMerchant/operation/.*`
                </td>

                <td>
                  `ActiveMerchant/operation/purchase`
                </td>

                <td>
                  compra
                </td>
              </tr>
            </tbody>
          </table>

          Para obtener más información, consulte el [sitio web de ActiveMerchant](http://activemerchant.org).

          <DNT>
            **ActiveRecord**
          </DNT>

          `ActiveRecord` Es la API de mapeo relacional de objetos utilizada por la aplicación Ruby on Rails. Las métricas que se muestran aquí miden el rendimiento de los métodos `find` y `save` de `ActiveRecord`.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `ActiveRecord/.*/find`
                </td>

                <td>
                  `ActiveRecord/User/find`
                </td>

                <td>
                  User#find
                </td>
              </tr>

              <tr>
                <td>
                  `ActiveRecord/.*/save`
                </td>

                <td>
                  `ActiveRecord/Product/save`
                </td>

                <td>
                  Product#save
                </td>
              </tr>
            </tbody>
          </table>

          Para obtener más información, consulte la [documentación de API para `ActiveRecord`](http://api.rubyonrails.org/classes/ActiveRecord/Base.html).

          <DNT>
            **Apdex**
          </DNT>

          [Apdex](/docs/site/apdex-measuring-user-satisfaction) es una medida de satisfacción del usuario con el tiempo de carga de la página.

          <DNT>
            **Controller**
          </DNT>

          En la aplicación Ruby on Rails, las solicitudes HTTP son manejadas por acciones del Controlador. Una aplicación Rails tiene muchos controladores, cada uno de los cuales tiene una o más acciones. Cuando su aplicación Rails recibe una solicitud http, esa solicitud se enruta al controlador y la acción apropiados, según la URL de esa solicitud. Luego, esa acción realiza cualquier procesamiento necesario para generar una respuesta http, que suele ser una página web, pero también podría ser un fragmento de página, un documento xml o cualquier otro tipo de datos solicitados por el cliente.

          Las siguientes métricas rastrean el rendimiento de las acciones del controlador, independientemente del enrutamiento y sin tener en cuenta los efectos de la red o del servidor web.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `Controller/.*`
                </td>

                <td>
                  `Controller/Users/show`
                </td>

                <td>
                  /Users/show
                </td>
              </tr>

              <tr>
                <td>
                  `Controller/.*/(?!\(other\)).*`
                </td>

                <td>
                  `Controller/Users/show`
                </td>

                <td>
                  /Users/show
                </td>
              </tr>

              <tr>
                <td>
                  `Controller$`
                </td>

                <td>
                  `Controller`
                </td>

                <td>
                  Todas las acciones del controlador
                </td>
              </tr>

              <tr>
                <td>
                  `ControllerCPU/`
                </td>

                <td>
                  `ControllerCPU/Users/Show`
                </td>

                <td>
                  /Users/show
                </td>
              </tr>
            </tbody>
          </table>

          Para obtener más información, consulte la [documentación de API para `ActionController`](http://api.rubyonrails.org/classes/ActionController/Base.html).

          <DNT>
            **Errors**
          </DNT>

          Esta métrica rastrea la cantidad de errores o excepciones generadas al procesar solicitudes.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `Errors/all`
                </td>

                <td>
                  `Errors/all`
                </td>

                <td/>
              </tr>
            </tbody>
          </table>

          <DNT>
            **External services**
          </DNT>

          La instrumentación de servicios externos captura llamadas a servicios fuera de proceso, como servicios web, recursos en la nube y cualquier otra llamada de red. No incluye otros componentes backend de primera clase como MemCache y la base de datos.

          En la aplicación Ruby instrumentamos la biblioteca `Net::Http` para capturar todos los servicios HTTP.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `External/[^/]+/all$`
                </td>

                <td>
                  `External/service.example.com/all`
                </td>

                <td>
                  Todas las llamadas de service.example.com
                </td>
              </tr>

              <tr>
                <td>
                  `External/`
                </td>

                <td>
                  `External/host.aws.com/Net::Http::POST`
                </td>

                <td>
                  Net::Http&#x3A;:POST\[host.aws.com]
                </td>
              </tr>

              <tr>
                <td>
                  `External/all$`
                </td>

                <td>
                  `External/all`
                </td>

                <td>
                  Servicios externos
                </td>
              </tr>

              <tr>
                <td>
                  `External/[^/]+/(?!all)/`
                </td>

                <td>
                  `External/service.example.com/all`
                </td>

                <td>
                  Todas las llamadas de service.example.com
                </td>
              </tr>
            </tbody>
          </table>

          <DNT>
            **HTTP dispatcher**
          </DNT>

          Esta métrica representa un resumen del rendimiento y el tiempo de respuesta de todas las solicitudes web.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `^HttpDispatcher$`
                </td>

                <td>
                  `HttpDispatcher`
                </td>

                <td>
                  HttpDispatcher
                </td>
              </tr>
            </tbody>
          </table>

          <DNT>
            **MemCache**
          </DNT>

          MemCache es una tecnología popular que permite que la aplicación acceda a la memoria compartida proporcionada por cualquier número de máquinas físicas como caché global. Las aplicaciones que utilizan mucho la base de datos suelen utilizar MemCache para obtener beneficios de rendimiento y escalabilidad.

          Estas métricas miden la frecuencia y el tiempo de respuesta de las llamadas a MemCache para leer y escribir datos del caché. El tiempo de respuesta debe ser bajo (menos de 5 ms) para que MemCache funcione correctamente.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `MemCache/.*`
                </td>

                <td>
                  `MemCache/read`
                </td>

                <td>
                  Operaciones de lectura de MemCache
                </td>
              </tr>

              <tr>
                <td>
                  `MemCache/read`
                </td>

                <td>
                  `MemCache/read`
                </td>

                <td>
                  Operaciones de lectura de MemCache
                </td>
              </tr>

              <tr>
                <td>
                  `MemCache/write`
                </td>

                <td>
                  `MemCache/write`
                </td>

                <td>
                  Operaciones de escritura de MemCache
                </td>
              </tr>
            </tbody>
          </table>

          <DNT>
            **Mongrel**
          </DNT>

          Esta métrica mide la longitud de la cola mestiza, que contiene solicitudes http pendientes para ser procesadas por mestiza. El gráfico de actividad HTTP superpone la longitud máxima de la cola para un período determinado. El valor es cero si mongrel está procesando una solicitud pero no tiene otras solicitudes esperando en su cola.

          Al observar este valor en un grupo agregado de mestizos, las longitudes de las colas de todos los mestizos se suman, mostrando la suma de todas las longitudes de las colas.

          La longitud de una cola mestiza debe ser igual o cercana a cero; si está constantemente en un nivel más alto, entonces indica que su aplicación de rieles tiene problemas para cumplir con sus requisitos de carga.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `Mongrel/Queue Length`
                </td>

                <td>
                  `Mongrel/Queue Length`
                </td>

                <td>
                  Longitud de la cola
                </td>
              </tr>
            </tbody>
          </table>

          <DNT>
            **View**
          </DNT>

          `ActionView` es un paquete en Rails que se utiliza para representar la salida que es la respuesta a una solicitud http, como una página html o un documento xml. El `View` lo representa el controlador que maneja la solicitud.

          Si `View` métrica representa una gran parte del tiempo de respuesta de su controlador, podría significar que está realizando muchas operaciones de base de datos dentro de la plantilla de vista.

          <table>
            <thead>
              <tr>
                <th>
                  regex (expresión regular)
                </th>

                <th>
                  métrica de muestra
                </th>

                <th>
                  nombre de la leyenda
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `View/.*`
                </td>

                <td>
                  `View/Users/_child.html.erb/Partial`
                </td>

                <td>
                  Users/\_child.html.erb
                </td>
              </tr>

              <tr>
                <td>
                  `View/.*/Partial`
                </td>

                <td>
                  `View/Users/_child.html.erb/Partial`
                </td>

                <td>
                  Users/\_child.html.erb
                </td>
              </tr>

              <tr>
                <td>
                  `View/.*/Rendering`
                </td>

                <td>
                  `View/Users/show.html.erb/Rendering`
                </td>

                <td>
                  Users/show.html.erb
                </td>
              </tr>
            </tbody>
          </table>

          Para obtener más información, consulte la [documentación de API para `ActionView`](http://api.rubyonrails.org/classes/ActionView/Base.html).
        </Collapser>
      </CollapserGroup>
  </Collapser>

  <Collapser
    className="freq-link"
    id="metric-event-attributes"
    title="Métrica adjunta a evento (utilizada por monitoreo de infraestructura, otros productos)"
  >
    Debido a que [los datos de tipo evento](#event-data) pueden tener cualquier tipo de datos de par principal de valor adjuntos, una forma en que se puede informar la métrica es como [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) adjunto a un evento.

    Un par de ejemplos de esto en New Relic:

    * Nuestro monitoreo de infraestructura reporta muchas métricas que están adjuntas al evento. Por ejemplo, informamos un evento `ProcessSample` , que tiene varias métricas basadas en muestras adjuntas, como el porcentaje de CPU. Para obtener más información sobre los datos de monitoreo de infraestructura, consulte [Datos de infraestructura](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-events).

    * En APM, el evento `Transaction` tiene varias métricas adjuntas, incluida `databaseDuration`.

      Para conocer más sobre estos datos y cómo consultarlos, ver [evento](#events-new-relic).
  </Collapser>

  <Collapser
    className="freq-link"
    id="metric-event-computation"
    title="Métrica como cálculo de evento (usada en algunos gráficos y consultas)"
  >
    La métrica se puede formar contando [eventos New Relic](#event-data), o haciendo algún otro cálculo matemático sobre esos eventos. Por ejemplo, si desea medir el número total de `Transaction` evento durante la última media hora, puede ejecutar esta consulta NRQL:

    ```sql
    Select count(*) from Transaction since 30 minutes ago
    ```

    Otro ejemplo: si desea calcular el tiempo de respuesta promedio de su servicio, puede ejecutar una consulta como:

    ```sql
    FROM Transaction SELECT average(duration) SINCE 30 minutes ago
    ```

    Algunos gráficos de New Relic se generan con este tipo de consulta. La desventaja de este enfoque es que existen límites sobre cuántos eventos puede informar un sistema de monitoreo (incluido el nuestro). Esto significa que a veces, para sistemas de alto rendimiento, es posible que el recuento no represente con precisión la actividad total en ese sistema. Para obtener más información sobre cómo se puede abordar esto, consulte [límites de eventos y muestreo](/docs/agents/manage-apm-agents/agent-data/new-relic-events-limits-sampling).
  </Collapser>
</CollapserGroup>

¿Quieres reportar métrica personalizada? Consulte [Obtener datos en New Relic](/docs/data-apis/custom-data/get-custom-data-from-any-source).

## Datos del evento [#event-data]

Primero, explicaremos la definición de <DNT>**events**</DNT> desde la perspectiva de la industria de monitoreo y luego explicaremos algunos detalles sobre cómo New Relic maneja los datos de eventos.

### Evento en la industria del monitoreo [#event-conceptual]

En la industria del software, los eventos pueden considerarse simplemente “cosas que ocurren en un sistema”. Por ejemplo, el cambio de la configuración del servidor sería un evento. Otro ejemplo: un usuario de un sitio web que hace clic con el mouse.

Algún evento generará un registro almacenado, y ese registro normalmente también se denomina <DNT>**event**</DNT>.

Los datos de eventos representan ocurrencias discretas y normalmente tendrán un alto nivel de detalle, por lo que los datos de eventos son adecuados para consultas y análisis detallados. La desventaja del uso de datos de eventos es que normalmente se informan tantos eventos que puede resultar difícil consultar ese gran conjunto de datos durante períodos de tiempo más largos.

### Evento en New Relic [#events-new-relic]

En New Relic, informamos eventos a objetos de datos también llamados <DNT>**events**</DNT>. Estos eventos tienen múltiples [atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) (pares de valores principales) adjuntos. Los datos del evento se utilizan en algunos gráficos y tablas UI , y también puedes [consultarlos](/docs/using-new-relic/data/understand-data/query-new-relic-data). El tiempo que los datos del evento permanecen disponibles está determinado por [las reglas de retención de datos](/docs/insights/use-insights-ui/manage-account-data/extend-event-data-retention).

Un ejemplo de evento: APM informa un tipo de evento llamado [`Transaction`](/attribute-dictionary/?event=Transaction), que representa una unidad de trabajo lógica en una aplicación. Para ver el [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) adjunto a este evento, puede utilizar una consulta [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) como:

```sql
Select * from Transaction
```

Para ver ejemplos de consulta de datos de eventos, consulte [Introducción a NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql#examples).

Otros detalles sobre los datos del evento New Relic:

* El evento puede tener cualquier tipo de [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) adjunto. Algunos eventos tienen [atributo que reportan datos métricos](#metric-event-attributes).

* Puedes reportar [evento personalizado](/docs/insights/insights-data-sources/custom-data/send-custom-data-insights#ways).

* Para aumentar la disponibilidad de los datos de su evento para consultas/gráficos, puede [convertir los eventos en métrica](/docs/telemetry-data-platform/convert-to-metrics/analyze-monitor-data-trends-metrics/).

* Algunos sistemas generan una gran cantidad de eventos que exceden los límites de recopilación y generan resultados de consulta incompletos. Para obtener más información sobre esto, consulte [muestreo de eventos](/docs/agents/manage-apm-agents/agent-data/new-relic-events-limits-sampling).

* Debido a que

  <DNT>
    **event**
  </DNT>

  es un término general, en algunos contextos de New Relic se referirá a [cualquier tipo de datos que se pueda consultar a través de NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql#what-you-can-query). Por ejemplo, cuando ejecuta una consulta NRQL, devuelve un recuento de [eventos inspeccionados](/docs/insights/use-insights-ui/manage-account-data/rate-limits-insights#inspected-count-limits): este es un recuento de todos los tipos de datos consultados.

## Dato log [#log-data]

Primero, explicaremos la definición de <DNT>**logs**</DNT> desde la perspectiva de la industria de monitoreo y luego explicaremos algunos detalles sobre cómo New Relic maneja los informes log .

### Iniciar sesión en la industria de monitoreo [#logs-conceptual]

Un log es un mensaje sobre un sistema que se utiliza para comprender la actividad del sistema y diagnosticar problemas.

### Logs at New Relic [#logs-new-relic]

Nuestras capacidades [<InlinePopover type="logs"/>](/docs/logs/get-started/get-started-log-management)le brindan una plataforma centralizada que conecta sus datos de registro con otros datos del monitor New Relic. Por ejemplo, puede [ver el registro junto con sus datos de APM](/docs/logs/logs-context/logs-in-context).

En New Relic Logs, los datos se informan con múltiples [atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) (datos de valor principal) adjuntos. Para consultar sus datos log , puede utilizar una consulta NRQL como:

```sql
Select * from Log
```

Para informar datos log personalizados, consulte la [APIlog ](/docs/introduction-new-relic-logs-api).

## Datos de trazas [#trace-data]

Primero, explicaremos la definición de traza desde la perspectiva de la industria del monitoreo y luego explicaremos algunos detalles sobre cómo New Relic maneja el rastreo.

### Seguimiento en la industria del monitoreo [#tracing-conceptual]

En el mundo de las aplicaciones/monitoreo de infraestructura, <DNT>**tracing**</DNT> es un término general utilizado para referirse a varias formas de reportar información sobre cómo está operando un programa o sistema. Por ejemplo, un <DNT>**stack trace**</DNT> proporciona información detallada sobre las subrutinas de un programa.

Para los grandes sistemas modernos, que a menudo se distribuyen en muchos servicios y microservicios, "rastreo" a menudo se refiere a <DNT>**distributed tracing**</DNT>, que es una forma de monitor las solicitudes a medida que se propagan a través de un entorno distribuido complejo.

### Rastreo en New Relic [#new-relic-tracing]

New Relic ofrece una [característica de rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing) que rastrea las solicitudes en todos los sistemas distribuidos y proporciona una UI dedicada para comprender y analizar su traza. En New Relic, los datos de la traza se informan como `Span` objetos, con múltiples [atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) (pares de valores principales) adjuntos.

Para consultar sus datos de seguimiento, puede utilizar una consulta NRQL como:

```sql
Select * from Span
```

Para obtener más información sobre cómo funciona rastreo distribuido, consulte [Comprender rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works).

Para informar datos personalizados de rastreo distribuido, consulte la [traza API](/docs/apm/distributed-tracing/trace-api/introduction-new-relic-trace-api).

## Consultar y enviar datos [#query-data]

Comprender los tipos de datos de New Relic puede ayudarle a:

* [Consultar datos en New Relic](/docs/query-new-relic-data)
* [Enviar datos a New Relic](/docs/new-relic-solutions/new-relic-one/install-configure/install-new-relic)
