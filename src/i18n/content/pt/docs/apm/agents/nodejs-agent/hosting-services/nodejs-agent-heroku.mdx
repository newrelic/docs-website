---
title: Agente Node.js e Heroku
tags:
  - Agents
  - Nodejs agent
  - Hosting services
metaDescription: Installation and configuration procedures when using Heroku as a hosting service with New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) é uma solução de plataforma como serviço (PaaS) para hospedagem de aplicativos da web em várias linguagens de agente, incluindo Node.js. Com o New Relic, você pode estender o Heroku com métricas de [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm)e [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser).

Aqui descrevemos considerações especiais para usar o Heroku como um serviço de hospedagem com o agente Node.js da New Relic.

## Instale o complemento do agente [#installing]

Depois de implantar seu aplicativo Node.js no Heroku, instale o agente New Relic. A instalação do complemento cria automaticamente uma conta privada New Relic e configura o acesso aos servidores Heroku.

Para instalar o complemento New Relic por meio da [página de complementos do site Heroku para New Relic](https://addons.heroku.com/newrelic), você deve estar logado no Heroku.

1. Na página de complementos do Heroku para New Relic, selecione o [plano de assinatura apropriado](https://elements.heroku.com/addons/newrelic#pricing). Em seguida, execute este comando do toolbelt:

   ```shell
   heroku addons:create newrelic:$planlevel
   ```

2. Em <DNT>**Select an app**</DNT>, selecione seu aplicativo New Relic.

3. Use este comando do toolbelt para dar ao seu aplicativo um [nome descritivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application):

   ```shell
   heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
   ```

4. Se você estiver usando variáveis de ambiente em vez das configurações do arquivo de configuração `newrelic.js` para [personalizar a configuração do agente Node.js](#variables), use este comando do toolbelt:

   ```shell
   heroku config:set NEW_RELIC_NO_CONFIG_FILE='true'
   ```

5. Verifique o nome do aplicativo New Relic, <InlinePopover type="licenseKey"/>, e [a configuração log ](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#logging_config):

   ```shell
   heroku config
   ```

6. Instale o agente Node.js e salve em sua dependência `npm` .

   ```shell
   npm install newrelic --save
   ```

7. Para garantir que o pacote `newrelic` seja incluído no arquivo `package.json` ao enviar para o Heroku, instale o [pacote do agente New Relic Node.js](/docs/agents/nodejs-agent/installation-configuration/installing-maintaining-nodejs) em seu sistema local. Use o sinalizador Node.js `-r/--require` ao executar seu programa para garantir que o módulo do New Relic esteja carregado:

   ```shell
   node -r newrelic YOUR_PROGRAM.js
   ```

8. Execute os seguintes comandos:

   ```shell
   git add . && git commit -m "Add New Relic"
   git push heroku master && heroku logs  --tail
   ```

9. Reinicie seu dinamômetro.

10. Gere algum tráfego para seu aplicativo.

A New Relic começará a monitorar o desempenho do aplicativo, a experiência do usuário final e o desempenho do host coletados após a instalação do complemento. Dentro de alguns minutos, os dados deverão começar a aparecer na sua [página <DNT>**Summary**</DNT> do APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

## Solucione problemas de sua instalação [#troubleshooting]

Se nenhum dado aparecer alguns minutos após a conclusão dos procedimentos de instalação, siga os [procedimentos de resolução de problemas do agente Node.js.](/docs/agents/nodejs-agent/troubleshooting/troubleshooting-your-nodejs-installation)

## Personalize sua configuração [#variables]

Você pode personalizar o [arquivo de configuração`newrelic.js` ](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#methods-and-precedence)do New Relic para seu agente Node.js. Você também pode usar as variáveis de ambiente do agente Node.js da New Relic no ambiente Heroku para substituir os valores do arquivo de configuração.

Aqui está um exemplo de uso da linha de comando do Heroku para definir variáveis de ambiente em vez de usar o arquivo de configuração `newrelic.js` .

```shell
heroku config:set NEW_RELIC_LICENSE_KEY=your license key
heroku config:set NEW_RELIC_APP_NAME=your production app name
heroku config:set NEW_RELIC_NO_CONFIG_FILE='true'
```

Para confirmar suas configurações na linha de comando, use:

```shell
heroku config
```

## Atualizar a partir de uma instalação existente do New Relic [#upgrading]

Para atualizar a versão do agente Node.js se o New Relic já estiver instalado, use este comando do toolbelt:

```shell
npm install newrelic --save
```
