---
title: Instale o agente Java New Relic para Docker
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: How to install New Relic's Java agent for APM on a Docker container.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica uma instalação básica do aplicativo <InlinePopover type="apm"/>agente para Java em um contêiner Docker . Discutimos a configuração necessária e também exploramos algumas configurações opcionais, incluindo:

* Como utilizar arquivos de configuração New Relic idênticos para cada contêiner, independente do ambiente onde os containers são utilizados
* Como usar a camada Docker quando cada agente em cada ambiente precisa de dados de configuração ligeiramente diferentes
* Como desabilitar o agente New Relic em alguns ambientes e habilitá-lo em outros

Embora não discutamos opções avançadas aqui, você pode instalar o agente Java em volumes Docker e usar a imagem do contêiner Docker em outro software, como Swarm, ECS, AKS, EKS, OpenShift e Kubernetes. Nossos exemplos Docker referem-se ao Tomcat, portanto, se você estiver usando outro servidor de aplicativos, consulte a documentação do seu fornecedor.

## Obtenha o agente Java [#download-agent]

Baixe `newrelic-java.zip` usando `curl`, `Invoke-WebRequest` (PowerShell) ou a interface New Relic:

<CollapserGroup>
  <Collapser
    id="download-from-curl"
    title={<>Baixe usando <InlineCode>curl</InlineCode></>}
  >
    Complete o seguinte:

    1. Inicie uma sessão de linha de comando.

    2. Mude para um diretório temporário onde você pode baixar o arquivo zip.

    3. Execute este comando `curl` :

       ```sh
       curl -O https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/newrelic-java.zip
       ```

    4. Descompactar `newrelic-java.zip`
  </Collapser>

  <Collapser
    id="download-from-powershell"
    title={<>Baixe usando <InlineCode>Invoke-WebRequest</InlineCode> (PowerShell)</>}
  >
    Complete o seguinte:

    1. Inicie uma sessão do PowerShell.

    2. Mude para um diretório temporário onde você pode baixar o arquivo zip.

    3. Execute este comando do PowerShell:

       ```powershell
       Invoke-WebRequest -Uri https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/newrelic-java.zip -OutFile newrelic-java.zip
       ```

    4. Descompacte `newrelic-java.zip`:

       ```powershell
       Expand-Archive -Path newrelic-java.zip -DestinationPath DESTINATION_PATH
       ```
  </Collapser>

  <Collapser
    id="download-from-UI"
    title="Baixe na interface do New Relic"
  >
    1. Em

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
       </DNT>

       , clique em

       <DNT>
         **Add more data**
       </DNT>

       e pesquise "Java".

    2. Selecione a opção de monitoramento de aplicativos Java e conclua o processo.
  </Collapser>
</CollapserGroup>

## Configure o diretório de instalação [#install-directory]

Você pode descompactar o arquivo `newrelic-java.zip` onde for conveniente para você. Nas seções subsequentes, presumimos que você o extraiu no diretório de trabalho atual, que coloca os arquivos necessários em `./newrelic`.

## Modificar script de inicialização [#start-up-scripts]

O script de inicialização que contém o comando para iniciar o servidor do aplicativo deve incluir o argumento integrado do Java `-javaagent`. Recomendamos que você defina esse argumento com a variável de ambiente `JAVA_OPTS` . O valor desse argumento deve conter o local onde você `ADD` transfere o arquivo jar do agente Java APM para a imagem.

Por exemplo, com o Tomcat, use comandos como estes no `Dockerfile`:

```dockerfile
RUN mkdir -p /usr/local/tomcat/newrelic
ADD ./newrelic/newrelic.jar /usr/local/tomcat/newrelic/newrelic.jar
ENV JAVA_OPTS="$JAVA_OPTS -javaagent:/usr/local/tomcat/newrelic/newrelic.jar"
```

## Definir configuração do agente [#agent-configs]

Por padrão, o comportamento do agente é controlado por entradas de configuração em `newrelic.yml`, que normalmente está localizado no mesmo diretório que o agente. Esta seção explica como substituir essas configurações `newrelic.yml` usando variáveis de ambiente ou propriedades do sistema Java no `Dockerfile`.

