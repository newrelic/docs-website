---
title: No aparecen datos (C SDK)
type: troubleshooting
tags:
  - Agents
  - C SDK
  - Troubleshooting
metaDescription: 'If your app is being monitored by the New Relic C SDK but isn''t reporting data, follow these troubleshooting tips.'
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

[Instalaste el SDK de New Relic C](/docs/install-c-agent-compile-link-your-code), generaste tráfico para tu aplicación y esperaste unos minutos, pero aún no ves los informes de datos en APM.

## Solución

Estos consejos de resolución de problemas están ordenados aproximadamente del problema más común al menos común.

1. Verifique la salida en el [SDK de C y el archivo de registro daemon ](/docs/generate-logs-troubleshooting-c-sdk)para detectar errores.

2. Asegúrese de que el [proceso daemon (`newrelic-daemon`)](/docs/install-c-sdk-compile-link-your-code#daemon) esté en funcionamiento para que se invoque <DNT>**before**</DNT> iniciando su aplicación instrumentada.

3. Verifique el nombre de su aplicación y <InlinePopover type="licenseKey"/>en su [configuración de C SDK](/docs/c-sdk-configuration).

4. Asegúrate de llamar:

   * [`newrelic_create_app()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a61dd90439ae3cc5060021f6ab4701132)
   * [`newrelic_start_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#adbf7c1fa57482f6e0a7f291e0b5ec80f) o [`newrelic_start_non_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a88648cc287f8d7e371139dc3809b7afb) según corresponda
   * [`newrelic_end_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#acbd88933d620c21b7b19f12b6f042da8)

   También asegúrese de que ninguna de estas llamadas devuelva `false` o `NULL`.

5. Si es necesario, verifique la versión de C SDK usando [`newrelic_version()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a8aec87e54af38e466fc5f715ef591d10) y [actualice su biblioteca de C SDK](/docs/update-your-c-sdk-library) a la última versión.
