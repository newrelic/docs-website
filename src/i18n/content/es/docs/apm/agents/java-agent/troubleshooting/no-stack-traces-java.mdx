---
title: Sin rastreo del stack (Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: Troubleshooting steps for situations when stack traces are missing for error traces with your New Relic Java app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Dependiendo de la situación, es posible que encuentre [una traza de error](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) en la UI de APM que no incluye el rastreo del stack para su aplicación Java.

## Solución

Dependiendo de la situación, siga estos procedimientos de resolución de problemas.

<CollapserGroup>
  <Collapser
    id="repeated-errors"
    title="Sin rastreo del stack para errores que se repiten rápidamente"
  >
    Cuando se produce un error en una secuencia que se repite rápidamente, el compilador de Java puede optimizar el rastreo del stack para mejorar el rendimiento. Para deshabilitar esta optimización: en sus indicadores JVM, incluya:

    ```
    -XX:-OmitStackTraceInFastThrow
    ```
  </Collapser>

  <Collapser
    id="500-errors"
    title="No hay rastreo del stack para errores 500"
  >
    Este es [un comportamiento normal](#cause) de cómo el agente de Java maneja los errores 500. Para forzar que se informe el rastreo del stack, llame a la API Java de New Relic desde su propio código. La ejecución del método `NewRelic.noticeError (Throwable t)` provocará que se informe un error junto con el seguimiento de la stack representado por `Throwable`. Para obtener más información sobre este método y sus sobrecargas, consulte [la API agente de Java de New Relic en GitHub.](https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-)
  </Collapser>
</CollapserGroup>

## Causa

Devolver un error `500` significa que el propio servidor de la aplicación detectó un error y estableció el código de estado HTTPS `500` .

* Si la condición de error fue detectada y manejada por la lógica de la aplicación, no había ningún objeto de excepción y, por lo tanto, no había stack.
* Si hubo un objeto de excepción en algún momento, pero fue manejado internamente por el código de la aplicación que estableció el estado `500` en la respuesta, entonces la excepción nunca fue visible para el agente de Java. No hay ninguna stack disponible para que el agente de Java la informe.

Cuando se informa el rastreo del stack, el error se debe a una excepción que no fue detectada ni manejada dentro de la lógica del servidor de la aplicación. El agente de Java ve la excepción no controlada durante una transacción de monitor, por lo que informa el rastreo de la pila.

Sin embargo, no aparece ningún rastreo del stack para los errores `500` porque el servidor de la aplicación maneja los errores y luego configura el código de estado. El código de la aplicación en sí no conserva ningún rastreo del stack.
