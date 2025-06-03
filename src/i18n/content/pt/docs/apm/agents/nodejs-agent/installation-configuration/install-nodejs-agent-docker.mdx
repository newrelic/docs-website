---
title: Instale o agente Node.js para Docker
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
metaDescription: How to use New Relic's Node.js agent to instrument Node.js applications deployed in Docker containers.
freshnessValidatedDate: never
translationType: machine
---

Você pode usar nosso agente Node.js para implantar o aplicativo Node.js no docker contêiner. Este documento explica como construir, configurar e implantar seu aplicativo Node.js Dockerizado que você instrumentou com New Relic.

Se precisar de ajuda geral com a instalação do agente Node.js, consulte nossas [principais instruções de instalação](/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent).

## Instrumento seu contêiner [#instrument]

<Callout variant="caution">
  Não inclua sua chave de licença no Dockerfile ou na imagem Docker . Para obter mais informações, consulte [nossa documentação sobre segurança de chave de licença](/docs/accounts/install-new-relic/account-setup/license-key#license-key-security).
</Callout>

Fazendo algumas alterações de configuração e adicionando variáveis de ambiente New Relic ao seu Dockerfile existente, você pode equipar seu aplicativo Dockerizado com nosso agente Node.js.

1. Adicione `newrelic` ao seu `package.json`:

   ```json
   "newrelic": "latest",
   ```

   Você pode atualizar o valor `latest` para instalar uma versão específica ou usar qualquer uma das outras opções fornecidas pelo [formato`package.json` ](https://docs.npmjs.com/files/package.json#dependencies). Consulte [as notas de versão do agente Node.js](/docs/release-notes/agent-release-notes/nodejs-release-notes) para obter informações sobre versões anteriores do agente.

2. Injete o agente no seu comando start `node` para instrumentar seu aplicativo. A configuração do seu contêiner pode permitir que você edite o `ENTRYPOINT` para incluir o módulo `newrelic` primeiro com o sinalizador Node.js `-r`/`--require` quando o comando node for invocado. Se o seu Dockerfile contiver algum desses comandos de inicialização, você poderá alterá-los desta maneira:

   * Altere `node YOUR_PROGRAM.js` para `node -r newrelic YOUR_PROGRAM.js`
   * Altere `ENTRYPOINT ['node', 'YOUR_PROGRAM.js']` para `ENTRYPOINT ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
   * Altere `CMD ['node', 'YOUR_PROGRAM.js']` para `CMD ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
   * Se você tiver um script npm para executar seu programa, como `npm start`, poderá modificar esse script programaticamente executando `npm pkg set scripts.start="node -r newrelic your-program.js"`.
   * Se você não consegue controlar como seu programa é executado, você pode carregar o módulo `newrelic` antes de qualquer outro módulo em seu programa adicionando `require('newrelic')` ao topo do seu arquivo de entrada.

3. Crie sua imagem Docker da maneira que você faz normalmente.

4. Para executar seu aplicativo Docker com o agente ativado, adicione o <InlinePopover type="licenseKey" />e [o nome do aplicativo](/docs/agents/manage-apm-agents/app-naming/name-your-application) ao comando `docker run` como variáveis de ambiente:

   ```bash
   docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
           -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
           YOUR_IMAGE_NAME:latest
   ```

<InstallFeedback />

## Outras opções de configuração [#configure]

<Callout variant="important">
  Se o seu agente Node.js for anterior à [v7.2.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-7-2-0) , você precisará adicionar a variável de ambiente `NEW_RELIC_NO_CONFIG_FILE=true` ao seu Dockerfile para que o agente possa ser executado sem um arquivo de configuração. Mais informações sobre nossas definições de configuração e ordem de precedência podem ser encontradas [aqui](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/).

  Se o seu agente Node.js for mais antigo que [a v8.3.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-8-3-0) e você quiser usar [distributed tracing](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing), será necessário habilitá-lo definindo a variável de ambiente `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED` como `true`.
</Callout>

Além de definir o nome do aplicativo ou a chave de licença, você pode definir [outras opções de configuração](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) iniciando seu contêiner com a opção `-e` . Você também pode:

* Habilite um sinalizador de recurso usando sua variável de ambiente (`NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED`), como neste trecho abaixo, substituindo `NAME_OF_FEATURE_FLAG` pelo nome em maiúsculas do sinalizador de recurso:

  ```bash
  docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
          -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
          -e NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
          YOUR_IMAGE_NAME:latest
  ```

* Defina as opções de configuração no seu Dockerfile usando as diretivas `ENV` :

  ```dockerfile
  ENV NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
      NEW_RELIC_LOG=stdout
      # etc.
  ```