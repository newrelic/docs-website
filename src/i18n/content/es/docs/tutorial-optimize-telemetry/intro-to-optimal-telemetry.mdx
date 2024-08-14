---
title: Optimice sus telemetry data con New Relic
metaDescription: Our data ingest governance guide helps you get optimal value for the telemetry data you're reporting to New Relic.
freshnessValidatedDate: '2023-07-26T00:00:00.000Z'
translationType: machine
---

Telemetry data, o datos que se recopilan de una fuente y se informan a un monitor para su análisis, se utilizan cada vez más en las organizaciones modernas con múltiples fuentes de datos para recopilar. Pero navegar y administrar esos datos conlleva sus propias consideraciones, y optimizar la forma en que maneja sus telemetry data puede ahorrarle tiempo y dinero. Esto es especialmente cierto para organizaciones complejas que tienen numerosas unidades de negocios y grupos de trabajo.

Aquí es donde entra en juego <DNT>**Data ingest governance**</DNT>, o la práctica de garantizar un valor óptimo para los telemetry data que su organización ha recopilado. Nuestra guía lo ayudará a prepararse y aplicar las mejores prácticas para utilizar este concepto dentro de su organización. Después de completar esta serie de tutoriales, podrá:

* Reduzca telemetry data redundantes o innecesarios, ahorrándole tiempo y dinero.
* Comprenda exactamente qué grupos dentro de la organización contribuyen con qué datos.
* Exponga de dónde provienen sus telemetry data y reduzca los silos de gestión de datos.
* Contabilice los costos de ingesta de forma clara y concisa.
* Ajuste su volumen de ingesta con el contexto completo del valor de observabilidad de los datos.

<img
  title="Data ingest governance path"
  alt="A diagram displaying the path for setting up data ingest governance with New Relic. The path is 1. Baseline your data, 2. detect anomalies, and 3. optimize your telemetry"
  src="/images/telemetry_diagram_data-ingest-path.webp"
/>

## Antes de que empieces [#before-begin]

Deberá asegurarse de tener datos administrados con New Relic para poder usar <DNT>**data ingest governance**</DNT> para optimizarlos. Consulte nuestro [documento de gestión de datos](/docs/data-apis/manage-data/manage-your-data/) si necesita más información.

<Collapser
  id="understand-nr-consumption-metrics"
  title="Comprender los tipos de eventos de consumo"
