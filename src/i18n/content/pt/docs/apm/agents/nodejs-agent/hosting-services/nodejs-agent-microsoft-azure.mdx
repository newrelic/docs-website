---
title: Agente Node.js em aplicativos Web do Microsoft Azure
tags:
  - Agents
  - Nodejs agent
  - Hosting services
  - Azure
  - Azure Site Extension
metaDescription: How to install APM for Node.js on Microsoft Azure Web Apps.
freshnessValidatedDate: never
translationType: machine
---

## Métodos de instalação

Se você estiver executando um aplicativo da Web e implantando como código no Windows, poderá instalar facilmente o agente do Node usando nossa Extensão de Site do Azure. \[]Veja estas instruções]\(/docs/agente APM/nodejs-agente/instalação-configuração/install-nodejs-azure-site-extension).

Se você estiver implantando um aplicativo de contêiner, siga nossas [instruções para o docker](/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent-docker).

Você precisa instalar o agente manualmente para aplicativos web hospedados no Linux, o que descrevemos abaixo.

## Instalação manual [#manual-installation]

Saiba mais sobre considerações especiais para usar os Microsoft Azure Web Apps como um serviço de hospedagem com o agente Node.js da New Relic.

## O que você precisa [#compatibility]

Além da [Compatibilidade e dos requisitos para o agente Node.js](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent), este tutorial pressupõe que você tenha uma instalação funcional do Node.js e do SDK do Windows Azure para Node.js para sua plataforma:

* Instale o SDK do Azure para Node.js.
* Certifique-se de que o Git esteja instalado.

<Callout variant="important">
  O agente Node.js não pode fornecer telemetria para Azure Functions. Em vez disso, você precisará usar a [integração de monitoramento do Azure Functions](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-functions-monitoring-integration/)
</Callout>

## Instalando o agente Node.js [#install\_nodejs][#install_nodejs]

Para adicionar o agente New Relic Node.js ao seu aplicativo Azure, certifique-se de que o módulo `newrelic` seja carregado primeiro, use o sinalizador `-r`/`--require` do Node.js para executar o seguinte:

```shell
node -r newrelic server.js
```

<Callout variant="important">
  Para um aplicativo Next.js, carregue nosso agente via `NODE_OPTIONS`, como:

  ```shell
  NODE_OPTIONS='-r newrelic' next start
  ```
</Callout>

## Adicionar configurações de aplicativo no Azure [#azure\_settings][#azure_settings]

Após a instalação, você deverá configurar seu aplicativo nos Aplicativos Web do Azure:

1. Faça login em <DNT>**[portal.azure.com](https://portal.azure.com)**</DNT>.

2. Selecione <DNT>**App Services &gt; (select a Node.js app) &gt; Configure**</DNT>.

3. Adicione o seguinte ao <DNT>**app settings**</DNT>:

   * `new_relic_app_name`: o nome do site do Windows Azure
   * `new_relic_license_key`: Sua New Relic<InlinePopover type="licenseKey" />

4. Salve suas configurações.

5. Reinicie seu aplicativo Node.js.

Gere algum tráfego para seu aplicativo e aguarde alguns minutos. Depois de esperar, veja seus dados acessando <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; APM &amp;amp; services &amp;gt; (select your app)**</DNT>.

## Opcional: Adicionando configurações de aplicativo com a CLI [#app\_settings][#app_settings]

Opcional: aqui está um exemplo de como adicionar as configurações do aplicativo usando a CLI (SDK Node.js):

```bash
azure account download "YOUR_SUBSCRIPTION_NAME"
azure account import "PATH_TO_PUBLISH_SETTINGS_FILE"
azure site config add "new_relic_app_name=REPLACE_WITH_YOUR_APP_NAME"
azure site config add "new_relic_license_key=REPLACE_WITH_YOUR_LICENSE_KEY"
azure site restart AZURE_WEB_APP_NAME
```

## Usando variáveis de ambiente [#variables]

Se o seu agente for executado em ambientes PaaS, como Heroku ou Azure Web Apps, todas as variáveis de configuração em `newrelic.js` terão equivalentes que podem ser definidas como variáveis de ambiente. Você pode misturar e combinar variáveis livremente no arquivo de configuração. As variáveis de ambiente [substituem as configurações do arquivo de configuração](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#methods-and-precedence).

Por exemplo, para conveniência do usuário do Azure, o agente usará `APP_POOL_ID` como o nome do aplicativo ([`NEW_RELIC_APP_NAME`](/docs/nodejs/configuring-nodejs-with-environment-variables#app_name)) se estiver definido, para que você possa usar o nome escolhido sem defini-lo duas vezes. Para obter mais informações, consulte [Configurando o Node.js com variáveis de ambiente](/docs/nodejs/configuring-nodejs-with-environment-variables).