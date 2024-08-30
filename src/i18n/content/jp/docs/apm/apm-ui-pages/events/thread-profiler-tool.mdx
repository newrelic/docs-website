---
title: スレッドプロファイラツール
tags:
  - APM
  - APM UI pages
  - Events
metaDescription: 'New Relic Java, .NET, Python, Ruby agents: You can use the thread profiler in production to identify bottlenecks in an application.'
freshnessValidatedDate: never
translationType: machine
---

スレッドプロファイラは、アプリケーションのボトルネックを特定するために実運用環境で使用できる、影響の少ないプロファイリングツールです。スレッドプロファイラは、各スレッドのスタックトレースを定期的（100ms）にキャプチャし、指定された期間で動作します。指定された期間が終了すると、スタックトレースが集約され、ツリーが構築されます。ツリー内のコールカウントは、同じコンテキストでスタックトレース内にその関数が存在した回数に対応します。

コールツリーは実行全体を捉えることはできませんが、十分に大きなサンプルはアプリケーションの動作をよく表しています。これにより、ほとんどの時間が費やされているアプリの"ホット" の機能についての洞察が得られます。この範囲では、0.05%未満しかサンプリングされていないエントリは省略されます。

## 対応エージェント [#agents]

この機能は、特定のエージェントやバージョンでのみ利用可能です。

* Javaです。Agentバージョン1.2.004.6以上

* .NETに対応しています。

  * フレームワーク。Agentバージョン2.12.146.0以上
  * .NET Core 2.0を使用しています。Agentバージョン8.3.360.0以降（Windowsのみ）
  * Linux: .NET Core 3.0以上、エージェントバージョン8.23以上

* Pythonです。Agentバージョン1.7.0以上

* Rubyを使用しています。Agentバージョン3.5.5以上

## プロファイラーの起動 [#starting]

スレッドプロファイラ機能は、デフォルトで有効になっています。また、エージェントの設定ファイルでオン/オフを切り替えることができる場合もあります。

* Javaです。 `thread_profiler.enabled`

* NET: .NET アプリでスレッド プロファイラーを無効にします

  <DNT>
    **cannot**
  </DNT>

  。

* パイソン: `thread_profiler.enabled`

* ルビー: `thread_profiler.enabled`

この機能を有効にすると、ユーザーインターフェースからスレッドプロファイラを表示することができます。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**
   </DNT>

   に移動します。

2. プロファイラーを実行するホストを選択します。

3. プロファイリングセッションの継続時間を設定します。

4. <DNT>
     **Start profiler**
   </DNT>

   を選択します。

これにより、エージェントは次のハーベストサイクル（1分ごと）にスレッドプロファイラを起動し、指定された期間のデータを取得するようになります。サンプル取得時に実行可能な状態であるかどうかに関わらず、スレッドのバックトレースを記録します。スリープしているスレッドやIOでブロックされているスレッドがコールツリーに表示されることがあります。

<img
  title="Thread profiler overview"
  alt="This is an image of the thread profiler."
  src="/images/apm_screenshot-full_thread-profiler-view.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**</DNT>: このページを使用して、スレッド プロファイラーの期間の設定を定義し、結果を表示します。
</figcaption>

## プロフィールデータを見る [#viewing]

プロファイラーの実行が終了すると、エージェントはプロファイル データを報告します。 コールツリーは<DNT>**Thread profiler**</DNT>ページに自動的に表示されます。 呼び出しツリーのパーセンテージは、プロファイリング セッション中に各呼び出しパスが出現したスレッド バックトレース サンプルのパーセンテージを表します。 データ収集は、PROFILE COLLECTED 時刻に開始されました。

このページでは、ツリーの結果を色分けしています。

* 赤。30％以上の割合
* 黄色。割合が10％を超えるもの
* ブラック割合が10％未満

<table>
  <thead>
    <tr>
      <th width={200}>
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
        スレッドのプロフィール情報の表示方法の変更
      </td>

      <td>
        <DNT>**Tree settings**</DNT>で利用可能なオプションを選択し、 <DNT>**Refresh tree**</DNT>を選択します。
      </td>
    </tr>

    <tr>
      <td>
        情報表示量の変更
      </td>

      <td>
        呼び出しツリーの上にある<DNT>**Expand**</DNT>または<DNT>**Collapse**</DNT>オプションを選択するか、呼び出しツリー内の任意の行にある名前または矢印を選択します。
      </td>
    </tr>

    <tr>
      <td>
        コールツリー内の任意の行のサマリー情報を表示する
      </td>

      <td>
        ラインにマウスオーバーします。
      </td>
    </tr>

    <tr>
      <td>
        スレッドプロファイルの結果を他の人にメールで送信
      </td>

      <td>
        <DNT>**Share this profile**</DNT>を選択します。
      </td>
    </tr>

    <tr>
      <td>
        別のセッションを開始したり、別のスレッドプロファイルを表示する
      </td>

      <td>
        <DNT>**Back to all profiles**</DNT>を選択します。
      </td>
    </tr>
  </tbody>
</table>

## エージェントの考慮事項 [#agent-requirements]

どのエージェントを使用するかによって、スレッドプロファイリング機能には追加の考慮事項があります。

