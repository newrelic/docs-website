---
title: Instale o agente Node.js com nossa extensão de site do Azure
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
  - Azure Site Extension
metaDescription: Procedures and resources to install New Relic's Node.js agent for Azure web apps using the New Relic Azure Site Extension for Node.
freshnessValidatedDate: never
translationType: machine
---

Você pode instalar o agente Node.js em seus aplicativos Web gerenciados pelo Azure com a Extensão de Site do Azure do New Relic para Node. Este documento explica a compatibilidade, instalação e configuração para obter os dados do seu aplicativo Web do Azure no New Relic.

## Compatibilidade e requisitos [#compatibility-requirements]

As Extensões de Site do Azure estão disponíveis somente para aplicativos do Serviço de Aplicativo baseados no Windows que são implantados como código. Para aplicativos em execução no Windows 32, o suporte completo ao nível do código métrico (caminho do arquivo, linha, coluna) não está disponível. A criação de perfil retorna apenas ao nome da função.

## Instalar o agente Node.js com a extensão do site do Azure [#install-azure-site-extension]

Para instalar a extensão de site do Azure do New Relic, adicione a extensão de site `NewRelic.Azure.WebSites.Extension.NodeAgent` da página inicial do Azure. Siga estes passos:

1. Na página inicial do Azure, clique no bloco Serviços de Aplicativo e selecione o aplicativo de destino na lista exibida.
2. Role para baixo até <DNT>**Extensions**</DNT> nas opções listadas à esquerda na categoria <DNT>**Development Tools**</DNT> .
3. Clique em <DNT>**+ Add**</DNT> na parte superior da página para alternar o menu suspenso de extensões e selecione <DNT>**New Relic Node Agent**</DNT>. Marque a caixa para aceitar os termos legais
4. Clique em <DNT>**Add**</DNT> na parte inferior da página para iniciar a instalação da extensão.

Uma vez instalada, a extensão cria os seguintes artefatos:

* Pasta: `C:\home\SiteExtensions\NewRelic.Azure.Websites.Extension.NodeAgent`
* Transformação de documento XML (XDT): `applicationHost.xdt` que adicionará a variável de ambiente `NODE_OPTIONS` necessária na inicialização do aplicativo
* O agente e a dependência do New Relic Node serão instalados em `C:\home\site\wwwroot\node_modules`

Após uma instalação bem-sucedida do agente com o logging habilitado, o agente anexará seu registro a um arquivo em `C:\home\site\wwwroot\newrelic_agent.log`. Se a extensão não for instalada, um arquivo de log será criado em `C:\home\SiteExtensions\NewRelic.Azure.Websites.Extension.NodeAgent\install.log`.

## Configurar o agente Node.js [#configure-agent]

O agente Node.js é configurado com o arquivo `newrelic.js` ou por meio de variáveis de ambiente. [Consulte nossa documentação para obter uma configuração mais detalhada](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/).

Depois que a extensão do site estiver instalada, você precisará inserir manualmente um item de configuração antes de reiniciar seu aplicativo. Nas opções listadas à esquerda, encontre **Settings** e role para baixo até **Environment variables**. Adicione a variável `NEW_RELIC_LICENSE_KEY` com o valor da sua chave de licença.

Nossa extensão de site adiciona automaticamente a variável de ambiente `NODE_OPTIONS` com um valor de `-r newrelic`. Isso injeta o agente quando o Node é iniciado. Qualquer `NODE_OPTIONS` definido anteriormente será removido e redefinido com `-r newrelic`.

<Callout variant="important">
  Recomendamos instalar ou remover esta extensão de site do Azure enquanto seu aplicativo Web estiver parado.
</Callout>