---
title: Fragmento de agente truncado angular
type: troubleshooting
tags:
  - Browser
  - Single page app monitoring
  - Troubleshooting
freshnessValidatedDate: never
translationType: machine
---

## Problema

Está utilizando el [método de copiar y pegar HTML](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser/#copy-paste-app) dentro de una aplicación Angular versión 12, 13 o 14, pero el fragmento de código del agente se truncó después de ejecutar la compilación Angular.

Esto puede provocar que la aplicación o las páginas afectadas ya no funcionen correctamente debido a un JavaScript inadecuado contenido en el HTML de la página.

## Solución

Este problema se debe a un error dentro de una dependencia del sistema de compilación Angular CLI. Las versiones 12, 13 y 14 de Angular CLI utilizan una dependencia que trunca el script en línea de un tamaño arbitrario, que puede incluir el agente New Relic <InlinePopover type="browser"/>. Hemos confirmado que esto se ha corregido con la versión 15 de Angular y recomendamos actualizar su proyecto Angular.

Si actualizar Angular no es una solución viable, una alternativa es colocar el fragmento de copiar/pegar del agente del navegador en un archivo JavaScript separado y hacer referencia a él desde el archivo HTML de índice.

1. Cree un nuevo archivo en su directorio `src` o `assets` llamado `newrelic.js`

2. Copie el fragmento del agente del navegador de la página de configuración de la aplicación browser New Relic One

3. Pegue el fragmento del agente del navegador en este nuevo archivo

4. Actualice `src/index.html` o su archivo html de índice para agregar el siguiente código en la parte superior de la sección `head`

   ```html
   <script src="/newrelic.js"></script>
   ```

5. Actualice el archivo `angular.json` en la raíz del proyecto para agregar el nuevo archivo a la matriz `assets`

   ```json
   ...
         "architect": {
           "build": {
             "builder": "@angular-devkit/build-angular:browser",
             "options": {
               "outputPath": "dist",
               "index": "src/index.html",
               "main": "src/main.ts",
               "polyfills": "src/polyfills.ts",
               "tsConfig": "tsconfig.app.json",
               "assets": [
                 "src/favicon.ico",
                 "src/assets",
                 "src/newrelic.js"
               ],
               "styles": [
                 "src/styles.css"
               ],
               "scripts": []
             },
   ...
   ```