<CollapserGroup>
  <Collapser
    id="java"
    title="Java 固有の注意事項"
  >
    Java エージェントでスレッド プロファイリングを使用する場合は、次の点に注意してください。

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Java agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            ツリー設定には<DNT>**Other**</DNT>カテゴリのみが表示されます
          </td>

          <td>
            すべてのスレッドは<DNT>**Other**</DNT>カテゴリに分類されます。 <DNT>**Web Request**</DNT>および<DNT>**Background**</DNT>カテゴリはサポートされていません。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="net"
    title=".NET特有の注意点"
  >
    .NET Frameworkのエージェントでスレッドプロファイリングを使用する場合、以下の点に注意してください。

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **.NET agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            サポート対象 <DNT>**Linux**</DNT>
          </td>

          <td>
            .NET エージェント バージョン 8.23 以降を実行している場合、 <DNT>**Linux**</DNT>のスレッド プロファイリングは .NET Core 3.0 以降のアプリケーションでサポートされます。
          </td>
        </tr>

        <tr>
          <td>
            管理されたスレッドのみ
          </td>

          <td>
            .NET エージェントの場合、スレッド プロファイラーはマネージド スレッドのスタック トレースのみをキャプチャします。アンマネージ スレッドのスタック トレースはキャプチャされません。マネージ スレッドでアンマネージ関数の呼び出しが発生した場合、スレッド プロファイラーは呼び出しツリーに`Native:Function Call`を表示します。
          </td>
        </tr>

        <tr>
          <td>
            ラインナンバーなし
          </td>

          <td>
            .NET スレッド プロファイルには、呼び出しツリーの行番号が含まれません。 ツリー設定の<DNT>**Show line numbers**</DNT>チェックボックスは効果がありません。
          </td>
        </tr>

        <tr>
          <td>
            64bit v4.0 .NET CLRの不具合について
          </td>

          <td>
            64ビット版の4.0 .NET共通言語ランタイム（CLR）には、エージェントが管理されたスタックトレースを取得する機能を妨害するバグがあります。アプリケーションにこのバグがある場合、APMは空のスレッドプロファイルを表示します。このバグは、32ビットアプリケーションには影響しません。

            このバグは、.NET 4.5 の CLR リリースで修正されています。 64 ビット アプリケーションに修正バージョンがあるかどうかを確認するには、 <DNT>**C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319**</DNT>ディレクトリにある`mscorlib.dll`の完全バージョンを確認します。 修正はバージョン 4.0.30319.17379 以降で適用されます。
          </td>
        </tr>

        <tr>
          <td>
            <DNT>**Other**</DNT> カテゴリのみ
          </td>

          <td>
            すべてのスレッドは<DNT>**Other**</DNT>カテゴリに分類されます。 <DNT>**Web Request**</DNT>および<DNT>**Background**</DNT>カテゴリはサポートされていません。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-thread-profiling"
    title="Python特有の注意点"
  >
    Pythonエージェントでスレッドプロファイリングを使用する場合、以下の点に注意してください。

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Python agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            コルーティンベースのシステム
          </td>

          <td>
            gunicorn の gevent や eventlet モードのようなコルーチンベースのシステムを使用している場合、詳細をキャプチャするには限界があります。新しいスレッドを作成する場合、Pythonエージェントはスレッドプロファイラのバックグラウンドスレッドではなく、実際にグリーンレットを作成します。そのため、スレッドプロファイラは、スレッドプロファイラページ上のWebリクエストとバックグラウンドトランザクションをキャプチャしません。
          </td>
        </tr>

        <tr>
          <td>
            グリーンレット
          </td>

          <td>
            グリーンレットは，他のグリーンレットがブロックしたときなど，明示的に制御を放棄したときにのみ実行できます。例えば、スレッドサンプラが実行された場合、他のグリーンレットがブロックされた時点でのみスタックをサンプリングします。他のグリーンレットが任意のコードを実行しているときにはサンプリングしません。グリーンレットがブロックされたり、他のグリーンレットに譲ったりしていなければ、グリーンレット内の実行を完全に見逃すことができます。
          </td>
        </tr>

        <tr>
          <td>
            Pythonコードの時間
          </td>

          <td>
            リクエストをブロックしていない純粋なPythonコードに費やされた時間はピックアップされず、情報は記録されず、報告もされません。これは、コルーチンが使用されている場合、結果が誤解を招くためです。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby特有の注意点"
  >
    Rubyエージェントでスレッドプロファイリングを使用する場合、以下の点に注意してください。

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Ruby agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            バックトレース
          </td>

          <td>
            スレッド プロファイラーは、Ruby アプリケーション内からスレッド バックトレースをキャプチャする機能に依存します。 このため、 <DNT>**CRuby 1.9.2 or higher**</DNT> ( `Thread#backtrace`メソッド用) が必要になります。
          </td>
        </tr>

        <tr>
          <td>
            Resque
          </td>

          <td>
            Rubyエージェントは現在、Resqueのバックグラウンド・ジョブでのスレッド・プロファイルをサポートしていません。Resqueに対して開始されたスレッド・プロファイリング・セッションは、ジョブ・プロセスではなく、親プロセスからのトレースのみをキャプチャします。
          </td>
        </tr>

        <tr>
          <td>
            JRuby
          </td>

          <td>
            JRuby のサポートは、現時点では実験的なものと見なされています。JRuby の`Thread#backtrace`実装には、JRuby で収集されるバックトレースの精度と信頼性に影響を与える既知の問題があります。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
