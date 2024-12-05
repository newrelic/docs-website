---
title: Faltan datos de traza
type: troubleshooting
tags:
  - Understand dependencies
  - Distributed tracing
  - Troubleshooting
metaDescription: 'New Relic distributed tracing: Troubleshoot missing spans or other missing data in your distributed traces.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Ha habilitado [rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) pero los datos que esperaba ver no aparecen en UI de rastreo distribuido de New Relic.

## Antes de que empieces [#before]

Antes de realizar la resolución de problemas, puede resultarle útil:

* Revise los detalles técnicos de [cómo funciona el rastreo distribuido](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works).

* Utilice nuestra [aplicación de estado de instrumentación](https://one.newrelic.com/dt-setup-assistant) para ver una descripción general de su instrumentación traza, incluidas las tasas de muestreo. Esto puede ayudarle a comprender los tramos faltantes y las trazas fragmentadas. Para encontrar esto, vaya a:

  <DNT>
    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Apps > Distributed tracing instrumentation status**
  </DNT>

  .

## Soluciones

A continuación se muestran algunas causas y soluciones para la falta de datos de traza:

### Problemas al habilitar o instrumentado [#enable]

<CollapserGroup>
  <Collapser
    id="not-enabled"
    title="Faltan tramos por no tener habilitado el servicio rastreo distribuido"
  >
    Para que rastreo distribuido informe detalles de todos los nodos en una traza, cada aplicación debe ser monitoreada por un agente de New Relic que haya [habilitado rastreo distribuido](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing).

    Si la cuenta New Relic de una aplicación no tiene habilitado rastreo distribuido, tendrá estos problemas:

    * Su página UI de rastreo distribuido no tendrá datos.
    * No reportará datos al rastreo distribuido de otras cuentas.
  </Collapser>

  <Collapser
    id="manual-instrumentation"
    title="Las aplicaciones/servicios faltantes pueden requerir instrumentación manual"
  >
    Cuando habilitas rastreo distribuido para aplicaciones y servicios que New Relic instrumentó automáticamente, generalmente verás datos completos y detallados para esos nodos en la UI de rastreo distribuido.

    Sin embargo, puede notar que faltan algunos servicios o aplicaciones en la traza, o que faltan algunos tramos internos que espera ver. Si ese es el caso, es posible que desee implementar [instrumentación personalizada](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) de aplicación o transacción específica para ver más detalles en la traza. Algunos ejemplos de cuándo puede necesitar hacer esto:

    * <DNT>
        **Transactions not automatically instrumented**
      </DNT>

      . Para asegurarse de que su aplicación se instrumente automáticamente, lea la [documentación de requisitos y compatibilidad](/docs/apm/new-relic-apm/getting-started/introduction-apm) del agente New Relic que esté utilizando. Si una aplicación no se instrumenta automáticamente, o si desea agregar instrumentación de una actividad específica, consulte [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/#implementing).

    * <DNT>
        **All Go applications**
      </DNT>

      . El agente Go, a diferencia de otros agentes, requiere instrumentación manual de su código. Para obtener instrucciones, consulte [instrumentación de una aplicación Go](/docs/agents/go-agent/instrumentation/instrument-go-transactions).

    * <DNT>
        **A service doesn't use HTTP**
      </DNT>

      . Si un servicio no se comunica a través de HTTP, el agente de New Relic no enviará encabezados de rastreo distribuido. Este puede ser el caso de alguna aplicación no web o cola de mensajes. Para solucionar este problema, utilice las [API distribuidas por rastreo](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) para instrumentar la aplicación que llama o la que llama.
  </Collapser>
</CollapserGroup>

### Problemas con los tramos [#spans]

<CollapserGroup>
  <Collapser
    id="advanced-infinite"
    title="Seguimiento infinito: tramos faltantes"
  >
    Si su agente <InlinePopover type="apm"/>no puede escribir datos lo suficientemente rápido en el observador de traza, `queue_size` es una configuración de agente APM adicional para limitar la cantidad de intervalos que mantendrá el agente. Vea los siguientes ejemplos para su agente:

    <table>
      <thead>
        <tr>
          <th>
            Método de configuración .NET
          </th>

          <th>
            Ejemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Archivo de configuración
          </td>

          <td>
            ```xml
            <configuration . . . >
               <infiniteTracing>
                  <trace_observer>
                     <span_events queue_size="100000" />
                  </trace_observer>
               </infiniteTracing>
            </configuration>
            ```
          </td>
        </tr>

        <tr>
          <td>
            Variable ambiental
          </td>

          <td>
            ```ini
            NEW_RELIC_INFINITE_TRACING_SPAN_EVENTS_QUEUE_SIZE=100000
            ```
          </td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>
            Método de configuración de Python
          </th>

          <th>
            Ejemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Archivo de configuración
          </td>

          <td>
            ```ini
            infinite_tracing.span_queue_size = 100000
            ```
          </td>
        </tr>

        <tr>
          <td>
            Variable ambiental
          </td>

          <td>
            ```ini
            NEW_RELIC_INFINITE_TRACING_SPAN_QUEUE_SIZE = 100000
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="export"
    title="El intervalo faltante no se exporta"
  >
    A veces, la propagación del encabezado tiene éxito, pero la información del intervalo no se envía a New Relic. Por ejemplo, si OpenTelemetry no está instrumentado con un exportador New Relic, los detalles del intervalo nunca llegan a New Relic.

    En este diagrama, observe que la propagación del encabezado es exitosa, pero no hay ningún exportador configurado en el Servicio 2 para enviar el intervalo a New Relic:

    <img
      title="missing-exporter.png"
      alt="Diagram showing missing exporter."
      src="/images/distributed-tracing_diagram_missing-exporter.webp"
    />

    El siguiente diagrama también muestra la propagación exitosa del encabezado, pero incluye un exportador en el Servicio 2 que envía los detalles del tramo a New Relic (ver [traza API](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api)):

    <img
      title="exporter-deployed.png"
      alt="Diagram showing a deployed exporter."
      src="/images/distributed-tracing_diagram_exporter-deployed.webp"
    />
  </Collapser>

  <Collapser
    id="sampling"
    title="Tramos faltantes debido al proceso de muestreo"
  >
    El rastreo estándar distribuido para <InlinePopover type="apm"/>utiliza [muestreo adaptativo](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#sampling). Esto significa que un porcentaje de las llamadas a un servicio se reportará como parte de un rastreo distribuido. Es posible que no se hayan seleccionado llamadas específicas a su servicio para ser muestreadas.
  </Collapser>

  <Collapser
    id="agent-limits"
    title="Tramos faltantes debido a que los límites de tramo están al máximo"
  >
    Hay [límites en la cantidad de tramos que se pueden recopilar y mostrar](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#1k-limit). Si una aplicación genera una gran cantidad de intervalos para una sola llamada, podría exceder el límite de recopilación de intervalos del agente APM para ese ciclo de recolección. Esto podría dar como resultado tramos faltantes y limitar significativamente la cantidad de trazas que el agente puede muestrear e informar por completo.

    Actualmente solo mostramos 10.000 tramos a la vez.
  </Collapser>

  <Collapser
    id="late-spans"
    title="Intervalos faltantes debido a que los intervalos se enviaron tarde"
  >
    Los tramos deben enviarse dentro de los últimos sesenta minutos para ser capturados en un índice de traza. Si envía intervalos de más de sesenta minutos pero más recientes que un día, los datos del intervalo se seguirán escribiendo. Sin embargo, no se incluirá en el índice de trazas, que controla la lista de trazas en la UI del rastreo distribuido. Si un lapso tiene una timestamp anterior a un día, se eliminará. Esto ocurre a menudo cuando hay un desfase horario (diferencias de tiempo) entre sistemas o trabajos en segundo plano que se ejecutan durante mucho tiempo.

    <Callout variant="important">
      Cualquier intervalo enviado a través del [protocolo OpenTelemetry](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md) (OTLP para abreviar) que dure más de sesenta minutos no se escribirá en [NRDB](/docs/data-apis/get-started/nrdb-horsepower-under-hood/), lo que producirá el siguiente NrIntegrationError:

      ```
      The span timestamp cannot be older than 60 minutes.
      ```
    </Callout>
  </Collapser>
</CollapserGroup>

### Problemas con los detalles de la traza.

<CollapserGroup>
  <Collapser
    id="middleware-failure"
    title="El middleware no reconoce el encabezado propietario de New Relic"
  >
    Si su transacción solo envía el encabezado propietario de New Relic, es posible que algún middleware no reconozca el formato y luego elimine la información como se muestra en este diagrama:

    <img
      title="broken-trace.png"
      alt="Diagram showing dropped header information."
      src="/images/distributed-tracing_diagram_broken-trace.webp"
    />

    Una solución es actualizar su agente New Relic a una versión que admita W3C Trace Context. En el siguiente diagrama, el agente New Relic compatible con W3C pasa el encabezado anterior junto con dos encabezados estandarizados:

    <img
      title="upgraded-agent.png"
      alt="Diagram showing a W3C compatible New Relic agent."
      src="/images/distributed-tracing_diagram_upgraded-agent.webp"
    />
  </Collapser>

  <Collapser
    id="proxy"
    title="Falta un intermediario o no pasa contexto de traza"
  >
    Algunos problemas potenciales con apoderados y otros intermediarios:

    * <DNT>**Incomplete trace.**</DNT> Algunos intermediarios no propagarán automáticamente el [encabezado del rastreo distribuido](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#headers). En ese caso, debe configurar ese componente para permitir que el encabezado pase del origen al destino. Para obtener instrucciones, consulte la documentación de ese componente intermediario.

    * <DNT>**Missing intermediary in trace.**</DNT> Si el intermediario es New Relic-monitor, asegúrese de que propague el encabezado `newrelic` generado o actualizado por el agente de New Relic que se ejecuta en ese intermediario. Esto puede manifestarse cuando un intermediario estaba previamente visible en traza, pero desapareció después de que se habilitó rastreo distribuido para una entidad ascendente (por ejemplo, una aplicación browser-monitor).

      <Callout variant="tip">
        Si alguna entidad reporta datos de traza a otro sistema de rastreo, puede usar el ID de traza de la UI de New Relic para buscar tramos faltantes en otros sistemas de rastreo.
      </Callout>
  </Collapser>

  <Collapser
    id="mixed-sourcees"
    title="Unir tramos de fuentes mixtas"
  >
    Si cada agente en una cadena admite W3C Trace Context, entonces podemos unir los tramos en una traza completa. Si parte de la cadena proviene de un agente, como Zipkin, que no admite W3C Trace Context, es posible que los tramos provenientes de ese agente no se incluyan en la traza.
  </Collapser>

  <Collapser
    id="account-access"
    title="Los detalles de la traza están ofuscados."
  >
    Si una traza contiene datos del monitor de aplicación de varias cuentas de New Relic y sus permisos de usuario no le permiten acceder a esas cuentas, algunos de los detalles del intervalo y del servicio se [ocultarán en la UI](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#account-access).

    Por ejemplo, es posible que veas una serie de asteriscos (\*\*\*\*\*) en lugar del nombre del servicio en tu lista de rastreo distribuido si no tienes acceso a la cuenta vinculada con el servicio.
  </Collapser>

  <Collapser
    id="mismatched-trace-details"
    title="La información de la lista de trazas y los detalles de la traza no coinciden."
  >
    La lista de trazas se genera mediante índices de trazas, que se capturan en una ventana de veinte minutos desde que se reciben los primeros tramos.

    Por lo general, esto se debe a [tramos tardíos](#late-spans).
  </Collapser>

  <Collapser
    id="long-traces-short-backend"
    title="Traza larga con tiempos de backend cortos"
  >
    Si observa tiempos de backend inusualmente cortos para trazas largas, es probable que se trate de un problema con la marca de tiempo que se envía.

    Por ejemplo, el intervalo de raíz podría volver a publicar microsegundos como milisegundos. Esto también puede suceder si el tramo raíz es una aplicación browser . Al utilizar un cliente externo como un browser web, es posible que experimente asimetrías horarias (diferencias horarias) con más frecuencia.
  </Collapser>
</CollapserGroup>

### Problemas con la aplicación browser [#browser]

<CollapserGroup>
  <Collapser
    id="spans-browser"
    title="Intervalos y transacciones faltantes después de habilitar una aplicación browser"
  >
    Las versiones anteriores de algunos <InlinePopover type="apm"/>agentes son incompatibles con rastreo distribuido para la aplicación browser . Si la aplicación del browser realiza una solicitud AJAX a una aplicación APM que ejecuta un agente incompatible, es posible que el agente APM no registre los datos de transacción y extensión para esa solicitud.

    Si rastreo distribuido está habilitado para una aplicación de navegador y no ve datos de transacción o extensión para solicitudes APM posteriores, revise los [datos del navegador en requisitos de rastreo distribuido](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements) y confirme que todas las aplicaciones estén ejecutando versiones compatibles del agente APM.
  </Collapser>

  <Collapser
    id="browser-spans-missing"
    title="No se ven los intervalos de usuario final de la aplicación browser"
  >
    Si parece que a Traza le faltan tramos de usuario final, asegúrese de haber leído y comprendido los [requisitos](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements) y [procedimientos de habilitación](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#enable) del rastreo distribuido del navegador.

    En la [página UI <DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls), hay enlaces a la UI usuario del rastreo distribuido independientemente de si hay tramos finales de usuario presentes en esa traza. Para obtener detalles sobre qué datos generan intervalos, consulte [Requisitos](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements).
  </Collapser>

  <Collapser
    id="orphan-browser-spans"
    title="Los tramos browser no están conectados a otros tramos"
  >
    Las versiones anteriores de algunos <InlinePopover type="apm"/>agentes son incompatibles con rastreo distribuido para la aplicación browser . Si faltan intervalos de APM de manera constante en la traza que incluye la aplicación del navegador, consulte los [datos del navegador en los requisitos distribuidos del rastreo](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements) y confirme que todas las aplicaciones ejecutan versiones compatibles del agente APM.

    Para conocer otras causas de extensiones de navegador huérfanas, consulte [Informes de extensiónbrowser ](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#browser-spans).
  </Collapser>
</CollapserGroup>

### Otros problemas [#other]

<CollapserGroup>
  <Collapser
    id="multiple-app-names"
    title="Buscar por entity.name y no encontrar nombres de aplicaciones asociadas"
  >
    Causa posible: para aplicaciones que tienen [varios nombres de aplicación](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app), el atributo `entity.name` se asociará solo con el nombre de la aplicación principal. Para buscar por otros nombres de aplicaciones, busque usando el atributo `appName` .
  </Collapser>

  <Collapser
    id="supporting-open-telemetry"
    title="Apoyando OpenTelemetry"
  >
    Las preguntas sobre la integración con OpenTelemetry deben dirigirse al [Foro de soporte](https://discuss.newrelic.com).
  </Collapser>
</CollapserGroup>

## Otros factores que afectan el acceso [#more-info]

Para obtener más información sobre los factores que pueden afectar su capacidad para acceder a la característica New Relic, consulte [Factores que afectan el acceso](/docs/accounts/accounts-billing/general-account-settings/factors-affecting-access-features-data).
