---
title: instrumento tu función Lambda no contenedorizada
metaDescription: Instrument your non-containerized Lambda function
freshnessValidatedDate: never
translationType: machine
---

Una vez que vinculó con éxito sus cuentas de New Relic y AWS , puede instrumentar su función Lambda AWS no en contenedores agregando la capa New Relic Lambda. Esto integra el agente New Relic, lo que permite el monitoreo automático cada vez que se invocan sus funciones.

<img
  title="non-containerized"
  alt="a diagram depicting non-containerized lambda function instrumentation"
  src="/images/serverless_diagram_non-containerized-lambda-function.webp"
/>

## Antes de que empieces [#begin]

* [Vincula tus cuentas de New Relic y AWS](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/introduction-lambda#link)
* [Revise nuestros diferentes métodos de instrumentación](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/introduction-lambda#method)

## Métodos de instrumentación [#instrumentation]

New Relic ofrece varios métodos para instrumentar su función Lambda AWS para un monitoreo integral:

* **Interfaz de línea de comando (CLI)**: emplee la CLI AWS para agregar rápidamente la capa New Relic a su función Lambda.
* **Framework sin servidor**: integre perfectamente la instrumentación New Relic en su despliegue sin servidor.
* **CloudFormation/SAM**: incluya la capa New Relic en sus plantillas de infraestructura como código.
* **Terraform**: gestione fácilmente la instrumentación de New Relic junto con sus otros recursos de infraestructura.
* **Instrumentación manual**: agregue directamente la capa New Relic a través de la consola AWS Lambda para un control más granular.

Independientemente del método que elija, la capa New Relic agrega el agente New Relic a sus funciones. Este agente instrumenta automáticamente sus funciones tras la invocación, generando una carga, `NR_LAMBDA_MONITORING`, que se envía a New Relic a través de la extensión New Relic Lambda.

Dependiendo de sus necesidades, puede optar por omitir la extensión y solo ver la telemetría en CloudWatch, omitir CloudWatch o usar CloudWatch como alternativa. La sección [CloudWatch](#CloudWatch-only) al final de este documento lo guiará a través de cada opción.

<CollapserGroup>
  <Collapser
    id="cli"
    title="New Relic"
  >
    Puedes instrumentar tu función Lambda con la `newrelic-lambda` CLI inicio rápido.

    Para instalar o actualizar la capa de instrumentación de New Relic, ejecute este comando:

    ```shell
    newrelic-lambda layers install --nr-account-id <a href="/docs/accounts/accounts-billing/account-setup/account-id">YOUR_NR_ACCOUNT_ID</a> --function my-function --upgrade
    ```

    Este comando encuentra automáticamente la capa más nueva disponible para la región y el tiempo de ejecución de Lambda.

    Este comando proporciona una forma rápida de iniciar la instrumentación New Relic y se puede integrar fácilmente en su canal de CI/CD. Sin embargo, dado que modifica los recursos de función Lambda existentes, la reimplementación del código actualizado puede eliminar la instrumentación sin dar. Para garantizar un monitoreo continuo, vuelva a ejecutar el comando luego de cada despliegue o, preferiblemente, incorpore la capa y la configuración New Relic directamente en su proceso de despliegue.

    Tenga en cuenta que la CLI puede operar en muchas funciones en un lote: use `--function all`, `--function installed` o `--function not-installed` para operar en todas las funciones en una región, o solo aquellas con o sin instrumentación New Relic existente.
  </Collapser>

  <Collapser
    id="cloudformation"
    title="Plantillas de CloudFormation/SAM"
  >
    El Serverless Application Model de AWS, o SAM, es una variante de las plantillas de CloudFormation que simplifica la relación de funciones con los recursos de los que dependen y la gestión del ciclo de vida de una aplicación completa. Usamos SAM y CloudFormation para la mayoría de nuestras funciones de ejemplo de Lambda, y muchas otras herramientas se crean sobre las plantillas de CloudFormation, lo que proporciona una capa adicional de abstracción.

    CloudFormation es un servicio de AWS que simplifica el aprovisionamiento y la gestión de recursos AWS . Al definir el estado deseado de los recursos en plantillas YAML o JSON, CloudFormation maneja automáticamente la API de llamada subyacente para crear, actualizar o eliminar recursos según sea necesario. Este enfoque declarativo automatiza la gestión de la infraestructura, garantizando coherencia y reproducibilidad.

    A continuación se muestra un ejemplo de una plantilla de CloudFormation simple para una función Lambda de Node.js:

    ```yaml
    AWSTemplateFormatVersion: '2010-09-09'
    Transform: AWS::Serverless-2016-10-31
    Description: And example of a simple instrumented Node.js Lambda

    Resources:
      NewRelicExample:
        Type: AWS::Serverless::Function
        Properties:
          # In this example, we're using the SAM CLI to package and deploy our lambda. SAM will transform this value during the publish step.
          CodeUri: newrelic-example-node/
          # The handler for your function needs to be the one provided by the instrumentation layer, below.
          Handler: newrelic-lambda-wrapper.handler
          Runtime: nodejs12.x
          Environment:
            Variables:
              # For the instrumentation handler to invoke your real handler, we need this value
              NEW_RELIC_LAMBDA_HANDLER: YOUR_PATH_TO_INITIAL_LAMBDA_HANDLER
              # Distributed tracing needs your account ID, and your trusted account ID
              NEW_RELIC_ACCOUNT_ID: YOUR_ACCOUNT_ID_HERE
              # If your New Relic account has a parent account, this value should be that account ID. Otherwise, just
              # your account id.
              NEW_RELIC_TRUSTED_ACCOUNT_KEY: YOUR_PARENT_ACCOUNT_ID_HERE
          Layers:
            # This layer includes the New Relic Lambda extension, a sidecar process that sends telemetry,
            # as well as the New Relic agent for Node.js, and a handler wrapper that makes integration easy.
            - !Sub arn:${AWS::Partition}:lambda:${AWS::Region}:451483290750:layer:NewRelicNodeJS12X:34
          Policies:
            # This policy allows the lambda to know the value of the New Relic license key. We need this so
            # that we can send telemetry back to New Relic
            - AWSSecretsManagerGetSecretValuePolicy:
                SecretArn: !ImportValue NewRelicLicenseKeySecret-NewRelic-LicenseKeySecretARN
    ```

    Normalmente, tendrá un archivo llamado `template.yaml` que describe su función y sus recursos.
  </Collapser>

  <Collapser
    id="serverless"
    title="Framework Serverless"
  >
    framework sin servidor es una herramienta popular de desarrollo e implementación para aplicaciones sin servidor. Está escrito para AWS en Node.js y actúa principalmente como una abstracción de alto nivel sobre las plantillas de CloudFormation. Funciona bien para funciones de Node, Python, Ruby, Java y .NET.

    New Relic ofrece un [complemento framework Serverless](https://github.com/newrelic/serverless-newrelic-lambda-layers) para simplificar la instrumentación de su aplicación framework Serverless.

    Para instalar el complemento, ejecute este comando:

    ```bash
    npm install --save-dev serverless-newrelic-lambda-layers
    ```

    O, alternativamente, puede ejecutar este comando:

    ```bash
        yarn add --dev serverless-newrelic-lambda-layers
    ```

    Luego, busque su [New Relic ID](/docs/accounts/install-new-relic/account-setup/account-id) [New Relic de cuenta API](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#personal-api-key) , su clave de personal de

    Ahora agregue lo siguiente a su archivo `serverless.yaml` :

    ```yaml
    plugins:
          - serverless-newrelic-lambda-layers
        custom:
          newRelic:
            accountId: your-new-relic-account-id-here
            apiKey: your-new-relic-personal-api-key-here
            linkedAccount: your-new-relic-integration-account-name-here
    ```
  </Collapser>

  <Collapser
    id="terraform"
    title="Terraformar"
  >
    Terraform es una infraestructura popular de uso general como herramienta de código. Se puede emplear para gestionar recursos de AWS. Ofrecemos [algunos ejemplos](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/terraform) de New Relic instrumentado función Lambda desplegar usando el script Terraform.
  </Collapser>

  <Collapser
    id="console"
    title="Instrumentación manual AWS"
  >
    Si bien es más propenso a errores y requiere más mano de obra que los enfoques anteriores, puede modificar manualmente la configuración de una función Lambda para usar New Relic desde la consola AWS Lambda, para Node.js, Python, Ruby y Java.

    Aquí hay un ejemplo de cómo implementar el monitoreo New Relic Lambda para un tiempo de ejecución Ruby :

    1. Navegue a la sección del servicio **Lambda** en la consola web de AWS. Desde allí, busque la función Lambda que desea conectar a New Relic.

    2. En la pestaña **Code** predeterminada, desplazar hacia abajo hasta la sección **Layers** y haga clic en el botón **Add a layer** .

    3. Haga clic en el botón **Create layer** .

    4. Vaya a **Choose a layer** y seleccione la opción **Specify an ARN** .

    5. Vaya a la [New Relic's list of layers](https://layers.newrelic-external.com/) y use la lista desplegable para seleccionar la región de AWS donde está alojada su función Lambda. Desde allí, ubique el ARN que coincida con la versión y arquitectura de Ruby de su función Lambda. Debería haber dos opciones: X86 y ARM64. Utilice el botón **Copy to clipboard** o copie manualmente la cadena ARN.

    6. En la sección **Specify an ARN** del formulario de la consola de AWS, pegue el ARN de la capa New Relic Lambda.

    7. En el formulario de la consola de AWS, haga clic en el botón **Add** para agregar la capa a su función Lambda.

    8. En la página de su función Lambda, con la pestaña **Code** predeterminada seleccionada, desplácese hacia abajo hasta la sección **Runtime settings** y haga clic en el botón **Edit** .

    9. Haga una copia segura del valor del **Handler** existente. Lo necesitarás para un paso posterior.

    10. Cambie el valor del **Handler** a: `newrelic_lambda_wrapper.handler` y haga clic en **Save**.

    11. Cambie a la pestaña de **Configuration** en la página de su función Lambda.

    12. Seleccione la subpestaña **Environment variables** .

    13. Defina las siguientes variables de entorno:

        * `NEW_RELIC_ACCOUNT_ID`: Establezca su [ID de cuenta](/docs/accounts/install-new-relic/account-setup/account-id) de New Relic .

        * `NEW_RELIC_LAMBDA_HANDLER`: Establezca el valor del controlador original de su función copiado anteriormente.

          * `NEW_RELIC_LICENSE_KEY`: Configure su clave de licencia de New Relic.
          * `NEW_RELIC_LOG_ENDPOINT`: Establezca en [https://log-api.newrelic.com/log/v1](https://log-api.newrelic.com/log/v1).
          * `NEW_RELIC_TELEMETRY_ENDPOINT`: Establezca en [https://cloud-collector.newrelic.com/aws/lambda/v1](https://cloud-collector.newrelic.com/aws/lambda/v1).

    14. Si desea enviar el log de su función Lambda a New Relic, que incluirá todo lo que su función escribe en STDOUT, cerciorar de configurar la variable de entorno `NEW_RELIC_EXTENSION_SEND_FUNCTION_LOGS` en `true`.

    15. Modifique la función de ejecución para permitir el acceso al secreto de la clave de licencia de New Relic.

        * Busque el ARN del secreto denominado `NEW_RELIC_LICENSE_KEY`.

        * Agregue una nueva política en línea en la función de ejecución de la función que se parece a este código a continuación. Reemplace el `SECRET_ARN` con el valor que encontró arriba.

          ```json
          "Statement": [
            {
              "Action": [
                "secretsmanager:GetSecretValue"
              ],
              "Resource": "SECRET_ARN",
              "Effect": "Allow"
            }
          ]
          ```

          <Callout variant="tip">
            La capa New Relic entregará automáticamente el agente Ruby de New Relic y se cargará a través de Ruby `require` antes de la invocación de su función Lambda. Para evitar conflictos, no incluya una copia del agente Ruby en ningún otro lugar. Sentir libre de realizar cualquier llamada API del agente New Relic Ruby que desee dentro de su función para aprovechar la presencia del agente.
          </Callout>

        Los tiempos de ejecución de Java, Python, Node.js y .Net seguirán el mismo flujo de instrumentación que Ruby, pero con algunos controladores diferentes. A continuación se explica cómo actualizar el controlador de su función para que apunte a la capa recién anexa en la consola para su función:

    * Java:

      * `RequestHandler` implementación: `com.newrelic.java.HandlerWrapper::handleRequest`.
      * `RequestStreamHandlerWrapper` implementación: `com.newrelic.java.HandlerWrapper::handleStreamsRequest`.

    * Python: `newrelic_lambda_wrapper.handler` (guiones bajos).

    * Nodo: `newrelic-lambda-wrapper.handler` (guiones).

    * Para .Net no es necesario configurar el controlador.

      Tenga en cuenta que para Go, debe realizar cambios en el código fuente de su función Lambda para implementarla. Los cambios de configuración no son suficientes.
  </Collapser>
</CollapserGroup>

## Métodos de envío

<CollapserGroup>
  <Collapser
    id="extension"
    title="instrumento con la extensión solamente"
  >
    Cada capa de agente también contiene una extensión para enviar logs y carga a New Relic, sin pasar por CloudWatch. Esto puede ayudar a reducir la latencia y los costos. Sin embargo, existe el riesgo de afectar el rendimiento y la confiabilidad de su función.

    Luego de agregar una capa New Relic Lambda, la extensión está habilitada y tiene el envío log deshabilitado de forma predeterminada.

    Si desea ver el log de funciones en New Relic, deberá habilitar el envío de extensión del log de funciones con una variable de entorno.

    Es importante tener en cuenta que el log de función es solo el log registrado por la función durante su invocación. La extensión no enviará logs de tiempo de ejecución de Lambda como líneas `START`, `END` y `REPORT` .
  </Collapser>

  <Collapser
    id="fallback"
    title="Solo CloudWatch y respaldo de CloudWatch"
  >
    Puede optar por enviar datos solo a CloudWatch o como respaldo. Para obtener más información, consulte nuestra [documentación de respaldo de CloudWatch](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/cloudwatch-fallback).
  </Collapser>
</CollapserGroup>

## ¿Que sigue? [#find-data]

* Luego de completar estos pasos, podrá ver reportes de datos en la [UIde monitoreo de Lambda](/docs/lambda-monitoring-ui).
* Si tiene problemas para encontrar sus datos, consulte [Lambda habilitar resolución de problemas](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/introduction-lambda#troubleshoot).
