---
title: 'Tutorial NerdGraph: canales de inteligencia aplicada'
tags:
  - Notifications
  - Notifications and Nerdgraph
  - Channels
  - Notification Channels
metaDescription: 'For New Relic applied intelligence: how you can list, create, update, and delete channels with our NerdGraph API.'
freshnessValidatedDate: never
translationType: machine
---

Además de administrar su [canal de notificación de inteligencia aplicada en la UI](/docs/alerts-applied-intelligence/notifications/intro-notifications), puede utilizar nuestra API NerdGraph.

<Callout variant="important">
  Este documento hace referencia al uso de las API de Nerdgraph para la nueva plataforma de notificación utilizando destinos y mensajes de notificación. Los mensajes de notificación también se denominan canales, que son diferentes del canal de notificación legacy .
</Callout>

<Callout variant="tip">
  Para obtener ayuda para comenzar con NerdGraph, consulte [Introducción a NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).
</Callout>

## Listar y filtrar canales [#list-and-filter]

La consulta `channels` le permite paginar todos sus canales por cuenta. También permite algunas funciones de filtrado.

<CollapserGroup>
  <Collapser
    id="list-all-channels"
    title="Listado de todos los canales de una cuenta"
  >
    He aquí un ejemplo:

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

  <Collapser
    id="paginate"
    title="Paginar a través de canales con paginación del cursor"
  >
    Para paginar a través de sus canales, debe solicitar el campo `nextCursor` en su consulta inicial.

    Con la paginación del cursor, continúa realizando una solicitud a través del conjunto de resultados hasta que el `nextCursor` que se devuelve de la respuesta vuelve vacío. Esto significa que llegó al final de sus resultados.

    He aquí un ejemplo:

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

    El código anterior devuelve un conjunto de resultados como este:

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

    Entonces, en su solicitud posterior, proporcione el cursor así, hasta que el cursor esté vacío:

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

  <Collapser
    id="find-channels-by-name"
    title="Encuentra todos los canales por nombre"
  >
    La API permite consultar el canal por nombre. El filtro `name` devuelve coincidencias exactas y coincidencias parciales. No distingue entre mayúsculas y minúsculas. Esto solo devolverá la información de los canales que coincidan con el nombre proporcionado.

    En este ejemplo, queremos buscar canales con `"DevOps"` en el nombre:

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

  <Collapser
    id="find-by-id"
    title="Buscar canal por ID"
  >
    La API te permite consultar por ID de canal:

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

  <Collapser
    id="find-by-destination-id"
    title="Buscar todos los canales por ID de destino"
  >
    La API te permite consultar canales por ID de destino:

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

  <Collapser
    id="find-by-type"
    title="Encuentra todos los canales por tipo"
  >
    La API te permite realizar consultas por tipo de canal. La siguiente consulta devolverá todos los canales de correo electrónico de la cuenta elegida:

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

## Crear un canal [#create-channel]

Para crear un canal, se deben suministrar diferentes entradas para cada tipo de canal. Cada canal está conectado a un destino. Para obtener información sobre destinos, consulte el [tutorial de NerdGraph sobre destinos](/docs/apis/nerdgraph/examples/nerdgraph-api-notifications-destinations).

Las mejores prácticas es usar el extremo `channelSchema` para ver qué campos deben enviarse bajo `properties` así:

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
  <Collapser
    className="freq-link"
    id="jira"
    title="Atlassian Jira"
  >
    Jira es un sistema de tickets configurable y, por lo tanto, no existe una forma estática de crear este canal.

    Hay dos campos estáticos: `project` y `issuetype`.

    Obtenga las sugerencias `project` y utilice uno de los valores como restricción para `issuetype`, como se muestra aquí:

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

    Los valores elegidos se utilizarán como restricciones para recuperar el esquema:

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

    Una vez que hayas obtenido cada campo y hayas elegido un valor de las sugerencias o como texto libre, puedes crear un canal:

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

  <Collapser
    className="freq-link"
    id="servicenow"
    title="ServiceNow (Incident-Management)"
  >
    ServiceNow es un sistema de tickets configurable y, por lo tanto, no existe una forma estática de crear este canal.

    El esquema debe recuperarse como se muestra arriba, luego cada campo debe completarse con texto libre o mediante sugerencias:

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

    Una vez que hayas obtenido cada campo y hayas elegido un valor de las sugerencias o como texto libre, puedes crear un canal:

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

  <Collapser
    className="freq-link"
    id="slack"
    title="Slack"
  >
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

  <Collapser
    className="freq-link"
    id="webhook"
    title="Webhook"
  >
    La propiedad `payload` es la carga útil que se enviará en la notificación. Utiliza la sintaxis del manillar para insertar dinámicamente información de la solicitud.

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

  <Collapser
    className="freq-link"
    id="email"
    title="Correo electrónico"
  >
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

  <Collapser
    className="freq-link"
    id="eventBridge"
    title="AWS EventBridge"
  >
    El `eventSource` debe ser la URL completa de un origen de evento existente. El `eventContent` es la carga útil que se enviará en el cuerpo de la notificación, como se muestra aquí:

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

  <Collapser
    className="freq-link"
    id="pagerduty"
    title="PagerDuty"
  >
    PagerDuty tiene dos tipos de integración, nivel de servicio y nivel de cuenta. Para obtener más información, consulte los [documentos de integración de PagerDuty](/docs/alerts-applied-intelligence/notifications/notification-integrations#pagerduty).

    Nivel de servicio:

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

    Nivel de cuenta:

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

## Actualizar un canal [#update-channel]

Cuando actualiza un canal, tenga en cuenta que no necesita proporcionar todos los atributos del canal. Por ejemplo, si solo desea actualizar el nombre, ese es el único atributo que necesita actualizar, como se muestra aquí:

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

## Probando un canal [#test-channel]

Puede probar canales a través de la API NerdGraph. Esto se puede hacer antes o después de crear el canal.

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

## Eliminar un canal [#delete-channel]

Puede eliminar canales a través de la API NerdGraph.

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
