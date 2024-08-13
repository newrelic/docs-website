---
title: 'Tutorial NerdGraph: Gerenciar regras de partição de dados de log'
tags:
  - APIs
  - NerdGraph
  - Examples
  - Logs
metaDescription: 'Create, query, and manage data partition rules with NerdGraph, the New Relic GraphQL explorer.'
freshnessValidatedDate: never
translationType: machine
---

Você pode usar o NerdGraph em [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql) para criar, consultar e gerenciar suas [regras de partição de dados](/docs/logs/log-management/ui-data/data-partitions/) para logs. NerdGraph é nosso explorador de API no formato GraphQL.

## Esquema de regra de partição de dados [#data-partition-schema]

Os campos de regras de partição de dados disponíveis incluem:

<table>
  <thead>
    <tr>
      <th style={{width: "200px"}}>
        Campos
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `id`
      </td>

      <td>
        Identificador exclusivo de regras de partição de dados.
      </td>
    </tr>

    <tr>
      <td>
        `targetDataPartition`
      </td>

      <td>
        O nome da partição de dados.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        Uma descrição do que esta regra de partição de dados representa.
      </td>
    </tr>

    <tr>
      <td>
        `matchingCriteria`
      </td>

      <td>
        _(obsoleto)_ Os critérios de correspondência para esta regra de partição de dados. Depois que a regra for habilitada, o log que corresponder a esses critérios será roteado para a partição de dados especificada. Este campo foi descontinuado e eventualmente será substituído pelo campo `nrql` para permitir mais flexibilidade ao criar partições de dados. Se a regra for especificada com uma cláusula [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions) `WHERE` no campo `nrql` que não pode ser analisada em `matchingCriteria`, esse campo será nulo.
      </td>
    </tr>

    <tr>
      <td>
        `nrql`
      </td>

      <td>
        Os critérios de correspondência para esta regra de partição de dados especificados usando uma cláusula [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions) `WHERE` . Depois que a regra for habilitada, o log que corresponder a esses critérios será roteado para a partição de dados especificada.
      </td>
    </tr>

    <tr>
      <td>
        `retentionPolicy`
      </td>

      <td>
        A política de retenção dos dados da partição de dados.
      </td>
    </tr>

    <tr>
      <td>
        `createdAt`
      </td>

      <td>
        A data e hora em que a regra foi criada.
      </td>
    </tr>

    <tr>
      <td>
        `createdBy`
      </td>

      <td>
        O usuário que criou a regra.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        A data e hora em que a regra foi alterada pela última vez.
      </td>
    </tr>

    <tr>
      <td>
        `updatedBy`
      </td>

      <td>
        O usuário que atualizou a regra pela última vez.
      </td>
    </tr>

    <tr>
      <td>
        `enabled`
      </td>

      <td>
        Se esta regra de partição de dados está habilitada ou não.
      </td>
    </tr>

    <tr>
      <td>
        `deleted`
      </td>

      <td>
        Se esta regra de partição de dados foi excluída ou não. A exclusão de uma regra de partição de dados não exclui o log já roteado.
      </td>
    </tr>
  </tbody>
</table>

## Exemplo de consulta de regras de partições de dados [#query-data-partition-rules]

Este exemplo de solicitação da API NerdGraph obtém todas as regras de partição de dados para uma determinada conta. Neste exemplo, apenas alguns campos são solicitados.

```graphql
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

## Crie regras de partições de dados usando uma cláusula NRQL where [#create-data-partition-rules]

Este exemplo cria uma nova regra de partição de dados. Antes de criar a regra, revise nossa documentação sobre [organização de dados com partições](/docs/logs/log-management/ui-data/data-partitions/).

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

## Criar regras de partições de dados com matchingCriteria (obsoleto) [#create-data-partition-rules-deprecated]

Este exemplo cria uma nova regra de partição de dados. Antes de criar a regra, revise nossa documentação sobre [organização de dados com partições](/docs/logs/log-management/ui-data/data-partitions/). O campo `matchingCriteria` foi descontinuado em favor de `nrql` e eventualmente será removido.

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

## Atualizar regras de partições de dados com uma cláusula NRQL where [#update-data-partition-rules]

Este exemplo atualiza a regra de partição de dados com o ID `"123"` fornecido. Os campos que podem ser atualizados são `description`, `nrql` e `enabled`. Todos eles são opcionais, então você só precisa usar aqueles que deseja atualizar.

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

## Atualizar regras de partições de dados [#update-data-partition-rules-deprecated]

Este exemplo atualiza a regra de partição de dados com o ID `"123"` fornecido. Os campos que podem ser atualizados são `description`, `matchingCriteria` e `enabled`. Todos eles são opcionais, então você só precisa usar aqueles que deseja atualizar.

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

## Excluir regras de partições de dados [#delete-data-partition-rules]

Este exemplo exclui uma regra de partição de dados. A exclusão de uma regra de partição de dados não exclui dados que já foram particionados. Esses dados são retidos por um determinado período definido pelo campo `retentionPolicy` .

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