>
  Toda la telemetría facturable se rastrea con nuestro evento `NrConsumption` y `NrMTDConsumption` . Esta guía se centra en cómo consultar `NrConsumption`, que proporciona datos más detallados y en tiempo real que `NrMTDConsumption`. El atributo `NrConsumption` `usageMetric` indica el tipo de telemetría.

  Con `NrConsumption`, puede hacer preguntas como "¿Cuántos datos <InlinePopover type="browser"/>ha ingerido cada cuenta en los últimos 30 días?" y "¿Cómo ha cambiado la ingesta desde los 30 días anteriores?" Aquí hay una consulta que devuelve esos datos:

  ```sql
  FROM NrConsumption SELECT sum(GigabytesIngested) WHERE usageMetric = 'BrowserEventsBytes' SINCE 30 days AGO COMPARE WITH 30 days AGO FACET consumingAccountName
  ```

  La respuesta le muestra cuántos GB de datos de monitoreo del navegador ha ingerido por cuenta.

  ```shell
  Banking platform, 75 GB, +2.9%
  Marketing platform, 40 GB, -1.3%
  ```

  A continuación se muestra un desglose de los diferentes tipos de `usageMetric` , el evento constituyente (tipos de evento donde se almacenan los datos) y el tipo de agente o mecanismo responsable de crear la ingesta de datos.

  ### Tabla de desglose de telemetría facturable

  <table>
    <thead>
      <tr>
        <th style={{ width: "200px" }}>
          NrcConsumption.usageMetric
        </th>

        <th style={{ width: "200px" }}>
          Evento constituyente
        </th>

        <th>
          Fuente
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          InfraHostBytes
        </td>

        <td>
          `SystemSample`, `StorageSample`, `InfrastructureEvent`, `NetworkSample`
        </td>

        <td>
          Agente de infraestructura
        </td>
      </tr>

      <tr>
        <td>
          InfraProcesoBytes
        </td>

        <td>
          `ProcessSample`
        </td>

        <td>
          Agente de infraestructura
        </td>
      </tr>

      <tr>
        <td>
          InfraIntegrationBytes
        </td>

        <td>
          Varios eventos para integración de plataforma de terceros así como `ContainerSample`
        </td>

        <td>
          [integración en el host](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations/) y cierta [integración en la nube](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations/#cloud)
        </td>
      </tr>

      <tr>
        <td>
          ApmEventsBytes
        </td>

        <td>
          `Transaction`, `TransactionError` y posiblemente `WorkloadStatus`
        </td>

        <td>
          Agente(s) APM
        </td>
      </tr>

      <tr>
        <td>
          Seguimiento de bytes
        </td>

        <td>
          `Span`, `SpanEvent`
        </td>

        <td>
          Agente(s) APM y OpenTelemetry
        </td>
      </tr>

      <tr>
        <td>
          NavegadorEventosBytes
        </td>

        <td>
          `Browser`, `BrowserInteraction`, `Browser:EventLog`, `Browser:JSErrors`, `JavaScriptError`, `PageView`, `PageViewTiming`, `PcvPerf`
        </td>

        <td>
          Agente del navegador
        </td>
      </tr>

      <tr>
        <td>
          MóvilEventosBytes
        </td>

        <td>
          `Mobile`, `MobileReqest`, `MobileRequestError`, `MobileSession`, `MobileHandleException`, `MobileCrash`
        </td>

        <td>
          Agente móvil
        </td>
      </tr>

      <tr>
        <td>
          Bytes sin servidor
        </td>

        <td>
          Específico de la nube (es decir, evento AWS Lambda)
        </td>

        <td>
          Específico de la nube (es decir, integración de AWS Lambda)
        </td>
      </tr>

      <tr>
        <td>
          Bytes de registro
        </td>

        <td>
          `Log` así como el evento específico de la partición del patrón `[partition].Log`
        </td>

        <td>
          Varios (Fluentd, FluentBit, Syslog, servicios de streaming específicos de la nube)
        </td>
      </tr>

      <tr>
        <td>
          MétricaEventBytes
        </td>

        <td>
          `Metric`
        </td>

        <td>
          Desde la API métrica y la integración que la utilizan ([dimensional métrica](/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics)), o desde agentes como agente del browser, agente APM o agente móvil ([intervalo de tiempo de métrica data](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data)).
        </td>
      </tr>

      <tr>
        <td>
          Bytes de evento personalizados
        </td>

        <td>
          Varios
        </td>

        <td>
          Varias API. [Utilice `SHOW EVENT TYPES` para ver todos los tipos de eventos disponibles en una cuenta](#show-event-types).
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

También deberá asegurarse de que usted o su equipo tengan la capacidad de realizar un seguimiento y administrar:

* Trabajar con un gerente para mantenerse dentro del objetivo de ingesta mensual, si corresponde.
* Monitoreo de datos ingieren línea de base y responden a anomalías.
* Redactar y aprobar planes de optimización/reducción de datos según sea necesario.
* Participar en check-ins programados para analizar los datos de la línea de base y compararlos con el objetivo de ingesta.
* Realizar modificaciones para ingerir el objetivo según sea necesario.

Si aún no lo ha hecho, debería considerar tener un equipo de centro de excelencia de observabilidad (o algo similar) que sea responsable de:

* Manteniendo la relación con New Relic.
* Gobierno de cuentas y usuario.
* Incorporación de nuevos equipos e individuos.
* Mantener una base de conocimientos de observabilidad.
* Promover la colaboración y el intercambio entre equipos.

Tener un equipo como este puede ser fundamental para ayudarle a lograr una observabilidad de alta calidad para toda su organización.

## ¿Qué hay en esta serie?

<DocTiles>
  <DocTile
    title="Create baseline reports"
    path="/docs/tutorial-optimize-telemetry/create-baseline-report/"
  >
    Aprenda a utilizar el dashboard correcto para crear su línea de base de ingesta
  </DocTile>

  <DocTile
    title="Find anomalies"
    path="/docs/tutorial-optimize-telemetry/detect-anomalies/"
  >
    Aprenda a utilizar su informe de línea de base para ayudarle a encontrar anomalías en su telemetría
  </DocTile>

  <DocTile
    title="Create an optimization plan"
    path="/docs/tutorial-optimize-telemetry/develop-optimize-plan/"
  >
    Aprenda cómo desarrollar un plan de optimización para ayudar a reducir sus costos de ingesta
  </DocTile>

  <DocTile
    title="Optimize your ingest data"
    path="/docs/tutorial-optimize-telemetry/data-optimize-techniques/"
  >
    Aprenda a utilizar varias técnicas para optimizar su ingesta general
  </DocTile>
</DocTiles>
