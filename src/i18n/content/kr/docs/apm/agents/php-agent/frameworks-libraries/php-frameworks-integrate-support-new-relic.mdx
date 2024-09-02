---
title: 'PHP 프레임워크: New Relic에 대한 지원 통합'
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: An overview of what New Relic is and what developers or maintainers of PHP frameworks need to do in order to integrate support for New Relic.
freshnessValidatedDate: never
translationType: machine
---

이 문서는 PHP 프레임워크의 개발자 또는 유지 관리자를 대상으로 합니다. New Relic에 대한 지원을 추가하여 프레임워크를 확장하는 방법을 제안합니다.

PHP 에이전트는 프레임워크 코드에서 웹 트랜잭션의 이름을 적절하게 지정할 수 있는 위치를 파악하고 클래스, 함수 호출 등에서 찾은 정보를 기반으로 웹 트랜잭션의 이름을 지정하여 프레임워크를 지원합니다. 이 솔루션은 취약하고 개발자가 코드를 변경할 수 있습니다. New Relic은 프레임워크 개발자가 유지 관리하는 프레임워크로 기본 사용자 경험을 개선하는 데 필요한 몇 가지 호출을 할 것을 권장합니다.

## 사용자 지원 [#frameworks]

뉴렐릭은 웹 프로세서 이름을 식별하고 뉴렐릭의 <InlinePopover type="browser"/>에 대한 JavaScript 머리글과 바닥글을 삽입할 위치를 식별할 수 있습니다. 그러나 최적의 사용자 환경을 개선하고 성능을 높이며 코드 유지 관리를 더 쉽게 하려면 프레임워크 개발자가 이 작업을 직접 수행해야 합니다.

New Relic에 대한 기본 지원을 추가하여 사용자를 도울지 여부를 결정하는 것은 다양한 프레임워크의 개발자에게 달려 있습니다. 거의 모든 경우에 New Relic에 대한 지원을 추가하려면 프레임워크 코드 어딘가에 3개의 API 호출을 삽입해야 합니다.

## 술어

New Relic에 대한 지원을 가장 잘 추가하는 방법을 이해하려면 상호 작용의 몇 가지 핵심 사항을 이해하는 것이 좋습니다.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Term**
        </DNT>
      </th>

      <th>
        <DNT>
          **Definition**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Web transactions**
        </DNT>
      </td>

      <td>
        <DNT>**Web transactions**</DNT> 귀하의 사이트에 대한 자산 요청(또는 사용자 조회)입니다. 프레임워크를 사용하면 이는 MVC 디스패치 메커니즘에 의해 처리되는 경우가 많습니다.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Metrics**
        </DNT>
      </td>

      <td>
        <DNT>**Metrics**</DNT> 타이밍 정보를 보고하는 명명된 엔터티입니다. 뉴렐릭은 이러한 지표를 사용하여 [APM <DNT>**Summary**</DNT> 페이지](/docs/apm/applications-menu/monitoring/apm-overview-page) 와 같은 차트와 페이지를 생성합니다. 예를 들어, 뉴렐릭 사용자는 MySQL 호출하고 데이터를 선택하거나 업데이트할 때마다 `Database/select` 또는 `Database/update` 라는 지표를 생성합니다.

        메트릭에는 타이밍 데이터만 포함됩니다.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Transaction traces**
        </DNT>
      </td>

      <td>
        모든 수확 기간 동안 뉴렐릭은 사용자가 정의한 바이올린 값 이하로 떨어지는 가장 느린 웹 프로세서를 기록합니다. 이것은 <DNT>**transaction trace**</DNT> 입니다.

        단순한 메트릭보다 더 자세한 정보가 있습니다. 활성화된 경우 정확히 어떤 함수가 호출되었고 소요된 시간에 대한 자세한 호출 그래프가 포함됩니다. 느린 쿼리 문의 경우 호출의 모든 데이터를 난독화합니다.
      </td>
    </tr>
  </tbody>
</table>

## 이름 거래 [#dev]

웹 트랜잭션의 이름을 지정하는 방법은 사용자 경험의 품질에 영향을 미칩니다.

<Callout variant="important">
  거래 이름 끝에 대괄호 `[suffix]` 를 사용하지 마십시오. New Relic은 자동으로 이름에서 괄호를 제거합니다. 대신 필요한 경우 괄호 `(suffix)` 또는 기타 기호를 사용하십시오.
