---
title: Monitoramento de Browser e do agente PHP
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: Instrumentation for your New Relic PHP agent to set up browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

Por padrão, o agente PHP adiciona automaticamente [monitoramento de Browser](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) às páginas web da sua aplicação. Neste processo automatizado, o agente PHP injeta o trecho JavaScript do agente browser em suas páginas da web. Isso significa que você obtém monitoramento de desempenho do browser front-end sem precisar inserir manualmente o trecho JavaScript no elemento head da sua página.

Você pode ativar ou desativar a instrumentação automática no arquivo de configuração do agente PHP ou pode usar a API do agente PHP para configurar manualmente o monitoramento do browser.

## Use ou desative a instrumentação automática [#auto_instrumentation]

Por padrão, o agente PHP injeta automaticamente o trecho JavaScript de monitoramento do browser em suas páginas. Para alterar essa configuração, edite a configuração [`newrelic.browser_monitoring.auto_instrument`](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#inivar-autorum) no arquivo INI.

```ini
newrelic.browser_monitoring.auto_instrument=1
```

A instrumentação automática não funciona quando o campo de cabeçalho HTTP `Content-Length` está definido. Para utilizar o monitoramento do Browser nesta situação, desabilite a autoinstrumentação e [insira manualmente](#manual_instrumentation) o cabeçalho e rodapé JavaScript em seus templates.

## Instrumento manualmente via API do agente [#manual_instrumentation]

Para configurar manualmente o monitoramento do Browser, inclua o script apropriado em suas páginas. O agente PHP New Relic possui uma API para gerar automaticamente o cabeçalho e rodapé JavaScript necessários.

<Callout variant="important">
  As chamadas para a API do agente PHP estão condicionadas ao carregamento da extensão `newrelic` para que o agente PHP esteja em execução. Se o agente não estiver em execução, as chamadas para gerar o cabeçalho e rodapé JavaScript resultarão em erros, pois as funções não serão definidas.
</Callout>

Para mais informações, veja:

* [`auto_instrument` configurações do agente](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum)
* `newrelic_get_browser_timing_header()`
* `newrelic_get_browser_timing_footer()`

## Instrumento manual para vários frameworks [#manual_generic]

Este documento não fornece procedimentos detalhados para inserir manualmente o agente browser por meio da API do agente. Isto ocorre porque existem muitas maneiras possíveis de construir uma framework.

Os [exemplos de instrumentação manual](#manual_examples) mostram como adicionar instrumentação a estruturas que já suportam instrumentação automática. Se você estiver usando outro framework ou versões modificadas do Drupal ou WordPress, certifique-se de chamar as funções da API para instrumentação no lugar certo.

1. Insira o valor de retorno de `newrelic_get_browser_timing_header()` como parte da tag `<head>` da página de saída, de preferência como a primeira coisa.
2. Como última coisa antes da tag de fechamento `</body>` no documento, ou o mais próximo possível dela, insira o valor de retorno de `newrelic_get_browser_timing_footer()`.

Aqui estão alguns exemplos básicos.

<CollapserGroup>
  <Collapser
    id="manual_wp"
    title="WordPress"
  >
    Este exemplo mostra como chamar a API do agente PHP para gerar cabeçalhos e rodapés para uma instalação do WordPress usando o tema `twentyten` padrão.

    1. Insira uma chamada para gerar o cabeçalho JavaScript em `website home dir/wordpress/wp-content/themes/twentyten/header.php`.

       ```php
       <body <?php body_class(); ?>>
       <div id="wrapper" class="hfeed">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="masthead">
           ...
       ```

    2. Insira uma chamada para gerar o rodapé de monitoramento do usuário final em `website home dir/wordpress/wp-content/themes/twentyten/footer.php`.

       ```php
       ...
           </div><!-- #site-generator -->
         </div><!-- #colophon -->
         <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
       </div><!-- #footer -->
       ```
  </Collapser>

  <Collapser
    id="manual_drupal"
    title="Drupal"
  >
    Este exemplo mostra como chamar a API do agente PHP para gerar cabeçalhos e rodapés para uma instalação do Drupal usando o tema `garland` padrão.

    1. Insira uma chamada para gerar o cabeçalho JavaScript logo após a tag de cabeçalho de abertura em `website home dir/drupal/themes/garland/page.tpl.php`.

       ```php
       <div id="container" class="clear-block">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="logo-floater">
           ...
       ```

    2. Insira uma chamada para gerar o rodapé logo antes da última tag de fechamento do layout:

       ```php
       ...
           </div>
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
             <!-- /layout -->
           <?php print $closure ?>
         </body>
       </html>
       ```

       <Callout variant="important">
         No Drupal 7.15, <DNT>**Compress cached pages**</DNT> está ativado por padrão. Se você também selecionar <DNT>**Cache pages for anonymous users**</DNT>, o JavaScript (newrelic.js) não será inserido nas páginas atendidas para usuários anônimos. Isso ocorre porque as páginas do Drupal são compactadas diretamente do banco de dados antes de serem armazenadas no cache (com gzip), portanto, o agente PHP da New Relic não tem chance de analisar nenhum HTML. Nessa situação, a instrumentação manual oferece uma oportunidade melhor de capturar dados para usuários anônimos.
       </Callout>

       <Callout variant="important">
         O Drupal 10.2 introduziu uma [nova alteração](https://www.drupal.org/node/3298551) que faz com que ele defina um cabeçalho `content-length` . O agente PHP New Relic não consegue injetar automaticamente a instrumentação automática do navegador quando o campo de cabeçalho HTTP `Content-Length` está definido. Para continuar usando o monitoramento do Browser, desative a instrumentação automática do navegador e insira manualmente o cabeçalho e rodapé JavaScript em seus templates.
       </Callout>
  </Collapser>
</CollapserGroup>

## Ver dados do browser [#viewing]

Depois que você ativar o monitoramento do browser e gerar tráfego para seu aplicativo, os dados aparecerão na [página do browser <DNT>**Summary**</DNT> ](/docs/browser/new-relic-browser/getting-started/browser-overview-page-website-performance-summary)do seu aplicativo. Há um pequeno atraso na primeira vez que você inicia o daemon (ou quando o agente PHP encontra um novo aplicativo) enquanto o daemon verifica as configurações. Depois disso, o trecho JavaScript da New Relic está disponível.

## Desativar instrumentação automática [#disable]

Para saber como desabilitar o monitoramento do Browser com a configuração do agente PHP, consulte [opção de monitoramento do Browser config](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum).

Para saber como usar a API para desativar o monitoramento do browser, consulte [`newrelic_disable_autorum()`](/docs/agents/php-agent/php-agent-api/newrelic_disable_autorum).
