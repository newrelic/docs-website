---
title: データが報告されなくなる
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Learn what to do if the New Relic PHP agent starts and then stops reporting data.
freshnessValidatedDate: never
translationType: machine
---

## 問題

New Relic PHP エージェントは、以前はデータを報告していましたが、その後報告しなくなりました。さらに、このような

* エージェント デーモン ログ ファイル`/var/log/newrelic/newrelic-daemon.log`を確認すると、メッセージ`Lack of activity within 10ms`が表示されました。
* アプリケーションの健康状態はグレーです。
* アプリケーションを削除するオプションは、アプリケーションの<DNT>**Settings**</DNT>メニューで<Icon name="fe-settings"/>アイコン。

## 解決

アプリケーションがアイドル状態にならないようにするには、これらの方法のいずれかを使用します。

* [`newrelic.daemon.app_timeout`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-app_timeout)のタイムアウト値をトランザクション間隔の少なくとも 2 倍に設定します。たとえば、1 時間ごとのバックグラウンド ジョブの場合、タイムアウトを 2 時間に設定します。
* 推奨事項: プロセスが長い場合や頻度が低い場合は、 `phpinfo()`などの単純なトランザクションを使用して、5 分ごとに cron ジョブを実行します。 これにより、アプリケーションがアイドル状態にならないことが保証されます。

<Callout variant="important">
  cron ジョブを無視するように`newrelic_ignore_transaction`を設定しないでください。ジョブが実行されずレポートも行われない場合、PHP エージェントはアイドル状態になります。
</Callout>

## 原因

アプリケーションのトランザクションに10分以上かかる場合や、10分に1回以下の頻度で発生する場合は、アプリケーションはアイドル状態になります。

PHP エージェントがアイドル状態の場合、レポートを再開する前に<DNT>**two**</DNT>トランザクションを実行する必要があります。

* 最初のトランザクションでは、デーモンを起動し、New Relicへの接続を再確立します。
* 2つ目のトランザクションは、New Relicにデータを報告します。
