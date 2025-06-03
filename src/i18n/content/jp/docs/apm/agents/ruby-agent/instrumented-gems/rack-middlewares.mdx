---
title: ラックミドルウェア
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: New Relic's Ruby agent instruments Rack middlewares and uses middlewares for functions like cross application tracing and browser auto-instrumentation.
freshnessValidatedDate: never
translationType: machine
---

Rubyエージェントは、 [Rack](http://rack.github.io/) ミドルウェアを自動的に計測します。Rackミドルウェアの基本に慣れていない場合は、Rails on Rackガイド からリンクされている [のリソースを参照してください。また、RubyエージェントはRackミドルウェアを介していくつかの機能を提供します。](http://guides.rubyonrails.org/rails_on_rack.html#resources)

[](http://guides.rubyonrails.org/rails_on_rack.html#resources)

* [](http://guides.rubyonrails.org/rails_on_rack.html#resources)

* [](http://guides.rubyonrails.org/rails_on_rack.html#resources)[分散型トレース](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/)

* <InlinePopover type="browser">
    [](/docs/agents/ruby-agent/features/page-load-timing-ruby)
  </InlinePopover>

  の自動インストゥルメンテーション

New Relic は、Rails と Sinatra 用のこれらのミドルウェアを自動的にインストールします。

## ラックの計測器 [#instrumentation]

Rack ミドルウェアを設定する最も一般的な 2 つの方法は、`Rack::Builder` API (ほとんどの場合、<DNT>**config.ru**</DNT> から) と Rails のミドルウェア スタック設定です。

<CollapserGroup>
  <Collapser
    id="rack_builder"
    title="ラック::ビルダー"
  >
    <DNT>**config.ru**</DNT>ファイル内のミドルウェアは`Rack::Builder`を使用して構成されています。 Rubyエージェントが`Rack::Builder`のミドルウェアを計測するには、アプリがバージョン1.1.0を実行している必要があります。 または`rack`以上の宝石。 これは、Sinatra または純粋なラック アプリケーションでのミドルウェアの最も一般的な使用法です。
  </Collapser>

  <Collapser
    id="rails_middlewares"
    title="Railsのミドルウェア"
  >
    Rails は、 `Rack::Builder`の代わりに独自のクラス ( `ActionDispatch::MiddlewareStack` ) を使用してミドルウェアを構成します。Rails アプリケーションにミドルウェアを明示的に追加していなくても、Rails 自体の多くのコンポーネントがミドルウェアとして実装されているため、デフォルトでミドルウェア データが表示されます。

    Rubyエージェントは、<DNT>**Rails 3.0 or higher**</DNT> の `ActionDispatch::MiddlewareStack` を介して追加されたミドルウェアを自動的にインストゥルメントしました。 Rails でミドルウェアを構成する方法の詳細については、 [Ruby on Rails ガイド](http://guides.rubyonrails.org/rails_on_rack.html)を参照してください。
  </Collapser>
</CollapserGroup>

## ミドルウェアデータの閲覧 [#viewing_middleware_data]

ミドルウェアのデータをAPMで見ることができます。

<CollapserGroup>
  <Collapser
    id="apm-overview"
    title="APMのサマリーページで"
  >
    アプリの[APM <DNT>**Summary**</DNT>ページ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard)のメイン チャートには、アプリケーションのすべての Rack ミドルウェアで費やされたリクエストあたりの平均時間を示す紫色のバーが表示されます。

    <img
      title="web_transactions.png"
      alt="web_transactions.png"
      src="/images/apm_screenshot-crop_web-transactions.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Summary:**</DNT> ミドルウェア時間は、アプリのメインの概要グラフに紫色で表示されます。
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-transactions"
    title="APM トランザクション」ページで"
  >
    アプリの APM [<DNT>**Transactions**</DNT>ページ](/docs/apm/applications-menu/monitoring/transactions-page)から、特定のトランザクション名の個々のミドルウェアの時間を確認することもできます。

    <img
      title="transactions_page.png"
      alt="transactions_page.png"
      src="/images/apm_screenshot-full_transactionspagesummary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction) > Trace details:**</DNT> 以下は、アプリの選択されたトランザクションのミドルウェア時間の例です。
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-trace"
    title="APMのトランザクション・トレース・サマリーで"
  >
    トランザクショントレースは、ミドルウェアの詳細なコール情報も記録します。

    <img
      title="trace_summary.png"
      alt="trace_summary.png"
      src="/images/apm_screenshot-full_trace-summary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction trace):**</DNT> 以下は、 lttrace のミドルウェアの詳細の例です。
    </figcaption>
  </Collapser>
</CollapserGroup>

## ラックインストルメントの無効化 [#disabling]

Rack ミドルウェアを計測したくない場合は、 [`disable_middleware_instrumentation`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration)設定で Rack ミドルウェアの計測を無効にすることができます。[特定のトランザクションを無視](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions)することもできます。

## Rubyエージェント・ミドルウェアの手動インストール [#manual]

New Relic の[クロス アプリケーション トレース](/docs/apm/traces/cross-application-traces/cross-application-tracing)機能の Ruby エージェントの実装では、Rack ミドルウェア インストルメンテーションを使用して、監視対象のアプリケーション間で情報を渡すために必要な HTTP ヘッダーを読み書きします。Sinatra を使用していて、上記のようにミドルウェア インストルメンテーションを無効にしており、クロス アプリケーション トレースを使用したい場合は、ミドルウェア スタックに`NewRelic::Rack::AgentHooks`ミドルウェアを手動で追加する必要があります。

<Callout variant="important">
  バージョン8.0.0では、クロスアプリケーショントレースは廃止され、 [分散型トレース](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/) が採用されています。この機能を有効にすると、ミドルウェアを追加することなく、すべてのラックベースのアプリに対して分散型トレーシングが自動的に設定されます。

  クロスアプリケーショントレースを継続して使用したい場合は、 [設定を更新する必要があります](/docs/agents/ruby-agent/features/cross-application-tracing-ruby#configuration) 。
</Callout>

## ラックの手動計測器 [#manual_instrumentation]

Ruby エージェントの以前のバージョンでは、 `NewRelic::Agent::Instrumentation::Rack`モジュールを介した Rack ミドルウェアの手動インストルメントがサポートされていました。このインストルメンテーションは削除されており、Ruby エージェント バージョン 4.0.0 以降での動作は保証されていません。この形式の手動インストルメンテーションは、自動ミドルウェア インストルメンテーションでは不要です。3.9.0 以降にアップグレードした後は、コードからこのモジュールへの参照を削除することをお勧めします。
