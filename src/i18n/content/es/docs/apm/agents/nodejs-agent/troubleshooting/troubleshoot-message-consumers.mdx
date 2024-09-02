---
title: Mensaje de solución de problemas consumidor
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: Troubleshooting procedures for message consumer services monitored by New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Los servicios de consumidor de mensajes tienen algunas diferencias con los servidores HTTP que dificultan su monitoreo. Este documento analiza esas limitaciones y las formas de solucionarlas con el agente New Relic Node.js.

Debido a que un mensaje no necesariamente tiene una respuesta, puede resultar difícil determinar el final de una transacción. Si el agente Node.js de New Relic no puede determinar cuándo finalizará el consumidor de mensajes, finalizará la transacción inmediatamente. Siga estos consejos de resolución de problemas según su aplicación.

## Solución

La solución a este problema depende de si estás utilizando devolución de llamada o promesas:

### Devolución de llamada

Cuando se utiliza una API de mensajería basada en devolución de llamada, como la `callback_api` de `amqplib`, no existe una forma sencilla de determinar cuándo el consumidor ha terminado. Aquí hay un ejemplo.

<CollapserGroup>
  <Collapser
    id="callback-problem"
    title="Problema de devolución de llamada"
  >
    En este ejemplo, todas las transacciones creadas para este servicio finalizarán inmediatamente y no mostrarán nada del trabajo realizado por `doWorkWithMessage`.

    ```js
    const newrelic = require('newrelic');
    const amqp = require('amqplib/callback_api');

    // Connect, make a channel, and assert required queues...

    channel.consume('my.queue', (msg) => {
      doWorkWithMessage(msg, (err) => {
        if (err) {
          logger.error(err);
          channel.reject(msg, true); // Requeue message on failure.
        }
      });
    }, { noAck: true });
    ```

    Para cronometrar correctamente la transacción, debe obtenerla y finalizarla manualmente, como se muestra en la siguiente solución.
  </Collapser>

  <Collapser
    id="callback-solution"
    title="Solución"
  >
    Para programar correctamente la transacción, obtenga la transacción y finalícela manualmente. Modifique el consumidor a esto:

    ```js
    channel.consume('my.queue', (msg) => {
      var transaction = newrelic.getTransaction();

      doWorkWithMessage(msg, (err) => {
        if (err) {
          logger.error(err);
          channel.reject(msg, true); // Requeue message on failure.
        }

        transaction.end();
      });
    }, { noAck: true });
    ```
  </Collapser>
</CollapserGroup>

### Promesas

Para los servidores basados en promesas, el consumidor del mensaje simplemente necesita devolver una promesa. Cuando esa promesa se resuelva o rechace, la transacción finalizará. Aquí hay un ejemplo:

<CollapserGroup>
  <Collapser
    id="promise-problem"
    title="Problema de promesa"
  >
    En este ejemplo, `doWorkWithMessage` devuelve una promesa:

    ```js
    const newrelic = require('newrelic');
    const amqp = require('amqplib');

    // Connect, make a channel, and assert required queues...

    channel.consume('my.queue', (msg) => {
      doWorkWithMessage(msg).catch((err) => {
        if (err) {
          logger.error(err);
          channel.reject(msg, true); // Requeue message on failure.
        }
      });
    }, { noAck: true });
    ```
  </Collapser>

  <Collapser
    id="promise-solution"
    title="Solución"
  >
    Para obtener la sincronización correcta, devuelva el final de la cadena modificando el código a:

    ```js
    channel.consume('my.queue', (msg) => {
      return doWorkWithMessage(msg).catch((err) => {
        if (err) {
          logger.error(err);
          channel.reject(msg, true); // Requeue message on failure.
        }
      });
    }, { noAck: true });
    ```
  </Collapser>
</CollapserGroup>
