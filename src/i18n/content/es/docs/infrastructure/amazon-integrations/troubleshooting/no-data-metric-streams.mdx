---
title: 'No aparecen datos: AWS CloudWatch Metric Streams'
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
  - CloudWatch Metric Streams
metaDescription: Troubleshooting suggestions if you do not see data for your AWS CloudWatch Metric Streams integration in the New Relic infrastructure UI.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Siguió los pasos para vincular su cuenta AWS , configuró AWS CloudWatch Metric Streams y AWS Kinesis Data Firehose y aún no ve la métrica esperada en New Relic.

## Soluciones [#solutions]

### No aparecen métricas ni errores en New Relic [#no-metrics-appear]

Si no ve datos en New Relic una vez que AWS CloudWatch Metric Streams se haya conectado a AWS Kinesis Data Firehose, siga los pasos a continuación para solucionar el problema de su configuración:

1. Verificar que el Stream métrico esté en estado a `Running` través de la AWS consola o API. Consulte los [documentos de resolución de problemas AWS ](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-troubleshoot.html)para obtener detalles adicionales.

2. Consulte el flujo métrica métrica en el namespace `AWS/CloudWatch/MetricStreams`. Verá un recuento de actualizaciones y errores métricos por flujo métrico. Esto indica que el Stream métrica está emitiendo datos exitosamente.

3. Si ve errores, confirme que la función de IAM especificada en la configuración de métrica Streams otorga a la entidad principal del servicio CloudWatch permisos para escribir y orientar el recurso Firehose deseado.

4. Consulte la pestaña de monitoreo de Kinesis Data Firehose en la consola Kinesis para ver si Firehose está recibiendo datos correctamente.

5. Puede habilitar el registro de errores de CloudWatch en Kinesis Data Firehose para obtener información más detallada sobre problemas de depuración. Consulte la documentación oficial de Amazon Kinesis Data Firehose para obtener más detalles.

6. Confirme que ha configurado su Kinesis Data Firehose con los detalles de destino correctos:

   * Asegúrese de que

     <InlinePopover type="licenseKey"/>

     contenga su clave de licencia de 40 caracteres hexadecimales.

   * Asegúrese de que se haya seleccionado el centro de datos correcto en EE. UU. o la UE para su cuenta New Relic. Consejo: si `license_key` comienza con “eu”, entonces deberá seleccionar el centro de datos de la UE.

7. Verifique que su Kinesis Data Firehose tenga permisos para escribir en el destino configurado. Por ejemplo, la política del depósito S3 permite escribir.

### Falta métrica para cierto espacio de nombres AWS [#missing-metrics]

New Relic no aplica ningún filtro sobre la métrica recibida de AWS CloudWatch Metric Streams.

Si esperas que se ingieran ciertas métricas y no es así, verifica lo siguiente:

* Asegúrese de que no haya ningún filtro `Inclusion` o `Exclusion` en sus flujos de métricas de CloudWatch.
* Asegúrese de que las métricas estén disponibles en AWS CloudWatch y se puedan consultar en la interfaz AWS CloudWatch. Para algunos servicios específicos de AWS, como [ECS/EKS contenedor de información valiosa](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights.html), el monitoreo mejorado debe habilitarse explícitamente en el lado AWSantes de obtener acceso a la métrica.

<Callout variant="important">
  AWS CloudWatch no incluye métricas que no estén disponibles en menos de 2 horas. Por ejemplo, [algunas métricas S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metrics-dimensions.html#s3-cloudwatch-metrics) se agregan diariamente. Planeamos hacer que algunas de estas métricas especiales estén disponibles en New Relic.
</Callout>

### Discrepancias en valores métricos entre AWS CloudWatch y New Relic [#metric-discrepancies]

Las métricas se procesan, asignan y almacenan tal como se reciben de AWS CloudWatch Metric Streams. Es posible que se observen algunas discrepancias al comparar AWS CloudWatch y el panel New Relic . En escenarios limitados, AWS CloudWatch aplica funciones y lógica específicas antes de representar la métrica.

Estas pautas deberían ayudar a comprender la causa raíz de la discrepancia:

* Comprueba que se utiliza la misma función en la métrica (por ejemplo `average`, `min`, `max`).
* En el lado New Relic , asegúrese de filtrar la misma timestamp o período de tiempo (teniendo en cuenta la zona horaria) para mostrar exactamente la misma hora que en AWS CloudWatch.
* Al utilizar series temporales, la interfaz de usuario de New Relic puede realizar algún redondeo según los intervalos.

Puede obtener una lista de la métrica sin procesar recibida por tiempo usando una consulta como esta (tenga en cuenta que no se aplica ninguna función a la métrica seleccionada):

```
FROM Metric 
SELECT aws.outposts.InstanceTypeCapacityUtilization
WHERE collector.name = 'cloudwatch-metric-streams'
```

Recuerde que AWS fija la resolución máxima (1 minuto, 5 minutos, etc.) para cada métrica reportada en AWS CloudWatch.

### Operación AWS Metric Streams [#metric-stream-operation]

Puede ver el estado de los flujos métricos en la pestaña Streams en la consola de CloudWatch. En particular, un Stream métrico puede estar en uno de dos estados: `running` o `stopped`.

* En ejecución: la transmisión se está ejecutando correctamente. Incluso si está en ejecución, es posible que no se transmitan datos métricos debido a los filtros configurados.
* Detenido: la transmisión se ha establecido explícitamente en estado detenido (no debido a un error). Este estado es útil para detener temporalmente la transmisión de datos sin eliminar la configuración.

### Errores en el dashboard de estado [#errors-status-dashboard]

New Relic se basa en el servicio AWS Config para recopilar metadatos adicionales de los recursos con el fin de enriquecer las métricas recibidas a través de CloudWatch Metric Streams.

Asegúrese de que AWS Config esté habilitado en su cuenta de AWS y asegúrese de que el rol vinculado tenga el siguiente permiso o política en línea creada:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "config:BatchGetResourceConfig",
            "Resource": "*"
        }
    ]
}
```
