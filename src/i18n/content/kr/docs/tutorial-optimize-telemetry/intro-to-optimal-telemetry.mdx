---
title: New Relic으로 원격 분석 데이터 최적화
metaDescription: Our data ingest governance guide helps you get optimal value for the telemetry data you're reporting to New Relic.
freshnessValidatedDate: '2023-07-26T00:00:00.000Z'
translationType: machine
---

원격 측정 데이터 또는 하나의 소스에서 수집되어 분석을 위해 모니터에 보고되는 데이터는 수집할 여러 데이터 소스가 있는 현대 조직에서 점점 더 많이 사용되고 있습니다. 그러나 해당 데이터를 탐색하고 관리하는 데는 자체적인 고려 사항이 따르며 원격 측정 데이터를 처리하는 방법을 최적화하면 시간과 비용을 절약할 수 있습니다. 이것은 특히 많은 비즈니스 단위와 작업 그룹이 있는 복잡한 조직에 해당됩니다.

이것이 <DNT>**Data ingest governance**</DNT> 또는 귀하의 조직이 수집한 텔레메트리 데이터에 대한 최적의 가치를 보장하는 방식이 필요한 곳입니다. 우리 가이드는 조직 내에서 이 개념을 사용하기 위한 모범 사례를 준비하고 수행하는 데 도움이 될 것입니다. 이 튜토리얼 시리즈를 완료하면 다음을 수행할 수 있습니다.

* 중복되거나 불필요한 원격 측정 데이터를 줄여 시간과 비용을 절약하십시오.
* 조직 내 어떤 그룹이 어떤 데이터에 기여하고 있는지 정확히 이해합니다.
* 원격 측정 데이터의 출처를 밝히고 데이터 관리 사일로를 줄입니다.
* 수집 비용을 명확하고 간결하게 설명합니다.
* 데이터의 관찰 가능성 값에 대한 전체 컨텍스트를 사용하여 수집 볼륨을 조정합니다.

<img
  title="Data ingest governance path"
  alt="A diagram displaying the path for setting up data ingest governance with New Relic. The path is 1. Baseline your data, 2. detect anomalies, and 3. optimize your telemetry"
  src="/images/telemetry_diagram_data-ingest-path.webp"
/>

## 시작하기 전에 [#before-begin]

<DNT>**data ingest governance**</DNT> 사용하여 최적화할 수 있도록 데이터가 뉴렐릭으로 관리되는지 확인해야 합니다. 자세한 정보가 필요하면 [데이터 관리 문서를](/docs/data-apis/manage-data/manage-your-data/) 참조하세요.

<Collapser
  id="understand-nr-consumption-metrics"
  title="소비 이벤트 유형 이해"
