---
title: Introducción a la creación de datos métricos a partir de datos no métricos
tags:
  - Ingest and manage data
  - Convert data to metrics
metaDescription: 'An introduction to New Relic''s service to convert events, logs, and spans to metrics, plus a list of available functions.'
freshnessValidatedDate: never
translationType: machine
---

Puede generar [datos de tipo métrico](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#dimensional-metrics) a partir de otros tipos de datos en New Relic, incluidos [eventos, registros y intervalos](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#events-new-relic). métrica son agregados de sus datos y son óptimos para analizar y monitorear tendencias durante largos períodos de tiempo.

Este documento explica:

* [Razones para utilizar esta característica](#feature-description)
* [Operaciones disponibles](#operations)
* [Cómo utilizar nuestra herramienta API NerdGraph](#use-graphql-api-tool) para realizar operaciones

## ¿Por qué crear métricas a partir de otros tipos de datos? [#feature-description]

El uso de métrica permite un almacenamiento de datos más eficiente. Esto, a su vez, le permite consultar sus datos y crear gráficos más fácilmente. La diferencia entre datos métricos y otros tipos de datos en New Relic se basa en el tiempo. Para obtener más información, consulte [Comprender los tipos de datos](/docs/using-new-relic/data/understand-data/new-relic-data-types).

* <DNT>
    **Events, logs, spans:**
  </DNT>

  Este tipo de datos representan un único registro en un momento específico en el tiempo. Por ejemplo, puede tener un evento para cada solicitud al sistema. Estos datos son ideales para la resolución de problemas y el análisis en profundidad.

* <DNT>
    **Metrics:**
  </DNT>

  Estos proporcionan una vista agregada de su evento, registro o intervalos. Las métricas son mejores para mostrar tendencias en rangos de tiempo más largos. Por ejemplo, puede agregar el número total de solicitudes por servicio a una métrica y luego examinar esta información mes tras mes.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        ¿Por qué utilizar métrica?
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Flexibilidad
      </td>

      <td>
        * Las métricas son [dimensionales](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#dimensional-metrics). Puede elegir qué metadatos (como el nombre de host o el nombre de la aplicación) se les adjuntan.
        * Las medidas métricas comunes, como promedio, suma, mínimo y máximo, ya están calculadas.
      </td>
    </tr>

    <tr>
      <td>
        Agregación y retención de datos.
      </td>

      <td>
        * Los datos ya se han agregado previamente en períodos de tiempo más largos.
        * La retención de datos es de 13 meses.
      </td>
    </tr>

    <tr>
      <td>
        Capacidades de consulta
      </td>

      <td>
        * Puedes [consultar utilizando el tipo de datos `Metric` ](/docs/telemetry-data-platform/get-data/apis/query-metric-data-type).
        * Cuando creas métrica, esto no borra tu evento ni otro tipo de datos. Sin embargo, las métricas son mejores para consultas y gráficos de mayor alcance.
      </td>
    </tr>
  </tbody>
</table>

Aquí hay un video que muestra cómo generar datos métricos a partir de datos de eventos (7:47 minutos):

<Video
  id="2nF_UnKX18c"
  type="youtube"
/>

Para comenzar a convertir sus datos a métricas, [cree una regla.](/docs/events-metrics-api-create-metrics)

## Operaciones disponibles [#operations]

Para mostrar, crear y eliminar reglas para generar métricas a partir de eventos, registros o intervalos, utilice NerdGraph, nuestra API en formato GraphQL. Antes de realizar cualquier operación, recomendamos leer [la Introducción a NerdGraph](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api) y explorar sus datos con la [herramienta API GraphiQL](https://api.newrelic.com/graphiql).

Estas operaciones se dividen en dos [tipos de solicitudes](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api#terminology) básicas:

* <DNT>
    **Mutations**
  </DNT>

  , que son operaciones que realizan cambios en reglas o configuraciones existentes (por ejemplo, crear una nueva regla métrica).

* <DNT>
    **Queries**
  </DNT>

  , para recuperar datos existentes (por ejemplo, recuperar reglas métricas existentes).

Todas las operaciones se basan en roles en NerdGraph como usuario de New Relic actualmente conectado.

### Mutaciones

Las operaciones de mutación para evento a métrica, log a métrica o intervalos a métrica incluyen:

<CollapserGroup>
  <Collapser
    id="create"
    title="Crear una regla"
  >
    Ver [Crear métrica](/docs/events-metrics-api-create-metrics).
  </Collapser>

  <Collapser
    id="delete"
    title="Eliminar una regla"
  >
    <Callout variant="important">
      Esta operación modifica la configuración de producción, por lo que recomendamos revisar minuciosamente los cambios antes de ejecutar la operación.
    </Callout>

    Para eliminar una regla, necesita el ID de la regla y el [ID de la cuenta New Relic](/docs/accounts/install-new-relic/account-setup/account-id).

    <DNT>
      **Example request:**
    </DNT>

    ```
    mutation {
      eventsToMetricsDeleteRule(deletes: {ruleId: "12", accountId: 123456}) {
        successes {
          id
          name
          nrql
        }
        failures {
          errors {
            description
            reason
          }
          submitted {
            ruleId
            accountId
          }
        }
      }
    }
    ```

    En esta solicitud:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Elemento
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `mutation`
          </td>

          <td>
            Uno de los [tipos de operaciones API](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api#tutorials) básicas.
          </td>
        </tr>

        <tr>
          <td>
            `eventsToMetricsDeleteRule`
          </td>

          <td>
            El método que se llama para eliminar una regla.
          </td>
        </tr>

        <tr>
          <td>
            `deletes`
          </td>

          <td>
            Esto requiere dos parámetros:

            * `ruleId`: El ID de la regla para evento a métrica, log a métrica o intervalos a métrica.
            * `accountId`: El [ID de cuenta de New Relic](/docs/accounts/install-new-relic/account-setup/account-id).
          </td>
        </tr>

        <tr>
          <td>
            `successes` y `submitted` bloques
          </td>

          <td>
            Aquí usted define los datos devueltos por un éxito o un fracaso. Parámetro disponible para estos bloques:

            * `id` (o `ruleId` para `submitted`)
            * `name`
            * `description`
            * `nrql`
            * `enabled`
            * `accountId`
          </td>
        </tr>
      </tbody>
    </table>

    <DNT>
      **Example response for the request:**
    </DNT>

    ```
    {
      "data": {
        "eventsToMetricsDeleteRule": {
          "failures": [],
          "successes": [
            {
              "id": "12",
              "name": "Test Rule",
              "nrql": "select summary(duration) as 'server.responseTime' from Transaction where appName = 'Data Points Staging' facet name, appName, host"
            }
          ]
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="enable-disable"
    title="Activar o desactivar una regla"
  >
    <Callout variant="important">
      Esta operación modifica la configuración de producción, por lo que recomendamos revisar minuciosamente los cambios antes de ejecutar la operación.
    </Callout>

    Para habilitar o deshabilitar una regla existente para evento a métrica, log a métrica o intervalos a métrica, utilice la misma operación `eventsToMetricsUpdateRule` . La única diferencia es si `enabled` está configurado en `true` o `false`.

    <DNT>
      **Example request to enable an existing metrics rule:**
    </DNT>

    ```
    mutation {
      eventsToMetricsUpdateRule(updates: {ruleId: "12", accountId: 123456, enabled: true}) {
        successes {
          id
          name
          nrql
        }
        failures {
          errors {
            description
            reason
          }
          submitted {
            ruleId
            accountId
          }
        }
      }
    }
    ```

    En esta solicitud:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Elemento
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `mutation`
          </td>

          <td>
            Uno de los [tipos de operaciones API](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api#tutorials) básicas.
          </td>
        </tr>

        <tr>
          <td>
            `eventsToMetricsUpdateRule`
          </td>

          <td>
            El método que se llama para actualizar una regla existente y habilitarla o deshabilitarla.
          </td>
        </tr>

        <tr>
          <td>
            `updates`
          </td>

          <td>
            Esto requiere tres parámetros requeridos:

            * `ruleId`: El ID de la regla para evento a métrica, log a métrica o intervalos a métrica.
            * `accountId`: El [ID de cuenta de New Relic](/docs/accounts/install-new-relic/account-setup/account-id).
            * `enabled`: Para habilitar una regla deshabilitada, configúrelo en `true`. Para deshabilitar una regla, configúrelo en `false`.
          </td>
        </tr>

        <tr>
          <td>
            `successes` y `submitted` bloques
          </td>

          <td>
            Aquí usted define los datos devueltos por un éxito o un fracaso. Parámetro disponible para estos bloques:

            * `id` (o `ruleId` para `submitted`)
            * `name`
            * `description`
            * `nrql`
            * `enabled`
            * `accountId`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

### Consultar

Las operaciones de consulta incluyen:

<CollapserGroup>
  <Collapser
    id="list-all-rules"
    title="Enumere todas las reglas para una cuenta New Relic"
  >
    Puede enumerar todas las reglas en una cuenta New Relic o [devolver una regla específica](#list-rule-by-rule-id).

    <DNT>
      **Example listing all rules for account `123456`:**
    </DNT>

    ```
    query {
      actor {
        account(id:123456) {
          eventsToMetrics{
            allRules{
              rules{
                id
                name
                enabled
                nrql
                description
              }
            }
          }
        }
      }
    }
    ```

    En esta solicitud:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Elemento
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `query`
          </td>

          <td>
            Uno de los [tipos de operaciones API](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api#tutorials) básicas. Solía consultar pero no hacer cambios.
          </td>
        </tr>

        <tr>
          <td>
            `actor`
          </td>

          <td>
            Esto especifica el usuario actual de New Relic.
          </td>
        </tr>

        <tr>
          <td>
            `account(id: 123456)`
          </td>

          <td>
            Especifique el [ID de la cuenta New Relic](/docs/accounts/install-new-relic/account-setup/account-id) donde recuperar datos.
          </td>
        </tr>

        <tr>
          <td>
            `eventsToMetrics`
          </td>

          <td>
            Alcance los datos solo para reglas evento-a-métrica, log-to-métrica o spans-to-métrica.
          </td>
        </tr>

        <tr>
          <td>
            `allRules`
          </td>

          <td>
            Devuelve todas las reglas para esa cuenta.
          </td>
        </tr>

        <tr>
          <td>
            `rules`
          </td>

          <td>
            En el bloque `rules` , puede definir qué datos desea que se devuelvan. Los campos disponibles incluyen:

            * `id`
            * `name`
            * `description`
            * `nrql`
            * `accountId`
            * `enabled`
          </td>
        </tr>
      </tbody>
    </table>

    <DNT>
      **Example response:**
    </DNT>

    ```
    {
      "data": {
        "actor": {
          "account": {
            "eventsToMetrics": {
              "allRules": {
                "rules": [
                  {
                    "description": "Metric for total time",
                    "enabled": true,
                    "id": "1",
                    "name": "Total Time Tx",
                    "nrql": "select summary(totalTime) as 'server.totalTime' from Transaction where appName = 'Data Points Staging' facet name, appName, host"
                  },
                  {
                    "description": "Metric for duration",
                    "enabled": true,
                    "id": "2",
                    "name": "Duration Rule",
                    "nrql": "select summary(duration) as 'server.responseTime' from Transaction where appName = 'Data Points Staging' facet name, appName, host"
                  }
                ]
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="list-rule-by-rule-id"
    title="Listar regla por ID de regla"
  >
    Si conoce el ID exacto de una regla, puede consultar para obtener una regla específica. Por ejemplo, es posible que haya creado una regla y ahora desee enumerar su contenido para poder revisarla.

    <DNT>
      **Example listing rule `36` for New Relic account `123456`:**
    </DNT>

    ```
    query {
      actor {
        account(id: 123456) {
          eventsToMetrics {
            rulesById(ruleIds:  "36") {
              rules {
                id
                name
                enabled
                nrql
                description
                accountId
              }
            }
          }
        }
      }
    }
    ```

    Para obtener más detalles sobre los elementos de esta consulta, consulte [Listar todas las reglas](#list-all-rules).

    <DNT>
      **Example response:**
    </DNT>

    ```
    {
      "data": {
        "actor": {
          "account": {
            "eventsToMetrics": {
              "rulesById": {
                "rules": [
                  {
                    "accountId": 123456,
                    "description": "Metric for total time",
                    "enabled": true,
                    "id": "36",
                    "name": "Total Time Tx",
                    "nrql": "select summary(totalTime) as 'server.totalTime' from Transaction where appName = 'Data Points Staging' facet name, appName, host"
                  }
                ]
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Utilice la herramienta de exploración de API NerdGraph [#use-graphql-api-tool]

Puede utilizar el explorador de API NerdGraph, nuestra herramienta GraphiQL, para explorar la estructura de datos. También puede usarlo para construir y ejecutar [operaciones](#operations) para convertir eventos, registros y intervalos a métrica. Para utilizar esta herramienta:

1. Cree la solicitud de operación métrica con el parámetro requerido.

2. Vaya a

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com) > All capabilities > Apps > NerdGraph API explorer**
   </DNT>

   y pegue su consulta en el cuadro.

3. Para ejecutar la operación, haga clic en el botón rojo

   <DNT>
     **Execute query**
   </DNT>

   . O, para obtener el formato curl, seleccione

   <DNT>
     **Tools > Copy as CURL**
   </DNT>

   .

4. Valide la respuesta en el cuadro de respuesta.

5. Opcional: para verificar que la operación de creación de reglas se realizó correctamente, [ejecute una consulta de lista para ese ID de regla](#list-rule-by-rule-id).
