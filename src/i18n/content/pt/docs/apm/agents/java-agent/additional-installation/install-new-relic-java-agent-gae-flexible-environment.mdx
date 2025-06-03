---
title: Instale o agente Java do New Relic no ambiente flexível do GAE
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: How to set up the New Relic Java agent with an app on the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Com [o agente Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) do APM, você pode monitor aplicativos que residem no [ambiente flexível do Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/java/). Adicionar o New Relic ao seu aplicativo flexível do GAE fornece insights sobre a integridade e o desempenho do seu aplicativo e estende o GAE com métricas que você pode visualizar em [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm), [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)e [painel](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards).

Este documento explica como adicionar New Relic ao seu aplicativo GAE flex configurando um [tempo de execução personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes) e fornece um exemplo de implantação de um aplicativo Tomcat com Docker.

<Callout variant="important">
  O agente Java New Relic pode ser executado em um ambiente flexível do GAE usando um tempo de execução personalizado. Devido às limitações de outros ambientes, não use o ambiente padrão do GAE ou a instalação [em "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) do Google App Engine.
</Callout>

## Crie um tempo de execução personalizado usando docker [#build-runtime]

Consulte [a documentação do Google para criar tempos de execução personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Há muitas maneiras de criar um tempo de execução personalizado que contenha o agente Java New Relic ([por exemplo, usando o Tomcat](#tomcat-example)). Em geral, para construir um tempo de execução personalizado:

1. [Configure seu aplicativo](#setup-gae) e instale a dependência necessária relacionada ao GAE para tempos de execução personalizados. Inclua o agente Java New Relic no projeto.
2. Configure [Maven ou Gradle](#configure-pom-xml) conforme aplicável.
3. Configure o [arquivo`app.yaml` ](#configure-app-yaml).
4. Configure o [Dockerfile](#configure-dockerfile).
5. [Construa a imagem do Docker](#build-docker-image).
6. [implantar](#deploy-docker-image-to-gae) a imagem Docker no ambiente flexível GAE inicializado.
7. Recomendação: [Desative as verificações de integridade do GAE](#health-checks).

Para obter mais informações sobre como implantar e configurar seu aplicativo Java no ambiente flexível do GAE, consulte:

* [Documentação do Google App Engine](https://cloud.google.com/appengine/docs/flexible/java/) para Java
* [Tutoriais do Google App Engine](https://cloud.google.com/appengine/docs/flexible/java/tutorials) para implantar um aplicativo Java

## Exemplo flexível do GAE com Tomcat [#tomcat-example]

Este exemplo descreve como adicionar o New Relic ao seu aplicativo GAE flex instalando o agente Java do New Relic, criando um tempo de execução personalizado e implantando um aplicativo WAR no Tomcat. Certifique-se de [instalar o agente Java](/docs/agents/java-agent/installation/include-java-agent-jvm-argument) conforme necessário para seu servidor de aplicativos específico.

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure o projeto flexível do GAE e instale a dependência"
  >
    1. Siga os procedimentos padrão para [instalar o agente Java](/docs/agents/java-agent/installation/include-java-agent-jvm-argument) conforme necessário para seu servidor de aplicativos específico e obtenha sua [chave de licença](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key).

    2. Siga [os procedimentos do Google App Engine para Java](https://cloud.google.com/appengine/docs/flexible/java/managing-projects-apps-billing#create) para criar um novo projeto de plataforma Cloud, criar um aplicativo App Engine e preencher outros pré-requisitos para o [SDK do Google Cloud](https://cloud.google.com/sdk/gcloud/).

    3. Instale qualquer dependência necessária, como o plugin [Maven](https://cloud.google.com/appengine/docs/flexible/java/using-maven) ou [Gradle](https://cloud.google.com/appengine/docs/flexible/java/using-gradle) App Engine e [Java](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html).

       O SDK do Google Cloud fornece a ferramenta de linha de comando `gcloud` para gerenciar e implantar aplicativos GAE.
  </Collapser>

  <Collapser
    id="configure-pom-xml"
    title="2. Configure o Maven pom.xml para incluir o agente Java e o projeto de construção"
  >
    Este exemplo usa o Maven para criar o projeto, uma imagem Docker Tomcat para executá-lo e a ferramenta de linha de comando `gcloud` para implantar a imagem do Docker em um ambiente flexível do GAE.

    1. Adicione a dependência do agente Java ao diretório `target` do projeto quando o projeto for compilado, ao fazer [download e descompactar todos os componentes do agente Java](/docs/agents/java-agent/frameworks/maven-installation-java#h2-zip).

    2. Depois de adicionar a dependência do agente Java ao `pom.xml`, crie seu aplicativo executando:

       ```sh
       mvn clean install
       ```

    3. Verifique o diretório `target` do seu projeto para localizar o arquivo `WAR` do aplicativo e um diretório `newrelic` descompactado.

       Esses arquivos serão incorporados a uma imagem Docker .

       <Callout variant="tip">
         Você também pode adicionar o [plug-in App Engine Maven ou Jetty Maven](http://cloud.google.com/appengine/docs/flexible/java/using-maven#adding_the_app_engine_maven_and_jetty_maven_plugins) ao seu `pom.xml`. Isso permitirá que você use o Maven para implantar seu aplicativo em um ambiente flexível do GAE.
       </Callout>
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="3. Configure seu app.yaml"
  >
    O arquivo de configuração [`app.yaml`](https://cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml) é necessário para um aplicativo de ambiente flexível do GAE com um ambiente de execução personalizado. No mínimo, certifique-se de que contém:

    ```yml
    env: flex
    runtime: custom
    ```
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="4. Configure o Dockerfile"
  >
    O [Dockerfile](http://docs.docker.com/engine/reference/builder/) define a imagem Docker a ser construída e é necessário para um aplicativo de ambiente flexível GAE. No código de exemplo do Dockerfile a seguir, os arquivos `newrelic.yml` e `catalina.sh` foram configurados localmente para substituir aqueles já copiados para a imagem Docker . (Você pode adicionar sua [chave de licença New Relic](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key) diretamente ao Dockerfile ou usar uma variável de ambiente no comando `docker run` .)

    ```dockerfile
    # base Tomcat image to build Docker image from
    FROM tomcat:8.5.14-jre8

    MAINTAINER Jane Doe <janedoe@mail.com>

    # Tomcat directory to copy Java agent files to
    ENV NEWRELIC_HOME /usr/local/tomcat/newrelic

    # copy application war from target to Tomcat webapps
    ADD target/*.war /usr/local/tomcat/webapps

    # copy Java agent files from target to Tomcat NEWRELIC_HOME
    ADD target/newrelic ${NEWRELIC_HOME}

    # update Java agent yml with license_key and app_name and copy to image  
    ADD newrelic.yml ${NEWRELIC_HOME}

    # update catalina.sh with -javaagent:/path/to/newrelic.jar and copy to image 
    ADD catalina.sh /usr/local/tomcat/bin/
    ```
  </Collapser>

  <Collapser
    id="build-docker-image"
    title="5. Construa a imagem Docker"
  >
    Para construir uma imagem Docker que execute o Tomcat com o agente Java New Relic para monitorar seu aplicativo implantado WAR, execute o seguinte comando. Certifique-se de incluir o ponto final no final do código, para indicar que o diretório atual contém os arquivos de construção.

    ```sh
    docker build -f Dockerfile -t newrelic-tomcat .
    ```

    Depois de executar este comando, verifique se você tem uma imagem Docker chamada `newrelic-tomcat`.
  </Collapser>

  <Collapser
    id="deploy-docker-image-to-gae"
    title="6. implantar imagem Docker no ambiente flexível GAE inicializado"
  >
    1. Para implantar sua imagem docker em seu [ambiente flexível GAE inicializado](https://cloud.google.com/sdk/docs/initializing), execute o seguinte comando:

       ```sh
       gcloud app deploy
       ```

    2. Aguarde até que a implantação seja concluída.

    3. Para abrir o aplicativo no browser, execute o seguinte comando:

       ```sh
       gcloud app browse
       ```

    4. Para visualizar os dados do aplicativo GAE flex no New Relic, acesse a [página <DNT>**Summary**</DNT> do APM](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

## Recomendação: desativar verificações de integridade [#health-checks]

O Google App Engine envia [solicitações periódicas de verificação de integridade](https://cloud.google.com/appengine/docs/flexible/java/how-instances-are-managed) para confirmar se uma instância foi implantada com êxito e para verificar se uma instância em execução mantém um status de integridade. Uma verificação de integridade é uma solicitação HTTP para o URL `/_ah/health`.

Se você criar um ambiente de execução personalizado, seu aplicativo deverá ser capaz de lidar com um grande número de solicitações de verificação de integridade. Caso contrário, os dados do seu aplicativo poderão não ser exibidos corretamente no APM. Para evitar adicionar sobrecarga adicional de instrumentação e distorcer as taxas de transferência para seu aplicativo, recomendamos que você desative a verificação de integridade.

Recomendação: configure seu `app.yaml` para [desativar verificações de integridade](https://cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml#health_checks) adicionando:

```yml
health_check:
  enable_health_check: False
```

## Obtenha o log de resolução de problemas do agente Java do GAE [#java-agent-logs]

Use estes recursos para solucionar problemas do seu aplicativo de ambiente flexível do GAE:

* Para se conectar à instância do GAE e iniciar um shell no contêiner Docker executando seu código, consulte [Depurando uma instância](https://cloud.google.com/appengine/docs/flexible/java/debugging-an-instance).

* Para redirecionar o registro do agente Java do New Relic para o [Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) no [Cloud Platform Console](https://cloud.google.com/compute/docs/console), altere o arquivo `newrelic.yml`para:

  ```yml
  log_file_name: STDOUT
  ```

* Para visualizar o log, use o [log Viewer do Cloud Platform Console](https://cloud.google.com/appengine/docs/flexible/php/writing-application-logs).
