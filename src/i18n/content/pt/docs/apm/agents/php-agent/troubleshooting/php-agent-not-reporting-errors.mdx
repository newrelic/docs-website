---
title: Agente PHP não reporta erros
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: If the PHP agent is not reporting errors you may have to disable third party error handler or manually instrument the error using the agent API
freshnessValidatedDate: never
translationType: machine
---

## Problema

Os erros no seu aplicativo não são relatados ou capturados pelo agente PHP conforme esperado.

## Solução

Se você for <DNT>**using a third party error handler**</DNT> (por exemplo: [XDebug](https://xdebug.org/) ou [manipulador de erros do Laravel)](https://laravel.com/docs/5.2/errors):

1. Desative o manipulador de erros de terceiros.
2. Confirme se os erros estão sendo relatados [visualizando a página de erros do APM](/docs/apm/applications-menu/events/view-apm-error-analytics).

Se você é <DNT>**not using a third party error handler**</DNT>, mas ainda não vê o erro esperado (por exemplo: erros 404):

1. Certifique-se de que o PHP esteja lidando com o erro, pois o New Relic não pode relatar erros que não são reconhecidos pelo PHP (como erros 404 para ativos estáticos no servidor web).
2. Instrumente manualmente o erro que você espera ver usando a [chamada de API`newrelic_notice_error()` ](/docs/agents/php-agent/php-agent-api/newrelic_notice_error).
3. Confirme se os erros estão sendo relatados [visualizando a página de erros do APM](/docs/apm/applications-menu/events/view-apm-error-analytics).

## Causa

PHP trata erros com seu próprio manipulador padrão. Muitos manipuladores de terceiros, como o XDebug ou o manipulador de erros do Laravel, geralmente substituem o manipulador padrão do PHP e capturam o erro em vez do PHP.

O agente PHP tem seu próprio manipulador de erros que depende da captura do erro pelo PHP. Como apenas um manipulador pode tratar um erro, o agente não vê os erros que já foram tratados pelo manipulador de terceiros antes que pudessem ser capturados pelo PHP.

Além disso, alguns erros (por exemplo: erros 404) ocorrem frequentemente no nível do servidor web, o que significa que o PHP nunca está envolvido e o erro nunca é capturado pelo agente. Se o PHP for usado para lidar com erros 404, use a [chamada de API`newrelic_notice_error()` ](/docs/agents/php-agent/php-agent-api/newrelic_notice_error)para instrumentar manualmente esses erros.
