---
title: Resolução de problemas faltando dados de API trace
type: troubleshooting
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For New Relic''s Trace API: how to troubleshoot missing trace data.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você usou a [API Trace](/docs/apm/distributed-tracing/trace-api/introduction-new-relic-trace-api) para relatar dados, mas não vê seus dados no New Relic ou tem dúvidas sobre isso.

## Solução

Aqui estão algumas ideias para resolução de problemas trace de dados relatados pela API:

* Para verificar se os dados do span foram relatados, execute uma consulta NRQL no [criador de consulta](https://one.newrelic.com/launcher/nr1-core.home#pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5zZWFyY2gtcm9vdCJ9&overlay=eyJvdmVybGF5SWQiOiJ3YW5kYS1kYXRhLWV4cGxvcmF0aW9uLm5ycWwtZWRpdG9yIiwibmVyZGxldElkIjoid2FuZGEtZGF0YS1leHBsb3JhdGlvbi5kYXRhLWV4cGxvcmVyIiwiaW5pdGlhbEFjdGl2ZUludGVyZmFjZSI6Im5ycWxFZGl0b3IiLCJpbml0aWFsQWNjb3VudElkIjoxfQ==) para o span recém-carregado. Você deve estar na mesma conta New Relic usada para relatar os dados trace (mesmo <InlinePopover type="licenseKey"/>). Exemplo de consulta:

  ```sql
  FROM Span SELECT * WHERE trace.id = '123456'
  ```

* Se uma chamada gerar um código de resposta HTTP, procure o [significado do código de resposta](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#status-codes).

* Se ocorrerem problemas de limitação de taxa, geramos um [`NrIntegrationError`](/docs/telemetry-data-platform/manage-data/nrintegrationerror). Você pode [executar uma consulta NRQL desse evento](https://one.newrelic.com/launcher/nr1-core.home?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5ob21lLXNjcmVlbiJ9&overlay=eyJuZXJkbGV0SWQiOiJ3YW5kYS1kYXRhLWV4cGxvcmF0aW9uLmRhdGEtZXhwbG9yZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxBY2NvdW50SWQiOjI0NTkxMTUsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3siYWNjb3VudElkIjoyNDU5MTE1LCJucnFsIjoiRlJPTSBOckludGVncmF0aW9uRXJyb3Igc2VsZWN0ICogIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9UQUJMRSJ9fQ==) para ver se seus dados trace encontraram um problema. Se desejar correlacionar o evento `NrIntegrationError`, você poderá usar o `requestId` fornecido por cada solicitação da API trace .

* Se seus períodos tiverem carimbo de data/hora, certifique-se de que eles atendam às seguintes diretrizes:

  * O carimbo de data/hora do intervalo deve ter ocorrido nos últimos 60 minutos.

  * `newrelic`-format timestamp deve estar em

    <DNT>
      **milliseconds**
    </DNT>

    . Você pode obter a hora atual em milissegundos em [currentmillis.com](https://currentmillis.com).

  * `zipkin`-format timestamp deve estar em

    <DNT>
      **microseconds**
    </DNT>

    .

  * O carimbo de data/hora deve estar em UTC.

* As chamadas para o endpoint não são idempotentes. Isso significa que se você enviar vários rastreamentos com o mesmo `trace.id`, isso resultará em rastreamento fragmentado na interface devido a dados pai-filho trace ambíguos.

* Verifique novamente se sua carga útil é válida. Para o rastreamento no formato `newrelic` , um problema pode ser que os pares de valores principais não tenham sido colocados no bloco `attributes` .

* Confirme se o seu trace tem um intervalo raiz (um `parent.id` nulo em um intervalo). Exemplo de consulta:

  ```sql
  FROM Span SELECT * WHERE trace.id = '123456' AND parent.id IS NULL
  ```

Para obter mais informações sobre como a transmissão de dados da API Trace é validada, consulte [Validação](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#response-validation).
