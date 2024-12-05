---
title: Instrumento de monitoramento de browser com API de agente Java
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: How to use manual instrumentation to set up New Relic's Java agent to monitor your end users' browser experience with your app.
freshnessValidatedDate: never
translationType: machine
---

O recurso [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)oferece visibilidade sobre como o usuário está interagindo com seu aplicativo Java usando um trecho JavaScript (ou "agente") para instrumentar as páginas da Web do seu aplicativo. Para instalar o agente browser através da interface, siga os procedimentos para [instalar o agente browser](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent). Por exemplo, você pode:

* Habilite um aplicativo de monitor APM.
* Habilite com o método copiar/colar.
* Habilite usando a API REST.

Você também pode [instrumentar manualmente](#manual_instrumentation) suas páginas da web usando a API do agente Java, conforme explicado neste documento.

## Usar API do agente Java [#manual_instrumentation]

Caso seu framework não permita que você habilite o monitoramento do Browser a partir de nossa interface, com o método copiar/colar, ou utilizando nossa API REST, você pode instrumentar manualmente o monitoramento de suas páginas web. Para fazer isso, use nossa [API de agente Java](/docs/agents/java-agent/api-guides/guide-using-java-agent-api).

1. Certifique-se de estar usando a [versão mais recente do agente Java](/docs/release-notes/agent-release-notes/java-release-notes).

2. Desative a instrumentação automática.

   <CollapserGroup>
     <Collapser
       id="disabling-auto-all"
       title="Desative a instrumentação automática em todas as páginas"
     >
       1. Defina o sinalizador [`auto_instrument`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#bm-auto_instrument) em `browser_monitoring` como `false` em seu `newrelic.yml`.

          ```yml
          browser_monitoring:
            auto_instrument: false
          ```

       2. Reinicie seu aplicativo.

       3. Limpe o cache de trabalho do servidor de aplicativos.

          A limpeza do cache de trabalho força o servidor de aplicativos a recompilar JSPs, que é quando ocorre a instrumentação automática.
     </Collapser>

     <Collapser
       id="disable-auto-specific"
       title="Desative a instrumentação automática apenas em páginas específicas"
     >
       Use o sinalizador `disabled_auto_pages` na seção `browser_monitoring` . Por exemplo, para desativar a instrumentação automática em `testpage_1.jsp` e `testpage_2.jsp`, use o seguinte:

       ```yml
       browser_monitoring:
         disabled_auto_pages: /WEB-INF/jsp/testpage_1.jsp, /WEB-INF/jsp/testpage_2.jsp
       ```
     </Collapser>
   </CollapserGroup>

3. [Acesse a classe API do agente Java](/docs/agents/java-agent/api-guides/guide-using-java-agent-api#api) adicionando `newrelic-api.jar` ao caminho de classe do seu aplicativo.

4. Adicione o método `com.newrelic.api.agent.NewRelic.getBrowserTimingHeader()` para ativar o controle de tempo. Veja abaixo os procedimentos para estrutura específica.

   <Callout variant="important">
     A partir do [agente Java 8.9.0](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-890), a chamada do método [API getBrowserTimingFooter()](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html) está obsoleta. Todo o script do browser agora é incluído ao chamar `getBrowserTimingHeader()`.
   </Callout>

   Encontre os métodos apropriados com base na framework que você está usando:

   <CollapserGroup>
     <Collapser
       id="manual-jsp"
       title="Instrumentação manual JSP"
     >
       Insira o cabeçalho o mais próximo possível do topo da tag `<head>`, mas depois das metatags.

       ```html
       <!DOCTYPE html>

       <html>
       <head>
         <title>EXAMPLE</title>
         <meta charset="utf-8">
         <meta name="description" content="Example header and footer call">;
         <%= com.newrelic.api.agent.NewRelic.getBrowserTimingHeader() %>
       </head>

       <body>

       </body>
       </html>
       ```
     </Collapser>

     <Collapser
       id="manual-html"
       title="Instrumentação manual de HTML bruto"
     >
       Para usar manualmente HTML bruto, [inclua o código de tempo de carregamento da página na resposta HTTP](/docs/agents/java-agent/custom-instrumentation/java-agent-api-example-program#include-browser).
     </Collapser>

     <Collapser
       id="manual-thymeleaf-2-1"
       title="Instrumentação manual Thymeleaf 2.1 ou superior"
     >
       ```html
       <head>
         ...
         <div th:remove="tag" th:utext="${header}" th:with="header=${T(com.newrelic.api.agent.NewRelic).getBrowserTimingHeader()}"></div>
       </head>

       <body>
         ...
       </body>
       ```
     </Collapser>

     <Collapser
       id="manual-coldfusion-cfml"
       title="Instrumentação manual da página ColdFusion CFML"
     >
       ```html
       <cfobject type="Java" class="com.newrelic.api.agent.NewRelic" name="newRelic" />
       <cfset header=newRelic.getBrowserTimingHeader() />
       <cfoutput>#header#</cfoutput>
       ...
       <cfoutput>#footer#</cfoutput>
       ```
     </Collapser>

     <Collapser
       id="manual-jsf"
       title="Estrutura Java Server Faces (JSF)"
     >
       A instrumentação manual não está disponível com JSF. Para inserir o trecho JavaScript do browser nas páginas da web do seu aplicativo, use o [método copiar/colar](/docs/browser/new-relic-browser/installation-configuration/add-apps-new-relic-browser#copy-paste-app).
     </Collapser>

     <Collapser
       id="manual-play-groovy"
       title="Instrumentação manual do modelo Play Groovy"
     >
       ```groovy
       ${com.newrelic.api.agent.NewRelic.getBrowserTimingHeader().raw()}
       ...
       ```
     </Collapser>

     <Collapser
       id="manual-play-2-2"
       title="Instrumentação manual do modelo Play 2.2 ou superior Scala"
     >
       Adicione o seguinte a `build.sbt`, substituindo a [versão mais recente do agente](/docs/release-notes/agent-release-notes/java-release-notes) por 8.xx:

       ```scala
       libraryDependencies += "com.newrelic.agent.java" % "newrelic-api" % "8.x.x"
       ```

       Em `main.scala.html`, adicione o seguinte:

       ```java
       @Html(com.newrelic.api.agent.NewRelic.getBrowserTimingHeader())
       ...
       ```
     </Collapser>

     <Collapser
       id="manual-play-2-1"
       title="Instrumentação manual do modelo Play 2.1 Scala"
     >
       Adicione o seguinte a `Build.scala`, substituindo a [versão mais recente do agente](/docs/release-notes/agent-release-notes/java-release-notes) por 8.xx:

       ```scala
       appDependencies += "com.newrelic.agent.java" % "newrelic-api" % "8.x.x"
       ```

       Em `main.scala.html`, adicione o seguinte:

       ```java
       @Html(com.newrelic.api.agent.NewRelic.getBrowserTimingHeader())
       ...
       ```
     </Collapser>

     <Collapser
       id="manual-velocity"
       title="Instrumentação manual do Apache Velocity Tools"
     >
       Se você estiver usando o Velocity Tools, defina uma ferramenta `NewRelic` em `toolbox.xml`:

       ```xml
       <toolbox>
         <tool>
           <key>NewRelic</key>
           <scope>application</scope>
           <class>com.newrelic.api.agent.NewRelic</class>
         </tool>
       </toolbox>
       ```

       Chame a API `NewRelic` no seu modelo de velocidade:

       ```java
       $NewRelic.getBrowserTimingHeader()
       ...
       ```
     </Collapser>

     <Collapser
       id="enable-apache"
       title="Instrumentação manual do Apache Velocity"
     >
       1. Para garantir que todas as visualizações de página do seu browser não sejam agrupadas em uma única transação `/velocity` (e para evitar [problemas de agrupamento métrico](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues)), desative a configuração `enable_auto_transaction_naming` no arquivo `newrelic.yml` :

          ```yml
          enable_auto_transaction_naming: false
          ```

       2. Adicione `newrelic-api.jar` ao classpath do Tomcat, normalmente em `.../tomcat/bin/setenv.sh`:

          ```sh
          CLASSPATH=$CLASSPATH:/opt/newrelic/newrelic-api.jar
          ```

          OU

          Adicione a referência a esse arquivo jar ao final de uma linha `CLASSPATH=...` existente nesse arquivo.

       3. Em cada aplicativo, encontre `WEB-INF/tools.xml` e adicione a seguinte tag:

          ```xml
          <toolbox scope="application"> 
            <tool class="com.newrelic.api.agent.NewRelic" key="NewRelic" /> 
          </toolbox>
          ```

          Se já existir uma tag `<toolbox scope="application">` , coloque `<tool ... />` dentro da tag.

       4. Em cada aplicativo, edite o modelo Velocity usado pelas outras páginas do aplicativo. Adicione esta tag na seção `<head>` antes de qualquer declaração `<link>` e `<script>` e depois de qualquer metatag:

          ```java
          $NewRelic.getBrowserTimingHeader()
          ```

       5. Reinicie o servidor Tomcat:

          * Se você estiver usando `Linux/Unix`, adicione a seguinte linha de comando ao diretório `Users/Tomcat/bin` :

            ```
            ./shutdown.sh
            ./startup.sh
            ```

          * Se você estiver usando `Windows`, vá para o diretório `Users/Tomcat/bin` e adicione a seguinte linha de comando:

            ```
            % shutdown.bat
            % startup.bat
            ```
     </Collapser>
   </CollapserGroup>

5. Verifique o arquivo de log para verificar se o agente está instrumento corretamente. Defina a configuração `log_level` em `newrelic.yml` como `log_level: finer` e verifique as seguintes mensagens:

   <CollapserGroup>
     <Collapser
       id="jsp-compile"
       title="Quando o mecanismo JSP compila um JSP"
     >
       ```
       May 17, 2011 9:33:18 AM NewRelic FINE: Compiling JSP: /jsp/header.jsp
       May 17, 2011 9:33:18 AM NewRelic FINE: Injecting browser timing header into: /jsp/header.jsp

       May 17, 2011 9:33:36 AM NewRelic FINE: Compiling JSP: /jsp/footer.jsp
       May 17, 2011 9:33:36 AM NewRelic FINE: Injecting browser timing footer into: /jsp/footer.jsp
       ```
     </Collapser>

     <Collapser
       id="agent-connects-servers"
       title="Depois que o agente se conecta ao servidor"
     >
       O trecho JavaScript não é inserido na resposta HTML até que o agente se conecte ao servidor.

       ```
       May 17, 2011 9:43:21 AM NewRelic INFO: Real user monitoring is enabled with auto instrumentation
       ```
     </Collapser>

     <Collapser
       id="jsp-invoked"
       title="Quando o New Relic invoca o JSP"
     >
       ```
       May 17, 2011 9:43:23 AM NewRelic FINER: Injecting browser timing header in a JSP.  Content type is text/html
       May 17, 2011 9:43:23 AM NewRelic FINER: Injecting browser timing footer in a JSP.  Content type is text/html
       ```
     </Collapser>

     <Collapser
       id="header-footer-called"
       title="Quando o agente chama a API de cabeçalho e rodapé"
     >
       ```
       May 17, 2011 9:43:23 AM NewRelic FINEST: Got browser timing header in NewRelic API: <script>var    NREUMQ=[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);(function(){var d=document;var e=d.createElement("script");e.type="text/javascript";e.async=true;e.src="https://d7p9czrvs14ne.cloudfront.net/11/eum/rum.js";var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s);})();</script>

       May 17, 2011 9:43:23 AM NewRelic FINEST: Got browser timing footer in NewRelic API: <script type="text/javascript" charset="utf-8">NREUMQ.push(["nrf2","staging-beacon-1.newrelic.com","8512b4d93f",7449,"M1RTYksFDEYDUxdcDgoeZERQSwhGEmQGRhVL",0,413])</script>
       ```
     </Collapser>
   </CollapserGroup>
