---
title: Java의 호스트 이름 논리
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: The Java agent automatically assigns a hostname to your app. You can decorate this hostname with a display name in the New Relic UI.
freshnessValidatedDate: never
translationType: machine
---

Java 에이전트는 자동으로 JVM에 `host:port` 이름을 할당합니다. 기본 이름이 유용하지 않은 [경우 표시 이름을 설정](#display-name) 하여 New Relic UI에서 JVM을 구별할 수 있습니다. 지원되는 프레임워크의 경우 Java 에이전트는 표시 이름 대신 [인스턴스 이름](#instance-names) 을 사용합니다.

Java 에이전트는 사용되는 환경에 관계없이 [호스트, 포트 및 디스패처별로](#unique-identifier) 실행 중인 에이전트를 고유하게 식별합니다.

## 표시 이름 [#display-name]

APM UI 의 기본 `host:port` 라벨이 유용하지 않은 경우 뉴렐릭 UI 에서 해당 이름을 [표시 이름](/docs/apm/new-relic-apm/maintenance/add-rename-remove-hosts#display_name) 으로 장식할 수 있습니다. 환경 변수 또는 <DNT>**newrelic.yml**</DNT> 구성 파일에서 [구성을](/docs/agents/java-agent/configuration/java-agent-configuration-config-file) 통해 표시 이름을 설정합니다. 환경 변수는 구성 파일 값보다 우선합니다. JVM 다시 시작되고 원심 에이전트가 다시 보고되면 아래 예와 같이 `host:port` 외에 표시 이름이 JVM 목록에 표시됩니다.

표시 이름을 설정하려면:

* [`NEW_RELIC_PROCESS_HOST_DISPLAY_NAME`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#NEW_RELIC_PROCESS_HOST_DISPLAY_NAME) 환경 변수를 설정합니다.  
  또는

* <DNT>
    **newrelic.yml**
  </DNT>

  에 [`process_host.display_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#display_name) 설정합니다.

JVM을 다시 시작하여 New Relic UI에서 변경 사항을 확인하십시오.

<Callout variant="tip">
  [시스템 속성](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#System_Properties) 을 사용하여 표시 이름을 설정할 수도 있습니다.
</Callout>

<img
  title="display_name example"
  alt="upload.png"
  src="/images/apm_screenshot-crop_java-edit-host-name.webp"
/>

## 인스턴스 이름

WebSphere 및 WebLogic 사용자의 경우, 해리 에이전트는 APM <DNT>**Settings > Environment**</DNT> 페이지에 표시되는 각 활성 앱 서버에 대한 이름도 보고합니다. 일반적으로 이 이름은 앱 서버에서 제공됩니다. 인스턴스 이름이 설정되면 뉴렐릭 UI에서 표시 이름 대신 해당 이름이 사용됩니다.

## 호스트 이름 논리 우선 순위 [#precedence]

여러 호스트 이름 설정이 있는 경우(예: WebSphere를 사용하고 `display_name` 속성도 설정) 에이전트는 다음 우선 순위를 사용합니다.

* `display_name` 기본 이름과 WebSphere 및 WebLogic 인스턴스 이름을 재정의합니다.
* WebSphere 및 WebLogic 인스턴스 이름은 기본 이름을 대체합니다.
* 기본( `host:port` ) 이름은 우선 순위가 가장 낮습니다.

## 호스트 및 고유 에이전트 식별자 [#unique-identifier]

Java 에이전트는 호스트, 포트 및 디스패처를 사용하여 동일한 앱 이름을 보고하는 여러 JVM을 고유하게 식별합니다. 따라서 동일한 서버에서 실행 중인 여러 에이전트는 포트 또는 디스패처 이름이 다른 한 별도로 보고됩니다.

고유 식별자는 다음 값을 기반으로 합니다.

* <DNT>
    **Host**
  </DNT>

  : 운영 시스템에서 파생된 앱의 상위 서버에 대한 제외입니다. 이 값은 저항력으로 구성할 수 없습니다.

* <DNT>
    **Port**
  </DNT>

  : 앱 서버와 연결된 포트입니다. 에이전트가 포트 번호를 확인할 수 없거나 앱이 앱 서버에서 실행되고 있지 않은 경우 기본값은

  <DNT>
    **0**
  </DNT>

  입니다. 이 값은 사용자가 구성할 수 있습니다.

* <DNT>
    **Dispatcher Name**
  </DNT>

  : 앱 서버의 이름입니다. 예를 들어 Apache Tomcat, Glassfish 또는 WebLogic이 있습니다. 활성 앱 서버가 없으면 기본값은

  <DNT>
    **Unknown**
  </DNT>

  입니다.
