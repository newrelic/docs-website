---
title: Funcionalidade específica do Drupal
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'Drupal websites: Use the newrelic.framework.drupal.modules INI setting to capture special metrics for modules, hooks, views, and browser instrumentation.'
freshnessValidatedDate: never
translationType: machine
---

O agente PHP captura métricas especiais para sites Drupal. Quando essas métricas são coletadas, uma guia <DNT>**Drupal**</DNT> aparece na interface do usuário do New Relic: Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Drupal app)**</DNT>.

## Configuração

A coleção de métricas específicas do Drupal pode ser controlada por [`newrelic.framework.drupal.modules`](/docs/php/php-agent-phpini-settings#inivar-framework-drupal-modules). Está ativado por padrão (nas versões <DNT>**3.0**</DNT> ou superior) e pode ser desativado com:

```ini
newrelic.framework.drupal.modules = 0
```

Embora esta configuração use a palavra "módulos", ela controla a coleção de todas as métricas do Drupal: módulos, visualizações e ganchos.

## Métrica

O agente PHP coleta métricas para o seguinte:

* <DNT>
    **Modules**
  </DNT>

  : Versões 2.5 ou superior. Estas métricas indicam o tempo gasto em cada módulo Drupal. Nas versões 3.5 ou superiores, o tempo é calculado a partir das funções de despacho de gancho `module_invoke` e `module_invoke_all`. Nas versões anteriores, o tempo era calculado a partir de funções de um arquivo com o ".module" extensão onde o nome do arquivo e o prefixo da função correspondiam.

* <DNT>
    **Hooks**
  </DNT>

  : Versões 3.5 ou superior. Essas métricas indicam o tempo gasto em cada gancho do Drupal. O tempo é calculado a partir das funções de despacho de gancho `module_invoke` e `module_invoke_all`.

* <DNT>
    **Views**
  </DNT>

  : Versões 3.5 ou superior. Essas métricas indicam o tempo gasto no método `view::execute` de uma visualização.

## Instrumentação Drupal e Browser [#page-load-timing-rum]

No Drupal 7.15, <DNT>**Compress cached pages**</DNT> está ativado por padrão. Se você também selecionar <DNT>**Cache pages for anonymous users**</DNT>, o JavaScript <InlinePopover type="browser"/>não será inserido nas páginas servidas para usuários anônimos. Isso ocorre porque as páginas do Drupal são compactadas diretamente do banco de dados antes de serem armazenadas no cache (com gzip), portanto, o agente PHP da New Relic não tem chance de analisar nenhum HTML.

Nesta situação, a instrumentação manual oferece uma melhor oportunidade de captura de dados para usuários anônimos. Para maiores informações veja [monitoramento de Browser e o agente PHP](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/)

O Drupal 10.2 introduziu uma [nova alteração](https://www.drupal.org/node/3298551) que faz com que ele defina um cabeçalho `content-length` . O agente PHP New Relic não consegue injetar automaticamente a instrumentação automática do navegador quando o campo de cabeçalho HTTP `Content-Length` está definido. Para continuar usando o monitoramento do Browser, desative a instrumentação automática do navegador e insira manualmente o cabeçalho e rodapé JavaScript em seus templates. Para mais informações, consulte [aqui](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/#auto_instrumentation).

## Tarefas Cron [#cron]

Drupal oferece suporte à execução periódica de tarefas para realizar manutenção de rotina ou trabalho semelhante em nome dos módulos Drupal instalados. Estas tarefas podem ser executadas sem qualquer envolvimento manual além da configuração inicial. Geralmente, elas são chamadas de [tarefas cron](https://drupal.org/cron "O link abre em uma nova janela"). A partir da versão 4.3, o agente PHP New Relic detecta a execução dessas tarefas e as marca automaticamente como [transação em segundo plano,](/docs/features/monitoring-background-processes#ui) independentemente de como foram iniciadas.
