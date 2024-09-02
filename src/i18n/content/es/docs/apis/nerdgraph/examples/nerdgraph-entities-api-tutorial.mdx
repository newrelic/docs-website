---
title: 'Tutorial de NerdGraph: Ver datos de entidad'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: 'Use New Relic NerdGraph (our GraphQL API) to query your monitored entities (applications, hosts, etc.)'
freshnessValidatedDate: never
translationType: machine
---

[entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic) en New Relic se refiere a cualquier cosa que monitor que genere o contenga telemetría. entidad le ayuda a encontrar los datos que desea rastrear en New Relic, y si comprende sus relaciones con otras entidades, puede obtener aún más Insights sobre sus datos. A continuación se muestran algunos ejemplos de entidad:

* Monitor de aplicaciones por [APM](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm).
* Integración en la nube, servicios y hosts monitoreados por nuestro [monitoreo de infraestructura](/docs/infrastructure/new-relic-infrastructure/get-started/introduction-new-relic-infrastructure).

Puede trabajar con entidad directamente en nuestra UI (consulte [Más información sobre la entidad New Relic](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic)), o puede seguir los pasos aquí sobre cómo trabajar con entidad a través de nuestra API NerdGraph. Si necesita ayuda para comenzar con NerdGraph, consulte nuestra [Introducción a New Relic NerdGraph](/docs/introduction-new-relic-graphql).

<Callout variant="important">
  Para trabajar con las métricas doradas y la etiqueta de una entidad, consulte el [tutorial de API de métricas doradas](/docs/apis/nerdgraph/examples/golden-metrics-entities-nerdgraph-api-tutorial).
</Callout>

## Antes de empezar [#before-you-get-started]

Antes de trabajar con entidad, te recomendamos leer [Conoce sobre entidad](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic).

Al trabajar con entidad, algunas cosas importantes a tener en cuenta:

