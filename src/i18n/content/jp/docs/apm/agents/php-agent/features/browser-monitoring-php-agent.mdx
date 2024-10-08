---
title: ブラウザ監視とPHPエージェント
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: Instrumentation for your New Relic PHP agent to set up browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

デフォルトでは、PHP エージェントはアプリケーションの Web ページに[ブラウザ監視を](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)自動的に追加します。この自動プロセスでは、PHP エージェントがブラウザ エージェントの JavaScript スニペットを Web ページに挿入します。これは、ページの head 要素に JavaScript スニペットを手動で挿入することなく、フロントエンド ブラウザのパフォーマンスを監視できることを意味します。

PHP エージェント構成ファイルで自動インスツルメンテーションを有効または無効にすることも、PHP エージェント API を使用してブラウザ監視を手動で構成することもできます。

## 自動インストルメンテーションの使用または無効化 [#auto_instrumentation]

デフォルトでは、PHP エージェントはブラウザ監視の JavaScript スニペットをページに自動的に挿入します。この設定を変更するには、INI ファイルの[`newrelic.browser_monitoring.auto_instrument`](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#inivar-autorum)設定を編集します。

```ini
newrelic.browser_monitoring.auto_instrument=1
```

HTTP ヘッダー フィールド `Content-Length` が設定されている場合、自動インスツルメンテーションは機能しません。この状況でブラウザ監視を使用するには、自動インスツルメンテーションを無効にし、JavaScript ヘッダーとフッターをテンプレートに [手動で挿入します](#manual_instrumentation) 。

## エージェントAPIを介した手動での計測 [#manual_instrumentation]

ブラウザモニタリングを手動で設定するには、適切なスクリプトをページに記述します。New Relic PHP エージェントには、必要な JavaScript のヘッダーとフッターを代わりに自動生成する API があります。

<Callout variant="important">
  PHP エージェント API の呼び出しは、PHP エージェントが実行されるように、 `newrelic` 拡張機能がロードされることが条件となります。エージェントが実行されていない場合、関数が定義されないため、JavaScript ヘッダーとフッターを生成する呼び出しはエラーになります。
</Callout>

詳細については、以下を参照してください。

* [`auto_instrument` エージェント設定](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum)
* `newrelic_get_browser_timing_header()`
* `newrelic_get_browser_timing_footer()`

## 様々なフレームワークに手動で対応 [#manual_generic]

本ドキュメントでは、エージェントAPIを介してブラウザエージェントを手動で挿入するための詳細な手順は説明しません。これは、フレームワークを構築する方法があまりにも多く存在するためです。

[手動インストルメントの例](#manual_examples) では、すでに自動インストルメントをサポートしているフレームワークにインストルメントを追加する方法を紹介しています。別のフレームワークや、DrupalやWordPressの修正版を使用している場合は、適切な場所でインスツルメンテーション用のAPI関数を呼び出すようにしてください。

1. `newrelic_get_browser_timing_header()` の戻り値を出力ページの `<head>` タグの一部として、できれば最初に挿入します。
2. ドキュメント内の終了 `</body>` タグの前の最後、またはその近くに、戻り値 `newrelic_get_browser_timing_footer()`を挿入します。

ここでは、基本的な例をご紹介します。

<CollapserGroup>
  <Collapser
    id="manual_wp"
    title="ワードプレス"
  >
    この例では、PHP エージェント API を呼び出して、デフォルトの `twentyten` テーマを使用して WordPress インストールのヘッダーとフッターを生成する方法を示します。

    1. `website home dir/wordpress/wp-content/themes/twentyten/header.php`に JavaScript ヘッダーを生成する呼び出しを挿入します。

       ```php
       <body <?php body_class(); ?>>
       <div id="wrapper" class="hfeed">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="masthead">
           ...
       ```

    2. `website home dir/wordpress/wp-content/themes/twentyten/footer.php`にエンド ユーザー監視フッターを生成する呼び出しを挿入します。

       ```php
       ...
           </div><!-- #site-generator -->
         </div><!-- #colophon -->
         <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
       </div><!-- #footer -->
       ```
  </Collapser>

  <Collapser
    id="manual_drupal"
    title="Drupal"
  >
    この例では、PHP エージェント API を呼び出して、デフォルトの `garland` テーマを使用して Drupal インストール用のヘッダーとフッターを生成する方法を示します。

    1. `website home dir/drupal/themes/garland/page.tpl.php`の開始ヘッダー タグの直後に JavaScript ヘッダーを生成する呼び出しを挿入します。

       ```php
       <div id="container" class="clear-block">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="logo-floater">
           ...
       ```

    2. 最後に閉じるレイアウトタグの直前に、フッターを生成するコールを挿入します。

       ```php
       ...
           </div>
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
             <!-- /layout -->
           <?php print $closure ?>
         </body>
       </html>
       ```

       <Callout variant="important">
         Drupal 7.15 では、 <DNT>**Compress cached pages**</DNT>はデフォルトでオンになっています。 <DNT>**Cache pages for anonymous users**</DNT>も選択した場合、匿名ユーザー向けに提供されるページに JavaScript (newrelic.js) は挿入されません。 これは、Drupal のページがキャッシュに保存される前にデータベースから直接圧縮される (gzip を使用) ため、 New Relicの PHP エージェントが HTML を解析する機会がないためです。 このような状況では、手動インストゥルメンテーションにより、匿名ユーザーのデータを取得する機会がより多く得られます。
       </Callout>

       <Callout variant="important">
         Drupal 10.2 では、 `content-length`ヘッダーを設定する[新しい変更が](https://www.drupal.org/node/3298551)導入されました。 HTTP ヘッダー フィールド `Content-Length` が設定されている場合、 New Relic PHP エージェントはbrowserの自動挿入を実行できません。 ブラウザ監視を引き続き使用するには、 browser自動ログインを無効にし、テンプレートに JavaScript ヘッダーとフッターを手動で挿入します。
       </Callout>
  </Collapser>
</CollapserGroup>

## ブラウザのデータを見る [#viewing]

ブラウザ監視を有効にしてアプリのトラフィックを生成すると、アプリの[ブラウザ<DNT>**Summary**</DNT>ページ](/docs/browser/new-relic-browser/getting-started/browser-overview-page-website-performance-summary)にデータが表示されます。 デーモンを初めて起動したとき (または PHP エージェントが新しいアプリケーションに遭遇したとき) は、デーモンが設定を検証するため、短い遅延が発生します。 その後、New Relic JavaScript スニペットが利用できるようになります。

## オートインストルメントの無効化 [#disable]

PHP エージェントの設定でブラウザ監視を無効にする方法については、 [ブラウザ監視設定オプション](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum) を参照してください。

API を使用してブラウザ監視を無効にする方法については、 [`newrelic_disable_autorum()`](/docs/agents/php-agent/php-agent-api/newrelic_disable_autorum)を参照してください。
