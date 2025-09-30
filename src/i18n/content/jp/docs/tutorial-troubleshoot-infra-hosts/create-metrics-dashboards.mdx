---
title: インフラメトリクスを使用してダッシュボードを作成する
metaDescription: Create custom infrastructure dashboards to tell a story about your system.
freshnessValidatedDate: '2023-08-24T00:00:00.000Z'
translationType: machine
---

ダッシュボードは、特定の対象者に対してデータがどのように表示されるかを制御できるストーリーテリング デバイスです。チームが異常な動作を解決する任務を負っている場合、それらのチームのニーズに合わせたダッシュボードを作成できます。ダッシュボードを作成する理由は数多くありますが、どれも結局はトラブルシューティング プロセスを改善することにあります。

<img title="Your host summary page when you go to Infrastructure" alt="A screenshot displaying your host summary page" src="/images/infrastructure_screenshot-full_custom-dash.webp" />

## 目的 [#objectives]

このチュートリアルでは、ダッシュボードにデータを追加するさまざまな方法を示します。あなたはするであろう：

* 事前に構築されたダッシュボードを見つけてインストールする方法を学ぶ
* 「NRQL クエリでさまざまなチャート、グラフ、テーブルを作成する」を参照してください。
* メトリック エクスプローラーから新しいメトリック クエリを追加します。

## New Relic アカウントにカスタム ダッシュボードを追加する [#add]

