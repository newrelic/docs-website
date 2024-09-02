---
title: 쓰레기 수거
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'To track garbage collection time with New Relic''s Ruby agent, use GC::Profiler.enable (CRuby 1.9.2 or higher) or GC.enable_stats (REE).'
freshnessValidatedDate: never
translationType: machine
---

가비지 수집(GC)은 사용되지 않은 데이터 개체를 찾고 다른 프로세스에서 사용할 수 있도록 해당 메모리 공간을 회수합니다. New Relic Ruby 에이전트는 CRuby 1.9.2 이상 또는 Ruby Enterprise Edition에서 실행되는 애플리케이션의 가비지 수집에 소요되는 시간에 대한 정보를 수집할 수 있지만 애플리케이션에서 이 기능을 명시적으로 활성화해야 합니다.

<Callout variant="important">
  오버헤드를 증가시키므로 프로덕션에서 장기간 가비지 수집을 사용하지 마십시오.
</Callout>

## 가비지 수집 계측 활성화 [#gc_setup]

기능을 활성화하려면 애플리케이션 초기화에 적절한 호출을 추가하십시오.

* CRuby 1.9.2 이상: `GC::Profiler.enable`
* 루비 엔터프라이즈 에디션: `GC.enable_stats`

Rails 애플리케이션의 경우 이 호출을 `config/initializers` 의 이니셜라이저에 추가하거나 `config/application.rb` 파일에 직접 추가할 수 있습니다.

## 앱 전체 GC 통계 보기 [#gc_view]

전체 가비지 수집 통계를 보려면 다음을 수행합니다.

1. [뉴렐릭에 로그인하고](https://one.newrelic.com) 루비 앱을 선택한 다음

   <DNT>
     **Summary**
   </DNT>

   으로 이동하세요.

2. APM

   <DNT>
     **Summary**
   </DNT>

   페이지의

   <DNT>
     **Web transactions time**
   </DNT>

   차트에서

   <DNT>
     **GC Execution**
   </DNT>

   통계를 찾습니다.

<img
  title="garbage_collection_overview"
  alt="garbage_collection_overview"
  src="/images/apm_screenshot-full_garbage-collection-transaction.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Summary**</DNT>: 웹 트랜잭션 시간 차트에서 가비지 수집 통계에는 <DNT>**GC Execution**</DNT> 라벨이 지정됩니다.
</figcaption>

## 자세한 GC 측정항목 보기 [#detailed]

트랜잭션별 가비지 수집 지표를 보려면 <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Transactions > (select a transaction)**</DNT> 으로 이동하세요. 그런 다음 GC에 소요된 시간과 각 트랜잭션에 대해 GC가 호출된 평균 횟수를 볼 수 있습니다. 가비지 수집을 자세히 보려면 다른 라벨을 숨기세요.

자세한 정보는 다음과 같습니다.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Garbage collection details**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        가비지 수집 시간의 추세
      </td>

      <td>
        가비지 수집에는 일반적으로 약간의 시간이 걸리므로 추세선이 차트에 표시되지 않을 수 있습니다. 가비지 수집 시간의 추세를 보려면 [개요 차트](#gc_view) 나 [자세한 칩셋](#detailed) 으로 이동하세요. 그런 다음 각 라벨을 선택하여 <DNT>**GC Execution**</DNT> 제외한 모든 차트 라벨을 숨깁니다.
      </td>
    </tr>

    <tr>
      <td>
        평균 통화 수
      </td>

      <td>
        각 컨트롤러 작업에 대한 평균 가비지 수집 호출 수를 보려면 [APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/applications-overview-dashboard) [페이지](/docs/apm/applications-menu/monitoring/applications-overview-dashboard) 에서 <DNT>**Transaction**</DNT> 선택합니다. 그런 다음 컨트롤러 작업을 선택하고 <DNT>**App Server Breakdown**</DNT> 를 확인하세요.
      </td>
    </tr>
  </tbody>
</table>
