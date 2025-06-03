---
title: 무스 인박스(errors inbox)를 통한 버전 추적
metaDescription: 'Errors inbox is an error tracking solution designed to give you the tools to proactively detect, triage, and resolve errors across your full application stack.'
freshnessValidatedDate: '2024-05-13T00:00:00.000Z'
translationType: machine
---

<SideBySide>
  <Side>
    사과스 인박스(errors inbox) 버전 추적을 통해 개발자는 각 배포를 모니터링하여 정확성과 성공 여부를 확인할 수 있습니다. 당신과 당신의 팀이 엔터티 중 하나에 오류율이 급증했다는 공지를 받았다고 가정해 보겠습니다. [오류의 원인을](/docs/tutorial-error-tracking/respond-outages/) 식별하고 카나리아 배포를 릴리스하기로 결정합니다. 버전 추적을 사용하면 수정 사항과 이전 배포를 모니터링하여 문제를 해결했는지 또는 초기 단계로 돌아가야 하는지 확인할 수 있습니다.
  </Side>

  <Side>
    <img
      width="60%"
      title="errors inbox change tracking"
      alt="A screenshot that depicts error occurrences by version"
      src="/images/errors-inbox_screenshot-crop_errors-inbox-change-tracking.webp"
    />
  </Side>
</SideBySide>

## 오류 상태별 분류 [#error-status]

받은편지함을 분류할 때 다양한 상태 중에서 선택할 수 있습니다. 오류를 즉시 해결하거나 무시되도록 표시할 수도 있습니다. 다른 경우에는 다음 버전이나 특정 버전에서 문제를 해결해야 할 수도 있습니다.

<img
  style={{ align: 'left',maxWidth: '100%' }}
  title="Screenshot showing resolve in version"
  alt="Screenshot showing resolve in version"
  src="/images/errors-inbox_screenshot-full_resolve-in-version.webp"
/>

다음 상태 중 하나를 설정하고 받은편지함을 상태별로 필터링할 수 있습니다.

* <DNT>
    **Unresolved**
  </DNT>

  : 오류 그룹의 기본 상태입니다.

