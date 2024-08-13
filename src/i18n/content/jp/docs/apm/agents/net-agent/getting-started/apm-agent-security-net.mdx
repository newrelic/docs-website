---
title: APMエージェントのセキュリティ：.NET
tags:
  - Agents
  - NET agent
  - Getting started
metaDescription: Increasing levels of security allow you to customize how your New Relic .NET agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

New Relic .NET エージェントのデフォルトのセキュリティ設定は、APM データ に対して、データのプライバシーを確保し、New Relic が受け取る情報の種類を制限するための [セキュリティを自動的に提供します。これらの設定を変更するビジネス上の理由があるかもしれません。](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)

[](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)

[New Relic が受け取る情報を制限したい場合は、](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)[高セキュリティ モード](#restricted)を有効にします。高セキュリティ モードまたはデフォルト設定がビジネス ニーズに適合しない場合は、[カスタム](#custom)設定を適用できます。

New Relicのセキュリティ対策の詳細については、[セキュリティとプライバシーのドキュメント](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic)を参照、または[New Relicのセキュリティウェブサイト](https://newrelic.com/security)を閲覧してください。

## デフォルトのセキュリティ設定 [#default]

デフォルトでは、New Relic .NET エージェントが以下の潜在的な機密データをどのように扱うかを示しています。

* リクエストパラメーター。エージェントは、HTTPリクエストパラメータをキャプチャしません。
* [HTTPS](/docs/agents/net-agent/configuration/net-agent-configuration#service-ssl): エージェントは HTTPS を使用して New Relic と通信します。
* [SQL](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-recordSql) : エージェントは SQL 記録を`obfuscated`に設定します。これにより、機密性の高い数値および文字列リテラル値が削除されます。

## ハイセキュリティモードの設定 [#restricted]

[高セキュリティ モードを有効にする](/docs/agents/net-agent/configuration/net-agent-configuration#high_security_mode)と、[デフォルト設定](#default)がロックされ、ユーザーは変更できなくなります。加えて：

* [カスタムイベント](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#net-att) を作成することはできません。
* [ユーザー属性を収集することはできません](/docs/agents/net-agent/attributes/net-agent-attributes#NRaddCustomParameter).
* エージェント [は、例外メッセージ](/docs/agents/net-agent/configuration/net-agent-configuration#strip_exception_messages) を取り除きます。

## カスタムセキュリティ設定 [#custom]

<Callout variant="caution">
  セキュリティ設定をカスタマイズすると、アプリケーションのセキュリティに影響を与える可能性があります。
</Callout>

デフォルトまたは高セキュリティ モードとは異なるセキュリティ設定が必要な場合は、これらの設定をカスタマイズできます。

* [.NETエージェント設定ファイル](/docs/agents/net-agent/configuration/net-agent-configuration)
* [カスタムアトリビュート](/docs/agents/net-agent/attributes/net-agent-attributes#NRaddCustomParameter)
* [.NETエージェントAPI](/docs/agents/net-agent/api-guides/guide-using-net-agent-api)

<table>
  <thead>
    <tr>
      <th width="300px">
        <DNT>
          **Setting**
        </DNT>
      </th>

      <th>
        <DNT>
          **Effects on data security**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`auditLog`](/docs/agents/net-agent/configuration/net-agent-configuration#log-auditLog)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        New Relicとの間で送受信されたすべてのデータを、auditlogログファイルと標準ログファイルの両方に記録します。
      </td>
    </tr>

    <tr>
      <td>
        [`highSecurity`](/docs/agents/net-agent/configuration/net-agent-configuration#high_security_mode)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        [高セキュリティ モード](#restricted)を有効にするには、これを`true`に設定し、 [New Relic で高セキュリティを有効にします](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled)。これにより、New Relic に送信できる情報が制限されます。
      </td>
    </tr>

    <tr>
      <td>
        [`proxy.host`](/docs/agents/net-agent/configuration/net-agent-configuration#proxy-host)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        プロキシの中には、デフォルトで安全性の低いプロトコルであるHTTPを使用するものがあります。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#agent-attributes-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、 [属性](/docs/agents/net-agent/attributes/net-agent-attributes) を New Relic に送信しています。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/net-agent/configuration/net-agent-configuration#agent-attributes-exclude)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        トランザクション追跡で New Relic に送信したく**ない**特定の属性キーがある場合は、 `attributes.exclude`を使用してそれらを識別します。これにより、New Relic に送信される情報が制限されます。

        `attributes.exclude`を使用してこれらの機密性の高い属性を除外するか、New Relic に情報を送信する必要があるかを検討してください。

        * `request.referer`: リクエストのリファラーを削除します。
        * `request.uri`: トランザクションの受信リクエストのパスを削除します。
      </td>
    </tr>

    <tr>
      <td>
        [`recordSql`](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-recordSql)

        _ストリング_
      </td>

      <td>
        デフォルト： `obfuscated`

        デフォルトでは、 `recordSql`は`obfuscated`に設定されており、数値リテラルと文字列リテラルが取り除かれます。

        * エージェントにクエリ情報をキャプチャさせたくない場合は、これを`off`に設定します。
        * エージェントがすべてのクエリ情報を元の形式でキャプチャするようにする場合は、これを`raw`に設定します。
        * [高セキュリティ モード](#restricted)を有効にすると、これは自動的に`obfuscated`に設定されます。
      </td>
    </tr>

    <tr>
      <td>
        [`stripExceptionMessages`](/docs/agents/net-agent/configuration/net-agent-configuration#strip_exception_messages)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        デフォルトでは、これは`false`に設定されています。これは、エージェントがすべての例外からのメッセージを New Relic コレクターに送信することを意味します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`true`に変更され、エージェントは例外からメッセージを削除します。
      </td>
    </tr>

    <tr>
      <td>
        [`customEvents.enabled`](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#net-att)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、エージェントは`RecordCustomEvent()`経由でカスタム イベント API に送信されたイベントを記録します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`false`に設定されます。
      </td>
    </tr>
  </tbody>
</table>
