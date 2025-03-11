---
title: setUserId
type: apiDoc
shortDescription: Agrega una cadena de identificador definida por el usuario al evento posterior en la página.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an identifier to subsequent events on the page.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.setUserId(value: string|null)
```

Agrega una cadena de identificador definida por el usuario al evento posterior en la página.

## Requisitos

* Browser Lite, Pro o Pro+SPA agente (v1.230.0 o superior)

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

Al ejecutar esta función con un valor válido, el agente del navegador registra el valor como el atributo `enduser.id` con todos los eventos hasta que el atributo se desarme manualmente. El identificador se almacenará en el browser, de modo que las visitas posteriores a páginas del _mismo_ origen lo adjunten en el evento <DNT>**within a session**</DNT> span. Tenga en cuenta que esta funcionalidad puede variar según la configuración de privacidad browser del usuario final. Si esta función se llama con un `value = null`, cualquier ID de usuario existente se eliminará del <DNT>**both**</DNT> evento de la página actual y del almacenamiento.

El ID se adjuntará al evento JavaScriptError, en particular para el uso [Errors Inbox](/docs/errors-inbox/errors-inbox/) . Si está utilizando [monitoreo SPA](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) con una versión de agente compatible, el ID de usuario también se incluirá en el evento [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) .

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
        Requerido. Un identificador de cadena para el usuario final, útil para vincular todos los eventos browser a un usuario específico. El parámetro `value` no tiene por qué ser único. Si los ID deben ser únicos, la persona que llama es responsable de esa validación.

        Pasar un valor `null` anula la configuración de cualquier ID de usuario existente.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Marcar el "inicio de sesión" de un usuario final

```js
newrelic.setUserId('user-1234-v1.0')
```

### Deteniendo evento de atributo al usuario actual

```js
newrelic.setUserId(null)
```