</Callout>

<DNT>
  **Examples:**
</DNT>

블로그 스타일 프레임워크가 있는 경우 사용자 활동을 기반으로 다양한 트랜잭션의 이름을 `display` , `edit` , `login` 등으로 지정합니다.

MVC 아키텍처를 사용하는 경우 적절한 명명 규칙은 `controller/action` 입니다. 트랜잭션 이름에 요청 관련 데이터를 포함하지 **마십시오** . 예를 들어 실제 요청 URL을 사용하면 [측정항목 그룹화 문제](/docs/features/metric-grouping-issues) 가 발생합니다.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Platform**
        </DNT>
      </th>

      <th>
        <DNT>
          **Transaction naming example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Drupal 7**
        </DNT>
      </td>

      <td>
        디스패치는 `menu_execute_active_handler()` 에서 수행됩니다. 이것은 `call_user_func_array()` 을 호출하고 첫 번째 인수는 작업의 이름입니다. 웹 트랜잭션 이름으로 설정하는 것입니다.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CakePHP 1.3**
        </DNT>
      </td>

      <td>
        CakePHP에는 `_invoke` 메서드가 있는 `Dispatcher` 클래스가 있습니다. 이것은 주어진 작업으로 적절한 컨트롤러 클래스를 호출하고 트랜잭션의 이름은 `controller/action` 이며 여기서 `controller` 은 컨트롤러 클래스의 이름입니다.
      </td>
    </tr>
  </tbody>
</table>

코드를 특정 컨트롤러 및 작업(MVC를 사용하는 경우) 또는 작업(MVC를 사용하지 않는 경우)으로 라우팅하려는 지점에서 다음과 유사한 코드를 삽입합니다.

<DNT>**Controller and action**</DNT> (MVC를 사용하는 경우):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($controller . '/' . $action);
}
```

<DNT>**Action only**</DNT> (MVC를 사용하지 않음):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($action);
}
```

## JavaScript 머리글 및 바닥글 삽입 [#page-load-timing]

페이지 로드 타이밍(실제 사용자 모니터링 또는 RUM이라고도 함)의 경우 JavaScript 머리글과 바닥글을 삽입합니다. 이를 통해 생성된 페이지에 대한 최종 사용자의 경험을 모니터링할 수 있습니다.

* 권장 사항: 프레임워크에 모든 페이지 머리글과 바닥글을 생성하는 중앙 기능이 있는 경우 여기에 JavaScript 코드를 설치하세요.
* 템플릿 기반 프레임워크의 경우 이를 머리글 및 바닥글 템플릿에 삽입합니다.

<CollapserGroup>
  <Collapser
    id="page-generator"
    title="페이지 생성기 함수에 삽입"
  >
    헤더 <DNT>**must**</DNT> 은 생성된 페이지 상단에 최대한 가깝게 삽입하세요. `<meta http-equiv....>` 태그 바로 뒤가 이상적인 장소입니다. <DNT>**any**</DNT> JavaScript, CSS 스타일시트 또는 기타 링크되거나 삽입된 콘텐츠보다 앞에 있어야 합니다.

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    }
    ```

    `newrelic_get_browser_timing_header()` 기본값은 <DNT>**true**</DNT> 인 선택적인 `bool` 인수를 사용합니다. 반환된 문자열을 스크립트 태그로 묶어야 하는지 여부를 나타냅니다.

    권장 사항: 생성된 페이지의 맨 마지막 항목으로 `</body>` 페이지 닫기 태그 바로 앞에 바닥글을 삽입하세요.

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    }
    ```

    `newrelic_get_browser_timing_footer()` 기본값은 <DNT>**true**</DNT> 인 선택적 `bool` 사용합니다. 반환된 문자열을 스크립트 태그로 묶어야 하는지 여부를 나타냅니다.
  </Collapser>

  <Collapser
    id="template"
    title="템플릿에 삽입"
  >
    다음 헤더 템플릿을 예로 사용합니다.

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    } ?>
    ```

    다음 바닥글 템플릿을 예로 사용합니다.

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    } ?>
    ```
  </Collapser>
</CollapserGroup>
