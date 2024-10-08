---
title: newrelic_notice_error (API del agente PHP)
type: apiDoc
shortDescription: Utilice estas llamadas para recopilar errores que el agente PHP no recopila automáticamente y para configurar la devolución de llamada para su propio controlador de errores y excepciones.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: Use this call to collect errors that the PHP agent does not collect automatically.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_notice_error(string $message)
newrelic_notice_error(Throwable|Exception $e)
newrelic_notice_error(string $errstr, Throwable|Exception $e)
newrelic_notice_error(int $errno, string $errstr, string $errfile, int $errline, string $errcontext)
```

Utilice estas llamadas para recopilar errores que el agente PHP no recopila automáticamente y para configurar la devolución de llamada para su propio controlador de errores y excepciones.

## Requisitos

Versión del agente 2.6 o superior.

<Callout
  id="version-difference"
  variant="caution"
>
  Si incluye una excepción (`$e`), existen diferencias según la versión de PHP que esté utilizando:
</Callout>

* <DNT>
    **PHP version 5 or lower**
  </DNT>

  : Debe aprobar una clase PHP

  <DNT>
    **Exception**
  </DNT>

  válida.

* <DNT>
    **PHP version 7 or higher**
  </DNT>

  : Debe pasar una interfaz PHP

  <DNT>
    **Throwable**
  </DNT>

  válida.

## Descripción

El agente PHP maneja errores y excepciones de PHP [automáticamente para el marco compatible](/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-mark-expected).

Si desea recopilar errores que no se manejan automáticamente para poder [consultar](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql) esos errores en [New Relic](/docs/insights/use-insights-ui/getting-started/introduction-new-relic-insights) y ver [la traza del error](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors#traces-table), puede usar `newrelic_notice_error`.

Si desea utilizar sus propios controladores de errores y excepciones, puede configurar `newrelic_notice_error` como devolución de llamada.

### Recopilar errores que no se manejan automáticamente [#own-exception-handler]

Para recopilar errores que el agente PHP no maneja automáticamente, como errores que no son de PHP, [agregue esta llamada a la función sobre la que desea informar](#non-php-exceptions):

```php
newrelic_notice_error(Throwable|Exception $e)
```

<Callout variant="important">
  Cuando hay varias llamadas a esta función en una sola transacción, el agente PHP conserva la excepción de la última llamada únicamente.
</Callout>

### Configure la devolución de llamada para su propio controlador de errores y excepciones [#set-callback]

Para usar su propio controlador, utilice estas llamadas para asegurarse de que el agente PHP note los errores y excepciones desde su controlador.

<CollapserGroup>
  <Collapser
    id="set-exception-handler"
    title={<InlineCode>set_exception_handler()</InlineCode>}
  >
    Para [proporcionar `newrelic_notice_error` como devolución de llamada](#custom-exception-handler) para [`set_exception_handler()`](https://secure.php.net/manual/en/function.set-exception-handler.php), utilice lo siguiente:

    ```php
    newrelic_notice_error(Throwable|Exception $e)
    ```
  </Collapser>

  <Collapser
    id="set-error-handler"
    title={<InlineCode>set_error_handler()</InlineCode>}
  >
    Para [proporcionar `newrelic_notice_error` como devolución de llamada](#custom-error-handler-5) para [`set_error_handler()`](https://secure.php.net/set_error_handler), utilice lo siguiente:

    ```php
    newrelic_notice_error(int $errno, string $errstr, string $errfile, int $errline, string $errcontext)
    ```
  </Collapser>
</CollapserGroup>

## Parámetros

Esta función puede manejar un número variable de parámetros. Puede pasar 1 o 5 parámetros, según su caso de uso.

```php
newrelic_notice_error(string $message)
```

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
        `$message`

        _cadena_
      </td>

      <td>
        Requerido. Proporcione un mensaje de error que será significativo para usted cuando aparezca [un error en la traza](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors#traces-table).
      </td>
    </tr>
  </tbody>
</table>

```php
newrelic_notice_error(Throwable|Exception $e)
```

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
        `$e`

        _excepción_
      </td>

      <td>
        Requerido. El valor predeterminado es `null`.

        * El agente usa [`Exception` o `Throwable`](#version-difference) para capturar el marco stack y establecer la clase de error en el nombre de la clase de excepción.
        * Si `null` o se omite, el agente informa una "excepción" en el mismo formato creado por `Exception::__toString`.
      </td>
    </tr>
  </tbody>
</table>

```php
newrelic_notice_error(int $errno, string $errstr, string $errfile, int $errline, string $errcontext)
```

<table width={800}>
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
        `$errno`

        _entero_
      </td>

      <td>
        Requerido. El [nivel predefinido del error](http://php.net/manual/en/errorfunc.constants.php), expresado como un número entero.
      </td>
    </tr>

    <tr>
      <td>
        `$errstr`

        _cadena_
      </td>

      <td>
        Requerido. Proporcione un mensaje de error que será significativo para usted cuando aparezca [un error en la traza](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors#traces-table).
      </td>
    </tr>

    <tr>
      <td>
        `$errfile`

        _cadena_
      </td>

      <td>
        Opcional. El nombre del archivo en el que ocurrió el error.
      </td>
    </tr>

    <tr>
      <td>
        `$errline`

        _entero_
      </td>

      <td>
        Opcional. El número de línea donde ocurrió el error.
      </td>
    </tr>

    <tr>
      <td>
        `$errcontext`

        _cadena_
      </td>

      <td>
        Opcional. Una matriz que apunta a la tabla de símbolos que estaba activa cuando ocurrió el error.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `null` independientemente del resultado.

## Ejemplos

### Recopilar errores que no se manejan automáticamente [#non-php-exceptions]

Realice un seguimiento de los errores que no se informan automáticamente o que no son errores de PHP. En este ejemplo, se envía un error al agente PHP si un usuario desconocido accede a su aplicación.

```php
try {
    // Add your code that may throw an error here.
} catch (UserNotFoundException $e) {
    newrelic_notice_error($e);
    // Handle normally.
}
```

### Informar excepciones desde su propio controlador de excepciones [#custom-exception-handler]

Haga que el agente PHP notifique las excepciones desde su propio controlador de excepciones.

```php
function example_exception_handler($ex) {
    if (extension_loaded('newrelic')) {
        newrelic_notice_error($ex);
    }
    //Add your code here.
}
```

### Informe errores desde su propio controlador de errores (PHP versión 5.6 o superior) [#custom-error-handler-5]

<DNT>**PHP version 5.6 or higher**</DNT>: Haga que el agente PHP note errores desde su propio controlador de errores.

```php
function example_error_handler($errno, $errstr, $errfile = null, $errline = null, $errcontext = null) {
    if (extension_loaded('newrelic')) {
        newrelic_notice_error(...func_get_args());
    }
    //Add your code here.
}
```

### Informe errores desde su propio controlador de errores (PHP versión 5.5 o inferior) [#custom-error-handler-7]

<DNT>**PHP version 5.5 or lower**</DNT>: Haga que el agente PHP note errores desde su propio controlador de errores.

```php
function example_error_handler($errno, $errstr, $errfile = null, $errline = null, $errcontext = null) {
    if (extension_loaded('newrelic')) {
        call_user_func_array('newrelic_notice_error', func_get_args());
    }
    //Add your code here.
}
```
