---
title: '분산 추적: 계획 가이드'
tags:
  - Understand dependencies
  - Distributed tracing
  - Get started
metaDescription: Enabling New Relic distributed tracing impacts some APM features.
freshnessValidatedDate: never
translationType: machine
---

분산 추적은 많은 제품에서 기본적으로 활성화되어 있지만 대규모 분산 시스템에서 배포할 계획이라면 아래 [계획](#rollout) 단계를 검토하는 것이 좋습니다.

또한 이전 버전의 <InlinePopover type="apm"/>에이전트를 사용하고 분산 추적을 사용하지 않은 경우 분산 추적을 출시하기 전에 [APM 기능에 미치는 영향을](#changes) 검토하는 것이 좋습니다.

## 출시 계획 [#rollout]

대규모 분산 시스템에 대해 분산 추적을 활성화하는 경우 다음과 같은 몇 가지 팁이 있습니다.

* 현재 APM 사용자인 경우 [APM 기능에 미치는 영향을](#changes) 참조하십시오.

* 비즈니스에 가장 중요하거나 분석 및 문제 해결이 필요할 가능성이 가장 높은 요청을 결정하고 해당 서비스에 대해 [분산 추적을 활성화](#enable) 합니다. 서비스에 대한 추적을 거의 동시에 활성화하여 종단 간 추적이 얼마나 완전한지 더 쉽게 측정할 수 있습니다.

* [분산 추적 UI](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data) 에서 추적을 보면 다른 서비스에 대한 외부 호출에 대한 추적의 범위가 표시됩니다. 그런 다음 원하는 서비스에 대해 [분산 추적을 활성화](#enable) 할 수 있습니다. 서비스가 상당히 독립형이고 다른 서비스와 컨텍스트에서 자주 사용되지 않는 경우 해당 서비스에 대해 분산 추적을 활성화하지 않을 수 있습니다.

  다음은 이러한 단계적 출시를 시각적으로 나타낸 것입니다.

  <img
    title="Diagram showing a roll-out strategy for distributed tracing."
    alt="Diagram showing a roll-out strategy for distributed tracing."
    src="/images/distributed-tracing_diagram_distributed-tracing-rollout.webp"
  />

* 대규모 모놀리식 서비스에 대해 <InlinePopover type="apm"/>를 사용하는 경우 트레이스당 하위 프로세스 범위가 많을 수 있으며 [APM 제한으로](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#rules-limits) 인해 예상보다 트레이 수가 줄어들 수 있습니다. APM 에이전트 측정을 사용하여 중요하지 않은 데이터 보고를 비활성화하면 이 문제를 해결할 수 있습니다.

* 분산 추적은 요청 경로에서 서비스 [간에 헤더 정보를 전파](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#headers) 하여 작동합니다. 일부 서비스는 헤더를 자동으로 전파하지 않는 프록시 또는 기타 중개 서비스를 통해 통신할 수 있습니다. 이 경우 `newrelic` 헤더 값이 소스에서 대상으로 전파될 수 있도록 해당 프록시를 구성해야 합니다.

## APM 기능에 미치는 영향 [#changes]

분산 추적은 APM의 이전 [교차 애플리케이션 추적 기능](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces) 을 개선합니다. 다음은 몇 가지 주요 이점입니다.

* 더 많은 교차 서비스 활동 세부 정보와 더 완전한 종단 간 추적을 확인하십시오.
* 추적을 필터링 및 쿼리하고 사용자 지정 차트를 만듭니다.
* 호출이 조직의 계정 경계를 넘어도 전체 추적을 확인합니다.
* 더 많은 기능은 [분산 추적 소개를](/docs/intro-distributed-tracing) 참조하세요.

[분산 추적을 활성화하면](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing#enable) 현재 사용 중인 일부 <InlinePopover type="apm"/>기능에 영향을 미칠 수 있습니다. 이러한 변경 사항은 수신 추적이 활성화된 에이전트의 인력 모니터에만 영향을 미치며 계정 수준에는 적용되지 않습니다.

향후 릴리스에서 영향을 받는 기능의 일부 또는 전체에 대해 이전 버전과의 호환성을 제공할 수 있습니다. 지금은 분산 추적을 활성화하기 전에 다음 변경 사항을 이해해야 합니다.

<CollapserGroup>
  <Collapser
    id="txn-trace-changes"
    title="트랜잭션 추적 UI는 트랜잭션 링크가 아닌 서비스 URL을 표시합니다."
  >
    응용 프로그램에 대해 분산 추적이 활성화되면 트랜잭션 추적 UI에 더 이상 호출된 서비스에 대한 트랜잭션 이름과 링크가 없습니다(아래 스크린샷 참조). 이것은 호출된 서비스의 URL로 대체됩니다.

    <img
      title="distributed-tracing_screenshot-full_transaction-trace-UI.png"
      alt="Distributed tracing - Transaction trace effects"
      src="/images/distributed-tracing_screenshot-full_transaction-trace-UI.webp"
    />

    <img
      title="distributed-tracing_screenshot-crop_trace-name-change-UI.png"
      alt="distributed-tracing_screenshot-crop_trace-name-change-UI.png"
      src="/images/distributed-tracing_screenshot-crop_trace-name-change-UI.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace)**</DNT>: 이 명령은 관련 프로세서에 대한 링크와 함께 형사 추적이 활성화되기 전의 프로세서 트레이스 UI 보여줍니다. 분산 추적이 활성화되면 서비스의 URL이 표시됩니다.
    </figcaption>

    트레이스 활동에 대한 자세한 내용을 보려면 <DNT>**Distributed tracing**</DNT> UI 페이지로 이동하여 해당 트레이스를 검사하세요.
  </Collapser>

  <Collapser
    id="cat-disabled"
    title="애플리케이션 간 추적이 비활성화됩니다."
  >
    분산 추적을 활성화하면 [애플리케이션 간 추적](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces) 기능이 비활성화됩니다. 분산 추적은 애플리케이션 간 추적의 개선된 버전이며 한 번에 하나만 사용할 수 있습니다.
  </Collapser>

  <Collapser
    id="maps-no-browser-mobile"
    title="모바일 모니터링과 관련된 영향"
  >
    APM 관련 영향은 다음과 같습니다.

    * APM-모니터 엔터티에 대해 구형 추적이 활성화된 경우 구형 [서비스 맵은](/docs/understand-dependencies/understand-system-dependencies/service-maps/introduction-service-maps)

      <InlinePopover type="mobile"/>

      별로 구형 모니터를 표시하지 않습니다.

    * 레거시 모바일 HTTP 요청 UI 페이지의 [앱 서버 드릴다운](/docs/mobile-monitoring/mobile-monitoring-ui/network-pages/http-requests-page#details) 기능을 사용할 수 없습니다.
  </Collapser>
</CollapserGroup>

## 분산 추적 사용 [#enable]

분산 추적은 기본적으로 활성화되어 있습니다. 구성 정보는 [분산 추적 설정 옵션을](/docs/distributed-tracing/concepts/quick-start) 참조하여 시작하세요.
