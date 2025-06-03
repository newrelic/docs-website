---
title: 'Tutorial NerdGraph: Canais de alertas'
tags:
  - Notifications
  - Notifications and Nerdgraph
  - Channels
  - Notification Channels
metaDescription: 'For New Relic alerts: how you can list, create, update, and delete channels with our NerdGraph API.'
freshnessValidatedDate: never
translationType: machine
---

Além de gerenciar seu [canal de alerta de notificação na interface](/docs/alerts-applied-intelligence/notifications/intro-notifications), você pode utilizar nossa API NerdGraph.

<Callout variant="important">
  Este documento refere-se ao uso API Nerdgraph para a nova plataforma de notificação usando destinos e mensagens de notificação. As mensagens de notificação também são chamadas de canais, que são diferentes do legado canal de notificação.
</Callout>

<Callout variant="tip">
  Para obter ajuda para começar a usar o NerdGraph, consulte [Introdução ao NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).
</Callout>

## Listar e filtrar canais [#list-and-filter]

A consulta `channels` permite paginar todos os seus canais por conta. Também permite algumas funcionalidades de filtragem.

<CollapserGroup>
  <Collapser id="list-all-channels" title="Listando todos os canais de uma conta">
    Aqui está um exemplo:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channels {
              entities {
                id
                name
              }
              error {
                details
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="paginate" title="Paginando através de canais com paginação de cursor">
    Para paginar seus canais, você deve solicitar o campo `nextCursor` na sua consulta inicial.

    Com a paginação do cursor, você continua fazendo uma solicitação por meio do conjunto de resultados até que `nextCursor` retornado da resposta retorne vazio. Isso significa que você chegou ao fim dos seus resultados.

    Aqui está um exemplo:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channels(cursor: "") {
              nextCursor
              entities {
                id
                name
              }
              totalCount
            }
          }
        }
      }
    }
    ```

    O código acima retorna um conjunto de resultados como este:

    ```json
    {
      "data": {
        "actor": {
          "account": {
            "aiNotifications": {
              "channels": {
                "nextCursor": "/8o0y2qiR54m6thkdgHgwg==:jZTXDFKbTkhKwvMx+CtsPVM=",
                "entities": [
                  {
                    "id": "01c0cbe7-3d70-47c1-99e0-adf906eed6c2",
                    "name": "Channel Name"
                  },
                  {
                    "id": "05db0207-c137-4985-8cb5-f21e7e57b8cc",
                    "name": "Another Channel Name"
                  }
                  // ... more channels here in reality
                ],
                "totalCount": 807
              }
            }
          }
        }
      }
    }
    ```

    Portanto, em sua solicitação subsequente, forneça o cursor assim, até que ele fique vazio:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channels(cursor: "/8o0y2qiR54m6thkdgHgwg==:jZTXDFKbTkhKwvMx+CtsPVM=") {
              nextCursor
              entities {
                id
                name
              }
              totalCount
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-channels-by-name" title="Encontre todos os canais por nome">
    A API permite a consulta de canais por nome. O filtro `name` retorna correspondências exatas e parciais. Não faz distinção entre maiúsculas e minúsculas. Isso retornará apenas as informações dos canais que correspondem ao nome fornecido.

    Neste exemplo, queremos encontrar canais com `"DevOps"` no nome:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channels(filters: {
              name: "DevOps"
            }) {
              entities {
                id
                name
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-by-id" title="Encontre canal por ID">
    A API permite consultar por ID do canal:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channels(filters: {id: YOUR_CHANNEL_ID}) {
              entities {
                id
                name
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-by-destination-id" title="Encontre todos os canais por ID de destino">
    A API permite consultar canais por ID de destino:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channels(filters: {destinationId: YOUR_DESTINATION_ID}) {
              entities {
                id
                name
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-by-type" title="Encontre todos os canais por tipo">
    A API permite consultar por tipo de canal. A consulta a seguir retornará todos os canais de e-mail da conta escolhida:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channels(filters: {type: EMAIL}) {
              entities {
                id
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

## Crie um canal [#create-channel]

Para criar um canal, devem ser fornecidas diferentes entradas para cada tipo de canal. Cada canal está conectado a um destino. Para obter informações sobre destinos, consulte o [tutorial sobre destinos do NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-api-notifications-destinations).

As práticas recomendadas são usar o endpoint `channelSchema` para ver quais campos devem ser enviados em `properties` assim:

```graphql
{
  actor {
    account(id: YOUR_ACCOUNT_ID) {
      aiNotifications {
        channelSchema(
          channelType: CHANNEL_TYPE,
          destinationId: YOUR_DESTINATION_ID,
          product:  YOUR_PRODUCT,
          constraints: []
        ) {
          schema {
            fields {
              mandatory
              label
              key
              component
            }
          }
          result
        }
      }
    }
  }
}
```

<CollapserGroup>
  <Collapser className="freq-link" id="jira" title="Jira Atlassiana">
    Jira é um sistema de tickets configurável e, portanto, não existe uma maneira estática de criar esse canal.

    Existem dois campos estáticos - `project` e `issuetype`.

    Busque as sugestões `project` e use um dos valores como restrição para `issuetype`, conforme mostrado aqui:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channelSuggestions(
              channelType: JIRA_CLASSIC,
              destinationId: YOUR_DESTINATION_ID,
              key: FIELD_NAME
              constraints: [
                {
                  key: "project",
                  value: YOUR_PROJECT_VALUE
                }
              ]
            ) {
              entities {
                value
              }
              error
            }
          }
        }
      }
    }
    ```

    Os valores escolhidos serão usados como restrições para buscar o esquema:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channelSchema(
              channelType: JIRA_CLASSIC,
              destinationId: YOUR_DESTINATION_ID,
              product:  YOUR_PRODUCT,
              constraints: [
                {
                  key: "project",
                  value: YOUR_PROJECT_VALUE
                },
                {
                  key: "issuetype",
                  value: YOUR_ISSUE_TYPE_VALUE
                }
              ]
            ) {
              schema {
                fields {
                  mandatory
                  label
                  key
                  component
                }
              }
              result
            }
          }
        }
      }
    }
    ```

    Depois de buscar cada campo e escolher um valor nas sugestões ou como texto livre, você pode criar um canal:

    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: JIRA,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: [
          {
            key: YOUR_FIELD_NAME,
            value: YOUR_FIELD_NAME,
          },
          // ... And so forth with the rest of the fields
        ]
      }) {
        channel {
          id
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser className="freq-link" id="servicenow" title="ServiceNow (Incident-Management)">
    ServiceNow é um sistema de tickets configurável e, portanto, não há uma maneira estática de criar esse canal.

    O esquema deve ser buscado conforme mostrado acima, então cada campo deve ser preenchido com texto livre ou utilizando sugestões:

    ```graphql
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          aiNotifications {
            channelSchema(
              channelType: SERVICE_NOW,
              destinationId: YOUR_DESTINATION_ID,
              product:  YOUR_PRODUCT,
              constraints: []
            ) {
              schema {
                fields {
                  mandatory
                  label
                  key
                  component
                }
              }
              result
            }
          }
        }
      }
    }
    ```

    Depois de buscar cada campo e escolher um valor nas sugestões ou como texto livre, você pode criar um canal:

    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: SERVICE_NOW,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: [
          {
            key: YOUR_FIELD_NAME,
            value: YOUR_FIELD_NAME,
          },
          // ... And so forth with the rest of the fields
        ]
      }) {
        channel {
          id
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser className="freq-link" id="slack" title="Slack">
    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: SLACK,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: [
          {
            key: "channelId",
            value: YOUR_SLACK_CHANNEL_ID
          }
        ]
      }) {
        channel {
          id
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser className="freq-link" id="webhook" title="Webhook">
    A propriedade `payload` é a carga que será enviada na notificação. Ele usa a sintaxe do guidão para inserir dinamicamente informações da solicitação.

    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: WEBHOOK,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: [
          {
          key:"payload",
          value: "{\"key\":\"value\"}"}
        ]
      }) {
        channel {
          id
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser className="freq-link" id="email" title="E-mail">
    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: EMAIL,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: []
      }) {
        channel {
          id
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser className="freq-link" id="eventBridge" title="AWS EventBridge">
    O `eventSource` deve ser o URL completo de uma fonte de evento existente. O `eventContent` é a carga que será enviada no corpo da notificação, conforme mostrado aqui:

    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: EVENT_BRIDGE,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: [
          {
            key: "eventSource",
            value:  YOUR_AWS_EVENT_SOURCE
          },
          {
            key: "eventContent",
            value:  YOUR_EVENT_CONTENT/var>
          }
        ]
      }) {
        channel {
          id
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser className="freq-link" id="pagerduty" title="PagerDuty">
    PagerDuty possui dois tipos de integração, nível de serviço e nível de conta. Para obter mais informações, consulte a [documentação de integração do PagerDuty](/docs/alerts-applied-intelligence/notifications/notification-integrations#pagerduty).

    Nível de serviço:

    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: PAGERDUTY_SERVICE_INTEGRATION,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: [
          {
            key: "summary",
            value: YOUR_PAGE_SUMMARY
          }
        ]
      }) {
        channel {
          id
          name
        }
      }
    }
    ```

    Nível da conta:

    ```graphql
    mutation {
      aiNotificationsCreateChannel(accountId: YOUR_ACCOUNT_ID, channel: {
        type: PAGERDUTY_ACCOUNT_INTEGRATION,
        name: "Channel Name",
        destinationId: YOUR_DESTINATION_ID,
        product: YOUR_PRODUCT,
        properties: [
          {
            key: "summary",
            value: YOUR_PAGE_SUMMARY
          },
          {
            key: "email",
            value: EMAIL_OF_PD_USER
          },
          {
            key: "service",
            value: YOUR_PD_SERVICE_ID
          }
        ]
      }) {
        channel {
          id
          name
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Atualizar um canal [#update-channel]

Ao atualizar um canal, observe que você não precisa fornecer todos os atributos do canal. Por exemplo, se você deseja atualizar apenas o nome, esse é o único atributo que você precisa atualizar, conforme mostrado aqui:

```graphql
mutation {
  aiNotificationsUpdateChannel(accountId: YOUR_ACCOUNT_ID, channelId: YOUR_CHANNEL_ID, channel: {
    name: "Updated channel Name"
  }) {
    channel {
      id
      name
    }
  }
}
```

## Testando um canal [#test-channel]

Você pode testar canais por meio da API NerdGraph. Isso pode ser feito antes ou depois da criação do canal.

```graphql
mutation {
  aiNotificationsTestChannel(accountId: YOUR_ACCOUNT_ID, channel: {
    type: PAGERDUTY_SERVICE_INTEGRATION,
    name: "Channel Name",
    properties: [
      {
        key: "summary",
        value: YOUR_PAGE_SUMMARY
      }
    ]
  }) {
    error {
      details
    }
    details
    result
  }
}

```

```graphql
mutation {
  aiNotificationsTestChannelById(accountId: YOUR_ACCOUNT_ID, channelId: YOUR_CHANNEL_ID) {
    error {
      details
    }
    details
    result
  }
}
```

## Excluir um canal [#delete-channel]

Você pode excluir canais por meio da API NerdGraph.

```graphql
mutation {
  aiNotificationsDeleteChannel(accountId: YOUR_ACCOUNT_ID, channelId: YOUR_CHANNEL_ID) {
    ids
    error {
      details
    }
  }
}
```