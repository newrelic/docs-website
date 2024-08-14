---
title: Crie métricas personalizadas em Go
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'With New Relic Go monitoring, you can create custom metrics to time a component of your app that may not captured by default.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Recomendamos utilizar a [API métrica](/docs/data-apis/ingest-apis/metric-api/introduction-metric-api/) para enviar sua métrica personalizada para a plataforma New Relic.
</Callout>

[métrica personalizada](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics) permite reportar qualquer métrica que passe pelo seu código. Por exemplo, com [o monitoramento Go](/docs/agents/go-agent/get-started/get-new-relic-go) da New Relic, você pode criar métricas personalizadas para cronometrar um componente do seu aplicativo que pode não ser capturado por padrão. Depois de capturar uma métrica personalizada, você pode:

* Unifique seu monitoramento dentro do New Relic através da [métrica e do explorador de eventos](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer).
* Utilize nossa [API REST](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) para recuperar e utilizar programaticamente dados métricos personalizados fora da interface.
* [Crie uma métrica personalizada condição do alerta](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para notificar você ou sua equipe quando sua métrica personalizada exceder valores específicos.

## Crie uma métrica personalizada [#create]

1. Instancie seu aplicativo executando o seguinte:

   ```go
   app, err := newrelic.NewApplication(
     newrelic.ConfigAppName("Your Application Name"),
     newrelic.ConfigLicense("NEW_RELIC_LICENSE_KEY"),
     newrelic.ConfigDebugLogger(os.Stdout),
   )
   ```

2. Após instanciar seu aplicativo, crie uma métrica personalizada com o seguinte código:

   ```go
   app.RecordCustomMetric(
       "CustomMetricName",         //name of your metric
       132,                         //time in ms
   );
   ```

   * `RecordCustomMetric`O primeiro parâmetro de é uma string que nomeia sua métrica personalizada.

   * O método `RecordCustomMetric` acrescentará automaticamente a string `Custom/` ao nome da sua métrica. Isso significa que o código acima irá gerar uma métrica chamada `Custom/CustomMetricName`.

   * `RecordCustomMetric`O segundo parâmetro é o tempo, em milissegundos, que você deseja registrar para sua transação personalizada. Isso significa que o código acima produzirá uma métrica de 0,132 segundos nos sistemas da New Relic.

   * Para usar uma métrica personalizada como contador, ela pode ser incrementada fazendo a chamada conforme descrito acima, e o valor `count` dessa métrica será incrementado em 1. O valor usado para o segundo parâmetro (tempo em ms) é irrelevante se você estiver usando a métrica apenas como contador e, portanto, poderá usar um número estático, como 0 ou 1.

     * Para incrementar um contador em um número maior que 1, chame `app.RecordCustomMetric` diversas vezes. Cada chamada incrementará a métrica apenas em 1, independentemente do valor do segundo parâmetro.

## Nomeie uma métrica personalizada [#name]

Considere cuidadosamente como você nomeia sua métrica personalizada. Se o seu programa criar muitas métricas com nomes exclusivos, você poderá acabar com um [problema de agrupamento métrico (MGI)](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues).

MGIs ocorrem quando a granularidade dos nomes de métricas é muito fina, resultando em centenas ou milhares de nomes de métricas diferentes. Uma causa comum de MGIs é confiar no nome completo da URL para nomenclatura métrica na transação da web. Alguns caminhos de código principais podem gerar muitos caminhos de URL completos diferentes para documentos, artigos, páginas exclusivos, etc.

Se o elemento exclusivo do caminho da URL estiver incluído no nome da métrica, cada um desses caminhos comuns terá seu próprio nome de métrica exclusivo. Caso ocorram problemas de agrupamento métrico, siga os [procedimentos de resolução de problemas](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues).
