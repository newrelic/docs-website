---
title: Rubyエージェントの属性
tags:
  - Agents
  - Ruby agent
  - Attributes
metaDescription: A summary of attributes captured by New Relic's Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

[アトリビュート](/docs/features/agent-attributes) は、イベントやトランザクションのプロパティを決定する情報を含むキーとバリューのペアです。これらのキー・バリュー・ペアは、APMのトランザクション・トレース、APMのトレースされたエラー、ダッシュボードのトランザクション・イベント、ダッシュボードのページ・ビューで見ることができます。どの属性がこれらの各送信先に送信されるかを正確にカスタマイズすることができます。

これらの属性設定は、Rubyエージェントのバージョン3.12.0以降に適用されます。

## Rubyエージェントの属性 [#attributes]

次の表は、Rubyエージェントが自動的に取り込むことができる属性の一覧です。

<CollapserGroup>
  <Collapser
    id="httpResponseCode"
    title="httpResponseCode"
  >
    Webリクエストの応答ステータスコードです。デフォルトでは

    * トランザクションのトレースEnabled

    * エラーコレクター（トレースされたエラー）。有効

    * トランザクションイベント。有効

    * ページビュー ( <InlinePopover type="browser"/>): 利用不可

      <DNT>**Note:**</DNT> `httpResponseCode`属性 (文字列値) は、エージェント バージョン 6.12.0 以降では非推奨です。 代わりに`http.statusCode` (整数値) を使用する必要があります。
  </Collapser>

  <Collapser
    id="requestHeadersReferer"
    title="request.headers.referer"
  >
    HTTPリファラーヘッダーが存在する場合は、クエリー文字列を除いたもの。デフォルトでは

    * トランザクションのトレース。無効です。
    * エラーコレクター（トレースされたエラー）。有効
    * トランザクションイベント。使用不可
    * ページビュー（ブラウザモニタリング）。利用不可
  </Collapser>

  <Collapser
    id="requestParameters"
    title="request.parameters.org"
  >
    HTTP リクエスト パラメータはトランザクションに関連付けられます。Rails、Sinatra、Roda、および Grape アプリケーションでのみ利用可能です。デフォルト:

    * トランザクションのトレース。無効です。
    * エラーコレクター（トレースされたエラー）。無効です。
    * トランザクションイベント。使用不可
    * ページビュー（ブラウザ監視）。使用不可
  </Collapser>

  <Collapser
    id="jobResqueArguments"
    title="job.resque.args.*"
  >
    Resque ワーカーに渡されるジョブの引数。Resque ワーカーに渡される引数は位置に応じたものです。これらの引数は、 `job.resque.args.<position>`形式のキーとして保存されます。ここで、position は、 `perform`メソッドへの引数のインデックスです。たとえば、2 つの引数を取る Resque ジョブにはキー`job.resque.args.0`と`job.resque.args.1`があります。デフォルト:

    * トランザクションのトレース。無効です。

    * エラーコレクター（トレースされたエラー）。無効です。

    * トランザクションイベント。使用不可

    * ページビュー（ブラウザモニタリング）。利用不可

      <DNT>**Note:**</DNT> `resque.capture_params`プロパティは非推奨です。 ただし、 `true`に設定すると、トレースエラーの Resque 引数のキャプチャが有効になります。
  </Collapser>

  <Collapser
    id="jobSidekiqArguments"
    title="job.sidekiq.args.jar"
  >
    Sidekiq ワーカーに渡されるジョブの引数。Sidekiq ワーカーに渡される引数は位置に応じたものです。これらの引数は、 `job.sidekiq.args.<position>`形式のキーとして保存されます。ここで、position は、 `perform`メソッドへの引数のインデックスです。たとえば、2 つの引数を取る Sidekiq ジョブにはキー`job.sidekiq.args.0`と`job.sidekiq.args.1`があります。デフォルト:

    * トランザクションのトレース。無効です。

    * エラーコレクター（トレースされたエラー）。無効です。

    * トランザクションイベント。使用不可

    * ページビュー（ブラウザモニタリング）。利用不可

      <DNT>**Note:**</DNT> `sidekiq.capture_params`プロパティは非推奨です。 ただし、 `true`に設定すると、トレースおよびトレース エラーの Sidekiq 引数のキャプチャが有効になります。
  </Collapser>
</CollapserGroup>

## カスタム属性の追加 [#add-custom-attributes]

アプリケーションから追加のカスタム属性を取得するには、 `NewRelic::Agent.add_custom_attributes`を使用します。詳細については、 [「カスタム属性の収集」](/docs/apm/other-features/attributes/collecting-custom-attributes#ruby-att)を参照してください。デフォルト:

* トランザクションのトレースEnabled
* エラーコレクター（トレースされたエラー）。有効
* トランザクションイベント。有効
* ページビュー（ブラウザ監視）。使用不可

<Callout variant="caution">
  カスタムパラメータや属性を照会したい場合は、その命名に [予約語](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) を使わないようにしましょう。
</Callout>

## Rubyエージェントのアップグレード [#upgrading]

Rubyエージェント <DNT>**3.12.0**</DNT> 以上にアップグレードする場合は、<DNT>**newrelic.yml**</DNT> 設定をアップグレードしてください。
