---
title: Monitor procesos en segundo plano y otras transacciones no web
tags:
  - APM
  - Transactions
  - Intro to transactions
metaDescription: 'In APM, a definition of non-web transactions, and how to custom instrument background tasks and other activity as non-web transactions.'
freshnessValidatedDate: never
translationType: machine
---

Este documento explica qué son <DNT>**non-web transactions**</DNT> en APM y cómo puede implementar tareas en segundo plano y otras actividades arbitrarias para que se informen como transacciones en la web.

## ¿Qué son las transacciones no web? [#define]

Las dos categorías principales [de transacciones](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) de APM son <DNT>**web**</DNT> y <DNT>**non-web**</DNT>.

* <DNT>
    **Web transactions**
  </DNT>

  son transacciones que detectamos como iniciadas por una solicitud web; son el tipo de transacción más común reportado por APM.

* <DNT>
    **Non-web transactions**
  </DNT>

  son transacciones en las que no detectamos que fueron iniciadas por una solicitud web. Esto incluye procesos y trabajos que no manejan solicitudes web, como el procesamiento de mensajes y tareas en segundo plano.

Por ejemplo, puede programar algo para que se ejecute periódicamente en su servidor para realizar trabajos en la base de datos, enviar correos electrónicos, etc. La fuente no es una solicitud web sino algo en su servidor.

New Relic detecta automáticamente algunas transacciones no web desde marcos o servicios compatibles; otros se pueden crear utilizando instrumentación personalizada. Separamos intencionalmente su web y transacción no web en la UI.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        No web versus transacción web
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Menos directamente importante
      </td>

      <td>
        Las transacciones no web son a menudo procesos y tareas en segundo plano, y son menos directamente importantes para el usuario de su aplicación en comparación con las transacciones web.
      </td>
    </tr>

    <tr>
      <td>
        Larga duración
      </td>

      <td>
        Las transacciones no web suelen ser procesos de larga duración. Separarlos de la transacción web evita que esos resultados distorsionen el tiempo de respuesta de cara a sus clientes.
      </td>
    </tr>

    <tr>
      <td>
        Omitido en la puntuación Apdex
      </td>

      <td>
        Combinar tu transacción no web con tu transacción web perjudicaría tu [puntuación Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) (una medida de satisfacción con los tiempos de carga). Es por esto que los datos de Apdex para transacciones no web no aparecen en la UI.
      </td>
    </tr>
  </tbody>
</table>

## Crear transacción no web [#create]

Para crear una nueva transacción no web, siga los procedimientos indicados por su agente lingüístico de APM.

<CollapserGroup>
  <Collapser
    id="go"
    title="Go"
  >
    Siga los procedimientos para [instrumentar una transacción no web](/docs/agents/go-agent/get-started/instrument-go-transactions#go-txn).
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    Siga los procedimientos para [instrumentar una transacción](/docs/java/monitoring-java-background-processes) (instrumentar una transacción sin parámetro de solicitud web crea una transacción no web).
  </Collapser>

  <Collapser
    id="net"
    title=".NET"
  >
    De forma predeterminada, el agente APM .NET instrumenta los trabajadores IIS ASP. Para implementar otras aplicaciones .NET (que no sean IIS), como servicios independientes (WCF), aplicaciones de consola y otros servicios de Windows, consulte [aplicación personalizada instrumentada](/docs/agents/net-agent/features/instrumenting-custom-applications) y [aplicación WCF instrumentada](/docs/agents/net-agent/features/instrumenting-wcf-applications).

    <Callout variant="important">
      Para la aplicación IIS, no puede cambiar transacción web a transacción no web.
    </Callout>
  </Collapser>

  <Collapser
    id="node"
    title="Node.js"
  >
    Utilice [`startBackgroundTransaction()`](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation#background-txn).
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    Para marcar una transacción como no web: use [`newrelic_background_job`](/docs/agents/php-agent/php-agent-api/newrelic_background_job) y establezca la marca en `true`.

    El agente PHP informa que toda línea de comando ejecuta el script como transacción no web.
  </Collapser>

  <Collapser
    id="python"
    title="Python"
  >
    Ver [transacción del agente Python en la web](/docs/agents/python-agent/supported-features/python-background-tasks).

    El agente Python también admite transacciones sin informes web de [Celery](/docs/agents/python-agent/back-end-services/python-agent-celery) y Gearman.
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby"
  >
    Ver [Ruby agente transacción no web](/docs/agents/ruby-agent/background-jobs/monitor-ruby-background-processes).
  </Collapser>
</CollapserGroup>

## Ver transacción en web [#ui]

Para ver los datos de transacciones no web en la UI de New Relic, vaya al cuadro principal en las siguientes páginas y luego seleccione la opción <DNT>**Non-web**</DNT> en el menú desplegable de tipo de transacción:

* APM: Vaya a

  <DNT>
    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**
  </DNT>

  \> (seleccione una aplicación) >

  <DNT>
    **Summary**
  </DNT>

  .

* Transacción: Ir a

  <DNT>
    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**
  </DNT>

  . Seleccione una aplicación y luego, en la sección

  <DNT>
    **Monitor**
  </DNT>

  , haga clic en

  <DNT>
    **Transactions**
  </DNT>

  .
