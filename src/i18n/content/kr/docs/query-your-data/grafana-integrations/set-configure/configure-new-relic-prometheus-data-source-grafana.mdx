---
title: New Relic을 Grafana용 Prometheus 데이터 원본으로 구성
tags:
  - Integrations
  - Grafana integrations
  - Set up and configure
metaDescription: How to configure New Relic as a Prometheus data source for Grafana
freshnessValidatedDate: never
translationType: machine
---

[PromQL 스타일 쿼리 언어](/docs/integrations/prometheus-integrations/view-query-data/supported-promql-features) 를 사용하여 NRDB(New Relic Database)에 저장된 데이터를 쿼리하도록 [Grafana](https://grafana.com/login) 에서 [Prometheus 데이터 소스](https://grafana.com/docs/grafana/latest/features/datasources/prometheus/) 를 구성할 수 있습니다.

## Prometheus 데이터 소스 추가 [#create-update]

다음 단계에 따라 New Relic을 Grafana용 Prometheus 데이터 소스로 추가하십시오. 이 지침은 Grafana 버전 6.7 이상으로 작업할 때 프로세스를 완료하는 방법을 자세히 설명합니다.

<Callout variant="important">
  구성 프로세스를 시작하기 전에 [Prometheus 원격 쓰기 통합 프로세스를 완료](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration) 해야 합니다.
</Callout>

1. New Relic에서 [새 Insights 쿼리 키를 만듭니다](/docs/apis/intro-apis/new-relic-api-keys/#insights-query-key) .

   <Callout variant="important">
     참고: Grafana에서는 이를 사용자 정의 <DNT>**X-Query-Key**</DNT> HTTP 헤더(아래 7단계 참조)에 넣어야 하지만 이는 뉴렐릭 쿼리 키와 동일한 엔터티입니다.
   </Callout>

2. [Grafana](https://grafana.com/login) <DNT>**Home**</DNT> 화면에서 <DNT>**Configuration > Data Sources**</DNT> 로 이동하여 <DNT>**Add data source**</DNT> 클릭합니다.

3. <DNT>**Time series databases**</DNT> 옵션 아래의 <DNT>**Add data source**</DNT> 화면에서 <DNT>**Prometheus**</DNT> 선택합니다.

4. 새 Prometheus 데이터 소스에 사용할 <DNT>**Name**</DNT> 를 입력합니다.

5. Prometheus 쿼리의 기본 데이터 소스로 사용할지 여부에 따라 <DNT>**Default**</DNT> 토글을 켜기 또는 끄기 위치로 설정합니다.

   * 꺼짐: 기본 데이터 소스가 아닙니다.
   * 켜짐: 기본 데이터 소스입니다.

6. 올바른 <DNT>**URL**</DNT>) 입력하세요.

   * 미국: [prometheus-api.newrelic.com](https://prometheus-api.newrelic.com)
   * EU: [prometheus-api.eu.newrelic.com](https://prometheus-api.eu.newrelic.com)

7. <DNT>**Custom Headers**</DNT> 아래에서 <DNT>**Add Header**</DNT> 선택합니다. <DNT>**Header**</DNT> 이름을 <DNT>**X-Query-Key.**</DNT> 으로 설정합니다. <DNT>**Value**</DNT> 의 경우 1단계에서 생성한 쿼리 키를 입력합니다.

8. <DNT>**Save & Test**</DNT> 을(를) 클릭합니다.

<Callout variant="tip">
  그래프가 연결된 선이 아닌 점 그룹으로 나타나는 경우 대신 선을 표시하도록 그래프 스타일을 변경할 수 있습니다. 이렇게 하려면 Grafana의 <DNT>**[Graph panel](https://grafana.com/docs/grafana/latest/panels/visualizations/graph-panel/)**</DNT> 으로 이동하여 <DNT>**Stacking and null value > connected**</DNT> 선택합니다.
</Callout>

<CollapserGroup>
  <Collapser
    id=""
    title="샘플 구성 이미지"
  >
    <img
      title="Configure New Relic as a Prometheus data source for Grafana"
      alt="Screen capture of the add data source workflow in Grafana"
      src="/images/more-integrations_screenshot-crop_grafana-data-source-config.webp"
    />

    <figcaption>
      Grafana 데이터 소스 Config.png, [dbarnesbrown.newrelic.com 작성](/users/dbarnesbrownnewreliccom)
    </figcaption>
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## 버전 관리 고려 사항

New Relic은 버전 6.7.x 이상을 사용하여 New Relic을 Prometheus 데이터 소스로 구성할 것을 강력히 권장합니다. 이전 버전을 실행하는 동안 구성을 완료하도록 선택한 경우 데이터 소스를 성공적으로 구성하려면 다음 중 하나를 수행해야 합니다.

* 기본 인증을 사용하도록 새 데이터 원본을 구성한 다음 기본 인증 워크플로에서 암호로 쿼리 키를 입력합니다.
* 쿼리 키를 포함하도록 새 데이터 소스 URL을 구성합니다. `` https://prometheus-api.newrelic.com/auth/`<query-key>` ``

## Prometheus API 동작 사용자 지정 [#customize-API]

헤더는 [원격 쓰기 통합](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration) 을 사용하여 여러 Prometheus 서버를 New Relic에 연결한 경우 특히 중요합니다. 다음은 사용자 정의에 대한 몇 가지 세부 정보입니다.

<CollapserGroup>
  <Collapser
    id=""
    title="X-Query-Key(쿼리 키)"
  >
    [쿼리 키](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#x-query-key) 검증은 뉴렐릭으로 인증하고 지표가 포함된 계정을 식별하는 데 필요합니다. Grafana는 이를 <DNT>**X-Query key**</DNT>이라고 부르지만 뉴렐릭 UI 에서는 <DNT>**Query key**</DNT> 로 표시됩니다.

    세부:

    * 필수의
    * 인증에 사용되는 API 쿼리 키
    * Prometheus 원격 쓰기 통합을 사용하는 경우 X-Query-Key는 원격 쓰기 통합에 사용된 X-License-Key와 동일한 계정에 해당해야 합니다.
  </Collapser>

  <Collapser
    id=""
    title="X-프로메테우스 전용"
  >
    <Callout variant="important">
      Grafana의 자동 완성 지원은 Prometheus 명명 규칙을 엄격히 준수하지 않는 메트릭을 처리하지 않습니다. New Relic은 이 매개변수를 준수하지 않는 모든 메트릭을 제외할 것을 권장합니다.
    </Callout>

    세부:

    * 선택 과목
    * API에 의해 노출되는 측정항목을 Prometheus에서 발생하는 측정항목으로 제한합니다.
    * 기본값 = 지정되지 않은 경우 true
  </Collapser>

  <Collapser
    id=""
    title="X-Prometheus-서버"
  >
    이 매개변수는 여러 Prometheus 서버에서 메트릭을 수집하는 경우에 유용합니다. 예를 들어 Grafana를 사용하는 경우 New Relic에 연결된 각 Prometheus 서버에 대한 데이터 원본을 만든 다음 모든 Prometheus 서버에서 쿼리하는 데 사용할 수 있는 다른 데이터 원본을 만들 수 있습니다.

    세부:

    * 선택 과목
    * API에 의해 노출되는 메트릭을 지정된 Prometheus 서버에서 수집된 메트릭으로 제한합니다.
    * 이 값은 Prometheus 서버를 New Relic에 연결하는 데 사용되는 원격 쓰기 URL의 `prometheus_server` URL 매개변수와 일치해야 합니다.
    * 모든 서버에서 수집된 메트릭을 반환하는 기본값
  </Collapser>
</CollapserGroup>

## Prometheus 데이터 소스 삭제 [#delete]

Grafana에서 데이터 소스를 삭제하려면:

1. <DNT>
     **Configuration > Data Sources**
   </DNT>

   으)로 이동합니다.

2. 삭제할 데이터 소스를 클릭합니다.

3. 페이지 하단의

   <DNT>
     **Delete**
   </DNT>

   버튼을 클릭하세요.
