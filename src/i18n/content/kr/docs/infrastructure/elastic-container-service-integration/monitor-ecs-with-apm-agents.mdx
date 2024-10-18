---
title: APM 언어 에이전트를 사용하여 Amazon ECS 환경 모니터링
tags:
  - APM Agents
  - Elastic Container Service
  - Fargate
metaDescription: New Relic's APM agents can be setup to monitor your Amazon ECS environment.
freshnessValidatedDate: never
translationType: machine
---

[Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) 환경에 뉴킹릭 성능 모니터링(APM) 에이전트를 설치할 수 있습니다. docker를 사용하여 환경을 부하하면 APM 데이터와 지표를 수집하여 뉴렐릭 플랫폼으로 보낼 수 있습니다.

## docker 컨테이너에 에이전트를 설치하세요. [#install-the-agent]

에이전트를 docker 컨테이너에 추가하려면 사용 중인 언어 에이전트에 해당하는 설치 단계를 따르세요.

* [자바](https://docs.newrelic.com/docs/apm/agents/java-agent/additional-installation/install-new-relic-java-agent-docker/)
* [.그물](https://docs.newrelic.com/install/dotnet/?deployment=linux&docker=yesDocker)
* [노드.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent-docker/)
* [파이썬](https://docs.newrelic.com/install/python/)

## ECS 작업 정의에서 에이전트를 설정하세요 [#agent-task-def]

ECS 환경에서 에이전트를 실행하려면 [작업 정의 파일을](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html) 수정해야 합니다. 이 파일을 사용하면 앱을 실행하는 데 사용할 매개 변수, 매개변수를 지정할 수 있습니다. 에이전트 설정을 위해서는 다음 환경 변수를 정의해야 합니다.

<CollapserGroup>
  <Collapser id="java-setup" title="자바">
    ```json
    "environment": [
        # Specify your region-aware host here
        {
            "name": "NEW_RELIC_HOST",
            "value": "collector.newrelic.com"
        },
        # App name is required
        {
            "name": "NEW_RELIC_APP_NAME",
            "value": "Fargate Demo (AWS)"
        },
        # License key is required
        {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "your-license-key"
        }
    ],
    ```
  </Collapser>

  <Collapser id="dotnet-setup" title=".그물">
    ```json
        "environment": [
            # Specify your region-aware host here
            {
                "name": "NEW_RELIC_HOST",
                "value": "collector.newrelic.com"
            },
            # Setting an app name is highly recommended but not required
            {
                "name": "NEW_RELIC_APP_NAME",
                "value": "Fargate Demo (AWS)"
            },
            # License key is required
            {
                "name": "NEW_RELIC_LICENSE_KEY",
                "value": "your-license-key"
            }
        ],
    ```
  </Collapser>

  <Collapser id="nodejs-setup" title="노드.js">
    ```json
    "environment": [
        # Specify your region-aware host here
        {
            "name": "NEW_RELIC_HOST",
            "value": "collector.newrelic.com"
        },
        # App name is required
        {
            "name": "NEW_RELIC_APP_NAME",
            "value": "Fargate Demo (AWS)"
        },
        # License key is required
        {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "your-license-key"
        }
    ],
    ```
  </Collapser>

  <Collapser id="python-setup" title="파이썬">
    ```json
    "environment": [
        # Specify your region-aware host here
        {
            "name": "NEW_RELIC_HOST",
            "value": "collector.newrelic.com"
        },
        # Setting an app name is highly recommended but not required
        {
            "name": "NEW_RELIC_APP_NAME",
            "value": "Fargate Demo (AWS)"
        },
        # License key is required
        {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "your-license-key"
        }
    ],
    ```
  </Collapser>
</CollapserGroup>

## 인프라 에이전트를 사이드카로 설정 [#infra-agent-side-car]

APM 에이전트에 대한 [사이드카 컨테이너](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-security-considerations.html) 로 인프라 에이전트를 설정하면 환경에 대한 가시성을 높일 수 있습니다. APM 에이전트에 사이드카를 설정하면 애플리케이션과 인프라 모니터링 간의 관계가 설정되어 데이터 간 상관 관계가 설정됩니다. 이는 [서비스 맵](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/service-maps) 과 같은 다양한 뉴렐릭 매핑 기능에 데이터를 표시합니다.

<img title="Screenshot showing service map when running language agent and infra agent together in Fargate environment" alt="Service map screenshot running language agent and infra agent together in Fargate environment" src="/images/service-map-screenshot-showing-language-and-infra-agent-in-fargate-env.png" />

<figcaption>
  이 서비스 맵에는 Fargate 환경의 인프라 에이전트 사이드카가 있는 APM 에이전트에서 표면화된 데이터가 포함되어 있습니다.
</figcaption>

## 예제 작업 정의 파일 [#example-task-definition]

언어 에이전트와 인프라 에이전트 사이드카를 설정하려면 전체 작업 정의 파일을 업데이트하세요. 예를 들어:

```json
{
    "family": "nrExampleFargateDef",
    "containerDefinitions": [
        {
            "name": "fargate-test",
            "image": "nrExample/fargate-test:latest",
            "cpu": 256,
            "memoryReservation": 1024,
            "portMappings": [
                {
                    "name": "fargate-test-80-tcp",
                    "containerPort": 80,
                    "hostPort": 80,
                    "protocol": "tcp",
                    "appProtocol": "http"
                }
            ],
            "essential": true,
            "environment": [
                {
                    "name": "NEW_RELIC_HOST",
                    "value": "collector.newrelic.com"
                },
                {
                    "name": "NEW_RELIC_APP_NAME",
                    "value": "Fargate Demo (AWS)"
                },
                {
                    "name": "NEW_RELIC_LICENSE_KEY",
                    "value": "your-license-key"
                }
            ],
            "mountPoints": [],
            "volumesFrom": [],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/nrExampleFargateDef",
                    "awslogs-create-group": "true",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs"
                }
            },
            "systemControls": []
        },
        {
            "name": "newrelic-infra",
            "image": "newrelic/nri-ecs:1.11.10",
            "cpu": 256,
            "memoryReservation": 512,
            "portMappings": [],
            "essential": true,
            "environment": [
                {
                    "name": "NRIA_IS_FORWARD_ONLY",
                    "value": "true"
                },
                {
                    "name": "NRIA_LICENSE_KEY",
                    "value": "your-license-key"
                },
                {
                    "name": "NRIA_VERBOSE",
                    "value": "1"
                },
                {
                    "name": "NRIA_PASSTHROUGH_ENVIRONMENT",
                    "value": "ECS_CONTAINER_METADATA_URI,ECS_CONTAINER_METADATA_URI_V4,FARGATE"
                },
                {
                    "name": "FARGATE",
                    "value": "true"
                },
                {
                    "name": "NRIA_CUSTOM_ATTRIBUTES",
                    "value": "{\"nrDeployMethod\":\"downloadPage\"}"
                },
            ],
            "mountPoints": [],
            "volumesFrom": [],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/newrelic-infra/ecs",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "verbose"
                }
            },
            "systemControls": []
        }
    ],
    "taskRoleArn": "arn:aws:iam::111111111111:role/ecsTaskExecutionRole",
    "executionRoleArn": "arn:aws:iam::111111111111:role/ecsTaskExecutionRole",
    "networkMode": "awsvpc",
    "requiresCompatibilities": [
        "FARGATE"
    ],
    "cpu": "1024",
    "memory": "3072",
    "runtimePlatform": {
        "cpuArchitecture": "X86_64",
        "operatingSystemFamily": "LINUX"
    }
}
```

작업 파일을 수정한 후 환경에서 일부 데이터를 트리거하고 몇 분간 기다린 다음 [UI에서 데이터를 찾습니다](/docs/ecs-integration-understand-use-data).

## 다음은 뭐지? [#next-steps]

에이전트를 설정한 후:

* 클러스터 및 서비스에 대한 데이터 등 다른 ECS 데이터를 표면화하는 [ECS 클라우드 통합을](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration) 설치하는 것이 좋습니다.

* [공지 조건](/docs/ecs-integration-recommended-alert-conditions) 에 대한 문서를 검토하세요.

* APM 에이전트에 추가 설정을 만들고 싶다면 해당 설정 문서를 확인하세요:

  * [자바](https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/)
  * [.그물](https://docs.newrelic.com/docs/apm/agents/net-agent/configuration/net-agent-configuration/)
  * [노드.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
  * [파이썬](https://docs.newrelic.com/docs/apm/agents/python-agent/configuration/python-agent-configuration/)