---
title: Ruby VMの計測
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: What Ruby VM statistics can be tracked by the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

Ruby 仮想マシンの動作を把握することで、アプリケーション全体のパフォーマンスを理解し、改善することができます。New Relic は、Ruby 仮想マシンの動作を把握するのに役立ついくつかの主要なメトリクスを収集します。また、パフォーマンスを向上させるためにVMの構成を調整する際の影響を評価するのにも役立ちます。

## 最低限の条件 [#minimum_requirements]

Ruby VMの測定値収集は、Rubyエージェントのバージョン3.8.0以降で利用可能です（ただし、それ以前のバージョンでは、いくつかの基本的なガベージコレクション測定値の収集をサポートしていました）。

さらに、この機能を使用するには、CRuby <DNT>**1.9.2 or higher**</DNT>と互換性のある Ruby バージョンを使用する必要があります。 以下の各測定に関するセクションでは、各測定の収集をサポートする Ruby バージョンについて説明します。

最後に、GC のタイミングをキャプチャするために、アプリケーションで [GC::Profiler](/docs/ruby/garbage-collection) を有効にする必要があります。

## Ruby VMデータの閲覧 [#viewing_data]

Ruby VM のパフォーマンスに関するデータを表示します。 <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM> (select an app) > Monitoring > Ruby VMs**</DNT>に移動します。

## 測定内容 [#measurement_details]

これらのメトリクスのほとんどは、Rubyのガベージコレクタの動作を理解するのに役立ちます。

すべてのメトリクスをすべての Ruby バージョンで収集できるわけではありません。一般に、CRuby の最新バージョンを使用している場合、最も完全なデータを取得できます。以下のリストは、どこで何が利用できるかを正確に説明しています。

