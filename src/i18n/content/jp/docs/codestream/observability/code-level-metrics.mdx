---
title: コードレベルの指標
metaDescription: See performance data at the method level.
freshnessValidatedDate: '2024-12-04T00:00:00.000Z'
translationType: machine
---

パフォーマンス データは、探さなくてもエディターに状況に応じて表示されるため、作業中の作業に情報を提供できます。バグ修正に取り組んでいて、作業中のコード領域のエラー率が上昇していることに偶然気づいたとします。もしかしたら、より大きな問題に発展しないように、バグ修正の一環としてその問題に対処するかもしれません。

<img title="A CodeLens displaying error rate and average duration for a method." alt="A screenshot CodeLens displaying error rate and average duration for a method." src="/images/codestream_screenshot-crop_code-level-metrics-example.webp" />

CodeStream は、New Relic APM エージェントによって実行された各メソッド インストゥルメントの上の CodeLens に、過去 30 分間の平均継続時間とエラー率を表示します。 Visual Studio の場合、CodeLens の代わりに New Relic アイコンがエディターのガターに表示されます。 メトリクスは、CodeStream ペインで現在選択されているサービスに対して計算されます。 別のサービスを展開すると、それに応じてメトリクスが更新されます。

CodeLens をクリックすると、各メトリクスを視覚化したグラフが表示されます。リポジトリが複数の New Relic 監視サービスに関連付けられている場合、それらを簡単に切り替えることができます。これにより、チャートとエディターの両方に表示されるコードレベルのメトリクスのベースとなるサービスが変更され、CodeStream ペインでのサービスの選択も変更されます。

<img title="Code-level metrics details showing charts and errors." alt="A screenshot of code-level metrics details showing charts and errors." src="/images/codestream_screenshot-crop_code-level-charts.webp" />

エラー率のグラフに加えて、同じ時間枠で発生した実際のエラーのリスト (それぞれの発生数を含む) も表示されます。エラー率が急上昇しており、特定のエラーが問題の原因であることがわかった場合は、そのエラーをクリックしてスタック トレースを表示し、解決に向けた[共同作業を開始できます](/docs/codestream/observability/error-investigation)。

## カバレッジ [#coverage]

New Relic エージェントは、HTTP リクエストに関連付けられたクラスの関数のデータを自動的に収集しようとします。 多くの場合、MVC フレームワークを使用する多くのフレームワークでは、これらはコントローラー クラスのメソッドであることがよくあります。

New Relic エージェントによるすべてのリクエストが常に収集されるわけではないため、トラフィックの少ないメソッドではデータが表示されない可能性があります。結果を確認したい特定のメソッドのデータが欠落している場合は、カスタム インストルメンテーションを使用してギャップを埋めることができます。[Java](/docs/apm/agents/java-agent/custom-instrumentation/java-custom-instrumentation) 、[.NET](/docs/apm/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation) 、 [PHP](/docs/apm/agents/php-agent/features/php-custom-instrumentation) 、 [Python](/docs/apm/agents/python-agent/custom-instrumentation/python-custom-instrumentation) 、 [Ruby](/docs/apm/agents/ruby-agent/api-guides/ruby-custom-instrumentation) 、 [Go](/docs/apm/agents/go-agent/instrumentation/instrument-go-transactions) 、および[Node.js](/docs/apm/agents/nodejs-agent/extend-your-instrumentation/nodejs-custom-instrumentation)のガイダンスを参照してください。

次の NRQL クエリを実行して、いずれかのサービスのコードレベルのメトリクスを含む CodeLenses が表示される場所を特定します。 例の`entity.guid`値を、指定されたサービスの値に置き換えるだけです。 クエリ結果で、 `code.*`属性を調べて、フレームワーク コードではなくコードを表しているものがあるかどうかを確認します。

```sql
SELECT * FROM Span
WHERE entity.guid = 'YOUR_ENTITY_GUID' AND code.function IS NOT NULL
SINCE 30 minutes ago LIMIT MAX
```

## 要件 [#requirements]

エディター内のパフォーマンス データを表示するには、サービスが以下に示す要件を満たしている必要があり、サービスは過去 30 分間にデータを収集している必要があります。

* [分散トレーシングを](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing) 有効にする必要があります。分散トレースは、すべてのエージェントの最近のバージョンでデフォルトでオンになっているため、これについて心配する必要があるのは、分散トレースを無効にしている場合のみです。
* VS Code を使用している場合は、 [Java](https://marketplace.visualstudio.com/items?itemName=redhat.java) 、 [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) 、 [PHP](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) 、 [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) 、 [Go](https://marketplace.visualstudio.com/items?itemName=golang.go) 、または[Ruby](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp)の言語サポート拡張機能がインストールされている必要があります。
* <DNT>**Java:**</DNT> コードレベル メトリクスは[、サポートされているJavaフレームワーク](/docs/apm/agents/java-agent/getting-started/compatibility-requirements-java-agent/#frameworks)で実装されたプロジェクトでのみ使用できます。 Kotlin サポートは IntelliJ でのみ利用可能であることに注意してください。
* <DNT>**.NET:**</DNT> Visual Studio を使用している場合は、<DNT>**Tools &gt; Options &gt; Text Editor &gt; All Languages &gt; CodeLens**</DNT> から CodeLenses が有効になっていることを確認し、 **Enable CodeLens** \[CodeLens を有効にする] と**Show CodeStream Code-Level Metrics** \[CodeStreamコードレベル メトリクスを表示する] の両方がオンになっていることを確認してください。
* <DNT>**Node.js:**</DNT> コードベースに匿名関数が含まれている場合は、[変更追跡 (変更追跡機能) を](/docs/change-tracking/change-tracking-introduction/)使用してデプロイメント情報を New Relic に送信するか、ビルド パイプラインの[環境変数を使用してビルド SHA](/docs/codestream/observability/error-investigation/#buildsha)を送信する必要があります。
* <DNT>**Python:**</DNT> コードレベル メトリクスは[、サポートされているPythonフレームワーク](/docs/apm/agents/python-agent/getting-started/instrumented-python-packages)で実装されたプロジェクトおよび PHP バージョン 7.0 以降でのみ使用できます。
* <DNT>**Ruby:**</DNT> コードレベル メトリクスは、手動トレースを使用した Rails アプリケーションとRubyメソッドでのみ使用できます ( [RubyメソッドとCodeStreamについて詳しくは、こちらをご覧ください](/docs/apm/agents/ruby-agent/features/ruby-codestream-integration))。

CodeLenses をオフにするには、IDE 設定の CodeStream セクションに移動し、 <DNT>**CodeStream: Show Golden Signals In Editor**</DNT>設定のチェックを外します。