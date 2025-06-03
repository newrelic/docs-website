---
title: Agente Atributo
tags:
  - Agents
  - Manage APM agents
  - Agent data
metaDescription: 'How attributes are used in New Relic, including types, destinations, and limits.'
freshnessValidatedDate: never
translationType: machine
---

Los atributos son pares de valores principales que contienen información que determina las propiedades de un evento o transacción. Puede ver estos pares de valores principales en algunos lugares de la UI o consultando esos datos mediante NRQL. New Relic brinda al usuario la posibilidad de personalizar exactamente qué atributo se enviará a cada uno de estos [destinos](#destinations).

También puede recopilar [atributos personalizados](/docs/apm/other-features/attributes/collecting-custom-attributes) para enviar datos adicionales a New Relic.

## Flujo de destino del atributo [#destination-flow]

Este diagrama ilustra cómo un agente decide enviar [un atributo](#types) a cada [destino](#destinations).

<img
  title="nr attribute collection diagram.png"
  alt="nr attribute collection diagram.png"
  src="/images/apm_diagram_attribute-collection-diagram.webp"
/>

<figcaption>
  <DNT>**Agent attribute collection:**</DNT> Un agente toma tres decisiones diferentes al enviar un atributo a cualquier destino de New Relic según la configuración de propiedad relevante. Los nombres de propiedades y la sintaxis varían según el agente. (Las propiedades en este diagrama son específicas del agente PHP, pero el flujo general es el mismo para todos los agentes. Los nombres de las propiedades y la sintaxis varían según el agente).
</figcaption>

## Tipos de atributo [#types]

El atributo se puede recopilar de diversas formas:

* <DNT>
    **Message property attributes:**
  </DNT>

  Estas son las propiedades establecidas en un mensaje recibido de una cola o tema.

* <DNT>
    **HTTP request attributes:**
  </DNT>

  Estos son los parámetros para una solicitud HTTP.

* <DNT>
    **User attributes:**
  </DNT>

  Estos son atributos proporcionados por el usuario a través de la API de cada agente.

* <DNT>
    **Agent attributes:**
  </DNT>

  Estos son atributos captados por el agente; por ejemplo, `http.statusCode` y `httpResponseMessage`.

## Destinos para atributo [#destinations]

Los atributos recopilados aparecen en estas ubicaciones:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Collected attributes**
        </DNT>
      </th>

      <th>
        <DNT>
          **Location**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [Traza de la transaccion](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)
      </td>

      <td>
        Cada minuto, la traza de la transacción recopila datos para sus solicitudes HTTP individuales más lentas. Estas trazas informarán los atributos recolectados durante la transacción.
      </td>
    </tr>

    <tr>
      <td>
        [Errores de traza](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)
      </td>

      <td>
        Si una transacción resulta en un error, estos errores de traza se informarán a APM. Un error de traza contendrá el atributo recopilado durante la transacción.
      </td>
    </tr>

    <tr>
      <td>
        [Evento de transacción](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes)
      </td>

      <td>
        Las transacciones APM contendrán [atributos](/docs/insights/new-relic-insights/decorating-events/insights-attributes) recolectados durante la transacción.
      </td>
    </tr>

    <tr>
      <td>
        [Evento browser](/docs/insights/insights-data-sources/default-events-attributes/browser-default-events-attributes-insights)
      </td>

      <td>
        El evento de monitoreo del navegador contendrá [un atributo](/docs/insights/new-relic-insights/decorating-events/insights-attributes) recopilado durante la transacción. Sin embargo, es posible que el atributo recopilado al final de una transacción no aparezca en el evento `PageView` . Este destino también se llama monitoreo de navegador.
      </td>
    </tr>

    <tr>
      <td>
        [Evento de duración](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing)
      </td>

      <td>
        Span evento recopilado para rastreo distribuido contendrá el atributo recopilado durante el lapso.

        El siguiente agente admite la adición de atributos de usuario personalizados al evento span:

        * [Agente de Java 5.13.0 y superior](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-5130)
        * [Go agente 3.6.0 y por encima](/docs/release-notes/agent-release-notes/go-release-notes/go-agent-360)
        * [Agente .NET 8.25 y superior](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-8252140)
        * [Agente Node.js 6.10.0 y superior](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-6-10-0/)
        * [Agente PHP 9.12.0.268 y superior](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9120268)
        * [Agente Python 5.8.0.136 y superior](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-580136)
        * [Agente Ruby 6.8.0 y superior](/docs/release-notes/agent-release-notes/ruby-release-notes/ruby-agent-680360)
      </td>
    </tr>

    <tr>
      <td>
        [Segmentos de transacciones](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)
      </td>

      <td>
        Cada segmento en una traza de la transacción contendrá el atributo registrado para ese segmento.
      </td>
    </tr>
  </tbody>
</table>

## Visualización de atributo de solicitud [#viewing]

El atributo de solicitud está asociado con trazas de la transacción específicas, trazas del navegador y errores en APM y tablero. Puedes ver el atributo registrado con una solicitud al visualizar la [traza](/docs/apm/transactions/transaction-traces/introduction-transaction-traces#find-view) individual o [error](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors). El atributo personalizado se puede [consultar vía NRQL](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#syntax) exactamente como cualquier otro atributo.

<img
  title="screen-tx-trace-attributes.png"
  alt="screen-tx-trace-attributes.png"
  src="/images/apm_screenshot-crop_request-attributes.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitoring > Transactions > (select a transaction) > (select a trace):**</DNT> Aquí hay un ejemplo del agente Ruby de <DNT>**Request attributes**</DNT> y <DNT>**Custom attributes**</DNT> para una traza de la transacción. El atributo exacto depende de su agente y de la configuración de su atributo.
</figcaption>

## Límites [#attlimits]

El atributo de usuario, el atributo de solicitud y el parámetro de cola de mensajes están limitados por el número y el tamaño.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Parameter**
        </DNT>
      </th>

      <th>
        <DNT>
          **Limitations**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Transacción
      </td>

      <td>
        Limitado a 64 atributos de usuario.
      </td>
    </tr>

    <tr>
      <td>
        Clave de atributo
      </td>

      <td>
        Limitado a 256 bytes cada uno

        Si la clave tiene más de 256 bytes, el atributo no se registrará.
      </td>
    </tr>

    <tr>
      <td>
        Valor de atributo
      </td>

      <td>
        Limitado a 256 bytes cada uno

        Si el valor es mayor que 256 bytes, el valor del atributo se truncará.
      </td>
    </tr>
  </tbody>
</table>

## Atributo específico del agente [#agent-specific]

Cada agente APM [recopila atributos personalizados](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes). El atributo admitido depende del agente específico:

* [Go](/docs/agents/go-agent/instrumentation/go-agent-attributes)
* [Java](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java)
* [.NET](/docs/agents/net-agent/attributes/net-agent-attributes)
* [Node.js](/docs/agents/nodejs-agent/attributes/nodejs-agent-attributes)
* [PHP](/docs/agents/php-agent/attributes/php-agent-attributes)
* [Python](/docs/agents/python-agent/attributes/python-agent-attributes)
* [Ruby](/docs/agents/ruby-agent/attributes/ruby-agent-attributes)
