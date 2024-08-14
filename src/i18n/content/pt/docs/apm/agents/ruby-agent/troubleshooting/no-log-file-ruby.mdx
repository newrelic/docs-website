---
title: Nenhum arquivo de log (Ruby)
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: Ensure your New Relic Ruby agent has been configured to generate log files.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Não há arquivo de log do New Relic em `log/newrelic_agent.log`.

## Solução

Se não houver arquivo `newrelic_agent.log` , tente as seguintes etapas para diagnosticar:

1. Verifique se o agente está realmente sendo exigido pelo seu aplicativo:

   * Certifique-se de que a linha da gema `newrelic_rpm` em seu `Gemfile` não esteja marcada com `require: false`, o que impede que o Bundler exija a gema. Você pode remover a instrução `require: false` ou controlar manualmente a gema `newrelic_rpm` chamando `require 'newrelic_rpm'` em outro lugar do código durante a inicialização do aplicativo.
   * Se a gem `newrelic_rpm` estiver em um grupo dentro do seu `Gemfile`, certifique-se de que esse grupo esteja sendo carregado no ambiente no qual você está implantado.
   * Certifique-se de que a linha `newrelic_rpm` em seu `Gemfile` não esteja envolvida em uma condicional avaliada como falsa no ambiente no qual você está implantado.

2. Certifique-se de que o diretório `log` no diretório raiz do seu aplicativo exista e possa ser gravado pelo usuário no qual seu aplicativo está sendo executado.

3. Certifique-se de que o diretório de trabalho atual a partir do qual você inicia os processos do servidor de aplicativos seja o mesmo que o diretório raiz do seu aplicativo (ou seja, o diretório de trabalho atual deve conter um diretório `log` ).

Para fins de depuração, pode ser útil forçar a ativação do agente e enviar sua saída de log para `STDOUT`. Para fazer isso, defina as variáveis de ambiente `NEW_RELIC_LOG=stdout` e `NEW_RELIC_AGENT_ENABLED=1` ao iniciar o servidor do aplicativo.
