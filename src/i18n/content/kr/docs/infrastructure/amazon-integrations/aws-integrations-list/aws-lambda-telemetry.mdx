---
title: AWS Lambda Extensions Telemetry API 통합
tags:
  - Integrations
  - Amazon integrations
  - Lambda Extension
freshnessValidatedDate: never
translationType: machine
---

<DNT>
  **Work in progress**
</DNT>

New Relic AWS Lambda Telemetry 확장을 사용하면 트리거를 설정하거나 Amazon CloudWatch를 연결할 필요 없이 Lambda 함수에서 New Relic으로 바로 원격 측정 데이터를 보낼 수 있습니다. 확장을 계층으로 추가하여 로그, 이벤트, 지표 및 추적을 보내고 New Relic 플랫폼에서 즉시 데이터에서 통찰력을 얻으십시오.

## 설치

1. AWS 콘솔에서 <DNT>**Lambda > Functions**</DNT> 으로 이동하여 데이터를 수집하려는 함수를 선택합니다.

2. <DNT>**Layers > Add Layer**</DNT> 선택합니다.

3. <DNT>**Choose a layer**</DNT> 에서 <DNT>**Specify a layer by providing the ARN**</DNT> 옵션을 선택합니다.

4. [https://layers.newrelic-external.com/](https://layers.newrelic-external.com/) 으로 이동합니다. 해당 지역에서 AwsLambdaExtension을 검색하여 최신 계층 버전이 있는 `ARN` 를 찾은 다음 AWS 콘솔의 `ARN` 필드에 붙여넣습니다. AwsLambdaExtension을 찾을 수 없는 경우 다음 패턴을 사용하여 `arn` 를 가져옵니다.

   `arn:aws:lambda:{your-region}:533243300146:layer:AwsLambdaExtension:{version}`

최신 버전의 확장 프로그램을 얻으려면 버전 1을 선택하고 <DNT>**Save**</DNT> 클릭하세요. 그런 다음 <DNT>**Edit**</DNT> 클릭하고 사용 가능한 가장 높은 버전을 선택합니다. 5. <DNT>**Configuration**</DNT> 로 이동하여 <DNT>**Environment variables**</DNT> 선택하고 `Key: NEW_RELIC_LICENSE_KEY Value: YOUR_LICENSE_KEY` 추가합니다. 참고: `Key: NEW_RELIC_ACCOUNT_ID` (는) 선택적 시위이며 뉴렐릭 계정 ID로 설정되어야 합니다.

설정이 올바르게 완료되었는지 확인하려면 <DNT>**code**</DNT> 섹션에서 <DNT>**Test**</DNT> 버튼을 클릭하세요.

## 데이터 찾기

<DNT>**[https://one.newrelic.com/](https://one.newrelic.com/)**</DNT> 및 왼쪽 메뉴에서 다음 카테고리 중 하나로 이동하여 뉴렐릭에 대한 데이터를 찾을 수 있습니다: <DNT>**Logs**</DNT> , <DNT>**Metrics & events**</DNT> 또는 <DNT>**...Add More > Traces**</DNT>.

### 로그:

특정 속성 세트를 기준으로 로그를 필터링할 수 있습니다. 왼쪽 메뉴에서 <DNT>**Attributes**</DNT> 클릭한 다음 관심 있는 속성을 선택합니다. 예를 들어:

```
NEWRELIC > SOURCE > api.logs
AWS > EXTENSION.NAME > AwsLambdaExtension
PLUGIN > TYPE > lambda extension
```

### 측정항목:

확장 프로그램에서 보낸 측정항목에는 `aws.telemetry.lambda_ext.` 접두사가 붙습니다. 현재 6개의 AWS 람다 지표가 있습니다.

```
'durationMs'
'billedDurationMs'
'initDurationMs'
'memorySizeMB'
'maxMemoryUsedMB'
'producedBytes'
```

### 이벤트

이 확장 프로그램에서 보낸 이벤트를 보려면 <DNT>**Custom events**</DNT> 섹션에서 `AwsLambdaExtension` 찾으세요. 현재 12가지 이벤트 유형이 있습니다.

```
platform_initStart
platform_initRuntimeDone
platform_initReport
platform_start
platform_runtimeDone
platform_fault
platform_report
platform_extension
platform_telemetrySubscription
platform_logsDropped
function
extension
```

`Dimensions` 메뉴에서 데이터를 추가로 필터링할 수 있습니다.

### 트레이스

트레이스 데이터는 <DNT>**Traces**</DNT> 탭에 표시됩니다. 확장 프로그램에서 보낸 트레이스를 보려면 'AwsLambdaExtension'을 검색하세요.
