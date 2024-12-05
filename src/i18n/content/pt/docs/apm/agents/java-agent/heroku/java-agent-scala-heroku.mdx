---
title: Agente Java com Scala no Heroku
tags:
  - Agents
  - Java agent
  - Heroku
metaDescription: 'Scala with Heroku users: How to install and configure the Java agent for your APM add-on.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) é uma solução de plataforma como serviço (PaaS) para hospedagem de aplicativos web em várias linguagens de agente, incluindo Scala. Com o New Relic, você pode estender o Heroku com métricas do [APM](/docs/apm/new-relic-apm) e [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser).

<Callout variant="tip">
  Para instalação não Scala, consulte [agente Java e Heroku](/docs/agents/java-agent/heroku/java-agent-heroku).
</Callout>

## Compatibilidade e requisitos [#requirements]

* Java 7 ou superior
* [Versão mais recente do agente Java](/docs/release-notes/agent-release-notes/java-release-notes)do New Relic

## 1. Habilite o complemento New Relic [#enable-add-on]

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

## 2. Configure seu ambiente Heroku para New Relic [#configure-heroku-environment]

Depois de concluir os [requisitos](#requirements) e [ativar o complemento New Relic](#enable-add-on), configure seu ambiente Scala Heroku para New Relic:

1. Edite seu `Procfile` para apontar para o jar do agente na pasta raiz do seu aplicativo. Substitua o conteúdo do arquivo, substituindo `X.Y.Z` pela [versão mais recente do agente](/docs/agents/java-agent/getting-started/java-release-notes):

   ```procfile
   web: target/universal/stage/bin/play-getting-started -Dhttp.port=${PORT} -J-javaagent:/app/target/universal/stage/lib/com.newrelic.agent.java.newrelic-agent-X.Y.Z.jar -J-Dnewrelic.config.file=conf/newrelic.yml
   ```

   OU

   Identifique o caminho para `newrelic.jar` com a [variável de ambiente](https://devcenter.heroku.com/articles/config-vars) `JAVA_OPTS` .

2. Edite seu `build.sbt`. Chame o agente, substituindo `X.Y.Z` pela [versão mais recente do agente Java](/docs/agents/java-agent/getting-started/java-release-notes):

   <CollapserGroup>
     <Collapser
       id="build-sbt"
       title="Personalizada build.sbt"
     >
       ```scala
       name := """play-getting-started"""
       version := "1.0-SNAPSHOT"
       lazy val root = (project in file(".")).enablePlugins(PlayScala)
       scalaVersion := "2.11.7"
       libraryDependencies ++= Seq(
           jdbc,
           cache,
           "org.postgresql" % "postgresql" % "9.4-1201-jdbc41",
           ws
       )
       libraryDependencies <+= scalaVersion("org.scala-lang" % "scala-compiler" % _ )
       libraryDependencies ++= Seq("com.newrelic.agent.java" % "newrelic-agent" % "X.Y.Z")
       libraryDependencies ++= Seq("com.newrelic.agent.java" % "newrelic-api" % "X.Y.Z")
       ```
     </Collapser>
   </CollapserGroup>

3. Baixe um arquivo `newrelic.yml` personalizado nas configurações da sua conta APM:

   <CollapserGroup>
     <Collapser
       id="customized-yml"
       title={<>Como baixar um personalizado <InlineCode>newrelic.yml</InlineCode></>}
     >
       1. Login no [dashboard.heroku.com](https://dashboard.heroku.com).

       2. Selecione seu aplicativo.

       3. Selecione

          <DNT>
            **Add-ons > APM**
          </DNT>

          .

       4. [Obtenha o agente Java da New Relic.](/docs/agents/java-agent/installation/install-java-agent/#download-agent)

       5. Descompacte o arquivo baixado.

       6. Copie `newrelic.yml` para o diretório `scala-getting-started/conf` :
     </Collapser>
   </CollapserGroup>

4. Edite `newrelic.yml` para personalizar a configuração [`app_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name) com um [nome de aplicativo descritivo](/docs/agents/manage-apm-agents/app-naming/name-your-application).

5. Também em `newrelic.yml`, adicione sua [chave de licença](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key) à configuração [`license_key`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-license_key) .

## 3. Envie suas alterações e abra o aplicativo [#push-changes]

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

## Resolução de problemas sua instalação [#troubleshooting]

* Se você não vir o complemento New Relic depois de gerar tráfego, acesse Heroku, selecione

  <DNT>
    **Find more add ons**
  </DNT>

  e adicione o complemento APM.

* Se nenhum dado aparecer após esperar alguns minutos, consulte [Nenhum dado aparece com Heroku (Java)](/docs/agents/java-agent/heroku/no-data-appears-heroku-java).