* Un GUID único identifica una entidad (`entity.guid` o `entityGuid`).
* Una entidad existe en New Relic durante un [período de tiempo específico](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic#expiration).
* Una entidad proporciona un punto de entrada útil para explorar datos sobre métricas y eventos específicos o para contextualizar datos relacionados con otras entidades.

## Buscar entidad [#search-entity]

New Relic busca entidades por su atributo, principalmente su nombre, pero también por tipo de entidad y otros valores. La búsqueda arroja datos básicos sobre la entidad que coincide con los criterios de búsqueda. Luego, a partir de los resultados de la consulta básica, puede consultar una entidad específica por su GUID.

Además de `domainType`, otros atributos de entidad comunes son:

* `id`
* `accountId`
* `name`
* `domainId`
* `alertSeverity`
* `reporting`

Puedes filtrar por cualquiera de los atributos anteriores. Además, puede utilizar [etiqueta](/docs/apis/nerdgraph/examples/nerdgraph-tagging-api-tutorial/#add-tags) para filtrar.

<Callout variant="caution">
  No puede filtrar por propiedades de entidad personalizadas de nivel raíz. Las propiedades personalizadas solo se recuperan como parte de los metadatos de la entidad en la respuesta de búsqueda real. Para filtrar por un campo personalizado, transfórmelo en una etiqueta de entidad.
</Callout>

Puede elaborar una consulta de dos maneras:

1. Utilice el argumento [`queryBuilder`](#search-querybuilder) para ayudarle a elaborar una consulta.
2. Utilice el argumento [`query`](#search-query) de forma libre para crear su propia búsqueda.

Para utilizar NerdGraph para consultar una o más entidades, puede buscar por atributo o GUID.

<Callout variant="tip">
  NerdGraph establece el número total de entidades que se pueden devolver en una consulta en 200. Si necesita recuperar todas las entidades para una consulta, utilice la paginación del cursor como se explica en los ejemplos.
</Callout>

Además de [los ejemplos siguientes](#graphql-examples), le recomendamos que experimente con la API utilizando el [explorador NerdGraph](https://api.newrelic.com/graphiql). Tiene documentación en línea que lo ayudará a construir su consulta y mutaciones.

### Buscar con `queryBuilder` [#search-querybuilder]

El argumento `queryBuilder` es útil para construir una consulta sencilla. Le permite agregar filtros a su consulta a partir de una lista predefinida de atributos y sus valores típicos. Para consultas más avanzadas, utilice el argumento [`query`](#search-query) en su lugar.

1. Vaya al NerdGraph [explorador GraphiQL](https://api.newrelic.com/graphiql).

2. Ejecute una consulta básica para encontrar entidades que coincidan con sus criterios de búsqueda. Por ejemplo:

   ```graphql
   {
     actor {
       entitySearch(queryBuilder: {domain: APM, type: APPLICATION}) {
         query
         results {
           entities {
             name
             entityType
             guid
           }
         }
       }
     }
   }
   ```

### Buscar con forma libre `query` [#search-query]

Esto es útil para elaborar consultas más complejas.

1. Vaya al NerdGraph [explorador GraphiQL](https://api.newrelic.com/graphiql).

2. Ejecute una consulta básica para encontrar entidades que coincidan con sus criterios de búsqueda. Por ejemplo:

   ```graphql
   query($query: String!) {
     actor {
       entitySearch(query: $query) {
         count
         results {
           entities {
             name
             entityType
             guid
           }
         }
       }
     }
   }
   ```

3. Agregue las siguientes [variables](https://graphql.org/learn/queries/#variables) a la sección <DNT>**Query variables**</DNT> en NerdGraph:

   ```json
   {"query": "name LIKE 'nerd-graph' AND domainType IN ('APM-APPLICATION')"}
   ```

## Obtener entidad por GUID [#fetch-by-guid]

Cuando conozca el GUID de la entidad que desea recuperar, puede usar el atributo `entity` :

```graphql
{
  actor {
    entity(guid: "ENTITY_GUID") {
      name
      entityType
    }
  }
}
```

Esto también se puede escribir como una consulta de búsqueda:

```graphql
{
  actor {
    entitySearch(query: "id = 'ENTITY_GUID'") {
      query
      results {
        entities {
          name
          entityType
        }
      }
    }
  }
}
```

O, para buscar varias entidades al mismo tiempo, puedes usar el atributo `entities` :

```graphql
{
  actor {
    entities(guids: ["ENTITY_GUID_1", "ENTITY_GUID_2"]) {
      name
      entityType
    }
  }
}
```

De lo contrario, utilice una consulta de búsqueda:

```graphql
{
  actor {
    entitySearch(query: "id IN ('ENTITY_GUID_1', 'ENTITY_GUID_2')") {
      query
      results {
        entities {
          name
          entityType
        }
      }
    }
  }
}
```

## Ejemplo de consulta [#graphql-examples]

Consulta son solicitudes que están destinadas únicamente a recuperar datos (y no tienen ningún otro efecto). Las consultas de NerdGraph no son estáticas, lo que significa que puedes solicitar más o menos datos según tus necesidades. Para cada consulta, puede especificar exactamente qué datos desea recuperar, siempre que sean compatibles con el esquema.

La entidad en NerdGraph se basa en [interfaces GraphQL](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api#terminology), un concepto que permite que los objetos compartan campos comunes. Las interfaces se utilizan para proporcionar datos para tipos de entidades específicos, como verá en muchos de estos ejemplos de consulta de NerdGraph.

<CollapserGroup>
  <Collapser
    id="entity-data-query"
    title="Obtener datos de la entidad usando queryBuilder"
  >
    Si no está seguro de cómo empezar a crear una consulta de búsqueda de entidad, utilice NerdGraph para ayudarle a crear una. A continuación, recupere los datos de la entidad y la cadena de consulta que se creó.

    * Solicite el campo de consulta en sus resultados para ver la cadena de consulta creada por el argumento `queryBuilder` .

    * No puede utilizar los argumentos `query` y `queryBuilder` al mismo tiempo.

    * Recomendamos encarecidamente explorar la API utilizando el [explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql) y utilizar su documentación en línea para ver las opciones de consulta disponibles.

      ```graphql
      {
        actor {
          entitySearch(queryBuilder: {domain: APM, type: APPLICATION}) {
            query
            results {
              entities {
                reporting
                ... on AlertableEntityOutline {
                  alertSeverity
                }
              }
            }
          }
        }
      }
      ```
  </Collapser>

  <Collapser
    id="infrastructure-entities"
    title="Obtener datos de la entidad de integración de infraestructura en los resultados de búsqueda"
  >
    Hay muchos tipos diferentes de entidades de integración de infraestructura y se enumeran por separado de otros tipos de entidades. Utilice el argumento de entrada `infrastructureIntegrationType` para explorarlos.

    * No puede utilizar los argumentos `query` y `queryBuilder` al mismo tiempo.

    * Utilice `infrastructureIntegrationType` en lugar del argumento de entrada `type` .

    * Recomendamos encarecidamente explorar la API utilizando el [explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql) y utilizar su documentación en línea para ver las opciones de consulta disponibles para usted.

      ```graphql
      {
        actor {
          entitySearch(queryBuilder: {infrastructureIntegrationType: F5_NODE}) {
            query
            results {
              entities {
                entityType
                domain
              }
            }
          }
        }
      }
      ```
  </Collapser>

  <Collapser
    id="alert-info"
    title="Obtenga información de alerta sobre entidad alertable en los resultados de búsqueda"
  >
    Obtenga la gravedad de las alertas de cualquier entidad que pueda ser monitoreada por [las alertas de New Relic](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-alerts). Esta consulta de NerdGraph le dirá si actualmente estamos recibiendo datos de su aplicación (usando el campo `reporting` .

    * Si la entidad es de tipo alertable, los resultados incluirán la gravedad de la alerta de la entidad.

    * Si los resultados incluyen entidades que no son alertables, no incluirán los campos `AlertableEntityOutline` .

      ```graphql
      {
        actor {
          entitySearch(query: "name like 'nerdgraph' and alertSeverity is not null") {
            results {
              entities {
                reporting
                ... on AlertableEntityOutline {
                  alertSeverity
                }
              }
            }
          }
        }
      }
      ```
  </Collapser>

  <Collapser
    id="apm-summary"
    title="Obtenga datos resumidos sobre APM entidad en los resultados de búsqueda"
  >
    Los diferentes tipos de entidades tienen datos específicos asociados. El siguiente ejemplo de consulta de NerdGraph muestra una selección de campos disponibles para <InlinePopover type="apm"/>entidad de aplicación:

    * Se pueden solicitar más datos resumidos en su consulta.

    * Si se devuelven entidades de otros tipos en los resultados de su búsqueda, no incluirán estos campos.

      ```graphql
      {
        actor {
          entitySearch(query: "name like 'nerdgraph' and domainType = 'APM-APPLICATION'") {
            results {
              entities {
                name
                ... on ApmApplicationEntityOutline {
                  apmSummary {
                    errorRate
                    apdexScore
                    webResponseTimeAverage
                    responseTimeAverage
                  }
                }
              }
            }
          }
        }
      }
      ```
  </Collapser>

  <Collapser
    id="search-entity"
    title="Obtenga datos específicos para cada tipo de entidad en los resultados de búsqueda"
  >
    Los diferentes tipos de entidades tienen datos específicos asociados. Este ejemplo de consulta de NerdGraph solicita el nombre de todas las entidades independientemente del tipo de entidad que sean, así como la tasa de errores para APM, <InlinePopover type="browser"/>y <InlinePopover type="mobile"/>entidad.

    * Si se devuelven entidades de otros tipos en los resultados de su búsqueda, no incluirán un campo de tasa de errores.

      ```graphql
      {
        actor {
          entitySearch(query: "name like 'nerdgraph'") {
            results {
              entities {
                name
                ... on ApmApplicationEntityOutline {
                  apmSummary {
                    errorRate
                  }
                }
                ... on BrowserApplicationEntityOutline {
                  browserSummary {
                    jsErrorRate
                  }
                }
                ... on MobileApplicationEntityOutline {
                  mobileSummary {
                    httpErrorRate
                  }
                }
              }
            }
          }
        }
      }
      ```
  </Collapser>

  <Collapser
    id="tags-entity"
    title="Obtenga todas las etiquetas para cada entidad en los resultados de búsqueda"
  >
    Este ejemplo de consulta de NerdGraph busca etiquetas para cada entidad devuelta en los resultados de la búsqueda. Para obtener más información, consulte el [tutorial de la etiqueta NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/graphql-tagging-api-tutorial).

    ```graphql
    {
      actor {
        entitySearch(query: "name like 'nerdgraph'") {
          results {
            entities {
              name
              tags {
                key
                values
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="tags-filter"
    title="Utilice etiqueta para filtrar resultados de entidades"
  >
    Este ejemplo de consulta de NerdGraph filtra entidades que pertenecen al dominio `INFRA` y pertenecen a awsRegion `us-east-1` y devuelve su nombre en los resultados de búsqueda.

    ```graphql
    {
      actor {
        entitySearch(query: "domain = 'INFRA' and tags.aws.awsRegion = 'us-east-1'") {
          results {
            entities {
              name
            }
          }
        }
      }
    }
    ```

    Además, se puede filtrar según si una etiqueta determinada está presente. La siguiente consulta filtra la entidad del tipo de dominio `BROWSER-APPLICATION` y tiene definida la etiqueta `clusterAgentId` .

    ```graphql
    {
      actor {
        entitySearch(query: "domainType = 'BROWSER-APPLICATION' and tags.clusterAgentId is not null") {
          results {
            entities {
              name
            }
          }
        }
      }
    }
    ```

    Para obtener más información, consulte el [tutorial de la etiqueta NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/graphql-tagging-api-tutorial).
  </Collapser>

  <Collapser
    id="tags-filter"
    title="Agregar resultados por un atributo o una etiqueta"
  >
    Este ejemplo de consulta de NerdGraph filtra la entidad del dominio domainType `APM-APPLICATION` que pertenece a awsRegion `us-east-1` y devuelve su nombre en los resultados de búsqueda. Luego agrega los resultados para obtener el número total de entidades agrupadas por identificación de cuenta de New Relic.

    ```graphql
    {
      actor {
        entitySearch(query: "domainType = 'APM-APPLICATION'") {
          facetedCounts(facets: {facetCriterion: {facet: ACCOUNT_ID}}) {
            counts {
              count
              facet
            }
          }
        }
      }
    }
    ```

    Además, la agregación también se puede realizar mediante etiqueta; la siguiente consulta filtra la entidad del dominio domainType `APM-APPLICATION` que pertenece a awsRegion `us-east-1` y luego agrega los resultados para obtener el número total de entidades agrupadas por idioma del agente.

    ```graphql
    {
      actor {
        entitySearch(query: "domainType = 'APM-APPLICATION' and tags.aws.awsRegion = 'us-east-1'") {
          facetedCounts(facets: {facetCriterion: {tag: "language"}}) {
            counts {
              count
              facet
            }
          }
        }
      }
    }
    ```

    Para obtener más información, consulte el [tutorial de la etiqueta NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/graphql-tagging-api-tutorial).
  </Collapser>

  <Collapser
    id="get-nextcursor"
    title="Obtenga el siguiente cursor para resultados de búsqueda paginados"
  >
    El explorador NerdGraph GraphiQL pagina los resultados de una búsqueda de entidades.

    * Si sus criterios de búsqueda arrojan más del límite API de 200 entidades en una sola respuesta y desea ver el resto de los resultados, puede solicitar `nextCursor` en su solicitud inicial y usar su valor en otra consulta para recuperar el siguiente "página" de resultados.

    * Si no hay más resultados, `nextCursor` será nulo.

      ```graphql
      {
        actor {
          entitySearch(query: "name like 'nerd-graph'") {
            results {
              nextCursor
              entities {
                name
              }
            }
          }
        }
      }
      ```

      Utilice el valor de `nextCursor` en su próxima búsqueda:

      ```graphql
      {
        actor {
          entitySearch(query: "name like 'nerd-graph'") {
            results(cursor: "next_cursor_value") {
              nextCursor
              entities {
                name
              }
            }
          }
        }
      }
      ```
  </Collapser>

  <Collapser
    id="filter-alertable"
    title="Obtener entidad alertable"
  >
    El explorador NerdGraph GraphiQL permite filtrar entidades con alertable es verdadero|falso para mostrar cuando una entidad tiene propiedad alertable. Ver [definiciones de entidad](https://github.com/newrelic/entity-definitions)

    * Puedes filtrar por cualquiera de los atributos anteriores. Además, también puedes utilizar la etiqueta para filtrar.

    * Alertable es una configuración de tipo entidad, por eso no está presente en los resultados.

      ```graphql
      {
        actor {
          entitySearch(query: "alertable is TRUE") {
            results {
              entities {
                name
              }
            }
          }
        }
      }
      ```

      También puedes combinar con otros filtros en la consulta:

      ```graphql
      {
        actor {
          entitySearch(query: "domain='APM' and alertable is TRUE") {
            results {
              entities {
                name
              }
            }
          }
        }
      }
      ```
  </Collapser>

  <Collapser
    id="filter-lastReportingchangeAt"
    title="Obtener entidad que dejó de informar hace más de un día"
  >
    El explorador NerdGraph GraphiQL permite filtrar la entidad con el informe verdadero|falso y el campo de fecha lastReportingChangeAt.

    * Puedes recuperar entidades que dejaron de informar (algo les pasó) en las últimas horas.

      ```graphql
      {
        actor {
          entitySearch(query: "reporting is false and lastReportingChangeAt > 1651708800000") {
            results {
              entities {
                name
              }
            }
          }
        }
      }
      ```
  </Collapser>
</CollapserGroup>

## Crear o eliminar relaciones de entidad [#manual-relationships]

Una entidad puede tener una relación con otra entidad. [New Relic crea automáticamente](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#relationship-created) algunas relaciones, pero también puede utilizar mutaciones para crear o eliminar relaciones personalizadas. Tenemos algunas explicaciones a continuación sobre cómo hacer esto, pero si necesita ayuda para comprender los distintos tipos de relaciones en New Relic, eche un vistazo a [las relaciones entre entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#related-entities).

Antes de crear manualmente relaciones adicionales o eliminarlas, tenga en cuenta lo siguiente:

* Dos entidades pueden tener múltiples relaciones, una para cada tipo de relación.
* Dos entidades pueden mantener una relación SI pertenecen a la misma cuenta de confianza.
* Para cada entidad, puede definir manualmente hasta 2000 relaciones. Cuando se alcance el límite, la API devolverá un error `LIMIT_EXCEEDED` .
* Cada mutación puede fallar si no tienes acceso a una de las dos entidades (fuente/objetivo).

### Listar relaciones de una entidad [#list-relationships]

Puede utilizar el campo `relatedEntities` para ver cómo interactúan los pares de entidades y cómo se relacionan. Esto puede ayudarle a solucionar problemas de servicios ascendentes y descendentes y comprender cómo los problemas menores pueden tener repercusiones mayores, de forma similar a cómo se pueden utilizar [los mapas de servicios](/docs/service-maps-dependencies-new-relic-one) .

El siguiente ejemplo muestra cómo consultar una entidad por su GUID específico:

```graphql
query {
  actor {
    entity(guid: "ENTITY_GUID") {
      name
      relatedEntities {
        results {
          source {
            entity {
              guid
              name
            }
          }
          target {
            entity {
              guid
              name
            }
          }
          type
        }
      }
    }
  }
}
```

### Crear o reemplazar relaciones [#create-or-replace]

Cree o reemplace relaciones de entidad usando la mutación `entityRelationshipUserDefinedCreateOrReplace`. Como sugiere su nombre, permite crear una relación entre dos entidades de un tipo determinado. Si la relación ya existe entre las dos entidades, se agregará nuevamente con los valores dados actualizados (la hora de creación y la identificación de usuario del creador):

```graphql
mutation {
  entityRelationshipUserDefinedCreateOrReplace(
    sourceEntityGuid: "SOURCE_ENTITY_GUID",
    targetEntityGuid: "TARGET_ENTITY_GUID",
    type: BUILT_FROM
  ) {
    errors {
      message
      type
    }
  }
}
```

### Eliminar relaciones [#delete-relationships]

Elimine las relaciones de entidad usando la mutación `entityRelationshipUserDefinedDelete`. La fuente y el objetivo son obligatorios, pero el tipo no. Si ejecuta la mutación sin tipo, se eliminan todas las relaciones entre las dos entidades.

```graphql
mutation {
  entityRelationshipUserDefinedDelete(
    sourceEntityGuid: "SOURCE_ENTITY_GUID",
    targetEntityGuid: "TARGET_ENTITY_GUID",
    type: BUILT_FROM
  ) {
    errors {
      message
      type
    }
  }
}
```

## Eliminar entidad [#delete-entities]

Puede eliminar manualmente cualquier entidad en su cuenta utilizando la API NerdGraph en el [explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql).

Para eliminar entidades `EXT-SERVICE` y `REF-REPOSITORY` , ejecute esta mutación con el GUID de la entidad:

```graphql
mutation {
  entityDelete(guids: ["ENTITY_GUID_1", "ENTITY_GUID_2"]) {
    deletedEntities
    failures {
      guid
      message
    }
  }
}
```

<Callout variant="important">
  Después de ejecutar la mutación `entityDelete`, es posible que vea una entidad eliminada en su UI si un agente de New Relic la reindexa nuevamente.
</Callout>

Para eliminar entidades `APM`, `BROWSER` y `MOBILE` , ejecute esta mutación con el GUID de la entidad:

```graphql
mutation {
  agentApplicationDelete(guid: "ENTITY_GUID") {
    success
  }
}
```

<Callout variant="important">
  * La mutación `agentApplicationDelete` requiere que el agente New Relic no tenga datos de informes durante 12 horas antes de la eliminación.
  * Actualmente, solo puedes eliminar los siguientes [tipos de entidades](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic) utilizando la API de Nerdgraph: `APM-APPLICATION`, `EXT-SERVICE` y `REF-REPOSITORY`.
  * Es posible que vea una entidad eliminada en su UI si un agente de New Relic la reindexa nuevamente.
</Callout>
