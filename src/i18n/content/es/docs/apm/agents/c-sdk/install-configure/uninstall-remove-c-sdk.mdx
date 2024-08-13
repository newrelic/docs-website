---
title: Desinstalar (eliminar) el SDK de C
tags:
  - Agents
  - C SDK
  - Install and configure
metaDescription: How to temporarily disable the New Relic C SDK or uninstall and remove it completely from your application's code library.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Siga estos procedimientos según corresponda para deshabilitar temporalmente el SDK de C en la biblioteca de códigos de su aplicación o eliminarlo por completo.

## Escribir instrumentación que puedas desactivar [#disable]

Como biblioteca C que proporciona acceso directo a la API New Relic, el SDK de C no se puede activar o desactivar directamente. Sin embargo, puede escribir su código para el SDK para que una rápida recompilación y despliegue pueda habilitar o deshabilitar su instrumentación.

Un enfoque es utilizar una macro `#ifdef` . Al rodear toda su instrumentación en macros `#ifdef` y establecer el valor de `YOURNAMESPACE_NEWRELIC_ENABLED` con su sistema de compilación, podrá habilitar o deshabilitar rápidamente la instrumentación de New Relic en sus programas basados en C/C++ al volver a compilarlos y luego volver a implementar la aplicación. .

<CollapserGroup>
  <Collapser
    id="ifdef"
    title="Uso de macros #ifdef para deshabilitar la instrumentación del SDK de C"
  >
    ```c
    // replace `YOURNAMESPACE` with something that's unique to
    // your company/project to ensure a unique name
    #ifdef YOURNAMESPACE_NEWRELIC_ENABLED
    int priority = 50;
    newrelic_txn_t* txn = newrelic_start_non_web_transaction(app, transaction_name);

    ...

    if (err) {
      newrelic_notice_error(txn, priority, "Meaningful error message", "Error.class");
    }

    ...

    newrelic_end_transaction(&txn);
    #endif
    ```
  </Collapser>
</CollapserGroup>

## Desinstalar completamente [#uninstall]

Para eliminar completamente el SDK de New Relic C de la biblioteca de códigos de tu aplicación:

1. Elimine el enlace a `libnewrelic.a` en su sistema de compilación.
2. Elimine toda la API de llamada de New Relic del código de su aplicación.
3. Vuelva a compilar y volver a implementar su aplicación.
