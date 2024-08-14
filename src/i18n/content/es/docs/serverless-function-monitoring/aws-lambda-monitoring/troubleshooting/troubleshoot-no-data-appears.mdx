---
title: Solucionar problemas de que no aparecen datos para AWS Lambda
type: troubleshooting
tags:
  - Serverless function monitoring
  - AWS Lambda monitoring
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app for AWS Lambda.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Luego de generar tráfico para su AWS función Lambda y esperar cinco minutos, ninguno de los datos de su función aparece en la New Relic UI. No hay ningún error en el registro ni `NRIntegrationErrors` ni `NRIntegrationWarnings` en la New Relic UI.

## Solución

La razón más común por la que no aparecen datos ni errores es que la [clave de licencia y el ID de cuenta](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/) son de cuentas diferentes. En caso de discrepancia, la [extensiónNew Relic Lambda](https://github.com/newrelic/newrelic-lambda-extension) o [lambda que procesa el registro de vigilancia en la nube](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/) informa los datos correctamente, pero los elimina silenciosamente ya que el ID de la cuenta no coincide. Esto no genera errores ni advertencias.

Para resolver este problema, cerciorar de que la clave de licencia y el ID de cuenta sean de la misma cuenta. Se recomienda emplear la [CLINew Relic Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#rec) para habilitar el monitoreo del servidor para minimizar este tipo de problemas. Puede actualizar la clave de licencia en AWS Secrets Manager. Para el ID de cuenta y la configuración que no emplean AWS Secrets Manager, puede actualizar las [variables de entorno](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#env-var) con la clave de licencia o el ID de cuenta correctos para corregir el problema.
