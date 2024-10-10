---
title: El agente PHP no informa errores
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

El agente PHP no informa ni captura los errores en su aplicación como se esperaba.

## Solución

Si es <DNT>**using a third party error handler**</DNT> (por ejemplo: [XDebug](https://xdebug.org/) o [el controlador de errores de Laravel)](https://laravel.com/docs/5.2/errors):

1. Deshabilite el controlador de errores de terceros.
2. Confirme que se informan los errores [consultando la página de errores de APM](/docs/apm/applications-menu/events/view-apm-error-analytics).

Si eres <DNT>**not using a third party error handler**</DNT>, pero aún no ves el error esperado (por ejemplo: errores 404):

1. Asegúrese de que PHP esté manejando el error, porque New Relic no puede informar errores que PHP no reconoce (como errores 404 para activos estáticos en el servidor web).
2. Instrumente manualmente el error que espera ver utilizando la [llamada API`newrelic_notice_error()` ](/docs/agents/php-agent/php-agent-api/newrelic_notice_error).
3. Confirme que se informan los errores [consultando la página de errores de APM](/docs/apm/applications-menu/events/view-apm-error-analytics).

## Causa

PHP maneja errores con su propio controlador predeterminado. Muchos controladores de terceros, como XDebug o el controlador de errores de Laravel, a menudo anulan el controlador predeterminado de PHP y capturan el error en lugar de PHP.

El agente PHP tiene su propio controlador de errores que depende de que PHP capture el error. Dado que solo un controlador puede manejar un error, el agente no ve los errores que ya fueron manejados por el controlador externo antes de que PHP pudiera capturarlos.

Además, algunos errores (por ejemplo: errores 404) a menudo ocurren en el nivel del servidor web, lo que significa que PHP nunca está involucrado y el agente nunca captura el error. Si se usa PHP para manejar errores 404, use la [llamada API`newrelic_notice_error()` ](/docs/agents/php-agent/php-agent-api/newrelic_notice_error)para instrumentar manualmente esos errores.
