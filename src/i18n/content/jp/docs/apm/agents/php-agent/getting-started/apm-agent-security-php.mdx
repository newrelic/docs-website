---
title: APMエージェントのセキュリティPHP
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: How to customize the security levels for data sent to New Relic from your PHP app.
freshnessValidatedDate: never
translationType: machine
---

[PHP エージェントのデフォルトのセキュリティ設定は、APM データ](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) のセキュリティを自動的に提供し、データのプライバシーを確保し、New Relic が受け取る情報の種類を制限します。ビジネス上の理由でこれらの設定を変更したい場合もあるでしょう。

New Relic が受け取る情報を制限したい場合は、[高セキュリティ モード](#restricted)を有効にします。高セキュリティ モードまたはデフォルト設定がビジネス ニーズに適合しない場合は、[カスタム](#custom)設定を適用できます。

New Relicのセキュリティ対策の詳細については、[セキュリティとプライバシーのドキュメント](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic)を参照、または[New Relicのセキュリティウェブサイト](https://newrelic.com/security)を閲覧してください。

## デフォルトのセキュリティ設定 [#default]

デフォルトでは、New Relic PHP エージェントが以下のような潜在的な機密データをどのように扱うかを示しています。

* [リクエストパラメーター](/docs/agents/php-agent/attributes/attribute-examples#ex_req_params): エージェントは HTTP リクエストパラメーターをキャプチャしません。
* [HTTPS](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-ssl): エージェントは HTTPS を使用して New Relic と通信します。
* [SQL](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql) : エージェントは SQL 記録を`obfuscated`に設定します。これにより、機密性の高い数値および文字列リテラル値が削除されます。

## ハイセキュリティモードの設定 [#restricted]

[高セキュリティ モードを有効にする](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-high-security)と、[デフォルト設定](#default)がロックされ、ユーザーは変更できなくなります。加えて：

* [カスタムイベント](/docs/agents/php-agent/php-agent-api/newrelic_record_custom_event) を作成することはできません。
* エージェントはエラーから例外メッセージを除去します。

## カスタムセキュリティ設定 [#custom]

<Callout variant="caution">
  セキュリティ設定をカスタマイズすると、アプリケーションのセキュリティに影響を与える可能性があります。
</Callout>

デフォルトまたは高セキュリティ モードとは異なるセキュリティ設定が必要な場合は、これらの設定をカスタマイズできます。

* [PHPエージェント設定ファイル](/docs/agents/php-agent/configuration/php-agent-configuration)
* [属性の設定](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attribute-settings)
* [PHPエージェントAPI](/docs/agents/php-agent/api-guides/php-agent-api-guide)

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
        [`newrelic.daemon.auditlog`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-auditlog)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        これを使って監査ログファイルの名前を設定すると、エージェントは監視対象のプロセスとNew Relicコレクターの間でやり取りされるメッセージの詳細を記録します。

        そして、エージェントがNew Relicコレクターに送信する情報に機密情報が含まれているかどうかを評価します。
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.high_security`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-high-security)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        [高セキュリティ モード](#restricted)を有効にするには、これを`true`に設定し、 [New Relic で高セキュリティを有効にします](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled)。これにより、New Relic に送信できる情報が制限されます。
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.daemon.proxy`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-proxy)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        プロキシの中には、デフォルトで安全性の低いプロトコルであるHTTPを使用するものがあります。
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.attributes.enabled`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attributes-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、[属性を](/docs/agents/php-agent/attributes/enabling-disabling-attributes)New Relic に送信します。New Relic に属性を送信したくない場合は、これを`false`に設定します。
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.attributes.exclude`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attributes-include-exclude)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        トランザクション追跡で New Relic に送信したく**ない**特定の属性キーがある場合は、 `newrelic.attributes.exclude`を使用してそれらを識別します。これにより、New Relic に送信される情報が制限されます。

        `newrelic.attributes.exclude`を使用してこれらの機密性の高い属性を除外するか、New Relic に情報を送信する必要があるかを検討してください。

        * `request.headers.*`: すべてのリクエスト ヘッダーを削除します。
        * `response.headers.*`: すべての応答ヘッダーを削除します。
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.custom_insights_events.enabled`](/docs/agents/python-agent/configuration/python-agent-configuration#custom-insights-events-settings)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、エージェントは[`newrelic_record_custom_event()`](/docs/agents/php-agent/php-agent-api/newrelic_record_custom_event)経由で Event API に送信されたイベントを記録します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`false`に設定されます。
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.transaction_tracer.record_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql)

        _ストリング_
      </td>

      <td>
        デフォルト： `obfuscated`

        デフォルトでは、 `newrelic.transaction_tracer.record_sql`は`obfuscated`に設定されており、数値リテラルと文字列リテラルが取り除かれます。

        * エージェントにクエリ情報をキャプチャさせたくない場合は、これを`off`に設定します。
        * エージェントがすべてのクエリ情報を元の形式でキャプチャするようにする場合は、これを`raw`に設定します。
        * [高セキュリティ モード](#restricted)を有効にすると、これは自動的に`obfuscated`に設定されます。
      </td>
    </tr>
  </tbody>
</table>
