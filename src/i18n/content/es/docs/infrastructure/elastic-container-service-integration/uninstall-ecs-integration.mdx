---
title: Desinstalar la integración de ECS
tags:
  - Integrations
  - Elastic Container Service integration
  - Installation
metaDescription: How to uninstall New Relic's on-host Amazon ECS integration.
freshnessValidatedDate: never
translationType: machine
---

[La integración de ECS](/docs/introduction-amazon-ecs-integration) en el host de New Relic informa y muestra datos de rendimiento de su entorno [de Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) . Continúe leyendo para saber cómo desinstalar esta integración.

## Desinstalar

Hay varias opciones de desinstalación, dependiendo de cómo haya [instalado](/docs/install-ecs-integration#install-ec2):

* [Desinstalar con CloudFormation](#cloudformation)
* [Usar scriptde instalación automática](#auto-installer)
* [Desinstalación manual](#manual-uninstall)

### Desinstalación de CloudFormation [#cloudformation]

Para desinstalar la integración de ECS utilizando las plantillas de CloudFormation:

1. Vaya a la [lista de pilas en su consola AWS .](https://console.aws.amazon.com/cloudformation/home?#/stacks?filteringText=&filteringStatus=active&viewNested=true&hideStacks=false)

2. Para cada New Relic stack:

   1. Seleccione la stack
   2. Haga clic en el botón eliminar
   3. Haga clic en el botón Eliminar stack en la ventana emergente de confirmación.

### Desinstalación automática [#auto-installer]

Para desinstalar la integración de ECS usando el script del instalador:

* Para EC2 y tipo de lanzamiento EXTERNO: ejecutar

  ```
  $ ./newrelic-infrastructure-ecs-installer.sh -u -c YOUR_CLUSTER_NAME
  ```

* Para el tipo de lanzamiento de Fargate:

  ```
  $ ./newrelic-infrastructure-ecs-installer.sh -f -u -c YOUR_CLUSTER_NAME
  ```

Solo necesita ejecutar el comando una vez, independientemente de la cantidad de nodos en su clúster. El comando eliminará los [recursos de AWS creados durante el procedimiento de instalación](/docs/install-ecs-integration#aws-resources).

El instalador proporciona un modo de ejecución en seco que le muestra los comandos awscli que se ejecutarán. El modo de ejecución en seco para el proceso de desinstalación se activa pasando el indicador `-d` al comando:

```
$ ./newrelic-infrastructure-ecs-installer.sh -d -u -c YOUR_CLUSTER_NAME
```

### Desinstalación manual

Para desinstalar manualmente, debe eliminar todos los [recursos de AWS](/docs/install-ecs-integration#aws-resources) relacionados con la integración. Para hacer esto:

1. Verifique que su perfil de AWS apunte a la misma región donde se creó su clúster ECS:

   ```
   $ aws configure get region
   us-east-1

   $ aws ecs list-clusters
   YOUR_CLUSTER_ARNS	
   arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

2. Elimine el parámetro Systems Manager (SSM) que almacena la New Relic <InlinePopover type="licenseKey"/>:

   ```
   aws ssm delete-parameter --name "/newrelic-infra/ecs/license-key"
   ```

3. Antes de eliminar la función de IAM, debe desconectar todas sus políticas. Para obtener una lista de las políticas adjuntas:

   ```
   aws iam list-attached-role-policies --role-name "NewRelicECSTaskExecutionRole" --output text
   --query 'AttachedPolicies[*].PolicyArn'
   ```

4. Separe todas las políticas devueltas en el paso anterior del rol de IAM:

   ```
   aws iam detach-role-policy --role-name "NewRelicECSTaskExecutionRole" --policy-arn "POLICY_ARN"
   ```

5. Eliminar la función de IAM:

   ```
   aws iam delete-role --role-name "NewRelicECSTaskExecutionRole"
   ```

6. Elimine la política de IAM `NewRelicSSMLicenseKeyReadAccess`, que otorga acceso a la clave de licencia de System Manager:

   ```
   aws iam delete-policy --policy-arn "POLICY_ARN"
   ```

7. Los pasos restantes son solo para EC2 y tipo de lanzamiento EXTERNO, y no para Fargate:

   1. Eliminar los servicios:

      ```
      aws ecs delete-service --service "newrelic-infra" --cluster "YOUR_CLUSTER_NAME"
      ```

      ```
      aws ecs delete-service --service "newrelic-infra-external" --cluster "YOUR_CLUSTER_NAME"
      ```

   2. Enumere la definición de tarea para la `newrelic-infra` familia de tareas:

      ```
      aws ecs list-task-definitions \
      --family-prefix newrelic-infra \
                  --output text \
                  --query taskDefinitionArns
      ```

   3. Dar de baja las tareas:

      ```
      aws ecs deregister-task-definition --task-definition "TASK_DEFINITION_ARN"
      ```
