---
title: トレースデータがありません
type: troubleshooting
tags:
  - Understand dependencies
  - Distributed tracing
  - Troubleshooting
metaDescription: 'New Relic distributed tracing: Troubleshoot missing spans or other missing data in your distributed traces.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

[分散トレース](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing)を有効にしましたが、期待したデータがNewRelicの分散トレースUIに表示されません。

## 始める前に [#before]

トラブルシューティングを実行する前に、次のことが役立つ場合があります。

* [分散トレーシングがどのように機能するか](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works)に関する技術的な詳細を確認してください。

* [インストゥルメンテーション ステータス アプリを](https://one.newrelic.com/dt-setup-assistant)使用して、サンプリング レートを含むトレース インストゥルメンテーションの概要を確認します。 これは、欠落したスパンと断片化されたトレースを理解するのに役立ちます。 これを見つけるには、

  <DNT>
    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Apps > Distributed tracing instrumentation status**
  </DNT>

  にアクセスしてください。

## ソリューション

トレース データが欠落する原因と解決策をいくつか示します。

### 有効化またはインスツルメンテーションに関する問題 [#enable]

<CollapserGroup>
  <Collapser
    id="not-enabled"
    title="分散トレースが有効になっていないサービスが原因でスパンが欠落している"
  >
    分散トレースでトレース内のすべてのノードの詳細をレポートするには、[分散トレースを有効](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing)にしたNewRelicエージェントで各アプリケーションを監視する必要があります。

    アプリケーションのNewRelicアカウントで分散トレースが有効になっていない場合、次の問題が発生します。

    * その分散トレースUIページにはデータがありません。
    * 他のアカウントの分散トレースにデータを報告することはありません。
  </Collapser>

  <Collapser
    id="manual-instrumentation"
    title="不足しているアプリ/サービスには手動のインストルメンテーションが必要な場合があります"
  >
    New Relicが自動的に計測するアプリケーションとサービスの分散トレースを有効にすると、通常、分散トレースUIにそれらのノードの完全で詳細なデータが表示されます。

    ただし、一部のサービスまたはアプリケーションがトレースから欠落していること、または欠落していると予想される内部スパンがいくつかあることに気付く場合があります。その場合は、アプリケーションまたは特定のトランザクションの[カスタムインストルメンテーション](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis)を実装して、トレースで詳細を確認することをお勧めします。これを行う必要がある場合のいくつかの例：

    * <DNT>
        **Transactions not automatically instrumented**
      </DNT>

      。アプリケーションが自動的にインストゥルメントされていることを確認するには、使用している[ ](/docs/apm/new-relic-apm/getting-started/introduction-apm)New Relicエージェントの 互換性と要件に関するドキュメント をお読みください。アプリケーションが自動的にインストゥルメントされなかった場合、または特定のアクティビティのインストゥルメントを追加する場合は、 [「カスタムインストゥルメント」を](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/#implementing)参照してください。

    * <DNT>
        **All Go applications**
      </DNT>

      。 Go エージェントは、他のエージェントとは異なり、コードの手動インストゥルメンテーションを必要とします。 手順については、 [「Go アプリケーションを設計する」](/docs/agents/go-agent/instrumentation/instrument-go-transactions)を参照してください。

    * <DNT>
        **A service doesn't use HTTP**
      </DNT>

      。サービスが HTTP 経由で通信しない場合、 New Relicエージェントはディストリビューティッド（分散）トレーシング ヘッダーを送信しません。 これは、一部の非 Web アプリケーションまたはメッセージキューの場合に当てはまる可能性があります。 これを解決するには、[ディストリビューティッド（分散）トレーシングAPI](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis)を使用して、呼び出し側アプリケーションまたは呼び出し先アプリケーションのいずれかを計算します。
  </Collapser>
</CollapserGroup>

### スパンの問題 [#spans]

<CollapserGroup>
  <Collapser
    id="advanced-infinite"
    title="無限のトレース：スパンがありません"
  >
    <InlinePopover type="apm"/>エージェントがトレース オブザーバーに十分な速度でデータを書き込めない場合、`queue_size` はエージェントが保持するスパンの数を制限する追加のAPMエージェント設定です。 エージェントについては次の例を参照してください。

    <table>
      <thead>
        <tr>
          <th>
            .NET構成方法
          </th>

          <th>
            例
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            構成ファイル
          </td>

          <td>
            ```xml
            <configuration . . . >
               <infiniteTracing>
                  <trace_observer>
                     <span_events queue_size="100000" />
                  </trace_observer>
               </infiniteTracing>
            </configuration>
            ```
          </td>
        </tr>

        <tr>
          <td>
            環境変数
          </td>

          <td>
            ```ini
            NEW_RELIC_INFINITE_TRACING_SPAN_EVENTS_QUEUE_SIZE=100000
            ```
          </td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>
            Pythonの設定方法
          </th>

          <th>
            例
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            構成ファイル
          </td>

          <td>
            ```ini
            infinite_tracing.span_queue_size = 100000
            ```
          </td>
        </tr>

        <tr>
          <td>
            環境変数
          </td>

          <td>
            ```ini
            NEW_RELIC_INFINITE_TRACING_SPAN_QUEUE_SIZE = 100000
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="export"
    title="欠落しているスパンがエクスポートされない"
  >
    ヘッダーの伝播は成功することがありますが、スパン情報がNewRelicに送信されません。たとえば、OpenTelemetryにNew Relicエクスポーターが装備されていない場合、スパンの詳細がNewRelicに到達することはありません。

    この図では、ヘッダーの伝播は成功していますが、スパンをNewRelicに送信するためのエクスポーターがService2に設定されていないことに注意してください。

    <img
      title="missing-exporter.png"
      alt="Diagram showing missing exporter."
      src="/images/distributed-tracing_diagram_missing-exporter.webp"
    />

    次の図もヘッダーの伝播が成功したことを示していますが、スパンの詳細をNew Relicに送信するサービス2のエクスポーターが含まれています（ [Trace API](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api)を参照）。

    <img
      title="exporter-deployed.png"
      alt="Diagram showing a deployed exporter."
      src="/images/distributed-tracing_diagram_exporter-deployed.webp"
    />
  </Collapser>

  <Collapser
    id="sampling"
    title="サンプリングプロセスによるスパンの欠落"
  >
    <InlinePopover type="apm"/>の標準ディストリビューティッド（分散）トレーシングでは、 [適応サンプリング](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#sampling)を使用します。 これは、サービスへの呼び出しの一定の割合が、ディストリビューティッド（分散）トレーシングの一部として報告されることを意味します。 サービスへの特定の呼び出しがサンプリング対象として選択されていない可能性があります。
  </Collapser>

  <Collapser
    id="agent-limits"
    title="スパン制限が最大になっているためにスパンが欠落している"
  >
    [収集および表示できるスパンの数には制限があります](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#1k-limit)。アプリケーションが1回の呼び出しに対して非常に多くのスパンを生成する場合、そのハーベストサイクルでのAPMエージェントのスパン収集制限を超える可能性があります。これにより、スパンが失われ、エージェントが完全にサンプリングしてレポートできるトレースの数が大幅に制限される可能性があります。

    現在、一度に表示されるスパンは10,000のみです。
  </Collapser>

  <Collapser
    id="late-spans"
    title="スパンが遅れて送信されたためにスパンが欠落している"
  >
    トレース インデックスにキャプチャされるようにするには、過去 60 分以内にスパンを送信する必要があります。60 分より前で 1 日より新しいスパンを送信した場合でも、スパン データは書き込まれます。ただし、分散トレース UI のトレース リストを制御するトレース インデックスには含まれません。スパンのタイムスタンプが 1 日より古い場合、そのスパンは削除されます。これは、システム間または長時間実行されているバックグラウンド ジョブ間にクロック スキュー (タイミングの違い) がある場合によく発生します。

    <Callout variant="important">
      [OpenTelemetry Protocol](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md) (略して OTLP) 経由で送信された 60 分を超えるスパンは[NRDB](/docs/data-apis/get-started/nrdb-horsepower-under-hood/)に書き込まれず、次の NrIntegrationError が生成されます。

      ```
      The span timestamp cannot be older than 60 minutes.
      ```
    </Callout>
  </Collapser>
</CollapserGroup>

### トレースの詳細に関する問題

<CollapserGroup>
  <Collapser
    id="middleware-failure"
    title="ミドルウェアは独自のNewRelicヘッダーを認識しません"
  >
    トランザクションが独自のNewRelicヘッダーのみを送信している場合、一部のミドルウェアはフォーマットを認識せず、次の図に示すように情報をドロップする可能性があります。

    <img
      title="broken-trace.png"
      alt="Diagram showing dropped header information."
      src="/images/distributed-tracing_diagram_broken-trace.webp"
    />

    1つの解決策は、NewRelicエージェントをW3Cトレースコンテキストをサポートするバージョンにアップグレードすることです。次の図では、W3C準拠のNew Relicエージェントが、2つの標準化されたヘッダーとともに前のヘッダーを渡します。

    <img
      title="upgraded-agent.png"
      alt="Diagram showing a W3C compatible New Relic agent."
      src="/images/distributed-tracing_diagram_upgraded-agent.webp"
    />
  </Collapser>

  <Collapser
    id="proxy"
    title="仲介者が見つからないか、トレースコンテキストを渡していない"
  >
    プロキシおよびその他の仲介者に関するいくつかの潜在的な問題：

    * <DNT>**Incomplete trace.**</DNT> 一部の仲介者は[、ディストリビューティッド（分散）トレーシング ヘッダーを](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#headers)自動的に伝播しません。 その場合、ヘッダーがソースから宛先に渡されるようにそのコンポーネントを構成する必要があります。 手順については、その中間コンポーネントのドキュメントを参照してください。

    * <DNT>**Missing intermediary in trace.**</DNT> 仲介者がNew Relic - モニターである場合は、その仲介者上で実行されているNew Relicエージェントによって生成または更新された `newrelic` ヘッダーが伝播されることを確認します。 これは、中間者が以前はトレースに表示されていたが、アップストリームbrowser (ブラウザー モニター アプリケーションなど) に対してディストリビューティッド（分散）トレーシングが有効にされた後に表示されなくなった場合に発生する可能性があります。

      <Callout variant="tip">
        一部のエンティティがトレースデータを別のトレースシステムに報告する場合は、New Relic UIのトレースIDを使用して、他のトレースシステムで欠落しているスパンを検索できます。
      </Callout>
  </Collapser>

  <Collapser
    id="mixed-sourcees"
    title="混合ソースからのスパンをつなぎ合わせる"
  >
    チェーン内の各エージェントがW3Cトレースコンテキストをサポートしている場合は、スパンをつなぎ合わせて完全なトレースにすることができます。チェーンの一部が、W3CトレースコンテキストをサポートしていないZipkinなどのエージェントからのものである場合、そのエージェントからのスパンはトレースに含まれない可能性があります。
  </Collapser>

  <Collapser
    id="account-access"
    title="トレースの詳細は難読化されています"
  >
    トレースに複数のNewRelicアカウントによって監視されているアプリケーションからのデータが含まれていて、ユーザー権限でそれらのアカウントにアクセスできない場合、スパンとサービスの詳細の一部が[UIでわかりにくく](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#account-access)なります。

    たとえば、サービスにリンクされているアカウントにアクセスできない場合、分散トレースリストにサービス名の代わりに一連のアスタリスク（\*\*\*\*\*）が表示される場合があります。
  </Collapser>

  <Collapser
    id="mismatched-trace-details"
    title="トレースリスト情報とトレース詳細が一致しません"
  >
    トレースリストは、最初のスパンが受信されてから20分のウィンドウでキャプチャされるトレースインデックスによって生成されます。

    通常、これは[遅いスパン](#late-spans)が原因です。
  </Collapser>

  <Collapser
    id="long-traces-short-backend"
    title="バックエンド時間が短い長いトレース"
  >
    長いトレースでバックエンド時間が異常に短い場合は、送信されるタイムスタンプに問題がある可能性があります。

    たとえば、ルートスパンはマイクロ秒をミリ秒として再投稿する場合があります。これは、ルートスパンがブラウザアプリケーションの場合にも発生する可能性があります。Webブラウザなどの外部クライアントを使用すると、クロックスキュー（タイミングの違い）が頻繁に発生する場合があります。
  </Collapser>
</CollapserGroup>

### ブラウザアプリケーションの問題 [#browser]

<CollapserGroup>
  <Collapser
    id="spans-browser"
    title="ブラウザアプリケーションを有効にした後、スパンとトランザクションが欠落しています"
  >
    一部の <InlinePopover type="apm"/>エージェントの古いバージョンは、 browserのディストリビューティッド（分散）トレーシングと互換性がありません。 browser 、互換性のないエージェントを実行しているAPMアプリケーションに AJAX 要求を送信した場合、 APMエージェントはその要求のトランザクションおよびスパン データを記録できない可能性があります。

    ブラウザアプリケーションで分散トレースが有効になっていて、ダウンストリームAPM要求のトランザクションまたはスパンデータが表示されない場合は[、分散トレース要件のブラウザデータ](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements)を確認し、すべてのアプリケーションがサポートされているバージョンのAPMエージェントを実行していることを確認します。
  </Collapser>

  <Collapser
    id="browser-spans-missing"
    title="ブラウザアプリのエンドユーザースパンが表示されない"
  >
    トレースにエンドユーザースパンが欠落していると思われる場合は、ブラウザの分散トレース[要件](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements)を読んで理解し、 [手順を有効に](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#enable)してください。

    [<DNT>**AJAX**</DNT> UIページ](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls)には、そのトレースにエンドユーザー スパンが存在するかどうかに関係なく、ディストリビューティッド（分散）トレーシングUIへのリンクがあります。 スパンはどのようなデータによって生成されるかの詳細については、 [「要件」](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements)を参照してください。
  </Collapser>

  <Collapser
    id="orphan-browser-spans"
    title="ブラウザスパンは他のスパンに接続されていません"
  >
    一部の <InlinePopover type="apm"/>エージェントの古いバージョンは、 browserのディストリビューティッド（分散）トレーシングと互換性がありません。 APMを含むトレースからbrowser [](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing#requirements)APMスパンは一貫して欠落している場合は 、ブラウザ データのディストリビューティッド（分散）トレーシング要件 を参照し、すべてのアプリケーションが エージェントのサポートされているバージョンを実行していることを確認してください。

    孤立したブラウザスパンの他の原因については、 [ブラウザスパンレポート](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#browser-spans)を参照してください。
  </Collapser>
</CollapserGroup>

### その他の問題 [#other]

<CollapserGroup>
  <Collapser
    id="multiple-app-names"
    title="entity.nameで検索しても、関連するアプリ名が見つかりません"
  >
    考えられる原因：[複数のアプリ名](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app)を持つアプリケーションの場合、 `entity.name`属性はプライマリアプリ名にのみ関連付けられます。他のアプリ名で検索するには、 `appName`属性を使用して検索します。
  </Collapser>

  <Collapser
    id="supporting-open-telemetry"
    title="OpenTelemetryのサポート"
  >
    OpenTelemetry との統合に関する質問は、[サポート フォーラム](https://discuss.newrelic.com)に寄せてください。
  </Collapser>
</CollapserGroup>

## アクセスに影響を与えるその他の要因 [#more-info]

New Relic機能にアクセスする能力に影響を与える可能性のある要因の詳細については、アクセス[に影響を与える要因を](/docs/accounts/accounts-billing/general-account-settings/factors-affecting-access-features-data)参照してください。
