---
title: Guia de migração de camadas .NET OpenTracing para AWS Lambda
tags:
  - Agents
  - NET agent
  - Migration guides
metaDescription: This guide helps New Relic AWS Lambda Agent for .NET users migrate from NewRelic.OpenTracing.AmazonLambda.Tracer to AWS Lambda layers
freshnessValidatedDate: never
translationType: machine
---

Este guia descreve as principais mudanças entre `NewRelic.OpenTracing.AmazonLambda.Tracer` e a camada Lambda do agente .NET. Ele também detalha as diferentes opções disponíveis ao atualizar e como migrar com sucesso para usar a camada Lambda do agente .NET.

<Callout variant="important">
  O suporte para instrumentado AWS função do Lambda começa na v10.24.0 do agente .NET.
</Callout>

Aqui estão as principais mudanças para esta transição:

* O pacote `NewRelic.OpenTracing.AmazonLambda.Tracer` entra em conflito com a instrumentação de agente e deve ser removido.
* Quaisquer alterações de código feitas na função AWS do Lambda para OpenTracing precisam ser revertidas.
* O agente New Relic .NET será usado para instrumentar a função AWS do Lambda.
* As camadas do AWS Lambda estão disponíveis quando você agrupa o agente .NET e a extensão New Relic Lambda necessária.
* Na maioria dos casos, a instrumentação da função AWS do Lambda é automática.
* O agente .NET conta com a extensão New Relic Lambda para envio de dados na AWS função do Lambda.
* As camadas podem ser configuradas usando a ferramenta New Relic Lambda CLI, um plug-in framework sem servidor ou manualmente.
* os nomes e tempos das métricas serão diferentes porque a forma como a função é instrumentada mudou fundamentalmente.
* Qualquer dashboard, alerta ou consulta baseado na métrica antiga precisará ser atualizado após a migração.

## Removendo NewRelic.OpenTracing.AmazonLambda.tracer e OpenTracing [#remove]

O pacote `NewRelic.OpenTracing.AmazonLambda.Tracer` deve ser removido antes de usar o agente .NET e quaisquer alterações feitas em sua função do Lambda AWS para suportá-lo devem ser desfeitas.

1. A configuração do pacote `NewRelic.OpenTracing.AmazonLambda.Tracer` requer a criação de um novo `FunctionHandler` que chame o `FunctionHandler` original, agrupando-o para ativar a instrumentação. Antes de remover o `NewRelic.OpenTracing.AmazonLambda.Tracer` você precisará desfazer essa chamada para que a limpeza ocorra com mais facilidade.
2. O agente .NET não oferece suporte ao uso API OpenTracing para transmitir dados customizados. Quaisquer alterações em seu código que dependiam da API OpenTracing, seja diretamente ou por meio do pacote `NewRelic.OpenTracing.AmazonLambda.Tracer`, precisam ser removidas ou migradas para usar a API .NET do agente.
3. Remova o pacote `NewRelic.OpenTracing.AmazonLambda.Tracer` do seu projeto. Limpe quaisquer problemas restantes relacionados à remoção.

## Selecionando um método de instalação de camada [#install]

Depois de remover o pacote `NewRelic.OpenTracing.AmazonLambda.Tracer` a próxima etapa é selecionar qual método você usará para instalar e configurar a camada .NET AWS Lambda. Conforme mencionado acima, existem basicamente três opções:

* CLI do New Relic Lambda
* New Relic plug-in framework sem servidor Relic
* Instalação totalmente manual

Recomendamos escolher a CLI do Lambda ou o plug-in framework Serverless, pois eles automatizam a maior parte da configuração. Cada um tem sua própria dependência e requisitos que precisam ser levados em consideração, alguns dos quais serão descritos na próxima seção. Se você já usa uma dessas abordagens, recomendamos manter as coisas simples usando a mesma abordagem para todas as suas funções do Lambda da AWS .

Para obter um conjunto completo de instruções detalhadas de introdução ao monitoramento do AWS Lambda, consulte nosso [guia de ativação](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/enable-aws-lambda-monitoring/).

## CLI do New Relic Lambda [#cli]

<Callout variant="important">
  O suporte para a camada AWS Lambda do agente .NET começa na v0.9.2 da CLI do Lambda.
</Callout>

A CLI do Lambda [início rápido](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) tem um exemplo do comando para atualizar sua função AWS do Lambda para usar a camada de agente .NET. Isso detectará automaticamente o tempo de execução da função e selecionará a camada apropriada. Você pode encontrar opções de configuração adicionais no [repositório CLI do Lambda](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#recommendations).

## New Relic plug-in framework sem servidor Relic [#serverless]

<Callout variant="important">
  O suporte para a camada AWS Lambda do agente .NET começa na v5.3.0 do plug-in da framework Serverless.
</Callout>

O [plug-in framework Serverless início rápido](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) possui as etapas necessárias para instalar o plug-in e atualizar a configuração framework Serverless. Você pode encontrar opções de configuração adicionais no [repositório do plug-in framework Serverless](https://github.com/newrelic/serverless-newrelic-lambda-layers).

## Instalação totalmente manual [#manual]

Embora não recomendemos instrumentar manualmente sua função AWS do Lambda, temos informações sobre as etapas necessárias para fazer isso [aqui](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/#console).

* O agente .NET irá instrumentar automaticamente sua função AWS do Lambda, na maioria dos casos quando instalado manualmente
* A extensão New Relic Lambda ainda é necessária para enviar dados
