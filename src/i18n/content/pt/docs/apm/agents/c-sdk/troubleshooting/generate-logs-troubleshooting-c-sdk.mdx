---
title: Gerar log para resolução de problemas (C SDK)
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
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

## Problema

Você encontra problemas ao enviar dados para o New Relic com um aplicativo instrumentado com o C SDK, mas não tem certeza de qual é a causa.

## Solução

O SDK C da New Relic e seu daemon têm seu próprio log:

* <DNT>
    **C SDK logs:**
  </DNT>

  Esses logs são gerados devido a erros na forma como você instrumentou seu código usando a chamada de API do New Relic C SDK.

* <DNT>
    **Daemon logs:**
  </DNT>

  Estes são registros relacionados à transmissão de dados para a New Relic.

Para ajudar a solucionar um problema, recomendamos gerar o log no nível mais alto:

1. Configure o [log do C SDK](#c-sdk-logs) para o nível `verbose` e o [log do daemon](#daemon-logs) para o nível `debug` .
2. Execute ambos os logs por 5 a 10 minutos.
3. Depois de gerar logs para resolução de problemas, retorne o log do C SDK e do daemon para seus níveis padrão.

<Callout variant="caution">
  Níveis de log elevados podem criar arquivos de log grandes e afetar o desempenho. Gere log neste nível apenas enquanto for necessário para a resolução de problemas.
</Callout>

<CollapserGroup>
  <Collapser
    id="c-sdk-logs"
    title="Registro do SDK C"
  >
    O C SDK tem quatro níveis de log, conforme definido por `enum _newrelic_loglevel_t` em `libnewrelic.h`. Por padrão, o log é definido como `NEWRELIC_LOG_INFO` e a saída é o erro padrão. nível de log inclui:

    ```
    NEWRELIC_LOG_ERROR
    NEWRELIC_LOG_WARNING
    NEWRELIC_LOG_INFO (default)
    NEWRELIC_LOG_DEBUG
    ```

    Para definir um nível de log diferente para fins de resolução de problemas: Chame [`newrelic_configure_log()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a8922f48a2b92714fb2fc05ad7bd5c003) no código do seu aplicativo e defina um nível de log. Por exemplo:

    ```c
    newrelic_configure_log("./c_sdk.log", NEWRELIC_LOG_INFO);
    ```
  </Collapser>

  <Collapser
    id="daemon-logs"
    title="Registro do daemon"
  >
    O daemon C SDK possui quatro níveis de log. Por padrão, o log é definido como `info` e gerado como erro padrão. nível de log inclui:

    ```
    error
    warning
    info (default)
    debug
    ```

    Esses níveis de log são invocados usando flags na linha de comando:

    ```sh
    --logfile <DAEMON_FILE_NAME>  # Sets the path to the log file.
    --loglevel <LOG_LEVEL>        # Sets the log level. Default: info.
    ```

    Para configurar um nível de log diferente para fins de resolução de problemas: Na linha de comando, configure um sinalizador de nível de log diferente. Por exemplo:

    ```sh
    ./newrelic-daemon -f -logfile stdout -loglevel debug
    ```
  </Collapser>
</CollapserGroup>
