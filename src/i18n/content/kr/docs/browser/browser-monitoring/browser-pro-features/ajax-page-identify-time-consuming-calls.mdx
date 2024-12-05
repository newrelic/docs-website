---
title: 'AJAX 페이지: 시간이 많이 걸리는 호출 식별'
metaDescription: Use New Relic's browser monitoring AJAX page to pinpoint problems with your end users' experience when you have time-consuming or failing AJAX calls.
freshnessValidatedDate: never
translationType: machine
---

<InlinePopover type="browser"/><DNT>**AJAX**</DNT> UI는 브라우저에서 HTTP 또는 HTTPS 도메인과 같은 외부 엔드포인트로의 최근 AJAX 요청을 표시합니다. 이 정보는 사이트의 웹페이지 일부를 업데이트하는 AJAX 호출에 시간이 오래 걸리거나 실패할 때 최종 사용자 환경의 문제를 식별하는 데 도움이 됩니다. 데스크톱 브라우저, 모바일 기기, 태블릿 등 기기 유형별로 문제를 검토할 수 있습니다.

## 문제 해결 사항 [#troubleshooting]

다음은 앱의 성능 문제를 식별하기 위한 몇 가지 문제 해결 팁입니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        AJAX 호출 문제 해결
      </th>

      <th>
        예
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        전체 요청의 문제
      </td>

      <td>
        문제가 어디에 있는지 [확실하지 않거나](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) 요청을 처음부터 끝까지 추적하려면 <DNT>**AJAX**</DNT> UI 에서 처리 추적 링크를 클릭하세요.
      </td>
    </tr>

    <tr>
      <td>
        타이밍 문제
      </td>

      <td>
        총 [시간 백분율](#time-percentage-example) , 분당 처리량 요청(rpm) 및 요청당 평균 데이터 전송 속도는 타이밍 문제를 식별하는 데 도움이 될 수 있습니다.

        * <DNT>
            **AJAX**
          </DNT>

          요약 페이지의

          <DNT>
            **Average data transfer per request**
          </DNT>

          차트에서 큰 폭의 급증을 찾아보세요.

        * 요청 URL, GraphQL 작업 이름 및 기타 여러 필드별로 AJAX 성능을 평가하려면

          <DNT>
            **Group By**
          </DNT>

          드롭다운을 사용하여 데이터 추세를 분석하세요.

        * 개별 통화의

          <DNT>
            **AJAX performance**
          </DNT>

          탭에서 높은 콜백 시간 값과 데이터 전송 속도 간의 상관 관계를 찾습니다.
      </td>
    </tr>

    <tr>
      <td>
        엔드포인트 문제
      </td>

      <td>
        이상값 엔드포인트를 찾아 해당 엔드포인트에서 이루어진 개별 요청을 조사합니다.

        <DNT>**AJAX**</DNT> 요약 페이지의 <DNT>**Status codes**</DNT> 차트는 호출의 반환 동작에 대한 정보를 제공합니다. `200` 범위를 벗어나는 상태 코드가 많이 표시되면 AJAX 엔드포인트에 문제가 있음을 나타낼 수 있습니다.
      </td>
    </tr>

    <tr>
      <td>
        특정 웹페이지 위치 문제
      </td>

      <td>
        로드되는 페이지의 컨텍스트 내에서 잠재적인 AJAX 문제를 조사합니다. AJAX 프로세서를 선택한 다음 [<DNT>**Session traces with AJAX**</DNT>](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle) 테이블에서 트레이스를 선택합니다.
      </td>
    </tr>
  </tbody>
</table>

## 그것을하는 방법 [#ajax-dashboard]

앱에 대한 AJAX 요청 문제를 해결하려면:

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX**
   </DNT>

   으)로 이동합니다.

2. 장치 유형을 선택하십시오: 데스크탑(기본값), 모바일 및 태블릿.

3. AJAX 요청을 클릭합니다.

Ajax 요청에 초점을 맞추었다면 조사할 차례입니다. 다음 전략 중 일부를 시도해 보십시오.

