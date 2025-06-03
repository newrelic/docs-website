---
title: 프로세서 트레이스에 대해 자세히 알아보세요.
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: APM's Trace Details page shows additional timing details about the individual segments that make up a transaction trace.
freshnessValidatedDate: never
translationType: machine
---

트랜잭션은 단일 작업 단위를 구성하는 함수 및 메서드 호출의 그룹입니다. 프로세서는 종종 URL에 매핑되지만 항상 그런 것은 아닙니다. <InlinePopover type="apm"/>에서는 **Transactions** 탭 아래에서 특정 프로세서에 대한 모든 프로세서를 볼 수 있습니다. 칩셋 탭에서 특정 칩셋을 클릭하면 _모든 기간_ 에 걸쳐 _모든 사용자_ 에 대한 데이터가 표시됩니다.

하지만 _특정_ 인스턴스 동안 _특정_ 사용자에게 발생한 일에 대해 자세히 알아보려면 **Transaction traces** 사용해야 합니다. **Trace details** 탭을 사용하면 다음을 수행할 수 있습니다.

* **느린 세그먼트 식별**: 총 트레이스 시간의 25% 이상을 차지한 세그먼트는 "느린 범위"로 표시되어 잠재적인 병목현상, 병목지점에 주의를 기울입니다.
* **트랜잭션 시각화**: 데이터베이스 호출, 외부 호출 또는 코드 실행과 같은 다양한 세그먼트의 기간을 보여주는 프로세서 타임라인의 그래픽 표현을 확인하세요.
* **효율적인 문제 해결**: 느린 범위에만 집중하도록 데이터를 필터링합니다.

## 작동 원리 [#how-it-works]

**Transactions** 탭을 에서 특정 프로세서를 선택하면 **Transaction details** 탭을 열립니다. 거기에서 **Transaction trace** 테이블에서 거래를 선택하여 **Trace details** 페이지를 엽니다. **Trace details** 페이지는 _단일 인스턴스_ 의 거래에 대한 _한 사용자의_ 경험에 대한 복잡한 심층 정보를 제공합니다. 타임라인, 지연 시간, 폭포의 세 가지 보기 중 하나를 사용하여 데이터를 탐색하세요.

<img
  title="transaction trace details"
  alt="A screenshot depicting the transaction trace details view."
  src="/images/apm_screenshot-crop_transaction-trace-details.webp"
/>

<figcaption>
  이동 <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Trace details.**</DNT>
</figcaption>

