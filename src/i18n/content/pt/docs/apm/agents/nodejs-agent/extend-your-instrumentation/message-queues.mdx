---
title: Fila de mensagens
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: 'New Relic''s Node.js agentsupports the amqplib RabbitMQ client library, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

O agente New Relic Node.js oferece suporte à [biblioteca de cliente amqplib RabbitMQ](https://www.npmjs.com/package/amqplib), fornecendo insights sobre o desempenho do processamento de mensagens, tanto para mensagens recebidas quanto para mensagens enviadas.

A interface APM mostrará a transação iniciada por meio do recebimento de mensagens RabbitMQ (assinar/consumir mensagens) como <DNT>**Message**</DNT> tarefas em segundo plano. A criação de mensagens via RabbitMQ também aparece no trace da transação.

Este recurso requer [o agente New Relic Node.js versão 2.0.0 ou superior](/docs/release-notes/agent-release-notes/nodejs-release-notes).

## Melhorias de desempenho com tarefas em segundo plano [#background]

Uma maneira de aumentar a capacidade de resposta do aplicativo web é delegar trabalho a processos em segundo plano. fila de mensagens são comumente usadas para essa comunicação entre processos.

No contexto de sistemas de enfileiramento de mensagens, os aplicativos normalmente interagem com corretores de mensagens para enviar e receber mensagens. A biblioteca cliente `amqplib` permite que o aplicativo Node.js faça interface com agentes de mensagens que implementam o Advanced Message Queuing Protocol (AMQP) 0.9 ou superior.

O agente Node.js da New Relic mostra mensagens enviadas e recebidas usando a biblioteca cliente RabbitMQ. Com essa visibilidade, você pode ver detalhes, incluindo:

* Número de mensagens produzidas pelo seu aplicativo
* Tempo que seu aplicativo gasta publicando mensagens
* Tempo que seu aplicativo gasta processando mensagens "consumidas"

[O APM](#view-queue) agrupa e relata convenientemente operações que interagem com filas. Ao analisar essas informações, você pode identificar mais facilmente gargalos e áreas para melhoria de desempenho em sua arquitetura de passagem de mensagens.

## Operações de fila [#queue-ops]

Os pontos de entrada suportados para operações de fila aparecem como `Put` (publicar uma mensagem) ou `Take` (receber uma mensagem) na interface do usuário do APM.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Queue operations**
        </DNT>
      </th>

      <th>
        <DNT>
          **Publish a message (`Put` in UI)**
        </DNT>
      </th>

      <th>
        <DNT>
          **Receive a message (`Take` in UI)**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        RabbitMQ
      </td>

      <td>
        `publish`

        `sendToQueue`
      </td>

      <td>
        `get`

        `consume`
      </td>
    </tr>
  </tbody>
</table>

## Ver na interface do New Relic [#view-queue]

As operações de fila aparecem na [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-dashboard)do APM para o aplicativo selecionado. As métricas `Put` e `Take` aparecem em <DNT>**Breakdown table**</DNT> e são categorizadas como métrica `MessageBroker` . Aqui está um exemplo:

<img
  title="metric-breakdown-table"
  alt="metric-breakdown-table"
  src="/images/apm_screenshot-crop_messaging-breakdown-table.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Transactions > (select a transaction):**</DNT> O <DNT>**Breakdown table**</DNT> da transação categoriza as operações da fila como métrica `MessageBroker` e as rotula como `Put` (publicar uma mensagem) ou `Take` (receber uma mensagem).
</figcaption>

A [página**de resumo de transação da transação** ](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)pode mostrar operações `Put` e `Take` na seção **Componentes mais lentos** . Por exemplo:

<img
  title="slow-message-component"
  alt="slow-message-component"
  src="/images/apm_screenshot-crop_trx-slowest-components.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Summary > (select a transaction trace):**</DNT> Neste exemplo, o <DNT>**Summary**</DNT> do trace da transação selecionado mostra as operações do RabbitMQ no gráfico de barras coloridas. A seção <DNT>**Slowest components**</DNT> também lista os resultados `Put` e `Take` do RabbitMQ.
</figcaption>

A [página<DNT>**Transaction trace**</DNT> ](/docs/apm/transactions/transaction-traces/transaction-traces)também inclui uma guia <DNT>**Messages**</DNT> dedicada que mostra um resumo da atividade da mensagem que ocorreu como parte da transação.

<Callout variant="tip">
  Você pode [selecionar trace da transação](/docs/apm/transactions/transaction-traces/viewing-transaction-traces) nas páginas <DNT>**Summary**</DNT> ou <DNT>**Transactions**</DNT> do aplicativo em <DNT>**APM**</DNT>.
</Callout>
