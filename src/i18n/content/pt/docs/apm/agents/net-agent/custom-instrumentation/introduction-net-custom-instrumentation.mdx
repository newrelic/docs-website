---
title: Introdução à instrumentação personalizada do .NET
tags:
  - Agents
  - NET agent
  - Custom instrumentation
metaDescription: 'How to instrument (or time) code that New Relic''s .NET agent does not instrument by default, and how to choose between the two methods.'
freshnessValidatedDate: never
translationType: machine
---

Para frameworks totalmente suportados ([.NET framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent) \| [.NET Core](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent)), o agente New Relic .NET coleta e reporta automaticamente informações sobre [transações da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) e tarefas do browser. No entanto, se você estiver usando uma framework de aplicativo que não é instrumentada automaticamente (ou não está usando uma framework), você poderá ver grandes blocos de tempo na interface do usuário do New Relic sem detalhes ou poderá não ver nenhuma transação. Nesse caso, você pode usar instrumentação personalizada para adicionar transação e detalhes.

Este documento descreve como instrumentar atividades que não são instrumentadas pelo agente .NET por padrão. Para outras maneiras de configurar a instrumentação do seu aplicativo, consulte [Guia para usar a API do agente .NET](/docs/agents/net-agent/api-guides/guide-using-net-agent-api).

<Callout variant="important">
  Para ambas as estruturas suportadas pelo agente (.NET framework e .NET Core), a instrumentação personalizada é feita da mesma maneira, salvo indicação em contrário.
</Callout>

## Escolha um método de instrumentação personalizada [#ci-methods]

O agente .NET oferece suporte a dois métodos de instrumentação personalizada:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Método
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Atributo instrumentação personalizada
      </td>

      <td>
        Instrumente seu código decorando seus métodos com um atributo. A instrumentação atributo é mais simples de implementar do que a instrumentação XML porque você só precisa adicionar um único decorador, no mesmo local do seu código que o método que você deseja instrumentar.

        Para instruções, veja [instrumentação personalizada via atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net).
      </td>
    </tr>

    <tr>
      <td>
        Instrumentação XML personalizada
      </td>

      <td>
        Instrumente seu código listando os métodos alvo em um arquivo XML. A instrumentação XML é mais complexa que a instrumentação atributo e falhará se você alterar o nome do assembly, classe ou método que deseja instrumentar. No entanto, a instrumentação XML não exige que você modifique o código-fonte.

        Para obter instruções, consulte [Criar transação via XML](/docs/agents/net-agent/instrumentation/net-custom-transactions) e [Adicionar detalhes à transação via XML](/docs/agents/net-agent/custom-instrumentation/add-detail-transactions-xml-net#blocking-instrumentation).
      </td>
    </tr>
  </tbody>
</table>

## Criar transação vs. adicionar detalhes [#new-existing]

Ao adicionar instrumentação personalizada por meio de qualquer método, você precisa escolher entre criar uma nova transação ou adicionar instrumentação a uma transação existente:

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Situação
      </th>

      <th>
        Recomendação
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        O método que você deseja usar não aparece na interface do New Relic
      </td>

      <td>
        <DNT>**Create a new transaction.**</DNT> Para obter detalhes, consulte:

        * [Instrumentação personalizada via atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net)
        * [Criar transação via XML](/docs/agents/net-agent/instrumentation/net-custom-transactions)
      </td>
    </tr>

    <tr>
      <td>
        A transação aparece na interface do New Relic, mas contém seções de tempo não instrumentado
      </td>

      <td>
        <DNT>**Add detail to an existing transaction.**</DNT> Para obter detalhes, consulte:

        * [Instrumentação personalizada via atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net)
        * [Adicionar detalhes à transação via XML](/docs/agents/net-agent/custom-instrumentation/add-detail-transactions-xml-net)
      </td>
    </tr>
  </tbody>
</table>

## Classificar como "web" ou "não-web" (somente método de atributo) [#web-background]

APM separa [transação](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) em transação da web e [transação fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) na interface. Quando você adiciona detalhes a uma transação existente, sua categoria é determinada pela categoria da transação pai.

Ao criar uma transação via instrumentação personalizada utilizando o [método de atributo](#ci-methods), você deve categorizá-la como <DNT>**web**</DNT> ou <DNT>**non-web**</DNT>. (Isso não é possível com instrumentação XML; todas as transações criadas em XML são classificadas como <DNT>**non-web**</DNT>.)

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Categoria
      </th>

      <th>
        Quando usar
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Rede
      </td>

      <td>
        Use <DNT>**web**</DNT> para solicitações da web. Você só pode marcar novas transações como transações da web com [instrumentação personalizada usando atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net) e não usando XML.
      </td>
    </tr>

    <tr>
      <td>
        Não-web
      </td>

      <td>
        Use <DNT>**non-web**</DNT> para outros tipos de solicitações em segundo plano, como aplicativos e serviços de console.

        * Todas as transações [criadas usando XML](/docs/agents/net-agent/instrumentation/net-custom-transactions) são classificadas como não-web.
        * As transações [criadas usando atributo](/docs/agents/net-agent/api-guides/custom-instrumentation-attributes-net) podem ser classificadas como web ou não-web.
      </td>
    </tr>
  </tbody>
</table>
