---
title: record_custom_event (PythonエージェントAPI)
type: apiDoc
shortDescription: クエリに使用するカスタムイベントを記録
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a custom event for use in querying.'
freshnessValidatedDate: never
translationType: machine
---

## 構文

```py
newrelic.agent.record_custom_event(event_type, params, application=None)
```

クエリに使用するカスタムイベントを記録

## 要件

Pythonエージェントのバージョン2.60.0.46以上。

## 説明

これにより、New Relic UI で表示およびクエリできるカスタム[イベントが](/docs/data-apis/understand-data/new-relic-data-types/#event-data)記録されます。これを監視対象トランザクションのコンテキスト外で使用する場合は、application パラメータを使用します。

カスタム機械学習イベントの詳細については、 [record_ml_event ページを](/docs/apm/agents/python-agent/python-agent-api/recordmlevent-python-agent-api)参照してください。

<Callout variant="important">
  `event_type`と`params`の制限と制限については、 [「制限と制限された文字」](/docs/data-apis/custom-data/custom-events/apm-report-custom-events-attributes/#limits)および[「予約語」を](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words)参照してください。
</Callout>

<Callout variant="important">
  [高セキュリティ モード](/docs/apm/agents/python-agent/getting-started/apm-agent-security-python/#restricted)が有効になっている場合、この設定は無効になります。
</Callout>

## パラメーター

<table>
  <thead>
    <tr>
      <th width="25%">
        パラメータ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `event_type`

        _ストリング_
      </td>

      <td>
        必須。 `event_type`は、カスタムイベントの名前（またはタイプ）を定義し、文字列である必要があります。トランザクション用に記録された追加の属性は、カスタムイベントに追加されません。
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _ディクト_
      </td>

      <td>
        必須。イベントにカスタム属性を添付します。 `params`として渡された属性のみが追加されます。トランザクション用に記録された追加の属性は、カスタムイベントに追加されません。
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _物体_
      </td>

      <td>
        オプション。監視対象のトランザクションのコンテキスト外でイベントを記録する場合は、これを使用して呼び出しを特定のアプリケーション オブジェクトに関連付けます。アプリケーション オブジェクトは、 [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/)関数を使用して取得できます。
      </td>
    </tr>
  </tbody>
</table>

## 戻り値

なし。

## 例

### バックグラウンドタスクでカスタムイベントを記録 [#bg-task-event]

ここでは、バックグラウンドタスクに関連するカスタムイベントを記録する例を紹介します。

```py
@newrelic.agent.background_task() 
def bg_task(): 
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_custom_event('your_event_type', {'param1':'value1'}, application)
```

### killed-queryカスタムイベントの作成 [#event-example]

データベース・ロギング機能の中にkilled-queryカスタムイベントを作成する例です。

```PY
application = newrelic.agent.register_application(timeout=10)

def task_runner(): 
    event_type = "Killed_Query" 
    params = {'query_info':'select * from all_things;', 'killed_time': '2016-05-18 00:59:00', 'host': 'my_host'} 
    newrelic.agent.record_custom_event(event_type, params, application=application)
```
