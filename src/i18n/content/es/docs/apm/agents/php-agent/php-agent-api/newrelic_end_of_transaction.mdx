---
title: newrelic_end_of_transaction (API del agente PHP)
type: apiDoc
shortDescription: 'Deje de cronometrar la transacción actual, pero continúe instrumentándola.'
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to stop timing a transaction (but continue instrumenting it). Useful for streamed data.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_end_of_transaction()
```

Deje de cronometrar la transacción actual, pero continúe instrumentándola.

## Requisitos

Compatible con todas las versiones de agente.

## Descripción

Deje de cronometrar la transacción web inmediatamente. Es útil cuando una página finaliza con el código de la aplicación y está a punto de transmitir datos (descarga de archivos, transmisión de audio o video, etc.) y no desea que el tiempo de transmisión cuente como parte del tiempo de ejecución de la transacción. El agente envía datos al daemon al final de la transacción.

Esto es especialmente relevante cuando el tiempo necesario para completar la operación está completamente fuera de los límites de su aplicación. Por ejemplo, un usuario con una conexión muy lenta puede tardar mucho en descargar incluso archivos pequeños, y usted no querrá que ese tiempo de descarga distorsione el tiempo real de transacción.

<Callout variant="tip">
  Compare [`newrelic_end_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_transaction), que finaliza por completo la instrumentación.
</Callout>

## Parámetros

Esta llamada no acepta ningún parámetro.

## Ejemplos

### Detener el cronometraje después de la transmisión de datos \[#ejemplo de transmisión]

```php
function example() { 
    // computational logic
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_end_of_transaction(); // Used to stop recording the transaction after computing for the transaction is complete, typically when streaming data 
    }
    //streaming data
}
```
