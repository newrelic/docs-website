---
title: IAST 설정
tags:
  - IAST
  - New Relic IAST
  - Configuration
metaDescription: Find out how to configure IAST.
freshnessValidatedDate: '2024-09-16T00:00:00.000Z'
translationType: machine
---

IAST를 구성하여 스캔 일정을 처리할 수 있습니다. 이러한 설정을 사용하면 API IAST 분석에서 특정 , 모범 사례 및 교리 범주를 제외할 수 있습니다. IAST 스캔을 지연하거나 하루 중 특정 시간에 스캔을 예약할 수도 있습니다.

## IAST 스캔 일정 [#scheduling-iast-scans]

2개의 변수를 사용하여 예약된 IAST 스캔을 시작하고 중지할 수 있습니다. 이러한 변수를 사용하면 IAST 스캔에 대한 특정 시간을 설정하거나 애플리케이션에서 IAST 스캔 시작 시간에 지연을 추가할 수 있습니다.

### 예약된 IAST 스캔 구성 [#configure-scheduled]

`scan_schedule` 모델을 설정하려면 `newrelic.yml` 설정 파일을 엽니다.

```yml
security:
  scan_schedule:
    delay: 0                     # In minutes, default is 0 min
    duration: 0                  # In minutes, default is forever
    schedule: ""                 # Cron Expression to define start time
    always_sample_traces: false  # regardless of scan schedule
```

<CollapserGroup>
  <Collapser
    id="delay"
    title={<><InlineCode>
      delay
    </InlineCode> (분)</>
    }
  >
    `delay` 필드는 애플리케이션이 시작된 후 IAST 스캔이 시작되기 전의 시간을 분 단위로 지정합니다. 기본값은 `0` 입니다.
  </Collapser>

  <Collapser
    id="duration"
    title={<><InlineCode>
      duration
    </InlineCode> (분)</>
    }
  >
    `duration` 필드는 IAST 스캔이 실행되는 시간을 분 단위로 지정합니다. 기본값은 영구적이며 제한이 없습니다.

    예를 들어 `duration: 300` 설정하면 IAST 스캔은 300분(5시간) 동안 실행됩니다.
  </Collapser>

  <Collapser
    id="schedule-cron"
    title={<><InlineCode>
      schedule
    </InlineCode> (크론 표현)</>
    }
  >
    `schedule` 필드는 IAST 스캔을 실행할 시기를 정의하는 cron 표현식을 지정합니다. 기본적으로 `schedule` 비활성화되어 있습니다. [Cron 표현식은](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) 공백으로 구분된 6개의 필드로 구성됩니다.

    * **second**: 시간의 초를 지정합니다(0-59)
    * **minute**: 시간의 분을 지정합니다(0-59)
    * **hour**: 하루 중 시간을 지정합니다(0-23)
    * **day**: 일자를 지정합니다(1-31)
    * **month**: 연중의 월(1-12 또는 JAN-DEC)
    * **day\_of\_week**: 요일(1-7 또는 SUN-SAT)을 지정합니다. 1 = 일요일

    <Callout variant="important">
      `duration` 이 지정되지 않으면 어떻게 되나요? 기간 변수를 생략하면, 변수는 IAST 검사가 절대로 중지되지 않아야 함을 의미합니다. 이 시나리오에서는 지정된 일정은 반복 작업이 아닌 시작 시간으로 처리됩니다. 스캔은 중단이나 종료 없이 무기한 계속됩니다. 예를 들어, `schedule: "0 0 0 * * ?"` IAST 스캔을 매일 오전 12시에 실행하도록 예약합니다.
    </Callout>
  </Collapser>

  <Collapser
    id="always-sample-traces"
    title={<><InlineCode>
      always_sample_traces
    </InlineCode> (부울)</>
    }
  >
    `always-sample-traces` IAST 백그라운드에서 트레이스 데이터를 적극적으로 수집할 수 있도록 하며, 보안 에이전트는 수집된 데이터를 사용하여 예약된 시간에 IAST 스캔을 수행합니다. 그러나 세션 관리가 있는 애플리케이션의 경우 `always_sample_traces` 플래그의 기본값을 `false` 로 설정하는 것이 권장됩니다. 이렇게 하면 IAST 샘플링 및 스캐닝이 지정된 창으로 제한됩니다. 세션은 일반적으로 짧은 지속 시간을 갖고, 종종 30분 이내에 종료됩니다. 이 경우 창구 이전에 트레이스를 샘플링하는 것은 귀중한 인사이트를 제공하지 않으며, 누락되는 결과를 초래할 수 있습니다. 기본적으로 `always_sample_traces` 의 값은 false입니다.
  </Collapser>
</CollapserGroup>

### 예 [#configure-scheduled-examples]

