---
title: Entenda a estrutura de dados do Lambda
tags:
  - Serverless function monitoring
  - AWS Lambda monitoring
  - UI and data
metaDescription: Read about monitoring for AWS Lambda and how data is structured and stored.
freshnessValidatedDate: never
translationType: machine
---

Nosso [monitoramento Serverless para AWS Lambda](/docs/introduction-new-relic-monitoring-aws-lambda) oferece monitoramento aprofundado de desempenho para sua função do Lambda. Este documento explicará a origem, a estrutura e o armazenamento dos seus dados Lambda.

## Fontes de dados Lambda [#data-source]

Nossos dados de monitoramento Lambda vêm destas duas fontes:

* Nossa instrumentação de agente APM (ou instrumentação semelhante criada por clientes)
* Medições AWS do CloudWatch

Para obter detalhes sobre como esses dados são configurados e como fluem para o New Relic, consulte os [procedimentos de ativação](/docs/install-enable-new-relics-monitoring-aws-lambda).

Os dados exibidos [na interface](/docs/lambda-monitoring-ui) são uma combinação dessas fontes de dados. Por exemplo, a página <DNT>**Overview**</DNT> exibe dados relatados pela instrumentação, enquanto a página <DNT>**Metrics**</DNT> exibe dados do CloudWatch.

## Definições e atributos do evento [#data-structure]

Os dados Lambda são armazenados em nosso banco de dados (NRDB) como [evento](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event) (objetos de dados com [atributo](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#attribute) associado).

Os dados do Lambda são anexados aos seguintes tipos de eventos. Selecione um nome de evento para ver seu atributo.

* [`AwsLambdaInvocation` evento](/attribute-dictionary/?event=AwsLambdaInvocation): captura o tempo geral e os metadados associados. Uma invocação do Lambda gera um único evento `AwsLambdaInvocation` .
* [`AwsLambdaInvocationError` evento](/attribute-dictionary/?event=AwsLambdaInvocationError): se ocorrer um erro durante um Lambda, esse evento será gerado.
* [`Span`](/attribute-dictionary/?event=Span): inclui detalhes sobre um segmento de uma função do Lambda. Os spans são usados para [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing). distributed tracing depende de [amostragem de dados](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#sampling); 10% das invocações são amostradas para gerar spans.
* Tipos de evento personalizado: Com alguma API do agente, o evento personalizado pode ser criado e associado a uma determinada invocação do Lambda, e então consultar o NRQL.

Para obter mais informações sobre limites de armazenamento de eventos, consulte [Acesso e requisitos](/docs/introduction-new-relic-monitoring-aws-lambda#requirements).
