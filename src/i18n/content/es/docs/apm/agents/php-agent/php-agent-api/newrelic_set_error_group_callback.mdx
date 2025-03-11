---
title: newrelic_set_error_group_callback (API del agente PHP)
type: apiDoc
shortDescription: Este método permite al usuario definir una función de devolución de llamada personalizada para generar nombres de grupos de errores.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: Use this API to register a callback which returns a custom error group name.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

## Sintaxis

```php
newrelic_set_error_group_callback($callback)
```

Agrupe los errores con su propia función de devolución de llamada de huellas dactilares personalizada.

## Requisitos

Versión del agente 10.12 o superior.

## Descripción

Esta API permite al usuario registrar una función de devolución de llamada personalizada con el agente PHP que se llamará cuando la aplicación encuentre un error.

La devolución de llamada proporcionará dos matrices PHP del agente: una que contiene datos de transacción y otra que contiene datos de error.

Utilizando la información de contexto proporcionada, la devolución de llamada debe devolver una cadena no vacía basada en la lógica definida por el usuario que servirá como el nombre del grupo de errores que se muestra en la de usuario de la Errors Inbox UI.

<Callout variant="important">
  * Cuando hay varias llamadas a esta función en una sola transacción, el agente PHP retiene la devolución de llamada únicamente de la última llamada.
  * Las devoluciones de llamada se registran por solicitud. Esta API debe llamarse en una ruta de código que se garantice que se ejecutará para cada solicitud, o no se invocará la devolución de llamada.
  * Se recomienda encarecidamente mantener la función de devolución de llamada lo más mínima posible. La devolución de llamadas que consume mucha CPU (como llamadas de base de datos) u otra lógica compleja afectará el rendimiento de su aplicación.
</Callout>

## Parámetros

Esta API acepta una única devolución de llamada de tipo función como argumento. La devolución de llamada proporcionada debe aceptar 2 parámetros.

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro API
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback` (_función_)
      </td>

      <td>
        Requerido. Proporcione una función de devolución de llamada que se registrará con el agente PHP.
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro de devolución de llamada
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$transaction_data` (_matriz_)
      </td>

      <td>
        Requerido. Una matriz de datos de transacciones proporcionada a su devolución de llamada por el agente PHP.
      </td>
    </tr>

    <tr>
      <td>
        `$error_data` (_matriz_)
      </td>

      <td>
        Requerido. Una matriz de datos de error proporcionados a su devolución de llamada por el agente PHP.
      </td>
    </tr>
  </tbody>
</table>

### Pares principales de valor de matriz

#### `$transaction_data` - Datos de transacción del agente PHP proporcionados a su devolución de llamada

<table>
  <thead>
    <tr>
      <th width="25%">
        Llave
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "request_uri"
      </td>

      <td>
        (_cadena_) Solicitar URI
      </td>
    </tr>

    <tr>
      <td>
        "camino"
      </td>

      <td>
        (_cadena_) Ruta de archivo
      </td>
    </tr>

    <tr>
      <td>
        "método"
      </td>

      <td>
        (_cadena_) Método HTTP (`GET`, `POST`, etc.)
      </td>
    </tr>

    <tr>
      <td>
        "status_code"
      </td>

      <td>
        (_int_) Código de estado HTTP (`200`, `404`, etc.)
      </td>
    </tr>
  </tbody>
</table>

#### `$error_data` - Datos de error del agente PHP proporcionados a su devolución de llamada

<table>
  <thead>
    <tr>
      <th width="25%">
        Llave
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "clase"
      </td>

      <td>
        (_cadena_) Nombre de clase
      </td>
    </tr>

    <tr>
      <td>
        "mensaje"
      </td>

      <td>
        (_cadena_) mensaje de error
      </td>
    </tr>

    <tr>
      <td>
        "archivo"
      </td>

      <td>
        (_cadena_) Ruta de archivo
      </td>
    </tr>

    <tr>
      <td>
        "pila"
      </td>

      <td>
        (_cadena_) Error JSON traza traza
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  * No se garantiza que todas las claves contengan valores. Esto depende en gran medida de la aplicación del usuario y de la naturaleza del error.
  * Las claves de matriz siempre se configurarán independientemente de si contienen valores vacíos o no.
</Callout>

## Valores de retorno

La API devuelve `true` si la devolución de llamada se registra correctamente; en caso contrario, `false`.

## Ejemplos

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
  $callback = function(array $transaction_data, array $error_data)
  {
      $fingerprint = "";

      //
      // Add custom code to parse array data
      //

      // Example code
      if ($error_data["klass"] == "E_USER_ERROR") {
        $fingerprint = "USER ERROR";
      };

      return $fingerprint;    // Non-empty string error group name
  };

  newrelic_set_error_group_callback($callback);
};
```
