---
title: WordPressに特化した機能
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'WordPress websites: Use the newrelic.framework.wordpress.hooks INI setting to capture special metrics for hooks, plugins, and themes with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

[WordPress ウェブサイトにNew Relicをインストールする](/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service)と、PHP エージェントは追加のメトリックを受け取ります。 New Relicユーザー インタフェースに <DNT>**WordPress**</DNT> ページが表示されます: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a WordPress app)**</DNT> に移動します。

## 構成

PHP エージェントの `ini` 設定 `newrelic.framework.wordpress.hooks` を使用して、アプリがNew Relicに送信する WordPress 固有のメトリックを制御できます。 これはバージョン<DNT>**5.3**</DNT>以降ではデフォルトで有効になっており、次の方法で無効にできます。

```ini
newrelic.framework.wordpress.hooks = false
```

この設定では`.hooks`という単語が使用されていますが、WordPress 固有のすべての指標のキャプチャを制御します。

New Relic PHP エージェント バージョン 10.16 では、WordPress 固有のメトリックとそれらのメトリックで送信されるデータを微調整できる `newrelic.framework.wordpress.hooks.options` `ini` 設定が追加されました。 この設定では、次の値が受け入れられます: `"all_callbacks"` ( New Relic PHPエージェント バージョン 10.16 のデフォルト)、`"plugin_callbacks"` ( New Relic PHPエージェント バージョン 10.20 のデフォルト)、および `"threshold"`。 `"all_callbacks"`オプションにより、すべてのフックコールバック関数がインストゥルメントされます。 `"plugin_callbacks"`および`"threshold"`設定により、エージェントによって収集されたデータを微調整して、エージェントのオーバーヘッドを削減できます。 `newrelic.framework.wordpress.hooks.options`を`"plugin_callbacks"`に設定すると、インストゥルメンテーションはプラグイン/テーマのコールバックのみに制限されます。 `newrelic.framework.wordpress.hooks.options` を `"threshold"` に設定すると、プラグイン/テーマ監視が無効になり、この動作モードでは、 New Relic PHPエージェントは `newrelic.framework.wordpress.hooks.threshold` (1ms がデフォルトの閾値) を超えるフックの実行のみを記録します。

## 指標

PHPエージェントは、以下のようなメトリクスを受け取ります。

* <DNT>
    **Hooks**
  </DNT>

  : これらのメトリックは、各 WordPress フック内で費やされた時間を示します。 時間はフックディスパッチ関数`apply_filters` 、 `apply_filters_ref_array` 、 `do_action` 、および`do_action_ref_array`から計算されます。 `newrelic.framework.wordpress.hooks.options="all_callbacks"`の場合、WordPress コア コールバックが含まれます。 `newrelic.framework.wordpress.hooks.options="plugin_callbacks"`の場合、プラグイン/テーマのコールバックのみが含まれます。 どちらの場合も、メトリック カウントは呼び出されたコールバックの数を示します。 ただし、 `newrelic.framework.wordpress.hooks.options="threshold"`の場合、メトリック数はフックが実行された回数を示します。

* <DNT>
    **Plugins and themes**
  </DNT>

  : これらのメトリックは、各 WordPress プラグインとテーマ内で費やされた時間を示します。 時間はフックのディスパッチ関数から計算されます。 このメトリックは、 `newrelic.framework.wordpress.hooks.options`が`"all_callbacks"`または`"plugins_only"`の場合にのみ生成されます。

## New Relicパートナーとの統合 [#integration]

WordPress アプリケーションを APM と統合すると、WordPress アプリの<DNT>**Administration**</DNT>ページから直接パフォーマンスを表示できます。 たとえば、 [W3 Total Cache は](https://newrelic.com/blog/best-practices/web-performance-optimization-automation)WordPress アプリを専門とする New Relic のパートナーの 1 つです。
