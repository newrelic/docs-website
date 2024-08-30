---
title: S3에서 로그를 보내기 위한 AWS Lambda
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for AWS Lambda with S3, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

AWS Lambda 함수 `NewRelic-log-ingestion-s3` 를 사용하여 [Amazon S3 버킷](https://aws.amazon.com/s3/) 을 New Relic으로 보낼 수 있습니다. 이는 AWS Serverless 애플리케이션 리포지토리에서 쉽게 배포할 수 있습니다.

S3 버킷에서 뉴렐릭으로 로그인을 전달하면 로그인 데이터에 대한 수집, 처리, 탐색, 쿼리 및 공지를 위한 향상된 <InlinePopover type="logs"/>기능이 제공됩니다.

## Lambda 함수 설치 [#install-function]

S3 로그를 New Relic으로 전달하기 위해 Lambda 함수를 설치하려면:

1. <InlinePopover type="licenseKey"/>

   있는지 확인하세요.

2. 브라우저에서 [AWS Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications) 를 엽니다.

3. Lambda가 S3 버킷과 동일한 지역에 설치되어 있는지 확인하십시오.

   <img
     title="AWS Lambda - Select region"
     alt="AWS Lambda - Select region"
     src="/images/serverless_screenshot-crop_AWS-Lambda-select-region.webp"
   />

4. `newrelic` ) 검색하고

   <DNT>
     **Show apps that create custom IAM roles or resource policies**
   </DNT>

   확인하여 `NewRelic-log-ingestion-s3` 찾습니다.

5. `NewRelic-log-ingestion-s3` 세부정보를 클릭하고

   <DNT>
     **Deploy**
   </DNT>

   클릭합니다.

6. <DNT>
     **Application settings**
   </DNT>

   으로 스크롤하고 뉴렐릭

   <InlinePopover type="licenseKey"/>

   을 입력하세요.

