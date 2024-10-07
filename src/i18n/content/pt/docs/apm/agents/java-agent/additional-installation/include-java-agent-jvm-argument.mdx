---
title: Incluir o agente Java com um argumento JVM
tags:
  - Agents
  - Java agent
  - Installation
metaDescription: Detailed instructions on how to set APM's Java agent startup argument for your JVM or framework.
tocUnlisted: true
freshnessValidatedDate: never
translationType: machine
---

Este documento descreve como passar o argumento `-javaagent` para a JVM da sua framework. Esta etapa de instalação garante que o agente seja incluído no seu aplicativo. Para todos os servidores de aplicativos, certifique-se de transmitir o caminho completo para o arquivo `newrelic.jar` .

Este documento é simplesmente uma referência de como passar o argumento. Para obter procedimentos de instalação detalhados, consulte [Instalação do agente Java](/docs/agents/java-agent/installation/java-agent-manual-installation).

## ColdFusion [#Installing\_on\_ColdFusion][#Installing_on_ColdFusion]

Para passar o argumento `-javaagent` no ColdFusion:

1. Inicie o servidor ColdFusion e navegue até o console de administração do ColdFusion.

2. No menu esquerdo, selecione <DNT>**SERVER SETTINGS &gt; Java and JVM**</DNT>.

3. Se estiver usando a API do agente: especifique o caminho para `newrelic-api.jar` no campo <DNT>**ColdFusion Class Path**</DNT> .

4. No campo <DNT>**JVM Arguments**</DNT> , adicione o argumento `-javaagent` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

5. Selecione <DNT>**Submit Changes**</DNT> e reinicie o servidor ColdFusion.

## Geronimo [#Installing\_on\_Geronimo][#Installing_on_Geronimo]

Para transmitir o argumento `-javaagent` no Geronimo, consulte o jar do agente New Relic na variável de ambiente `JAVA_OPTS` ao executar o comando de inicialização:

```sh
export JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar" && geronimo run
```

## Glassfish [#Installing\_on\_Glassfish][#Installing_on_Glassfish]

Para passar o argumento `-javaagent` no Glassfish:

1. No console do Glassfish, selecione <DNT>**Application Server &gt; JVM Settings &gt; JVM options**</DNT>.

2. Na página de opções da JVM, selecione <DNT>**Add JVM option**</DNT>.

3. Adicione uma entrada para o argumento `-javaagent` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

4. Salve e reinicie o Glassfish.

Se o Glassfish não iniciar, o argumento `-javaagent` pode não ter sido definido corretamente. É possível alterar os argumentos da JVM do servidor editando o arquivo `domain.xml` .

<Callout variant="important">
  Um bug no Glassfish 2.1 impede que classes no carregador de classes de inicialização (o agente New Relic) usem a API de log Java. Isso parece ter sido corrigido nas versões 2.1.1 ou superiores.
</Callout>

## Grails [#Installing\_on\_Grails][#Installing_on_Grails]

Para passar o argumento `-javaagent` no Grails:

<CollapserGroup>
  <Collapser id="grails-run-app" title="Passe com run-app">
    1. Comece com uma versão descompactada do Grails.

    2. Execute este comando:

       ```sh
       grails -noreloading -javaagent:/full/path/to/newrelic.jar run-app
       ```
  </Collapser>

  <Collapser id="grails-run-war" title="Passe com guerra de corrida">
    1. No seu aplicativo Grails, abra este arquivo com seu editor de texto:

       ```
       grails-app/conf/BuildConfig.groovy
       ```

    2. Adicione ou edite a linha de argumentos da JVM:

       ```ini
       grails.tomcat.jvmArgs = ["-javaagent:/full/path/to/newrelic.jar"]
       ```
  </Collapser>
</CollapserGroup>

## JBoss [#Installing\_on\_JBoss][#Installing_on_JBoss]

Para passar o argumento `-javaagent` no JBoss:

