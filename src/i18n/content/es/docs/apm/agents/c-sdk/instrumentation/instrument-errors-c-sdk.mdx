---
title: Errores de instrumento con el C SDK
metaDescription: Learn how to instrument errors in your C application so you can monitor them with New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

New Relic define una [web o transacción no web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) como una unidad lógica de trabajo en una aplicación de software. Una vez que [instrumenta una transacción](/docs/instrument-transactions-c-agent), también puede instrumentar errores en la transacción para poder monitor en la UI de New Relic. Para utilizar el SDK de C para monitor errores, debe modificar manualmente su código fuente agregando la función New Relic `newrelic_notice_error()`.

<Callout variant="tip">
  Para incluir llamadas a funciones en la traza de error, use el indicador de vinculación `-rdynamic` de GNU para [vincular sus aplicaciones al compilar](/docs/install-c-agent-compile-link-your-code#compile). El indicador del enlazador `-rdynamic` le proporciona una traza de error más significativa.
</Callout>

## Errores de instrumento en la transacción [#errors]

A errores de instrumento en transacción:

1. [Iniciar una transacción](/docs/instrument-transactions-c-agent#start-transaction).
2. Registre un error con `newrelic_notice_error()`, proporcionando el parámetro requerido.
3. [Finalice la transacción](/docs/instrument-transactions-c-agent#end-transaction).

## Ver errores

Los errores de transacción y [la traza de error](#error-trace-examples) aparecen en la [página<DNT>**Error analytics**</DNT> ](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)en la UI de New Relic. El SDK de C informa el número total de errores y hasta 100 trazas de errores por minuto en la página <DNT>**Error analytics**</DNT> .

También puedes ver, consultar y visualizar errores de transacción como `TransactionError` evento.

## Examinar el registro para obtener detalles del error [#logs-context]

Puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/c-sdk-configure-logs-context/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación.

1. Desde la página

   <DNT>
     **Errors**
   </DNT>

   , haga clic en una traza para ir a la [página](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)

   <DNT>
     [**Error details**](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)
   </DNT>

   [](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/).

2. En la página de detalles del error, haga clic en

   <DNT>
     **See logs**
   </DNT>

   .

3. Para ver detalles relacionados con un mensaje de registro individual, haga clic directamente en el mensaje.

También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes. No es necesario cambiar a otra página de UI.
