---
title: 브라우저 모니터링 및 PHP 에이전트
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: Instrumentation for your New Relic PHP agent to set up browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

기본적으로 PHP 에이전트는 애플리케이션의 웹 페이지에 [브라우저 모니터링을](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) 자동으로 추가합니다. 이 자동화된 프로세스에서 PHP 에이전트는 브라우저 에이전트 JavaScript 코드 조각을 웹 페이지에 삽입합니다. 이는 페이지의 헤드 요소에 JavaScript 코드 조각을 수동으로 삽입할 필요 없이 프런트 엔드 브라우저 성능 모니터링을 얻을 수 있음을 의미합니다.

PHP 에이전트 구성 파일에서 자동 계측을 활성화 또는 비활성화하거나 PHP 에이전트 API를 사용하여 브라우저 모니터링을 수동으로 구성할 수 있습니다.

## 자동 계측 사용 또는 비활성화 [#auto_instrumentation]

기본적으로 PHP 에이전트는 브라우저 모니터링의 JavaScript 코드 조각을 페이지에 자동으로 삽입합니다. 이 설정을 변경하려면 INI 파일에서 [`newrelic.browser_monitoring.auto_instrument`](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#inivar-autorum) 설정을 편집하세요.

```ini
newrelic.browser_monitoring.auto_instrument=1
```

HTTP 헤더 필드 `Content-Length` 이 설정되면 자동 계측이 작동하지 않습니다. 이 상황에서 브라우저 모니터링을 사용하려면 자동 계측을 비활성화하고 JavaScript 머리글과 바닥글을 템플릿에 [수동으로 삽입](#manual_instrumentation) 하십시오.

## 에이전트 API를 통해 수동으로 계측 [#manual_instrumentation]

브라우저 모니터링을 수동으로 구성하려면 페이지에 적절한 스크립트를 포함하십시오. New Relic PHP 에이전트에는 필요한 JavaScript 머리글과 바닥글을 자동으로 생성하는 API가 있습니다.

<Callout variant="important">
  PHP 에이전트 API에 대한 호출은 PHP 에이전트가 실행되도록 로드되는 `newrelic` 확장에 대한 조건부입니다. 에이전트가 실행 중이 아닌 경우 JavaScript 머리글과 바닥글을 생성하기 위한 호출은 함수가 정의되지 않으므로 오류가 발생합니다.
</Callout>

자세한 내용은 다음을 참조하세요.

* [`auto_instrument` 에이전트 설정](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum)
* `newrelic_get_browser_timing_header()`
* `newrelic_get_browser_timing_footer()`

## 다양한 프레임워크에 대한 수동 계측 [#manual_generic]

이 문서에서는 에이전트 API를 통해 브라우저 에이전트를 수동으로 삽입하는 자세한 절차를 제공하지 않습니다. 프레임워크를 구성할 수 있는 방법이 너무 많기 때문입니다.

[수동 계측 예제](#manual_examples) 는 이미 자동 계측을 지원하는 프레임워크에 계측을 추가하는 방법을 보여줍니다. 다른 프레임워크나 Drupal 또는 WordPress의 수정된 버전을 사용하는 경우 올바른 위치에서 계측을 위한 API 함수를 호출해야 합니다.

1. 출력 페이지의 `<head>` 태그의 일부로 `newrelic_get_browser_timing_header()` 의 반환 값을 가장 먼저 삽입하는 것이 좋습니다.
2. 문서에서 닫는 `</body>` 태그 앞의 맨 마지막으로 또는 가능한 한 가까이에 `newrelic_get_browser_timing_footer()` 의 반환 값을 삽입합니다.

다음은 몇 가지 기본적인 예입니다.

<CollapserGroup>
  <Collapser
    id="manual_wp"
    title="워드프레스"
  >
    이 예는 PHP 에이전트 API를 호출하여 기본 `twentyten` 테마를 사용하여 WordPress 설치를 위한 머리글과 바닥글을 생성하는 방법을 보여줍니다.

    1. `website home dir/wordpress/wp-content/themes/twentyten/header.php` 에 JavaScript 헤더를 생성하는 호출을 삽입합니다.

       ```php
       <body <?php body_class(); ?>>
       <div id="wrapper" class="hfeed">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="masthead">
           ...
       ```

    2. `website home dir/wordpress/wp-content/themes/twentyten/footer.php` 에 최종 사용자 모니터링 바닥글을 생성하는 호출을 삽입합니다.

       ```php
       ...
           </div><!-- #site-generator -->
         </div><!-- #colophon -->
         <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
       </div><!-- #footer -->
       ```
  </Collapser>

  <Collapser
    id="manual_drupal"
    title="드루팔"
  >
    이 예는 PHP 에이전트 API를 호출하여 기본 `garland` 테마를 사용하여 Drupal 설치를 위한 머리글과 바닥글을 생성하는 방법을 보여줍니다.

    1. `website home dir/drupal/themes/garland/page.tpl.php` 에서 여는 헤더 태그 바로 뒤에 JavaScript 헤더를 생성하는 호출을 삽입합니다.

       ```php
       <div id="container" class="clear-block">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="logo-floater">
           ...
       ```

    2. 마지막 닫기 레이아웃 태그 바로 앞에 바닥글을 생성하는 호출을 삽입합니다.

       ```php
       ...
           </div>
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
             <!-- /layout -->
           <?php print $closure ?>
         </body>
       </html>
       ```

       <Callout variant="important">
         Drupal 7.15에서는 <DNT>**Compress cached pages**</DNT> 기본적으로 켜져 있습니다. <DNT>**Cache pages for anonymous users**</DNT> 도 선택하면 JavaScript(newrelic.js)가 익명 사용자를 위해 제공되는 페이지에 삽입되지 않습니다. 이는 Drupal의 페이지가 캐시에 저장되기 전에 데이터베이스에서 직접 압축되어(gzip 사용) 뉴렐릭의 PHP 에이전트가 HTML을 구문 분석할 기회가 없기 때문입니다. 이러한 상황에서는 수동 계측이 익명 사용자의 데이터를 캡처할 수 있는 더 나은 기회를 제공합니다.
       </Callout>

       <Callout variant="important">
         Drupal 10.2에는 `content-length` 헤더를 설정하는 [새로운 변경 사항이](https://www.drupal.org/node/3298551) 도입되었습니다. 뉴렐릭 PHP 에이전트는 HTTP 헤더 필드 `Content-Length` 이 설정된 경우 브라우저 자동 측정, 자동 로그를 자동 삽입할 수 없습니다. 브라우저 모니터링을 계속 사용하려면 브라우저 자동 측정, 자동 로그를 비활성화하고 JavaScript 머리글 및 바닥글을 템플릿에 수동으로 삽입하세요.
       </Callout>
  </Collapser>
</CollapserGroup>

## 브라우저 데이터 보기 [#viewing]

브라우저 모니터링을 활성화하고 앱에 대한 트래픽을 생성하면 앱의 [브라우저 <DNT>**Summary**</DNT> 페이지](/docs/browser/new-relic-browser/getting-started/browser-overview-page-website-performance-summary) 에 데이터가 표시됩니다. 데몬을 처음 시작할 때(또는 PHP 에이전트가 새로운 기능을 만날 때) 데몬이 설정을 확인하는 동안 짧은 지연이 있습니다. 그 이후에는 뉴켈릭 JavaScript 스니펫을 사용할 수 있습니다.

## 자동 계측 비활성화 [#disable]

PHP 에이전트 구성으로 브라우저 모니터링을 비활성화하는 방법은 [브라우저 모니터링 구성 옵션](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum) 을 참조하십시오.

API를 사용하여 브라우저 모니터링을 비활성화하는 방법은 [`newrelic_disable_autorum()`](/docs/agents/php-agent/php-agent-api/newrelic_disable_autorum) 을(를) 참조하세요.
