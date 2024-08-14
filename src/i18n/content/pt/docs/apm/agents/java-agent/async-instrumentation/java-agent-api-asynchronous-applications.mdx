---
title: API do agente Java para aplicativo assíncrono
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: How to use the New Relic for Java API to instrument asynchronous application activity.
freshnessValidatedDate: never
translationType: machine
---

[New Relic for Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) (agente [versão 3.37](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-3370) ou superior) inclui uma API para instrumento de atividade assíncrona. Para [frameworks suportados](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent), o agente normalmente instrumento assíncrono funciona automaticamente. No entanto, a API assíncrona ainda pode ser útil para adicionar detalhes. Este documento fornece exemplos de uso de token e segmentos para instrumentar seu aplicativo.

* Para obter mais informações sobre como o instrumento e as telas assíncronas do New Relic funcionam na interface

  <InlinePopover type="apm"/>

  , consulte [Considerações de monitoramento para aplicativo assíncrono](/docs/agents/java-agent/instrumentation/asynchronous-applications-monitoring-considerations).

* Para obter detalhes sobre as classes e métodos reais, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html).

* Para obter informações gerais sobre a API do agente Java, consulte o [guia da API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api-guide).

* Para resolução de problemas comuns, consulte [resolução de problemas Java assíncrono aplicativo](/docs/agents/java-agent/java-agent-api/troubleshooting-java-asynchronous-applications).

## Ferramentas de rastreamento assíncrono: token e segmentos [#tokens_segments]

A API do agente Java fornece duas maneiras de trace a atividade assíncrona:

