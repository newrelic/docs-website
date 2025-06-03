---
title: Integración de monitoreo AWS X-Ray
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS X-Ray Monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

New Relic ofrece una integración para informar sus datos de AWS X-Ray. Este documento explica cómo activar esta integración y describe los datos que se pueden reportar.

## Activar la integración [#activate-integration]

Para habilitar la integración de AWS X-Ray, siga los procedimientos estándar para [conectar los servicios de AWS a la infraestructura](/docs/integrations/amazon-integrations/get-started/connect-aws-infrastructure).

Cuando haya conectado correctamente su cuenta de AWS con New Relic:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure**
   </DNT>

   y luego haga clic en

   <DNT>
     **AWS**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **Manage Services**
   </DNT>

   para seleccionar la integración de AWS que desea activar.

3. Marque la casilla de verificación junto a

   <DNT>
     **AWS X-Ray**
   </DNT>

   .

4. Haga clic en

   <DNT>
     **Save**
   </DNT>

   .

## Configuración y sondeo [#config-polling]

Puede cambiar la frecuencia de sondeo y filtrar sus datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations).

Aquí está la información [de sondeo](/docs/integrations/amazon-integrations/get-started/polling-intervals-aws-integrations) predeterminada para la integración de AWS X-Ray:

* New Relic intervalo de sondeo: 5 minutos

<Callout variant="tip">
  Espere hasta 20 minutos para que aparezca su primera traza. Dado que las trazas se recopilan una vez completadas, y solo una vez por intervalo de sondeo, los datos de las trazas de rayos X se retrasan considerablemente con el tiempo real y no deben usarse para alertar.
</Callout>

<Callout variant="important">
  Un intervalo de sondeo superior a 5 minutos puede provocar la pérdida de la traza. New Relic arroja datos de traza de más de 20 minutos. De manera similar, es probable que las trazas de larga duración estén incompletas. El monitoreo de rayos X recopila únicamente trazas completas y se eliminan los intervalos dentro de una traza de más de 20 minutos.
</Callout>

## Buscar y utilizar datos [#find-data]

New Relic informa los segmentos de rayos X como [datos`Span` ](/docs/data-apis/understand-data/new-relic-data-types/#new-relic-tracing). Una vez que haya activado esta integración, debería ver aparecer la traza de AWS X-Ray en [rastreo distribuido](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data).

Para filtrar sus intervalos, puede utilizar el atributo `newRelic.ingestPoint` . Este atributo está establecido en `xray.polling` para todos los intervalos de rayos X.

A continuación se muestra un ejemplo de consulta NRQL para verificar la ingesta de rayos X:

```sql
SELECT count(*) FROM Span WHERE newRelic.ingestPoint = 'xray.polling' TIMESERIES
```

A continuación se muestra un ejemplo de consulta NRQL para correlacionar datos de X-Ray con el rendimiento de API específico:

```sql
SELECT average(duration.ms) FROM Span WHERE newRelic.ingestPoint = 'xray.polling' 
AND http.url LIKE 'https://yourdomanin.com/api/v1/endpoint%' since 1 month ago 
LIMIT MAX TIMESERIES 1 day
```

## Uso de políticas de IAM personalizadas [#use-iam]

Si utiliza una política de IAM personalizada al conectar su cuenta de AWS con el agente de infraestructura, su política personalizada necesitará los siguientes permisos para que funcione la integración de AWS X-Ray:

* `xray:BatchGet*`
* `xray:Get*`

## Rayos X y función Lambda [#lambda]

La función Lambda requiere alguna configuración para usar X-Ray. Consulte la sección [Uso de AWS X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) en la Guía para desarrolladores de AWS Lambda.

En particular, tenga en cuenta que la función de ejecución de su función Lambda necesitará [permisos adicionales](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html#services-xray-permissions) para registrar datos en X-Ray.

## Funciones de rayos X y escalones [#x-ray-step]

Las máquinas de estado AWS Step Function son aplicaciones distribuidas y se pueden monitorear con rayos X. El seguimiento de rayos X debe estar [habilitado explícitamente](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-xray-tracing.html) para que X-Ray capture datos para las máquinas de estado de funciones de pasos.

Asegúrese de habilitar el seguimiento de rayos X para cualquier [función Lambda](#lambda) en su máquina de estado, así como para la máquina de estado en general.
