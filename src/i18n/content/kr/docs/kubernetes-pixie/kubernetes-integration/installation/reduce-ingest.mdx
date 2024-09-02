---
title: 수집된 데이터 줄이기
tags:
  - Integrations
  - Kubernetes integration
  - Understand and use data
metaDescription: 'New Relic''s Kubernetes integration: How to reduce the data ingested.'
freshnessValidatedDate: '2024-07-09T00:00:00.000Z'
translationType: machine
---

[데이터 수집을](/docs/data-apis/manage-data/manage-data-coming-new-relic/) 검토했으며 더 적은 양의 데이터를 전송하고 수집된 데이터를 줄이려는 경우 다음과 같은 솔루션이 있습니다.

* 세트 `global.lowDataMode`
* 스크래핑 간격 변경
* 네임스페이스 필터링

각 옵션에 대해 설명하겠습니다.

## 설정을 통해 수집되는 데이터를 줄입니다. `global.lowDataMode` [#reduce-data-ingest]

비용을 절감하려는 경우 `global.lowDataMode` 매개변수, 값을 수정할 수 있습니다. 이렇게 하면 보내는 지표 수가 줄어듭니다. 이 모범 사례의 수정은 Kubernetes 설치하는 데 사용한 방법에 따라 달라집니다.

* **안내 설치** (뉴렐릭 CLI, Helm, 매니페스트). 설치 명령에는 `NRI_CLI_LOW_DATA_MODE`, `NRI_CLI_PROMETHEUS_AGENT_LOW_DATA_MODE` 및 `NRI_CLI_LOGGING_LOW_DATA_MODE` 와 같은 시도가 있으므로 기본적으로 `lowDataMode` 포함됩니다.
* **Helm**. [`nri-bundle` 차트](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) 의 `global.lowDataMode` 모범 사례를 true로 설정합니다.
* **Manifest**. `LowDataMode` 는 Helm 차트 전용이며 Helms 차트는 매니페스트에 적용되는 템플릿입니다. 누군가 Helm 차트에서 `LowDataMode` 적용하면 최종 매니페스트에 몇 가지 작은 변경 사항이 적용됩니다. 매니페스트의 변경 사항은 특정 설정에 관한 것이지만 이름이 `LowDataMode` 인 레스토랑에 대한 변경 사항은 아닙니다.

`lowDataMode` 조치는 [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) 차트의 다음과 같은 특정 구성 요소에 영향을 미칩니다.

