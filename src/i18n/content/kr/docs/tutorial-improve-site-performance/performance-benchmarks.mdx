---
title: 프런트엔드 성능 벤치마크 생성
metaDescription: Learn how to create and define performance benchmarks with service levels.
freshnessValidatedDate: never
translationType: machine
---

시스템 아키텍처는 서로 영향을 주고 의존하는 호스트, 앱 및 서비스로 구성됩니다. 아키텍처의 한 부분이 성능이 저하되면 나중에 중요한 시스템 중단으로 이어질 수 있습니다. 그러나 서비스 수준을 사용하면 시스템을 보다 쉽게 추적할 수 있는 임계값을 적용할 수 있습니다. 서비스 성능이 지정된 임계값을 초과하거나 미달하면 경고를 받습니다. 서비스 수준에 대한 계층은 다음과 같습니다.

* 서비스 수준은 서비스 수준 목표(SLO)로 구성됩니다. SLO는 서비스 작동 방식을 나타내는 목표입니다.
* SLO는 서비스 수준 지표(SLI)로 정의됩니다. SLI는 서비스 가용성을 결정하는 주요 측정 및 지표입니다.
* 이러한 목표 외에도 지표는 경고입니다. 서비스가 SLO를 충족하지 못하는 경우 이를 알려줍니다.

## 목표 [#objectives]

이 자습서에서는 서비스 수준으로 성능 벤치마크를 만드는 과정을 안내합니다. 자습서가 끝나면 다음 작업을 완료하게 됩니다.

* SLI(서비스 수준 지표)와 SLO(서비스 수준 목표) 간의 관계를 이해합니다.
* 프런트엔드 경험을 위한 SLI 및 SLO를 만들고 정의합니다.
* 서비스 성능이 저하될 때 알 수 있도록 알림을 설정하십시오.

## 서비스 수준 정의 [#define]

아래 단계에 따라 서비스 수준을 정의하고 관리하면 다음과 같은 기능이 제공됩니다.

* 손쉬운 향후 설정: 원클릭 설정으로 모든 서비스에 대한 성능 및 안정성 기준을 자동으로 설정합니다.
* 팀 간 안정성 정의: 서비스 경계를 결정하는 데 도움이 되는 SLO 및 SLI 권장 사항을 사용하여 힘든 정렬 프로세스를 방지합니다. 모든 엔터티의 최근 성능 메트릭을 기반으로 안정성 벤치마크를 자동으로 설정합니다.
* 반복 및 개선: Terraform과 같은 오픈 소스 코드형 인프라 도구를 통한 전체 스택 컨텍스트 및 자동화를 통해 팀은 특정 노드 또는 서비스가 시스템 안정성에 미치는 영향을 파악하고 성능을 신속하게 제어할 수 있습니다. 서비스 소유자와 비즈니스 리더 모두를 위한 사용자 지정 보기는 운영 효율성을 높이고 더 나은 보고, 경고 및 사고 관리 프로세스로 이어집니다.
* 안정성 표준화: 조직 간 팀은 서비스 안정성에 대한 통합되고 투명한 보기를 가지며 고객 대면 SLA를 더 잘 준수할 수 있습니다. SLO 규정 준수 메트릭 및 오류 예산은 조직이 일관성 있는 방식으로 애플리케이션, 인프라 및 팀 전체에서 안정성에 대해 보고하고 변경 사항을 구현할 수 있는 방법을 제공합니다.

## 성능 벤치마크 생성 [#create]

