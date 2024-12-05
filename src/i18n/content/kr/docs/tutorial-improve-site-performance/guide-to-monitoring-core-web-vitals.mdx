---
title: 핵심 웹 바이탈 모니터링
tags:
  - Browser
  - Browser monitoring
  - Guides
metaDescription: A guide to monitor Google's core web vitals.
freshnessValidatedDate: '2024-03-21T00:00:00.000Z'
translationType: machine
---

핵심 웹 바이탈은 전반적인 사용자 경험을 측정하는 Google의 측정항목입니다. 사용자가 귀하의 비즈니스를 보는 방식에 대한 귀중한 통찰력을 제공하여 사이트의 SEO 순위에 영향을 줄 수 있습니다. 사용자 경험을 포착하는 점수를 가지면 사이트에 필요한 것이 무엇인지 추측하는 대신 특정 문제에 대해 조치를 취할 수 있습니다.

## 목표 [#objectives]

이 튜토리얼은 New Relic을 사용하여 핵심 웹 바이탈을 분석하는 과정을 안내합니다. 자습서가 끝나면 다음 작업을 완료하게 됩니다.

* 뉴렐릭에서 코어 웹 바이탈을 찾아보세요.
* 핵심 웹 바이탈이 사이트 성능으로 변환되는 방식을 이해합니다.
* 뉴렐릭 데이터를 탐색하여 점수에 기여하는 요소를 파악하세요.

## 코어 웹 바이탈에 대해 알아보세요 [#learn]

Google은 다음 세 가지 지표를 기준으로 전반적인 웹사이트 성능을 측정합니다.

