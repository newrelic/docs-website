---
title: 차원 지표를 사용하여 더 많은 데이터 쿼리
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'Learn how dimensional metrics work for infrastructure data, and how to query them.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

<Callout title="시사">
  이 기능은 아직 개발 중이지만 꼭 사용해 보시기 바랍니다!

  이 기능은 현재 [출시 전 정책](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy) 에 따라 미리보기 프로그램의 일부로 제공됩니다.
</Callout>

[차원 메트릭은](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) 지표 데이터를 저장하고 쿼리하기 위한 업계 표준입니다. 뉴렐릭은 모든 인프라 지표를 [이벤트 데이터로](/docs/data-apis/understand-data/new-relic-data-types/#metric-event-attributes) 저장하지만 이를 차원 지표로 쿼리할 수도 있습니다.

뉴롤릭에서는 지표 API, 델메트리 SDK, 일부 오픈 소스 통합 및 인프라 서비스가 모두 사용할 수 있는 [차원](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) [지표를](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics) 포함하여 여러 가지 방법으로 지표를 보고합니다.

이 유형의 측정항목을 사용하면 다음을 수행할 수 있습니다.

* 인프라 데이터에 대한 향상된 쿼리 환경을 즐기십시오.
* 한 곳에서 모든 측정항목을 확인하세요.
* [Prometheus](/docs/integrations/prometheus-integrations/get-started/new-relic-prometheus-openmetrics-integration-kubernetes) 와 같은 더 많은 지표 소스를 사용하세요.

예를 들어 다음 쿼리를 사용하여 Lambda 함수의 최대 지속 시간을 얻을 수 있습니다.

<table>
  <tbody>
    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with samples**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM ServerlessSample
        SELECT max(provider.duration.Maximum)
        WHERE provider = 'LambdaFunction'
        ```
      </td>
    </tr>

    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with metrics**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM Metric
        SELECT max(aws.lambda.function.duration)
        ```
      </td>
    </tr>
  </tbody>
</table>

## 시작하다 [#compatibility-reqs]

이러한 지표를 사용하기 위해 에이전트 또는 통합 업데이트가 필요하지 않습니다. [클라우드 통합에서](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) [들어오는 데이터(예: AWS 폴링 통합](/docs/infrastructure/amazon-integrations/aws-integrations-list), [GCP](/docs/integrations/google-cloud-platform-integrations) 및 [Azure](/docs/integrations/microsoft-azure-integrations/azure-integrations-list) 의 메트릭)를 제외하고 차원 메트릭을 기반으로 하는 NRQL 경고를 지원합니다. 뉴렐릭은 AWS CloudWatch Metric Streams 지표를 차원 지표로 수집하며 이러한 경우에는 NRQL <InlinePopover type="alerts"/>을 사용하는 것이 좋습니다.

## 차원 측정항목을 쿼리하는 위치 및 방법 [#where]

뉴렐릭은 현재의 모든 [NRQL 쿼리 기능을](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions) 지원합니다. 쿼리를 위해 `WHERE`, `FACET` 및 `SINCE`, `UNTIL` 및 `COMPARE WITH` 와 같은 시간 선택 함수를 사용할 수 있습니다.

## 메트릭 및 속성에 대한 명명 규칙 [#naming-conventions]

차원 메트릭의 모든 지표 이름과 속성은 동일한 명명 규칙을 따르므로 쉽게 찾고 사용할 수 있습니다. 지표 및 속성 이름은 점으로 네임스페이스가 지정됩니다. 예를 들어 `host.` 접두사는 호스트 지표에 사용되고, `k8s.` 접두사는 Kubernetes 지표에 사용되고, `aws.` 는 AWS 지표에 사용됩니다.

아래 그래픽은 3개의 측정항목( `cpuPercent` , `ioTotalReadBytes` 및 `ioTotalWriteBytes` )을 포함하는 `ProcessSample` 이 3개의 개별 측정항목으로 분할되는 방법을 보여줍니다. 메트릭 및 속성의 업데이트된 이름을 확인합니다.

<img
  title="naming-convention.png"
  alt="naming-convention.png"
  src="/images/queries-nrql_diagram_dimensional-metrics-naming-convention.webp"
/>

<figcaption>
  차원 측정항목 명명 규칙
</figcaption>

## 차원 메트릭 및 이벤트 쿼리의 차이점 [#known-limitations]

차원 지표는 이벤트 데이터와 근본적으로 다른 유형의 데이터입니다. 아래에서는 차원 지수를 쿼리할 때 몇 가지 주목할만한 차이점을 확인할 수 있습니다.

* `*` 가 포함된 측정항목 쿼리는 [인프라 샘플 데이터를](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events)반환하지 않습니다. 예를 들어:

  ```sql
  SELECT * FROM Metric
  ```

* `metricName LIKE` 가 포함된 측정항목 쿼리는 인프라 샘플 데이터를 반환하지 않습니다. 예를 들어:

  ```sql
  SELECT uniques(metricName) FROM Metric where metricName like 'k8%'
  ```

* `tags.` 으로 시작하는 속성을 선택하려면 측정항목 이름을 제공해야 합니다. 예를 들어, 다음은 `WHERE` 절이 없으면 작동하지 않습니다.

  ```sql
  SELECT uniques(tags.environment) FROM Metric WHERE metricName='aws.lambda.function.duration'
  ```

* 선택 기준이 너무 많은 샘플과 일치하는 경우 결과가 완전하지 않을 수 있습니다. 예를 들어 이 쿼리는 모든 인프라 샘플에 매핑되며 불완전한 결과를 반환할 수 있습니다.

  ```sql
  SELECT uniqueCount(entity.guid) FROM Metric
  ```

* 새로 도입된 지표 와일드카드 기능은 지원되지 않습니다. 예를 들면 다음과 같습니다.

  ```sql
  SELECT average(host.swap%Bytes) FROM Metric
  ```

* 여러 메트릭에 사용되는[함수는](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#functions) 실패하거나 잘못된 결과를 반환할 수 있습니다. 예를 들면 다음과 같습니다.

  ```sql
  FROM Metric SELECT latest(metricNameA + metricNameB)
  ```

* 쿼리에 `RAW` 포함하면 요청이 내부적으로 변환되어 동등한 집계 이벤트 데이터를 인쇄합니다. 원시 데이터는 인쇄되지 않습니다. 이 동작을 보려면 예제 쿼리를 참조하세요.

  ```sql
  SELECT max(host.cpuPercent) FROM Metric TIMESERIES 1 MINUTE SINCE 60 MINUTES AGO RAW
  ```

* `TIMESERIES` 과 함께 `keyset` 사용하는 것을 지원하지 않으며 그렇게 하면 오류가 반환됩니다. 아래 예를 참조하세요.

  ```sql
  FROM Metric SELECT keyset() WHERE instrumentation.provider = 'infrastructure' TIMESERIES
  ```

데이터 유형 차이점에 대한 개요는 [뉴켈릭 데이터 유형을](/docs/data-apis/understand-data/new-relic-data-types) 참조하세요.

## 차원 쿼리 예 [#query-examples]

다음은 차원 메트릭이 있거나 없는 NQRL 쿼리의 몇 가지 예입니다.

<CollapserGroup>
  <Collapser
    id="example-aws-ebs"
    title="AWS EBS 쿼리 예시"
  >
    EBS 볼륨별로 총 쓰기 시간을 가져옵니다.

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM BlockDeviceSample
            SELECT sum('provider.volumeTotalWriteTime.Sum')
            WHERE provider = 'EbsVolume'
            FACET entityName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(aws.ebs.volume.TotalWriteTime)
            FACET entity.name
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-service-bus"
    title="Azure 서비스 버스 쿼리 예제"
  >
    리소스 그룹별 Azure Service Bus 주제의 최대 메시지 수:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureServiceBusTopicSample
            SELECT max(activeMessages.Maximum)
            FACET resourceGroupName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(azure.servicebus.topic.activeMessages)
            FACET azure.resourceGroup
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-functions"
    title="Azure 함수 쿼리 예제"
  >
    시간 경과에 따른 지역별 지난 6시간 동안 Azure Functions의 함수 실행 횟수:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureFunctionsAppSample
            SELECT sum(functionExecutionCount.Total)
            FACET regionName
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(azure.functions.app.functionExecutionCount)
            FACET azure.region
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-vm"
    title="Azure VM 쿼리 예제"
  >
    지난 30분 동안의 Azure VM 수를 일주일 전 같은 시간과 비교합니다.

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureVirtualMachineScaleSetSample
            SELECT uniqueCount(vMName)
            FACET name
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT uniqueCount(azure.vms.vmName)
            FACET azure.resourceName
            WHERE azure.resourceType='Microsoft.Compute/virtualMachineScaleSets'
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-nginx"
    title="NGINX 쿼리 예제"
  >
    시간 경과에 따른 초당 평균 NGINX 요청 수:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM NginxSample
            SELECT average(net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT average(nginx.server.net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-mysql"
    title="MySQL 쿼리 예제"
  >
    사용된 MySQL 연결의 최대 수:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM MysqlSample
            SELECT max(net.maxUsedConnections)
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(mysql.node.net.maxUsedConnections)
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
