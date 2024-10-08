---
title: 'Tutorial de NerdGraph: ejemplos de monitoreo del agente del navegador'
tags:
  - APIs
  - NerdGraph
  - Examples
  - Browser
  - Mobile
metaDescription: Use the New Relic NerdGraph API to configure the browser monitoring agent.
freshnessValidatedDate: never
translationType: machine
---

A continuación se muestran algunos ejemplos de diversas configuraciones browser que puede realizar con GraphQL.

## Crear una nueva aplicación browser [#create-browser]

Puede crear una aplicación browser utilizando nuestra API NerdGraph en lugar de utilizar la UI. La ventaja de esto es que cuando llega el momento de instrumentar la aplicación de su browser con New Relic, puede crear y recuperar mediante programación el fragmento de JavaScript para copiarlo y pegarlo en la aplicación de su browser .

Para saber cómo usar npm para configurar <InlinePopover type="browser"/>para múltiples aplicaciones, consulte [instrumentar múltiples aplicaciones con npm](/docs/apis/nerdgraph/examples/combining-npm-nerdgraph).

A continuación se muestra un ejemplo de mutación para crear una nueva aplicación browser con la configuración predeterminada.

Mutación:

```graphql
mutation CreateExampleBrowserApplication($accountId: Int!, $name: String!, $settings: AgentApplicationBrowserSettingsInput) {
  agentApplicationCreateBrowser(accountId: $accountId, name: $name, settings: $settings) {
    guid
    name
    settings {
      cookiesEnabled
      distributedTracingEnabled
      loaderScript
      loaderType
    }
  }
}
```

Variables:

```json
{
  "accountId": Int!,
  "name": String!,
  "settings": {
    "cookiesEnabled": Boolean,
    "distributedTracingEnabled": Boolean,
    "loaderType": AgentApplicationBrowserLoader
  }
}
```

## Recuperar el fragmento de JavaScript [#get-browser-snippet]

