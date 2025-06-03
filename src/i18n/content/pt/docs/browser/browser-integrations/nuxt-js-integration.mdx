---
title: Nuxt.js integração
tags:
  - nuxt.js integration
  - nuxt integration
  - new relic integrations
metaDescription: 'Learn how to query your New Relic data with NRQL, our SQL-like query language.'
freshnessValidatedDate: never
translationType: machine
---

Com nosso dashboard Nuxt.js, você pode rastrear facilmente a taxa de erros do seu aplicativo, média de carregamento inicial da página, alterações de rota, taxas de transferência e visualizações de páginas com erros de JavaScript. Construído com nosso agente de infraestrutura e nosso Vue <InlinePopover type="browser"/>, o dashboard Nuxt.js permite visualizar informações críticas em todo o local.

<img
  title="Nuxt.js dashboard"
  alt="A screenshot of a Nuxt.js dashboard"
  src="/images/infrastructure_screenshot-crop_nuxtjs-dashboard.webp"
/>

## 1. Instale o agente de infraestrutura [#infra]

Antes de colocar seus dados no New Relic, você deve primeiro instalar o agente de infraestrutura (se estiver instalado, você pode pular esta etapa). Isso permite que a New Relic colete dados para que taxas de erros de aplicativos, taxas de transferência e visualizações de páginas com erros de JavaScript possam aparecer no painel. Esta etapa é opcional, mas recomendamos fortemente que você instale o agente de infraestrutura para ver todos os dados do seu host e monitoramento do Browser.

Há duas maneiras de instalar o agente de infraestrutura:

* Siga a [instalação guiada](https://one.newrelic.com/marketplace?state=607786be-99a9-fa66-4b67-3f7f3b9551d4) para instrumentar nosso sistema com o agente de infraestrutura.
* [Instale o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) usando a linha de comando.

## 2. Instale o Vue monitoramento do browser [#install]

Após instalar o agente de infraestrutura, a próxima etapa é instalar o monitor do browser. De <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT>:

1. Clique

   <DNT>
     **Integrations & Agents**
   </DNT>

2. Clique

   <DNT>
     **Browser & mobile**
   </DNT>

3. Clique em

   <DNT>
     **Vue**
   </DNT>

   A partir daí, siga as instruções para gerar o trecho do código JavaScript usado na etapa 3. Enquanto o agente de monitoramento de Browser e a integração Vue fornecem essencialmente o mesmo serviço, a integração Vue é específica para JavaScript (que é o framework do Nuxt.js). Se desejar monitor outros serviços não específicos de JavaScript, você deve usar o agente de monitoramento de browser.

## 3. Configure a integração [#config]

Para adicionar o trecho JavaScript no aplicativo Nuxt.js:

1. Crie um arquivo JavaScript na pasta

   <DNT>
     **`static`**
   </DNT>

   do seu aplicativo nuxt.js:

   ```bash
   touch <FILENAME>.js
   ```

2. Crie uma função no arquivo JavaScript recém-criado e adicione o script gerado dentro da função:

   ```js
   function FUNCTION_NAME() {
     // GENERATED SCRIPT IS PASTED HERE BY REMOVING OPENING AND CLOSING <script> TAGS>
   }
   FUNCTION_NAME();
   ```

3. Copie o trecho de código abaixo e cole-o em `HEADER tag` de `nuxt.config.js` arquivo e atualize o nome da função e o nome do arquivo:

   ```js
     __dangerouslyDisableSanitizers: ["script"],
     script: [
       {
         hid: "<FUNCTION_NAME>",
         src: "/<FILENAME>.js",
         defer: true,
         type: "text/javascript",
         charset: "utf-8",
       },
     ],
   ```

4. Reinicie seu aplicativo.

## 4. monitor seu aplicativo em one.newrelic.com [#monitor]

Agora você poderá ver seu aplicativo em <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT> selecionando <DNT>**Browser**</DNT> na barra de navegação. Escolha sua aplicação para ver todas as métricas que são capturadas na plataforma <DNT>**one.newrelic.com**</DNT> . Você também pode visualizar os dados com NRQL usando a seguinte consulta:

```sql
SELECT firstPaint 
FROM PageView
```

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição do seu

  <InlinePopover type="dashboards"/>

  ou para adicionar mais conteúdo aos seus painéis.
