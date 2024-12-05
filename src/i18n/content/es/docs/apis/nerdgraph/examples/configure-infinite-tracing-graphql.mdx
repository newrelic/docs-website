---
title: 'Tutorial de NerdGraph: configurar el seguimiento infinito'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to configure some of the settings for Infinite Tracing trace observers.
freshnessValidatedDate: never
translationType: machine
---

Puede configurar muchas de las configuraciones de [Infinite Tracing](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#tail-based) con la [aplicación de configuración de Infinite Tracing](https://one.newrelic.com/launcher/mtb-nerdlets.edge-launcher). También puede realizar una variedad de estas tareas de configuración utilizando GraphQL. Con nuestro [explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql) puedes ejecutar y ver los resultados de consultas y mutaciones para la configuración de Infinite Tracing. Este documento explica algunas de las opciones que están disponibles.

<Callout variant="tip">
  Si necesita ayuda para comenzar con GraphQL, consulte [Introducción a New Relic NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).
</Callout>

## Actualizar el muestreador aleatorio en un observador de traza. [#updating-the-random-sampler]

Como se describe en nuestros [documentos sobre los algoritmos de muestreo al final,](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#tail-based) hay varias formas en que Infinite Tracing elige tomar muestras de una traza. El muestreador aleatorio es configurable, permitiéndole controlar el porcentaje de traza guardada.

<Callout variant="tip">
  Si necesitas ayuda sobre cuándo es apropiado cambiar el filtro aleatorio, consulta [Infinite Tracing: Filtro de traza aleatorio](/docs/understand-dependencies/distributed-tracing/other-requirements/infinite-tracing-random-trace-filter).
</Callout>

El siguiente ejemplo le muestra cómo actualizar el valor predeterminado del 1%:

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Ejecute la siguiente consulta para encontrar el observador de traza que contiene el muestreador aleatorio a modificar:

   ```graphql
   {
     actor {
       account(id: YOUR_ACCOUNT_ID) {
         edge {
           tracing {
             traceObservers {
               id
               name
               providerRegion
               status
               traceFilters {
                 randomTraceFilter {
                   percentKept
                 }
               }
               endpoints {
                 agent {
                   host
                 }
               }
             }
           }
         }
       }
     }
   }
   ```

3. En la respuesta, busque el observador de traza `id`. Aquí hay un ejemplo donde el valor es `123456789`:

   ```json
   {
     "data": {
       "actor": {
         "account": {
           "edge": {
             "tracing": {
               "traceObservers": [
                 {
                   "endpoints": [
                     {
                       "agent": {
                         "host": "YOUR_UUID_GOES_HERE.aws-us-east-1.tracing.edge.nr-data.net"
                       }
                     }
                   ],
                   "id": 123456789,
                   "name": "Production Workload, US-EAST-1",
                   "providerRegion": "AWS_US_EAST_1",
                   "status": "CREATED",
                   "traceFilters": {
                     "randomTraceFilter": {
                       "percentKept": 1
                     }
                   }
                 }
               ]
             }
           }
         }
       }
     }
   }
   ```

4. Ejecute una mutación usando el `id` y el porcentaje que desea conservar. Por ejemplo, para aumentar el valor al 50% para el observador de traza con id `123456789` que encontramos en el paso anterior, ejecute lo siguiente:

   ```graphql
   mutation {
     edgeUpdateTraceObservers(
       accountId: YOUR_ACCOUNT_ID, 
       traceObserverConfigs: {
         id: 123456789, 
         randomTraceFilterConfig: { percentKept: 50 }}
     ) {
       responses {
         errors {
           message
           type
         }
         traceObserver {
           traceFilters {
             randomTraceFilter {
               percentKept
             }
           }
           id
           endpoints {
             agent {
               host
             }
           }
           name
           status
         }
       }
     }
   }
   ```

Aquí está la respuesta que confirma el cambio:

```json
{
  "data": {
    "edgeUpdateTraceObservers": {
      "responses": [
        {
          "errors": null,
          "traceObserver": {
            "endpoints": [
              {
                "agent": {
                  "host": "YOUR_UUID_GOES_HERE.aws-us-east-1.tracing.edge.nr-data.net"
                }
              }
            ],
            "id": 123456789,
            "name": "Production Workload, US-EAST-1",
            "status": "CREATED",
            "traceFilters": {
              "randomTraceFilter": {
                "percentKept": 50
              }
            }
          }
        }
      ]
    }
  }
}
```

## Actualizar las fuentes de datos en un observador de traza [#updating-the-data-sources]

Si bien algunas entidades se pueden configurar para enviar sus datos de rastreo directamente a un observador de traza Infinite Tracing, New Relic puede enrutar sus datos a otras a un observador de traza. Actualmente, admitimos esta característica para dispositivos móviles, browser y entidades Lambda. En el contexto de Infinite Tracing, a estas entidades las llamamos fuentes de datos.

<Callout variant="tip">
  Si necesita ayuda sobre las fuentes de datos en el observador de traza, consulte [Configurar el observador de traza](/docs/distributed-tracing/infinite-tracing/set-trace-observer/#browser-mobile-lambda).
</Callout>

Hay tres formas de actualizar las fuentes de datos en un observador de traza:

* <DNT>
    **ADD:**
  </DNT>

  Si desea agregar nuevas fuentes de datos a las existentes en un observador de traza, utilice `ADD` `DataSourceGroupUpdateType`. No se eliminarán fuentes de datos con esta mutación.

* <DNT>
    **REPLACE:**
  </DNT>

  Si desea reemplazar sus fuentes de datos existentes en un observador de traza con un nuevo conjunto de valores, use `REPLACE` `DataSourceGroupUpdateType`. Cualquier valor existente que no esté en el nuevo conjunto tendrá su estado establecido en `INACTIVE`.

* <DNT>
    **REMOVE:**
  </DNT>

  Si desea eliminar una o más de sus fuentes de datos existentes en un observador de traza, utilice `REMOVE` `DataSourceGroupUpdateType`. Cualquier valor pasado tendrá su estado establecido en `INACTIVE`.

El siguiente ejemplo le muestra cómo agregar a las fuentes de datos existentes:

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Ejecute la siguiente consulta para encontrar el observador de traza que contiene el grupo de fuentes de datos que desea modificar:

   ```graphql
   {
     actor {
       account(id: YOUR_ACCOUNT_ID) {
         edge {
           tracing {
             traceObservers {
               id
               name
               dataSourceGroup {
                 dataSources {
                   entity {
                     guid
                     name
                     entityType
                   }
                   status
                 }
               }
               endpoints {
                 agent {
                   host
                 }
               }
             }
           }
         }
       }
     }
   }
   ```

3. En la respuesta, busque el observador de traza `id`. Aquí hay un ejemplo con dos observadores de traza. Supongamos que desea el que está en US-EAST-1 llamado "Servicios de producción", cuyo valor `id` es `259`:

   ```json
   {
     "data": {
       "actor": {
         "account": {
           "edge": {
             "tracing": {
               "traceObservers": [
                 {
                   "dataSourceGroup": {
                     "dataSources": [
                       {
                         "entity": {
                           "entityType": "BROWSER_APPLICATION_ENTITY",
                           "guid": "MXxCUk9XU0VSfEFQUExJQ0FUSU9OfDE",
                           "name": "My 1st Browser App"
                         },
                         "status": "ACTIVE"
                       },
                       {
                         "entity": {
                           "entityType": "MOBILE_APPLICATION_ENTITY",
                           "guid": "MXxNT0JJTEV8QVBQTElDQVRJT058Mg",
                           "name": "My 1st iOS App"
                         },
                         "status": "ACTIVE"
                       },
                       {
                         "entity": {
                           "entityType": "INFRASTRUCTURE_AWS_LAMBDA_FUNCTION_ENTITY",
                           "guid": "MXxJTkZSQXxOQXwz",
                           "name": "My 1st Lambda Function"
                         },
                         "status": "ACTIVE"
                       }
                     ]
                   },
                   "endpoints": [
                     {
                       "agent": {
                         "host": "YOUR_UUID_GOES_HERE.aws-us-east-1.tracing.edge.nr-data.net"
                       }
                     }
                   ],
                   "id": 259,
                   "name": "Production services"
                 },
                 {
                   "dataSourceGroup": {
                     "dataSources": [
                       {
                         "entity": {
                           "entityType": "BROWSER_APPLICATION_ENTITY",
                           "guid": "MXxCUk9XU0VSfEFQUExJQ0FUSU9OfDEw",
                           "name": "My Staging Browser App"
                         },
                         "status": "ACTIVE"
                       },
                       {
                         "entity": {
                           "entityType": "MOBILE_APPLICATION_ENTITY",
                           "guid": "MXxNT0JJTEV8QVBQTElDQVRJT058MTE",
                           "name": "My Staging Android App"
                         },
                         "status": "ACTIVE"
                       },
                       {
                         "entity": {
                           "entityType": "INFRASTRUCTURE_AWS_LAMBDA_FUNCTION_ENTITY",
                           "guid": "MXxJTkZSQXxOQXwxMg",
                           "name": "My Staging Lambda Function"
                         },
                         "status": "ACTIVE"
                       }
                     ]
                   },
                   "endpoints": [
                     {
                       "agent": {
                         "host": "YOUR_UUID_GOES_HERE.aws-us-west-2.tracing.edge.nr-data.net"
                       }
                     }
                   ],
                   "id": 632,
                   "name": "Staging Environment"
                 }
               ]
             }
           }
         }
       }
     }
   }
   ```

4. Ejecute una mutación utilizando el ID, uno o más guids de entidad y si desea `ADD`, `REPLACE` o `REMOVE` . Por ejemplo, para agregar una nueva aplicación browser y aplicación móvil al observador de traza `Production services` con ID `259`, que encontramos en el paso anterior, ejecute lo siguiente:

   ```graphql
   mutation {
     edgeUpdateTraceObservers(
       traceObserverConfigs: {
         id: 259, 
         dataSourceGroupConfig: {
           updateType: ADD, 
           guids: ["MXxCUk9XU0VSfEFQUExJQ0FUSU9OfDQ5", "MXxNT0JJTEV8QVBQTElDQVRJT058MTY"]
         }
       }, 
       accountId: 1
     ) {
       responses {
         errors {
           message
           type
         }
         traceObserver {
           dataSourceGroup {
             dataSources {
               entity {
                 guid
                 name
               }
               status
             }
           }
         }
       }
     }
   }

   ```

Aquí está la respuesta que confirma el cambio:

```json
{
  "data": {
    "edgeUpdateTraceObservers": {
      "responses": [
        {
          "errors": null,
          "traceObserver": {
            "dataSourceGroup": {
              "dataSources": [
                {
                  "entity": {
                    "guid": "MXxCUk9XU0VSfEFQUExJQ0FUSU9OfDE",
                    "name": "My 1st Browser App"
                  },
                  "status": "ACTIVE"
                },
                {
                  "entity": {
                    "guid": "MXxNT0JJTEV8QVBQTElDQVRJT058Mg",
                    "name": "My 1st iOS App"
                  },
                  "status": "ACTIVE"
                },
                {
                  "entity": {
                    "guid": "MXxJTkZSQXxOQXwz",
                    "name": "My 1st Lambda Function"
                  },
                  "status": "ACTIVE"
                },
                {
                  "entity": {
                    "guid": "MXxCUk9XU0VSfEFQUExJQ0FUSU9OfDQ5",
                    "name": "My 2nd Browser App"
                  },
                  "status": "ACTIVE"
                },
                {
                  "entity": {
                    "guid": "MXxNT0JJTEV8QVBQTElDQVRJT058MTY",
                    "name": "My 2nd Mobile App"
                  },
                  "status": "ACTIVE"
                }
              ]
            }
          }
        }
      ]
    }
  }
}
```

## Actualizar el nombre en un observador de traza. [#updating-trace-observer-name]

Así es como puedes cambiar el nombre de un observador de traza:

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Encuentra el observador de traza cuyo nombre deseas actualizar:

   ```graphql
   {
     actor {
       account(id: YOUR_ACCOUNT_ID) {
         edge {
           tracing {
             traceObservers {
               id
               name
               providerRegion
               status
               endpoints {
                 agent {
                   host
                 }
               }
             }
           }
         }
       }
     }
   }
   ```

3. En la respuesta, busque el observador de traza `id` que se devuelve:

   ```json
   {
     "data": {
       "actor": {
         "account": {
           "edge": {
             "tracing": {
               "traceObservers": [
                 {
                   "endpoints": [
                     {
                       "agent": {
                         "host": "YOUR_UUID_GOES_HERE.aws-us-east-1.tracing.edge.nr-data.net"
                       }
                     }
                   ],
                   "id": 123456789,
                   "name": "Production Workload, US-EAST-1",
                   "providerRegion": "AWS_US_EAST_1",
                   "status": "CREATED"
                 }
               ]
             }
           }
         }
       }
     }
   }
   ```

4. Ejecute una mutación que incluya el nuevo valor del nombre. Por ejemplo, para cambiar el nombre a `Global Workload, US-EAST-1` para el observador de traza con id `123456789`, ejecute lo siguiente:

   ```graphql
   mutation {
     edgeUpdateTraceObservers(
       accountId: YOUR_ACCOUNT_ID, 
       traceObserverConfigs: {
         id: 123456789, 
         name: "Global Workload, US-EAST-1"
       }
     ) {
       responses {
         errors {
           message
           type
         }
         traceObserver {
           id
           endpoints {
             agent {
               host
             }
           }
           name
           status
         }
       }
     }
   }
   ```

Aquí está la respuesta que confirma el cambio:

```json
{
  "data": {
    "edgeUpdateTraceObservers": {
      "responses": [
        {
          "errors": null,
          "traceObserver": {
            "endpoints": [
              {
                "agent": {
                  "host": "YOUR_UUID_GOES_HERE.aws-us-east-1.tracing.edge.nr-data.net"
                }
              }
            ],
            "id": 123456789,
            "name": "Global Workload, US-EAST-1",
            "status": "CREATED"
          }
        }
      ]
    }
  }
}
```
