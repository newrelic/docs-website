---
title: 'Tutorial de NerdGraph: Ver detalles del rastreo distribuido'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph (our GraphQL API) to query your distributed trace data.
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar [el explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql) de New Relic para consultar los datos de su [rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing) . Este documento explica:

* Traza metadatos que solo está disponible con NerdGraph
* Ejemplo de consulta de datos de traza

## Traza metadatos

Además de [los datos de eventos de intervalo y eventos de transacción](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure), calculamos metadatos adicionales sobre la traza y sus relaciones de intervalo. Para consultar estos metadatos, vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

Datos adicionales a nivel de traza:

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Metadatos a nivel de traza
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `durationMs`
      </td>

      <td>
        La duración de esta traza en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `entities`
      </td>

      <td>
        Todas [las entidades](/docs/using-new-relic/welcome-new-relic/get-started/glossary#entity) que forman parte de esta traza.
      </td>
    </tr>

    <tr>
      <td>
        `entityCount`
      </td>

      <td>
        El número de entidades que forman parte de esta traza.
      </td>
    </tr>

    <tr>
      <td>
        `spanConnections`
      </td>

      <td>
        ID de padre/hijo que representan todas las relaciones de intervalo dentro de esta traza.
      </td>
    </tr>

    <tr>
      <td>
        `timestamp`
      </td>

      <td>
        Hora de inicio de la traza en milisegundos desde la Unix epoch] ([https://currentmillis.com/](https://currentmillis.com/)).
      </td>
    </tr>
  </tbody>
</table>

Datos adicionales a nivel de tramo:

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Metadatos a nivel de tramo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `clientType`
      </td>

      <td>
        Para un tramo de cliente, esto indica el tipo de entidad llamada: `DATASTORE` o `EXTERNAL`.
      </td>
    </tr>

    <tr>
      <td>
        `entityGuid`
      </td>

      <td>
        El identificador de New Relic para la entidad que envió el tramo.
      </td>
    </tr>

    <tr>
      <td>
        `processBoundary`
      </td>

      <td>
        La posición de un tramo con respecto a los límites entre procesos: `ENTRY`, `EXIT` o `IN_PROCESS`.
      </td>
    </tr>

    <tr>
      <td>
        `spanAnomalies`
      </td>

      <td>
        Anomalía detectada para un lapso, en comparación con lapsos similares que ocurrieron durante las horas anteriores antes de que ocurriera este lapso. Los tramos anómalos aparecen en la [UIde la traza](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data).
      </td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre la estructura de la traza y las relaciones de tramo, consulte [estructura de la traza](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).

## Ejemplos de consulta de datos de traza [#trace-query-examples]

Aquí hay un ejemplo de consulta NerdGraph de datos distribuidos de rastreo:

<CollapserGroup>
  <Collapser
    id="traceid"
    title="Consulta por traza ID"
  >
    Este ejemplo de consulta de NerdGraph muestra cómo devolver todos los datos de una traza utilizando el [`traceId`](/attribute-dictionary/span/traceid) de una traza. Tenga en cuenta que `attributes` se utiliza para devolver [`Span` atributo de evento](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-storage).

    ```graphql
    {
      actor {
        distributedTracing {
          trace(traceId: "YOUR_TRACE_ID") {
            spans {
              attributes
              clientType
              durationMs
              entityGuid
              id
              name
              parentId
              processBoundary
              timestamp
              traceId
              spanAnomalies {
                anomalousValue
                anomalyType
                averageMeasure
              }
            }
          }
        }
      }
    }
    ```

    Para obtener más información sobre la estructura de la traza y las relaciones de tramo, consulte [estructura de la traza](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).
  </Collapser>

  <Collapser
    id="trace-data"
    title="Datos de relación de intervalo de consulta"
  >
    Este ejemplo de consulta de NerdGraph muestra cómo devolver metadatos a nivel de traza sobre las relaciones entre tramos:

    ```graphql
    {
      actor {
        distributedTracing {
          trace(traceId: "YOUR_TRACE_ID") {
            id
            timestamp
            durationMs
            spanConnections {
              parent
              child
            }
          }
        }
      }
    }
    ```

    Para obtener más información sobre la estructura de la traza y las relaciones de tramo, consulte [estructura de la traza](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).
  </Collapser>

  <Collapser
    id="entity-data"
    title="Consulta datos de la entidad en una traza"
  >
    Este ejemplo de consulta de NerdGraph devuelve la [entidad](/docs/using-new-relic/welcome-new-relic/get-started/glossary#entity) asociada con una traza y algunos datos sobre esa entidad.

    ```graphql
    {
      actor {
        distributedTracing {
          trace(traceId: "YOUR_TRACE_ID") {
            entities {
              name
              tags {
                key
              }
              account {
                name
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>
