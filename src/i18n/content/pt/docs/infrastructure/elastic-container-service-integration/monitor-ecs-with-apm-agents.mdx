---
title: Monitorar ambientes Amazon ECS com agente de linguagem APM
tags:
  - APM Agents
  - Elastic Container Service
  - Fargate
metaDescription: New Relic's APM agents can be setup to monitor your Amazon ECS environment.
freshnessValidatedDate: never
translationType: machine
---

Você pode instalar o agente New Relic Monitoramento do desempenho de aplicativos (APM) em seu ambiente [Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) . Ao equipar seu ambiente com o Docker, você pode coletar e enviar dados e métricas APM para a plataforma New Relic .

## Instale o agente no seu contêiner docker [#install-the-agent]

Para adicionar o agente ao seu contêiner docker, siga as etapas de instalação específicas do agente de idioma que você está usando:

* [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/additional-installation/install-new-relic-java-agent-docker/)
* [.NET](https://docs.newrelic.com/install/dotnet/?deployment=linux&docker=yesDocker)
* [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent-docker/)
* [Python](https://docs.newrelic.com/install/python/)

## Configure o agente na sua definição de tarefa do ECS [#agent-task-def]

Para que o agente seja executado no seu ambiente ECS, você precisa modificar seu [arquivo de definição de tarefa](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html). Este arquivo permite que você especifique o parâmetro com o qual deseja que seu aplicativo seja executado. Para configurar o agente, você precisa definir as seguintes variáveis de ambiente:

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

## Configurar o agente de infra como um sidecar [#infra-agent-side-car]

Você pode configurar o agente de infraestrutura como um [contêiner sidecar](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-security-considerations.html) para seu agente APM, dando a você mais visibilidade em seu ambiente. Ao configurar um sidecar para seu agente APM, você estabelece um relacionamento entre o aplicativo e o monitoramento de infraestrutura para que os dados sejam correlacionados. Isso exibe dados para vários recursos de mapeamento New Relic , como [mapas de serviço](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/service-maps).

<img title="Screenshot showing service map when running language agent and infra agent together in Fargate environment" alt="Service map screenshot running language agent and infra agent together in Fargate environment" src="/images/service-map-screenshot-showing-language-and-infra-agent-in-fargate-env.png" />

<figcaption>
  Este mapa de serviço inclui dados extraídos de um agente APM com um sidecar de agente de infraestrutura em um ambiente Fargate.
</figcaption>

## Exemplo de arquivo de definição de tarefa [#example-task-definition]

Para configurar o agente de linguagem e o sidecar do agente de infraestrutura, atualize seu arquivo de definição de tarefa completo. Por exemplo:

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

Depois de modificar seu arquivo de tarefas, acione alguns dados em seu ambiente, aguarde alguns minutos e [procure seus dados na interface do usuário](/docs/ecs-integration-understand-use-data).

## Qual é o próximo? [#next-steps]

Depois de configurar seu agente:

* Recomendamos instalar nosso [ECS integração na nuvem](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration), que exibe outros dados do ECS, como dados sobre cluster e serviços.

* Revise nosso documento sobre [condição do alerta](/docs/ecs-integration-recommended-alert-conditions).

* Caso queira fazer configurações adicionais para seu agente APM, confira a documentação de configuração deles:

  * [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/)
  * [.NET](https://docs.newrelic.com/docs/apm/agents/net-agent/configuration/net-agent-configuration/)
  * [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
  * [Python](https://docs.newrelic.com/docs/apm/agents/python-agent/configuration/python-agent-configuration/)