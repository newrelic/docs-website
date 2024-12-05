---
title: 'Tutorial de NerdGraph: ejemplos de configuración del agente APM'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Examples of using New Relic NerdGraph API to adjust APM
freshnessValidatedDate: never
translationType: machine
---

Este documento es un lugar para ejemplos de configuración de <InlinePopover type="apm"/>agente usando nuestra API NerdGraph.

## Configurar la configuración del lado del servidor [#server-side-config]

Tenga en cuenta que para que <InlinePopover type="apm"/>agente utilice valores de configuración modificados a través de NerdGraph, [la configuración del lado del servidor](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration#requirements) debe estar habilitada.

Para conocer los requisitos, consulte [Requisitos de configuración del lado del servidor](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration#requirements).

A continuación se muestra una consulta de ejemplo que devuelve el estado de la configuración del lado del servidor para una entidad determinada.

```
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

A continuación se muestra un ejemplo de cómo deshabilitar [la configuración del lado del servidor](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration). Tenga en cuenta que `guid` utiliza una matriz, lo que puede resultar útil si desea actualizar varias entidades.

```
mutation ExampleUpdateQuery {
  agentApplicationSettingsUpdate(guid: "ZjY1ODgxfEFQTXxBUFBYSUNBVElPTnz0ODEwMTY3NzZ", settings: {apmConfig: {useServerSideConfig: false}}) {
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

Para saber cómo encontrar el GUID de una entidad, consulte [Buscar datos de entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#find).

## Recuperar configuración [#get-settings]

A continuación se muestra un ejemplo de cómo devolver la configuración del rastreador de transacciones de una entidad:

```
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