<CollapserGroup>
  <Collapser
    id="ajax-summary"
    title="AJAX 요약 차트로 시작하기"
  >
    요약 페이지는 AJAX 호출 문제를 해결하는 데 도움이 되는 여러 차트를 제공합니다.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            AJAX 요약 페이지
          </th>

          <th>
            코멘트
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            그룹 및 필터
          </td>

          <td>
            UI에서 사용 가능한 <DNT>**Sort by**</DNT> 옵션을 사용하세요. 2분 이상 소요되는 모든 AJAX 요청은 자동으로 필터링됩니다.
          </td>

          <td>
            데이터를 더 유연하게 보려면 <DNT>**Group by**</DNT> 옵션을 사용하여 `requestUrl` 또는 `groupedRequestUrl` 선택하세요.
          </td>
        </tr>

        <tr>
          <td>
            끝점
          </td>

          <td>
            <DNT>**Throughput**</DNT> 차트는 처리량이 가장 높은 5개의 엔드포인트를 보여줍니다. 호출에 5개 이상의 엔드포인트가 있는 경우 차트에 <DNT>**Other**</DNT> 로 통합됩니다.
          </td>
        </tr>

        <tr>
          <td>
            New Relic의 부름
          </td>

          <td>
            앱에 대한 AJAX 호출을 모니터링하는 자체 브라우저를 볼 수 있습니다. 브라우저 세션 중에 모든 활동이 캡처되기 때문에 이는 정상입니다.
          </td>
        </tr>

        <tr>
          <td>
            브라우저 데이터 누락
          </td>

          <td>
            AJAX 타이밍 세부 정보는 iOS 브라우저용 IE 7, IE 8 또는 Chrome에서 사용할 수 없습니다. 다른 브라우저에서 예상한 데이터가 표시되지 않으면 [AJAX 문제 해결 절차](/docs/browser/new-relic-browser/troubleshooting/troubleshoot-ajax-data-collection) 를 따르세요.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="ajax-performancex"
    title="통화 또는 페이지 조회로 세부 정보 얻기"
  >
    <DNT>**AJAX**</DNT> 요약 페이지에서 특정 통화를 선택한 후 <DNT>**AJAX performance**</DNT> 링크를 통해 자세한 정보를 살펴볼 수 있습니다. 여기에는 [세션 트레이스 세부정보](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle) 에 대한 직접 링크가 포함됩니다.

    여기에서 탭을 선택하여 페이지 보기별로 성능 데이터를 얻을 수도 있습니다. (앱 서버 요청이 브라우저 `PageView` 트랜잭션보다 훨씬 많은 경우 이는 백엔드에 대한 일부 요청이 AJAX를 통해 이루어지기 때문입니다. 자세한 내용은 [문제 해결 절차를](/docs/browser/new-relic-browser/troubleshooting/app-server-requests-greatly-outnumber-browser-pageview-transactions)참조하십시오.)

    <img
      title="New Relic browser monitoring: AJAX details"
      alt="A screenshot of the AJAX details UI in New Relic"
      src="/images/browser_screenshot-full_ajax-details.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX > (select an AJAX call)**</DNT>: 이 예에서는 특정 AJAX 호출에 대한 성능 세부 정보를 보여줍니다. 페이지 조회수별로 성능 세부 정보를 볼 수도 있습니다.
    </figcaption>

    <DNT>**Average response time**</DNT> 차트의 AJAX 엔드포인트는 4개 또는 2개의 기간으로 표시됩니다. 이는 [스티치 추적 헤더가](/docs/apm/transactions/cross-application-traces/cross-application-tracing#security) 있는지 여부에 따라 다릅니다.

    * 4개의 기간(

      <DNT>
        **Application time**
      </DNT>

      ,

      <DNT>
        **Queue time**
      </DNT>

      ,

      <DNT>
        **Network time**
      </DNT>

      및

      <DNT>
        **Callback time**
      </DNT>

      ): 이러한 AJAX 호출은 스냅 추적 헤더를 제공하는

      <InlinePopover type="apm"/>

      에이전트의 앱 모니터에 대해 수행됩니다.

    * 두 기간(

      <DNT>
        **Response time**
      </DNT>

      및

      <DNT>
        **Callback time**
      </DNT>

      ): 이러한 AJAX 호출은 APM 에이전트에 의한 모니터링이 아니거나 로그 추적 헤더를 제공하지 않는 에이전트에 의한 모니터링인 앱에 대해 수행됩니다.
  </Collapser>

  <Collapser
    id="distributed tracing"
    title="처음부터 끝까지 요청 추적"
  >
    [요청을](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) 처음부터 끝까지 추적하려면 <DNT>**AJAX**</DNT> UI 에서 추적 링크를 클릭할 수도 있습니다.

    * 내보내는 트레이스 목록을 보려면 AJAX 요약 수준에서

      <DNT>
        **AJAX**
      </DNT>

      UI 의 링크를 클릭하세요.

    * 귀하가 필터링한 모든 트레이스와 특정 요청 유형을 보려면

      <DNT>
        **AJAX**
      </DNT>

      UI 에서 선택한 요청에 대한 독립 추적 링크를 클릭하세요.
  </Collapser>

  <Collapser
    id="time-percentage-example"
    title="시간 백분율 예"
  >
    AJAX 카테고리 목록을 <DNT>**Total time percentage**</DNT> 기준으로 정렬하면 목록에 각 AJAX 카테고리에 대한 백분율이 표시됩니다. 또한 차트에는 시간 비율이 가장 높은 상위 요청이 표시됩니다.

    이 정보를 제공하기 위해 브라우저는 각 AJAX 범주에 대한 누적 요청 시간을 취하여 모든 AJAX 요청에 대한 누적 요청 시간으로 나눕니다. 높은 처리량 요청이 낮은 처리량 요청보다 선호되기 때문에 응답 시간을 최적화할 위치를 식별하는 데 도움이 됩니다.

    <DNT>
      **Example: Calculating time percentages for two AJAX categories**
    </DNT>

    이 예에서는 `api1.example.com` 및 `api2.example.com` 의 두 AJAX 카테고리를 사용합니다.

    * `api1.example.com` 이(가) 1번 히트하고 응답하는 데 1초(1000ms)가 걸립니다(1 x 1초 = 1초).

    * `api2.example.com` 이(가) 500번 히트하고 응답하는 데 1ms가 걸립니다(500 x 1ms = 500ms 또는 0.5초).

      모든 AJAX 범주에 대한 누적 요청 시간은 1500ms 또는 1.5초입니다. 시간 백분율을 얻으려면 각 AJAX 범주를 누적 요청 시간으로 나눈 다음 백분율에 100을 곱하십시오.

      따라서 `api1.example.com` 은 총 시간 백분율의 67%(1000 나누기 1500, 곱하기 100)이고 `api2.example.com` 은 33%(500 나누기 1500, 곱하기 100)입니다.

      <table>
        <thead>
          <tr>
            <th>
              <DNT>
                **Time calculations**
              </DNT>
            </th>

            <th>
              <DNT>
                **api1**
              </DNT>
            </th>

            <th>
              <DNT>
                **api2**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              조회수
            </td>

            <td>
              1
            </td>

            <td>
              500
            </td>
          </tr>

          <tr>
            <td>
              응답 시간
            </td>

            <td>
              1초(1000ms)

              1 히트 x 1000ms = 1000ms(1초)
            </td>

            <td>
              1밀리초(1ms)

              500 히트 x 1ms = 500ms(0.5초)
            </td>
          </tr>

          <tr>
            <td>
              모든 AJAX 범주에 대한 누적 요청 시간
            </td>

            <td>
              1000ms + 500ms = 1500ms(1.5초)
            </td>

            <td>
              1000ms + 500ms = 1500ms(1.5초)
            </td>
          </tr>

          <tr>
            <td>
              시간 백분율 = 범주 / 1500ms 누적 요청 시간 x 백분율의 경우 100
            </td>

            <td>
              1000ms / 1500 x 100 = 67%
            </td>

            <td>
              500ms / 1500 x 100 = 33%
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>

## 무엇 향후 계획 [#next]

<DNT>**AJAX**</DNT> UI 외에도 다음 리소스를 사용할 수도 있습니다.

* 핵심성과지표(KPI) [알림을](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-alerts) 통해 문제 발생을 예방할 수 있습니다.
* [단일 페이지 앱(SPA) 모니터링을](/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring) 사용합니다. 이는 AJAX 요청을 사용하여 콘텐츠를 동적으로 가져오고 유동적인 사용자 경험을 생성하는 모든 앱에 유용합니다.
* UI 또는 API로 [데이터를 쿼리합니다](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data) . 예를 들어 [기본 브라우저 이벤트](/docs/insights/insights-data-sources/default-data/browser-default-events-insights) 로 쿼리하거나 지리 및 브라우저 데이터에 대해 [SPA `AjaxRequest`](/attribute-dictionary/?event=AjaxRequest) 를 사용하거나 고유한 [사용자 지정 데이터](/docs/telemetry-data-platform/get-data-new-relic/getting-started/introduction-new-relic-data-ingest-apis-sdks) 를 New Relic으로 가져올 수 있습니다.
* [차트](/docs/insights/use-insights-ui/manage-dashboards/chart-types) 와[대시보드](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards) 로 데이터를 시각화하고 공유하세요.
