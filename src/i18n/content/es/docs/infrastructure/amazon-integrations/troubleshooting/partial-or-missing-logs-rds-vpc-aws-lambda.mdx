---
title: 'Registro parcial o faltante para RDS, VPC, AWS Lambda'
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: 'New Relic AWS integrations: What to do if the NewRelic-log-ingestion lambda function for pushing logs is not working or only sends partial data.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Está utilizando `NewRelic-log-ingestion`, la función Lambda para enviar registros desde AWS a nuestro monitoreo mejorado RDS, integración de registros de flujo VPC o versiones anteriores (alfa y beta) de monitoreo para AWS Lambda. No funciona o envía datos parciales.

## Solución

Las `NewRelic-log-ingestion` versiones lambda anteriores a la 2.1 están obsoletas. Actualice a las últimas lambdas publicadas en el repositorio AWS Serverless. Puede utilizar la [CLI de New Relic](https://developer.newrelic.com/build-tools/new-relic-one-applications/cli) o actualizar manualmente.

<DNT>**Recommended:**</DNT> La forma principal de actualizar la función Lambda de ingesta log es seguir [procedimientos estándar](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/update-lambda-monitoring) para actualizar la función mediante la CLI New Relic .

También puedes actualizar la función manualmente:

1. Evite falsos positivos en las alertas: siga [los procedimientosUI ](/docs/alerts/new-relic-alerts/configuring-alert-policies/update-or-disable-policies-conditions#condition-on-off)o [los procedimientosAPI ](/alerts/rest-api-alerts/new-relic-alerts-rest-api/disable-enable-alerts-conditions-using-api)para desactivar todas las condiciones de alerta asociadas con la integración del monitoreo con AWS Lambda, el monitoreo mejorado de RDS y el registro de flujo de VPC.
2. Elimine la versión lambda desactualizada de lambda: vaya a su consola AWS Lambda y elimine `newrelic-log-ingestion`. Tenga en cuenta que esto detiene el monitoreo RDS mejorado y la integración del registro de flujo de VPC hasta que se complete el siguiente paso.
3. Vuelva a habilitar el servicio: siga las instrucciones en [Monitoreo mejorado de RDS](/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-enhanced-monitoring-integration#activate) o [Registro de flujo de VPC](/docs/integrations/amazon-integrations/aws-integrations-list/aws-vpc-flow-logs-monitoring-integration#enable), o siga el paso para [configurar el registro de CloudWatch para transmitir a New Relic Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#stream-logs).
4. Verifique que sus datos fluyan a través de la nueva lambda.
