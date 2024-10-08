---
title: Node.jsにおけるブラウザ・インスツルメンテーションのトラブルシューティング
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: How to interpret any error messages you see when manually inserting the browser agent with New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

## 問題

Node.js エージェント経由で [インストゥルメントされたbrowser アプリケーションで 問題が発生した場合は、](/docs/nodejs/page-load-timing-in-nodejs) New Relic[標準の<InlinePopover type="browser"/> トラブルシューティング手順](/docs/new-relic-browser/troubleshooting-page-view-monitoring) に従ってください。Node.js に関する追加のヒントをいくつか紹介します。

## 解決

エラー コードは、サイトのソース コードと Node.js エージェント ログに自動的に表示されます。これらのコードを見つけるには[`NREUM`](/docs/new-relic-browser/troubleshooting-page-view-monitoring#javascript)を検索してください。

<table>
  <thead>
    <tr>
      <th width={100}>
        <DNT>
          **Error code**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        0
      </td>

      <td>
        ブラウザの監視が明示的に無効になっています。これは、 `newrelic.js`または環境変数で行われました。( `NEW_RELIC_BROWSER_MONITOR_ENABLE`のデフォルトは`true`です。)
      </td>
    </tr>

    <tr>
      <td>
        1
      </td>

      <td>
        ブラウザエージェントがWebトランザクションの外で呼び出された。これは、ブラウザデータを一度生成してからキャッシュしようとした場合や、バックグラウンドタスクで呼び出した場合に発生する可能性があります。
      </td>
    </tr>

    <tr>
      <td>
        2
      </td>

      <td>
        思いがけないことが起きた。
      </td>
    </tr>

    <tr>
      <td>
        3
      </td>

      <td>
        トランザクションには名前がありません。 Express または Restify を使用しておらず、トランザクションに明示的に名前を付けていない場合、このエラーが表示されます。 これは、トランザクション名が<DNT>\*\*/\*\*</DNT> \* にロールバックされるのを回避するためです。 詳細については、 [「トランザクションの命名」](/docs/nodejs/nodejs-agent-api)を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        4
      </td>

      <td>
        Node.js エージェントは、コレクターと"ハンドシェイク" をまだ行っていません。コレクターがエージェントと会話する前に、アプリが起動し、ユーザーがサイトにアクセスしました。これは以下の理由で発生する可能性があります。

        * エージェントがNew Relicに最初に接続する前に読み込まれたブラウザページ。

        * ライセンスキーが無効です。

        * その他、アプリケーションIDが利用できないような問題が発生した。

          これらのエラーが 1 分以上続く場合は、 <InlinePopover type="licenseKey"/>を確認してください。 それ以外の場合、エラーは自動的に消えるはずです。
      </td>
    </tr>

    <tr>
      <td>
        5
      </td>

      <td>
        ブラウザモニタリングがコレクター側で無効になっています。たとえば、コレクターがブラウザ監視を有効にするのに十分なデータを返さなかった場合などです。これは、 [Node.jsのサーバー側の構成設定](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#methods-and-precedence) が現在利用できないため、コレクターの問題です。
      </td>
    </tr>
  </tbody>
</table>