<CollapserGroup>
  <Collapser id="jboss-domain-mode" title="Definido com modo de domínio (6.x EAP e 7.0 AS)">
    Use o modo de domínio para o JBoss versões 6.x EAP e 7.0 AS ou superior:

    1. Edite as propriedades da JVM para seu grupo de servidores, localizadas em:

       ```
       domain/configuration/domain.xml
       ```

    2. Modifique as propriedades para incluir o argumento `-javaagent` :

       ```xml
       <server-group name="main-server-group" profile="full">
         <jvm name="default">
           <jvm-options>
             <option value="-javaagent:/full/path/to/newrelic.jar"/>
           </jvm-options>
         </jvm>
         ...
       </server-group>
       ```

       <Callout variant="caution">
         Um [bug do JBoss em 7.0.2.Final e 7.1.0.Alpha1](https://issues.jboss.org/browse/AS7-1868) não permite que opções de JVM sejam definidas em `domain.xml`. Se você encontrar esse problema, atualize seu servidor do aplicativo JBoss.
       </Callout>
  </Collapser>

  <Collapser id="jboss-standalone-mode" title="Definir com modo autônomo (outras versões)">
    Use o modo autônomo para outras plataformas e versões:

    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Plataforma
          </th>

          <th>
            Instruções
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Unix ou macOS com 6.x EAP ou 7.0.x AS e acima
          </td>

          <td>
            Na parte inferior de `bin/standalone.conf`, adicione:

            ```ini
            JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Windows com 6.x EAP ou 7.0.x AS ou superior
          </td>

          <td>
            Em `bin/standalone.bat`, antes da linha:

            ```batch
            set JBOSS_ENDORSED_DIRS=%JBOSS_HOME%\lib\endorsed
            ```

            Adicionar:

            ```batch
            set "JAVA_OPTS=-javaagent:C:/full/path/to/newrelic.jar %JAVA_OPTS%"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Unix ou macOS com 6.x ou anterior
          </td>

          <td>
            Na parte inferior de `bin/run.conf`, adicione isto:

            ```ini
            JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Windows com 6.x ou anterior
          </td>

          <td>
            Em `bin/run.bat`, antes da linha:

            ```batch
            set JBOSS_CLASSPATH=%RUN_CLASSPATH%
            ```

            Adicionar:

            ```batch
            set "JAVA_OPTS=-javaagent:C:/full/path/to/newrelic.jar %JAVA_OPTS%"
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Jetty [#Installing\_on\_Jetty][#Installing_on_Jetty]

Para passar o argumento `-javaagent` no Jetty:

<CollapserGroup>
  <Collapser
    id="jetty-jettysh"
    title={<>Se você definir exec em <InlineCode>
      jetty.sh
    </InlineCode></>
    }
  >
    Edite o `JAVA_OPTIONS` no seu script `jetty.sh` :

    ```sh
    export JAVA_OPTIONS="${JAVA_OPTIONS} -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser
    id="jetty-startini"
    title={<>Se você definir exec em <InlineCode>
      start.ini
    </InlineCode></>
    }
  >
    Adicione o caminho do agente ao arquivo de configuração `start.ini` :

    ```
    -javaagent:/full/path/to/newrelic.jar
    ```
  </Collapser>
</CollapserGroup>

## Play [#Installing\_on\_Play][#Installing_on_Play]

Para passar o argumento `-javaagent` no Play:

<CollapserGroup>
  <Collapser id="play-1-2-4" title="Play 1.2.4">
    Anexe o argumento `-javaagent` ao executar seu aplicativo Play:

    ```sh
    play run your_app_name -javaagent:/full/path/to/newrelic.jar
    ```
  </Collapser>

  <Collapser id="play-2.0" title="Play 2.0">
    1. Comece com uma distribuição <DNT>**unzipped**</DNT> contendo o script `start` :

       ```sh
       play clean dist && unzip dist/*.zip
       ```

    2. Anexe o argumento `-javaagent` ao iniciar seu app Play:

       ```sh
       cd unzipped/folder; chmod a+x start; ./start -javaagent:/full/path/to/newrelic.jar
       ```
  </Collapser>

  <Collapser id="play-2-2" title="Play 2.2">
    1. Comece com uma distribuição <DNT>**unzipped**</DNT> contendo o script `start` :

       ```sh
       play clean dist && unzip target/directory/universal/*.zip
       ```

    2. Anexe o argumento `-J-javaagent` ao iniciar seu app Play:

       ```sh
       cd unzipped/folder; ./bin/scriptname -J-javaagent:/full/path/to/newrelic.jar
       ```

       <Callout variant="tip">
         Para ativar o tempo de carregamento da página, consulte [Instrumentação manual com Play 2.2](/docs/agents/java-agent/instrumentation/page-load-timing-java#manual-play-2-2).
       </Callout>
  </Collapser>

  <Collapser id="play-2-3-etc" title="Play 2.3, 2.4 e 2.5">
    1. Comece com uma distribuição <DNT>**unzipped**</DNT> contendo o script `start` :

       ```sh
       activator clean dist && unzip target/directory/universal/*.zip
       ```

    2. Anexe o argumento `-J-javaagent` ao iniciar seu app Play:

       ```sh
       cd unzipped/folder; ./bin/scriptname -J-javaagent:/full/path/to/newrelic.jar
       ```

    3. Se você usa o Typesafe Activator com o Play 2.4, adicione esta linha ao seu `build.sbt`:

       ```scala
       javaOptions ++= Seq("-javaagent:/full/path/to/newrelic.jar")
       ```
  </Collapser>
</CollapserGroup>

## Resin [#Installing\_on\_Resin][#Installing_on_Resin]

Java 8

* Opção 1: adicione o argumento `javaagent` por meio da propriedade `jvmargs` no arquivo `resin.properties` do servidor:
  ```properties
  jvm_args  : -javaagent:/full/path/to/newrelic.jar
  ```
* Opção 2: Especifique o argumento `-javaagent` adicionando-o à seção `<jvm-args>` no arquivo `conf/resin.conf` ou `conf/resin.xml` :
  ```xml
  <jvm-arg>-javaagent:/full/path/to/newrelic.jar</jvm-arg>
  ```

Java 9 ou superior

O sistema de módulos introduzido no Java 9 pode levar à exceção `NoClassDefFoundError: java/sql/SQLException` se a propriedade `-javaagent` for adicionada aos arquivos `conf/resin.conf` ou `conf/resin.xml` . Se você estiver usando Java 9 ou superior, certifique-se de que a propriedade `-javaagent` não esteja incluída nesses arquivos.

O Resin pode ser executado em Java 9 ou superior, com o agente Java usando uma das seguintes opções:

* Opção 1: adicione o argumento `javaagent` por meio da propriedade `jvmargs` no arquivo `resin.properties` do servidor:

  ```properties
  jvm_args  : -javaagent:/full/path/to/newrelic.jar
  ```

  O servidor Resin pode então ser executado com `./bin/resin.sh start`.

* Opção 2: execute o jar de Resin com a propriedade `-javaagent` na linha de comando:

  ```sh
  java -javaagent:/path/to/newrelic.jar -jar lib/resin.jar start
  ```

<Callout variant="important">
  O agente não funcionará com Resin no Windows ao usar Java 9 ou superior.
</Callout>

## Solr [#Installing\_on\_solr][#Installing_on_solr]

Para passar o argumento `-javaagent` em <DNT>Solr</DNT>:

<CollapserGroup>
  <Collapser id="solr-standalone-5" title="Solr autônomo 5.x ou superior">
    Adicione a propriedade `-javaagent` a `bin/solr.in.sh`:

    ```sh
    SOLR_OPTS="$SOLR_OPTS -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser id="solr standalone-other" title="Solr autônomo 4.x ou inferior">
    Adicione o `-javaagent` antes do `start.jar`:

    ```sh
    java -javaagent:/full/path/to/newrelic.jar -jar start.jar
    ```
  </Collapser>

  <Collapser id="solr-app-server" title="Servidor de aplicativos Solr">
    Ao executar o Solr em um <DNT>**application server**</DNT>, siga as instruções desse servidor de aplicativo para adicionar o sinalizador `-javaagent` . Certifique-se também de que o JMX esteja ativado para o servidor do aplicativo. Se você não visualizar dados na página Solr da interface APM, siga os [procedimentos de resolução de problemas para dados Solr](/docs/agents/java-agent/troubleshooting/solr-data-not-appearing-apm-solr-tab-java).
  </Collapser>
</CollapserGroup>

## Bota Primavera

Para transmitir o argumento `-javaagent` no Spring Boot, adicione-o à linha de comando na qual você inicia seu aplicativo. Certifique-se de adicioná-lo antes do argumento `-jar` :

```sh
java -javaagent:/full/path/to/newrelic.jar -jar app.jar
```

## Invólucro Tanuki

Para passar o argumento `-javaagent` no Tanuki Wrapper, adicione uma opção de wrapper `wrapper.conf`. Na linha abaixo, substitua `XXX` por um número não utilizado neste arquivo:

```ini
wrapper.java.additional.XXX=-javaagent:/full/path/to/newrelic.jar
```

<Callout variant="tip">
  Em sistemas Linux, não são necessárias aspas ao configurar esse valor. Este comportamento pode variar em outros sistemas operacionais.
</Callout>

## Tomcat [#Installing\_on\_Tomcat][#Installing_on_Tomcat]

Para passar o argumento `-javaagent` no Tomcat:

<CollapserGroup>
  <Collapser id="tomcat-setenvsh" title="Com setenv.sh">
    Crie um script `CATALINA_BASE/bin/setenv.sh` se ainda não existir. Configure seu script `setenv.sh` para usar o agente New Relic usando a variável de ambiente `CATALINA_OPTS` :

    ```sh
    export CATALINA_OPTS="$CATALINA_OPTS -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser id="tomcat-setenvbat" title="Com setenv.bat">
    Crie um script `CATALINA_BASE/bin/setenv.bat` se ainda não existir. Configure seu script `setenv.bat` para usar o agente New Relic usando a variável de ambiente `CATALINA_OPTS` :

    ```batch
    SET "CATALINA_OPTS=%CATALINA_OPTS% -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser id="tomcat-catalinash" title="Com catalina.sh (NÃO RECOMENDADO)">
    <Callout variant="tip">
      Recomendamos que você não defina nenhuma variável neste script. Em vez disso, coloque-os em um script `setenv.sh` em `CATALINA_BASE/bin` para manter suas personalizações separadas.
    </Callout>

    Configure seu arquivo `catalina.sh` para usar o agente New Relic usando a variável de ambiente `JAVA_OPTS` :

    ```sh
    export JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser id="tomcat-catalinabat" title="Com catalina.bat (NÃO RECOMENDADO)">
    <Callout variant="tip">
      Recomendamos que você não defina nenhuma variável neste script. Em vez disso, coloque-os em um script `setenv.bat` em `CATALINA_BASE/bin` para manter suas personalizações separadas.
    </Callout>

    Se você usar `catalina.bat` para lançar o Tomcat, defina a variável `JAVA_OPTS` próximo ao topo do arquivo:

    ```batch
    SET JAVA_OPTS=%JAVA_OPTS% -javaagent:/full/path/to/newrelic.jar
    ```
  </Collapser>

  <Collapser id="tomcat-windows" title="Com Windows">
    1. Selecione <DNT>**Start &gt; Apache Tomcat X.Y.Z. &gt; Configure Tomcat &gt; Java**</DNT>.

    2. Na caixa de texto <DNT>**Java Options**</DNT> , insira o argumento. Use barras `/` para o separador de caminho. Para o Tomcat 6, adicione uma quebra de linha após o argumento `-javaagent` .

       ```
       -javaagent:/full/path/to/newrelic.jar
       ```

    3. Selecione <DNT>**Apply**</DNT> e reinicie o Tomcat.
  </Collapser>

  <Collapser id="apache-commons-daemon" title="Com o daemon Apache Commons">
    A versão do daemon Apache Commons (jsvc) incluída no Tomcat 6 não suporta o argumento `-javaagent` usado pelo New Relic. No entanto, uma construção do daemon jsvc a partir da origem do tronco suportará o argumento `-javaagent` por meio do prefixo `-X` . Veja o [bug do Apache rastreando o problema](https://issues.apache.org/jira/browse/DAEMON-84).

    Há uma correção no repositório de origem do Apache Commons. Para maiores informações:

    * Consulte a [documentação do repositório fonte do Apache](https://commons.apache.org/svninfo.html).
    * Vá diretamente para o [repositório de origem SVN](https://subversion.apache.org/).
  </Collapser>
</CollapserGroup>

## WebLogic [#Installing\_on\_WebLogic][#Installing_on_WebLogic]

Para passar o argumento `-javaagent` no WebLogic:

<CollapserGroup>
  <Collapser id="weblogic-nix" title="Servidores de administração em Linux ou macOS">
    1. Edite seu arquivo `startWebLogic.sh` , localizado no diretório `bin` do domínio.

    2. Perto do início do arquivo, adicione:

       ```sh
       export JAVA_OPTIONS="$JAVA_OPTIONS -javaagent:/full/path/to/newrelic.jar"
       ```
  </Collapser>

  <Collapser id="weblogic-windows" title="Servidores de administração no Windows">
    1. Edite seu arquivo `startWebLogic.bat` , localizado no diretório `bin` do domínio.

    2. Perto do início do arquivo, adicione:

       ```batch
       set JAVA_OPTIONS=%JAVA_OPTIONS% -javaagent:"C:\full\path\to\newrelic.jar"
       ```
  </Collapser>

  <Collapser id="weblogic-managed-server" title="Instância de servidor gerenciado">
    Para instância do servidor de administração, siga as instruções do Linux/macOS ou Windows. Você não pode usar o console de administração para instalar a instância do servidor de administração.

    Para instância de servidor gerenciado, utilize o console de administração:

    1. No console de administração, navegue até <DNT>**Environments &gt; Servers &gt; (select a server) &gt; Server Start &gt; Arguments**</DNT>.

    2. De <DNT>**Arguments**</DNT>, adicione:

       ```
       -javaagent:/full/path/to/newrelic.jar
       ```

    3. Salve a página e reinicie a instância do servidor.
  </Collapser>
</CollapserGroup>

## WebSphere [#Installing\_on\_Websphere][#Installing_on_Websphere]

Para transmitir o argumento `-javaagent` no WebSphere:

1. No console de administração, selecione <DNT>**Servers &gt; Application servers &gt; (select a server) &gt; Configuration &gt; Service Infrastructure &gt; Java and Process Management**</DNT>.

2. Selecione <DNT>**Process Definition &gt; Additional Properties**</DNT> e depois selecione <DNT>**Java Virtual Machine**</DNT>.

3. No campo <DNT>**Generic JVM arguments**</DNT> , adicione o argumento `-javaagent` para seu arquivo `newrelic.jar` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

4. Selecione <DNT>**Apply**</DNT> e depois selecione <DNT>**Save**</DNT>.

5. Reinicie seu servidor.

Para obter informações adicionais, consulte a documentação sobre [coleta de métricas do WebSphere PMI](/docs/agents/java-agent/features/jvm-metrics-page#default-pmi).

## Comunidade WebSphere [#Installing\_on\_Websphere\_Community\_Edition][#Installing_on_Websphere_Community_Edition]

Para transmitir o argumento `-javaagent` no WebSphere Community Edition, consulte o jar do agente New Relic na variável de ambiente `JAVA_OPTS` ao executar o comando de inicialização:

```sh
export JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar" && startup
```

## Perfil do WebSphere Liberty [#Installing\_on\_WebSphere\_Liberty\_Profile][#Installing_on_WebSphere_Liberty_Profile]

Para transmitir o argumento `-javaagent` no WebSphere Liberty Profile:

1. Edite `${server.config.dir}/jvm.options`.

2. Adicione o argumento `-javaagent` para apontar para seu arquivo `newrelic.jar` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

3. Reinicie seu servidor.

## Wildfly [#Installing\_on\_WildFly][#Installing_on_WildFly]

Para passar o argumento `-javaagent` no Wildfly (se estiver usando o Wildfly 11 ou superior, consulte [instruções adicionais de instalação](/docs/agents/java-agent/additional-installation/wildfly-version-11-installation-java)):

<CollapserGroup>
  <Collapser id="wildfly-domain-mode" title="Definir com modo de domínio">
    1. Edite as propriedades da JVM para seu grupo de servidores, localizadas em:

       ```
       domain/configuration/domain.xml
       ```

    2. Modifique as propriedades para incluir o argumento `-javaagent` :

       ```xml
       <server-group name="main-server-group" profile="full">
         <jvm name="default">
           <jvm-options>
             <option value="-javaagent:/full/path/to/newrelic.jar"/>
           </jvm-options>
         </jvm>
         ...
       </server-group>
       ```
  </Collapser>

  <Collapser id="wildfly-standalone-mode" title="Definir com modo autônomo">
    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Plataforma
          </th>

          <th>
            Instruções
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Unix ou macOS
          </td>

          <td>
            Na parte inferior de `bin/standalone.conf`, adicione:

            ```ini
            JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Windows
          </td>

          <td>
            Em `bin/standalone.bat`, encontre esta linha:

            ```batch
            rem Setup JBoss specific properties
            ```

            Em seguida, adicione:

            ```batch
            set "JAVA_OPTS=-javaagent:C:/full/path/to/newrelic.jar %JAVA_OPTS%"
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Outros servidores de aplicativos [#other-app-servers]

O agente Java da New Relic funciona em qualquer [servidor de aplicativos compatível](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent). Se o seu servidor de aplicativos não estiver listado neste documento, siga os procedimentos padrão para que seu servidor de aplicativos passe esse argumento para a JVM antes do jar do aplicativo:

```
-javaagent:/full/path/to/newrelic.jar
```