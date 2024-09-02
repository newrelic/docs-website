---
title: 'ECS integración resolución de problemas: Generar registro detallado'
type: troubleshooting
tags:
  - Integrations
  - Elastic Container Service integration
  - Troubleshooting
metaDescription: How to generate verbose logs to troubleshoot the New Relic on-host Amazon ECS integration.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Cuando [se resuelven problemas con la integración ECS en el host](/docs/ecs-integration-no-data-appears), puede generar un registro detallado durante unos minutos para encontrar e investigar errores. Esto puede ser útil para llevar a cabo su propia resolución de problemas o cuando proporcione información al [soporte New Relic ](https://support.newrelic.com/).

El registro detallado genera una gran cantidad de datos muy rápidamente. Cuando termine de generar el registro, asegúrese de configurar `verbose: 0` para reducir el consumo de espacio en disco.

Puede automatizar este proceso utilizando el comando `newrelic-infra-ctl` . Para obtener más información, consulte [resolución de problemas a agente en ejecución](/docs/infrastructure/install-configure-manage-infrastructure/manage-your-agent/troubleshoot-running-agent).

## Solución

Para generar un archivo de registro detallado es necesario editar el archivo de definición de tarea. Para obtener un archivo de configuración de muestra que incluye todas las configuraciones aplicables, consulte [Configuración de infraestructura](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings).

Tiene varias opciones para implementar el registro detallado:

* [Cambie la variable de entorno de definición de tarea y reinicie la tarea](#env-variable)
* Para tipo de lanzamiento EC2: [Recuperar registro vía SSH](#retrieve-logs-via-ssh)
* [Reenviar a CloudWatch y descargar con awscli](#forward-logs-cloudwatch)
* [Ejecute un comando desde el contenedor en ejecución](#running-container)

### Usando la variable de entorno de definición de tarea [#env-variable]

Para habilitar el registro detallado cambiando la variable de entorno y reiniciando la tarea:

1. Edite la definición de su tarea. Cambie el valor de `NRIA_VERBOSE` de `0` a:

   * `1` para un registro detallado siempre activo
   * `2` para registro inteligente
   * `3` para enviar a New Relic

   Lea [más sobre estas opciones](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#verbose).

2. Guarde la definición de su tarea.

3. Actualice su servicio para utilizar la definición de tarea recién registrada.

4. Si elige `NRIA_VERBOSE=3` y no envía el registro directamente a New Relic, tiene dos opciones para ver y descargar el registro:

   * Para el tipo de lanzamiento EC2: puede [recuperar el registro a través de SSH](#retrieve-logs-via-ssh), o
   * [Reenviar registro a CloudWatch](#forward-logs-cloudwatch)

5. Restablezca su configuración predeterminada:

   1. Deshabilite el registro detallado editando la definición de su tarea y configurando `NRIA_VERBOSE` en `0`.
   2. Guarde la definición de su tarea.
   3. Actualice su servicio a la última versión de su tarea.

6. Examine el archivo de registro en busca de errores.

7. Si necesita enviar su archivo de registro al [soporte New Relic ](https://support.newrelic.com/):

   1. Incluya la línea en su archivo de registro que contiene la versión de integración de ECS:

      ```
      New Relic ECS integration version X.YY.ZZZ
      ```

   2. Adjunte el archivo de registro a su ticket de soporte, junto con la definición de su tarea .yml archivo.

### Recuperar registro a través de SSH (solo tipo de lanzamiento EC2) [#retrieve-logs-via-ssh]

Para obtener el registro a través de SSH:

1. Edite la definición de su tarea. Cambie el valor de `NRIA_VERBOSE` de `0` a:

   * `1` para un registro detallado siempre activo
   * `2` para registro inteligente
   * `3` para enviar a New Relic

   Lea [más sobre estas opciones](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#verbose).

2. SSH en una de sus instancias de contenedor.

3. Encuentre el ID del contenedor de integración New Relic ejecutando el comando `docker ps -a`. El nombre del contenedor debe ser `nri-ecs`.

4. Guarde el registro del contenedor con el comando `docker logs NRI_ECS_CONTAINER_ID > logs.txt`. Deje el comando ejecutándose durante unos tres minutos para generar suficientes datos de registro.

5. Continúe con las instrucciones en la sección [habilitar registro detallado](#env-variable) .

### Reenvíe el registro a CloudWatch y descárguelo con awscli [#forward-logs-cloudwatch]

Para obtener el registro a través de CloudWatch:

1. Edite la definición de su tarea. Cambie el valor de `NRIA_VERBOSE` de `0` a:

   * `1` para un registro detallado siempre activo
   * `2` para registro inteligente
   * `3` para enviar a New Relic

   Lea [más sobre estas opciones](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#verbose).

2. Usamos un grupo log de CloudWatch llamado `/newrelic-infra/ecs` para reenviar el registro. Para ver si ya existe, ejecute:

   ```
   aws logs describe-log-groups --log-group-name-prefix /newrelic-infra/ecs
   ```

   Si existe un grupo log con ese prefijo, obtendrá este resultado:

   ```
   {
     "logGroups": [
       {
         "logGroupName": "/newrelic-infra/ecs",
         "creationTime": 1585828615225,
         "metricFilterCount": 0,
         "arn": "arn:aws:logs:YOUR_REGION:YOUR_AWS_ACCOUNT:log-group:/newrelic-infra/ecs:*",
         "storedBytes": 122539356
       }
     ]
   }
   ```

   Debido a que este comando hace coincidir grupos log con prefijos, asegúrese de que el nombre del grupo log devuelto sea exactamente `/newrelic-infra/ecs`. Si el grupo log no existe, el resultado será:

   ```
   {
     "logGroups": []
   }
   ```

3. Si el grupo log no existe, créelo ejecutando:

   ```
   aws logs create-log-group --log-group-name /newrelic-infra/ecs
   ```

4. Edite la definición de su tarea. En la definición de contenedor para el contenedor `newrelic-infra`, agregue lo siguiente `logConfiguration`:

   ```
   "logConfiguration": {
     "logDriver": "awslogs",
     "options": {
       "awslogs-group": "/newrelic-infra/ecs",
       "awslogs-region": "AWS_REGION_OF_YOUR_CLUSTER",
       "awslogs-stream-prefix": "verbose"
     }
   }
   ```

5. Registra la nueva versión de la tarea y actualiza tu servicio.

6. A continuación buscará el flujo log relevante. Si tiene varias instancias de la tarea en ejecución, todas enviarán su registro al mismo grupo log, pero cada una tendrá su propio flujo log . Los nombres de las secuencias log siguen la estructura `AWSLOGS_STREAM_PREFIX/TASK_FAMILY_NAME/TASK_ID`. En este caso, será `verbose/newrelic-infra/TASK_ID`.

   Para obtener todas las secuencias log de un grupo log determinado, ejecute este comando:

   ```
   aws logs describe-log-streams --log-group-name /newrelic-infra/ecs
   ```

   El siguiente es un ejemplo de salida de un grupo log con dos flujos:

   ```
   {
       "logStreams": [
           {
               "logStreamName": "verbose/newrelic-infra/9dfb28114e40415ebc399ec1e53a21b7",
               "creationTime": 1586166741197,
               "firstEventTimestamp": 1586166742030,
               "lastEventTimestamp": 1586173933472,
               "lastIngestionTime": 1586175101220,
               "uploadSequenceToken": "49599989655680038369205623273330095416487086853777112338",
               "arn": "arn:aws:logs:AWS_REGION_OF_YOUR_CLUSTER:YOUR_AWS_ACCOUNT:log-group:/newrelic-infra/ecs:log-stream:verbose/newrelic-infra/9dfb28114e40415ebc399ec1e53a21b7",
               "storedBytes": 0
           },
           {
               "logStreamName": "verbose/newrelic-infra/f6ce0be416804bc4bfa658da5514eb00",
               "creationTime": 1586166745643,
               "firstEventTimestamp": 1586166746491,
               "lastEventTimestamp": 1586173037927,
               "lastIngestionTime": 1586175100660,
               "uploadSequenceToken": "49605664273821671319096446647846424799651902350804230514",
               "arn": "arn:aws:logs:AWS_REGION_OF_YOUR_CLUSTER:YOUR_AWS_ACCOUNT:log-group:/newrelic-infra/ecs:log-stream:verbose/newrelic-infra/f6ce0be416804bc4bfa658da5514eb00",
               "storedBytes": 0
           }
       ]
   }
   ```

7. De la lista anterior de secuencias log, identifique aquella con el ID de tarea para la cual desea recuperar el registro y use logStreamName en este comando:

   ```
   aws logs get-log-events --log-group-name /newrelic-infra/ecs --log-stream-name "LOG_STREAM_NAME" --output text > logs.txt
   ```

8. Continúe con las instrucciones [detalladas para habilitar el registro](#env-variable) .

### Desde el contenedor en ejecución [#running-container]

Para habilitar el registro detallado ejecutando un comando desde el contenedor en ejecución:

1. SSH en una de sus instancias de contenedor.

2. Encuentre el ID del contenedor de integración New Relic ejecutando el comando `docker ps -a`. El nombre del contenedor debe ser `nri-ecs`.

3. Habilite el registro detallado durante un período de tiempo limitado mediante `newrelic-infra-ctl`. Ejecute el comando:

   ```
   docker exec INTEGRATION_CONTAINER_ID /usr/bin/newrelic-infra-ctl
   ```

   Para obtener más detalles, consulte [Solucionar problemas del agente](/docs/infrastructure/install-configure-manage-infrastructure/manage-your-agent/troubleshoot-running-agent).

4. Guarde el registro del contenedor con el comando

   ```
   docker logs INTEGRATION_CONTAINER_ID > logs.txt
   ```

   Deje el comando ejecutándose durante unos tres minutos para generar suficientes datos de registro.

5. Examine el archivo de registro en busca de errores.

Si necesita enviar su archivo de registro al [soporte New Relic ](https://support.newrelic.com/):

1. Incluya la línea en su archivo de registro que contiene la versión de integración de ECS:

   ```
   New Relic ECS integration version X.YY.ZZZ
   ```

2. Adjunte el archivo de registro a su ticket de soporte, junto con la definición de su tarea .yml archivo.
