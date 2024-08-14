---
title: setErrorHandler
type: apiDoc
shortDescription: Permite ignorar selectivamente y agrupar los errores conocidos que captura el agente del navegador.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser monitoring API call to allow selective ignoring and grouping of known errors captured by the agent.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.setErrorHandler(function $callback)
```

Permite ignorar selectivamente y agrupar los errores conocidos que captura el agente del navegador.

## Requisitos

* Browser Pro o agente Pro+SPA (v974 o superior)

  * Para la capacidad de agrupación de errores, se requiere [v1.230.0](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1.230.0) o superior.

* Si está utilizando npm para instalar el agente del navegador, debe habilitar la característica `jserrors` al crear una instancia de la clase `BrowserAgent` . En la matriz `features` , agregue lo siguiente:

  ```js
  import { JSErrors } from '@newrelic/browser-agent/features/jserrors';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      JSErrors
    ]
  }
  ```

  Para obtener más información, consulte la [documentación de instalación del navegador npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descripción

La llamada API `newrelic.setErrorHandler()` le permite ignorar selectivamente los errores conocidos que captura el agente del navegador. Se necesita una única función de controlador de errores, que se llamará para cada error que capture el agente del navegador. Si el controlador devuelve `true`, New Relic **no** registra el error. De lo contrario, el error se procesará normalmente.

Además, las versiones posteriores del agente admiten huellas dactilares o agrupación de excepciones con una etiqueta proporcionada personalizada. Para hacer esto, devuelva un objeto en lugar de un valor booleano con una propiedad `group` establecida en la _cadena_ deseada. Es importante saber que proporcionar una cadena vacía, o cualquier objeto que no se ajuste exactamente a esta especificación, se trata de la misma manera que en el caso `true` , por lo que se _ignorará_ el error. Este comportamiento es compatible con versiones anteriores.

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
        `$callback`

        _función_
      </td>

      <td>
        Requerido<DNT>**.**</DNT> Cuando ocurre un error, se llama a la devolución de llamada con el objeto de error como parámetro. La devolución de llamada se llamará con cada error, por lo que no es específica de un error.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Utilice una función básica de manejo de errores [#include-error]

Incluya el objeto de error dentro de la función de devolución de llamada para ignorar errores específicos que captura el agente del navegador.

```js
newrelic.setErrorHandler(function(err) {
  if (shouldIgnoreError(err)) {
    return true;
  } else {
    return false;
  }
});
```

### Errores de huellas dactilares en la función del controlador

Asigne etiquetas personalizadas a errores específicos para verlas en la Errors Inbox UI de la .

```js
newrelic.setErrorHandler(function(err) {
  if (isReferenceError(err)) {
    return { group: 'My reference errors' }; // error is included and tagged under this label
  } else if (isSomeSpecificError(err)) {
    return { group: '' }; // error will be excluded!
    // return { Group: 'still excluded - prop name has capital G!' };
  } else {
    return false; // error is included without any label
  }
})
```
