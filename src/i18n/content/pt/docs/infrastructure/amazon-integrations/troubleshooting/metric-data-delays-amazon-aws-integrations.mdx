---
title: Atrasos de dados métricos na integração AWS
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

Você percebe atrasos entre o momento em que sua integração AWS faz uma solicitação API e a infraestrutura retorna os dados métricos.

## Solução

Dependendo da integração da AWS, o agente de infraestrutura pode enfrentar atrasos explícitos ou implícitos no tempo entre a solicitação da API e os dados de métrica retornados. Para obter mais informações sobre esta causa, consulte [Causa](#cause).

Normalmente, os atrasos não se somam. Com um atraso explícito, a New Relic espera que os dados da métrica estejam no ponto de atraso. Por exemplo, se o New Relic usar um atraso explícito de cinco minutos, às 9h o ponto de dados mais recente deverá ser o das 8h55.

No entanto, os atrasos podem variar de acordo com o cliente e a conta. Se você tiver atrasos incomuns nos seus dados métricos:

1. Verifique se a sua integração de infraestrutura possui [atrasos explícitos](#explicit) ou [implícitos](#implicit) com solicitações API para dados métricos.
2. Usuário do CloudWatch: Faça uma captura de tela dos dados métricos em seu console do CloudWatch e anexe-a quando solicitar suporte em [support.newrelic.com](https://support.newrelic.com/).

Usando a captura de tela do console do CloudWatch, o suporte da New Relic solucionará o problema se o atraso ocorrer na infraestrutura ou diretamente na AWS.

## Causa

Dependendo da integração da AWS, o agente de infraestrutura pode enfrentar atrasos explícitos ou implícitos no tempo entre a solicitação da API e os dados de métrica retornados.

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
        Atrasos explícitos

        (definido especificamente)
      </td>

      <td>
        Atrasos explícitos são aqueles que a New Relic define no código para obter dados mais confiáveis. Em alguns casos, a solicitação da API para a AWS pode retornar um valor, mas uma solicitação da mesma métrica um minuto depois retorna um valor diferente. Para reduzir a possibilidade de isso ocorrer, a New Relic define atrasos explícitos. Por exemplo:

        * Se New Relic usar um atraso explícito de cinco minutos, uma chamada de API às 9h solicita métrica das 8h50 às 8h55.

        * Se New Relic não usar um atraso explícito de cinco minutos, uma chamada de API às 9h solicita métrica das 8h55 às 9h.

          Atrasos explícitos podem vir destas integrações da Amazon:

        * [ALB](/docs/aws-alb-integration): 5 minutos

        * [ELB](/docs/aws-elb-integration): 5 minutos

        * [CloudFront](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-cloudfront-monitoring-integration): 3 minutos

        * [RDS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-rds-monitoring-integration): 5 minutos

        * [SNS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-sns-monitoring-integration): 10 minutos
      </td>
    </tr>

    <tr id="implicit">
      <td>
        Atrasos implícitos

        (esperado, mas não definido especificamente)
      </td>

      <td>
        Atrasos implícitos são padrões que New Relic experimentou com integração. Eles nem sempre estão presentes e não são exatos.

        Em geral, atrasos implícitos tendem a vir de solicitações de informações da AWS do CloudWatch, incluindo estas integrações da Amazon:

        * [DynamoDB](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-dynamodb-monitoring-integration): Aproximadamente 1 minuto
        * [EBS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-ebs-monitoring-integration): Aproximadamente 15 minutos
        * [EC2](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-ec2-monitoring-integration): Aproximadamente 5 minutos
        * [ElastiCache](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-elasticache-monitoring-integration): aproximadamente 5 minutos
        * [Lambda](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-lambda-monitoring-integration): Aproximadamente 1 minuto
        * [SQS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-sqs-monitoring-integration): Aproximadamente 5 minutos
      </td>
    </tr>
  </tbody>
</table>
