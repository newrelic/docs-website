---
title: Solucione problemas de instalação do Node.js
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: Troubleshooting tips if you have problems installing your New Relic Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Se você encontrou algum desses problemas comuns após instalar o agente New Relic Node.js, tente estas dicas de resolução de problemas.

## Solução

Alguns problemas comuns que o usuário encontra após instalar o agente New Relic Node.js incluem:

<CollapserGroup>
  <Collapser
    id="no_data"
    title="Não vendo dados"
  >
    Para minimizar a quantidade de largura de banda que o agente Node.js consome, o New Relic reporta dados apenas uma vez por minuto. Se você adicionar o agente a testes que levam menos de um minuto para serem executados, ele não terá tempo de reportar dados ao New Relic.

    Se você não visualizar o rastreamento da transação ou outros dados após implantar o agente, isso pode ser devido à configuração, framework ou configurações do Apdex. Use [o New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics) para tentar identificar automaticamente o problema.
  </Collapser>

  <Collapser
    id="installation"
    title="Problemas de instalação"
  >
    <table>
      <thead>
        <tr>
          <th>
            <DNT>
              **What to check**
            </DNT>
          </th>

          <th>
            <DNT>
              **Comments**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Executar script
          </td>

          <td>
            Certifique-se de que seu módulo `newrelic` seja carregado primeiro usando o sinalizador `-r/--require` : `node -r newrelic your-program.js`.
          </td>
        </tr>

        <tr>
          <td>
            Módulo principal
          </td>

          <td>
            Se você não puder controlar como o módulo principal é executado, adicione `require('newrelic')` como a primeira linha do módulo principal do aplicativo. Se o require for adicionado posteriormente, o agente Node.js pode não instrumentar adequadamente seu aplicativo.
          </td>
        </tr>

        <tr>
          <td>
            Lógica condicional
          </td>

          <td>
            Se você tiver alguma lógica condicional em seu `require`, mova a lógica condicional para seu arquivo de configuração `newrelic.js` .
          </td>
        </tr>

        <tr>
          <td>
            Frameworks
          </td>

          <td>
            Para problemas com [a estrutura suportada](/docs/agents/nodejs-agent/getting-started/new-relic-nodejs#requirements), certifique-se de usar Connect, Express, Hapi, Kraken ou Restify. Existem outras estruturas Node.js, mas a New Relic não oferece suporte a todas elas.
          </td>
        </tr>

        <tr>
          <td>
            Apdex
          </td>

          <td>
            Para problemas com os resultados do [Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) , tente ajustar a pontuação do Apdex por meio [do arquivo de configuração do agente Node.js](/docs/nodejs/customizing-your-nodejs-config-file#apdex) (`newrelic.js`) ou da [interface do usuário do New Relic](/docs/site/changing-your-apdex-settings).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="logs"
    title="Arquivo de log"
  >
    O agente Node.js grava seu log no arquivo `newrelic_agent.log` no diretório do aplicativo, a menos que você tenha alterado as [configurações de log](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#logging_config). Se o agente não enviar dados ou travar seu aplicativo, você poderá gerar um [arquivo de log de resolução de problemas](/docs/agents/nodejs-agent/troubleshooting/generate-trace-log-troubleshooting-nodejs) para acompanhar relatórios de bugs e [solicitações de suporte](/docs/accounts-partnerships/education/getting-started-new-relic/finding-help).
  </Collapser>

  <Collapser
    id="vm_metrics"
    title="Métrica de VM ausente"
  >
    O agente pode coletar métricas de VM relacionadas à coleta de lixo (GC), memória e CPU. Algumas dessas métricas requerem a instalação de um [módulo nativo adicional](/docs/agents/nodejs-agent/supported-features/node-vm-measurements) .

    Aqui estão alguns problemas comuns e suas soluções:

    <DNT>
      **Problem**
    </DNT>

    Durante a instalação, o npm mostra uma das seguintes mensagens de erro:

    ```
    gyp ERR! configure error
    gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
    ```

    ```
    gyp ERR! build error
    gyp ERR! stack Error: not found: make
    ```

    ```
    make: g++: Command not found
    ```

    <DNT>
      **Solution**
    </DNT>

    Certifique-se de que os pré-requisitos do módulo `node-gyp` estejam instalados. Na plataforma Debian/Ubuntu, use este comando:

    ```bash
    apt-get install build-essential
    ```

    Para obter mais informações, consulte [Medições de VM do Node.js.](/docs/agents/nodejs-agent/extend-your-instrumentation/nodejs-vm-measurements)
  </Collapser>
</CollapserGroup>

Outros recursos de resolução de problemas em nosso fórum do Fórum de Suporte:

* [Resolução de problemas instalados](https://discuss.newrelic.com/t/node-js-troubleshooting-framework-install/108682)
* [Configuração geral resolução de problemas](https://discuss.newrelic.com/t/node-js-troubleshooting-framework-configuration/119977)
