---
title: PHPエージェントがエラーを報告しない
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: If the PHP agent is not reporting errors you may have to disable third party error handler or manually instrument the error using the agent API
freshnessValidatedDate: never
translationType: machine
---

## 問題

アプリケーションのエラーが、期待通りにPHPエージェントに報告されない、または捕捉されない。

## 解決

<DNT>**using a third party error handler**</DNT>の場合 (例: [XDebug](https://xdebug.org/)または[Laravel のエラー ハンドラー)](https://laravel.com/docs/5.2/errors) :

1. サードパーティのエラーハンドラを無効にする。
2. エラーが報告されていることを確認するには、 [APM errors page](/docs/apm/applications-menu/events/view-apm-error-analytics) を参照してください。

<DNT>**not using a third party error handler**</DNT>であるにもかかわらず、依然として 応答エラー (例: 404 エラー) が表示されない場合:

1. PHP がエラーを処理していることを確認してください。なぜなら、New Relic は PHP が認識できないエラー (Web サーバー上の静的資産の 404 エラーなど) を報告できないからです。
2. [`newrelic_notice_error()` API 呼び出し](/docs/agents/php-agent/php-agent-api/newrelic_notice_error)を使用して、発生が予想されるエラーを手動で計測します。
3. エラーが報告されていることを確認するには、 [APM errors page](/docs/apm/applications-menu/events/view-apm-error-analytics) を参照してください。

## 原因

PHPはエラーを自身のデフォルトハンドラで処理します。XDebugやLaravelのエラーハンドラのような多くのサードパーティのハンドラは、しばしばPHPのデフォルトハンドラを上書きし、PHPの代わりにエラーを捕捉します。

PHPエージェントには独自のエラーハンドラがあり、PHPがエラーを捕捉することに依存しています。1つのエラーを処理できるのは1つのハンドラーだけなので、エージェントは、PHPに捕捉される前にサードパーティのハンドラーによって既に処理されたエラーを見ることはありません。

さらに、一部のエラー (例: 404 エラー) は Web サーバー レベルで発生することがよくあります。これは、PHP が関与することはなく、エラーがエージェントによってキャプチャされることもありません。PHP を使用して 404 エラーを処理する場合は、 [`newrelic_notice_error()` API 呼び出しを](/docs/agents/php-agent/php-agent-api/newrelic_notice_error)使用してこれらのエラーを手動で計測します。