<Steps>
  <Step>
    ## 서비스 수준 지표 선택:

    프런트엔드 경험 벤치마크를 정의하는 데 사용할 수 있는 SLI가 많이 있지만 다음은 특별히 권장하는 몇 가지입니다. 축소기마다 해당 SLI 및 해당 NRQL 쿼리(2단계에서 사용)를 선택해야 하는 경우에 대한 설명이 있습니다.

    지금은 다음 중 하나를 선택하십시오.

    <DNT>**SLIs for APM services instrumented with the New Relic agent**</DNT>: `Transaction` 이벤트를 기반으로 하는 SLI는 요청 기반 서비스에 가장 일반적입니다.

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="service-availability"
        title="서비스 성공"
      >
        서비스 성공은 전체 요청 수에 대한 성공적인 응답 수의 비율입니다. 실제로 이는 오류율이지만 예상 오류를 제거하는 등 필터링할 수 있습니다.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}'
        ```

        여기서 `{entityGuid}` 은 서비스의 GUID입니다.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: TransactionError
        WHERE: entityGuid = '{entityGuid}' AND error.expected IS FALSE
        ```

        여기서 `{entityGuid}` 은 서비스의 GUID입니다.
      </Collapser>

      <Collapser
        className="freq-link"
        id="service-latency"
        title="서비스 지연"
      >
        대기 시간 SLI는 좋은 경험으로 설정된 임계값보다 빠르게 제공된 유효한 요청의 비율을 측정합니다.

        기간 임계값을 결정하려면 지난 몇 주 동안 서비스가 어떻게 수행되었는지 확인하고 그 결과를 현실적이고 달성 가능한 기준으로 사용하십시오. 그런 다음 SLI 임계값을 반복하고 더 야심찬 성능에 맞출 수 있습니다.

        기간 조건에 대한 적절한 값을 선택하기 위한 한 가지 일반적인 방법은 지난 7일 또는 15일 동안 응답의 95백분위수 기간을 선택하는 것입니다. [쿼리 빌더를](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder/)사용하여 이 기간 임계값을 찾고 이를 사용하여 SLI에 적합한 이벤트를 결정합니다.

        ```sql
        SELECT percentile(duration, 95) FROM Transaction WHERE entityGuid = '{entityGuid}' since 7 days ago limit max
        ```

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web'
        ```

        여기서 `{entityGuid}` 은 서비스의 GUID입니다.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web' AND duration < {duration}
        ```

        * 여기서 `{entityGuid}` 은 서비스의 GUID입니다.
        * 여기서 `{duration}` 은 클라이언트 서비스 또는 최종 사용자에게 좋은 경험을 제공한다고 생각하는 응답 시간(초)입니다.
      </Collapser>
    </CollapserGroup>

    <DNT>**SLIs for browser applications**</DNT>: 다음 SLI는 Google의 코어 웹 바이탈을 기반으로 합니다.

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="browser-availability"
        title="브라우저 앱 성공"
      >
        오류 없이 제공되는 페이지뷰의 비율입니다.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageView
        WHERE: entityGuid = '{entityGuid}'
        ```

        여기서 `{entityGuid}` 은 서비스의 GUID입니다.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: JavaScriptError
        WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
        ```

        여기서 `{entityGuid}` 은 브라우저 앱 GUID입니다.
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-contentful-paint"
        title="브라우저 앱에서 가장 큰 콘텐츠가 포함된 페인트"
      >
        뷰포트에 표시되는 가장 큰 콘텐츠 요소가 좋은 경험에 해당하는 것으로 간주되는 임계값보다 빠르게 렌더링된 유효한 페이지 뷰의 비율입니다.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint IS NOT NULL
        ```

        여기서 `{entityGuid}` 은 서비스의 GUID입니다.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint < '{largestContentfulPaint}'
        ```

        * 여기서 `{entityGuid}` 은 브라우저 앱 GUID입니다.
        * 여기서 `{largestContentfulPaint}` 은 최종 사용자에게 좋은 경험을 제공한다고 생각하는 표시 영역에 표시되는 가장 큰 콘텐츠 요소를 렌더링하는 데 걸리는 시간(밀리초)입니다. 빈번한 표준은 4000ms입니다.

        사용자 환경에서 `{largestContentfulPaint}` 에 사용할 현실적인 숫자를 결정하기 위해 한 가지 일반적인 방법은 지난 7일 또는 15일 동안 응답의 95 백분위수 기간을 선택하는 것입니다. 쿼리 빌더를 사용하여 찾습니다.

        ```sql
        SELECT percentile(largestContentfulPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-first-delay"
        title="브라우저 앱을 다음 페인트로 확장"
      >
        사용자가 페이지와 처음 상호작용한 시간과 브라우저가 해당 상호작용에 응답한 시간 사이의 시간이 특정 임계값 미만인 페이지 조회수의 비율입니다.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint IS NOT NULL
        ```

        여기서 `{entityGuid}` 은 서비스의 GUID입니다.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint < {interactionToNextPaint}
        ```

        * 여기서 `{entityGuid}` 은 브라우저 앱 GUID입니다.
        * 여기서 `{interactionToNextPaint}` 은 최종 사용자에게 좋은 경험을 제공하기 위해 브라우저가 응답해야 하는 시간(밀리초)입니다. 빈번한 표준은 300ms입니다.

        사용자 환경에서 `{interactionToNextPaint}` 에 사용할 현실적인 숫자를 결정하기 위해 한 가지 일반적인 방법은 지난 7일 또는 15일 동안 응답의 95 백분위수 기간을 선택하는 것입니다. 쿼리 빌더를 사용하여 찾습니다.

        ```sql
        SELECT percentile(interactionToNextPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX FACET deviceType
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-cumulative-shift"
        title="브라우저 앱 누적 레이아웃 전환"
      >
        CLS(누적 레이아웃 전환)가 좋은 페이지 보기의 비율입니다. CLS는 페이지의 전체 수명 동안 발생하는 모든 예상치 못한 레이아웃 전환에 대한 모든 개별 레이아웃 전환 점수의 총합으로 설명됩니다. 레이아웃 이동은 보이는 요소가 렌더링된 프레임에서 다음 프레임으로 위치를 변경할 때마다 발생합니다.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift IS NOT NULL
        ```

        여기서 `{entityGuid}` 은 서비스의 GUID입니다.

        데스크톱 및 모바일 장치에서 별도로 CLS를 추적하기 위해 별도의 SLI를 만들려면 필드 끝에 다음 절 중 하나를 추가합니다.

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift < {cumulativeLayoutShift}
        ```

        * 여기서 `{entityGuid}` 은 브라우저 앱 GUID입니다.
        * 여기서 `{cumulativeLayoutShift}` 은 사전 설정 값입니다. 좋은 사용자 경험을 제공하려면 사이트의 CLS 점수가 0.1 이하가 되도록 노력해야 합니다. 0.25점 이상의 CLS 점수는 열악한 사용자 경험으로 간주됩니다.

        유효한 이벤트 쿼리를 정의할 때 데스크톱 및 모바일 장치에서 별도로 CLS를 추적하기 위해 별도의 SLI를 만들기로 결정한 경우 필드 끝에 다음 절을 추가합니다.

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        환경에서 `{cumulativeLayoutShift}` 에 대해 선택할 현실적인 숫자를 결정하기 위해 일반적인 방법 중 하나는 모바일 및 데스크톱 기기에 걸쳐 분류된 지난 7일 또는 15일 동안 페이지 로드의 75번째 백분위수를 선택하는 것입니다. 쿼리 빌더를 사용하여 찾습니다.

        ```sql
        SELECT percentile(cumulativeLayoutShift, 95) FROM PageViewTiming WHERE  entityGuid = '{entityGuid}' since 7 days ago limit max facet deviceType
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="tip">
      조직은 특정 요구 사항, 사용자의 기대치 및 사용 가능한 리소스를 기반으로 SLO 및 SLI를 정의해야 합니다. 이 자습서를 완료한 후 [세분화된 사용자 지정 서비스 수준을 정의하는 방법에 대해 자세히 알아보는 것이](/docs/service-level-management/create-slm/#define-user-exp)좋습니다.
    </Callout>
  </Step>

  <Step>
    <img
      title="SLI ui"
      alt="An image of the service level maangement ui"
      src="/images/sonic_screenshot-full_sli-ui-overview.webp"
    />

    1. <DNT>
         **[one.newrelic.com](https://one.newrelic.com) > All capabilities > Service levels management**
       </DNT>

       으로 이동합니다. 이 UI에는 모든 서비스 수준이 표시되며 서비스 수준을 정의, 모니터링, 편집할 수 있습니다.

    2. UI 오른쪽 상단에서

       <DNT>
         **+ Add a service level**
       </DNT>

       선택합니다.
  </Step>

  <Step>
    서비스 카테고리를 생성하려는 해당 부분을 선택하세요. 이는 전체 워크로드, 특정 서비스, 신세틱스 모니터 또는 특정 프로세서일 수 있습니다. 분리를 선택한 후 UI 창 왼쪽에 있는 <DNT>**Continue**</DNT> 을 클릭하세요.
  </Step>

  <Step>
    이 창에서 1단계에서 선택한 SLI를 정의합니다. 예를 들어 브라우저 앱 성공을 위해 SLI를 정의하도록 선택한 경우 다음 쿼리를 사용합니다.

    <DNT>**Query for valid events**</DNT>:

    ```sql
    FROM: PageView
    WHERE: entityGuid = '{entityGuid}'
    ```

    <DNT>**Query for bad events**</DNT>:

    ```sql
    FROM: JavaScriptError
    WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
    ```

    쿼리가 올바른지 확인한 후 왼쪽 창에서 <DNT>**Continue**</DNT> 선택합니다.
  </Step>
</Steps>

## 다음은 뭐지? [#next]

축하해요! New Relic을 사용하여 사이트 성능을 향상시키는 방법에 대한 여정을 완료하셨습니다! 이 튜토리얼에서는 사이트 성능 개선에 대한 몇 가지 사항을 배웠습니다. 다음 방법을 배웠습니다.

* 사이트를 계측하여 사이트의 현재 성능에 대한 통찰력을 제공할 수 있는 데이터를 잠금 해제하세요.
* 최종 사용자 경험 개선에 대한 올바른 결정을 내릴 수 있도록 핵심 웹 바이탈을 평가하세요.
* 높은 대기 시간을 수정하고 JavaScript 오류를 줄여 사이트를 개선하세요.
* 시간 경과에 따른 성능을 추적하기 위해 성능 벤치마크를 만듭니다.

New Relic은 성능 향상에 도움이 되는 다른 기능을 제공합니다. 이 튜토리얼은 귀하의 사이트에 중점을 두고 있지만 다른 튜토리얼도 확인해 보세요.

* 앱이 느린가요? [내 앱이 앱과 관련된 일반적인 문제를 해결하는 속도가 느린지](/docs/tutorial-app-slow/root-causes) 확인하세요.
* 인프라가 계측되었으나 호스트 데이터를 수집하는 방법을 모르십니까? [인프라 데이터 튜토리얼을 사용하여 호스트 문제 해결을](/docs/tutorial-troubleshoot-infra-hosts/diagnose-app-infra-data) 확인하세요.
* 알림이 필요하지만 어디서부터 시작해야 할지 모르시나요? [알림 생성 및 관리](/docs/tutorial-create-alerts/create-new-relic-alerts) 튜토리얼을 확인하세요.
