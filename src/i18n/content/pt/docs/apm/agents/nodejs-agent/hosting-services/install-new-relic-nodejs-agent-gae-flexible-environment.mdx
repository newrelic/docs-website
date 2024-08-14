---
title: Instale o agente New Relic Node.js no ambiente flexível GAE
tags:
  - Agents
  - Nodejs agent
  - Hosting services
metaDescription: How to install your APM's Node.js app in the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Com [o agente Node.js](/docs/agents/nodejs-agent/getting-started/introduction-new-relic-nodejs) da New Relic, você pode monitor aplicativos que residem no [ambiente flexível do Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/nodejs/). Adicionar o New Relic ao seu aplicativo flexível do GAE fornece insights sobre a integridade e o desempenho do seu aplicativo e estende o GAE com métricas que você pode visualizar em [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm)e [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser).

Este documento explica como adicionar New Relic ao seu aplicativo GAE flex usando um destes métodos:

* Instalação ["modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) do Google App Engine com um tempo de execução GAE padrão
* Instalação docker usando um [tempo de execução personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)

## Use implante nativo [#native-mode]

Para usar a instalação [em "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) do Google App Engine com seu aplicativo Node.js:

1. Siga os procedimentos padrão para [instalar o agente Node.js da New Relic](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent), incluindo seu <InlinePopover type="licenseKey"/>. Certifique-se de salvar o módulo `newrelic` no arquivo `package.json` .

2. Siga [os procedimentos do Google App Engine para Node.js](https://cloud.google.com/appengine/docs/flexible/nodejs/quickstart) para criar um novo projeto de plataforma Cloud, criar um aplicativo App Engine e preencher outros pré-requisitos para o [SDK do Google Cloud](https://cloud.google.com/sdk/gcloud/).

3. Opcional: configure variáveis de ambiente para configurar o [arquivo GAE `app.yaml` ](https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml)do agente Node.js.

4. Use a ferramenta de linha de comando `gcloud` do SDK do Google Cloud para implantar aplicativos GAE. Para implantar seu aplicativo Node.js em seu [ambiente flexível GAE inicializado](https://cloud.google.com/sdk/docs/initializing), execute o seguinte comando:

   ```bash
   gcloud --project new-relic-apm-nodejs app deploy
   ```

O Google App Engine inclui automaticamente o arquivo de configuração `newrelic.js` do seu aplicativo Node.js no pacote de implantação. Aguarde até que a implantação seja concluída e visualize os dados do aplicativo GAE flex na [página <DNT>**Summary**</DNT> do APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

## Crie um ambiente de execução personalizado [#build-runtime]

Consulte [a documentação do Google para criar tempos de execução personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Este exemplo descreve como adicionar New Relic ao seu aplicativo GAE flex criando um tempo de execução personalizado para Docker. Você pode implantar o aplicativo sem nenhuma configuração especial.

Para obter mais informações sobre como implantar e configurar seu aplicativo Node.js no ambiente flexível do GAE, consulte:

* [Documentação do Google App Engine](https://cloud.google.com/appengine/docs/flexible/nodejs/) para Node.js
* [Tutorial do Google App Engine](https://cloud.google.com/community/tutorials/run-expressjs-on-google-app-engine) para implantar um aplicativo Node.js

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure o projeto GAE e instale a dependência"
  >
    1. Siga os procedimentos padrão para [instalar o agente Node.js da New Relic](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent), incluindo seu <InlinePopover type="licenseKey"/>. Certifique-se de salvar o módulo `newrelic` no arquivo `package.json` .

    2. Siga [os procedimentos do Google App Engine para Node.js](https://cloud.google.com/appengine/docs/flexible/nodejs/quickstart) para criar um novo projeto de plataforma Cloud, criar um aplicativo App Engine e preencher outros pré-requisitos para o [SDK do Google Cloud](https://cloud.google.com/sdk/gcloud/).

       O SDK do Google Cloud fornece a ferramenta de linha de comando `gcloud` para gerenciar e implantar aplicativos GAE.
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="2. Configure seu app.yaml"
  >
    O arquivo de configuração `app.yaml` é necessário para um aplicativo de ambiente flexível do GAE com um ambiente de execução personalizado. No mínimo, certifique-se de que contém:

    ```yml
    runtime: custom
    env: flex
    ```

    Opcional: Configure variáveis de ambiente.
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="3. Configurar e implantar"
  >
    O [Dockerfile](http://docs.docker.com/engine/reference/builder/) define a imagem Docker a ser construída e é necessário para um aplicativo de ambiente flexível GAE.

    1. Para criar o Dockerfile, construir o contêiner e implantar seu aplicativo, siga os [procedimentos do GAE para Node.js.](https://cloud.google.com/appengine/docs/flexible/nodejs/run-flex-app-on-gke)

    2. Aguarde até que a implantação seja concluída.

    3. Para visualizar os dados do aplicativo GAE flex no New Relic, acesse a [página](/docs/apm/applications-menu/monitoring/apm-overview-page)

       <DNT>
         [**Summary**](/docs/apm/applications-menu/monitoring/apm-overview-page)
       </DNT>

       [do APM](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

## Opcional: desabilitar verificações de integridade [#health-checks]

O Google App Engine envia [solicitações periódicas de verificação de integridade](https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml#health_checks) para confirmar se uma instância foi implantada com êxito e para verificar se uma instância em execução mantém um status de integridade. Uma verificação de integridade é uma solicitação HTTP para o URL `/_ah/health`.

Se você criar um ambiente de execução personalizado, seu aplicativo deverá ser capaz de lidar com um grande número de solicitações de verificação de integridade. Caso contrário, os dados do seu aplicativo poderão não ser exibidos corretamente no APM.

Se você notar problemas de desempenho, desative as verificações de integridade do GAE. No seu `app.yaml`, adicione:

```yml
health_check:
  enable_health_check: False
```

## Obtenha o registro de resolução de problemas do agente New Relic do GAE [#agent-logs]

Use estes recursos para solucionar problemas do seu aplicativo de ambiente flexível do GAE:

* Para se conectar à instância do GAE e iniciar um shell no contêiner Docker que executa seu código, consulte [Depurando uma instância](https://cloud.google.com/appengine/docs/flexible/go/debugging-an-instance).

* Para redirecionar o log do agente New Relic Node.js para [o Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) no [Cloud Platform Console](https://cloud.google.com/compute/docs/console), altere o arquivo de configuração `newrelic.js` para:

  ```yml
  log_file_name: STDOUT
  ```

* Para visualizar o log, use o [log Viewer do Cloud Platform Console](https://cloud.google.com/appengine/docs/flexible/php/writing-application-logs).
