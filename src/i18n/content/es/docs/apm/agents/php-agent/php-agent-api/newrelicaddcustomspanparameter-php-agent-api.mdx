---
title: newrelic_add_custom_span_parameter (API del agente PHP)
type: apiDoc
shortDescription: Adjunta un atributo personalizado (par principal de valor) al intervalo actual.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to attach custom attributes to your transaction data.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_add_custom_span_parameter(string $key, scalar $value)
```

Adjunta un atributo personalizado (par principal de valor) al intervalo actual.

## Requisitos

Versión del agente [9.12.0.268](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9120268) o superior.

## Descripción

Agregue un [atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) (un par de datos de clave y valor) al intervalo actual. (El nombre de la llamada es `newrelic_add_custom_span_parameter` porque "atributo personalizado" anteriormente se llamaba "parámetro personalizado"). Por ejemplo, puede agregar el nombre completo de un cliente desde su base de datos de clientes. Este atributo aparece en cualquier intervalo. También puedes consultar el [Span](/docs/insights/explore-data/attributes/apm-default-attributes-insights) para tu atributo personalizado.

<Callout variant="important">
  En intervalos, el atributo agregado con `newrelic_add_custom_span_parameter` tendrá prioridad sobre el atributo agregado con `newrelic_add_custom_parameter`.
</Callout>

<Callout variant="important">
  Si desea utilizar su atributo personalizado, evite utilizar cualquiera de los [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
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
        `$key`

        _cadena_
      </td>

      <td>
        Requerido. El nombre del atributo personalizado. Sólo se conservan los primeros 255 caracteres.
      </td>
    </tr>

    <tr>
      <td>
        `$value`

        _escalar_
      </td>

      <td>
        Requerido. El valor que se asociará con este atributo personalizado.

        Si el valor dado es un <DNT>**float**</DNT> con un valor de NaN, Infinito, denorm o cero negativo, el comportamiento de esta función no está definido. Para otros valores de punto flotante, el agente puede descartar 1 o más bits de precisión (ULP) del valor dado.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve verdadero si el parámetro se agregó correctamente.

## Ejemplos

### Informar una variable como valor [#basic-example]

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
    // Record custom data about this web transaction
    newrelic_add_custom_span_parameter ('user_email', $user_email);
}
```
