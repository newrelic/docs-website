---
title: Solucionar problemas de instrumentação assíncrona Java
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'Log your Java async work, and troubleshoot common issues with Java async instrumentation.'
freshnessValidatedDate: never
translationType: machine
---

Se você estiver tendo problemas ao usar a [API do agente Java para token e segmentos assíncronos](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications), use estas técnicas para ajudá-lo a encontrar respostas e resolver problemas.

## Verifique sua instrumentação [#verify-instrumentation]

A API possui vários mecanismos de segurança integrados para evitar problemas causados pelo uso incorreto da API, mas você pode usar estas técnicas para verificar se a instrumentação do seu aplicativo está correta:

* Após instrumentado seu código, verifique se o log mostra que um número igual de tokens foram criados e expirados. Para obter mais informações sobre qual mensagem de log procurar, consulte [Usar logs para solucionar problemas](#log-async).

* Verifique as estatísticas de coleta de lixo na [página](/docs/agents/java-agent/features/jvm-metrics-page)

  <DNT>
    [**JVMs**](/docs/agents/java-agent/features/jvm-metrics-page)
  </DNT>

  [](/docs/agents/java-agent/features/jvm-metrics-page)do APM para determinar se suas alterações alteraram significativamente os padrões de coleta de lixo.

* Verifique se algum segmento ou token está expirando revisando seu [rastreamento de transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) em busca de um atributo `timed_out` . Nesse caso, você pode alterar o limite com [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) e [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout).

## Use o log para solucionar problemas [#log-async]

Para customizar a criação de log do agente Java, consulte [Gerando logs](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting-java). Em seguida, você pode examinar seu log em busca destas mensagens comuns:

* Para visualizar o token criado, verifique o log em `FINEST` para:

  ```
  Transaction com.newrelic.agent.Transaction@5a7cc8e: created active token com.newrelic.agent.TokenImpl@7db8d0e8
  ```

* Para visualizar o token expirado e a hora em que ele expirou, verifique o registro em `FINEST` para:

  ```
  Transaction com.newrelic.agent.Transaction@5a7cc8e: expired token com.newrelic.agent.TokenImpl@7db8d0e8
  ```

* Para visualizar os segmentos criados, verifique o registro em `FINEST` para:

  ```
  Transaction com.newrelic.agent.Transaction@486b7f04: startSegment(): com.newrelic.agent.Segment@2b7fdad3 created and started with tracer com.newrelic.agent.tracers.OtherRootTracer@4df4a953
  ```

* Para visualizar os segmentos finalizados e a hora em que terminaram, verifique o registro em `FINEST` para:

  ```
  com.newrelic.agent.Transaction@486b7f04--finish segment(): com.newrelic.agent.Segment@2b7fdad3 async finish with tracer com.newrelic.agent.tracers.OtherRootTracer@4df4a953
  ```

## Problema: o tempo de transação é muito longo [#problem-long-txns]

Certifique-se de expirar o token e encerrar ou ignorar segmentos; caso contrário, a transação poderá levar mais tempo para reportar à New Relic. O agente Java possui um mecanismo de tempo limite para token e segmentos que não foram finalizados corretamente. Para obter mais informações, consulte [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) e [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout).

## Problema: Nenhum rastreio da transação de dados [#problem-no-traces]

Inspecione o rastreamento da transação para garantir que o trabalho assíncrono esperado seja relatado. Se você não encontrar nenhum rastro de transação, certifique-se de que a duração da transação exceda o limite de rastreio de transação definido em [`transaction_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-transaction_threshold).

## Problema: poucas chamadas assíncronas [#problem-too-few-calls]

Se poucas chamadas estiverem sendo relatadas:

<CollapserGroup>
  <Collapser
    id="ensure-appropriate-link"
    title="Certifique-se de que cada atividade que você monitor esteja devidamente vinculada"
  >
    No exemplo defeituoso abaixo, um fluxo paralelo está sendo usado, o que significa que o trabalho realizado dentro do lambda na chamada para `map()` pode ser agendado em um thread diferente do thread que manipula a solicitação. Sem [criar um token](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications#tokens) para vincular todo esse trabalho, você não verá nenhum trabalho agendado em um thread diferente dentro de sua transação.

    ```java
    @RequestMapping("parallel_stream_bad")
    @Trace(dispatcher = true)
    public ResponseEntity parallelStreamBad(@RequestParam("ids") List<long> ids) {
        List<item> results = ids
                .parallelStream()
                .map(i -> requestItem(i))
                .filter(item -> item != null)
                .collect(Collectors.toList());
        return formattedResponse("parallel_stream_bad", results);  
    }
    ```
  </Collapser>

  <Collapser
    id="check-annotations"
    title="Verifique se estão faltando anotações obrigatórias"
  >
    O exemplo abaixo reportará apenas um subconjunto das chamadas para `requestItem()` porque é impossível colocar `@Trace(async = true)` em torno de blocos de trabalho anônimo dentro da chamada para `map()`. Em vez disso, você deve passar o token para `requestItem()` e vinculá-lo, e então adicionar `@Trace(async=true)` ao redor dele. Ou use uma função auxiliar como `requestItemAsync()` para fazer isso sem alterar os métodos existentes.

    ```java
    @RequestMapping("parallel_stream_bad2")
    @Trace(dispatcher = true)
    public ResponseEntity parallelStreamBad2(@RequestParam("ids") List<long> ids) {
        final Token token = NewRelic.getAgent().getTransaction().getToken();
        List<item> results = ids
                .parallelStream()
                .map(id -> {
                    token.link();
                    return requestItem(id);
                })
                .filter(item -> item != null)
                .collect(Collectors.toList());
        return formattedResponse("parallel_stream_bad2", results);
    }
    ```

    Compare isso com o exemplo correto abaixo, no qual a expressão lambda é encapsulada pela classe wrapper `InstrumentedCallable`. Essa classe aceita um token e um lambda, agrupa o trabalho assíncrono em `@Trace(async = true)` e usa um token para vincular o trabalho ao thread de solicitação.

    ```java
    @RequestMapping("parallel_stream_wrap")
    @Trace(dispatcher = true)
    public ResponseEntity parallelStreamWrap(@RequestParam("ids") List<long> ids) {
        final Token token = NewRelic.getAgent().getTransaction().getToken();
        List<item> results = ids
                .parallelStream()
                .map(id -> InstrumentedCallable.instrumentCallable(token, () -> requestItem(id)))
                .map(c -> c.call())
                .filter(item -> item != null)
                .collect(Collectors.toList());
        token.expire();
        return formattedResponse("parallel_stream_wrap", results);
    }
    ```
  </Collapser>
</CollapserGroup>
