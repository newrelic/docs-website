---
title: Crear evento personalizado (Go)
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'To track arbitrary event data in New Relic for apps monitored by your New Relic Go agent, use RecordCustomEvent.'
freshnessValidatedDate: never
translationType: machine
---

Evento personalizado son útiles para explorar datos de un único evento que le interesa, incluidos datos de fuentes externas, en un momento particular. Para rastrear [datos de eventos](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#event-data) arbitrarios para aplicaciones monitoreadas por su agente de New Relic Go, agregue `RecordCustomEvent` a las aplicaciones. Luego podrá [consultar y visualizar los datos del evento](/docs/query-your-data).

## `RecordCustomEvent` parámetro [#recordCustomEvent]

Para agregar `RecordCustomEvent` a su aplicación Go, use este formato:

```go
RecordCustomEvent(eventType string, params map[string]interface{})
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
        `eventType`

        _cadena_
      </td>

      <td>
        Requerido. El nombre del tipo de evento a registrar.

        * Debe constar de caracteres alfanuméricos, guiones bajos `_` o dos puntos `:`.
        * No debe contener más de 255 bytes.
        * Debe seguir los requisitos de datos de New Relic para [nombres, límites y personajes restringidos](/docs/insights/insights-data-sources/custom-data/data-requirements).
      </td>
    </tr>

    <tr>
      <td>
        `params map`

        _número_, _cadena_ o _booleano_
      </td>

      <td>
        Requerido. Especifique el valor principal de los pares de atributos para anotar el evento.

        * Cada valor de `params map` debe ser un número, una cadena o un valor booleano.
        * Las claves deben tener menos de 255 bytes.
        * El `params map` no debe contener más de 64 atributos.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplo

A continuación se muestra un ejemplo de un evento personalizado para una aplicación Go:

```go
func customEvent(w http.ResponseWriter, r *http.Request) {
    io.WriteString(w, "recording a custom event")

    app.RecordCustomEvent("my_event_type", map[string]interface{}{
        "myString":  "hello",
        "myFloat":   0.603,
        "myInt":     123,
        "myBool":    true,
    })
}
```
