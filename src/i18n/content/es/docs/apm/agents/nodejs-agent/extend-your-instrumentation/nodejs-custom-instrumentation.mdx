---
title: Instrumentación personalizada de Node.js
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: 'Expand Node.js instrumentation in New Relic for non-web transactions (frameworks, databases, segments, etc.). Use custom tracers to track async work.'
freshnessValidatedDate: never
translationType: machine
---

New Relic para Node.js instrumentó automáticamente la mayoría de las solicitudes web estándar, pero a veces desea una instrumentación ampliada. Con la API de instrumentación personalizada del agente, puede crear instrumentación para [marcos web](#web-framework), [almacenes de datos](#datastore) y [clientes de servicios de mensajes](#message-client) que de otro modo no serían compatibles.

La API de instrumentación personalizada del agente Node.js también le permite:

* Crear [transacción web](#web-txn) (útil para cosas como sockets web, donde la transacción no se puede crear automáticamente).
* Cree [transacciones en segundo plano](#background-txn) que no sean web (útil para grabar trabajos en segundo plano).
* Objetivo [secciones específicas de su código](#expanding-instrumentation) para un análisis más profundo.

## Requisitos de la versión del agente [#version]

Los métodos de instrumentación personalizada en este documento están disponibles a partir de [la versión 2.0.0 del agente Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes) Para obtener información sobre la instrumentación utilizando la API de instrumentación personalizada v1.x, consulte la documentación para [la instrumentación personalizada de Node.js heredada](/docs/agents/nodejs-agent/supported-features/nodejs-v1x-custom-instrumentation-legacy).

## Marco web no compatible con instrumentos [#web-framework]

A partir de la versión 2.0.0 del agente Node.js, New Relic proporciona una API para ampliar la instrumentación para un marco web adicional. Para obtener más información, incluido un tutorial, consulte la documentación de la [instrumentación framework web Node.js](http://newrelic.github.io/node-newrelic/tutorial-Webframework-Simple.html) en GitHub.

## Clientes de servicio de mensajes no compatibles con el instrumento [#message-client]

A partir de la versión 2.0.0 del agente Node.js, New Relic proporciona una API para ampliar la instrumentación para una biblioteca de servicios de mensajes adicional. Para obtener más información, incluido un tutorial, consulte la documentación de la [instrumentación del cliente del servicio de mensajes Node.js](http://newrelic.github.io/node-newrelic/tutorial-Messaging-Simple.html) en GitHub.

## Almacenes de datos no compatibles con instrumentos [#datastore]

A partir de la versión 2.0.0 del agente Node.js, New Relic proporciona una API para ampliar la instrumentación para almacenamiento de datos de biblioteca adicional. Para obtener más información, incluido un tutorial, consulte la documentación de la [instrumentación de almacenamiento de datos de Node.js](http://newrelic.github.io/node-newrelic/tutorial-Datastore-Simple.html) en GitHub.

## Instrumento transacción web [#web-txn]

Para crear [una transacción web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) personalizada, llame a `startWebTransaction` para iniciar la transacción. Para finalizar la transacción, utilice cualquiera de estas opciones:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Ending the transaction**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Promesa
      </td>

      <td>
        Si el controlador pasado a `startWebTransaction` devuelve una promesa, el agente finalizará la transacción cuando la promesa devuelta se resuelva o rechace.
      </td>
    </tr>

    <tr>
      <td>
        Manual
      </td>

      <td>
        Si llama `getTransaction` en el contexto de la nueva transacción, esto notifica al agente que la transacción se manejará manualmente.

        Si se llama `getTransaction` en el controlador, <DNT>**must**</DNT> finaliza la transacción llamando `transaction.end()`.
      </td>
    </tr>

    <tr>
      <td>
        Sincrónico
      </td>

      <td>
        Si no se cumple ninguna de estas opciones, la transacción finalizará cuando el controlador regrese sincrónicamente.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="example-webtx-socket-io"
    title="Ejemplo de transacción web personalizada: transacción de instrumento tres en socket.io"
  >
    Este ejemplo instrumentó una transacción `/websocket/ping` , una transacción `/websocket/update` y una transacción `/websocket/new-message` dentro de `socket.io`. El ejemplo `/ping` es sincrónico, mientras que los ejemplos `/new-message` y `/update` son asincrónicos.

    ```js
    const nr = require('newrelic');
    const app = require('http').createServer();
    const io = require('socket.io')(app);

    io.on('connection', function(socket) {
      socket.on('ping', function(data) {
        nr.startWebTransaction('/websocket/ping', function transactionHandler() {
          // Ended automatically after synchronously returning
          socket.emit('pong');
        });
      });
      socket.on('update', function(data) {
        nr.startWebTransaction('/websocket/update', function transactionHandler() {
          // Using API getTransaction
          const transaction = nr.getTransaction();
          updateChatWindow(data, function transactionHandler() {
            socket.emit('update-done');
            transaction.end();
          });
        });
      });
      socket.on('new-message', function(data) {
        nr.startWebTransaction('/websocket/new-message', function transactionHandler() {
          // Returning a promise
          return new Promise(function(resolve, reject) {
            addMessageToChat(data, function() {
              socket.emit('message-received');
              resolve();
            });
          });
        });
      });
    });
    ```

    Este método solo proporciona datos de tiempo básicos para la transacción creada. Para crear datos de tiempo más complejos y nombres de transacciones para un framework en particular, consulte los [documentos de la API de Node.js](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#instrumentWebframework) y el [tutorial de WebFramework relacionado](http://newrelic.github.io/node-newrelic/tutorial-Webframework-Simple.html) en GitHub.
  </Collapser>
</CollapserGroup>

## Instrumento fondo transacción [#background-txn]

Puede utilizar transacciones personalizadas para instrumentos [transacciones no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) (tareas en segundo plano); Por ejemplo:

* Trabajos periódicos dentro de tu aplicación
* Trabajo que continúa después de que se completa una solicitud.

Para implementar tareas en segundo plano, llame [`startBackgroundTransaction`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startBackgroundTransaction) en su controlador para iniciar una transacción en segundo plano. Para finalizar la transacción, utilice cualquiera de estas opciones:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Ending the transaction**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Promesa
      </td>

      <td>
        Si el controlador pasado a `startBackgroundTransaction` devuelve una promesa, el agente finalizará la transacción cuando la promesa devuelta se resuelva o rechace.
      </td>
    </tr>

    <tr>
      <td>
        Manual
      </td>

      <td>
        Si llama `getTransaction` en el contexto de la nueva transacción, esto notifica al agente que la transacción se manejará manualmente.

        Si se llama `getTransaction` en el controlador, <DNT>**must**</DNT> finaliza la transacción llamando `transaction.end()`.
      </td>
    </tr>

    <tr>
      <td>
        Sincrónico
      </td>

      <td>
        Si no se cumple ninguna de estas opciones, la transacción finalizará cuando el controlador regrese sincrónicamente.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="example-instrument-update"
    title="Ejemplo de transacción en segundo plano personalizada: instrumento dentro de setInterval"
  >
    Este ejemplo instrumentó `update:cache` dentro de `setInterval`:

    ```js
    const nr = require('newrelic');
    const redis = require('redis').createClient();

    // Using API getTransaction to manage ending the transaction
    setInterval(function() {
      nr.startBackgroundTransaction('update:cache', function transactionHandler() {
        const newValue = someDataGenerator();
        const transaction = nr.getTransaction();

        redis.set('some:cache:key', newValue, function() {
          transaction.end();
        });
      });
    }, 30000); // Every 30s

    //Using a promise to manage ending the transaction
    setInterval(function() {
      nr.startBackgroundTransaction('flush:cache', function transactionHandler() {
        return new Promise(function(resolve, reject) {
          flushCache(redis, function afterFlush(err) {
            if (err) {
              return reject(err);
            }
            resolve();
          });
        });
      });
    }, 60 * 60 * 1000);
    ```
  </Collapser>
</CollapserGroup>

## Ampliar instrumentación dentro de transacción [#expanding-instrumentation]

Puede crear instrumentación utilizando los [métodos de registro de instrumentación en la API](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#custom-instrumentation-api). Escribir instrumentación utilizando la API de instrumentación le permite especificar métricas y nombres con mayor detalle mediante métodos de "parche de mono" (reemplazo de funciones) en objetos relevantes. Otras opciones pueden ofrecer visibilidad de transacciones web que ya están instrumentadas, u obtener información valiosa sobre la base de datos y otros trabajos en transacción que no se instrumentan automáticamente.

Para hacer esto, envuelva su devolución de llamada en un rastreador personalizado. El rastreador personalizado crea y recopila métricas específicas para un segmento adicional dentro de una transacción existente, como una función particular o una llamada a una base de datos.

* Para instrumentar devoluciones de llamada individuales, llame a `startSegment()` dentro de la devolución de llamada y mueva la lógica principal de devolución de llamada a la función `handler` .
* Para instrumentar una función que se llama dentro de una función asincrónica, envuelva tanto la función objetivo como su función asincrónica principal con [`startSegment()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startSegment).

<Callout variant="important">
  Estos ejemplos deben colocarse en el código que se ejecuta en una transacción. No importa el origen de la transacción, personalizada o creada automáticamente.
</Callout>

<CollapserGroup>
  <Collapser
    id="wrap-single-callback"
    title="Ejemplo: instrumento una devolución de llamada"
  >
    Este ejemplo rastrea una única devolución de llamada:

    ```js
    // Wrap the method in a segment.
    nr.startSegment('db:createObject', true, function(cb) {
      // This is recorded as the `db:createObject` segment.
      db.createObject(cb);
    }, function(err, result) {
      // This is recorded as the callback to the `db:createObject` segment.
      if (util.handleError(err, res)) {
        return;
      }
      res.write(JSON.stringify(result.rows[0].id));
      res.write('\n');
      res.end();
    });
    ```
  </Collapser>

  <Collapser
    id="wrap-two-callbacks"
    title="Ejemplo: funciones de instrumento asincrónico usando devolución de llamada"
  >
    Este ejemplo realiza un seguimiento de `pg.connect` y `client.query`. Esto se debe a que `client.query` es llamado por una función principal asincrónica (`pg.connect`). De lo contrario, no obtendrá ningún dato de `client.query`. Esto permite a `startSegment()` propagar la transacción activa a través de esos límites asincrónicos.

    ```js
    nr.startSegment('pg:connect', true, function(cb) {
      pg.connect(config.db_string, cb);
    }, function(err, client, done) {
      if (util.handleError(err, '500', res)) {
        return done();
      }

      nr.startSegment('pg:query', true, function(cb) {
        client.query('SELECT count(*) FROM test_count', cb);
      }, function(err, result) {
        if (util.handleError(err, '500', res)) {
          return done();
        }

        res.write(result.rows[0].count);
        res.write('\n');
      });
    });
    ```
  </Collapser>

  <Collapser
    id="example-wrap-two-callbacks"
    title="Ejemplo: instrumento asincrónico funciona usando promesas"
  >
    Este ejemplo es el mismo que el de devolución de llamada, pero para interactuar con una API basada en promesas. Para promesas, simplemente devuelva la promesa y llame a `then` después de `startSegment` para continuar su ejecución.

    ```js
    nr.startSegment('pg:connect', true, function() {
      // This `pg:connect` segment will time until the returned promise
      // either resolves or rejects.
      return pg.connect(config.db_string);
    }).then(function(client) {
      // The transaction context is propagated into following promises.
      return nr.startSegment('pg:query', true, function() {
        return client.query('SELECT count(*) FROM test_count');
      }).then(function(result) {
        res.write(result.rows[0].count);
        res.write('\n');
        res.end();
      }, function(err) {
        // Error from querying.
        util.handleError(err, '500', res);
      }).finally(function() {
        return client.release();
      });
    }, function(err) {
      // Error from connecting.
      util.handleError(err, '500', res);
    });
    ```
  </Collapser>

  <Collapser
    id="example-async-functions"
    title={<>Ejemplo: funciones del instrumento <InlineCode>async</InlineCode></>}
  >
    Este ejemplo muestra cómo codificar instrumentos usando `async`/`await` para controlar el trabajo asincrónico. Esto requiere el uso de Node.js 8 o superior, así como el agente New Relic para Node.js v2.3.0 o superior.

    ```js
    try {
      const client = await nr.startSegment('pg:connect', true, async () => {
        // Async functions simply return promises, so this example is
        // very similar to the promise one.
        return await pg.connect(config.db_string);
      });

      // The transaction context is propagated into the code following `await`.
      try {
        const result = await nr.startSegment('pg:query', true, async () => {
          return await client.query('SELECT count(*) FROM test_count');
        });

        res.write(result.rows[0].count);
        res.write('\n');
        res.end();
      } catch (err) {
        // Error from querying.
        util.handleError(err, '500', res);
      } finally {
        await client.release();
      }
    } catch (err) {
      // Error from connecting.
      util.handleError(err, '500', res);
    }
    ```
  </Collapser>

  <Collapser
    id="wrap-sync-function"
    title="Ejemplo: instrumento con función síncrona"
  >
    Este ejemplo muestra cómo se puede utilizar `startSegment` para registrar una función síncrona que es responsable de asignar su valor de retorno a una variable.

    ```js
    const result = nr.startSegment('calculateTotal', true, function() {
      return calculateTotal(outerVar1, outerVar2);
    });
    ```

    <Callout variant="important">
      La función `startSegment` está disponible del agente Node.js 3.3.0 liberar.
    </Callout>
  </Collapser>
</CollapserGroup>
