---
title: Nenhum arquivo de log (Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'How to ensure your New Relic Java agent has been configured to generate log files, by checking the log file directory, config files, and boot logs.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Seu agente Java New Relic não está gerando arquivo de log.

## Solução

Certifique-se de que seu agente Java New Relic esteja configurado para gerar arquivos `newrelic_agent.log` verificando o seguinte:

<CollapserGroup>
  <Collapser
    id="no-log-file"
    title="Diretório do arquivo de log"
  >
    O agente Java da New Relic armazena o arquivo de log no diretório `logs` . O agente Java cria esse diretório no mesmo local usado para `newrelic.jar` na opção `-javaagent` . Se você não conseguir localizar `newrelic_agent.log`, certifique-se de que o processo JVM tenha permissões para gravar no diretório `logs` .

    O gerenciamento de permissões varia muito de acordo com o ambiente, portanto, trabalhe com o administrador do sistema para verificar se isso não é um problema. Se as permissões não forem o problema, verifique se você não personalizou o local do diretório `logs` .

    <Callout variant="tip">
      Você pode especificar um diretório e um nome diferentes com as configurações `log_file_path` e `log_file_name` .
    </Callout>
  </Collapser>

  <Collapser
    id="config"
    title="Arquivo de configuração"
  >
    Certifique-se de que o formato YAML em `newrelic.yml` seja válido usando um [validador YAML](http://yamllint.com/). Esta ferramenta verifica se seu YAML é válido. Também fornece uma versão interpretada sem comentários.

    Se o seu YAML não for válido, use um editor que mantenha espaços nas linhas, como o Sublime Text. Isso ajudará você a fazer alterações em `newrelic.yml` com o número correto de espaços.
  </Collapser>

  <Collapser
    id="bootlog"
    title="Logde inicialização"
  >
    Você pode iniciar seu servidor de aplicativos para que ele seja impresso no console. Aqui estão alguns exemplos de onde isso é armazenado:

    * <DNT>**JBoss**</DNT>: `log/boot.log`

    * <DNT>**Glassfish**</DNT>: `domain-dir/logs/server.log`

    * <DNT>**Tomcat**</DNT>: `catalina.out` (se especificado em `catalina.sh`) ou `catalina.bat`

    * <DNT>**WebLogic**</DNT>:[`server_name.log`](http://docs.oracle.com/cd/E17904_01/web.1111/e13739/logging_services.htm#i1179712)

    * <DNT>**WebObjects**</DNT>: `/var/log/webobjects.log`

      Ao inicializar sua JVM, verifique se o log gerado mostra que o arquivo `newrelic.jar` foi aberto e que o agente Java interpretou o arquivo de configuração `newrelic.yml` . Falha ao encontrar qualquer arquivo ou abri-lo corretamente aparecerá no log.

      O carregamento bem-sucedido do agente será mais ou menos assim:

      ```
      Aug 29, 2017 15:02:49 -0700 NewRelic 1 INFO: Agent is using Logback
      Aug 29, 2017 15:02:49 -0700 NewRelic 1 INFO: Loading configuration file
      "/path/on/your/host/newrelic/.newrelic.yml"
      ```
  </Collapser>
</CollapserGroup>
