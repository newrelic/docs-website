---
title: APM言語エージェントを使用した Amazon ECS 環境の監視
tags:
  - APM Agents
  - Elastic Container Service
  - Fargate
metaDescription: New Relic's APM agents can be setup to monitor your Amazon ECS environment.
freshnessValidatedDate: never
translationType: machine
---

New Relicアプリケーションモニタリング（ APM ）エージェントを[Amazon ECS](https://docs.aws.amazon.com/ecs/index.html)環境にインストールできます。 docker を使用して環境を計測すると、 APMデータとメトリクスを収集してNew Relicプラットフォームに送信できます。

## エージェントを Docker コンテナにインストールします [#install-the-agent]

エージェントを Docker コンテナに追加するには、使用している言語エージェントに固有のインストール手順に従います。

* [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/additional-installation/install-new-relic-java-agent-docker/)
* [.NET](https://docs.newrelic.com/install/dotnet/?deployment=linux&docker=yesDocker)
* [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent-docker/)
* [Python](https://docs.newrelic.com/install/python/)

## ECSタスク定義でエージェントを設定する [#agent-task-def]

ECS 環境でエージェントを実行するには、[タスク定義ファイルを](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html)変更する必要があります。 このファイルを使用すると、アプリを実行する方法を指定できます。 エージェントのセットアップでは、次の環境変数を定義する必要があります。

<CollapserGroup>
  <Collapser id="java-setup" title="Java">
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

  <Collapser id="dotnet-setup" title=".NET">
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

  <Collapser id="nodejs-setup" title="Node.js">
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

  <Collapser id="python-setup" title="Python">
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

## インフラエージェントをサイドカーとして設定する [#infra-agent-side-car]

インフラストラクチャエージェントを[ ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-security-considerations.html)APMエージェントの サイドカー コンテナ として設定すると、環境の可視性がさらに高まります。APMエージェントにサイドカーを設定すると、アプリケーションとインフラストラクチャモニタリングの間の関係が確立され、データが関連付けられます。 これにより、[サービス マップ](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/service-maps)などのさまざまな New Relic マッピング機能にデータが表示されます。

<img title="Screenshot showing service map when running language agent and infra agent together in Fargate environment" alt="Service map screenshot running language agent and infra agent together in Fargate environment" src="/images/service-map-screenshot-showing-language-and-infra-agent-in-fargate-env.png" />

<figcaption>
  このサービス マップには、Fargate 環境のインフラエージェント サイドカーを使用してAPMエージェントから表示されたデータが含まれています。
</figcaption>

## タスク定義ファイルの例 [#example-task-definition]

言語エージェントとインフラストラクチャエージェントのサイドカーを設定するには、完全なタスク定義ファイルを更新します。 例えば：

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

タスク ファイルを変更したら、環境内でいくつかのデータをトリガーし、数分待ってから[UI でデータを探します](/docs/ecs-integration-understand-use-data)。

## 次は何ですか？ [#next-steps]

エージェントを設定したら、次の操作を行います。

* クラスターやサービスに関するデータなど、他の ECS データを表示する[ECS クラウド インテグレーション](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration)をインストールすることをお勧めします。

* [アラート条件](/docs/ecs-integration-recommended-alert-conditions)に関するドキュメントを確認してください。

* APMエージェントに追加の設定を行いたい場合は、その設定ドキュメントを確認してください。

  * [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/)
  * [.NET](https://docs.newrelic.com/docs/apm/agents/net-agent/configuration/net-agent-configuration/)
  * [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
  * [Python](https://docs.newrelic.com/docs/apm/agents/python-agent/configuration/python-agent-configuration/)