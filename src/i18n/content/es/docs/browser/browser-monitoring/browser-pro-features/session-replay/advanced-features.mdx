---
title: Característica avanzada
metaDescription: 'Manually record session replays, disable automatic session replay tracking and use nerd graph to configure replay settings.'
freshnessValidatedDate: '2024-12-19T00:00:00.000Z'
translationType: machine
---

## Grabar manualmente la repetición de la sesión [#manual-replays]

Si es necesario, puede `force` mediante programación una Session Replay para iniciar o detener la grabación empleando métodos API . A continuación se muestran algunos casos de uso:

* Permitir que el usuario opte por la grabación de interacciones. Por ejemplo, si aparece una ventana emergente que pregunta &quot;¿Permitir que se grabe esta sesión para analizar el rendimiento?&quot; y un usuario consiente:

  1. Llama a `newrelic.recordReplay()` para iniciar la grabación.
  2. Una vez completada la sesión o retirado el consentimiento, emplee `newrelic.pauseReplay()` para dejar de capturar datos.

* Grabe sesiones según criterios específicos, como:

  * Comience a grabar solo sesiones en URL específicas, como el flujo de pago de un producto.
  * Detenga la grabación de páginas confidenciales como `/billing` o `/health-records`.

Consulte la documentación de la API para obtener instrucciones:

* [`newrelic.recordReplay`](/docs/browser/new-relic-browser/browser-apis/recordReplay/)
* [`newrelic.pauseReplay`](/docs/browser/new-relic-browser/browser-apis/pauseReplay/)

## Deshabilitar el seguimiento automático Session Replay [#auto-replays]

Puede evitar que la reproducción de sesión se inicie automáticamente, incluso cuando se muestrea, estableciendo la opción de configuración API `autoStart` en `false`. Esto resulta útil en escenarios en los que es necesario priorizar acciones específicas sobre la ejemplificación automática. Por ejemplo, es posible que no desee que Session Replay se ejecute automáticamente en páginas confidenciales, como las que cumplen con HIPAA. En tales casos, puede emplear la API `.start()` para activar manualmente la característica de reproducción luego de obtener el consentimiento del usuario (y su aplicación llama a `.start()`).

La configuración `autoStart: false` indica al agente que posponga su inicialización hasta que se lo llame explícitamente mediante `.start()`. Esto garantiza que no se creará ninguna repetición de sesión, incluso si el backend toma muestras de su aplicación para grabar.

<Callout variant="important">
  Llamar a `.start()` no garantiza que se grabará una repetición de la sesión. Simplemente retrasa la importación del módulo y la evaluación de los resultados de la ejemplificación hasta este punto. Si necesita forzar una grabación, consulte [Grabar manualmente la repetición de la sesión](#manual-replays).
</Callout>

Para comenzar a emplear esta API, consulte [`newrelic.start`](/docs/browser/new-relic-browser/browser-apis/start/).

## Utilice Nerdgraph para configurar los ajustes de reproducción [#nerdgraph-mutation]

Puede configurar los ajustes Session Replay usando nuestra [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) en lugar de usar la UI. Este método es útil si necesita realizar cambios masivos, como aplicar frecuencias de muestreo a múltiples entidades browser .

Aquí hay un ejemplo de mutación y variables para crear una nueva aplicación browser con la configuración predeterminada:

<table>
  <thead>
    <tr>
      <th>
        Mutación
      </th>

      <th>
        Variables
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ```graphql
        mutation SessionReplayConfigUpdate($guid: EntityGuid!, $settings: AgentApplicationSettingsUpdateInput!) {
          agentApplicationSettingsUpdate(guid: $guid, settings: $settings) {
            browserSettings {
              sessionReplay {
                blockSelector
                errorSamplingRate
                maskTextSelector
                enabled
                collectFonts
                inlineImages
                inlineStylesheet
                samplingRate
                maskAllInputs
                maskInputOptions {
                  color
                  date
                  datetimeLocal
                  email
                  month
                  number
                  range
                  search
                  select
                  tel
                  text
                  textArea
                  time
                  url
                  week
                }
              }
            }
            errors {
              field
              errorClass
              description
            }
          }
        }
        ```
      </td>

      <td>
        ```json
        {
          "sessionReplay": {
            "enabled": true,
            "collectFonts": true,
            "blockSelector": ".private-fields",
            "maskTextSelector": "*",
            "inlineStylesheet": false,
            "maskAllInputs": true,
            "maskInputOptions": {
              "color": true,
              "date": true,
              "textArea": true
            },
            "samplingRate": 9.99,
            "errorSamplingRate": 1.11
          }
        }
        ```
      </td>
    </tr>
  </tbody>
</table>