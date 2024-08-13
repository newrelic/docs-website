---
title: INI設定がすぐに反映されません
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'If you change INI settings for your New Relic PHP agent, restart your web server to ensure the new settings take effect properly.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

`newrelic.ini`ファイルへの変更はすぐには有効になりません。

## 解決

INIの設定を変更した後は、Webサーバー（Apache、Nginx、PHP-FPMなど）を再起動してください。

## 原因

Webサーバー（Apache、Nginx、PHP-FPMなど）が最初に起動してPHPを初期化する際に、すべてのINI設定を読み込みます。また、不足している設定についてはグローバルなデフォルト値を設定します。

Apache はその後、リクエストを処理するために"ワーカー" プロセスのプールを作成します。これらのワーカープロセスは初期化時に設定された設定を継承します。どのワーカープロセスが特定のリクエストを処理するかを正確に知る方法はありません。INI ファイルを変更しても、古い設定のままのワーカープロセスが何百も残っているかもしれませんし、メインの Apache プロセス自身 (定期的に既存のワーカープロセスを kill したり、新しいワーカープロセスを生成したりします) も元の INI 設定を持っています。

Apache サーバーを再起動するまで、INI ファイルへのほとんどの変更は認識されません。唯一の例外は、 `.htaccess`ファイルを使用して PHP の「ディレクトリごと」設定メカニズムを使用する場合です。こういう設定は珍しいですね。
