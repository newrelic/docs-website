---
title: 'Tutorial de NerdGraph: Ver y gestionar cuadros de mando'
tags:
  - Scorecards
  - APIs
  - NerdGraph
  - Examples
metaDescription: How to use New Relic NerdGraph API to create and update Scorecards and rules.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="avance">
  Todavía estamos trabajando en esta característica, ¡pero nos encantaría que la probaras!

  Esta característica se proporciona actualmente como parte de un programa de vista previa de conformidad con nuestras [políticas de prelanzamiento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

New Relic le permite usar mutaciones GraphQL de NerdGraph [Scorecards](/docs/service-architecture-intelligence/scorecards/getting-started) para gestionar Scorecards y reglas. Estas mutaciones le permiten crear, actualizar, eliminar y recuperar cuadros de mando y sus reglas asociadas en su flujo de trabajo e integración existente.

Este tutorial proporciona ejemplos de cómo emplear NerdGraph para gestionar cuadros de mando y reglas. Puede emplear estos ejemplos para automatizar las tareas de gestión del cuadro de mando, como crear cuadros de mando, agregar reglas y actualizar los detalles del cuadro de mando.

## Mutaciones [#mutations]

New Relic proporciona varias mutaciones de NerdGraph para crear y gestionar cuadros de mando y reglas relacionadas.

<CollapserGroup>
  <Collapser id="create-scorecard" title="Crear un cuadro de mando">
    Puedes crear tu propio cuadro de mando empleando la mutación `entityManagementCreateScorecard` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            El nombre del Cuadro de Mando.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            Cadena
          </td>

          <td>
            No
          </td>

          <td>
            Una breve descripción del Cuadro de Mando.
          </td>
        </tr>

        <tr>
          <td>
            `accountId`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            La cuenta donde se almacenará la entidad.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      mutation CreateScorecard($description: String, $name: String!, $id: ID!) {
        entityManagementCreateScorecard(
          scorecardEntity: {description: $description, name: $name, scope: {id: $id, type: ACCOUNT}}
        ) {
          entity {
            description
            id
            rules {
              id // COLLECTION ID
            }
            name
          }
        }
      }
      // PARAMETERS
      {
        "description": "Test test Best Practices",
        "name": "Test Engineering Best Practices",
        "id": 1
      }
    ```
  </Collapser>

  <Collapser id="create-rule" title="Crear una regla">
    Puede crear una nueva regla para un cuadro de mando empleando la mutación `entityManagementCreateScorecardRule` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            El nombre de la regla.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            Cadena
          </td>

          <td>
            No
          </td>

          <td>
            Una breve descripción de la regla.
          </td>
        </tr>

        <tr>
          <td>
            `query`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            Una consulta NRQL para evaluar el cumplimiento.
          </td>
        </tr>

        <tr>
          <td>
            `accounts`
          </td>

          <td>
            En t
          </td>

          <td>
            Sí
          </td>

          <td>
            Lista de ID de cuentas donde la regla debe ejecutar la consulta.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      mutation CreateRule($name: String!, $description: String, $query: String!, $accounts: [Int!]!) {
        entityManagementCreateScorecardRule(
          scorecardRuleEntity: {
            name: $name,
            description: $description
            enabled: true,
            nrqlEngine: {
              accounts: $accounts,
              query: $query
            },
            scope: {id: 1, type: ACCOUNT}}
        ) {
          entity {
            id // RULE Id
          }
        }
      }
    ```
  </Collapser>

  <Collapser id="add-rule" title="Crear una regla">
    Puede crear una nueva regla para un cuadro de mando empleando la mutación `entityManagementCreateScorecardRule` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            El nombre de la regla.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            Cadena
          </td>

          <td>
            No
          </td>

          <td>
            Una breve descripción de la regla.
          </td>
        </tr>

        <tr>
          <td>
            `query`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            Una consulta NRQL para evaluar el cumplimiento.
          </td>
        </tr>

        <tr>
          <td>
            `accounts`
          </td>

          <td>
            En t
          </td>

          <td>
            Sí
          </td>

          <td>
            Lista de ID de cuentas donde la regla debe ejecutar la consulta.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      mutation CreateRule($name: String!, $description: String, $query: String!, $accounts: [Int!]!) {
        entityManagementCreateScorecardRule(
          scorecardRuleEntity: {
            name: $name,
            description: $description
            enabled: true,
            nrqlEngine: {
              accounts: $accounts,
              query: $query
            },
            scope: {id: 1, type: ACCOUNT}}
        ) {
          entity {
            id // RULE Id
          }
        }
      }

      // PARAMETERS
      {
        "name": "APM Services Have Alerts Defined",
        "description": "Check that APM services have alerts associated with them",
        "query": "SELECT if(latest(alertSeverity) != 'NOT_CONFIGURED', 1, 0) as 'score' FROM Entity WHERE type = 'APM-APPLICATION' AND tags.nr.team IS NOT NULL AND tags.environment IS NOT NULL FACET id as 'entityGuid', tags.nr.team as 'team', tags.environment as 'environment' LIMIT MAX SINCE 1 day ago",
        "accounts": [1]
      }
    ```
  </Collapser>

  <Collapser id="add-rule" title="Agregar una regla a un cuadro de mando">
    Puede asociar una regla con un cuadro de mando empleando la mutación `entityManagementAddCollectionMembers` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `collectionId`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            ID del Scorecard para agregar las reglas.
          </td>
        </tr>

        <tr>
          <td>
            `rules`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            Lista de identificaciones de reglas que se agregarán al cuadro de mando.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      mutation AddRuleToCollection($collectionId: ID!, $rules: [ID!]!) {
        entityManagementAddCollectionMembers(
          collectionId: $collectionId
          ids: $rules
        )
      }
      // PARAMETERS
      {
        "collectionId": "", // Collection ID is from the rule.id from scorecard entity
        "rules": [] // Provide list of all rule ids which are generated during rule creation.
      }
    ```
  </Collapser>

  <Collapser id="update-scorecard" title="Actualizar un cuadro de mando">
    Puede actualizar los detalles de un cuadro de mando existente empleando la mutación `entityManagementUpdateScorecard` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `id`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            El identificador único del cuadro de mando.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            Cadena
          </td>

          <td>
            No
          </td>

          <td>
            Descripción actualizada del Cuadro de Mando.
          </td>
        </tr>

        <tr>
          <td>
            `name`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            Nombre actualizado del Cuadro de Mando.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
    mutation UpdateScorecard($id: ID!, $description: String, $name: String!) {
      entityManagementUpdateScorecard(
        id: $id
        scorecardEntity: {description: $description, name: $name}
      ) {
        entity {
          name
          id
          rules {
            id
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="update-rule" title="Actualizar una regla">
    Puede actualizar una regla para el Cuadro de mando empleando la mutación `entityManagementUpdateScorecardRule` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `ruleId`
          </td>

          <td>
            IDENTIFICACIÓN
          </td>

          <td>
            Sí
          </td>

          <td>
            El identificador único de la regla.
          </td>
        </tr>

        <tr>
          <td>
            `name`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            El nombre de la regla.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            Cadena
          </td>

          <td>
            No
          </td>

          <td>
            Una breve descripción de la regla.
          </td>
        </tr>

        <tr>
          <td>
            `query`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            Una consulta NRQL para evaluar el cumplimiento.
          </td>
        </tr>

        <tr>
          <td>
            `queryAccounts`
          </td>

          <td>
            En t
          </td>

          <td>
            Sí
          </td>

          <td>
            Lista de ID de cuentas donde la regla debe ejecutar la consulta.
          </td>
        </tr>

        <tr>
          <td>
            `enabled`
          </td>

          <td>
            Booleano
          </td>

          <td>
            No
          </td>

          <td>
            Habilitar o deshabilitar la regla.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      mutation UpdateRule($ruleId: ID!, $name: String!, $description: String, $query: String!, $queryAccounts: [Int!]!, $enabled: Boolean) {
        entityManagementUpdateScorecardRule(
          id: $ruleId
          scorecardRuleEntity: {description: $description, name: $name, enabled: $enabled, nrqlEngine: {accounts: $queryAccounts, query: $query}}
        ) {
          entity {
            id
            name
            description
            nrqlEngine {
              accounts
              query
            }
          }
        }
      }
    ```
  </Collapser>

  <Collapser id="delete-scorecard" title="Eliminar una tarjeta de puntaje o una regla">
    Puede eliminar un cuadro de mando o una regla existente empleando la mutación `entityManagementDelete` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `id`
          </td>

          <td>
            IDENTIFICACIÓN
          </td>

          <td>
            Sí
          </td>

          <td>
            El cuadro de mando objetivo o el ID de la regla que se va a eliminar.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
    mutation DeleteEntity($id: ID!) {
      entityManagementDelete(
        id: $id
      ) {
        id
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Consulta de NerdGraph para cuadros de mando

<CollapserGroup>
  <Collapser id="fetch-scorecards" title="Obtener reglas en un cuadro de mando">
    Puede recuperar todas las reglas asociadas con un cuadro de mando específico empleando la consulta `FetchScorecardDetails` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `scorecardId`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            ID del cuadro de mando para obtener las reglas.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      query FetchScorecardDetails($scorecardId: ID!) {
        actor {
          entityManagement {
            entity(id: $scorecardId) {
              ... on EntityManagementScorecardEntity {
                name
                description
                rules {
                  id
                }
              }
            }
          }
        }
      }
    ```
  </Collapser>

  <Collapser id="fetch-rule" title="Recuperar detalles del cuadro de mando asociado con una regla">
    Puede recuperar los detalles del Scorecard asociados con una regla específica recuperando primero el ID de colección que contiene la regla mediante la consulta `FindRuleOwnerCollections` y luego recuperando los detalles de los padres de la colección mediante la consulta `FetchCollectionParent` .

    ### `FindRuleOwnerCollections` consulta

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `ruleId`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            El identificador único de la regla.
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      query FindRuleOwnerCollections($ruleId: ID!) {
        actor {
          entityManagement {
            relationships(filter: {targetId: {eq: $ruleId}, type: {eq: "HAS_MEMBER"}}) {
              items {
                source {
                  id
                  type
                }
                type
              }
            }
          }
        }
      }
    ```

    ### `FetchCollectionParent` consulta

    Puede recuperar los detalles de los padres de la colección empleando la consulta `FetchCollectionParent` , que requiere el ID de colección obtenido de la respuesta `FindRuleOwnerCollections` .

    #### parámetro de entrada

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Tipo de datos
          </th>

          <th>
            ¿Es obligatorio?
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `collectionId`
          </td>

          <td>
            Cadena
          </td>

          <td>
            Sí
          </td>

          <td>
            El ID obtenido de la respuesta 

            `FindRuleOwnerCollections`

             .
          </td>
        </tr>
      </tbody>
    </table>

    #### Solicitud de muestra

    ```graphql
      query FetchRulesCollection($rulesId: ID!) {
        actor {
          entityManagement {
            collectionElements(filter: {collectionId: {eq: $rulesId}}) {
              items {
                ... on EntityManagementScorecardRuleEntity {
                  id
                  name
                  nrqlEngine {
                    accounts
                    query
                  }
                }
              }
              nextCursor
            }
          }
        }
      }
    ```
  </Collapser>
</CollapserGroup>