---
title: Criar evento personalizado (Go)
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'To track arbitrary event data in New Relic for apps monitored by your New Relic Go agent, use RecordCustomEvent.'
freshnessValidatedDate: never
translationType: machine
---

Eventos personalizados são úteis para explorar dados de um único evento de seu interesse, incluindo dados de fontes externas, em um determinado momento. Para rastrear [dados de eventos](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#event-data) arbitrários para aplicativos monitorados pelo seu agente New Relic Go, adicione `RecordCustomEvent` aos aplicativos. Você pode então [consultar e visualizar os dados do evento](/docs/query-your-data).

## `RecordCustomEvent` [#recordCustomEvent]

Para adicionar `RecordCustomEvent` ao seu aplicativo Go, use este formato:

```go
RecordCustomEvent(eventType string, params map[string]interface{})
```

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
        `eventType`

        _corda_
      </td>

      <td>
        Obrigatório. O nome do tipo de evento a ser registrado.

        * Deve consistir em caracteres alfanuméricos, sublinhados `_` ou dois pontos `:`.
        * Não deve conter mais de 255 bytes.
        * Deve seguir os requisitos de dados da New Relic para [nomes, limites e caracteres restritos](/docs/insights/insights-data-sources/custom-data/data-requirements).
      </td>
    </tr>

    <tr>
      <td>
        `params map`

        `_number_`, `_string_`, ou `_boolean_`
      </td>

      <td>
        Obrigatório. Especifique pares de valores principais de atributo para anotar o evento.

        * Cada valor em `params map` deve ser um número, string ou booleano.
        * As chaves devem ter menos de 255 bytes.
        * O `params map` não deve conter mais de 64 atributos.
      </td>
    </tr>
  </tbody>
</table>

## Exemplo

Aqui está um exemplo de evento personalizado para um aplicativo Go:

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
