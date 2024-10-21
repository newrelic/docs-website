---
title: Monitorear entornos de Amazon ECS con el agente de lenguaje APM
tags:
  - APM Agents
  - Elastic Container Service
  - Fargate
metaDescription: New Relic's APM agents can be setup to monitor your Amazon ECS environment.
freshnessValidatedDate: never
translationType: machine
---

Puede instalar New Relic Monitoreo del rendimiento de aplicaciones (APM)) agente en su entorno de [Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) . Al instrumentar su entorno con Docker, puede recopilar y enviar datos APM y métricas a la plataforma New Relic .

## Instala el agente en tu contenedor docker [#install-the-agent]

Para agregar el agente a su contenedor docker, siga los pasos de instalación específicos del agente de idioma que esté empleando:

* [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/additional-installation/install-new-relic-java-agent-docker/)
* [.NET](https://docs.newrelic.com/install/dotnet/?deployment=linux&docker=yesDocker)
* [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent-docker/)
* [Python](https://docs.newrelic.com/install/python/)

## Configurar el agente en la definición de tarea de ECS [#agent-task-def]

Para que el agente se ejecute en su entorno ECS, debe modificar su [archivo de definición de tarea](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html). Este archivo le permite especificar los parámetros con los que desea que se ejecute su aplicación. Para configurar el agente, debe definir las siguientes variables de entorno:

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

## Configurar el agente de infraestructura como sidecar [#infra-agent-side-car]

Puede configurar el agente de infraestructura como un [contenedor lateral](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-security-considerations.html) de su agente APM, lo que le proporciona más visibilidad en su entorno. Cuando configura un sidecar para su agente APM, establece una relación entre la aplicación y el monitoreo de infraestructura para que los datos estén correlacionados. Esto muestra datos en varias funciones de mapeo New Relic , como [mapas de servicio](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/service-maps).

<img title="Screenshot showing service map when running language agent and infra agent together in Fargate environment" alt="Service map screenshot running language agent and infra agent together in Fargate environment" src="/images/service-map-screenshot-showing-language-and-infra-agent-in-fargate-env.png" />

<figcaption>
  Este mapa de servicio incluye datos extraídos de un agente APM con un agente secundario de infraestructura en un entorno Fargate.
</figcaption>

## Ejemplo de archivo de definición de tarea [#example-task-definition]

Para configurar el agente de idioma y el agente de infraestructura, actualice el archivo de definición de tarea completo. Por ejemplo:

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

Una vez que modificó su archivo de tarea, active algunos datos en su entorno, espere unos minutos y luego [busque sus datos en la UI](/docs/ecs-integration-understand-use-data).

## ¿Que sigue? [#next-steps]

Luego de configurar su agente:

* Recomendamos instalar nuestra [integración de ECS en la nube](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration), que muestra otros datos de ECS, como datos sobre el clúster y los servicios.

* Revise nuestro documento sobre [condición de alerta](/docs/ecs-integration-recommended-alert-conditions).

* Si desea realizar configuraciones adicionales a su agente APM, consulte su documentación de configuración:

  * [Java](https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/)
  * [.NET](https://docs.newrelic.com/docs/apm/agents/net-agent/configuration/net-agent-configuration/)
  * [Node.js](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
  * [Python](https://docs.newrelic.com/docs/apm/agents/python-agent/configuration/python-agent-configuration/)