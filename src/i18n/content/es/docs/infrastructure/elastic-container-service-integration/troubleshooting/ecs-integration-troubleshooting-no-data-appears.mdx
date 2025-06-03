---
title: 'ECS integración resolución de problemas: No aparecen datos'
type: troubleshooting
tags:
  - Integrations
  - Elastic Container Service integration
  - Troubleshooting
metaDescription: Troubleshooting tips for when New Relic's on-host Amazon ECS integration is not reporting data.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Instalaste nuestra [integración ECS en el host](/docs/introduction-amazon-ecs-integration) y esperaste unos minutos, pero tu clúster no aparece en la [lista de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find).

<Callout variant="important">
  Tenemos dos integraciones ECS: una [integración basada en la nube](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration) y una integración en el host. Este documento trata sobre la integración en el host.
</Callout>

## Solución

Si previamente había instalado el agente de infraestructura o una infraestructura integrada en el host, sus datos deberían aparecer en [la UI](/docs/ecs-integration-understand-use-data) en unos minutos.

Si no había hecho ninguna de esas cosas antes de instalar la integración ECS en el host, los datos pueden tardar decenas de minutos en aparecer en la UI. En ese caso, recomendamos esperar hasta una hora antes de realizar los siguientes pasos de resolución de problemas o contactar al soporte.

Hay varias opciones para la resolución de problemas sin que aparezcan datos:

