---
title: Encontre o diretório raiz do agente New Relic
tags:
  - Using New Relic
  - Cross-product functions
  - Troubleshooting
metaDescription: How to find the root directory for New Relic agents.
freshnessValidatedDate: never
translationType: machine
---

Algumas [soluções New Relic](https://newrelic.com/instant-observability/) requerem a instalação de um agente. O diretório raiz do agente é a pasta principal que contém os arquivos do agente. Normalmente, o diretório raiz do agente é o diretório onde o processo de instalação do agente coloca o arquivo de configuração do agente.

Talvez seja necessário localizar o diretório raiz do agente por vários motivos:

* Para personalizar seu [arquivo de configuração](/docs/agents/manage-apm-agents/configuration/configure-agent).
* Para executar [o diagnóstico da New Relic](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics).
* Para [instalar](/docs/agents/manage-apm-agents/installation/install-agent), [atualizar](/docs/agents/manage-apm-agents/installation/update-new-relic-agent) ou [desinstalar](/docs/agents/manage-apm-agents/installation/uninstall-agent) o agente.
* Para solucionar problemas se [nenhum dado aparecer](/docs/agents/manage-apm-agents/troubleshooting/not-seeing-data) na interface do New Relic.

<Callout variant="tip">
  Estas estratégias para localizar o diretório raiz serão aplicáveis se você seguir o [procedimento de instalação](/docs/agents/manage-apm-agents/installation/install-agent) padrão. Se você instalou em um diretório diferente, essas informações poderão não se aplicar.
</Callout>

## Agentes APM

O diretório raiz do agente depende do agente que você está usando:

<CollapserGroup>
  <Collapser
    id="go-agent"
    title="Go agente"
  >
    O diretório raiz do agente Go é o diretório raiz do seu aplicativo, onde você importou o pacote `go-agent` quando [instalou o agente Go](/docs/agents/go-agent/installation/install-new-relic-go).
  </Collapser>

  <Collapser
    id="java-agent"
    title="Agente Java"
  >
    O diretório raiz do agente Java é chamado `newrelic`, que você criou no diretório raiz do servidor de aplicativos quando [instalou o agente Java](/docs/agents/java-agent/installation/install-java-agent).
  </Collapser>

  <Collapser
    id="dotnet-agent-core"
    title="Agente .NET Core 2.0"
  >
    A localização do diretório raiz do agente .NET Core 2.0 depende do seu sistema:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Sistema
          </th>

          <th>
            Localização do diretório raiz do agente
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Windows
          </td>

          <td>
            Procure na [variável de ambiente`CORECLR_NEWRELIC_HOME` ](/docs/agents/net-agent/configuration/net-agent-configuration#environment-variables)do seu aplicativo para encontrar o local do diretório raiz do agente.
          </td>
        </tr>

        <tr>
          <td>
            Linux
          </td>

          <td>
            O local do diretório raiz do agente é `/usr/local/newrelic-netcore20-agent`.

            Você também pode procurar na [variável de ambiente`CORECLR_NEWRELIC_HOME` ](/docs/agents/net-agent/configuration/net-agent-configuration#environment-variables)do seu aplicativo para encontrar o local do diretório raiz do agente.
          </td>
        </tr>

        <tr>
          <td>
            Docker
          </td>

          <td>
            No diretório raiz do seu aplicativo, procure o diretório raiz do agente chamado `NewRelic`, que você criou quando [instalou o agente Core 2.0 com Docker](/docs/agents/net-agent/installation/install-net-core-20-agent-docker#windows-prep).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="dotnet-agent-framework"
    title="Agente do .NET framework"
  >
    O local do diretório raiz do agente .NET framework é `C:\Program Files\New Relic\.NET Agent`.
  </Collapser>

  <Collapser
    id="node-js-agent"
    title="Agente Node.js."
  >
    O diretório raiz do agente Node.js é o diretório raiz do seu aplicativo, onde você copiou `newrelic.js` quando [instalou o agente Node.js.](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent)
  </Collapser>

  <Collapser
    id="php-agent"
    title="Agente PHP"
  >
    A localização do diretório raiz do agente PHP depende de como você instalou o agente:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Método de instalação
          </th>

          <th>
            Localização do diretório raiz
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Com um gerenciador de pacote ou arquivo tar
          </td>

          <td>
            Use [`phpinfo()`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-background) e procure nas seções chamadas <DNT>**Scan this dir for additional .ini files**</DNT> ou <DNT>**Additional .ini files parsed**</DNT> o local do arquivo `newrelic.ini` . Esse arquivo estará no diretório raiz do agente, chamado `newrelic-php5`.

            <Callout variant="tip">
              O diretório raiz do agente PHP é chamado `newrelic-php5` para todas as versões suportadas do PHP, incluindo PHP 7.
            </Callout>
          </td>
        </tr>

        <tr>
          <td>
            Com um sistema de configuração, como Puppet ou Chef
          </td>

          <td>
            Para encontrar todos os locais onde o agente PHP foi instalado, verifique a [variável de ambiente`NR_INSTALL_PHPLIST` ](/docs/agents/php-agent/advanced-installation/silent-mode-install-script-advanced#NR_INSTALL_PHPLIST)para obter uma lista do diretório raiz do agente.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="python-agent"
    title="Agente Python"
  >
    Você pode instalar o agente Python em qualquer lugar do sistema host e fornecer um caminho para ele por meio da variável de ambiente `NEW_RELIC_CONFIG_FILE` ou da chamada de API `newrelic.agent.initialize()` .

    Para encontrar o local do arquivo de configuração do agente, procure na [variável de ambiente`NEW_RELIC_CONFIG_FILE` ou na chamada `newrelic.agent.initialize()` ](/docs/agents/python-agent/configuration/python-agent-configuration#agent-configuration-file)o caminho para o diretório raiz do agente.
  </Collapser>

  <Collapser
    id="ruby-agent"
    title="Agente Ruby"
  >
    A localização do diretório raiz do agente Ruby depende de como você instalou o agente:

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Método de instalação
          </th>

          <th>
            Localização do diretório raiz
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Com a gema `newrelic_rpm`
          </td>

          <td>
            O diretório raiz do agente Ruby está no diretório raiz do seu aplicativo em um diretório chamado `config`.
          </td>
        </tr>

        <tr>
          <td>
            Sem a gema
          </td>

          <td>
            Procure na variável de ambiente `NEW_RELIC_CONFIG_PATH` o caminho para o diretório raiz do agente.

            Se não houver um caminho nessa variável de ambiente, verifique os seguintes diretórios para encontrar aquele que contém o arquivo `newrelic.yml` :

            * `config`
            * `$HOME/.newrelic/`
            * `$HOME/`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Agente móvel [#mobile]

O diretório raiz do agente móvel é o diretório raiz do seu aplicativo.

## Agente de infraestrutura [#infrastructure]

O local do diretório raiz do agente de infraestrutura depende do seu sistema:

<CollapserGroup>
  <Collapser
    id="infra-agent"
    title="Agente de infraestrutura"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Sistema
          </th>

          <th>
            Localização do diretório raiz
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Windows
          </td>

          <td>
            `C:\Program Files\New Relic\newrelic-infra\`
          </td>
        </tr>

        <tr>
          <td>
            Linux, docker e Elastic Beanstalk
          </td>

          <td>
            `/etc`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="infra-on-host"
    title="Integração sem host"
  >
    A localização do diretório raiz para integração no host é `/etc`.
  </Collapser>

  <Collapser
    id="infra-cloud"
    title="Integração na nuvem"
  >
    Como a integração na nuvem não está instalada, mas está conectada ao nosso monitoramento de infraestrutura através do seu provedor de serviço em nuvem, não existe um diretório raiz específico para integração na nuvem.
  </Collapser>
</CollapserGroup>

## Informações de diretório para outras ferramentas [#other]

Para aprender sobre diretórios de outras ferramentas não listadas aqui, consulte a [documentação de uma solução específica](https://newrelic.com/instant-observability/) .
