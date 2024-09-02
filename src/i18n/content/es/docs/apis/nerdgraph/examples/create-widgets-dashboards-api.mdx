---
title: 'Tutorial de NerdGraph: Crear panel'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to add and configure dashboards.
freshnessValidatedDate: never
translationType: machine
---

Con la API del panel de New Relic, puede usar [NerdGraph](https://api.newrelic.com/graphiql) para crear su [panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards). Este documento explica los diferentes tipos de widgets que puede agregar a su panel y cómo crearlos y obtenerlos usando la API.

## Esquema y tipos widget [#widget-schema]

El esquema GraphQL del widget para resultados de consulta y mutación se ve así:

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

Dónde:

* `id`: La identificación del widget.
* `visualization`: el tipo de visualización del widget, como una cadena. Por ejemplo: `viz.line`, `viz.area`. Vea los [ejemplos a continuación](#typed-widget-data).
* `layout`: La posición y el tamaño del widget en el dashboard. La cantidad máxima de columnas es 12.
* `title`: El título del widget.
* `linkedEntities`: entidad dashboard relacionada con el widget. Actualmente solo admite dashboard de entidades. Es utilizado por la [característica de enlace de facetas](/docs/query-your-data/explore-query-data/dashboards/filter-new-relic-one-dashboards-facets).
* `configuration`: La [configuración escrita](#widget-typed) del widget. Es una representación GraphQL convenientemente escrita del widget más común: [área](#area), [barra](#bar), [cartelera](#billboard), [línea](#line), [rebajas](#markdown), [circular](#pie) y [tabla](#table).
* `rawConfiguration`: La [configuración sin tipo](#widget-untyped) del widget. Es una forma libre (escalar JSON) de almacenar propiedades widget que no están cubiertas por la configuración escrita, como [mapa de calor](#heatmap), [histograma](#histogram), [viñeta](#bullet), [embudos](#funnel), etc. En este caso, `configuration` es nulo y `rawConfiguration` contiene todos los datos requeridos por el widget.

### Tipos de widgets [#types-widget]

La API del panel admite widgets con y sin tipo:

<CollapserGroup>
  <Collapser
    id="widget-typed"
    title="Widget escrito"
  >
    Los widgets escritos son [área](#area), [barra](#bar), [cartelera](#billboard), [línea](#line), [rebajas](#markdown), [circular](#pie) y [tabla](#table). Se pueden crear directamente utilizando NerdGraph, que brinda asistencia con los campos requeridos.

    Como entrada:

    * Sólo necesitas proporcionar el `configuration`.

    * `visualization` puede ser nulo siempre que pueda inferirse de la configuración proporcionada.

      Como resultado, la API proporcionará la configuración que proporcionó más la representación sin formato en JSON en `rawConfiguration`. Por lo tanto, `rawConfiguration` es siempre un superconjunto de todas las configuraciones widget .
  </Collapser>

  <Collapser
    id="widget-untyped"
    title="Widget sin tipo"
  >
    Los widgets sin tipo son todos los demás widgets, como [viñetas](#bullet), [histogramas](#histogram), [inventario](#inventory), etc.

    Para el widget sin tipo, conocemos y validamos la forma del JSON proporcionado. Por ejemplo, un [mapa de calor](#heatmap) tiene una configuración específica que conocemos de antemano, por lo que podemos validarlo.

    Como entrada:

    * `configuration` En este caso no se considera.

    * `rawConfiguration` debe ser provisto. Vea los [ejemplos a continuación](#untyped-widget-data).

    * `visualization` no puede ser nulo y debe ser una cadena fija como `viz.heatmap` o `viz.bullet`.

      Como resultado, la API responde exactamente con lo que se proporcionó en la entrada.
  </Collapser>
</CollapserGroup>

## Definiciones widget escritos [#typed-widget-data]

### Área

El área admite múltiples consultas NRQL .

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="area-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="area-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="area-input"
    title="Aporte"
  >
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

  <Collapser
    id="area-output"
    title="Producción"
  >
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
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="bar-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="bar-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="bar-input"
    title="Aporte"
  >
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

  <Collapser
    id="bar-output"
    title="Producción"
  >
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

### Cartelera

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="billboard-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="billboard-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>

    <tr>
      <td>
        `thresholds`

        _\[Object]_
      </td>

      <td>
        Opcional. matriz de umbral para categorizar los resultados de la consulta en diferentes grupos:

        * `alertSeverity`: Puede ser `NOT_ALERTING`, `WARNING` y `CRITICAL`.
        * `value`: Valor umbral para el grupo de alerta.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="billboard-input"
    title="Aporte"
  >
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

  <Collapser
    id="billboard-output"
    title="Producción"
  >
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

### Línea

Line admite múltiples consultas NRQL .

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="line-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="line-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="line-input"
    title="Aporte"
  >
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

  <Collapser
    id="line-output"
    title="Producción"
  >
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

### Reducción

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="markdown-account_id">
      <td>
        `text`

        _Cadena_
      </td>

      <td>
        Contenido que se agregará en el widget de rebajas.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="markdown-input"
    title="Aporte"
  >
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

  <Collapser
    id="markdown-output"
    title="Producción"
  >
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

### Tarta

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="pie-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="pie-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="pie-input"
    title="Aporte"
  >
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

  <Collapser
    id="pie-output"
    title="Producción"
  >
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
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="table-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="table-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="table-input"
    title="Aporte"
  >
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

  <Collapser
    id="table-output"
    title="Producción"
  >
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

## Definiciones widget sin tipo [#untyped-widget-data]

### Área (métrica predefinida) [#areap]

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `duration`

        _Largo_
      </td>

      <td>
        Duración del período de tiempo solicitado, en milisegundos.

        * Cuando se proporciona `endTime`, la ventana de tiempo se establece en los últimos `x` milisegundos que terminan en el momento especificado.
        * Si `endTime` es nulo, la ventana de tiempo se establece en los últimos `x` milisegundos que terminan ahora.
      </td>
    </tr>

    <tr>
      <td>
        `endTime`

        _Largo_
      </td>

      <td>
        Opcional. Fin de la ventana de tiempo, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `entityIds`

        _\[Integer]_
      </td>

      <td>
        Matriz de ID de agente de origen de los que recuperar datos.
      </td>
    </tr>

    <tr>
      <td>
        `metrics`

        _\[Object]_
      </td>

      <td>
        Solo para `type` `SCOPE_BREAKDOWN` . Lista de métricas a recuperar.
      </td>
    </tr>

    <tr id="linep-presentation">
      <td>
        `type`

        _Cadena_
      </td>

      <td>
        Tipo de gráfico predefinido. Puede ser: `APPLICATION_BREAKDOWN`, `BACKGROUND_BREAKDOWN`, `BROWSER_BREAKDOWN`, `GC_RUNS_BREAKDOWN`, `SCOPE_BREAKDOWN`, `SOLR_BREAKDOWN.`
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="linep-input"
    title="Aporte"
  >
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

  <Collapser
    id="linep-output"
    title="Producción"
  >
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
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="bullet-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="bullet-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>

    <tr>
      <td>
        `limit`

        _Flotante_
      </td>

      <td>
        Objetivo con el que se comparan todos los resultados de la consulta.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="bullet-input"
    title="Aporte"
  >
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

  <Collapser
    id="bullet-output"
    title="Producción"
  >
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

### Alimentación de eventos

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="event-feed-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="event-feed-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="event-feed-input"
    title="Aporte"
  >
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

  <Collapser
    id="event-feed-output"
    title="Producción"
  >
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

### Embudos

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="funnel-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="funnel-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="funnel-input"
    title="Aporte"
  >
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

  <Collapser
    id="funnel-output"
    title="Producción"
  >
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
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="heatmap-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="heatmap-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="heatmap-input"
    title="Aporte"
  >
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

  <Collapser
    id="heatmap-output"
    title="Producción"
  >
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
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="histogram-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="histogram-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="histogram-input"
    title="Aporte"
  >
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

  <Collapser
    id="histogram-output"
    title="Producción"
  >
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

### Inventario

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="inventory-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="inventory-filters">
      <td>
        `filters`

        _Objeto_
      </td>

      <td>
        Mapa de los filtros a aplicar a las fuentes de infraestructura.
      </td>
    </tr>

    <tr id="inventory-presentation">
      <td>
        `sources`

        _\[String]_
      </td>

      <td>
        Lista de fuentes de infraestructura de las que obtener datos. Para obtener más información, consulte nuestros documentos sobre [cómo se ven las entradas de inventario](/docs/infrastructure/infrastructure-ui-pages/infra-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure).
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="inventory-input"
    title="Aporte"
  >
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

  <Collapser
    id="inventory-output"
    title="Producción"
  >
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
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="json-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr id="json-presentation">
      <td>
        `query`

        _Cadena_
      </td>

      <td>
        La [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) que proporciona los datos para el widget.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="json-input"
    title="Aporte"
  >
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

  <Collapser
    id="json-output"
    title="Producción"
  >
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

### Línea (métrica) [#linem]

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr>
      <td>
        `compareWith`

        _Objeto_
      </td>

      <td>
        Opcional. Ventana de tiempo adicional para consultar. Por ejemplo:

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

        _Largo_
      </td>

      <td>
        Duración del período de tiempo solicitado, en milisegundos.

        * Cuando se proporciona `endTime`, la ventana de tiempo se establece en los últimos `x` milisegundos que terminan en el momento especificado.
        * Si `endTime` es nulo, la ventana de tiempo se establece en los últimos `x` milisegundos que terminan ahora.
      </td>
    </tr>

    <tr id="linem-presentation">
      <td>
        `endTime`

        _Largo_
      </td>

      <td>
        Fin de la ventana de tiempo, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `entityIds`

        _\[Integer]_
      </td>

      <td>
        Matriz de ID de agente de origen de los que recuperar datos.
      </td>
    </tr>

    <tr>
      <td>
        `facet`

        _Cadena_
      </td>

      <td>
        Opcional. Faceta los datos por el atributo dado. Puede ser `host`, `agent`, `application` o `mobile_version`.
      </td>
    </tr>

    <tr>
      <td>
        `limit`

        _Entero_
      </td>

      <td>
        Opcional. Cantidad máxima de series a devolver.
      </td>
    </tr>

    <tr>
      <td>
        `metrics`

        _\[Object]_
      </td>

      <td>
        Lista de métricas a recuperar.
      </td>
    </tr>

    <tr>
      <td>
        `orderBy`

        _Cadena_
      </td>

      <td>
        Opcional. Se utiliza para ordenar los resultados en orden descendente.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="linem-input"
    title="Aporte"
  >
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

  <Collapser
    id="linem-output"
    title="Producción"
  >
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

### Mapa de servicios

<table>
  <thead>
    <tr>
      <th width="25%">
        Elemento de datos del widget
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="service-map-account_id">
      <td>
        `accountId`

        _Entero_
      </td>

      <td>
        Cuenta de origen de la que recuperar datos.
      </td>
    </tr>

    <tr>
      <td>
        `additionalEntities`

        _\[Object]_
      </td>

      <td>
        Opcional. Una matriz de entidades adicionales a incluir. El objetivo es la entidad aguas abajo, mientras que la fuente es aguas arriba. `Type`, `vendor`, `target` y `source` son opcionales.
      </td>
    </tr>

    <tr>
      <td>
        `deemphasizedConditions`

        _\[Object]_
      </td>

      <td>
        Opcional. Las entidades con estas condiciones tienen una apariencia descolorida en el mapa.
      </td>
    </tr>

    <tr id="service-map-account_id">
      <td>
        `hiddenEntities`

        _\[Object]_
      </td>

      <td>
        Opcional. entidad a ser excluida del mapa.
      </td>
    </tr>

    <tr id="service-map-presentation">
      <td>
        `primaryEntities`

        _\[Object]_
      </td>

      <td>
        La entidad principal que inicia el mapa (más arriba).
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="service-map-input"
    title="Aporte"
  >
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

  <Collapser
    id="service-map-output"
    title="Producción"
  >
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
