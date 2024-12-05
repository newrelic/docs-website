---
title: Scala ZIO インストゥルメンテーション
tags:
  - Agents
  - Java agent
  - Scala instrumentation
  - Custom instrumentation
  - ZIO
metaDescription: Directions for instrumenting the New Relic Java agent with Scala applications using the ZIO libreary.
freshnessValidatedDate: '2024-03-28T00:00:00.000Z'
translationType: machine
---

ZIO は、非同期操作を実行するために使用される Scala ライブラリです。 ZIO の遅延評価構造を最大限に活用するために、トランザクションとセグメントを作成するための ZIO API を提供します。

## ZIO APIをインストールする [#install-zio-api]

APIクラスにアクセスするには、使用している ZIO のバージョンに応じて、次の情報を Scala 設定ファイルに追加します。

<CollapserGroup>
  <Collapser
    id="install-zio1-api"
    title={<><strong>project/build.scala ファイルを使用して ZIO 1.X を構成する</strong></>}
  >
    アプリケーションの`project/build.scala`ファイルの`appDependencies`メソッドに次の行を追加します ( `S.V`を Scala バージョンに置き換え、 `X.Y.Z`を使用する[Java バージョン](/docs/agents/java-agent/installation/update-java-agent#procedures)に置き換えます)。

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio-api_S.V" % "X.Y.Z"
    ```
  </Collapser>

  <Collapser
    id="install-zio2-api"
    title={<><strong>project/build.scalaファイルを使用してZIO 2.0.0以上を設定します。</strong></>}
  >
    アプリケーションの`project/build.scala`ファイルの`appDependencies`メソッドに次の行を追加します ( `S.V`を Scala バージョンに置き換え、 `X.Y.Z`を使用する[Java バージョン](/docs/agents/java-agent/installation/update-java-agent#procedures)に置き換えます)。

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio2-api_S.V" % "X.Y.Z"
    ```
  </Collapser>
</CollapserGroup>

サポートされている Scala バージョンは 2.11、2.12、および 2.13 です。 Scala 3.0 ユーザーは 2.13 jar を使用できます。 ZIO v2 の Scala の最小バージョンは 2.12 です。

<Callout variant="important">
  APIの使用時に最良の結果を得るには、最新の Java エージェント リリースを使用していることを確認してください。

  * New Relic ZIO v1 APIは、Java エージェント 7.2.0 以上が必要です。
  * New Relic ZIO v2 APIは Java Agent 8.10.0 以降が必要です。
</Callout>

## ZIO APIを使用する [#use-zio-api]

まずインポート ステートメントを作成する必要があります。その後、トランザクションとセグメントを作成できます。

### import ステートメントを作成する [#import-statements]

ZIO API を利用するには、お使いのバージョンに対して次のインポート ステートメントを作成します。

**ZIO v1 API**

```scala
import com.newrelic.zio.api.TraceOps
```

**ZIO v2 API**

```scala
import com.newrelic.zio2.api.TraceOps
```

両方の API は、パッケージ名を除いて同じです。

### トランザクションの作成 [#transactions]

`TraceOps.txn`メソッドを使用してトランザクションを遅延作成できます。 メソッドが呼び出される前にトランザクションがすでに存在していた場合、このメソッドは既存のトランザクションの一部になります。

<Callout variant="important">
  [Scala API のトランザクション メソッド](/docs/apm/agents/java-agent/frameworks/scala-installation-java/#transactions)とは異なり、このメソッドはトランザクションを積極的に作成しません。 代わりに、返されたインスタンスでエフェクトが作成され、段階トレーサーを遅延作成する`ZIO`ブロックを渡します。 すべての ZIO 操作が終了すると終了します。 その結果、ZIO インスタンスの外部で実行されるコードや操作は、新しいトランザクションでキャプチャされません。
</Callout>

例えば：

```scala
import com.newrelic.zio.api.TraceOps.{txn, traceFun, trace}
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.{txn, traceFun, trace}


val x = txn {
    // The segment named "not-captured" will not be
    // captured in the transaction because it is not ran within Zio.
    trace("not-captured") {
        println("hello")
    } 

    // The segment named "trace map UIO" will be 
    // captured as part of the transaction because it is ran within Zio.
    ZIO.succeed(1).map(traceFun("trace map UIO")(i => i + 1))
}
```

### セグメントの作成 [#create-segments]

同期コード ブロックのセグメントを作成するには、 `TraceOps.trace`を使用します。 例えば：

```scala
import com.newrelic.zio.api.TraceOps.trace
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.trace

trace("statement segment") {
    val i = 1
    val j = 2
    println(i + j)
}
// trace can also be used as an expression
val x: Int = trace("expression segment") {
    val i = 1
    val j = 2
    i + j
}
println(x) // 2
```

<Callout variant="important">
  `TraceOps.trace` 同期コードでのみ動作します。 ZIO 効果、操作、またはその両方を通じて実行されるすべての操作では、代わりに`TraceOps.asyncTrace`を使用する必要があります (以下を参照)。
</Callout>

ZIO を使用して非同期コード ブロックのセグメントを作成する場合は、 `TraceOps.asyncTrace`を使用します。 これにより、セグメントのタイミングに、ZIO エフェクトまたは操作が完了するまでにかかる時間が確実に含まれるようになります。

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTrace
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTrace

val x: ZIO[_, _, Int] = asyncTrace("segment name") {
  ZIO.succeed(1) <*
  ZIO.sleep(zio.duration.Duration.fromMillis(1.second.toMillis))
}.debug // prints 1 after the completion of the segment.

```

Scala では内包表記として`asyncTrace`を使用することもできます。

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTrace
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTrace

 val x: ZIO[_, _, Int] = for {
    one <- asyncTrace("segment one")(ZIO.succeed(1))
    two <- asyncTrace("segment two")(ZIO.succeed(one + 1))
    three <- asyncTrace("segment three")(ZIO.succeed(two + 1))
  } yield three

val x2 = x.debug // prints 3 on completion of the segments in x
```

同期匿名関数のセグメントを作成する場合は、 `TraceOps.traceFun`を使用します。 例えば：

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .map(traceFun("statement segment")(i => i + 1))
  .debug // prints 2

```

ZIO インスタンスを返す非同期関数のセグメントを作成する場合は、  
`TraceOps.asyncTraceFun`を使用します。 これにより、セグメントのタイミングに ZIO 操作が完了するまでにかかる時間が確実に含まれるようになります。 例えば：

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .flatMap(asyncTraceFun("statement segment")(i => ZIO.succeed(i + 1)))
  .debug // prints 2 on completion of the zio operations
```

## 追加API機能 [#other-api]

JavaエージェントAPIとその機能の詳細については、[JavaエージェントAPI入門](/docs/agents/java-agent/custom-instrumentation/java-agent-api)を参照してください。