<CollapserGroup>
  <Collapser
    id="nr-infra"
    title="New Relic 기반 시설"
  >
    `lowDataMode` 이 활성화되면 기본 스크래핑 간격이 `15s` 에서 `30s` 으)로 변경됩니다. `lowDataMode` 보다 우선 적용되는 `config.interval` 를 사용하여 사용자 정의 값을 지정할 수도 있습니다.
  </Collapser>

  <Collapser
    id="prometheus-agent"
    title="Prometheus 에이전트 통합"
  >
    `lowDataMode` 활성화하면 기본적으로 `kube_`, `container_`, `machine_` 또는 `cadvisor_` 접두사로 시작하는 지표가 제외됩니다. 이는 뉴렐릭 Kubernetes 통합이 이미 이를 수집하여 사용하고 있기 때문입니다.
  </Collapser>

  <Collapser
    id="nr-logging"
    title="뉴렐릭 로깅"
  >
    `lowDataMode`) 활성화하면 뉴렐릭으로 전달된 로그에서 라벨과 주석이 제외됩니다. 이렇게 하면 뉴렐릭으로의 전체 데이터 수집이 줄어듭니다. 우리는 `cluster_name`, `container_name`, `namespace_name`, `pod_name`, `stream`, `message` 및 `log` 필드를 유지하고 있습니다.

    이 로그 레코드는 [뉴렐릭 Kubernetes 쿼리가](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/) 해당 로그에서 일반적으로 캡처하는 모든 속성을 보여줍니다.

    ```json
    [
    {
        "cluster_name": "api-test",
        "kubernetes": {
        "annotations": {
            "kubernetes.io/psp": "eks.privileged"
        },
        "container_hash": "fryckbos/test@sha256:5b098eaf3c7d5b3585eb10cebee63665b6208bea31ef31a3f0856c5ffdda644b",
        "container_image": "fryckbos/test:latest",
        "container_name": "newrelic-logging",
        "docker_id": "134e1daf63761baa15e035b08b7aea04518a0f0e50af4215131a50c6a379a072",
        "host": "ip-192-168-17-123.ec2.internal",
        "labels": {
            "app": "newrelic-logging",
            "app.kubernetes.io/name": "newrelic-logging",
            "controller-revision-hash": "84db95db86",
            "pod-template-generation": "1",
            "release": "nri-bundle"
        },
        "namespace_name": "nrlogs",
        "pod_id": "54556e3e-719c-46b5-af69-020b75d69bf1",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj"
        },
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "plugin": {
        "source": "kubernetes",
        "type": "fluent-bit",
        "version": "1.8.1"
        },
        "stream": "stderr",
        "time": "2021-09-14T12:30:49.138824971Z",
        "timestamp": 1631622649138
    }
    ]
    ```

    `lowDataMode`가 활성화된 후 이전 로그 레코드는 다음과 같은 모습으로 표시됩니다.

    ```json
    [
    {
        "cluster_name": "api-test",
        "container_name": "newrelic-logging",
        "namespace_name": "nrlogs",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj",
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "stream": "stderr",
        "timestamp": 1631622649138
    }
    ]
    ```
  </Collapser>

  <Collapser
    id="nr-pixie-integration"
    title="쿠렐릭 Pixie 통합"
  >
    `lowDataMode` 활성화하면 `newrelic-pixie` 통합은 Pixie 범위에서 더 많은 샘플링을 수행하고 데이터를 더 적은 빈도(10초에서 15초)로 수집합니다. 다음은 `lowDataMode` 설정입니다:

    ```
    HTTP_SPAN_LIMIT: 750
    DB_SPAN_LIMIT: 250
    COLLECT_INTERVAL_SEC: 15
    ```

    [newrelic-pixie-통합](https://github.com/newrelic/newrelic-pixie-integration) Github 리포지터리에서 이러한 시위에 대한 기본 설정을 찾을 수 있습니다.
  </Collapser>
</CollapserGroup>

## 스크레이핑 간격을 변경하여 수집되는 데이터를 줄입니다. [#scrape-interval]

뉴렐릭 Kubernetes 통합을 사용하면 클러스터에서 지표를 수집할 때 스크레이핑 간격을 변경할 수 있습니다. 이를 통해 데이터 해상도와 사용량 간의 적절한 균형을 선택할 수 있습니다. 최상의 경험을 위해서는 15-30초 사이의 스크레이핑 간격을 선택하는 것이 좋습니다.

<Callout variant="tip">
  `lowDataMode` 모범 사례에서는 스크레이핑 간격을 이미 30초로 설정했습니다.
</Callout>

스크랩 간격을 수정하는 방법은 Kubernetes를 설치하는 데 사용한 방법에 따라 다릅니다.

* **안내 설치** (뉴렐릭 CLI, Helm, 매니페스트): 안내 설치 흐름에 따라 이 값을 수정할 수 없습니다.
* **Helm**: [`nri-bundle` 차트](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) 의 스크레이핑 간격을 원하는 값으로 설정합니다.
* **Manifest**: 매니페스트 구성 YAML 파일의 스크랩 간격을 원하는 값으로 설정합니다. [설치 지침을](/install/kubernetes/?dropdown1=manifest) 따랐다면 파일 이름은 `newrelic-manifest.yaml` 입니다.

Helm 또는 매니페스트를 사용 중이고 스크래핑 간격을 변경하려면 `newrelic-infrastructure` 섹션 아래에 간격 값을 추가하기만 하면 됩니다. Helm이 어떻게 검색되는지 보려면 `values-newrelic.yaml` 파일의 예를 살펴보세요.

```yaml
global:
  licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
  cluster: _K8S_CLUSTER_NAME_

# ... Other settings

# Configuration for newrelic-infrastructure
newrelic-infrastructure:
  # ... Other settings
  common:
    config:
      interval: 25s
```

<Callout variant="important">
  [Kubernetes 탐색기](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#navigator-preview) 대신 [클러스터](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#cluster-explorer-use) 탐색기를 사용하는 경우 `interval` 보다 큰 값으로 설정할 수 `40s` 없습니다.
</Callout>

## 네임스페이스 필터링을 통해 수집되는 데이터 줄이기 [#filter-namespace]

네임스페이스에 레이블을 지정하여 Kubernetes 통합이 스크랩하는 네임스페이스를 필터링할 수 있습니다. 모든 네임스페이스는 기본적으로 스크레이핑됩니다.

Kubernetes와 동일한 방식으로 `namespaceSelector` 사용합니다. 라벨과 일치하는 네임스페이스만 포함하려면 `namespaceSelector` 을 변경하면 됩니다. `newrelic-infrastructure` 섹션 아래의 `values-newrelic.yaml` 파일에 다음을 추가합니다.

```yaml
common:
  config:
    namespaceSelector:
      matchLabels:
        key1 : "value1"
```

### 네임스페이스가 포함된 예 [#include-namespaces]

<CollapserGroup>
  <Collapser
    id="namespaces-label-true"
    title={<><InlineCode>newrelic.com/scrape</InlineCode> 라벨이 다음으로 설정된 네임스페이스로 네임스페이스를 스크랩합니다. <InlineCode>true</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings 
    common:
        config:
        namespaceSelector:
            matchLabels:
            newrelic.com/scrape: "true"
    ```
  </Collapser>

  <Collapser
    id="k8s-expressions"
    title="Kubernetes 표현식을 사용하여 네임스페이스 포함 또는 제외"
  >
    Kubernetes 표현식을 사용하면 다음 구문을 사용하여 네임스페이스를 포함하거나 제외할 수도 있습니다.

    ```yaml
    common:
    config:
        namespaceSelector:
        matchExpressions:
        - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
        - {key: key1, operator: In, values: ["value1"]}
    ```

    <Callout variant="tip">
      `matchExpressions` 아래의 표현식은 연결됩니다.
    </Callout>
  </Collapser>

  <Collapser
    id="exclude-namespaces"
    title={<><InlineCode>newrelic.com/scrape</InlineCode> 라벨이 다음으로 설정된 네임스페이스 제외 <InlineCode>false</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings
    common:
        config:
        namespaceSelector:
            matchExpressions:
            - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```
  </Collapser>
</CollapserGroup>

[차트의 README 파일](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure) 에서 수정할 수 있는 전체 설정 목록을 볼 수 있습니다.

### 어떤 네임스페이스가 제외되는지 어떻게 알 수 있나요? [#excluded-namespaces]

`K8sNamespace` 샘플은 클러스터 내의 모든 네임스페이스를 보여줍니다. `nrFiltered` 속성은 네임스페이스와 관련된 데이터를 스크랩할지 여부를 결정합니다. 이 쿼리는 모니터링되고 있는 네임스페이스를 보여줍니다.

```sql
FROM K8sNamespaceSample SELECT displayName, nrFiltered WHERE clusterName = <clusterName> SINCE 2 MINUTES AGO
```

### 제외된 네임스페이스에서 어떤 데이터가 삭제됩니까? [#namespaces-discarded-data]

제외된 네임스페이스에는 다음 샘플을 사용할 수 없습니다.

* `K8sContainerSample`
* `K8sDaemonsetSample`
* `K8sDeploymentSample`
* `K8sEndpointSample`
* `K8sHpaSample`
* `K8sPodSample`
* `K8sReplicasetSample`
* `K8sServiceSample`
* `K8sStatefulsetSample`
* `K8sVolumeSample`
