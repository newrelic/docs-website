---
title: Transacción de instrumentos con el SDK de C
metaDescription: Learn how to instrument transactions in your C application so you can monitor them with New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Instrumento [de transacción](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) usando C SDK para que pueda monitor cualquier aplicación en Linux que use un lenguaje que pueda importar biblioteca C. Después de realizar manualmente la transacción de instrumentos en su código fuente agregando funciones de New Relic, puede ver los datos en la [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)en la UI de New Relic.

## Instrumento una transacción [#c-agent-txn]

Para instrumentar una transacción para que pueda monitor en la UI de New Relic, incluya las funciones de New Relic que inician y detienen la instrumentación alrededor de la transacción. La función que utilices depende de si quieres instrumento a [web o transacción no web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#types).

1. Agregue el siguiente código inmediatamente <DNT>**before**</DNT> la transacción que desea monitor:

   Para transacciones web:

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

   Para transacciones sin web:

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_non_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

2. Agrega el siguiente código inmediatamente <DNT>**after**</DNT> a la web o transacción no web que deseas monitor:

   ```c
   newrelic_end_transaction(&txn);
   ```

## Segmentos de instrumentos y errores [#segments-errors]

Los segmentos son las funciones y llamadas que componen una transacción. Después de su transacción de instrumento, usted puede:

* [Instrumento segmentos](/docs/instrument-segments-c-agent) de una transacción si desea obtener más datos sobre las funciones llamadas durante esa transacción.
* [errores de instrumento](/docs/instrument-errors-c-agent) para que pueda utilizar la UI de New Relic para monitor los errores que ocurren durante su transacción.
