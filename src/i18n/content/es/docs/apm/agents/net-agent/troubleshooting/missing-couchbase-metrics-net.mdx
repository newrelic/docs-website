---
title: Falta Couchbase métrica (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'What to do if you see metrics and transaction segments for some of your Couchbase activity, but not all of it, such as Get, GetDocument, Remove, Upsert.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Ve segmentos métricos y de transacciones para parte de su actividad de Couchbase, pero no para toda. Por ejemplo, el agente .NET de New Relic no está instrumentado llamadas a:

* `Get(string id)`
* `GetDocument(string id)`
* `Remove(string id)`
* `Remove(string id, ulong cas)`
* `Upsert<T>(string id, T value)`

## Solución

El SDK de Couchbase contiene métodos para `Get()`, `Remove()` y `Upsert()` que actúan en varios documentos. Estos métodos utilizan procesos multiproceso para llamar a otros métodos públicos en el SDK de Couchbase.

Para evitar la doble instrumentación, el agente .NET de New Relic instrumentó automáticamente los múltiples métodos de documentos. Sin embargo, el agente no instrumenta automáticamente los métodos base a los que llama.

Para ver segmentos métricos y de transacciones adicionales para la actividad de Couchbase, utilice cualquiera de estas opciones:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Couchbase options**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="couchbase-sdk">
      <td>
        Utilice métodos alternativos
      </td>

      <td>
        Utilice otros métodos en el SDK de Couchbase donde la instrumentación del agente .NET no esté deshabilitada. Por ejemplo, si usas `GetAsync(string id)` en lugar de `Get(string id)`, tus llamadas serán instrumentadas.
      </td>
    </tr>

    <tr id="couchbase-xml">
      <td>
        Editar archivo XML de instrumentación
      </td>

      <td>
        Si no utiliza los métodos de documentos múltiples en su aplicación

        1. Comentar los métodos en el archivo XML de instrumentación de Couchbase.
        2. Vuelva a comentar los métodos que están actualmente comentados.
      </td>
    </tr>
  </tbody>
</table>
