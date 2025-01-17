---
title: 보고서 브라우저 모니터링 사용자 지정 이벤트 및 속성
tags:
  - Insights
  - Event data sources
  - Custom events
metaDescription: How to report custom events and attributes with browser monitoring in New Relic.
freshnessValidatedDate: never
translationType: machine
---

New Relic에서 브라우저 모니터링을 사용하여 [사용자 정의 이벤트 및 속성](/docs/insights/insights-data-sources/custom-data/report-custom-event-data) 을 추가할 수 있습니다.

## 사용자 정의 속성 [#attributes]

모든 브라우저 이벤트에 사용자 정의 속성을 추가하면 데이터를 쿼리하거나 필터링하여 독창적인 질문에 답할 수 있습니다.

## 맞춤 이벤트 [#events]

사용자 정의 속성을 사용하여 모든 이벤트를 캡처하려면 브라우저 API의 [`recordCustomEvent`](/docs/browser/new-relic-browser/browser-agent-spa-api/record-custom-event) 메서드를 사용합니다.

## 페이지 작업 [#overview]

브라우저 API의 [`addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action) 호출을 사용하여 이벤트, 작업, 경로 변경 또는 애플리케이션과의 모든 최종 사용자 상호작용을 캡처합니다. `addPageAction` 호출은 작업 이름, 페이지와 관련된 메모데이터, 사용자 정의 속성 이름 및 이와 함께 캡처하는 값을 포함하는 `PageAction` 라는 이벤트를 추가합니다.

## 전제 조건 [#requirements]

`Custom` 이벤트를 보고하려면 다음 전제 조건을 확인하세요.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        에이전트 버전
      </td>

      <td>
        브라우저 모니터링 에이전트 버전은 [1.277.0 이상](/docs/browser/new-relic-browser/installation-configuration/upgrading-browser-agent#checking) 이어야 합니다.
      </td>
    </tr>

    <tr>
      <td>
        클라이언트 브라우저 버전
      </td>

      <td>
        `Custom` 이벤트를 기록하려면 브라우저가 [도메인 간 XHR을 지원](/docs/browser/new-relic-browser/getting-started/compatibility-requirements#browser-types) 해야 합니다.
      </td>
    </tr>

    <tr>
      <td>
        사이클당 이벤트
      </td>

      <td>
        `Custom` 이벤트는 다른 브라우저 이벤트와 함께 버퍼링되며 30초마다 전송됩니다. 총 1,000개의 이벤트가 관찰되면 에이전트는 하베스트 처리 간격을 우회하여 버퍼링된 이벤트를 즉시 수집합니다.
      </td>
    </tr>

    <tr>
      <td>
        이벤트/속성 이름 지정, 데이터 유형, 크기
      </td>

      <td>
        이벤트/속성 명명 구문, 데이터 유형 및 크기에 [대한 일반 요구 사항](/docs/insights/insights-data-sources/custom-data/data-requirements#general) 을 준수해야 합니다.
      </td>
    </tr>
  </tbody>
</table>

`PageAction` 이벤트를 보고하려면 다음 전제 조건을 확인하세요.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        에이전트 버전
      </td>

      <td>
        브라우저 모니터링 에이전트 버전은 [593 이상](/docs/browser/new-relic-browser/installation-configuration/upgrading-browser-agent#checking) 이어야 합니다.
      </td>
    </tr>

    <tr>
      <td>
        클라이언트 브라우저 버전
      </td>

      <td>
        `PageAction` 이벤트를 기록하려면 브라우저가 [도메인 간 XHR을 지원](/docs/browser/new-relic-browser/getting-started/compatibility-requirements#browser-types) 해야 합니다.
      </td>
    </tr>

    <tr>
      <td>
        사이클당 이벤트
      </td>

      <td>
        `PageAction` 이벤트는 다른 브라우저 이벤트와 함께 버퍼링되며 30초마다 전송됩니다. 1,000개의 이벤트가 관찰되면 에이전트는 하베스트 처리 간격을 우회하여 버퍼링된 이벤트를 즉시 수집합니다.
      </td>
    </tr>

    <tr>
      <td>
        이벤트/속성 이름 지정, 데이터 유형, 크기
      </td>

      <td>
        이벤트/속성 명명 구문, 데이터 유형 및 크기에 [대한 일반 요구 사항](/docs/insights/insights-data-sources/custom-data/data-requirements#general) 을 준수해야 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 사용자 홈페이지 만들기 [#creating-custom-events]

`custom` 이벤트를 생성하려면:

1. 앱에 [브라우저 에이전트가 설치되어](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) 있는지 확인하십시오.
2. 애플리케이션의 JavaScript에서 관련 부분에 있는 [`newrelic.recordCustomEvent`](/docs/browser/new-relic-browser/browser-apis/record-custom-event) 함수를 호출합니다.
3. 디버그가 실행되고 지정한 eventType에서 관련 `custom` 이벤트를 보고할 때까지 몇 분 정도 기다립니다.
4. 이벤트를 캡처하는 데 사용한 `eventType` 속성(및 이벤트와 함께 보낸 모든 관련 속성)을 포함하는 이벤트의 NRQL 쿼리를 실행합니다.

* 예를 들어, `eventType` 이 `Foo` 이고 속성이 `bar: 123` 인 `custom` 이벤트를 보냈다면 다음과 같은 쿼리를 실행할 수 있습니다.
  ```sql
  SELECT * FROM Foo WHERE bar = 123
  ```

## PageAction 이벤트 만들기 [#creating-pageactions]

`PageAction` 이벤트를 생성하려면:

1. 앱에 [브라우저 에이전트가 설치되어](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) 있는지 확인하십시오.
2. 애플리케이션 자바스크립트의 관련 부분에서 [`newrelic.addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicaddpageaction-browser-agent-api) 함수를 호출합니다.
3. 애플리케이션이 실행되고 관련 `PageAction` 이벤트를 보고할 때까지 몇 분 정도 기다리십시오.
4. 이벤트를 캡처하는 데 사용한 `actionName` 속성(및 작업과 함께 보낸 모든 관련 속성)이 포함된 `PageAction` 이벤트의 [NRQL 쿼리](/docs/query-data/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-browser-spa) 를 실행합니다.

