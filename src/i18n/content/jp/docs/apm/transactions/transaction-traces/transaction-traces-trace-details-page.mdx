---
title: 現場トレースを深く掘り下げる
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: APM's Trace Details page shows additional timing details about the individual segments that make up a transaction trace.
freshnessValidatedDate: never
translationType: machine
---

トランザクションは、単一の作業単位を構成する関数呼び出しとメソッド呼び出しのグループです。 トランザクションは URL にマップされることがよくありますが、常にそうとは限りません。 <InlinePopover type="apm"/>では、 **Transactions**タブで特定のエンティティのすべての取引を表示できます。 \[トランザクション] タブで特定のトランザクションをクリックすると、_全期間_にわたる_すべてのユーザー_のデータが表示されます。

ただし、_特定の_インスタンス中に_特定の_ユーザーに何が起こったのかを詳しく知りたい場合は、**Transaction traces**使用する必要があります。 **Trace details **タブでは、次のことができます。

* **低速セグメントの特定**: 合計トレース時間の 25% 以上を占めたセグメントは「低速スパン」としてマークされ、潜在的なボトルネックに注意を向けます。
* **トランザクションを視覚化する**: データベース呼び出し、外部呼び出し、コード実行などのさまざまなセグメントの継続時間を示す、現場のタイムラインのグラフィック表現を確認します。
* **効率的なトラブルシューティング**: データをフィルタリングして、遅いスパンのみに焦点を当てます。

## 使い方 [#how-it-works]

**Transactions** タブで特定の取引を選択すると、**Transaction details** タブが開きます。 そこから、**Transaction trace**テーブルでトランザクションを選択し、**Trace details page**ページを開きます。 **Trace details** ページでは、_単一インスタンス_でのトランザクションに関する_1 人のユーザーの_エクスペリエンスを詳細に調べることができます。 タイムライン、レイテンシー、ウォーターフォールの 3 つのビューのいずれかを使用してデータを探索します。

<img
  title="transaction trace details"
  alt="A screenshot depicting the transaction trace details view."
  src="/images/apm_screenshot-crop_transaction-trace-details.webp"
/>

<figcaption>
  に行く <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Trace details.**</DNT>
</figcaption>

