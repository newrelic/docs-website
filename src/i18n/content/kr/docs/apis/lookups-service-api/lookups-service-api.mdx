---
title: NRQL 조회 API
tags:
  - APIs
  - Lookups Service REST API
  - NRQL Lookups API
  - lookup
metaDescription: Use the NRQL Lookups API to create and manage lookup tables.
freshnessValidatedDate: '2023-09-18T00:00:00.000Z'
translationType: machine
---

NRQL 조회 API를 사용하여 [조회 테이블을](/docs/logs/ui-data/lookup-tables-ui/#overview) 생성하고 관리합니다.

## 시작하기 전에

NRQL 조회 API는 프로그래밍 방식으로 조회 테이블을 관리할 수 있는 REST API입니다. 또 다른 옵션으로 [UI를 통해 조회 테이블을 관리](/docs/logs/ui-data/lookup-tables-ui/#lookup-ui) 할 수도 있습니다.

## HTTP 엔드포인트 [#http-endpoints]

### 기본 URL

API 호출에서 New Relic 계정에 적용 가능한 기본 URL을 사용하세요.

미국(US) 엔드포인트:

```
https://nrql-lookup.service.newrelic.com
```

[유럽 연합](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center) (EU) 끝점:

```
https://nrql-lookup.service.eu.newrelic.com
```

### 끝점

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        방법
      </th>

      <th>
        끝점
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`create`](#create-and-update)
      </td>

      <td>
        `POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        새 테이블을 업로드합니다.
      </td>
    </tr>

    <tr>
      <td>
        [`update`](#create-and-update)
      </td>

      <td>
        `PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        기존 테이블을 교체합니다.
      </td>
    </tr>

    <tr>
      <td>
        [`read`](#read)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        이전에 업로드한 테이블을 다운로드합니다.
      </td>
    </tr>

    <tr>
      <td>
        [`delete`](#delete)
      </td>

      <td>
        `DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        해당 테이블을 삭제합니다.
      </td>
    </tr>

    <tr>
      <td>
        [`list`](#list)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID`
      </td>

      <td>
        이 계정에 대해 이전에 업데이트된 테이블을 나열합니다.
      </td>
    </tr>
  </tbody>
</table>

위의 NRQL 조회 API 엔드포인트에 필요한 변수는 아래에 정의되어 있습니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        변하기 쉬운
      </th>

      <th style={{ width: "200px" }}>
        유형
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `YOUR_ACCOUNT_ID`
      </td>

      <td>
        `number`
      </td>

      <td>
        테이블이 속한 계정
      </td>
    </tr>

    <tr>
      <td>
        `TABLE_NAME`
      </td>

      <td>
        `string`
      </td>

      <td>
        저장된 테이블의 이름입니다. 테이블 이름은 [사용자 정의 이벤트 유형 표준을](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general) 준수해야 합니다.

        * 최대 길이: 255
        * 영숫자, 밑줄, 콜론을 조합하여 사용할 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

## 입증

<InlinePopover type="userKey"/>은 NRQL Lookups API에 대한 요청을 인증하는 데 사용되며 HTTP 헤더로 전달되어야 합니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        머리글
      </th>

      <th>
        지원되는 값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        뉴렐릭 <InlinePopover type="userKey"/>.
      </td>
    </tr>
  </tbody>
</table>

## 테이블 생성/업데이트 [#create-and-update]

### HTTP 엔드포인트 [#create-and-update-http-endpoints]

#### 만들다

`POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

새 테이블을 업로드하는 데 사용됩니다. 테이블이 이미 존재할 수 없습니다. 그렇다면 이 호출로 인해 `400 Bad Request` 응답이 발생합니다.

#### 업데이트

`PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

기존 테이블을 바꾸는 데 사용됩니다. 테이블이 존재하지 않으면 이 호출로 인해 `404 Not Found` 응답이 발생합니다.

#### 요청 쿼리 매개변수

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        이름
      </th>

      <th>
        유형
      </th>

      <th>
        기본값
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        응답에 테이블 값을 포함할지 여부를 나타냅니다.
      </td>
    </tr>
  </tbody>
</table>

### HTTP 헤더 [#create-http-headers]

HTTP 헤더를 생성할 때 다음 지침을 사용하십시오.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        머리글
      </th>

      <th>
        지원되는 값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        * `multipart/form-data`
        * `application/json`
      </td>
    </tr>

    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### 요청 본문 [#create-request-body]

요청 본문으로 보내는 데이터는 `multipart/form-data` 또는 `application/json` 일 수 있습니다.

<CollapserGroup>
  <Collapser
    id="multipart-form-data-request"
    title="multipart/form-data를 사용한 요청"
  >
    #### 지원되는 분야

    `multipart/form-data` 콘텐츠를 보낼 때 생성 및 업데이트 요청에 다음 필드를 제공할 수 있습니다.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            들
          </th>

          <th style={{ width: "200px" }}>
            값 유형
          </th>

          <th>
            필수의
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            CSV 파일
          </td>

          <td>
            네
          </td>

          <td>
            CSV 콘텐츠가 포함된 다중 부분 양식 데이터 부분입니다. CSV 구문 분석 논리는 [여기](/docs/logs/ui-data/lookup-tables-ui/#valuetypes) 에 자세히 설명되어 있습니다.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            아니요
          </td>

          <td>
            테이블에 대한 설명이 포함된 두 번째 다중 부분 양식 데이터 부분입니다.
          </td>
        </tr>
      </tbody>
    </table>

    #### 페이로드 예시

    ```
    --__X_BOUNDARY__
    Content-Disposition: form-data; name="table"; filename="sample.csv"
    Content-Type: text/csv

    id,name,intvalue,floatvalue,boolvalue
    '1,abc,27,2.7,true
    '2,def,2622,26.22,false
    '2a,"g,hi",1234,43.21,false
    --__X_BOUNDARY__--
    Content-Disposition: form-data; name="description"

    A description of the table
    --__X_BOUNDARY__--
    ```
  </Collapser>

  <Collapser
    id="application-json-request"
    title="애플리케이션/json으로 요청"
  >
    #### 지원되는 분야

    `application/json` 콘텐츠를 보낼 때 생성 및 업데이트에 다음 필드를 제공할 수 있습니다.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            들
          </th>

          <th style={{ width: "200px" }}>
            값 유형
          </th>

          <th>
            필수의
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            `JSON`
          </td>

          <td>
            네
          </td>

          <td>
            <table>
              <tr>
                <td style={{ width: "200px" }}>
                  `headers`
                </td>

                <td>
                  테이블의 열 이름을 나타내는 `string` 값의 배열
                </td>
              </tr>

              <tr>
                <td style={{ width: "200px" }}>
                  `rows`
                </td>

                <td>
                  테이블의 값을 나타내는 배열의 배열입니다. 모든 값은 `string`, `number` 또는 `boolean` 값이어야 합니다. (복잡한 JSON 객체는 허용되지 않습니다.)
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            아니요
          </td>

          <td>
            테이블에 대한 자세한 설명
          </td>
        </tr>
      </tbody>
    </table>

    #### 페이로드 예시

    ```json
    {
           "table": {
               "headers": [
               "id", "name", "intvalue", "floatvalue", "boolvalue"
               ],
               "rows": [
                   ["1", "abc", 27, 2.7, true],
                   ["2", "def", 2622, 26.22, false],
                   ["2a", "d,ef", 1234, 43.21, false]
               ]
           },
           "description": "This is a description."
       }
    ```
  </Collapser>
</CollapserGroup>

### 응답 본문 [#create-update-response]

요청이 성공하면 응답 JSON 페이로드에 다음 필드가 포함될 수 있습니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        들
      </th>

      <th style={{ width: "200px" }}>
        값 유형
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        테이블이 속한 계정입니다. 이는 경로의 계정 값과 일치합니다.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        저장된 테이블의 이름입니다. 이는 경로의 이름 값과 일치합니다.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        테이블에 대한 자세한 설명
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        테이블 생성 시 테이블에 할당된 GUID입니다.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        CSV 문자열 형식의 테이블 크기입니다.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        테이블의 행 수(머리글 행 제외)
      </td>
    </tr>

    <tr>
      <td>
        `updatedBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        이 테이블을 생성하거나 마지막으로 업데이트한 마지막 사용자의 사용자 이름/이메일 주소입니다.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        테이블이 생성되거나 마지막으로 업데이트된 타임스탬프입니다. 이는 S3 객체의 마지막 업데이트 타임스탬프를 반영합니다. 값은 표준 ISO 8601 날짜 시간 문자열(예: 2023-02-13T19:49:28.023Z)
      </td>
    </tr>

    <tr>
      <td>
        `table`
      </td>

      <td>
        `JSON` 객체 리터럴
      </td>

      <td>
        <table>
          <tr>
            <td style={{ width: "200px" }}>
              `headers`
            </td>

            <td>
              테이블의 열 이름을 나타내는 `string` 값의 배열
            </td>
          </tr>

          <tr>
            <td style={{ width: "200px" }}>
              `rows`
            </td>

            <td>
              테이블의 값을 나타내는 배열의 배열입니다.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>

#### 예제 응답 JSON 페이로드

```json
{
  "accountId": YOUR_ACCOUNT_ID,
  "name": "sample",
  "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
  "size": 120
  "rows": 3
  "updatedBy": "jondoe@example.com"
  "updatedAt": "2023-02-13T19:49:28.023Z",
  "table": {
    "headers": [
      "id", "name", "description", "intvalue", "floatvalue", "boolvalue"
    ],
    "rows": [
      [1, "abc", 27, 2.7, true],
      [2, "def", 2622, 26.22, false],
      ["2a", "d,ef", 1234, 43.21, false]
    ]
  }
}
```

### 예시 요청

<CollapserGroup>
  <Collapser
    id="create-a-new-table"
    title="새 테이블 만들기"
  >
    새 조회 테이블을 생성하려면 조회 테이블을 설명하는 JSON 페이로드를 사용하여 생성 엔드포인트에 POST 요청을 보낼 수 있습니다.

    다음은 `curl` 명령의 예입니다.

    ```bash
    curl -X "POST" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
          -H 'Content-Type: application/json' \
          -H 'Api-Key: YOUR_USER_KEY'\
          -d $'{
      "table": {
      "headers": ["id", "name", "intvalue", "floatvalue", "boolvalue"],
      "rows": [
          ["1", "abc", 27, 2.7, true],
          ["2", "def", 2622, 26.22, false]
      ]
      },
      "description": "This is a description."
      }'
    ```
  </Collapser>

  <Collapser
    id="update-a-table"
    title="기존 테이블 업데이트"
  >
    기존 조회 테이블을 교체하려면 새 테이블이 포함된 `multipart/form-data` 요청 본문을 사용하여 업데이트 엔드포인트에 PUT 요청을 보낼 수 있습니다.

    ```bash
    curl -X "PUT" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Api-Key: YOUR_USER_KEY'\
       -H 'Content-Type: multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__' \
       -F "table=id,name,description,intvalue,floatvalue,boolvalue
          1,abc,desc1,27,2.7,true
          2,def,desc2,2622,26.22,false
          " \
       -F "description=This is a description."
    ```
  </Collapser>
</CollapserGroup>

## 표 읽기 [#read]

### HTTP 엔드포인트 [#read-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

이전에 업로드된 테이블을 다운로드하는 데 사용됩니다. 테이블이 존재하지 않으면 이 호출로 인해 `404 Not Found` 응답이 발생합니다. 이 엔드포인트에는 요청 페이로드가 없습니다.

#### 요청 쿼리 매개변수

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        이름
      </th>

      <th style={{ width: "150px" }}>
        유형
      </th>

      <th>
        기본값
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        응답에 테이블 값을 포함할지 여부를 나타냅니다. 콘텐츠 유형이 `text/csv` 인 경우 무시됩니다.
      </td>
    </tr>
  </tbody>
</table>

### HTTP 헤더 [#read-headers]

HTTP 헤더를 생성할 때 다음 지침을 사용하십시오.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        머리글
      </th>

      <th>
        지원되는 값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
        * `text/csv`
      </td>
    </tr>
  </tbody>
</table>

### 응답 본문 [#read-response-body]

요청이 성공하면 응답은 `application/json` 또는 `text/csv` 유형일 수 있습니다.

#### `application/json` 유형의 응답

응답은 [생성/업데이트 응답 페이로드](#create-update-response) 와 동일합니다.

#### `text/csv` 유형의 응답

응답에는 CSV 형식의 테이블이 포함됩니다.

### 예시 요청 [#read-example-requests]

<Collapser
  id="download-an-existing-table"
  title="기존 테이블 다운로드"
>
  이전에 업로드된 테이블을 다운로드하려면 업데이트 엔드포인트에 GET 요청을 보낼 수 있습니다.

  다음은 `curl` 명령의 예입니다.

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  다음은 `text/csv` 응답의 예입니다.

  ```csv
  id,name,intvalue,floatvalue,boolvalue
  '1,abc,27,2.7,true
  '2,def,2622,26.22,false
  '2a,"g,hi",1234,43.21,false
  ```
</Collapser>

## 테이블 삭제 [#delete]

### HTTP 엔드포인트 [#delete-endpoint]

`DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

해당 테이블을 삭제하는 데 사용됩니다. 테이블이 존재하지 않으면 이 호출로 인해 `404 Not Found` 응답이 발생합니다. 이 엔드포인트에는 요청 페이로드가 없습니다.

<Callout variant="important">
  삭제된 테이블은 복구할 수 없습니다.
</Callout>

#### 요청 쿼리 매개변수

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        이름
      </th>

      <th>
        유형
      </th>

      <th>
        기본값
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        응답에 테이블 값을 포함할지 여부를 나타냅니다.
      </td>
    </tr>
  </tbody>
</table>

### HTTP 헤더 [#delete-headers]

HTTP 헤더를 생성할 때 다음 지침을 사용하십시오.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        머리글
      </th>

      <th>
        지원되는 값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### 응답 본문 [#delete-response-body]

요청이 성공하고 `Accept` 헤더가 `application/json` 로 설정된 경우 응답 본문은 [생성/업데이트 응답 페이로드](#create-update-response) 와 동일합니다.

### 예시 요청 [#delete-example-request]

<Collapser
  id="delete-an-existing-table"
  title="기존 테이블 삭제"
>
  이전에 업로드된 테이블을 삭제하려면 삭제 엔드포인트에 DELETE 요청을 보내면 됩니다.

  다음은 `curl` 명령의 예입니다.

  ```bash
  curl -X "DELETE" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: application/json' \
       -H 'Api-Key: YOUR_USER_KEY'\
  ```
</Collapser>

## 테이블 나열 [#list]

### HTTP 엔드포인트 [#list-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID`

이 계정에 대해 이전에 업데이트된 테이블을 나열합니다. 이 엔드포인트에는 요청 페이로드가 없습니다.

### HTTP 헤더 [#list-headers]

HTTP 헤더를 생성할 때 다음 지침을 사용하십시오.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        머리글
      </th>

      <th>
        지원되는 값
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### 응답 본문 [#list-response-body]

요청이 성공하면 응답 JSON 페이로드는 테이블 요약 배열로 구성됩니다. 각 테이블 요약에는 아래 필드가 포함될 수 있습니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        들
      </th>

      <th style={{ width: "200px" }}>
        값 유형
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        테이블이 속한 계정입니다. 이는 경로의 계정 값과 일치합니다.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        저장된 테이블의 이름입니다. 이는 경로의 이름 값과 일치합니다.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        테이블에 대한 자세한 설명
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        테이블 생성 시 테이블에 할당된 GUID입니다.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        CSV 문자열 형식의 테이블 크기입니다.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        테이블의 행 수(머리글 행 제외)
      </td>
    </tr>

    <tr>
      <td>
        `updateBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        이 테이블을 업데이트한 마지막 사용자의 사용자 이름/이메일 주소입니다.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        테이블이 생성되거나 마지막으로 업데이트된 타임스탬프입니다. 이는 S3 객체의 마지막 업데이트 타임스탬프를 반영합니다. 값은 표준 ISO 8601 날짜 시간 문자열(예: 2023-02-13T19:49:28.023Z)
      </td>
    </tr>
  </tbody>
</table>

### 예시 요청 [#list-example-request]

<Collapser
  id="list-tables"
  title="계정에 대해 업데이트된 목록 테이블"
>
  계정의 테이블을 나열하려면 목록 엔드포인트에 GET 요청을 보낼 수 있습니다.

  다음은 `curl` 명령의 예입니다.

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  다음은 응답 JSON 페이로드의 예입니다.

  ```json
  [
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 120
      "rows": 3
      "updatedBy": "jondoe@example.com"
      "updatedAt": "2023-02-13T19:49:28.023Z"
    },
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample2",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 4096
      "rows": 2000
      "updatedBy": "janedoe@example.com"
      "updatedAt": "2023-02-14T13:30:21.100Z"
    }
  ]
  ```
</Collapser>

## 오류 메시지 [#error-messaging]

요청이 실패하면 오류 응답 페이로드는 아래 형식이 됩니다.

```json
{
  "code": HTTP_STATUS_CODE(same as status header),
  "message": ERROR_MESSAGE
}
```
