---
title: Guía para utilizar la API del SDK de C
tags:
  - Agents
  - C SDK
  - Instrumentation
metaDescription: Quick reference of New Relic C SDK API calls you can use to manually instrument your application's code.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

El C SDK de New Relic monitorea su aplicación y microservicios para ayudarlo a identificar y resolver problemas de rendimiento. La aplicación C se ejecuta desde un archivo binario nativo compilado. Para monitor [la transacción](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm), debe instrumentar manualmente su código agregando métodos New Relic.

Esta guía le ayudará a decidir qué método utilizar. El código del método, el parámetro requerido y los ejemplos se encuentran en [la documentación C SDK de New Relic en GitHub](https://newrelic.github.io/c-sdk/index.html).

## Asegúrese de que su personalización sea segura para subprocesos [#thread-safety]

El SDK de C admite la instrumentación de aplicaciones multiproceso, pero debe inicializarse antes de instrumentar varios subprocesos. Al llamar a cualquiera de las siguientes funciones, asegúrese de que sean <DNT>**called on the main thread**</DNT> antes de llamar a cualquier otra función del SDK de C:

* [`newrelic_configure_log`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a8922f48a2b92714fb2fc05ad7bd5c003)
* [`newrelic_init`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a03f07e64a51b5f0cd51caa4f28c8b6c1)

## Monitor transacciones [#monitor-tx]

Antes de instrumentar manualmente su código para monitor la transacción:

1. Verifique la [compatibilidad y los requisitos de C SDK](/docs/c-agent-compatibility-requirements) para su aplicación.
2. Asegúrese de estar utilizando la última versión de la biblioteca C SDK y [actualícela](/docs/update-your-c-agent-library) según sea necesario.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Utilice este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Comience a cronometrar una transacción web
      </td>

      <td>
        [`newrelic_start_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#adbf7c1fa57482f6e0a7f291e0b5ec80f)
      </td>
    </tr>

    <tr>
      <td>
        Comience a cronometrar una transacción no web
      </td>

      <td>
        [`newrelic_start_non_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a88648cc287f8d7e371139dc3809b7afb)
      </td>
    </tr>

    <tr>
      <td>
        Dejar de cronometrar una transacción
      </td>

      <td>
        `newrelic_end_transaction()`
      </td>
    </tr>

    <tr>
      <td>
        Evitar que una transacción se informe a New Relic
      </td>

      <td>
        [`newrelic_ignore_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a7b41f8690c3b2b7e024a16fa4bb59320)
      </td>
    </tr>
  </tbody>
</table>

## Métodos específicos de tiempo que utilizan segmentos [#segments]

Si una transacción ya es visible en New Relic, pero no tiene suficientes datos sobre un método en particular que se llamó durante esa transacción, puede [utilizar segmentos](/docs/instrument-your-app-c-sdk#segments). Por ejemplo, si desea cronometrar un método que tiene una lógica compleja, puede crear un segmento para cada uno de los métodos de la transacción.

Para instrumentar un método dentro de una transacción existente, cree segmentos para cualquiera de los siguientes:

* Servicios externos
* Funciones u otros bloques de código arbitrarios (usando segmentos personalizados)
* Almacenes de datos
* Consulta lenta traza (solo almacenes de datos SQL)

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Utilice este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Comience a cronometrar un segmento
      </td>

      <td>
        ```c
        newrelic_start_datastore_segment()
        newrelic_start_external_segment()
        newrelic_start_segment()
        ```
      </td>
    </tr>

    <tr>
      <td>
        Dejar de cronometrar un segmento
      </td>

      <td>
        `newrelic_end_segment()`
      </td>
    </tr>

    <tr id="async">
      <td>
        Segmentos principales manualmente
      </td>

      <td>
        `newrelic_set_segment_parent()` y `newrelic_set_segment_parent_root()`

        Esto es útil, por ejemplo, con un proceso asincrónico cuando desea visualizar un segmento como hijo de la llamada de nivel superior de la transacción. Para obtener más información, consulte la [documentación de crianza de segmentos manual en GitHub](https://github.com/newrelic/c-sdk/blob/master/GUIDE.md#manual-segment-parenting).
      </td>
    </tr>
  </tbody>
</table>

Los segmentos se registran en la transacción activa. Al agregar un segmento a una transacción activa, necesita acceso al `newrelic_txn_t*` o puntero de transacción, devuelto por `newrelic_start_web_transaction()` o `newrelic_start_non_web_transaction()`.

## Mejorar los metadatos de una transacción [#metadata]

Puedes gestionar los metadatos que New Relic reporta para transacciones. Esto es útil cuando deseas un nivel diferente de detalle para tu transacción. Por ejemplo:

* Si tiene un [problema de agrupación métrica](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues#video), puede cambiar los nombres predeterminados de su transacción para hacerlos más identificables.

* Si desea crear

  <InlinePopover type="dashboards"/>

  para su transacción, puede agregar un atributo personalizado.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Utilice este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Agregue metadatos (como el nombre de la cuenta de sus clientes o el nivel de suscripción) a su transacción
      </td>

      <td>
        Agregue un atributo personalizado a su transacción según su tipo:

        * [`newrelic_add_attribute_int()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a1f0fe987526c023a2101111b7ee557b3)
        * [`newrelic_add_attribute_string()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a9eac445521cecdd046520d2178f232a0)
        * [`newrelic_add_attribute_long()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2a082a144cff6c805c6373d9d4f1f551)
        * [`newrelic_add_attribute_double()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#abfe6f64a8eec7d60d8588f8969781d34)
      </td>
    </tr>
  </tbody>
</table>

## Llamadas de instrumentos a servicios externos. [#externals]

Utilice estos métodos para recopilar datos sobre las conexiones de su aplicación a otras aplicaciones o base de datos:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Utilice este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Vea el camino que sigue una solicitud a medida que viaja a través de un sistema distribuido
      </td>

      <td>
        Siga los procedimientos para habilitar el [rastreo distribuido](/docs/agents/c-sdk/instrumentation/enable-distributed-tracing-your-c-applications) de instrumentos.
      </td>
    </tr>

    <tr>
      <td>
        Cronometrar una llamada a un recurso externo (como un servicio externo, un servidor de base de datos o una cola de mensajes)
      </td>

      <td>
        Siga los procedimientos para [llamadas de instrumentos a segmentos externos](/docs/instrument-your-app-c-sdk#external-segments).
      </td>
    </tr>
  </tbody>
</table>

## Recopilar o log errores [#errors]

El C SDK detecta errores automáticamente. Si desea cambiar la forma en que informa errores a New Relic, cambie la configuración del selector de errores.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Utilice este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Establece niveles de registro para tu aplicación
      </td>

      <td>
        Utilice `newrelic_configure_log()` para configurar el registro del SDK de C y los indicadores de línea de comando para configurar el registro daemon de C. Para obtener más información, consulte la [documentación de registro del SDK de C.](/docs/generate-logs-troubleshooting-c-sdk)
      </td>
    </tr>

    <tr>
      <td>
        Informar un error
      </td>

      <td>
        [`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475)
      </td>
    </tr>
  </tbody>
</table>

## Envía datos personalizados desde tu aplicación [#custom-data]

Para registrar [datos personalizados](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data) con C SDK, puede utilizar cualquiera de los siguientes métodos:

* <DNT>
    **Custom events:**
  </DNT>

  En New Relic, los datos [de eventos](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event) son un tipo de datos fundamental. Los datos de eventos representan un registro de un único evento en un momento particular en el tiempo. Esto es útil para ver o consultar detalles específicos.

* <DNT>
    **Custom event attributes:**
  </DNT>

  Para incluir metadatos adicionales sobre el evento, puede agregar pares de valores principales ([atributo personalizado](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event)) a su evento personalizado.

* <DNT>
    **Custom metrics:**
  </DNT>

  [Los datos de intervalo de tiempo de métrica](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#metric) son la medida estadística de datos que New Relic agrega para que pueda verlos en la UI y trazarlos. Normalmente los datos métricos tienen un período de retención más largo que los datos de eventos.

<CollapserGroup>
  <Collapser
    id="custom-events"
    title="Evento personalizado"
  >
    El SDK de C proporciona una API de eventos personalizados que le permite enviar [eventos personalizados](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#custom-event) a New Relic. Para enviar un evento, inicie una transacción y utilice las funciones `newrelic_create_custom_event` y `newrelic_record_custom_event` . Por ejemplo:

    ```
    // txn is a newrelic_txn_t*, created via newrelic_start_web_transaction
    newrelic_custom_event_t* custom_event=0;
    custom_event = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a83b5b78623bcefda6d4e1e6d207f7b7a">newrelic_create_custom_event</a>("aTypeForYourEvent");
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a4af935da4651e398e3773c148e8db814">newrelic_record_custom_event</a>(txn, &custom_event);
    ```

    Asegúrese de revisar los [requisitos y límites de datos personalizados](/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits) para obtener orientación sobre qué valores están y no están permitidos dentro de su evento personalizado. Para más información, consulte [evento personalizado en APM](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents).

    <Callout variant="tip">
      Si creó un evento personalizado pero necesita eliminarlo antes de que finalice la transacción, use `newrelic_discard_custom_event(&custom_event);`.
    </Callout>
  </Collapser>

  <Collapser
    id="custom-attributes"
    title="Evento personalizado atributo"
  >
    También puede agregar atributos `int`, `long`, `double` y `char*` (cadena) a su evento personalizado utilizando la familia de funciones `newrelic_custom_event_add_*` . Por ejemplo:

    ```
    // Example custom attributes:
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#add4646ef16f4f0c9b75934cf96909655">newrelic_custom_event_t</a>* custom_event=0;
    custom_event = newrelic_create_custom_event("aTypeForYourEvent");

    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a1f0fe987526c023a2101111b7ee557b3">newrelic_custom_event_add_attribute_int</a>(custom_event, "keya", 42);
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2a082a144cff6c805c6373d9d4f1f551">newrelic_custom_event_add_attribute_long</a>(custom_event, "keyb", 84);
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#abfe6f64a8eec7d60d8588f8969781d34">newrelic_custom_event_add_attribute_double</a>(custom_event, "keyc", 42.42);
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a9eac445521cecdd046520d2178f232a0">newrelic_custom_event_add_attribute_string</a>(custom_event, "keyd", "A string");

    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a4af935da4651e398e3773c148e8db814">newrelic_record_custom_event</a>(txn, &custom_event);
    ```

    Para obtener más información, consulte la documentación sobre [atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes).
  </Collapser>

  <Collapser
    id="custom-metrics"
    title="Métrica personalizada"
  >
    El SDK de C proporciona la función [`newrelic_record_custom_metric()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#aee71182588ace508cc816044d2024ff3) . Esto le permite registrar datos de rendimiento basados en el tiempo mediante una llamada API, como por ejemplo:

    * Datos de tiempo de transacción

    * Datos de recursos informáticos

    * Datos de suscripción o compras

      Para crear una métrica personalizada, proporcione un nombre u otro identificador y una cantidad de tiempo en milisegundos a la función, junto con la transacción activa.

      <Callout variant="important">
        Siempre preceda los nombres métricos personalizados con `Custom/`.
      </Callout>

      Por ejemplo:

      ```c
      // txn is a newrelic_txn_t*, created via newrelic_start_web_transaction

      // Record a metric value of 100ms in the transaction txn
      newrelic_record_custom_metric(txn, "Custom/MyMetric/My_label", 100);
      ```

      Para más información, consulte [Cobro métrico personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics).
  </Collapser>
</CollapserGroup>

A continuación se muestran algunas formas de utilizar sus datos personalizados. Para obtener detalles del código y ejemplos de estas opciones, consulte la [documentación global de New Relic en GitHub](https://newrelic.github.io/c-sdk/globals.html).

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Si quieres...
      </th>

      <th>
        Utilice este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cree un evento personalizado para completar con una timestamp y un atributo.
      </td>

      <td>
        [`newrelic_create_custom_event()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a83b5b78623bcefda6d4e1e6d207f7b7a)
      </td>
    </tr>

    <tr>
      <td>
        Timestamp y agregue el evento personalizado a la transacción actual para que pueda consultarla o visualizarla.
      </td>

      <td>
        [`newrelic_record_custom_event()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a4af935da4651e398e3773c148e8db814)
      </td>
    </tr>

    <tr>
      <td>
        Mejore su evento personalizado con metadatos adicionales.
      </td>

      <td>
        Agregue un atributo de evento personalizado a su evento personalizado según el tipo:

        * [`newrelic_custom_event_add_attribute_double()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#af84bdcea08fbefb2023b47907a304188)
        * [`newrelic_custom_event_add_attribute_int()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#ade406683e960b53a1b4a2d832872ab1a)
        * [`newrelic_custom_event_add_attribute_long()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a0ee8f438644f7699c8427fe231d7ffc1)
        * [`newrelic_custom_event_add_attribute_string()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#aa59111072aaa6d539adf6745c5dbfaa4)
      </td>
    </tr>

    <tr>
      <td>
        Descarta un evento personalizado después de su creación, pero antes de que finalice su transacción, para evitar informarlo a New Relic.
      </td>

      <td>
        [`newrelic_discard_custom_event`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a15aa71f0d4fac8fec8f4105c2c1d8dde)

        Esto es necesario para liberar la memoria asignada para su evento personalizado no deseado a fin de evitar fugas en su programa.
      </td>
    </tr>

    <tr>
      <td>
        Informe una duración de rendimiento personalizada que pueda buscar o trazar.
      </td>

      <td>
        [`newrelic_record_custom_metric()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#aee71182588ace508cc816044d2024ff3)
      </td>
    </tr>
  </tbody>
</table>

## Monitor el rendimiento browser de escritorio [#browser]

Para monitor el rendimiento del browser de escritorio para su aplicación, instale el agente del browser usando el [método de copiar y pegar](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#copy-paste-app).

## Cambiar los ajustes de configuración [#configuration]

Normalmente, no es necesario cambiar los valores predeterminados para la configuración de su aplicación. Sin embargo, cuando sea necesario, puede ajustar algunas de las configuraciones. Para obtener más información, consulte la [documentación de configuración de C SDK](/docs/c-agent-configuration).
