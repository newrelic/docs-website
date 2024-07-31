---
title: Kubernetes 클러스터 이해 및 모니터링
freshnessValidatedDate: '2023-07-18T00:00:00.000Z'
translationType: machine
---

Kubernetes 시스템을 구성하는 요소를 검토하고 New Relic이 클러스터 전체 수준에서 시스템을 이해하는 데 어떻게 도움이 되는지 살펴보겠습니다.

## 이해하려면 분해하세요

먼저 Kubernetes 시스템을 별개의 레이어로 나누어 보겠습니다.

<img
  title="k8sDiagramContext"
  alt="an image showing an abstracted view of a kubernetes system. This includes pods, apps, and clusters"
  src="/images/tutorials_diagram_kubernetes-overview.webp"
/>

세 가지 주요 섹션을 통해 Kubernetes 시스템에 대해 논의하겠습니다.

* **The cluster** \[클러스터]: 전체 Kubernetes 시스템을 나타냅니다. 클러스터에는 여러 배포가 포함되어 있으며 여기에는 많은 Pod가 포함됩니다. 각 포드는 개별 서비스와 애플리케이션을 유지 관리합니다.
* **오케스트레이션**: 이는 Kubernetes 시스템의 핵심 요소입니다. 오케스트레이션된 구성 요소는 필요에 따라 포드를 위아래로 회전시키는 전체 배포로 구성됩니다.
* **The services and applications** \[서비스 및 애플리케이션]: 서비스와 애플리케이션은 Kubernetes 시스템의 핵심입니다. Kubernetes 시스템 내에서 각 포드에는 하나 이상의 서비스와 애플리케이션이 포함되어 있습니다. 서비스와 애플리케이션은 시스템의 목적을 달성하는 필수 기능을 제공합니다. 이는 계산, 웹 앱 또는 기타 애플리케이션일 수 있습니다.

이러한 섹션은 서로 중첩되어 있다는 점에 유의하는 것이 중요합니다. 클러스터에는 여러 개의 오케스트레이션된 레이어가 포함되어 있으며, 각 오케스트레이션된 레이어는 여러 서비스 및 애플리케이션 레이어로 구성됩니다.

<Callout variant="important">
  Kubernetes 시스템을 분할하여 이해하는 방법에는 여러 가지가 있습니다. 이러한 계층은 시스템에 대해 생각하는 한 가지 방법일 뿐입니다.
</Callout>

## 클러스터 계층 이해 및 모니터링

수많은 배포와 Pod가 있는 대규모 Kubernetes 시스템에서는 각 구성 요소를 수동으로 모니터링하는 것이 비현실적입니다. 수십 또는 수백 개의 배포를 처리해야 할 수 있으며 이는 결국 수백 또는 수천 개의 개별 포드, 서비스 및 애플리케이션을 모니터링해야 할 수도 있음을 의미합니다. New Relic은 전체 시스템의 상태를 감독하고 적시에 데이터를 수신할 수 있는 보다 효율적인 접근 방식을 제공합니다. <InlinePopover type="alerts"/>문제가 발생할 때.

다음 단계는 클러스터에 대한 일반적인 모니터링 전략을 안내합니다.

<Steps>
  <Step>
    ## Kubernetes 개요 대시보드로 이동

    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Kubernetes > Overview Dashboard** 로 이동합니다. 사용 가능한 모든 그래프를 보려면 아래로 스크롤하세요.

    데이터가 표시되지 않으면 이전 튜토리얼에서 [모니터링을 설정했는지 확인하세요 ](/docs/tutorial-kubernetes-learn/tutorial-k8s-intro/#install-new-relic-agent).
  </Step>

  <Step>
    ## 클러스터 분류

    Kubernetes 개요 대시보드에는 클러스터에 대한 상위 수준 데이터가 표시됩니다. Pod 및 서비스 수와 같은 일반 데이터를 찾을 수 있습니다. 더 중요한 것은 실행 중인 포드 비율, 실패한 포드 수, 컨테이너 재시작 횟수 등과 같은 클러스터 상태에 대한 데이터를 찾을 수 있다는 것입니다.<img title="tutorialOverviewdashboard" alt="The main overview dashboard for the kubernetes capability" src="/images/tutorial_screenshot-full_overview-dashboard.webp"/>

    이 대시보드를 사용하여 클러스터의 일반적인 상태를 측정하세요. 찾아야 할 몇 가지 사항은 다음과 같습니다.

    <table>
      <thead>
        <tr>
          <th>
            요소
          </th>

          <th>
            그것이 나타내는 것
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            빨간색 또는 노란색 타일
          </td>

          <td>
            노란색 타일은 경고입니다. 그들이 무엇을 언급하는지 주의깊게 살펴보세요. 예를 들어 비정상 배포가 2개 있는 경우 해당 배포에 대해 기록하고 문제 해결 계획을 세워야 합니다.

            빨간색 타일은 중요한 경고입니다. 이것이 반드시 시스템 오류인 것은 아니지만 가능한 한 즉시 문제를 해결하는 데 우선순위를 두어야 합니다.
          </td>
        </tr>

        <tr>
          <td>
            그래프의 비정상적인 급증
          </td>

          <td>
            시간 경과에 따른 보류 중인 Pod 또는 시간 경과에 따른 메모리 사용률 등을 보여주는 다양한 그래프가 있습니다.

            위 스크린샷의 이유별 **Kubernetes Warning Events by Reason** \[Kubernetes 경고 이벤트] 그래프의 급증과 같이 급증이 항상 우려할 만한 원인은 아닙니다. 이러한 급증은 약 5분마다 정기적으로 발생하므로 위험 신호가 발생하지 않습니다. 규칙적인 패턴을 벗어나 발생하는 스파이크나 정상보다 훨씬 큰 규모의 스파이크를 찾아보세요.
          </td>
        </tr>

        <tr>
          <td>
            노드 준비
          </td>

          <td>
            클러스터의 노드가 준비되어 포드를 호스팅할 수 있는지 확인합니다. 클러스터의 인프라가 병목 현상 없이 워크로드를 처리할 수 있는지 확인하세요.
          </td>
        </tr>

        <tr>
          <td>
            리소스 수 통찰력
          </td>

          <td>
            클러스터 내의 포드, 컨테이너, 노드 또는 기타 Kubernetes 리소스 수를 주의 깊게 관찰하세요. 항상 실행 가능한 항목을 찾을 수는 없지만 리소스 활용도를 모니터링하면 향후 확장을 계획할 수 있습니다.
          </td>
        </tr>
      </tbody>
    </table>

    페이지 왼쪽 상단에 있는 시간 선택기를 사용하면 여러 기간의 데이터를 확인하여 문제가 있는 데이터가 무작위가 아닌지 확인하거나 더 긴 기간에 걸쳐 분류할 수 있습니다.
  </Step>
</Steps>

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-kubernetes-learn/tutorial-k8s-orchestrated","title":"다음 단계","body":"Kubernetes 배포 및 Pod를 모니터링합니다."}}
  previousStep={{"path":"/docs/tutorial-kubernetes-learn/tutorial-k8s-intro","title":"이전 단계","body":"Kubernetes 모니터링에 대해 알아보세요."}}
/>
