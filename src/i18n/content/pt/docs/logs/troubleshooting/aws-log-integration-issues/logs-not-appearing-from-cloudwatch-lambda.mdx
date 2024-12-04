---
title: Logs não aparecem do CloudWatch via Lambda
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

Os logs não estão aparecendo no New Relic para um CloudWatch via configuração de integração do Lambda.

## Solução

Possíveis razões e suas soluções:

* A chave de licença de ingestão do New Relic pode não ser válida. Na sua conta da AWS, encontre o recurso com ID lógico `NewRelicLogsLicenseKeySecret` de <DNT>**CloudFormation stack &gt; Resources**</DNT> e verifique a chave.

* Para depurar mais, navegue até <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicServerlessLogForwarder (Lambda Function) &gt; Configuration &gt; Environment Variables**</DNT> e defina o parâmetro `DEBUG_MODE` como verdadeiro. Em seguida, verifique os logs do CloudWatch para a função do Lambda para obter os logs de depuração.

* O evento pode ter sido um verdadeiro fracasso. Para verificar, navegue até <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicLogForwarderDLQ**</DNT> ou procure seu DLQ no AWS SQS e examine o recurso DLQ.

* A região New Relic e a chave de licença ingest fornecida para a função do Lambda ou Firehose podem não corresponder. Verifique e combine.

  Por exemplo, se a região do New Relic for UE, forneça uma chave de licença de ingestão do New Relic da região UE.

* O `NewRelicServerlessLogForwarder` pode não ter o gatilho do CloudWatch. Examine a saída da pilha aninhada do CloudFormation.