---
title: setAttribute (SPA API)
type: apiDoc
shortDescription: Agrega un atributo SPA personalizado solo a la interacción actual en browser.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser monitoring to add a custom attribute only to the current interaction.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.interaction().setAttribute(string $key, any $value)
```

Agrega un atributo SPA personalizado solo a la interacción actual en browser.

## Requisitos

* Browser Pro+SPA agente (v963 o superior)

* Si está utilizando npm para instalar el agente del navegador, debe habilitar la característica `spa` al crear una instancia de la clase `BrowserAgent` . En la matriz `features` , agregue lo siguiente:

  ```js
  import { Spa } from '@newrelic/browser-agent/features/spa';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Spa
    ]
  }
  ```

  Para obtener más información, consulte la [documentación de instalación del navegador npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descripción

Este método agrega un atributo personalizado a una interacción. Si se guarda, este atributo se expondrá como una nueva propiedad en el evento [`BrowserInteraction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes) resultante. A diferencia de los atributos agregados con [`setCustomAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-api-newrelicsetcustomattribute), un atributo agregado a una interacción solo se aplicará a la interacción actual y no se agregará al evento [`PageAction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#pageaction-list) .

New Relic fusiona estos atributos personalizados con el atributo personalizado establecido llamando [`setCustomAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-api-newrelicsetcustomattribute) y con el atributo personalizado establecido por un agente del lado del servidor.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Order of precedence**
        </DNT>
      </th>

      <th>
        <DNT>
          **Custom attributes**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Nivel más alto
      </td>

      <td>
        `BrowserInteraction` atributo establecido con la API SPA: Estos sobrescriben el atributo establecido en las otras dos formas.
      </td>
    </tr>

    <tr>
      <td>
        Siguiente nivel
      </td>

      <td>
        Atributo establecido por `setCustomAttribute()`: estos sobrescriben el atributo personalizado del lado del servidor.
      </td>
    </tr>

    <tr>
      <td>
        Nivel más bajo
      </td>

      <td>
        Atributo personalizado establecido en el lado del servidor.
      </td>
    </tr>
  </tbody>
</table>

Los errores del atributo personalizado se incluirán en el evento en la [página de errores de JS](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors). Para ver o log errores para un atributo personalizado a través de API, utilice la llamada [`noticeError`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicnoticeerror-browser-agent-api) de la API del agente del navegador.

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
        Requerido. Se utiliza como nombre de atributo en el evento `BrowserInteraction` .
      </td>
    </tr>

    <tr>
      <td>
        `$value`

        _cualquier_
      </td>

      <td>
        Requerido. Se utiliza como valor de atributo en el evento `BrowserInteraction` . Puede ser una cadena, un número, un booleano o un objeto. Si es un objeto, New Relic lo serializa en una cadena JSON.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Este método devuelve el mismo objeto API creado por `interaction()`.

## Ejemplos

```js
router.addRoute('/profile', () => {
  const user = getCurrentUser();
  newrelic.interaction()
    .setAttribute('username', user.username)
    .setAttribute('userId', user.id);
  renderProfile(user);
});
```
