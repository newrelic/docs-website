---
title: 뉴렐릭에 Lambda 모니터링 설치 및 구성
metaDescription: Configure your AWS Lambda functions with New Relic
freshnessValidatedDate: never
translationType: machine
---

## 시작하기 전에 [#begin]

* 아직 하지 않았다면 Lambda 함수가 [호환성 및 요구 사항을](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring) 충족하는지 확인하시기 바랍니다.

## Lambda 모니터링 설치 [#setup]

람다 모니터링에는 다음이 포함됩니다.

* CloudWatch 지표를 수집하고 뉴렐릭 내에서 엔터티 합성을 수행하는 AWS 통합입니다.
* 뉴렐릭 에이전트는 [뉴렐릭 Lambda 레이어](https://github.com/newrelic/newrelic-lambda-layers) 에 포함되거나 [SDK로](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation) 포함되어 있습니다.
* [newrelic-log-ingestion](https://github.com/newrelic/aws-log-ingestion) 함수나 [Extension을](https://github.com/newrelic/newrelic-lambda-extension) 통해 페이로드와 로그를 뉴렐릭으로 보내는 방법입니다. [뉴렐릭 Lambda Layers를](https://github.com/newrelic/newrelic-lambda-layers) 사용하면 데이터를 전송하기 위해 별도의 설정을 할 필요가 없습니다.

<Steps>
  <Step>
    ## AWS 와 뉴렐릭 계정을 연결하세요 [#link]

    <Callout variant="tip">
      [newrelic-lambda-cli를](https://github.com/newrelic/newrelic-lambda-cli) 사용하여 Lambda 함수를 계측하는 경우 연결 프로세스가 자동화되어 이 단계를 건너뛸 수 있습니다.
    </Callout>

    계정을 연결하면 AWS 계정 인벤토리를 생성하고 Lambda 함수에 대한 CloudWatch 지표를 자동으로 수집할 수 있는 권한이 부여됩니다. 계정을 연결한 후에는 AWS 계정의 리소스가 [저널 탐색기](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/#find) 에 저널로 표시됩니다. Lambda 부분 부분은 서버리스 기능 보기에서 찾을 수 있습니다.

    다음 통합 방법 중 하나를 사용하여 AWS 와 뉴럴릭 계정을 연결할 수 있습니다.

    <Tabs>
      <TabsBar>
        <TabsBarItem id="1">AWS Metric Streams(권장)</TabsBarItem> <TabsBarItem id="2">API 폴링</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="1">
          뉴렐릭이 Lambda 함수를 모니터링하려면 뉴렐릭과 AWS 간의 통합을 설정해야 합니다. 지연시간을 줄이고 폴링 요청 제한을 방지하려면 [지표 스트림을](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream) 사용하는 것이 좋습니다.
        </TabsPageItem>

        <TabsPageItem id="2">
          지표 스트림 통합을 사용하지 않는 경우 대신 [API 폴링](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring) 통합을 설정할 수 있습니다. 기본적으로 Lambda 서비스와 API 폴링 통합을 활성화하면 5분마다 CloudWatch 지표를 폴링합니다.

          [newrelic-lambda-cli를](https://github.com/newrelic/newrelic-lambda-cli) 사용하면 API 폴링 통합을 설정할 수 있지만 지표 스트림 통합은 설정할 수 없습니다.

          ```sh
          newrelic-lambda integrations install --nr-account-id YOUR_NR_ACCOUNT_ID \
          --nr-api-key YOUR_NEW_RELIC_USER_KEY
          ```

          [통합 설치 명령](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#aws-lambda-integration) 의 한 단계는 보안을 강화하기 위해 [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) 에 `NEW_RELIC_LICENSE_KEY` 비밀을 생성합니다. 이것은 다른 옵션 및 플래그와 함께 `--disable-license-key-secret` 플래그로 구성할 수 있습니다.
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Lambda 함수를 호출하세요 [#instrument]

    Lambda 함수를 사용하려면 에이전트와 확장 기능이 필요합니다. 이러한 구성 요소는 뉴렐릭 [Lambda 계층](https://github.com/newrelic/newrelic-lambda-layers) 에 함께 묶여 있습니다. Lambda 계층을 사용할 수 없는 경우 에이전트와 확장 기능을 수동으로 함수에 통합할 수 있습니다. Lambda 함수의 요구 사항에 따라 다음 계측 방법 중 하나를 선택하세요.

    <Tabs>
      <TabsBar>
        <TabsBarItem id="layered-instrumentation">계층화된 측정, 로그아웃</TabsBarItem> <TabsBarItem id="sdk-based-instrumentation">SDK 기반 측정,</TabsBarItem> <TabsBarItem id="containerized-instrumentation">컨테이너화된 측정, 리소스</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="layered-instrumentation">
          Lambda 함수가 Zip 파일로 패키징되어 있고 레이어를 추가할 수 있는 경우 이 방법을 사용하세요. 레이어는 라이브러리, 사용자 정의 런타임 및 기타 의존성/종속성을 위한 배포 메커니즘입니다. 자세한 내용은 [Layered 측정, 로그](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/instrument-your-own/) 문서를 참조하세요.
        </TabsPageItem>

        <TabsPageItem id="sdk-based-instrumentation">
          Lambda 함수에서 레이어를 사용할 수 없는 경우 이 방법을 사용하면 레이어를 수정할 필요 없이 빠르게 구현하고 배포할 수 있습니다. 자세한 내용은 [SDK 기반 측정, 로그](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation/) 문서를 참조하세요.
        </TabsPageItem>

        <TabsPageItem id="containerized-instrumentation">
          Lambda 함수가 컨테이너 내부에서 실행되는 경우 이 방법을 사용하세요. 컨테이너는 애플리케이션에 일관되고 격리된 실행 환경을 제공합니다. 뉴렐릭은 뉴렐릭 Lambda 레이어, 뉴렐릭 Lambda 확장 프로그램 및 뉴렐릭 에이전트를 포함하는 사전 구축된 도커 이미지를 제공합니다. 자세한 내용은 [컨테이너화된 측정, 계측기](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/containerized-images/) 문서를 참조하세요.
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## 환경 변수 구성 [#environment]

    <Callout variant="tip">
      * CLI를 사용하여 Lambda 계층을 계측하는 경우, 필수 환경 변수가 자동으로 구성됩니다. 그러나 일부 기본 설정을 변경하고 모니터링 요구 사항에 맞는 환경 변수로 Lambda 함수를 구성하고 싶을 수도 있습니다.
      * Newrellic Lambda 확장 프로그램을 사용하는 경우 환경 변수를 수동으로 구성해야 합니다.
    </Callout>

    [환경 변수는](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/env-variables-lambda) 뉴렐릭 에이전트 및 Lambda 확장을 구성하는 데 사용됩니다. Lambda 함수가 올바르게 모니터링되도록 하려면 이러한 변수를 올바르게 설정하는 것이 중요합니다.
  </Step>
</Steps>

## 예제 함수를 사용해 보세요

로그된 뉴렐릭의 Lambda 레이어를 사용한 후에는 예제 함수를 시험해 볼 것을 강력히 권장합니다. 이러한 작업 예제는 사용자 서버리스 기능의 시작점으로 사용되어야 합니다. 이러한 예제를 사용하면 뉴렐릭 Lambda 레이어에 익숙해지고 계정 링크를 테스트하는 데 도움이 될 수 있으며 자체 로그에 대한 참조로 사용할 수 있습니다. 각 예에서는 권한 추가, 핸들러 래핑을 위한 런타임별 기술, CloudWatch에서 함수 로그 보존 관리 등을 보여줍니다.

배포하다 Lambda 함수를 관리하고 구현하는 방법에는 여러 가지가 있지만, AWS CloudFormation은 예제에 사용하는 메커니즘입니다.

우리의 예제는 뉴렐릭 Lambda Extension과 함께 이 [GitHub](https://github.com/newrelic/newrelic-lambda-extension) 에 게시되어 있습니다. 뉴렐릭이 지원하는 각 Lambda 런타임마다 하나씩 있습니다.

* [노드.js](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/node)
* [파이썬](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/python)
* [가다](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/go)
* [자바](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/java)
* [루비](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/ruby)
* [.그물](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/dotnet)

또한 우리의 [수신 거부 예제](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/distributedtracing) 에서 서버리스 서버리스로 작업을 수행하는 방법을 배울 수 있습니다. Node, Python, Ruby 및 Java 기능을 사용하여 Lambda 함수를 호출할 수 있는 가장 인기 있는 두 가지 서비스인 SQS 및 SNS에 대한 수동 트레이스 전파를 보여줍니다.

<Callout variant="tip">
  수동으로 테스트하는 경우 텔레메트리 데이터가 지연될 수 있습니다. 함수를 다시 호출하기 전에 7초 동안 기다려서 버퍼링된 모든 텔레메트리가 전달될 수 있도록 하는 것이 좋습니다.
</Callout>

<DocTiles>
  <DocTile title="Compatibility and requirement" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring">지원되는 런타임 및 필수 구성 요소에 대해 자세히 알아보세요.</DocTile> <DocTile title="Data and UI" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/ui-data/understand-lambda-monitoring-ui/">뉴렐릭을 사용하여 AWS Lambda 함수를 모니터링하는 방법을 알아보세요.</DocTile> <DocTile title="Troubleshooting" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting">설치 관련 문제를 해결하는 방법을 알아보세요.</DocTile>
</DocTiles>