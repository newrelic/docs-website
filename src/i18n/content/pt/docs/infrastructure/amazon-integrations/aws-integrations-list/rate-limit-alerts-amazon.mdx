---
title: Alertas de limite de taxa da Amazon
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

Você está enfrentando um grande aumento no uso AWS no [painel New Relic ](/docs/infrastructure/new-relic-infrastructure/data-instrumentation/new-relic-apm-data-infrastructure)para sua conta AWS devido a um grande número de chamadas de API Amazon EC2 e/ou ELB. Isso se manifesta como um alerta de limitação de taxa da Amazon. Isso também pode resultar em um aumento na sua [conta do CloudWatch](/docs/infrastructure/infrastructure-integrations/troubleshooting/cloudwatch-billing-issues).

## Solução

Se você estiver enfrentando problemas de limitação, tente estas soluções conforme aplicável:

1. [Considere ajustar as definições de configuração](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent) do seu agente de infraestrutura.
2. [Desconecte a integração da AWS](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#disconnect) que está causando problemas de limitação.
3. Entre em contato com [support.newrelic.com](https://support.newrelic.com/) para desativar chamadas feitas em nome de cada integração da AWS.

## Causa

Nossa integração Amazon consulta seus serviços da AWS de acordo com [o intervalo de sondagem](/docs/infrastructure/infrastructure-integrations/amazon-integrations/aws-polling-intervals-infrastructure-integrations), que varia dependendo da integração. intervalo de sondagem garante que seus dados AWS estejam atualizados e que cada entidade AWS seja pesquisada durante cada intervalo.

* Nossa integração ELB realiza chamadas para a API Amazon ELB.
* Nossa integração EC2, VPC e EBS realiza chamadas para a Amazon EC2 API.

Se você tiver uma grande quantidade de entidade de integração AWS , o intervalo de sondagem pode limitar os dados que estão sendo comunicados entre a Amazon e New Relic. Por exemplo, se você tiver 200 Elastic Load Balancers, New Relic faz uma chamada de API para extrair dados de cada um desses balanceadores de carga a cada cinco minutos.
