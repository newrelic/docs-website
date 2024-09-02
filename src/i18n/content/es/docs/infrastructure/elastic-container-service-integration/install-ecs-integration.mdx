---
title: Instalar la integración ECS
tags:
  - Integrations
  - Elastic Container Service integration
  - Installation
metaDescription: How to install New Relic's Amazon ECS integration.
freshnessValidatedDate: never
translationType: machine
---

La integración ECS de New Relic informa y muestra datos de rendimiento de su entorno Amazon ECS.

## Descripción general de la instalación [#overview]

Antes de [instalar](#install-options), puede ayudarle a comprender en un alto nivel cómo nuestro agente de infraestructura (`newrelic-infra`) se implementa para estos dos tipos de lanzamiento:

* <DNT>
    **EC2 and EXTERNAL (ECS Anywhere) launch type:**
  </DNT>

  Nuestro agente se implementa en un clúster ECS como servicio utilizando la estrategia de programación daemon ([explicada aquí en los documentos AWS ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html)). Esto instala el agente en todas las instancias EC2 del clúster, y luego monitorea ECS y el contenedor Docker .

* <DNT>
    **AWS Fargate launch type:**
  </DNT>

  En cada tarea a monitor, nuestro agente consigue desplegarse como sidecar. Opcional: [obtenga más información sobre cómo AWS define un sidecar](https://aws.github.io/copilot-cli/docs/developing/sidecars/).

## Opciones de instalación [#install-options]

Elija la instalación que desee:

* [Instalar usando AWS CloudFormation](#cloud-formation-install)
* [Instalar usando script automático](#auto-script-install)
* [Instalar manualmente](#manual-install)

## Instalar usando CloudFormation [#cloud-formation-install]

Para ayudarle a realizar la instalación mediante AWS CloudFormation, proporcionamos algunas plantillas de CloudFormation que instalan la integración de ECS en su cuenta de AWS para los tipos de lanzamiento EC2, EXTERNO (ECS Anywhere) y AWS Fargate.

Para instalar usando CloudFormation:

1. Para registrar la tarea de integración de ECS, despliegue [esta stack](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/task/master.yaml&stackName=NewRelicECSIntegration). Asegúrese de desplegar la stack en las regiones deseadas. Esta stack crea los siguientes recursos:

   * Un secreto que almacena la New Relic

     <InlinePopover type="licenseKey"/>

     .

   * Una política para acceder a la clave de licencia.

   * Un rol de instancia que se utilizará como tarea de ECS `ExecutionRole`, con acceso a la clave de licencia.

   * Para tipo de lanzamiento EC2 y externo (ECS Anywhere): registra la tarea de integración ECS New Relic Infrastructure .

2. Siga las instrucciones adicionales para su tipo de lanzamiento:

   <CollapserGroup>
     <Collapser
       id="ec2-cloudformation"
       title="Tipo de lanzamiento EC2"
     >
       Para crear un servicio que ejecute la tarea en cada instancia de contenedor EC2, despliegue [esta stack](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/service.yaml&NewRelicInfraTaskVersion=1).

       Seleccione el tipo de lanzamiento EC2. Luego se creará un servicio llamado `newrelic-infra` en el clúster.
     </Collapser>

     <Collapser
       id="external-cloudformation"
       title="Tipo de lanzamiento externo (ECS Anywhere)"
     >
       Para crear un servicio que ejecute la tarea en cada instancia de contenedor externo, despliegue [esta stack](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://nr-downloads-main.s3.amazonaws.com/infrastructure_agent/integrations/ecs/cloudformation/service.yaml&NewRelicInfraTaskVersion=1).

       Seleccione el tipo de lanzamiento EXTERNO. Luego se creará un servicio llamado `newrelic-infra-external` en el clúster.
     </Collapser>

     <Collapser
       id="fargate-cloudformation"
       title="Tipo de lanzamiento de AWS Fargate"
     >
       1. Descargue el ejemplo de definición de tarea con el contenedor sidecar a desplegar:

          ```
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
          ```

          <Callout variant="tip">
            Para Graviton, reemplace `"cpuArchitecture": "X86_64"` con `"cpuArchitecture": "ARM64"`.
          </Callout>

       2. Agregue el contenedor `newrelic-infra` en esta definición de tarea como complemento a las definiciones de tareas que desea monitor. En esta tarea de ejemplo, el contenedor de su aplicación reemplaza el marcador de posición `busybox` contenedor.
     </Collapser>
   </CollapserGroup>

Cuando haya terminado, consulte [Próximos pasos](#next-steps).

## Instalar con script automático [#auto-script-install]

Una [opción de instalación](#install-overview) es utilizar nuestro script de instalación. Para utilizar el script de instalación automática:

1. Descargue el instalador de integración de ECS:

   ```
   curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-installer.sh
   ```

2. Agregue permisos de ejecución al instalador:

   ```
   chmod +x newrelic-infra-ecs-installer.sh
   ```

3. Ejecútelo con `-h` para ver la documentación y requisitos:

   ```
   ./newrelic-infra-ecs-installer.sh -h
   ```

4. Verifique que su perfil de AWS apunte a la misma región donde se creó su clúster ECS:

   ```
   $ aws configure get region
   us-east-1

   $ aws ecs list-clusters
   YOUR_CLUSTER_ARNS 	
   arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

5. Ejecute el instalador, especificando su <InlinePopover type="licenseKey"/>y el nombre del clúster.

   <CollapserGroup>
     <Collapser
       id="auto-script-ec2"
       title="Tipo de lanzamiento EC2"
     >
       ```
       ./newrelic-infra-ecs-installer.sh -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY
       ```
     </Collapser>

     <Collapser
       id="auto-script-external"
       title="Tipo de lanzamiento externo (ECS Anywhere)"
     >
       ```
       ./newrelic-infra-ecs-installer.sh -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY -e
       ```
     </Collapser>

     <Collapser
       id="auto-script-fargate"
       title="Tipo de lanzamiento de AWS Fargate"
     >
       ```
       ./newrelic-infra-ecs-installer.sh -f -c YOUR_CLUSTER_NAME -l YOUR_LICENSE_KEY
       ```
     </Collapser>
   </CollapserGroup>

6. Pasos adicionales para el tipo de lanzamiento Fargate (no el tipo de lanzamiento EC2):

   * Descargue el ejemplo de definición de tarea con el contenedor sidecar a desplegar:

     ```
     curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
     ```

     <Callout variant="tip">
       Para Graviton, reemplace `"cpuArchitecture": "X86_64"` con `"cpuArchitecture": "ARM64"`.
     </Callout>

     Tenga en cuenta que el `NewRelicECSTaskExecutionRole` recién creado debe usarse como función de ejecución de la tarea. Políticas adjuntas al rol (Todos los tipos de lanzamiento):

     * NewRelicSSMLicenseKeyReadAccess que permite acceder al parámetro SSM con la clave de licencia.
     * AmazonECSTaskExecutionRolePolicy

   * Luego, puede agregar el contenedor que desea monitor como sidecar.

Cuando haya terminado, consulte [Próximos pasos](#next-steps).

## Manual de instalación

Una [opción de instalación](#install-overview) es realizar manualmente los pasos que realiza el [script del instalador automático](#auto-script-install). Describiremos cómo se hace esto usando la herramienta `awscli` :

1. Verifique que su perfil de AWS apunte a la misma región donde se creó su clúster ECS:

   ```
   $ aws configure get region
   us-east-1

   $ aws ecs list-clusters
   YOUR_CLUSTER_ARNS
   arn:aws:ecs:us-east-1:YOUR_AWS_ACCOUNT:cluster/YOUR_CLUSTER
   ```

2. Guarde su <InlinePopover type="licenseKey"/>como parámetro de Systems Manager (SSM):

   ```
   aws ssm put-parameter \
     --name "/newrelic-infra/ecs/license-key" \
     --type SecureString \
     --description 'New Relic license key for ECS monitoring' \
     --value "NEW_RELIC_LICENSE_KEY"
   ```

3. Cree una política de IAM para acceder al parámetro de clave de licencia:

   ```
   aws iam create-policy \
   	--policy-name "NewRelicSSMLicenseKeyReadAccess" \
    --policy-document "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":[\"ssm:GetParameters\"],\"Resource\":[\"ARN_OF_LICENSE_KEY_PARAMETER\"]}]}" \
   	--description "Provides read access to the New Relic SSM license key parameter"
   ```

4. Cree una función de IAM para utilizarla como función de ejecución de tareas:

   ```
   aws iam create-role \
     --role-name "NewRelicECSTaskExecutionRole" \
     --assume-role-policy-document '{"Version":"2008-10-17","Statement":[{"Sid":"","Effect":"Allow","Principal":{"Service":"ecs-tasks.amazonaws.com"},"Action":"sts:AssumeRole"}]}' \
     --description "ECS task execution role for New Relic infrastructure"
   ```

5. Adjunte las políticas `NewRelicSSMLicenseKeyReadAccess` y `AmazonECSTaskExecutionRolePolicy` al rol:

   ```
   aws iam attach-role-policy \
     	--role-name "NewRelicECSTaskExecutionRole" \
     	--policy-arn "POLICY_ARN"
   ```

6. Elija su tipo de lanzamiento para obtener más instrucciones:

   <CollapserGroup>
     <Collapser
       id="manual-ec2"
       title="Tipo de lanzamiento EC2 y EXTERNO (ECS Anywhere)"
     >
       Pasos adicionales para el tipo de lanzamiento EC2:

       1. Descargue el archivo de plantilla de definición de tarea de integración de New Relic ECS:

          ```
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-ec2-latest.json
          ```

       2. Reemplace la función de ejecución de tareas en el archivo de plantilla con la función recién creada:

          ```
          "executionRoleArn": "NewRelicECSTaskExecutionRole",
          ```

       3. Reemplace el atributo `valueFrom` de `secret` con el nombre del parámetro de Systems Manager:

          ```
          secrets": [
            {
              "valueFrom": "/newrelic-infra/ecs/license-key",
              "name": "NRIA_LICENSE_KEY"
            }
          ],
          ```

       4. Registre el archivo de definición de tarea:

          ```
          aws ecs register-task-definition --cli-input-json file://newrelic-infra-ecs-ec2-latest.json
          ```

       5. Cree un servicio con la estrategia [de programacióndaemon ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)para la tarea registrada:

          Para el tipo de lanzamiento EC2:

          ```
          aws ecs create-service --cluster "YOUR_CLUSTER_NAME" --service-name "newrelic-infra" --task-definition "newrelic-infra" --scheduling-strategy DAEMON --launch-type EC2
          ```

          Para el tipo de lanzamiento EXTERNO (ECS Anywhere):

          ```
          aws ecs create-service --cluster "YOUR_CLUSTER_NAME" --service-name "newrelic-infra-external" --task-definition "newrelic-infra" --scheduling-strategy DAEMON --launch-type EXTERNAL
          ```
     </Collapser>

     <Collapser
       id="manual-fargate"
       title="Tipo de lanzamiento de AWS Fargate"
     >
       Pasos adicionales para el tipo de lanzamiento de AWS Fargate:

       1. Descargue el ejemplo de definición de tarea con el contenedor sidecar a desplegar:

          ```
          curl -O https://download.newrelic.com/infrastructure_agent/integrations/ecs/newrelic-infra-ecs-fargate-example-latest.json
          ```

          <Callout variant="tip">
            Para Graviton, reemplace `"cpuArchitecture": "X86_64"` con `"cpuArchitecture": "ARM64"`.
          </Callout>

       2. Agregue el contenedor `newrelic-infra` en esta definición de tarea como complemento a las definiciones de tareas que desea monitor. En esta tarea de ejemplo, el contenedor de su aplicación reemplaza el marcador de posición `busybox` contenedor.
     </Collapser>
   </CollapserGroup>

Cuando haya terminado, consulte [Próximos pasos](#next-steps).

<InstallFeedback/>

## Siguientes pasos después de la instalación [#next-steps]

Después de haber instalado esta integración:

* Espere unos minutos y luego [busque sus datos en la UI](/docs/ecs-integration-understand-use-data).
* Recomendado: Instale nuestra [integración ECS en la nube](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ecsecr-monitoring-integration), que le brinda otros datos de ECS, incluida información sobre el clúster y los servicios.
* Ver [condición de alerta recomendada](/docs/ecs-integration-recommended-alert-conditions).
* Comprenda los [recursos de AWS](#aws-resources) creados por este proceso.

## Recursos de AWS creados [#aws-resources]

Cuando instala la integración de ECS utilizando valores predeterminados/recomendados, hace lo siguiente en AWS:

* Crea el parámetro `/newrelic-infra/ecs/license-key` del Administrador de sistemas (SSM). Este parámetro del sistema contiene la New Relic

  <InlinePopover type="licenseKey"/>

  .

* Crea la política de IAM `NewRelicSSMLicenseKeyReadAccess`, que permite el acceso al parámetro SSM con la clave de licencia.

* Crea el rol de IAM `NewRelicECSTaskExecutionRole` utilizado como [rol de ejecución de tareas](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html). Políticas adjuntas al rol:

  * `NewRelicSSMLicenseKeyReadAccess` (creado por el instalador).
  * `AmazonECSTaskExecutionRolePolicy`

* Registra la `newrelic-infra` definición de tarea ECS para los tipos de lanzamiento EC2 y externo (ECS Anywhere).

* Para [el tipo de lanzamiento](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) EC2, esto también se hace:

  * Crea el servicio `newrelic-infra` para la tarea registrada utilizando una estrategia [de programacióndaemon ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)y un tipo de lanzamiento EC2.

* Para [el tipo de lanzamiento](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) EXTERNO (ECS Anywhere), esto también se hace:

  * Crea el servicio `newrelic-infra-external` para la tarea registrada utilizando una estrategia [de programación daemon ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)y un tipo de lanzamiento EXTERNO (ECS Anywhere).
