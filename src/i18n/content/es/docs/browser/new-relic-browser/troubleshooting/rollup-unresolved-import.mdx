---
title: Acumulación de importaciones no resueltas
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'If you use rollup to bundle your project and get an UNRESOLVED_IMPORT error, you may need to update your dependencies.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Recibe un error `UNRESOLVED_IMPORT` mientras crea su proyecto usando el paquete NPM del agente del navegador en un proyecto que usa acumulación para agrupar.

## Solución

Actualice su configuración de acumulación para usar el [complemento](https://www.npmjs.com/package/@rollup/plugin-node-resolve) `node-resolve` . Si ya utiliza este complemento, actualícelo a una versión mínima de `15.2.1`.

### Proyectos de plantilla

Si su proyecto utiliza el framework de plantilla, no podrá anular la versión del complemento `node-resolve`. Utilice la solución alternativa que se enumera a continuación en su proyecto y monitor [este](https://github.com/ionic-team/stencil/issues/3605) problema en el repositorio de plantillas de github.

## Solución alternativa

Si no puede actualizar el complemento `node-resolve` o está utilizando un framework que incluye el complemento y que no puede anular, deberá cambiar la declaración de importación del agente del navegador.

```js
// Instead of importing the browser agent like this
import { MicroAgent } from "@newrelic/browser-agent/loaders/micro-agent";

// Import like this
import { MicroAgent } from "@newrelic/browser-agent/src/loaders/micro-agent";
```

El directorio `src` contiene nuestro código ES2019+. Si no puede aplicar la transpilación a este código y necesita admitir un navegador anterior, actualice el paquete NPM del agente del navegador a la versión 1.252.0 y use la siguiente declaración de importación:

```js
import { MicroAgent } from "@newrelic/browser-agent/dist/esm/loaders/micro-agent";
```

El contenido del directorio `dist` sigue nuestra [declaración de soporte del navegador](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#browser-types).
