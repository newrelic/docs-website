---
title: Monitoramento do Browser e do agente Node.js
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: How to manually set up browser instrumentation New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

Com o agente Node.js, você pode adicionar [instrumentação de browser](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) às suas páginas da web. Para usar <InlinePopover type="browser"/>com seu agente Node.js, certifique-se de ter a [versão mais recente](/docs/agents/nodejs-agent/installation-configuration/installing-maintaining-nodejs#upgrading) do agente Node.js.

Para habilitar o monitoramento do browser na interface do usuário, siga os procedimentos para [instalar o agente browser](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent). Em seguida, siga os procedimentos nesta seção para configurar o agente Node.js.

## Insira o cabeçalho JavaScript [#procedures]

A instrumentação para o agente Node.js pode continuar além do seu aplicativo no browser do usuário final. O módulo `newrelic` pode gerar cabeçalhos `script` que, quando inseridos em seus templates HTML, capturarão o tempo final de carregamento da página do usuário. Os cabeçalhos devem ser injetados manualmente, mas nenhuma configuração extra é necessária.

1. No início da tag `head` da sua página HTML, insira os resultados de `newrelic.getBrowserTimingHeader()` após qualquer metatag `CHARSET`.

   Exceção: para compatibilidade máxima <DNT>Internet Explorer</DNT> , insira os resultados de `newrelic.getBrowserTimingHeader()` após qualquer meta tag `X-UA-COMPATIBLE HTTP-EQUIV`.

2. Chame o cabeçalho uma vez para cada solicitação. Não armazene em cache o cabeçalho.

A geração de cabeçalhos é rápida e não exige que seu aplicativo faça solicitações extras ao New Relic.

## Exemplos framework [#variables]

Aqui estão alguns exemplos de como configurar monitoramento de Browser com diferentes frameworks e templates.

<CollapserGroup>
  <Collapser
    id="example-express"
    title="Expresso e jade"
  >
    Este exemplo usa [Express](http://expressjs.com), uma framework de aplicativo da web, e [jade](http://jade-lang.com), um módulo de modelo. Embora as especificidades sejam diferentes com outras estruturas, esta abordagem geral deverá funcionar na maioria dos casos.

    A maneira mais simples de inserir títulos de temporização do browser é passar o módulo `newrelic` para o seu modelo e, em seguida, chamar `newrelic.getBrowserTimingHeader()` a partir do modelo.

    No seu `app.js`:

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

    No seu `layout.jade`:

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
    title="Expresso e gole"
  >
    Este exemplo usa Express com [Swig](https://github.com/paularmstrong/swig "O link abre em uma nova janela").

    No seu `app.js`:

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

    No seu `views/user.html`:

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
    title="Hapi.js e guiador"
  >
    Este exemplo usa [hapi.js](http://hapijs.com/) e [handlebars](http://handlebarsjs.com). Outras linguagens de modelagem semelhantes normalmente exigem colchetes triplos; por exemplo, usando [bigode](https://mustache.github.io/mustache.5.html) com [hogan-express](https://github.com/vol4ok/hogan-express). Isso ajuda a evitar o escape do conteúdo do script.

    Usando <DNT>**hapi**</DNT>, no seu `app.js`:

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

    No seu `templates/homepage.html`:

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

## Desativar geração de cabeçalho [#disabling]

Por padrão, as chamadas para `newrelic.getBrowserTimingHeader()` devem retornar cabeçalhos válidos. Para desativar a geração de cabeçalho sem remover o código do modelo: No arquivo `newrelic.js` , adicione:

```js
browser_monitoring : {
    enable : false
}
```

Você também pode definir a variável de ambiente `NEW_RELIC_BROWSER_MONITOR_ENABLE=false`.

<Callout variant="caution">
  Sempre deixe `ssl` entre o agente e o coletor New Relic ao utilizar o monitoramento de Browser.
</Callout>

Você pode deixar a chamada de API ativa com segurança mesmo se não estiver usando o monitoramento do browser ou o módulo `newrelic` .

* Se o monitoramento do Browser estiver desabilitado, ou se houver um erro que impeça a geração de cabeçalhos funcionais, o módulo `newrelic` gera um comentário HTML inócuo.
* Se você desativar completamente o módulo `newrelic` , nenhum conteúdo será gerado.
