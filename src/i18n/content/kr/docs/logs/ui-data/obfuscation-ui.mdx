---
title: '로그 난독화: 귀하의 로그에 있는 민감한 데이터를 반 또는 마스크'
metaDescription: How to hash or mask sensitive data in logs you send to New Relic with our log obfuscation UI or API.
freshnessValidatedDate: never
translationType: machine
---

로그 난독화 규칙을 사용하면 특정 유형의 정보가 New Relic에 저장되는 것을 방지할 수 있습니다.

## 요구 사항 [#requirements]

로그 난독화 기능은 [데이터 플러스 옵션](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices) 의 일부로 제공됩니다.

## 로그 난독화란 무엇입니까? [#overview]

당사의 [<InlinePopover type="logs"/>서비스는](/docs/logs/get-started/get-started-log-management) 신용카드나 주민등록번호 등 민감한 항목일 가능성이 있다고 식별되는 마스크 번호 패턴을 자동으로 제공합니다.

추가 난독화가 필요한 경우 한 가지 옵션은 사용하는 클러스터 전달자(예: 당사 에이전트)의 설정을 조정하는 것입니다. 하지만 더 쉬운 옵션은 [Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices) 에서 제공되는 로그 난독화 기능을 사용하는 것입니다. 이를 통해 긴 수동 설정 없이 로그인 기능 관리 UI 에서 직접 또는 NerdGraph API 통해 로그인을 설정할 수 있습니다. 중요한 정보와 일치하는 정규식을 정의한 다음 해당 데이터를 난독화하는 규칙을 만듭니다. 민감한 정보를 마스킹하거나 해시하도록 선택할 수 있습니다.

## 정의 [#definitions]

다음은 몇 가지 중요한 용어입니다.

* <DNT>
    **Obfuscation rules**
  </DNT>

  난독화 작업을 적용할 로그를 정의합니다.

* <DNT>
    **Obfuscation rule actions**
  </DNT>

  확인할 속성, 난독화할 텍스트, 난독화 방법(마스킹 또는 해싱을 통해)을 정의합니다.

* <DNT>
    **Obfuscation expressions**
  </DNT>

  난독화할 텍스트를 식별하는 정규 표현식으로 명명됩니다.

* <DNT>
    **Masking**
  </DNT>

  정보를 완전히 제거하여 `X` 문자로 바꿉니다. 이 작업이 완료되면 특정 값을 검색할 수 없습니다.

* <DNT>
    **Hashing**
  </DNT>

  정보를 숨깁니다. 해싱 도구를 사용하여 민감한 값의 해시를 가져온 다음 해당 해시가 포함된 로그를 검색할 수 있습니다.

## 난독화 작동 방식 [#overview]

다음 예에 표시된 JSON 개체는 NerdGraph API에서 사용되는 페이로드를 단순화한 것입니다. 이렇게 하면 다양한 API 작업을 상응하는 UI 작업과 더 잘 연관시키는 데 도움이 됩니다.

### 예: 난독화 전의 로그 기록 [#example-before]

다음과 같은 로그 레코드가 있다고 상상해 보십시오.

```json
{
  "message": "The credit card number 4321-5678-9876-2345 belongs to user user@email.com (born on 01/02/2003) with SSN 123-12-1234",
  "creditCardNumber": "4321-5678-9876-2345",
  "ssn": "123-12-1234",
  "department": "sales",
  "serviceName": "loginService"
}
```

이 로그 레코드에는 몇 가지 민감한 데이터가 포함되어 있습니다. 이상적으로는 로그가 다음과 같이 끝나기를 바랍니다.

```json
{
  "message": "The credit card number 9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5 belongs to user user@email.com (born on XXXXXXXXXX) with SSN 30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "creditCardNumber": "9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5",
  "ssn": "30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "department": "sales",
  "serviceName": "loginService"
}
```

### 예: 기본 프로세스 [#example-process]

다음은 이 예에서 민감한 데이터를 난독화하는 데 사용하는 기본 프로세스입니다.