* <DNT>
    **Resolve in next version**
  </DNT>

  : 다음 릴리스에서 이 오류 그룹을 해결하려면 이 상태를 사용하는 것이 좋습니다. 이 옵션을 활성화하려면, 오류 인박스(errors inbox)가 새로운 릴리스를 감지하고 오류 그룹이 실제로 해결되었는지 확인할 수 있도록 [추적 변경을](/docs/change-tracking/change-tracking-introduction/#start-tracking) 설정해야 합니다. 오류 그룹이 다음 버전이나 향후 버전에서 계속 감지되는 경우 오류 그룹은 자동으로 해결되지 않고 회귀로 표시되며 회귀에 대한 Slack 공지를 받게 됩니다.

* <DNT>
    **Resolve in specific version**
  </DNT>

  : 다음 상황에서 오류 그룹을 해결하려면 이 옵션을 선택합니다.

  * 특정 버전에서 오류 그룹이 해결될 것임을 알고 있는 경우
  * 기존 버전에서는 해당 오류 그룹이 해결된 것으로 알고 있는 경우
  * 특정 버전을 입력하려는 경우

  이 옵션을 활성화하려면 제작 또는 서비스에 대한 [버전 추적을 수행](#instrument-version-tracking) 해야 합니다. 동등하거나 더 높은 의미 버전의 오류 발생이 감지되면 오류 그룹은 자동으로 해결되지 않고 회귀로 표시되며 회귀에 대한 Slack 공지를 받게 됩니다.

* <DNT>
    **Resolve**
  </DNT>

  : 오류 그룹을 해결된 것으로 설정하면 해결된 오류 그룹을 포함하도록 필터가 업데이트되지 않는 한 기본 받은 편지함 보기에서 해당 그룹이 숨겨집니다. 오류 그룹을 해결된 것으로 표시한 후 오류 그룹 지문과 일치하는 이벤트가 발생하면 자동으로 상태가 **Unresolved** 로 재설정됩니다. 이는 회귀를 식별하는 데 유용할 수 있습니다.

* <DNT>
    **Ignore**
  </DNT>

  참고: 무시된 오류를 포함하도록 필터를 업데이트하지 않거나 오류 그룹 무시를 중지할 때까지 받은 편지함 보기에서 오류 그룹을 숨깁니다.

<Callout variant="tip">
  <DNT>**Resolve in next version**</DNT> 및 <DNT>**Resolve in specific version**</DNT> 옵션은 팀에서 의미 체계 버전 관리를 사용하는 경우에만 지원됩니다.
</Callout>

## 버전 추적 필드 이해 [#understand-version-tracking-fields]

계측기 버전을 추적하기 전에 오류 받은 편지함이 결과를 정렬하는 방법을 이해하는 것이 중요합니다. APM 및 OpenTelemetry 애플리케이션에서 오류를 추적할 때 다음 이벤트 필드가 확인되어 _다음 순서로_ 표시됩니다.

1. `service.version`
2. `tags.service.version`
3. `tags.releaseTag`
4. `tags.commit`

모바일 애플리케이션의 경우 이벤트 필드는 `appVersion` 입니다.

브라우저 애플리케이션의 경우 이벤트 필드는 `application.version` 입니다.

## 기기 버전 추적 [#instrument-version-tracking]

버전 추적에서 데이터를 캡처하려면 관련 엔터티에 대한 필드를 구성해야 합니다.

* [OpenTelemetry 엔터티의 경우 `service.version`을 구성합니다](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-resources/).

* APM 엔터티의 경우 APM 엔터티에 대한 환경 변수를 구성합니다.

  * [가다](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config/#errors-inbox-configuration)
  * [자바](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#errors-inbox-configuration)
  * [.그물](/docs/apm/agents/net-agent/configuration/net-agent-configuration/#errors-inbox-configuration)
  * [노드.js](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#errors-inbox-configuration)
  * [PHP](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#errors-inbox-configuration)
  * [파이썬](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#errors-inbox-configuration)
  * [루비](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#errors-inbox-configuration)

* [모바일 엔터티의 경우 `appVersion`구성합니다](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-application-version/).

* [브라우저 엔터티의 경우 `application.version`사용하세요](/docs/browser/new-relic-browser/browser-apis/setApplicationVersion/).

## 버전별로 필터링 [#filter-by-version]

버전 추적을 계측하면 오류 그룹이 자동으로 각 릴리스의 데이터를 캡처합니다. 각 버전별로 필터링할 수 있습니다.

여러 버전으로 오류 그룹을 필터링하려면 + 연산자를 사용하여 `OR` 조건을 선택하세요.

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="version tracking errors inbox"
  alt="A screenshot depicting how to filter by versions in errors inbox. "
  src="/images/errors-inbox_screenshot-crop_filter-errors-by-versions.webp"
/>

[변경 내용 추적을](/docs/change-tracking/change-tracking-view-analyze/) 사용하여 배포를 모니터링할 수 있습니다. 이 작업을 수행한 경우 오류의 버전을 배포와 일치시킬 수 있도록 배포가 엔터티에 계측한 것과 동일한 버전 형식과 일치하는지 확인하는 것이 중요합니다.

## 오류 그룹별로 버전 찾기 [#find-versions-by-error-group]

오류 그룹을 클릭하면 오류 그룹의 처음 및 마지막 확인 날짜와 일치하는 각 배포를 볼 수도 있습니다. 처음 본 날짜로부터 30분 이내, 마지막으로 본 날짜 전 30분 이내에 게시된 버전만 볼 수 있습니다.

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="error date"
  alt="A screenshot depicting last seen date of errors"
  src="/images/errors-inbox_screenshot-full_error-date.webp"
/>

버전별로 그룹화된 각 오류 발생을 보여주는 차트를 사용하여 오류 그룹을 더 자세히 살펴볼 수 있습니다.

변경 내용 추적을 사용하여 배포도 설정한 경우 이 차트에 배포 표시가 표시됩니다. 이러한 마커는 각 배포가 릴리스된 시기를 나타냅니다. 배포로 이동하려면 마커를 클릭하세요.