>
  청구 가능한 모든 원격 분석은 `NrConsumption` 및 `NrMTDConsumption` 이벤트로 추적됩니다. 이 가이드는 `NrMTDConsumption` 보다 더 세분화된 실시간 데이터를 제공하는 `NrConsumption` 쿼리 방법에 중점을 둡니다. `NrConsumption` 속성 `usageMetric` 은 원격 분석 유형을 나타냅니다.

  `NrConsumption` 사용하면 "지난 30일 동안 각 계정에서 수집된 <InlinePopover type="browser"/>데이터의 양은 얼마입니까?"와 같은 질문을 할 수 있습니다. 및 "지난 30일 이후 수집이 어떻게 변경되었나요?" 다음은 해당 데이터를 반환하는 쿼리입니다.

  ```sql
  FROM NrConsumption SELECT sum(GigabytesIngested) WHERE usageMetric = 'BrowserEventsBytes' SINCE 30 days AGO COMPARE WITH 30 days AGO FACET consumingAccountName
  ```

  응답은 계정별로 수집한 브라우저 모니터링 데이터의 GB 수를 보여줍니다.

  ```shell
  Banking platform, 75 GB, +2.9%
  Marketing platform, 40 GB, -1.3%
  ```

  다음은 다양한 `usageMetric` 유형, 구성 이벤트(데이터가 저장되는 이벤트 유형), 데이터 수집 생성을 담당하는 에이전트 또는 메커니즘의 유형에 대한 분석입니다.

  ### 청구 가능한 원격 분석 분석 표

  <table>
    <thead>
      <tr>
        <th style={{ width: "200px" }}>
          NrcConsumption.usageMetric
        </th>

        <th style={{ width: "200px" }}>
          구성 이벤트
        </th>

        <th>
          원천
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          인프라호스트바이트
        </td>

        <td>
          `SystemSample`, `StorageSample` , `InfrastructureEvent` , `NetworkSample`
        </td>

        <td>
          인프라 에이전트
        </td>
      </tr>

      <tr>
        <td>
          InfraProcessBytes
        </td>

        <td>
          `ProcessSample`
        </td>

        <td>
          인프라 에이전트
        </td>
      </tr>

      <tr>
        <td>
          InfraIntegrationBytes
        </td>

        <td>
          타사 플랫폼 통합을 위한 다양한 이벤트 및 `ContainerSample`
        </td>

        <td>
          [호스트 내 통합](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations/) 및 특정 [클라우드 통합](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations/#cloud)
        </td>
      </tr>

      <tr>
        <td>
          ApmEvents바이트
        </td>

        <td>
          `Transaction`, `TransactionError` 및 가능 `WorkloadStatus`
        </td>

        <td>
          APM 에이전트
        </td>
      </tr>

      <tr>
        <td>
          TracingBytes
        </td>

        <td>
          `Span`, `SpanEvent`
        </td>

        <td>
          APM 에이전트 및 OpenTelemetry
        </td>
      </tr>

      <tr>
        <td>
          브라우저이벤트바이트
        </td>

        <td>
          `Browser`, `BrowserInteraction` , `Browser:EventLog` , `Browser:JSErrors` , `JavaScriptError` , `PageView` , `PageViewTiming` , `PcvPerf`
        </td>

        <td>
          브라우저 에이전트
        </td>
      </tr>

      <tr>
        <td>
          MobileEvents바이트
        </td>

        <td>
          `Mobile`, `MobileReqest` , `MobileRequestError` , `MobileSession` , `MobileHandleException` , `MobileCrash`
        </td>

        <td>
          모바일 에이전트
        </td>
      </tr>

      <tr>
        <td>
          서버리스바이트
        </td>

        <td>
          클라우드별(예: AWS Lambda 이벤트)
        </td>

        <td>
          클라우드 전용(예: AWS Lambda 통합)
        </td>
      </tr>

      <tr>
        <td>
          LoggingBytes
        </td>

        <td>
          `Log` 뿐만 아니라 패턴의 파티션별 이벤트 `[partition].Log`
        </td>

        <td>
          다양한 (Fluentd, FluentBit, Syslog, 클라우드 전용 스트리밍 서비스)
        </td>
      </tr>

      <tr>
        <td>
          MetricEventBytes
        </td>

        <td>
          `Metric`
        </td>

        <td>
          메트릭 API 및 이를 사용하는 통합( [차원 메트릭](/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics) ) 또는 브라우저 에이전트, APM 에이전트 또는 모바일 에이전트와 같은 에이전트( [메트릭 타임슬라이스 데이터](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data) ).
        </td>
      </tr>

      <tr>
        <td>
          사용자 정의 이벤트 바이트
        </td>

        <td>
          여러
        </td>

        <td>
          다양한 API. [계정에서 사용 가능한 모든 이벤트 유형을 보려면 `SHOW EVENT TYPES` 을(를) 사용하십시오](#show-event-types) .
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

또한 귀하 또는 귀하의 팀이 다음을 추적하고 관리할 수 있는지 확인해야 합니다.

* 해당되는 경우 관리자와 협력하여 월별 수집 목표를 유지합니다.
* 모니터링 데이터는 기준선을 수집하고 이상에 대응합니다.
* 필요에 따라 데이터 최적화/축소 계획을 작성하고 승인합니다.
* 기준 데이터를 분석하고 수집 대상과 비교하기 위해 예약된 체크인에 참여합니다.
* 필요에 따라 수집 대상을 수정합니다.

아직 없다면 다음을 담당하는 Observability Center of Excellence 팀(또는 유사한 것)을 두는 것을 고려해야 합니다.

* New Relic과의 관계 유지
* 관리 계정 및 사용자.
* 새로운 팀과 개인을 온보딩합니다.
* 관측 가능성 지식 기반 유지.
* 팀 간의 협업 및 공유 촉진.

이와 같은 팀이 있으면 전체 조직에 대해 고품질 관찰 가능성을 달성하는 데 도움이 될 수 있습니다.

## 이 시리즈에는 무엇이 있습니까?

<DocTiles>
  <DocTile
    title="Create baseline reports"
    path="/docs/tutorial-optimize-telemetry/create-baseline-report/"
  >
    올바른 대시보드를 사용하여 수집 기준선을 만드는 방법 알아보기
  </DocTile>

  <DocTile
    title="Find anomalies"
    path="/docs/tutorial-optimize-telemetry/detect-anomalies/"
  >
    기준 보고서를 사용하여 원격 측정으로 이상 항목을 찾는 방법을 알아보세요.
  </DocTile>

  <DocTile
    title="Create an optimization plan"
    path="/docs/tutorial-optimize-telemetry/develop-optimize-plan/"
  >
    수집 비용을 줄이는 데 도움이 되는 최적화 계획을 개발하는 방법을 알아보세요.
  </DocTile>

  <DocTile
    title="Optimize your ingest data"
    path="/docs/tutorial-optimize-telemetry/data-optimize-techniques/"
  >
    다양한 기술을 사용하여 전체 수집을 최적화하는 방법을 알아보세요.
  </DocTile>
</DocTiles>
