---
title: 고급 기능
metaDescription: 'Manually record session replays, disable automatic session replay tracking and use nerd graph to configure replay settings.'
freshnessValidatedDate: '2024-12-19T00:00:00.000Z'
translationType: machine
---

## 세션 수동 녹화 리플레이 [#manual-replays]

필요한 경우 프로그래밍 방식으로 세션 리플레이를 `force` 하여 API 메서드를 사용하여 녹화를 시작하거나 중지할 수 있습니다. 다음은 몇 가지 사용 사례입니다.

* 사용자가 상호작용 녹음을 선택하도록 허용합니다. 예를 들어 &quot;성능 분석을 위해 이 세션을 기록하도록 허용하시겠습니까?&quot;라는 팝업이 표시된다면, 사용자는 다음에 동의합니다.

  1. 녹음을 시작하려면 `newrelic.recordReplay()` 호출하세요.
  2. 세션이 완료되거나 동의가 철회되면 `newrelic.pauseReplay()` 사용하여 데이터 캡처를 중지합니다.

* 다음과 같은 특정 기준에 따라 세션을 녹화합니다.

  * 제품 결제 흐름과 같은 특정 URL의 세션에 대해서만 녹화를 시작합니다.
  * `/billing` 또는 `/health-records` 과 같은 민감한 페이지에 대한 기록을 중지합니다.

자세한 내용은 API 설명서를 참조하세요.

* [`newrelic.recordReplay`](/docs/browser/new-relic-browser/browser-apis/recordReplay/)
* [`newrelic.pauseReplay`](/docs/browser/new-relic-browser/browser-apis/pauseReplay/)

## 자동 세션 리플레이 추적 비활성화 [#auto-replays]

API 설정 옵션 `autoStart` 을 `false`로 설정하면 샘플링된 경우에도 세션 리플레이가 자동으로 시작되지 않도록 할 수 있습니다. 이는 자동 샘플링보다 특정 작업의 우선 순위를 지정해야 하는 시나리오에 유용합니다. 예를 들어 세션 리플레이가 HIPAA 준수 페이지와 같은 민감한 페이지에서 자동으로 실행되는 것을 원하지 않을 수 있습니다. 이러한 경우에는 사용자 동의를 얻은 후(및 앱에서 `.start()` 호출) `.start()` API를 사용하여 재생 기능을 수동으로 트리거할 수 있습니다.

`autoStart: false` 을 설정하면 에이전트가 `.start()` 사용하여 명시적으로 호출될 때까지 초기화를 연기하도록 지시합니다. 이렇게 하면 백앤드가 녹음을 위해 샘플링을 하더라도 세션 리플레이가 전혀 생성되지 않습니다.

<Callout variant="important">
  `.start()` 호출한다고 해서 세션 리플레이가 녹화된다는 보장은 없습니다. 이 시점까지는 단순히 모듈 가져오기와 샘플링 결과의 평가를 지연시킬 뿐입니다. 강제로 녹화해야 하는 경우 [세션 리플레이를 수동으로 녹화하는 방법을](#manual-replays) 참조하세요.
</Callout>

이 API를 사용하려면 [`newrelic.start`](/docs/browser/new-relic-browser/browser-apis/start/) 참조하세요.

## Nerdgraph를 사용하여 재생 설정 구성 [#nerdgraph-mutation]

를 사용하는 대신 [NerdGraph API](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) 사용하여 세션 리플레이 설정을 구성할 수 UI 있습니다. 이 방법은 여러 브라우저 모임에 샘플링 비율을 적용하는 등 대량 변경이 필요한 경우에 유용합니다.

다음은 기본 설정으로 새 브라우저 애플리케이션을 생성하기 위한 변형 및 변수의 예입니다.

<table>
  <thead>
    <tr>
      <th>
        돌연변이
      </th>

      <th>
        변수
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