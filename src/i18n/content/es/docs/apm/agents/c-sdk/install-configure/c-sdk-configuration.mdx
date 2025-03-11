---
title: Configuración del SDK de C
tags:
  - Agents
  - C SDK
  - Install and configure
metaDescription: Where to find basic New Relic C SDK configuration options you can change to fine-tune monitoring of your app.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Su aplicación C requiere dos valores de configuración:

* Nombre de la aplicación: [`app_name`](https://newrelic.github.io/c-sdk/struct__newrelic__app__config__t.html#a0543f501cfec009c483be0c6d5d511f7)

* New Relic

  <InlinePopover type="licenseKey"/>

  : [`license_key`](https://newrelic.github.io/c-sdk/struct__newrelic__app__config__t.html#aac3c5f9a0e5da64836a806c47b954b71)

Todos los demás valores de configuración son opcionales y, por lo general, no es necesario cambiar la configuración predeterminada. Sin embargo, cuando sea necesario, puede ajustar la configuración del C SDK de New Relic.

Este documento es una referencia rápida para utilizar algunas opciones de configuración básicas con la API del SDK de C. Para obtener información detallada sobre cómo cambiar sus ajustes de configuración, incluidos valores de código y ejemplos, consulte la [configuración GUIDE.md del SDK de C en GitHub](https://github.com/newrelic/c-sdk/blob/master/GUIDE.md#configuration).

## Cambiar los ajustes de configuración [#change-config]

A continuación se muestran ejemplos de algunas opciones de configuración disponibles que puede cambiar, tal como se define en el encabezado público del SDK de C, [`libnewrelic.h`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Opciones de configuración del SDK de C
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Ajustes de configuración generales
      </td>

      <td>
        Para configurar o cambiar el nombre de la aplicación, configurar <InlinePopover type="licenseKey"/>, nivel de registro, seguimiento de transacciones, seguimiento de almacenamiento de datos, etc., utilice:

        `newrelic_app_config_t`
      </td>
    </tr>

    <tr>
      <td>
        Configuración adicional de seguimiento de transacciones
      </td>

      <td>
        Para habilitar el rastreador de transacciones y configurar qué duraciones de transacciones se consideran para informar una traza a New Relic, use:

        `newrelic_transaction_tracer_config_t`
      </td>
    </tr>

    <tr>
      <td>
        Segmentos de almacenamiento de datos
      </td>

      <td>
        Para configurar si se informa el nombre de una base de datos y el nombre de una instancia de almacenamiento de datos, utilice:

        [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html)
      </td>
    </tr>

    <tr>
      <td>
        Comunicación con el SDK de C
      </td>

      <td>
        Para configurar el extremo del socket para comunicaciones de agente adaemon , utilice:

        `newrelic_init`
      </td>
    </tr>
  </tbody>
</table>

## Cambiar el nombre de la aplicación (alias) en UI [#change-ui]

Puede cambiar [el alias de su aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application#differences) desde la página de configuración <DNT>**Application**</DNT> en la UI de New Relic. Esto es útil, por ejemplo, para darle a su aplicación un nombre diferente y aún así mantener los datos históricos con el nuevo alias. Para obtener más información, consulte [Asigne un nombre a su aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application).

El C SDK de New Relic no admite [la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration). Sin embargo, también puede utilizar esta página de configuración <DNT>**Application**</DNT> en la UI para establecer el umbral [Apdex T](/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction) de su aplicación.

Para cambiar el alias de la aplicación o el umbral Apdex T en la UI , vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Application**</DNT>.

## Cambiar el nombre de la aplicación en la configuración [#change-app-name]

Si cambia el nombre de su aplicación en sus ajustes de configuración, esto hará que la misma aplicación aparezca en la UI con un nuevo nombre. Cualquier dato histórico (basado en el programa [de retención de datos](/docs/apm/new-relic-apm/maintenance/apm-data-retention) ) solo existirá con el nombre anterior. (Para cambiar el nombre de su aplicación pero aún conservar los datos históricos, use la [configuraciónUI ](#change-ui)para cambiar el alias).

Si necesita cambiar el nombre de su aplicación en su configuración después de que su aplicación esté conectada al daemon:

1. Haga un nuevo `config` con una llamada a [`newrelic_create_app_config()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#af067b3ff89a40b6fa417e18be5e847aa) usando el nuevo nombre de la aplicación.
2. Crea una nueva aplicación conectada con una llamada a [`newrelic_create_app()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a61dd90439ae3cc5060021f6ab4701132).

<Callout variant="caution">
  Tiempo lo es todo. Cambiar los nombres de las aplicaciones durante la ejecución de una sola aplicación puede significar que sus datos instrumentados se envíen con el nuevo nombre de la aplicación.
</Callout>

## Ver el registro de sus datos de infraestructura y APM [#logs-context]

También puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/c-sdk-configure-logs-context/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación. También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes. No es necesario cambiar a otra página de UI.
