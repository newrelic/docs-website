---
title: 'Tutorial de NerdGraph: alerta de condición NRQL'
tags:
  - Alerts and applied intelligence
  - Alerts
  - Alerts and Nerdgraph
metaDescription: 'Examples of how to use the NerdGraph API explorer to create alert conditions, queries, and mutations.'
freshnessValidatedDate: never
translationType: machine
---

Puede administrar la condición de alerta utilizando nuestra API NerdGraph.

<Callout variant="tip">
  Consulte la [introducción a NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) para obtener ayuda para comenzar con NerdGraph y el explorador NerdGraph.
</Callout>

## Pasos para crear una condición NRQL [#steps]

Sigue estos pasos:

1. Decida qué tipo de condición desea crear (consulte [Tipos de umbral de condición NRQL](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries#threshold-types)).

2. Encuentre su `policyID` relevante realizando una de las siguientes acciones:

   * Utilice la [API de políticas de NerdGraph](/docs/alerts/alerts-nerdgraph/nerdgraph-examples/nerdgraph-api-alerts-policies).

   * Vaya a

     <DNT>
       **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Alerts & AI > Alert conditions (Policies)**
     </DNT>

     . Elija una póliza. Busque la identificación debajo del nombre de la póliza.

3. Proporcione la mutación adecuada para su tipo de condición NRQL y los valores relevantes.

<Callout variant="tip">
  El explorador NerdGraph GraphiQL es el mejor lugar para encontrar documentación actualizada sobre las especificaciones por campo de la API de condiciones NerdGraph NRQL. Por ejemplo, preguntas como "¿Qué acepta el campo `valueFunction` ?" se responden mejor con la documentación en línea de NerdGraph.
</Callout>

## Condición estática de NRQL [#static-condition]

A continuación se muestra un ejemplo de cómo crear una condición estática:

```graphql
mutation {
  alertsNrqlConditionStaticCreate(accountId: YOUR_ACCOUNT_ID, policyId: YOUR_POLICY_ID, condition: {
    name: "Low Host Count - Catastrophic"
    enabled: true
    nrql: {
      query: "SELECT uniqueCount(host) FROM Transaction WHERE appName='my-app-name'"
    }
    signal: {
      aggregationWindow: 60
      aggregationMethod: EVENT_FLOW
      aggregationDelay: 120
    }
    terms: {
      threshold: 2
      thresholdOccurrences: AT_LEAST_ONCE
      thresholdDuration: 600
      operator: BELOW
      priority: CRITICAL
    }
    valueFunction: SINGLE_VALUE
    violationTimeLimitSeconds: 86400
  }) {
    id
    name
  }
}
```

## Condición de línea base NRQL [#baseline-condition]

A continuación se muestra un ejemplo de cómo crear una condición de línea de base:

```graphql
mutation {
  alertsNrqlConditionBaselineCreate(accountId: YOUR_ACCOUNT_ID, policyId: YOUR_POLICY_ID, condition: {
    name: "Baseline Condition"
    enabled: true
    baselineDirection: UPPER_ONLY
    nrql: {
      query: "SELECT average(duration) FROM Transaction"
    }
    signal: {
      aggregationWindow: 60
      aggregationMethod: EVENT_FLOW
      aggregationDelay: 120
    }
    terms: {
      threshold: 13
      thresholdDuration: 180
      thresholdOccurrences: ALL
      operator: ABOVE
      priority: CRITICAL
    }
    violationTimeLimitSeconds: 86400
  }) {
    id
    name
    baselineDirection
  }
}
```

## Actualizar una condición [#update-condition]

Complete lo siguiente:

1. Determine el tipo de su condición existente solicitando el campo de tipo en una consulta `nrqlConditionsSearch` como esta:

   ```graphql
   {
     actor {
       account(id: YOUR_ACCOUNT_ID) {
         alerts {
           nrqlConditionsSearch {
             nrqlConditions {
               id
               type
             }
           }
         }
       }
     }
   }
   ```

   <Callout variant="tip">
     El `type` devuelto es lo que usa para su mutación de actualización. Por ejemplo, si el tipo devuelto es `STATIC`, utilice `alertsNrqlConditionStaticUpdate`. Si el tipo devuelto es `BASELINE`, utilice `alertsNrqlConditionBaselineUpdate`.
   </Callout>

2. Proporcione el `id` de su condición a la mutación del tipo de condición relevante. Tenga en cuenta que solo puede actualizar condiciones del tipo relevante.

Proporcione únicamente mutaciones de actualización para los campos que desea actualizar. Los campos que no proporcione en la actualización no se modifican.

## Actualizar mutaciones

Solo se cambian los campos que usted proporciona en la actualización. En el siguiente ejemplo, `baselineDirection` devuelve sin cambios, pero `name` está actualizado.

```graphql
mutation {
  alertsNrqlConditionBaselineUpdate(id: YOUR_CONDITION_ID, accountId: YOUR_ACCOUNT_ID, condition: {
    name: "Your updated name"
  }) {
    id
    name
    baselineDirection
  }
}
```

## Listar y filtrar condiciones NRQL [#filtering]

Para enumerar o filtrar sus condiciones NRQL, utilice la consulta `nrqlConditionsSearch` en NerdGraph.

<CollapserGroup>
  <Collapser
    id="pagination"
    title="Usar paginación del cursor"
  >
    La funcionalidad básica de lista para condiciones NRQL le permite paginar sus condiciones NRQL, así como solicitar el recuento total de condiciones por cuenta.

    La consulta `nrqlConditionsSearch` utiliza la paginación del cursor para paginar los recursos. La idea detrás de la paginación del cursor es que el cliente solicitará un cursor en un bucle programático hasta que el cursor vuelva a estar vacío.

    Una respuesta de lista inicial se verá así:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          alerts {
            nrqlConditionsSearch {
              nextCursor
              nrqlConditions {
                id
                name
                type
              }
              totalCount
            }
          }
        }
      }
    }
    ```

    Este ejemplo devuelve una respuesta JSON como esta:

    ```json
    {
      "data": {
        "actor": {
          "account": {
            "alerts": {
              "nrqlConditionsSearch": {
              "nextCursor": "WOwfJ4+TWm9QTFeKMGyg+w==:QqkI8S4+Wwnpno6z+uk8kQ==",
              "nrqlConditions": [
                {
                  "id": "4432",
                  "name": "Baseline Condition",
                  "type": "BASELINE"
                },
                {
                  "id": "443",
                  "name": "A static condition",
                  "type": "STATIC"
                },
                // more conditions here in reality
              ],
              "totalCount": 435
              }
            }
          }
        }
      }
    }
    ```

    Para paginar las condiciones en la respuesta, haga que el cliente solicite que se devuelva el cursor hasta que `nextCursor` regrese de la respuesta como `null`:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          alerts {
            nrqlConditionsSearch(cursor: "WOwfJ4+TWm9QTFeKMGyg+w==:QqkI8S4+Wwnpno6z+uk8kQ==",
            ) {
              nextCursor
              nrqlConditions {
                id
                name
                type
              }
              totalCount
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="specific-fields"
    title="Solicitar campos específicos del tipo"
  >
    Ciertos campos solo están disponibles en tipos de condiciones NRQL específicos. La razón principal por la que las mutaciones se dividen entre los diferentes tipos de condiciones es porque tienen diferencias menores entre los campos que aceptan.

    Por ejemplo, `valueFunction` solo es relevante para condiciones NRQL estáticas y `baselineDirection` solo es relevante para condiciones NRQL en línea de base.

    Pero si estos campos solo están disponibles en ciertos tipos de condiciones, ¿cómo los devolvemos en una lista de todos nuestros tipos de condiciones? La respuesta es una convención GraphQL conocida como fragmentos en línea. Los fragmentos en línea le permiten acceder a los datos sobre un tipo específico de condición NRQL:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          alerts {
            nrqlConditionsSearch {
              nrqlConditions {
                id
                name
                type
                ...on AlertsNrqlStaticCondition {
                  valueFunction
                }
                ...on AlertsNrqlBaselineCondition {
                  baselineDirection
                }
              }
            }
          }
        }
      }
    }
    ```

    En la consulta de ejemplo anterior, le pedimos a GraphQL que haga el trabajo duro por nosotros para determinar qué condiciones NRQL son del tipo correcto.

    Entonces, cuando el tipo devuelto es una condición estática, devolverá el `valueFunction` en el objeto, y cuando el tipo devuelto es una condición de línea de base, devolverá `baselineDirection` en su lugar. Aquí hay un ejemplo de respuesta:

    ```json
    {
      "data": {
        "actor": {
          "account": {
            "alerts": {
              "nrqlConditionsSearch": {
                "nrqlConditions": [
                  {
                    "baselineDirection": "UPPER_ONLY",
                    "id": "342",
                    "name": "My baseline condition",
                    "type": "BASELINE"
                  },
                  {
                    "id": "553",
                    "name": "My static condition",
                    "type": "STATIC",
                    "valueFunction": "SINGLE_VALUE"
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
    id="nrql-conditions"
    title="Filtrar condiciones NRQL"
  >
    Puede filtrar las condiciones NRQL con el argumento `searchCriteria` de la consulta `nrqlConditionsSearch` :

    A continuación se muestra un ejemplo de cómo filtrar condiciones NRQL con coincidencias por nombre. Esta consulta devuelve condiciones NRQL que coinciden con el nombre proporcionado. Tenga en cuenta que esta coincidencia no distingue entre mayúsculas y minúsculas.

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          alerts {
            nrqlConditionsSearch(searchCriteria: {
              name: "Baseline Condition"
            }) {
              nrqlConditions {
                id
                name
                type
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Consulta de condición NRQL singular [#singular-condition]

Puede utilizar la API de condición NRQL para consultar una condición singular. Ejecute la consulta `nrqlCondition` en el namespace de alerta.

De manera similar a escribir campos específicos en la consulta `nrqlConditionSearch` , también puede usar estos fragmentos en línea para solicitar campos que están restringidos a un tipo de condición NRQL.

```graphql
{
  actor {
    account(id: YOUR_ACCOUNT_ID) {
      alerts {
        nrqlCondition(id: YOUR_CONDITION_ID) {
          id
          name
          ...on AlertsNrqlStaticCondition {
            valueFunction
          }
        }
      }
    }
  }
}
```

## Actualiza la descripción [#description]

Esto le guiará por el procedimiento para crear una [descripción](/docs/alerts/new-relic-alerts/defining-conditions/alert-condition-descriptions) para una condición de alerta NRQL.

1. Obtenga todas las condiciones para una póliza:

   ```graphql
   {
     actor {
       account(id: YOUR_ACCOUNT_ID) {
         alerts {
           nrqlConditionsSearch(searchCriteria: {policyId: YOUR_POLICY_ID}) {
             nrqlConditions {
               id
               name
               description
               enabled
               nrql {
                 query
               }
               signal {
                 aggregationWindow
                 aggregationMethod
                 aggregationDelay
                 aggregationTimer
               }
               policyId
               runbookUrl
               terms {
                 operator
                 thresholdDuration
                 threshold
                 priority
                 thresholdOccurrences
               }
               type
               violationTimeLimitSeconds
             }
           }
         }
       }
     }
   }
   ```

2. Obtenga los detalles de una sola condición:

   ```graphql
   {
     actor {
       account(id: YOUR_ACCOUNT_ID) {
         alerts {
           nrqlCondition(id: "YOUR_CONDITION_ID") {
             description
             id
             enabled
             name
             nrql {
               query
             }
             signal {
               aggregationWindow
               aggregationMethod
               aggregationDelay
               aggregationTimer
             }
             policyId
             runbookUrl
             terms {
               operator
               priority
               threshold
               thresholdDuration
               thresholdOccurrences
             }
             type
             violationTimeLimitSeconds
           }
         }
       }
     }
   }
   ```

3. Crea una mutación con la descripción.

   Aquí hay una plantilla de mutación vacía:

   ```graphql
   mutation {
     alertsNrqlConditionStaticUpdate(
       accountId: YOUR_ACCOUNT_ID, 
       id: "YOUR_CONDITION_ID", 
       condition: { description: "" }
     ) {
       description
     }
   }  
   ```

   Aquí hay un ejemplo de mutación con una descripción de ejemplo incluida:

   ```graphql
   mutation {
     alertsNrqlConditionStaticUpdate(
       accountId: 123456
       id: "123456"
       condition: {
         description: "timestamp : {{timestamp}} \n accountId : {{accountId}} \n type : {{type}} \n event : {{event}} \n description : {{description}} \n policyId : {{policyId}} \n policyName: {{policyName}} \n conditionName : {{conditionName}} \n conditionId : {{conditionId}} \n product : {{product}} \n conditionType : {{conditionType}} \n RunbookUrl : {{runbookUrl}} \n nrqlQuery : {{nrqlQuery}} \n nrqlEventType : {{nrqlEventType}} \n targetID : {{targetId}} \n targetName : {{targetName}} \n commandLine : {{tag.commandLine}} \n entityGuid : {{tag.entityGuid}} \n entityName : {{tag.entityName}} \n fullHostname : {{tag.fullHostname}} \n instanceType : {{tag.instanceType}} \n processDisplayName : {{tag.processDisplayName}}"
       }
     ) {
       description
     }
   }

   ```

## Eliminar condiciones

Puede utilizar la mutación `alertsConditionDelete` para eliminar cualquier tipo de condición. Solo puede solicitar el campo `id` en una mutación de eliminación; Por ejemplo:

```graphql
mutation {
  alertsConditionDelete(accountId: YOUR_ACCOUNT_ID, id: YOUR_CONDITION_ID) {
    id
  }
}
```
