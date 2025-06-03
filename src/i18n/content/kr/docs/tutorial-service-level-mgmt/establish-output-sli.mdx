---
title: 출력 성능 SLI 설정
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

방대한 양의 데이터를 효율적으로 관리하고 쿼리하는 능력은 뉴렐릭의 핵심 기능 중 하나입니다. 클라이언트 대면 기능을 측정하는 것과 동일하게 쿼리 출력 상태를 측정합니다. 즉, 얼마나 빠르고 오류 없는 HTTP 쿼리 요청이 응답을 받는지를 기준으로 합니다. 이를 출력 성능이라고 하며 SLI를 측정하여 이를 추적할 수 있습니다. 아래 절차를 사용하여 출력 성능 SLI를 설정하면 애플리케이션의 응답 시간과 오류율을 모두 추적할 수 있습니다.

<Steps>
  <Step>
    ## 앱 찾기

    먼저 SLI를 만들려는 앱을 설정했는지 확인해야 합니다. 찾을 수 없거나 아직 설정하지 않은 경우 계속하기 전에 다음을 수행하십시오.

    * 사용자의 기본 애플리케이션을 [뉴렐릭 APM 에이전트](/docs/apm/new-relic-apm/getting-started/introduction-apm) 로 만들었습니다.
    * 쉽게 찾을 수 있도록 친숙한 명명 규칙을 사용하여 독창적인 이름을 지정하세요.
    * [one.newrelic.com > All entities](https://one.newrelic.com/nr1-core) 에서 신청서를 찾으세요.

      **All entities** 아래에서 애플리케이션(엔티티 유형 `Services - APM`)을 찾아 선택합니다. 아래 개요 화면이 표시되지만 **아직 `Service levels` 클릭하지 마세요.**

      <img
        alt="APM Overview screenshot"
        src="/images/apm_screenshot-full_overview-screen.webp"
      />
  </Step>

  <Step>
    ## 서비스 경계 식별 [#identifying-service-boundary]

    다음으로 서비스의 결과를 측정하고 있는지 확인해야 합니다. 애플리케이션의 의존성/종속성은 각각 응답 시간과 성공률에 영향을 주지만, 요청이 수신되고 응답하는 시점에서 최종 및 총 응답 시간과 성공률을 측정할 수 있습니다.

    [서비스 맵](/docs/new-relic-one/ui-data/service-maps/how-use-service-maps/) 과 [자동 맵을](/docs/new-relic-one/ui-data/automaps) 사용하면 현재 보고 있는 애플리케이션이 의존성/종속성인지 아니면 엔드포인트 API를 실행하는지 확인하는 데 도움이 됩니다.

    아래 스크린샷 예에서는 주문 처리를 지원하는 모든 애플리케이션을 볼 수 있습니다. #2(Order-Composer)를 선택하는 것부터 시작합니다. 그런 다음 **Service maps** 클릭하고 **Order-Composer** 가 실제로 의존성/종속성임을 확인합니다. 진정한 헬스 레벨 서비스를 구축하려면 #1(주문 처리)을 선택해야 합니다.

    <img
      alt="Service map example"
      src="/images/apm_screenshot-crop_service-boundary.webp"
    />

    <Callout variant="tip">
      귀하의 팀은 **Order-Composer** 의존성/종속성에 대해서만 책임을 질 수 있습니다. 그렇다면 **Order-Composer** 의 자체 서비스 레벨에서 성능을 자체 모니터링할 수 있습니다. 상태 보고서에서 더 나은 필터링이 가능하도록 고객이 아닌 서비스 레벨에 `customer-facing:false` 태그를 지정했는지 확인하세요. 또한, 진정한 출력 성능, 입력 연결 서비스 레벨 및 클라이언트 서비스 레벨을 만들기 위해 옵저버빌리티 기간 동안 고객 대면 엔드포인트(#1 주문 처리) 작업을 고려해보세요.
    </Callout>
  </Step>

  <Step>
    ## 기준선 만들기

    서비스 레벨을 생성할 때 먼저 애플리케이션의 출력 성능을 기준으로 살펴보고 서비스 레벨을 구현하기 위해 설정해야 합니다. 기준점을 만들면 기준점으로 서비스 성능을 측정한 다음, 서비스 레벨 보고서를 사용하여 해당 기준점에 도달했는지 여부를 확인할 수 있습니다. 거의 모든 데이터세트에 대한 기준선을 만들 수 있습니다. 그러나 다양한 사용 사례에서는 다양한 수식과 권장 사항을 사용합니다.

    응답 시간(지연시간)과 오류가 없는 비율(성공)을 시작 기준으로 사용할 수 있습니다. 이렇게 하면 신뢰성 상태 지표가 생성됩니다.

    좋은 기준을 설정하려면 1-2주간의 성능 데이터 기록을 확보하는 것이 좋습니다. 계절성과 최대 사용량이 성능에 영향을 주어서는 안 되며, 측정에 더 많은 기록을 포함할수록 릴리스와 다른 코드베이스를 포함할 가능성이 높아집니다. 이전 구현, 배포는 아무리 작더라도 결과를 왜곡할 수 있습니다.

    다음은 지연시간에 대한 7일 서비스 수준 목표(SLO)의 추천된 터보에 대한 NRQL 쿼리의 예입니다.

    ```
    FROM Transaction SELECT percentile(duration, 95) AS 'Latency Baseline SLI' WHERE appName='Order-Processing' SINCE 1 WEEK AGO
    ```

    <img
      alt="Latency Baseline"
      src="/images/apm_screenshot-full_latency-baseline.webp"
    />

    성공적인(오류 없는) 기준선을 얻으려면 다음 쿼리를 시도해 보십시오. 자신의 애플리케이션 이름을 `Order-Processing` 으로 대체해야 합니다.

    ```
    FROM Transaction SELECT percentage(count(*), WHERE error is false) AS 'Success Baseline SLI' SINCE 1 WEEK AGO WHERE appName='Order-Processing'
    ```
  </Step>

  <Step>
    ## 서비스 수준 만들기

    **참고:** **서비스 수준 추가** 버튼이 표시되지 않으면 New Relic 관리자에게 권한을 확인하십시오.

    우리 플랫폼은 권장되는 <InlinePopover type="apm"/>및 브라우저 기준을 자동으로 계산합니다. 2단계에서 선택한 애플리케이션 APM 데이터를 찾아 **Service levels** 클릭하면 아래와 같은 뷰가 표시됩니다.

    <img
      alt="Service levels start from APM"
      src="/images/apm_screenshot-full_sl-start-from-apm.webp"
    />

    **Add baseline service level objectives** 클릭하여 지연시간 SLI와 성공 SLI 및 각각의 목표를 생성하세요. 각 SLO 스코어카드의 오른쪽 상단에 있는 줄임표 아이콘을 클릭하면 모든 설정을 보고 변경할 수 있습니다.

    <Callout variant="tip">
      데이터 수명 및 쿼리 성능을 위해 [이벤트-메트릭 서비스를](/docs/data-apis/convert-to-metrics/create-metrics-other-data-types/) 사용하므로 데이터가 SLO 점수를 채우는 데 약 10분이 걸립니다. 변환이 이루어지고 데이터가 채워지기 시작하는 데 잠시 시간이 걸립니다.
    </Callout>
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"다음 단계","body":"입력 지표 및 목표를 만드는 방법 알아보기"}}/>
