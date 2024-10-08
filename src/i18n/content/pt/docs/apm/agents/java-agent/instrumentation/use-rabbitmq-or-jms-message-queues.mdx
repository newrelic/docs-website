---
title: Use RabbitMQ ou JMS para fila de mensagens
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: 'To troubleshoot queue operations'' performance problems, use RabbitMQ with New Relic APM for Java applications.'
freshnessValidatedDate: never
translationType: machine
---

Nosso agente Java versão 3.9.0 ou superior oferece suporte à [API Java Message Service (JMS) 1.1](https://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html#package.description) e à [biblioteca cliente Java RabbitMQ](https://www.rabbitmq.com/java-client.html). Isso fornece insights sobre o desempenho do processamento de mensagens, tanto para mensagens recebidas quanto para mensagens enviadas.

A interface <InlinePopover type="apm"/>mostrará a transação iniciada via JMS 1.1 ou recebimento de mensagem RabbitMQ como <DNT>**Message**</DNT> tarefas em segundo plano. A criação de mensagens via JMS ou RabbitMQ também aparece no trace da transação.

## Requisitos [#installation]

Para monitor a atividade do cliente RabbitMQ, certifique-se de ter baixado e instalado [o agente Java versão 3.9.0 ou superior](/docs/release-notes/agent-release-notes/java-release-notes) do New Relic.

Para monitor JMS, certifique-se de ter baixado e instalado [o agente Java versão 3.3.1 ou superior](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-331) do New Relic.

<Callout variant="tip">
  Para um monitoramento mais aprofundado do RabbitMQ, recomendamos [nossa integração no host do RabbitMQ](/docs/infrastructure/host-integrations/host-integrations-list/rabbitmq-monitoring-integration).
</Callout>

## Melhorias de desempenho com tarefas em segundo plano [#background]

Uma maneira de aumentar a capacidade de resposta do aplicativo web é delegar trabalho a processos em segundo plano. fila de mensagens são comumente usadas para essa comunicação entre processos.

No contexto de sistemas de enfileiramento de mensagens, os aplicativos normalmente interagem com corretores de mensagens para enviar e receber mensagens. A biblioteca cliente Java RabbitMQ permite que o aplicativo Java faça interface com corretores de mensagens que implementam o Advanced Message Queuing Protocol (AMQP) 0.9.

O agente Java da New Relic mostra mensagens enviadas e recebidas usando a biblioteca cliente RabbitMQ e JMS. Com essa visibilidade, você pode ver detalhes, incluindo:

* Número de mensagens tratadas pelo seu aplicativo
* Tempo que seu aplicativo gasta publicando mensagens
* Tempo que seu aplicativo gasta processando mensagens "retiradas da fila"

[O APM](#view-queue) agrupa e reporta convenientemente operações que interagem com filas temporárias. Ao analisar essas informações, você pode identificar mais facilmente áreas onde os processos demoram muito e podem ser melhor tratados como mensagens em segundo plano.

## Operações de fila [#queue-ops]

Os pontos de entrada suportados para operações de fila aparecem como `Put` (publicar uma mensagem) ou `Take` (receber uma mensagem) na interface do usuário do APM.

<table>
  <thead>
    <tr>
      <th width={150}>
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
        `basicPublish`
      </td>

      <td>
        `basicGet`, `nextDelivery` e `handleDelivery`
      </td>
    </tr>

    <tr>
      <td>
        JMS
      </td>

      <td>
        `send`
      </td>

      <td>
        `receive`, `receiveNoWait` e `onMessage`
      </td>
    </tr>
  </tbody>
</table>

## Ver operações de fila de mensagens [#view-queue]

As operações de fila aparecem na [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-dashboard)do APM para o aplicativo selecionado. As métricas `Put` e `Take` aparecem em <DNT>**Breakdown table**</DNT> e são categorizadas como métrica `MessageBroker` . [O rastreamento da transação](/docs/apm/transactions/transaction-traces/transaction-traces) pode fornecer detalhes adicionais.

<img
  title="Breakdown table inside the transaction details page"
  alt="Breakdown table inside the transaction details page"
  src="/images/apm_screenshot-crop_breakdown-table.webp"
/>

<figcaption>
  Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**</DNT> e clique no seu aplicativo. Na seção <DNT>**Monitor**</DNT> , clique em <DNT>**Transaction**</DNT> e selecione uma transação para ver a tabela detalhada.
</figcaption>

Outros lugares onde as informações do RabbitMQ podem aparecer:

* A [página**de resumo de transação da transação** ](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)pode mostrar operações `Put` e `Take` na seção **Componentes mais lentos** .
* A página **Transaction trace** pode incluir uma guia **Messages** dedicada.
