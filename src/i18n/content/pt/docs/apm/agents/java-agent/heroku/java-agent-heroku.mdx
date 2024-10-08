---
title: Agente Java e Heroku
tags:
  - Agents
  - Java agent
  - Heroku
metaDescription: 'Heroku users: How to configure the Java agent for your New Relic add-on.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) é uma solução de plataforma como serviço (PaaS) para hospedagem de aplicativos web em várias linguagens de agente, incluindo Java. Com o New Relic, você pode estender o Heroku com métricas do [APM](/docs/apm/new-relic-apm) ou [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser).

<Callout variant="tip">
  Se você usa Scala, consulte [Procedimentos Scala do agente Java para Heroku](/docs/agents/java-agent/heroku/java-agent-scala-heroku).
</Callout>

## Compatibilidade e requisitos [#requirements]

* Java 7 ou superior
* [Maven 3](http://maven.apache.org/download.cgi) ou superior (se você estiver usando Maven)
* [Versão mais recente do agente Java](/docs/release-notes/agent-release-notes/java-release-notes)do New Relic

## 1. Habilite o complemento do agente New Relic no Heroku [#enable]

Depois de garantir que [atende aos requisitos](#requirements), habilite o complemento do agente New Relic no Heroku.

<Callout variant="caution">
  Você deve [implantar seu aplicativo Java no Heroku](https://devcenter.heroku.com/articles/getting-started-with-java#introduction), seguindo as instruções do Heroku pelo menos durante a etapa [Implantar o aplicativo](https://devcenter.heroku.com/articles/getting-started-with-java#deploy-the-app) , antes de poder ativar o complemento do agente New Relic.
</Callout>

1. Login em sua conta Heroku.

2. Na [página de complemento do APM](https://elements.heroku.com/addons/newrelic#pricing), selecione um plano de assinatura.

3. Selecione

   <DNT>
     **Install APM**
   </DNT>

   e selecione seu aplicativo de destino no dropdown.

A instalação do complemento cria automaticamente uma conta New Relic e configura o acesso aos servidores Heroku.

## 2. Forneça o caminho para o arquivo jar [#provide-path]

Depois de [ativar o complemento do agente New Relic](#enable), passe a sinalização `javaagent` para o processo `java` e forneça o caminho para o arquivo jar editando seu `Procfile`.

<CollapserGroup>
  <Collapser
    id="deploy-heroku"
    title="Implantar no Heroku"
  >
    Se você implantar no Heroku, o local do arquivo jar do Maven e da configuração manual estará na pasta raiz do aplicativo em um diretório chamado `newrelic`.

    Exemplo:

    ```
    web: java -javaagent:/app/newrelic/newrelic.jar -jar target/HELLOWORLD.jar
    ```
  </Collapser>

  <Collapser
    id="deploy-locally"
    title="Implantar localmente"
  >
    Se você implantar localmente, seu arquivo jar poderá estar em um diretório diferente. Se estiver, substitua `PATH/TO/NEWRELIC.JAR` pelo caminho para o arquivo jar em seu diretório local.

    Exemplo:

    ```
    web: java -javaagent:PATH/TO/NEWRELIC.JAR -jar target/HELLOWORLD.jar
    ```
  </Collapser>
</CollapserGroup>

## 3. Configure seu ambiente Heroku para New Relic [#configure-heroku-environment]

Depois de [fornecer o caminho para o arquivo jar](#provide-path), configure seu ambiente Heroku para New Relic, dependendo da sua plataforma:

<CollapserGroup>
  <Collapser
    id="maven-config"
    title="Configuração Maven"
  >
    1. Dê ao seu aplicativo um [nome significativo](/docs/agents/manage-apm-agents/app-naming/name-your-application) com este comando do cinto de ferramentas Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME="APP_NAME"
       ```

    2. Adicione seu <InlinePopover type="licenseKey"/>:

       ```bash
       heroku config:set NEW_RELIC_LICENSE_KEY="LICENSE_KEY"
       ```

    3. No seu `pom.xml`, adicione a dependência `newrelic-agent` , substituindo `X.Y.Z` pela [versão mais recente do agente Java](/docs/agents/java-agent/getting-started/java-release-notes). Recomendado: para garantir que a formatação adequada seja aplicada e que o conteúdo não contenha informações confidenciais, formate a sintaxe usando [http://codebeautify.org/xmlviewer](http://codebeautify.org/xmlviewer).

       ```xml
       <dependency> 

           <groupId>com.newrelic.agent.java</groupId>
           <artifactId>newrelic-java</artifactId>
           <version>X.Y.Z</version>
           <scope>provided</scope>
           <type>zip</type>

       </dependency>
       ```

    4. No elemento `<build>` de `pom.xml`, personalize a compilação para que ela faça download do agente:

       ```xml
       <plugin>
           <groupId>org.apache.maven.plugins</groupId>
           <artifactId>maven-dependency-plugin</artifactId>
           <version>3.0.2</version>
           <executions>
               <execution>
                 <id>unpack-newrelic</id>
                 <phase>package</phase>
                 <goals>
                     <goal>unpack-dependencies</goal>
                 </goals>
                 <configuration>
                     <includeGroupIds>com.newrelic.agent.java</includeGroupIds>
                     <includeArtifactIds>newrelic-java</includeArtifactIds>
                     <overWriteReleases>false</overWriteReleases>
                     <overWriteSnapshots>false</overWriteSnapshots>
                     <overWriteIfNewer>true</overWriteIfNewer>
                     <outputDirectory>${project.basedir}</outputDirectory>
                     <destFileName>newrelic</destFileName>
                 </configuration>
               </execution>
           </executions>
       </plugin>
       ```
  </Collapser>

  <Collapser title="Configuração manual">
    1. Login no [dashboard.heroku.com](https://dashboard.heroku.com).

    2. Selecione seu aplicativo.

    3. Selecione

       <DNT>
         **Add-ons > APM**
       </DNT>

       .

    4. [Obtenha o agente Java da New Relic.](/docs/agents/java-agent/installation/install-java-agent/#download-agent)

    5. Descompacte o arquivo na raiz do seu aplicativo.

    6. Edite `newrelic.yml` para personalizar a configuração [`app_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name) com um [nome de aplicativo descritivo](/docs/agents/manage-apm-agents/app-naming/name-your-application).

    7. Também em `newrelic.yml`, adicione sua [chave de licença](/docs/accounts/install-new-relic/account-setup/license-key) à configuração [`license_key`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-license_key) .
  </Collapser>
</CollapserGroup>

## 4. Envie suas alterações e abra o aplicativo [#push-changes]

Depois de [configurar seu ambiente Heroku para New Relic](#configure-heroku-environment), envie suas alterações e abra o aplicativo para monitorá-lo com New Relic.

1. Envie suas alterações para o dinamômetro com este comando do cinto de ferramentas Heroku:

   ```bash
   git add .
   git commit -m 'YOUR COMMIT MESSAGE'
   git push heroku master
   ```

2. Abra seu aplicativo em seu browser com este comando do cinto de ferramentas Heroku:

   ```bash
   heroku open
   ```

3. Gere algum tráfego para seu aplicativo e aguarde alguns minutos.

4. Verifique o desempenho do seu aplicativo no Heroku selecionando seu aplicativo e, em seguida, selecionando o complemento New Relic.

Se nenhum dado aparecer ou se você tiver problemas, siga as dicas [de resolução de problemas](#troubleshooting) .

## Solucionar problemas [#troubleshooting]

Aqui estão algumas dicas para ajudá-lo a solucionar problemas:

* Se você não vir o complemento New Relic depois de gerar tráfego, acesse Heroku, selecione

  <DNT>
    **Find More Add Ons**
  </DNT>

  e adicione o complemento APM.

* Se nenhum dado aparecer após esperar alguns minutos, siga os [procedimentos de resolução de problemas para Heroku (Java)](/docs/agents/java-agent/heroku/no-data-appears-heroku-java).
