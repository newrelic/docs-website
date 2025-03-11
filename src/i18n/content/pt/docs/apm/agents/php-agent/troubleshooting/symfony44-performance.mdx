---
title: Sobrecarga do Symfony 4.4 com opcache.preload
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
  - Symfony 4.4
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Ao usar o Symfony 4.4, você enfrenta grandes impactos no desempenho quando `opcache.preload` está ativo.

## Solução [#solution]

1. No seu arquivo `newrelic.ini` , defina `newrelic.preload_framework_library_detection = false`.

2. Certifique-se de que suas [configurações de pré-carregamento sejam compatíveis com Symfony](https://symfony.com/doc/current/performance.html#use-the-opcache-class-preloading).

   <Callout variant="tip">
     Se você estiver usando PHP 7.4, veja:

     * [Documentação de pré-carregamento do PHP 7.4 do Symfony](https://symfony.com/blog/new-in-symfony-4-4-preloading-symfony-applications-in-php-7-4)
     * [Pré-carregando o aplicativo Symfony no PHP 7.4](https://symfonycasts.com/screencast/symfony5-upgrade/preload)
   </Callout>

3. Reinicie seu serviço.

## Causa [#cause]

Quando `newrelic.preload_framework_library_detection` e `opcache.preload` estão ativados, consultamos o status de `opcache` com cada chamada de função. No entanto, há vários problemas relacionados ao uso do Symfony 4.4 que podem resultar no retorno desta consulta `null`. Isso acontece consistentemente causará uma sobrecarga significativa no agente PHP da New Relic.

Atualmente, esse problema só foi relatado por ambientes que usam Kubernetes.
