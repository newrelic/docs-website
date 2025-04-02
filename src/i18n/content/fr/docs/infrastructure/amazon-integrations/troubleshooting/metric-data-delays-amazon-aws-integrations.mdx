---
title: retards de données métriques dans l'intégration AWS
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting tips for delays between the time your AWS integration makes an API request and New Relic infrastructure monitoring returns the metric data.
freshnessValidatedDate: never
translationType: machine
---

## Problème

Vous remarquez des délais entre le moment où votre intégration AWS effectue une demande d&apos;API et le moment où infrastructure renvoie les données métriques.

## Solution

Selon l&apos;intégration AWS, l&apos;agent infrastructure peut subir des retards explicites ou implicites dans le délai entre la demande d&apos;API et les données métriques renvoyées. Pour en savoir plus sur cette cause, voir [Cause](#cause).

Normalement, les retards ne s’additionnent pas. Avec un délai explicite, New Relic s&apos;attend à ce que les données métriques soient au point de délai dans le temps. Par exemple, si New Relic utilise un délai explicite de cinq minutes, à 9h00, le point de données le plus récent devrait être celui de 8h55.

Toutefois, les délais peuvent varier selon les clients et les comptes. Si vous rencontrez des retards inhabituels dans vos données métriques :

1. Vérifiez si l’intégration de votre infrastructure présente [des retards explicites](#explicit) ou [des retards implicites](#implicit) avec requests API pour les données métriques.
2. Utilisateur CloudWatch : prenez une capture d&apos;écran des données métriques dans votre console CloudWatch et joignez-la lorsque vous demandez de l&apos;aide sur [support.newrelic.com](https://support.newrelic.com/).

À l&apos;aide de la capture d&apos;écran de votre console CloudWatch , le support New Relic dépannera si le retard se produit dans infrastructure ou directement dans AWS.

## Cause

Selon l&apos;intégration AWS, l&apos;agent infrastructure peut subir des retards explicites ou implicites dans le délai entre la demande d&apos;API et les données métriques renvoyées.

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
        Des retards explicites

        (défini spécifiquement)
      </td>

      <td>
        Les délais explicites sont ceux que New Relic définit dans le code pour obtenir des données plus fiables. Dans certains cas, la demande d&apos;API à AWS peut renvoyer une valeur, mais une demande pour la même métrique une minute plus tard renvoie une valeur différente. Pour réduire la possibilité que cela se produise, New Relic définit des délais explicites. Par exemple:

        * Si New Relic utilise un délai explicite de cinq minutes, un appel d&apos;API à 9h00 requests des métriques de 8h50 à 8h55.

        * Si New Relic n&apos;utilise pas un délai explicite de cinq minutes, un appel d&apos;API à 9h00 requests des métriques de 8h55 à 9h00.

          Des retards explicites peuvent provenir de ces intégrations Amazon :

        * [ALB](/docs/aws-alb-integration): 5 minutes

        * [ELB](/docs/aws-elb-integration): 5 minutes

        * [CloudFront](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-cloudfront-monitoring-integration): 3 minutes

        * [RDS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-rds-monitoring-integration): 5 minutes

        * [SNS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-sns-monitoring-integration): 10 minutes
      </td>
    </tr>

    <tr id="implicit">
      <td>
        Retards implicites

        (attendu mais pas spécifiquement défini)
      </td>

      <td>
        Les retards implicites sont des modèles que New Relic a rencontrés lors de l&apos;intégration. Elles ne sont pas toujours présentes et ne sont pas exactes.

        En général, les retards implicites ont tendance à provenir requests de mesures AWS CloudWatch, y compris ces intégrations Amazon :

        * [DynamoDB](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-dynamodb-monitoring-integration): environ 1 minute
        * [EBS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-ebs-monitoring-integration): Environ 15 minutes
        * [EC2](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-ec2-monitoring-integration): Environ 5 minutes
        * [ElastiCache](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-elasticache-monitoring-integration): Environ 5 minutes
        * [Lambda](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-lambda-monitoring-integration): Environ 1 minute
        * [SQS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-sqs-monitoring-integration): Environ 5 minutes
      </td>
    </tr>
  </tbody>
</table>