---
title: Os metadados GraphQL não são encontrados em AjaxRequests
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing GraphQL metadata on AjaxRequest events for your browser app.
freshnessValidatedDate: '2023-10-19T00:00:00.000Z'
translationType: machine
---

## Problema

Você está vendo o evento AjaxRequest, mas eles não contêm as seguintes propriedades de metadados GraphQL para seu aplicativo de browser.

* [Framework de operação](/attribute-dictionary/?event=AjaxRequest&attribute=operationFramework)
* [Nome da Operação](/attribute-dictionary/?event=AjaxRequest&attribute=operationName)
* [Tipo de operação](/attribute-dictionary/?event=AjaxRequest&attribute=operationType)

## Causa

O agente browser analisa cada corpo de solicitação e consulta AJAX e tenta identificar padrões GraphQL comuns. Ao detectar esses padrões, ele anexará propriedades extras de metadados ao evento AjaxRequest de saída que está sendo coletado. Se o agente não conseguir detectar esses padrões, ele não adicionará as propriedades extras do evento.

## Solução

Se sua aplicação é [um instrumento com a última versão de monitoramento de Browser](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation) e está coletando dados de todos os [Pro recurso](/docs/browser/new-relic-browser/browser-pro-features), certifique-se de que suas solicitações AJAX estão sendo enviadas usando a formatação padrão GraphQL.

Para verificar o formato da sua solicitação AJAX, use o console de desenvolvimento do seu browser para visualizar as solicitações e compará-las com a sintaxe abaixo.

<CollapserGroup>
  <Collapser
    id="post"
    title="Solicitações POST GraphQL"
  >
    Para consulta POST GraphQL, mutações e assinatura, o agente browser analisa o corpo da solicitação em busca de dados formatados como tal:

    ```js
    {
        "query": ...,
        "operationName": ...,
        "variables": ... 
      }
    ```
  </Collapser>

  <Collapser
    id="get"
    title="Solicitação GraphQL GET"
  >
    Para consultas GET GraphQL, o agente browser analisa o parâmetro de consulta de solicitação para dados formatados como tal:

    ```js
    ?query=...&operationName=...&variables=...
    ```
  </Collapser>

  <Collapser
    id="batch"
    title="Lote solicitações POST GraphQL"
  >
    Para operações GraphQL em lote, o agente browser analisa o corpo da solicitação em busca de dados formatados como tal:

    ```js
    [
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        ...etc
      ]
    ```
  </Collapser>
</CollapserGroup>

Consulte [a documentação do GraphQL](https://graphql.org/learn/serving-over-http/#post-request) para uma descrição completa desses padrões.

O agente usa o conteúdo dessa carga para detectar padrões GraphQL e construir as propriedades de metadados. Qualquer corpo de solicitação ou consulta que não esteja na seção `query` não será processado como dados do GraphQL.

Se você perceber que sua carga do GraphQL não segue esse padrão, o agente não será capaz de detectar com segurança os metadados do GraphQL.

Se alguma dessas etapas de resolução de problemas falhar ou você ainda estiver tendo problemas com propriedades de dados AJAX ausentes, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).
