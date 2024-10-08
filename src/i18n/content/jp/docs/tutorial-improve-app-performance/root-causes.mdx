---
title: アプリケーションのパフォーマンスが遅い場合のトラブルシューティング
metaDescription: Discover actionable steps for troubleshooting slow application performance to identify and resolve issues for a smoother user experience.
freshnessValidatedDate: never
translationType: human
---

アプリが遅いです。おそらく、速度が遅すぎてダウンタイムや関連サービスに問題が発生している可能性があります。あるいは、単純にバックエンドの応答が遅いためにUXが少し悪化しているだけかもしれません。ではどうしますか？

このチュートリアルでは、New Relicを使用してアプリケーションを優先順位付けし、アプリケーションのパフォーマンス低下の根本原因を特定する方法を説明します。まず、エージェントを使用してアプリを「インストゥルメント」します。これは、言語とフレームワーク固有の統合を通じて、アプリに関するデータを報告するコードをNew Relicにインストールすることです。New Relicでこのデータを使用して、アプリケーションのパフォーマンスを詳しく調べ、問題としてトランザクションの遅さ、データベースクエリの遅さ、外部サービスの遅さ、あるいは3つすべてを特定します。

## New Relicを使用して実行速度の遅いアプリケーションを修正する方法

実行速度の遅いアプリケーションに対処するには、パフォーマンス問題の根本原因を特定する体系的なアプローチが必要です。次の手順では、アプリケーションの速度に悪影響を与える問題のトラブルシューティング、診断、解決に必要な情報を提供します。

## アプリケーションのインストゥルメンテーションによるパフォーマンス監視の実装 [#prereq]

サイトのパフォーマンスを改善する前に、何が起こっているかを確認する必要があります。New Relicの監視は常に 、<DNT>**integration**</DNT>または関連するテクノロジーからデータを収集してNew Relicに報告するコードの一部から始まります。 アプリケーションのパフォーマンスを監視するには、アプリケーションの言語専用に作成されたエージェントを使用します。

ロゴをクリックしてエージェントをインストールします。これにより、New Relicプラットフォームに移動し、ガイドに従ってエージェントのインストールと設定を行うことができます。

<TechTileGrid>
  <TechTile
    name="Go agent"
    icon="logo-go"
    to="https://one.newrelic.com/nr1-core?state=985d4005-ba90-a8c7-1da1-2af34539b03b"
  />

  <TechTile
    name="Java agent"
    icon="logo-java"
    to="https://one.newrelic.com/nr1-core?state=80d18bcb-4919-1fcb-2b77-9406838eb916"
  />

  <TechTile
    name=".NET agent"
    icon="logo-dotnet"
    to="https://one.newrelic.com/nr1-core?state=30e93090-6dfa-6b70-8e75-472f54414355"
  />

  <TechTile
    name="Node.js agent"
    icon="logo-nodejs"
    to="https://one.newrelic.com/marketplace/install-data-source?state=be2e62fa-cc3b-c428-27c4-8d662c9e80a1"
  />

  <TechTile
    name="PHP agent"
    icon="logo-php"
    to="https://one.newrelic.com/nr1-core?state=aa633b41-72d4-009c-3abf-55dcf64894fe"
  />

  <TechTile
    name="Python agent"
    icon="logo-python"
    to="https://one.newrelic.com/nr1-core?state=20fda75b-58fb-a92a-f9e1-7b052035c6e8"
  />

  <TechTile
    name="Ruby agent"
    icon="logo-ruby"
    to="https://one.newrelic.com/nr1-core?state=d69143ab-605c-579b-25bf-cc6e5fee5b80"
  />
</TechTileGrid>

エージェントをインストールしたら、 <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT>に移動してアプリを選択します。 まだ多くのデータが表示されていない場合は、しばらく離れて、アプリケーションの実行中にエージェントがリアルタイムのデータを収集できるようにします。

## アプリケーションの問題を特定 [#identify]

<SideBySide>
  <Side>
    <DNT>**Web transactions time**</DNT>グラフを確認します。 このグラフには、アプリ内の特定のメトリクスの平均応答時間が表示されます。 グラフにデータが入力された際の、ラインやセグメントの異常スパイクに注意してください。 同時に、いつも長時間かかるセグメントやラインにも注意します。

    <Callout variant="tip">
      ページの右上にあるタイムピッカーを使用して、さまざまな時間範囲にわたるスパイクを探します。
    </Callout>
  </Side>

  <Side>
    <img
      title="Default web transactions chart"
      alt="Default web transactions chart"
      src="/images/journey_screenshot-web-transactions.webp"
    />
  </Side>
</SideBySide>

## アプリケーションの診断

提供されるチャートの情報を使用すると、アプリケーションのトランザクション、データベースクエリ、外部サービスの現在の速度と効率を分析できます。次の手順は、パフォーマンスを向上させるための目標修正に優先順位を付けて、実装することです。

どの色がチャートの最大の部分を占めるか、またはスパイクやその他の奇妙な動作を示すかに基づいて、このチュートリアルの次の手順を選択します。

<DocTiles>
  <DocTile
    title="If it's the blue line: slow application traces"
    path="/docs/journey-app-slow/problematic-transactions"
  >
    青いラインは<DNT>**application code**</DNT>で、具体的には、アプリケーション内で外部呼び出しやデータベース呼び出しではないコードに費やされた時間です。 これをトラブルシューティングするには、ここをクリックしてチュートリアルのステップ2に進んでください。
  </DocTile>

  <DocTile
    title="If it's the yellow segment: slow database queries"
    path="/docs/journey-app-slow/slow-database-queries"
  >
    黄色のセグメントは<DNT>**database queries**</DNT>で、具体的にはデータベースのクエリの呼び出しと待機に費やされた時間です。 これをトラブルシューティングするには、ここをクリックしてチュートリアルのステップ3に進んでください。
  </DocTile>

  <DocTile
    title="If it's the green segment: slow external services"
    path="/docs/journey-app-slow/external-services/"
  >
    緑色のセグメントは<DNT>**external services**</DNT>で、具体的にはHTTPサービスまたはエンドポイントの呼び出しに費やされた時間です。 これは、同じアプリの一部としてのHTTPエンドポイント、同じシステムの一部としての別のサービス、または完全な外部のサードパーティAPIである可能性があります。これをトラブルシューティングするには、ここをクリックしてチュートリアルのステップ4に進んでください。
  </DocTile>
</DocTiles>
