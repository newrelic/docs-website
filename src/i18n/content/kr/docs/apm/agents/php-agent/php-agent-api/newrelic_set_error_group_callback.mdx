---
title: newrelic_set_error_group_callback(PHP 에이전트 API)
type: apiDoc
shortDescription: 이 방법을 사용하면 사용자가 사용자 정의 콜백 함수를 정의하여 오류 그룹 이름을 생성할 수 있습니다.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: Use this API to register a callback which returns a custom error group name.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

## 통사론

```php
newrelic_set_error_group_callback($callback)
```

사용자 정의된 핑거프린팅 콜백 함수를 사용하여 오류를 그룹화합니다.

## 요구 사항

에이전트 버전 10.12 이상.

## 설명

이 API를 사용하면 사용자는 애플리케이션에 오류가 발생할 때 호출되는 PHP 에이전트에 사용자 정의 콜백 함수를 등록할 수 있습니다.

콜백은 에이전트로부터 두 개의 PHP 배열을 제공합니다. 하나는 트랜잭션 데이터를 포함하고 다른 하나는 오류 데이터를 포함합니다.

제공된 컨텍스트 정보를 사용하여 콜백은 오류 받은 편지함 UI에 표시되는 오류 그룹 이름 역할을 할 사용자 정의 논리를 기반으로 비어 있지 않은 문자열을 반환해야 합니다.

<Callout variant="important">
  * 단일 트랜잭션에서 이 함수에 대한 여러 호출이 있는 경우 PHP 에이전트는 마지막 호출의 콜백만 유지합니다.
  * 콜백은 요청별로 등록됩니다. 이 API는 각 요청에 대해 실행이 보장되는 코드 경로에서 호출되어야 합니다. 그렇지 않으면 콜백이 호출되지 않습니다.
  * 콜백 기능을 가능한 한 최소화하는 것이 좋습니다. CPU를 많이 사용하는 콜백(예: 데이터베이스 호출) 또는 기타 복잡한 로직은 애플리케이션 성능에 영향을 미칩니다.
</Callout>

## 매개변수

이 API는 단일 함수 유형 콜백을 인수로 허용합니다. 제공된 콜백은 2개의 매개변수를 허용해야 합니다.

<table>
  <thead>
    <tr>
      <th width="25%">
        API 매개변수
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback` (_기능_)
      </td>

      <td>
        필수의. PHP 에이전트에 등록할 콜백 함수를 제공합니다.
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th width="25%">
        콜백 매개변수
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$transaction_data` (_배열_)
      </td>

      <td>
        필수의. PHP 에이전트가 콜백에 제공한 트랜잭션 데이터 배열입니다.
      </td>
    </tr>

    <tr>
      <td>
        `$error_data` (_배열_)
      </td>

      <td>
        필수의. PHP 에이전트가 콜백에 제공한 오류 데이터 배열입니다.
      </td>
    </tr>
  </tbody>
</table>

### 배열 키/값 쌍

#### `$transaction_data` - 콜백에 제공되는 PHP 에이전트 트랜잭션 데이터

<table>
  <thead>
    <tr>
      <th width="25%">
        열쇠
      </th>

      <th>
        값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "request_uri"
      </td>

      <td>
        (_문자열_) 요청 URI
      </td>
    </tr>

    <tr>
      <td>
        "길"
      </td>

      <td>
        (_문자열_) 파일 경로
      </td>
    </tr>

    <tr>
      <td>
        "방법"
      </td>

      <td>
        (_문자열_) HTTP 메서드(`GET`, `POST` 등)
      </td>
    </tr>

    <tr>
      <td>
        "상태\_코드"
      </td>

      <td>
        (_int_) HTTP 상태 코드(`200`, `404` 등)
      </td>
    </tr>
  </tbody>
</table>

#### `$error_data` - 콜백에 제공된 PHP 에이전트 오류 데이터

<table>
  <thead>
    <tr>
      <th width="25%">
        열쇠
      </th>

      <th>
        값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "클래스"
      </td>

      <td>
        (_문자열_) 클래스 이름
      </td>
    </tr>

    <tr>
      <td>
        "메세지"
      </td>

      <td>
        (_문자열_) 오류 메시지
      </td>
    </tr>

    <tr>
      <td>
        "파일"
      </td>

      <td>
        (_문자열_) 파일 경로
      </td>
    </tr>

    <tr>
      <td>
        "스택"
      </td>

      <td>
        (_문자열_) JSON 오류 추적 추적
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  * 모든 키에 값이 포함되어 있다고 보장되는 것은 아닙니다. 이는 사용자 응용 프로그램과 오류의 성격에 따라 크게 달라집니다.
  * 배열 키는 빈 값이 포함되어 있는지 여부에 관계없이 항상 설정됩니다.
</Callout>

## 반환 값

API는 콜백이 성공적으로 등록되면 `true` 반환하고, 그렇지 않으면 `false` 반환합니다.

## 예

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
  $callback = function(array $transaction_data, array $error_data)
  {
      $fingerprint = "";

      //
      // Add custom code to parse array data
      //

      // Example code
      if ($error_data["klass"] == "E_USER_ERROR") {
        $fingerprint = "USER ERROR";
      };

      return $fingerprint;    // Non-empty string error group name
  };

  newrelic_set_error_group_callback($callback);
};
```
