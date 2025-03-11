---
title: Record_ml_event (Python エージェント API)
type: apiDoc
shortDescription: クエリに使用する機械学習カスタム イベントを記録します。
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a machine learning event for use in querying.'
freshnessValidatedDate: '2023-09-13T00:00:00.000Z'
translationType: machine
---

## 構文

```py
newrelic.agent.record_ml_event(event_type, params, application=None)
```

クエリに使用する機械学習イベントを記録します。

## 要件

Python エージェント バージョン 9.1.0以上。

## 説明

これにより、New Relic UI で表示およびクエリできる機械学習[イベント](/docs/data-apis/understand-data/new-relic-data-types/#event-data)が記録されます。これを監視対象トランザクションのコンテキスト外で使用する場合は、application パラメータを使用します。

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
        必須。`event_type`は機械学習イベントの名前 (またはタイプ) を定義し、文字列である必要があります。トランザクションに対して記録された追加の属性は、機械学習イベントに追加されません。
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _ディクト_
      </td>

      <td>
        必須。機械学習属性をイベントに付加します。`params`として渡された属性のみが追加されます。トランザクションに対して記録された追加の属性は、機械学習イベントに追加されません。
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

### バックグラウンドタスクで機械学習イベントを記録する [#bg-task-event]

バックグラウンド タスクに関連付けられた機械学習イベントを記録する例を次に示します。

```py
@newrelic.agent.background_task() 
def bg_task(): 
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_ml_event('your_event_type', {'param1':'value1'}, application)
```
