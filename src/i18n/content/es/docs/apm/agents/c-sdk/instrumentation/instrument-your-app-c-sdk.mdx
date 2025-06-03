---
title: Instrumente su aplicación con el SDK de C
tags:
  - Agents
  - C SDK
  - Instrumentation
metaDescription: 'How to instrument transactions, their segments, and errors in your C application so you can monitor them with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Para monitor cualquier aplicación en Linux usando un lenguaje que pueda importar la biblioteca C, debe:

1. Cree una configuración usando `newrelic_new_app_config()`, conéctese al daemon usando [`newrelic_init()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a03f07e64a51b5f0cd51caa4f28c8b6c1) y conecte su aplicación usando [`newrelic_create_app()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a61dd90439ae3cc5060021f6ab4701132). Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code).
2. Transacción manual de instrumentos utilizando el SDK de C, como se describe en este documento.

New Relic define una [web o transacción no web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) como una unidad lógica de trabajo en una aplicación de software. Después de realizar manualmente la transacción de instrumentos en su código fuente agregando funciones de New Relic, puede ver los datos en la [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)en New Relic. También puede instrumentar segmentos de una transacción y errores.

## Instrumento una transacción [#instrument-c-txn]

Para instrumentar una transacción y poder monitor , incluya las funciones de New Relic que inician y detienen la instrumentación alrededor de la transacción. La función que utilices depende de si quieres instrumento a [web o transacción no web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#types).

En el siguiente ejemplo, la aplicación se crea después de una llamada a `newrelic_create_app()`. Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , así como la [documentación de C SDK `libnewrelic.h` en GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

1. Agregue el siguiente código inmediatamente <DNT>**before**</DNT> a la transacción que desea monitor, proporcionando el parámetro requerido.

   Para transacciones web:

   ```
   // Example code:
   <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#add4646ef16f4f0c9b75934cf96909655">newrelic_txn_t</a> *txn;
   /* ... */
   txn = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#adbf7c1fa57482f6e0a7f291e0b5ec80f">newrelic_start_web_transaction</a>(app, "NAME_YOUR_TRANSACTION");
   ```

   Para transacciones sin web:

   ```
   // Example code:
   newrelic_txn_t *txn;
   /* ... */
   txn = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a88648cc287f8d7e371139dc3809b7afb">newrelic_start_non_web_transaction</a>(app, "NAME_YOUR_TRANSACTION");
   ```

2. Agrega `newrelic_end_transaction()` inmediatamente <DNT>**after**</DNT> la web o transacción no web que deseas monitor, proporcionando un puntero a la transacción, `&txn`, como parámetro.

## Segmentos de instrumentos [#segments]

Una vez que instrumente una transacción usando el SDK de C, puede implementar [segmentos](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#segments) en ella. Al instrumentar segmentos, puede monitor las funciones y llamadas individuales dentro de una transacción.

<DNT>
  **Segments example**
</DNT>

Tiene una transacción asociada con un proceso de pago, que procesa tanto la información de envío como la información de la tarjeta de crédito. Puede instrumentar su aplicación para dividir esa transacción en dos segmentos: un segmento para envío y otro segmento para pago.

Puede utilizar segmentos de instrumentos para monitor los siguientes tipos de llamadas:

* [Servicios externos](#external-segments) que utilizan segmentos externos
* [Segmentos personalizados](#custom-segments) para código arbitrario
* [Almacenes de datos](#datastore-segments) que utilizan segmentos de almacenamiento de datos
* [consulta lenta traza](#slow-query-datastore) (solo base de datos SQL)

Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , así como la [documentación de C SDK `libnewrelic.h` en GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

<CollapserGroup>
  <Collapser
    id="external-segments"
    title="Llamadas de instrumentos a servicios externos."
  >
    Para monitor llamadas a servicios externos, instrumento los segmentos externos que se encuentran dentro de una transacción instrumentada. Los segmentos externos aparecen en la [tabla <DNT>**Breakdown**</DNT> de la página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page-find-specific-performance-problems)y en la [página<DNT>**External services**</DNT> ](/docs/apm/applications-menu/monitoring/external-services-page).

    Para instrumentar un segmento externo, ajuste las funciones de New Relic que inician y detienen la instrumentación alrededor de la función que desea monitor:

    1. [instrumento una transacción](#instrument-c-txn).

    2. Cree un [`newrelic_external_segment_params_t`](https://newrelic.github.io/c-sdk/structnewrelic__external__segment__params__t.html) que describa el segmento externo, proporcionando el parámetro requerido.

    3. Agregue `newrelic_start_external_segment()` inmediatamente antes de la función que desea monitor, proporcionando el parámetro requerido.

    4. Agregue `newrelic_end_segment()` inmediatamente después de la función que desea monitor, proporcionando el parámetro requerido.

       Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , así como la [documentación de C SDK `libnewrelic.h` en GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).
  </Collapser>

  <Collapser
    id="custom-segments"
    title="Llamadas de instrumentos a código arbitrario (segmentos personalizados)"
  >
    Para monitor llamadas a código arbitrario, instrumento segmentos personalizados que están dentro de una transacción instrumentada. Los segmentos personalizados aparecen en la tabla <DNT>**Breakdown**</DNT> de la [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page-find-specific-performance-problems).

    Para instrumentar un segmento personalizado, ajuste las funciones de New Relic que inician y detienen la instrumentación alrededor de la función que desea monitor:

    1. [instrumento una transacción](#instrument-c-txn).

    2. Agregue `newrelic_start_segment()` inmediatamente antes de la función que desea monitor, proporcionando el parámetro requerido.

    3. Agregue `newrelic_end_segment()` inmediatamente después de la función que desea monitor, proporcionando el parámetro requerido.

       Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , así como la [documentación de C SDK `libnewrelic.h` en GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).
  </Collapser>

  <Collapser
    id="datastore-segments"
    title="Llamadas de instrumentos a almacenes de datos"
  >
    Para monitor llamadas a almacenes de datos, instrumente los segmentos de almacenamiento de datos dentro de una transacción instrumentada. Los segmentos de almacenamiento de datos aparecen en la tabla <DNT>**Breakdown**</DNT> y en la pestaña <DNT>**Databases**</DNT> de la [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)en New Relic. También puede ver los segmentos de almacenamiento de datos como un [atributo`databaseDuration` ](/attribute-dictionary/?event=Transaction&attribute=databaseDuration)del [evento APM `Transaction` ](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes).

    Para instrumentar un segmento de almacenamiento de datos, ajuste las funciones de New Relic que inician y detienen la instrumentación alrededor de la función que desea monitor:

    1. [instrumento una transacción](#instrument-c-txn).

    2. Cree un [`newrelic_datastore_segment_params_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__params__t.html) que describa el segmento de almacenamiento de datos.

    3. Agregue `newrelic_start_datastore_segment()` inmediatamente antes de la función que desea monitor, proporcionando el parámetro requerido.

    4. Agregue `newrelic_end_segment()` inmediatamente después de la función que desea monitor, proporcionando el parámetro requerido.

       Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , así como la [documentación de C SDK `libnewrelic.h` en GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

       <Callout variant="tip">
         Para configurar cómo se informa el nombre de la base de datos y la instancia de la base de datos, utilice [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html).
       </Callout>
  </Collapser>

  <Collapser
    id="slow-query-datastore"
    title="Informe consulta lenta traza para segmentos de almacenamiento de datos (solo SQL)"
  >
    <Callout variant="important">
      Puede informar consulta lenta traza solo para base de datos SQL.
    </Callout>

    Para informar datos de consulta lenta traza para segmentos de almacenamiento de datos que tardan más que el tiempo que especifica, habilite estas configuraciones en su [newrelic_app_config_t](https://newrelic.github.io/c-sdk/structnewrelic__app__config__t.html):

    1. Habilite el seguimiento de consulta lenta estableciendo [`transaction_tracer.datastore_reporting.enabled`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html) en `true`.

    2. Para establecer el umbral, agregue un período de tiempo en microsegundos a [`transaction_tracer.datastore_reporting.threshold_us`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html).

       Luego, si una llamada de almacenamiento de datos tarda más que el umbral, el SDK de C la informa como una consulta lenta. Para ver los detalles de consulta lenta traza, utilice las páginas [<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-page) y [<DNT>**Slow queries**</DNT>](/docs/apm/applications-menu/monitoring/view-slow-query-details) en New Relic.

       Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , así como la [documentación de C SDK `libnewrelic.h` en GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).
  </Collapser>
</CollapserGroup>

## Errores de instrumentos [#errors]

Para utilizar el SDK de C para monitor errores en transacciones, debe instrumentar manualmente su código fuente agregándole la función [`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475) .

Los errores de transacción y la traza de error aparecen en la [página<DNT>**Error analytics**</DNT> ](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)en New Relic. El C SDK informa el número total de errores y hasta 100 trazas de error por minuto. También puedes ver, consultar y visualizar errores de transacción como [evento APM `TransactionError` ](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes).

<Callout variant="tip">
  Para incluir llamadas a funciones en la traza de error, use el indicador de vinculación `-rdynamic` de GNU para [vincular sus aplicaciones al compilar](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#compile). El indicador del enlazador `-rdynamic` le proporciona una traza de error más significativa.
</Callout>

A errores de instrumento en transacción:

1. [Iniciar una transacción](#start-transaction).
2. Registre un error con [`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475), proporcionando el parámetro requerido.
3. [Finalice la transacción](#end-transaction), suministrando el parámetro requerido.

Para obtener más información, consulte los [procedimientos de instalación de C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , así como la [documentación de C SDK `libnewrelic.h` en GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

## Evite problemas de agrupación métrica [#mgi]

Cuando una cuenta o aplicación envía muchas métricas individuales que podrían gestionarse mejor en grupos, New Relic utiliza el término <DNT>**metric grouping issue**</DNT> o <DNT>**MGI**</DNT> para describir esta situación. Si su aplicación envía cantidades innecesariamente grandes de datos a New Relic, esto reduce la efectividad de los gráficos, tablas e informes.

Los problemas de agrupación métrica ocurren más comúnmente con transacciones web, especialmente si el nombre se basa en URL. Para ayudar a prevenir esta situación, consulte [problemas de agrupación métrica](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues).