<Tabs>
  <TabsBar>
    <TabsBarItem id="timeline-view">
      타임라인 보기
    </TabsBarItem>

    <TabsBarItem id="latency-view">
      대기 시간 보기
    </TabsBarItem>

    <TabsBarItem id="waterfall-view">
      폭포 보기
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="timeline-view">
      트레이스 타임라인 보기에는 트레이스의 대화형 요약 시각적 디스플레이가 포함되어 있습니다. 이 보기에 표시된 노드 색상은 각 세그먼트 범주의 폭포 범례와 일치합니다.

      이 보기에서 노드 위로 마우스를 가져가면 타임라인 위에 세그먼트 이름이 표시됩니다. 이 보기 내에서 노드를 클릭하면 폭포에서 동일한 노드가 선택되고 세그먼트 세부정보 창이 열립니다. 이 보기를 수평으로 드래그하면 폭포에 표시된 노드를 선택한 창 내에서 발생하는 노드로 필터링합니다. 녹색 스크러버를 수동으로 이동하거나 **Reset timeline** 버튼을 클릭하여 필터링된 창을 변경할 수 있습니다.

      <img
        title="Timeline view"
        alt="transaction-traces-timeline-view.png"
        src="/images/distributed-tracing-trace-details-page-timeline-view.webp"
      />
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      ### 대기 시간 보기 [#latency]

      지연시간 보기 섹션은 개별 기여도 및 느린 노드 수와 함께 전체 트레이스 기간에 기여하는 가장 느린 6개의 서비스 또는 구성 요소에 대한 인사이트를 제공합니다.

      주목해야 할 주요 사항:

      * 보고된 서비스 기간은 해당 서비스에서 발생하는 모든 노드의 독점 기간의 합계입니다.
      * 원형 차트나 표에서 서비스를 클릭하면 해당 서비스에서 폭포의 첫 번째 노드가 선택됩니다.
      * 6개 이상의 서비스가 트레이스에 기여하는 경우 가장 느린 6개 서비스를 제외한 트레이스의 모든 서비스에서 롤업된 데이터를 포함하는 **Other** 범주가 존재할 수 있습니다. **Other** 카테고리는 테이블이나 원형 차트를 클릭해도 반응하지 않습니다.

        <img
          title="Latency view"
          alt="transaction-traces-latency-view.png"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      폭포수는 호출 경로별로 가지로 정렬된 세그먼트의 노드 트리를 표시합니다. 각 세그먼트에는 서비스 이름, 세그먼트 유형, 세그먼트 기간 등 원래 서비스에 대한 정보가 표시됩니다.

      ### 폭포 탐색

      폭포 보기에는 관심 있는 세그먼트를 더 쉽게 찾을 수 있는 여러 컨트롤이 있습니다.

      * **확장/축소**: 화살표를 사용하여 개별 세그먼트 또는 전체 분기를 쉽게 표시하거나 숨길 수 있습니다.

      * **느린 범위에 집중**: 트레이스의 범위가 느린 경우 확인란을 클릭하여 다른 세그먼트를 필터링하고 잠재적인 병목현상, 병목지점에 즉시 집중하세요.

      * **범례**: 범례에서 색상을 클릭하면 해당 서비스 범주에 속하는 구간에 대한 세부 정보를 볼 수 있습니다.

        ### 폭포 전설 [#waterfall-legend]

        폭포는 여러 부분으로 나누어져 있습니다.

        노란색: 총 프로세서 시간의 25% 이상이 이 세그먼트에 사용되었습니다.

        <img
          title="Slow segment background."
          alt="icon-alerts-yellow.png"
          src="/images/apm_icon_yellow-alert.webp"
        />

        스트라이프: 에이전트의 현재 설정에 포함되지 않은 클래스 및 메서드가 포함된 세그먼트입니다.

        <img
          title="uninstrumented segment"
          alt="The icon that represents and uninstrumented segment"
          src="/images/apm_icon_uninstrumented-segment.webp"
        />

        폭포의 각 세그먼트에는 트레이스 기간을 기준으로 해당 기간을 나타내는 막대가 표시됩니다. 이 막대의 색상은 세그먼트가 애플리케이션 코드, 데이터베이스 호출 또는 외부 호출에 속하는지 여부를 나타냅니다.

        <img
          title="transaction trace waterfall"
          alt="A screenshot showing the transaction trace waterfall view in the UI."
          src="/images/apm_screenshot-crop_transaction-trace-waterfall.webp"
        />

        ### 폭포 세그먼트 속성 [#icons]

        다음 아이콘은 각 세그먼트를 식별할 수 있습니다.

        <table id="segment-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                세그먼트 속성
              </th>

              <th style={{ width: "110px" }}>
                지시자
              </th>

              <th>
                설명
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                서비스
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-service-span-icon.png"
                  alt="New Relic distributed tracing service icon."
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                이 아이콘은 서비스의 진입점인 노드를 나타냅니다.
              </td>
            </tr>

            <tr id="in-process">
              <td>
                과정에서
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon."
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                이 아이콘은 프로세스 간 노드가 아닌 프로세스 내에서 발생하는 노드인 in-process 노드를 나타냅니다. 예에는 미들웨어 측정, 리소스 및 사용자 생성 노드가 포함됩니다.
              </td>
            </tr>

            <tr>
              <td>
                데이터 저장소
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                이 아이콘은 데이터스토어에 대한 세그먼트 호출을 나타냅니다.
              </td>
            </tr>

            <tr>
              <td>
                외부
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external node icon."
                  src="/images/new-relic-distributed-tracing-external-icon.webp"
                />
              </td>

              <td>
                이 아이콘은 HTTP를 통해 수행된 외부 서비스 호출을 나타내는 범주를 나타냅니다.
              </td>
            </tr>

            <tr>
              <td>
                브라우저 앱
              </td>

              <td>
                <img
                  title="distributed-tracing-browser-span-icon.png"
                  alt="New Relic distributed tracing browser node icon."
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                이 아이콘은 [브라우저 애플리케이션 세그먼트를](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) 나타냅니다.
              </td>
            </tr>

            <tr>
              <td>
                람다
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external node icon."
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                이 아이콘은 [Lambda 함수](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda) 의 노드를 나타냅니다.
              </td>
            </tr>
          </tbody>
        </table>

        ### 폭포수 세그먼트 그룹화 규칙 [#rollup]

        뉴렐릭은 복잡한 프로세서 트레이스를 더 쉽게 이해할 수 있도록 워터폴 내에서 빠르고 반복되는 메서드 호출을 자동으로 그룹화합니다. 세그먼트를 그룹화하면 너무 많은 세그먼트에 압도당하지 않고 잠재적으로 문제가 있는 영역에 집중할 수 있습니다.

        작동 방식은 다음과 같습니다.

      * **빠른 호출**: `fast calls` 이라는 세그먼트가 표시되면 뉴렐릭이 여러 호출을 그룹화하여 빠르게(각각 7.5ms 미만) 완료했음을 의미합니다. 이는 일반적으로 성능 문제가 아니지만 필요한 경우 그룹을 확장하여 개별 세그먼트를 볼 수 있습니다.

      * **동일한 호출**: 4회 이상의 연속된 동일한 호출은 N+1 문제를 나타내는 경우가 많으므로 뉴렐릭은 이를 축소하여 잠재적인 문제를 강조합니다. 접힌 그룹을 확장하면 처음 세 가지 분석 요청이 표시됩니다.
    </TabsPageItem>
  </TabsPages>
