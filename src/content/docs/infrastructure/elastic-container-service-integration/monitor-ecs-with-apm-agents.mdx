---
title: Monitor Amazon ECS environments with APM language agents
tags:
  - APM Agents
  - Elastic Container Service
  - Fargate
metaDescription: New Relic's APM agents can be setup to monitor your Amazon ECS environment.
redirects:
  - /docs/integrations/elastic-container-service-integration/installation/monitor-ecs-with-apm-agents
  - /docs/monitor-ecs-with-apm-agents
  - /docs/infrastructure/monitor-ecs-with-apm-agents

freshnessValidatedDate: never
---

You can install New Relic application monitoring (APM) agents on your [Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) environment. When you instrument your environment with Docker, you can collect and send APM data and metrics to the New Relic platform.

## Install the agent into your Docker container [#install-the-agent]

To add the agent into your Docker container, follow the installation steps specific to the language agent you are using:

     * [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/additional-installation/install-new-relic-java-agent-docker/)
     * [.NET](https://docs.newrelic.com/install/dotnet/?deployment=linux&docker=yesDocker)
     * [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent-docker/)
     * [Python](https://docs.newrelic.com/install/python/)


## Set up the agent in your ECS task definition [#agent-task-def]

In order to get the agent running in your ECS environment, you need to modify your [task defintion file](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html). This file lets you specify parameters you want your app to run with. For agent set-up, you need to define the following environment variables:

<CollapserGroup>
    <Collapser
        id="java-setup"
        title="Java"
    >

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
    <Collapser
        id="dotnet-setup"
        title=".NET"
    >

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
    <Collapser
        id="nodejs-setup"
        title="Node.js"
    >

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
    <Collapser
        id="python-setup"
        title="Python"
    >

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

## Set up the infra agent as a sidecar [#infra-agent-side-car]

You can set up the infrastructure agent as a [sidecar container](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-security-considerations.html) to your APM agents, giving you more visibility into your environment. When you set up a sidecar to your APM agent, you establish relationship between application and infrastructure monitoring so the data is correlated. This surfaces data to various New Relic mapping features, like [service maps](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/service-maps).

    <img
        title="Screenshot showing service map when running language agent and infra agent together in Fargate environment"
        alt="Service map screenshot running language agent and infra agent together in Fargate environment"
        src="/images/service-map-screenshot-showing-language-and-infra-agent-in-fargate-env.png"
    />
<figcaption>
  This service map includes data surfaced from an APM agent with an infra agent sidecar in a Fargate environment.
</figcaption>

## Example Task Definition File [#example-task-definition]

To set up the language agent and infrastructure agent sidecar, update your full task definition file. For example:

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

Once you've modified your task file, trigger some data in your environment, wait a few minutes, then [look for your data in the UI](/docs/ecs-integration-understand-use-data).

## What's next? [#next-steps]

After you've setup your agents:

* We recommend installing our [ECS cloud integration](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration), which surfaces other ECS data, like data about clusters and services.
* Review our doc on [alert conditions](/docs/ecs-integration-recommended-alert-conditions).
* If you want to make additional configurations to your APM agents, check out their configuration docs:
     * [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/)
     * [.NET](https://docs.newrelic.com/docs/apm/agents/net-agent/configuration/net-agent-configuration/)
     * [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
     * [Python](https://docs.newrelic.com/docs/apm/agents/python-agent/configuration/python-agent-configuration/)
