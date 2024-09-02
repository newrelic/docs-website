---
title: Nenhum dado aparece (Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: Troubleshooting procedures if you do not see data for your app in the New Relic UI after installing the Java agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de gerar tráfego para seu aplicativo e aguardar alguns minutos para que os dados apareçam na interface do New Relic, seu aplicativo Java não está reportando dados.

## Solução

Depois de enviar uma solicitação ao seu aplicativo web, os dados deverão aparecer na interface do APM dentro de dois a três minutos. Se nenhum dado aparecer após alguns minutos:

1. Reinicie seu servidor web.

2. Use [o New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics) para tentar identificar automaticamente o problema.

3. Verifique se o arquivo `newrelic.jar` foi instalado corretamente e se o argumento `-javaagent` foi passado corretamente para a JVM:

   1. Inicie seu servidor web se ele ainda não estiver em execução.

   2. No seu terminal ou console, execute o comando apropriado:

      Linux ou macOS:

      ```
      ps -ef | grep java
      ```

      Windows:

      ```
      wmic process where "name='java.exe'" get ProcessID, Commandline /format:list
      ```

   3. Encontre o processo do serviço que você está tentando monitor e veja se o argumento `-javaagent` está presente:

      * Se você vir um argumento `-javaagent` : o problema está na inicialização do agente ou o agente não consegue se comunicar através do seu firewall com [o intervalo de IP do nosso coletor](/docs/using-new-relic/cross-product-functions/install-configure/networks).
      * Se você não vir um argumento `-javaagent` : o argumento não foi passado para sua JVM. Verifique seu script de inicialização ou outros recursos para garantir que nada impeça sua aprovação. Para obter mais informações sobre como transmitir o argumento para seu ambiente, consulte [Incluir o agente Java com um argumento JVM](/docs/agents/java-agent/installation/include-java-agent-jvm-argument).

   4. Se nenhuma das soluções funcionar, continue lendo.

4. Verifique se os arquivos `newrelic.jar` e `newrelic.yml` estão no mesmo [diretório](/docs/agents/manage-apm-agents/troubleshooting/find-agent-root-directory#java-agent). Se você especificou um local não padrão para o arquivo de configuração usando a propriedade de sistema `newrelic.config.file` , certifique-se de que o arquivo de configuração exista nesse local e esteja formatado corretamente.

5. [Gere o log de nível `finest` ](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting)e verifique se há erros no log. Caso nenhum arquivo de log possa ser encontrado, consulte [Nenhum arquivo de log (Java)](/docs/agents/java-agent/troubleshooting/no-log-file-java).

6. Verifique o log do servidor do aplicativo em busca de erros relacionados ao agente Java New Relic. Você pode ver as páginas de resolução de problemas [Erro ao iniciar o agente Java](/docs/agents/java-agent/troubleshooting/error-bootstrapping-new-relic-java-agent) e [Erros ao iniciar o servidor de aplicativos Java](/docs/agents/java-agent/troubleshooting/errors-starting-java-app-server) para obter exemplos de erros observáveis no log do servidor do aplicativo que impedem o relatório dos dados do agente Java.

7. Verifique se seu aplicativo está reportando o nome esperado: nos arquivos do New Relic Logs, pesquise `"reporting to"` e selecione o link na mensagem. Por exemplo:

   ```
   {"message":"Reporting to: https://rpm.newrelic.com/accounts/000/applications/000000"}
   ```

   Se você estiver reportando [vários nomes de aplicativos](/docs/apm/new-relic-apm/installation-configuration/using-multiple-names-app), procure várias linhas com esta mensagem.

8. Se o link da mensagem não direcionar para o aplicativo esperado, certifique-se de que as configurações de nome do aplicativo sejam as mesmas em `newrelic.yml` e na configuração `web.xml` `display-name` .
