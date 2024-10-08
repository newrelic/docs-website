---
title: 'Tutorial do NerdGraph: exemplos de configuração do agente APM'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Examples of using New Relic NerdGraph API to adjust APM
freshnessValidatedDate: never
translationType: machine
---

Este documento é um local para exemplos de configuração do agente <InlinePopover type="apm"/>usando nossa API NerdGraph.

## Configurar configuração no lado do servidor [#server-side-config]

Observe que para que o agente <InlinePopover type="apm"/>utilize valores de configuração alterados via NerdGraph, [a configuração no lado do servidor](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration#requirements) deve estar habilitada.

Para requisitos, consulte [requisitos de configuração do lado do servidor](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration#requirements).

Aqui está um exemplo de consulta que retorna o status da configuração Configuração no lado do servidor para uma determinada entidade.

```graphql
query ExampleReadQuery {
  actor {
    entity(guid:"ZjY1ODgxfEFQTXxBUFBYSUNBVElPTnz0ODEwMTY3NzZ") {
      ...on ApmApplicationEntity {
        apmSettings {
          apmConfig {
            useServerSideConfig
          }
        }
      }
    }
  }
}
```

Aqui está um exemplo de desabilitação [da configuração no lado do servidor](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration). Observe que `guid` usa uma matriz, o que pode ser útil se você quiser atualizar diversas entidades.

```graphql
mutation ExampleUpdateQuery {
  agentApplicationSettingsUpdate(
    guid: "ZjY1ODgxfEFQTXxBUFBYSUNBVElPTnz0ODEwMTY3NzZ"
    settings: { apmConfig: { useServerSideConfig: false } }
  ) {
    apmSettings {
      apmConfig {
        useServerSideConfig
      }
    }
    errors {
      description
      errorClass
      field
    }
  }
}
```

Para saber como encontrar o GUID de uma entidade, consulte [Encontrar dados da entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#find).

## Recuperar configurações [#get-settings]

Aqui está um exemplo de retorno das configurações tracer de transação de uma entidade:

```graphql
query ExampleReadQuery {
  actor {
    entity(guid:"ZjY1ODgxfEFQTXxBUFBYSUNBVElPTnz0ODEwMTY3NzZ") {
      ... on ApmApplicationEntity {
        guid
        name
        apmSettings {
          transactionTracer {
            enabled
            explainEnabled
            explainThresholdType
            explainThresholdValue
          }
        }
      }
    }
  }
}
```
