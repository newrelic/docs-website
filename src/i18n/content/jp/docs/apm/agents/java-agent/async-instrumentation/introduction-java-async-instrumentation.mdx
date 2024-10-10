---
title: Java非同期インストルメンテーションの紹介
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'An explanation of what asynchronous application activity is, and how it impacts New Relic performance monitoring of Java applications.'
freshnessValidatedDate: never
translationType: machine
---

[New Relic for Java には、](/docs/agents/java-agent/getting-started/introduction-new-relic-java)非同期アクティビティのカスタムインストゥルメンテーション用の[一連の API メソッドが](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications)含まれています。 これは、 [サポートされていないフレームワーク](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#frameworks)でインストゥルメントが行われた非同期アクティビティに最も役立ちますが、API を使用して、サポートされているフレームワークにインストゥルメントを追加することもできます。 このドキュメントでは、非同期アクティビティがどのように発生するか、および New Relic モニターの非同期の動作について説明します。

## 非同期の操作 [#h2_asynchronous_basics]

<DNT>**synchronous**</DNT>プログラミング モデルでは、プログラミング タスクは通常、特定の順序で実行されます。 次のタスクを開始する前に 1 つのタスクを完了する必要があり、各タスクは次のタスクの完了をブロックします。

<DNT>**Asynchronous**</DNT> プログラミングでは非ブロッキング モデルを使用するため、タスクを並列に実行できます。 非同期に実行されるタスクは、実行と初期化において互いに完全に独立しています。 非同期コードは特定の順序で実行されないため、サーバーの全処理能力をより効率的に使用でき、アプリのスループットが向上します。

## 非同期とスレッドスイッチ [#thread_switching]

非同期処理を使用するアプリケーションの場合、 <DNT>**thread-switching**</DNT>プログラムまたはタスクが 1 つのスレッドから別のスレッドに切り替わるときです。 これらの非同期インターリーブを理解することで、どのメソッドをインストゥルメントする必要があるかを判断するのに役立ちます。

以下は、外部リクエストを並行して行うコントローラを使用したメソッドの例です。これらのリクエストは非同期で実行されるため、各リクエストは互いに独立して実行され、 `getScoreAsync()`は呼び出されるとすぐに戻ります。これにより、 `getScoreAsync()`が外部呼び出しを行って応答を送信している間、要求スレッドは要求を作成し続けることができます。

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

これらのリクエストの中には、他のリクエストよりも先に終了するものもあります。中には、リクエストしたスレッドが他のタスクに移った後に終了するものもあります。

<img
  title="async diagram"
  alt="async diagram"
  src="/images/apm_diagram_Java-async-activity.webp"
/>

<InlinePopover type="apm"/>UIトレースの詳細ウォーターフォール ビューでは、 UI非同期アクティビティを水平方向の x 軸に重なって表示します。

## 非同期と応答時間 [#response_time]

<DNT>**Response time**</DNT> リクエスト者の観点から見たトランザクションの期間として定義されます。 非同期アプリケーションの場合、レスポンス時間は合計レスポンス時間よりも短くなることがよくあります。 これは、メソッドが戻る前に、先行するすべてのメソッドが完了するのを待つ必要がないためです。 タスクを延期できるため、アプリケーションは限られたリソースを活用して、より迅速に処理することができます。

チャートのレスポンスタイムラインは、ウェブトランザクションの合計時間よりも、アプリケーションの認知された動作と速度についてより多くの洞察を与えてくれます。

<img
  title="web_transaction_overview.png"
  alt="web_transaction_overview.png"
  src="/images/apm_screenshot-crop_web-transaction-overview.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Summary**</DNT>: APM <DNT>**Summary**</DNT> ページで、Java アプリの非同期アクティビティにより、レスポンス時間 (青い線) が合計レスポンス時間よりも短くなる場合があります。 これは、メソッドが戻る前に、先行するすべてのメソッドが完了するのを待つ必要がないためです。
</figcaption>

## 非同期APIによるカスタムインストルメント [#async-api]

非同期作業のカスタム・インスツルメンテーションを実装するには、 [Javaエージェント非同期APIガイド](/docs/agents/java-agent/java-agent-api/java-agent-asynchronous-api-guide) を参照してください。Java エージェント API の使用方法に関する一般的な情報については、 [Java エージェント API ガイド](/docs/agents/java-agent/custom-instrumentation/java-agent-api-guide) を参照してください。
