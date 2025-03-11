---
title: プロトコル不一致エラー
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Protocol mismatch errors mean your agent and daemon are out of sync. Follow these steps to fix it.
freshnessValidatedDate: never
translationType: machine
---

## 問題

エージェントをアップグレードすると、デーモン ログ ファイルに次のようなエラーが表示されます: `protocol mismatch: A.B != X.Y` 。

## 解決

1. エージェントとデーモンのバージョンが同じであることを確認してください。

2. ウェブサーバーを再起動します（Apache、Nginx、PHP-FPMなど）。

3. 数値`A.B`が数値`X.Y`より小さい場合、より新しいデーモンと通信しようとしている古いエージェントがあることを意味します。

   数値`A.B`が数値`X.Y`より大きい場合は、デーモンが期限切れであることを意味し、最も考えられる原因は、実行中のデーモンが多すぎることです。この場合、現在実行中のすべての`newrelic-daemon`プロセスを強制終了し、 `/etc/init.d/newrelic-daemon start`を使用してデーモンを再起動します。

## 原因

このエラーが発生する唯一の理由は、エージェントとデーモンがお互いに同期していないことです。デーモンと実際のエージェント (PHP 拡張モジュール) は非常に緊密に結合しており、 デーモンはそれにマッチしたエージェントからの接続やコマンドしか受け付けません。

アップグレードの際に、古いデーモンを正しく殺すことができず、古いデーモンのプロセスがまだ動いていることがあります。よくあるのは、アップグレード後にWebサーバーを再起動しなかったことがこのエラーの原因です。デーモンが正しくアップグレードされたにもかかわらず、ウェブサーバーに古いエージェントが残っていると、このエラーが表示されます。このエラー自体が、どのエージェントが古くなったかを示しています。