<CollapserGroup>
  <Collapser
    id="example-actions"
    title="1. 적용할 조치"
  >
    해당 서비스에서 오는 모든 로그에 다음 난독화 작업을 적용하기로 결정했습니다.

    * `HASH` `message` 및 `creditCardNumber` 속성에 있는 신용 카드 번호.
    * `MASK` `message` 속성에 있는 생년월일.
    * `HASH` `message` 및 `ssn` 속성에 있는 사회 보장 번호.
  </Collapser>

  <Collapser
    id="example-expressions"
    title="2. 표현식이 민감한 데이터를 캡처하는 방법"
  >
    가장 먼저 해야 할 일은 이 민감한 정보를 캡처할 수 있는 난독화 표현식을 정의하는 것입니다.

    <Callout variant="tip">
      아래 예는 UI에서 직접 사용할 정규식을 보여줍니다. 이 문서의 뒷부분에서는 [NerdGraph](#expressions-create) 에 대해 이러한 정규 표현식의 이스케이프 버전을 사용하는 방법에 대해 논의합니다.
    </Callout>

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            난독화 표현
          </th>

          <th>
            정의
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            신용 카드 번호
          </td>

          <td>
            하이픈으로 구분된 4자리 4개 그룹을 캡처해야 합니다.

            ```json
            {
              "name": "Credit Card Number",
              "regex": "((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            사회 보장 번호
          </td>

          <td>
            하이픈으로 구분된 3, 2, 4자리의 3개 그룹을 캡처해야 합니다.

            ```json
            {
              "name": "Social Security Number",
              "regex": "(\d{3}-\d{2}-\d{4})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            생년월일( `loginService` 특정)
          </td>

          <td>
            이 예에서 생년월일은 로그인 서비스의 일부입니다. 주변 단어 `"(born on 01/02/2003)"` 의 날짜 정보를 기반으로 난독화할 부분을 정의합니다.

            ```json
            {
              "name": "Born date - loginService specific",
              "regex": "born on (.*)\)"
            }
            ```
          </td>
        </tr>
      </tbody>
    </table>

    각 난독화 표현식은 문자열에서 일부 민감한 정보를 캡처하는 방법(정규식 사용)을 정의하고 나중에 쉽게 식별할 수 있도록 이를 친숙한 이름과 연결합니다.

    난독화 표현식은 재사용이 _가능합니다_ . 민감한 데이터가 포함된 로그 속성의 이름이 어떻게 지정되는지 전혀 알 수 없습니다. 대신 위에 정의된 사회보장 표현식은 `ssn`, `socialSecurityNumber` 또는 `socSecNum` 라는 로그인 속성에 적용될 수 있습니다.

    로그 속성의 형식과 밀접하게 결합된 `Born date (loginService specific)` 과 같은 재사용이 불가능한 난독화 표현식을 생성할 수도 있습니다. 예를 들어, `born on` 및 `before` 뒤에 오는 것은 무엇이든 사용할 수 있습니다.

    <Callout
      variant="caution"
      title="중첩된 정규식 캡처 그룹은 지원되지 않습니다."
    >
      이 기능의 주된 역할은 민감한 데이터를 쉽고 효과적인 방식으로 해시 또는 마스크로 바꾸는 것입니다. 캡처 그룹 내에서 서로 다른 일치 항목을 그룹화하려는 경우 비캡처 그룹 구문 `(?:{EXPRESSION})` 을 사용하여 중첩된 캡처 그룹 생성을 방지해야 합니다. 예를 들어, `(([A-Z]{12})|([a-z]{6}))` 피하고 대신 `((?:[A-Z]{12})|((?:[a-z]{6}))` 사용하세요.
    </Callout>
  </Collapser>

  <Collapser
    id="example-rules"
    title="3. 규칙을 사용할 로그"
  >
    민감한 데이터를 캡처하는 방법을 정의했으므로 이제 난독화해야 할 로그(로그인 서비스의 로그)와 방법(우리가 정의한 난독화 작업 사용)을 지정해야 합니다. 이를 달성하기 위해 우리는 난독화 규칙을 정의합니다.

    ```json
    {
      "name": "Obfuscate Login Service Logs",
      "filter": "serviceName = 'loginService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["message", "creditCardNumber"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        },
        {
          "attributes": ["message"],
          "expression": {"name": "Born date - loginService specific"},
          "method": "MASK"
        },
        {
          "attributes": ["message", "ssn"],
          "expression": {"name": "Social Security Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```

    이 규칙에는 세 가지 주요 구성 요소가 포함됩니다.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            난독화 규칙 구성요소
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            이름
          </td>

          <td>
            이름은 규칙이 수행하는 작업을 쉽게 식별하는 데 도움이 됩니다. 이 예에서 이 규칙은 로그인 서비스에서 오는 로그의 다양한 속성을 난독화하는 방법을 정의합니다.
          </td>
        </tr>

        <tr>
          <td>
            필터
          </td>

          <td>
            필터는 NRQL 형식을 사용하여 로그인 서비스에서 오는 대상 로그를 식별하는 방법을 시스템에 알려줍니다. 이 예시는 `serviceName = loginService` 및 `department = sales` 인 로그를 쿼리합니다.
          </td>
        </tr>

        <tr>
          <td>
            행위
          </td>

          <td>
            마지막으로 이 규칙은 필터와 일치하는 로그에 적용할 난독화 작업 세트를 정의합니다. 각 작업은 다음을 정의합니다.

            * 각 속성 집합에서 민감한 정보를 추출하는 데 사용할 이전에 생성된 난독화 표현

            * 이 데이터를 난독화하기 위해 적용할 난독화 방법( `HASH_SHA256` 또는 `MASK` )

              NerdGraph를 통해 난독화 룰을 정의할 때 이름 대신 난독화 룰의 `id` 지정해야 합니다. 이전 예제를 더 쉽게 읽을 수 있도록 대신 난독화 표현식 이름을 사용했습니다.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-more"
    title="4. 다른 규칙에서 표현식 재사용"
  >
    마지막 예로서 `serviceName = checkoutService` 속성과 신용 카드 정보가 포함된 `ccn` 속성이 있는 "Checkout Service"라는 다른 서비스에서 오는 로그를 난독화해야 한다고 가정해 보겠습니다.

    ```json
    {
      "message": "Order completed",
      "ccn": "4321-5678-9876-2345",
      "department": "sales",
      "serviceName": "checkoutService"
    }
    ```

    이 서비스의 로그를 난독화하려면 이러한 특정 로그를 대상으로 하는 다른 난독화 규칙만 정의하면 되고 이전에 생성된 `Credit card number` 난독화 표현식을 재사용하면 됩니다.

    ```json
    {
      "name": "Obfuscate Checkout Service Logs",
      "filter": "serviceName = 'checkoutService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["ccn"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```
  </Collapser>
</CollapserGroup>

## 체크리스트: 로그를 난독화하는 단계 [#checklist]

로그를 난독화하려면:

1. 로그에 나타나는 민감한 데이터의 패턴을 식별하여 로그의 형태를 연구하십시오. 예를 들어:

   * 모든 로그에 민감한 정보가 포함되어 있습니까? 아니면 좀 더 구체적으로 말씀해 주시겠습니까(서비스 A 또는 지역 B의 로그만)?
   * 신용 카드 번호, 운전 면허증 번호, 주민등록번호, 생체 인식, 기타 값과 같은 민감한 정보가 포함되어 있습니까?

2. 민감한 데이터를 추출하는 방법을 식별하기 위해 난독화 [표현식](#expressions) 을 작성하십시오.

3. 각 로그 세트에 대한 난독화 [규칙](#rules) 을 정의합니다.

   * NRQL을 사용하여 캡처하는 방법을 정의합니다.
   * 각각에 적용해야 하는 난독화 조치를 정의하십시오. 자문해 보십시오. 나중에 이 민감한 정보를 사용하여 내 로그를 쿼리해야 합니까( `HASH` 사용 고려), 아니면 이 정보를 내 로그에서 완전히 제거해야 하나요( `MASK` 사용 고려)?

<Callout variant="tip">
  <DNT>**Logs obfuscation**</DNT> UI에는 알려진 값에서 해시를 찾아 복사하여 다른 표현식 및 규칙과 함께 사용할 수 있도록 <DNT>**Hashing tool**</DNT> 가 포함되어 있습니다.
</Callout>

## CPU 제한 [#cpu-limits]

난독화에는 분당 CPU 제한이 있습니다. 계정이 이러한 리소스 제한에 도달하면 로그가 예상대로 난독화되지 않습니다. CPU 한도를 확인하려면 <DNT>**Data management**</DNT> UI의 [시스템 <DNT>**Limits**</DNT> 페이지](/docs/data-apis/manage-data/view-system-limits/#limits-ui) 로 이동하세요.

분당 난독화 CPU 한도를 초과하고 로그를 난독화할 수 없거나 이미 난독화 룰이 적용된 속성은 <DNT>**dropped**</DNT> 되고 속성이 삭제된 이유를 나타내는 텍스트로 대체됩니다. 예를 들어 난독화 규칙이 `message` 필드에 적용되고 분당 CPU 제한에 도달하면 결과 로그는 다음과 같습니다.

```json
{
  ...
  "message": "<OBFUSCATION> The account is over its obfuscation per-minute limit, attribute dropped",
  ...
}
```

이는 PII 또는 기타 민감한 데이터가 실수로 수집되는 것을 방지하기 위한 것입니다.

또한 다음 \`NrIntegrationError'가 계정에 기록됩니다.

```json
{
  "category": "RateLimit",
  "level": "error",
  "limitName": "Log API obfuscation per account per minute",
  "message": "You’ve exceeded our limit of per-account obfuscation time per-minute for the Log ingestion pipeline. Please reduce your usage or contact New Relic support.",
  "name": "ObfuscationTimeLimitReached",
  "newRelicFeature": "Logs",
  "rateLimitType": "ObfuscationTimePerMinute",
  "timestamp": 1678819264283
}
```

난독화 룰이 얼마나 잘 작동하는지 평가하고 어느 것을 건너뛰고 있는지 확인하려면 <DNT>**Logs Obfuscation > Health**</DNT> 으로 이동하세요. 난독화 규칙은 CPU 집약적이므로 이 차트는 리소스 제한으로 인해 어떤 규칙이 가장 큰 영향을 받는지 결정하는 데 도움이 될 수 있습니다.

## 난독화 표현 [#expressions]

New Relic UI를 사용하거나 GraphQL Explorer인 NerdGraph를 사용하여 난독화 표현식을 생성, 읽기, 업데이트 또는 삭제할 수 있습니다.

<img
  title="Logs obfuscation expressions in UI"
  alt="Screenshot of Logs obfuscation expressions UI"
  src="/images/logs_screenshot-crop_log-obfuscation-expression.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs > Obfuscation**</DNT>: 먼저 하나 이상의 난독화 룰을 생성한 다음 난독화 룰을 생성하세요.
</figcaption>

<CollapserGroup>
  <Collapser
    id="expressions-create"
    title="난독화 표현 만들기"
  >
    다음 옵션 중 하나를 사용하여 난독화 표현을 만듭니다.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> 으로 이동하고 왼쪽 탐색 메뉴에서 <DNT>**Obfuscation**</DNT> 선택합니다.

    2. <DNT>**Create regex**</DNT> 을(를) 클릭합니다.

    3. 캡처하려는 민감한 데이터와 일치하는 정규식뿐만 아니라 새 난독화 규칙의 이름을 입력합니다. [RE2 구문](https://github.com/google/re2/wiki/Syntax) 을 사용합니다.

       다음 예는 신용 카드 번호와 일치하는 기본 난독화 표현식을 보여줍니다.

       <img
         title="Create an obfuscation expression using the logs UI"
         alt="Create an obfuscation expression using the logs UI"
         src="/images/logs_screenshot-crop_obfuscation-create-expression.webp"
       />

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations` 아래에서 `logConfigurationsCreateObfuscationExpression` 변형을 사용합니다. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 의 관련 문서를 참조하세요.

       <Callout variant="important">
         NerdGraph에서 정규식을 사용할 때는 정규식을 이스케이프해야 합니다. 예를 들어: `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>
  </Collapser>

  <Collapser
    id="expressions-read"
    title="난독화 표현 읽기"
  >
    다음 옵션 중 하나를 사용하여 난독화 표현식을 쿼리합니다.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**
       </DNT>

       으로 이동하고 왼쪽 탐색 메뉴에서

       <DNT>
         **Obfuscation**
       </DNT>

       선택합니다.

    2. 사용 가능한 난독화 표현식과 해당 정의를 모두 보려면

       <DNT>
         **Expressions**
       </DNT>

       탭을 선택하세요.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `actor.account.logConfigurations` 아래의 `obfuscationExpressions` 가져오기 도구를 사용하세요. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationExpressions%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20regex%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 의 관련 문서를 참조하세요.
  </Collapser>

  <Collapser
    id="expressions-update"
    title="난독화 표현 업데이트"
  >
    난독화 표현을 업데이트하려면 다음 옵션 중 하나를 사용하세요.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> 으로 이동하고 왼쪽 탐색 메뉴에서 <DNT>**Obfuscation**</DNT> 선택합니다.
    2. <DNT>**Expressions**</DNT> 탭을 선택합니다.
    3. 편집하려는 난독화 표현식 오른쪽에 있는 줄임표 아이콘 <DNT>**...**</DNT> 을 클릭하고 <DNT>**Edit**</DNT> 클릭합니다.
    4. 필요에 따라 필드를 수정하고 <DNT>**Update**</DNT> 클릭합니다.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations` 아래에서 `logConfigurationsUpdateObfuscationExpression` 변형을 사용합니다. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%20-%20EDITED%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%20-%20EDITED%22%2C%20id%3A%20%225678%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 의 관련 문서를 참조하세요.

       <Callout variant="important">
         NerdGraph에서 정규식을 사용할 때는 정규식을 이스케이프해야 합니다. 예를 들어: `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>

       난독화 표현식을 업데이트할 때 모든 필드를 지정할 필요는 없으며 id(필수)와 수정하려는 필드만 지정할 수 있습니다.
  </Collapser>

  <Collapser
    id="expressions-delete"
    title="난독화 표현 삭제"
  >
    <Callout variant="important">
      난독화 규칙에서 현재 사용 중인 난독화 표현식은 삭제할 수 없습니다.
    </Callout>

    난독화 표현식을 삭제하려면 다음 옵션 중 하나를 사용하십시오.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> 으로 이동하고 왼쪽 탐색 메뉴에서 <DNT>**Obfuscation**</DNT> 선택합니다.
    2. <DNT>**Expressions**</DNT> 탭을 선택합니다.
    3. 삭제하려는 난독화 표현식 오른쪽에 있는 줄임표 아이콘 <DNT>**...**</DNT> 을 클릭하고 <DNT>**Delete**</DNT> 클릭합니다.
    4. <DNT>**Delete**</DNT> 클릭하여 표현식 삭제를 확인합니다.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations` 아래에서 `logConfigurationsDeleteObfuscationExpression` 변형을 사용합니다. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationExpression%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 의 관련 문서를 참조하세요.

       돌연변이는 삭제되기 전에 표현식의 스냅샷을 반환합니다.
  </Collapser>
</CollapserGroup>

## 샘플 표현식 [#samples]

아래에는 가장 일반적인 민감한 데이터 유형 중 일부를 난독화하기 위한 몇 가지 샘플 정규 표현식이 제공되어 있습니다. 난독화 찾기는 해당 표현이 사용될 각 뉴렐릭 계정에 대해 생성되어야 합니다.

<Callout variant="tip">
  다음 예는 UI에서 사용할 수 있는 정규식입니다. GraphQL에서 이를 사용하려면 이 [예제](#expressions-create) 에 표시된 대로 이스케이프해야 합니다.
</Callout>

<CollapserGroup>
  <Collapser
    id="ssn"
    title="미국 사회 보장 번호"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{2}[-\s\.]?\d{4})
    ```
  </Collapser>

  <Collapser
    id="ccn"
    title="신용 카드 번호"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})
    ```
  </Collapser>

  <Collapser
    id="dob"
    title="미국 생년월일"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:\d{2})?\d\d(?:\\)?(?:\/)?\d\d(?:\\)?(?:\/)?\d{2}(?:\d{2})?)
    ```
  </Collapser>

  <Collapser
    id="email-address"
    title="이메일 주소"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z0-9!#$'*+?^_`{|}~.-]+(?:@|%40)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+)
    ```
  </Collapser>

  <Collapser
    id="ipv4"
    title="IP 주소(ipv4)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$
    ```
  </Collapser>

  <Collapser
    id="usstreetaddress"
    title="미국 거리 주소"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})/g
    ```
  </Collapser>

  <Collapser
    id="usphone"
    title="미국 전화번호"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (^[\+]?[1]?[\W]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4})
    ```
  </Collapser>

  <Collapser
    id="uspassport"
    title="미국 여권 번호"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?\d?\d{5,8})
    ```
  </Collapser>

  <Collapser
    id="uknino"
    title="영국 국민보험번호(NINO)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?[a-dA-D])
    ```
  </Collapser>

  <Collapser
    id="spainnid"
    title="스페인 국가 신분증(NIE/DNI/NIF)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?[-\s]?\d{7,8}[-\s]?[a-zA-Z])
    ```
  </Collapser>

  <Collapser
    id="indiapanid"
    title="인도 PAN ID"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$
    ```
  </Collapser>

  <Collapser
    id="indiaaadhaar"
    title="인도 AADHAAR ID"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([2-9]{1}[0-9]{3}\s\d{4}\s\d{4})$
    ```
  </Collapser>

  <Collapser
    id="caphin"
    title="캐나다 개인 건강/사회 보험 번호(PHIN/SIN)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{3}[-\s\.]?\d{3})
    ```
  </Collapser>

  <Collapser
    id="cahcn"
    title="캐나다 건강 카드 번호"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{10})
    ```
  </Collapser>

  <Collapser
    id="japanid"
    title="일본 국민 식별 번호(마이 넘버)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (d{4}\sd{4}\sd{4})
    ```
  </Collapser>
