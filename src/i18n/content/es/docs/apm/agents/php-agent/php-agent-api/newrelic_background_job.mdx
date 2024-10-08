---
title: newrelic_background_job (API del agente PHP)
type: apiDoc
shortDescription: Especifique manualmente que una transacción es un trabajo en segundo plano o una transacción web.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: 'New Relic PHP agent API call to define a particular transaction as a background job (for example, for cron jobs).'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_background_job([bool $flag])
```

Especifique manualmente que una transacción es un trabajo en segundo plano o una transacción web.

## Requisitos

Compatible con todas las versiones de agente.

## Descripción

Dígale al agente que trate esta "transacción web como una" transacción no web (la UI de APM separa web y transacción no web, por ejemplo en la [página Transacciones](/docs/apm/applications-menu/monitoring/transactions-page)). Llame lo antes posible. Esto se usa más comúnmente para trabajos cron u otras tareas en segundo plano de larga duración. Sin embargo, esta llamada suele ser innecesaria ya que el agente suele detectar si una transacción es web o no web de forma automática.

También puedes revertir la funcionalidad estableciendo el indicador opcional en `false`, que marca una "transacción no web como una "transacción web.

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
        `$flag`

        _booleano_
      </td>

      <td>
        Opcional. El valor predeterminado es `true`.

        Si `true` o se omite, la transacción actual se marca como un trabajo en segundo plano.

        Si es `false`, la transacción se marca como una transacción web.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Marcar transacción como trabajo en segundo plano [#mark-as-background]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_background_job();
    }
    ...
}
```

### Marcar transacción como transacción web [#mark-as-web]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_background_job(false);
    }
    ...
}
```
