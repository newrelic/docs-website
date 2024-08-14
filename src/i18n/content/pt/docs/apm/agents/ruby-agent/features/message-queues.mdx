---
title: Fila de mensagens
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'New Relic for Ruby supports the Bunny RabbitMQ client library, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

O agente New Relic Ruby oferece suporte à [biblioteca cliente Bunny RabbitMQ](https://rubygems.org/gems/bunny), fornecendo insights sobre o desempenho do processamento de mensagens, tanto para mensagens recebidas quanto enviadas.

A interface APM mostra a transação iniciada por meio do recebimento de mensagens RabbitMQ (inscrever/consumir mensagens) como <DNT>**Message**</DNT> tarefas em segundo plano. A criação de mensagens via RabbitMQ também aparece no trace da transação.

## Requisitos

Requer [agente New Relic Ruby versão 4.3.0 ou superior](/docs/release-notes/agent-release-notes/ruby-release-notes). A instrumentação é automática para [versões suportadas do Bunny AMQP](/docs/agents/ruby-agent/getting-started/ruby-agent-requirements-supported-frameworks#other) e não requer configuração adicional.

## Melhorias de desempenho com tarefas em segundo plano [#background]

Uma maneira de aumentar a capacidade de resposta do aplicativo web é delegar trabalho a processos em segundo plano. fila de mensagens são comumente usadas para essa comunicação entre processos.

No contexto de sistemas de enfileiramento de mensagens, os aplicativos normalmente interagem com corretores de mensagens para enviar e receber mensagens. A biblioteca cliente RabbitMQ Bunny permite que o aplicativo Ruby faça interface com corretores de mensagens que implementam o Advanced Message Queuing Protocol (AMQP).

O agente Ruby da New Relic mostra mensagens enviadas e recebidas usando a biblioteca cliente RabbitMQ. Com essa visibilidade, você pode ver detalhes, incluindo:

* Número de mensagens produzidas pelo seu aplicativo
* Tempo que seu aplicativo gasta publicando mensagens
* Tempo que seu aplicativo gasta processando mensagens "consumidas"

[O APM](#view-queue) agrupa e relata convenientemente operações que interagem com filas. Ao analisar essas informações, você pode identificar mais facilmente gargalos e áreas para melhoria de desempenho em sua arquitetura de passagem de mensagens.

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
        `publish`
      </td>

      <td>
        `pop`

        `subscribe (with block)`
      </td>
    </tr>
  </tbody>
</table>

## Ver na interface do New Relic [#view-queue]

As operações da fila de mensagens são visíveis em vários locais na interface do APM:

<CollapserGroup>
  <Collapser
    id="view-in-txn-page"
    title="Página de transação"
  >
    As operações de fila aparecem na [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-dashboard)do APM para o aplicativo selecionado. As métricas `Put` e `Take` aparecem em <DNT>**Breakdown table**</DNT> e são categorizadas como métrica `MessageBroker` . Aqui está um exemplo:

    <img
      title="transactions_page.png"
      alt="transactions_page.png"
      src="/images/apm_screenshot-full_transactions-overview.webp"
    />

    [Trace da transação](/docs/apm/transactions/transaction-traces/transaction-traces) também fornece detalhes adicionais para mensagens.

    <Callout variant="tip">
      Você pode [selecionar trace da transação](/docs/apm/transactions/transaction-traces/viewing-transaction-traces) nas páginas <DNT>**Summary**</DNT> ou <DNT>**Transactions**</DNT> do aplicativo no APM.
    </Callout>
  </Collapser>

  <Collapser
    id="view-in-txn-trace-summary"
    title="Página de resumo do rastreamento da transação"
  >
    A [página**de resumo de transação da transação** ](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)pode mostrar operações `Put` e `Take` na seção **Componentes mais lentos** . Por exemplo:

    <img
      title="trace_summary.png"
      alt="trace_summary.png"
      src="/images/apm_screenshot-full_trace-summary.webp"
    />
  </Collapser>

  <Collapser
    id="view-in-txn-trace-page"
    title="Guia de detalhes do rastreamento da transação"
  >
    A página <DNT>**Transaction trace**</DNT> inclui uma guia <DNT>**Details**</DNT> dedicada que mostra informações mais detalhadas sobre a transação. Aqui está um exemplo:

    <img
      title="trace_details.png"
      alt="trace_details.png"
      src="/images/apm_screenshot-full_trace-details.webp"
    />
  </Collapser>
</CollapserGroup>
