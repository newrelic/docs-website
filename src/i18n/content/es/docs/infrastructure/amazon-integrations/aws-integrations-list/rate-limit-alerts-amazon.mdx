---
title: Alertas de límite de tarifas de Amazon
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting procedures to resolve throttled AWS data with your infrastructure integration.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Está experimentando un aumento masivo del uso AWS en [el panel New Relic ](/docs/infrastructure/new-relic-infrastructure/data-instrumentation/new-relic-apm-data-infrastructure)para su cuenta AWS debido a una gran cantidad de API de llamadas Amazon EC2 y/o ELB. Esto se manifiesta como una alerta de limitación de velocidad de Amazon. Esto también puede resultar en un aumento en su [factura de CloudWatch](/docs/infrastructure/infrastructure-integrations/troubleshooting/cloudwatch-billing-issues).

## Solución

Si tiene problemas de aceleración, pruebe estas soluciones según corresponda:

1. [Considere ajustar la configuración](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent) de su agente de infraestructura.
2. [Desconecte la integración de AWS](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#disconnect) que está causando problemas de limitación.
3. Póngase en contacto [con support.newrelic.com](https://support.newrelic.com/) para desactivar las llamadas que se realizan en nombre de cada integración de AWS.

## Causa

Nuestra integración de Amazon consulta sus servicios de AWS según el [intervalo de sonido](/docs/infrastructure/infrastructure-integrations/amazon-integrations/aws-polling-intervals-infrastructure-integrations), que varía según la integración. intervalo de sondeo asegúrese de que sus datos AWS estén actualizados y que cada entidad AWS sea sondeada durante cada intervalo.

* Nuestra integración ELB realiza llamadas a la API de Amazon ELB.
* Nuestra integración EC2, VPC y EBS realiza llamadas a la Amazon EC2 API.

Si tiene una gran cantidad de entidad de integración AWS , el intervalo de sonido puede acelerar los datos que se comunican entre Amazon y New Relic. Por ejemplo, si tiene 200 Elastic Load Balancers, New Relic crea una API de llamada para extraer datos de cada uno de esos balanceadores de carga cada cinco minutos.
