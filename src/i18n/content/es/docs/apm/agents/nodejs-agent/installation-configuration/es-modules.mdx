---
title: Usando el agente Node.js en una aplicación de módulo ES
tags:
  - Agents
  - Nodejs agent
  - ESM
  - ES modules
  - Experimental
metaDescription: How to install and configure your Node.js APM agent for an application that uses ES modules.
freshnessValidatedDate: never
translationType: machine
---

Si usa módulos ES para administrar el código en su aplicación Node.js, ahora puede monitor esas aplicaciones usando el agente Node.js.

<Callout variant="caution">
  La compatibilidad del agente APM de Node.js para la instrumentación en la aplicación [del módulo ES](https://nodejs.org/api/esm.html) es experimental. El agente depende de una característica experimental de Node.js para registrar la instrumentación. Pueden ocurrir cambios importantes hasta que la API de Node.js para [los cargadores de módulos ES](https://nodejs.org/api/esm.html#loaders) sea estable.
</Callout>

## Descripción general [#overview]

Antes de v12.0.0, Node.js solo admite oficialmente la gestión de código mediante módulos CommonJS. Los módulos CommonJS utilizan declaraciones `module.exports` y `require()` para administrar el código como en este ejemplo:

```js
'use strict'

const bar = require('./bar')

function echoBar() {
  console.log('this is bar:', bar)
}

module.exports = {
  echoBar
}
```

Desde Node.js v12.0.0, se agregó soporte para módulos ECMAScript (módulos ES/"ESM").

En lugar de `require()` y `module.exports`, los módulos ES usan declaraciones `import` y `export` como esta:

```js
'use strict'

import bar from './bar.js'

export function echoBar() {
  console.log('this is bar:', bar)
}
```

Los módulos ES son el estándar oficial ECMAScript para la administración de código y son la forma estándar en que el browser y otros tiempos de ejecución JS administran paquetes. Para respaldar la evolución del ecosistema Node.js, tanto ahora como en el futuro, el agente admite aplicaciones instrumentadas escritas utilizando módulos ES, a partir de la versión 9.1.0 del agente. El agente APM de Node.js también sigue siendo compatible con la aplicación CommonJS.

<Callout variant="important">
  La versión mínima admitida de Node.js cuando se utiliza el agente APM de Node.js en la aplicación del módulo ES es v16.12.0.
</Callout>

## Configuración del agente [#agent-setup]

Para que el agente instrumente con éxito una aplicación de módulos ES, primero deberá instalar el agente Node.js, como se describe en la [documentación de instalación](/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent). Una vez que su agente esté instalado, continúe con la configuración en las secciones siguientes.

### Configuración [#configuration]

Si su aplicación utiliza un archivo de configuración para configurar el agente, deberá actualizar la extensión del archivo de configuración para que sea `.cjs` en lugar de `.js`.

El agente está escrito como un módulo CommonJS; utiliza `require()` para leer el archivo de configuración al inicio. Al cambiar la extensión del archivo, etiquetamos explícitamente el archivo de configuración del agente como un módulo CommonJS, lo que permite que el agente lo cargue correctamente.

Si no actualiza la extensión del archivo, es posible que vea el siguiente error durante el inicio del agente:

```
New Relic for Node.js is disabled due to an error:
Error [ERR_REQUIRE_ESM]: require() of ES module /path/to/your/application/newrelic.js from /path/to/your/application/node_modules/newrelic/lib/config/index.js not supported.
```

### Agregue el cargador del módulo ES [#add-loader]

Para que el agente aplique correctamente la instrumentación dentro del ecosistema del módulo ES, debe incluir el cargador del módulo ES del agente junto con el agente en la invocación de su aplicación. Puede agregar el cargador a su aplicación utilizando el [argumento CLI](https://nodejs.org/api/cli.html#--experimental-loadermodule) `--experimental-loader` de Node.js.

```sh
node --experimental-loader newrelic/esm-loader.mjs -r newrelic your-program.js
```

## Instrumentación personalizada [#custom-instrumentation]

El agente APM de Node.js admite la adición de instrumentación personalizada a su aplicación de módulo ES. Puede crear instrumentación en la aplicación del módulo ES utilizando la mayoría de los [métodos de registro de instrumentación en la API](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#custom-instrumentation-api). Debido a la naturaleza de las importaciones de módulos ES, no podemos admitir `newrelic.instrumentLoadedModule`. Los enlaces del módulo ES no son asignables, lo que impide que el agente reemplace los miembros exportados de un módulo con instrumentación después de que el módulo se haya cargado.

Para ver una demostración de cómo utilizar la API de instrumentación personalizada en una aplicación de módulo ES, consulte nuestro [ejemplo](https://github.com/newrelic/newrelic-node-examples/blob/main/esm-app/custom-instrumentation/index.js) en GitHub.

## Aprende más [#learn-more]

* [Documentación del módulo Node.js ES](https://nodejs.org/api/esm.html#introduction)
* [Documentación de empaquetado de Node.js](https://nodejs.org/api/packages.html#introduction)
* [Documentación de estándares ECMAScript](https://tc39.es/ecma262/#sec-modules)
* [Aplicación del módulo ES de demostración](https://github.com/newrelic/newrelic-node-examples/tree/main/esm-app)
