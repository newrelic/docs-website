---
title: Introducción al monitoreo de AWS Lambda
metaDescription: This provides an overview of New Relic's AWS Lambda monitoring and details how to link your accounts.
freshnessValidatedDate: never
translationType: machine
---

A medida que su organización realiza la transición a una arquitectura de función como servicio (FaaS) con AWS Lambda, comprender y optimizar el rendimiento de la función se vuelve fundamental para garantizar una experiencia del usuario fluida y eficiente. Cada invocación de Lambda representa un posible cuello de botella u oportunidad de mejora.

La instrumentación de New Relic para AWS Lambda proporciona una visibilidad profunda del funcionamiento interno de sus funciones. Al agregar el agente New Relic a su función, cada vez que se invoca su función, New Relic también lo hace. Puede obtener información valiosa sobre métricas de rendimiento clave, como duración, arranques en frío, excepciones y rastreos.

Este documento explicará la arquitectura de monitoreo Lambda de New Relic y lo guiará en el proceso de vinculación de sus cuentas de AWS y New Relic. Deberá vincular sus cuentas antes de implementar sus funciones.

## Cómo funciona la instrumentación Lambda [#how]

Estos son los elementos esenciales de la instrumentación de AWS Lambda con New Relic:

* **Tu función**: Tu función es el código que deseas comprender. Quiere saber cuándo encuentra errores, por qué es lento o con qué frecuencia se invoca.
* **El agente o SDK de New Relic **: Dependiendo del idioma en el que esté escrita su función, New Relic proporciona diferentes agentes o SDK. Su trabajo es hacer el monitoreo real de su código. Mide la duración de las invocaciones de funciones, anota los errores que se producen, registra detalles sobre el evento fuente y las respuestas de las funciones. Para hacer esto, debe ajustar a la función del controlador de invocación de Lambda.
* **La extensión New Relic Lambda**: cuando implemente la extensión New Relic Lambda en su función, se ejecutará dentro del entorno de ejecución de Lambda, junto con su código. Mejora la telemetría que el agente recopila y la envía al backend de New Relic en lotes. También puede enviar el log de su función a New Relic. No necesita la extensión Lambda para monitor su función con New Relic.

## Elige tu método de envío [#method]

Hay tres formas de enviar su telemetría AWS Lambda de New Relic. El método de envío que elija dependerá de sus necesidades de datos.

<img
  title="shipping methods"
  alt="A screenshot depicting the different shipping methods for Lambda"
  src="/images/serverless_diagram_shipping-methods.webp"
/>

* **Costo**: la forma más rentable de emplear AWS Lambda es mediante el uso de cualquiera de nuestras capas, que incluyen la extensión Lambda. De forma predeterminada, nuestra extensión nunca envía datos a AWS CloudWatch.
* **Confiabilidad**: puede enviar sus datos únicamente a través de CloudWatch. Para hacer esto, deshabilitará la extensión New Relic Lambda. Esto significa que su función Lambda será más liviana y no tendrá ningún proceso adicional para ejecutar cuando se invoque. En este caso, el log y la carga se enviarán a New Relic a través de CloudWatch y no a través de la extensión.
* **Lo mejor de ambos mundos**: el uso de la extensión con AWS CloudWatch como alternativa ayuda a mantener bajos los costos y, al mismo tiempo, brinda seguridad en caso de que haya un problema con la extensión.

Le mostraremos cómo instrumentar su función Lambda usando cada método en nuestros documentos de instrumentación:

* [instrumento tu función contenedorizada Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/containerized-images/)
* [instrumento tu función Lambda no contenedorizada](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/instrument-your-own/)
* [instrumento tu función sin capas Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/enable-serverless-monioring-lambda-monitoring-layerless/)

## Antes de que empieces [#begin]

Antes de habilitar el monitoreo sin servidor usando nuestra capa Lambda, necesitará:

1. Una cuenta de New Relic con función de administrador o con el **Infrastructure manager** [rol complementario](/docs/accounts/original-accounts-billing/original-users-roles/users-roles-original-user-model#add-on).

2. Un

   <InlinePopover type="userKey"/>

   .

3. Una cuenta de AWS con permisos para crear recursos de IAM, secretos administrados y Lambdas. También necesita permisos para crear una pila de CloudFormation y depósitos de S3.

Luego deberás completar lo siguiente:

1. Instale la configuración[de AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) usando `aws configure`. Necesitará un ID de clave de acceso de AWS y una clave de acceso secreta de AWS.

2. Instale [Python](https://www.python.org/downloads/) versión 3.3 o superior.

3. Instale la [CLI newrelic-lambda](https://github.com/newrelic/newrelic-lambda-cli#installation). Para instalar, ejecute lo siguiente:

   ```brew
       pip3 install newrelic-lambda-cli
   ```

4. De forma predeterminada, empleamos la política gestionada de AWS `ReadOnlyAccess`. Esto permite que la integración de infraestructura vea todos los recursos de su cuenta, en lugar de solo su función Lambda y métricas de CloudWatch. New Relic recomienda este valor predeterminado, pero entendemos que algunas organizaciones prefieren una postura de seguridad estricta para la integración de terceros. Si desea limitar el acceso de New Relic, se puede otorgar la función de IAM con un mínimo de estas licencias:

```yaml
    Resource: "*"
    Action:
    - "cloudwatch:GetMetricStatistics"
    - "cloudwatch:ListMetrics"
    - "cloudwatch:GetMetricData"
    - "lambda:GetAccountSettings"
    - "lambda:ListFunctions"
    - "lambda:ListAliases"
    - "lambda:ListTags"
    - "lambda:ListEventSourceMappings"
```

5. Antes de ejecutar la CLI, deberá otorgar a New Relic un mínimo de estas licencias en AWS:

```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "CLIAccessPolicy",
                "Action": [
                    "cloudformation:CreateChangeSet",
                    "cloudformation:CreateStack",
                    "cloudformation:DescribeStacks",
                    "cloudformation:ExecuteChangeSet",
                    "iam:AttachRolePolicy",
                    "iam:CreateRole",
                    "iam:GetRole",
                    "iam:PassRole",
                    "lambda:AddPermission",
                    "lambda:CreateFunction",
                    "lambda:GetFunction",
                    "logs:DeleteSubscriptionFilter",
                    "logs:DescribeSubscriptionFilters",
                    "logs:PutSubscriptionFilter",
                    "s3:GetObject",
                    "serverlessrepo:CreateCloudFormationChangeSet",
                    "secretsmanager:CreateSecret"
                ],
                "Effect": "Allow",
                "Resource": "*"
            },
            {
                "Sid": "NRLogAccessPolicy",
                "Effect": "Allow",
                "Action": [
                    "serverlessrepo:CreateCloudFormationTemplate",
                    "serverlessrepo:GetCloudFormationTemplate"
                ],
                "Resource": "arn:aws:serverlessrepo:us-east-1:463657938898:applications/NewRelic-log-ingestion"
            }
        ]
    }
```

Si desea obtener más información sobre nuestra CLI, consulte [nuestro repositorio de CLI](https://github.com/newrelic/newrelic-lambda-cli#installation).

## Tiempos de ejecución de lenguaje AWS Lambda recomendados [#recommended]

Recomendamos los siguientes tiempos de ejecución:

* Nodo.js: `nodejs16.x`, `nodejs18.x`, `nodejs20.x`
* Python: `python3.8`, `python3.9`, `python3.10`, `python3.11`, `python3.12`
* Go: `provided.al2`
* Java: `java8.al2`, `java11`, `java17`
* Ruby: `ruby3.2`, `ruby3.3`
* .NET: `dotnet6`, `dotnet8`

## Considere los costos [#costs]

Habilitar el monitoreo sin servidor para AWS Lambda puede generar cargos por Amazon Sitio web Services. Nuestra `newrelic-log-ingestion` función Lambda, que nos informa sus datos Lambda, se considera un [Servicio de terceros](/docs/licenses/license-information/acceptable-use-policy/acceptable-use-policy): los cargos AWS resultantes de su uso son su responsabilidad.

Si emplea la [extensión Lambda](https://github.com/newrelic/newrelic-lambda-extension), puede evitar el cargo por ingesta de logs de CloudWatch para la telemetría recopilada por New Relic.

## Vincule sus cuentas de AWS y New Relic [#link]

Antes de poder instrumentar su función, deberá vincular su cuenta AWS a New Relic. Al vincular cuentas, le otorga licencia New Relic para crear un inventario de su cuenta AWS y recopilar automáticamente métricas de CloudWatch para su función Lambda. Una vez que vinculó las cuentas, los recursos de su cuenta AWS aparecerán como entidad en el explorador de entidades.

<Steps>
  <Step>
    ## Capa Lambda de instrumento New Relic con la CLI `newrelic-lambda`

    Para instrumentar la capa Lambda de New Relic, ejecute:

    ```bash
    newrelic-lambda integrations install --nr-account-id YOUR_NR_ACCOUNT_ID
    --nr-api-key YOUR_NEW_RELIC_USER_KEY
    ```

    La CLI `newrelic-lambda` agrega New Relic como secreto en [AWS Secret Manager](https://aws.amazon.com/secrets-manager/) para mayor seguridad.
  </Step>

  <Step>
    ## Instalar arroyos métricos [#metric-streams]

    Para que New Relic monitor su función Lambda, deberá instalar [métrica Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream) o [API Polling](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring). Recomendamos usar métrica Streams pero también puedes dejar que la CLI instale automáticamente la integración API Polling por ti.

    Si desea emplear métrica Streams, instálelo ahora antes de ejecutar la CLI. Puede instalarlo empleando nuestra [integración Connect AWS empleando la documentación de métrica Streams](docs/infrastructure/amazon-integrations/connect/aws-metric-stream/) .
  </Step>

  <Step>
    ## Variables de entorno [#environment]

    Cuando instrumenta la capa Lambda de New Relic con la CLI, sus variables de entorno se configurarán automáticamente. Es posible que desee cambiar algunas de las configuraciones predeterminadas y configurar su función Lambda con las variables de entorno que coincidan con sus necesidades de monitoreo. Elija su tiempo de ejecución para ver las variables de entorno disponibles y nuestras recomendaciones para la configuración predeterminada.

    <CollapserGroup>
      <Collapser
        id="go"
        title="Go"
      >
        <table>
          <thead>
            <tr>
              <th>
                Variable ambiental
              </th>

              <th>
                Valor por defecto
              </th>

              <th>
                Opciones
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `NEW_RELIC_ACCOUNT_ID`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_TRUSTED_ACCOUNT_KEY`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic o ID de padre, si existe
              </td>
            </tr>
          </tbody>
        </table>
      </Collapser>

      <Collapser
        id="java"
        title="Seguimiento abierto de Java"
      >
        <table>
          <thead>
            <tr>
              <th>
                Variable ambiental
              </th>

              <th>
                Valor por defecto
              </th>

              <th>
                Opciones
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `NEW_RELIC_ACCOUNT_ID`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_TRUSTED_ACCOUNT_KEY`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic o ID de padre, si existe
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Activar o desactivar rastreo distribuido
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_PRIMARY_APPLICATION_ID`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_DEBUG`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Nivel de agente de logs
              </td>
            </tr>
          </tbody>
        </table>
      </Collapser>

      <Collapser
        id="node-js"
        title="Node.js"
      >
        <table>
          <thead>
            <tr>
              <th>
                Variable ambiental
              </th>

              <th>
                Valor por defecto
              </th>

              <th>
                Opciones
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `NEW_RELIC_ACCOUNT_ID`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_TRUSTED_ACCOUNT_KEY`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic o ID de padre, si existe
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Activar o desactivar rastreo distribuido (excluido Java)
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_NO_CONFIG_FILE`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                El agente Node.js usa variables de entorno en Lambda, por lo que debe configurar en `true`
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_APP_NAME`
              </td>

              <td/>

              <td/>

              <td>
                Debe configurar pero no se emplea en la New Relic UI. En cambio, los nombres de entidades provienen de la integración AWS .
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LOG_ENABLED`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`,`false`
              </td>

              <td>
                Envía el log del agente a CloudWatch
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LOG_LEVEL`
              </td>

              <td>
                `info`
              </td>

              <td>
                `fatal`, `error`, `warn`, `info`, `debug`, `trace`
              </td>

              <td>
                Nivel de agente de logs
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LOG`
              </td>

              <td>
                `stdout`
              </td>

              <td>
                `stdout`
              </td>

              <td>
                La ruta log del agente debe ser la salida estándar para el agente Node.js en modo sin servidor.
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_USE_ESM`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Funciones ESM que usan async/await y no devolución de llamada
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_NATIVE_METRICS_ENABLED`
              </td>

              <td>
                `true`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Debe establecer en falso para reducir la duración del arranque en frío. Cuando se establece en `false` no recopila máquina virtual (VM) métrica
              </td>
            </tr>
          </tbody>
        </table>

        Puede encontrar más variables de entorno en nuestra [documentación de configuración de Node.js.](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
      </Collapser>

      <Collapser
        id="python"
        title="Python"
      >
        <table>
          <thead>
            <tr>
              <th>
                Variable ambiental
              </th>

              <th>
                Valor por defecto
              </th>

              <th>
                Opciones
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `NEW_RELIC_ACCOUNT_ID`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_TRUSTED_ACCOUNT_KEY`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic o ID de padre, si existe
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Activar o desactivar rastreo distribuido (excluido Java)
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_NO_CONFIG_FILE`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                El agente usa variables de entorno en Lambda, por lo que debe establecer en verdadero
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_APP_NAME`
              </td>

              <td/>

              <td/>

              <td>
                Debe configurar pero no se emplea en la New Relic UI. En cambio, los nombres de entidades provienen de la integración AWS .
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LOG`
              </td>

              <td>
                `stderr`
              </td>

              <td>
                `stderr`
              </td>

              <td>
                La ruta log del agente debe ser `stderr `para el agente Python en modo sin servidor.
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LOG_LEVEL`
              </td>

              <td>
                `info`
              </td>

              <td>
                `critical`, `error`, `warning`, `info`, `debug`
              </td>

              <td>
                Nivel de agente de logs
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_SERVERLESS_MODE_ENABLED`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Esto debe establecer en `true` para que el agente se ejecute en modo sin servidor.
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_PACKAGE_REPORTING_ENABLED`
              </td>

              <td>
                `true`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Los reportes del paquete del agente Python deben configurar en `false` para mejorar los tiempos de inicio en frío
              </td>
            </tr>
          </tbody>
        </table>

        Puede encontrar más variables de entorno en nuestra [documentación de configuración de Python](/docs/apm/agents/python-agent/configuration/python-agent-configuration).
      </Collapser>

      <Collapser
        id="ruby"
        title="Ruby"
      >
        <table>
          <thead>
            <tr>
              <th>
                Variable ambiental
              </th>

              <th>
                Valor por defecto
              </th>

              <th>
                Opciones
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `NEW_RELIC_ACCOUNT_ID`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_TRUSTED_ACCOUNT_KEY`
              </td>

              <td/>

              <td/>

              <td>
                Su ID de cuenta de New Relic o ID de padre, si existe
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Activar o desactivar rastreo distribuido
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LAMBDA_HANDLER`
              </td>

              <td/>

              <td/>

              <td>
                Establezca el valor original del controlador de su función
              </td>
            </tr>
          </tbody>
        </table>
      </Collapser>

      <Collapser
        id="dotnet"
        title=".NET"
      >
        <table>
          <thead>
            <tr>
              <th>
                Variable ambiental
              </th>

              <th>
                Valor por defecto
              </th>

              <th>
                Opciones
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `CORECLR_ENABLE_PROFILING`
              </td>

              <td/>

              <td>
                `0`, `1`
              </td>

              <td>
                Requerido: Esto debe configurar en `1` para que el agente .NET instrumente su aplicación.
              </td>
            </tr>

            <tr>
              <td>
                `CORECLR_PROFILER`
              </td>

              <td/>

              <td>
                `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}`
              </td>

              <td>
                Requerido: Esto debe configurar en `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}` para que el agente .NET instrumente su aplicación.
              </td>
            </tr>

            <tr>
              <td>
                `CORECLR_NEWRELIC_HOME`
              </td>

              <td/>

              <td>
                `/opt/lib/newrelic-dotnet-agent`
              </td>

              <td>
                Requerido: Esto debe configurar en `/opt/lib/newrelic-dotnet-agent` para que el agente .NET instrumente su aplicación.
              </td>
            </tr>

            <tr>
              <td>
                `CORECLR_PROFILER_PATH`
              </td>

              <td/>

              <td>
                `/opt/lib/newrelic-dotnet-agent/libNewRelicProfiler.so`
              </td>

              <td>
                Requerido: Esto debe configurar en `/opt/lib/newrelic-dotnet-agent/libNewRelicProfiler.so` para que el agente .NET instrumente su aplicación.
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_APP_NAME`
              </td>

              <td/>

              <td/>

              <td>
                Debe configurar pero no se emplea en la New Relic UI. En cambio, los nombres de entidades provienen de la integración AWS .
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LOG_LEVEL`
              </td>

              <td>
                `info`
              </td>

              <td>
                `info`, `debug`, `finest`
              </td>

              <td>
                Nivel de agente de logs
              </td>
            </tr>

            <tr>
              <td>
                `NEWRELIC_LOG_CONSOLE`
              </td>

              <td>
                `0`
              </td>

              <td>
                `1`, `0`
              </td>

              <td>
                Enviar mensaje de log a la consola
              </td>
            </tr>
          </tbody>
        </table>

        Puede encontrar más variables de entorno en nuestra [documentación de configuración de .NET](/docs/apm/agents/net-agent/configuration/net-agent-configuration/).
      </Collapser>

      <Collapser
        id="extension"
        title="extensión lambda"
      >
        <table>
          <thead>
            <tr>
              <th>
                Variable ambiental
              </th>

              <th>
                Valor por defecto
              </th>

              <th>
                Opciones
              </th>

              <th>
                Descripción
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                `NEW_RELIC_LAMBDA_EXTENSION_ENABLED`
              </td>

              <td>
                `true`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Activar o desactivar la extensión
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LICENSE_KEY`
              </td>

              <td/>

              <td/>

              <td>
                Su clave de ingesta de New Relic. Esto anula el Secrets Manager.
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LICENSE_KEY_SECRET`
              </td>

              <td>
                `NEW_RELIC_LICENSE_KEY`
              </td>

              <td/>

              <td>
                Nombre secreto personalizado en AWS Secrets Manager
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LAMBDA_HANDLER`
              </td>

              <td/>

              <td/>

              <td>
                Si no emplea [el método de ajuste manual](https://github.com/newrelic/newrelic-lambda-layers?tab=readme-ov-file#note-on-performance-for-es-module-functions) de New Relic, este es el controlador de su función.
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_DATA_COLLECTION_TIMEOUT`
              </td>

              <td>
                10s
              </td>

              <td/>

              <td>
                Reducir la duración del tiempo de espera cuando `Telemetry client error`
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_EXTENSION_LOGS_ENABLED`
              </td>

              <td>
                `true`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Activar o desactivar `NR_EXT` líneas log
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_EXTENSION_LOG_LEVEL`
              </td>

              <td>
                `info`
              </td>

              <td>
                `INFO`, `DEBUG`
              </td>

              <td>
                nivel de logs para líneas log NR_EXT
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_EXTENSION_SEND_FUNCTION_LOGS`
              </td>

              <td>
                `false`
              </td>

              <td>
                `true`, `false`
              </td>

              <td>
                Enviar log de función
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_LOG_ENDPOINT`
              </td>

              <td/>

              <td/>

              <td>
                Establecer en [https://log-api.newrelic.com/log/v](https://log-api.newrelic.com/log/v)
              </td>
            </tr>

            <tr>
              <td>
                `NEW_RELIC_TELEMETRY_ENDPOINT`
              </td>

              <td>
                Establecer en [el extremo de EE. UU.](https://cloud-collector.newrelic.com/aws/lambda/v1)
              </td>

              <td/>

              <td>
                [Extremo UE](https://github.com/newrelic/newrelic-lambda-extension/blob/3c4218dd7727d0b0467f24f0902b616b7f4e46b7/telemetry/client.go#L24-L27)opcional
              </td>
            </tr>
          </tbody>
        </table>

        Vea más variables de entorno para la extensión New Relic en nuestra [documentación](https://github.com/newrelic/newrelic-lambda-extension/blob/cf86fb53f0bd816e1d09d07f7b5c5ab4841010a0/config/config.go#L41-L55).
      </Collapser>
    </CollapserGroup>
  </Step>

  <Step>
    ## Pruebe nuestras funciones de ejemplo

    Luego de instrumentar la capa Lambda de New Relic, le recomendamos encarecidamente que pruebe nuestras funciones de ejemplo. Estos ejemplos de trabajo deben emplear como punto de partida para instrumentar su propia función serverless. El uso de estos ejemplos puede ayudarlo a familiarizar con la capa New Relic Lambda, probar el enlace de la cuenta y pueden usar como referencia para su propia instrumentación. Cada ejemplo demuestra cómo agregar licencias, técnicas específicas del tiempo de ejecución para empaquetar su controlador, gestionar la retención log de funciones en CloudWatch y más.

    Si bien hay muchas formas de gestionar y desplegar la función Lambda, AWS CloudFormation es el mecanismo que empleamos para nuestros ejemplos.

    Nuestros ejemplos se publican, junto con la extensión New Relic Lambda, en este [repositorio de GitHub](https://github.com/newrelic/newrelic-lambda-extension). Hay uno para cada tiempo de ejecución de Lambda que admite New Relic:

    * [Node.js](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/node)
    * [Python](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/python)
    * [Go](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/go)
    * [Java](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/java)
    * [Ruby](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/ruby)
    * [.NET](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/dotnet)

      También puedes aprender a emplear el instrumento rastreo distribuido en una aplicación sin servidor no trivial en nuestro [ejemplo de rastreo distribuido](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/distributedtracing). Ilustra la propagación manual de trazas para SQS y SNS, dos de los servicios más populares que pueden invocar la función Lambda, con funciones de Node, Python, Ruby y Java.

      <Callout variant="tip">
        Al realizar pruebas manualmente, telemetry data pueden retrasar. Recomendamos esperar siete segundos antes de volver a invocar la función, lo que permitirá que se entregue cualquier telemetría almacenada en el búfer.
      </Callout>
  </Step>
</Steps>

## Resolución de problemas [#troubleshooting]

Si tiene problemas al instrumentar su función Lambda, aquí hay algunos consejos comunes para la resolución de problemas:

<CollapserGroup>
  <Collapser
    id="no-secrets"
    title="No se puede utilizar el administrador de secretos de AWS"
  >
    Si su organización no permite el uso de AWS Secrets Manager, la extensión New Relic Lambda aceptará una variable de entorno `NEW_RELIC_LICENSE_KEY` . Agregue la bandera `--disable-license-key-secret` del comando `newrelic-lambda integrations install` . Luego, establezca esta variable de entorno en su <InlinePopover type="licenseKey"/>en la configuración de su función Lambda.
  </Collapser>

  <Collapser
    id="multiple"
    title="Múltiples regiones y cuentas de AWS"
  >
    La CLI `newrelic-lambda` debe ejecutarse una vez por región, con el parámetro `--aws-region` . Utilice el mismo nombre de cuenta vinculada y la herramienta detectará que el vínculo de la cuenta ya se ha creado. El secreto <InlinePopover type="licenseKey"/>debe crearse en cada región.

    De manera similar, se pueden vincular varias cuentas de AWS a una cuenta de New Relic. Asigne a cada cuenta un nombre de cuenta vinculado diferente. El argumento `--aws-profile` de la herramienta CLI seleccionará el perfil nombrado. La herramienta utiliza la misma configuración que la AWS CLI.
  </Collapser>

  <Collapser
    id="not-instrumented"
    title="La función Lambda no se muestra como instrumentada"
  >
    Ha instrumentado su función Lambda pero no se muestra como instrumentada en la sección <DNT>**Amazon Web Services -> Lambda functions**</DNT> de New Relic.

    Ha vinculado manualmente un [sondeo API](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring/) y la integración de [métrica Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/) a su cuenta New Relic en la UI.

    En este escenario con dos integraciones para la misma cuenta de AWS en una cuenta de New Relic, se producirá una condición de carrera cuando se reciba la carga instrumentada desde la función Lambda instrumentada en el [extremo del recolector de nubes](https://github.com/newrelic/newrelic-lambda-extension/blob/54ccfd44765feb4b3da77ae606323c18d9db7593/telemetry/client.go#L18-L19) de New Relic. La carga útil se asignará aleatoriamente a una de las dos integraciones. Si se asigna a la integración no vinculada a su entidad de función, la carga útil se eliminará y la función no se mostrará como instrumentada. Solo las funciones que hayan recibido al menos una carga útil en los últimos 30 días hasta el evento `AwsLambdaInvocation` se mostrarán como instrumentadas.

    ```sql
    FROM AwsLambdaInvocation 
            SELECT count (*)
            SINCE 30 days ago 
            WHERE entityGuid = 'ENTITY_GUID' 
            LIMIT 1
    ```

    Para evitar la creación de dos integraciones para la misma cuenta de AWS, le recomendamos utilizar la CLI `newrelic-lambda` , como se mencionó anteriormente, porque detectará una integración existente y la usará.

    Si ya se han creado dos integraciones, elija una para conservar y desvincule la otra haciendo clic en <DNT>**Unlink this account**</DNT> en <DNT>**Infrastructure > AWS**</DNT> en New Relic.

    <Callout variant="tip">
      Existen algunas [limitaciones para las integraciones de métrica Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/#integrations-not-replaced-streams) que deben considerarse antes de desvincular una integración de sondeo API. También existen algunas [limitaciones para la consulta métrica de Infraestructura Dimensional](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-infrastructure-dimensional-metrics-nrql/#known-limitations) que deben considerarse antes de comprometerse completamente con una integración de Streams métrica.
    </Callout>
  </Collapser>

  <Collapser
    id="fail-retrieve-license"
    title="No se pudo recuperar la clave de licencia `AccessDeniedException`"
  >
    Su código lambda requiere el rol de ejecución que tiene permiso para leer AWS Secrets Manager. Si encuentra un log como el siguiente, agregue el permiso apropiado a la política del rol de ejecución. En nuestros ejemplos, consulte el archivo `template.yaml` para ver una manera sencilla de otorgar este permiso.

    ```bash
    Failed to retrieve license key AccessDeniedException: User: <ARN> is not authorized to perform: secretsmanager:GetSecretValue on resource: <ARN>
    ```
  </Collapser>
</CollapserGroup>

## Que sigue

<DocTiles>
  <DocTile
    title="Containerized Lambda functions"
    path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/containerized-images"
  >
    Si tiene la función Lambda en contenedor, haga clic aquí para instrumento.
  </DocTile>

  <DocTile
    title="Non-containerized Lambda functions"
    path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/instrument-your-own"
  >
    Si tiene la función Lambda no contenedorizada, haga clic aquí para instrumento.
  </DocTile>

  <DocTile
    title="Layerless Lambda functions"
    path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/enable-serverless-monitoring-aws-lambda-layerless"
  >
    Si tienes la función Lambda sin capas, haz clic aquí para instrumento.
  </DocTile>
</DocTiles>
