---
title: Sem rastreamento de pilha
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: Troubleshooting steps for situations when stack traces are missing for error traces with your New Relic Java app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Dependendo da situação, você poderá encontrar [rastreamento de erros](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) na interface APM que não inclui rastreamento de pilha para seu aplicativo.

## Solução

Dependendo da situação, siga estes procedimentos de resolução de problemas.

<CollapserGroup>
  <Collapser
    id="Caps on error reporting"
    title="Limites no relatório de erros"
  >
    Por motivos de desempenho, limitamos o relatório de erros da seguinte forma:

    * 100 eventos por minuto por instância de agente
    * 20 detalhes trace por minuto por instância de agente
  </Collapser>

  <Collapser
    id="Handled exceptions"
    title="Exceções tratadas"
  >
    Nosso agente APM reporta automaticamente erros para exceções não tratadas. Em situações em que a lógica do aplicativo trata o erro, nosso agente APM pode perder o erro e não reportará um stack trace.

    Você pode usar a [API específica do agente](/docs/apm/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected/#error-collection) `notice_error()` para registrar exceções tratadas.
  </Collapser>

  <Collapser
    id="Ignored errors"
    title="Erros são ignorados"
  >
    Se você configurou erros para serem [ignorados](/docs/apm/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected/#ignore), o stack trace não estará disponível
  </Collapser>

  <Collapser
    id="500-errors"
    title="Nenhum rastreamento de pilha para 500 erros"
  >
    Retornar um erro `500` significa que o próprio servidor do aplicativo detectou um erro e definiu o código de status HTTPS `500` .

    * Se a condição de erro foi detectada e tratada pela lógica do aplicativo, não houve nenhum objeto de exceção e, portanto, nenhuma stack.

    * Se houve um objeto de exceção em algum momento, mas ele foi tratado internamente pelo código do aplicativo que definiu o status `500` na resposta, a exceção nunca se tornou visível para o agente. Não há stack disponível para o agente reportar.

      Quando o rastreamento de pilha é relatado, o erro resulta de uma exceção que não foi capturada e tratada na lógica do servidor do aplicativo. O agente vê a exceção não tratada durante uma transação monitorada e, portanto, relata o stack trace.
  </Collapser>
</CollapserGroup>

## comportamento específico do agente para rastreamento de pilha ausente

### Agente Java

<CollapserGroup>
  <Collapser
    id="repeated-errors"
    title="Nenhum rastreamento de pilha para erros repetidos rapidamente"
  >
    Quando um erro é gerado em uma sequência repetida rapidamente, o compilador Java pode otimizar o stack trace para ajudar no desempenho. Para desabilitar esta otimização: Em seus sinalizadores JVM, inclua:

    ```
    -XX:-OmitStackTraceInFastThrow
    ```
  </Collapser>
</CollapserGroup>
