---
title: AJAX 데이터 수집 문제 해결
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing AJAX data for your browser app.
freshnessValidatedDate: never
translationType: machine
---

## 문제

브라우저 앱에 대한 [AJAX 데이터](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls) 가 표시되지 않습니다.

## 해결책

[<InlinePopover type="browser" />](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation)사용하여 로그를 추가하고 다른 [Pro 기능](/docs/browser/new-relic-browser/browser-pro-features) 에 대한 데이터를 올바르게 수집하는 경우 다음 단계를 따르세요.

<Steps>
  <Step>
    ## 페이지가 과학적인지 확인하세요 [#verify-page-intrum]

    XMLHttpRequest를 사용하는 경우 브라우저의 개발자 콘솔을 사용하여 페이지가 올바르게 집계되었는지 확인하세요. 콘솔에 `XMLHttpRequest` 및/또는 `fetch` 입력합니다. 계측에 실패하면 다음과 같은 메시지가 표시됩니다.

    ```js
    // XMLHttpRequest
    ƒ XMLHttpRequest() { [native code] }
    ```

    다른 것이 보인다면 검증이 성공한 것입니다.
  </Step>

  <Step>
    ## AJAX 계측이 활성화되어 있는지 확인하세요 [#verify-instrum]

    라이트 에이전트에는 AJAX 계측이 포함되지 않습니다.

    AJAX 계측을 확인하려면:

    1. 브라우저 콘솔 개발자 도구를 열고 `newrelic.initializedAgents` 객체를 확인하세요. 이 개체에는 페이지에서 실행 중인 모든 에이전트에 대한 항목이 들어 있습니다. 일반적으로 한 페이지에는 에이전트가 한 명만 있습니다.

    2. 초기화된 에이전트 객체에서 `runtime` 객체를 검사합니다. 이 객체에는 `loaderType` 과 같은 실행 중인 에이전트에 대한 정보가 포함되어 있습니다. `loaderType` `lite` 인 경우, 사용 중인 에이전트에 AJAX 계측이 포함되지 않습니다.

    3. `loaderType` 이 `lite` 이 아닌 경우 초기화된 에이전트에서 `config` 및 `features` 개체를 확인할 수도 있습니다.

       * `config` 객체는 `enabled` 부울 값을 갖는 `ajax` 객체를 포함하여 에이전트의 런타임 설정을 포함합니다.
       * `features` 객체에는 에이전트가 초기화한 각 기능에 대한 항목이 포함되어야 하며 여기에는 `ajax` 항목도 포함됩니다.

    4. 이 AJAX 개체에 `true` 과 `featAggregate` 항목의 부울 `enabled` 이 포함되어 있는지 확인하세요.

    이러한 항목 중 하나라도 사실이 아니면 브라우저 엔터티의 뉴렐릭 설정이 변경되었거나 HTML에 복사하여 붙여넣은 `NREUM.init` 개체가 수동으로 변경되어 AJAX 시스템이 초기화되지 않았을 수 있습니다.

    <Callout variant="important">
      `newrelic.initializedAgents` 오래되었거나 지원되지 않는 에이전트 버전을 사용하지 않는 한, 페이지에서 에이전트의 존재 여부를 확인하는 데 허용되는 속성입니다.
    </Callout>
  </Step>

  <Step>
    ## 거부 목록 확인 설정 [#verify-deny-list]

    [AjaxRequest 이벤트를](/attribute-dictionary/?event=AjaxRequest) 생성할 때 특정 도메인과 경로를 무시하도록 에이전트를 구성할 수 있습니다.

    브라우저의 개발자 콘솔에서 `newrelic.init` 실행하여 현재 AJAX 거부 목록 규칙을 확인하세요. `deny_list` 라는 배열이 포함된 `ajax` 속성을 찾습니다.

    거부 목록에 익숙하지 않은 항목이 있거나 AJAX 호출이 필터링되도록 하는 항목이 있으면 [AjaxRequest 이벤트 필터링](/docs/browser/new-relic-browser/configuration/filter-ajax-request-events/) 설명서를 검토하여 추가 지침을 확인하세요.
  </Step>

  <Step>
    ## 네트워크 접속 확인 [#verify-network-access]

    객체가 제대로 HTML로 변환된 경우 브라우저의 개발자 도구에서 네트워크 트래픽을 모니터링하는 동안 AJAX 호출을 트리거해 보세요. 최대 1분 정도 기다린 후 `xhr` 매개변수를 사용하여 `bam.nr-data.net/jserrors` 에 대한 호출을 찾습니다. 통화가 실패하면 네트워크 문제를 확인하세요. 또는 `bel.7;2` 으로 시작하는 페이로드가 있는 `bam.nr-data.net/events` 에 대한 요청을 찾으세요.

    이 호출이 표시되지 않거나 네트워크 액세스와 관련 없는 오류로 인해 실패하거나 성공했지만 여전히 데이터가 표시되지 않는 경우 문제 해결 설명서를 계속 진행하세요.
  </Step>

  <Step>
    ## JSONP가 요청에 어떤 영향을 미치는지 검토하세요 [#jsonp]

    요청이 [JSONP를](https://en.wikipedia.org/wiki/JSONP) 사용하는 경우 해당 요청은 [AJAX UI 페이지](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls) 에 나타나지 않습니다.

    그러나 [세션 트레이스](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle) 내에서는 자산으로 볼 수 있습니다.

    SPA 모니터링을 사용하는 경우 <DNT>**Page views**</DNT> 페이지의 <DNT>**AJAX**</DNT> 탭에서 볼 수 있습니다.

    JSONP를 인식하기 위한 요구 사항:

    * 각 JSONP 요청은 고유한 콜백 함수를 사용해야 합니다. jQuery와 같은 가장 인기 있는 라이브러리는 각 요청에 대해 동적으로 고유한 콜백 함수를 생성합니다.
    * New Relic에서 인식되려면 콜백 함수 이름이 포함된 쿼리 문자열의 이름을 `"callback"` 또는 `"cb"` 로 지정해야 합니다. 이는 가장 널리 사용되는 라이브러리의 기본 동작입니다.
  </Step>
</Steps>

<Callout variant="tip">
  이러한 문제 해결 단계 중 하나라도 실패하거나 AJAX 데이터 누락 문제가 계속 발생하는 경우 [support.newrelic.com](https://support.newrelic.com) 에서 지원을 받으십시오.
</Callout>