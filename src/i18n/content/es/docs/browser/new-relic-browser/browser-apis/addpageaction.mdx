---
title: addPageAction
type: apiDoc
shortDescription: Informa un evento PageAction browser junto con un nombre y un atributo opcional.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to report a PageAction event with your user-defined name and attributes to New Relic Dashboards.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.addPageAction(string $name[, JSON object $attributes])
```

Informa un evento PageAction browser junto con un nombre y un atributo opcional.

## Requisitos

* Browser Pro o agente Pro+SPA (v593 o superior)

* Si está utilizando npm para instalar el agente del navegador, debe habilitar la característica `generic_events` al crear una instancia de la clase `BrowserAgent` . En la matriz `features` , agregue lo siguiente:

  ```js
  import { GenericEvents } from '@newrelic/browser-agent/features/generic_events';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      GenericEvents
    ]
  }
  ```

  Para obtener más información, consulte la [documentación de instalación del navegador npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descripción

Esta llamada API envía un [evento`PageAction` ](/docs/insights/explore-data/custom-events/insert-browser-custom-events-attributes-insights-javascript-api)del navegador con su nombre definido por el usuario y un atributo opcional al [panel](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards), junto con [varios atributos predeterminados](/attribute-dictionary/?event=PageAction). Esto es útil para rastrear cualquier evento que el agente del navegador aún no rastrea automáticamente, como hacer clic en un botón <DNT>**Subscribe**</DNT> o acceder a un tutorial.

* `PageAction` Los eventos se envían cada 30 segundos, con un máximo de 120 eventos por ciclo de recolección de 30 segundos, por browser.
* Una vez alcanzado el límite de 120 eventos, no se capturan eventos adicionales para ese ciclo de recolección.

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
        Requerido. Nombre o categoría de la acción. Informado como el atributo `actionName` .

        Evite el uso [de palabras NRQL reservadas](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) cuando nombre el atributo o valor.
      </td>
    </tr>

    <tr>
      <td>
        `$attributes`

        _Objeto JSON_
      </td>

      <td>
        Opcional. Objeto JSON con uno o más pares de valores principales. Por ejemplo: `{key:"value"}`. La clave se informa como su propio atributo `PageAction` con los valores especificados.

        Evite el uso [de palabras NRQL reservadas](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) cuando nombre el atributo/valor.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Registrar clics en enlaces (JavaScript) [#example-link-click-js]

Este ejemplo registra un evento PageAction cada vez que un usuario selecciona el enlace <DNT>**Try Me**</DNT> . El evento se registra con un `actionName` de `clickedTryMe`:

```html
<a href="/demo" id="try-me">Try Me!</a>
<script>
    document.getElementById('try-me').addEventListener('click', function(e) {
        newrelic.addPageAction('clickedTryMe');
    })
</script>
```

Luego puede consultar la cantidad de veces que se hizo clic en el botón <DNT>**Try Me**</DNT> con la siguiente consulta NRQL:

```sql
SELECT count(*) FROM PageAction WHERE actionName = 'clickedTryMe' SINCE 1 hour ago
```

### Registrar clics en enlaces (jQuery) [#example-link-click-jquery]

Este ejemplo envía un evento PageAction cuando un usuario hace clic en un elemento con la clase `copy-text`. El `actionName` es `copy-text-button` y el valor se informa como otro atributo llamado `Result` que corresponde a los métodos llamados `success` y `error` que manejan el resultado.

```js
$('.copy-text').click(function() {
    var clipboard = new Clipboard('.copy-text');
    clipboard.on('success', function(event) {
        // Do stuff
        // Report data to New Relic
        if (typeof newrelic == 'object') {
            newrelic.addPageAction('copy-text-button', { result: 'success' });
        }
    });
    clipboard.on('error', function(event) {
        // Do stuff
        // Report data to New Relic
        if (typeof newrelic == 'object') {
            newrelic.addPageAction('copy-text-button', { result: 'error' });
        }
    });
});
```

Luego, en el generador de consultas, puede crear un gráfico circular para ver el desglose de cuántos clics en los botones tuvieron éxito versus error durante los últimos 30 días:

```sql
SELECT count(*) AS 'Clicks' FROM PageAction WHERE actionName = 'copy-text-button' FACET result SINCE 30 days ago
```

O puede crear una consulta para ver qué páginas tienen la mayor cantidad de clics en el botón de copia en los últimos 30 días:

```sql
SELECT count(*) AS 'Clicks' FROM PageAction WHERE actionName = 'copy-text-button' FACET currentUrl SINCE 30 days ago
```

### Capturar entrada del formulario [#example-form-input]

Este ejemplo captura la entrada del usuario (direcciones de correo electrónico) desde un formulario llamado <DNT>**Signup**</DNT>. El evento se registra con un `actionName` de `userSignup`:

```html
<form action="/signup" id="myform">
    <input id="email" name="email">
    <input type="submit" value="Signup">
</form>
<script type="text/javascript">
    document.getElementById('myform').addEventListener('submit', function(e) {
        var email = e.target.elements['email'].value;
        newrelic.addPageAction('userSignup', { email: email });
    })
</script>
```

Luego podrá ver los correos electrónicos que recopiló con la siguiente consulta NRQL:

```sql
SELECT uniques(email) FROM PageAction WHERE actionName = 'userSignup' SINCE 1 hour ago
```
