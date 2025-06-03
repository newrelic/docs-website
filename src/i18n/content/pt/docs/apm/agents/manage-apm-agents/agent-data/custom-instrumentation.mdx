---
title: Instrumentação personalizada
tags:
  - Agents
  - Manage APM agents
  - Agent data
metaDescription: 'For an overview of custom instrumentation, including examples, best practices, and a quick reference by New Relic agent, start here.'
freshnessValidatedDate: never
translationType: machine
---

A New Relic coleta e relata informações sobre [transação da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) e [transação fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions), como tarefas em segundo plano. O New Relic normalmente produz informações completas automaticamente, sem qualquer necessidade de modificar o código do seu aplicativo. No entanto, se você não estiver usando uma [framework compatível](/docs/agents/manage-apm-agents/installation/compatibility-requirements), talvez seja necessário adicionar instrumentação personalizada.

A instrumentação personalizada também é útil para:

* Adicione detalhes ao seu [rastreamento da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces#find-view).
* Bloqueie a instrumentação na transação selecionada que você não deseja instrumentada.
* Instrumento uma parte do seu código que a New Relic simplesmente não está captando.

A instrumentação personalizada que cria uma nova transação coleta [métricas de fração de tempo](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#timeslice-data) e dados [de eventos](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#event-data) . A instrumentação personalizada para transações já instrumentadas coleta apenas dados métricos de fração de tempo.

<Callout variant="important">
  Não use colchetes `[suffix]` no final do nome da sua transação. O New Relic remove automaticamente os colchetes do nome. Em vez disso, use parênteses `(suffix)` ou outros símbolos, se necessário.
</Callout>

## Quando usar instrumentação personalizada [#choosing]

A instrumentação personalizada permite rastrear interações que não são capturadas pela instrumentação automática do New Relic. A instrumentação personalizada também pode adicionar detalhes ao [rastreamento da transação](/docs/traces/transaction-traces), para ajudá-lo a identificar os principais problemas.

A New Relic coleta dados de muitas estruturas automaticamente. Se você estiver usando uma [frameworksuportada](/docs/agents/manage-apm-agents/installation/compatibility-requirements), não precisará de instrumentação customizada para coletar intervalos de tempo, eventos e rastreamentos métricos.

No entanto, se você encontrar alguma dessas situações, poderá precisar de instrumentação personalizada:

* Transações não aparecem na interface.
* O rastreamento da transação inclui grandes blocos de tempo de código do aplicativo sem detalhes completos.

Se você estiver usando uma [frameworksuportada](/docs/agents/manage-apm-agents/installation/compatibility-requirements), mas não estiver vendo a transação na [página<DNT>**Transactions**</DNT> ](/docs/applications-menu/transactions-dashboard)do APM, obtenha suporte em [support.newrelic.com](https://support.newrelic.com) para garantir que a instrumentação framework esteja funcionando.

## Implementar instrumentação personalizada [#implementing]

Cada agente implementa instrumentação personalizada de maneira diferente:

<CollapserGroup>
  <Collapser
    id="go"
    title="Instrumentação personalizada de Go"
  >
    Como os aplicativos Golang são executados a partir de um arquivo binário nativo compilado, toda a instrumentação do New Relic deve ser feita manualmente. Consulte os segmentos [Instrumento Go transação](/docs/agents/go-agent/get-started/instrument-go-transactions) e [Instrumento Go](/docs/agents/go-agent/get-started/instrument-go-transactions) para saber como configurar a instrumentação em seu aplicativo Go.
  </Collapser>

  <Collapser
    id="java"
    title="Instrumentação Java personalizada"
  >
    O agente Java da New Relic oferece suporte a dois métodos de instrumentação personalizada:

    * [Anotação](/docs/java/custom-instrumentation-by-annotation): Adicione <DNT>**@Trace**</DNT> anotações ao seu código para garantir métodos específicos do instrumento New Relic. A anotação é fácil de implementar, se você estiver instrumentado apenas alguns métodos. Para instrumentação mais complexa ou se você não conseguir modificar seu código, use XML.

    * [XML](/docs/java/custom-instrumentation-by-xml): Defina os métodos que você deseja que o New Relic monitor em um arquivo XML. A instrumentação XML é flexível e não requer edição do código, mas é mais difícil de solucionar problemas do que a anotação.

      Para obter mais informações, consulte [Instrumentação Java personalizada](/docs/java/custom-instrumentation-for-java).
  </Collapser>

  <Collapser
    id="dotnet"
    title="Instrumentação .NET personalizada"
  >
    O agente .NET da New Relic oferece suporte a dois métodos de instrumentação personalizada:

    * Atributo: Anote seu código com chamadas de API do agente para métodos específicos do instrumento. A anotação é fácil de implementar, mas requer a edição do código-fonte.

    * XML: Defina os métodos que você deseja que o New Relic utilize em um arquivo XML. A instrumentação XML não requer modificação do seu código-fonte, mas é mais complicada de criar e manter atualizada do que a instrumentação atributo.

      Para obter mais informações, consulte [Introdução à instrumentação personalizada do .NET](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation).
  </Collapser>

  <Collapser
    id="nodejs"
    title="Instrumentação personalizada do Node.js"
  >
    O agente Node.js da New Relic usa chamada de API para instrumentação personalizada. Para mais informações, consulte [Instrumentação personalizada do Node.js.](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation)
  </Collapser>

  <Collapser
    id="php"
    title="Instrumentação PHP personalizada"
  >
    O agente PHP da New Relic usa chamada de API para instrumentação personalizada. Para mais informações, veja [instrumentação PHP personalizada](/docs/php/php-custom-instrumentation).
  </Collapser>

  <Collapser
    id="python"
    title="Instrumentação Python personalizada"
  >
    O agente Python da New Relic oferece suporte a dois métodos de instrumentação personalizada:

    * [Arquivo de configuração](/docs/python/python-instrumentation-by-config-file): Utilize o arquivo de configuração do agente para especificar as funções e métodos que deseja instrumentados. O arquivo de configuração do agente é fácil de configurar e não exige que você modifique seu código. No entanto, é menos flexível que a chamada de API.

    * [chamada de API](/docs/python/python-instrumentation-by-api): edite seu código para chamar a API Python da New Relic. A API é mais flexível que a instrumentação por meio do arquivo de configuração, mas exige que você modifique seu código.

      Para obter mais informações, consulte [Instrumentação Python personalizada](/docs/python/python-custom-instrumentation).
  </Collapser>

  <Collapser
    id="ruby"
    title="Instrumentação Ruby personalizada"
  >
    O agente Ruby da New Relic usa chamada de API para definir métodos de destino e adicionar rastreador de transação a eles. Para mais informações, consulte [Instrumentação personalizada Ruby](/docs/ruby/ruby-custom-instrumentation).
  </Collapser>
</CollapserGroup>

## Problemas de agrupamento [#mgi]

Um [problema de agrupamento métrico](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues) ocorre quando uma conta envia muitos intervalos de tempo métricos com nomes diferentes para o New Relic, e essas transações individuais da web não são agregadas adequadamente. Por exemplo, em vez de um único nome de métrica `/user/controlpanel/` , você poderá ver `/user/controlpanel/alice`, `/user/controlpanel/bob` e `/user/controlpanel/carol`.

A instrumentação personalizada pode causar problemas de agrupamento métrico se você introduzir muitos intervalos de tempo métricos com nomes exclusivos que o New Relic não consegue agrupar com eficiência. Se você enviar milhares de métricas, a New Relic poderá aplicar regras para reduzir o número de transações.
