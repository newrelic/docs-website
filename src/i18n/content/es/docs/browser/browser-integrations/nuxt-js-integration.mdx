---
title: Integración de Nuxt.js
tags:
  - nuxt.js integration
  - nuxt integration
  - new relic integrations
metaDescription: 'Learn how to query your New Relic data with NRQL, our SQL-like query language.'
freshnessValidatedDate: never
translationType: machine
---

Con nuestro dashboard de Nuxt.js, puede realizar un seguimiento fácil de la tasa de errores de su aplicación, el promedio de carga inicial de la página, los cambios de ruta, el rendimiento y las visitas a la página con errores de JavaScript. Creado con nuestro agente de infraestructura y nuestro Vue <InlinePopover type="browser"/>, el dashboard de Nuxt.js le permite ver información crítica en su totalidad.

<img
  title="Nuxt.js dashboard"
  alt="A screenshot of a Nuxt.js dashboard"
  src="/images/infrastructure_screenshot-crop_nuxtjs-dashboard.webp"
/>

## 1. Instalar el agente de infraestructura [#infra]

Antes de poder ingresar sus datos en New Relic, primero debe instalar el agente de infraestructura (si lo tiene instalado, puede omitir este paso). Esto permite a New Relic recopilar datos para que la tasa de errores de la aplicación, el rendimiento y las vistas de páginas con errores de JavaScript puedan aparecer en el panel. Este paso es opcional, pero le recomendamos encarecidamente que instale el agente de infraestructura para ver todos los datos de su host y monitoreo del navegador.

Hay dos formas de instalar el agente de infraestructura:

* Siga la [instalación guiada](https://one.newrelic.com/marketplace?state=607786be-99a9-fa66-4b67-3f7f3b9551d4) para instrumentar nuestro sistema con el agente de infraestructura.
* [Instale el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) mediante la línea de comando.

## 2. Instalar Vue monitoreo de navegador [#install]

Después de instalar el agente de infraestructura, el siguiente paso es instalar el monitor del browser . De <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT>:

1. Hacer clic

   <DNT>
     **Add data**
   </DNT>

2. Hacer clic

   <DNT>
     **Browser & mobile**
   </DNT>

3. Haga clic en

   <DNT>
     **Vue**
   </DNT>

   Desde allí, siga las instrucciones para generar el fragmento de código JavaScript utilizado en el paso 3. Si bien el agente de monitoreo de navegador y la integración de Vue brindan esencialmente el mismo servicio, la integración de Vue es específica de JavaScript (que es el framework de Nuxt.js). Si desea monitor otros servicios no específicos de JavaScript, debe utilizar el agente de monitoreo de navegador.

## 3. Configurar la integración [#config]

Para agregar el fragmento de JavaScript en la aplicación Nuxt.js:

1. Cree un archivo JavaScript en la carpeta

   <DNT>
     **`static`**
   </DNT>

   de su aplicación nuxt.js:

   ```bash
   touch <FILENAME>.js
   ```

2. Cree una función en el archivo JavaScript recién creado y agregue el script generado dentro de la función:

   ```js
   function FUNCTION_NAME() {
     // GENERATED SCRIPT IS PASTED HERE BY REMOVING OPENING AND CLOSING <script> TAGS>
   }
   FUNCTION_NAME();
   ```

3. Copie el fragmento de código a continuación y péguelo en `HEADER tag` del archivo `nuxt.config.js` y actualice el nombre de la función y el nombre del archivo:

   ```js
     __dangerouslyDisableSanitizers: ["script"],
     script: [
       {
         hid: "<FUNCTION_NAME>",
         src: "/<FILENAME>.js",
         defer: true,
         type: "text/javascript",
         charset: "utf-8",
       },
     ],
   ```

4. Reinicie su aplicación.

## 4. monitor su aplicación en one.newrelic.com [#monitor]

Ahora debería poder ver su aplicación en <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT> seleccionando <DNT>**Browser**</DNT> en la barra de navegación. Elige tu aplicación para ver todas las métricas que se capturan en la plataforma <DNT>**one.newrelic.com**</DNT> . También puede ver los datos con NRQL utilizando la siguiente consulta:

```sql
SELECT firstPaint 
FROM PageView
```

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su

  <InlinePopover type="dashboards"/>

  o para agregar más contenido a sus paneles.
