---
title: Limites de eventos e amostragem para APM e monitoramento de Mobile
tags:
  - APM
  - Troubleshooting
metaDescription: How APM and mobile agents limit the reporting of events and perform sampling when those limits are exceeded.
freshnessValidatedDate: never
translationType: machine
---

Nosso agente <InlinePopover type="apm"/>e agente <InlinePopover type="mobile"/>têm limites no número de eventos que podem ser relatados. Este documento explica:

* Por que os limites de relatórios de eventos são necessários
* Como funciona a amostragem
* Como trabalhar e compreender dados de amostra

## Diferença entre evento e métrica [#events-metrics]

Este documento trata dos limites de dados de eventos e de como esses limites levam à amostragem. Primeiro, pode ajudá-lo a compreender as diferenças entre estes dois tipos de dados:

* <DNT>
    **Metrics**
  </DNT>

  : medições agregadas ao longo do tempo. Exemplos: tempo médio de resposta num intervalo de tempo de um minuto, taxas de transferência ao longo do tempo, utilização da CPU ao longo do tempo.

* <DNT>
    **Events**
  </DNT>

  : evento discreto que acontece em um momento específico. Exemplos: um log ou erro sendo relatado ou uma alteração de configuração. Alguns eventos são agregados ao longo do tempo para formar métricas (por exemplo: uma contagem de erros ao longo do tempo).

Esses dois tipos de dados têm usos diferentes: os métricos são úteis para reconhecer padrões ao longo do tempo em seu sistema e os eventos são úteis para aprofundar e obter detalhes sobre as causas desses padrões. Como as métricas são agregadas ao longo do tempo, elas são úteis para detectar tendências e mudanças no comportamento do sistema. Para métricas que representam uma contagem agregada de eventos (como uma métrica de tempo de resposta HTTP), o evento individual fornece detalhes granulares sobre o que aconteceu e permite facetar por atributo que tenha cardinalidade alta (como conta ou ID de usuário).

## Por que a amostragem do evento é necessária [#sampling]

Nosso agente APM e agente mobile têm limites de quantos eventos podem ser reportados por [ciclo de coleta](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#harvest-cycle). Isso é necessário porque se não houvesse limite, um número muito grande de eventos enviados poderia causar impactos no desempenho do seu aplicativo ou do New Relic. Quando o limite é atingido, o agente inicia o evento de amostragem. Agentes diferentes têm limites diferentes, mas o objetivo é fornecer uma amostra representativa de todo o ciclo de coleta.

Além disso, o agente pode testar se não conseguir se conectar ao New Relic. Quando um agente não consegue se conectar ao New Relic, ele continua armazenando dados localmente. Mas deve restringir o tamanho da carga que eventualmente será enviada. Por esse motivo, ele amostra o evento durante o período desconectado. Quanto mais tempo estiver desconectado, mais amostrará.

## O impacto da amostragem [#impact]

Um resultado da amostragem é que pode haver uma discrepância entre [os dados métricos não amostrados](/docs/using-new-relic/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#overview) e os dados amostrados dos eventos. Exemplos disso:

* Um gráfico APM mostrando dados métricos não amostrados pode mostrar taxas de transferência mais altas do que uma consulta NRQL equivalente de dados de eventos amostrados. Para obter mais informações sobre a diferença entre nossos dados de métrica de fração de tempo e dados de eventos, consulte [Tipos de dados](/docs/using-new-relic/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data).
* Um serviço de monitoramento que não seja da New Relic pode mostrar resultados diferentes dos da New Relic.

Eventos que são limitados e sujeitos a amostragem incluem:

* `Transaction`
* `TransactionError`
* `Span` (veja [amostragemdistributed tracing ](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#sampling))
* Evento personalizado reportado via API do agente (exemplo: [RecordCustomEvent](/docs/agents/net-agent/net-agent-api/record-custom-event) do agente .NET)
* `Mobile`
* `MobileRequest`
* `MobileCrash`
* `MobileHandledException`

<Callout variant="important">
  Para APM, você pode [compensar a amostragem](#compensate) ao consultar dados.
</Callout>

## Alterar a forma como a amostragem ocorre [#change]

Antes de tentar alterar a forma como a amostragem ocorre, leia estas advertências e recomendações:

* Relatar mais eventos fará com que o agente use mais memória.
* Geralmente, haverá uma maneira de obter os dados necessários sem aumentar o limite de relatórios de eventos do agente.
* O limite de tamanho da carga útil é de 1 MB (10 ^ 6 bytes) (compactado), portanto, o número de eventos ainda pode ser afetado por esse limite. Para determinar se o evento está sendo descartado, consulte o log do agente para obter uma mensagem de status HTTP 413.

Aqui estão algumas maneiras de impactar a amostragem:

* A maioria dos agentes possui opções de configuração para alterar o limite de transação amostrada (exemplos: [`max_samples_stored`do agente Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ae-max_samples_stored) ou [`setMaxEventPoolSize`do agente mobile Android](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-max-event-pool-size/)).
* Se for importante para você que uma atividade específica do aplicativo não seja amostrada, você poderá usar a [API do evento](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api).
* Você poderia implantar seu aplicativo em um número maior de instâncias. Como os limites são por agente, mais agentes significarão um reservatório de eventos maior.

## APM: Compensar pela amostragem [#compensate]

Ao consultar o evento relatado pelo APM, você pode compensar a amostragem usando [`EXTRAPOLATE`](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#extrapolate). Isso lhe dará uma aproximação da aparência dos dados sem amostragem.
