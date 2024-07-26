---
title: Desabilitar o agente APM
tags:
  - APM
  - Maintenance
metaDescription: How to temporarily disable your APM agent.
freshnessValidatedDate: never
translationType: machine
---

Você pode desabilitar temporariamente um agente APM para fins de teste ou resolução de problemas. Este documento explica os procedimentos para desligar temporariamente o agente APM.

Procedimentos relacionados:

* Para desabilitar permanentemente o APM, [desinstale o agente](/docs/agents/manage-apm-agents/installation/uninstall-agent).
* Para configurar um agente para monitor algumas coisas, mas não outras, use [instrumentação personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/).

## Desabilitar ou desligar o agente APM [#agents]

Selecione seu tipo de agente para obter instruções:

<CollapserGroup>
  <Collapser
    id="go"
    title="Go"
  >
    Existem duas maneiras principais de desabilitar o agente Go:

    * Remova a importação do pacote `github.com/newrelic/go-agent` do seu aplicativo e remova ou comente quaisquer chamadas para o namespace `newrelic` . Em seguida, recompile e reinicie seu aplicativo.

    * Use a definição de configuração [`enabled`](/docs/agents/go-agent/configuration/go-agent-configuration#enabled) . Em seguida, recompile e reinicie seu aplicativo. (Isso **não** reduzirá a sobrecarga porque a instrumentação ainda está em execução; apenas impedirá o envio de dados para o [coletor New Relic](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#collector).)

      <Callout variant="tip">
        Depois de desabilitar o agente, pode levar alguns minutos para que os dados parem de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    Existem três maneiras principais de desabilitar o agente Java:

    * Configure [`agent_enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-agent_enabled) como `false` e reinicie a JVM.

    * Use o sinalizador de linha de comando JVM:

      ```ini
      -Dnewrelic.config.agent_enabled=false
      ```

      Em seguida, reinicie a JVM.

    * Remova o arquivo `newrelic.jar` ou `newrelic.yml` e reinicie a JVM.

      <Callout variant="tip">
        Depois de desabilitar o agente, pode levar alguns minutos para que os dados parem de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="net"
    title=".NET"
  >
    O método para desabilitar o agente depende se você está usando framework ou Core:

    * .NET framework: defina [`agentEnabled`](/docs/agents/net-agent/configuration/net-agent-configuration#config-agentEnabled) como `false` no arquivo `newrelic.config` global, encontrado em `C:\ProgramData\New Relic\.NET Agent\`. Se o aplicativo estiver hospedado no IIS, reinicie o IIS. Se for auto-hospedado (não IIS), reinicie o aplicativo.

    * .NET Core: defina [`agentEnabled`](/docs/agents/net-agent/configuration/net-agent-configuration#config-agentEnabled) como `false` no arquivo `newrelic.config` encontrado no diretório de instalação do agente Core (para Windows junto com `NewRelic.Profiler.dll` e para Linux junto com `NewRelic.Profiler.so`). Se você usar o módulo ASP.NET Core, redefina o IIS. Caso contrário, reinicie seu aplicativo Core.

      <Callout variant="tip">
        Depois de desabilitar o agente, pode levar alguns minutos para que os dados parem de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="node"
    title="Node.js"
  >
    Existem duas maneiras principais de desabilitar o agente Node.js:

    * Defina [`agent_enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#enabled) como `false` no arquivo de configuração do agente e reinicie o servidor de aplicativos.

    * Defina a variável de ambiente [`NEW_RELIC_ENABLED`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#enabled) como `false`.

      <Callout variant="tip">
        Depois de desabilitar o agente, pode levar alguns minutos para que os dados parem de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    Para desativar o agente PHP, defina a configuração [`newrelic.enabled`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-enabled) como `false` e reinicie o servidor web ou PHP.

    <Callout variant="tip">
      Depois de desabilitar o agente, pode levar alguns minutos para que os dados parem de aparecer.
    </Callout>
  </Collapser>

  <Collapser
    id="python"
    title="Python"
  >
    Existem três maneiras principais de desabilitar o agente Python, dependendo de sua preferência e configuração:

    * [Instalação padrão](/docs/agents/python-agent/installation/standard-python-agent-install#install): use a configuração [`monitor_mode`](/docs/agents/python-agent/configuration/python-agent-configuration#monitor_mode) . Isso pode ser feito editando o arquivo de configuração ou usando uma [variável de ambiente](/docs/agents/python-agent/configuration/python-agent-configuration#environment-variables).

    * Instalação padrão com script `newrelic-admin` : remova a referência a esse script em seu aplicativo.

    * [Instrumentação manual](/docs/agents/python-agent/installation-configuration/python-agent-integration#manual-integration): Remova o script de inicialização da sua aplicação.

      <Callout variant="tip">
        Depois de desabilitar o agente, pode levar alguns minutos para que os dados parem de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby"
  >
    Existem várias maneiras de desabilitar o agente Ruby, dependendo de sua preferência e configuração.

    Esses métodos removerão a maior parte da instrumentação, mas ainda haverá uma pequena quantidade de atividade e sobrecarga:

    * Use a definição de configuração [`agent_enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#agent_enabled) . Isso pode ser feito no arquivo de configuração ou nas seções por ambiente. Reinicie seu servidor de aplicativos depois.

    * Faça o mesmo por meio de uma [variável de ambiente](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#Options) e reinicie o servidor de aplicativos.

      Os métodos a seguir removerão toda a instrumentação e sobrecarga:

    * Remova `newrelic_rpm` do Gemfile e instale o pacote.

    * Defina o seguinte no Gemfile e na instalação do pacote:

      ```ruby
      gem 'newrelic_rpm', :require => false
      ```

      Esta opção garante que a gem seja instalada se for necessária em algum lugar do aplicativo, mas não a instala durante o empacotamento.

      <Callout variant="tip">
        Depois de desabilitar o agente, pode levar alguns minutos para que os dados parem de aparecer.
      </Callout>
  </Collapser>
</CollapserGroup>
