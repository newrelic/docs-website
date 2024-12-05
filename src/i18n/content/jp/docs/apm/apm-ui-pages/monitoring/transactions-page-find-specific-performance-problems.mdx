---
title: Transactionsページ：特定のパフォーマンス問題を突き止める
tags:
  - APM
  - APM UI pages
  - Monitoring
metaDescription: 'APM''s Transactions page shows app, browser, or other transaction details, average response time, and throughput as requests per minute or CPU usage.'
freshnessValidatedDate: never
translationType: human
---

APMの<DNT>**Transactions**</DNT>ページは、パフォーマンスの問題を微調整したり、エラーを解決したりするのに適した[トランザクション](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm)を特定するのに役立ちます。このページには、選択したアプリのトランザクション<DNT>**Requests**</DNT> 、[ウォールクロックタイム](#wall_clock_time)のトップ20位のトランザクション（パーセント）、関連のある[スループット](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#throughput)（1分あたりのリクエスト数または<DNT>**rpm**</DNT>）がリストされます。

[ウェブ以外のトランザクション](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions)（メッセージ処理、バックグラウンドのタスク、ウェブリクエストを処理しないその他のプロセスやジョブなど）の場合、このページにCPUとメモリ使用率のチャートが表示されます。

## トランザクションのタイプ [#tx_types]

<Callout variant="tip">
  すべてのアプリケーションおよびサービスに関する大まかな概要を得るには、[エンティティエクスプローラー](/docs/new-relic-one/use-new-relic-one/ui-data/new-relic-one-entity-explorer)を利用してください。
</Callout>

選択されたアプリケーションによっては、<DNT>**Transactions**</DNT>ページに[利用可能なトランザクションのタイプ](#txn-type-dropdown)から選択するためのドロップダウンが掲載されている場合があります。New Relicは、[リクエストのタイプ（](/docs/apm/applications-menu/features/request-queuing-tracking-front-end-time)ウェブトランザクション[または](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction)ウェブ以外のトランザクション[）によって](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#non-web-transaction)処理時間を測定します。これには、以下の項目が含まれます。

* <DNT>
    **Web:**
  </DNT>

  アプリケーションサーバーのリクエスト

* <DNT>
    **Non-web:**
  </DNT>

  その他のリクエスト（操作、バックグラウンドタスクなど）

<DNT>**Transactions**</DNT>ページには、[トランザクショントレース](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)と[キートランザクション](/docs/apm/transactions/key-transactions/introduction-key-transactions)へのリンクも含まれています。利用可能な情報のタイプは、選択したアプリケーション、リクエストのタイプ（ウェブまたはウェブ以外）によって異なります。

## ウォールクロックタイム [#wall_clock_time]

ウォールクロックタイムは、特定のトランザクション中の「リアルタイムの経過」を測定します。たとえば、eコマースサイトでのチェックアウトエクスペリエンスの管理を担当するエンジニアだとします。 顧客が商品をカートに追加するまでにどれくらいの時間がかかるかを把握したいと考えています。 トランザクションが完了するまでに15秒かかりましたが、実際または顧客の「実時間」では1分でした。 この時間の不一致は、ネットワーク呼び出しやその他の入出力に関数が待機する必要があり、その待機時間がシステムのトランザクション時間に考慮されていないために発生する可能性があります。 New Relicはすべてのトランザクションにウォールクロックタイムを使用し、すべてのトランザクションにわたってその値を合計します。

上記の例では、顧客がカートに商品を追加すると、ホストはこの作業を完了するために2つのリクエストを行う必要があると想像してください。 これらの機能の1つは完了までに3秒かかり、もう1つは完了までに2秒かかる場合がありますが、これらは同時に実行されるため、顧客が待つ必要があるのは3秒だけです。 この並行作業のため、100%を超える割合が表示されることがあります。たとえば、100％の値は、選択したすべてのトランザクションの実行時間が、ウォールクロックタイムの記録に費やされた時間と等しいことを示します。

## トランザクションを表示する [#tx_viewing]

ご使用のアプリのトランザクションリクエストに関する情報を表示するには：

1. 次のうち1つを行います。

   * <DNT>
       **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions**
     </DNT>

     に移動します。

   * <DNT>
       **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services > (select an app) > Monitor > Transactions**
     </DNT>

     に移動します。

2. 利用可能な場合：トランザクションの利用可能な[タイプ](#tx_types)の表示を変更するには、

   <DNT>
     **Type**
   </DNT>

   を選択します。

3. [ソート順](#sort-definitions)を選択するか、デフォルトのままにします。

4. 使用可能な場合は、[表示のタイプ](/docs/using-new-relic/user-interface-functions/view-your-data/select-chart-views)をチャート（デフォルト）、ヒストグラム、またはパーセンタイルとして選択します。

5. 追加の詳細を表示するには、トランザクション[ドリルダウン機能](#tx_functions)のいずれかを使用します。

6. ダッシュボードにチャートを追加するには、チャートの上にカーソルを移動し、その下に表示される

   <DNT>
     **Add to a dashboard**
   </DNT>

   リンクを選択します。

チャートの背景が薄い赤色の場合は、アラート条件の[<DNT>**Critical**</DNT>閾値](/docs/alerts/new-relic-alerts/defining-conditions/define-thresholds-trigger-alert)を超過している期間を示します。 [アラート](/docs/alerts-applied-intelligence/new-relic-alerts/alert-incidents/view-event-details-incidents)で[インシデントの詳細](/docs/alerts/new-relic-alerts/getting-started/introduction-new-relic-alerts)を表示するには、チャートをクリックします。

詳細については、[ダッシュボードの管理](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/)に関するドキュメントを参照してください。

## ドリルダウン機能を使用する [#tx_functions]

New Relicの標準的な[ユーザーインタフェース機能](/docs/new-relic-solutions/new-relic-one/introduction-new-relic-platform)のいずれかを使用して、詳細情報にドリルダウンします。<DNT>**Transactions**</DNT>ページには、追加のドリルダウン機能があります。

<CollapserGroup>
  <Collapser
    id="txn-type-dropdown"
    title="表示されるトランザクションタイプを変更する"
  >
    <img
      title="trx-type-dropdown.png"
      alt="Screenshot showing the dropdown that allows you to choose other transaction types."
      src="/images/apm_screenshot-crop_dropdown.webp"
    />

    トランザクションのリストの上に<DNT>**Type**</DNT>ドロップダウンが表示される場合は、目的のトランザクションタイプを選択できます。使用可能なタイプは、アプリケーションが使用するトランザクションによって異なります。
  </Collapser>

  <Collapser
    id="sort-definitions"
    title="パフォーマンス測定のタイプを選択する（ソート）"
  >
    トランザクションリストの上にある<DNT>**Sort**</DNT>ドロップダウンを使用すると、さまざまな測定値に応じて、トランザクションを確認できます。これにより、パフォーマンスの調整やエラーの修正に適した候補を特定することができます。

    ソートの基準：

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **Sort option**
            </DNT>
          </th>

          <th>
            <DNT>
              **Comments**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            最も時間がかかる（デフォルト）
          </td>

          <td>
            アプリの合計使用時間の割合が最高。

            最も多くの時間を費やしたトランザクションを測定します。これは、トランザクションの回数とトランザクションの完了に要した時間を乗じることによって算出されます。トランザクションの所要時間は短い場合もありますが、高頻度で呼び出されると、このランクの最上位に表示されます。
          </td>
        </tr>

        <tr>
          <td>
            平均応答時間が最も長い
          </td>

          <td>
            特定の期間における平均応答が最も遅い、個別のトランザクションです。

            最も遅いタイプのトランザクションを測定します。トランザクションは数回呼び出すことができますが、完了時間が最長のトランザクションであれば、このランクの最上位に表示されます。
          </td>
        </tr>

        <tr>
          <td>
            Apdexの満足度が最低
          </td>

          <td>
            Webアプリケーションとサービスのレスポンスタイムに対するユーザーの不満度（[Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction)）が最も高いトランザクション。

            [不満度](/docs/apm/new-relic-apm/apdex/view-your-apdex-score#apdex-dissat)は、完璧なApdexスコア（1.0）と、[Apdex設定](/docs/apm/new-relic-apm/apdex/change-your-apdex-settings)に基づいたお使いのアプリケーションの`apdex_t`（「許容可能」）スコア間の差異です。この比率が最高（つまり最悪）のトランザクションが、このランキングの最上位に表示されます。
          </td>
        </tr>

        <tr>
          <td>
            最高のスループット
          </td>

          <td>
            これは、1分あたりの操作リクエストまたは<DNT>**rpm**</DNT>として表示される[スループット](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#throughput)の測定値です。 （ウェブスループットの場合、1分あたりのリクエストは、1分あたりのページ数（<DNT>**ppm**</DNT>）と呼ばれることがあります。）1分あたりのリクエスト件数が最も多いトランザクションが、このランキングのトップに表示されます。
          </td>
        </tr>
      </tbody>
    </table>

    <Callout variant="tip">
      選択したトランザクションタイプに応じて、異なるソートオプションを使用できる場合があります。
    </Callout>
  </Collapser>

  <Collapser
    id="tx-summary"
    title="トランザクションに関するサマリー情報の上にカーソルを合わせる"
  >
    <img
      title="crop-tx-summary-details"
      alt="crop-tx-summary-details"
      src="/images/apm_screenshot-crop_transaction-summary.webp"
    />

    トランザクションに関する重要な情報をすばやく表示するには、リスト内の名前の上にカーソルを重ねます。
  </Collapser>

  <Collapser
    id="tx-details"
    title="トランザクションに関する詳細情報を選択する"
  >
    <img
      title="icon-detail-tabs.png"
      alt="Transaction details tab"
      src="/images/apm_screenshot-crop_transaction-detail-tab.webp"
    />

    詳細情報を表示するには、リストからトランザクションを選択して、 <DNT>**App performance**</DNT>または<DNT>**Historical performance**</DNT>を選択します。 [トランザクショントレースを表示](/docs/traces/viewing-transaction-traces)することもできます。
  </Collapser>

  <Collapser
    id="chart-views"
    title="さまざまなビジュアル形式でトランザクションデータを表示する"
  >
    <img
      title="chart_type_selectors.png"
      alt="Screenshot showing selectors to change the chart."
      src="/images/apm_screenshot-crop_chart-selector.webp"
    />

    <DNT>**Transaction**</DNT>ページの<DNT>**Top 20 transactions**</DNT>チャートと選択したトランザクションの<DNT>**App performance**</DNT>ウィンドウには、次のようにデータを表示するオプションがあります。

    * [チャート](/docs/using-new-relic/user-interface-functions/view-your-data/select-chart-views)

    * [ヒストグラム](/docs/using-new-relic/user-interface-functions/view-your-data/histograms-view-data-distribution)

    * [パーセンタイル](/docs/using-new-relic/user-interface-functions/view-your-data/percentiles-compare-ranked-data)

      さらに、選択したトランザクションの<DNT>**Breakdown**</DNT>テーブルからリンクを選択して、内訳データのすべてのセグメントを表示または非表示にすることができます。
  </Collapser>

  <Collapser
    id="browser-data"
    title="対応するブラウザのリクエストデータを表示する"
  >
    ブラウザの情報を表示するには、[Browserエージェントをインストールする](/docs/new-relic-browser/browser-settings)必要があります。次に、対応する[ブラウザのリクエスト](/docs/browser/new-relic-browser/additional-standard-features/page-views-understanding-your-sites-popularity)データを表示するには、次のいずれかのオプションを使用します。

    * 使用可能な場合は、

      <DNT>
        **Browser drill-down**
      </DNT>

      リンクを選択します。

    * <DNT>
        **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Page views**
      </DNT>

      に移動します。
  </Collapser>

  <Collapser
    id="breakdown-table"
    title="通話回数の多いトランザクションまたは通話時間の長いトランザクションのセグメントを特定する"
  >
    <img
      title="APM-transaction-high-time-colorization.png"
      alt="Transaction segment with high call time count colorization"
      src="/images/apm_screenshot-crop_apm-high-transaction.webp"
    />

    トランザクションの<DNT>**Breakdown table**</DNT>では、 <DNT>**Avg calls (per txn)**</DNT>列に色分けされたセグメント値が含まれます。これらは、閾値を超過しているインストゥルメントされたセグメントを示します。

    * <Icon
        style={{color: 'yellow'}}
        name="fe-square"
      />

      黄色：セグメント時間は、合計トランザクションタイムの10％を超え、通話回数は10を超えています。

    * <Icon
        style={{color: 'red'}}
        name="fe-square"
      />

      赤色：セグメント時間は、合計トランザクションタイムの10％を超え、通話回数は20を超えています。
  </Collapser>
</CollapserGroup>

## 追加関数 [#more_tx_functions]

<DNT>**Transactions**</DNT>ページで選択したトランザクションの追加関数は次のとおりです。

<table>
  <thead>
    <tr>
      <th width={250}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        操作やその他のバックグラウンドタスクのトランザクションを表示する
      </td>

      <td>
        <DNT>**Type**</DNT>を<DNT>**Other transactions**</DNT> （またはリストされた特定のタイプ）に変更し、特定のトランザクションを選択します。

        <DNT>**Transactions**</DNT>ページには、[ウォールクロックタイム](#wall_clock_time)、CPU使用率、メモリ使用量を基準に、この選択に対するトップ5位のトランザクションが表示されます。
      </td>
    </tr>

    <tr>
      <td>
        ビジネスにとって重要なトランザクションを追跡する
      </td>

      <td>
        トランザクションの名前を選択してから、[<DNT>**Track as key transaction**</DNT>](/docs/apm/transactions/key-transactions/introduction-key-transactions)を選択します。
      </td>
    </tr>

    <tr>
      <td>
        トランザクショントレースの詳細を表示する
      </td>

      <td>
        [トランザクショントレース](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction-trace)は、単一トランザクションの全体像を表します。

        1. <DNT>
             **Transactions**
           </DNT>

           ページから、[トランザクショントレース](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)を選択します。

        2. 使用可能な場合は、

           <DNT>
             **Summary**
           </DNT>

           、

           <DNT>
             **Trace details**
           </DNT>

           、または

           <DNT>
             **Database queries**
           </DNT>

           の[ビューを選択します](/docs/apm/transactions/transaction-traces/introduction-transaction-traces#find-view)。

        3. トランザクショントレースをフルスクリーン表示に拡大するには、フルスクリーン

           <Icon
             style={{color: '#4392AA'}}
             name="fe-maximize-2"
           />

           アイコンを選択します。

        4. <DNT>
             **Transactions**
           </DNT>

           ページに戻るには、トランザクショントレースの名前の横にある「戻る」矢印を選択します。
      </td>
    </tr>

    <tr>
      <td>
        トレースの詳細についてログを調べる
      </td>

      <td>
        [コンテキストのログ](/docs/logs/logs-context/configure-logs-context-apm-agents/)機能を使用している場合は、トレースにリンクされているログを確認できます。

        1. <DNT>
             **Transactions**
           </DNT>

           ページからトレースをクリックして、トレースの詳細ページに移動します。

        2. トレースの詳細ページで、

           <DNT>
             **See logs**
           </DNT>

           をクリックします。

        3. 各ログメッセージに関連する詳細を表示するには、メッセージを直接クリックしてください。
      </td>
    </tr>

    <tr>
      <td>
        トランザクションセグメントを追加または表示する
      </td>

      <td>
        * トランザクションにセグメントを追加するには、[カスタムインストゥルメンテーション](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/)を使用します。
        * 特定のトランザクションのセグメントを表示するには、[トランザクショントレース](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)を使用します。
      </td>
    </tr>

    <tr>
      <td>
        レポートを表示する
      </td>

      <td>
        [ウェブトランザクション分析レポート](/docs/apm/reports/other-performance-analysis/web-transactions-analysis-report)をウェブトランザクションに使用して、[バックグラウンドジョブ分析レポート](/docs/apm/reports/other-performance-analysis/background-jobs-analysis-report)をウェブ以外のトランザクションに使用することができます。これにより、スループットに費やされた時間の量、トランザクションの合計時間、それを実行する平均時間、および適用可能なApdexスコアを比較することができます。
      </td>
    </tr>

    <tr>
      <td>
        すべてのトランザクショントレースを削除する
      </td>

      <td>
        <Callout variant="caution">
          [<DNT>**Delete all traces**</DNT>](/docs/traces/deleting-transaction-traces)を選択すると、それらを復元することはできません。
        </Callout>
      </td>
    </tr>
  </tbody>
</table>
