---
title: Ver detalles de consulta lenta
tags:
  - APM
  - APM UI pages
  - Monitoring
metaDescription: 'APM: How to view slow query data, and how to enable and configure slow query data collection.'
freshnessValidatedDate: never
translationType: machine
---

En APM, cuando se recopila [la traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) , puede haber datos <DNT>**Slow query**</DNT> adicionales disponibles en la página [<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) . Veamos qué son los datos de consulta lenta, dónde encontrarlos y cómo configurarlos.

También puedes utilizar histograma y mapas de calor para visualizar la distribución de valores para diferentes métricas. Esto es útil para comprender el rendimiento lento de la página. Para saber cómo, mire este breve video (4:18 minutos).

<Video
  id="Gh4Km9aJoBE"
  type="youtube"
/>

## Muestras de datos de consulta lenta [#about]

Cuando se informan [las trazas de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) , la característica de consulta lenta muestra la consulta de la base de datos más lenta en esas trazas e informa datos sobre ellas en la página [<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) . Los datos de consulta lenta pueden incluir:

* Duración de los segmentos de consulta
* Consultar/explicar planes (si se reconoce)
* [Detalles del nivel de instancia y host](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues) (si el agente lo admite)

## Ver datos de consulta lenta [#db_slowsql]

<Callout variant="tip">
  Para obtener una descripción general de alto nivel de todas sus aplicaciones y servicios, utilice nuestro [explorador de entidades](/docs/new-relic-one/use-new-relic-one/ui-data/new-relic-one-entity-explorer).
</Callout>

Para ver los datos de su consulta lenta:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**
   </DNT>

   . Seleccione una aplicación y luego, en la sección

   <DNT>
     **Monitor**
   </DNT>

   , haga clic en

   <DNT>
     **Databases**
   </DNT>

   .

2. Seleccione una transacción de base de datos.