Puede recuperar el fragmento de JavaScript para [copiarlo y pegarlo en su aplicación](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/#copy-paste). Tenga en cuenta que el fragmento devuelto es una cadena codificada en JSON que deberá analizarse antes de poder copiarlo y pegarlo.

Consultar:

```graphql
query FetchBrowserJavaScriptSnippet($guid: EntityGuid!) {
  actor {
    entity(guid: $guid) {
      ... on BrowserApplicationEntity {
        guid
        name
        browserProperties {
          jsLoaderScript
        }
      }
    }
  }
}
```

Variables:

```json
{
  "guid": EntityGuid!
}
```

## Ejemplos de configuración del monitoreo de navegador [#configure-browser-application]

La configuración browser se puede configurar a través de NerdGraph. A continuación se muestra un ejemplo de mutación que cambia el [ápice](/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction/) de una aplicación.

Mutación:

```graphql
mutation UpdateBrowserApdexTarget($guid: EntityGuid!, $settings: AgentApplicationSettingsUpdateInput!) {
  agentApplicationSettingsUpdate(guid: $guid, settings: $settings) {
    browserSettings {
      browserConfig {
        apdexTarget
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

Variables:

```json
{
  "guid": EntityGuid!,
  "settings": {
    "browserConfig": {
      "apdexTarget": Float
    }
  }
}
```

Para obtener más información sobre qué configuraciones browser se pueden actualizar a través de NerdGraph, consulte la siguiente mutación. La documentación para cada campo se puede encontrar en el [explorador NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#explorer).

Mutación:

```graphql
mutation UpdateBrowserSettingsExample($guid: EntityGuid!, settings: AgentApplicationSettingsUpdateInput!) {
  agentApplicationSettingsUpdate(guid: $guid, settings: $settings) {
    browserSettings {
      browserConfig {
        apdexTarget
      }
      browserMonitoring {
        ajax {
          denyList
        }
        distributedTracing {
          allowedOrigins
          corsEnabled
          corsUseNewrelicHeader
          corsUseTracecontextHeaders
          enabled
          excludeNewrelicHeader
        }
        loader
        privacy {
          cookiesEnabled
        }
      }
      dataManagement {
        sendTransactionEventsToInternalStream
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

Variables:

```json
{
  "guid": EntityGuid!,
  "settings": {
    "browserConfig": {
      "apdexTarget": Float
    },
    "browserMonitoring": {
      "ajax": {
        "denyList": [String!]
      },
      "distributedTracing": {
        "allowedOrigins": [String!],
        "corsEnabled": Boolean,
        "corsUseNewrelicHeader": Boolean,
        "corsUseTracecontextHeaders": Boolean,
        "enabled": Boolean,
        "excludeNewrelicHeader": Boolean
      }
      "loader": AgentApplicationSettingsBrowserLoaderInput,
      "privacy": {
        "cookiesEnabled": Boolean
      }
    }
    "dataManagement": {
      "sendTransactionEventsToInternalStream": Boolean
    }
  }
}
```

## Recuperar la configuración de la aplicación. [#retrieve-app-config]

Puede recuperar la configuración de la aplicación del navegador para usarla con el [método de instalación del paquete npm](https://www.npmjs.com/package/@newrelic/browser-agent). Dependiendo de sus necesidades, la configuración se puede devolver en dos formatos diferentes:

* una cadena codificada en JSON para insertar en el elemento `head` de su página web.
* un objeto que se puede utilizar tal cual en el código fuente de su aplicación.

Consultar:

```graphql
query FetchBrowserConfiguration($guid: EntityGuid!) {
  actor {
    entity(guid: $guid) {
      ... on BrowserApplicationEntity {
        guid
        name
        browserProperties {
          jsConfig
          jsConfigScript
        }
      }
    }
  }
}
```

Variables:

```json
{
  "guid": EntityGuid!
}
```

## Agrupa tus datos con segmentos browser [#browser-segments]

Puede agrupar los resultados del monitoreo del navegador por segmentos browser para obtener datos más significativos. En lugar de hacer esto en la [UI](/docs/new-relic-solutions/best-practices-guides/full-stack-observability/browser-monitoring-best-practices-guide/#segment-allowlist), puedes hacerlo con GraphQL.

### Segmentos de lista [#list-segments]

Comience enumerando los segmentos existentes:

```graphql
{
  actor {
    entity(guid: "YOUR_GUID") {
      ... on BrowserApplicationEntity {
        segmentAllowListAggregate {
          segments
        }
      }
    }
  }
}
```

Aquí está la respuesta:

```json
 "data": {
    "actor": {
      "entity": {
        "segmentAllowListAggregate": {
          "segments": [
            "urlsegment1",
            "urlsegment2"
          ]
        }
      }
    }
  }
 "data": {
    "actor": {
      "entity": {
        "segmentAllowListAggregate": {
          "segments": [
            "urlsegment1",
            "urlsegment2"
          ]
        }
      }
    }
  }
```

### Crear segmentos [#create-segments]

Cree segmentos browser utilizando la mutación `agentApplicationSegmentsReplaceAllBrowserSegmentAllowList`:

```graphql
mutation {
  agentApplicationSegmentsReplaceAllBrowserSegmentAllowList(
    entityGuid: "YOUR_GUID"
    allowList: {segments: ["urlsegment1", "urlsegment2", "urlsegment3"]}
  ) {
    segments
  }
}
```

Aquí está la respuesta:

```json
  "data": {
    "agentApplicationSegmentsReplaceAllBrowserSegmentAllowList": {
      "segments": [
        "urlsegment3",
        "urlsegment2",
        "urlsegment1"
      ]
    }
  }
```

## Fijación de versión del agente del navegador [#browser-agent-version-pinning]

La API GraphQL de New Relic le proporciona un método para "fijar" una versión específica del agente New Relic Browser , asegurando que permanezca consistente dentro de su plataforma. Al fijar una versión, puede evitar actualizaciones automáticas que podrían introducir cambios o comportamientos inesperados. Los beneficios clave de esta característica incluyen los siguientes:

* <DNT>
    **Control**
  </DNT>

  : Conserve autonomía sobre cuándo y cómo se aplican las actualizaciones.

* <DNT>
    **Confidence**
  </DNT>

  : Asegúrese de que se esté ejecutando una versión probada y aprobada del agente en todo momento.

* <DNT>
    **Testability**
  </DNT>

  : Pruebe fácilmente nuevas versiones en entornos aislados antes de decidir actualizar.

* <DNT>
    **Stability**
  </DNT>

  : Minimice las interrupciones inesperadas y mantenga un comportamiento constante de la aplicación.

* <DNT>
    **Efficiency**
  </DNT>

  : Reduzca el tiempo de despliegue y mitigue las dificultades de despliegue.

A continuación se ofrece una descripción general de cómo utilizar la API de fijación de versiones del agente del navegador:

<CollapserGroup>
  <Collapser
    id="step1"
    title="Paso 1. Recupera la versión fijada actual"
  >
    Utilice esta consulta de NerdGraph para determinar qué tipo de agente utiliza su aplicación browser , así como si ya está fijada una versión específica.

    ```graphql
    query FetchBrowserMonitoringAgentSettings {
      actor {
        entity(guid: "YOUR_BROWSER_APP_GUID") {
          ... on BrowserApplicationEntity {
            guid
            name
            browserSettings {
              browserMonitoring {
                loader
                pinnedVersion
              }
            }
          }
        }
      }
    }
    ```

    Un ejemplo de respuesta a la consulta anterior:

    ```json
    {
      "data": {
        "actor": {
          "entity": {
            "browserSettings": {
              "browserMonitoring": {
                "loader": "SPA",
                "pinnedVersion": null
              }
            },
            "guid": "YOUR_BROWSER_APP_GUID",
            "name": "Example Single Page App"
          }
        }
      }
    }
    ```

    En este ejemplo, `loader` es de tipo `SPA` y `pinnedVersion` es `null`, lo que indica que no hay ninguna versión fijada.

    Puede ejecutar esta consulta en cualquier momento para verificar su combinación de cargador y versión fijada.
  </Collapser>

  <Collapser
    id="step2"
    title="Paso 2. Revisa las versiones disponibles"
  >
    Encuentre la versión del agente deseada en la [página de lanzamientos del agenteNew Relic Browser ](/docs/browser/browser-monitoring/getting-started/browser-agent-eol-policy/).

    La columna `Browser agent release` contiene todas las versiones de agente del navegador actualmente admitidas. Tome nota del número de versión semántica que desea fijar.
  </Collapser>

  <Collapser
    id="step3"
    title="Paso 3. Fija la versión deseada"
  >
    Una vez que haya identificado la versión que desea anclar, use la siguiente mutación GraphQL para configurarla.

    <Callout variant="tip">
      Asegúrese de utilizar la versión semántica del agente del navegador que desea que utilice su aplicación. Deje este espacio en blanco para utilizar la versión más reciente. Utilice `'x'` en lugar de un dígito numérico para representar la última versión dentro del rango de versiones (por ejemplo, `'1.x.x'`).
    </Callout>

    ```graphql
    mutation  {
      agentApplicationSettingsUpdate(
        guid: "YOUR_BROWSER_APP_GUID"
        settings: {browserMonitoring: {pinnedVersion: "1.229.0"}}
      ) {
        browserProperties {
          jsLoaderScript
        }
        browserSettings {
          browserMonitoring {
            loader
            pinnedVersion
          }
        }
      }
    }
    ```

    Tenga en cuenta que los campos de retorno para esta mutación contendrán el valor `pinnedVersion` actualizado, así como el `jsLoaderScript` actualizado.

    Cambiar el valor `loader` a `NONE` eliminará cualquier versión semántica fijada.
  </Collapser>

  <Collapser
    id="step4"
    title="Paso 4. Vuelva a desplegar su aplicación o reinicie su agente"
  >
    Para aplicaciones que utilizan el método copiar/pegar, reemplace el fragmento de JavaScript existente con el nuevo `<script>` decodificado. Luego vuelva a desaplegar su aplicación.

    Para aplicaciones que tienen monitoreo del navegador a través de un agente instalado en el backend (como Ruby, Python, etc.), será necesario reiniciar el agente para recuperar los nuevos valores.

    En cualquier caso, la próxima vez que su aplicación muestre una página browser , debería utilizar la versión del agente anclado para informar datos a su cuenta de New Relic.

    Recuerde que puede verificar la versión fijada y el tipo de cargador utilizando la consulta en el primer paso.
  </Collapser>
</CollapserGroup>
