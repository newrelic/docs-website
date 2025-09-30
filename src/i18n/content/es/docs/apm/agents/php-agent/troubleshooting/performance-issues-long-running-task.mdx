---
title: Alta carga de memoria en tareas PHP de larga ejecución
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Using the PHP Agent with an application that has long running tasks can cause high memory usage.
freshnessValidatedDate: never
translationType: machine
---

## Problema

El uso del agente PHP con una aplicación que tiene tareas de ejecución prolongada provoca un uso elevado de memoria.

## Solución

Para admitir rastreo distribuido, el agente PHP necesita mantener una cantidad significativa de datos de llamadas a funciones en tiempo de ejecución para que los intervalos se puedan muestrear con la mayor precisión posible. Para transacciones web y transacciones en segundo plano más cortas, esto generalmente es imperceptible, tanto en términos de CPU como de sobrecarga de memoria. Sin embargo, para transacciones en segundo plano más largas, el aumento de la sobrecarga de memoria puede llegar a ser notable, incluso hasta el punto de provocar una condición de falta de memoria.

Si la transacción afectada es una que realiza una serie de procesos repetitivos, como un consumidor de cola de mensajes o un bucle con múltiples llamadas externas, es posible que desee instrumentar manualmente cada iteración como una transacción separada. Al hacer esto, la memoria utilizada se liberará después de cada transacción.

Iniciar y detener una transacción manualmente tiene los siguientes beneficios:

* Permite que todas las características del agente PHP permanezcan habilitadas.
* Proporciona datos más detallados sobre cómo está funcionando el proceso.

Para implementar esto, primero ignore la transacción automática inicial con [`newrelic_end_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_end_transaction/) y luego use [`newrelic_start_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_start_transaction/) y [`newrelic_end_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_end_transaction/) para instrumentar cada transacción por turno.

El siguiente ejemplo de código muestra cómo hacer esto. En el código real, reemplazaría la estructura `while()` con una declaración de bucle PHP adecuada e insertaría la lógica de la función en lugar de las elipses.

```php
function example_long_task() {
    // Ensure PHP agent is available and
    // stop recording the current transaction
    if (extension_loaded('newrelic')) { 
        newrelic_end_transaction(); 
    }

    // replace next while statement with actual loop
    while (<condition>) {
        if (extension_loaded('newrelic')) { 
            // start recording a new transaction
            newrelic_start_transaction(ini_get("newrelic.appname")); transaction
        }

        // your function logic starts
        ...
        ...
        // your function logic stops

        // end transaction for current loop
        if (extension_loaded('newrelic')) { 
            newrelic_end_transaction(); 
        }
    }
}
```
