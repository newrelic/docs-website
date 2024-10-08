---
title: 'Tutorial de NerdGraph: administrar reglas de partición de datos log'
tags:
  - APIs
  - NerdGraph
  - Examples
  - Logs
metaDescription: 'Create, query, and manage data partition rules with NerdGraph, the New Relic GraphQL explorer.'
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar NerdGraph en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql) para crear, consultar y administrar sus [reglas de partición de datos](/docs/logs/log-management/ui-data/data-partitions/) para registros. NerdGraph es nuestro explorador de API en formato GraphQL.

## Esquema de reglas de partición de datos [#data-partition-schema]

Los campos de reglas de partición de datos disponibles incluyen:

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
        Identificador único de regla de partición de datos.
      </td>
    </tr>

    <tr>
      <td>
        targetDataPartition
      </td>

      <td>
        El nombre de la partición de datos.
      </td>
    </tr>

    <tr>
      <td>
        descripción
      </td>

      <td>
        Una descripción de lo que representa esta regla de partición de datos.
      </td>
    </tr>

    <tr>
      <td>
        matchingCriteria
      </td>

      <td>
        _(obsoleto)_ Los criterios coincidentes para esta regla de partición de datos. Una vez habilitada la regla, el registro que coincida con este criterio se enrutará a la partición de datos especificada. Este campo ha quedado obsoleto y eventualmente será reemplazado por el campo `nrql` para permitir una mayor flexibilidad al crear particiones de datos. Si la regla se especifica con una cláusula [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions) `WHERE` en el campo `nrql` que no se puede analizar en `matchingCriteria`, este campo será nulo.
      </td>
    </tr>

    <tr>
      <td>
        NRQL
      </td>

      <td>
        Los criterios coincidentes para esta regla de partición de datos se especifican mediante una cláusula [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions) `WHERE` . Una vez habilitada la regla, el registro que coincida con este criterio se enrutará a la partición de datos especificada.
      </td>
    </tr>

    <tr>
      <td>
        Política de retención
      </td>

      <td>
        La política de retención de los datos de la partición de datos.
      </td>
    </tr>

    <tr>
      <td>
        createdAt
      </td>

      <td>
        La fecha y hora en que se creó la regla.
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        El usuario que creó la regla.
      </td>
    </tr>

    <tr>
      <td>
        updatedAt
      </td>

      <td>
        La fecha y hora en que se modificó la regla por última vez.
      </td>
    </tr>

    <tr>
      <td>
        updatedBy
      </td>

      <td>
        El usuario que actualizó la regla por última vez.
      </td>
    </tr>

    <tr>
      <td>
        activado
      </td>

      <td>
        Si esta regla de partición de datos está habilitada o no.
      </td>
    </tr>

    <tr>
      <td>
        eliminado
      </td>

      <td>
        Si esta regla de partición de datos se ha eliminado o no. Eliminar una regla de partición de datos no elimina el registro ya enrutado.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplo de consulta de reglas de particiones de datos [#query-data-partition-rules]

Este ejemplo de solicitud de API de NerdGraph obtiene todas las reglas de partición de datos para una cuenta determinada. En este ejemplo, solo se solicitan unos pocos campos.

```
{
  actor {
    account(id: 123456) {
      logConfigurations {
        dataPartitionRules {
          id
          targetDataPartition
          description
          nrql
          matchingCriteria {
            attributeName
            matchingOperator
            matchingExpression
          }
        }
      }
    }
  }
}
```

## Cree reglas de particiones de datos utilizando una cláusula NRQL donde [#create-data-partition-rules]

Este ejemplo crea una nueva regla de partición de datos. Antes de crear la regla, asegúrese de revisar nuestra documentación sobre cómo [organizar datos con particiones](/docs/logs/log-management/ui-data/data-partitions/).

```graphql
mutation {
	logConfigurationsCreateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      targetDataPartition: "Log_aNewDataPartitionRule",
      description: "Example data partition rule",
      nrql: "attrbute = 'value'",
      retentionPolicy: STANDARD,
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Crear reglas de particiones de datos con criterios coincidentes (en desuso) [#create-data-partition-rules-deprecated]

Este ejemplo crea una nueva regla de partición de datos. Antes de crear la regla, asegúrese de revisar nuestra documentación sobre cómo [organizar datos con particiones](/docs/logs/log-management/ui-data/data-partitions/). El campo `matchingCriteria` está obsoleto en favor de `nrql` y eventualmente se eliminará.

```graphql
mutation {
	logConfigurationsCreateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      targetDataPartition: "Log_aNewDataPartitionRule",
      description: "Example data partition rule",
      matchingCriteria: {
        attributeName: "attribute",
        matchingMethod: LIKE,
        matchingExpression: "'%example%'"
      },
      retentionPolicy: STANDARD,
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Actualice las reglas de particiones de datos con una cláusula NRQL donde [#update-data-partition-rules]

Este ejemplo actualiza la regla de partición de datos con el ID proporcionado `"123"`. Los campos que se pueden actualizar son `description`, `nrql` y `enabled`. Todos ellos son opcionales, por lo que sólo necesitarás utilizar los que quieras actualizar.

```graphql
mutation {
	logConfigurationsUpdateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      id: "123",
      description: "Example data partition rule",
      nrql: "attribute LIKE '%example%'",
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Actualizar reglas de particiones de datos [#update-data-partition-rules-deprecated]

Este ejemplo actualiza la regla de partición de datos con el ID proporcionado `"123"`. Los campos que se pueden actualizar son `description`, `matchingCriteria` y `enabled`. Todos ellos son opcionales, por lo que sólo necesitarás utilizar los que quieras actualizar.

```graphql
mutation {
	logConfigurationsUpdateDataPartitionRule(
	  accountId: 1123456,
    rule: {
      id: "123",
      description: "Example data partition rule",
      matchingCriteria: {
        attributeName: "attribute",
        matchingMethod: LIKE,
        matchingExpression: "'%example%'"
      },
      enabled: true
    }) {
   	rule {
      id
      targetDataPartition
      description
    }
    errors {
      message
      type
    }
  }
}
```

## Eliminar reglas de particiones de datos [#delete-data-partition-rules]

Este ejemplo elimina una regla de partición de datos. Eliminar una regla de partición de datos no elimina los datos que ya se han particionado. Esos datos se conservan durante un período de tiempo determinado definido por el campo `retentionPolicy` .

```graphql
mutation {
logConfigurationsDeleteDataPartitionRule(id: "1111", accountId: 123456) {
    errors {
      message
      type
    }
  }
}
```
