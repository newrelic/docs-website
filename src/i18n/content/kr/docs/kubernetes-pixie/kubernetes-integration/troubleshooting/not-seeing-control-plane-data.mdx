---
title: 제어 영역 데이터가 표시되지 않음
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data control plane data for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## 문제

[Kubernetes 설치 절차를](/install/kubernetes/) 완료했고 Kubernetes 계정에 Kubernetes 데이터가 표시되지만 제어 평면 구성 요소에서 데이터가 없습니다.

## 해결책

<CollapserGroup>
  <Collapser id="control-plane-sample-missing" title="제어 평면 샘플이 없습니다">
    제어 평면 데이터가 누락된 경우(예: `K8sSchedulerSample`) 가장 먼저 해야 할 일은 제어 평면 구성 요소의 자세한 로그를 확인하는 것입니다. [자세한 로깅을 활성화하는](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging) 방법을 읽어보세요.

    * 한 가지 가능성은 자동 검색이 가장 일반적인 레이블을 사용하여 Ubuntu에서 제어 평면 파드를 찾으려고 시도한다는 것입니다. 단일 구성 요소에 대한 파드가 발견되지 않더라도 추가 데이터가 누락되는 것을 방지하는 데 실패하지 않습니다. 다음과 유사한 로그가 표시됩니다.

      ```bash
      time="2022-06-21T12:21:25Z" level=debug msg="Autodiscovering pods for \"scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No \"scheduler\" pod has been discovered"
      ```

      이 경우 [Helm 차트 값](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) 의 `controlplane.config.[component].autodiscover[].selector` 구성을 사용하여 검색 동작을 변경할 수 있습니다. [제어 평면 구성 요소](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#nrk8s-controlplane) 에 대해 자세히 알아보세요.

    * 또한 제어 평면 구성 요소가 발견되었지만 엔드포인트와의 인증이 실패할 수도 있습니다. 다음과 유사한 로그가 표시됩니다.

      ```bash
      time="2022-06-21T15:54:52Z" level=debug msg="Endpoint \"https://localhost:10257\" probe failed, skipping: http request failed with status: 403 Forbidden"
      ```

      이 경우 helm [차트 값](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) 의 `controlplane.config.[component].autodiscover[].endpoints[].auth` 구성을 사용하여 각 엔드포인트에 대한 인증 동작을 변경할 수 있습니다.

    * 또한 통합의 제어 평면 구성 요소가 모든 제어 평면 노드에서 실행되지 않을 수도 있습니다. 다음 명령을 실행하여 다시 확인할 수 있습니다.

      ```bash
      kubectl get pod -n <NEWRELIC_NAMESPACE> -l app.kubernetes.io/component=controlplane -o wide
      ```

      뉴렐릭 모니터링 인스턴스가 없는 노드에서 실행되는 제어 평면 파드가 있는 경우 필요에 따라 [Helm 차트 값](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) 의 `controlplane.affinity`, `controlplane.nodeSelector` 및 `controlplane.tolerations` 를 변경할 수 있습니다.
  </Collapser>

  <Collapser
    id="control-plane-CrashLoopBackOff"
    title={<>제어 평면 구성 요소가 있습니다 <InlineCode>
      CrashLoopBackOff
    </InlineCode></>
    }
  >
    제어 평면 구성 요소가 `CrashLoopBackOff` 에 입력하는 제어 평면 파드를 자동으로 검색하거나 성공적으로 스크래핑하지 못하는 경우.

    사용자의 요구 사항에 맞게 자동 검색 동작과 인증 방법을 변경할 수 있습니다.

    반면, 해당 데이터에 관심이 없다면 [Helm 차트 값](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) 에서 `controlplane.enabled=false` 설정하여 제어 평면 구성 요소를 비활성화할 수 있습니다.
  </Collapser>
</CollapserGroup>