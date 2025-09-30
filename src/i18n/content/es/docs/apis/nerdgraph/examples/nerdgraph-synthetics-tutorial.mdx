---
title: 'Tutorial de NerdGraph: Administra tu monitor Sintético'
tags:
  - NerdGraph
  - Synthetic
metaDescription: 'Use NerdGraph to programatically manage your synthetic monitors, private locations, and secure credentials.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) le permite automatizar la creación, actualización o eliminación de sus [monitores Sintético](/docs/synthetics/synthetic-monitoring/using-monitors/add-edit-monitors/), [ubicación privada](/docs/synthetics/synthetic-monitoring/private-locations/private-locations-overview-monitor-internal-sites-add-new-locations/), [credenciales seguras](/docs/synthetics/synthetic-monitoring/using-monitors/store-secure-credentials-scripted-browsers-api-tests/) y [monitor el tiempo de inactividad](/docs/synthetics/synthetic-monitoring/using-monitors/monitor-downtimes-disable-monitoring-during-scheduled-maintenance-times/).

## Requisitos [#requirements]

Los requisitos incluyen:

* [Requisitos generales de NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#authentication)
* Permisos de usuario relevantes: los mismos [permisos de monitoreo sintético](/docs/synthetics/synthetic-monitoring/administration/user-roles-synthetic-monitoring) que se aplican para usar la UI de Sintético se aplican para usar NerdGraph

## Comprender los campos en el explorador NerdGraph [#fields]

Puede ver las definiciones de campos en [el explorador NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#explorer), pero puede ser útil para comprender mejor los campos `LOCATION`, `PERIOD`, `TAGS` y otros.

<CollapserGroup>
  <Collapser
    id="location-field"
    title="Definir campos de ubicación"
  >
    Para identificar una [ubicación privada](/docs/synthetics/synthetic-monitoring/private-locations/private-locations-overview-monitor-internal-sites-add-new-locations) en su secuencia de comandos, utilice el GUID de entidad de la ubicación privada. Para verificar que un script se ejecuta correctamente, incluya también el atributo `vsePassword` . Por ejemplo:

    ```
    locations: {
      private: {
        guid: LOCATION_ENTITY_GUID, 
        vsePassword: YOUR_VSE_PASSWORD
      }
    }
    ```

    [ubicación pública](/docs/synthetics/synthetic-monitoring/administration/synthetic-public-minion-ips/#location) utilice el identificador de ubicación sin el prefijo AWS , por ejemplo:

    ```
    locations: {
      public: ["US_EAST_2", "US_WEST_1"]
    }
    ```
  </Collapser>

  <Collapser
    id="period-attribute"
    title="Definir campos de período"
  >
    El atributo `PERIOD` define un intervalo de tiempo para que se ejecute su monitor. Para definir el intervalo, utilice estos formularios:

    * `EVERY_MINUTE` por cada minuto.
    * `EVERY_N_MINUTES`, donde 'N' son minutos. Los valores admitidos incluyen `EVERY_5_MINUTES`, `EVERY_10_MINUTES`, `EVERY_15_MINUTES` y `EVERY_30_MINUTES`.
    * `EVERY_HOUR` por cada hora.
    * `EVERY_N_HOURS`, donde 'N' son horas. Los valores admitidos incluyen `EVERY_6_HOURS` y `EVERY_12_HOURS`.
    * `EVERY_DAY` por una vez al día.
  </Collapser>

  <Collapser
    id="tags-attribute"
    title="Definir campos de etiqueta"
  >
    La etiqueta es opcional. Puede agregar una etiqueta durante la creación del monitor o más tarde usando llamadas de etiqueta en NerdGraph o la UI. Se pueden agregar varias etiquetas en una sola llamada de mutación utilizando una matriz que contiene claves y valores.
  </Collapser>

  <Collapser
    id="optional-fields"
    title="Definir campos opcionales"
  >
    Algunos campos son para una configuración más avanzada. Estos son opcionales.

    Para [el monitor de ping](#create-ping), estos incluyen:

    * HEADER_NAME: los nombres de encabezado personalizados que aparecen en la solicitud.

    * HEADER_VALUE: el valor del encabezado personalizado en la solicitud.

    * REDIRECT_IS_FAILURE: Su monitor informa una falla si es redirigido.

    * VALIDATION_TEXT: si este texto no se incluye en la respuesta de su monitor, devuelve un error.

    * TLS_VALIDATION: Verifica la [validez](/docs/synthetics/synthetic-monitoring/using-monitors/add-edit-monitors/#simple) de la cadena del certificado SSL.

      Para [un monitor de navegador simple](#create-simple-browser):

    * RUNTIME_TYPE: el tipo de tiempo de ejecución utilizado por su monitor. "CHROME_BROWSER" es el único valor aceptado.

    * RUNTIME_TYPE_VERSION: la versión del tipo de tiempo de ejecución utilizada por su monitor. "100" es el único valor aceptado.

    * SCRIPT_LANGUAGE: el idioma utilizado en su monitor. "JAVASCRIPT" es el único valor aceptado.

      Para [monitor API con script](#create-scripted-API):

    * SCRIPT_CONTENT: El contenido real del script. Esto **no** debe estar codificado en base64.

    * RUNTIME_TYPE: el tipo de tiempo de ejecución utilizado por su monitor. "NODE_API" es el único valor aceptado.

    * RUNTIME_TYPE_VERSION: la versión del tipo de tiempo de ejecución utilizada por su monitor. El único valor aceptado es `16.10`.

    * SCRIPT_LANGUAGE: el idioma utilizado en su monitor. "JAVASCRIPT" es el único valor aceptado.

      Para [monitor de navegador con script](#create-scripted-browser):

    * SCRIPT_CONTENT: El contenido real del script. Esto **no** debe estar codificado en base64.

    * RUNTIME_TYPE: el tipo de tiempo de ejecución utilizado por su monitor. "CHROME_BROWSER" es el único valor aceptado.

    * RUNTIME_TYPE_VERSION: la versión del tipo de tiempo de ejecución utilizada por su monitor. "100" es el único valor aceptado.

    * SCRIPT_LANGUAGE: el idioma utilizado en su monitor. "JAVASCRIPT" es el único valor aceptado.

      Para [el monitor de verificación de certificados](#create-certificate-check):

    * DAYS_UNTIL_EXPIRATION: Le notifica cuando necesita actualizar su certificado. Por ejemplo, si desea recibir una notificación 30 días antes de que caduque el certificado, deberá ingresar 30.

      Para todos los monitores:

    * APDEX_TARGET: el objetivo Apdex del monitor utilizado para completar los informes SLA. El valor predeterminado es 7 segundos (7000 ms).
  </Collapser>
</CollapserGroup>

## Utilice consulta para recuperar datos [#query]

Consulta realizar solicitudes para recuperar datos. Para conocer capacidades de consulta adicionales disponibles para su entidad Sintético, consulte [el tutorial de API de entidad NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-entities-api-tutorial/).

<CollapserGroup>
  <Collapser
    id="query-examples"
    title="Monitor de consulta"
  >
    Puedes consultar tus monitores Sintético para obtener información del estado actual de tus datos o detalles sobre la configuración monitor . Algunos ejemplos de consulta incluyen:

    ```
    {
      actor {
        entitySearch(query: "domain = 'SYNTH' AND type = 'MONITOR'") {
          results {
            entities {
              ... on SyntheticMonitorEntityOutline {
                guid
                name
                accountId
                monitorType
                tags {
                  key
                  values
                }
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="private-examples"
    title="Consulta ubicación privada"
  >
    Puedes consultar tu ubicación privada:

    ```
    {
      actor {
        entitySearch(query: "domain = 'SYNTH' AND type = 'PRIVATE_LOCATION'") {
          results {
            entities {
              accountId
              guid
              name
              tags {
                key
                values
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="credentials-example"
    title="Consultar credenciales seguras"
  >
    Consultar credenciales seguras solo le permite recuperar metadatos, pero no los valores de las credenciales en sí:

    ```
    {
      actor {
        entitySearch(query: "domain = 'SYNTH' AND type = 'SECURE_CRED'") {
          results {
            entities {
              ... on SecureCredentialEntityOutline {
                accountId
                guid
                name
                tags {
                  key
                  values
                }
                updatedAt
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="query-script-example"
    title="De consulta monitor script"
  >
    Recupere el script utilizado en una API con script o supervise el script del navegador. Otros tipos monitor devolverán un error.

    ```
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          synthetics {
            script(monitorGuid: "ENTITY_GUID") {
              text
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="query-steps-example"
    title="Consulta monitorear pasos"
  >
    Recupera los pasos configurados para un monitor de pasos. Otros tipos de monitor devolverán un error.

    ```
    {
      actor {
        account(id: YOUR_ACCOUNT_ID) {
          synthetics {
            steps(monitorGuid: "ENTITY_GUID") {
              ordinal
              type
              values
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="query-guid-example"
    title="Consulta para asignar el ID del monitor al GUID de la entidad"
  >
    Recupere el GUID de la entidad para un monitor Sintético utilizando el ID del monitor.

    ```
    {
      actor {
        entitySearch(
          query: "(domainId = 'MONITOR_ID')"
        ) {
          results {
            entities {
              ... on SyntheticMonitorEntityOutline {
                guid
                name
                monitorId
              }
            }
          }
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Crea tu monitor Sintético [#create-monitors]

A continuación se muestran algunos ejemplos de solicitudes para automatizar la creación de su monitor Sintético.

<Callout variant="tip">
  Incluya el objeto de tiempo de ejecución que incluye `runtimeType`, `runtimeTypeVersion` y `scriptLanguage` para utilizar un tiempo de ejecución más nuevo. No incluya el objeto de tiempo de ejecución ni estos atributos para continuar usando un tiempo de ejecución legacy .
</Callout>

<CollapserGroup>
  <Collapser
    id="create-ping"
    title="Crear un monitor de ping"
  >
    El monitor de ping comprueba que su aplicación se esté ejecutando. Aquí hay un ejemplo para crear uno en NerdGraph:

    ```
    mutation {
        syntheticsCreateSimpleMonitor (
          accountId: YOUR_ACCOUNT_ID 
          monitor: {
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              }, 
            name: "YOUR_MONITOR_NAME", 
            period: PERIOD, 
            status: STATUS, 
            uri: "MONITORED_URI", 
            advancedOptions: {
              customHeaders: {
                name: "HEADER_NAME", 
                value: "HEADER_VALUE"
              }, 
              redirectIsFailure: REDIRECT_IS_FAILURE, 
              responseValidationText: "VALIDATION_TEXT", 
              shouldBypassHeadRequest: BYPASS_HEAD_REQUEST, 
              useTlsValidation: TLS_VALIDATION
            }, 
            apdexTarget: APDEX_TARGET
          }
      ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="create-simple-browser"
    title="Crea un monitor browser simple"
  >
    El monitor browser simple utiliza una instancia de Chrome para imitar las visitas de los clientes. Aquí hay un ejemplo para crear uno en NerdGraph:

    ```
    mutation {
        syntheticsCreateSimpleBrowserMonitor (
          accountId: YOUR_ACCOUNT_ID, 
          monitor: {
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              }, 
            name: "YOUR_MONITOR_NAME", 
            period: PERIOD, 
            runtime: {
              runtimeType: "RUNTIME_TYPE",
              runtimeTypeVersion: "RUNTIME_TYPE_VERSION",
              scriptLanguage: "SCRIPT_LANGUAGE"
            }
            status: STATUS, 
            uri: "MONITORED_URI", 
            advancedOptions: {
              customHeaders: {
                name: "HEADER_NAME", 
                value: "HEADER_VALUE"
              }, 
              enableScreenshotOnFailureAndScript: ENABLE_SCREENSHOT, 
              responseValidationText: "VALIDATION_TEXT", 
              useTlsValidation: TLS_VALIDATION
            }, 
            apdexTarget: APDEX_TARGET
          ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="create-scripted-browser"
    title="Crear un browsercon script"
  >
    [monitor de browser con script](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors) son interacciones más complejas con sus páginas y aplicaciones. Aquí hay un ejemplo para crear uno en NerdGraph:

    ```
    mutation {
        syntheticsCreateScriptBrowserMonitor (
          accountId: YOUR_ACCOUNT_ID, 
          monitor: { 
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              }, 
            name: "MONITOR_NAME", 
            period: PERIOD,
            runtime: {
              runtimeType: "RUNTIME_TYPE",
              runtimeTypeVersion: "RUNTIME_TYPE_VERSION",
              scriptLanguage: "SCRIPT_LANGUAGE"
            }
            script: "SCRIPT_CONTENT", 
            status: STATUS, 
            advancedOptions: {
              enableScreenshotOnFailureAndScript: ENABLE_SCREENSHOT
            }, 
            apdexTarget: APDEX_TARGET
          }
        ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="create-scripted-API"
    title="Crear un monitor API con script"
  >
    [El monitor de API con secuencia de comandos](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests) verifica sus extremos de API. Aquí hay un ejemplo para crear uno en NerdGraph:

    ```
    mutation {
        syntheticsCreateScriptApiMonitor (
          accountId: YOUR_ACCOUNT_ID, 
          monitor: {
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              }, 
            name: "YOUR_MONITOR_NAME", 
            period: PERIOD,
            runtime: {
              runtimeType: "RUNTIME_TYPE",
              runtimeTypeVersion: "RUNTIME_TYPE_VERSION",
              scriptLanguage: "SCRIPT_LANGUAGE"
            }
            script: "SCRIPT_CONTENT", 
            status: STATUS, 
            apdexTarget: APDEX_TARGET
          }
        ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="create-step"
    title="Crear un monitor de pasos"
  >
    El monitor de pasos proporciona un monitor basado en browser de varios pasos sin código. Aquí hay un ejemplo para crear uno en NerdGraph:

    ```
    mutation {
    syntheticsCreateStepMonitor (
      accountId: NR_ACCOUNT_ID, 
      monitor: {
        locations: {
          public: ["LOCATION_1", "LOCATION_2"]
          },  
        name: "MONITOR_NAME", 
        period: PERIOD, 
        status: STATUS, 
        steps: [{
          ordinal: 0, 
          type: NAVIGATE, 
          values: ["MONITORED_URI"],["USER_AGENT"]
          },{
          ordinal: STEP_NUMBER,
          type: STEP_TYPE,
          values: ["CONDITIONAL_TYPE","VALUE"]
        }]
        advancedOptions: {
          enableScreenshotOnFailureAndScript: ENABLE_SCREENSHOT
        }, 
        apdexTarget: APDEX_TARGET
      }
    ) {
        errors {
          description
          type
        }
    }
    }
    ```
  </Collapser>

  <Collapser
    id="create-certificate-check"
    title="Crear un monitor de verificación de certificados"
  >
    Configure el monitor para que le notifique cuando su certificado SSL esté a punto de caducar. Aquí hay un ejemplo para crear uno en NerdGraph:

    ```
    mutation {
        syntheticsCreateCertCheckMonitor (
          accountId: YOUR_ACCOUNT_ID, 
          monitor: {
            domain: "DOMAIN", 
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              },
            name: "YOUR_MONITOR_NAME", 
            numberDaysToFailBeforeCertExpires: DAYS_UNTIL_EXPIRATION, 
            period: PERIOD, 
            status: STATUS, 
            apdexTarget: APDEX_TARGET
          }
        ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="create-broken-links"
    title="Crear un monitor de enlaces rotos"
  >
    El monitor de enlaces rotos comprueba si los enlaces de una página web fallan. Aquí hay un ejemplo para crear uno en NerdGraph:

    ```
    mutation {
      syntheticsCreateBrokenLinksMonitor (
        accountId: YOUR_ACCOUNT_ID, 
        monitor: {
          locations: {
            public: ["LOCATION_1", "LOCATION_2"]
            }, 
          name: "YOUR_MONITOR_NAME", 
          period: PERIOD, 
          status: STATUS, 
          apdexTarget: APDEX_TARGET, 
          uri: "MONITOR_URI", 
          tags: {
            key: "YOUR_TAG_NAME", 
            values: "TAG_VALUE"
            }
          }
        ) {
          errors {
            description
            type
          }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Actualiza tu monitor Sintético [#update-monitors]

Si bien no puede cambiar el tipo de monitor después de crearlo, puede actualizar su configuración. Solo se requieren la guía y la configuración que deben actualizarse como parte de la solicitud.

<Callout variant="tip">
  Incluya el objeto de tiempo de ejecución que incluye runtimeType, runtimeTypeVersion y scriptLanguage para [actualizar un monitor](#upgrade-monitor-runtime) para usar un tiempo de ejecución más nuevo. Incluya este objeto y establezca estos atributos en una cadena vacía para degradar a un tiempo de ejecución legacy . No incluya este objeto ni estos atributos para continuar usando un tiempo de ejecución legacy .
</Callout>

<CollapserGroup>
  <Collapser
    id="update-ping"
    title="Actualizar un monitor de ping"
  >
    Utilice esto para actualizar su monitor de ping:

    ```
    mutation {
      syntheticsUpdateSimpleMonitor (
        guid: "ENTITY_GUID", 
        monitor: {
          locations: {
            public: ["LOCATION_1", "LOCATION_2"]
          },  
          name: "YOUR_MONITOR_NAME", 
          period: PERIOD, 
          status: STATUS, 
          uri: "MONITORED_URI", 
          advancedOptions: {
            customHeaders: {
              name: "HEADER_NAME", 
              value: "HEADER_VALUE"
            }, 
            redirectIsFailure: REDIRECT_IS_FAILURE, 
            responseValidationText: "VALIDATION_TEXT", 
            shouldBypassHeadRequest: BYPASS_HEAD_REQUEST, 
            useTlsValidation: TLS_VALIDATION
          }, 
          apdexTarget: APDEX_TARGET
        }
      ) {
        errors {
          description
          type
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="update-simple-browser"
    title="Actualizar un monitor browser simple"
  >
    Para actualizar un monitor browser simple (incluida la capacidad de actualizar la versión en tiempo de ejecución), use esto:

    ```
    mutation {
        syntheticsUpdateSimpleBrowserMonitor (
          guid: ENTITY_GUID, 
          monitor: {
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              }, 
            name: "YOUR_MONITOR_NAME", 
            period: PERIOD, 
            runtime: {
              runtimeType: "RUNTIME_TYPE",
              runtimeTypeVersion: "RUNTIME_TYPE_VERSION",
              scriptLanguage: "SCRIPT_LANGUAGE"
            }
            status: STATUS, 
            uri: "MONITORED_URI", 
            advancedOptions: {
              customHeaders: {
                name: "HEADER_NAME", 
                value: "HEADER_VALUE"
              }, 
              enableScreenshotOnFailureAndScript: ENABLE_SCREENSHOT, 
              responseValidationText: "VALIDATION_TEXT", 
              useTlsValidation: TLS_VALIDATION
            }, 
            apdexTarget: APDEX_TARGET
          ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="update-scripted-browser"
    title="Actualizar un monitor de navegador con script"
  >
    Para actualizar un script de monitor de browser con (incluida la capacidad de actualizar la versión en tiempo de ejecución), use esto:

    ```
    mutation {
        syntheticsUpdateScriptBrowserMonitor (
          guid: ENTITY_GUID, 
          monitor: { 
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              }, 
            name: "MONITOR_NAME", 
            period: PERIOD,
            runtime: {
              runtimeType: "RUNTIME_TYPE",
              runtimeTypeVersion: "RUNTIME_TYPE_VERSION",
              scriptLanguage: "SCRIPT_LANGUAGE"
            }
            script: "SCRIPT_CONTENT", 
            status: STATUS, 
            advancedOptions: {
              enableScreenshotOnFailureAndScript: ENABLE_SCREENSHOT
            }, 
            apdexTarget: APDEX_TARGET
          }
        ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="update-API-test"
    title="Actualizar un monitor de prueba API"
  >
    Para actualizar un monitor API con secuencia de comandos (incluida la capacidad de actualizar la versión en tiempo de ejecución), use esto:

    ```
    mutation {
        syntheticsUpdateScriptApiMonitor (
          guid: ENTITY_GUID, 
          monitor: {
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              }, 
            name: "YOUR_MONITOR_NAME", 
            period: PERIOD,
            runtime: {
              runtimeType: "RUNTIME_TYPE",
              runtimeTypeVersion: "RUNTIME_TYPE_VERSION",
              scriptLanguage: "SCRIPT_LANGUAGE"
            }
            script: "SCRIPT_CONTENT", 
            status: STATUS, 
            apdexTarget: APDEX_TARGET
          }
        ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="update-step"
    title="Actualizar un monitor de pasos"
  >
    Utilice esto para actualizar un monitor de pasos:

    ```
    mutation {
      syntheticsCreateStepMonitor (
        accountId: NR_ACCOUNT_ID, 
        monitor: {
          locations: {
            public: ["LOCATION_1", "LOCATION_2"]
            },  
          name: "MONITOR_NAME", 
          period: PERIOD, 
          status: STATUS, 
          steps: [{
            ordinal: 0, 
            type: NAVIGATE, 
            values: ["MONITORED_URI"],["USER_AGENT"]
            },{
            ordinal: STEP_NUMBER,
            type: STEP_TYPE,
            values: ["VALUE_1","VALUE_2"]
          }]
          advancedOptions: {
            enableScreenshotOnFailureAndScript: ENABLE_SCREENSHOT
          }, 
          apdexTarget: APDEX_TARGET
        }
      ) {
          errors {
            description
            type
          }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="update-certificate-check"
    title="Actualizar un monitor de verificación de certificados"
  >
    Utilice esto para actualizar un monitor de verificación de certificados:

    ```
    mutation {
        syntheticsUpdateCertCheckMonitor (
          guid: ENTITY_GUID, 
          monitor: {
            domain: "DOMAIN", 
            locations: {
              public: ["LOCATION_1", "LOCATION_2"]
              },
            name: "YOUR_MONITOR_NAME", 
            numberDaysToFailBeforeCertExpires: DAYS_UNTIL_EXPIRATION, 
            period: PERIOD, 
            status: STATUS, 
            apdexTarget: APDEX_TARGET
          }
        ) {
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>

  <Collapser
    id="update-broken-links"
    title="Actualizar un monitor de enlaces rotos"
  >
    Utilice esto para actualizar un monitor de enlaces rotos:

    ```
    mutation {
      syntheticsUpdateBrokenLinksMonitor (
        guid: ENTITY_GUID, 
        monitor: {
          locations: {
            public: ["LOCATION_1", "LOCATION_2"]
            }, 
          name: "YOUR_MONITOR_NAME", 
          period: PERIOD, 
          status: STATUS, 
          apdexTarget: APDEX_TARGET, 
          uri: "MONITOR_URI", 
          tags: {
            key: "YOUR_TAG_NAME", 
            values: "TAG_VALUE"
            }
          }
        ) {
          errors {
            description
            type
          }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="upgrade-monitor-runtime"
    title="Actualizar el tiempo de ejecución de un monitor"
  >
    Puede utilizar el siguiente ejemplo para actualizar un browser simple, una API con secuencia de comandos o monitorear el navegador con una secuencia de comandos a los nuevos tiempos de ejecución de Chrome 100+ o Node.js 16.10. El siguiente ejemplo actualiza un script de monitor de browser con al nuevo tiempo de ejecución desde el tiempo de ejecución legacy .

    * Para actualizar un monitor browser simple usando el siguiente ejemplo, cambie la mutación a `syntheticsUpdateSimpleBrowserMonitor` en lugar de `syntheticsUpdateScriptBrowserMonitor`.
    * Para actualizar un monitor API con secuencia de comandos utilizando el siguiente ejemplo, cambie la mutación a `syntheticsUpdateScriptApiMonitor` en lugar de `syntheticsUpdateScriptBrowserMonitor`.

      Consulte [los campos opcionales](#optional-fields) para obtener detalles adicionales sobre la configuración del tiempo de ejecución.

      ```
      mutation {
        syntheticsUpdateScriptBrowserMonitor ( 
          guid: "<ENTITY_GUID>", 
          monitor: {
            runtime: {
              runtimeType: "RUNTIME_TYPE", 
              runtimeTypeVersion: "RUNTIME_TYPE_VERSION", 
              scriptLanguage: "SCRIPT_LANGUAGE"
              }
            }
          ) {
          errors {
            description
            type
          }
        }
      }
      ```
  </Collapser>
</CollapserGroup>

## Eliminar un monitor Sintético [#delete-monitor]

Utilice estos scripts para eliminar su monitor:

<CollapserGroup>
  <Collapser
    id="delete-monitor"
    title="Eliminar monitor"
  >
    Elimine un monitor utilizando el GUID de la entidad del monitor.

    ```
    mutation {
      syntheticsDeleteMonitor (
        guid: "ENTITY_GUID"
        ) {
        deletedGuid
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Gestiona tu ubicación privada [#private-locations]

Una [ubicación privada](/docs/synthetics/synthetic-monitoring/private-locations/private-locations-overview-monitor-internal-sites-add-new-locations) le permite monitorear la aplicación detrás de su firewall. Cuando creas una ubicación privada, instalas y configuras minion privado para ejecutar el monitor asignado a esa ubicación privada.

<CollapserGroup>
  <Collapser
    id="private-location"
    title="Crear una ubicación privada"
  >
    ```
    mutation{
      syntheticsCreatePrivateLocation (
        accountId: NR_ACCOUNT_ID,
        name: "PrivateLocationName",
        description: "Optional description",
        verifiedScriptExecution: false
      ) {
        guid
        errors {
          description
          type
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="private-location"
    title="Actualizar una ubicación privada"
  >
    ```
    mutation {
      syntheticsUpdatePrivateLocation (
        guid: YOUR_ENTITY_GUID,     
        description: "EnterYourDescription", 
        verifiedScriptExecution: true
      ) {
      description
      verifiedScriptExecution
      errors {
        description
        type
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="delete-private locations"
    title="Eliminar una ubicación privada"
  >
    ```
    mutation {
      syntheticsDeletePrivateLocation (
        guid: YOUR_ENTITY_GUID
        ) {
        errors {
          description
          type
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="purge-private-location"
    title="Limpiar una cola de trabajos de una ubicación privada"
  >
    Si necesita eliminar un trabajo atrasado difícil de manejar, utilice esto:

    ```
    mutation {
      syntheticsPurgePrivateLocationQueue (
        guid: YOUR_ENTITY_GUID
        ) {
        errors {
          description
          type
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Administre sus credenciales seguras [#secure-credentials]

Utilice [credenciales seguras](/docs/synthetics/synthetic-monitoring/using-monitors/store-secure-credentials-scripted-browsers-api-tests) al almacenar, proteger y administrar de forma centralizada la información protegida utilizada por su monitor, como contraseñas, clave de API o certificados codificados. El uso de NerdGraph le permite cambiar mediante programación los valores de sus credenciales seguras si necesita restablecer alguna credencial por algún motivo.

<CollapserGroup>
  <Collapser
    id="secure-credential"
    title="Crear una credencial segura"
  >
    ```
    mutation {
      syntheticsCreateSecureCredential (
        accountId: YOUR_ENTITY_GUID, 
        description: "YourOptionalDescription", 
        key: SECURE_CREDENTIAL_NAME, 
        value: SECURE_CREDENTIAL_VALUE 
        ) {
        errors {
          description
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="update-secure"
    title="Actualizar una credencial segura"
  >
    ```
    mutation {
      syntheticsUpdateSecureCredential (
        accountId: YOUR_ACCOUNT_ID, 
        description: "YourOptionalDescription", 
        key: SECURE_CREDENTIAL_NAME, 
        value: SECURE_CREDENTIAL_VALUE) {
        createdAt
        lastUpdate
        errors {
          description
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="secure-credential"
    title="Eliminar una credencial segura"
  >
    ```
    mutation {
      syntheticsDeleteSecureCredential (
        accountId: YOUR_ACCOUNT_ID, 
        key: SECURE_CREDENTIAL_NAME
        ) {
        errors {
          description
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Gestiona el tiempo de inactividad de tu monitor [#monitor-downtimes]

Monitor tiempo de inactividad te permite especificar horas en las que tu Sintético debe dejar de funcionar. Hemos proporcionado diferentes fragmentos que demuestran cómo programar el tiempo de inactividad del monitor para su Sintético. Debe actualizar estos fragmentos para especificar la zona horaria, las horas de inicio y de finalización. Para obtener más información sobre cuándo puede programar el tiempo de inactividad del monitor, consulte nuestro documento [Deshabilitar el monitoreo durante los horarios de mantenimiento programados](/docs/synthetics/synthetic-monitoring/using-monitors/monitor-downtimes-disable-monitoring-during-scheduled-maintenance-times/). Para encontrar valores de zona horaria, consulte [la base de datos tz de zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Por ejemplo, América/Los Ángeles usaría la abreviatura PDT.

<CollapserGroup>
  <Collapser
    id="create-once-downtime"
    title="Cree un tiempo de inactividad del monitor que se ejecute una vez"
  >
    ```
    mutation {
      syntheticsCreateOnceMonitorDowntime (
        accountId: NR_ACCOUNT_ID,
        name: "MonitorDowntimeName",
        monitorGuids: ["OptionalMonitorEntityGuid", "OptionalMonitorEntityGuid"],
        timezone: "Timezone",
        startTime: "yyyy-MM-ddTHH:mm:ss",
        endTime: "yyyy-MM-ddTHH:mm:ss"
      ) {
        guid,
        accountId,
        name,
        monitorGuids,
        timezone,
        startTime,
        endTime
      }
    }
    ```
  </Collapser>

  <Collapser
    id="create-daily-downtime"
    title="Cree un tiempo de inactividad del monitor que se ejecute diariamente"
  >
    ```
    mutation {
      syntheticsCreateDailyMonitorDowntime (
        accountId: NR_ACCOUNT_ID,
        name: "MonitorDowntimeName",
        monitorGuids: ["OptionalMonitorEntityGuid", "AnotherOptionalMonitorEntityGuid"],
        timezone: "Timezone",
        startTime: "yyyy-MM-ddTHH:mm:ss",
        endTime: "yyyy-MM-ddTHH:mm:ss",
        endRepeat: {
          onDate: "yyyy-MM-ddTHH:mm:ss",
          onRepeat: Int
        }
      ) {
        guid,
        accountId,
        name,
        monitorGuids,
        timezone,
        startTime,
        endTime,
        endRepeat {
          onDate,
          onRepeat
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="create-weekly-downtime"
    title="Cree un tiempo de inactividad del monitor que se ejecute semanalmente"
  >
    ```
    mutation {
      syntheticsCreateWeeklyMonitorDowntime (
        accountId: NR_ACCOUNT_ID,
        name: "MonitorDowntimeName",
        monitorGuids: ["OptionalMonitorEntityGuid", "AnotherOptionalMonitorEntityGuid"],
        timezone: "Timezone",
        startTime: "yyyy-MM-ddTHH:mm:ss",
        endTime: "yyyy-MM-ddTHH:mm:ss",
        endRepeat: {
          onDate: "yyyy-MM-ddTHH:mm:ss",
          onRepeat: Int
        },
        maintenanceDays: [WeekDaysEnums]
      ) {
        guid,
        accountId,
        name,
        monitorGuids,
        timezone,
        startTime,
        endTime,
        endRepeat {
          onDate,
          onRepeat
        },
        maintenanceDays
      }
    }
    ```
  </Collapser>

  <Collapser
    id="create-monthly-downtime"
    title="Cree un tiempo de inactividad del monitor que se ejecute mensualmente"
  >
    ```
    mutation {
      syntheticsCreateMonthlyMonitorDowntime (
        accountId: NR_ACCOUNT_ID,
        name: "MonitorDowntimeName",
        monitorGuids: ["OptionalMonitorEntityGuid", "AnotherOptionalMonitorEntityGuid"],
        timezone: "Timezone",
        startTime: "yyyy-MM-ddTHH:mm:ss",
        endTime: "yyyy-MM-ddTHH:mm:ss",
        endRepeat: {
          onDate: "yyyy-MM-ddTHH:mm:ss",
          onRepeat: Int
        },
        frequency: {
          daysOfWeek: {
            weekDay: WeekDaysEnum,
            ordinalDayOfMonth: DayOfMonthOrdinal
          },
          daysOfMonth: [Int]
        }
      ) {
        guid,
        accountId,
        name,
        monitorGuids,
        timezone,
        startTime,
        endTime,
        endRepeat {
          onDate,
          onRepeat
        },
        frequency {
          daysOfWeek {
            weekDay,
            ordinalDayOfMonth
          },
          daysOfMonth
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="update-downtime"
    title="Actualizar un tiempo de inactividad del monitor"
  >
    ```
    mutation {
      syntheticsEditMonitorDowntime (
        guid: "MonitorDowntimeEntityGuid",
        name: "MONITOR_DOWNTIME_NAME",
        monitorGuids: ["OptionalMonitorEntityGuid", "AnotherOptionalMonitorEntityGuid"],
        once: {
          timezone: "Timezone",
          startTime: "yyyy-MM-ddTHH:mm:ss",
          endTime: "yyyy-MM-ddTHH:mm:ss"
        },
        daily: {
          timezone: "Timezone",
          startTime: "yyyy-MM-ddTHH:mm:ss",
          endTime: "yyyy-MM-ddTHH:mm:ss",
          endRepeat: {
            onDate: "yyyy-MM-ddTHH:mm:ss",
            onRepeat: Int
          }
        },
        weekly: {
          timezone: "Timezone",
          startTime: "yyyy-MM-ddTHH:mm:ss",
          endTime: "yyyy-MM-ddTHH:mm:ss",
          endRepeat: {
            onDate: "yyyy-MM-ddTHH:mm:ss",
            onRepeat: Int
          },
          maintenanceDays: [WeekDaysEnums]
        },
        monthly: {
          timezone: "Timezone",
          startTime: "yyyy-MM-ddTHH:mm:ss",
          endTime: "yyyy-MM-ddTHH:mm:ss",
          endRepeat: {
            onDate: "yyyy-MM-ddTHH:mm:ss",
            onRepeat: Int
          },
          frequency: {
            daysOfWeek: {
              weekDay: WeekDaysEnum,
              ordinalDayOfMonth: DayOfMonthOrdinal
          },
          daysOfMonth: [Int]
        }
      ) {
        guid,
        accountId,
        name,
        monitorGuids,
        timezone,
        startTime,
        endTime,
        endRepeat {
          onDate,
          onRepeat
        },
        maintenanceDays,
        frequency {
          daysOfWeek {
            weekDay,
            ordinalDayOfMonth
          },
          daysOfMonth
        }
      }
    }
    ```
  </Collapser>

  <Collapser
    id="delete-downtime"
    title="Eliminar un tiempo de inactividad del monitor"
  >
    ```
    mutation {
      syntheticsDeleteMonitorDowntime (
        guid: DOWNTIME_ENTITY_GUID
      ) {
        guid
      }
    }
    ```
  </Collapser>
</CollapserGroup>