7. `logtype` 을 Lambda 함수의 환경 변수로 지정하여 New Relic의 로그 구문 분석 기능을 활용하십시오. 자세한 내용은 기본 제공 [구문 분석 규칙 집합을](/docs/logs/new-relic-logs/ui-data/new-relic-logs-parsing-built-rules-custom-parsing#built-in-rules) 참조하십시오.

8. 앱이 사용자 지정 IAM 역할을 생성하는지 확인한 후 다음을 클릭합니다.

   <DNT>
     **Deploy.**
   </DNT>

9. 함수가 배포되면 [Lambda 트리거를 생성합니다](#create-trigger) .

### Serverless Framework를 사용한 수동 설치 [#serverless-install]

[Serverless](https://www.npmjs.com/package/serverless) Framework를 사용하여 터미널에서 Lambda를 수동으로 설치하고 구성할 수 있습니다. Linux를 사용하지 않는 경우 먼저 [Docker](https://docs.docker.com/get-docker/) 를 설치하고 계속 실행하십시오.

```bash
# Clone the repository
git clone https://github.com/newrelic/aws_s3_log_ingestion_lambda.git
# Install serverless package and the repo dependencies
npm install -g serverless
npm install
# Set the New Relic License Key env variable
export LICENSE_KEY=YOUR_NEWRELIC_LICENSE_KEY
# Set the logtype (optional)
export LOG_TYPE=YOUR_LOGTYPE
# Set the S3 bucket name
export S3_BUCKET_NAME=YOUR_S3_BUCKET_NAME
# The S3 subdirectory (optional)
export S3_PREFIX=YOUR_S3_SUBDIRECTORY
# Choose a name for your new Serverless Framework service
export SERVICE_NAME=YOUR_SERVICE_NAME
# Install the serverless-python-requirements plugin
serverless plugin install -n serverless-python-requirements
# Package the application files and dependencies into a deployment-ready file for deployment
serverless package
# Deploy the function, specifying the same region as your S3 bucket listed above
serverless deploy --region YOUR_AWS_REGION
```

## AWS에서 Lambda 트리거 생성 [#create-trigger]

로그를 New Relic으로 스트리밍하려면 Lambda에 트리거를 연결합니다.

1. 왼쪽 메뉴에서

   <DNT>
     **Functions**
   </DNT>

   클릭합니다.

2. 이전에 만든 `NewRelic-s3-log-ingestion` 함수를 찾아 선택합니다.

3. <DNT>
     **Designer**
   </DNT>

   아래에서

   <DNT>
     **Add Triggers**
   </DNT>

   클릭하고 드롭다운 메뉴에서

   <DNT>
     **S3**
   </DNT>

   선택합니다.

4. New Relic으로 보낼 로그가 포함된 S3 버킷을 선택합니다.

5. 선택적으로 [접두사 및 접미사를](https://aws.amazon.com/blogs/compute/amazon-s3-adds-prefix-and-suffix-filters-for-lambda-function-triggering/) 구성합니다. 이는 로그가 하위 디렉토리에 있는 경우에 유용합니다.

6. <DNT>
     **Enable trigger**
   </DNT>

   확인란을 선택한 다음 트리거를

   <DNT>
     **Add**
   </DNT>

   선택하세요.

Lambda 함수를 테스트하려면 함수 설정에서 구성한 S3 버킷에 새 로그 파일을 업로드한 다음 [로그 데이터를 봅니다](#find-data) .

<InstallFeedback/>

## 제한 사항 [#limitations]

* 지원되는 최대 로그 파일 크기는 비압축 35MB입니다.
* 지원되는 최대 개별 로그 줄 크기는 0.25MB입니다.
* 암호화된 로그 파일은 지원되지 않습니다.

## 로그 데이터 보기 [#find-data]

모든 것이 올바르게 구성되고 데이터가 수집되는 경우 다음 위치 모두에서 로그 데이터를 볼 수 있습니다.

* [로그 UI](https://one.newrelic.com/launcher/logger.log-launcher)
* [NRQL 쿼리](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data) 실행을 위한 툴

예를 들어 다음과 같은 쿼리를 실행할 수 있습니다.

```sql
SELECT * FROM Log
```

## 문제점 해결 [#troubleshooting]

로그 전달자 구성에 문제점이 발생하면 이 문제점 해결 팁을 시도하십시오.

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="config-overlap"
    title="구성 중복"
  >
    Lambda 함수를 배포할 때 다음 오류가 발생할 수 있습니다.

    ```
    An error occurred when creating the trigger: Configurations overlap. Configurations on the same bucket cannot share a common event type.
    ```

    이 문제를 해결하려면 버킷에 동일한 유형의 다른 이벤트가 없는지 확인하세요. S3 버킷에는 <DNT>**All object create events**</DNT> 인스턴스가 여러 개 있을 수 없습니다.
  </Collapser>

  <Collapser
    className="freq-link"
    id="cannot-connect"
    title="Docker 데몬에 연결할 수 없습니다."
  >
    서버리스를 사용하여 머신에서 Lambda 함수를 배포할 때 다음 오류가 발생할 수 있습니다.

    ```
    Error: docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
    ```

    이는 Docker가 실행되고 있지 않거나 올바르게 설정되지 않았음을 의미할 수 있습니다. 서버리스를 사용하여 Lambda 함수를 배포할 때 Docker가 머신에서 실행 중인지 확인하십시오.
  </Collapser>

  <Collapser
    className="freq-link"
    id="no-data"
    title="데이터가 표시되지 않습니다."
  >
    로그 관리 기능을 활성화한 후에도 데이터가 나타나지 않으면 [표준 로그 문제 해결 절차](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/) 를 따르십시오.
  </Collapser>
</CollapserGroup>

## 다음은 뭐지? [#what-next]

[플랫폼 전반에 걸쳐 로깅 데이터를](/docs/logs/log-management/ui-data/use-logs-ui/) 탐색합니다.

* [컨텍스트에서 로그](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) 기능을 사용하여 로그를 전달하여 애플리케이션 및 플랫폼 성능 데이터 모두에 대한 가시성을 확보하십시오.
* [경보](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/)를 설정하십시오.
* [데이터를 조회](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) 하고 [대시보드를 작성](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/)하십시오.

## 로그 전달 사용 안함 [#disable]

로그 전달 기능을 비활성화하려면 [Amazon S3 설명서](https://aws.amazon.com/s3/) 의 표준 절차를 따르십시오. New Relic에서는 다른 작업을 수행할 필요가 없습니다.