<Steps>
  <Step>
    ## カスタム ダッシュボードをインストールする

    New Relic UI 内で事前に構築されたダッシュボードを購入できます。これらのダッシュボードは、独自のダッシュボードをカスタマイズするための出発点となります。ただし、ダッシュボードを初めて使用する場合は、インフラストラクチャ ダッシュボードから始めることをお勧めします。

    1. <DNT>**[one.newrelic.com &gt; Dashboards](https://one.newrelic.com/dashboards)**</DNT>に移動します。

    2. <DNT>**View all**</DNT>をクリックします。

    3. <DNT>**Infrastructure &amp; OS**</DNT>から<DNT>**Infrastructure Dashboard**</DNT>検索します。

       <SideBySide>
         <Side>
           <img title="Your host summary page when you go to Infrastructure" alt="A screenshot displaying your host summary page" src="/images/infrastructure_screenshot-full_view-all-dash.webp" />

           <DNT>**View All**</DNT>ページでは、事前に構築されたダッシュボードを探索できます。
         </Side>

         <Side>
           <img title="Your host summary page when you go to Infrastructure" alt="A screenshot displaying your host summary page" src="/images/infrastructure_screenshot-full_infra_Dash.webp" />

           さまざまなフレームワークまたはダッシュボード名を検索して、アカウントに追加できます。
         </Side>
       </SideBySide>

    インフラストラクチャ UI とは異なり、このダッシュボードにはホスト データが相互に関連して表示されます。 これにより、動作のベースラインを確立し、それらの動作からどのような種類の<InlinePopover type="alerts" />が必要かを決定し、観察されたパターンに基づいてストーリーを構築することができます。
  </Step>

  <Step>
    ## NRQL を使用してダッシュボードのウィジェットを作成する

    カスタム ダッシュボード内の各ウィジェットは、NRQL クエリで構成されます。SQL クエリと同様に、NRQL はデータベースに保存されているデータを制御および管理できるように設計されており、個々のニーズに合わせてデータを提示できます。特定のデータ ストーリーを構築するためのウィジェットを作成する方法を見てみましょう。

    1. <DNT>**Identify the problem you want to solve.**</DNT> たとえば、一貫してリソースを大量に消費するプロセスがいくつかあるが、これらのプロセスは異なるホストに分散されているとします。

    2. <DNT>**Experiment with NRQL.**</DNT> このデータを視覚的に表示するための最適な形式を決定する必要があります。 NRQL を使用すると、折れ線グラフ、表、円グラフ、時系列を作成できます。

       2 つの NRQL クエリが 2 つの異なるチャートを作成する例を次に示します。

       <SideBySide>
         <Side>
           ```sql
           SELECT count(*), average(threadCount), average(cpuPercent), average(cpuSystemPercent) 
           FROM ProcessSample FACET commandName SINCE 1 hour ago
           ```
         </Side>

         <Side>
           <img title="Your host summary page when you go to Infrastructure" alt="A screenshot displaying your host summary page" src="/images/infrastructure_screenshot-full_infra_processes.webp" />
         </Side>
       </SideBySide>

       <SideBySide>
         <Side>
           ```sql
           SELECT average(transmitBytesPerSecond) 
           FROM NetworkSample FACET hostname LIMIT 5 TIMESERIES 
           ```
         </Side>

         <Side>
           <img title="Your host summary page when you go to Infrastructure" alt="A screenshot displaying your host summary page" src="/images/infrastructure_screenshot-full_infra_network-timeseries.webp" />
         </Side>
       </SideBySide>

    3. <DNT>**Adapt an existing query to create new widgets.**</DNT> これを行うには、模倣したいグラフ上の省略記号をクリックし、 <DNT>**View query**</DNT>選択します。

    <img title="Your host summary page when you go to Infrastructure" alt="A screenshot displaying your host summary page" src="/images/infrastructure_screenshot-full_infra_view-query.webp" />

    <Callout variant="tip">
      NRQL クエリの作成について詳しく知りたい場合は、 [NRQL チュートリアルを](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-tutorial)参照してください。
    </Callout>
  </Step>

  <Step>
    ## メトリック エクスプローラーからメトリックを追加する

    ダッシュボードに追加したい特定のメトリクスは、 <DNT>**Metrics explorer**</DNT>から見つけることができます。 エクスプローラーにアクセスする方法はいくつかあり、必要なものに応じて異なります。 すべてのデータ ソースのすべてのメトリクスを表示するには、 <DNT>**[one.newrelic.com &gt; Metrics &amp; Events](https://one.newrelic.com/data-explorer)**</DNT>に移動します。

    始めたばかりの場合は、個別のソースからメトリクスを追加することをお勧めします。たとえば、CPU しきい値を頻繁に超える特定のホストに関するウィジェットが必要だとします。

    1. <DNT>**[one.newrelic.com &gt; All Capabilities &gt; Infrastructure](https://one.newrelic.com/infra/infrastructure/hosts)**</DNT>に移動してホストを見つけてください。

    2. ホストを対象とした概要ページを開きます。

    3. <DNT>**Metrics explorer**</DNT>をクリックします。 グラフで表現するメトリクスとディメンションを選択します。 ここでは、 `host.process.threadCount`選択し、 `apmApplicationNames`でグループ化しました。

    4. 省略記号をクリックして<DNT>**Add to dashboard**</DNT>を選択します。

       <img title="Filter by the failing apps" alt="A screenshot displaying the app tile and filter bar." src="/images/infrastructure_screenshot-full_metrics-explorer.webp" />

    これは、事前に構築されたダッシュボードをテンプレートとして使用していて、それに追加のグラフを追加したい場合に推奨されます。
  </Step>

  <Step>
    ## ワークフローの一部としてダッシュボードを確認します

    ダッシュボードを設計して共有したら、データを観察します。ダッシュボードには、伝えたいストーリーと同じくらい多くのユースケースがあります。次のユースケースに使用することをお勧めします。

    * データソース間のパターンを確立して根本原因を相関付ける
    * 別々のチーム間でデータを共有する
    * 特定のタスクを割り当てられた分隊にデータをスコープする

    既存の構築済みダッシュボードを調べるには、[インスタント オブザーバビリティ ページ](https://newrelic.com/instant-observability)から始めることをお勧めします。
  </Step>
</Steps>

## 次は何ですか？ [#next]

このチュートリアル シリーズでは、次のことについて学びました。

* インフラストラクチャ エージェントのガイド付きインストール プロセスと、New Relic がシステムに関するデータを取得する方法
* インフラストラクチャメトリクスのみを使用して、障害が発生しているホストとアプリを特定する
* データをさらに詳しく調べてインフラストラクチャの動作を解釈し、停止を解決する
* データに関するさまざまなストーリーを伝えるダッシュボード

これらのスキルを身につけて、データをさらに深く調べることをお勧めします。

* Kubernetes を監視する方法を学びたいですか?[Kubernetes チュートリアルを](/docs/tutorial-create-alerts/create-new-relic-alerts)ご覧ください。
* アラートの品質を向上させたいですか?[アラート チュートリアルでは、](/docs/tutorial-create-alerts/create-new-relic-alerts)より良いアラート戦略を構築できるように、アラートの構造を学習します。

<UserJourneyControls previousStep={{"path":"/docs/tutorial-troubleshoot-infra-hosts/investigate-your-resources","title":"一つ前の手順","body":"データを使用してリソースを決定する"}} />