---
title: noticeError
type: apiDoc
shortDescription: Identifica un error browser sin interrumpir las operaciones de su aplicación.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to identify an error without disrupting your app's operations.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.noticeError(error object $error, [object $customAttributes])
```

Identifica un error browser sin interrumpir las operaciones de su aplicación.

## Requisitos

* Browser Pro o agente Pro+SPA

  * El argumento del atributo personalizado requiere el agente v1118 o superior.
  * `newrelic.noticeError()` requiere agente v499 o superior
  * `NREUM.noticeError()` requiere agente v411 o superior

* [Activado<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/browser-settings)

* [Monitoreo de JavaScript habilitado](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors)

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

Utilice esta llamada para notar o log los errores manejados por su aplicación u otros errores diversos. Esto es útil cuando ha detectado y manejado un error, pero aún desea identificarlo sin interrumpir el funcionamiento de su aplicación.

También puede utilizar la API para detectar errores que, de otro modo, se informarían sin ningún detalle, como errores que ocurren durante la inicialización del script o en un controlador de eventos en línea. Los errores aparecerán en la [página<DNT>**Errors**</DNT> ](/docs/errors-inbox/browser-tab)junto con otros errores que New Relic normalmente detecta. También se registrarán como un [evento`JavaScriptError` ](/attribute-dictionary/?event=JavaScriptError). Por ejemplo:

```js
var err = new Error('Report caught error to New Relic');
newrelic.noticeError(err);
```

Nota: Si se envían más de 1000 eventos `JavaScriptError` en una sola solicitud, solo se registran 1000 eventos por separado. Sin embargo, el número total de eventos se conserva internamente y se puede acceder a él mediante [la cláusula de consulta`EXTRAPOLATE` ](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#extrapolate).

## Parámetros

<table>
  <thead>
    <tr>
      <th width="30%">
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
        `$error`

        _objeto de error_
      </td>

      <td>
        Requerido. Proporcione un mensaje de error significativo que pueda utilizar al analizar datos en [la página<DNT>**Errors**</DNT> ](/docs/errors-inbox/browser-tab)del navegador.
      </td>
    </tr>

    <tr>
      <td>
        `$customAttributes` _objeto_
      </td>

      <td>
        Opcional. Un objeto que contiene pares de nombre/valor que representan [un atributo personalizado](/docs/data-apis/custom-data/custom-events/report-browser-monitoring-custom-events-attributes/).
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Errores no críticos

Este ejemplo muestra cómo utilizar la API `newrelic.noticeError` para informar errores detectados que no desea que interrumpan su aplicación. Esto es útil cuando los errores no críticos no tienen un impacto en la experiencia del usuario, pero aun así deseas informarlos a los desarrolladores. El código de ejemplo utiliza de forma segura un objeto `foo` predeterminado en caso de que el JSON sea incorrecto.

```js
var foo;
try {
  foo = JSON.parse('{ "bar"');
} catch (err) {
  //Report caught error to New Relic
  newrelic.noticeError(err);

  foo = { bar: 'default value' };
}
alert(foo.bar);
```

### Devolución de llamada con error opcional [#callback-js]

Este ejemplo muestra cómo informar un error a New Relic cuando se utiliza el patrón de error y respuesta devolución de llamada popularizado por Node.js y común en el desarrollo de Browserify. Puede reemplazar `alert(body);` con su propio mensaje relevante.

```js
var xhr = require('xhr');
xhr('http://localhost:8080', function(err, resp, body) {
  //Report unthrown error to New Relic
  if (err) return newrelic.noticeError(err);
  //Handle successful response
  alert(body);
});
```

### Ejemplo de API basada en promesas [#promise-js]

Las promesas proporcionan un patrón único para manejar la interacción asincrónica, lo que facilita el manejo de errores asincrónicos. Sin embargo, esto también hace que sea fácil omitir el error por completo, dejando la aplicación defectuosa de maneras que los desarrolladores no pueden ver. Este ejemplo informa esos errores asincrónicos a New Relic para evitar que se pasen por alto.

```js
var rest = require('rest');
rest('/').then(function(res) {
  //Handle successful response
  alert(res.entity);
}, function(err) {
  //Report unthrown error to New Relic
  newrelic.noticeError(err);
});
```

### Ejemplo de captura de atributo personalizado [#custom-attributes]

```js
try {
  // code that throws an error
} catch (err) {
  newrelic.noticeError(err, { attribute1: 'value1', attribute2: 2 });
}
```

### Limitaciones browser (solo Apple Safari y Microsoft Internet Explorer) [#browser-limits]

Si no se arroja un error, no tendrá un rastreo del stack. Si desea que la API `newrelic.noticeError` informe un rastreo del stack con todos los tipos browser , debe generar manualmente y luego detectar el error antes de pasarlo a la API.

```js
try {
  throw errorObject;
} catch (err) {
  newrelic.noticeError(err);
}
```
