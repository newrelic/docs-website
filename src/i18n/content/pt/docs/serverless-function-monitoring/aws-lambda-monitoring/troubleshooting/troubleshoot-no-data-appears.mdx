---
title: Solucionar problemas de ausência de dados no AWS Lambda
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

Depois de gerar tráfego para sua função do Lambda AWS e esperar cinco minutos, nenhum dado de sua função aparece na interface do New Relic . Não há erros no log nem `NRIntegrationErrors` ou `NRIntegrationWarnings` na interface do New Relic .

## Solução

O motivo mais comum para nenhum dado aparecer e nenhum erro é que a [chave de licença e o ID da conta](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/) são de contas diferentes. No caso de incompatibilidade, a [extensãoNew Relic Lambda](https://github.com/newrelic/newrelic-lambda-extension) ou [lambda que processa o log de observação da nuvem](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/) relata os dados com êxito, mas os descarta silenciosamente, pois o ID da conta não corresponde. Isso não resulta em erros ou avisos.

Para resolver esse problema, certifique-se de que a chave de licença e o ID da conta sejam da mesma conta. O uso da [CLI Lambda daNew Relic ](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#rec)para habilitar o monitoramento Serverless é recomendado para minimizar esses tipos de problemas. Você pode atualizar a chave de licença no AWS Secrets Manager. Para o ID da conta e configuração que não usa o AWS Secrets Manager, você pode atualizar as [variáveis de ambiente](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#env-var) com a chave de licença ou ID da conta correta para corrigir o problema.
