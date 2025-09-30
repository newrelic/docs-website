---
title: Gerar log de depuração para resolução de problemas (Java)
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'When troubleshooting your New Relic Java agent, change the newrelic_agent.log level temporarily to FINEST, then collect about 5 minutes of log data.'
freshnessValidatedDate: never
translationType: machine
---

Quando a resolução de problemas do seu agente Java do New Relic, gere o log `finest` para localizar e investigar erros. Quando terminar a resolução de problemas, certifique-se de definir o arquivo de log novamente para uma configuração menos detalhada, como `info`.

## Requisitos [#requirement]

Se você alterar apenas a configuração do arquivo de log no arquivo `newrelic.yml` , não será necessário reiniciar o servidor ou a JVM. Entretanto, se você fizer qualquer outra alteração, <DNT>**must**</DNT> reinicie o servidor ou a JVM.

Certifique-se de manter o recuo da linha original no arquivo `newrelic.yml` . YAML é "sensível ao espaço" e requer recuo adequado.

A configuração `audit_mode` (quando definida como `true` ) também log a comunicação entre o agente Java e o New Relic no arquivo de log. O suporte da New Relic pode ocasionalmente solicitar [logs de modo de auditoria](/docs/agents/manage-apm-agents/configuration/log-audit-all-data-your-new-relic-agent-transmits) para resolução adicional de problemas.

## Gerar arquivo de log [#finer]

Para gerar arquivo de log `finest` detalhado:

1. Edite seu arquivo `newrelic.yml` e altere [`log_level`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_level) para `finest`. Certifique-se de manter essas linhas [recuadas <DNT>**two spaces**</DNT>](#requirements).

   ```
   # The agent uses its own log file to keep its logging
     # separate from that of your application. Specify the log level here.
     # This setting is dynamic, so changes do not require restarting your application.
     # The levels in increasing order of verboseness are:
     # off, severe, warning, info, fine, finer, finest
     # Default is info.
     log_level: finest

     # Log all data sent to and from New Relic in plain text.
     # This setting is dynamic, so changes do not require restarting your application.
     # Default is false.
     audit_mode: false
   ```

2. Exercite seu aplicativo Web por cerca de cinco minutos para gerar dados de registro suficientes.

3. Após o teste, altere [`log_level`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_level) para um nível menos detalhado, como `info` (padrão).

4. Abra seu arquivo de log e examine-o em busca de erros.

## Examinar arquivo de log [#logfile]

<Callout variant="important">
  A configuração log `finest` é um nível de registro altamente detalhado. Para reduzir o consumo de espaço em disco após o teste, retorne `log_level` à configuração original.
</Callout>

Por padrão, os arquivos de log são armazenados em um subdiretório `logs` , dentro do mesmo diretório de `newrelic.jar`. Se necessário, siga os [procedimentos de resolução de problemas caso nenhum arquivo de log apareça](/docs/agents/java-agent/troubleshooting/no-log-file-java).
