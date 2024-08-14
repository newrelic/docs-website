---
title: Transacción en el APM de New Relic
tags:
  - APM
  - Transactions
  - Intro to transactions
metaDescription: 'How the term "transaction" is defined in APM, and how APM tracks an application''s transactions.'
freshnessValidatedDate: never
translationType: machine
---

La palabra <DNT>**transaction**</DNT> puede tener varios significados diferentes en la industria del software. Este documento explica cómo New Relic utiliza el término y cómo se informan las transacciones.

## ¿Qué es una transacción? [#txn-defined]

En New Relic, un <DNT>**transaction**</DNT> se define como una unidad de trabajo lógica en una aplicación de software. Específicamente, se refiere a las llamadas a funciones y llamadas a métodos que conforman esa unidad de trabajo. Para APM, a menudo se referirá a un <DNT>**web transaction**</DNT>, que representa la actividad que ocurre desde que la aplicación recibe una solicitud web hasta que se envía la respuesta.

Cuando instala APM en un [sistema compatible](/docs/agents/manage-apm-agents/installation/compatibility-requirements-new-relic-agents), comienza a informar automáticamente solicitudes web y otras funciones y métodos importantes. Para complementar el nivel predeterminado de monitoreo, puede configurar [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/) para informar transacciones adicionales.

Algunos marcos no tienen un concepto natural de transacción. En otras palabras, no existen vías predefinidas que puedan reconocerse o monitorearse fácilmente como transacciones. Para definir transacciones en dicho marco, puede utilizar [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/).

## Tipos de transacción [#types]

Los datos de transacciones acumuladas aparecen en APM en la [página de transacciones](/docs/apm/applications-menu/monitoring/transactions-page). Las dos categorías principales de transacciones son web y no web:

* <DNT>
    **Web**
  </DNT>

  : las transacciones se inician con una solicitud HTTP. Para la mayoría de las organizaciones, estas representan interacciones centradas en el cliente y, por lo tanto, son las transacciones más importantes a monitor.

* <DNT>
    **Non-web**
  </DNT>

  : [las transacciones no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) no se inician con una solicitud web. Pueden incluir procesos de trabajo no web, procesos en segundo plano, secuencias de comandos, actividad de la cola de mensajes y otras tareas.

### Subtipos de transacciones

Nuestro agente tiene estos subtipos de transacciones:

