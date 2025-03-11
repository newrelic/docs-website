---
title: New Relic이 페이지 로드 시간을 측정하는 방법
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: Time-based explanation of how a web page load event happens and how that corresponds to browser's page load timing measurements.
freshnessValidatedDate: never
translationType: machine
---

이 문서에서는 다음을 설명합니다.

* 웹 페이지가 로드되는 방식

* <InlinePopover type="browser">
    [](/docs/browser/new-relic-browser/getting-started/new-relic-browser)
  </InlinePopover>

  [이](/docs/browser/new-relic-browser/getting-started/new-relic-browser)실사용자 모니터링(RUM)이라고도 하는 페이지 로드 타이밍을 측정하는 방법

<Callout variant="tip">
  이것은 전통적인 동기 페이지 로드 타이밍에 대한 설명입니다. 브라우저는 [비동기 페이지 로드 타이밍](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) 을 모니터링할 수도 있습니다.
</Callout>

## 페이지 로드 프로세스 [#process]

다음은 대부분의 웹 페이지를 로드하는 주요 단계입니다. 다이어그램의 숫자 1-6은 아래 번호가 매겨진 단계에 해당합니다.

<img
  title="browser-pageload-timeline.png"
  alt="browser-pageload-timeline.png"
  src="/images/browser_diagram_page-load-timeline.webp"
/>

