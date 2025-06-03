---
title: Introdução à API métrica
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: Learn how to report metrics to New Relic from any source with the Metric API.
freshnessValidatedDate: never
translationType: machine
---

A API métrica da New Relic pode ser usada para enviar [dados métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) para a New Relic a partir de diversas fontes. Esta API é a forma como métricas de alguns de nossos integradores e exportadores entram na New Relic.

Quer experimentar nossa API métrica? [Crie uma conta New Relic](https://newrelic.com/signup) gratuitamente! Não é necessário cartão de crédito.

## O que é a API métrica? [#why-use]

A API métrica é uma forma de inserir dados métricos no New Relic. A API funciona enviando uma solicitação POST para nosso endpoint HTTP com uma carga JSON contendo os dados métricos.

A API métrica é como as métricas são ingeridas de algumas de nossas [integrações](https://newrelic.com/instant-observability/), incluindo nossos [exportadores de código aberto](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic#external-data) (como DropWizard e Prometheus). A API métrica também é usada por nossos [SDKs de telemetria](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic), que são ferramentas específicas de linguagem que facilitam o uso de nossas APIs de ingestão de dados.

A API métrica pode ser usada para:

* Relate dados métricos para a New Relic sem um agente da New Relic.
* Integre dados métricos de uma ferramenta, biblioteca ou framework de código aberto ou desenvolvida internamente.
* Controle totalmente os dados métricos que você está enviando, incluindo a resolução e dimensões associadas.
* Aproveite o poder do [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql), a linguagem de consulta da New Relic, para consultar seus [dados métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics).
* Configure [alerta para seus dados métricos](#create-alerts).

## Requisitos

Certifique-se de que a conectividade de saída na porta TCP 443 seja permitida para o [intervalo CIDR](/docs/using-new-relic/cross-product-functions/install-configure/networks/#infrastructure) que corresponde à sua [região](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers). O método de configuração preferencial é usar o nome DNS `metric-api.newrelic.com` ou `metric-api.eu.newrelic.com`.

Você precisará de um New Relic <InlinePopover type="licenseKey"/>para a conta New Relic para a qual deseja enviar dados. Para informações sobre limites e atributo restrito, consulte [requisitos e limites da API métrica](/docs/metric-api-general-requirements-limits).

## Iniciar

Se não tivermos uma [integração ou início rápido](https://newrelic.com/instant-observability/) que atenda às suas necessidades de relatórios métricos, você terá duas opções:

* [Use nossos SDKs de telemetria](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic), que são ferramentas específicas de linguagem que ajudam você a nos enviar métricas e outros dados.
* [Use a API métrica diretamente](/docs/report-metrics-metric-api).

## Encontre e use seus dados [#find-data]

Você pode encontrar dados enviados via API métrica (inclusive de integração que utilizam esta API) nestes locais:

* Em <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT>, selecione <DNT>**Explorer**</DNT> e procure seu serviço.

* Consultando o tipo de dados `Metric` . Por exemplo, você pode usar [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) para executar:

  ```sql
  SELECT * FROM Metric
  ```

  Para saber mais sobre consulta, veja [exemplos de consulta métrica](/docs/data-ingest-apis/get-data-new-relic/metric-api/view-query-you-metric-data). Para informações sobre consultas em geral, veja [consulta de dados](/docs/using-new-relic/data/understand-data/query-new-relic-data).

## Alerta sobre dados métricos [#create-alerts]

Para alertar sobre métrica criada com a API métrica, use [NRQL condição do alerta](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries): selecione a categoria NRQL ao definir sua condição e use a sintaxe de consulta `FROM Metric ...` NRQL para expressá-la. Ao criar essas condições de alerta, <InlinePopover type="alerts"/>usa automaticamente os dados de granularidade mais finos disponíveis (os pontos de dados de métrica bruta) para avaliar alertas.

## Retenção de dados [#retention]

Todos os pontos de dados métricos brutos serão retidos por 30 dias. Todos os dados agregados adicionais derivados dos pontos de dados métricos brutos (por exemplo, rollups de um minuto) serão retidos por 13 meses. Qualquer alteração no período de retenção além desses períodos poderá resultar em cobrança para você.

## Resolução de problemas

Consulte [Solução de problemas de um evento `NrIntegrationError` ](/docs/troubleshoot-nrintegrationerror-event).
