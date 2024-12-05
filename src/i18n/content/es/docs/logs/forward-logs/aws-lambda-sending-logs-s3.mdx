---
title: AWS Lambda para enviar logs desde S3
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for AWS Lambda with S3, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Puede enviar sus [depósitos de Amazon S3](https://aws.amazon.com/s3/) a New Relic utilizando nuestra función Lambda AWS , `NewRelic-log-ingestion-s3`. Esto se puede implementar fácilmente desde el AWS Serverless Application Repository.

Reenviar registros desde su depósito de S3 a New Relic le brindará <InlinePopover type="logs"/>capacidades mejoradas para recopilar, procesar, explorar, consultar y alertar sobre sus datos log .

## Instalar la función Lambda [#install-function]

Para instalar la función Lambda para reenviar su registro S3 a New Relic:

1. Asegúrate de tener un

   <InlinePopover type="licenseKey"/>

   .

2. Abra el [AWS Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications) en su browser.

3. Asegúrese de que Lambda esté instalado en la misma región que el depósito S3.

   <img
     title="AWS Lambda - Select region"
     alt="AWS Lambda - Select region"
     src="/images/serverless_screenshot-crop_AWS-Lambda-select-region.webp"
   />

4. Busque `newrelic` y marque

   <DNT>
     **Show apps that create custom IAM roles or resource policies**
   </DNT>

   para encontrar `NewRelic-log-ingestion-s3`.

5. Haga clic en los detalles `NewRelic-log-ingestion-s3` y haga clic en

   <DNT>
     **Deploy**
   </DNT>

   .

6. Desplázate hasta

   <DNT>
     **Application settings**
   </DNT>

   e ingresa tu New Relic

   <InlinePopover type="licenseKey"/>

   .

7. Aproveche las capacidades de análisis de registros de New Relic especificando `logtype` como variable de entorno para la función Lambda. Para obtener más información, consulte [Conjuntos de reglas de análisis integrados](/docs/logs/new-relic-logs/ui-data/new-relic-logs-parsing-built-rules-custom-parsing#built-in-rules).

8. Confirme que la aplicación crea roles de IAM personalizados y luego haga clic en

   <DNT>
     **Deploy.**
   </DNT>

9. Una vez que la función esté implementada, [cree un disparador Lambda](#create-trigger).

### Instalación manual utilizando framework Serverless [#serverless-install]

Puede instalar y configurar Lambda manualmente desde la terminal utilizando el [Serverless](https://www.npmjs.com/package/serverless) framework. Si no utiliza Linux, primero instale [Docker](https://docs.docker.com/get-docker/) y manténgalo funcionando.

```bash
# Clone the repository
git clone https://github.com/newrelic/aws_s3_log_ingestion_lambda.git
# Install serverless package and the repo dependencies
npm install -g serverless
npm install
# Set the New Relic License Key env variable
export LICENSE_KEY=YOUR_NEWRELIC_LICENSE_KEY
# Set the logtype (optional)
export LOG_TYPE=YOUR_LOGTYPE
# Set the S3 bucket name
export S3_BUCKET_NAME=YOUR_S3_BUCKET_NAME
# The S3 subdirectory (optional)
export S3_PREFIX=YOUR_S3_SUBDIRECTORY
# Choose a name for your new Serverless Framework service
export SERVICE_NAME=YOUR_SERVICE_NAME
# Install the serverless-python-requirements plugin
serverless plugin install -n serverless-python-requirements
# Package the application files and dependencies into a deployment-ready file for deployment
serverless package
# Deploy the function, specifying the same region as your S3 bucket listed above
serverless deploy --region YOUR_AWS_REGION
```

## Cree un disparador Lambda en AWS [#create-trigger]

Para que su registro se transmita a New Relic, adjunte un activador a Lambda:

1. En el menú del lado izquierdo, haga clic en

   <DNT>
     **Functions**
   </DNT>

   .

2. Busque y seleccione la función `NewRelic-s3-log-ingestion` creada anteriormente.

3. En

   <DNT>
     **Designer**
   </DNT>

   , haga clic en

   <DNT>
     **Add Triggers**
   </DNT>

   y seleccione

   <DNT>
     **S3**
   </DNT>

   en el menú desplegable.

4. Seleccione el depósito de S3 que contiene el log que desea enviar a New Relic.

5. Opcionalmente configure un [prefijo y un sufijo](https://aws.amazon.com/blogs/compute/amazon-s3-adds-prefix-and-suffix-filters-for-lambda-function-triggering/). Esto es útil si su registro está en un subdirectorio.

6. Marque la casilla de verificación

   <DNT>
     **Enable trigger**
   </DNT>

   y luego

   <DNT>
     **Add**
   </DNT>

   el activador.

Para probar la función Lambda, cargue un nuevo archivo de registro en el depósito S3 que configuró en la configuración de la función y luego [vea los datos de su log ](#find-data).

<InstallFeedback/>

## Limitaciones [#limitations]

* El tamaño máximo de archivo de registro admitido es 35 MB sin comprimir.
* El tamaño máximo de línea log individual admitido es 0,25 MB.
* No se admiten archivos de registro cifrados.

## Ver datos log [#find-data]

Si todo está configurado correctamente y se están recopilando sus datos, debería ver los datos log en ambos lugares:

* Nuestra [UI de logs](https://one.newrelic.com/launcher/logger.log-launcher)
* Nuestras herramientas para ejecutar [NRQL consulta](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data).

Por ejemplo, puedes ejecutar una consulta como esta:

```sql
SELECT * FROM Log
```

## Resolución de problemas [#troubleshooting]

Si tiene problemas al configurar su reenviador de logs, pruebe estos consejos de resolución de problemas.

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="config-overlap"
    title="Superposición de configuración"
  >
    Al desplegar la función Lambda, puede ocurrir este error:

    ```
    An error occurred when creating the trigger: Configurations overlap. Configurations on the same bucket cannot share a common event type.
    ```

    Para resolver este problema, asegúrese de que el depósito no tenga otro evento del mismo tipo. Su depósito S3 no puede tener varias instancias de <DNT>**All object create events**</DNT>.
  </Collapser>

  <Collapser
    className="freq-link"
    id="cannot-connect"
    title="No se puede conectar al Docker daemon"
  >
    Al utilizar Serverless para desplegar la función Lambda desde su máquina, puede ocurrir este error:

    ```
    Error: docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
    ```

    Esto puede significar que cualquiera de docker no se está ejecutando o que no se ha configurado correctamente. Asegúrese de que docker se esté ejecutando en su máquina cuando despliegue la función Lambda usando Serverless.
  </Collapser>

  <Collapser
    className="freq-link"
    id="no-data"
    title="No aparecen datos"
  >
    Si no aparecen datos después de habilitar nuestras capacidades de administración de logs, siga nuestros [procedimientos estándar de resolución de problemas de logs](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).
  </Collapser>
</CollapserGroup>

## ¿Que sigue? [#what-next]

Explore [los datos de registro en su plataforma](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su log con nuestras capacidades [de logs en el contexto](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configurar [alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desactivar reenvío de logs [#disable]

Para deshabilitar las capacidades de reenvío de registros, siga los procedimientos estándar en [la documentación de Amazon S3](https://aws.amazon.com/s3/). No necesitas hacer nada más en New Relic.