<figcaption>
  <DNT>**Page load timeline:**</DNT> 웹페이지 로드와 관련된 단계입니다. 브라우저 모니터링 차트에는 해당 프로세스의 다음 세그먼트가 표시됩니다: <DNT>**[Network](#h3-network)**</DNT>, <DNT>**[Web application](#h3-app-time)**</DNT>, <DNT>**[DOM processing](#h3-dom)**</DNT> 및 <DNT>**[Page rendering](#h3-page)**</DNT>.
</figcaption>

1. 사용자가 하이퍼링크를 선택하거나, 양식을 제출하거나, 브라우저에 URL을 입력하면 페이지 로드가 시작됩니다. 이는

   <DNT>
     **initial request**
   </DNT>

   또는

   <DNT>
     **navigation start**
   </DNT>

   라고도 합니다. 사용자의 작업은 네트워크를 통해 웹 애플리케이션 서버로

   <DNT>
     **request**
   </DNT>

   를 보냅니다.

2. 요청이 처리를 위해 애플리케이션에 도달합니다. (요청이 처리되기까지 다소 시간이 걸릴 수 있습니다. 이는

   <DNT>
     **request queuing**
   </DNT>

   의 결과일 수도 있고 다른 요인일 수도 있습니다.)

3. 앱이 처리를 완료하고 HTML

   <DNT>
     **response**
   </DNT>

   네트워크를 통해 사용자의 브라우저로 다시 보냅니다. 이는 때때로

   <DNT>
     **response start**
   </DNT>

   또는

   <DNT>
     **first byte**
   </DNT>

   라고도 합니다.

4. (첫 번째 바이트까지의 시간) 사용자의 브라우저는 HTML 응답 수신을 시작하고 문서 개체 모델 또는

   <DNT>
     **DOM**
   </DNT>

   처리를 시작합니다.

5. DOM 로딩이 완료됩니다. 이 지점은

   <DNT>
     **DOM ready**
   </DNT>

   으로 알려져 있습니다. DOM을 사용하면 사용자의 브라우저가 페이지 렌더링을 시작합니다.

6. 사용자 브라우저에서 페이지 렌더링이 완료되고

   <DNT>
     **window load event**
   </DNT>

   가 실행됩니다. ( [비동기 로딩을](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) 사용하는 페이지의 경우, 창 로드 이벤트가 발생한 후에도 일부 요소가 계속 로드될 수 있습니다.)

## 브라우저 모니터링의 페이지 로드 시간 차트 [#page-load-charts]

브라우저 모니터링은 [브라우저 <DNT>**Summary**</DNT> 페이지](/docs/browser/new-relic-browser/getting-started/browser-overview-website-performance-glance) 및 [<DNT>**Page views**</DNT> 페이지](/docs/browser/new-relic-browser/additional-standard-features/page-views-understanding-your-sites-popularity) 에서 주요 페이지 로드 타이밍 세그먼트를 캡처합니다. SPA 모니터링을 활성화한 경우 이 차트와 [SPA별 차트](/docs/browser/single-page-app-monitoring/use-spa-data/view-spa-data-new-relic-browser) 에 모두 액세스할 수 있습니다. 차트는 다음을 보여줍니다:

* 회로망
* 웹 신청 시간
* DOM 처리
* 페이지 렌더링
* 요청 대기열과 같은 적용 가능한 기타 세그먼트

차트 색상은 [페이지 로드 타이밍 다이어그램](#process) 의 색상과 일치합니다.

<img
  title="page_load_overview.png"
  alt="page_load_overview.png"
  src="/images/browser_screenshot-full_page-load-chart.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Summary**</DNT>: 로드 시간 차트는 <DNT>**Summary**</DNT> 및 <DNT>**Page views**</DNT> 페이지에 표시됩니다.
</figcaption>

브라우저가 이러한 시간을 수집하는 방법은 [탐색 타이밍 사양 API를](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-browser-monitoring) 사용하는 브라우저의 기능에 따라 다릅니다. [브라우저 에이전트 API를](/docs/browser/new-relic-browser/browser-apis/using-browser-apis) 사용하여 사용자 정의 페이지 로드 타이밍 이벤트를 추가할 수 있습니다.

다음은 브라우저 로드 시간 차트 세그먼트에 포함된 활동에 대한 설명입니다.

<CollapserGroup>
  <Collapser
    id="h3-app-time"
    title="웹 애플리케이션"
  >
    웹 애플리케이션 시간에는 애플리케이션 서버에서 소요된 시간이 포함됩니다. 이는 페이지 로드 타이밍에 대한 브라우저 계측이 <InlinePopover type="apm"/>에이전트에 의해 제공된 경우에만 확인할 수 있습니다.
  </Collapser>

  <Collapser
    id="h3-network"
    title="회로망"
  >
    네트워크 계층에는 리디렉션과 HTML 요청 및 수신에 소요된 시간이 포함됩니다. 서버 또는 정적 자산에 대한 시간은 포함되지 않습니다.

    네트워크 시간 측정은 링크를 처음 클릭할 때부터 시작됩니다. 네트워크 시간에는 DNS가 포함되며 사이트에 리디렉션이 있는 경우 둘 이상의 조회, TCP( [요청 대기열 시간 모니터링을](/docs/apm/other-features/request-queueing/request-queuing-tracking-frontend-time)구성하지 않은 경우 방화벽 포함) 및 SSL 연결 시간이 포함될 수 있습니다.

    * 요청 대기열 시간 모니터링을 <DNT>**have**</DNT> 구성한 경우 네트워크 시간 <DNT>**does not**</DNT> 에는 X-요청 헤더 이후에 발생하는 모든 요청 대기열 시간이 포함됩니다.

    * 요청 대기열 시간 모니터링을 <DNT>**have not**</DNT> 구성한 경우 네트워크 시간 <DNT>**does**</DNT> 에는 모든 요청 대기열 시간이 포함됩니다.

      [Navigation Timing Specification API](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-browser-monitoring) 는 네트워크 시간에 대한 자세한 분석을 제공합니다. (이전 브라우저의 경우 타이머는 "비포 언로드 이벤트"에서 시작됩니다.)

      [복사/붙여넣기 방법을 사용하여 배포된](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser) 앱의 경우 브라우저에는 네트워크 시간에 웹 앱 및 대기열 시간이 포함됩니다. 이는 브라우저가 서버 측 에이전트에 의존하여 자동 주입을 통해 애플리케이션 값을 브라우저 에이전트에 전달하기 때문입니다.

      브라우저의 관점에서 이 백앤드 시간이 어떻게 분류되는지에 대한 자세한 내용을 보려면 [<DNT>**Session traces**</DNT> 페이지를](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle) 사용하세요. 세션 트레이스는 사용 가능한 모든 네트워크 관련 이벤트에 대한 보고서를 제공하므로 브라우저가 DNS 조회 및 기타 네트워크 이벤트에 시간을 어떻게 소비하는지 사례별로 확인할 수 있습니다.

      <Callout variant="important">
        요청 대기열이 구성된 경우에도 프런트엔드 서버의 설정이 여전히 네트워크 시간에 영향을 미칠 수 있습니다. 이는 프런트엔드 서버가 실제로 요청을 수락하고 처리할 때까지 대기 시간 헤더를 추가하지 않기 때문입니다. 요청이 백로깅을 시작하고 프런트엔드 서버가 연결을 수락하는 데 사용하는 리스너 소켓에 대기하도록 하는 방식으로 프런트엔드 서버가 구성된 경우 브라우저 모니터링을 위한 네트워크 시간이 증가하는 것을 볼 수 있습니다. 대기 시간 헤더는 이 리스너 소켓의 백로그를 설명할 수 없습니다.
      </Callout>
  </Collapser>

  <Collapser
    id="h3-dom"
    title="DOM 처리"
  >
    DOM 처리는 HTML을 DOM으로 구문 분석하고 동기 스크립트를 검색하거나 실행하는 데 걸리는 시간입니다. 브라우저가 이 단계에서 이미지 다운로드를 시작하면 페이지 로드 타이밍이 이미지 로드 시간을 캡처합니다.

    DOM 처리 및 페이지 렌더링 레이어에는 정적 자산(페이지 로드 후 명시적으로 검색되지 않는 자산)에 대한 네트워크 시간이 포함됩니다. 그러나 페이지의 스크립트가 이미지 태그를 동적으로 삽입하고 서버 또는 CDN(콘텐츠 전달 시스템)이 완료된 후 이미지를 로드하는 경우 페이지 로드 타이밍이 이미지 로드 시간을 캡처할 수 없습니다.
  </Collapser>

  <Collapser
    id="h3-page"
    title="페이지 렌더링"
  >
    페이지 렌더링 단계는 DOM이 완료되고 창 로드 이벤트 사이의 시간입니다. 이 단계는 페이지 콘텐츠의 브라우저 측 처리를 측정하며 종종 스크립트 및 정적 자산이 로드되는 시간을 포함합니다.
  </Collapser>

  <Collapser
    id="h3-request"
    title="대기열 요청"
  >
    <DNT>**Request queuing**</DNT> 해당 계정에 브라우저 모니터링 및 APM이 연결되어 있는 경우 로드 시간 차트에 표시됩니다. 뉴렐릭에서 [요청 큐잉은](/docs/apm/applications-menu/features/request-queuing-tracking-frontend-time) 요청이 프로덕션 시스템에 입력된 후 해당 요청이 도달하는 사이의 시간을 의미합니다. 프로덕션의 세부 사항에 따라 이 시간에는 입력을 요청하는 실제 대기열이 포함될 수도 있고, 시간이 걸리는 다른 기능(예: 로드 밸런싱 또는 내부 네트워크 지연 시간)을 나타낼 수도 있습니다.
  </Collapser>
</CollapserGroup>

## 앱 서버 요청 대 브라우저 트랜잭션 [#rpm-vs-ppm]

동일한 애플리케이션에 대한 앱 서버 트랜잭션 수(분당 요청 또는 <DNT>**rpm**</DNT>)가 브라우저 트랜잭션 수(분당 페이지 또는 <DNT>**ppm**</DNT>)보다 큰 경우가 많습니다. 자세한 내용은 [문제 해결 절차를](/docs/browser/new-relic-browser/troubleshooting/app-server-requests-greatly-outnumber-browser-transactions) 참조하십시오.

## 이상치 [#outliers]

애플리케이션이 아무리 잘 수행되더라도 전체 응답 시간을 더 느리게 보이게 하는 일부 느린 브라우저, 플랫폼 및 네트워크가 있습니다. 이상값으로 인한 왜곡을 최소화하기 위해 페이지 로드 타이밍은 애플리케이션 브라우저 Apdex T 설정의 4.5배보다 큰 최종 사용자 응답 시간을 Apdex T의 4.5배 또는 13.5초 중 더 큰 값으로 클램프하고 조정합니다. ( [히스토그램 이상치는](/docs/data-analysis/user-interface-functions/histograms-viewing-data-distribution#outliers) 95%에서 잘립니다.)

예를 들어 애플리케이션의 [최종 사용자 Apdex T 임계값](/docs/browser/new-relic-browser/installation-configuration/browser-settings-ui-options-browser-monitoring#apdex) 이 8초인 경우 해당 응답 시간은 36초로 고정됩니다. 이렇게 하면 이러한 응답 시간이 전체 애플리케이션에 미치는 영향을 최소화하지만 여전히 "불만족스러운" Apdex 점수에 대한 설명을 제공합니다.

[SPA 모니터링](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) 의 경우 이상값은 다르게 처리됩니다. 초기 페이지 로드 또는 경로 변경 기간이 30분에 도달하면 해당 이벤트는 유효하지 않은 데이터로 처리되어 폐기됩니다.

## 다음 단계 [#next-steps]

다음 문서에서 페이지 로드 타이밍에 대해 자세히 알아보세요.

* [PageViewTiming 이벤트 정보](/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details)
* [페이지 로드 타이밍에 의해 생성된 쿠키](/docs/browser/browser-monitoring/page-load-timing-resources/new-relic-cookies-used-browser)
* [쿠키 수집 및 세션 추적](/docs/browser/browser-monitoring/page-load-timing-resources/cookie-collection-session-tracking)
* [캐시된 페이지를 모니터링하는 방법](/docs/browser/new-relic-browser/page-load-timing-resources/cached-pages)
* [합성 및 브라우저 페이지 로드 시간 비교](/docs/browser/new-relic-browser/page-load-timing-resources/compare-page-load-performance-browser-synthetics)
