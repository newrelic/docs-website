---
title: newrelic_custom_metric (API del agente PHP)
type: apiDoc
shortDescription: Agregue una métrica personalizada (en milisegundos) para cronometrar un componente de su aplicación que no se captura de forma predeterminada.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to record custom metric timeslice data.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_custom_metric(string $metric_name, float $value)
```

Agregue una métrica personalizada (en milisegundos) para cronometrar un componente de su aplicación que no se captura de forma predeterminada.

## Requisitos

Compatible con todas las versiones de agente.

## Descripción

Registro [métrico personalizado](/docs/agents/manage-apm-agents/agent-data/custom-metrics) que no son capturados por defecto por el agente PHP.

Entonces tú puedes:

* Utilice [métrica y evento](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) para buscar su métrica personalizada, crear gráficos personalizables y agregarlos al tablero.
* Utilice la [API REST de New Relic](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) para recuperar y utilizar mediante programación datos métricos personalizados fuera de la UI de New Relic.
* [Cree alertas de métrica personalizada](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para notificarle a usted o a su equipo cuando su métrica personalizada exceda valores específicos.

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
        `$metric_name`

        _cadena_
      </td>

      <td>
        Requerido. Nombra tu métrica personalizada con un prefijo <DNT>**Custom/**</DNT> (por ejemplo, <DNT>**Custom/MyMetric**</DNT>). Esto ayuda a que la UI organice sus métricas personalizadas en un solo lugar y las hace fáciles de encontrar a través del Explorador de métricas.
      </td>
    </tr>

    <tr>
      <td>
        `$value`

        _Flotante_
      </td>

      <td>
        Requerido. Registra el tiempo en milisegundos. Por ejemplo: un valor de `4` se almacena como `.004` segundos en los sistemas de New Relic.

        Si el valor es NaN, Infinity, denorm o cero negativo, el comportamiento de esta función no está definido. New Relic puede descartar 1 o más bits de precisión (ULP) del valor dado.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `true` si la métrica se agregó correctamente.

## Ejemplos

### Registre un tiempo de respuesta de 100 milisegundos [#100-ms-example]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_custom_metric("Custom/custom-metric-name", 100.00);
    }
}
```
