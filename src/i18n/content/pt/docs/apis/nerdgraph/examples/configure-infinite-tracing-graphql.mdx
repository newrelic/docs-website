---
title: 'Tutorial do NerdGraph: Configurar rastreamento infinito'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to configure some of the settings for Infinite Tracing trace observers.
freshnessValidatedDate: never
translationType: machine
---

Você pode definir muitas das configurações do [Infinite Tracing](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#tail-based) com o [aplicativo de configurações do Infinite Tracing](https://one.newrelic.com/launcher/mtb-nerdlets.edge-launcher). Você também pode executar diversas dessas tarefas de configuração usando GraphQL. Com nosso [explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql) você pode executar e ver os resultados de consultas e mutações para configuração do Infinite Tracing. Este documento explica algumas das opções disponíveis.

<Callout variant="tip">
  Se precisar de ajuda para começar a usar o GraphQL, consulte [Introdução ao New Relic NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).
</Callout>

## Atualizar o amostrador aleatório em um observador trace [#updating-the-random-sampler]

Conforme descrito em nossos [documentos sobre algoritmos baseados em cauda de amostragem,](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#tail-based) há várias maneiras pelas quais o Infinite Tracing escolhe para amostrar um trace. O amostrador aleatório é configurável, permitindo controlar a porcentagem de rastreamento mantido.

<Callout variant="tip">
  Se precisar de ajuda sobre quando é apropriado alterar o filtro aleatório, consulte [Rastreamento infinito: filtro de rastreamento aleatório](/docs/understand-dependencies/distributed-tracing/other-requirements/infinite-tracing-random-trace-filter).
</Callout>

O exemplo a seguir mostra como atualizar o valor do padrão de 1%:

1. Vá para o explorador NerdGraph GraphiQL em [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Execute a seguinte consulta para localizar o observador trace que contém a amostra aleatória a ser modificada:

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

3. Na resposta, encontre o observador trace `id`. Aqui está um exemplo onde o valor é `123456789`:

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

4. Execute uma mutação usando `id` e a porcentagem que você deseja manter. Por exemplo, para aumentar o valor para 50% para o observador trace com id `123456789` que encontramos na etapa anterior, execute o seguinte:

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

Aqui está a resposta confirmando a mudança:

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

## Atualizar as fontes de dados em um observador trace [#updating-the-data-sources]

Embora algumas entidades possam ser configuradas para enviar seus dados de rastreamento diretamente para um observador trace do Infinite Tracing, outras podem ter seus dados roteados pela New Relic para um observador trace . Atualmente, oferecemos suporte a esse recurso para entidades móveis, browsers e Lambda. No contexto do Rastreamento Infinito, chamamos essas fontes de dados de entidade.

<Callout variant="tip">
  Se precisar de ajuda sobre fontes de dados no observador trace , consulte [Configurar o observador trace ](/docs/distributed-tracing/infinite-tracing/set-trace-observer/#browser-mobile-lambda).
</Callout>

Há três maneiras de atualizar as fontes de dados em um observador trace :

* <DNT>
    **ADD:**
  </DNT>

  Se desejar adicionar novas fontes de dados às existentes em um observador trace , use `ADD` `DataSourceGroupUpdateType`. Nenhuma fonte de dados será removida com esta mutação.

* <DNT>
    **REPLACE:**
  </DNT>

  Se desejar substituir suas fontes de dados existentes em um observador trace por um novo conjunto de valores, use `REPLACE` `DataSourceGroupUpdateType`. Quaisquer valores existentes que não estejam no novo conjunto terão seu status definido como `INACTIVE`.

* <DNT>
    **REMOVE:**
  </DNT>

  Se desejar remover uma ou mais fontes de dados existentes em um observador trace , use `REMOVE` `DataSourceGroupUpdateType`. Quaisquer valores passados terão seu status definido como `INACTIVE`.

O exemplo a seguir mostra como adicionar fontes de dados existentes:

1. Vá para o explorador NerdGraph GraphiQL em [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Execute a consulta a seguir para localizar o observador trace que contém o grupo de fontes de dados que você gostaria de modificar:

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

3. Na resposta, encontre o observador trace `id`. Aqui está um exemplo com dois observadores trace . Digamos que você queira aquele em US-EAST-1 chamado "Serviços de produção", cujo valor `id` é `259`:

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

4. Execute uma mutação usando o ID, um ou mais guias de entidade e se você deseja `ADD`, `REPLACE` ou `REMOVE` eles. Por exemplo, para adicionar um novo aplicativo de browser e aplicativo mobile ao observador trace `Production services` com o ID `259`, que encontramos na etapa anterior, execute o seguinte:

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

Aqui está a resposta confirmando a mudança:

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

## Atualizar o nome em um observador trace [#updating-trace-observer-name]

Veja como você pode alterar o nome de um observador trace :

1. Vá para o explorador NerdGraph GraphiQL em [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Encontre o observador trace cujo nome você deseja atualizar:

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

3. Na resposta, encontre o observador trace `id` retornado:

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

4. Execute uma mutação que inclua o novo valor para o nome. Por exemplo, para alterar o nome para `Global Workload, US-EAST-1` do observador trace com ID `123456789`, execute o seguinte:

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

Aqui está a resposta confirmando a mudança:

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
