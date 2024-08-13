---
title: addRelease
type: apiDoc
shortDescription: Agrega un nombre y una identificación únicos para identificar versiones con múltiples paquetes de JavaScript en la misma página.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to identify releases with multiple components on the same page.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.addRelease(string $release_name, string $release_id)
```

Agrega un nombre y una identificación únicos para identificar versiones con múltiples paquetes de JavaScript en la misma página.

## Requisitos

* Browser Pro o agente Pro+SPA (v1016 o superior)

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

En <InlinePopover type="browser"/>, una versión es una forma de etiquetar errores con información sobre qué versión de su aplicación se está ejecutando actualmente. Esto es útil para sitios donde los componentes compartidos pertenecen a diferentes equipos, o donde se implementan múltiples aplicaciones de forma independiente pero se ejecutan en la misma página.

Las aplicaciones web modernas tienen muchas partes interconectadas, por lo que una aplicación puede tener varias versiones (con diferentes nombres) asociadas con la misma carga de página. Por ejemplo, puede utilizar lanzamientos para:

* Vea las diferencias entre los errores de una versión antigua almacenada en caché de su aplicación y los errores provenientes de una nueva versión.
* Identifique problemas encontrados durante las pruebas A/B, implementaciones lentas, indicadores de características y otros métodos de implementación avanzados.
* Determine qué versión de un [mapa fuente del navegador](/docs/new-relic-browser-source-map-support) utilizar.

Si la URL de su JavaScript no es única, debe especificar un nombre de versión y un identificador con esta llamada API al agente del navegador. Esta información también es necesaria al publicar mapas de origen en el servicio de almacenamiento. Esta API agrega una ID para monitorear el navegador para identificar versiones con múltiples paquetes de JavaScript en la misma página.

Si la URL del paquete JavaScript de su aplicación <DNT>**is unique**</DNT> cada vez que implementa su código, el monitoreo del navegador no requiere ninguna información adicional para identificar su versión. Por ejemplo, algunas herramientas de implementación de frontend utilizan el número de compilación de Jenkins o `git commit sha` en el nombre de archivo del código de implementación. Estos son suficientes para determinar de forma única la versión que provocó el error.

Tan pronto como sea posible después de que se cargue su página, llame al `newrelic.addRelease()`. Todos los errores que vea el agente del navegador estarán asociados con esa versión del código JavaScript.

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
        `$release_name`

        _cadena_
      </td>

      <td>
        <DNT>**Required.**</DNT> Una breve descripción del componente; por ejemplo, el nombre de un proyecto, aplicación, archivo o biblioteca.
      </td>
    </tr>

    <tr>
      <td>
        `$release_id`

        _cadena_
      </td>

      <td>
        <DNT>**Required.**</DNT> El ID o la versión de esta versión; por ejemplo, un número de versión, un número de compilación de su entorno de CI, GitHub SHA, GUID o un hash del contenido. Dado que New Relic convierte este valor en una cadena, también puedes usar `null` o `undefined` si es necesario.

        La combinación `$release_name` y `$release_id` debe ser única; Por ejemplo:

        * `'signup', '2.4.0'`

        * `'signup', '2.4.1'`

          Sin embargo, puede utilizar la misma versión para diferentes componentes; Por ejemplo:

        * `'signup', '2.4.0'`

        * `'logout', '2.4.0'`
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### SHA corto actual [#release-id-example1]

```js
newrelic.addRelease('checkout page', 'a818994')
```

### Versionado semántico [#release-id-example2]

```js
newrelic.addRelease('jquery.min.js', 'v3.1.1')
```
