---
title: APMエージェントのセキュリティJava
tags:
  - Agents
  - Java agent
  - Getting started
metaDescription: Increasing levels of security allow you to customize how your New Relic Java agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

New Relic Java エージェントのデフォルトのセキュリティ設定では、APM データ に対して、データのプライバシーを確保し、New Relic が受け取る情報の種類を制限するための [セキュリティが自動的に提供されます。これらの設定を変更しなければならないビジネス上の理由があるかもしれません。](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)

[](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)

[New Relic が受け取る情報を制限したい場合は、](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)[高セキュリティ モード](#restricted)を有効にします。高セキュリティ モードまたはデフォルト設定がビジネス ニーズに適合しない場合は、[カスタム](#custom)設定を適用できます。

New Relicのセキュリティ対策の詳細については、[セキュリティとプライバシーのドキュメント](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic)を参照、または[New Relicのセキュリティウェブサイト](https://newrelic.com/security)を閲覧してください。

## デフォルトのセキュリティ設定 [#default]

<Callout variant="caution">
  スタックトレースは難読化できないため、SQL クエリなどの機密情報が含まれている可能性があります。エラーの無視についての詳細は、 [Javaエージェントのエラー設定](/docs/agents/java-agent/configuration/java-agent-error-configuration) を参照してください。
</Callout>

デフォルトでは、New Relic Java エージェントが以下の潜在的な機密データをどのように扱うかは以下の通りです。

* リクエストパラメーター。エージェントは、HTTPリクエストパラメータをキャプチャしません。
* [HTTPS](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ssl): エージェントは HTTPS を使用して New Relic と通信します。
* [SQL](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-record_sql) : エージェントは SQL 記録を`obfuscated`に設定します。これにより、機密性の高い数値および文字列リテラル値が削除されます。

## ハイセキュリティモードの設定 [#restricted]

[高セキュリティ モードを有効にする](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security)と、[デフォルト設定](#default)がロックされ、ユーザーは変更できなくなります。加えて：

* エージェントはメッセージキューのパラメータを収集しません。
* [カスタムイベント](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#java-att) を作成することはできません。
* Custom Instrumentation Editor を使用して、 [カスタムインストルメンテーションを実装することはできません。](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui)
* [](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui)
* [](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui)[ユーザー属性を収集することはできません](/docs/insights/insights-data-sources/custom-attributes/collect-user-attributes-java).

## カスタムセキュリティ設定 [#custom]

<Callout variant="caution">
  セキュリティ設定をカスタマイズすると、アプリケーションのセキュリティに影響を与える可能性があります。
</Callout>

デフォルトまたは高セキュリティ モードとは異なるセキュリティ設定が必要な場合は、これらの設定をカスタマイズできます。

* [Javaエージェント設定ファイル](/docs/agents/java-agent/configuration/java-agent-configuration-config-file)
* [カスタムアトリビュート](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java#NRaddCustomParameter)
* [JavaエージェントAPI](/docs/agents/java-agent/custom-instrumentation/java-agent-api)

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
        [`audit_mode`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-audit_mode)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        デフォルトでは、Java エージェントは New Relic に送信されたすべてのデータをエージェントログファイルに記録しません。

        これを`true`に設定すると、エージェントは New Relic コレクターに送信されたデータをエージェント ログ ファイルに記録します。その後、エージェントのログ ファイルを確認して、機密情報が含まれているかどうかを確認することで、エージェントが送信する情報を評価できます。
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        [高セキュリティ モード](#restricted)を有効にするには、これを`true`に設定し、 [New Relic で高セキュリティを有効にします](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled)。これにより、New Relic に送信できる情報が制限されます。
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_user)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        プロキシの中には、デフォルトで安全性の低いプロトコルであるHTTPを使用するものがあります。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        [カスタム インスツルメンテーション エディター](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui#options)のデフォルト: `false`

        デフォルトでは、カスタム インストルメンテーション エディターを使用してインストルメント化されたメソッドを除き、[属性を](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java)New Relic に送信します。New Relic に属性を送信したくない場合は、これを`false`に設定します。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-exclude)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        トランザクション追跡で New Relic に送信したく**ない**特定の属性キーがある場合は、 `attributes.exclude`を使用してそれらを識別します。これにより、New Relic に送信される情報が制限されます。

        `attributes.exclude`を使用してこれらの機密性の高い属性を除外するか、New Relic に情報を送信する必要があるかを検討してください。

        * `request.headers.*`: すべてのリクエスト ヘッダーを削除します。

          ( `cookie`や`authorization`などの機密データを含む HTTP ヘッダーは収集されないことに注意してください。)

        * `response.headers.*`: すべての応答ヘッダーを削除します。

        * `request_uri`: トランザクションの受信リクエストのパスを削除します。
      </td>
    </tr>

    <tr>
      <td>
        [`log_sql`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-log_sql)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        デフォルトでは、 `record_sql`を使用して New Relic にクエリを送信します。クエリをエージェント ログ ファイルに記録し、New Relic に送信する場合は、これを`true`に設定します。
      </td>
    </tr>

    <tr>
      <td>
        [`record_sql`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-record_sql)

        _ストリング_
      </td>

      <td>
        デフォルト： `obfuscated`

        デフォルトでは、 `record_sql`は`obfuscated`に設定されており、数値リテラルと文字列リテラルが取り除かれます。

        * エージェントにクエリ情報をキャプチャさせたくない場合は、これを`off`に設定します。
        * エージェントがすべてのクエリ情報を元の形式でキャプチャするようにする場合は、これを`raw`に設定します。
        * [高セキュリティ モード](#restricted)を有効にすると、これは自動的に`obfuscated`に設定されます。
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#strip_exception_messages)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        デフォルトでは、これは`false`に設定されています。これは、エージェントがすべての例外からのメッセージを New Relic コレクターに送信することを意味します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`true`に変更され、エージェントは例外からメッセージを削除します。

        高セキュリティ モードを使用していないが、 [許可リスト](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#strip_exception_messages_whitelist)内の例外を除くすべての例外からメッセージを削除したい場合は、これを`true`に設定します。
      </td>
    </tr>

    <tr>
      <td>
        [`custom_insights_events.enabled`](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#java-att)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、エージェントは`recordCustomEvent()`経由で Event API に送信されたイベントを記録します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`false`に設定されます。
      </td>
    </tr>
  </tbody>
</table>
