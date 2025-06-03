---
title: 보안 취약점으로 식별된 Java 에이전트
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
freshnessValidatedDate: never
translationType: machine
---

## 문제

보안 스캔이 수행되면 New Relic Java 에이전트( `newrelic.jar` )에 대한 취약점을 다시 보고합니다.

## 원인

모든 소프트웨어 제품에는 잠재적으로 보안 취약점이 있을 수 있지만 New Relic Java 에이전트는 보안 제품에 의해 잘못 식별될 수 있습니다. 파일에서 특정 문자열 패턴을 검색하는 보안 제품은 에이전트의 일부인 계측 모듈을 취약한 라이브러리로 잘못 표시할 수 있습니다.

이러한 계측 모듈은 계측을 위해 설계된 소프트웨어 프레임워크와 해당 버전의 이름을 딴 JAR 파일입니다. 여기에는 프레임워크의 코드가 포함되어 있지 않지만 동일한 이름의 클래스가 포함될 수 있습니다. 일부 보안 스캐닝 도구는 이러한 이름/버전을 감지하고 계측 모듈일 때 이를 실제 소프트웨어 프레임워크 자체로 해석합니다.

`instrumentation` 패키지 아래의 `newrelic.jar` 내부 또는 `instrumentation-security` 패키지 아래의 `newrelic-security-agent.jar` 내부에 있습니다.

`newrelic.jar` 또는 `newrelic-security-agent.jar` 내의 모든 jar 파일에 대한 경고는 거짓양성이므로 억제되어야 합니다.

## 해결책

`instrumentation-security` `instrumentation` [New Relic Java 에이전트](https://github.com/newrelic/newrelic-java-agent/tree/main/instrumentation) `newrelic-security-agent.jar` `newrelic.jar` [Java용 New Relic SecurityAgent](https://github.com/newrelic/csec-java-agent/tree/main/instrumentation-security).

예를 들어 [github.com/jeremylong/DependencyCheck](https://github.com/jeremylong/DependencyCheck) 의 `DependencyCheck` 프로젝트에서 발견한 오탐지는 다음을 사용하여 억제할 수 있습니다.

```jar
<suppress>
    <notes><![CDATA[newrelic-agent false positives due to the instrumentation package]]></notes>
    <filePath regex="true">.*newrelic.*\.jar[\\\/]instrumentation.*\.jar</filePath>
    <cpe regex="true">.*</cpe>
</suppress>
```

가양성을 억제하기 위한 적절한 구성에 대해서는 보안 스캔 공급업체에 문의하십시오.
