---
title: Node.jsのエージェントAPIを使用するためのガイド
tags:
  - Agents
  - Nodejs agent
  - API guides
metaDescription: 'A goal-focused guide to New Relic''s Node.js agent API, with links to relevant sections of the complete API documentation and tutorials.'
freshnessValidatedDate: never
translationType: machine
---

当社の [Node.js エージェント](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent) API では、エージェントの標準機能を拡張することができます。このAPIを使って以下のことができます。

* カスタム・トランザクション・パラメーターの作成
* カスタムエラーやメトリクスのレポート

また、APIを使用して、 [カスタムインスツルメンテーション](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation) を行うこともできます。 [サポートされているフレームワーク](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent) では、エージェントはほとんどのアクティビティを自動的に計測します。カスタム・インスツルメンテーションでは、デフォルトのインスツルメンテーションがないフレームワークにまで監視を拡張することができます。

その他のリソース

* [GitHub の Node.js エージェントAPIドキュメント](https://newrelic.github.io/node-newrelic/API.html)。
* [カスタムインストゥルメンテーションを使用したアプリケーションの例](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation)。
* また、Node.jsエージェントのデフォルトの動作は、 [の設定で調整することができます。](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration).

## 要件

Node.jsエージェントAPIを使用するには、Node.jsエージェントの最新リリース [を用意してください。さらに、ご覧ください。](/docs/release-notes/agent-release-notes/nodejs-release-notes)

[](/docs/release-notes/agent-release-notes/nodejs-release-notes)

* [](/docs/release-notes/agent-release-notes/nodejs-release-notes)
  [](/docs/release-notes/agent-release-notes/nodejs-release-notes)[Node.jsエージェントAPIの要件](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api)
* GitHub での[開始手順](http://newrelic.github.io/node-newrelic/index.html)

## コードの欠落しているセクションをトランザクションで計測する [#creating-transactions]

アプリをインストゥルメントするために、New Relicはコードで各パスをその[トランザクション](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction)に分離します。New Relicは、これらのトランザクションの親メソッドの時間をインストゥルメントして総合的なパフォーマンスを測定し、追加詳細として長期間実行されているトランザクションから[トランザクショントレース](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)を収集します。

New Relicがコードの特定の部分をまったくインストルメントしていない場合は、次のメソッドを使用します。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        あなたがしたい場合は...
      </th>

      <th>
        これを行う...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        メソッドのタイミングを開始するNewRelicが自動的にインストルメント化しない
      </td>

      <td>
        新しいトランザクションを作成します。 [`newrelic.startWebTransaction()`](https://newrelic.github.io/node-newrelic/API.html#startWebTransaction)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        作業が完了したら、メソッドのタイミングを停止します
      </td>

      <td>
        次のいずれかのオプションを使用します：

        * [`newrelic.startWebTransaction`](https://newrelic.github.io/node-newrelic/API.html#startWebTransaction)に渡されたコールバックから promise を返します。
        * `end`から返された[ ハンドル](https://newrelic.github.io/node-newrelic/TransactionHandle.html) (GitHub) に対して[`newrelic.getTransaction`](https://newrelic.github.io/node-newrelic/API.html#getTransaction) を呼び出します。
      </td>
    </tr>

    <tr>
      <td>
        トランザクションがNewRelicに報告されないようにする
      </td>

      <td>
        以下のいずれかの方法でトランザクションを無視します。

        * [リクエストを無視するためのルールを](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#ignoring)参照してください`.`
        * `ignore()`から返された[ ハンドル](http://newrelic.github.io/node-newrelic/TransactionHandle.html) (GitHub) に対して[`newrelic.getTransaction`](https://newrelic.github.io/node-newrelic/API.html#getTransaction) を呼び出します。
      </td>
    </tr>
  </tbody>
</table>

カスタム Web サイトの作成の詳細については、 [GitHub の startWebTransaction の例](https://github.com/newrelic/newrelic-node-examples/tree/0a036fd669b4b47b8afbc7add8696980f799f0da/custom-instrumentation/start-web-transaction)を参照してください。

## セグメントを使用した時間固有の方法 [#segments]

トランザクションはすでにNew Relicで表示されているが、そのトランザクション中に呼び出された特定のメソッドに関する十分なデータがない場合、セグメントを作成して、それらの個々のメソッドをより詳細にタイムアウトさせることができます。例えば、複雑なロジックを持つ特に重要なメソッドの時間を計測したい場合などです。

特定のメソッドの時間を計るには、 [newrelic.startSegment](https://newrelic.github.io/node-newrelic/API.html#startSegment)を参照してください。

タイミングの詳細については、 [GitHub のカスタムインストゥルメンテーションの例を](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/segments)参照してください。

## トランザクションのメタデータを強化する [#metadata]

対象となるコードがNew Relicに表示されていても、そのメソッドの詳細が役に立たないことがあります。例えば、以下のようなものです。

* デフォルト名が有用でない。（[メトリクスのグループ化問題](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues#video)の原因になっている場合など）。
* トランザクションに [カスタム属性](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) を追加して、フィルタリングできるようにしたい。

New Relicがすでに表示されているトランザクションを計測する方法を変更する場合は、次のメソッドを使用します。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        あなたがしたい場合は...
      </th>

      <th>
        これを行う...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        トランザクションの名前を変更する
      </td>

      <td>
        [`newrelic.setTransactionName`](https://newrelic.github.io/node-newrelic/API.html#setTransactionName)と[`rules.name`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#rules-name)を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        トランザクションにメタデータ（顧客のアカウント名やサブスクリプションレベルなど）を追加することができます。
      </td>

      <td>
        [カスタムアトリビュートを](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#nodejs-att)使用します。 カスタムアトリビュートコレクションは、Node.js エージェントでデフォルトで有効になっています。) [`newrelic.addCustomAttribute()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttribute)と[`newrelic.addCustomAttributes()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttributes)を参照してください。 詳細については、GitHub の[サンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/69d500e02077d2565c4762c21bf779e3e39845bf/custom-instrumentation/attributes-events-metrics)を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        バックグラウンド作業のための新規トランザクションの作成
      </td>

      <td>
        GitHub の[`newrelic.startBackgroundTransaction()`](https://newrelic.github.io/node-newrelic/API.html#startBackgroundTransaction)と[サンプルアプリケーションを](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/background-transactions)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        ウェブトランザクションを新規作成する
      </td>

      <td>
        [`newrelic.startWebTransaction()`](https://newrelic.github.io/node-newrelic/API.html#startWebTransaction)使用してください。
      </td>
    </tr>

    <tr>
      <td>
        トランザクションが[Apdex](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#apdex)スコアに影響しないようにする
      </td>

      <td>
        [リクエストの名前付けと無視のルール](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#ignoring) 、 [無視のルールの例](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#example-ignoring-rule) を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        タイミングやコンピュータのリソースデータなど、その他のパフォーマンスデータの記録
      </td>

      <td>
        [`recordMetric`](https://newrelic.github.io/node-newrelic/API.html#recordMetric)または[`incrementMetric`](https://newrelic.github.io/node-newrelic/API.html#incrementMetric)を使用してください。
      </td>
    </tr>
  </tbody>
</table>

## 関連ログを見る [#logs]

エージェントはデフォルトで、アプリケーションのエラーとトレースのコンテキスト内でログを直接送信します。ログ データを他のテレメトリ データおよびサポートされているフレームワークと関連付ける方法の詳細について[は、コンテキスト ドキュメントのログを参照して](/docs/logs/logs-context/configure-logs-context-nodejs)ください。

New Relic によって計測されていないロギング メカニズムを使用している場合は、代わりにこの API 呼び出しを直接使用して、ログを記録し、コンテキストで転送することができます。

* [`newrelic.recordLogEvent`](https://newrelic.github.io/node-newrelic/API.html#recordLogEvent)

古い代替方法は、エージェントに転送を任せる代わりに、独自のログ フォワーダーを使用することです。この場合、ログを転送する前に、適切なコンテキストでログに注釈を付ける必要があります。次の API 呼び出しを使用します。

* [`newrelic.getTraceMetadata`](https://newrelic.github.io/node-newrelic/API.html#getTraceMetadata)
* [`newrelic.getLinkingMetadata`](https://newrelic.github.io/node-newrelic/API.html#getLinkingMetadata)

## 機器の非同期作業 [#async]

[サポートされているフレームワーク](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent#supported-frameworks) および [サポートされている Node.js バージョン](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent#version) では、New Relic の Node.js エージェントは通常、非同期作業を正しく計測します。しかし、アプリケーションが他のフレームワークを使用している場合や、デフォルトの非同期計測が不正確な場合は、非同期作業を明示的に追跡することができます。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        あなたがしたい場合は...
      </th>

      <th>
        これを行う...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        New Relicがすでにインストゥルメントしている非同期メソッドをトレースする
      </td>

      <td>
        [`newrelic.startSegment`](https://newrelic.github.io/node-newrelic/API.html#startSegment)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        New Relicがインストゥルメントしていない非同期メソッドをトレースする
      </td>

      <td>
        [`newrelic.startSegment`](https://newrelic.github.io/node-newrelic/API.html#startSegment)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        迷子になったトランザクションのトレース
      </td>

      <td>
        [`newrelic.startSegment`](https://newrelic.github.io/node-newrelic/API.html#startSegment)参照してください。 あなたの場所を失っているライブラリに対して独自の[カスタムインストゥルメンテーション](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation)を作成することもできます。
      </td>
    </tr>
  </tbody>
</table>

## 外部サービスへの機器呼び出し [#external-services]

[リクエストネーミング API](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#loading) がロードされると、New Relic の Node.js エージェントは、外部のサービスコールを自動的に識別することができます。また、これらのメソッドを使用して、アプリの他のアプリやデータベースへの接続に関するデータを収集することもできます。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        あなたがしたい場合は...
      </th>

      <th>
        これを行う...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        外部リソース（外部サービス、データベースサーバー、メッセージキューなど）への呼び出しの時間を計測します
      </td>

      <td>
        これらのいずれかを適宜使用してください。

        * [カスタムインストルメントAPI](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#custom-instrumentation-api)

        * [メッセージキュー](/docs/agents/nodejs-agent/supported-features/message-queues)

          GitHub の[データストア](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-datastore)と[メッセージ シムの](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-messages)サンプル アプリケーションも参照してください。
      </td>
    </tr>

    <tr>
      <td>
        New Relic エージェントでインストルメントされた別のアプリにアクティビティを接続する
      </td>

      <td>
        [ディストリビューティッド（分散）トレーシングを](/docs/enable-distributed-tracing)使用します。 ディストリビューティッド（分散）トレーシング ヘッダーを手動で挿入して受け入れる方法の詳細については、GitHub の[サンプル アプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/distributed-tracing)を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        リクエストが分散システムを通過する際の経路を見ることができます。
      </td>

      <td>
        [ディストリビューティッド（分散）トレーシング](/docs/agents/enable-distributed-tracing)
      </td>
    </tr>
  </tbody>
</table>

## エラーを収集または無視する [#errors]

通常、エージェントはエラーを自動的に検出します。 ただし、エージェントを使用して手動でエラーをマークすることは可能です。 エラーを[無視](/docs/apm/applications-menu/error-analytics/ignoring-errors-new-relic-apm)としてマークすることもできます。 API メソッドを使用してエラーをログに記録、グループ化、関連付ける方法の詳細については、GitHub の[サンプル アプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/error-fingerprinting)を使用してください。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        あなたがしたい場合は...
      </th>

      <th>
        これを行う...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        エージェントが自動的に報告しないエラーを報告する
      </td>

      <td>
        [`newrelic.noticeError()`](https://newrelic.github.io/node-newrelic/API.html#noticeError)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        定義したカスタム フィルター関数を使用して、名前でエラーをグループ化します
      </td>

      <td>
        [`newrelic.setErrorGroupCallback()`](https://newrelic.github.io/node-newrelic/API.html#setErrorGroupCallback)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        エラーをユーザーに関連付ける
      </td>

      <td>
        [`newrelic.setUserID()`](https://newrelic.github.io/node-newrelic/API.html#setUserID)参照してください。
      </td>
    </tr>
  </tbody>
</table>

## アプリからカスタムイベントと指標データを送信する [#custom-data]

New Relic には、任意のカスタム データを記録するさまざまな方法が含まれています。 New Relic のデータ型の説明については、 [「データ収集」](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data)を参照してください。 以下の API メソッドの使用に関する詳細については、GitHub の[サンプル アプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/69d500e02077d2565c4762c21bf779e3e39845bf/custom-instrumentation/attributes-events-metrics)を使用してください。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        あなたがしたい場合は...
      </th>

      <th>
        これを行う...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        New Relicで分析できるように、イベントに関するデータを送信します
      </td>

      <td>
        [カスタムイベント](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#node-att)を作成します。 [`newrelic.recordCustomEvent()`](https://newrelic.github.io/node-newrelic/API.html#recordCustomEvent)参照してください。
      </td>
    </tr>

    <tr>
      <td>
        イベントにメタデータのタグを付けて、イベントをフィルタリングしてファセット化します
      </td>

      <td>
        必要に応じて[カスタムアトリビュート](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#nodejs=att)を追加します。 カスタムアトリビュートコレクションは、Node.js エージェントでデフォルトで有効になっています。) [`newrelic.addCustomAttribute()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttribute)と[`newrelic.addCustomAttributes()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttributes)を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        カスタムパフォーマンスデータを報告する
      </td>

      <td>
        [カスタムメトリック](/docs/agents/manage-apm-agents/agent-data/custom-metrics)を作成します。 [`newrelic.recordMetric()`](https://newrelic.github.io/node-newrelic/API.html#recordMetric)と[`newrelic.incrementMetric()`](https://newrelic.github.io/node-newrelic/API.html#incrementMetric)を参照してください。 データを表示するには、 [<DNT>**metrics and events**</DNT>](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer)を使用します。
      </td>
    </tr>
  </tbody>
</table>

## ブラウザエージェントの制御 [#browser]

通常、 <InlinePopover type="browser" />エージェントはページに自動的に追加されるか、JavaScript スニペットをコピー/貼り付けすることによってデプロイされます。 これらの推奨方法の詳細については、 [「New Relic へのブラウザー アプリの追加」](/docs/browser/new-relic-browser/installation-configuration/add-apps-new-relic-browser)を参照してください。

また、APMエージェントのAPIコールでブラウザエージェントを制御することもできます。詳細については、 [ブラウザモニタリングとNode.jsエージェント](/docs/agents/nodejs-agent/supported-features/new-relic-browser-nodejs-agent) を参照してください。

## カスタムインストルメントの拡張 [#custom-instrumentation]

カスタムインストゥルメンテーションAPI使用の詳細については、 [「Node.js カスタムインス](/docs/apm/agents/nodejs-agent/extend-your-instrumentation/nodejs-custom-instrumentation/)トゥルメンテーション」を参照してください。

ES モジュール アプリケーションにカスタムインストゥルメンテーションを追加するには、 [ES モジュールの](/docs/apm/agents/nodejs-agent/installation-configuration/es-modules)ドキュメントまたは GitHub の[サンプル アプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/esm-app)を参照してください。