<CollapserGroup>
  <Collapser
    id="object-allocations"
    title="オブジェクトの割り当て"
  >
    <DNT>**Available on**</DNT>: CRuby 2.0以上

    プロセスで割り当てられたRubyオブジェクトの数。UIでは、この測定値はリクエスト数で正規化されており、リクエストごとにいくつのオブジェクトが割り当てられているかを把握することができます。

    オブジェクトの割り当て頻度は、Ruby のガベージコレクタの実行頻度を決定する最大の要因の 1 つであるため、これは重要な数値となります。

    CRuby では、この値は`GC.stat[:total_allocated_object]`から派生します。
  </Collapser>

  <Collapser
    id="time-in-garbage-collection"
    title="ガベージコレクションの時間"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2以上、 Rubinius 2.x (JRuby サポートについては下記の注記を参照)

    あなたのRubyプロセスでガベージコレクション（マークフェーズとスイープフェーズの両方）に費やされた時間です。

    Rubyエージェントでは、この値を実際には2つの異なる方法で測定します。リクエスト処理の途中で発生したガベージコレクション時間と、ガベージコレクション時間の合計です。リクエスト処理の途中で発生したガベージ・コレクション・タイムは、メインの概要グラフ上に帯状に表示され、個々のトランザクションの内訳グラフにも表示されます。総ガベージコレクション時間のウォールクロック時間に対する割合は、「Ruby VMs」タブに表示されます。

    この測定値は`GC::Profiler.total_time`から導出されます。

    <DNT>**Note**</DNT>: この測定値を取得するには、 `GC::Profiler`を有効にする必要があります。 詳細については、 [「GC インストゥルメンテーション」](/docs/ruby/garbage-collection)を参照してください。

    <DNT>**JRuby note**</DNT>: JRuby または特定のバージョンの JVM の[バグ](https://github.com/jruby/jruby/issues/1620 "リンクが新しいウィンドウで開きます")と思われるものが原因で、JRuby では GC タイミングが 1000 倍ずれる可能性があります。 このため、現在 JRuby で`GC::Profiler`を有効にすることはお勧めしません。
  </Collapser>

  <Collapser
    id="frequency-of-garbage-collector-runs"
    title="ガベージコレクタの実行頻度"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2以上、 JRuby 1.7+、Rubinius 2.x

    Ruby プロセスを実行するためにガベージ コレクターが停止する必要がある頻度はどれくらいですか?CRuby 2.1+ では、これはメジャー GC 実行とマイナー GC 実行に分割されます。この数は、GC 実行ごとに処理されるリクエストの数として UI に表示されます。

    使用中の Ruby のバージョンに応じて、この値は`GC.count`または`GC.stat[:minor_gc_count]`と`GC.stat[:major_gc_count]`から導出されます。
  </Collapser>

  <Collapser
    id="size-of-the-ruby-heap"
    title="Rubyのヒープの大きさ"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2 以上

    Ruby インタープリタはオブジェクトを _ヒープ_ に格納し、各オブジェクトは _ヒープスロット_ を 1 つ占有します。ヒープ内のスロットがオブジェクトでいっぱいになると、必要に応じてRuby VMによってヒープが拡張されます。

    Rubyエージェントは、ヒープ内のライブオブジェクトの数と、ヒープの未使用スロットの数を定期的に測定します。

    一般的に、ヒープ上のオブジェクトが多ければ多いほど、各GCの実行に時間がかかります（ヒープ上のすべてのオブジェクトを調べる必要があるため）。また、ヒープ上のオブジェクトが多いと、アプリケーションのメモリ使用量が多くなります。

    この値は、 `GC.stat[:heap_live_slot]`または`GC.stat[:heap_live_num]` 、および`GC.stat[:heap_free_slot]`または`GC.stat[:heap_free_num]`から導出されます。
  </Collapser>

  <Collapser
    id="memory-usage"
    title="メモリ使用量"
  >
    <DNT>**Available on**</DNT>: 任意のRubyバージョン

    この測定値は、Rubyプロセスのメモリ使用量（レジデント・セット・サイズ）を、インスタンス（プロセス）ごとの平均サイズで表示します。メモリ使用量をチェックすることは、Ruby VMの設定を調整する際の重要な考慮事項です。メモリ使用量が大きくなりすぎると、ホストマシンがディスクへのページングを開始したり、ソフトウェアによるメモリ制限に抵触したりする可能性があります。

    Linux ホストでは、これは`/proc/PID/status`の`VmRSS`フィールドから導出されます。
  </Collapser>

  <Collapser
    id="method-cache-invalidation-rate"
    title="メソッドキャッシュ無効化率"
  >
    <DNT>**Available on**</DNT>: CRuby 2.1以上

    オブジェクト上でメソッドが呼び出されるたびに、Ruby はそのオブジェクトの祖先の連鎖を検索してメソッドの実装を見つけなければなりません。これらの検索にはコストがかかるため、Ruby VM は検索結果をキャッシュします。

    CRuby の古いバージョン (2.0 より前) では、単一のグローバル メソッド キャッシュがあり、キャッシュ全体を無効にするさまざまな[操作](https://github.com/charliesome/charlie.bz/blob/master/posts/things-that-clear-rubys-method-cache.md)がありました。

    CRuby 2.1 以降では、グローバル キャッシュがクラスごとの小さなキャッシュ セットに分割されているため、1 つのクラスに対するキャッシュ無効化の変更によって、関連のない他のクラスのキャッシュ エントリが破棄されることはありません。

    しかし、すべてのメソッド・キャッシュを無効にしてしまう操作もあります。Rubyエージェントはこれらの無効化の頻度を測定し、リクエスト数で正規化して報告します。これにより、リクエストごとに何回メソッド・キャッシュが無効化されるかを知ることができます。

    詳細については、Aman Gupta による [ブログ投稿を](http://tmm1.net/ruby21-method-cache/ "リンクが新しいウィンドウで開きます") 参照してください。

    この値は`RubyVM.stat[:global_method_state]`から導出されます。
  </Collapser>

  <Collapser
    id="constant-cache-invalidation-rate"
    title="一定のキャッシュ無効化率"
  >
    <DNT>**Available on**</DNT>: CRuby 2.1以上

    Ruby では、上述のメソッドキャッシュの動作と同様の方法で定数の位置をキャッシュします。Ruby エージェントは、グローバル定数キャッシュが無効化された回数を測定し、リクエストごとの平均無効化回数として報告することもできます。

    この値は`RubyVM.stat[:global_constant_state]`から導出されます。
  </Collapser>

  <Collapser
    id="thread-count"
    title="糸数"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2以上、 JRuby 1.7+、Rubinius 2.x

    Ruby エージェントは、Ruby プロセスのスレッド数を把握することができます。マルチスレッドの Web サーバを使用している場合、この機能を使って、スレッドプールが実際に設定したサイズになっているかどうかを確認できます。また、スレッドリーク（削除されないスレッドを生成すること）が発生しているかどうかを確認することもできます。
  </Collapser>
</CollapserGroup>

## バックグラウンド・プロセス [#background_processes]

デフォルトでは、 New Relicの特定のアプリケーション名にレポートするすべてのプロセスからのデータは、ユーザー インターフェースの <DNT>**Ruby VM**</DNT> ページで結合されます。 つまり、Web プロセスとバックグラウンド プロセス (Resque、Sidekiq、DelayedJob など) の両方が同じ New Relic アプリケーションにレポートする場合、データが混乱する可能性があります。

この問題を回避するには2つの方法があります。

1. `app_name`構成設定または`NEW_RELIC_APP_NAME`環境変数を設定して、Web プロセスとバックグラウンド プロセスを New Relic の個別のアプリケーションにプルします。
2. 構成ファイルで`disable_vm_sampler: true`を設定するか、アプリケーションの環境で`NEW_RELIC_DISABLE_VM_SAMPLER=1`を設定して、バックグラウンド プロセスでの Ruby VM メトリックの収集を無効にします。

## その他のドキュメントリソース

その他のドキュメンテーションリソースには、以下が含まれます。

* [APM Summaryページ](/docs/applications-menu/applications-overview) では、UI上での機能やドリルダウンの詳細について説明しています。
* [トランザクションのページ](/docs/apm/applications-menu/monitoring/transactions-page) には、アプリのパフォーマンスの概要が表示されます。
* [Rubyエージェントの設定](/docs/ruby/ruby-agent-configuration) リソースには、更新手順や設定ファイルの値（general、proxy、transaction traces、error collectorなど）が含まれています。
