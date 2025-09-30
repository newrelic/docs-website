---
title: finalizado
type: apiDoc
shortDescription: 'Registra un punto de tiempo adicional como "terminado" en un rastreo de sesión, y envía el evento a New Relic.'
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: 'Browser API call to record an additional time point as a finished event in a browser session trace, and report it to New Relic.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.finished(time $time_stamp)
```

Registra un punto de tiempo adicional como "terminado" en un rastreo de sesión y envía el evento a New Relic.

## Requisitos

* Browser Pro, Pro+SPA o Lite agente (v593 o superior)

* Si está utilizando npm para instalar el agente del navegador, debe habilitar la característica `generic_events` y/o `session_trace` al crear una instancia de la clase `BrowserAgent` . En la matriz `features` , agregue lo siguiente:

  ```js
  import { GenericEvents } from '@newrelic/browser-agent/features/generic_events'
  import { SessionTrace } from '@newrelic/browser-agent/features/session_trace';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      PageAction
      SessionTrace
    ]
  }
  ```

  Para obtener más información, consulte la [documentación de instalación del navegador npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descripción

Registra un momento adicional cuando la página finaliza según sus criterios personalizados, ya sea antes o después del evento de carga de la página. Esto es útil, por ejemplo, para páginas con muchos componentes que se cargan de forma asincrónica.

Solo puede llamar a este método una vez por carga de página y no cambia los demás datos de tiempo de carga de página registrados para la carga. Para cargar una página individual, esta llamada:

1. Agrega un evento `finished` al [rastreo de sesión actual del navegador](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle), si hay uno en progreso.
2. Envía un [evento`PageAction` ](/docs/insights/explore-data/attributes/browser-default-attributes-insights#pageaction-list)con el nombre `finished` a New Relic.

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
        `$time_stamp`

        _entero_ (hora UNIX)
      </td>

      <td>
        Opcional. El valor predeterminado es la hora actual de la llamada. Si se utiliza, marca el momento en que la página está "terminada" según su propio criterio.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

```js
aboveTheFoldContent.on('ready', function() {
  newrelic.finished();
});
```