<CollapserGroup>
  <Collapser
    id="agent-go"
    title="Go"
  >
    No aplica.
  </Collapser>

  <Collapser
    id="agent-java"
    title="Java"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Subtipo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Costumbre
          </td>

          <td>
            La ejecución de la transacción personalizada nombrada. Generalmente se registra a través de API de instrumentación manual.
          </td>
        </tr>

        <tr>
          <td>
            `framework`
          </td>

          <td>
            La invocación de un framework que es reconocido por el agente.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-net"
    title=".NET"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Subtipo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Acción
          </td>

          <td>
            La invocación de la acción framework nombrada. Se utiliza cuando el agente puede identificar un nombre de acción específico framework .
          </td>
        </tr>

        <tr>
          <td>
            ÁSPID
          </td>

          <td>
            La invocación de una solicitud ASP.NET.
          </td>
        </tr>

        <tr>
          <td>
            Costumbre
          </td>

          <td>
            La ejecución de la transacción personalizada nombrada. Generalmente se registra a través de API de instrumentación manual.
          </td>
        </tr>

        <tr>
          <td>
            Monocarril
          </td>

          <td>
            La invocación de una solicitud MonoRail.
          </td>
        </tr>

        <tr>
          <td>
            MVC
          </td>

          <td>
            La invocación de una solicitud MVC.
          </td>
        </tr>

        <tr>
          <td>
            AbiertoRasta
          </td>

          <td>
            La invocación de una solicitud OpenRasta.
          </td>
        </tr>

        <tr>
          <td>
            Código de estado
          </td>

          <td>
            El código de estado HTTP devuelto para la transacción. A menudo se utiliza cuando un subtipo de transacción más específico no está disponible.
          </td>
        </tr>

        <tr>
          <td>
            WCF
          </td>

          <td>
            La invocación de una solicitud WCF.
          </td>
        </tr>

        <tr>
          <td>
            API web
          </td>

          <td>
            La invocación de una solicitud WebAPI.
          </td>
        </tr>

        <tr>
          <td>
            Servicio web
          </td>

          <td>
            La invocación de una solicitud de servicio web.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-node-js"
    title="Node.JS"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Subtipo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Costumbre
          </td>

          <td>
            La ejecución de la transacción personalizada nombrada. Generalmente se registra a través de API de instrumentación manual.
          </td>
        </tr>

        <tr>
          <td>
            Mensaje
          </td>

          <td>
            Intermediario de mensajes o comunicación en cola.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-php"
    title="PHP"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Subtipo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Acción
          </td>

          <td>
            La invocación de la acción framework nombrada. Se utiliza cuando el agente puede identificar un nombre de acción específico framework .
          </td>
        </tr>

        <tr>
          <td>
            Costumbre
          </td>

          <td>
            La ejecución de la transacción personalizada nombrada. Generalmente se registra a través de API de instrumentación manual.
          </td>
        </tr>

        <tr>
          <td>
            Función
          </td>

          <td>
            La invocación de la función nombrada.
          </td>
        </tr>

        <tr>
          <td>
            PHP
          </td>

          <td>
            La invocación de un trabajo PHP en segundo plano.
          </td>
        </tr>

        <tr>
          <td>
            Código de estado
          </td>

          <td>
            El código de estado HTTP devuelto para la transacción. A menudo se utiliza cuando un subtipo de transacción más específico no está disponible.
          </td>
        </tr>

        <tr>
          <td>
            `unknown`
          </td>

          <td>
            La invocación de una transacción web desconocida o un trabajo en segundo plano.
          </td>
        </tr>

        <tr>
          <td>
            URI
          </td>

          <td>
            La invocación del URI nombrado. Generalmente se usa cuando no se puede determinar un nombre de transacción a nivel de lenguaje o framework .
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-python"
    title="Python"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Subtipo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            ASGIWeb
          </td>

          <td>
            WebTransaction desde una [aplicación ASGI](https://asgi.readthedocs.io/en/latest/introduction.html).
          </td>
        </tr>

        <tr>
          <td>
            Mensaje
          </td>

          <td>
            Intermediario de mensajes o comunicación en cola.
          </td>
        </tr>

        <tr>
          <td>
            WSGIWeb
          </td>

          <td>
            WebTransaction desde una [aplicación WSGI](https://wsgi.readthedocs.io/en/latest/what.html).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-ruby"
    title="Ruby"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Subtipo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Costumbre
          </td>

          <td>
            La ejecución de la transacción personalizada nombrada. Generalmente se registra a través de API de instrumentación manual.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Segmentos de transacciones [#segments]

Las funciones y llamadas individuales que componen una transacción se denominan <DNT>**segments**</DNT>. Por ejemplo, las llamadas de servicio externo y las llamadas de base de datos son segmentos y ambas tienen sus propias páginas UI en APM.

La [página APM<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)muestra datos agregados del segmento de transacciones.

* Para agregar segmentos a una transacción, utilice [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/).
* Para ver los segmentos de una transacción específica, utilice [la traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces).

## Denominación de transacciones [#naming]

Para el marco compatible, los nombres de las transacciones pueden provenir de varias fuentes, como el nombre dado a la transacción por el framework, los nombres de las funciones detectadas durante la transacción o la URL de una solicitud web.

Para transacciones que producen muchos nombres con un formato similar, los consolidamos en categorías de transacciones generales. Por ejemplo, una transacción podría mostrarse como `/user/*/control_panel`, donde `*` representa diferentes nombres de usuario.

Para cambiar el nombre de una transacción o ajustar cómo se consolidarán los nombres, utilice [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/).

## Monitoreo de transacciones [#other-features]

Aquí hay otras formas en que puede usar APM para monitor transacciones:

<table>
  <thead>
    <tr>
      <th style={{ width: "205px" }}>
        Si quieres monitor...
      </th>

      <th>
        Utilizar esta...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Transacción importante para su negocio
      </td>

      <td>
        Crear [clave de transacción](/docs/apm/transactions/key-transactions/introduction-key-transactions), que los enfatiza en la UI y le permite establecer un nivel personalizado de monitoreo para ellos.
      </td>
    </tr>

    <tr>
      <td>
        Actividad asíncrona
      </td>

      <td>
        Siga los procedimientos para configurar una actividad asincrónica para su [agente de lenguaje APM](/docs/apm/new-relic-apm/getting-started/introduction-apm) específico.
      </td>
    </tr>

    <tr>
      <td>
        Actividad en toda la aplicación
      </td>

      <td>
        Vincular transacciones entre aplicaciones le brinda más detalles sobre la actividad de la aplicación relevante para el negocio. Para más información consulta la documentación sobre [rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) y [multiaplicación traza](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces).

        <Callout variant="tip">
          Para obtener una descripción general de alto nivel de todas sus aplicaciones y servicios, utilice nuestro [explorador de entidades](/docs/new-relic-one/use-new-relic-one/ui-data/new-relic-one-entity-explorer).
        </Callout>
      </td>
    </tr>
  </tbody>
</table>

## Consulta transacción [#insights]

Las transacciones están disponibles para consultas con un conjunto detallado de [atributos predeterminados](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes#transaction-event) adjuntos. Con estos atributos, puede ejecutar consulta y crear gráficos personalizados que APM no proporciona de forma predeterminada.

Para obtener información sobre cómo consultar sus datos utilizando nuestra UI o NRQL, consulte [consulta de datos de New Relic](/docs/using-new-relic/data/understand-data/query-new-relic-data).