</Tabs>

## 데이터를 더 자세히 살펴보세요. [#deep-dive]

### 느린 범위 [#slow-spans]

_느린 범위_ 로 표시된 노드는 다음 기준을 충족합니다.

* 세그먼트는 리프 또는 종료 노드입니다. 즉, 이 노드에는 하위 노드가 없습니다.
* 세그먼트는 전체 트레이스 기간의 25%보다 크거나 같은 독점 기간을 갖습니다.

### 추적의 애플리케이션 코드 [#application-code]

테이블에서 세그먼트가 **Application code** 로 나열되면 해당 코드 섹션이 리소스로 포함되지 않았음을 나타냅니다. [사용자 정의 측정을](/docs/apm/other-features/metrics/custom-instrumentation) 사용하여 코드의 해당 부분에 대한 자세한 내용을 얻을 수 있습니다. 세그먼트는 [부분 트레이스](#partial) 의 **Application code** 로 나열되는 경우가 많습니다.

### 부분적 흔적 [#partial]

성능상의 이유로 APM은 프로세서 트레이스의 처음 2,000개 세그먼트(Node.js의 경우 900개)만 캡처합니다. 프로세서 트레이스가 해당 세그먼트 수를 초과하는 경우 에이전트는 프로세서 트레이스를 자르고 <DNT>**Details**</DNT> 페이지 상단에 메시지를 표시합니다.

`This is a partial trace.`

APM 에이전트에는 세그먼트를 자르는 시기에 대한 규칙이 다릅니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        APM 에이전트
      </th>

      <th>
        세그먼트 규칙 자르기
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        가다
      </td>

      <td>
        세그먼트 기간은 Go 세그먼트 구성에 설정된 [`TransactionTracer.SegmentThreshold`](/docs/agents/go-agent/configuration/go-agent-configuration#txn-tracer-segment-threshold) 값보다 커야 합니다.
      </td>
    </tr>

    <tr>
      <td>
        자바, .NET, 루비
      </td>

      <td>
        이러한 에이전트는 추적을 시간순으로 자릅니다. 자세한 내용은 해당되는 경우 [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-transaction-segments) , [.NET](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) 또는 [Ruby](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) 용 트랜잭션 추적기 설명서를 참조하세요.
      </td>
    </tr>

    <tr>
      <td>
        노드.js
      </td>

      <td>
        Node.js 에이전트는 트랜잭션 추적의 처음 900개 세그먼트만 캡처합니다. 자세한 내용은 [Node.js 트랜잭션 추적 프로그램 구성](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config) 을 참조하세요.
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        세그먼트 기간에 따라 잘립니다. 추적을 위해 가장 느린 2,000개의 세그먼트가 캡처됩니다. 자세한 내용은 [PHP 트랜잭션 추적기 구성](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page/) 을 참조하십시오.
      </td>
    </tr>

    <tr>
      <td>
        파이썬
      </td>

      <td>
        세그먼트 기간에 따라 잘립니다. 추적을 위해 가장 느린 2,000개의 세그먼트가 캡처됩니다. 자세한 내용은 [Python 트랜잭션 추적 프로그램 구성](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) 을 참조하세요.
      </td>
    </tr>
  </tbody>
</table>

### 분산 추적 [#distributed-traces]

트랜잭션 추적이 분산 추적 데이터를 기반으로 하는 경우 페이지 헤더의 분산 추적 링크를 클릭하면 전체 분산 추적을 볼 수 있습니다.

명심해야 할 사항:

* 모든 속성은 세 가지 기본 속성 유형으로 분할되지 않고 단일 `Attributes` 섹션으로 그룹화됩니다.
* 세그먼트 메트릭 이름은 입출력 트레이스와 약간 다를 수 있습니다.
* 스택 추적은 세그먼트 속성에 표시되지 않습니다.
* 트레이스 세부 정보 페이지에서는 초당 트레이스 대신에 반사 트레이스를 볼 때 약간 다른 정보가 표시됩니다.

## 세그먼트 세부정보 문제 해결 [#segment-details]

세그먼트를 선택하면 세 개의 개별 세그먼트 세부 정보 페이지가 포함된 창이 열립니다. 이러한 탭은 성능 문제를 해결하는 데 도움이 될 수 있습니다.

1. 성능 탭:

   * **성과 추세 시각화**: 차트는 세그먼트의 평균 운영 기간과 처리량을 보여주며 패턴과 잠재력 이상치를 드러냅니다.
   * **비교 및 대조**: 이 특정 세그먼트의 성능이 평균과 어떻게 비교되는지 확인하고 주의가 필요한 영역을 찾아냅니다.

2. 속성 탭:

   * **추가 탐색**: 속성 의미와 잠재적인 문제 해결, 해결 의미를 이해합니다. 우리의 [데이터 사전을](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span) 사용하여 더 많은 것을 배울 수 있습니다.

3. 세부정보 탭:

   * **기본 정보**: 세그먼트의 전체 이름, 데이터 소스, 관련 메타데이터와 같은 중요한 세부정보를 봅니다. [분산 추적 문서](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names) 에서 자세히 알아볼 수 있습니다.
   * **맞춤형 인사이트**: 데이터스토어 세그먼트에 대한 데이터베이스 쿼리 등 문제 해결, 해결에 중요한 세그먼트별 정보를 찾아보세요.

4. 로그 탭:

   * **로그 검사**: [컨텍스트에서 로그를](/docs/logs/logs-context/configure-logs-context-apm-agents/) 사용하면 앱의 UI 에서 직접 로그 기록과 관련된 로그 기록을 볼 수 있습니다.

세그먼트는 세그먼트 유형에 따라 날짜를 표시합니다. 예를 들어 데이터스토어 세그먼트의 세부 정보에는 데이터베이스 쿼리가 포함됩니다.
