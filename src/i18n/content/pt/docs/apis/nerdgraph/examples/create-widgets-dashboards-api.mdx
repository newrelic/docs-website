---
title: 'Tutorial NerdGraph: Criar e configurar widget dashboard'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to add and configure dashboards.
freshnessValidatedDate: never
translationType: machine
---

Com a API do painel New Relic você pode usar [o NerdGraph](https://api.newrelic.com/graphiql) para construir seu [painel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards). Este documento explica os diferentes tipos de widget que você pode adicionar ao seu painel e como criá-los e obtê-los usando a API.

## Esquema e tipos de widget [#widget-schema]

O esquema GraphQL do widget para saídas de consulta e mutação é semelhante a este:

```graphql
type Widget {
  id 
  visualization
  layout
  title
  linkedEntities
  configuration
  rawConfiguration
}
```

Onde:

* `id`: o ID do widget.
* `visualization`: o tipo de visualização do widget, como uma string. Por exemplo: `viz.line`, `viz.area`. Veja os [exemplos abaixo](#typed-widget-data).
* `layout`: a posição e o tamanho do widget no dashboard. A quantidade máxima de colunas é 12.
* `title`: o título do widget.
* `linkedEntities`: entidade dashboard relacionada ao widget. Atualmente ele suporta apenas dashboard entidade. Ele é usado pelo [recurso de vinculação de facetas](/docs/query-your-data/explore-query-data/dashboards/filter-new-relic-one-dashboards-facets).
* `configuration`: A [configuração digitada](#widget-typed) do widget. É uma representação GraphQL convenientemente digitada do widget mais comum: [area](#area), [bar](#bar), [billboard](#billboard), [line](#line), [markdown](#markdown), [pie](#pie) e [table](#table).
* `rawConfiguration`: a [configuração não digitada](#widget-untyped) do widget. É uma forma livre (escalar JSON) de armazenar propriedades de widgets não cobertas pela configuração digitada, como [mapa de calor](#heatmap), [histograma](#histogram), [bullet](#bullet), [funis](#funnel), etc. Neste caso, `configuration` é nulo e `rawConfiguration` contém todos os dados exigidos pelo widget.

### Tipos de widget [#types-widget]

A API do painel oferece suporte a widgets digitados e não digitados:

<CollapserGroup>
  <Collapser id="widget-typed" title="Widget digitado">
    Widgets digitados são [area](#area), [bar](#bar), [outdoor](#billboard), [line](#line), [markdown](#markdown), [pie](#pie) e [table](#table). Eles podem ser construídos diretamente usando o NerdGraph, que auxilia nos campos obrigatórios.

    Como entrada:

    * Você só precisa fornecer o `configuration`.

    * `visualization` pode ser nulo desde que possa ser inferido da configuração fornecida.

      Como saída, a API fornecerá a configuração fornecida, além da representação bruta em JSON em `rawConfiguration`. Portanto, `rawConfiguration` é sempre um superconjunto de todas as configurações de widget.
  </Collapser>

  <Collapser id="widget-untyped" title="Widget não digitado">
    Widgets não digitados são todos os outros widgets, como [bullet](#bullet), [histograma](#histogram), [inventário](#inventory), etc.

    Para widget não digitado, conhecemos e validamos a forma do JSON fornecido. Por exemplo, um [mapa de calor](#heatmap) possui uma configuração específica que conhecemos antecipadamente, para que possamos validá-la.

    Como entrada:

    * `configuration` não é considerado neste caso.

    * `rawConfiguration` Deve ser providenciado. Veja os [exemplos abaixo](#untyped-widget-data).

    * `visualization` não pode ser nulo e deve ser uma string fixa como `viz.heatmap` ou `viz.bullet`.

      Como saída, a API responde exatamente com o que foi fornecido na entrada.
  </Collapser>
</CollapserGroup>

## Definições de widget digitadas [#typed-widget-data]

### Área

A área suporta múltiplas consultas NRQL .

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="area-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="area-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="area-input" title="Entrada">
    ```graphql
    {
      widgets: {
        configuration: {
          area: {
            nrqlQueries: {
              accountId: 12345678,
              query: "SELECT count(*) FROM Transaction FACET appName TIMESERIES"
            }
          }
        }
        rawConfiguration: null
      }
    }
    ```
  </Collapser>

  <Collapser id="area-output" title="Saída">
    ```json
    {
      "visualization": "viz.area",
      "configuration": {
        "area": {
          "nrqlQueries": [
            {
              "accountId": 12345678,
              "query": "SELECT count(*) FROM Transaction FACET appName TIMESERIES"
            }
          ]
        },
        "bar": null,
        "billboard": null,
        "line": null,
        "markdown": null,
        "pie": null,
        "table": null
      },
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT count(*) FROM Transaction FACET appName TIMESERIES"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Bar

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="bar-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="bar-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="bar-input" title="Entrada">
    ```graphql
    {  
      widgets: {
        configuration: {
          bar: {
            nrqlQueries: {
              accountId: 12345678,
              query: "SELECT count(*) FROM Transaction FACET appName"
            }
          }
        }
        rawConfiguration: null
      }  
    }
    ```
  </Collapser>

  <Collapser id="bar-output" title="Saída">
    ```json
    {
      "visualization": "viz.bar",
      "configuration": {
        "area": null,
        "bar": {
          "nrqlQueries": [
            {
              "accountId": 12345678,
              "query": "SELECT count(*) FROM Transaction FACET appName"
            }
          ]
        },
        "billboard": null,
        "line": null,
        "markdown": null,
        "pie": null,
        "table": null
      },
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT count(*) FROM Transaction FACET appName"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Painel publicitário

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="billboard-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="billboard-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>

    <tr>
      <td>
        `thresholds`

        *\[Object]*
      </td>

      <td>
        Opcional. matriz de limite para categorizar os resultados da consulta em diferentes grupos:

        * `alertSeverity`: pode ser `NOT_ALERTING`, `WARNING` e `CRITICAL`.
        * `value`: Valor limite para o grupo de alerta.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="billboard-input" title="Entrada">
    ```graphql
    {  
      widgets: {
        configuration: {
          billboard: {
            nrqlQueries: {
              accountId: 12345678,
              query: "SELECT count(*) FROM Transaction FACET appName"
            }
            thresholds: {
              alertSeverity: CRITICAL
              value: 3
            }
          }
        }
        rawConfiguration: null
      }
    }
    ```
  </Collapser>

  <Collapser id="billboard-output" title="Saída">
    ```json
    {
      "visualization": "viz.billboard",
      "configuration": {
        "area": null,
        "bar": null,
        "billboard": {
          "nrqlQueries": [
            {
              "accountId": 12345678,
              "query": "SELECT count(*) FROM Transaction FACET appName"
            }
          ],
          "thresholds": [
            {
              "alertSeverity": "CRITICAL",
              "value": 3
            }
          ]
        },
        "line": null,
        "markdown": null,
        "pie": null,
        "table": null
      },
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT count(*) FROM Transaction FACET appName"
          }
        ],
        "thresholds": [
          {
            "alertSeverity": "CRITICAL",
            "value": 3
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Linha

Line suporta múltiplas consultas NRQL .

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="line-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="line-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="line-input" title="Entrada">
    ```graphql
    {
      widgets: {
        configuration: {
          line: {
            nrqlQueries: {
              accountId: 12345678,
              query: "SELECT count(*) FROM Transaction FACET appName TIMESERIES"
            }
          }
        }
        rawConfiguration: null
      }
    }
    ```
  </Collapser>

  <Collapser id="line-output" title="Saída">
    ```json
    {
      "visualization": "viz.line",
      "configuration": {
        "area": null,
        "bar": null,
        "billboard": null,
        "line": {
          "nrqlQueries": [
            {
              "accountId": 12345678,
              "query": "SELECT count(*) FROM Transaction FACET appName TIMESERIES"
            }
          ]
        },
        "markdown": null,
        "pie": null,
        "table": null
      },
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT count(*) FROM Transaction FACET appName TIMESERIES"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Remarcação

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="markdown-account_id">
      <td>
        `text`

        *Corda*
      </td>

      <td>
        Conteúdo a ser adicionado no widget de remarcação.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="markdown-input" title="Entrada">
    ```graphql
    {
      widgets: {
        configuration: {
          markdown: {
            text: "My markdown"
          }
        }
        rawConfiguration: null
      }  
    }
    ```
  </Collapser>

  <Collapser id="markdown-output" title="Saída">
    ```json
    {
      "visualization": "viz.markdown",
      "configuration": {
        "area": null,
        "bar": null,
        "billboard": null,
        "line": null,
        "markdown": {
          "text": "My markdown"
        },
        "pie": null,
        "table": null
      },
      "rawConfiguration": {
        "text": "My markdown"
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Torta

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="pie-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="pie-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="pie-input" title="Entrada">
    ```graphql
    {
      widgets: {
        configuration: {
          pie: {
            nrqlQueries: {
              accountId: 12345678,
              query: "SELECT count(*) FROM Transaction FACET appName"
            }
          }
        }
        rawConfiguration: null
      }  
    }
    ```
  </Collapser>

  <Collapser id="pie-output" title="Saída">
    ```json
    {
      "visualization": "viz.pie",
      "configuration": {
        "area": null,
        "bar": null,
        "billboard": null,
        "line": null,
        "markdown": null,
        "pie": {
          "nrqlQueries": [
            {
              "accountId": 12345678,
              "query": "SELECT count(*) FROM Transaction FACET appName"
            }
          ]
        },
        "table": null
      },
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT count(*) FROM Transaction FACET appName"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Mesa

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="table-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="table-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="table-input" title="Entrada">
    ```graphql
    {
      widgets: {
        configuration: {
          table: {
            nrqlQueries: {
              accountId: 12345678,
              query: "SELECT count(*) FROM Transaction"
            }
          }
        }
        rawConfiguration: null
      }
    }
    ```
  </Collapser>

  <Collapser id="table-output" title="Saída">
    ```json
    {
      "visualization": "viz.table",
      "configuration": {
        "area": null,
        "bar": null,
        "billboard": null,
        "line": null,
        "markdown": null,
        "pie": null,
        "table": {
          "nrqlQueries": [
            {
              "accountId": 12345678,
              "query": "SELECT count(*) FROM Transaction"
            }
          ]
        }
      },
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT count(*) FROM Transaction"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Definições de widget não digitadas [#untyped-widget-data]

### Área (métrica predefinida) [#areap]

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `duration`

        *Longo*
      </td>

      <td>
        Duração da janela de tempo solicitada, em milissegundos.

        * Quando fornecido com `endTime`, a janela de tempo é definida para os últimos `x` milissegundos que terminam no horário especificado.
        * Se `endTime` for nulo, a janela de tempo será definida para os últimos `x` milissegundos que terminam agora.
      </td>
    </tr>

    <tr>
      <td>
        `endTime`

        *Longo*
      </td>

      <td>
        Opcional. Fim da janela de tempo, em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `entityIds`

        *\[Integer]*
      </td>

      <td>
        Matriz de IDs do agente de origem para buscar dados.
      </td>
    </tr>

    <tr>
      <td>
        `metrics`

        *\[Object]*
      </td>

      <td>
        Somente para `type` `SCOPE_BREAKDOWN` . Lista de métricas a serem buscadas.
      </td>
    </tr>

    <tr id="linep-presentation">
      <td>
        `type`

        *Corda*
      </td>

      <td>
        Tipo do gráfico predefinido. Pode ser: `APPLICATION_BREAKDOWN`, `BACKGROUND_BREAKDOWN`, `BROWSER_BREAKDOWN`, `GC_RUNS_BREAKDOWN`, `SCOPE_BREAKDOWN`, `SOLR_BREAKDOWN.`
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="linep-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.area"
        configuration: null
        rawConfiguration: {
          type:SCOPE_BREAKDOWN
          endTime: null
          entityIds: [1]
          metrics: [{
            name: "Mobile/Activity/Name/Display"
          }]
          duration: 3600
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="linep-output" title="Saída">
    ```json
    {
      "visualization": "viz.area",
      "configuration": null,
      "rawConfiguration": {
        "type": "SCOPE_BREAKDOWN",
        "endTime": null,
        "entityIds": [
          1
        ],
        "metrics": [
          {
            "name": "Mobile/Activity/Name/Display"
          }
        ],
        "duration": 3600
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Bala

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="bullet-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="bullet-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>

    <tr>
      <td>
        `limit`

        *Float*
      </td>

      <td>
        Meta com a qual todos os resultados da consulta são comparados.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="bullet-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.bullet"
        configuration: null
        rawConfiguration: {
          nrqlQueries: [
            {
              accountId: 12345678,
              query: "SELECT count(*) FROM Transaction"
            }
          ]
          limit: 2.4
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="bullet-output" title="Saída">
    ```json
    {
      "visualization": "viz.bullet",
      "configuration": null,
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT count(*) FROM Transaction"
          }
        ],
        "limit": 2.4
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Feed de eventos

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="event-feed-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="event-feed-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="event-feed-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.event-feed"
        configuration: null
        rawConfiguration: {
          nrqlQueries: [      
            {
              accountId: 12345678,
              query: "SELECT * FROM InfrastructureEvent"
            }
          ]    
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="event-feed-output" title="Saída">
    ```json
    {
      "visualization": "viz.event-feed",
      "configuration": null,
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT * FROM InfrastructureEvent"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Diversão

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="funnel-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="funnel-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="funnel-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.funnel"
        configuration: null
        rawConfiguration: {
          nrqlQueries: [      
            {
              accountId: 12345678,
              query: "SELECT funnel(SESSION,
                WHERE name ='Controller/about/main' AS 'Step 1',
                WHERE name ='Controller/about/careers' AS 'Step 2')
                FROM PageView"
            }
          ]
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="funnel-output" title="Saída">
    ```json
    {
      "visualization": "viz.funnel",
      "configuration": null,
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT funnel(SESSION, \n WHERE name ='Controller/about/main' AS 'Step 1', \n WHERE name ='Controller/about/careers' AS 'Step 2') \n FROM PageView"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Mapa de calor

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="heatmap-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="heatmap-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="heatmap-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.heatmap"
        configuration: null
        rawConfiguration: {
          nrqlQueries: [      
            {
              accountId: 12345678,
              query: "SELECT histogram(duration) FROM Transaction Facet appName"
            }
          ]
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="heatmap-output" title="Saída">
    ```json
    {
      "visualization": "viz.heatmap",
      "configuration": null,
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT histogram(duration) FROM Transaction Facet appName"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Histograma

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="histogram-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="histogram-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="histogram-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.histogram"
        configuration: null
        rawConfiguration: {
          nrqlQueries: [      
            {
              accountId: 12345678,
              query: "SELECT histogram(duration) FROM Transaction"
            }
          ]
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="histogram-output" title="Saída">
    ```json
    {
      "visualization": "viz.histogram",
      "configuration": null,
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT histogram(duration) FROM Transaction"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Inventário

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="inventory-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="inventory-filters">
      <td>
        `filters`

        *Objeto*
      </td>

      <td>
        Mapa dos filtros a serem aplicados às fontes de infraestrutura.
      </td>
    </tr>

    <tr id="inventory-presentation">
      <td>
        `sources`

        *\[String]*
      </td>

      <td>
        Lista das fontes de infraestrutura das quais obter dados. Para obter mais informações, consulte nossos documentos sobre [a aparência das entradas de inventário](/docs/infrastructure/infrastructure-ui-pages/infra-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure).
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="inventory-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "infra.inventory"
        configuration: null
        rawConfiguration: {
          accountId: 12345678,  
          filters: {
            providerAccountId: "1"
          }
          sources: [ "aws/elastocache/cluster", "aws/elasticache/node" ]
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="inventory-output" title="Saída">
    ```json
    {
      "visualization": "infra.inventory",
      "configuration": null,
      "rawConfiguration": {
        "accountId": 12345678,
        "filters": {
          "providerAccountId": "1"
        },
        "sources": [
          "aws/elastocache/cluster",
          "aws/elasticache/node"
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### JSON

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="json-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr id="json-presentation">
      <td>
        `query`

        *Corda*
      </td>

      <td>
        A [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que fornece os dados para o widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="json-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.json"
        configuration: null
        rawConfiguration: {
          nrqlQueries: [      
            {
              accountId: 12345678,
              query: "SELECT * FROM Transaction"
            }
          ]
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="json-output" title="Saída">
    ```json
    {
      "visualization": "viz.json",
      "configuration": null,
      "rawConfiguration": {
        "nrqlQueries": [
          {
            "accountId": 12345678,
            "query": "SELECT * FROM Transaction"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Linha (métrica) [#linem]

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr>
      <td>
        `compareWith`

        *Objeto*
      </td>

      <td>
        Opcional. Janela de tempo adicional para consulta. Por exemplo:

        ```graphql
        {
          offsetDuration: 86400000
          presentation: { "#c001", "Yesterday" }
        }
        ```
      </td>
    </tr>

    <tr id="linem-account_id">
      <td>
        `duration`

        *Longo*
      </td>

      <td>
        Duração da janela de tempo solicitada, em milissegundos.

        * Quando fornecido com `endTime`, a janela de tempo é definida para os últimos `x` milissegundos que terminam no horário especificado.
        * Se `endTime` for nulo, a janela de tempo será definida para os últimos `x` milissegundos que terminam agora.
      </td>
    </tr>

    <tr id="linem-presentation">
      <td>
        `endTime`

        *Longo*
      </td>

      <td>
        Fim da janela de tempo, em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `entityIds`

        *\[Integer]*
      </td>

      <td>
        Matriz de IDs do agente de origem para buscar dados.
      </td>
    </tr>

    <tr>
      <td>
        `facet`

        *Corda*
      </td>

      <td>
        Opcional. Facete os dados pelo atributo fornecido. Pode ser `host`, `agent`, `application` ou `mobile_version`.
      </td>
    </tr>

    <tr>
      <td>
        `limit`

        *Inteiro*
      </td>

      <td>
        Opcional. Quantidade máxima de séries a serem devolvidas.
      </td>
    </tr>

    <tr>
      <td>
        `metrics`

        *\[Object]*
      </td>

      <td>
        Lista de métricas a serem buscadas.
      </td>
    </tr>

    <tr>
      <td>
        `orderBy`

        *Corda*
      </td>

      <td>
        Opcional. Usado para classificar os resultados em ordem decrescente.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="linem-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "viz.line"
        configuration: null
        rawConfiguration: {
          accountId: 12345678,      
          duration: 36000
          endTime: null
          entityIds: [ 100 ]
          facet: null
          limit: null
          metrics: [{
            name: "Errors/all"
            values: [ "error_rate" ]
          }]
          orderBy: null
          compareWith: []
          rawMetricName: "Errors/all"
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="linem-output" title="Saída">
    ```json
    {
      "visualization": "viz.line",
      "configuration": null,
      "rawConfiguration": {
        "accountId": 12345678,
        "duration": 36000,
        "endTime": null,
        "entityIds": [
          100
        ],
        "facet": null,
        "limit": null,
        "metrics": [
          {
            "name": "Errors/all",
            "values": [
              "error_rate"
            ]
          }
        ],
        "orderBy": null,
        "compareWith": [],
        "rawMetricName": "Errors/all"
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Mapa de serviço

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de dados do widget
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="service-map-account_id">
      <td>
        `accountId`

        *Inteiro*
      </td>

      <td>
        Conta de origem da qual buscar dados.
      </td>
    </tr>

    <tr>
      <td>
        `additionalEntities`

        *\[Object]*
      </td>

      <td>
        Opcional. Uma série de entidades adicionais a serem incluídas. O destino é a entidade downstream, enquanto a origem é upstream. `Type`, `vendor`, `target` e `source` são opcionais.
      </td>
    </tr>

    <tr>
      <td>
        `deemphasizedConditions`

        *\[Object]*
      </td>

      <td>
        Opcional. entidade com essas condições aparecem desbotadas no mapa.
      </td>
    </tr>

    <tr id="service-map-account_id">
      <td>
        `hiddenEntities`

        *\[Object]*
      </td>

      <td>
        Opcional. entidade a ser excluída do mapa.
      </td>
    </tr>

    <tr id="service-map-presentation">
      <td>
        `primaryEntities`

        *\[Object]*
      </td>

      <td>
        A entidade principal que inicia o mapa (mais a montante).
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser id="service-map-input" title="Entrada">
    ```graphql
    {
      widgets: {
        visualization: "topology.service-map"
        configuration: null
        rawConfiguration: {
          accountId: 12345678,       
          entitySearchQuery: "alertStatus IN ('RED')"
          additionalEntities: [{
            guid: "AAA"
            type: "APPLICATION"
            vendor: "Company inc."
            sourceGuid: "BBB"
            targetGuid: "CCC"
          }]
          deemphasizedConditions: {
            alertStatus: [ GREEN ]
            entityType: [ APM_APPLICATION_ENTITY ]
          }
          hiddenEntities: [{
            guid: "XXX_2"
            sourceGuid: "YYY_2"
            targetGuid: "ZZZ_2"
          }]
          primaryEntities: [{
            guid: "AAA"
          }]
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="service-map-output" title="Saída">
    ```json
    {
      "visualization": "topology.service-map",
      "configuration": null,
      "rawConfiguration": {
        "accountId": 12345678,
        "entitySearchQuery": "alertStatus IN ('RED')",
        "additionalEntities": [
          {
            "guid": "AAA",
            "type": "APPLICATION",
            "vendor": "Company inc.",
            "sourceGuid": "BBB",
            "targetGuid": "CCC"
          }
        ],
        "deemphasizedConditions": {
          "alertStatus": [
            "GREEN"
          ],
          "entityType": [
            "APM_APPLICATION_ENTITY"
          ]
        },
        "hiddenEntities": [
          {
            "guid": "XXX_2",
            "sourceGuid": "YYY_2",
            "targetGuid": "ZZZ_2"
          }
        ],
        "primaryEntities": [
          {
            "guid": "AAA"
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>