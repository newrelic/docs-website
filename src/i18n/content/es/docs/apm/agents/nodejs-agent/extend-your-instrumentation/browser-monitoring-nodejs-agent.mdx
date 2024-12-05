---
title: Monitoreo del browser y del agente Node.js
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: How to manually set up browser instrumentation New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

Con el agente Node.js, puede agregar [instrumentación del browser](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) a sus páginas web. Para utilizar <InlinePopover type="browser"/>con su agente Node.js, asegúrese de tener la [última versión](/docs/agents/nodejs-agent/installation-configuration/installing-maintaining-nodejs#upgrading) del agente Node.js.

Para habilitar el monitoreo del browser en la interfaz de usuario, siga los procedimientos para [instalar el agente del browser](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent). Luego siga los procedimientos de esta sección para configurar el agente Node.js.

## Insertar el encabezado de JavaScript [#procedures]

La instrumentación para el agente Node.js puede continuar más allá de su aplicación hasta el browser del usuario final. El módulo `newrelic` puede generar encabezados `script` que, cuando se insertan en sus plantillas HTML, capturarán el tiempo final de carga de la página del usuario. Los encabezados deben inyectarse manualmente, pero no es necesaria ninguna configuración adicional.

1. Al principio de la etiqueta `head` de su página html, inserte los resultados de `newrelic.getBrowserTimingHeader()` después de las metaetiquetas `CHARSET` .

   <DNT>**Exception:**</DNT> Para obtener la máxima compatibilidad con Internet Explorer, inserte los resultados de `newrelic.getBrowserTimingHeader()` <DNT>**after**</DNT> cualquier metaetiqueta `X-UA-COMPATIBLE HTTP-EQUIV` .

2. Llame al encabezado una vez por cada solicitud. No almacene en caché el encabezado.

La generación de encabezados es rápida y no requiere que su aplicación realice solicitudes adicionales a New Relic.

## Ejemplos framework [#variables]

A continuación se muestran algunos ejemplos de cómo configurar el monitoreo del browser con diferentes marcos y plantillas.

<CollapserGroup>
  <Collapser
    id="example-express"
    title="Expreso y jade"
  >
    Este ejemplo utiliza [Express](http://expressjs.com), un framework de aplicación web, y [jade](http://jade-lang.com), un módulo de plantilla. Aunque los detalles son diferentes con otros marcos, este enfoque general debería funcionar en la mayoría de los casos.

    La forma más sencilla de insertar encabezados de sincronización browser es pasar el módulo `newrelic` a su plantilla y luego llamar a `newrelic.getBrowserTimingHeader()` desde dentro de la plantilla.

    En tu `app.js`:

    ```js
    const newrelic = require('newrelic');
    const app = require('express')();
    // in express, this lets you call newrelic from within a template
    app.locals.newrelic = newrelic;

    app.get('/user/:id', function (req, res) {
      res.render('user');
    });
    app.listen(process.env.PORT);
    ```

    En tu `layout.jade`:

    ```pug
    doctype html
    html
    head
      != newrelic.getBrowserTimingHeader()
      title= title
      link(rel='stylesheet', href='stylesheets/style.css')
    body
      block content
    ```
  </Collapser>

  <Collapser
    id="example-express-swig"
    title="Expresar y trago"
  >
    Este ejemplo utiliza Express con [Swig](https://github.com/paularmstrong/swig "El enlace se abre en una ventana nueva.").

    En tu `app.js`:

    ```js
    const newrelic = require('newrelic');

    const http = require('http')
    const path = require('path')
    const swig = require('swig')

    const app = require('express')();

    app.locals.newrelic = newrelic;

    //taken from http://paularmstrong.github.io/swig/docs/#express
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    app.get('/user/:id', function (req, res) {
      res.render('user');
    });

    app.listen(process.env.PORT);
    ```

    En tu `views/user.html`:

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            {{ newrelic.getBrowserTimingHeader() }}
            <title>Hello</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
    ```
  </Collapser>

  <Collapser
    id="example-hapijs"
    title="Hapi.js y manillares"
  >
    Este ejemplo utiliza [hapi.js](http://hapijs.com/) y [handlebars](http://handlebarsjs.com). Otros lenguajes de plantillas similares normalmente requieren corchetes triples; por ejemplo, usando [bigote](https://mustache.github.io/mustache.5.html) con [hogan-express](https://github.com/vol4ok/hogan-express). Esto ayuda a evitar que se escape el contenido del script.

    Usando <DNT>**hapi**</DNT>, en tu `app.js`:

    ```js
    const newrelic = require('newrelic');
    const Hapi = require('hapi');
    const server = new Hapi.Server(parseInt(PORT), '0.0.0.0', {
      views: {
        engines : {html: 'handlebars' },
        path : __dirname + '/templates'
      }
    });

    function homepage(request, reply) {
      const context = {
        // pass in the header each request
        nreum : newrelic.getBrowserTimingHeader(),
        content : ...
      };

      reply.view('homepage', context);
    };

    server.route({
      method : 'GET',
      path : '/',
      handler : homepage
    });

    server.start();
    ```

    En tu `templates/homepage.html`:

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            {{{ nreum }}}
            <title>Hello</title>
        </head>
        <body>
            {{ content }}
        </body>
    </html>
    ```
  </Collapser>
</CollapserGroup>

## Deshabilitar la generación de encabezados [#disabling]

De forma predeterminada, las llamadas a `newrelic.getBrowserTimingHeader()` deben devolver encabezados válidos. Para deshabilitar la generación de encabezados sin eliminar el código de su plantilla: en su archivo `newrelic.js` , agregue:

```js
browser_monitoring : {
    enable : false
}
```

También puede configurar la variable de entorno `NEW_RELIC_BROWSER_MONITOR_ENABLE=false`.

<Callout variant="caution">
  Deje siempre `ssl` entre el agente y el recolector de New Relic cuando utilice el monitoreo del browser.
</Callout>

Puede dejar la API de llamada en su lugar de manera segura incluso si no está utilizando el monitoreo del browser o el módulo `newrelic` .

* Si el monitoreo del browser está deshabilitado, o si hay un error que impide generar encabezados funcionales, el módulo `newrelic` genera un comentario HTML inofensivo.
* Si desactiva el módulo `newrelic` por completo, no se generará ningún contenido.