</CollapserGroup>

## 난독화 규칙 [#rules]

New Relic UI를 사용하거나 GraphQL Explorer인 NerdGraph를 사용하여 난독화 규칙을 생성, 읽기, 업데이트 또는 삭제할 수 있습니다.

<CollapserGroup>
  <Collapser
    id="rules-create"
    title="난독화 규칙 만들기"
  >
    다음 옵션 중 하나를 사용하여 난독화 규칙을 만듭니다.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> 으로 이동하고 왼쪽 탐색 메뉴에서 <DNT>**Obfuscation**</DNT> 선택합니다.

    2. <DNT>**Create obfuscation rule**</DNT> 을(를) 클릭합니다.

    3. 난독화하려는 대상 로그 세트를 캡처하기 위해 새 난독화 규칙의 이름과 일치 기준(NRQL 형식)을 입력합니다.

    4. 새 `actions` (첫 번째 항목이 자동으로 추가됨)을 추가하여 난독화 표현식(정규식)을 지정하여 각 속성 집합을 캡처하고 속성을 `MASK` 할지 `HASH` 할지 여부를 지정합니다.

       * 여러 속성을 쉼표로 구분하여 지정할 수 있습니다.
       * `MASK` 일치하는 모든 문자를 `X` es로 바꿉니다. `MASK` 을 사용하면 나중에 특정 난독화된 값을 쿼리할 수 없습니다.
       * `HASH` 민감한 데이터를 SHA-256 해시 값으로 대체합니다. `HASH` 을 사용하는 경우 일반 텍스트 값을 알고 있는 경우 해시 도구를 사용하여 쿼리할 수 있습니다.

       규칙은 다음과 같아야 합니다.

       <img
         title="Create an obfuscation rule using the logs UI"
         alt="Create an obfuscation rule using the logs UI"
         src="/images/logs_screenshot-crop_log-obfuscation-create-rule.webp"
       />

    5. 난독화 룰을 생성하고 활성화하려면 <DNT>**Create rule**</DNT> 클릭하세요.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations` 아래에서 `logConfigurationsCreateObfuscationRule` 변형을 사용합니다. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bname%3A%20%22Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 의 관련 문서를 참조하세요.

       <Callout variant="important">
         주어진 난독화 작업에 연결하려면 난독화 `expressionId` 를 지정해야 합니다. 이 ID를 검색하려면 [`obfuscationRules` 을 쿼리](#rules-read) 할 수 있습니다.
       </Callout>
  </Collapser>

  <Collapser
    id="rules-read"
    title="난독화 규칙 읽기"
  >
    다음 옵션 중 하나를 사용하여 난독화 규칙을 쿼리합니다.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> 으로 이동하고 왼쪽 탐색 메뉴에서 <DNT>**Obfuscation**</DNT> 선택합니다.
    2. 사용 가능한 모든 난독화 룰과 해당 정의를 보려면 <DNT>**Rules**</DNT> 탭(기본값)을 선택하세요.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `actor.account.logConfigurations` 아래의 `obfuscationRules` 가져오기 도구를 사용하세요. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationRules%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20filter%0A%20%20%20%20%20%20%20%20%20%20enabled%0A%20%20%20%20%20%20%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20method%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)의 관련 문서를 참조하세요.
  </Collapser>

  <Collapser
    id="rules-update"
    title="난독화 규칙 업데이트"
  >
    다음 옵션 중 하나를 사용하여 난독화 규칙을 업데이트합니다.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> 으로 이동하고 왼쪽 탐색 메뉴에서 <DNT>**Obfuscation**</DNT> 선택합니다.
    2. <DNT>**Rules**</DNT> 탭(기본값)을 선택합니다.
    3. 편집하려는 난독화 룰 오른쪽에 있는 줄임표 아이콘 <DNT>**...**</DNT> 을 클릭하고 <DNT>**Edit**</DNT> 클릭합니다.
    4. 필요에 따라 필드를 수정하고 <DNT>**Update rule**</DNT> 클릭합니다.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations` 아래에서 `logConfigurationsUpdateObfuscationRule` 변형을 사용합니다. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22EDITED%20-%20Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 의 관련 문서를 참조하세요.

       <Callout variant="important">
         주어진 난독화 작업에 연결하려면 난독화 `expressionId` 를 지정해야 합니다. 이 ID를 검색하려면 \[query the `obfuscationRules` ]](#rules-read)에 설명된 대로 `obfuscationRules` 을 사용할 수 있습니다.
       </Callout>

       난독화 규칙을 업데이트할 때 모든 필드를 지정할 필요는 없으며 `id` (필수) 및 수정하려는 필드만 지정할 수 있습니다. 다음은 [이름만 업데이트](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 하는 예입니다.
  </Collapser>

  <Collapser
    id="rules-delete"
    title="난독화 규칙 삭제"
  >
    난독화 규칙을 삭제하려면 다음 옵션 중 하나를 사용하십시오.

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> 으로 이동하고 왼쪽 탐색 메뉴에서 <DNT>**Obfuscation**</DNT> 선택합니다.
    2. <DNT>**Rules**</DNT> 탭(기본값)을 선택합니다.
    3. 삭제하려는 난독화 룰 오른쪽에 있는 줄임표 아이콘 <DNT>**...**</DNT> 을 클릭하고 <DNT>**Delete**</DNT> 클릭합니다.
    4. <DNT>**Delete**</DNT> 클릭하여 표현식 삭제를 확인합니다.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       `logConfigurations` 아래에서 `logConfigurationsDeleteObfuscationRule` 변형을 사용합니다. GraphiQL에 채워진 예제와 [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationRule%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 의 관련 문서를 참조하세요.

       변형은 삭제되기 전에 규칙의 스냅샷을 반환합니다.
  </Collapser>
</CollapserGroup>
