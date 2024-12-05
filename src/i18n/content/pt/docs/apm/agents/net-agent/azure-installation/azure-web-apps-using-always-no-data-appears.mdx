---
title: 'Resolução de problemas do Azure Web Apps: problema com Always On'
tags:
  - Agents
  - NET agent
  - Azure troubleshooting
metaDescription: Workarounds if you have problems after installing New Relic's .NET agent on a Windows Azure Web App.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você instalou o agente .NET da New Relic por meio [dos aplicativos Web do Microsoft Azure](/docs/agents/net-agent/azure-installation/install-app-azure-web-apps) e está usando a configuração `Always On` do Azure. Depois de gerar algum tráfego e aguardar alguns minutos para o início da coleta de dados para seu aplicativo, os dados ainda não aparecem na interface do usuário do APM.

## Solução

A partir do agente .NET versão [8.22.181.0](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-8221810), A configuração `Always On` do Azure pode ser habilitada sem interferir no agente. Se quiser usar `Always On`, basta [atualizar o agente](/docs/agents/net-agent/azure-installation/install-net-agent-azure-web-apps).

## .NET framework 4.0 ou soluções alternativas inferiores [#4-0-framework]

Se o seu aplicativo for [.NET Framework 4.0 ou inferior](/docs/agents/net-agent/troubleshooting/technical-support-net-framework-40-or-lower), [a configuração`Always On` ](https://azure.microsoft.com/en-us/documentation/articles/web-sites-create-web-jobs/)do Azure interferirá no agente. Este recurso está disponível apenas nos modos <DNT>**Basic**</DNT> e <DNT>**Standard**</DNT> do Azure.

A configuração `Always On` impede que a variável de ambiente `APP_POOL_ID` seja definida. O agente .NET da New Relic precisa desta variável de ambiente para obter o nome do aplicativo. Se o agente não conseguir determinar um nome de aplicativo, ele não será inicializado.

Se você ainda estiver usando o .NET framework 4.0 ou inferior, tente as seguintes soluções alternativas:

Se você estiver usando o nível <DNT>**Standard**</DNT> ou <DNT>**Basic**</DNT> da Microsoft com o Portal do Azure, certifique-se de que a configuração `Always On` esteja desabilitada.

1. No Portal do Azure, selecione

   <DNT>
     **(your app) > Settings > Application Settings**
   </DNT>

   .

2. Defina o botão `Always On` como `Off`.

Aqui estão algumas outras opções que você pode tentar. Se isso não funcionar, <DNT>**must**</DNT> [desative a configuração `Always On` ](#4-0-framework).

<CollapserGroup>
  <Collapser
    id="name-app"
    title="Use Kudu para nomear seu aplicativo."
  >
    Para nomear seu aplicativo no <DNT>**`newrelic.config`**</DNT> local usando Kudu:

    1. No Portal do Microsoft Azure, selecione <DNT>**(your app) > Tools > Kudu**</DNT> e selecione <DNT>**Go**</DNT>.

    2. Selecione <DNT>**Debug Console > CMD**</DNT>.

    3. Selecione <DNT>**Site > wwwroot > newrelic**</DNT>.

    4. Selecione a edição <Icon name="fe-edit-2"/> ícone para `newrelic.config` e adicione:

       ```xml
       <application>
         <name>Your app's name</name>
       </application>
       ```

    5. Salve e reinicie seu aplicativo.
  </Collapser>

  <Collapser
    id="name-app-web-config"
    title="Use app/web.config para nomear seu aplicativo."
  >
    <Callout variant="important">
      Esta opção foi considerada apenas uma solução temporária. O agente .NET pode parar de relatar de forma intermitente.
    </Callout>

    Para nomear seu aplicativo no arquivo `app/web.config` :

    1. Adicione a seguinte chave a `appSettings`:

       ```xml
       <appSettings>
         <add key="NewRelic.AppName" value="Your app's name" />
       </appSettings>
       ```

    2. Reinicie sua instância.
  </Collapser>

  <Collapser
    id="pinger"
    title="Use o monitoramento sintético para monitor seu site."
  >
    Dependendo do uso do `Always On`, você pode tentar usar [o monitoramento sintético](/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics) para manter seu site ativo.

    * Se você

      <DNT>
        **are not**
      </DNT>

      estiver usando a configuração `Always On` , poderá tentar usar nosso [monitor de pinger](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#monitor-type-ping) gratuito com monitoramento sintético .

    * Se você

      <DNT>
        **are**
      </DNT>

      estiver usando a configuração `Always On`, o monitoramento sintético precisará ser capaz de alcançar um endpoint para suas funções de trabalho. Caso contrário, você pode tentar usar um [monitor com script Sintético](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) para rodar em seu site.
  </Collapser>
</CollapserGroup>
