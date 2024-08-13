---
title: O monitor não produz tráfego
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
metaDescription: Synthetic monitors will fail with a network traffic error if you do not use the built-in objects for your script.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Seu teste de API de monitoramento sintético New Relic ou script com do monitor do browser parece estar sendo executado como você gostaria, mas sempre retorna este erro:

`NetworkError: Monitor produced no traffic`

## Solução

Embora o monitoramento sintético permita a importação de módulos de rede Node.js, ele requer o uso de objetos integrados para capturar o tráfego de rede para [monitorar o script do browser](/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers) (`$browser`) e [testes de API](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-api-tests) (`$http`). Isso permite que a New Relic rastreie solicitações de rede e relate tempos de carregamento de recursos, códigos de status e outros detalhes.

Se você solicitou manualmente uma biblioteca como `request` e está usando esse módulo exclusivamente nas etapas do script, o Sintético não será capaz de capturar o tráfego de rede. É por isso que você vê o erro de rede.

Para resolver este problema, não importe a biblioteca manualmente. Em vez disso, use os objetos integrados, que fornecem a mesma funcionalidade.

Pode haver algumas funções que não estão disponíveis com os objetos integrados. Nesses casos, você pode querer fazer uma solicitação única ou de espaço reservado usando o objeto integrado e concluir o restante das etapas do monitor com um módulo importado. Esta não é uma solução recomendada porque os resultados do tráfego de rede não refletirão a totalidade do que o monitor está fazendo. No entanto, isso resolverá esse erro e permitirá que o monitor seja executado com êxito.