3. Si está disponible, seleccione cualquier [consulta lenta](#slowsql_details) disponible que aparezca en la página.

Si no ve los datos esperados de consulta lenta, siga los [consejos de resolución de problemas](#troubleshooting).

## Configuración [#settings]

En general, puede configurar sus ajustes de consulta lenta de cualquiera de estas maneras:

* Configuración del agente
* [configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) (si está disponible para su agente)

La configuración del agente le brinda más opciones que la configuración del lado del servidor. La forma en que elija configurar consulta lenta dependerá de su propia configuración y preferencias. Para obtener más información, consulte la documentación del agente específico:

<CollapserGroup>
  <Collapser
    id="go"
    title="Go"
  >
    Opciones de configuración del agente:

    * Activar/desactivar: [`SlowQuery.Enabled`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query)
    * Umbral de consulta lenta: [`SlowQuery.Threshold`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query-threshold)
    * Para otras opciones de configuración de almacenamiento de datos, consulte [Configuración del rastreador de almacenamiento de datos](/docs/agents/go-agent/configuration/go-agent-configuration#datastore-tracer).
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    Configuración del agente:

    * Umbral de consulta lenta: [`explain_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-explain_threshold).

    * Para otras configuraciones relacionadas con transacciones lentas y consultas, consulte las [opciones de configuración del rastreador de transacciones](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-Transaction-tracer).

      También puede editar la configuración básica de consulta lenta a través de [la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="net"
    title=".NET"
  >
    Configuración del agente:

    * Activar/desactivar: [`slowSql enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#slow_sql)

    * consulta lenta umbral: [explicarUmbral](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-explainThreshold)

    * Para otras configuraciones relacionadas con transacciones lentas y consultas, consulte las [opciones de configuración del rastreador de transacciones](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) y las [opciones del rastreador de almacenamiento de datos](/docs/agents/net-agent/configuration/net-agent-configuration#datastore_tracer).

      También puede editar la configuración básica de consulta lenta a través de [la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="node"
    title="Node.js"
  >
    Configuración del agente:

    * Activar/desactivar: [`enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-enabled)

    * umbral: [`explain_threshold`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#explain_threshold)

    * Muestras máximas de consulta lenta: [`max_samples`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-max-samples)

    * Para otras configuraciones relacionadas con transacciones lentas y consultas, consulte las [opciones de configuración del rastreador de transacciones](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config).

      [La configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) de los datos de consulta lenta no es posible para el agente Node.js.
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    Configuración del agente:

    * Activar/desactivar: [`slow_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-slowsql)

    * umbral: [`explain_threshold`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold)

    * Para otras configuraciones relacionadas con transacciones lentas y consultas, consulte las [opciones de configuración del rastreador de transacciones](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings).

      [La configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) no es posible para el agente PHP.
  </Collapser>

  <Collapser
    id="python"
    title="Python"
  >
    Configuración del agente:

    * Umbral de consulta lenta: [`explain_threshold`](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-explain-threshold)

    * Para otras configuraciones relacionadas con transacciones lentas y consultas, consulte las [opciones de configuración del rastreador de transacciones](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) y las [opciones del rastreador de almacenamiento de datos](/docs/agents/python-agent/configuration/python-agent-configuration#datastore-tracer-settings).

      También puede editar la configuración básica de consulta lenta a través de [la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby"
  >
    Configuración del agente:

    * Activar/desactivar: [`slow_sql.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-enabled)

    * Umbral de consulta lenta: [`slow_sql.explain_threshold`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-explain_threshold)

    * Para otras configuraciones relacionadas con transacciones lentas y consultas, consulte las [opciones de configuración del rastreador de transacciones](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) y las [opciones de configuración de SQL lento](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql).

      Si corresponde al idioma del agente de su aplicación, también puede editar la configuración básica de consulta lenta mediante [la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>
</CollapserGroup>

## Consulta lenta métrica [#slowsql_details]

La lista de consulta lenta contiene las siguientes métricas:

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Response time`
      </td>

      <td>
        El tiempo de respuesta promedio (en milisegundos) para las declaraciones muestreadas.
      </td>
    </tr>

    <tr>
      <td>
        `Sample count`
      </td>

      <td>
        El número de consultas lentas identificadas en la muestra.
      </td>
    </tr>
  </tbody>
</table>

Para ver detalles adicionales, seleccione una consulta lenta individual:

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Start time`
      </td>

      <td>
        Cuando el rastreo del stack comenzó a recopilar los datos que se muestran.
      </td>
    </tr>

    <tr>
      <td>
        `Max time`
      </td>

      <td>
        El tiempo máximo para todas las declaraciones de consulta similares en la muestra.
      </td>
    </tr>

    <tr>
      <td>
        `Action`
      </td>

      <td>
        La acción o proceso que invoca la consulta.
      </td>
    </tr>

    <tr>
      <td>
        `Query`
      </td>

      <td>
        La consulta que se informa como lenta. Dependiendo de su configuración, algunas partes de la consulta pueden estar ofuscadas.
      </td>
    </tr>

    <tr>
      <td>
        `Stack trace`
      </td>

      <td>
        En qué parte del código se llamó la declaración.
      </td>
    </tr>
  </tbody>
</table>

Para MySQL, proporcionamos un análisis de consulta que explica qué sucedió en su consulta y qué podría hacer para acelerarla. Otras bases de datos muestran un plan explicativo siempre que sea posible.

## Resolución de problemas: No consulta datos lentos [#troubleshooting]

Si no ves los datos de consulta lenta, puede ser por alguno de estos motivos:

* La característica de consulta lenta ha sido deshabilitada.
* El umbral se ha fijado en una duración demasiado alta y no se informa ninguna consulta lenta.
* La configuración de ofuscación de la consulta (normalmente `record_sql` o similar) puede establecerse en `Off`.

Para solucionar el problema, intenta ajustar las [opciones de configuración](#settings).
