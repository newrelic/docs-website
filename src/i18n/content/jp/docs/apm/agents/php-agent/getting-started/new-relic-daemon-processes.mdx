---
title: New Relic デーモンのプロセス
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: Information about daemons for New Relic PHP agent installations prior to 3.0.
freshnessValidatedDate: never
translationType: machine
---

PHPエージェントは2つの部分から構成されています。

* PHP拡張モジュールは、 `newrelic.so`
* エージェントデーモン、 `newrelic-daemon`

このデーモンは、PHP エージェントと New Relic コレクターの間のプロキシとして動作し、ネットワークトラフィックを削減し、インスツルメンテーションされたアプリケーションの応答時間を改善します。デーモンが実行されていない場合、New Relic にデータは報告されません。

## PHP デーモンの初期状態またはアイドル状態 [#daemon]

デーモンが初期状態またはアイドル状態にある場合、レポートを開始する前に<DNT>**two**</DNT>トランザクションが発生する必要があります。

<DNT>**initial**</DNT>状態:

* 最初のトランザクションで、デーモンは新たに報告されたアプリケーションを自身のアプリケーション情報テーブルに追加します。
* アプリケーションが追加されると、デーモンは2つ目のトランザクションをNew Relicに報告します。

<DNT>**idle**</DNT>状態:

* 最初のトランザクションでは、デーモンを起動し、New Relicへの接続を再確立します。
* 2つ目のトランザクションは、New Relicにデータを報告します。

## ウォッチドッグとワーカープロセス [#processes]

プロセスリストを見ると、常に2つのデーモンプロセスが動いていることがわかります。

```
$ ps -ef | grep newrelic-daemon
newrelic     1368     1  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
newrelic     1370  1368  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
```

2つのプロセスが動作していることは正常な動作です。1列目はプロセスオーナー、2列目はプロセスID(PID)、3列目は親プロセスID(PPID)です。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        デーモン・プロセス
      </th>

      <th>
        コメントコメント
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ウォッチドッグ（最初のプロセス）
      </td>

      <td>
        最初のプロセス、つまりPID 1が所有するプロセスは、"ウォッチドッグ" プロセスです。このプロセスは、2番目のプロセスである"worker" プロセスを監視します。
      </td>
    </tr>

    <tr>
      <td>
        ワーカー（第2プロセス）
      </td>

      <td>
        ワーカープロセスは次のようなことを行います。

        * PHPエージェントからの接続を受け入れる
        * メトリクスの収集
        * New Relic コレクターとのコミュニケーション
      </td>
    </tr>

    <tr>
      <td>
        プロセスの終了
      </td>

      <td>
        デーモンが正常に終了されるとき (通常は`/etc/init.d/newrelic-daemon stop`を実行することによって)、ウォッチドッグ プロセスに終了信号が送信されます。これにより、ワーカー プロセスが正常に終了し、保留中のデータを New Relic に送信する機会が与えられます。

        <Callout variant="important">
          デーモンを手動で終了させる必要がある場合は、ワーカーではなく、常にウォッチドッグを終了させてください。
        </Callout>

        ワーカープロセスが致命的なエラーに遭遇して予期せず終了した場合、ウォッチドッグプロセスは直ちに新しいワーカープロセスを再生成します。これにより、デーモンのダウンタイムを絶対的に少なくすることができます。
      </td>
    </tr>
  </tbody>
</table>

## デーモンの停止 [#killing]

デーモンを殺すには、以下の方法があります。

* 推奨されるプロセス: `/etc/init.d/newrelic-daemon stop`を使用します。 これはデーモンと対話するための推奨される方法です。

* プロセスIDで直接プロセスをキルする。

  ```
  kill 1368
  ```

* ウォッチドッグのPIDファイルを使用します。

  ```
  kill `cat /var/run/newrelic-daemon.pid`
  ```
