---
title: Drupalに特化した機能
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'Drupal websites: Use the newrelic.framework.drupal.modules INI setting to capture special metrics for modules, hooks, views, and browser instrumentation.'
freshnessValidatedDate: never
translationType: machine
---

PHPエージェントは、Drupal Webサイト用の特別なメトリックをキャプチャします。 これらのメトリックが収集されると、 New Relicユーザー インタフェースに <DNT>**Drupal**</DNT> タブが表示されます: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Drupal app)**</DNT> に移動します。

## 構成

Drupal 固有のメトリックのコレクションは、 [`newrelic.framework.drupal.modules`](/docs/php/php-agent-phpini-settings#inivar-framework-drupal-modules)によって制御できます。 これはデフォルトで有効になっています (バージョン<DNT>**3.0**</DNT>以上)。次の方法で無効にできます。

```ini
newrelic.framework.drupal.modules = 0
```

この設定では"modules という言葉を使っていますが、" モジュール、ビュー、フックなど、すべてのDrupalメトリクスの収集を制御します。

## 指標

PHPエージェントは、以下の項目についてメトリクスを収集します。

* <DNT>
    **Modules**
  </DNT>

  : バージョン 2.5 以上。 これらのメトリックは、各 Drupal モジュール内で費やされた時間を示します。 バージョン 3.5 以降では、時間はフック ディスパッチ関数`module_invoke`と`module_invoke_all`から計算されます。 以前のバージョンでは、時間は「.module」のファイルからの関数から計算されていました。 ファイル名と関数プレフィックスが一致する拡張子。

* <DNT>
    **Hooks**
  </DNT>

  : バージョン 3.5 以上。 これらのメトリックは、各 Drupal フック内で費やされた時間を示します。 時間はフックディスパッチ関数`module_invoke`と`module_invoke_all`から計算されます。

* <DNT>
    **Views**
  </DNT>

  : バージョン 3.5 以上。 これらのメトリックは、ビューの`view::execute`メソッド内で費やされた時間を示します。

## Drupalとブラウザのインストルメント [#page-load-timing-rum]

Drupal 7.15 では、 <DNT>**Compress cached pages**</DNT>はデフォルトでオンになっています。 <DNT>**Cache pages for anonymous users**</DNT>も選択した場合、匿名ユーザー向けに提供されるページに<InlinePopover type="browser"/> JavaScript は挿入されません。 これは、Drupal のページがキャッシュに保存される前にデータベースから直接圧縮される (gzip を使用) ため、 New Relicの PHP エージェントが HTML を解析する機会がないためです。

このような状況では、手動インストゥルメンテーションにより、匿名ユーザーのデータを取得する機会がより多く得られます。 詳細については、[ブラウザ監視とPHPエージェント](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/)を参照してください。

Drupal 10.2 では、 `content-length`ヘッダーを設定する[新しい変更が](https://www.drupal.org/node/3298551)導入されました。 HTTP ヘッダー フィールド `Content-Length` が設定されている場合、 New Relic PHP エージェントはbrowserの自動挿入を実行できません。 ブラウザ監視を引き続き使用するには、 browser自動ログインを無効にし、テンプレートに JavaScript ヘッダーとフッターを手動で挿入します。 詳細については、[こちらを](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/#auto_instrumentation)ご覧ください。

## Cronタスク [#cron]

Drupalは、インストールされたDrupalモジュールに代わって、定期的にメンテナンスなどの作業を行うタスクの実行をサポートしています。これらのタスクは、初期設定を超えて手動で行うことなく実行することができます。一般的に、これらは [cron タスク](https://drupal.org/cron "リンクが新しいウィンドウで開きます") と呼ばれています。バージョン 4.3 以降、New Relic PHP エージェントはこれらのタスクの実行を検出し、どのように開始されたかにかかわらず、 [バックグラウンド・トランザクション](/docs/features/monitoring-background-processes#ui) として自動的にマークします。
