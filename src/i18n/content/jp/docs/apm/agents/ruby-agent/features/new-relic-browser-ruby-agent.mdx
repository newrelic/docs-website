---
title: ブラウザ監視とRubyエージェント
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: Instrumentation for your New Relic Ruby agent to set up New Relic browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

Ruby エージェントを使用すると、[ブラウザ監視エージェントを](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)自動または手動で Web ページに挿入できます。 デフォルトでは、Ruby エージェントが Javascript を検出すると、自動的に<InlinePopover type="browser"/>がインストールされます。

ブラウザ監視を手動で追加する場合、または Browseragent のインストールオプションについて詳しく知りたい場合は、 [Browseragent インストレーション ガイドを参照してください](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent)。

## 要件 [#requirements]

自動browserインストゥルメント[は、 Rubyエージェントのサポートされているすべてのバージョンで](/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/)利用できます。 自動インストゥルメンテーションの環境が準備されていることを確認するには、 [ブラウザの互換性と要件ガイド](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring)を確認してください。

## オートインストルメントの使用 [#auto-instrumentation]

New Relicのデフォルト設定では、ブラウザ監視の自動ログインが有効になっています。

```yaml
browser_monitoring:
  auto_instrument: true
```

これはモニターエンドユーザーになる最も簡単な方法です。 Rubyエージェントは、アプリケーションの各ページが読み込まれるときにそれを調べ、 browser JavaScript をヘッダーに自動的に挿入します。 自動インストゥルメンテーションは、Rack を使用する環境で機能します。 パフォーマンス上の理由から、エージェントは、ヘッダー インストゥルメント ポイントを探すために、アプリケーションの応答の最初の 50,000 行のみをスキャンします。 `X-UA-Compatible`メタ タグが存在し、 `<head>`タグが 50k を超える場合、自動インストゥルメンテーションは正常に失敗します。

自動インストゥルメンテーションは、 `X-UA-Compatible`メタ タグを検索し、その直後に JavaScript を挿入します。 オートインストゥルメンテーションが`X-UA-Compatible`メタ タグを見つけられない場合は、開始ヘッド タグの後に挿入されます。 できない場合は、開始 body タグの後に挿入されます。 これらのタグのいずれかが条件文またはコメントで囲まれている場合、自動インストゥルメンテーションは失敗する可能性があります。

自動ストリーミングは、添付ファイル「Content-Type」があるページやストリーミング要求を検出した場合には実行されません。

自動インポートでアプリケーションのページを正しくインポートできない場合は、エージェント を使用して[ ](#manual-instrumentation)手動でインポートするAPI 必要があります。

## エージェントAPIを介した手動での計測 [#manual-instrumentation]

ページに適切なスクリプトを含めることで、エンドユーザーの監視を手動で設定できます。 New Relic Ruby エージェントの API を使用してスクリプトを生成します。 API はこのスクリプトをページに挿入します。

例えば、アプリケーションのテンプレートを変更してエージェントを呼び出すには、次のようにします。

```erb
<head>
    <%= ::NewRelic::Agent.browser_timing_header rescue "" %>
    # existing template code ...
</head>
```

## CSP Nonceのサポート [#csp-nonce-support]

コンテンツ セキュリティ ポリシーが「unsafe-inline」に設定されている場合、Browseragent を自動的に計装できます。 [CSP Nonce を](https://content-security-policy.com/nonce/)使用する場合は、手動で設定を追加する必要がある場合があります。

### Rails CSP ノンス [#rails-csp-nonce]

[Rails バージョン 5.2 以降には、](https://guides.rubyonrails.org/security.html#adding-a-nonce) API を使用して CSP nonce を設定する機能が含まれています。 Rubyエージェントバージョン9.10.0以降では、Rails CSP nonceが自動的に検出され、Browserエージェントインジェクションスクリプトに適用されます。

この機能を無効にするには、 `newrelic.yml`を次のように更新します。

```yaml
  browser_monitoring:
    content_security_policy_nonce: false
```

または、環境変数`NEW_RELIC_BROWSER_MONITORING_CONTENT_SECURITY_POLICY=false`を設定します。

### API呼び出し [#api-call]

Ruby エージェント バージョン 7.1.0 以降では、CSP nonce を`NewRelic::Agent.browser_timing_header` API に渡すことができます。

このメソッドに nonce を渡す場合は、ブラウザ監視の自動インストゥルメンテーションを無効にし、エージェントAPI経由で手動インストゥルメンテーションを使用する必要があります。

`newrelic.yml`を次のように更新します:

```yaml
browser_monitoring:
  auto_instrument: false
```

または、環境変数`NEW_RELIC_BROWSER_MONITORING_AUTO_INSTRUMENT=false`を設定します。

API メソッドに nonce を引数として渡して、エージェントがブラウザのインストルメンテーションに nonce を挿入できるようになりました。たとえば、 `NewRelic::Agent.browser_timing_header(nonce)`。

## トラブルシューティング [#troubleshooting]

Browserデータが報告されない場合は、HTMLソースを表示し、次のような2つのスクリプトブロックがHTMLヘッドにあることを確認します。

```html
<script type="text/javascript">window.NREUM||(NREUM={});...</script>
```

これらが存在しない場合は、以下を確認してください。

* 自動ログイン設定
* テンプレートファイル内の手動インストゥルメンテーションの配置
* ノンスを適用する方法

## オートインストルメントの無効化 [#disable-instrumentation]

[`auto-instrument`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#browser-monitoring)のデフォルト値は`true`です (指定されていない場合でも)。 自動インストゥルメンテーションを無効にするには、このフラグを`false`に設定します。

```yaml
browser_monitoring:
  auto_instrument: false
```

特定のコントローラーまたはコントローラー アクションに対してのみ自動ログインを無効にするには、 [`newrelic_ignore_enduser`](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions#page-load-timing-rum)を使用します。 サーバー側のインストゥルメンテーションはこの呼び出しの影響を受けません。
