---
title: newrelic_start_transaction (API del agente PHP)
type: apiDoc
shortDescription: 'Inicia una nueva transacción, generalmente después de finalizarla manualmente.'
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to manually start a transaction. Useful for job queue processing.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_start_transaction(string $appname[, string $license])
```

Inicia una nueva transacción, generalmente después de finalizarla manualmente.

## Requisitos

Versión del agente [3.0.5.95](/docs/release-notes/agent-release-notes/php-release-notes/php-agent) o superior.

## Descripción

Inicie una nueva transacción manualmente. Generalmente se usa después de finalizar manualmente una transacción con `newrelic_end_transaction()`, por ejemplo, al separar tareas en un administrador de colas de trabajos. Cuando se instrumenta esta nueva transacción, el agente realiza las mismas operaciones que cuando se inició el script por primera vez.

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
        `$appname`

        _cadena_
      </td>

      <td>
        Requerido. El [nombre de la aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application) para asociar con los datos de esta transacción. Utiliza el mismo formato que [`newrelic.appname`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-appname) y puede establecer varios nombres de aplicaciones separándolos con un punto y coma `;`.

        Si bien esta opción es obligatoria, puedes leer el nombre de la aplicación desde `newrelic.ini` con `ini_get("newrelic.appname")`.
      </td>
    </tr>

    <tr>
      <td>
        `$license`

        _cadena_
      </td>

      <td>
        Opcional. El valor predeterminado es el <InlinePopover type="licenseKey"/>establecido en el archivo `newrelic.ini` del agente New Relic.

        Proporcione un <InlinePopover type="licenseKey"/>diferente si desea que la transacción se informe a una cuenta New Relic diferente. Si se configura, esta licencia reemplazará todas las licencias predeterminadas globales y por directorio configuradas en archivos INI.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Esta función devolverá `true` si la transacción se inició correctamente.

## Ejemplos

### Detener una transacción y luego iniciar otra [#stop-and-start]

Para los administradores de colas de tareas, puede usar `newrelic_end_transaction()` y `newrelic_start_transaction()` juntos para separar manualmente las transacciones. Este ejemplo utiliza `ini_get` para leer el nombre de la aplicación del archivo de configuración.

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

### Inicie una nueva transacción con una nueva clave de licencia [#start-license-key]

Este ejemplo especifica manualmente el nombre de la aplicación y el <InlinePopover type="licenseKey"/>:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_start_transaction("App1", "01234567890abcde01234567890abcde01234567890");
    }
    ...
}
```
