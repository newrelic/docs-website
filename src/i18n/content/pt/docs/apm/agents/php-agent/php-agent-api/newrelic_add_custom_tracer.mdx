---
title: newrelic_add_custom_tracer (API do agente PHP)
type: apiDoc
shortDescription: Especifique funções ou métodos para o agente instrumentar com instrumentação personalizada.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to add custom instrumentation to particular methods in your app code.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_add_custom_tracer(string $function_name)
```

Especifique funções ou métodos para o agente instrumentar com instrumentação personalizada.

## Requisitos

Compatível com todas as versões do agente.

## Descrição

Especifique funções ou métodos para o agente de destino para [instrumentação customizada](/docs/agents/php-agent/features/php-custom-instrumentation). Este é o equivalente da API à configuração `newrelic.transaction_tracer.custom` .

Você não pode aplicar rastreamento personalizado a funções internas do PHP.

## Parâmetro

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$function_name`

        _corda_
      </td>

      <td>
        Obrigatório. O nome pode ser formatado como `function_name` para funções procedurais ou como `"ClassName::method"` para métodos. Tanto os métodos estáticos quanto os de instância serão instrumentados se a sintaxe do método for usada, e o nome da classe deverá ser totalmente qualificado: deverá incluir o namespace completo se a classe tiver sido definida dentro de um namespace.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retornará `true` se o tracer tiver sido adicionado com sucesso.

## Exemplos

### Instrumento uma função [#function-example]

```php
function example_function() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_add_custom_tracer("example_function");
    }
}
```

### Instrumento um método dentro de uma classe [#class-exmaple]

```php
class ExampleClass {
    function example_method() {
        if (extension_loaded('newrelic')) { // Ensure PHP agent is available
            newrelic_add_custom_tracer("ExampleClass::example_method");
        }
    }
}
```

### Instrumento um método dentro de uma classe com namespace [#class-example]

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

Alternativamente, no PHP 5.5 ou posterior, a sintaxe `::class` pode ser usada:

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
