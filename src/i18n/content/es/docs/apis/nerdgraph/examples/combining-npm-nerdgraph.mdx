---
title: Instrumentado múltiples aplicaciones con npm y NerdGraph
metaDescription: 'For New Relic browser monitoring, how to combine the npm package with NerdGraph to instrument multiple applications via API.'
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar nuestra API NerdGraph para crear una nueva aplicación browser y recuperar los valores de configuración. Esto se puede combinar con el paquete npm agente del navegador para incorporar la configuración del agente del navegador como parte del proceso de creación de su aplicación o separar la configuración del agente de la implementación del agente dentro de su aplicación.

Si nunca ha utilizado NerdGraph para crear o configurar una aplicación de navegador, primero lea [este tutorial de NerdGraph](/docs/apis/nerdgraph/examples/browser-monitoring-config-nerdgraph#create-browser).

## Configurar el agente [#set-up-agent]

Abra su IDE y una terminal en la raíz de su proyecto o donde se administran sus dependencias frontend. Esta es la ubicación donde ejecutará `npm install --save @newrelic/browser-agent` para instalar el paquete npm. Una vez instalado, localice el archivo de punto de entrada principal de su sitio web. Puede ser `<project_root>/src/index.js` o `<project_root>/src/index.ts` , pero podría ser diferente en su aplicación. Si tiene varios puntos de entrada, seleccione el que se carga más rápido en el browser y, preferiblemente, no utiliza el atributo del elemento script `async` o `defer`.

Una vez que haya localizado dónde desea agregar el agente del navegador, agregue este fragmento de código en ese archivo.

```javascript
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
// Remaining import statements

// Populate using values from NerdGraph
const options = {
  init: { ... },
  info: { ... },
  loader_config: { ...}
}

// The agent loader code executes immediately on instantiation.
new BrowserAgent(options)

// Remaining code
```

La declaración `import` para el agente del navegador debe ser lo primero en su archivo fuente. Después de las declaraciones `import` restantes, inmediatamente cree una instancia y configure el agente del navegador. Asegúrese de hacer esto antes de cualquier otro código para que el agente del navegador tenga la oportunidad de cargar y capturar datos lo antes posible.

## Recuperar la configuración [#retrieve-config]

El objeto `options` en el fragmento anterior debe completarse con información de configuración sobre la aplicación del browser de New Relic. Para los propósitos de este tutorial, usaremos la UI de New Relic con una aplicación browser existente y NerdGraph Explorer para completar la API de llamada.

<Steps>
  <Step>
    ### Obtener el GUID de la entidad de la aplicación browser [#get-entity-guid]

    Para utilizar la API NerdGraph, necesitará obtener [el GUID de entidad](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#find) para la aplicación browser que está instrumentando.
  </Step>

  <Step>
    ### Recuperar la configuración de la aplicación browser [#retrieve-app-config]

    Abra NerdGraph Explorer en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql) y utilice la siguiente consulta para recuperar los valores de configuración de la aplicación del browser . Si su cuenta New Relic utiliza un [centro de datos de la UE](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers), vaya a [api.eu.newrelic.com/graphiql](https://api.eu.newrelic.com/graphiql).

    ```graphql
    query {
      actor {
        entity(guid: '<guid>') {
          ... on BrowserApplicationEntity {
            guid
            name
            browserProperties {
              jsConfigScript
            }
          }
        }
      }
    }
    ```

    Reemplace la parte `<guid>` de la consulta con el GUID de entidad que recuperó anteriormente. Ejecute la consulta y debería recibir un resultado como el que se muestra aquí:

    ```graphql
    {
      "data": {
        "actor": {
          "entity": {
            "browserProperties": {
              "jsConfig": {
                "info": {
                  "applicationID": 1234567,
                  "beacon": "bam.nr-data.net",
                  "errorBeacon": "bam.nr-data.net",
                  "licenseKey": 123456789,
                  "sa": 1
                },
                "init": {
                  "ajax": {
                    "deny_list": [
                      "bam-cell.nr-data.net"
                    ]
                  },
                  "distributed_tracing": {
                    "allowed_origins": [],
                    "cors_enabled": false,
                    "cors_use_newrelic_header": false,
                    "cors_use_tracecontext_headers": false,
                    "enabled": true,
                    "exclude_newrelic_header": false
                  },
                  "privacy": {
                    "cookies_enabled": true
                  }
                },
                "loader_config": {
                  "accountID": <redacted>,
                  "agentID": <redacted>,
                  "applicationID": <redacted>,
                  "licenseKey": "<redacted>",
                  "trustKey": 1672072
                }
              }
            }
          }
        }
      }
    }
    ```

    <Callout variant="tip">
      ¿Necesita más información sobre el uso de NerdGraph? Consulte [Introducción a NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).
    </Callout>
  </Step>

  <Step>
    ### Instalar la configuración [#install-config]

    Copie el contenido de la propiedad `jsConfig` y reemplace el contenido del objeto `options` en su archivo fuente.
  </Step>
</Steps>

## Desplegar usando el paquete npm [#deploy-with-npm]

Con el paquete npm instalado y configurado correctamente, ahora puede crear y desplegar su aplicación browser . Cargue su sitio web en un browser y verifique que se realicen llamadas de red al URI `beacon` desde la configuración.

## Inyectar la configuración de la aplicación browser en HTML [#inject-config-into-html]

Como alternativa a colocar la configuración de la aplicación browser en su código fuente, es posible que desee inyectar la configuración en el HTML de su sitio web. Esto es especialmente útil cuando su código fuente se reutiliza en varios sitios web.

<Steps>
  <Step>
    ### Modificar fragmento de código fuente [#modify-source-code-snippet]

    Modifique el primer fragmento de su código fuente a `import` y cree una instancia de la clase `BrowserAgent` sin parámetro.

    ```javascript
    import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
    // Remaining import statements

    // The agent loader code executes immediately on instantiation.
    new BrowserAgent()

    // Remaining code
    ```
  </Step>

  <Step>
    ### Modificar consulta NerdGraph [#modify-graphql]

    Modifique la consulta NerdGraph para recuperar la configuración de la aplicación browser como una cadena de script codificada en JSON. Ejecute la nueva consulta y recuerde reemplazar `<guid>` con el GUID de la entidad de la aplicación browser recuperado anteriormente.

    ```graphql
    query {
      actor {
        entity(guid: '<guid>') {
          ... on BrowserApplicationEntity {
            guid
            name
            browserProperties {
              jsConfigScript
            }
          }
        }
      }
    }
    ```

    Esto devolverá un resultado como:

    ```graphql
    {
      "data": {
        "actor": {
          "entity": {
            "browserProperties": {
              "jsConfigScript": "<script type=\"text/javascript\">\n;window.NREUM||(NREUM={});NREUM.init={distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:[\"bam-cell.nr-data.net\"]}};\n\n;NREUM.loader_config={accountID:\"<redacted>\",trustKey:\"<redacted>\",agentID:\"<redacted>\",licenseKey:\"<redacted>\",applicationID:\"<redacted>\"};\n;NREUM.info={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",licenseKey:\"<redacted>\",applicationID:\"<redacted>\",sa:1};\n</script>\n"
            }
          }
        }
      }
    }
    ```
  </Step>

  <Step>
    ### Instalar la configuración [#inject-install-config]

    Copie el contenido de la propiedad `jsConfigScript` . Deberá ejecutar los resultados a través de un analizador JSON o reemplazar los valores de `\"` con `"`. El resultado será una cadena que contiene un elemento `<script>` con toda la información de configuración de la aplicación browser . Coloque el elemento `<script>` en la parte superior del elemento `<head>` , pero debajo de los elementos `<meta>` , del HTML de su sitio web.
  </Step>
</Steps>

## Próximos pasos [#next-steps]

Este tutorial solo muestra la superficie de cómo puede usar nuestra API NerdGraph y el paquete npm del agente del navegador. Algunas ideas para los próximos pasos:

* Integre el agente del navegador en su aplicación de creación de sitios web y use NerdGraph para recuperar la configuración de la aplicación browser para cada uno de sus clientes cuando habiliten el monitoreo de New Relic dentro de su dashboard de administración.
* Cree un componente de agente del navegador compartido en la biblioteca de componentes de su organización e inyecta automáticamente la configuración en el HTML utilizando una función de borde CDN que llama a NerdGraph.
* Modifique su canal de CI/CD para completar el código fuente con una configuración de aplicación browser diferente de NerdGraph según el entorno en el que se esté implementando.
