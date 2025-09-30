---
title: Guía de migración de capas de .NET OpenTracing a AWS Lambda
tags:
  - Agents
  - NET agent
  - Migration guides
metaDescription: This guide helps New Relic AWS Lambda Agent for .NET users migrate from NewRelic.OpenTracing.AmazonLambda.Tracer to AWS Lambda layers
freshnessValidatedDate: never
translationType: machine
---

Esta guía describe los principales cambios entre `NewRelic.OpenTracing.AmazonLambda.Tracer` y la capa Lambda del agente .NET. También detalla las diferentes opciones disponibles al actualizar y cómo migrar exitosamente para usar la capa .NET agente Lambda.

<Callout variant="important">
  El soporte para instrumentado AWS función Lambda comienza en la v10.24.0 del agente .NET.
</Callout>

Estos son los principales cambios para esta transición:

* El paquete `NewRelic.OpenTracing.AmazonLambda.Tracer` entra en conflicto con la instrumentación del agente y debe eliminar.
* Cualquier cambio de código realizado en la función Lambda AWS para OpenTracing debe revertir.
* El agente New Relic .NET se empleará para instrumentar la función Lambda AWS .
* Las capas de AWS Lambda están disponibles cuando combina el agente .NET y la extensión New Relic Lambda requerida.
* En la mayoría de los casos, la instrumentación de la función Lambda AWS es automática.
* El agente .NET se basa en la extensión New Relic Lambda para enviar datos en AWS función Lambda.
* Las capas se pueden configurar empleando la herramienta New Relic Lambda CLI, un complemento framework sin servidor o manualmente.
* Los nombres y tiempos métricos diferirán porque la forma en que se instrumenta la función cambió fundamentalmente.
* Cualquier dashboard, alerta o consulta que se base en la métrica anterior deberá actualizar luego de la migración.

## Eliminando NewRelic.OpenTracing.AmazonLambda.rastreador y OpenTracing [#remove]

El paquete `NewRelic.OpenTracing.AmazonLambda.Tracer` debe eliminar antes de emplear el agente .NET y cualquier cambio realizado en su función Lambda AWS para admitirlo debe deshacer.

1. La configuración del paquete `NewRelic.OpenTracing.AmazonLambda.Tracer` requiere crear un nuevo `FunctionHandler` que llame al `FunctionHandler` original y lo ajuste para habilitar la instrumentación. Antes de eliminar el `NewRelic.OpenTracing.AmazonLambda.Tracer` deberás deshacer esa llamada para que la limpieza se realice más fácilmente.
2. El agente .NET no admite el uso de API OpenTracing para pasar datos personalizados. Cualquier cambio en su código que dependa de las API de OpenTracing, ya sea directamente o mediante el paquete `NewRelic.OpenTracing.AmazonLambda.Tracer` , debe eliminar o migrarse para usar las API del agente .NET.
3. Elimine el paquete `NewRelic.OpenTracing.AmazonLambda.Tracer` de su proyecto. Limpie cualquier problema sobrante relacionado con la eliminación.

## Seleccionar un método de instalación de capas [#install]

Luego de eliminar el paquete `NewRelic.OpenTracing.AmazonLambda.Tracer` , el siguiente paso es seleccionar qué método empleará para instalar y configurar la capa .NET AWS Lambda. Como se mencionó anteriormente, existen principalmente tres opciones:

* New Relic Lambda CLI
* New Relic complemento framework Relic Serverless
* Instalación totalmente manual

Recomendamos elegir Lambda CLI o el complemento framework Serverless, ya que automatizan la mayor parte de la configuración. Cada uno tiene sus propias dependencias y requisitos que deben tener, algunos de los cuales se describirán en la siguiente sección. Si ya emplea uno de estos enfoques, le recomendamos mantener las cosas simples empleando el mismo enfoque para todas sus funciones Lambda AWS .

Para obtener un conjunto completo de instrucciones detalladas de introducción al monitoreo AWS Lambda consulte nuestra [guía de habilitación](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/enable-aws-lambda-monitoring/).

## New Relic Lambda CLI [#cli]

<Callout variant="important">
  La compatibilidad con la capa .NET agente AWS Lambda comienza en la versión 0.9.2 de Lambda CLI.
</Callout>

El [inicio rápido](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) de Lambda CLI tiene un ejemplo del comando para actualizar su función AWS Lambda para usar la capa de agente .NET. Esto detectará automáticamente el tiempo de ejecución de la función y seleccionará la capa adecuada. Puede encontrar opciones de configuración adicionales en el [repositorio de Lambda CLI](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#recommendations).

## New Relic complemento framework Relic Serverless [#serverless]

<Callout variant="important">
  La compatibilidad con la capa .NET agente AWS Lambda comienza en la versión 5.3.0 del complemento framework Serverless.
</Callout>

El [inicio rápido del complemento Serverless framework ](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/)tiene los pasos necesarios para instalar el complemento y actualizar la configuración framework Serverless. Puede encontrar opciones de configuración adicionales en el [repositorio del complemento framework Serverless](https://github.com/newrelic/serverless-newrelic-lambda-layers).

## Instalación totalmente manual [#manual]

Si bien no recomendamos instrumentar manualmente su función Lambda AWS , tenemos información sobre los pasos necesarios para hacerlo [aquí](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/#console).

* El agente .NET instrumentará automáticamente su función Lambda AWS , en la mayoría de los casos cuando se instala manualmente
* La extensión New Relic Lambda todavía es necesaria para enviar datos