* [Solucionar problemas a través de la herramienta awscli](#awscli) (recomendado cuando se habla con el soporte técnico de New Relic)
* [Solucionar problemas a través de la UI](#ui)

Para obtener información sobre las tareas detenidas, consulte [Motivos de las tareas detenidas](#stopped-tasks).

### Solucionar problemas a través de awscli [#awscli]

Al interactuar con el soporte de New Relic, utilice este método y envíe los archivos generados con su solicitud de soporte:

1. Recupere la información relacionada con el servicio `newrelic-infra` o el servicio Fargate que contiene una tarea con un sidecar `newrelic-infra` :

   ```
   aws ecs describe-services --cluster YOUR_CLUSTER_NAME --service newrelic-infra > newrelic-infra-service.json
   ```

   ```
   aws ecs describe-services --cluster YOUR_CLUSTER_NAME --service YOUR_FARGATE_SERVICE_WITH_NEW_RELIC_SIDECAR > newrelic-infra-sidecar-service.json
   ```

2. El atributo `failures` detalla cualquier error de los servicios.

3. Debajo de `services` está el atributo `status` . Dice `ACTIVE` si el servicio no tiene problemas.

4. El `desiredCount` debe coincidir con el `runningCount`. Esta es la cantidad de tareas que maneja el servicio. Debido a que utilizamos el tipo de servicio daemon, debería haber una tarea por instancia de contenedor en su clúster. El atributo `pendingCount` debe ser cero, porque todas las tareas deberían estar ejecutándose.

5. Inspeccione el atributo `events` de `services` para comprobar si hay problemas con la programación o el inicio de las tareas. Por ejemplo: si el servicio no puede iniciar las tareas correctamente, mostrará un mensaje como:

   ```
   {
     "id": "5295a13c-34e6-41e1-96dd-8364c42cc7a9",
     "createdAt": "2020-04-06T15:28:18.298000+02:00",
     "message": "(service newrelic-ifnra) is unable to consistently start tasks successfully. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide."
   }
   ```

6. En la misma sección, también puedes ver qué tareas inició el servicio desde el evento:

   ```
   {
     "id": "1c0a6ce2-de2e-49b2-b0ac-6458a804d0f0",
     "createdAt": "2020-04-06T15:27:49.614000+02:00",
     "message": "(service fargate-fail) has started 1 tasks: (task YOUR_TASK_ID)."
   }
   ```

7. Recupere la información relacionada con la tarea con este comando:

   ```
   aws ecs describe-tasks --tasks YOUR_TASK_ID --cluster YOUR_CLUSTER_NAME > newrelic-infra-task.json
   ```

8. El `desiredStatus` y `lastStatus` deberían ser `RUNNING`. Si la tarea no pudo iniciarse normalmente, tendrá un estado `STOPPED` .

9. Inspeccione el `stopCode` y `stoppedReason`. Un ejemplo de motivo: una tarea que no se pudo iniciar porque la función de ejecución de la tarea no tiene los permisos adecuados para descargar el secreto que contiene la clave de licencia tendría el siguiente resultado:

   ```
   "stopCode": "TaskFailedToStart",
   "stoppedAt": "2020-04-06T15:28:54.725000+02:00",
   "stoppedReason": "Fetching secret data from AWS Secrets Manager in region YOUR_AWS_REGION: secret arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:NewRelicLicenseKeySecret-Dh2dLkgV8VyJ-80RAHS-fail: AccessDeniedException: User: arn:aws:sts::YOUR_AWS_ACCOUNT:assumed-role/NewRelicECSIntegration-Ne-NewRelicECSTaskExecution-1C0ODHVT4HDNT/8637b461f0f94d649e9247e2f14c3803 is not authorized to perform: secretsmanager:GetSecretValue on resource: arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:NewRelicLicenseKeySecret-Dh2dLkgV8VyJ-80RAHS-fail-DmLHfs status code: 400, request id: 9cf1881e-14d7-4257-b4a8-be9b56e09e3c",
   "stoppingAt": "2020-04-06T15:28:10.953000+02:00",
   ```

10. Si la tarea se está ejecutando pero aún no ve datos, genere [un registro detallado](/docs/infrastructure/infrastructure-troubleshooting/troubleshoot-logs/infrastructure-agent-logging-behavior) y examínelos en busca de errores.

Para obtener detalles sobre los motivos de las tareas detenidas, consulte [Tareas detenidas](#stopped-tasks).

### Solucionar problemas en la UI [#ui]

Para utilizar la UI para solucionar problemas:

1. Log sesión en su consola AWS y navegue hasta la sección Servicio de contenedor EC2.

2. Haga clic en el clúster donde instaló la integración de New Relic ECS.

3. En la pestaña

   <DNT>
     **Services**
   </DNT>

   , utilice el filtro para buscar el servicio de integración. Si utilizó el script de instalación automática, el nombre del servicio será `newrelic-infra`. Si está utilizando Fargate, será el nombre de su servicio de monitorización. Una vez encontrado, haga clic en el nombre.

4. La página del servicio muestra el

   <DNT>
     **Status**
   </DNT>

   del servicio. Dice `ACTIVE` si el servicio no tiene problemas.

5. En la misma página, el recuento

   <DNT>
     **Desired**
   </DNT>

   debe coincidir con el recuento

   <DNT>
     **Running**
   </DNT>

   . Esta es la cantidad de tareas que maneja el servicio. Debido a que utilizamos el tipo de servicio daemon, debería haber una tarea por instancia de contenedor en su clúster. El recuento pendiente debe ser cero, porque todas las tareas deberían estar ejecutándose.

6. Inspeccione la pestaña

   <DNT>
     **Events**
   </DNT>

   para comprobar si hay problemas con la programación o el inicio de las tareas.

7. En la pestaña

   <DNT>
     **Tasks**
   </DNT>

   de su servicio, puede inspeccionar las tareas en ejecución y las tareas detenidas haciendo clic en el selector

   <DNT>
     **Task status**
   </DNT>

   . El contenedor que no pudo iniciarse se muestra cuando selecciona el estado

   <DNT>
     **Stopped**
   </DNT>

   .

8. Haga clic en una tarea para ir a la página de detalles de la tarea. En

   <DNT>
     **Stopped reason**
   </DNT>

   , muestra un mensaje que explica por qué se detuvo la tarea.

9. Si la tarea se está ejecutando pero aún no ve datos, genere [un registro detallado](/docs/infrastructure/infrastructure-troubleshooting/troubleshoot-logs/infrastructure-agent-logging-behavior) y examínelos en busca de errores.

Para obtener detalles sobre los motivos de las tareas detenidas, consulte [Tareas detenidas](#stopped-tasks).

### Razones de las tareas detenidas [#stopped-tasks]

En la [documentación de resolución de problemasAWS ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/troubleshooting.html) puede encontrar información sobre causas comunes de errores relacionados con la ejecución de tareas y servicios. Consulte a continuación para obtener detalles sobre algunos motivos de las tareas detenidas.

<DNT>
  **Task stopped with reason:**
</DNT>

```
Fetching secret data from AWS Secrets Manager 
  in region YOUR_AWS_REGION: 
  secret arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME: 
  AccessDeniedException: User: arn:aws:sts::YOUR_AWS_ACCOUNT:assumed-role/YOUR_ROLE_NAME 
  is not authorized to perform: secretsmanager:GetSecretValue 
  on resource: arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME 
  status code: 400, request id: 9cf1881e-14d7-4257-b4a8-be9b56e09e3c"
```

Esto significa que la función de IAM especificada con `executionRoleArn` en la definición de tarea no tiene acceso al secreto utilizado para `NRIA_LICENSE_KEY`. La función de ejecución debe tener una política adjunta que le otorgue acceso para leer el secreto.

1. Obtenga el rol de ejecución de su tarea:

   ```
   aws ecs describe-task-definition --task-definition newrelic-infra --output text --query taskDefinition.executionRoleArn
   ```

   Puede reemplazar `--task-definition newrelic-infra` con el nombre de su tarea de fargate que incluye el contenedor sidecar.

   ```
   aws ecs describe-task-definition --task-definition YOUR_FARGATE_TASK_NAME --output text --query taskDefinition.executionRoleArn
   ```

2. Enumere las políticas adjuntas al rol:

   ```
   aws iam list-attached-role-policies --role-name YOUR_EXECUTION_ROLE_NAME
   ```

   Esto debería devolver 3 políticas `AmazonECSTaskExecutionRolePolicy`, `AmazonEC2ContainerServiceforEC2Role` y una tercera que debería otorgar acceso de lectura a <InlinePopover type="licenseKey"/>. En el siguiente ejemplo, la política se denomina `NewRelicLicenseKeySecretReadAccess`.

   ```
   {
     "AttachedPolicies": [
       {
         "PolicyName": "AmazonECSTaskExecutionRolePolicy",
         "PolicyArn": "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
       },
       {
         "PolicyName": "AmazonEC2ContainerServiceforEC2Role",
         "PolicyArn": "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
       },
       {
         "PolicyName": "YOUR_POLICY_NAME",
         "PolicyArn": "arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME"
       }
     ]
   }
   ```

3. Recupere la versión de política predeterminada:

   ```
   aws iam get-policy-version --policy-arn arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME --version-id $(aws iam get-policy --policy-arn arn:aws:iam::YOUR_AWS_ACCOUNT:policy/YOUR_POLICY_NAME --output text --query Policy.DefaultVersionId)
   ```

   Esto recupera los permisos de la política. Debería haber una entrada para Acción`secretsmanager:GetSecretValue` si usó AWS Secrets Manager para almacenar su <InlinePopover type="licenseKey"/>, o una entrada para `ssm:GetParameters`si usó el parámetro Store AWS Systems Manager:

   <CollapserGroup>
     <Collapser
       id="aws-secrets-manager"
       title="Administrador de secretos de AWS"
     >
       ```
       {
         "PolicyVersion": {
           "Document": {
             "Version": "2012-10-17",
             "Statement": [
               {
                 "Action": "secretsmanager:GetSecretValue",
                 "Resource": "arn:aws:secretsmanager:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:secret:YOUR_SECRET_NAME",
                 "Effect": "Allow"
               }
             ]
           },
           "VersionId": "v1",
           "IsDefaultVersion": true,
           "CreateDate": "2020-03-31T13:47:07+00:00"
         }
       }
       ```
     </Collapser>

     <Collapser
       id="aws-systems-manager-parameter-store"
       title="Tienda de parámetros AWS Systems Manager"
     >
       ```
       {
         "Version": "2012-10-17",
         "Statement": [
           {
             "Action": "ssm:GetParameters",
             "Resource": [
               "arn:aws:ssm:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT:parameter/YOUR_SECRET_NAME"
             ],
             "Effect": "Allow"
           }
         ]
       }
       ```
     </Collapser>
   </CollapserGroup>
