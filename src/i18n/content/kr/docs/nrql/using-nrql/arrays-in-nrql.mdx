---
title: 정리를 위해 배열 사용
metaDescription: 'How to use arrays in NRQL, the New Relic query language'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

OTLP(OpenTelemetry Protocol) 지원의 일환으로 뉴렐릭은 포함된 속성을 처리할 수 있습니다. 그런데 무엇입니까? 본질적으로, 포함은 NRQL로 쿼리할 수 있는 정렬된 값 컬렉션을 포함하는 데이터 구조입니다. 일반적으로 `[1, 2, 3, 4, 5]` 또는 `["US", "CA", "UK"]` 과 같은 형식으로 표시됩니다.

현재는 단순한 단일 차원의료만 지원됩니다. 간단한 추가를 사용하여 동일한 기본 유형의 값 목록을 저장할 수 있습니다. 예를 들어 숫자, 부울 또는 문자열입니다. 포함에 데이터가 포함되어 있는지 빠르게 확인하려면 JSON 차트 유형을 사용하여 데이터가 포함 구조에 표시되는지 확인할 수 있습니다.

## 지원되는 기능 [#supported-features]

* `FACET` 절은 다시 속성을 지원합니다.
* 다시에서 `getfield()`, `length()` 및 `contains()` 함수를 실행할 수 있습니다.
* 또한 `uniques()`, `uniqueCount()` 및 `latest()` 불필요한자 함수를 사용할 수도 있습니다.
* 배열은 최대 64개의 요소를 포함할 수 있습니다.

## 지원되지 않는 기능 [#unsupported-features]

* `=`, `!=` 및 `IN` 등의 비교 연산자는 다시에서 지원되지 않습니다.
* `sum()`, `min()`, `max()` 등의 다른 자 함수로는 집계할 수 없습니다.
* 기재에는 `["UK", "US", ["CA", "OR", "ATL"]]` 등의 다른 사본을 포함할 수 없습니다.
* 은(는 `NULL` 포함할 수 없습니다.

## 등의 기능과 예제 [#array-functions]

<CollapserGroup>
  <Collapser
    className="freq-link"
    title={<InlineCode>getfield(속성, i) 또는 속성\[i]</InlineCode>}
  >
    `getfield()` 표기법을 사용하여 배열에서 `i` 번째 요소를 가져옵니다.

    <Callout variant="important">
      배열 인덱싱은 `0` 으로 시작합니다.
    </Callout>

    <DNT>**Example:**</DNT> 기간 속성에 저장된 간단한 추가 `[100, 110, 90, 100, 105]` 를 고려해보세요.

    `getfield(durations, 2)` `90` 을 반환합니다.

    `getfield()` 함수 대신 대괄호 `[ ]` 약어를 사용할 수 있습니다.

    <DNT>**Example:**</DNT> `durations[4]` `105` 을 반환합니다.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>길이(속성)</InlineCode>}
  >
    `length()` 함수를 사용하여 배열의 요소 수를 반환합니다.

    <DNT>**Example:**</DNT> 값이 `["US", "CA", "UK"]` 인 간단한 추가 `countries` 을 생각해 보세요.

    `length(countries)` `3` 을 반환합니다.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>포함(속성, 요소)</InlineCode>}
  >
    다시에 요소가 있는지 확인하려면 `contains()` 함수를 사용하세요.

    <CollapserGroup>
      <Collapser title="예: 배열에 요소가 포함되어 있는지 확인">
        예: `guids` 배열을 `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]` 로 간주합니다.

        `contains(guids, '5555-3456-555')` `TRUE` 을 반환합니다.
      </Collapser>

      <Collapser title={<>포함을 사용하여 항목 필터링 <InlineCode>count(\*)</InlineCode></>}>
        값이 `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]` 인 `guids` 배열을 포함하는 `Transaction` 이벤트 유형을 고려하십시오. `"9999-1234-9999"` GUID를 포함하는 트랜잭션 수를 찾으려면 다음을 사용합니다.

        ```sql
        SELECT count(*) FROM Transaction WHERE contains(guids, '9999-1234-9999')
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>
