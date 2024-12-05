---
title: 'Tutorial do NerdGraph: visualizar dados da entidade'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: 'Use New Relic NerdGraph (our GraphQL API) to query your monitored entities (applications, hosts, etc.)'
freshnessValidatedDate: never
translationType: machine
---

[entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic) da New Relic referem-se a qualquer coisa que monitor que gere ou contenha telemetria. entidade ajuda você a encontrar os dados que deseja rastrear no New Relic e, se entender seus relacionamentos com outras entidades, poderá obter ainda mais insights sobre seus dados. Aqui estão alguns exemplos de entidade:

* Aplicativo monitor da [APM](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm).
* Integração na nuvem, serviços e hosts monitorados pelo nosso [monitoramento de infraestrutura](/docs/infrastructure/new-relic-infrastructure/get-started/introduction-new-relic-infrastructure).

Você pode trabalhar com entidade diretamente em nossa interface (consulte [Saiba mais sobre entidade New Relic](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic)) ou pode seguir as etapas aqui sobre como trabalhar com entidade por meio de nossa API NerdGraph. Se precisar de ajuda para começar a usar o NerdGraph, consulte nossa [Introdução ao New Relic NerdGraph](/docs/introduction-new-relic-graphql).

<Callout variant="important">
  Para trabalhar com as métricas clássicas e tags de uma entidade, consulte o [tutorial da API de métricas clássicas](/docs/apis/nerdgraph/examples/golden-metrics-entities-nerdgraph-api-tutorial).
</Callout>

## Antes de começar [#before-you-get-started]

Antes de trabalhar com entidade, recomendamos a leitura [Saiba mais sobre entidade](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic).

Ao trabalhar com entidade, algumas coisas importantes a ter em mente:

