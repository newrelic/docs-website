---
title: ガーベッジコレクション
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'To track garbage collection time with New Relic''s Ruby agent, use GC::Profiler.enable (CRuby 1.9.2 or higher) or GC.enable_stats (REE).'
freshnessValidatedDate: never
translationType: machine
---

ガベージ コレクション (GC) は、未使用のデータ オブジェクトを検出し、そのメモリ領域を別のプロセスで使用できるように再利用します。New Relic Ruby エージェントは、CRuby 1.9.2 以降または Ruby Enterprise Edition で実行されているアプリケーションのガベージ コレクションに費やされた時間に関する情報を収集できますが、アプリケーションでこの機能を明示的に有効にする必要があります。

<Callout variant="important">
  ガベージコレクションはオーバーヘッドを増加させるため、プロダクションで長時間使用することは避けてください。
</Callout>

## ガベージコレクション・インストゥルメンテーションの有効化 [#gc_setup]

この機能を有効にするには、アプリケーションの初期化で適切なコールを追加します。

* CRuby 1.9.2 以降: `GC::Profiler.enable`
* Ruby エンタープライズ版: `GC.enable_stats`

Rails アプリケーションの場合、この呼び出しを`config/initializers`の初期化子に追加するか、 `config/application.rb`ファイルに直接追加することができます。

## アプリ全体のGC統計情報を表示 [#gc_view]

ガベージコレクション全体の統計を見るには

1. [New Relic にログインし](https://one.newrelic.com)、Ruby アプリを選択して、

   <DNT>
     **Summary**
   </DNT>

   に移動します。

2. APM

   <DNT>
     **Summary**
   </DNT>

   ページで、

   <DNT>
     **Web transactions time**
   </DNT>

   チャートの

   <DNT>
     **GC Execution**
   </DNT>

   統計を探します。

<img
  title="garbage_collection_overview"
  alt="garbage_collection_overview"
  src="/images/apm_screenshot-full_garbage-collection-transaction.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Summary**</DNT>: Web コレクションタイム チャートでは、ガベージ コレクション統計に<DNT>**GC Execution**</DNT>ラベルが付けられています。
</figcaption>

## 詳細なGCメトリクスの表示 [#detailed]

ガベージ コレクション メトリックをトランザクションごとに表示するには、 <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Transactions > (select a transaction)**</DNT>に移動します。 その後、GC に費やされた時間と、各トランザクションで GC が呼び出される平均回数を表示できます。 ガベージ コレクションの詳細を表示するには、他のラベルを非表示にします。

詳細情報は以下の通りです。

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Garbage collection details**
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
        ガベージコレクション時間の推移
      </td>

      <td>
        通常、ガベージ コレクションには少し時間がかかるため、トレンド ラインがグラフに表示されない場合があります。 ガベージ コレクション時間の傾向を表示するには、[概要グラフ](#gc_view)または[詳細なトランザクション メトリック](#detailed)に移動します。 次に、各ラベルを選択して、 <DNT>**GC Execution**</DNT>以外のすべてのグラフ ラベルを非表示にします。
      </td>
    </tr>

    <tr>
      <td>
        平均コール数
      </td>

      <td>
        各コントローラー アクションのガベージ コレクション呼び出しの平均数を表示するには、 [APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/applications-overview-dashboard)[ページ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard)から<DNT>**Transaction**</DNT>を選択します。 次に、コントローラーアクションを選択し、 <DNT>**App Server Breakdown**</DNT>を表示します。
      </td>
    </tr>
  </tbody>
</table>
