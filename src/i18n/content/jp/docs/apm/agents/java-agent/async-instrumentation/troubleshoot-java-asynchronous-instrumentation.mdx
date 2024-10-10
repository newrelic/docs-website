---
title: Java非同期インスツルメンテーションのトラブルシューティング
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'Log your Java async work, and troubleshoot common issues with Java async instrumentation.'
freshnessValidatedDate: never
translationType: machine
---

[Java agent API for async token and segments](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications) の使用に問題がある場合は、以下のテクニックを使って答えを見つけ、問題を解決してください。

## インストルメンテーションの確認 [#verify-instrumentation]

APIには、誤ったAPIの使用による問題を防ぐための安全機構が数多く組み込まれていますが、これらの技術を使って、アプリケーションのインスツルメンテーションが正しいかどうかを確認することができます。

* コードをインストルメント化した後、同数のトークンが作成され、期限切れになったことをログが示していることを確認します。どのようなログメッセージを見るべきかの詳細については、 [Use logs to troubleshoot](#log-async) を参照してください。

* APM の

  <DNT>
    [**JVMs**](/docs/agents/java-agent/features/jvm-metrics-page)
  </DNT>

  [ページ](/docs/agents/java-agent/features/jvm-metrics-page)のガベージ コレクション統計を確認して、変更によってガベージ コレクション パターンが大幅に変更されたかどうかを判断します。

* `timed_out` 属性の [トランザクション追跡を](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) 調べて、タイムアウトになっているセグメントまたはトークンがないかどうかを確認してください。その場合、 [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) と [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout)で制限を変更できます。

## ログを使ったトラブルシューティング [#log-async]

Javaエージェントのログをカスタマイズするには、 [Generating logs](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting-java) を参照してください。次に、これらの一般的なメッセージについてログを調べることができます。

* 作成されたトークンを表示するには、 `FINEST` で次のログを確認してください:

  ```
  Transaction com.newrelic.agent.Transaction@5a7cc8e: created active token com.newrelic.agent.TokenImpl@7db8d0e8
  ```

* 期限切れのトークンとそれらが期限切れになった時刻を表示するには、 `FINEST` で次のログを確認します。

  ```
  Transaction com.newrelic.agent.Transaction@5a7cc8e: expired token com.newrelic.agent.TokenImpl@7db8d0e8
  ```

* 作成されたセグメントを表示するには、 `FINEST` で次のログを確認してください:

  ```
  Transaction com.newrelic.agent.Transaction@486b7f04: startSegment(): com.newrelic.agent.Segment@2b7fdad3 created and started with tracer com.newrelic.agent.tracers.OtherRootTracer@4df4a953
  ```

* 終了したセグメントとそれらが終了した時刻を表示するには、 `FINEST` で次のログを確認してください:

  ```
  com.newrelic.agent.Transaction@486b7f04--finish segment(): com.newrelic.agent.Segment@2b7fdad3 async finish with tracer com.newrelic.agent.tracers.OtherRootTracer@4df4a953
  ```

## 問題：トランザクション時間が長すぎる [#problem-long-txns]

トークンを期限切れにして、セグメントを終了または無視するようにしてください。そうしないと、トランザクションが New Relic に報告するのに時間がかかる場合があります。Java エージェントには、正しく終了しないトークンとセグメントのタイムアウト メカニズムがあります。詳細については、 [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) と [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout)を参照してください。

## 問題：トランザクション・トレース・データがない [#problem-no-traces]

トランザクション追跡を調べて、予想される非同期作業が報告されていることを確認します。トランザクション追跡が表示されない場合は、トランザクション期間が [`transaction_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-transaction_threshold)で設定されたトランザクション追跡しきい値を超えていることを確認してください。

## 問題：非同期呼び出しが少なすぎる [#problem-too-few-calls]

あまりにも少ないコールが報告されている場合

<CollapserGroup>
  <Collapser
    id="ensure-appropriate-link"
    title="モニタリングする各活動が適切にリンクされていること"
  >
    以下の誤った例では、並列ストリームが使用されています。つまり、 `map()` の呼び出しでラムダ内で実行される作業が、リクエストを処理するスレッドとは別のスレッドでスケジュールされる可能性があります。このすべての作業をリンクする [トークンを作成し](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications#tokens) ないと、トランザクション内の別のスレッドでスケジュールされた作業は表示されません。

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
    title="必要なアノテーションが不足していないか"
  >
    以下の例では、 `requestItem()` への呼び出しのサブセットのみを報告します。これは、 `map()`への呼び出し内の匿名作業のブロックを `@Trace(async = true)` で囲むことができないためです。代わりに、トークンを `requestItem()` に渡してリンクし、その周りに `@Trace(async=true)` を追加する必要があります。または、 `requestItemAsync()` のようなヘルパー関数を使用して、既存のメソッドを変更せずにこれを行います。

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

    これを、ラムダ式がラッパー クラス `InstrumentedCallable`によってラップされている以下の正しい例と比較してください。このクラスはトークンとラムダを受け取り、非同期作業を `@Trace(async = true)` でラップし、トークンを使用して作業をリクエスト スレッドにリンクします。

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