<CollapserGroup>
  <Collapser id="start-30-minutes" title="애플리케이션이 시작된 후 30분 후에 IAST를 시작하여 300분 동안 실행되도록 예약합니다.">
    애플리케이션이 시작된 후 30분 후에 IAST를 시작해서 300분 동안 실행되도록 예약하려면 지연 시간을 30으로, 기간을 300으로 설정해야 합니다.

    ```yml
    security:
      scan_schedule:
        delay: 30         # In minutes, default is 0 min
        duration: 300     # In minutes, default is forever
    ```
  </Collapser>

  <Collapser id="specific-time" title="특정 시간에 실행되도록 IAST 예약">
    특정 시간에 IAST가 실행되도록 예약하려면 원하는 시간을 나타내는 Cron 표현식으로 일정을 설정합니다. 예를 들어, IAST를 매일 자정에 실행하도록 예약하려면 일정을 `"0 0 0 * * ?"` 으로 설정합니다.

    ```yml
    security:
      scan_schedule:
        schedule: "0 0 0 * * ?"     # By default, schedule is inactive
    ```

    <Callout variant="important">
      지연과 일정이 모두 지정된 경우 지연이 우선합니다. 즉, IAST는 일정에 관계없이 지정된 지연 시간 이후에 시작됩니다.
    </Callout>
  </Collapser>

  <Collapser id="iast-sample-traces" title="IAST 항상 트레이스 샘플링으로 설정">
    IAST 항상 트레이스를 샘플링하도록 하려면 `always_sample_traces` 을 `true`로 설정합니다. 기본적으로 이 값은 `false`로 설정되며 이는 IAST 활성 스캔 창 내에서만 트레이스를 샘플링한다는 것을 의미합니다.

    ```yml
    security:
      scan_schedule:
        delay: 30                   # In minutes, default is 0 min
        always_sample_traces: true  # regardless of scan schedule
    ```
  </Collapser>
</CollapserGroup>

## IAST 스캔에서 제외 [#exclude-iast-scans]

IAST 검사에서 제외 설정을 사용하면 특정 API, 호환성 범주 및 변수를 IAST 분석에서 제외할 수 있습니다. 이 기능은 애플리케이션의 특정 구성 요소가 안전한 것으로 알려진 상황이나 특정 API에 대한 IAST 스캔으로 인해 로그인 제한과 같은 애플리케이션 오작동이 발생할 수 있는 경우에 유용합니다.

IAST 검사 제외를 구성하려면 `newrelic.yml` 설정 파일을 열어 `exclude_from_iast_scan` 매개변수를 설정하세요.

```yml
security:
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
```

### API 제외 [#exclude-api]

`newrelic.yml` 설정 파일의 API 섹션에 특정 API를 추가하여 IAST 분석에서 특정 API 무시할 수 있습니다. Perl 5 구문을 따르는 정규 표현식(regex) 패턴을 사용하여 API를 지정할 수 있습니다. 정규식 패턴은 엔드포인트를 제외하고 URL에 대한 전체 일치를 제공해야 합니다.

API를 지정하는 형식은 다음과 같습니다.

```yml
exclude_from_iast_scan:
  api:
    - .*account.* 
    - .*/\api\/v1\/.*?\/login
```

예를 들어:

* `.*account.*` API를 URL과 일치시킵니다. `http://localhost:80/api/v1/account/login`

* `.*/\api\/v1\/.*?\/login` API를 URL과 일치시킵니다. `http://localhost:80/api/v1/{'{account_id}'}/login`

### 들어오지 못하게 하다 `http_request_parameters` [#exclude-http]

`newrelic.yml` 설정 파일의 `http_request_parameters` 섹션에 이를 추가하면 IAST 분석에서 특정 HTTP 요청 매개 변수와 변수를 무시할 수 있습니다.