* Um GUID exclusivo identifica uma entidade (`entity.guid` ou `entityGuid`).
* Uma entidade existe na New Relic por um [período de tempo específico](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic#expiration).
* Uma entidade fornece um ponto de entrada útil para explorar dados sobre métricas e eventos específicos ou para contextualizar dados relacionados com outras entidades.

## Pesquisar entidade [#search-entity]

A New Relic procura entidades pelo seu atributo, principalmente pelo nome, mas também por tipo de entidade e outros valores. A pesquisa retorna dados básicos sobre a entidade que corresponde aos critérios de pesquisa. Então, a partir dos resultados básicos da consulta, você pode consultar uma entidade específica pelo seu GUID.

Além de `domainType`, outros atributos de entidade comuns são:

* `id`
* `accountId`
* `name`
* `domainId`
* `alertSeverity`
* `reporting`

Você pode filtrar por qualquer um dos atributos acima. Além disso, você pode usar [tags](/docs/apis/nerdgraph/examples/nerdgraph-tagging-api-tutorial/#add-tags) para filtragem.

<Callout variant="caution">
  Não é possível filtrar por propriedades de entidade personalizadas no nível raiz. As propriedades personalizadas são recuperadas apenas como parte dos metadados da entidade na resposta de pesquisa real. Para filtrar por um campo personalizado, transforme-o em uma tag de entidade.
</Callout>

Você pode criar uma consulta de duas maneiras:

1. Use o argumento [`queryBuilder`](#search-querybuilder) para ajudá-lo a criar uma consulta.
2. Use o argumento [`query`](#search-query) de formato livre para criar sua própria pesquisa.

Para utilizar o NerdGraph para consultar uma ou mais entidades, você pode pesquisar por atributo ou GUID.

<Callout variant="tip">
  O NerdGraph define como 200 o número total de entidades que podem ser retornadas em uma consulta. Se precisar recuperar todas as entidades de uma consulta, utilize a paginação do cursor conforme explicado nos exemplos.
</Callout>

Além [dos exemplos abaixo](#graphql-examples), recomendamos que você experimente a API usando o [NerdGraph Explorer](https://api.newrelic.com/graphiql). Possui documentação inline que o ajudará a construir suas consultas e mutações.

### Pesquisar com `queryBuilder` [#search-querybuilder]

O argumento `queryBuilder` é útil para construir consultas simples. Permite adicionar filtros à sua consulta a partir de uma lista predefinida de atributos e seus valores típicos. Para consultas mais avançadas, use o argumento [`query`](#search-query) .

1. Vá para o [explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql).

2. Execute uma consulta básica para encontrar a entidade que corresponde aos seus critérios de pesquisa. Por exemplo:

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

### Pesquise com formato livre `query` [#search-query]

Isso é útil para elaborar consultas mais complexas.

1. Vá para o [explorador NerdGraph GraphiQL](https://api.newrelic.com/graphiql).

2. Execute uma consulta básica para encontrar a entidade que corresponde aos seus critérios de pesquisa. Por exemplo:

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

3. Adicione as seguintes [variáveis](https://graphql.org/learn/queries/#variables) à seção <DNT>**Query variables**</DNT> no NerdGraph:

   ```json
   {"query": "name LIKE 'nerd-graph' AND domainType IN ('APM-APPLICATION')"}
   ```

## Buscar entidade por GUID [#fetch-by-guid]

Quando você souber o GUID da entidade que deseja buscar, basta usar o atributo `entity` :

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

Isso também pode ser escrito como uma consulta de pesquisa:

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

Ou, para buscar diversas entidades ao mesmo tempo, você pode usar o atributo `entities` :

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

Caso contrário, use uma consulta de pesquisa:

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

## Exemplo de consulta [#graphql-examples]

Consulta são solicitações que visam apenas buscar dados (e não têm nenhum outro efeito). As consultas do NerdGraph não são estáticas, o que significa que você pode solicitar mais ou menos dados dependendo da sua necessidade. Para cada consulta, você pode especificar exatamente quais dados deseja recuperar, desde que sejam suportados pelo esquema.

Entidade no NerdGraph contam com [interfaces GraphQL](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api#terminology), um conceito que permite que objetos compartilhem campos comuns. As interfaces são usadas para fornecer dados para tipos de entidade específicos, como você verá em muitos desses exemplos de consulta do NerdGraph.

<CollapserGroup>
  <Collapser
    id="entity-data-query"
    title="Obtenha dados da entidade usando queryBuilder"
  >
    Se você não tiver certeza de como começar a criar uma consulta de pesquisa de entidade, use o NerdGraph para ajudá-lo a criar uma. Em seguida, recupere os dados da entidade e a string de consulta que foi criada.

    * Solicite o campo de consulta nos seus resultados para ver a string de consulta criada pelo argumento `queryBuilder` .

    * Você não pode usar os argumentos `query` e `queryBuilder` ao mesmo tempo.

    * É altamente recomendável explorar a API usando o [NerdGraph GraphiQL explorer](https://api.newrelic.com/graphiql) e usar sua documentação embutida para ver as opções de consulta disponíveis para você.

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
    title="Obtenha dados para entidade de integração de infraestrutura nos resultados da pesquisa"
  >
    Existem muitos tipos diferentes de entidade de integração de infraestrutura e estão listados separadamente de outros tipos de entidade. Use o argumento de entrada `infrastructureIntegrationType` para explorá-los.

    * Você não pode usar os argumentos `query` e `queryBuilder` ao mesmo tempo.

    * Use `infrastructureIntegrationType` no lugar do argumento de entrada `type` .

    * É altamente recomendável explorar a API usando o [NerdGraph GraphiQL Explorer](https://api.newrelic.com/graphiql) e sua documentação embutida para ver as opções de consulta disponíveis para você.

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
    title="Obtenha informações de alerta sobre entidades sujeitas a alerta nos resultados da pesquisa"
  >
    Obtenha a gravidade do alerta de qualquer entidade que possa ser monitorada pelos [alertas da New Relic](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-alerts). Esta consulta do NerdGraph informará se estamos recebendo dados do seu aplicativo no momento (usando o campo `reporting` ).

    * Se a entidade for do tipo alertável, os resultados incluirão a gravidade do alerta da entidade.

    * Se os resultados incluírem entidades que não são alertáveis, não incluirão os campos `AlertableEntityOutline` .

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
    title="Obtenha dados resumidos sobre a entidade APM nos resultados da pesquisa"
  >
    Diferentes tipos de entidade possuem dados específicos associados a eles. O exemplo de consulta do NerdGraph a seguir mostra uma seleção de campos disponíveis para <InlinePopover type="apm"/>entidade da aplicação:

    * Mais dados resumidos podem ser solicitados em sua consulta.

    * Se entidades de outros tipos forem retornadas nos resultados da sua pesquisa, elas não incluirão esses campos.

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
    title="Obtenha dados específicos para cada tipo de entidade nos resultados da pesquisa"
  >
    Diferentes tipos de entidade possuem dados específicos associados a eles. Este exemplo de consulta do NerdGraph solicita o nome de todas as entidades, independentemente do tipo de entidade, bem como as taxas de erros para APM, <InlinePopover type="browser"/>e <InlinePopover type="mobile"/>entidade.

    * Se entidades de outros tipos forem retornadas em seus resultados de pesquisa, elas não incluirão um campo de taxa de erros.

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
    title="Obtenha todas as tags de cada entidade nos resultados da pesquisa"
  >
    Este exemplo de consulta do NerdGraph busca tags para cada entidade retornada nos resultados da pesquisa. Para obter mais informações, consulte o [tutorial da tag NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/graphql-tagging-api-tutorial).

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
    title="Use tag para filtrar resultados de entidade"
  >
    Este exemplo de consulta do NerdGraph filtra entidades que pertencem ao domínio `INFRA` e pertencem a awsRegion `us-east-1` e retorna seu nome nos resultados da pesquisa.

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

    Além disso, a filtragem pode ser feita dependendo da presença de uma determinada tag. A consulta a seguir filtra a entidade do domainType `BROWSER-APPLICATION` e tem a tag `clusterAgentId` definida.

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

    Para obter mais informações, consulte o [tutorial da tag NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/graphql-tagging-api-tutorial).
  </Collapser>

  <Collapser
    id="tags-filter"
    title="Agregar resultados por um atributo ou tag"
  >
    Este exemplo de consulta do NerdGraph filtra a entidade do domínio domainType `APM-APPLICATION` que pertence a awsRegion `us-east-1` e retorna seu nome nos resultados da pesquisa. Em seguida, agrega os resultados para obter o número total de entidades agrupadas pelo ID da conta New Relic.

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

    Além disso, a agregação também pode ser feita por tag; a consulta a seguir filtra a entidade do domínio domainType `APM-APPLICATION` que pertence a awsRegion `us-east-1` e, em seguida, agrega os resultados para obter o número total de entidades agrupadas por idioma do agente.

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

    Para obter mais informações, consulte o [tutorial da tag NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/graphql-tagging-api-tutorial).
  </Collapser>

  <Collapser
    id="get-nextcursor"
    title="Obtenha o nextCursor para resultados de pesquisa paginados"
  >
    O explorador NerdGraph GraphiQL pagina os resultados de uma pesquisa de entidade.

    * Se seus critérios de pesquisa renderem mais do que o limite da API de 200 entidades em uma única resposta e você quiser visualizar o restante dos resultados, poderá solicitar `nextCursor` em sua solicitação inicial e usar seu valor em outra consulta para recuperar o seguinte "página" de resultados.

    * Se não houver mais resultados, `nextCursor` será nulo.

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

      Use o valor de `nextCursor` em sua próxima pesquisa:

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
    title="Obter entidade alertável"
  >
    O NerdGraph GraphiQL Explorer permite filtrar entidades com alertable is true|false para mostrar quando uma entidade possui propriedade alertable. Veja [definições de entidade](https://github.com/newrelic/entity-definitions)

    * Você pode filtrar por qualquer um dos atributos acima. Além disso, você também pode usar tags para filtragem.

    * Alertável é uma configuração do tipo entidade, por isso não está presente nos resultados.

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

      Você também pode combinar com outros filtros na consulta:

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
    title="Obtenha a entidade que deixou de reportar há mais de um dia"
  >
    O NerdGraph GraphiQL Explorer permite filtrar entidade com relatórios como campo de data true|false e lastReportingChangeAt.

    * Você pode recuperar a entidade que parou de reportar (algo aconteceu com eles) nas últimas horas

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

## Criar ou excluir relacionamentos de entidade [#manual-relationships]

Uma entidade pode ter um relacionamento com outra entidade. Alguns relacionamentos são [criados automaticamente pelo New Relic](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#relationship-created), mas você também pode usar mutações para criar ou excluir relacionamentos personalizados. Abaixo temos algumas explicações sobre como fazer isso, mas se precisar de ajuda para entender os vários tipos de relacionamento na New Relic, dê uma olhada em [relacionamentos de entidade](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#related-entities).

Antes de criar relacionamentos adicionais manualmente ou excluí-los, lembre-se do seguinte:

* Duas entidades podem ter vários relacionamentos, um para cada tipo de relacionamento.
* Duas entidades podem manter um relacionamento SE pertencerem à mesma conta confiável.
* Para cada entidade, você pode definir manualmente até 2.000 relacionamentos. Quando o limite for atingido, a API retornará um erro `LIMIT_EXCEEDED` .
* Cada mutação pode falhar se você não tiver acesso a uma das duas entidades (origem/destino).

### Listar relacionamentos de uma entidade [#list-relationships]

Você pode usar o campo `relatedEntities` para ver como os pares de entidade interagem e como estão relacionados. Isso pode ajudá-lo a solucionar problemas de serviços upstream e downstream e a entender como problemas menores podem ter repercussões maiores, semelhante à forma como [os mapas de serviço](/docs/service-maps-dependencies-new-relic-one) podem ser usados.

O exemplo a seguir mostra como consultar uma entidade pelo seu GUID específico:

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

### Criar ou substituir relacionamentos [#create-or-replace]

Crie ou substitua relacionamentos de entidade usando a mutação `entityRelationshipUserDefinedCreateOrReplace`. Como o próprio nome sugere, permite criar uma relação entre duas entidades de um determinado tipo. Caso o relacionamento já exista entre as duas entidades, ele será adicionado novamente com os valores informados atualizados (o horário de criação e o id do usuário criador):

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

### Excluir relacionamentos [#delete-relationships]

Exclua relacionamentos de entidade usando a mutação `entityRelationshipUserDefinedDelete`. A origem e o destino são obrigatórios, mas o tipo não. Se você executar a mutação sem tipo, todos os relacionamentos entre as duas entidades serão removidos.

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

## Excluir entidade [#delete-entities]

Você pode excluir manualmente qualquer entidade da sua conta usando a API NerdGraph no [NerdGraph GraphiQL Explorer](https://api.newrelic.com/graphiql).

Para excluir entidades `EXT-SERVICE` e `REF-REPOSITORY` , execute esta mutação com o GUID da entidade:

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
  Depois de executar a mutação `entityDelete` , você poderá ver uma entidade excluída em sua interface se um agente da New Relic a reindexar novamente.
</Callout>

Para excluir entidades `APM`, `BROWSER` e `MOBILE` , execute esta mutação com o GUID da entidade:

```graphql
mutation {
  agentApplicationDelete(guid: "ENTITY_GUID") {
    success
  }
}
```

<Callout variant="important">
  * A mutação `agentApplicationDelete` exige que o agente New Relic não tenha dados de relatório por 12 horas antes da exclusão.
  * Atualmente, você só pode remover os seguintes [tipos de entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic) usando a API Nerdgraph: `APM-APPLICATION`, `EXT-SERVICE` e `REF-REPOSITORY`.
  * Você poderá ver uma entidade excluída em sua interface se um agente da New Relic a reindexar novamente.
</Callout>