Antes de analisarmos algumas configurações específicas, veja como carregar `newrelic.yml` usando o `Dockerfile`:

```dockerfile
ADD ./newrelic/newrelic.yml /usr/local/tomcat/newrelic/newrelic.yml
```

Para uma instalação básica Docker , conclua estas configurações:

* [Nome do aplicativo](#app-name)
* [chave de licença](#license-key)
* [Registro](#logs)
* [Meio ambiente](#environment) (opcional)
* [agente habilitado](#agent-enabled) (opcional)

### Nome do aplicativo [#app-name]

O nome do aplicativo é uma configuração que você define para identificar seu aplicativo no New Relic.

<Callout variant="tip">
  Você pode reutilizar um nome de aplicativo para vários aplicativos que atendem à mesma função, para que todos os dados desses aplicativos sejam acumulados no mesmo aplicativo lógico no New Relic. Para obter mais detalhes sobre opções de agrupamento adicionais, consulte [Usar vários nomes para um aplicativo](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app).
</Callout>

Substitua `MY_APP_NAME` pelo nome do seu aplicativo em um destes comandos `Dockerfile` :

<table>
  <thead>
    <tr>
      <th style={{ width: "125px" }}>
        Opção
      </th>

      <th>
        Comando
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Variável de ambiente
      </td>

      <td>
        ```powershell
        ENV NEW_RELIC_APP_NAME="MY_APP_NAME"
        ```
      </td>
    </tr>

    <tr>
      <td>
        Propriedade do sistema Java
      </td>

      <td>
        ```powershell
        ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.app_name='MY_APP_NAME'"
        ```
      </td>
    </tr>
  </tbody>
</table>

Depois de inicializar o contêiner, o nome do seu aplicativo aparecerá no New Relic.

### chave de licença

Esta configuração é necessária para você reportar dados para sua conta New Relic.

Para copiar sua chave de licença:

1. Acesse a interface da chave da API e obtenha um <InlinePopover type="licenseKey"/>.

2. Em um destes comandos `Dockerfile` , substitua `MY_LICENSE_KEY` pela sua chave de licença:

   <table>
     <thead>
       <tr>
         <th style={{ width: "125px" }}>
           Opção
         </th>

         <th>
           Comando
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td>
           Variável de ambiente
         </td>

         <td>
           ```dockerfile
           ENV NEW_RELIC_LICENSE_KEY="MY_LICENSE_KEY"
           ```
         </td>
       </tr>

       <tr>
         <td>
           Propriedade do sistema Java
         </td>

         <td>
           ```dockerfile
           ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.license_key='MY_LICENSE_KEY'"
           ```
         </td>
       </tr>
     </tbody>
   </table>

### Registro

Por padrão, os logs são gravados no diretório de log relativo ao local de `newrelic.jar`. Certifique-se de que a conta de usuário que inicia o servidor do seu aplicativo também tenha o direito de executar tarefas como:

* Criando o diretório de log.
* Criando e anexando ao arquivo de log nesse diretório.

Aqui está um exemplo do Dockerfile onde `tomcat` é o usuário que inicia o Tomcat:

```dockerfile
RUN mkdir -p /usr/local/tomcat/newrelic/logs
RUN chown -R tomcat:tomcat /usr/local/tomcat/newrelic/logs
```

Você também pode enviar o log para `STDOUT` adicionando um dos seguintes itens ao Dockerfile:

<table>
  <thead>
    <tr>
      <th style={{ width: "125px" }}>
        Opção
      </th>

      <th>
        Comando
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Variável de ambiente
      </td>

      <td>
        ```dockerfile
        ENV NEW_RELIC_LOG_FILE_NAME=STDOUT
        ```
      </td>
    </tr>

    <tr>
      <td>
        Propriedade do sistema Java
      </td>

      <td>
        ```dockerfile
        ENV JAVA_OPTS=-Dnewrelic.config.log_file_name=STDOUT
        ```
      </td>
    </tr>
  </tbody>
</table>

### Meio ambiente (opcional) [#environment]

É possível transmitir uma propriedade Java ou uma variável de ambiente para determinar quais seções específicas do ambiente o agente usa em `newrelic.yml`. Use esta abordagem se preferir que o arquivo `newrelic.yml` controle a configuração específica do ambiente em vez de passar toda a configuração via Docker.

Aqui está um exemplo `Dockerfile` de transmissão da propriedade de sistema Java `newrelic.environment` via Docker para usar o valor customizado `dev` na seção de ambiente de `newrelic.yml`:

1. Usando o formato shell da instrução CMD, inclua uma referência a uma nova variável de ambiente escolhida (por exemplo, `ENV`):

   ```dockerfile
   CMD java -Dnewrelic.environment=$ENV -jar myjar.jar
   ```

2. Na linha de comando `docker run` , inclua um argumento para definir a variável de ambiente no contêiner:

   ```sh
   docker run -it -e "ENV=dev" myDockerImage
   ```

<Callout variant="important">
  Se você não especificar um valor para `newrelic.environment`, o agente assumirá que ele está em execução no seu ambiente de produção e usará os valores do corpo principal do arquivo de configuração.
</Callout>

### Agente habilitado (opcional) [#agent-enabled]

Esta configuração controla se o agente está habilitado. Digamos que você queira a mesma imagem Docker para cada instalação. No entanto, você não deseja executar o agente New Relic sempre que um engenheiro inicia um aplicativo de teste porque não deseja aumentar sua contagem de instâncias.

Este problema pode ser resolvido usando a propriedade de sistema Java `newrelic.environment` .

1. No corpo principal de `newrelic.yml`, desative o agente Java configurando `agent_enabled: false`.
2. Em seções de ambiente específicas de `newrelic.yml`, defina `agent_enabled: true`.

Então, você pode executar um agente específico especificando o ambiente em tempo de execução.

## Exemplos adicionais do Dockerfile do Tomcat [#code-samples]

<CollapserGroup>
  <Collapser
    id="both-env-and-props"
    title="Tomcat com ambiente e propriedades do sistema Java"
  >
    ```dockerfile
    FROM tomcat:9
    # Add the newrelic.jar and -javaagent parameters
    RUN mkdir -p /usr/local/tomcat/newrelic
    ADD ./newrelic/newrelic.jar /usr/local/tomcat/newrelic/
    ENV JAVA_OPTS="$JAVA_OPTS -javaagent:/usr/local/tomcat/newrelic/newrelic.jar"
    # Add the configuration file
    ADD ./newrelic/newrelic.yml /usr/local/tomcat/newrelic/
    # An example of setting a system property config
    ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.app_name='My Application'"
    # An example of setting an Environment variable config
    ENV NEW_RELIC_LICENSE_KEY="license_key"
    # Config to include the agent logs in Docker's stdout logging
    ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.log_file_name=STDOUT"
    EXPOSE 8080
    CMD ["catalina.sh", "run"]
    ```
  </Collapser>

  <Collapser
    id="start-up"
    title="Como iniciar um aplicativo com o agente Java"
  >
    ```dockerfile
    FROM openjdk:8
    ADD my-application.jar /app
    ADD newrelic.jar  /app
    ADD newrelic.yml  /app 
    ENV NEW_RELIC_APP_NAME="My Application"
    ENV NEW_RELIC_LICENSE_KEY="license_key"
    ENV NEW_RELIC_LOG_FILE_NAME="STDOUT"
    ENTRYPOINT ["java","-javaagent:/app/newrelic.jar","-jar","/app/my-application.jar"]
    ```
  </Collapser>
</CollapserGroup>

## Próximos passos [#what-is-next]

Agora que você tem uma instalação básica do agente no Docker, aqui estão algumas etapas adicionais a serem consideradas:

* Revise outras [configurações](/docs/agents/java-agent/configuration/java-agent-configuration-config-file) do agente.
* Leia uma [postagem detalhada no Fórum de Suporte](https://discuss.newrelic.com/t/relic-solution-what-you-need-to-know-about-new-relic-when-deploying-with-docker/52492) sobre Docker e New Relic.
