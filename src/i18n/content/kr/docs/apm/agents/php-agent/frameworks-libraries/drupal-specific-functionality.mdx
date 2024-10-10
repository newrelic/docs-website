---
title: Drupal 전용 기능
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'Drupal websites: Use the newrelic.framework.drupal.modules INI setting to capture special metrics for modules, hooks, views, and browser instrumentation.'
freshnessValidatedDate: never
translationType: machine
---

PHP 에이전트는 Drupal 웹사이트에 대한 특별한 지표를 캡처합니다. 이러한 지표가 수집되면 뉴렐릭 인터페이스 사용자에 <DNT>**Drupal**</DNT> 탭이 나타납니다. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Drupal app)**</DNT> 로 이동하세요.

## 구성

Drupal 관련 지표 컬렉션은 [`newrelic.framework.drupal.modules`](/docs/php/php-agent-phpini-settings#inivar-framework-drupal-modules) 으로 제어할 수 있습니다. 이는 기본적으로 활성화되어 있으며(버전 <DNT>**3.0**</DNT> 이상) 다음을 사용하여 비활성화할 수 있습니다.

```ini
newrelic.framework.drupal.modules = 0
```

이 설정은 "모듈"이라는 단어를 사용하지만 모든 Drupal 메트릭(모듈, 보기 및 후크)의 컬렉션을 제어합니다.

## 메트릭

PHP 에이전트는 다음에 대한 메트릭을 수집합니다.

* <DNT>
    **Modules**
  </DNT>

  : 버전 2.5 이상. 이러한 지표는 각 Drupal 모듈 내에서 소요된 시간을 나타냅니다. 버전 3.5 이상에서는 후크 디스패치 함수 `module_invoke` 및 `module_invoke_all` 에서 시간이 계산됩니다. 이전 버전에서는 ".module"이 있는 파일의 함수에서 시간을 계산했습니다. 파일 이름과 함수 접두사가 일치하는 확장명.

* <DNT>
    **Hooks**
  </DNT>

  : 버전 3.5 이상. 이러한 지표는 각 Drupal 후크 내에서 소요된 시간을 나타냅니다. 시간은 후크 디스패치 함수 `module_invoke` 및 `module_invoke_all` 에서 계산됩니다.

* <DNT>
    **Views**
  </DNT>

  : 버전 3.5 이상. 이러한 지표는 보기의 `view::execute` 메서드 내에서 소요된 시간을 나타냅니다.

## Drupal 및 브라우저 계측 [#page-load-timing-rum]

Drupal 7.15에서는 <DNT>**Compress cached pages**</DNT> 기본적으로 켜져 있습니다. <DNT>**Cache pages for anonymous users**</DNT> 도 선택하면 <InlinePopover type="browser"/>자바스크립트가 익명 사용자에게 제공되는 페이지에 삽입되지 않습니다. 이는 Drupal의 페이지가 캐시에 저장되기 전에 데이터베이스에서 직접 압축되어(gzip 사용) 뉴렐릭의 PHP 에이전트가 HTML을 구문 분석할 기회가 없기 때문입니다.

이러한 상황에서는 수동 계측이 익명 사용자의 데이터를 캡처할 수 있는 더 나은 기회를 제공합니다. 자세한 내용은 [브라우저 모니터링 및 PHP 에이전트를](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/)참조하세요.

Drupal 10.2에는 `content-length` 헤더를 설정하는 [새로운 변경 사항이](https://www.drupal.org/node/3298551) 도입되었습니다. 뉴렐릭 PHP 에이전트는 HTTP 헤더 필드 `Content-Length` 이 설정된 경우 브라우저 자동 측정, 자동 로그를 자동 삽입할 수 없습니다. 브라우저 모니터링을 계속 사용하려면 브라우저 자동 측정, 자동 로그를 비활성화하고 JavaScript 머리글 및 바닥글을 템플릿에 수동으로 삽입하세요. 자세한 내용은 [여기를](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/#auto_instrumentation) 참조하세요.

## 크론 작업 [#cron]

Drupal은 설치된 Drupal 모듈을 대신하여 일상적인 유지 관리 또는 유사한 작업을 수행하기 위해 주기적으로 작업을 실행하는 것을 지원합니다. 이러한 작업은 초기 구성 이외의 수동 개입 없이 실행할 수 있습니다. 일반적으로 이러한 작업을 [cron 작업](https://drupal.org/cron "링크가 새 창에서 열립니다.") 이라고 합니다. 버전 4.3부터 New Relic PHP 에이전트는 이러한 작업의 실행을 감지하고 시작 방법에 관계없이 자동으로 [백그라운드 트랜잭션](/docs/features/monitoring-background-processes#ui) 으로 표시합니다.
