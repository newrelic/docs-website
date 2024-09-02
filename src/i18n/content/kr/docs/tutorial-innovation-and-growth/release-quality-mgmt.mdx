---
title: 릴리스의 품질을 향상시키세요
tags:
  - Observability maturity
  - Innovation and growth
  - Release quality
  - Implementation guide
metaDescription: Our release quality guide helps you use New Relic to improve and optimize the quality and cadence of your code deployments.
freshnessValidatedDate: never
translationType: machine
---

개발팀의 성공은 릴리스의 빈도와 성공에 달려 있습니다. 너무 느리게 릴리스하는 팀은 비즈니스 요구와 혁신을 따라잡을 수 없으며, 실패한 릴리스를 너무 많이 만드는 팀은 고객 만족도, 수익 및 전반적인 시스템 안정성에 부정적인 영향을 미칠 것입니다.

Google의 DORA( [DevOps Research and Assessment](https://www.devops-research.com/research.html) ) 팀은 소프트웨어 개발 조직의 성능을 나타내는 4가지 핵심 지표를 식별했습니다. 우리의 <DNT>**Innovation and Growth**</DNT> 가치 동인은 이러한 지표를 사용하여 더욱 안정적인 기능과 함께 보다 효율적이고 대응력이 뛰어난 개발 팀을 만드는 전체 프로그램을 만듭니다. 이 릴리스 품질 가이드는 배포 빈도, 애플리케이션 성능 및 애플리케이션 안정성을 향상하는 데 도움이 됩니다.

## 주요 컨셉 [#key-concepts]

유지 개념에는 다음이 포함됩니다.

### 의사 소통, 수정, 혁신 [#communicate]

New Relic의 관찰성 성숙도 실천의 중심 주제 중 하나는 "의사소통, 해결, 혁신"입니다. 우리는 특정 KPI를 사용하여 이해관계자에게 개발 관행의 현재 상태를 전달할 수 있도록 하여 해당 주제를 지원합니다. 그런 다음 이러한 KPI를 사용하여 개발 방식을 조정하고 느리고 신뢰할 수 없는 애플리케이션 구성 요소를 식별하여 후속 개발 스프린트에서 수정할 수 있습니다. 마지막으로 이러한 KPI를 사용하여 개발 방식을 보다 효율적으로 만들고 팀이 혁신할 시간을 추가할 수 있습니다.

### 트렁크 기반 개발 [#trunk]

트렁크 기반 개발은 "개발자가 <DNT>**trunk**</DNT> 이라는 단일 분기에서 코드에 대해 공동 작업하는 소스 제어 분기 모델은 문서화된 기술을 사용하여 수명이 긴 다른 개발 분기를 생성하라는 압력에 저항합니다."로 정의됩니다. 즉, 개발 작업을 단일 트렁크의 분기에 대해 수행되는 작은 배치로 나눕니다. 하나의 작업 배치가 완료되자마자 해당 분기가 다시 트렁크로 병합됩니다. 각 브랜치는 수명이 짧기 때문에 트렁크로 다시 병합하는 것이 간단하고 모든 개발자가 코드베이스의 최신 릴리스에서 작업할 수 있습니다.

이러한 관행은 DORA(DevOps Research and Assessment) 조직에서 더 빠른 제공과 더 높은 조직 성과를 촉진하는 핵심 기능으로 확인되었습니다. CI/CD의 필수 실습입니다.

### IT 서비스 경계 [#it-boundary]

릴리스 품질 개선은 IT 서비스 경계 수준에서 이루어집니다. 경계에서 서비스를 측정하면 해당 서비스의 업스트림에서 무슨 일이 일어나고 있는지 파악할 수 있습니다.

[서비스 수준 관리 가이드에서는](/docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/slm-implementation-guide) 서비스 경계 개념을 사용하여 해당 서비스의 응답 시간과 오류율을 측정합니다. 이 가이드에서는 동일한 개념을 사용하여 개발 방식이 서비스에 미치는 영향을 측정한 다음 개발 팀의 응답성, 혁신 능력 및 애플리케이션 안정성을 향상시킵니다.

## 핵심 성과 지표 [#key-perf-indicators]

개발 품질 프로세스를 사용하여 다음 KPI를 수집하고 측정합니다.

<CollapserGroup>
  <Collapser
    id="kpi-release-rate"
    title="출시율 KPI"
  >
    릴리스 비율은 시간 경과에 따른 릴리스 수를 측정합니다. 릴리스 이벤트에는 다음 속성이 포함되어야 합니다.

    * 애플리케이션 이름

    * 릴리스의 고유 식별자(SHA 서명, 버전 번호 등)

    * 추가된 코드 줄 수

    * 제거된 코드 줄 수

    * 릴리스가 발생한 날짜 및 시간

    * 릴리스를 배포한 사용자 또는 프로세스

    * 소스 코드 저장소에서 이 릴리스를 가리키는 URL

    * 이 릴리스가 새로운 릴리스인지 롤백 버전인지를 나타내는 표시기

      <DNT>**Goal:**</DNT> 릴리스 속도를 높입니다.

      <DNT>
        **Best practices:**
      </DNT>

    * 지속적인 개선 프로세스를 사용하여 릴리스 속도를 높이십시오.

    * 릴리스 실패의 영향을 줄이기 위해 각 릴리스의 변경 수를 최소화합니다.

    * 이 KPI를 비즈니스 영향에 다시 매핑하고 이해 관계자에게 보고합니다.
  </Collapser>

  <Collapser
    id="kpi-release-size-scope"
    title="릴리스 크기/범위 KPI"
  >
    릴리스 크기/범위는 추가되거나 제거된 코드 줄 수를 측정합니다. 대안으로 변경된 코드 베이스의 백분율을 측정할 수 있습니다.

    릴리스 비율 KPI에 정의된 대로 이 KPI를 릴리스 이벤트의 속성으로 포함해야 합니다.

    <DNT>**Goal:**</DNT> 각 릴리스의 크기/범위를 줄입니다.

    <DNT>
      **Best practices:**
    </DNT>

    * 릴리스 실패의 영향을 줄이기 위해 각 릴리스의 변경 수를 최소화합니다.
    * 이 KPI를 비즈니스 영향에 다시 매핑하고 이해 관계자에게 보고합니다.
  </Collapser>

  <Collapser
    id="kpi-app-resp-errors"
    title="앱 거래 응답성 및 오류 KPI"
  >
    앱 응답성 및 오류 KPI는 릴리스의 95번째 백분위수 응답 시간과 오류 볼륨을 측정합니다.

    관찰 가능성 계측을 사용하여 애플리케이션의 서비스 경계에서 모든 트랜잭션에 대해 이 KPI를 수집해야 합니다. KPI의 속성에는 최소한 다음이 포함되어야 합니다.

    * 트랜잭션 이름 및/또는 URI

    * 트랜잭션 시작 벽시계 시간

    * 거래 기간

    * 요청을 처리한 컴퓨팅 리소스

      <DNT>**Goal:**</DNT> 응답 시간을 개선하고 오류를 줄입니다.

      <DNT>
        **Best practices:**
      </DNT>

    * 서비스 수준 관리 기술을 사용하여 사용자에게 발생하는 오류가 더 적은 응답성 애플리케이션을 생성합니다.

    * 이 KPI를 사용하여 엔지니어링의 성능 향상 노력의 우선 순위를 정하십시오.

    * 관찰 가능성 솔루션을 사용하여 병목 현상에 대한 정보를 피드백하고 구성 요소를 개발 팀이 고칠 수 있도록 비난하십시오.
  </Collapser>

  <Collapser
    id="kpi-production-impact"
    title="생산 영향 KPI"
  >
    프로덕션 영향은 실패한 릴리스(예: 롤백되거나 배포에 실패한 릴리스)의 수를 측정합니다.

    릴리스 비율 KPI에 정의된 대로 이 KPI를 릴리스 이벤트의 속성으로 포함해야 합니다.

    <DNT>**Goal:**</DNT> 실패한 릴리스 수를 줄입니다.

    <DNT>
      **Best practices:**
    </DNT>

    * 프로덕션으로 이동하기 전에 비프로덕션 환경에서 배포를 현실적으로 테스트해야 합니다.
    * 실패한 배포에 대해 심층적인 회고를 수행하여 테스트 및 배포 프로세스의 격차를 발견하고 수정할 수 있습니다.
  </Collapser>

  <Collapser
    id="kpi-observability-coverage"
    title="관찰 가능성 커버리지 KPI"
  >
    이 KPI는 관측 가능성 계측이 있는 애플리케이션의 백분율을 측정합니다.

    <DNT>**Goal:**</DNT> 100% 적용 범위

    <DNT>
      **Best practices:**
    </DNT>

    * 응용 프로그램의 주요 구성 요소에 진단 도구를 추가합니다.
    * SLO 달성 실패를 사용하여 진단 프로세스를 구동하여 관찰 가능성 격차를 식별하고 채웁니다.
    * 인시던트 회고를 사용하여 관찰 가능성 격차를 식별하고 채웁니다.
  </Collapser>

  <Collapser
    id="kpi-support-ticket-volume"
    title="지원 티켓 수량 KPI(선택 사항)"
  >
    지원 티켓 볼륨은 이 릴리스에 대해 열린 지원 티켓 수를 측정합니다. 이것은 선택적 KPI입니다.

    이 KPI는 다음 속성이 있는 시간별 또는 일일 지표로 수집해야 합니다.

    * 애플리케이션 이름 및 릴리스

    * 시간소인

    * 심각도에 따라 열린 티켓 수

    * 심각도별 평균 마감 시간

      <DNT>**Goal:**</DNT> 지원포켓 수를 줄이세요.

      <DNT>
        **Best practices:**
      </DNT>

    * 특정 릴리스에 대해 지원 티켓을 상호 연결할 수 있는지 확인하세요.

    * 지원 티켓을 분석하여 발생한 문제의 종류를 이해하고 해당 정보를 사용하여 지속적인 개선을 추진하세요.
  </Collapser>

  <Collapser
    id="kpi-infra-costs"
    title="인프라 비용 KPI(선택 사항)"
  >
    이 KPI는 애플리케이션의 호스팅 비용을 측정합니다. 선택적 KPI입니다.

    <DNT>**Goal:**</DNT> 예측 가능하고 안정적인 비용 모델을 만듭니다.

    <DNT>
      **Best practices:**
    </DNT>

    * 각 애플리케이션의 호스팅 인프라 비용을 측정합니다.
    * 애플리케이션의 성능 대 비용 메트릭을 주기적으로 검토하여 애플리케이션이 기능 및 비즈니스 중요성에 적합한 리소스를 보유하고 있는지 확인하십시오.
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### 애플리케이션 식별 [#identify-application]

    첫 번째 단계는 개선 프로세스의 첫 번째 반복 범위에 있는 응용 프로그램을 식별하는 것입니다. 포함하기에 적합한 애플리케이션은 다음과 같습니다.

    * 활발히 개발 중입니다
    * 핵심 운영 서비스
    * 개발 주기가 느림
    * 배포 실패 기록 보유
  </Step>

  <Step>
    ### 필요한 KPI 수집 [#gather-kpis]

    다음으로 CI/CD 플랫폼, 소스 저장소, 관찰 솔루션 등과 같은 소스에서 정의된 대로 KPI를 수집해야 합니다. KPI의 소스를 식별한 후에는 이를 추출하여 New Relic 플랫폼으로 가져오는 방법을 식별해야 합니다.

    위의 [핵심 성과 지표](#key-perf-indicators) 섹션에서 필요한 KPI 및 최소 필수 속성을 확인할 수 있습니다. 일반적으로 개발 도구 체인의 API를 사용하여 KPI와 해당 속성을 추출한 다음 [사용자 정의 이벤트 API](/docs/data-apis/ingest-apis/introduction-event-api/) 를 사용하여 New Relic에 제출합니다.

    사용자 정의 통합 작업을 시작하기 전에 목표를 충족하는 즉시 사용 가능한 통합이 있는지 확인해야 합니다.
  </Step>

  <Step>
    ### 대시보드 구현 [#implement-dashboards]

    당사의 <InlinePopover type="dashboards"/>품질 개선 프로세스의 주요 동인입니다. 개선 노력을 식별하고 우선순위를 지정할 수 있도록 KPI와 추세가 표시됩니다. 샘플 대시보드는 [GitHub의 옵저버빌리티 성숙도 리소스 센터에서 찾을](https://github.com/newrelic/oma-resource-center) 수 있습니다.

    대시보드에 표시되는 정보는 개발 도구 체인에 따라 다르므로 정확한 사양에 맞게 [대시보드를 사용자 정의](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/) 해야 합니다.
  </Step>

  <Step>
    ### 릴리스 기준 설정 [#establish-baseline]

    [초기 활성화를 수행](#perform-enablement-one) 하기 전에 기준선을 구성하는 데 충분한 데이터가 필요하므로 개발 활동 샘플로 구성된 기준선을 설정해야 합니다. 일반적으로 이는 최소 2주가 소요되지만 현재 개발 속도에 따라 최대 6주까지 걸릴 수 있습니다. 이를 수행하는 한 가지 쉬운 방법은 해당되는 경우 기본 수집 및 평가 주기를 애자일 스프린트에 맞추는 것입니다.

    기준을 설정하는 동안 이벤트 데이터가 New Relic에 예상대로 누적되는지 정기적으로 확인해야 합니다.
  </Step>

  <Step>
    ### 팀과 만나기 [#meet-with-team]

    기준선을 설정한 후에는 개발 팀과 기타 이해관계자에게 수집된 데이터와 앞으로 따르게 될 지속적인 개선 프로세스를 소개하게 됩니다.

    이 프로세스는 네 가지 활동으로 구성됩니다.

    1. <DNT>
         **Introduce the concepts of trunk-based development**
       </DNT>

       : 귀하와 이해관계자는 트럭 기반 개발의 핵심 개념을 검토하고 현재 관행의 차이점을 파악한 다음 이를 구현하기 위한 전략을 수립합니다.

    2. <DNT>
         **Review your release KPIs and trends**
       </DNT>

       : 릴리스 속도, 릴리스 크기 및 범위 KPI를 검토하여 트렁크 기반 개발 구현을 향해 진전을 이루고 있는지 확인합니다. 귀하의 목표는 새 릴리스의 크기와 범위를 줄이면서 릴리스 속도를 높이는 것입니다.

    3. <DNT>
         **Review your application KPIs and trends**
       </DNT>

       : 여기에서는 애플리케이션의 성능과 오류 KPI를 검토하여 애플리케이션 안정성과 성능을 개선하기 위한 노력을 식별하고 우선순위를 지정합니다.

    4. <DNT>
         **Make technical recommendations**
       </DNT>

       : 여기서는 귀하와 관련 이해관계자가 릴리스 워크플로우 또는 옵저버빌리티 전략 변경과 같은 기술적 권장 사항을 식별하고 검토하게 됩니다.
  </Step>

  <Step>
    ### 개선 프로세스 시작 [#improvement-process]

    이 마지막 단계는 지속적인 개선 프로세스입니다. 이 단계에서는 [팀과 만나](#meet-with-team) 기준에 대한 진행 상황을 검토하고 전략을 조정하여 원하는 개선 사항을 제공하게 됩니다. 개선 프로세스의 각 주기는 개발 프로세스를 여러 번 반복한 후에 발생해야 합니다. 일반적으로 이러한 상황은 모든 Agile 스프린트의 중간 지점과 끝 부분에서 발생합니다.

    이 단계에서 다음을 수행해야 합니다.

    * 매주 KPI를 이해관계자에게 보고하여 팀이 작업 우선순위를 적절하게 지정하고 약속된 비즈니스 결과에 대한 진행 상황을 보여줄 수 있도록 하세요.
    * 시간이 지남에 따라 주간 KPI를 기록하고 유지하여 새로운 기준을 설정하고 개선 속도를 보여줍니다.
  </Step>
</Steps>

<UserJourneyControls previousStep={{"path":"/docs/tutorial-innovation-and-growth/development-quality-mgmt/","title":"이전 단계","body":"New Relic을 사용하여 개발 주기의 품질을 향상시키는 방법을 알아보세요."}}/>
