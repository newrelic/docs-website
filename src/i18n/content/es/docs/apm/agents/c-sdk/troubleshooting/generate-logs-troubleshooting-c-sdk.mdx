---
title: Generar registro para resolución de problemas (C SDK)
type: troubleshooting
tags:
  - Agents
  - C SDK
  - Troubleshooting
metaDescription: 'New Relic C SDK: Gather detailed log file data for the SDK and daemon to diagnose problems, then return logs to their default levels.'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

## Problema

Tienes problemas al enviar datos a New Relic con una aplicación instrumentada con el SDK de C, pero no estás seguro de cuál es la causa.

## Solución

El SDK de New Relic C y su daemon tienen su propio registro:

* <DNT>
    **C SDK logs:**
  </DNT>

  Estos registros se generan debido a errores en la forma en que instrumentó su código utilizando la API de llamada de New Relic C SDK.

* <DNT>
    **Daemon logs:**
  </DNT>

  Estos son registros relacionados con la transmisión de datos a New Relic.

Para ayudar a solucionar un problema, recomendamos generar el registro en su nivel más alto:

1. Establezca el [logdel SDK de C](#c-sdk-logs) en el nivel `verbose` y el [log del daemon](#daemon-logs) en el nivel `debug`.
2. Ejecute ambos registros durante 5 a 10 minutos.
3. Después de generar un registro para solucionar problemas, devuelva el registro tanto para el SDK de C como para daemon a sus niveles predeterminados.

<Callout variant="caution">
  Los niveles de registro elevados pueden crear archivos de registro grandes y tener un impacto en el rendimiento. Generar registro en este nivel sólo el tiempo necesario para la resolución de problemas.
</Callout>

<CollapserGroup>
  <Collapser
    id="c-sdk-logs"
    title="Registro del SDK de C"
  >
    El SDK de C tiene cuatro niveles de registros, según lo definido por `enum _newrelic_loglevel_t` en `libnewrelic.h`. De forma predeterminada, el registro se establece en `NEWRELIC_LOG_INFO` y se genera en error estándar. El nivel de registros incluye:

    ```
    NEWRELIC_LOG_ERROR
    NEWRELIC_LOG_WARNING
    NEWRELIC_LOG_INFO (default)
    NEWRELIC_LOG_DEBUG
    ```

    Para establecer un nivel de registros diferente para propósitos de resolución de problemas: llame a [`newrelic_configure_log()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a8922f48a2b92714fb2fc05ad7bd5c003) en el código de su aplicación y establezca un nivel de registros. Por ejemplo:

    ```c
    newrelic_configure_log("./c_sdk.log", NEWRELIC_LOG_INFO);
    ```
  </Collapser>

  <Collapser
    id="daemon-logs"
    title="Registro daemon"
  >
    El daemon C SDK tiene cuatro niveles de registros. De forma predeterminada, el registro se establece en `info` y se genera en error estándar. El nivel de registros incluye:

    ```
    error
    warning
    info (default)
    debug
    ```

    Estos niveles de registros se invocan usando banderas desde la línea de comando:

    ```sh
    --logfile <DAEMON_FILE_NAME>  # Sets the path to the log file.
    --loglevel <LOG_LEVEL>        # Sets the log level. Default: info.
    ```

    Para establecer un nivel de registros diferente para propósitos de resolución de problemas: Desde la línea de comando, establezca un indicador de nivel de registros diferente. Por ejemplo:

    ```sh
    ./newrelic-daemon -f -logfile stdout -loglevel debug
    ```
  </Collapser>
</CollapserGroup>