* 예를 들어, `actionName` 이 `Foo` 이고 속성이 `bar: 123` 인 `PageAction` 이벤트를 보냈다면 다음과 같은 쿼리를 실행할 수 있습니다.
  ```sql
  SELECT * FROM PageAction WHERE actionName = 'Foo' AND bar = 123
  ```

## 브라우저 이벤트에 사용자 정의 속성 추가 [#custom-attributes]

모든 브라우저 이벤트에 사용자 정의 속성을 추가할 수 있습니다. `setCustomAttribute` API 사용하여 추가하는 모든 맞춤 속성은 캡처된 모든 이벤트에 추가됩니다.

사용자 정의 속성을 추가하는 방법에는 두 가지가 있습니다.

<CollapserGroup>
  <Collapser
    id="custom-attribute-via-browser-api"
    title={<><Link to="/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api"><InlineCode>
      setCustomAttribute
    </InlineCode></Link> 브라우저 API 호출을 사용하세요</>
    }
  >
    브라우저 에이전트를 통해 브라우저 이벤트에 사용자 정의 속성을 추가하려면 [`setCustomAttribute`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api) 브라우징 API 호출을 사용하세요.
  </Collapser>

  <Collapser id="custom-attribute-forward-apm" title="APM 데이터에서 사용자 정의 속성 전달">
    APM 에이전트를 통해 <InlinePopover type="apm" />`Transaction` 이벤트에 맞춤 속성을 추가한 경우 해당 맞춤 속성을 `PageView` 이벤트에 자동으로 전달할 수 있습니다.

    1. [에이전트별 지침](/docs/insights/insights-data-sources/custom-data/add-custom-attributes-apm-data) 에 따라 맞춤 속성을 삽입합니다.

    2. 에이전트 구성 파일에서 속성 전달 활성화:

       <table>
         <thead>
           <tr>
             <th style={{ width: "100px" }}>
               에이전트
             </th>

             <th>
               속성 전달 활성화
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               가다
             </td>

             <td>
               속성을 활성화하려면 다음을 구성에 추가합니다(기본적으로 비활성화됨).

               ```go
               cfg.BrowserMonitoring.Attributes.Enabled = true
               ```

               그런 다음 포함할 속성을 추가합니다.

               ```go
               cfg.BrowserMonitoring.Attributes.Include = []string{"request.*"}
               ```
             </td>
           </tr>

           <tr>
             <td>
               자바
             </td>

             <td>
               `browser_monitoring` 섹션에 [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-browser-attributes-enabled) 옵션을 추가하고 `true` 로 설정합니다.
             </td>
           </tr>

           <tr>
             <td>
               .그물
             </td>

             <td>
               [`<attributes enabled="true">`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browser-attributes) 요소를 `browserMonitoring` 요소의 하위로 추가합니다.

               ```xml
               <configuration xmlns="urn:newrelic-config">
                 ...
                 <browserMonitoring autoInstrument="true">
                   ...
                   <attributes enabled="true">
                     ...
                   </attributes>
                 </browserMonitoring>
                 ...
               </configuration>
               ```

               [수동 브라우저 계측](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation) 을 사용하는 경우 `GetBrowserTimingHeader()` 호출 전에 속성을 생성해야 합니다.
             </td>
           </tr>

           <tr>
             <td>
               노드.js
             </td>

             <td>
               앱 `newrelic.js` 구성 파일의 `browser_monitoring` 섹션에 [`attributes: {enabled: true}`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-enabled) 을 추가합니다.
             </td>
           </tr>

           <tr>
             <td>
               PHP
             </td>

             <td>
               [`newrelic.browser_monitoring.attributes.enabled`](/docs/agents/php-agent/attributes/enabling-disabling-attributes#cfg-browser-attributes-enabled) 옵션을 추가하고 `true` 로 설정합니다.
             </td>
           </tr>

           <tr>
             <td>
               파이썬
             </td>

             <td>
               [`browser_monitoring.attributes.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-browser-attributes-enabled) 옵션을 추가하고 `true` 로 설정합니다.
             </td>
           </tr>

           <tr>
             <td>
               루비
             </td>

             <td>
               [`browser_monitoring.attributes.enabled`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#browser_monitoring-attributes-enabled) 옵션을 추가하고 `true` 로 설정합니다.
             </td>
           </tr>
         </tbody>
       </table>
  </Collapser>
</CollapserGroup>

## 중요한 고려 사항 및 모범 사례는 다음과 같습니다.

AI 모니터링을 통해 총 맞춤형 대시보드 유형 수를 약 5개로 제한해야 합니다. 사용자 정의 대시보드 유형은 상위 수준 범주를 캡슐화하는 데 사용됩니다. 예를 들어, 다양한 목적을 가진 여러 이벤트를 포함하는 Gestures라는 이벤트 유형을 만들 수 있습니다.

사용자 정의 대시보드 이름을 지정하기 위해 이벤트 유형을 사용하지 마십시오. 데이터 카테고리를 수용하는 이벤트 유형을 생성하고 해당 카테고리 내의 속성을 사용하여 이벤트를 차별화합니다. 수많은 사용자 정의 대시보드를 생성할 수 있지만 보고되는 이벤트 유형의 수를 제한하여 데이터를 관리 가능하게 유지하는 것이 중요합니다.

## 포함된 속성

사용자 정의 브라우저 이벤트는 이벤트가 발생했을 때 브라우저 환경의 컨텍스트를 이해하는 데 도움이 되도록 다음 속성으로 장식됩니다.

<CollapserGroup>
  <Collapser id="custom-event-attributes" title="사용자 정의 이벤트 속성">
    <table>
      <thead>
        <tr>
          <th style={{ width: "100px" }}>
            기인하다
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            appId
          </td>

          <td>
            뉴렐릭의 합류 ID입니다.
          </td>
        </tr>

        <tr>
          <td>
            앱 이름
          </td>

          <td>
            뉴렐릭의 합류 이름입니다.
          </td>
        </tr>

        <tr>
          <td>
            아산
          </td>

          <td>
            자율 시스템 번호.
          </td>
        </tr>

        <tr>
          <td>
            위도
          </td>

          <td>
            ASN과 관련된 위도
          </td>
        </tr>

        <tr>
          <td>
            경도
          </td>

          <td>
            ASN과 관련된 경도
          </td>
        </tr>

        <tr>
          <td>
            asn조직
          </td>

          <td>
            ASN과 관련된 조직
          </td>
        </tr>

        <tr>
          <td>
            도시
          </td>

          <td>
            사건이 발생한 도시.
          </td>
        </tr>

        <tr>
          <td>
            국가코드
          </td>

          <td>
            이벤트가 발생한 국가 코드입니다.
          </td>
        </tr>

        <tr>
          <td>
            현재 URL
          </td>

          <td>
            소프트 탐색을 포함한 이벤트가 발생한 URL
          </td>
        </tr>

        <tr>
          <td>
            장치 유형
          </td>

          <td>
            이벤트가 발생한 장치의 유형입니다.
          </td>
        </tr>

        <tr>
          <td>
            엔티티 가이드
          </td>

          <td>
            뉴렐릭의 GUID입니다.
          </td>
        </tr>

        <tr>
          <td>
            이름
          </td>

          <td>
            APM에서 제공하는 경우 거래 이름
          </td>
        </tr>

        <tr>
          <td>
            페이지 URL
          </td>

          <td>
            이벤트가 발생한 URL입니다.
          </td>
        </tr>

        <tr>
          <td>
            지역코드
          </td>

          <td>
            이벤트가 발생한 지역 코드입니다.
          </td>
        </tr>

        <tr>
          <td>
            세션
          </td>

          <td>
            이벤트가 발생한 사용자 세션에 연결된 세션 식별자입니다.
          </td>
        </tr>

        <tr>
          <td>
            세션 추적 ID
          </td>

          <td>
            이벤트가 발생한 페이지 로드와 연결된 세션 트레이스 ID입니다.
          </td>
        </tr>

        <tr>
          <td>
            타임스탬프
          </td>

          <td>
            이벤트의 유닉스 타임스탬프.
          </td>
        </tr>

        <tr>
          <td>
            사용자 에이전트 이름
          </td>

          <td>
            이벤트가 발생한 사용자 에이전트의 이름입니다.
          </td>
        </tr>

        <tr>
          <td>
            사용자 에이전트 OS
          </td>

          <td>
            이벤트가 발생한 사용자 에이전트의 운영 시스템입니다.
          </td>
        </tr>

        <tr>
          <td>
            사용자 에이전트 버전
          </td>

          <td>
            이벤트가 발생한 사용자 에이전트의 버전입니다.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## 문제점 해결

다음은 몇 가지 문제 해결 팁입니다.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Problem**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        맞춤 속성 누락
      </td>

      <td>
        사용자 정의 속성이 `PageView` 이벤트에 나타나지 않으면 페이지의 Load 이벤트 전에 `setCustomAttribute` 를 호출하고 있는지 확인하십시오. 페이지 로드가 발생한 후에 사용자 정의 속성이 호출되면 `PageView` 에 표시되지 않습니다.
      </td>
    </tr>

    <tr>
      <td>
        `PageAction` 이벤트
      </td>

      <td>
        쿼리할 때 `PageAction` 이벤트가 표시되지 않으면 [요구 사항](#requirements)을 검토하십시오.

        요구 사항이 충족되면 [예약된 속성 이름이나 유효하지 않은 값을](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api#limits)사용하고 있지 않은지 확인하세요.
      </td>
    </tr>

    <tr>
      <td>
        `Custom` 이벤트
      </td>

      <td>
        쿼리할 때 `custom` 이벤트가 표시되지 않으면 [요구 사항](#requirements)을 검토하십시오.

        요구 사항이 충족되면 [예약된 속성 이름이나 유효하지 않은 값을](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api#limits)사용하고 있지 않은지 확인하세요.
      </td>
    </tr>
  </tbody>
</table>