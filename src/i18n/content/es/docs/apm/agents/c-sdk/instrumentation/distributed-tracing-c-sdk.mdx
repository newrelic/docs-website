---
title: Rastreo distribuido para tus servicios C
tags:
  - Agents
  - C SDK
  - Instrumentation
metaDescription: 'For the New Relic C SDK: how to implement distributed tracing across your C language applications and services.'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Rastreo distribuido te permite ver el recorrido completo de tus solicitudes a lo largo de un [sistema distribuido](/docs/distributed-tracing/concepts/introduction-distributed-tracing). El [SDK de C](https://github.com/newrelic/c-sdk) admite [rastreo estándar distribuido](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#head-based) con muestreo head-based. No es compatible con la característica llamada Infinite Tracing o W3C Trace Context.

El SDK de C requiere que instrumentes manualmente tus servicios de C, a diferencia de la instrumentación automática de otros agentes de New Relic. Esto significa que necesita agregar algunas líneas a su código para usar el SDK de C y luego agregar una configuración adicional para habilitar rastreo distribuido.

A continuación le indicamos cómo empezar:

* [instrumento un programa de muestra (recomendado):](#quick-start-apm) una forma rápida de comenzar
* [Transacción de instrumentos y solicitudes HTTP.](#guidelines)

<Callout variant="tip">
  Si desea obtener más información antes de comenzar, consulte estos temas:

  * [Cómo funciona el muestreo de tramos](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#sampling) explica las opciones de distribución del rastreo.

  * [Impactos en APM](/docs/apm/distributed-tracing/getting-started/transition-guide-distributed-tracing) le indica qué esperar si es un usuario actual

    <InlinePopover type="apm"/>

    pero no ha configurado rastreo distribuido.
</Callout>

## Instrumento un programa de muestra (recomendado): [#quick-start-apm]

Esta es una forma rápida de ver cómo instalar el SDK de C y un servicio con [rastreo estándar distribuido](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#head-based).

Antes de comenzar con los pasos principales:

* Necesitará una cuenta de New Relic para configurar rastreo distribuido. Si aún no tiene una, puede [crear rápidamente una cuenta gratuita](https://newrelic.com/signup). Tenga en cuenta que este enlace lo llevará a otro sitio para completar el registro, pero puede regresar aquí y seguir los pasos de configuración a continuación.
* Asegúrate de cumplir con los [requisitos](/docs/apm/agents/c-sdk/get-started/c-sdk-compatibility-requirements).

### Paso 1. Identificar servicios

Averigüe qué servicios se relacionan con su solicitud para que pueda instrumentar cada uno de ellos para enviar datos de traza a New Relic.

### Paso 2. Instrumentar cada servicio con un agente de APM [#update-agents]

Tenemos un ejemplo de cómo instalar el SDK de C y utilizar una aplicación de muestra para que comience a informar la telemetría a New Relic. Una vez que comprenda cómo funciona, podrá aplicar los principios a cada uno de los servicios C que participan en sus solicitudes. Si algunos de sus servicios utilizan otros idiomas, simplemente siga los [pasos de instalación](/docs/distributed-tracing/enable-configure/quick-start) para esos idiomas.

Antes de pasar al servicio de muestra a continuación, tenga en cuenta que deberá crear un [`newrelic_app_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__app__config__t.html) predeterminado, pero también deberá agregar `distributed_tracing.enabled` y configurarlo en `true`:

```c
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

/*
* A standalone example that demonstrates to users how to
* configure logging, configure an app, connect an app,
* start a transaction and a segment, and cleanly destroy
* everything.
*/
#include "libnewrelic.h"

int main(void) {
  newrelic_app_t* app;
  newrelic_txn_t* txn;
  newrelic_app_config_t* config;
  newrelic_segment_t* seg;

  config = newrelic_create_app_config("<YOUR_APP_NAME>", "9931ae06b54780ab846c16fc602b5778ead3907f");
  config->distributed_tracing.enabled = true;
  ...

```

Para probar el programa de muestra, [haga clic aquí](https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9&cards%5B0%5D=eyJuZXJkbGV0SWQiOiJzZXR1cC1uZXJkbGV0cy5zZXR1cC1jLWludGVncmF0aW9uIiwiYWNjb3VudElkIjoyNjQwNDA5fQ==&platform%5BaccountId%5D=2498654&platform%5BtimeRange%5D%5Bduration%5D=1800000&platform%5B$isFallbackTimeRange%5D=true).

### Paso 3. Ver traza [#view-traces]

Después de instrumentar cada uno de sus servicios con el agente APM, genere algo de tráfico en su aplicación para que podamos capturar alguna traza. A continuación se muestran algunas formas de ver su traza en la UI:

<CollapserGroup>
  <Collapser
    id="entity-explorer"
    title="Ver trazas que incluyen un servicio específico"
  >
    A continuación se muestra una forma de ver la traza de un servicio en particular:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**
       </DNT>

       .

    2. Haga clic en su entidad (servicio).

    3. En la sección

       <DNT>
         **Monitor**
       </DNT>

       del panel izquierdo, haga clic en

       <DNT>
         **Distributed tracing**
       </DNT>

       .

    4. Para más detalles, haga clic en una traza individual. Si

       <DNT>
         **Group similar traces**
       </DNT>

       está activado en el menú superior, haga clic en un grupo de trazas y luego haga clic en una traza individual.

    5. Si no ves la traza que quieres, puedes filtrar por el `trace.id`.
  </Collapser>

  <Collapser
    id="cross-acct-traces"
    title="Ver traza entre cuentas"
  >
    Para ver traza que cruza cuentas:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Traces**
       </DNT>

       .

    2. Seleccione su entidad (servicio) en el panel izquierdo.

    3. Para más detalles, haga clic en una traza individual. Si

       <DNT>
         **Group similar traces**
       </DNT>

       está activado en el menú superior, haga clic en un grupo de trazas y luego haga clic en una traza individual.

    4. Si no ves la traza que quieres, puedes filtrar por el `trace.id`.
  </Collapser>

  <Collapser
    id="logs-context"
    title="Examinar el registro relacionado con la traza."
  >
    Puede reunir su registro y los detalles de seguimiento para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-apm-agents/), puede ver el mensaje de inicio de sesión junto con la traza en la UI de New Relic.

    Luego de haber localizado una traza interesante siguiendo los pasos en [Ver traza que incluye un servicio específico](#entity-explorer) o [Ver traza entre cuentas](#cross-acct-traces), haga lo siguiente:

    1. Si ha habilitado el contexto de inicio de sesión, haga clic en la pestaña

       <DNT>
         **Logs**
       </DNT>

       (al lado de

       <DNT>
         **Trace details**
       </DNT>

       ).

    2. Para ver detalles relacionados con un log individual, haga clic directamente en el mensaje.
  </Collapser>
</CollapserGroup>

Para obtener más ayuda para encontrar su traza en la UI:

* [Comprender y utilizar la UIde rastreo distribuido](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui)
* [Consulta rastreo datos distribuidos](/docs/understand-dependencies/distributed-tracing/ui-data/query-distributed-trace-data)

## Transacción de instrumentos y solicitudes HTTP. [#guidelines]

Para transacciones que ocurren en múltiples servicios, la carga útil del rastreo distribuido contiene información que permite a New Relic unirlas en una traza de la transacción completa. Sin embargo, si los servicios de New Relic-monitor no se envían el contexto de traza entre sí, los detalles de la traza estarán incompletos. Para obtener más información, consulte la documentación sobre [cómo pasar el encabezado de API de rastreo distribuido](/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) y la [documentación de rastreo distribuido de C SDK en GitHub](https://github.com/newrelic/c-sdk/blob/master/GUIDE.md#distributed-tracing).

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Crear y devolver una carga útil para enviarla al servicio llamado
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#ae4a3e1c28f84df02755f04f657ac76b4">newrelic_create_distributed_trace_payload()</a>
        ```
      </td>
    </tr>

    <tr>
      <td>
        Aceptar una carga útil enviada desde el primer servicio.
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a83c315034829548ed1e4729a14c6b47a">newrelic_accept_distributed_trace_payload()</a>
        ```

        Esto unirá estos servicios en una traza.
      </td>
    </tr>

    <tr>
      <td>
        Devuelve una representación de cadena JSON codificada en base64 de la carga útil
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2e8a3c3e402a10bd8ffdd48f9c0cea8e">newrelic_create_distributed_trace_payload_httpsafe()</a>
        ```

        Esto ofrece el mismo comportamiento que `newrelic_create_distributed_trace_payload()`.
      </td>
    </tr>

    <tr>
      <td>
        Acepte una cadena codificada en base64 para la carga útil
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2e8a3c3e402a10bd8ffdd48f9c0cea8e">newrelic_accept_distributed_trace_payload_httpsafe()</a>
        ```

        Esto ofrece el mismo comportamiento que `newrelic_accept_distributed_trace_payload()`.
      </td>
    </tr>
  </tbody>
</table>
