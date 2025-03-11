---
title: 워드프레스 전용 기능
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'WordPress websites: Use the newrelic.framework.wordpress.hooks INI setting to capture special metrics for hooks, plugins, and themes with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

[WordPress 웹사이트용 뉴렐릭을 설치](/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service) 하면 PHP 에이전트가 추가 지표를 받습니다. 뉴렐릭 사용자 인터페이스에 <DNT>**WordPress**</DNT> 페이지가 나타납니다. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a WordPress app)**</DNT>)로 이동하세요.

## 구성

PHP 에이전트의 `ini` 설정 `newrelic.framework.wordpress.hooks` 을 사용하여 앱이 뉴렐릭으로 보내는 WordPress 관련 지표를 제어할 수 있습니다. 이는 버전 <DNT>**5.3**</DNT> 이상에서 기본적으로 활성화되어 있으며 다음을 사용하여 비활성화할 수 있습니다.

```ini
newrelic.framework.wordpress.hooks = false
```

이 설정은 `.hooks` 라는 단어를 사용하지만 모든 WordPress 관련 측정항목 캡처를 제어합니다.

뉴렐릭 PHP 에이전트 버전 10.16에는 WordPress 관련 측정항목과 해당 측정항목에서 전송되는 데이터를 미세 조정할 수 있는 `newrelic.framework.wordpress.hooks.options` `ini` 설정이 추가되었습니다. 이 설정에서는 `"all_callbacks"` (뉴렐릭 PHP 에이전트 버전 10.16 기본값), `"plugin_callbacks"` (뉴렐릭 PHP 에이전트 버전 10.20 기본값) 및 `"threshold"` 값을 허용합니다. `"all_callbacks"` 옵션을 사용하면 모든 후크 콜백 기능이 로그백됩니다. `"plugin_callbacks"` 및 `"threshold"` 설정을 사용하면 에이전트가 수집한 데이터를 미세 조정하여 에이전트의 오버헤드를 줄일 수 있습니다. `newrelic.framework.wordpress.hooks.options` `"plugin_callbacks"` 로 설정하면 계측이 플러그인/테마 콜백으로만 제한됩니다. `newrelic.framework.wordpress.hooks.options` `"threshold"` 로 설정하면 플러그인/테마 모니터링이 비활성화되고 이 작업 모드에서는 뉴렐릭 PHP 에이전트는 `newrelic.framework.wordpress.hooks.threshold` 초과하는 후크의 실행만 기록합니다(1ms는 기본 레볼루션, 관측값임).

## 메트릭

PHP 에이전트는 다음에 대한 메트릭을 수신합니다.

* <DNT>
    **Hooks**
  </DNT>

  : 이 지표는 각 WordPress 후크 내에서 소요된 시간을 나타냅니다. 시간은 후크 디스패치 함수 `apply_filters`, `apply_filters_ref_array`, `do_action` 및 `do_action_ref_array` 에서 계산됩니다. `newrelic.framework.wordpress.hooks.options="all_callbacks"` 인 경우 WordPress 핵심 콜백이 포함됩니다. `newrelic.framework.wordpress.hooks.options="plugin_callbacks"` 인 경우 플러그인/테마 콜백만 포함됩니다. 두 경우 모두 지표 개수는 콜백 호출 횟수를 나타냅니다. 그러나 `newrelic.framework.wordpress.hooks.options="threshold"` 인 경우 메트릭 개수는 후크가 실행된 횟수를 나타냅니다.

* <DNT>
    **Plugins and themes**
  </DNT>

  : 이 지수는 각 워드프레스 사용 및 테마 내에서 소요된 시간을 나타냅니다. 시간은 후크에 대한 디스패치 함수에서 계산됩니다. 이 지표는 `newrelic.framework.wordpress.hooks.options` 이 `"all_callbacks"` 또는 `"plugins_only"` 인 경우에만 생성됩니다.

## New Relic 파트너와의 통합 [#integration]

WordPress 애플리케이션을 APM과 통합하면 WordPress 앱의 <DNT>**Administration**</DNT> 페이지에서 직접 성능을 볼 수 있습니다. 예를 들어, [W3 Total Cache](https://newrelic.com/blog/best-practices/web-performance-optimization-automation) 는 WordPress 앱을 전문으로 하는 뉴렐릭의 파트너 중 하나입니다.
