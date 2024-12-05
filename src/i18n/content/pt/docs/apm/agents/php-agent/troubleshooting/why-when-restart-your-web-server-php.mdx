---
title: Por que e quando reiniciar seu servidor web (PHP)
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'Why and when you must restart your web server when using the New Relic PHP agent, with links to detailed procedures and troubleshooting steps.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você não tem certeza de por que ou quando deve reiniciar seu servidor web (Apache, PHP-FPM, Nginx, etc.) após:

* [Instalando](/docs/agents/php-agent/installation/php-agent-installation-overview) ou [atualizando](/docs/agents/php-agent/installation/upgrading-php-agent) o agente PHP
* [Atualizando o PHP](/docs/agents/php-agent/troubleshooting/agent-stops-working-after-updating-php) para uma versão principal
* Alterando quaisquer [definições de configuração](/docs/agents/php-agent/configuration/php-agent-configuration) do agente nos arquivos `newrelic.ini` ou `newrelic.cfg`
* Utilizando [o modo de inicialização externo](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced#selecting-external) para o daemon

## Causa

O agente PHP é uma extensão PHP. Quando seu servidor web é inicializado e carrega o PHP, ele também carrega o agente PHP e analisa seu arquivo de configuração `newrelic.ini` . O servidor web usa essa configuração até ser solicitado a recarregar e analisar os arquivos de configuração novamente. Reiniciar solicita que o servidor web faça isso.

Você deve reiniciar seu servidor web quando:

<CollapserGroup>
  <Collapser
    id="config"
    title="Você modifica seu arquivo de configuração."
  >
    As alterações de configuração nos arquivos `newrelic.ini` ou <DNT>**`newrelic.cfg`**</DNT> [não entrarão em vigor](/docs/agents/php-agent/troubleshooting/ini-settings-not-taking-effect-immediately) (por exemplo, nomear seu aplicativo, gerar log, alterar sua chave de licença) até que você reinicie o servidor web.
  </Collapser>

  <Collapser
    id="package-manager-auto-update"
    title="Seu gerenciador de pacote atualiza automaticamente o agente sem reiniciar o servidor web."
  >
    <Callout variant="tip">
      Para evitar esta situação, defina uma exclusão para `newrelic-php5*` no seu gerenciador de pacote.
    </Callout>

    Se o seu gerenciador de pacote [atualizar automaticamente o agente](/docs/agents/php-agent/installation/upgrading-php-agent), você deverá reiniciar o seu servidor web. Atualizar o agente sem reiniciar pode fazer com que o agente pare de reportar.

    Esse problema ocorre quando a atualização automática está habilitada e o daemon é atualizado para uma nova versão. O novo daemon não consegue se comunicar com o agente, que ainda está executando a versão antiga.

    Para evitar isso, o novo agente deve ser iniciado após a atualização. Esse processo é complicado porque uma reinicialização completa do agente também exige que você reinicie o software do servidor web.
  </Collapser>

  <Collapser
    id="daemon-external-mode"
    title="O daemon está configurado para inicializar em modo externo."
  >
    Se você tiver o agente no [modo de inicialização externa](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced#selecting-external), deverá [iniciar manualmente o daemon](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced#daemon-external) e reiniciar o agente para que o agente relate.
  </Collapser>

  <Collapser
    id="full-restart"
    title={<>O Apache não está reiniciando totalmente com o comando <InlineCode>apachectl restart</InlineCode> .</>}
  >
    O uso do comando `apachectl restart` nem sempre reinicia totalmente o servidor Web e, portanto, não analisa novamente os arquivos de configuração do agente. A New Relic recomenda usar:

    ```
    apachectl stop
    apachectl start
    ```
  </Collapser>
</CollapserGroup>
