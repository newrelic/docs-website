---
title: setCurrentRouteName (SPA API)
type: apiDoc
shortDescription: Proporciona a las rutas SPA nombres más precisos que los nombres predeterminados. monitorear rutas específicas en lugar de agrupaciones predeterminadas.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser monitoring to give routes more accurate names and monitor specific routes rather than by default grouping.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.setCurrentRouteName(string $name)
```

Proporciona a las rutas SPA nombres más precisos que los nombres predeterminados. monitorear rutas específicas en lugar de agrupaciones predeterminadas.

## Requisitos

* Browser Pro+SPA agente (v998 o superior)

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

Este método nombra la ruta actual. Esto puede resultar útil para:

* Asigne a las rutas nombres más precisos que los que tendrían de forma predeterminada.
* Monitor una ruta que de otro modo podría estar agrupada con otras rutas de forma predeterminada.

Actualmente, este método se aplica solo al evento SPA [`BrowserInteraction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes) . El uso de esta API crea dos nuevos atributos personalizados que rastrean la ruta anterior y la ruta objetivo:

* `previousRouteName`
* `targetRouteName`

Al utilizar esta API, el atributo [`browserInteractionName`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#interaction-name) tomará el valor `targetRouteName` . Si se utiliza `setName` para establecer el nombre de la interacción browser , eso tendrá prioridad.

La API `setCurrentRouteName()` determina el nombre del atributo para [el evento`BrowserInteraction` ](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes), por lo que esta API debe llamarse <DNT>**every time**</DNT> si hay un cambio de ruta. Esto asegurará que el evento `BrowserInteraction` tenga el atributo correcto.

<Callout variant="tip">
  Compárese con [`setName()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetname), que establece un nombre para una interacción del navegador, no una ruta.
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
        Requerido. Nombre de la ruta actual para la página.

        Los nombres de ruta pasados a `setCurrentRouteName()` pueden ser cualquier cadena, pero deben representar una ruta <DNT>**pattern**</DNT> en lugar de un recurso específico. Por ejemplo, utilice `/users/:id` en lugar de `/users/123`.

        Si `null`, sale del requisito de cambio de ruta y regresa a la estrategia de nomenclatura predeterminada.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

```js
router.onChange(function(route) {
  newrelic.setCurrentRouteName(route.name);
});
```
