---
title: 현재 상태 설정
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

디지털 경험을 개선하고 싶지만 개선되었는지 여부를 어떻게 알 수 있습니까? 먼저, 향후 데이터를 비교할 수 있도록 기준 성능을 알아야 합니다. 필요한 모든 것이 플랫폼에 올바르게 보고되고 있는지 확인한 후에는 정보를 검증하고 품질 기반 대시보드를 사용하여 고객 경험을 측정할 수 있습니다.

<Steps>
  <Step>
    ### 계측 페이지 검토 [#review-instrument]

    Google의 <InlinePopover type="browser"/>도구는 앱 데이터를 모니터링하는 좋은 방법이므로 디지털 환경 개선을 시작하는 가장 좋은 방법은 브라우저 대시보드를 검토하는 것입니다. 먼저, 브라우저 앱과 페이지를 검토하여 뉴렐릭에 보고할 것으로 예상되는 모든 항목이 실제로 보고되고 있는지 확인해야 합니다. 수집 중인 각 앱에 대한 브라우저 모니터링 UI에서 <DNT>**Page Views**</DNT> 탭을 검토하거나 다음 NRQL 쿼리를 실행하여 이를 수행할 수 있습니다.

    ```
    SELECT uniques(pageUrl) from PageView LIMIT MAX
    ```

    <Callout variant="tip">
      NRQL을 처음 사용하시나요? [NRQL 소개를](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/) 확인하여 맞춤형 쿼리 언어를 사용하여 데이터를 극대화하는 방법을 알아보세요!
    </Callout>
  </Step>

  <Step>
    ### 브라우저 URL 그룹화 확인 [#validate-grouping]

    이전 단계에서 계측된 페이지가 데이터를 올바르게 보고하는지 확인한 후에는 고객 경험을 개선하기 위해 사용 중인 데이터를 더 잘 구문 분석할 수 있도록 브라우저 세그먼트가 올바르게 캡처되었는지 확인해야 합니다. 세그먼트에 익숙하지 않다면 이는 단순히 URL의 두 `/`사이에 있는 텍스트이거나 도메인 이름의 `.`사이에 있는 텍스트일 뿐입니다.

    세그먼트가 많은 URL이 많은 경우 `website.com/product/widget-name` `website.com/` 또는 `website.com/product/` 가 되도록 URL을 요약할 수 있습니다. 첫 번째 버전은 작동하지만 두 번째 버전은 데이터에서 더 많은 세그먼트를 허용하므로 제품에 대한 고객 경험 데이터를 그룹화하는 더 유용한 방법입니다.

    <Callout variant="tip">
      구성을 조정해야 하는지 여부가 확실하지 않습니까? 도움이 [되도록 세그먼트 허용 목록 조사 대시보드](https://newrelic.com/instant-observability/browser-segment-investigation/eb24e234-90aa-4908-972d-64d6d56b557e) 를 가져오세요.
    </Callout>

    <img
      title="Segment allow-list (aka white-list) investigation"
      alt="Segment allow-list (aka white-list) investigation"
      src="/images/cx_screenshot-full_segment-whitelist-investigation.webp"
    />

    모든 세그먼트를 식별한 후 [브라우저의 세그먼트 허용 목록을](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding) 사용하여 세그먼트를 추가하면 더 쉽게 이해할 수 있는 세그먼트를 만들 수 있습니다.
  </Step>

  <Step>
    ### 데이터를 분류하는 방법 이해 [#understand-segment]

    이제 브라우저 URL 그룹화를 확인했으므로 고객 경험 데이터를 여러 세그먼트로 나누어 고객 경험 데이터를 더 쉽게 이해할 수 있습니다. 이전 단계와 달리 여기의 세그먼트는 URL 섹션( [세그먼트 허용 목록](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding) 에서와 같이)을 참조하지 않고 대신 데이터 그룹을 참조합니다.

    세그먼트를 사용하여 데이터를 다양한 방식으로 그룹화할 수 있습니다. 예를 들어:

    * 미국, 캐나다, EMEA의 사용자 대부분은 다음 페인트와의 상호작용에 2초 이상이 소요되는 반면, 말레이시아와 인도네시아의 사용자는 4초를 경험합니다. 세그먼트를 지리적 위치별로 그룹화하면 다음과 같은 인사이트가 제공됩니다.
    * 자동차 보험을 구입하는 고객은 일반적으로 가장 큰 내용의 페인트를 1초 동안 봅니다. 주택 보험의 경우 4초입니다.
    * 일주일 만에 모바일 브라우저 앱의 페이지 조회수는 700,000회에 달하는데, 데스크톱의 경우 300,000회에 달합니다.

      데이터를 분류하는 데 인기 있고 유용한 카테고리는 다음과 같습니다.

      <CollapserGroup>
        <Collapser
          id="Region"
          title="지역 및 위치"
        >
          <DNT>**Basic:**</DNT> 국가별로 그룹화합니다. 브라우저 이벤트에는 요청의 국가 코드가 자동으로 포함되므로 이를 더 자세히 분석하기 위해 수행할 작업이 없습니다.

          <DNT>**Advanced:**</DNT> 브라우저 모델링에서 [사용자 정의](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes/) 속성을 사용하여 자체 지역 속성을 생성하여 지역 그룹화가 지역 SLO 그룹과 일치하도록 만듭니다.

          `countryCode` 의 패싯

          관련 속성:

          * `regionCode`
          * `city`
          * `asnLatitude`
          * `asnLongitude`
        </Collapser>

        <Collapser
          id="Device"
          title="장치"
        >
          다음을 이해할 수 있도록 성과 및 참여 장치 유형을 분류합니다.

          * 데스크톱 대 모바일 브라우저 사용자의 일반적인 분석

          * 데스크탑 vs 모바일 브라우저 사용자 경험

            `deviceType` 의 패싯

            관련 속성:

          * `userAgentName`

          * `userAgentOS`

          * `userAgentVersion`
        </Collapser>

        <Collapser
          id="Product"
          title="제품 또는 사업 분야"
        >
          제품이 조직에서 제공하는 별도의 사업 분야 또는 서비스인 경우. 산업 및 해당 제품의 몇 가지 예:

          * 자동차보험과 주택보험을 모두 판매하는 보험회사입니다.

          * 여러 스트리밍 서비스 또는 채널을 보유한 미디어 회사입니다.

          * 호텔 예약은 물론 렌터카 서비스도 제공하는 여행사입니다.

            <DNT>**Basic:**</DNT> 제품별 성능 분석:

          * `pageUrl` 에 대한 패싯: New Relic에서 여러 제품을 하나의 브라우저 앱으로 그룹화할 때 이 접근 방식을 사용합니다.

          * `appName` 별 패싯: 각 제품을 별도의 웹 앱으로 계측할 때 이 접근 방식을 사용합니다.

          * `appName` 및 패싯별로 그룹화: 하나의 제품을 지원하는 브라우저에서 여러 앱을 hsbr하는 경우 이 접근 방식을 사용합니다.

            <DNT>**Advanced:**</DNT> [사용자 정의 속성을 사용하여 브라우저 페이지에 사용자 정의 속성](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes) 으로 제품 제공을 추가합니다.
        </Collapser>

        <Collapser
          id="Environment"
          title="환경"
        >
          계측 중 또는 계측 후 브라우저 앱 환경을 지정하는 명명 규칙입니다. 잘 명명된 브라우저 앱은 제품 및/또는 기능은 물론 환경도 지정합니다. 예:

          * `account-management.prod`
          * `hotels-book.prod`
          * `car-insurance.uat`

            앱 명명 규칙을 사용하여 해당 환경이 UI와 대시보드 모두에서 데이터 필터링을 지원한다는 점을 확인하세요. 자세한 내용은 [브라우저 앱 이름을 바꾸는 방법](/docs/browser/new-relic-browser/configuration/rename-browser-apps/) 에 대한 문서를 참조하세요.
        </Collapser>

        <Collapser
          id="Team"
          title="팀"
        >
          어떤 조직에서는 단일 팀이 여러 제품을 지원하는 반면, 다른 조직에서는 제품이 여러 팀에서 지원할 수 있을 만큼 충분히 큽니다. New Relic의 브라우저 앱 이름(예: `account-management.prod.unicorn-squad` )에 팀 이름을 추가하거나 [사용자 정의 속성](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes) 을 사용하여 고객 경험 또는 참여에 대한 팀 성과를 보고합니다.
        </Collapser>
      </CollapserGroup>
  </Step>

  <Step>
    ### 품질 기반 대시보드 가져오기 [#import-dashboard]

    <img
      title="Customer experience quality foundation dashboard"
      alt="Customer experience quality foundation dashboard"
      src="/images/cx_screenshot-full_qf-dashboard.webp"
    />

    다음 단계는 기본 성능에 대해 고객 경험을 측정하고 개선하는 데 사용할 수 있는 대시보드를 만드는 것입니다. 이것을하기 위해:

    1. [품질 기반 빠른 시작](https://newrelic.com/instant-observability/customer-experience-quality-foundation/7a5739bf-30ee-4be9-9705-14871cafd7f4) 으로 이동합니다.
    2. 대시보드를 설치하려면 빠른 시작의 지침을 따르세요.
    3. [제공된 가이드를](https://github.com/newrelic/newrelic-quickstarts/tree/main/quickstarts/oma-qf#readme) 사용하여 데이터 분할 계획에 맞게 맞춤설정하세요.

       <Callout variant="tip">
         최적화의 효과를 극대화하려면 대시보드를 팀이 아닌 사업부 또는 고객 대면 서비스에 맞춰 조정하세요!
       </Callout>
  </Step>

  <Step>
    ### 각 대시보드 페이지의 현재 성능 캡처 [#capture-performance]

    <img
      title="Capture current performance for each dashboard page"
      alt="Capture current performance for each dashboard page"
      src="/images/cx_diagram_qf_kpi_progress.webp"
    />

    현재 상태를 설정하는 마지막 단계는 대시보드 페이지에서 현재 성과를 캡처하는 것입니다. 이것을하기 위해:

    1. 세그먼트 허용 목록 및 품질 기반 대시보드를 안내하는 [품질 기반 GitHub README](https://github.com/newrelic/oma-resource-center/tree/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/quality-foundation) 의 지침을 따르세요.

    2. 이전 단계의 대시보드를 사용하여 각 비즈니스 라인의 전체 성과를 이해합니다. 해당하는 경우 필터를 적용하여 지역 또는 기기 전반의 성능을 확인하세요. 값이 목표 아래로 떨어지고 중요한 경우 개선 대상으로 시트에 추가하십시오. 추적 가치의 예:

       * 추적할 가치가 없음: 미국에서 보험을 판매하는 회사는 말레이시아에서만 실적이 저조하다는 것을 알았습니다.
       * 추적할 가치: 미국에서 보험을 판매하는 회사는 미국의 모바일 사용자와 관련하여 실적이 저조하다는 것을 알았습니다.
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-customer-experience/improve-customer-experience/","title":"다음 단계","body":"현재 상태의 데이터를 사용하여 개선하는 방법을 알아보세요."}}/>
