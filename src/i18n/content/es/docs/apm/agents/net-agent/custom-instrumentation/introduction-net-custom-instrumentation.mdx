---
title: Introducción a la instrumentación personalizada de .NET
tags:
  - Agents
  - NET agent
  - Custom instrumentation
metaDescription: 'How to instrument (or time) code that New Relic''s .NET agent does not instrument by default, and how to choose between the two methods.'
freshnessValidatedDate: never
translationType: machine
---

Para marcos totalmente compatibles ([.NET framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent) \| [.NET Core](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent)), el agente New Relic .NET recopila e informa automáticamente información sobre [transacciones web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) y tareas browser . Sin embargo, si está utilizando un framework de aplicación que no está instrumentado automáticamente (o no utiliza un framework), es posible que vea grandes bloques de tiempo en la UI de New Relic sin detalles o que no vea ninguna transacción. En este caso, puede utilizar instrumentación personalizada para agregar transacciones y detalles.

Este documento describe cómo instrumentar la actividad que no está instrumentada por el agente .NET de forma predeterminada. Para conocer otras formas de configurar la instrumentación de su aplicación, consulte [Guía para usar la API del agente .NET](/docs/agents/net-agent/api-guides/guide-using-net-agent-api).

<Callout variant="important">
  Para los dos marcos admitidos por el agente (.NET framework y .NET Core), la instrumentación personalizada se realiza de la misma manera, a menos que se indique lo contrario.
</Callout>

## Elija un método de instrumentación personalizada [#ci-methods]

El agente .NET admite dos métodos de instrumentación personalizada:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Método
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Ajuste de instrumentación personalizado
      </td>

      <td>
        Instrumente su código decorando sus métodos con un atributo. La instrumentación de atributos es más sencilla de implementar que la instrumentación XML porque solo necesita agregar un único decorador, en el mismo lugar de su código que el método que desea instrumentar.

        Para obtener instrucciones, consulte [instrumentación personalizada mediante atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net).
      </td>
    </tr>

    <tr>
      <td>
        Instrumentación XML personalizada
      </td>

      <td>
        Instrumente su código enumerando los métodos de destino en un archivo XML. La instrumentación XML es más compleja que la instrumentación de atributos y fallará si cambia el nombre del ensamblado, clase o método que desea instrumentar. Sin embargo, la instrumentación XML no requiere que modifique su código fuente.

        Para obtener instrucciones, consulte [Crear transacción vía XML](/docs/agents/net-agent/instrumentation/net-custom-transactions) y [Agregar detalles a la transacción vía XML](/docs/agents/net-agent/custom-instrumentation/add-detail-transactions-xml-net#blocking-instrumentation).
      </td>
    </tr>
  </tbody>
</table>

## Crear transacción versus agregar detalles [#new-existing]

Cuando agrega instrumentación personalizada mediante cualquiera de los métodos, debe elegir entre crear una nueva transacción o agregar instrumentación a una transacción existente:

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Situación
      </th>

      <th>
        Recomendación
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        El método que desea tocar no aparece en la UI de New Relic en absoluto
      </td>

      <td>
        <DNT>**Create a new transaction.**</DNT> Para más detalles, consulte:

        * [Instrumentación personalizada vía atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net)
        * [Crear transacción vía XML](/docs/agents/net-agent/instrumentation/net-custom-transactions)
      </td>
    </tr>

    <tr>
      <td>
        La transacción aparece en la UI de New Relic pero contiene secciones de tiempo no instrumentadas.
      </td>

      <td>
        <DNT>**Add detail to an existing transaction.**</DNT> Para más detalles, consulte:

        * [Instrumentación personalizada vía atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net)
        * [Agregar detalle a la transacción vía XML](/docs/agents/net-agent/custom-instrumentation/add-detail-transactions-xml-net)
      </td>
    </tr>
  </tbody>
</table>

## Clasificar como "web" o "no web" (solo método de atributo) [#web-background]

APM separa [transacción](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) en transacción web y [transacción no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) en la UI. Cuando agrega detalles a una transacción existente, su categoría está determinada por la categoría de la transacción principal.

Cuando crea una transacción mediante instrumentación personalizada utilizando el [método de atributo](#ci-methods), debe categorizarla como <DNT>**web**</DNT> o <DNT>**non-web**</DNT>. (Esto no es posible con la instrumentación XML; todas las transacciones creadas en XML se clasifican como <DNT>**non-web**</DNT>.)

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Categoría
      </th>

      <th>
        Cuándo usar
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Web
      </td>

      <td>
        Utilice <DNT>**web**</DNT> para solicitudes web. Solo puede marcar una nueva transacción como transacción web con [instrumentación personalizada usando atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net), no usando XML.
      </td>
    </tr>

    <tr>
      <td>
        No web
      </td>

      <td>
        Utilice <DNT>**non-web**</DNT> para otros tipos de solicitudes en segundo plano, como aplicaciones y servicios de consola.

        * Todas las transacciones [creadas utilizando XML](/docs/agents/net-agent/instrumentation/net-custom-transactions) se clasifican como no web.
        * La transacción [creada utilizando el atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net) se puede clasificar como web o no web.
      </td>
    </tr>
  </tbody>
</table>
