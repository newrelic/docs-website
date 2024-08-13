---
title: Sem rastreamento de pilha (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps for situations when stack traces are missing for error traces with your New Relic .NET app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Dependendo da situação, você poderá encontrar [rastreamento de erros](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) na interface do APM que não inclui rastreamento de pilha para seu aplicativo .NET.

## Solução

Dependendo da situação, siga estes procedimentos de resolução de problemas.

<CollapserGroup>
  <Collapser
    id="500-errors"
    title="Nenhum rastreamento de pilha para 500 erros"
  >
    Esse é [um comportamento normal](#cause) de como o agente .NET lida com 500 erros. Para forçar o relatório do rastreamento de pilha, chame a API .NET da New Relic a partir do seu próprio código. A execução do método `NewRelic.NoticeError(Exception)` fará com que um erro seja relatado junto com o backtrace stack representado por `Exception`. Para obter mais informações sobre esse método e suas sobrecargas, consulte [API do agente .NET da New Relic no GitHub](/docs/agents/net-agent/net-agent-api/noticeerror-net-agent-api/).
  </Collapser>
</CollapserGroup>

## Causa

Retornar um erro `500` significa que o próprio servidor do aplicativo detectou um erro e definiu o código de status HTTPS `500` .

* Se a condição de erro foi detectada e tratada pela lógica do aplicativo, não houve nenhum objeto de exceção e, portanto, nenhuma stack.
* Se houve um objeto de exceção em algum momento, mas ele foi tratado internamente pelo código do aplicativo que definiu o status `500` na resposta, a exceção nunca se tornou visível para o agente .NET. Não há stack disponível para o agente .NET relatar.

Quando o rastreamento de pilha é relatado, o erro resulta de uma exceção que não foi capturada e tratada na lógica do servidor do aplicativo. O agente .NET vê a exceção não tratada durante uma transação de monitoramento e, portanto, relata o stack trace.

Entretanto, nenhum rastreamento de pilha aparece para os erros `500` porque o servidor do aplicativo está manipulando os erros e, em seguida, configurando o código de status. O próprio código do aplicativo não retém nenhum rastreamento de pilha.
