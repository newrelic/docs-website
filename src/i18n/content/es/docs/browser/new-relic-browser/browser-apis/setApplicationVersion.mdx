---
title: setApplicationVersion
type: apiDoc
shortDescription: Agrega una cadena de versión de la aplicación definida por el usuario al evento posterior en la página.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an application version string to subsequent events on the page.
freshnessValidatedDate: '2023-08-17T00:00:00.000Z'
translationType: machine
---

## Sintaxis

```js
newrelic.setApplicationVersion(value: string|null)
```

Agrega una cadena de versión de la aplicación definida por el usuario al evento posterior en la página.

## Requisitos

* Browser Lite, Pro o Pro+SPA agente (v1.238.0 o superior)

* Si está utilizando npm para instalar el agente del navegador, debe habilitar al menos una función al crear una instancia de la clase `BrowserAgent` . Por ejemplo, agregue lo siguiente en la matriz`features` :

  ```js
  import { Metrics } from '@newrelic/browser-agent/features/metrics'

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Metrics
    ]
  }
  ```

  Para obtener más información, consulte la [documentación de instalación del navegador npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descripción

Al ejecutar esta función con un valor válido, el agente del navegador agrega un atributo `application.version` a todos los eventos posteriores hasta que el atributo se desactive manualmente o se descargue la página. Si la función se llama más de una vez, solo se enviará el valor más reciente proporcionado en el evento posterior. Si se llama a esta función con un valor de `null`, cualquier versión de la aplicación existente dejará de enviarse en un evento posterior.

Configurar el atributo `application.version` le ayudará a identificar qué versiones de su software están produciendo errores. Una próxima versión de Errors Inbox rastreará automáticamente qué versiones de su software están produciendo errores. Si está utilizando [monitoreo SPA](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) con una versión de agente compatible, la versión de la aplicación también se incluirá en el evento [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) .

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
        `value`

        _cadena_ O _nulo_
      </td>

      <td>
        Requerido. Una cadena que representa la versión de la aplicación web, útil para vincular todos los eventos browser a una etiqueta de lanzamiento específica. El parámetro `value` no tiene por qué ser único. Si los ID deben ser únicos, la persona que llama es responsable de esa validación.

        Pasar un valor `null` anula la configuración de cualquier versión de la aplicación existente.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Decorar evento con una versión de aplicación

```js
newrelic.setApplicationVersion('1.2.3') // decorates events with the property 'application.version':'1.2.3'
```

### Evitar que evento decore la versión de la aplicación

```js
newrelic.setApplicationVersion(null) // events will no longer have an 'application.version' property set
```
