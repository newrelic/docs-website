---
title: Java 사용자 정의 계측 문제 해결
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: Troubleshooting tips when using custom instrumentation with your New Relic Java agent.
freshnessValidatedDate: never
translationType: machine
---

다음은 [New Relic의 Java 에이전트를 사용한 사용자 지정 계측에](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) 대한 몇 가지 문제 해결 팁입니다.

## UI 옵션

뉴렐릭의 UI 사용하여 사용자 정의 편집기로 [로그 규칙을 정의](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) 하거나 자바 앱의 <DNT>**Settings**</DNT>를 통해 XML 파일을 편집할 수 있습니다.

<DNT>**Java apps only:**</DNT> 뉴렐릭 UI 에서 직접 XML 파일을 편집하려면: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Settings > Live Instrumentation**</DNT>로 이동하세요. 여기에서 다음을 수행할 수 있습니다.

* 샘플 XML 파일을 다운로드합니다.
* 기존 XML 파일 편집을 선택합니다.
* 계측 기록을 검색합니다.

## 스레드 프로파일러의 중첩 트랜잭션 [#thread-profiler]

사용자 정의 계측은 중첩 트랜잭션에 유용합니다. 스레드 프로파일러에서 옆에 회색 아이콘이 있는 메서드는 계측할 수 없습니다. 그렇게 하면 허용할 수 없는 오버헤드가 발생하기 때문입니다. 그러나 이러한 방법의 자식은 일반적으로 계측될 수 있습니다.

<img
  title="Thread profiler: Nested transactions colors"
  alt="Thread profiler: Nested transactions colors"
  src="/images/apm_screenshot-crop_Java-custom-instrumentation-colors.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler:**</DNT> 회색 아이콘은 다운로드할 수 없음을 의미합니다. 흰색 아이콘은 계측화되지 않았지만 사용할 수 있음을 의미합니다. 파란색 아이콘은 현재 다운로드되었음을 의미합니다.
</figcaption>

계측할 수 있는 메서드를 식별하려면 적절한 메서드를 찾을 때까지 스레드 프로필 트리를 확장합니다.

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**
   </DNT>

   으)로 이동합니다.

2. 적절한 방법을 찾을 때까지 스레드 프로필 트리를 확장합니다.

3. [표준 절차](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) 에 따라 맞춤형 계측을 정의하고 배포합니다.

## 클래스 및 메서드 [#classes-methods]

Java 에이전트에 대한 사용자 정의 계측 문제를 해결할 때 `newrelic.yml` 구성 파일의 `pointcut` 정보를 [로그 파일](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting-java) 의 확인 메시지와 비교하십시오. 클래스와 메서드가 일치하는지 확인합니다.

다음은 예입니다.

```xml
# This is a pointcut example in your newrelic.yml config file:
<pointcut transactionStartPoint="true">
  <className>com.example.class.name</className>
  <method>
    <name>exampleMethod</name>
  </method>
</pointcut>
```

이것이 올바르게 계측되면 로그 파일에 다음과 유사한 메시지가 표시될 수 있습니다.

```
# This is a confirmation example in your log file:
Oct 1, 2015 10:58:52 -0700 [9805 1] com.newrelic FINER: Instrumenting com/example/class/name
```

로그 파일 클래스 및 메소드가 사용자 정의 계측 값과 일치하지 않으면 필요에 따라 검토하고 조정하십시오. (사용자 정의 계측 로드의 성공 또는 실패 여부에 대한 확인이 로그 파일에 항상 표시되는 것은 아닙니다.)

## XML에서 별도의 트랜잭션 [#separate-transaction]

다음은 여러 `method` 값이 있는 포인트컷의 예입니다. 메소드를 APM [<DNT>**Transactions**</DNT> 분석 테이블](/docs/apm/applications-menu/monitoring/transactions-page) 의 세그먼트가 아닌 별도의 트랜잭션으로 분류하기 위해 `nameTransaction` 이 XML에 추가되었습니다.

```xml
# This is a pointcut example to identify a specific transaction with XML custom instrumentation:
<pointcut>
  <nameTransaction/>
  <className>com.examplename.client.actionflow.impl.exampleActionFlow</className>
  <method>
    <name>requestNAME</name>
    <parameters>
      <type>boolean</type>
    </parameters>
  </method>
</pointcut>
```

## 비동기 트랜잭션 [#async]

애플리케이션이 비동기 프로세스를 사용하는 경우 Java API를 사용하여 비동기 작업자 활동을 상위 트랜잭션에 연결할 수 있습니다. 기본적으로 이러한 트랜잭션은 연결되어 있지 않습니다. 자세한 정보는 [Java 비동기 계측](/docs/agents/java-agent/async-instrumentation/introduction-java-async-instrumentation) 을 참조하십시오.
