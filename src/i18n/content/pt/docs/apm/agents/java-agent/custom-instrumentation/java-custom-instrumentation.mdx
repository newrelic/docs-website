---
title: Instrumentação Java personalizada
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: An overview of the ways you can implement custom instrumentation for your New Relic-monitored Java application.
freshnessValidatedDate: never
translationType: machine
---

[O APM para Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) normalmente produzirá dados de desempenho úteis automaticamente. No entanto, se o New Relic não [oferece suporte à sua framework](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent) ou se você deseja configurar monitoramento adicional, você desejará implementar instrumentação personalizada.

[A instrumentação personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/) permite rastrear interações que não são capturadas pela instrumentação automática do New Relic e permite adicionar detalhes ao seu [rastreamento da transação](/docs/traces/transaction-traces), para ajudá-lo a identificar os principais problemas.

New Relic coleta [métricas e eventos](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data) de vários frameworks automaticamente. Se você estiver usando uma [framework ou componente compatível](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent), poderá ver algumas informações de transação prontas para uso, e a instrumentação personalizada poderá ser usada para complementar as informações que o agente relata por padrão.

<Callout variant="important">
  Se você estiver usando uma framework suportada, mas não estiver vendo [a transação](/docs/apm/applications-menu/monitoring/transactions-page), obtenha suporte em [support.newrelic.com](https://support.newrelic.com) para garantir que a instrumentação framework esteja funcionando.
</Callout>

## Quando escolher instrumentação personalizada [#choosing]

Escolha instrumentação personalizada nestas situações:

* New Relic não suporta seu framework e transações não aparecem na interface
* Você gostaria de adicionar detalhes ao seu rastreamento de transação
* O rastreamento da transação inclui grandes blocos de tempo `application code` sem detalhes suficientes

## Implementar instrumentação personalizada [#implementing]

Você pode implementar instrumentação personalizada com um destes métodos:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Method**
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
        A interface da New Relic
      </td>

      <td>
        O New Relic for Java inclui uma opção na interface para instrumentação customizada chamada [Editor de instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation). Esta opção não requer nenhuma modificação direta no código do seu aplicativo, portanto é uma boa escolha se você não quiser ou não puder modificar seu código. O editor é, no entanto, bastante limitado em funcionalidade em comparação com a API do agente Java.
      </td>
    </tr>

    <tr>
      <td>
        Anotação de API
      </td>

      <td>
        Usando a API do agente Java da New Relic, você pode [anotar os métodos no código do aplicativo](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-annotation) que deseja monitor. O método de anotação é robusto e fácil de solucionar. Se você deseja modificar seu código-fonte, a anotação é o método recomendado. Se você tiver muitos métodos que deseja instrumentar, talvez prefira [a instrumentação XML](#xml).

        Para obter mais informações sobre a API e suas outras funções, consulte [Introdução à API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).
      </td>
    </tr>

    <tr>
      <td>
        XML
      </td>

      <td>
        Se você não puder modificar seu código ou precisar instrumentar vários métodos, a instrumentação XML é o melhor método de instrumentação personalizada. Com este método, você especifica as classes que deseja instrumentalizar em um arquivo XML externo.

        Embora a instrumentação XML seja poderosa, ela também é mais difícil de usar do que outros métodos de instrumentação. Para necessidades de instrumentação mais simples, a New Relic recomenda [anotação](#annotation) ou [instrumentação por meio da interface](#instrument-ui). Para mais informações, veja [Instrumentação Java por XML](/docs/java/custom-instrumentation-by-xml).
      </td>
    </tr>
  </tbody>
</table>

Você também pode monitor Java Management Extensions (JMX) via instrumentação personalizada. JMX é uma forma de monitor e gerenciar aplicativos, dispositivos e serviços. Você pode implementar o monitoramento JMX por meio de um [arquivo <DNT>**YAML**</DNT> externo](/docs/java/custom-jmx-instrumentation-by-yml).
