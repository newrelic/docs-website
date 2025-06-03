---
title: newrelic_add_custom_tracer (API del agente PHP)
type: apiDoc
shortDescription: Especifique funciones o métodos para que el agente interprete con instrumentación personalizada.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to add custom instrumentation to particular methods in your app code.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_add_custom_tracer(string $function_name)
```

Especifique funciones o métodos para que el agente interprete con instrumentación personalizada.

## Requisitos

Compatible con todas las versiones de agente.

## Descripción

Especifique funciones o métodos para que el agente apunte a [instrumentación personalizada](/docs/agents/php-agent/features/php-custom-instrumentation). Esta es la API equivalente a la configuración `newrelic.transaction_tracer.custom` .

No puede aplicar seguimiento personalizado a funciones PHP internas.

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
        `$function_name`

        _cadena_
      </td>

      <td>
        Requerido. El nombre puede tener el formato `function_name` para funciones de procedimiento o `"ClassName::method"` para métodos. Tanto los métodos estáticos como los de instancia se instrumentarán si se utiliza la sintaxis del método y el nombre de la clase debe estar completamente calificado: debe incluir el namespace completo si la clase se definió dentro de un namespace.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `true` si el rastreador se agregó correctamente.

## Ejemplos

### Instrumento una función [#function-example]

```php
function example_function() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_add_custom_tracer("example_function");
    }
}
```

### Instrumento un método dentro de una clase [#class-exmaple]

```php
class ExampleClass {
    function example_method() {
        if (extension_loaded('newrelic')) { // Ensure PHP agent is available
            newrelic_add_custom_tracer("ExampleClass::example_method");
        }
    }
}
```

### Instrumento un método dentro de una clase con espacio de nombres [#class-example]

```php
namespace Foo\Bar;

class ExampleClass {
    function example_method() {
        if (extension_loaded('newrelic')) { // Ensure PHP agent is available
            newrelic_add_custom_tracer("Foo\\Bar\\ExampleClass::example_method");
        }
    }
}
```

Alternativamente, en PHP 5.5 o posterior, se puede usar la sintaxis `::class` :

```php
namespace Foo\Bar {
    class ExampleClass {
        function example_method() {
            // ...
        }
    }
}

namespace {
    use Foo\Bar;

    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_add_custom_tracer(Bar::class . "::example_method");
    }
}
```
