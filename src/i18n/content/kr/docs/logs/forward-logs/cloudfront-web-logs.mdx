---
title: Amazon CloudFront 액세스 로그 전달
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - CloudFront
metaDescription: 'Configure New Relic logging for your Amazon CloudFront distribution, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Amazon CloudFront 배포에서 로깅을 활성화하여 웹 액세스 로그를 New Relic으로 보낼 수 있습니다.

## 로그 전송 옵션 [#log-types]

CloudFront에서 로그를 보내는 데는 표준 로깅 또는 실시간 로그의 두 가지 옵션이 있습니다.

<DNT>**Standard logs**</DNT> CloudFront에서 저장된 S3 버킷으로 전송됩니다. 그런 다음 AWS Lambda 트리거를 사용하여 S3에서 뉴렐릭으로 로그를 보냅니다. [표준 로그(액세스 로그) 구성 및 사용에 대한 Amazon CloudFront 문서를](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) 검토하십시오. 여기에는 S3 버킷 생성 및 적절한 권한 설정에 대한 자세한 정보가 포함되어 있습니다. 표준 로그에는 모든 데이터 필드가 포함되며 5분마다 S3로 전송된 다음 뉴렐릭으로 전송됩니다. Amazon 콘솔에서 표준 로그를 구성하고 S3 Lambda 트리거를 통해 뉴렐릭으로 보내는 방법에 대한 자세한 지침은 [표준 로깅 활성화 섹션을](#enable-standard-logging) 참조하세요.

<DNT>**Real-time logs**</DNT> Kinesis Data Stream 소비자 및 Kinesis Data Firehose를 사용하여 요청을 받은 후 몇 초 내에 뉴렐릭으로 전송됩니다. [실시간 로그 구성에 대해서는 Amazon CloudFront 문서를](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) 검토하십시오. 로그 로그는 구성 가능하며 샘플링 속도(전송할 로그의 백분율)를 구성하고, 로그 기록에서 수신할 특정 필드를 선택하고, 로그를 수신하려는 특정 캐시 동작(경로 패턴)을 정의할 수 있습니다. 실시간 로그에는 모든 데이터를 전송하거나 실패한 데이터만 전송하기 위한 S3 백업 버킷도 필요합니다. 따라서 실시간 로그를 활성화하려면 [S3 버킷 생성 지침](#create-s3-bucket) 도 따라야 합니다. Amazaon 콘솔에서 표준 로그를 구성하고 이를 S3 Lambda 트리거를 통해 뉴렐릭으로 보내는 방법에 대한 자세한 지침은 [활성화 로그 로그 섹션을](#enable-real-time-logging) 참조하세요.

두 옵션 모두 [내장된 로그 구문 분석 규칙](/docs/logs/ui-data/built-log-parsing-rules) 을 사용하여 CloudFront 액세스 로그를 자동으로 구문 분석하고 빠른 시작 대시보드를 사용하여 데이터에 대한 통찰력을 즉시 얻을 수 있습니다. 기본 제공 구문 분석 규칙이 작동하고 제공된 빠른 시작 대시보드의 위젯에 데이터를 채우려면 지침에 정의된 대로 `logtype` 속성을 구성해야 합니다. 일부 로깅 필드만 선택한 경우 실시간 로그 구문 분석에 대한 자세한 내용은 [구문 분석 섹션](#parsing-real-time-logs) 을 참조하세요.

## CloudFront 로그 저장을 위한 S3 버킷 생성 [#create-s3-bucket]

CloudFront 배포에 대한 표준 로그 또는 실시간 로그를 활성화하려면 먼저 다음 위치에 CloudFront 액세스 로그를 저장하는 데 사용할 S3 버킷을 생성해야 합니다.

1. AWS Management Console에서

   <DNT>
     **Services > All services > S3**
   </DNT>

   선택합니다.

2. <DNT>
     **Create bucket**
   </DNT>

   선택합니다.

3. <DNT>
     **Bucket name**
   </DNT>

   을 입력하고 원하는

   <DNT>
     **AWS region**
   </DNT>

   을 선택합니다. (표준 로깅을 사용하는 경우 S3 버킷은 다음 섹션에서 생성하는 Lambda 함수와 동일한 리전에 있어야 합니다.)

4. <DNT>
     **Object ownership**
   </DNT>

   섹션에서

   <DNT>
     **ACLs enabled**
   </DNT>

   선택합니다.

5. <DNT>
     **Create bucket**
   </DNT>

   선택합니다.

이제 표준 또는 실시간 로깅을 활성화할 수 있습니다. 해당 옵션에 대한 지침은 계속 읽으십시오.

## 표준 로깅 사용 [#enable-standard-logging]

표준 로그를 활성화하도록 CloudFront 배포를 업데이트합니다.

1. AWS Management Console에서

   <DNT>
     **Services > All Services > CloudFront**
   </DNT>

   선택합니다.

2. 배포판

   <DNT>
     **ID**
   </DNT>

   을 클릭하세요. 일반 탭의 설정 섹션에서

   <DNT>
     **Edit**
   </DNT>

   선택합니다.

3. <DNT>
     **Standard logging**
   </DNT>

   섹션에서

   <DNT>
     **On**
   </DNT>

   선택하여 로깅을 활성화하고 로깅 구성 설정을 표시합니다.

4. <DNT>
     **S3 bucket**
   </DNT>

   의 경우 위에서 생성한 S3 버킷 이름을 검색하여 선택합니다.

5. 선택 사항: `cloudfront_logs` 과 같은 로그 접두사를 추가할 수 있습니다.

6. <DNT>
     **Save changes**
   </DNT>

   선택합니다.

5분 이내에 다음 파일 이름 형식으로 S3 버킷에 로그 파일이 표시되기 시작해야 합니다.

```
<optional prefix>/<distribution ID>.YYYY-MM-DD-HH.unique-ID.gz
```

다음으로 S3의 액세스 로그를 New Relic으로 보내도록 AWS Lambda 함수 `NewRelic-log-ingestion-s3` 를 설치하고 구성해야 합니다. 적절한 `LOG_TYPE` 환경 변수를 설정할 수 있도록 Amazon CloudFront 로그에 대한 단일 Lambda 함수가 필요합니다. 이를 통해 [CloudFront 내장 구문 분석 규칙](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront) 과 [빠른 시작 대시보드를](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) 사용할 수 있습니다. 이 Lambda 함수가 이미 한 지역에 설치되어 있고 이를 사용하여 다른 S3 로그를 New Relic(예: ALB/NLB 로그)으로 보내는 경우 다른 지역에 Lambda 함수를 다시 설치해야 합니다. 또한 앞서 언급했듯이 액세스 로그를 저장하기 위한 S3 버킷과 S3 로그를 New Relic으로 전송하기 위한 Lambda 함수는 동일한 리전에 있어야 합니다.

다음 단계를 수행하려면:

7. [S3에서 로그를 전송하기 위해 AWS Lambda를 구성](/docs/logs/forward-logs/aws-lambda-sending-logs-s3/) 하려면 여기 지침을 따르십시오.

8. Lambda 함수가 설치된 후

   <DNT>
     **Functions > NewRelic-s3-log-ingestion**
   </DNT>

   선택합니다.

9. S3 아래에서

   <DNT>
     **+ Add trigger**
   </DNT>

   버튼을 선택합니다.

10. <DNT>
      **Trigger Configuration**
    </DNT>

    에 대해 S3을 선택합니다.

11. <DNT>
      **Bucket**
    </DNT>

    의 경우 위에서 생성한 S3 버킷을 검색하여 선택합니다.

12. <DNT>
      **Recursive invocation**
    </DNT>

    섹션에서 확인 상자를 선택한 후

    <DNT>
      **Add**
    </DNT>

    선택합니다.

13. 함수의

    <DNT>
      **Configuration**
    </DNT>

    탭에서 왼쪽에 있는

    <DNT>
      **Environment variables**
    </DNT>

    옵션을 선택합니다.

14. <DNT>
      **Edit**
    </DNT>

    선택하고 `LOG_TYPE` 에 대해 `cloudfront-web` 입력합니다.

15. <DNT>
      **Save**
    </DNT>

    선택합니다.

5분 이내에 로그 UI에 로그가 표시되기 시작합니다. 로그를 수신하고 있는지 확인하려면 [로그 UI 검색창](/docs/logs/ui-data/use-logs-ui)에서 `logtype:cloudfront-web` 를 검색하거나 다음과 같이 NRQL 쿼리를 실행하세요. `FROM Log SELECT * WHERE logtype='cloudfront-web'`

## 실시간 로그 활성화 [#enable-real-time-logs]

CloudFront 배포에 대한 실시간 로깅을 활성화하려면 먼저 CloudFront 로그를 수신하기 위한 Kinesis Data Stream을 생성해야 합니다.

1. AWS Management Console에서

   <DNT>
     **Services > Kinesis**
   </DNT>

   선택합니다.

2. <DNT>
     **Data streams**
   </DNT>

   선택한 다음

   <DNT>
     **Create data stream**
   </DNT>

   선택합니다.

3. <DNT>
     **Data stream name**
   </DNT>

   을 입력하세요. 예를 들어, `CloudFront-DataStream`.

4. 원하는 데이터 스트림 용량 모드를 선택합니다.

5. <DNT>
     **Create data stream**
   </DNT>

   선택합니다.

6. <DNT>
     **Consumers**
   </DNT>

   섹션에서

   <DNT>
     **Process with delivery stream**
   </DNT>

   선택합니다.

7. <DNT>
     **Destination**
   </DNT>

   에 대해

   <DNT>
     **New Relic**
   </DNT>

   선택합니다.

8. <DNT>
     **Delivery stream name**
   </DNT>

   을 입력하세요. 예를 들어, `CloudFront-DeliveryStream`.

9. <DNT>
     **Destination**
   </DNT>

   설정 섹션에서 HTTP 엔드포인트 URL에 대해

   <DNT>
     **New Relic logs - US**
   </DNT>

   또는

   <DNT>
     **New Relic logs - EU**
   </DNT>

   선택합니다.

10. <DNT>
      **API key**
    </DNT>

    에 뉴렐릭 계정의

    <InlinePopover type="licenseKey"/>

    을 입력합니다.

11. <DNT>
      **Add parameter**
    </DNT>

    선택합니다.

12. 아래 21단계에서 로그인을 위해 모든 필드를 선택하려면

    <DNT>
      **Key**
    </DNT>

    에 대해 `logtype` 입력하고

    <DNT>
      **Value**
    </DNT>

    에 대해 `cloudfront-rtl` 입력합니다. 아래 21단계에서 로그인할 필드의 하위 집합을 선택하려면 `cloudfront-rtl-custom` 입력하세요. 모든 필드를 선택하지 않은 경우 아래의 [실시간 로그 구문 분석 섹션에서](#parsing-real-time-logs) 로그에 대한 사용자 지정 구문 분석 규칙을 만드는 방법에 대한 정보를 참조하세요.

13. <DNT>
      **Backup settings**
    </DNT>

    섹션에서 기본 설정에 따라

    <DNT>
      **Failed data**
    </DNT>

    만 선택하거나

    <DNT>
      **Source record backup in Amazon S3**
    </DNT>

    옵션에 대해

    <DNT>
      **All data**
    </DNT>

    선택할 수 있습니다.

14. S3 백업 버킷의 경우

    <DNT>
      **Browse**
    </DNT>

    선택하여 위에서 CloudFront 로그를 저장하기 위해 생성한 S3 버킷 이름을 검색하고 선택합니다.

15. <DNT>
      **Create delivery stream**
    </DNT>

    선택합니다.

다음으로 실시간 로깅 구성을 생성하여 CloudFront 배포에 연결합니다.

16. AWS Management Console에서

    <DNT>
      **Services > CloudFront**
    </DNT>

    선택합니다.

17. 왼쪽의

    <DNT>
      **Telemetry section**
    </DNT>

    에서

    <DNT>
      **Logs**
    </DNT>

    선택합니다.

18. <DNT>
      **Real-time configurations**
    </DNT>

    탭을 클릭한 다음

    <DNT>
      **Create configuration**
    </DNT>

    선택합니다.

19. 구성 이름을 입력합니다. 예: `CloudFront-RealTimeLogs` .

20. `1` 에서 `100` 사이의 샘플링 속도를 입력합니다.

21. <DNT>
      **Fields**
    </DNT>

    의 경우

    <DNT>
      **All fields**
    </DNT>

    선택하거나 로그에 포함할 필드를 선택합니다.

22. <DNT>
      **Endpoint**
    </DNT>

    의 경우 3단계에서 생성한 데이터 스트림 이름을 선택합니다. 예: `CloudFront-DataStream`.

23. <DNT>
      **Distrubutions**
    </DNT>

    섹션에서 CloudFront 배포 ID를 선택합니다.

24. <DNT>
      **Cache behaviors**
    </DNT>

    의 경우

    <DNT>
      **Default (\*)**
    </DNT>

    확인하세요.

25. <DNT>
      **Create configuration**
    </DNT>

    선택합니다.

몇 분 안에 [로그 UI](/docs/logs/ui-data/use-logs-ui)에 로그가 표시되기 시작합니다. 실시간 로그를 수신하고 있는지 확인하려면 로그 UI 검색창에서 또는 다음과 같은 NRQL 쿼리를 통해 `logtype:cloudfront-rtl*` 를 검색할 수 있습니다. `FROM Log SELECT * WHERE logtype LIKE 'cloudfront-rtl%'`

## 실시간 로그 파싱 [#parsing-real-time-logs]

실시간 로그에 대한 기본 제공 구문 분석 규칙은 모든 필드가 기록될 것이라고 가정합니다. 필드의 하위 집합만 기록하도록 선택한 경우 로그 형식과 일치하는 사용자 지정 구문 분석 규칙을 정의해야 합니다. 이는 로그가 올바르게 구문 분석되고 [빠른 시작 대시보드](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) 를 사용하는 데 필요합니다.

맞춤 구문 분석 규칙을 만들려면 로그 UI의 <DNT>**Manage data**</DNT> 섹션에서 <DNT>**Parsing**</DNT> 선택하세요.

1. <DNT>
     **Rule name**
   </DNT>

   에 대해 `CloudFront custom parsing rule` 입력합니다.

2. <DNT>
     **Filter logs based on NRQL**
   </DNT>

   에 대해 `logtype='cloundfront-rtl-custom'` 입력합니다.

3. 대화 설정 로그에서 선택한 필드가

   <DNT>
     **only**
   </DNT>

   포함되도록 아래의 Grok 구문 분석 논리를 업데이트하세요. 예를 들어, `cs_headers` 필드를 포함하지 않기로 선택한 경우 Grok에서 `%{SPACE}%{NOTSPACE:cs_headers}%` 제거하는 식입니다.

   ```
   ^%{NOTSPACE:timestamp}.\d{3}%{SPACE}%{NOTSPACE:c_ip}%{SPACE}%{NUMBER:time_to_first_byte:INT}%{SPACE}%{NUMBER:sc_status:INT}%{SPACE}%{NUMBER:sc_bytes:INT}%{SPACE}%{WORD:cs_method}%{SPACE}%{NOTSPACE:cs_protocol}%{SPACE}%{NOTSPACE:cs_host}%{SPACE}%{NOTSPACE:cs_uri_stem}%{SPACE}%{NUMBER:cs_bytes:INT}%{SPACE}%{NOTSPACE:x_edge_location}%{SPACE}%{NOTSPACE:x_edge_request_id}%{SPACE}%{NOTSPACE:x_host_header}%{SPACE}%{NUMBER:time_taken:INT}%{SPACE}%{NOTSPACE:cs_protocol_version}%{SPACE}%{NOTSPACE:cs_ip_version}%{SPACE}%{NOTSPACE:cs_user_agent}%{SPACE}%{NOTSPACE:cs_referer}%{SPACE}%{NOTSPACE:cs_cookie}%{SPACE}%{NOTSPACE:cs_uri_query}%{SPACE}%{NOTSPACE:x_edge_response_result_type}%{SPACE}%{NOTSPACE:x_forwarded_for}%{SPACE}%{NOTSPACE:ssl_protocol}%{SPACE}%{NOTSPACE:ssl_cipher}%{SPACE}%{NOTSPACE:x_edge_result_type}%{SPACE}%{NOTSPACE:fle_encrypted_fields}%{SPACE}%{NOTSPACE:fle_status}%{SPACE}%{NOTSPACE:sc_content_type}%{SPACE}%{NOTSPACE:sc_content_len}%{SPACE}%{NOTSPACE:sc_range_start}%{SPACE}%{NOTSPACE:sc_range_end}%{SPACE}%{NUMBER:c_port:INT}%{SPACE}%{NOTSPACE:x_edge_detailed_result_type}%{SPACE}%{NOTSPACE:c_country}%{SPACE}%{NOTSPACE:cs_accept_encoding}%{SPACE}%{NOTSPACE:cs_accept}%{SPACE}%{NOTSPACE:cache_behavior_path_pattern}%{SPACE}%{NOTSPACE:cs_headers}%{SPACE}%{NOTSPACE:cs_header_names}%{SPACE}%{NOTSPACE:cs_headers_count}$
   ```

4. 업데이트된 Grok을 구문 분석 논리 섹션에 붙여넣은 다음

   <DNT>
     **Test grok**
   </DNT>

   를 선택하여 파서가 작동하는지 확인합니다.

5. 규칙을 활성화한 다음

   <DNT>
     **Save parsing rule**
   </DNT>

   선택합니다.

<img
  title="Creating a CloudFront custom parsing rule"
  alt="Creating a CloudFront custom parsing rule"
  src="/images/logs_screenshot-crop_Cloudfront-log-parsing.webp"
/>

<figcaption>
  CloudFront 사용자 지정 구문 분석 구성의 스크린샷.
</figcaption>

## 다음은 뭐지? [#what-next]

<img
  title="Dashboard in Amazon CloudFront Access Logs quickstart"
  alt="Dashboard in Amazon CloudFront Access Logs quickstart"
  src="/images/logs_screenshot-crop_Cloudfront-logs-dashboard.webp"
/>

<figcaption>
  Amazon CloudFront 액세스 로그에 대한 빠른 시작에는 사전 구축된 대시보드가 포함되어 있습니다.
</figcaption>

다음 단계에 대한 몇 가지 아이디어는 다음과 같습니다.

* Amazon CloudFront 액세스 로그의 주요 지표를 확인하려면 사전 구축된 대시보드를 몇 분 만에 시작하세요. [Amazon CloudFront 액세스 로그인 퀵스타트](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) 로 이동하여

  <DNT>
    **Install now**
  </DNT>

  클릭합니다.

* [로그 UI를](/docs/logs/log-management/ui-data/use-logs-ui)사용하여 플랫폼 전체에서 로깅 데이터를 탐색합니다.

* [컨텍스트 기능의 로그를](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents) 사용하여 로그를 전달하여 애플리케이션과 플랫폼 성능 데이터에 대한 더 깊은 가시성을 얻으십시오.

* [경고](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions) 를 설정합니다.

* [데이터를 쿼리](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) 하고 [대시보드를 만듭니다](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) .

## 로그 전달 사용 안함 [#disable]

로그 전달 기능을 비활성화하려면 두 가지 옵션이 있습니다. S3 로그를 New Relic으로 보내는 것을 중단하려면 `NewRelic-log-ingestion-s3` Lambda 함수에서 S3 트리거를 삭제할 수 있습니다. Amazon CloudFront 액세스 로그를 완전히 비활성화하려면 트리거를 삭제하고 CloudFront 배포의 일반 설정에서 로깅을 꺼야 합니다.
