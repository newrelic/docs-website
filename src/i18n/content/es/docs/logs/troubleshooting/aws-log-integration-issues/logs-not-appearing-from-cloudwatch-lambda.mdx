---
title: Los logs no aparecen desde CloudWatch a través de Lambda
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: Troubleshooting tips if the Logs are not appearing from CloudWatch via Lambda.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Los logs no aparecen en New Relic para un CloudWatch a través de la configuración de integración de Lambda.

## Solución

Posibles razones y sus soluciones:

* Es posible que la clave de licencia de ingesta de New Relic no sea válida. En su cuenta de AWS, busque el recurso con el Id lógico `NewRelicLogsLicenseKeySecret` de <DNT>**CloudFormation stack &gt; Resources**</DNT> y verifique la clave.

* Para depurar más, navegue hasta <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicServerlessLogForwarder (Lambda Function) &gt; Configuration &gt; Environment Variables**</DNT> y configure el parámetro `DEBUG_MODE` como verdadero. Luego, verifique los logs de CloudWatch para la función Lambda para obtener los logs de depuración.

* El evento pudo ser un auténtico fracaso. Para comprobarlo, navegue a <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicLogForwarderDLQ**</DNT> o busque su DLQ en AWS SQS y examine el recurso DLQ.

* Es posible que la región de New Relic y la clave de licencia de ingesta proporcionada a la función Lambda o Firehose no coincidan. Verificarlo y compararlo.

  Por ejemplo, si la región de New Relic es UE, proporcione una clave de licencia de ingesta de New Relic de la región de la UE.

* Es posible que el `NewRelicServerlessLogForwarder` no tenga el disparador CloudWatch. Examine la salida de la pila anidada de CloudFormation.