---
title: レガシーエージェントバージョン用のJava設定の更新
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'New Relic Java agent versions earlier than 3.16.1: How to update your newrelic.yml file to the latest version of agent attribute configuration.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

Java エージェントバージョン 3.16.1 以下を使用していて、 [最新版](/docs/release-notes/agent-release-notes/java-release-notes) にアップグレードする必要があるが、エージェント属性の設定に非推奨の設定オプションを使用している。

## 解決

`newrelic.yml`で、最新バージョンとの互換性を保つために使用する構成プロパティを編集します。

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Deprecated property**
        </DNT>
      </th>

      <th>
        <DNT>
          **New property**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `analytics_events`
      </td>

      <td>
        `transaction_events`

        <DNT>**newrelic.yml**</DNT>設定ファイル内の`analytics_events`というセクションは非推奨になりました。 代わりに`transaction_events`セクションを使用してください。
      </td>
    </tr>

    <tr>
      <td>
        `capture_params`
      </td>

      <td>
        `attributes.include: request.parameters.*`

        デフォルトでは、リクエストパラメータは New Relic に送信されません。すべてのリクエスト パラメータをオンにするには、 `request.parameters.*` を `attributes.include` リストに追加します。 `capture_params` プロパティは非推奨になりました。
      </td>
    </tr>

    <tr>
      <td>
        `ignored_params`
      </td>

      <td>
        `attributes.exclude: request.parameters.{name}`

        各リクエスト パラメータ キーを `attributes.exclude` リストに追加します。キーの前に必ず `request.parameters`を付けてください。 `ignored_params` プロパティは非推奨になりました。
      </td>
    </tr>

    <tr>
      <td>
        `capture_messaging_params`
      </td>

      <td>
        `attributes.include: message.parameters.*`

        デフォルトでは、メッセージキューパラメータは New Relic に送信されません。以前は、 `capture_messaging_params`を`true`に設定すると、メッセージ キュー パラメータが有効になりました。ここで、 `message.parameters.*` `attributes.include`リストに追加する必要があります。
      </td>
    </tr>

    <tr>
      <td>
        `ignored_messaging_params`
      </td>

      <td>
        `attributes.exclude: message.parameters.{name}`

        以前は、 `ignored_messaging_params`を除外するメッセージ キュー パラメータ キーのリストに設定できました。ここで、各メッセージ キュー パラメータ キーを`attributes.exclude`リストに追加する必要があります。キーの前に必ず`message.parameters`を付けてください。
      </td>
    </tr>

    <tr>
      <td>
        `capture_attributes`
      </td>

      <td>
        `attributes.enabled`

        古い `capture_attributes` フラグでは、ユーザー属性の収集がオフになります。これは廃止されました。代わりに `attributes.enabled` を使用してください。
      </td>
    </tr>
  </tbody>
</table>

この例では、Java エージェントはリクエスト パラメータを収集し、それらをトランザクション トレーサとエラー コレクタの宛先に記録します。これは、 `Capture attributes`または`Capture parameters`の従来の[サーバー側構成オプションの](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration)有効化をエミュレートします。

Java エージェント構成ファイル内の[`attributes`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#attributes)要素をカスタマイズするには:

```yml
attributes.enabled: true
attributes.include: request.parameters.*
```
