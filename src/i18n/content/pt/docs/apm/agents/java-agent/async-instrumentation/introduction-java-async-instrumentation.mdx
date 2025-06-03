---
title: Introdução à instrumentação assíncrona Java
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'An explanation of what asynchronous application activity is, and how it impacts New Relic performance monitoring of Java applications.'
freshnessValidatedDate: never
translationType: machine
---

[New Relic for Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) inclui um [conjunto de métodos API](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications) para instrumentação personalizada de atividade assíncrona. Isto é mais útil para a atividade do instrumento assíncrono em [frameworks não suportados](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#frameworks), mas você também pode usar a API para adicionar instrumentação a frameworks suportados. Este documento explica como ocorre a atividade assíncrona e como funciona o monitor assíncrono do New Relic.

## Operações assíncronas [#h2_asynchronous_basics]

Com um modelo de programação <DNT>**synchronous**</DNT> , as tarefas de programação geralmente são executadas em uma ordem específica. Uma tarefa deve ser concluída antes do início da próxima tarefa e cada tarefa bloqueia a conclusão da próxima tarefa.

<DNT>**Asynchronous**</DNT> a programação usa um modelo sem bloqueio, para que as tarefas possam ser executadas em paralelo. As tarefas executadas de forma assíncrona são completamente independentes umas das outras em sua execução e inicialização. Como o código assíncrono não é executado em uma ordem específica, todo o poder de processamento do servidor pode ser usado com mais eficiência e as taxas de transferência do aplicativo aumentam.

## Troca assíncrona e de thread [#thread_switching]

Para aplicativos que usam processamento assíncrono, <DNT>**thread-switching**</DNT> ocorre quando um programa ou tarefa alterna de um thread para outro. Compreender essas intercalações assíncronas pode ajudá-lo a decidir quais métodos devem ser instrumentados.

Aqui está um exemplo de método com um controlador que faz solicitações externas em paralelo. Essas solicitações são executadas de forma assíncrona, de modo que cada solicitação é executada independentemente uma da outra e `getScoreAsync()` retorna imediatamente após ser chamada. Isso permite que o encadeamento solicitante continue fazendo solicitações enquanto `getScoreAsync()` faz uma chamada externa e envia uma resposta.

```java
@ResponseBody
@RequestMapping("getScores", method = RequestMethod.Get
    produces = "text/plain")
public String getCreditScores(@RequestParam(name = "uids") uids) {
    return Arrays.stream(uids.split(","))
                 .parallel()
                 .map(Integer::valueOf)
                 .map(uid -> getScoreAsync(uid))
                 .collect(Collectors.toList());}
```

Algumas dessas solicitações terminarão antes de outras. Alguns podem até terminar depois que o thread solicitante passar para outras tarefas:

<img
  title="async diagram"
  alt="async diagram"
  src="/images/apm_diagram_Java-async-activity.webp"
/>

Na interface <InlinePopover type="apm"/>, na visualização em trace de detalhes do rastreamento, a interface exibe a atividade assíncrona como sobreposta no eixo x horizontal.

## Assíncrono e tempo de resposta [#response_time]

<DNT>**Response time**</DNT> é definido como a duração de uma transação na perspectiva do solicitante. Para aplicativos assíncronos, o tempo de resposta costuma ser menor que o tempo total de transação. Isso ocorre porque os métodos não precisam esperar a conclusão de todos os métodos anteriores antes de retornar. Como as tarefas podem ser adiadas, o aplicativo pode aproveitar seus recursos limitados e processar as coisas mais rapidamente.

A linha do tempo de resposta do gráfico fornece mais insights sobre o comportamento percebido e a velocidade do seu aplicativo do que o tempo total de transação da web:

<img
  title="web_transaction_overview.png"
  alt="web_transaction_overview.png"
  src="/images/apm_screenshot-crop_web-transaction-overview.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Summary**</DNT>: na página APM <DNT>**Summary**</DNT> , a atividade assíncrona em um aplicativo Java pode fazer com que o tempo de resposta (a linha azul) seja menor que o tempo total de transação. Isso ocorre porque os métodos não precisam esperar a conclusão de todos os métodos anteriores antes de retornar.
</figcaption>

## Instrumentação personalizada com API assíncrona [#async-api]

Para implementar instrumentação personalizada de trabalho assíncrono, consulte o [guia da API assíncrona do agente Java](/docs/agents/java-agent/java-agent-api/java-agent-asynchronous-api-guide). Para obter informações gerais sobre como usar a API do agente Java, consulte [Guia da API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api-guide).
