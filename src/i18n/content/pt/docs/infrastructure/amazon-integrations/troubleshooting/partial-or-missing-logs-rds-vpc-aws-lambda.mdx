---
title: 'Log parcial ou ausente para RDS, VPC, AWS Lambda'
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

Você está usando `NewRelic-log-ingestion`, a função do Lambda para enviar log da AWS para nosso monitoramento RDS Enhanced, integração de log de fluxo VPC ou versões anteriores (alfa e beta) de monitoramento para AWS Lambda. Não está funcionando ou está enviando dados parciais.

## Solução

As `NewRelic-log-ingestion` versões lambda anteriores à 2.1 estão sendo descontinuadas. Atualize para os lambdas mais recentes publicados no repositório AWS Serverless. Você pode usar a [CLI do New Relic](https://developer.newrelic.com/build-tools/new-relic-one-applications/cli) ou atualizar manualmente.

Recomendado: A principal maneira de atualizar a função de ingestão log do Lambda é seguir [os procedimentos padrão](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/update-lambda-monitoring) para atualizar a função usando a CLI do New Relic.

Você também pode atualizar a função manualmente:

1. Evite falso positivo em alertas: Siga [os procedimentos de interface](/docs/alerts/new-relic-alerts/configuring-alert-policies/update-or-disable-policies-conditions#condition-on-off) ou [procedimentosAPI ](/alerts/rest-api-alerts/new-relic-alerts-rest-api/disable-enable-alerts-conditions-using-api)para desabilitar todas as condições de alerta associadas ao monitoramento de integração com AWS Lambda, monitoramento RDS Enhanced e VPC Flow log.
2. Remova a versão lambda desatualizada do lambda: acesse o console do AWS Lambda e remova `newrelic-log-ingestion`. Esteja ciente de que isso interrompe o monitoramento do RDS Enhanced e a integração do log do VPC Flow até que a próxima etapa seja concluída.
3. Reative o serviço: siga as instruções em [monitoramento RDS Enhanced](/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-enhanced-monitoring-integration#activate) ou [VPC Flow log](/docs/integrations/amazon-integrations/aws-integrations-list/aws-vpc-flow-logs-monitoring-integration#enable) ou siga a etapa para [configurar o log do CloudWatch para transmitir para o New Relic Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#stream-logs).
4. Verifique se seus dados estão fluindo pelo novo lambda.
