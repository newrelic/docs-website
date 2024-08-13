---
title: Java 비동기 계측 소개
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'An explanation of what asynchronous application activity is, and how it impacts New Relic performance monitoring of Java applications.'
freshnessValidatedDate: never
translationType: machine
---

[New Relic for Java (Java용 New Relic에는)](/docs/agents/java-agent/getting-started/introduction-new-relic-java) 비동기 활동의 정의 측정을 위한 [API 메소드 세트가](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications) 포함되어 있습니다. 이는 [지원되지 않는 프레임워크](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#frameworks) 의 비동기 활동에 가장 유용하지만 API를 사용하여 지원되는 프레임워크에 측정, 리소스를 추가할 수도 있습니다. 이 문서에서는 비동기 활동이 발생하는 방식과 New Relic이 비동기 작업을 모니터링하는 방법을 설명합니다.

## 비동기 작업 [#h2_asynchronous_basics]

<DNT>**synchronous**</DNT> 프로그래밍 모델을 사용하면 프로그래밍 작업이 일반적으로 특정 순서로 실행됩니다. 다음 작업이 시작되기 전에 하나의 작업이 완료되어야 하며, 각 작업은 다음 작업이 완료되는 것을 차단합니다.

<DNT>**Asynchronous**</DNT> 프로그래밍은 비차단 모델을 사용하므로 작업을 병렬로 실행할 수 있습니다. 비동기적으로 실행되는 작업은 실행 및 초기화에서 서로 완전히 독립적입니다. 비동기 코드는 특정 순서로 실행되지 않으므로 서버의 전체 처리 능력을 보다 효율적으로 사용할 수 있으며 앱의 처리량이 증가합니다.

## 비동기 및 스레드 전환 [#thread_switching]

비동기 처리를 사용하는 애플리케이션의 경우 <DNT>**thread-switching**</DNT> 프로그램이나 작업이 한 스레드에서 다른 스레드로 전환되는 경우입니다. 이러한 중요한 인터리빙을 이해하면 어떤 메서드를 사용해야 하는지 결정하는 데 도움이 될 수 있습니다.

다음은 외부 요청을 병렬로 수행하는 컨트롤러가 있는 예제 메서드입니다. 이러한 요청은 비동기식으로 실행되므로 각 요청은 서로 독립적으로 실행되고 `getScoreAsync()` 은 호출된 직후에 반환됩니다. 이렇게 하면 `getScoreAsync()` 이 외부 호출을 하고 응답을 보내는 동안 요청 스레드가 계속 요청을 할 수 있습니다.

```java
@ResponseBody
@RequestMapping("getScores", method = RequestMethod.Get
    produces = "text/plain")
public String getCreditScores(@RequestParam(name = "uids") uids) {
    return Arrays.stream(uids.split(","))
                 .parallel()
                 .map(Integer::valueOf)
                 .map(uid -> getScoreAsync(uid))
                 .collect(Collectors.toList());}
```

이러한 요청 중 일부는 다른 요청보다 먼저 완료됩니다. 일부는 요청한 스레드가 다른 작업으로 이동한 후 완료될 수도 있습니다.

<img
  title="async diagram"
  alt="async diagram"
  src="/images/apm_diagram_Java-async-activity.webp"
/>

<InlinePopover type="apm"/>UI 트레이스 세부정보 폭포 보기에서 UI 가로 x축에 겹치는 활동을 표시합니다.

## 비동기 및 응답 시간 [#response_time]

<DNT>**Response time**</DNT> 요청자의 관점에서 트랜잭션 기간으로 정의됩니다. 비동기식 애플리케이션의 경우 응답 시간이 총 트랜잭션 시간보다 짧은 경우가 많습니다. 이는 메서드가 반환되기 전에 모든 이전 메서드가 완료될 때까지 기다릴 필요가 없기 때문입니다. 작업을 연기할 수 있으므로 애플리케이션은 제한된 리소스를 활용하고 작업을 더 빠르게 처리할 수 있습니다.

차트의 응답 타임 라인은 총 웹 트랜잭션 시간보다 애플리케이션의 인지된 동작과 속도에 대한 더 많은 통찰력을 제공합니다.

<img
  title="web_transaction_overview.png"
  alt="web_transaction_overview.png"
  src="/images/apm_screenshot-crop_web-transaction-overview.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Summary**</DNT>: APM <DNT>**Summary**</DNT> 페이지에서 Java 앱의 비동기 활동으로 인해 응답 시간(파란색 선)이 총 트랜잭션 시간보다 짧아질 수 있습니다. 이는 메서드가 반환되기 전에 모든 이전 메서드가 완료될 때까지 기다릴 필요가 없기 때문입니다.
</figcaption>

## 비동기 API를 사용한 사용자 정의 계측 [#async-api]

비동기 작업의 사용자 지정 계측을 구현하려면 [Java 에이전트 비동기 API 가이드](/docs/agents/java-agent/java-agent-api/java-agent-asynchronous-api-guide) 를 참조하세요. Java 에이전트 API 사용 방법에 대한 일반 정보는 [Java 에이전트 API 가이드](/docs/agents/java-agent/custom-instrumentation/java-agent-api-guide) 를 참조하십시오.
