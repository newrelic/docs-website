---
title: Solucionar problemas do consumidor de mensagens
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

Os serviços de consumidor de mensagens têm algumas diferenças em relação aos servidores HTTP que tornam o monitoramento deles mais difícil. Este documento discute essas limitações e maneiras de contorná-las com o agente Node.js da New Relic.

Como uma mensagem não tem necessariamente uma resposta, pode ser difícil determinar o fim de uma transação. Se o agente Node.js da New Relic não puder determinar quando um consumidor de mensagem será concluído, ele encerrará imediatamente a transação. Siga estas dicas de resolução de problemas dependendo do seu aplicativo.

## Solução

A solução para esse problema depende se você está usando retorno de chamada ou promessas:

### Retorno de chamada

Ao usar uma API de mensagens baseada em retorno de chamada, como `amqplib` 's `callback_api`, não há uma maneira fácil de determinar quando seu consumidor termina. Aqui está um exemplo.

<CollapserGroup>
  <Collapser
    id="callback-problem"
    title="Problema de retorno de chamada"
  >
    Neste exemplo, todas as transações criadas para este serviço serão encerradas imediatamente e não mostrarão nenhum trabalho realizado por `doWorkWithMessage`.

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

    Para cronometrar adequadamente a transação, é necessário obter a transação e encerrá-la manualmente, conforme mostrado na solução a seguir.
  </Collapser>

  <Collapser
    id="callback-solution"
    title="Solução"
  >
    Para cronometrar adequadamente a transação, obtenha a transação e finalize-a manualmente. Modifique o consumidor para isto:

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

### Promessas

Para servidores baseados em promessas, o consumidor da mensagem simplesmente precisa retornar uma promessa. Quando essa promessa for resolvida ou rejeitada, a transação será encerrada. Aqui está um exemplo:

<CollapserGroup>
  <Collapser
    id="promise-problem"
    title="Problema de promessa"
  >
    Neste exemplo, `doWorkWithMessage` retorna uma promessa:

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
    title="Solução"
  >
    Para obter o tempo correto, retorne o final da cadeia modificando o código para:

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
