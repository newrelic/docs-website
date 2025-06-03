---
title: Instale o agente Go no ambiente flexível do GAE
tags:
  - Agents
  - Go agent
  - Installation
metaDescription: How to install your New Relic's Go app in the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Com nosso [agente Go](/docs/agents/go-agent/get-started/introduction-new-relic-go), você pode monitor aplicativos que residem no [ambiente flexível do Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/go/). Adicionar New Relic ao seu aplicativo flexível <DNT>GAE</DNT> fornece insights sobre a integridade e o desempenho do seu aplicativo e estende <DNT>GAE</DNT> com métricas que você pode visualizar no [APM](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) e [no<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser).

Aqui explicamos como adicionar New Relic ao seu aplicativo flexível <DNT>GAE</DNT> configurando um [tempo de execução personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes) e damos um exemplo de implantação de um aplicativo Go com Docker.

<Callout variant="important">
  O agente Go pode ser executado em um ambiente flexível do GAE usando um tempo de execução personalizado. Devido às limitações de outros ambientes, não use o ambiente padrão do GAE ou a instalação [em "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) do Google App Engine.
</Callout>

## Crie um tempo de execução personalizado usando docker [#build-runtime]

Consulte [a documentação do Google para criar tempos de execução personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Este exemplo descreve como adicionar New Relic ao seu aplicativo GAE flex instalando o agente Go, criando um tempo de execução Go personalizado para Docker e implantando um aplicativo golang.

Para obter mais informações sobre como implantar e configurar seu aplicativo Go no ambiente flexível do GAE, consulte:

* [Documentação do Google App Engine](https://cloud.google.com/appengine/docs/flexible/go/) para Go
* [Tutoriais do Google App Engine](https://cloud.google.com/appengine/docs/flexible/go/tutorials) para implantar um aplicativo Go

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure o projeto GAE e instale a dependência"
  >
    1. Siga os procedimentos padrão para [instalar o agente Go](/docs/agents/go-agent/get-started/get-new-relic-go) para seu servidor de aplicativos específico, incluindo sua [chave de licença](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key).

    2. Siga [os procedimentos do Google App Engine para Go](https://cloud.google.com/appengine/docs/flexible/go/quickstart) para criar um novo projeto de plataforma Cloud, criar um aplicativo App Engine, fazer download e instalar [o git](https://git-scm.com) e preencher outros pré-requisitos para o [SDK do Google Cloud](https://cloud.google.com/sdk/docs/).

       O SDK do Google Cloud fornece a ferramenta de linha de comando `gcloud` para gerenciar e implantar aplicativos GAE.
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="2. Configure seu app.yaml"
  >
    O arquivo de configuração `app.yaml` é necessário para um aplicativo de ambiente flexível do GAE com um ambiente de execução personalizado. No mínimo, certifique-se de que contém:

    ```yaml
    runtime: custom
    env: flex
    ```
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="3. Configure um Dockerfile"
  >
    O [Dockerfile](http://docs.docker.com/engine/reference/builder/) define a imagem Docker a ser construída e é necessário para um aplicativo de ambiente flexível GAE. O código de exemplo do Dockerfile a seguir define a versão golang usada.

    ```dockerfile
    FROM golang:1.8-onbuild
    CMD go run main.go
    ```
  </Collapser>

  <Collapser
    id="build-docker-image"
    title="4. Crie uma imagem docker"
  >
    Para construir a imagem docker , execute o seguinte comando. Certifique-se de incluir o ponto final no final do código, para indicar que o diretório atual contém os arquivos de construção.

    ```bash
    docker build --rm -t Docker-image-name .
    ```
  </Collapser>

  <Collapser
    id="deploy-docker-image-to-gae"
    title="5. implantar imagem docker no ambiente flexível GAE inicializado"
  >
    1. Para implantar sua imagem docker em seu [ambiente flexível GAE inicializado](https://cloud.google.com/sdk/docs/initializing), execute o seguinte comando:

       ```bash
       gcloud --project go-app-name app deploy
       ```

    2. Aguarde até que a implantação seja concluída.

    3. Para visualizar os dados do aplicativo GAE flex no New Relic, acesse a [página <DNT>**Summary**</DNT> do APM](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Recomendação: desativar verificações de integridade [#health-checks]

O Google App Engine envia [solicitações periódicas de verificação de integridade](https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml#health_checks) para confirmar se uma instância foi implantada com êxito e para verificar se uma instância em execução mantém um status de integridade. Uma verificação de integridade é uma solicitação HTTP para o URL `/_ah/health`.

Se você criar um ambiente de execução personalizado, seu aplicativo deverá ser capaz de lidar com um grande número de solicitações de verificação de integridade. Caso contrário, os dados do seu aplicativo poderão não ser exibidos corretamente no APM.

Recomendação: configure seu `app.yaml` para desativar verificações de integridade adicionando:

```yaml
health_check:
  enable_health_check: False
```

## Obtenha o registro de resolução de problemas do agente do GAE [#agent-logs]

Use estes recursos para solucionar problemas do seu aplicativo de ambiente flexível do GAE:

* Para se conectar à instância do GAE e iniciar um shell no contêiner Docker executando seu código, consulte [a documentação do GAE para depurar uma instância](https://cloud.google.com/appengine/docs/flexible/go/debugging-an-instance).

* Para redirecionar o registro do agente New Relic Go para o [Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) no [Cloud Platform Console](https://cloud.google.com/compute/docs/console), altere o arquivo `newrelic.yml` para:

  ```yaml
  log_file_name: STDOUT
  ```
