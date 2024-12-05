---
title: Habilitar la compatibilidad con mapas de origen
tags:
  - Agents
  - Nodejs agent
metaDescription: Enable source map support in Node.js to see more meaningful error traces.
freshnessValidatedDate: never
translationType: machine
---

Las aplicaciones transpiladas, como las escritas en TypeScript o Babel, mostrarán un error de rastreo de la pila que normalmente apunta a archivos, líneas y funciones dentro de los archivos creados, en lugar de a los archivos fuente.

Si habilita el mapeo de fuentes en Node.js, obtendrá una traza de error más significativa que apunta a líneas y funciones dentro del código fuente.

## Cómo habilitar el mapeo de origen [#enable-command]

Puede habilitar la compatibilidad con el mapa fuente de Node en el comando `node` que inicia su aplicación:

```shell
node --enable-source-maps -r newrelic ./dist/server.js
```

## Ejemplo [#source-map-example]

Una aplicación ejecutada sin compatibilidad con el mapa fuente podría mostrar un error en el rastreo de la pila como este:

```shell
[output] Error: Failed to get all entries in model
[output]    at /dist/models/entries.js:41:23
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at /dist/models/entries.js:39:35
[output]    at Generator.next (<anonymous>)
```

<Callout variant="tip">
  Tenga en cuenta que la traza se refiere a los archivos creados en `/dist`.
</Callout>

La misma aplicación con soporte de mapa fuente habilitado hará referencia a los archivos de código fuente:

```shell
[output] Error: Failed to get all entries in model
[output]    at <anonymous> (/src/models/entries.ts:28:13)
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at <anonymous> (/src/models/entries.ts:26:19)
[output]    at Generator.next (<anonymous>)
```

Este rastreo del stack apunta a funciones específicas y números de línea dentro de sus archivos fuente, para que pueda encontrar errores más fácilmente.

Puede observar este comportamiento ejecutando nuestra [aplicación de ejemplo de mapas de origen](https://github.com/newrelic/newrelic-node-examples/tree/main/source-maps), que facilita la comparación de trazas de error con y sin mapas de origen habilitados.