<Tabs>
  <TabsBar>
    <TabsBarItem id="timeline-view">
      タイムラインビュー
    </TabsBarItem>

    <TabsBarItem id="latency-view">
      レイテンシービュー
    </TabsBarItem>

    <TabsBarItem id="waterfall-view">
      滝の眺め
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="timeline-view">
      トレース タイムライン ビューには、トレースのインタラクティブな凝縮された視覚表示が含まれています。 このビューに表示されるノードの色は、各セグメントのカテゴリのウォーターフォールの凡例と一致します。

      このビューでノードの上にマウスを置くと、タイムラインの上にセグメント名が表示されます。 このビュー内のノードをクリックすると、ウォーターフォール内の同じノードが選択され、セグメントの詳細ペインが開きます。 このビューを水平方向にドラッグすると、ウォーターフォール内に表示されるノードがフィルタリングされ、選択したウィンドウ内に発生するノードが表示されます。 緑色のスクラバーを手動で移動するか、 **Reset timeline**ボタンをクリックすることで、フィルターされたウィンドウを変更できます。

      <img
        title="Timeline view"
        alt="transaction-traces-timeline-view.png"
        src="/images/distributed-tracing-trace-details-page-timeline-view.webp"
      />
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      ### レイテンシービュー [#latency]

      \[レイテンシー ビュー] セクションでは、全体のトレース期間に影響を及ぼしている 6 つの最も遅いサービスまたはコンポーネントと、それらの個々の影響および遅いノード数がインサイトに表示されます。

      注意すべき重要な点:

      * 報告されるサービスの継続時間は、そのサービスから発生するすべてのノードの排他的継続時間の合計です。
      * 円グラフまたは表からサービスをクリックすると、そのサービスからウォーターフォールの最初のノードが選択されます。
      * 6 つを超えるサービスがトレースに関与する場合、 **Other**というラベルの付いたカテゴリが存在する場合があります。このカテゴリには、最も遅い 6 つを除く、トレース内のすべてのサービスからのロールアップ データが含まれます。 **Other**カテゴリは、表または円グラフ内のクリックに応答しません。

        <img
          title="Latency view"
          alt="transaction-traces-latency-view.png"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      ウォーターフォールには、呼び出しパスごとに分岐に配置されたセグメントのノード ツリーが表示されます。 各セグメントには、サービス名、セグメント タイプ、セグメント期間など、発信元のサービスに関する情報が表示されます。

      ### 滝を移動する

      ウォーターフォール ビューには、関心のあるセグメントを簡単に見つけられるようにするためのいくつかのコントロールがあります。

      * **展開/折りたたみ**: 矢印を使用して、個々のセグメントまたはブランチ全体を簡単に表示または非表示にします。

      * **遅いスパンに焦点を当てる**: トレースに遅いスパンがある場合は、チェックボックスをクリックして他のセグメントを除外し、潜在的なボトルネックに即座に焦点を当てます。

      * **凡例**: 凡例内の任意の色をクリックすると、そのサービス カテゴリに属するセグメントの詳細が表示されます。

        ### 滝の伝説 [#waterfall-legend]

        滝はさまざまなセグメントに分かれています。

        黄色: 合計プレイタイムの 25% 以上がこのセグメントに費やされました。

        <img
          title="Slow segment background."
          alt="icon-alerts-yellow.png"
          src="/images/apm_icon_yellow-alert.webp"
        />

        ストライプ: エージェントの現在の設定でインストゥルメントが行われていないクラスとメソッドを含むセグメント。

        <img
          title="uninstrumented segment"
          alt="The icon that represents and uninstrumented segment"
          src="/images/apm_icon_uninstrumented-segment.webp"
        />

        ウォーターフォールの各セグメントには、トレース期間に対する相対的な期間を表すバーが表示されます。 このバーの色は、セグメントがアプリケーション コード、データベース呼び出し、または外部呼び出しに属しているかどうかを示します。

        <img
          title="transaction trace waterfall"
          alt="A screenshot showing the transaction trace waterfall view in the UI."
          src="/images/apm_screenshot-crop_transaction-trace-waterfall.webp"
        />

        ### ウォーターフォールセグメントのプロパティ [#icons]

        これらのアイコンは各セグメントを識別できます。

        <table id="segment-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                セグメントプロパティ
              </th>

              <th style={{ width: "110px" }}>
                指標
              </th>

              <th>
                説明
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                サービス
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-service-span-icon.png"
                  alt="New Relic distributed tracing service icon."
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                このアイコンは、サービスのエントリ ポイントであるノードを表します。
              </td>
            </tr>

            <tr id="in-process">
              <td>
                インプロセス
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon."
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                このアイコンは、(プロセス間ノードではなく) プロセス内で発生するノードであるインプロセス ノードを表します。 例には、ミドルウェア インストゥルメンテーションやユーザー作成ノードが含まれます。
              </td>
            </tr>

            <tr>
              <td>
                データストア
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                このアイコンは、データストアへのセグメント呼び出しを表します。
              </td>
            </tr>

            <tr>
              <td>
                外部の
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external node icon."
                  src="/images/new-relic-distributed-tracing-external-icon.webp"
                />
              </td>

              <td>
                このアイコンは、HTTP 経由で行われた外部サービスへの呼び出しを表すカテゴリを表します。
              </td>
            </tr>

            <tr>
              <td>
                ブラウザアプリ
              </td>

              <td>
                <img
                  title="distributed-tracing-browser-span-icon.png"
                  alt="New Relic distributed tracing browser node icon."
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                このアイコンは[ブラウザ アプリケーション セグメント](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing)を表します。
              </td>
            </tr>

            <tr>
              <td>
                ラムダ
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                このアイコンは、 [Lambda関数](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda)のノードを表します。
              </td>
            </tr>
          </tbody>
        </table>

        ### ウォーターフォールセグメントのグループ化ルール [#rollup]

        New Relic は、ウォーターフォール内で高速に繰り返されるメソッド呼び出しを自動的にグループ化し、複雑なテラストレースを理解しやすくします。 セグメントをグループ化すると、セグメントが多すぎて混乱することなく、潜在的に問題のある領域に焦点を当てることができます。

        仕組みは次のとおりです。

      * **高速呼び出し**: `fast calls`というタイトルのセグメントが表示された場合、New Relic が複数の呼び出しをグループ化し、迅速に (それぞれ 7.5 ミリ秒未満) 完了したことを意味します。 通常、これらはパフォーマンスの問題ではありませんが、必要に応じてグループを展開して個々のセグメントを表示できます。

      * **同一の呼び出し**: 4 つ以上の連続した同一の呼び出しは N+1 の問題を示すことが多いため、New Relic はそれらを折りたたんで潜在的な問題を強調表示します。 折りたたまれたグループを展開すると、分析対象の最初の 3 つの呼び出しが表示されます。
    </TabsPageItem>
  </TabsPages>
</Tabs>

## データをさらに深く掘り下げる [#deep-dive]

### 遅いスパン [#slow-spans]

_低速スパン_としてマークされたノードは、次の基準を満たします。

