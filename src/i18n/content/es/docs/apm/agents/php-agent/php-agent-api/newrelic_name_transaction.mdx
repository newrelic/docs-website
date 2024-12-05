---
title: newrelic_name_transaction (API del agente PHP)
type: apiDoc
shortDescription: Establezca un nombre personalizado para la transacción actual.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to define a custom name for a particular transaction.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_name_transaction(string $name)
```

Establezca un nombre personalizado para la transacción actual.

## Requisitos

Compatible con todas las versiones de agente.

Debe llamarse dentro de una [transacción](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction).

## Descripción

Establece el nombre de la transacción con el nombre especificado. Esto puede resultar útil si ha implementado su propio esquema de despacho y desea nombrar las transacciones según su propósito. Llame a esta función lo antes posible.

<Callout variant="important">
  No utilice corchetes `[suffix]` al final del nombre de su transacción. New Relic elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
</Callout>

Valor único como URL, títulos de página, valores hexadecimales, ID de sesión y valores identificables de forma única no deben utilizarse para nombrar su transacción. En su lugar, agregue esos datos a la transacción como un parámetro personalizado con la llamada [`newrelic_add_custom_parameter()`](/docs/agents/php-agent/configuration/php-agent-api#api-custom-param) .

<Callout variant="important">
  No cree más de 1000 nombres de transacciones únicos (por ejemplo, evite nombrar por URL si es posible). Esto hará que sus gráficos sean menos útiles y es posible que se encuentre con los límites que New Relic establece en la cantidad de nombres de transacciones únicos por cuenta. También puede ralentizar el rendimiento de su aplicación.
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
        `$name`

        _cadena_
      </td>

      <td>
        Requerido. Nombre de la transacción.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `true` si el nombre de la transacción se cambió correctamente. Si se devuelve `false`, consulte el log del agente para obtener más información.

## Ejemplos

### Denominación general de transacciones [#basic-example]

Tienes `/product/123` y `/product/234`. Si genera un nombre de transacción separado para cada uno, New Relic almacenará información separada para estos dos nombres de transacción. En su lugar, almacene la transacción como `/product/*` o use algo significativo sobre el código mismo para nombrar la transacción, como `/Product/view`:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_name_transaction("/Product/view/");
    }
    // ...
}
```

### Nomenclatura framework MVC [#mvc-example]

En el marco MVC, una buena opción es utilizar la llamada `newrelic_name_transaction()` donde se enruta su solicitud y nombrar su transacción con un formato Controlador/Acción.
