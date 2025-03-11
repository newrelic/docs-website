---
title: 'Tutorial de NerdGraph: Administrar reglas de análisis de registros'
tags:
  - APIs
  - NerdGraph
  - Examples
  - Logs
metaDescription: 'How to create, query, and manage log parsing rules with NerdGraph, the New Relic GraphQL explorer.'
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar NerdGraph en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql) para crear, consultar y administrar sus [reglas de análisis](/docs/logs/log-management/ui-data/parsing/) de registros. NerdGraph es nuestro explorador de API en formato GraphQL.

## Esquema de análisis de datos [#parsing-schema]

Los campos de reglas de análisis disponibles incluyen:

<table>
  <thead>
    <tr>
      <th style={{width: "200px"}}>
        Campos
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        identificación
      </td>

      <td>
        Identificador de análisis de datos único.
      </td>
    </tr>

    <tr>
      <td>
        parsingRules
      </td>

      <td>
        El nombre de la regla de análisis.
      </td>
    </tr>

    <tr>
      <td>
        descripción
      </td>

      <td>
        Una descripción de lo que representa esta regla de análisis.
      </td>
    </tr>

    <tr>
      <td>
        grok
      </td>

      <td>
        El patrón de Grok para esta regla de análisis. Por ejemplo, puede incluir el `logtype` para el patrón Grok que está utilizando con una [regla de análisis integrada](/docs/logs/log-management/ui-data/built-log-parsing-rulesets/), como `logtype = 'alb'`. Sin embargo, no está limitado a utilizar `logtype`; cualquier atributo se puede utilizar como criterio de coincidencia.
      </td>
    </tr>

    <tr>
      <td>
        lucene
      </td>

      <td>
        El valor de búsqueda utilizado en la UI de New Relic; por ejemplo, `logtype:alb`. Para obtener más información sobre las funciones válidas de Lucene en la UI de New Relic, consulte nuestra documentación sobre [la sintaxis de consulta de registros](/docs/logs/log-management/ui-data/query-syntax-logs/).
      </td>
    </tr>

    <tr>
      <td>
        ID de la cuenta
      </td>

      <td>
        El ID de cuenta de New Relic para el usuario.
      </td>
    </tr>

    <tr>
      <td>
        NRQL
      </td>

      <td>
        La consulta NRQL utilizada para consultas, si corresponde; Por ejemplo:

        ```
        "SELECT * FROM Log WHERE `logtype` = 'testLogs'"
        ```
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        El usuario que creó la regla. Opcional: también puede incluir `email`, `gravatar`, `id` y `name` con esto.
      </td>
    </tr>

    <tr>
      <td>
        updatedBy
      </td>

      <td>
        El usuario que actualizó la regla por última vez. Opcional: también puede incluir `email`, `gravatar`, `id` y `name` con esto.
      </td>
    </tr>

    <tr>
      <td>
        activado
      </td>

      <td>
        Si esta regla de análisis está habilitada o no.
      </td>
    </tr>

    <tr>
      <td>
        eliminado
      </td>

      <td>
        Si esta regla de análisis se ha eliminado o no. Eliminar una regla de análisis no elimina el registro ya enrutado.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplo de consulta de reglas de análisis de logs [#query-parsing-rules]

Este ejemplo de solicitud de API de NerdGraph obtiene todas las reglas de análisis para una cuenta determinada. En este ejemplo, se solicitan todos los campos disponibles.

```graphql
query{
  actor {
    account(id: 12345678) {
      logConfigurations {
        parsingRules {
          accountId
          createdBy {
            email
            gravatar
            id
            name
          }
          deleted
          description
          enabled
          grok
          id
          lucene
          nrql
          updatedAt
          updatedBy {
            email
            gravatar
            id
            name
          }
        }
      }
    }
  }
}
```

La respuesta devuelta será similar a esta:

```graphql
{
  "data": {
    "actor": {
      "account": {
        "id": 12345678,
        "logConfigurations": {
          "parsingRules": [
            {
              "accountId": 12345678,
              "createdBy": {
                "email": "myname@ncompany.com",
                "gravatar": "https://secure.gravatar.com/avatar/d0a88888888d666d111111111111111f",
                "id": 7777777,
                "name": "My Name"
              },
              "deleted": false,
              "description": "Integer Test",
              "enabled": true,
              "grok": "source=%{NUMBER:test:int}",
              "id": "123",
              "lucene":  ,
              "nrql": "SELECT * FROM Log WHERE `logtype` = 'integer'",
              "updatedAt": "2021-08-23T17:25:06.553Z[UTC]",
              "updatedBy": {
                "email": "myname@ncompany.com",
                "gravatar": "https://secure.gravatar.com/avatar/d0a88888888d666d111111111111111f",
                "id": 7777777,
                "name": "My Name"
              }
            }
...
```

## Crear reglas de análisis [#create-parsing-rules]

Este ejemplo crea una nueva regla de análisis de registros. Antes de crear la regla, asegúrese de revisar la documentación sobre [análisis de registros](/docs/logs/log-management/ui-data/parsing/) y [reglas de análisis integradas](/docs/logs/log-management/ui-data/built-log-parsing-rulesets/).

```graphql
mutation {
  logConfigurationsCreateParsingRule(accountId: 12345678, rule: {description: "example parsing rule", enabled: false, grok: "sampleattribute=%{NUMBER:test:int}", lucene: "logtype:testLogs", nrql: "SELECT * FROM Log WHERE `logtype` = 'testLogs'"}) {
    rule {
      id
      enabled
      description
      grok
    }
    errors {
      message
      type
    }
  }
}
```

## Actualizar reglas de análisis [#update-parsing-rules]

Este ejemplo actualiza la regla de análisis cuyo `id` es `"123"`. Puede actualizar cualquiera de los siguientes campos según sea necesario: `description`, `enabled`, `grok`, `lucene` y `nrql`.

```graphql
mutation {
  logConfigurationsUpdateParsingRule(accountId: 12345678, rule: {description: "example parsing rule", enabled: false, grok: "sampleattribute=%{NUMBER:test:int}", lucene: "logtype:testLogs", nrql: "SELECT * FROM Log WHERE `logtype` = 'testLogs'"}, id: "123") {
    errors {
      message
      type
    }
    rule {
      id
      grok
      description
      enabled
    }
  }
}
```

## Eliminar reglas de análisis [#delete-parsing-rules]

Eliminar una regla de análisis no elimina los datos que ya se han analizado. Los datos se conservan durante un período de tiempo determinado definido por el campo `retentionPolicy` .

```graphql
mutation {
  logConfigurationsDeleteParsingRule(accountId: 123456789, id: "123") {
    errors {
      message
      type
    }
  }
}
```
