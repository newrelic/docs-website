---
title: 'APMエージェントのセキュリティ:Go'
tags:
  - Agents
  - Go agent
  - Get started
metaDescription: How to customize the security levels for data sent to New Relic from your Go app.
freshnessValidatedDate: never
translationType: machine
---

New Relic Go エージェントのデフォルトのセキュリティ設定は、 [APM データのセキュリティを](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)自動的に提供して、データのプライバシーを確保し、New Relic が受け取る情報の種類を制限します。ビジネス上の理由により、これらの設定を変更する必要がある場合があります。

New Relic が受け取る情報を制限したい場合は、[高セキュリティ モード](#restricted)を有効にします。高セキュリティ モードまたはデフォルト設定がビジネス ニーズに適合しない場合は、[カスタム](#custom)設定を適用できます。

New Relicのセキュリティ対策の詳細については、[セキュリティとプライバシーのドキュメント](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic)を参照、または[New Relicのセキュリティウェブサイト](https://newrelic.com/security)を閲覧してください。

## デフォルトのセキュリティ設定 [#default]

デフォルトでは、New Relic Go エージェントが以下のような潜在的な機密データをどのように扱うかを示しています。

* リクエストパラメーター。エージェントは、HTTPリクエストパラメータをキャプチャしません。
* [HTTPS](/docs/agents/go-agent/instrumentation/go-agent-configuration#use-tls): エージェントは HTTPS を使用して New Relic と通信します。

## ハイセキュリティモードの設定 [#restricted]

[高セキュリティ モードを有効にする](/docs/agents/go-agent/instrumentation/go-agent-configuration#high_security)と、[デフォルトのセキュリティ設定が](#default)ロックされ、ユーザーは変更できなくなります。加えて：

* [カスタムイベント](/docs/agents/go-agent/features/create-custom-events-insights-go) を作成することはできません。
* エージェントは[エラーから例外メッセージを](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#error-reporting)取り除きます。
* エージェントはデータベース セグメントから`QueryParameters`を削除します。

## カスタムセキュリティ設定 [#custom]

<Callout variant="caution">
  セキュリティ設定をカスタマイズすると、アプリケーションのセキュリティに影響を与える可能性があります。
</Callout>

デフォルトまたは高セキュリティ モードとは異なるセキュリティ設定が必要な場合は、これらの設定をカスタマイズできます。

<table>
  <thead>
    <tr>
      <th width="330px">
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
        [`HighSecurity`](/docs/agents/go-agent/instrumentation/go-agent-configuration#high_security)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        [高セキュリティ モードを](#restricted)有効にするには、これを`true`に設定し、[高セキュリティ (V2) を有効にします](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled)。これにより、New Relic に送信できる情報が制限されます。
      </td>
    </tr>

    <tr>
      <td>
        [`Attributes.Enabled`](https://github.com/newrelic/go-agent/blob/master/config.go#L220)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、[いくつかの属性](/docs/agents/go-agent/instrumentation/go-agent-attributes#attributes)を New Relic に送信します。これらのデフォルト属性を New Relic に送信したくない場合は、 `Attributes.Enabled`を`false`に設定します。
      </td>
    </tr>

    <tr>
      <td>
        [`Attributes.Exclude`](/docs/agents/go-agent/instrumentation/go-agent-attributes#turn-attributes-on-off)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        トランザクション追跡で New Relic に送信したく**ない**特定の属性キーがある場合は、 `Attributes.Exclude`を使用してそれらを識別します。これにより、New Relic に送信される情報が制限されます。

        各属性の記録を無効にする例については、「 [Go agent attributes」のページ（](/docs/agents/go-agent/instrumentation/go-agent-attributes#attributes) ）にある各属性の説明を参照してください。
      </td>
    </tr>

    <tr>
      <td>
        [`CustomInsightsEvents.Enabled`](/docs/agents/go-agent/instrumentation/go-agent-configuration#custom-insights-events-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、エージェントは[`RecordCustomEvent`](/docs/agents/go-agent/features/create-custom-events-insights-go)を使用して Event API に送信されたイベントを記録します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`false`に設定されます。
      </td>
    </tr>
  </tbody>
</table>
