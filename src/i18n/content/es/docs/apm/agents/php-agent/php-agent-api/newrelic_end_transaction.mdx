---
title: newrelic_end_transaction (API del agente PHP)
type: apiDoc
shortDescription: Deje de instrumentar la transacción actual inmediatamente.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to stop a transaction immediately. Useful for job queue processing.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_end_transaction([bool $ignore])
```

Deje de instrumentar la transacción actual inmediatamente.

## Requisitos

Versión del agente [3.0.5.95](/docs/release-notes/agent-release-notes/php-release-notes/php-agent) o superior.

## Descripción

Detenga instrumentada la transacción actual inmediatamente y envíe los datos al daemon. Esta llamada simula lo que normalmente hace el agente cuando PHP finaliza la transacción actual. El uso más común de esta llamada es mejorar la instrumentación del script de línea de comando que maneja el procesamiento de la cola de trabajos. Llame a este método al final de un trabajo en particular y luego llame a [`newrelic_start_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_start_transaction) cuando se retire una nueva tarea de la cola.

Normalmente, cuando finalizas una transacción quieres que el agente registre los datos asociados. Sin embargo, también puede descartar los datos configurando `$ignore` en `true`.

<Callout variant="tip">
  Compare [`newrelic_end_of_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_of_transaction), que deja de cronometrar la transacción pero continúa instrumentándola.
</Callout>

## Parámetros

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$ignore`

        _booleano_
      </td>

      <td>
        Opcional. El valor predeterminado es `false`.

        Si `false` o se omite, datos de la transacción <DNT>**is**</DNT> registrada por el daemon.

        Si es `true`, datos de la transacción <DNT>**is not**</DNT> registrada por el daemon.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `true` si la transacción finalizó exitosamente y los datos se enviaron al daemon New Relic.

## Ejemplos

### Detener una transacción y luego iniciar otra [#stop-and-start]

```php
function example() {
    // queuing logic
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_end_transaction(); // stop recording the current transaction
        newrelic_start_transaction(ini_get("newrelic.appname")); // start recording a new transaction
    }
    // more queuing logic
}
```

### Deja de instrumentar por completo [#stop-entirely]

```php
function example() {
    // this code is instrumented
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_end_transaction();
    }
    // this code is ignored
}
```
