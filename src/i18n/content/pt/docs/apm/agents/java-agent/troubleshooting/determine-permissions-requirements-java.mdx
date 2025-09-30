---
title: Determinar requisitos de permissões (Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: System permissions you need to install and use the New Relic PHP agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você precisa determinar quais permissões de sistema são necessárias para instalar e usar o agente Java do New Relic.

## Solução

O proprietário do processo deve atender aos seguintes requisitos de permissão para Java:

1. O proprietário do processo Java para o qual a opção `-javaagent` será transmitida deve ter permissões de leitura para o JAR do agente Java. Isso ocorre porque <DNT>**Java**</DNT> é o que está sendo <DNT>**executed**</DNT> e Java precisa <DNT>**read**</DNT> do `newrelic.jar`.

2. O proprietário do processo requer permissões de gravação/execução para o diretório no qual o diretório de log será criado e permissões de execução para todos os diretórios pai do diretório de log. Este diretório pai pode ser qualquer um dos seguintes:

   * O diretório no qual o `newrelic.jar` reside. Este é o local padrão no qual o agente Java do New Relic criará seu diretório de log.
   * O local especificado pela propriedade de sistema [`log_file_path`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_file_path) também foi transmitido para a JVM
   * `StdOut` se você especificou este local com a variável de ambiente [`NEW_RELIC_LOG`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ev-NEW_RELIC_LOG)

   Se o diretório New Relic Logs for <DNT>**already exists**</DNT>, o proprietário do processo deverá ter acesso de gravação/execução nesse diretório para que o processo Java possa passar para o diretório e criar o arquivo de log Java do agente.

3. O proprietário do processo deve ter acesso de gravação/execução ao diretório temporário do processo Java. Este pode ser o diretório padrão para arquivos Java temporários (especificados em todo o sistema) ou pode ser específico para o processo, especialmente se você estiver executando um servidor de aplicativos, pois eles geralmente especificam e configuram um local de diretório temporário discreto.