* [콘텐츠가 포함된 최대 페인트](https://web.dev/articles/lcp) (LCP): 페이지의 기본 콘텐츠를 로드하는 데 걸리는 시간입니다. 예를 들어, 느린 LCP가 있는 웹페이지를 방문하는 사용자에게는 콘텐츠가 나타나기 전에 몇 초 동안 빈 화면이 나타날 수 있습니다.
* INP( [다음 페인트로의 복합복합](https://web.dev/articles/inp) ): 사용자의 복합복합에 페이지가 반응하는 데 걸리는 시간입니다. 예를 들어, 사용자가 버튼을 클릭하면 INP는 클릭 후 다음 페이지가 열리는 데 걸리는 시간을 측정합니다. 높은 INP는 느리고 응답하지 않는 웹페이지 경험을 반영하여 사용자 참여를 방해합니다.
* CLS( [누적 레이아웃 변경](https://web.dev/articles/cls) ): 로드하는 동안 페이지에서 예기치 않은 레이아웃 변경이 발생하는 빈도입니다. 예를 들어, 버튼을 클릭하려는 사용자는 콘텐츠가 화면의 새로운 위치로 이동하여 실수로 다른 항목을 클릭하게 될 수 있습니다. CLS가 높으면 웹페이지가 투박하고 상호작용하기 어렵게 느껴질 수 있습니다.

각 웹 바이탈에는 앱의 성능과 SEO를 추적하는 데 도움이 되는 다음과 같은 임계값이 있습니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}/>

      <th style={{ width: "200px" }}>
        도움이 됨
      </th>

      <th style={{ width: "275px" }}>
        개선이 필요하다
      </th>

      <th style={{ width: "200px" }}>
        도움이 안됨
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Largest contentful paint**
        </DNT>
      </td>

      <td>
        2.5초 이하
      </td>

      <td>
        2.5초에서 4초 사이
      </td>

      <td>
        4초 이상
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Interaction to next paint**
        </DNT>
      </td>

      <td>
        200밀리초 미만
      </td>

      <td>
        200-500밀리초 사이
      </td>

      <td>
        500밀리초보다 깁니다.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Cumulative layout shift**
        </DNT>
      </td>

      <td>
        0.1 이하
      </td>

      <td>
        0.1에서 0.25 사이
      </td>

      <td>
        0.25 이상
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="tip">
  ### CLS 점수는 어떻게 계산되나요?

  누적 레이아웃 이동 점수는 다른 코어 웹 바이탈처럼 시간 기반 측정이 아닌 0에서 무한대 사이의 단위 없는 값입니다. 웹페이지 로딩 과정에서 발생하는 예상치 못한 레이아웃 변화의 영향을 합산한 것입니다. CLS 점수 계산 방법은 다음과 같습니다.

  * 레이아웃 변경 점수: 이는 두 가지 요소를 고려합니다.

    * 이동된 뷰포트 비율: 페이지의 표시 영역(뷰포트)이 레이아웃 이동의 영향을 받는 정도입니다.
    * 콘텐츠가 이동한 거리: 이동한 요소가 원래 위치에서 이동된 거리입니다.

  * 다중 레이아웃 변경: CLS 점수는 짧은 기간(세션 창) 내에 발생하는 모든 레이아웃 변경을 고려합니다. 가장 큰 세션 창의 점수는 최종 CLS 값입니다.
</Callout>

<DNT>**Good**</DNT> 웹 바이탈은 조직이 비용을 절감하고 SEO를 높이는 데 도움이 될 수 있습니다. <DNT>**Poor**</DNT> 또는 <DNT>**Needs improvement**</DNT> 조직에 대한 사용자의 부정적인 인식을 반영할 수 있으며, 이로 인해 고객이 불만족스럽거나 비즈니스 기회를 잃을 수 있습니다.

뉴렐릭은 Google의 [`web-vitals` API 라이브러리를](https://github.com/GoogleChrome/web-vitals) 활용하여 추가 계산을 도입하지 않고 원시 상태의 웹 바이탈을 수집합니다. 코어 웹 바이탈이 중요한 이유와 계산 방법에 대해 자세히 알아보려면 web.dev 문서 [사용자 중심 성능 지수 를](https://web.dev/articles/user-centric-performance-metrics) 참조하세요.

## New Relic에서 핵심 웹 바이탈 찾기 [#view-data-in-nr]

코어 웹 바이탈은 많은 뉴렐릭 기능에 내장되어 있지만 웹 바이탈을 높은 수준에서 보는 가장 좋은 방법은 다음과 같습니다.

1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser**</DNT> 으)로 이동합니다.

2. 앱을 선택하세요.

3. 왼쪽 메뉴에서 <DNT>**Web vitals**</DNT> 클릭합니다.

   **웹 바이탈** 페이지에는 전체 웹사이트에 대한 웹 바이탈 평균이 표시됩니다. 이 보기에서 특정 페이지나 지표를 드릴다운하여 점수에 영향을 미치는 요소를 확인할 수 있습니다.

   <img
     title="Track core web vitals site-wide, favorite key webpages, and filter by time period."
     alt="overview of the web vitals page"
     src="/images/browser_screenshot-full_web-vitals.gif"
   />

### 특정 페이지로 드릴다운 [#drill-down]

인사이트를 중요한 페이지(예: 전자상거래 결제 페이지)로 이동하려면 <DNT>**Page URL**</DNT> 표에서 찾으세요. 최종 사용자가 사이트의 해당 영역을 어떻게 경험하고 있는지 이해하는 데 사용할 수 있는 코어 웹 바이탈에 기여하는 내용에 대한 분석을 볼 수 있습니다. 예를 들어 Chrome 브라우저에서 성능 저하 패턴이 발견되면 해당 사용자 기반에 대한 향후 개선 사항을 선별할 수 있습니다.

<img
  title="Click on a page URL to see page-specific web vitals."
  alt="Click on a page URL to see page-specific web vitals."
  src="/images/browser_screenshot-full_page-url-view.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Monitor > Web vitals > (click on a page URL)**</DNT>: 가장 영향력 있는 웹페이지에 대한 코어 웹 바이탈 분석을 확인하세요.
</figcaption>

### 주요 속성으로 필터링 [#key-attributes]

백앤드 변경이나 성능 문제가 코어 웹 바이탈에 어떤 영향을 미치는지와 같은 특정 내용을 조사하려는 경우 <DNT>**Filter by**</DNT> 도구를 사용하여 주요 속성을 필터링할 수 있습니다.

<img
  title="Use the filter tool to filter core web vitals by key attributes"
  alt="Filter by key attributes"
  src="/images/browser_screenshot-full_filtered-web-vitals.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Monitor > Web vitals > (add filters)**</DNT>: 필터 도구를 사용하여 핵심 속성별로 코어 웹 바이탈을 필터링할 수 있습니다.
</figcaption>

거의 모든 주요 속성으로 필터링할 수 있지만 몇 가지 유용한 예를 읽으십시오.

<CollapserGroup>
  <Collapser
    id="device"
    title="장치 유형별"
  >
    데스크톱과 모바일 성능을 비교하고 두 플랫폼 간의 코어 웹 바이탈 차이점을 비교하고 싶다고 가정해 보겠습니다. <DNT>**Web vitals**</DNT> 에서 이를 조사하려면 다음을 수행하세요.

    1. <DNT>
         **Filter by**
       </DNT>

       필드에서

       <DNT>
         **Attribute**
       </DNT>

       `deviceType` 로 설정하고

       <DNT>
         **Value**
       </DNT>

       `desktop` 로 설정합니다.

    2. 중복 브라우저에서

       <DNT>
         **Attribute**
       </DNT>

       `deviceType` 로,

       <DNT>
         **Value**
       </DNT>

       `mobile` 로 설정한 다음 결과를 비교합니다.
  </Collapser>

  <Collapser
    id="user-info"
    title="사용자 정보별"
  >
    최종 사용자가 11월 1일 오후 12시경 사이트 결제 페이지에서 성능 문제를 보고했고 이 사용자에게 어떤 일이 발생했는지 확인하려고 한다고 가정해 보겠습니다. <DNT>**Web vitals**</DNT> 에서 이를 조사하려면 다음을 수행하세요.

    1. 시간 범위를 11월 1일 오전 11시에서 오후 1시 사이로 설정합니다.

    2. <DNT>
         **Page URL**
       </DNT>

       표에서 결제 페이지 URL을 클릭합니다.

    3. <DNT>
         **Filter by**
       </DNT>

       필드에서

       <DNT>
         **Attribute**
       </DNT>

       `userID` 로 설정하고

       <DNT>
         **Value**
       </DNT>

       `user ID` 로 설정합니다.

       <Callout
         variant="tip"
         title="사용자 아이디 정보"
       >
         `userID` [브라우저 SPA API](/docs/browser/new-relic-browser/browser-agent-spa-api/setcustomattribute-browser-agent-api/) 를 사용하여 설정해야 하는 맞춤 속성입니다. `userID` 을(를) 사용할 수 없는 경우 `username` 또는 `session` 와 같은 다른 사용자 정보로 필터링할 수도 있습니다.
       </Callout>
  </Collapser>

  <Collapser
    id="resource"
    title="자원별"
  >
    귀하의 조직이 최근 11월 10일 오전 8시에 사이트 홈 페이지의 이미지를 업데이트했으며 변경 사항이 코어 웹 바이탈에 영향을 미쳤는지 확인하고 싶다고 가정해 보겠습니다. <DNT>**Web vitals**</DNT> 에서 이를 조사하려면 다음을 수행하세요.

    1. 시간 범위를 11월 10일 오전 7시에서 오전 9시 사이로 설정합니다.

    2. <DNT>
         **Page URL**
       </DNT>

       테이블에서 홈페이지 URL을 클릭합니다.

    3. <DNT>
         **Filter by**
       </DNT>

       필드에서

       <DNT>
         **Attribute**
       </DNT>

       `elementTagName` 로 설정하고

       <DNT>
         **Value**
       </DNT>

       `IMG` 로 설정합니다.
  </Collapser>
</CollapserGroup>

## 세션 추적으로 더 많은 컨텍스트 얻기 [#session-traces]

New Relic은 주어진 페이지에서 사용자 세션에 대한 데이터를 캡처합니다. 세션 추적은 임의로 샘플링되어 사용자가 페이지 로드 타이밍 문제, JavaScript 이벤트 또는 기타 오류를 경험한 방식을 볼 수 있습니다.

<img
  title="Session traces in the New Relic UI"
  alt="Session traces in Browser UI lets you look at real user sessions for a given page"
  src="/images/browser_screenshot-crop_session-traces.gif"
/>

세션 추적을 사용하여 여러 사용자 세션에서 패턴을 찾는 것이 좋습니다. 핵심 웹 바이탈 점수 중 하나를 개선할 수 있는 경우 한 가지 옵션은 세션 추적을 살펴보고 여러 사용자 세션에서 공유되는 공통 속성을 확인하는 것입니다. 다음은 세션 추적이 사이트를 개선하는 데 어떻게 도움이 되는지에 대한 예입니다.

1. <DNT>
     **Web vitals**
   </DNT>

   탭에서 실적이 저조한 페이지를 클릭합니다. 위 이미지를 예로 들면 귀하의 사이트는 전반적인 LCP 점수가 좋지만 일부 개별 페이지에는 개선이 필요하다는 것을 알 수 있습니다.

2. <DNT>
     **Web vitals**
   </DNT>

   페이지의

   <DNT>
     **Page URLs**
   </DNT>

   섹션을 보면 홈페이지 URL의 LCP 점수가 4초보다 큰 것을 알 수 있습니다. 모든 사용자에게 영향을 미치는 오류로 인한 것입니까, 아니면 한 종류의 사용자에게만 영향을 미치는 것입니까? 예를 들어, 특정 버전의 Chrome 또는 특정 운영 시스템을 사용하는 사용자가 페이지 로드 시간이 느린 것을 발견한 경우 문제의 특정 원인을 더 효과적으로 해결할 수 있습니다.

3. 문제를 해결하려는 URL을 클릭하면 새 창이 열립니다. LCP 점수가 사이트의 전체 LCP 점수보다 훨씬 높다는 것을 알게 되었습니다. 이 페이지 하단의

   <DNT>
     **Session traces**
   </DNT>

   섹션으로 스크롤하면 실제 사용자 세션의 다양한 샘플을 볼 수 있습니다. 이러한 세션을 통해 사용자가 AJAX 요청, DOM 로드 관련 문제, JavaScript 이벤트 또는 기타 오류를 경험한 방식에 대한 보다 세부적인 세부 정보를 제공할 수 있습니다.

무작위 세션의 데이터는 수백 또는 수천 건의 웹 페이지 사용자 상호 작용에서 패턴을 찾는 데 도움이 됩니다. 무작위로 선택된 이 데이터에 패턴이 나타나면 문제 해결 계획이 페이지 점수를 향상시킬 것이라는 확신을 가질 수 있습니다.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-improve-site-performance/fixing-high-latency","title":"다음 단계","body":"서비스 전체의 지연 시간 문제 찾기"}}
  previousStep={{"path":"/docs/tutorial-improve-site-performance/improve-website-performance","title":"이전 단계","body":"사이트 계측"}}
/>
