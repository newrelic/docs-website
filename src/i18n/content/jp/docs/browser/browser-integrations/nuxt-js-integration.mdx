---
title: Nuxt.jsインテグレーション
tags:
  - nuxt.js integration
  - nuxt integration
  - new relic integrations
metaDescription: 'Learn how to query your New Relic data with NRQL, our SQL-like query language.'
freshnessValidatedDate: never
translationType: machine
---

Nuxt.js ダッシュボードを使用すると、アプリケーションのエラー率、初期ページ読み込み平均、ルートの変更、スループット、JavaScript エラーのあるページビューを簡単に追跡できます。 当社のインフラストラクチャエージェントと Vue <InlinePopover type="browser"/>を使用して構築された Nuxt.js ダッシュボードを使用すると、重要な情報を 1 か所で表示できます。

<img
  title="Nuxt.js dashboard"
  alt="A screenshot of a Nuxt.js dashboard"
  src="/images/infrastructure_screenshot-crop_nuxtjs-dashboard.webp"
/>

## 1. Infrastructureエージェントのインストール [#infra]

New Relicにデータを取り込む前に、まずInfrastructureエージェントをインストールする必要があります（インストール済みの場合は、この手順をスキップできます）。これにより、New Relicはデータを収集し、アプリケーションエラー率、スループット、JavaScriptエラーのあるページビューをダッシュボードに表示できます。この手順はオプションですが、すべてのホストとブラウザモニタリングデータを表示するには、Infrastructureエージェントをインストールすることを強くお勧めします。

Infrastructureエージェントをインストールするには、次の2つの方法があります。

* [ガイド付きインストール](https://one.newrelic.com/marketplace?state=607786be-99a9-fa66-4b67-3f7f3b9551d4)に従って、Infrastructureエージェントを使用してシステムをインストゥルメントします。
* コマンドラインを使用して[Infrastructureエージェント](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux)をインストールします。

## 2. Vueブラウザモニタリングのインストール [#install]

インフラストラクチャエージェントをインストールしたら、次のステップはbrowserをインストールすることです。 <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT>より:

1. クリック

   <DNT>
     **Integrations & Agents**
   </DNT>

2. クリック

   <DNT>
     **Browser & mobile**
   </DNT>

3. <DNT>
     **Vue**
   </DNT>

   をクリックし、指示に従って手順 3 で使用する JavaScript コード スニペットを生成します。 ブラウザ監視エージェントと Vue インテグレーションは本質的に同じサービスを提供しますが、Vue インテグレーションは JavaScript (Nuxt.js のフレームワーク) に特化しています。 JavaScript 固有ではない他のサービスを監視する場合は、ブラウザ監視エージェントを使用する必要があります。

## 3. インテグレーションの設定 [#config]

Nuxt.jsアプリケーションにJavaScriptスニペットを追加するには：

1. nuxt.jsアプリケーションの

   <DNT>
     **`static`**
   </DNT>

   フォルダーにJavaScriptファイルを作成します。

   ```bash
   touch <FILENAME>.js
   ```

2. 新しく作成されたJavaScriptファイルに関数を作成して、生成済みスクリプトを関数内に追加します。

   ```js
   function FUNCTION_NAME() {
     // GENERATED SCRIPT IS PASTED HERE BY REMOVING OPENING AND CLOSING <script> TAGS>
   }
   FUNCTION_NAME();
   ```

3. 以下のコードスニペットをコピーし、`nuxt.config.js`ファイルの`HEADER tag`に貼り付け、関数名とファイル名を更新します。

   ```js
     __dangerouslyDisableSanitizers: ["script"],
     script: [
       {
         hid: "<FUNCTION_NAME>",
         src: "/<FILENAME>.js",
         defer: true,
         type: "text/javascript",
         charset: "utf-8",
       },
     ],
   ```

4. アプリケーションを再起動します。

## 4. one.newrelic.comでのアプリケーションの監視 [#monitor]

これで、ナビゲーション バーから<DNT>**Browser**</DNT>を選択すると、 <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT>でアプリケーションを確認できるようになります。 アプリケーションを選択すると、 <DNT>**one.newrelic.com**</DNT>プラットフォームでキャプチャされたすべてのメトリックが表示されます。 次のクエリを使用して、NRQL でデータを表示することもできます。

```sql
SELECT firstPaint 
FROM PageView
```

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。

* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。

* [ダッシュボードを管理して、](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)

  <InlinePopover type="dashboards"/>

  の表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。
