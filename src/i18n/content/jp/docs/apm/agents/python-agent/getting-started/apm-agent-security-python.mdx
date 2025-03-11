---
title: APMエージェントのセキュリティパイソン
tags:
  - Agents
  - Python agent
  - Getting started
metaDescription: How to customize the security levels for data sent to New Relic from your Python app.
freshnessValidatedDate: never
translationType: machine
---

Python エージェントのデフォルトのセキュリティ設定は、データのプライバシーを確保し、取り込む情報の種類を制限するために[、データにセキュリティを](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security)自動的に提供します。ビジネス上の理由により、これらの設定を変更する必要がある場合があります。

取り込む情報を制限したい場合は[、高セキュリティ モード](#restricted)を有効にすることができます。高セキュリティ モードまたはデフォルト設定がビジネス ニーズに適合しない場合は、[カスタム](#custom)設定を適用できます。

セキュリティ対策の詳細については、 [セキュリティおよびプライバシーに関する文書](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) をご覧いただくか、 [New Relic セキュリティウェブサイト](https://newrelic.com/security) をご覧ください。

## デフォルトのセキュリティ設定 [#default]

デフォルトでは、Pythonエージェントが以下のような潜在的なセンシティブなデータをどのように扱うかを示しています。

* [リクエストパラメーター](/docs/agents/python-agent/attributes/python-attribute-examples#ex_req_params): エージェントは HTTP リクエストパラメーターをキャプチャしません。
* [SQL](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-sql) : エージェントは SQL 記録を`obfuscated`に設定します。これにより、機密性の高い数値および文字列リテラル値が削除されます。

## ハイセキュリティモードの設定 [#restricted]

[高セキュリティ モードを有効にする](/docs/agents/python-agent/installation-configuration/python-agent-configuration#high_security)と、[デフォルト設定](#default)がロックされ、ユーザーは変更できなくなります。加えて：

* エージェントは [メッセージキューのパラメータを収集しません](/docs/agents/python-agent/api/python-agent-api-guide#messaging) 。
* [カスタムイベント](/docs/agents/python-agent/python-agent-api/record_custom_event) を作成することはできません。
* エージェントは[エラーから例外メッセージを](/docs/agents/python-agent/installation-configuration/python-agent-configuration#strip_exception_messages_enabled)取り除きます。

## カスタムセキュリティ設定 [#custom]

<Callout variant="caution">
  セキュリティ設定をカスタマイズすると、アプリケーションのセキュリティに影響を与える可能性があります。
</Callout>

デフォルトまたは高セキュリティ モードとは異なるセキュリティ設定が必要な場合は、これらの設定をカスタマイズできます。

* [Pythonエージェント設定ファイル](/docs/agents/python-agent/installation-configuration/python-agent-configuration)
* [カスタムアトリビュート](/docs/agents/python-agent/python-agent-api/add_custom_attribute)
* [PythonエージェントAPI](/docs/agents/python-agent/api/python-agent-api-guide)

<Callout variant="tip">
  これらの設定の一部は、環境変数を使って変更することができます。完全なリストは [Pythonエージェントの環境変数](/docs/agents/python-agent/installation-configuration/python-agent-configuration#environment-variables) を参照してください。
</Callout>

<table>
  <thead>
    <tr>
      <th width="340px">
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
        [`audit_log_file`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#audit-log-file)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        これを使用して監査ログファイルの名前を設定すると、エージェントは監視対象のプロセスとデータコレクタの間でやり取りされるメッセージの詳細を記録します。

        そして、エージェントがコレクターに送信する情報に機密情報が含まれているかどうかを評価することができます。
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#high_security)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        [高セキュリティ モード](#restricted)を有効にするには、これを`true`に設定し、[高セキュリティを有効にします](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled)。これにより、送信できる情報が制限されます。
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#proxy)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        プロキシの中には、デフォルトで安全性の低いプロトコルであるHTTPを使用するものがあります。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-attributes-enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、[属性](/docs/agents/python-agent/attributes/enabling-disabling-attributes-python)を送信しています。属性を送信したくない場合は、これを`false`に設定します。
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-attributes-exclude)

        _ストリング_
      </td>

      <td>
        デフォルトでは(none)

        トランザクション追跡で送信したく**ない**特定の属性キーがある場合は、 `attributes.exclude`を使用して識別します。これにより、送信される情報が制限されます。

        `attributes.exclude`を使用してこれらの機密性の高い属性を除外するか、情報を送信する必要があるかを検討してください。

        * `request.headers.*`: すべてのリクエスト ヘッダーを削除します。

          ( `cookie`や`authorization`などの機密データを含む HTTP ヘッダーは収集されないことに注意してください。)

        * `response.headers.*`: すべての応答ヘッダーを削除します。
      </td>
    </tr>

    <tr>
      <td>
        [`custom_insights_events.enabled`](/docs/agents/python-agent/configuration/python-agent-configuration#custom-insights-events-settings)

        _ブール値_
      </td>

      <td>
        デフォルト： `true`

        デフォルトでは、エージェントは[`record_custom_event()`](/docs/agents/python-agent/api/python-agent-api-guide#record_custom_event)経由で Event API に送信されたイベントを記録します。[高セキュリティ モード](#restricted)を有効にすると、これは自動的に`false`に設定されます。
      </td>
    </tr>

    <tr>
      <td>
        [`transaction_tracer.record_sql`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-sql)

        _ストリング_
      </td>

      <td>
        デフォルト： `obfuscated`

        デフォルトでは、 `transaction_tracer.record_sql`は`obfuscated`に設定されており、数値リテラルと文字列リテラルが取り除かれます。

        * エージェントにクエリ情報をキャプチャさせたくない場合は、これを`off`に設定します。
        * エージェントがすべてのクエリ情報を元の形式でキャプチャするようにする場合は、これを`raw`に設定します。
        * [高セキュリティ モード](#restricted)を有効にすると、これは自動的に`obfuscated`に設定されます。
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#strip_exception_messages_enabled)

        _ブール値_
      </td>

      <td>
        デフォルト： `false`

        [高セキュリティ モード](#restricted)を有効にすると、これは自動的に`true`に設定されます。高セキュリティ モードを使用していないが、 [許可リスト](/docs/agents/python-agent/configuration/python-agent-configuration#strip_exception_messages_whitelist)内の例外を除くすべての例外からメッセージを削除したい場合は、これを`true`に設定します。
      </td>
    </tr>
  </tbody>
</table>
