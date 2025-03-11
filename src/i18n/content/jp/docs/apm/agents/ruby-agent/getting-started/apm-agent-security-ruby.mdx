---
title: APMエージェントのセキュリティRuby
tags:
  - Agents
  - Ruby agent
  - Getting started
metaDescription: Increasing levels of security you can customize for how your New Relic Ruby agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

New Relic Ruby エージェントのデフォルトのセキュリティ設定は、 [APM データのセキュリティを](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)自動的に提供して、データのプライバシーを確保し、New Relic が受け取る情報の種類を制限します。ビジネス上の理由により、これらの設定を変更する必要がある場合があります。

New Relic が受信する情報を制限したい場合は、高セキュリティ モードを有効にすることができます。高セキュリティ モードまたはデフォルト設定がビジネス ニーズに適合しない場合は、カスタム設定を適用できます。

New Relic のセキュリティ対策の詳細については、 [セキュリティおよびプライバシーに関する文書](/docs/security/new-relic-security/data-privacy/data-privacy-new-relic) をご覧いただくか、 [New Relic のセキュリティウェブサイト](https://newrelic.com/security) をご覧ください。

## デフォルトのセキュリティ設定 [#default]

デフォルトでは、New Relic Ruby エージェントが以下のような潜在的な機密データをどのように扱うかを示しています。

* [リクエストパラメーター](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#capture_params): エージェントは HTTP リクエストパラメーターをキャプチャしません。
* [HTTPS](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#ssl): エージェントは HTTPS を使用して New Relic と通信します。
* [SQL](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer-record_sql) : エージェントは SQL 記録を`obfuscated`に設定します。これにより、機密性の高い数値および文字列リテラル値が削除されます。

## ハイセキュリティモードの設定 [#restricted]

[高セキュリティ モードを有効にする](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#high_security)と、[デフォルト設定](#default)がロックされ、ユーザーは変更できなくなります。さらに、エージェントはメッセージ キュー パラメータを収集しません。

## カスタムセキュリティ設定 [#custom]

<Callout variant="caution">
  セキュリティ設定をカスタマイズすると、アプリケーションのセキュリティに影響を与える可能性があります。
</Callout>

デフォルトまたは高セキュリティ モードとは異なるセキュリティ設定が必要な場合は、これらの設定をカスタマイズできます。

* [Rubyエージェント設定ファイル](/docs/agents/ruby-agent/configuration/ruby-agent-configuration)
* [カスタムアトリビュート](/docs/agents/ruby-agent/attributes/enabling-disabling-attributes-ruby)
* [RubyエージェントAPI](/docs/agents/ruby-agent/api-guides/ruby-agent-api-guide)
* [カスタムインストゥルメンテーション](/docs/agents/ruby-agent/customization/ruby-custom-instrumentation)
* [カスタムSSL証明書](/docs/agents/ruby-agent/configuration/custom-ssl-certificates-ruby)

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
        [`audit_log.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#audit_log-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        デフォルトでは、エージェントは New Relic に送信されたすべてのデータをエージェントログファイルに記録しません。

        これを`true`に設定すると、次のようになります。

        * エージェントは、New Relic コレクターに送信されたデータをエージェントログファイルに記録します。エージェントが送信した情報を評価するには、エージェント・ログ・ファイルを確認して、機密情報が含まれていないかどうかを確認します。
        * すべてのエンドポイントはエージェント ログ ファイルに含まれます。[`audit_log.endpoints`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#audit_log-endpoints)を使用すると、特定のエンドポイントのみを監査ログに含めるように指定できます。
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#high_security)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        [高セキュリティ モード](#restricted)を有効にするには、これを`true`に設定し、 [New Relic で高セキュリティを有効にします](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled)。これにより、New Relic に送信できる情報が制限されます。
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#proxy_host)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        プロキシの中には、デフォルトで安全性の低いプロトコルであるHTTPを使用するものがあります。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#attributes-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、[属性を](/docs/agents/ruby-agent/attributes/enabling-disabling-attributes-ruby)New Relic に送信します。New Relic に属性を送信したくない場合は、これを`false`に設定します。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#attributes-exclude)

        _アレイ_
      </td>

      <td>
        デフォルト： `[]`

        トランザクション追跡で New Relic に送信したく**ない**特定の属性キーがある場合は、 `attributes.exclude`を使用してそれらを識別します。これにより、New Relic に送信される情報が制限されます。

        `attributes.exclude`を使用してこれらの機密性の高い属性を除外するか、またはこの情報を New Relic に送信する必要があるかを検討してください。

        * `request.headers.*`: すべてのリクエスト ヘッダーを削除します。

          ( `cookie`や`authorization`などの機密データを含む HTTP ヘッダーは収集されないことに注意してください。)

        * `response.headers.*`: すべての応答ヘッダーを削除します。
      </td>
    </tr>

    <tr>
      <td>
        [`transaction_tracer.record_sql`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer-record_sql)

        _ストリング_
      </td>

      <td>
        デフォルト： `obfuscated`

        デフォルトでは、 `transaction_tracer.record_sql`は`obfuscated`に設定されており、数値リテラルと文字列リテラルが取り除かれます。

        * エージェントにクエリ情報をキャプチャさせたくない場合は、これを`none`に設定します。
        * エージェントがすべてのクエリ情報を元の形式でキャプチャするようにする場合は、これを`raw`に設定します。
        * [高セキュリティ モード](#restricted)を有効にすると、これは自動的に`obfuscated`に設定されます。
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#strip_exception_messages-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト: `high_security`構成オプションの値

        デフォルトでは、これは`false`に設定されています。これは、エージェントがすべての例外からのメッセージを New Relic コレクターに送信することを意味します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`true`に変更され、エージェントは例外からメッセージを削除します。

        高セキュリティ モードを使用していないが、 [許可リスト](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#strip_exception_messages-whitelist)内の例外を除くすべての例外からメッセージを削除したい場合は、これを`true`に設定します。
      </td>
    </tr>
  </tbody>
</table>
