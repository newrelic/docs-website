---
title: 'Injeção do browser: conflito de verificação de integridade'
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips for your New Relic .NET agent if your webpage health check is failing.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Como uma verificação de integridade, seu balanceador de carga (como um balanceador de carga F5) executa ping periodicamente em uma página da Web específica. Em alguns casos, quando [a injeção automática do browser](/docs/agents/net-agent/additional-installation/new-relic-browser-net-agent) está ativada, o trecho JavaScript [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)adicionado ao cabeçalho da página faz com que a verificação falhe. Dependendo de como o balanceador de carga está configurado, isso pode fazer com que o tráfego seja roteado para outra instância do aplicativo.

## Solução

Para evitar isso, adicione o [subelemento`requestPathsExcluded` ](/docs/agents/net-agent/configuration/net-agent-configuration#browser-path-exclusion)à configuração do seu agente .NET. Esta é uma referência ao diretório virtual do caminho no seu aplicativo e não ao URL completo do caminho que você deseja excluir.

Por exemplo, se seu balanceador de carga estiver configurado para executar ping em uma página da Web em `https://www.mywebsite.com/healthmonitor/`, insira `/healthmonitor/` como o valor regex do caminho:

```xml
<!-- If you use both the Exclude and Attribute elements
     the Exclude element must be listed first. -->
<browserMonitoring autoInstrument="true">
  <requestPathsExcluded>
    <path regex="/healthmonitor/"/>
  </requestPathsExcluded>
</browserMonitoring>
```

## Causa

O [agente browser](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) é um trecho JavaScript injetado no cabeçalho de uma página web. Às vezes, isso pode impedir que o monitor de verificação de integridade veja as informações necessárias para validar se o site está íntegro. Excluir o caminho onde a página de verificação de integridade está localizada impedirá que o agente injete o trecho nos cabeçalhos de páginas específicas.