* セグメントはリーフ ノードまたは出口ノードであり、このノードには子が存在しないことを意味します。
* セグメントには、合計トレース期間の 25% 以上の排他期間があります。

### アプリケーションコードのトレース [#application-code]

セグメントが表内で**Application code**としてリストされている場合、コードのそのセクションがインストゥルメントされなかったことを示します。 [カスタムインストゥルメンテーションを](/docs/apm/other-features/metrics/custom-instrumentation)使用すると、コードのその部分の詳細を取得できます。 セグメントは、 部分トレース の** Application code** [](#partial)としてリストされることがよくあります。

### 部分的な痕跡 [#partial]

パフォーマンス上の理由から、APM は、遺跡トレースの最初の 2,000 セグメント (Node.js の場合は 900) のみをキャプチャします。 段階トレースがそのセグメント数を超える場合、エージェントは段階トレースを切り捨て、 <DNT>**Details**</DNT>ページの上部にメッセージを表示します。

`This is a partial trace.`

セグメントを切り詰めるタイミングについては、APMエージェントによってルールが異なります。

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        APMエージェント
      </th>

      <th>
        セグメントルールの切り捨て
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        セグメント期間は、Goセグメント構成で設定された[`TransactionTracer.SegmentThreshold`](/docs/agents/go-agent/configuration/go-agent-configuration#txn-tracer-segment-threshold)値よりも大きくする必要があります。
      </td>
    </tr>

    <tr>
      <td>
        Java、.NET、Ruby
      </td>

      <td>
        これらのエージェントは、トレースを時系列に切り詰めます。詳細については、 [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-transaction-segments) 、 [.NET](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) 、 [Ruby](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) のトランザクショントレーサーのドキュメントを参照してください。
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        Node.jsエージェントは、トランザクション・トレースの最初の900セグメントのみをキャプチャします。詳細については、 [Node.js トランザクショントレーサの設定](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config) を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        セグメントの長さに基づいて切り捨てます。最も遅い 2,000 セグメントがトレース用にキャプチャされます。詳細については、 [PHP トランザクション トレーサの設定](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page/)を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        セグメントの継続時間に基づいて切り捨てられ、最も遅い2,000セグメントがトレースに取り込まれます。詳細については、 [Python トランザクショントレーサの設定](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) を参照してください。
      </td>
    </tr>
  </tbody>
</table>

### 分散型トレース [#distributed-traces]

トランザクション追跡が分散トレース データに基づいている場合、ページ ヘッダーの分散トレース リンクをクリックすると、完全な分散トレースを表示できます。

注意すべき点:

* すべての属性は、3 つのデフォルトのプロパティ タイプに分割されるのではなく、単一の`Attributes`セクションにグループ化されます。
* セグメント メトリクス名は、ディストリビューティッド（分散）トレーシングとモーショントレースでは若干異なる場合があります。
* スタックトレースはセグメント属性には表示されません。
* トレースの代わりにディストリビューティッド（分散）トレーシングを表示すると、トレースの詳細ページに若干異なる情報が表示されます。

## セグメントの詳細を使用したトラブルシューティング [#segment-details]

セグメントを選択すると、3 つの個別のセグメント詳細ページを含むペインが開きます。 これらのタブは、パフォーマンスの問題のトラブルシューティングに役立ちます。

1. 「パフォーマンス」タブ:

   * **パフォーマンスの傾向を視覚化する**: セグメントのオペレーションの平均期間とスループットをグラフで示し、パターンと潜在的な外れ値を明らかにします。
   * **比較対照**: この特定のセグメントのパフォーマンスが平均と比べてどのように上昇しているかを確認し、注意が必要な可能性のある領域を特定します。

2. 「属性」タブ:

   * **さらに詳しく調べる**: 属性の意味と潜在的なトラブルシューティングへの影響を理解します。 [データ辞書を](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span)使用してさらに詳しく知ることができます。

3. 「詳細」タブ:

   * **基本情報**: セグメントの完全名、データ ソース、関連メタデータなどの重要な詳細を表示します。 詳細[については、ディストリビューティッド（分散）トレーシング ドキュメントを](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names)ご覧ください。
   * **カスタマイズされたインサイト**: データストア セグメントのデータベースなど、トラブルシューティングに重要なセグメント固有の情報を発見します。

4. ログタブ:

   * **ログを調べる**:[コンテキスト内のログ](/docs/logs/logs-context/configure-logs-context-apm-agents/)を使用すると、トレースに関連するログメッセージをアプリのUIで直接確認できます。

セグメントは、セグメント タイプに基づいて日付を表示します。 たとえば、データストア セグメントの詳細には、データベースクエリが含まれます。
