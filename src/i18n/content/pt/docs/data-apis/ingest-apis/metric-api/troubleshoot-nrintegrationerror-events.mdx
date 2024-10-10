---
title: Solucionar problemas da API métrica com evento NRIntegrationError
type: troubleshooting
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: Troubleshoot missing data from the Metric API by querying NRIntegrationError data.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você enviou pontos de dados métricos para a [API métrica](/docs/introduction-new-relic-metric-api) e não está vendo o que esperava ao consultar os dados. Use a lista de verificação a seguir para determinar a causa raiz:

* Certifique-se de [consultar os dados corretamente](/docs/introduction-new-relic-metric-api#view-and-query).
* Verifique os [códigos de status HTTP retornados pela API](/docs/report-metrics-metric-api#response-validation). Problemas como falhas de autorização podem ser diagnosticados com códigos de status HTTP.
* Se você estiver enviando dados de um servidor Prometheus por meio [do endpoint remote_write do New Relic](/docs/integrations/prometheus-integrations/get-started/monitor-prometheus-new-relic#remote-write), verifique se há erros no log do servidor Prometheus ou respostas HTTP não 2xx do endpoint New Relic.
* Consulte sua conta para [`NrIntegrationError` evento](/docs/telemetry-data-platform/manage-data/nrintegrationerror). Os endpoints de ingestão do New Relic são assíncrono, o que significa que o endpoint verifica a carga _depois de_ retornar a resposta HTTP. Se ocorrer algum problema durante a verificação de sua carga útil, um evento `NrIntegrationError` será criado em sua conta. A New Relic também usa o evento `NrIntegrationError` para notificar os clientes quando vários limites de taxas forem atingidos.

## Solução

### Ver detalhes do erro [#error-details]

Para obter uma introdução ao uso do evento `NrIntegrationError` , consulte [`NrIntegrationError`](/docs/telemetry-data-platform/manage-data/nrintegrationerror).

Aqui está um exemplo de NRQL para examinar problemas com a ingestão da API métrica:

```sql
SELECT count(*) FROM NrIntegrationError WHERE newRelicFeature = 'Metrics' 
FACET category, message LIMIT 100 SINCE 24 hours ago
```

O `category` indica o tipo de erro e o `message` fornece informações mais detalhadas sobre o erro. Se `category` for `rateLimit`, você também deverá examinar o campo `rateLimitType` para obter mais informações sobre o tipo de limitação de taxa.

<table>
  <thead>
    <tr>
      <th>
        Categoria
      </th>

      <th>
        rateLimitType
      </th>

      <th>
        Descrição e solução
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `BadRequest`
      </td>

      <td>
        (não configurado)
      </td>

      <td>
        Há um problema com a carga JSON. Isso inclui erros de sintaxe JSON, nomes de atributos ou valores muito longos.

        Verifique o campo `message` para determinar o problema exato. Em seguida, revise a carga JSON e atualize-a para garantir que atenda às diretrizes semânticas adequadas.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `DatapointsPerMinute`
      </td>

      <td>
        Você está enviando muitos pontos de dados por minuto. Se você receber esse erro, poderá enviar dados com menos frequência ou solicitar alterações em seus limites de taxa métrica entrando em contato com seu representante de conta da New Relic ou visitando nosso [portal de suporte](https://support.newrelic.com/).
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `UniqueTimeseriesPerDay`
      </td>

      <td>
        Você possui um atributo com alto número de valor exclusivo, como `containerId` ou `URI`. Para resolver esse erro, revise qualquer atributo que possa estar causando o problema e remova-o. Se desejar, você pode usar [regras para eliminação de dados](/docs/accounts/accounts/data-management/drop-data-using-nerdgraph) para remover atributo no momento da ingestão.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `UniquePrometheusTimeseries`
      </td>

      <td>
        Você tem servidores Prometheus relatando muitas séries temporais exclusivas por meio [do endpoint remote_write do New Relic](/docs/integrations/prometheus-integrations/get-started/monitor-prometheus-new-relic#remote-write).

        Reduza o número de séries temporais exclusivas relatadas modificando a [configuração do servidor Prometheus](https://prometheus.io/docs/prometheus/latest/configuration/configuration/) para reduzir o número de destinos sendo copiados ou usando [regras de relabel](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config) na [seção remote_write](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write) da configuração do servidor para descartar séries temporais ou rótulos altamente exclusivos.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `RequestsPerMinute`
      </td>

      <td>
        Muitas solicitações por minuto estão sendo enviadas. Para resolver isso, coloque mais pontos de dados em cada solicitação e envie-os com menos frequência.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `ErrorGroupsPerDay`
      </td>

      <td>
        Você excedeu o limite diário do grupo de erros. Os grupos de erros recebidos serão descartados pelo resto do dia e continuarão normalmente após a meia-noite UTC.

        Para resolver isso, reduza a quantidade de mensagens de erro exclusivas coletadas pela New Relic.
      </td>
    </tr>
  </tbody>
</table>

### Corresponder erros à carga ingerida [#errors-payloads]

Quando um [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)é criado como resultado de um problema de sintaxe com a carga útil da solicitação HTTP, o evento contém o atributo `apiKeyPrefix` e `requestId`.

* O `apiKeyPrefix` corresponde aos primeiros seis caracteres da chave de API usada para enviar os dados.
* O `requestId` corresponde ao `requestId` enviado na resposta HTTP.

Para visualizar esses campos, execute esta consulta NRQL:

```sql
SELECT message, apiKeyPrefix, requestId FROM NrIntegrationError LIMIT 100
```

Para verificar um `requestId` específico, execute esta consulta NRQL:

```sql
SELECT * FROM NrIntegrationError WHERE requestId = 'REQUEST_ID'
```

### Recuperar programaticamente o evento NrIntegrationError

Para recuperar esses erros programaticamente:

1. Certifique-se de ter uma [chave de API de consulta do Insights](/docs/insights/insights-api/get-data/query-insights-event-data-api) (vá para <DNT>**[insights.newrelic.com](https://insights.newrelic.com) > Manage data > API keys**</DNT>).

2. Crie uma solicitação HTTP conforme mostrado abaixo:

   <Callout variant="tip">
     Se a sua organização alojar dados no centro de dados da UE, certifique-se de que está a utilizar o [ponto final da região da UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints).
   </Callout>

   ```bash
   curl -H "Accept: application/json" -H "X-Query-Key:YOUR_API_KEY_HERE" "https://insights-api.newrelic.com/v1/accounts/YOUR_ACCOUNT_HERE/query?nrql=SELECT%20*%20FROM%20NrIntegrationError%20where%20newRelicFeature='Metrics'"
   ```
