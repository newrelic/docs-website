---
title: AWS Lambda Integración de telemetría Extensions API
tags:
  - Integrations
  - Amazon integrations
  - Lambda Extension
freshnessValidatedDate: never
translationType: machine
---

<DNT>
  **Work in progress**
</DNT>

La extensión de telemetría New Relic AWS Lambda permite al usuario enviar telemetry data directamente desde su función Lambda a New Relic, sin necesidad de configurar activadores ni conectar Amazon CloudWatch. Envíe su registro de evento, métrica y traza agregando la extensión como capa y obtenga información valiosa de sus datos al instante en la plataforma New Relic .

## Instalacion

1. En la consola de AWS, vaya a <DNT>**Lambda > Functions**</DNT> y elija la función desde la que desea ingerir datos.

2. Seleccione <DNT>**Layers > Add Layer**</DNT>.

3. En <DNT>**Choose a layer**</DNT> seleccione la opción <DNT>**Specify a layer by providing the ARN**</DNT> .

4. Vaya a [https://layers.newrelic-external.com/](https://layers.newrelic-external.com/), busque AwsLambdaExtension en su región para encontrar el `ARN` con la versión de capa más reciente y luego péguelo en el campo `ARN` nuevamente en su consola de AWS. Si no puede encontrar AwsLambdaExtension, utilice el siguiente patrón para obtener `arn`:

   `arn:aws:lambda:{your-region}:533243300146:layer:AwsLambdaExtension:{version}`

Para obtener la versión más reciente de la extensión, seleccione Versión 1 y haga clic en <DNT>**Save**</DNT>. Luego haga clic en <DNT>**Edit**</DNT> y seleccione la versión más alta disponible. 5. Vaya a <DNT>**Configuration**</DNT>, seleccione <DNT>**Environment variables**</DNT> y agregue `Key: NEW_RELIC_LICENSE_KEY Value: YOUR_LICENSE_KEY`. Nota: `Key: NEW_RELIC_ACCOUNT_ID` es un parámetro opcional y debe configurarse en su ID de cuenta de New Relic.

Para verificar que la configuración se haya realizado correctamente, haga clic en el botón <DNT>**Test**</DNT> en la sección <DNT>**code**</DNT> .

## Encuentra tus datos

Puede encontrar sus datos en New Relic navegando a <DNT>**[https://one.newrelic.com/](https://one.newrelic.com/)**</DNT> y una de estas categorías en el menú de la izquierda: <DNT>**Logs**</DNT> o <DNT>**Metrics & events**</DNT> o <DNT>**...Add More > Traces**</DNT>.

### Registro:

Log se puede filtrar por conjunto de atributos específicos. Haga clic en <DNT>**Attributes**</DNT> en el menú de la izquierda y luego elija el atributo de interés. Por ejemplo:

```
NEWRELIC > SOURCE > api.logs
AWS > EXTENSION.NAME > AwsLambdaExtension
PLUGIN > TYPE > lambda extension
```

### Métrica:

Métricas enviadas por la extensión tienen el prefijo `aws.telemetry.lambda_ext.`. Actualmente existen 6 AWS Lambda métrica:

```
'durationMs'
'billedDurationMs'
'initDurationMs'
'memorySizeMB'
'maxMemoryUsedMB'
'producedBytes'
```

### Evento

Para ver el evento enviado por esta extensión, en la sección <DNT>**Custom events**</DNT> busque `AwsLambdaExtension`. Actualmente existen doce tipos de eventos:

```
platform_initStart
platform_initRuntimeDone
platform_initReport
platform_start
platform_runtimeDone
platform_fault
platform_report
platform_extension
platform_telemetrySubscription
platform_logsDropped
function
extension
```

Puede filtrar los datos aún más en el menú `Dimensions` .

### Traza

Los datos de la traza se muestran en la pestaña <DNT>**Traces**</DNT> . Para ver la traza enviada por la extensión, busque \`AwsLambdaExtension'.
