---
title: newrelic_record_custom_event (API del agente PHP)
type: apiDoc
shortDescription: Graba un evento personalizado con el nombre de pila y el atributo.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to report custom event data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_record_custom_event(string $name, array $attributes)
```

Graba un evento personalizado con el nombre de pila y el atributo.

## Requisitos

Versión del agente [4.18.0.89](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-418089) o superior.

## Descripción

Graba un [evento personalizado](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#custom%20event) para usar en [New Relic](/docs/insights/new-relic-insights/understanding-insights/new-relic-insights). Para obtener más información, consulte [Insertar evento personalizado con el agente PHP](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-new-relic-agents#php-att).

<Callout variant="tip">
  Al crear un evento personalizado, siga estas reglas:

  * El agente registra un máximo de 30.000 eventos por minuto de forma predeterminada. Puede configurar el agente para que registre hasta 100.000 eventos por minuto cambiando [esta configuración inicial](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#inivar-custom-events-maxsamples).
  * Limite la cantidad de nombres de tipos de eventos únicos que cree y no genere estos nombres dinámicamente.
  * Evite el uso [de palabras y caracteres reservados](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words) para los nombres de eventos y atributos.
  * Asegúrese de no exceder las [restricciones de tamaño y tarifa del evento](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/).
  * Si se llama a `newrelic_ignore_transaction` dentro de la misma transacción que `newrelic_record_custom_event`, los eventos personalizados no se informarán.
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
        Requerido. Nombre del evento personalizado.
      </td>
    </tr>

    <tr>
      <td>
        `$attributes`

        _matriz_
      </td>

      <td>
        Requerido. Suministre un atributo personalizado como una matriz asociativa. Proporcione los nombres de los atributos como claves de hasta 255 caracteres y proporcione los valores como valores escalares. matrices y objetos no son compatibles.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Ejemplo básico

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
    newrelic_record_custom_event("WidgetSale", array("color"=>"red", "weight"=>12.5));
}
```