* <DNT>
    **[Tokens](#tokens)**
  </DNT>

  : tokens são passados entre threads para vincular unidade de trabalho assíncrona a uma transação específica. Eles não executam nenhuma cronometragem diretamente.

* <DNT>
    **[Segments](#segments)**
  </DNT>

  : os segmentos são usados para medir uma parte arbitrária do código de aplicativo assíncrono, não necessariamente associado a um método ou thread. Os segmentos normalmente são usados para rastrear chamadas externas que são concluídas por um mecanismo de retorno de chamada.

## Token: conecta threads assíncronos [#tokens]

Use token para vincular unidades de trabalho arbitrárias que estejam em threads separados. Esta seção descreve como usar as chamadas relacionadas ao token em conjunto para o trabalho assíncrono do instrumento. Para obter informações detalhadas sobre classes e métodos, consulte o Javadoc.

Para usar tokens, primeiro você precisa criar o token e depois vincular outra chamada à transação de origem. Você deve vincular o token o mais rápido possível na outra chamada. Se você não vincular o token imediatamente, corre o risco de perder quaisquer métodos que contenham um `@Trace` abaixo da chamada que você está tentando vincular. Você também pode expirar o token na chamada original. O agente Java vinculará o trabalho na interface do New Relic. Estes exemplos ilustram como usar as chamadas relacionadas ao token juntas:

<CollapserGroup>
  <Collapser
    id="use-gettoken"
    title="1. Inicie uma transação, crie e expire um token"
  >
    Considere o método `parallelStream()` no trecho de código abaixo. Como algumas das chamadas para `requestItemAsync()` ocorrerão em um encadeamento separado, um token é criado e transmitido para vincular esse trabalho assíncrono de volta ao encadeamento solicitante.

    ```java
    /**
    * Example showing multi-threaded implementation of requesting data using a parallel {@link Stream}.
    */
    @RequestMapping("parallel_stream")
    @Trace(dispatcher = true) // starts a transaction
    public ResponseEntity<String> parallelStream(@RequestParam("ids") List<Long> ids) {
        final Token token = NewRelic.getAgent().getTransaction().getToken();
        List<item> results = ids
                .parallelStream()
                .map(id -> requestItemAsync(id, token)) // requestItemAsync represents an  example of work being passed to another thread. The token is passed along to allow linking the work on the new thread back to the thread that the token was originally created on.
                .filter(item -> item != null)
                .collect(Collectors.toList());
        token.expire();
        return formattedResponse("parallel_stream", results);
    }
    ```

    As chamadas de API do agente neste exemplo são:

    * `@Trace(dispatcher = true)`: diz ao agente para iniciar uma transação. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Trace.html).
    * `getToken()`: Cria o token que vinculará o trabalho. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Transaction.html#getToken()).
    * `token.expire()`: Expira o token. Isso permite que a transação termine. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Token.html#expire()).
  </Collapser>

  <Collapser
    id="retrive-token"
    title="2. Marcar uma transação como assíncrona e vincular ao thread de solicitação"
  >
    O exemplo de código a seguir mostra `requestItemAsync`, que pode ser executado em um thread separado do thread solicitante. Por esse motivo, o token que foi criado no exemplo de código anterior está vinculado à transação em `requestItemAsync`. Observe que `requestItemAsync()` possui a anotação `@Trace(async=true)`, que informa ao agente para trace esse método se ele estiver vinculado a uma transação existente.

    Depois que `parallelStream()` coletar todos os resultados, o token expirará. Isso é importante porque garante que a transação não permaneça aberta após a conclusão de `parallelStream()` .

    ```java
    @Trace(async = true)
    private Item requestItemAsync(long id, Token token) {
        token.link();
        return requestItem(id);
    }
    ```

    As chamadas de API do agente neste exemplo são:

    * `@Trace(async = true)`: inicia uma transação. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Trace.html).
    * `token.link()`: Vincula o trabalho que está sendo realizado em `requestItemAsync()` (que está sendo executado em um thread diferente) ao thread solicitante. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Token.html#link()).
  </Collapser>

  <Collapser
    id="token-in-ui"
    title="3. Visualize seu trace assíncrono na interface do New Relic"
  >
    Para visualizar detalhes do rastreamento da transação, acesse: <DNT>**[one.newrelic.com](https://one.newrelic.com) APM & services > (select an app) > Transactions > Transaction trace > Trace details**</DNT>.

    A atividade assíncrono é mostrada na visualização em cascata trace por segmentos que se sobrepõem horizontalmente, na dimensão de tempo.

    Não é necessário vincular métodos que estejam no mesmo thread, mas isso não terá efeito negativo. Muitas vezes acontece que um único token pode ser compartilhado, como no exemplo `parallelStream()` .
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  Por padrão, uma transação pode criar no máximo 3.000 tokens e cada token tem um tempo limite padrão de 180s. Você pode alterar o limite anterior com a opção de configuração `token_limit` e o último com a opção de configuração [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) . trace para transação que exceda `token_limit` conterá um atributo `token_clamp` . Aumentar qualquer uma das opções de configuração pode aumentar o uso de memória do agente.
</Callout>

## Segmentos: atividade assíncrona arbitrária de tempo [#segments]

Segmentos são usados para medir uma parte arbitrária de código de aplicativo assíncrono, não necessariamente associado a um método ou thread. Isso é mais comumente usado para cronometrar conexões com serviços externos. Use segmentos se quiser:

* Código de tempo que é concluído por meio de um retorno de chamada
* Cronometre uma chamada assíncrono que abrange vários métodos
* Meça o tempo entre a criação e a execução do trabalho (por exemplo, em um pool de threads)

<CollapserGroup>
  <Collapser
    id="segments-part-1"
    title="1. Crie uma transação e chame um serviço externo"
  >
    O método abaixo faz uma chamada para um serviço externo (neste caso um banco de dados) usando o método `storeItem()`:

    ```java
    /**
    * Example showing single threaded implementation of inserting data into a datasource.
    */
    @RequestMapping("insert")
    @Trace(dispatcher = true) //starts a transaction
    public ResponseEntity insert(@RequestParam("id") Long id) {
        if (id != null) {
            storeItem(id);
            return new ResponseEntity<>("insert", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("insert", HttpStatus.BAD_REQUEST);
        }
    }
    ```

    O objetivo, neste caso, é descobrir quanto tempo o `Callable` na instrução Lambda está aguardando no pool de threads antes de ser executado, em vez de determinar quanto tempo `storeItem()` é executado. Por esse motivo, um segmento é usado em vez de um token e `@Trace(async = true)` não é necessário como era para um token.

    A chamada da API do agente neste exemplo é:

    * `@Trace(dispatcher = true)`: inicia uma transação. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Trace.html).
  </Collapser>

  <Collapser
    id="segment-reportasexternal"
    title="2. Inicie um segmento, relate dados externos e termine o segmento"
  >
    O exemplo de código a seguir mostra um segmento começando no método `storeItem` para medir quanto tempo a instrução Lambda está aguardando no pool de threads. Para parar de cronometrar o segmento, você deve chamar `.end()` ou `.ignore()`. Se você <DNT>**don't**</DNT> desejar relatar o segmento como parte de sua transação pai, chame `.ignore()`. Caso contrário, para relatar o segmento como parte de sua transação pai, chame `.end()`.

    ```java
    private void storeItem(long id) {
        Segment segment = NewRelic.getAgent().getTransaction().startSegment("storeItem");

        segment.reportAsExternal(DatastoreParameters
               .product("H2")
               .collection(null)
               .operation("insert")
               .instance("localhost", 8080)
               .databaseName("test")
               .build());

        // fire and forget
        DB_POOL.submit(() -> {
            segment.end();
            insertData(id);
        });
    }
    ```

    As chamadas de API do agente neste exemplo são:

    * `startSegment(...)`: inicia o segmento que cronometrará o código. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Segment.html).
    * `reportAsExternal(DatastoreParameters())`: Associa a hora a uma chamada externa do armazenamento de dados. Isso aparecerá no APM com [dados do armazenamento de dados](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues). Para obter mais informações, consulte [API reportAsExternal](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/TracedMethod.html).
    * `segment.end()`: Interrompe a cronometragem deste segmento. Para obter mais informações sobre esse método, consulte o [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Segment.html#end()).
  </Collapser>

  <Collapser
    id="segment-in-ui"
    title="3. Visualize seu trace assíncrono na interface do New Relic"
  >
    Quando o método é concluído, o APM exibe um trace da transação com uma chamada externa.
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  Por padrão, o agente pode rastrear no máximo 1.000 segmentos durante uma determinada transação. Você pode alterar esse limite com a opção de configuração [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout) . rastreamento de transação que exceda esse limite conterá um atributo `segment_clamp` . Aumentar esse limite pode aumentar o uso de memória do agente.
</Callout>
