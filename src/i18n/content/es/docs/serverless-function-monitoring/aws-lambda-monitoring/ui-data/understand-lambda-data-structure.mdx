---
title: Comprender la estructura de datos Lambda
tags:
  - Serverless function monitoring
  - AWS Lambda monitoring
  - UI and data
metaDescription: Read about monitoring for AWS Lambda and how data is structured and stored.
freshnessValidatedDate: never
translationType: machine
---

Nuestro [monitoreo serverless para AWS Lambda](/docs/introduction-new-relic-monitoring-aws-lambda) ofrece un monitoreo profundo del rendimiento de su función Lambda. Este documento explicará el origen, la estructura y el almacenamiento de sus datos Lambda.

## Fuentes de datos Lambda [#data-source]

Nuestros datos de monitoreo Lambda provienen de estas dos fuentes:

* Nuestra instrumentación del agente APM (o instrumentación similar creada por clientes)
* Métricas de AWS CloudWatch

Para obtener detalles sobre cómo se configuran estos datos y cómo fluyen a New Relic, consulte los [procedimientos de habilitación](/docs/install-enable-new-relics-monitoring-aws-lambda).

Los datos que se muestran en [la UI](/docs/lambda-monitoring-ui) son una combinación de estas fuentes de datos. Por ejemplo, la página <DNT>**Overview**</DNT> muestra datos informados por instrumentación, mientras que la página <DNT>**Metrics**</DNT> muestra datos de CloudWatch.

## Definiciones de eventos y atributos [#data-structure]

Los datos lambda se almacenan en nuestra base de datos (NRDB) como [evento](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event) (objetos de datos con [atributo](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#attribute) asociado).

Los datos Lambda se adjuntan a los siguientes tipos de eventos. Seleccione el nombre de un evento para ver su atributo.

* [`AwsLambdaInvocation` evento](/attribute-dictionary/?event=AwsLambdaInvocation): captura el tiempo general y los metadatos asociados. Una invocación de Lambda genera un único evento `AwsLambdaInvocation` .
* [`AwsLambdaInvocationError` evento](/attribute-dictionary/?event=AwsLambdaInvocationError): si ocurre un error durante una Lambda, se generará este evento.
* [`Span`](/attribute-dictionary/?event=Span): esto incluye detalles sobre un segmento de una función Lambda. Los vanos se utilizan para [el rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing). El rastreo distribuido se basa en [el muestreo de datos](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#sampling); Se muestrean el 10% de las invocaciones para generar intervalos.
* Tipos de eventos personalizados: Con alguna API del agente, se puede crear un evento personalizado y asociarlo con una invocación Lambda particular, y luego consultar con NRQL.

Para obtener más información sobre los límites de almacenamiento de eventos, consulte [Acceso y requisitos](/docs/introduction-new-relic-monitoring-aws-lambda#requirements).