<CollapserGroup>
  <Collapser id="header" title="머리글">
    이는 HTTP 헤더 키 목록입니다. 요청에 이러한 키가 포함된 헤더가 포함되어 있으면 해당 IAST 스캔은 건너뜁니다. 예를 들어 헤더가 포함된 curl 요청이 있고 `X-Forwarded-For` 헤더에서 IAST 스캐닝을 건너뛰고 싶은 경우 다음 설정을 전달할 수 있습니다.

    ```bash
    curl -X POST -H "X-Forwarded-For: 123.456.789.012" \
         -H "Content-Type: application/x-www-form-urlencoded" \
         -d "param1=value1&param2=value2" http://example.com
    ```

    이 설정을 사용할 수 있습니다:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        header: 
          - X-Forwarded-For
    ```
  </Collapser>

  <Collapser id="query" title="질문">
    이는 시위에 대응하는 키 목록입니다. 요청의 쿼리 문자열에 이러한 파라미터, 변수가 있으면 IAST 스캔을 건너뛰게 됩니다. 예를 들어, 쿼리 검증을 사용하여 컬 요청이 있고 `customerID` 및 `username` 검증 검증에서 IAST 검사를 건너뛰려는 경우 다음 설정을 전달할 수 있습니다.

    ```bash
    curl --location --request GET 'localhost:8080/sql/save?firstName=test&lastName=user&customerID=testuser&username=test123'
    ```

    이 설정을 사용할 수 있습니다:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        query: 
          - username
          - customerID
    ```
  </Collapser>

  <Collapser id="body" title="몸">
    이는 요청 본문 내의 키 목록입니다. 이러한 키가 본문 내용에서 발견되면 IAST 검사는 건너뜁니다. 요청 본문에 지원되는 콘텐츠 유형은 JSON, XML, Form-URL-Encoded 데이터입니다.

    #### JSON Content-Type의 예

    JSON 본문이 포함된 curl 요청이 있고 `customerID` 및 `firstName` 에서 IAST 스캐닝을 건너뛰고 싶을 때 JSON 콘텐츠 유형에 대한 curl 예입니다.

    ```bash
    curl --location --request POST 'localhost:8080/application/json/post' \
      --header 'Content-Type: application/json' \
      --data '{
        "path": "sample.txt",
        "script":"testscript",
        "customerID":"GREAL",
        "name": {
          "firstName": "john",
          "lastName": "wick"
        },
        "url":"http://example.com",
        "cmd":"ls"
      }'
    ```

    이 설정을 사용할 수 있습니다:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        body: 
          - customerID
          - name.firstName
    ```

    #### XML 콘텐츠 유형의 예

    이는 XML 본문이 포함된 curl 요청이며 `customerID` 및 `username` 에서 IAST 스캐닝을 건너뛰려고 합니다.

    ```bash
    curl --location 'localhost:8080/application/xml/post' \
      --header 'Content-Type: application/xml' \
      --data '<?xml version="1.0" encoding="UTF-8" ?>
      <AppData>
        <path>sample.txt</path>
        <script>K2</script>
        <customerID>GREAL</customerID>
        <username>bob</username>
        <url>http://example.com</url>
        <cmd>ls</cmd>
        <name>keshav</name>
        <firstName>Aliko</firstName>
      </AppData>'
    ```

    이 설정을 사용할 수 있습니다:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        body: 
          - AppData.customerID
          - AppData.username
    ```

    #### 예제 Form-URL-Encoded Content-Type

    이는 Form-URL-Encoded 본문이 포함된 curl 요청이며 `customerID` 및 `username` 에서 IAST 스캐닝을 건너뛰려고 합니다.

    ```bash
    curl --location 'localhost:8080/application/urlencode/post' \
      --header 'Content-Type: application/x-www-form-urlencoded' \
      -d 'name=madhav&path=sample.txt&customerID=GREAL&script=K2&url=http://example.com&username=bob&firstName=Aliko&cmd=ls'
    ```

    이 설정을 사용할 수 있습니다:

    ```yml
    http_request_parameters:
      body: 
        - customerID
        - username
    ```

    <Callout variant="tip">
      중첩된 본문을 수행하려면 마침표(.)로 구분된 값을 지정하십시오.
    </Callout>
  </Collapser>
</CollapserGroup>

### 들어오지 못하게 하다 `iast_detection_category` [#exclude-iast-detection]

`iast_detection_category` 설정을 사용하면 사용자는 IAST 분석을 적용하거나 무시할 취약점 범주를 지정할 수 있습니다. 이러한 범주 중 하나가 `true` 로 설정된 경우 IAST 보안 에이전트는 해당 범주에 대한 이벤트를 생성하거나 취약점을 플래그로 지정하지 않습니다.

SQL 주입 및 SSRF 검사를 건너뛰려면 이 예를 참조하세요. `sql_injection` 및 `ssrf` 보고서가 `true` 로 설정되었습니다.

```yml
exclude_from_iast_scan:
  iast_detection_category:
    insecure_settings: false
    invalid_file_access: false
    sql_injection: true
    nosql_injection: false
    ldap_injection: false
    javascript_injection: false
    command_injection: false
    xpath_injection: false
    ssrf: true
    rxss: false
```

<Callout variant="tip">
  `iast_detection_category` 은 보안 섹션에 있는 감지 구성보다 우선합니다.
</Callout>

다음과 같은 결합된 설정을 사용할 수 있습니다.

```yml
security:
  enabled: true
  scan_schedule:
    delay: 0                     # In minutes, default is 0 min
    duration: 0                  # In minutes, default will be forever
    #schedule: ""                # Cron Expression to define start time
    always_sample_traces: false  # continuously collect samples
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
  agent:
    enabled: true
```

## IAST 스캔 컨트롤러 [#iast-scan-controllers]

### IAST 스캔 속도 제한 [#iast-scan-rate-limit]

IAST 스캔 속도 제한 설정은 1분 안에 애플리케이션으로 전송할 수 있는 분석 프로브 또는 요청의 최대 수를 제한합니다. 기본 IAST 스캔 속도 제한은 분당 최소 12개의 재생 요청, 분당 최대 3,600개의 재생 요청으로 설정됩니다.