---
title: 高度な機能
metaDescription: 'Manually record session replays, disable automatic session replay tracking and use nerd graph to configure replay settings.'
freshnessValidatedDate: '2024-12-19T00:00:00.000Z'
translationType: machine
---

## セッションリプレイを手動で記録する [#manual-replays]

必要に応じて、 APIメソッドを使用してセッションリプレイをプログラム的に `force` して、記録を開始または停止することができます。 以下に使用例をいくつか示します。

* ユーザーがインタラクション記録をオプトインできるようにします。 たとえば、「パフォーマンス分析のためにこのセッションを記録することを許可しますか?」というポップアップが表示された場合、 ユーザーは以下に同意します:

  1. 録音を開始するには、 `newrelic.recordReplay()`を呼び出します。
  2. セッションが完了したら、または同意が取り消されたら、 `newrelic.pauseReplay()`を使用してデータのキャプチャを停止します。

* 次のような特定の基準に基づいてセッションを記録します。

  * 製品のチェックアウトフローなど、特定の URL 上のセッションのみの記録を開始します。
  * `/billing`や`/health-records`などの機密ページの記録を停止します。

手順については API ドキュメントを参照してください。

* [`newrelic.recordReplay`](/docs/browser/new-relic-browser/browser-apis/recordReplay/)
* [`newrelic.pauseReplay`](/docs/browser/new-relic-browser/browser-apis/pauseReplay/)

## セッションリプレイの自動追跡を無効にする [#auto-replays]

API設定オプション`autoStart`を`false`に設定すると、サンプリングされた場合でもセッションリプレイが自動的に開始されないようにすることができます。 これは、自動サンプリングよりも特定のアクションを優先する必要があるシナリオで役立ちます。 たとえば、HIPAA 準拠のページなど、機密性の高いページではセッションリプレイを自動的に実行したくない場合があります。 このような場合、ユーザーの同意を得た後（アプリが`.start()`を呼び出す後）、 `.start()` API を使用してリプレイ機能を手動でトリガーできます。

`autoStart: false`を設定すると、エージェントは`.start()`使用して明示的に呼び出されるまで初期化を延期するように指示されます。 これにより、バックエンドが記録用にアプリケーションをサンプリングした場合でも、セッションリプレイはまったく作成されなくなります。

<Callout variant="important">
  `.start()`を呼び出しても、セッションリプレイが記録されることは保証されません。 モジュールのインポートとサンプリング結果の評価をこの時点まで遅らせるだけです。 強制的に録音する必要がある場合は、 [「セッションリプレイを手動で録音する」](#manual-replays)を参照してください。
</Callout>

この API の使用を開始するには、 [`newrelic.start`](/docs/browser/new-relic-browser/browser-apis/start/)を参照してください。

## Nerdgraphを使用してリプレイ設定を構成する [#nerdgraph-mutation]

を使用する代わりに、[ NerdGraphAPI](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) を使用してセッションリプレイ設定を構成できます。UIこの方法は、複数のbrowserにサンプリング レートを適用するなど、一括変更が必要な場合に役立ちます。

デフォルト設定で新しいbrowserアプリケーションを作成するためのミューテーションと変数の例を次に示します。

<table>
  <thead>
    <tr>
      <th>
        突然変異
      </th>

      <th>
        変数
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ```graphql
        mutation SessionReplayConfigUpdate($guid: EntityGuid!, $settings: AgentApplicationSettingsUpdateInput!) {
          agentApplicationSettingsUpdate(guid: $guid, settings: $settings) {
            browserSettings {
              sessionReplay {
                blockSelector
                errorSamplingRate
                maskTextSelector
                enabled
                collectFonts
                inlineImages
                inlineStylesheet
                samplingRate
                maskAllInputs
                maskInputOptions {
                  color
                  date
                  datetimeLocal
                  email
                  month
                  number
                  range
                  search
                  select
                  tel
                  text
                  textArea
                  time
                  url
                  week
                }
              }
            }
            errors {
              field
              errorClass
              description
            }
          }
        }
        ```
      </td>

      <td>
        ```json
        {
          "sessionReplay": {
            "enabled": true,
            "collectFonts": true,
            "blockSelector": ".private-fields",
            "maskTextSelector": "*",
            "inlineStylesheet": false,
            "maskAllInputs": true,
            "maskInputOptions": {
              "color": true,
              "date": true,
              "textArea": true
            },
            "samplingRate": 9.99,
            "errorSamplingRate": 1.11
          }
        }
        ```
      </td>
    </tr>
  </tbody>
</table>