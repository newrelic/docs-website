---
title: Retrasos en datos métricos en integración AWS
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting tips for delays between the time your AWS integration makes an API request and New Relic infrastructure monitoring returns the metric data.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Observa retrasos entre el momento en que su integración AWS realiza una solicitud API y la infraestructura devuelve los datos métricos.

## Solución

Dependiendo de la integración AWS , el agente de infraestructura puede experimentar retrasos explícitos o retrasos implícitos en el tiempo entre la solicitud API y los datos métricos devueltos. Para obtener más información sobre esta causa, consulte [Causa](#cause).

Normalmente, los retrasos no se suman. Con un retraso explícito, New Relic espera que los datos métricos estén en el momento del retraso. Por ejemplo, si New Relic utiliza un retraso explícito de cinco minutos, a las 9:00 el punto de datos más reciente debería ser el de las 8:55.

Sin embargo, los retrasos pueden variar según el cliente y la cuenta. Si experimenta retrasos inusuales en sus datos métricos:

1. Verifique si su infraestructura integración tiene [retrasos explícitos](#explicit) o [implícitos](#implicit) con solicitudes API de datos métricos.
2. Usuario de CloudWatch: Tome una captura de pantalla de los datos métricos en su consola de CloudWatch y adjúntela cuando solicite soporte en [support.newrelic.com](https://support.newrelic.com/).

Usando la captura de pantalla de su consola CloudWatch, New Relic Support solucionará el problema si el retraso ocurre en la infraestructura o directamente en AWS.

## Causa

Dependiendo de la integración AWS , el agente de infraestructura puede experimentar retrasos explícitos o retrasos implícitos en el tiempo entre la solicitud API y los datos métricos devueltos.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Metric data delays**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="explicit">
      <td>
        Retrasos explícitos

        (establecido específicamente)
      </td>

      <td>
        Los retrasos explícitos son los que New Relic establece en el código para obtener datos más confiables. En algunos casos, la solicitud de API a AWS puede devolver un valor, pero una solicitud de la misma métrica un minuto después devuelve un valor diferente. Para reducir la posibilidad de que esto ocurra, New Relic establece retrasos explícitos. Por ejemplo:

        * Si New Relic utiliza un retraso explícito de cinco minutos, una llamada API a las 9:00 solicita métrica de 8:50 a 8:55.

        * Si New Relic no utiliza un retraso explícito de cinco minutos, una llamada API a las 9:00 solicita métrica de 8:55 a 9:00.

          Es posible que se produzcan retrasos explícitos debido a estas integraciones de Amazon:

        * [ALBA](/docs/aws-alb-integration): 5 minutos

        * [ELB](/docs/aws-elb-integration): 5 minutos

        * [CloudFront](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-cloudfront-monitoring-integration): 3 minutos

        * [RDS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-rds-monitoring-integration): 5 minutos

        * [SNS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-sns-monitoring-integration): 10 minutos
      </td>
    </tr>

    <tr id="implicit">
      <td>
        Retrasos implícitos

        (esperado pero no establecido específicamente)
      </td>

      <td>
        Los retrasos implícitos son patrones que New Relic ha experimentado con la integración. No siempre están presentes y no son exactos.

        En general, los retrasos implícitos tienden a provenir de solicitudes de métricas de CloudWatch de AWS , incluidas estas integración de Amazon:

        * [DynamoDB](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-dynamodb-monitoring-integration): aproximadamente 1 minuto
        * [EBS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-ebs-monitoring-integration): Aproximadamente 15 minutos
        * [EC2](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-ec2-monitoring-integration): Aproximadamente 5 minutos
        * [ElastiCache](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-elasticache-monitoring-integration): aproximadamente 5 minutos
        * [Lambda](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-lambda-monitoring-integration): Aproximadamente 1 minuto
        * [SQS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-sqs-monitoring-integration): Aproximadamente 5 minutos
      </td>
    </tr>
  </tbody>
</table>
