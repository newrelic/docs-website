---
title: Pixie 데이터 탐색
tags:
  - Pixie Auto-telemetry
  - Pixie integration
  - Kubernetes
  - eBPF
metaDescription: Explore Pixie data in the UI of New Relic
freshnessValidatedDate: never
translationType: machine
---

Pixie가 수집한 자동 원격 측정은 New Relic의 UI 전체에서 찾을 수 있습니다.Pixie 원격 측정 데이터를 사용하여 다음을 수행합니다.

* [서비스 상태 모니터링](#service-health)
* [포드 애플리케이션 CPU 프로필 보기](#cpu-profiles)
* [네트워킹 문제 모니터링](#network-health)
* [전신 요청 검사](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/pixie-entities)

New Relic의 UI는 단기 및 장기 스토리지 모두에서 Pixie 원격 측정 데이터를 가져옵니다. [여기](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview) 에서 New Relic Pixie 통합을 위한 하이브리드 스토리지 모델에 대해 자세히 알아보십시오.

## 서비스 상태 모니터링 [#service-health]

Pixie는 하나의 엔드포인트가 클러스터 외부에 있더라도 서비스 간에 전송된 HTTP(HTTP/2 포함) 요청을 자동으로 추적합니다.

뉴렐릭 Pixie 통합은 OpenTelemetry 프로토콜을 사용하여 장기 저장을 위해 Pixie에서 뉴렐릭으로 HTTP 범위를 내보냅니다. <DNT>**Services - OpenTelemetry**</DNT> 보기에는 서비스 응답 시간, 처리량 및 오류율에 대한 높은 수준의 개요와 함께 Pixie가 자동으로 식별한 서비스가 나열됩니다.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  src="/images/pixie_screenshot-full_services-otel.webp"
/>

<figcaption>
  <DNT>**Services - OpenTelemetry**</DNT> 보기에는 높은 수준의 지연 시간, 오류 및 처리량 세부 정보와 함께 Pixie에서 식별한 모든 서비스가 나열됩니다.
</figcaption>

이 목록에서 서비스를 선택하면 이 서비스에 대한 모든 HTTP 요청에 대한 응답 시간, 처리량 및 오류율 그래프를 보여주는 서비스 <DNT>**Summary**</DNT> 보기가 열립니다.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  src="/images/pixie_screenshot-full_services-otel-details.webp"
/>

<figcaption>
  OpenTelemetry 서비스 <DNT>**Summary**</DNT> 보기에는 시간 경과에 따른 응답 시간, 처리량 및 오류율 그래프가 표시됩니다.
</figcaption>

OpenTelemetry 서비스 보기의 왼쪽 사이드바에서 <DNT>**Service map**</DNT> 탭을 선택합니다. 이 서비스 맵 보기는 해당 서비스가 통신하는 모든 엔터티의 그래프를 표시하여 귀하의 계약의 의존성/종속성을 시각화하는 데 도움이 됩니다.

<img
  title="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  alt="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  src="/images/pixie_screenshot-full_service-otel-map.webp"
/>

<figcaption>
  OpenTelemetry <DNT>**Service map**</DNT> 뷰는 제작자의 의존성/종속성을 시각화하는 데 도움이 됩니다.
</figcaption>

OpenTelemetry 서비스 <DNT>**Transactions**</DNT> 탭에는 서비스가 요청하는 다양한 엔드포인트가 표시됩니다. 응답 시간이나 처리량을 기준으로 엔드포인트를 정렬할 수 있습니다.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  alt="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  src="/images/pixie_screenshot-full_services-otel-transactions.webp"
/>

<figcaption>
  OpenTelemetry <DNT>**Transactions**</DNT> 탭에 표시된 Pixie 데이터
</figcaption>

<DNT>**Databases**</DNT> 탭에는 서비스가 수행하는 모든 데이터베이스 요청이 표시됩니다.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  alt="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  src="/images/pixie_screenshot-full_services-otel-databases.webp"
/>

<figcaption>
  OpenTelemetry <DNT>**Databases**</DNT> 탭에 표시된 Pixie 데이터
</figcaption>

Pixie에서 제공하는 서비스 상태 정보는 Kubernetes 클러스터 탐색기(KCE) 보기에서도 찾을 수 있습니다.KCE 요약 보기에는 Pixie가 자동으로 식별하는 모든 서비스가 포함됩니다.

<img
  title="The Kubernetes cluster explorer shows the services identified by Pixie."
  alt="The Kubernetes cluster explorer shows the services identified by Pixie."
  src="/images/pixie_screenshot-full_kce.webp"
/>

<figcaption>
  Kubernetes 클러스터 탐색기는 Pixie가 식별한 서비스를 보여줍니다.
</figcaption>

서비스를 선택하면 Pixie에서 수집한 HTTP 처리량, 오류율 및 응답 시간 데이터가 포함된 서비스 세부 정보 사이드바가 표시됩니다.

<img
  title="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  alt="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details.webp"
/>

<figcaption>
  Kubernetes 클러스터 탐색기의 포드 세부 정보 페이지는 Pixie에서 수집한 애플리케이션 메트릭을 보여줍니다.
</figcaption>

서비스 세부정보 보기 하단의 <DNT>**Related Entities**</DNT> 섹션에서 <DNT>**Map View**</DNT> 버튼을 선택합니다.

이 지도 보기는 서비스가 통신하는 모든 엔터티의 그래프를 표시하여 애플리케이션의 종속성을 시각화하는 데 도움이 됩니다.

<img
  title="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  alt="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details-map.webp"
/>

<figcaption>
  포드 세부 정보 보기에 표시된 서비스 맵은 Pixie에서 수집한 HTTP 추적을 사용하여 구성됩니다.
</figcaption>

서비스 세부정보 보기 상단에서 <DNT>**Check metrics in Pixie**</DNT> 선택하여 [Pixie를 사용한 라이브 디버깅](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) 탭의 `px/service` 스크립트로 이동합니다. `px/service script` 는 이 서비스 성능 통계에 대한 상위 수준 개요와 클러스터에 저장된 단기 Pixie 데이터를 사용하는 인바운드 요청을 보여줍니다.

## 포드 애플리케이션 CPU 프로필 보기 [#cpu-profiles]

Pixie의 지속적인 프로파일링 기능을 사용하여 CPU 사용률 급증을 조사하거나 애플리케이션 코드 내에서 성능 문제를 식별할 수 있습니다.

포드 세부 정보 보기를 보려면 Kubernetes 클러스터 탐색기 보기에 나열된 포드를 선택하십시오.

<img
  title="The pod detail view contains an option to see a pod cpu flamegraph."
  alt="The pod detail view contains an option to see a pod cpu flamegraph."
  src="/images/pixie_screenshot-full_kce-pod.webp"
/>

<figcaption>
  쿠버네티스 클러스터 탐색기의 <DNT>**Pod details view**</DNT> 에는 <DNT>**Check flamegraph in Pixie**</DNT> 옵션이 있습니다.
</figcaption>

파드 세부정보 보기에서 클러스터의 단기 저장소에 있는 Pixie의 풍부한 데이터 세트를 사용하여 CPU 프로필을 보려면 <DNT>**Check flamegraph in Pixie**</DNT> 옵션을 선택하세요.

<img
  title="Check a pod's CPU profile using Pixie"
  alt="Check a pod's CPU profile using Pixie"
  src="/images/pixie_screenshot-crop_cpu-profile.webp"
/>

<figcaption>
  Pixie를 사용하여 Kubernetes 포드의 CPU 화염 그래프를 확인하세요.
</figcaption>

Kubernetes 노드의 CPU 화염 그래프를 보려면[Pixie를 사용한 라이브 디버깅](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) 탭에서 `px/node` 스크립트를 사용하세요.노드의 CPU 화염 그래프를 보려면 이 보기의 맨 아래로 스크롤하십시오.

[Continuous Profiling Tutorial](https://docs.px.dev/tutorials/pixie-101/profiler/) 에서 Pixie의 CPU 화염 그래프와 상호 작용하는 방법을 배우십시오.

## 네트워킹 문제 모니터링 [#network-health]

Pixie를 사용하여 애플리케이션 및 인프라 계층과 함께 Kubernetes 네트워크를 모니터링할 수 있습니다.

쿠버네티스 클러스터 탐색기의 <DNT>**Summary**</DNT> 탭에는 <DNT>**Kubernetes network monitoring with Pixie**</DNT> 섹션이 포함되어 있습니다. 이 섹션에 링크된 각 보기는 클러스터의 [단기 저장소에 저장된](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview) 풍부한 Pixie 텔레메트리 데이터 세트를 통해 제공됩니다.

<img
  title="Kubernetes network monitoring with Pixie"
  alt="Kubernetes network monitoring with Pixie"
  src="/images/pixie_screenshot-full_network-monitoring.webp"
/>

<figcaption>
  Kubernetes 네트워크 모니터링에 Pixie를 사용합니다.
</figcaption>

<DNT>**Spot DNS issues**</DNT> 링크는 클러스터의 모든 DNS 요청 그래프를 표시합니다. 지연 시간 및 처리량 정보를 보려면 그래프의 가장자리 위로 마우스를 가져가세요.

<img
  title="Spot DNS issues with Pixie's DNS flow graph"
  alt="Spot DNS issues with Pixie's DNS flow graph"
  src="/images/pixie_screenshot-full_dns-flow-graph.webp"
/>

<figcaption>
  Pixie의 DNS 흐름 그래프를 사용하여 클러스터에서 DNS 문제를 찾아냅니다.
</figcaption>

<DNT>**See TCP retransmissions**</DNT> 및 <DNT>**See dropped packets**</DNT> 링크는 클러스터의 TCP 재전송 및 TCP 삭제 그래프를 표시합니다. 이러한 보기에 대한 결과를 보려면 `RUN` 버튼을 눌러야 합니다. TCP 삭제 출력은 다음과 같습니다.

<img
  title="See TCP drops and TCP retransmissions using Pixie"
  alt="See TCP drops and TCP retransmissions using Pixie"
  src="/images/pixie_screenshot-full_tcp-drops.webp"
/>

<figcaption>
  Pixie를 사용하여 클러스터에서 TCP 삭제 및 TCP 재전송을 참조하십시오.
</figcaption>

위의 <DNT>**Kubernetes network monitoring with Pixie**</DNT> 뷰는 `px/dns_flow_graph`, `px/tcp_drops` 및 `px/tcp_retransmits` 스크립트를 사용하여 [Pixie를 사용한 실시간 디버깅](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) 탭에서도 볼 수 있습니다. 이러한 스크립트에는 출력을 필터링하여 엔터티를 선택할 수 있는 선택적 인수가 있습니다.
