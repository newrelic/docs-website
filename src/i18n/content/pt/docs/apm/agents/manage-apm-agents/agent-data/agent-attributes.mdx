---
title: Atributo do agente
tags:
  - Agents
  - Manage APM agents
  - Agent data
metaDescription: 'How attributes are used in New Relic, including types, destinations, and limits.'
freshnessValidatedDate: never
translationType: machine
---

Atributo são pares de valores principais contendo informações que determinam as propriedades de um evento ou transação. Você pode visualizar esses pares de valores principais em alguns locais da interface ou consultando esses dados usando NRQL. O New Relic dá ao usuário a possibilidade de personalizar exatamente qual atributo será enviado para cada um desses [destinos](#destinations).

Você também pode coletar [atributo personalizado](/docs/apm/other-features/attributes/collecting-custom-attributes) para enviar dados adicionais à New Relic.

## Fluxo de destino do atributo [#destination-flow]

Este diagrama ilustra como um agente decide enviar [um atributo](#types) para cada [destino](#destinations).

<img
  title="nr attribute collection diagram.png"
  alt="nr attribute collection diagram.png"
  src="/images/apm_diagram_attribute-collection-diagram.webp"
/>

<figcaption>
  <DNT>**Agent attribute collection:**</DNT> Um agente toma três decisões diferentes ao enviar um atributo para qualquer destino New Relic com base nas configurações de propriedade relevantes. Os nomes das propriedades e a sintaxe variam de acordo com o agente. (As propriedades neste diagrama são específicas do agente PHP, mas o fluxo geral é o mesmo para todos os agentes. Os nomes das propriedades e a sintaxe variam de acordo com o agente.)
</figcaption>

## Tipos de atributo [#types]

Atributo pode ser coletado de diversas maneiras:

* <DNT>
    **Message property attributes:**
  </DNT>

  Estas são as propriedades definidas em uma mensagem recebida de uma fila ou tópico.

* <DNT>
    **HTTP request attributes:**
  </DNT>

  Estes são os parâmetros para uma solicitação HTTP.

* <DNT>
    **User attributes:**
  </DNT>

  São atributos fornecidos pelo usuário através da API de cada agente.

* <DNT>
    **Agent attributes:**
  </DNT>

  São atributos captados pelo agente; por exemplo, `http.statusCode` e `httpResponseMessage`.

## Destinos para atributo [#destinations]

Os atributos coletados aparecem nestes locais:

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
        [Rastreamento da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)
      </td>

      <td>
        Cada minuto de rastreamento da transação coleta dados para suas solicitações HTTP individuais mais lentas. Esses rastreamentos reportarão o atributo coletado durante a transação.
      </td>
    </tr>

    <tr>
      <td>
        [Erros de rastreamento](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)
      </td>

      <td>
        Se uma transação resultar em erro, esses erros de rastreamento serão relatados ao APM. Um erro de rastreamento conterá atributo coletado durante a transação.
      </td>
    </tr>

    <tr>
      <td>
        [Evento de transação](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes)
      </td>

      <td>
        As transações de APM conterão [atributo](/docs/insights/new-relic-insights/decorating-events/insights-attributes) arrecadado durante a transação.
      </td>
    </tr>

    <tr>
      <td>
        [Evento do browser](/docs/insights/insights-data-sources/default-events-attributes/browser-default-events-attributes-insights)
      </td>

      <td>
        O evento de monitoramento do Browser conterá [atributo](/docs/insights/new-relic-insights/decorating-events/insights-attributes) arrecadado durante a transação. Porém, o atributo arrecadado ao final de uma transação poderá não aparecer no evento `PageView` . Este destino também é chamado de monitoramento de Browser.
      </td>
    </tr>

    <tr>
      <td>
        [Evento de extensão](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing)
      </td>

      <td>
        O evento de período coletado para distributed tracing conterá um atributo coletado durante o período.

        O seguinte agente suporta a adição de atributo de usuário personalizado ao evento span:

        * [Agente Java 5.13.0 e superior](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-5130)
        * [Go agente 3.6.0 e acima](/docs/release-notes/agent-release-notes/go-release-notes/go-agent-360)
        * [Agente .NET 8.25 e superior](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-8252140)
        * [Agente Node.js 6.10.0 e superior](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-6-10-0/)
        * [Agente PHP 9.12.0.268 e superior](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9120268)
        * [Agente Python 5.8.0.136 e superior](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-580136)
        * [Agente Ruby 6.8.0 e superior](/docs/release-notes/agent-release-notes/ruby-release-notes/ruby-agent-680360)
      </td>
    </tr>

    <tr>
      <td>
        [Segmentos de transação](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)
      </td>

      <td>
        Cada segmento em um rastreamento da transação conterá um atributo registrado para esse segmento.
      </td>
    </tr>
  </tbody>
</table>

## Visualizando atributo de solicitação [#viewing]

Os atributos de solicitação estão associados a rastreamento específico da transação, rastreamento do browser e erros no APM e no dashboard. Você pode ver o atributo registrado com uma solicitação ao visualizar o [trace](/docs/apm/transactions/transaction-traces/introduction-transaction-traces#find-view) ou [erro](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors) individual. atributo personalizado pode ser [consultado via NRQL](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#syntax) exatamente como qualquer outro atributo.

<img
  title="screen-tx-trace-attributes.png"
  alt="screen-tx-trace-attributes.png"
  src="/images/apm_screenshot-crop_request-attributes.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitoring > Transactions > (select a transaction) > (select a trace):**</DNT> Aqui está um exemplo do agente Ruby do <DNT>**Request attributes**</DNT> e <DNT>**Custom attributes**</DNT> para um rastreamento da transação. Os atributos exatos dependem do seu agente e da configuração do seu atributo.
</figcaption>

## Limites [#attlimits]

Atributo do usuário, atributo de solicitação e parâmetro da fila de mensagens são limitados por contagem e tamanho.

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
        Transação
      </td>

      <td>
        Limitado a 64 atributos de usuários
      </td>
    </tr>

    <tr>
      <td>
        Chave de atributo
      </td>

      <td>
        Limitado a 256 bytes cada

        Se a chave tiver mais de 256 bytes, o atributo não será registrado.
      </td>
    </tr>

    <tr>
      <td>
        Valor do atributo
      </td>

      <td>
        Limitado a 256 bytes cada

        Se o valor for maior que 256 bytes, o valor do atributo será truncado.
      </td>
    </tr>
  </tbody>
</table>

## Atributo específico do agente [#agent-specific]

Cada agente APM [coleta um atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes). Os atributos suportados dependem do agente específico:

* [Go](/docs/agents/go-agent/instrumentation/go-agent-attributes)
* [Java](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java)
* [.NET](/docs/agents/net-agent/attributes/net-agent-attributes)
* [Node.js](/docs/agents/nodejs-agent/attributes/nodejs-agent-attributes)
* [PHP](/docs/agents/php-agent/attributes/php-agent-attributes)
* [Python](/docs/agents/python-agent/attributes/python-agent-attributes)
* [Ruby](/docs/agents/ruby-agent/attributes/ruby-agent-attributes)
