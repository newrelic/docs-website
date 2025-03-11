---
title: 'Seguimiento Infinito: Configurar el monitoreo del observador de trazas'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: The trace observer monitoring feature allows you to see if New Relic is handling your traces as you expect.
freshnessValidatedDate: never
translationType: machine
---

Infinite Tracing (anteriormente llamado "New Relic Edge") ofrece monitoreo del observador de trazas para que pueda obtener información adicional valiosa sobre el comportamiento de muestreo del observador de trazas. Esta característica opcional le muestra la cantidad de traza vista y conservada por el observador de traza. Las trazas métricas del observador se escriben en la cuenta que elija y están disponibles para ver en la configuración de Infinite Tracing o en nuestro generador de consultas.

Cuando habilita el monitoreo, la traza observer métrica se puede escribir en cualquier cuenta en su jerarquía de cuentas New Relic. Esto le permite controlar la visibilidad de la métrica. Antes de encenderlo, debes decidir qué cuenta debe recibir la traza métrica del observador.

<Callout variant="tip">
  Si habilitas esta característica, verás un pequeño cargo mensual adicional. Para darle una idea de los cargos en los que podría incurrir, según el modelo de precios actual, podría ver un cargo mensual adicional de 1,6 centavos según lo siguiente:

  * Número de métricas: 2
  * Tarifa: Cada 10 segundos
  * Recuento de atributos: 2-5
</Callout>

## Habilitar monitoreo de observador de traza [#enable-monitoring]

Puede activar el monitoreo del observador de traza haciendo clic en un botón en la UI de New Relic. Tan pronto como habilita el monitoreo de traza observer, las trazas métricas de observer se capturan y se muestran en la aplicación o puede verlas en el generador de consultas. traza observer métrica no son retroactivas y solo se capturan cuando el monitoreo de traza observer está habilitado.

Para habilitar el monitoreo de traza observer:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**
   </DNT>

   .

2. Confirma que estás en la cuenta donde deseas registrar la traza observer métrica.

3. Haga clic en el botón

   <DNT>
     **Trace observer monitoring**
   </DNT>

   .

## Cambiar cuentas de seguimiento de observador de traza [#switch-accounts]

Si decides en algún momento que quieres cambiar qué cuenta recibe la traza métrica del observador, puedes hacerlo en la configuración de Infinite Tracing.

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**
   </DNT>

   .

2. Utilice el selector de cuentas para cambiar a la cuenta donde desea que se escriba la traza observer métrica.

3. Haga clic en el botón para desactivar el monitoreo del observador de trazas.

4. Haga clic en el botón para volver a habilitar el monitoreo del observador de traza en la cuenta actual.

<Callout variant="tip">
  Cuando se habilita o deshabilita el monitoreo de traza observer se escribe un `NrAuditEvent` en la cuenta donde ocurrió el cambio. Este evento le ayuda a realizar un seguimiento de cualquier cambio realizado en el observador de traza.
</Callout>

## Ver traza observador métrica [#view-metrics]

Cualquier persona con acceso a la cuenta de monitoreo puede ver la traza métrica del observador en la configuración de Infinite Tracing o en nuestro generador de consultas.

Si no tiene acceso a la cuenta de monitoreo, no podrá ver ninguna traza métrica de observador en la configuración de Infinite Tracing ni ejecutar la consulta NRQL sobre estas métricas. Esto es lo que verá si no tiene acceso:

<img
  title="Screenshot showing what appears in Infinite Tracing settings if you don't have access to the monitoring account that is receiving metrics."
  alt="Screenshot showing what appears in Infinite Tracing if you don't have access to the monitoring account that is receiving metrics."
  src="/images/distributed-tracing_screenshot-full_trace-monitoring-toggle.webp"
/>

### Ver métrica en la configuración de Infinite Tracing [#view-in-edge]

Cuando activas el monitoreo de traza observer, las trazas métricas de observer se muestran en la configuración de Infinite Tracing:

* Se agregan dos columnas al listado principal de observadores de traza:

  * <DNT>
      **Traces Seen**
    </DNT>

    : Cuántas trazas vio el observador de trazas en los últimos 60 minutos.

  * <DNT>
      **Traces Kept**
    </DNT>

    : El número y porcentaje de trazas que se retuvieron.

* Se agrega un nuevo panel en el lado derecho de la pantalla:

  * <DNT>**Monitoring account**</DNT>: En la parte superior del panel derecho, esta es la cuenta donde están escritas las trazas métricas del observador.

  * <DNT>**How many traces were kept?**</DNT> (gráfico superior): muestra la misma información que <DNT>**Traces Kept**</DNT>, pero muestra cómo se ve con el tiempo. Puede ver la magnitud del muestreo y cualquier tendencia.

  * <DNT>**Which traces were kept?**</DNT> (gráfico inferior): Muestra qué categorías de traza se mantuvieron. El gráfico muestra si las trazas fueron capturadas por diferentes tipos de filtros Infinite Tracing:

    * Duración (traza lenta)
    * Aleatorio
    * Span atributos filters (traza con errores u otro atributo que especifiques)

    <img
      title="Screenshot of graph showing which traces were kept."
      alt="Screenshot of graph showing which traces were kept."
      src="/images/distributed-tracing_screenshot-crop_how-many-traces-kept.webp"
    />

### Ver en el generador de consultas

Si prefiere una forma programática de ver la métrica, aquí hay algunos ejemplos de consulta NRQL. Estos ejemplos replican los dos gráficos de la configuración de Infinite Tracing:

<DNT>**How many traces were kept?**</DNT> (tabla superior):

```sql
FROM Metric SELECT sum(monitoring.trace.opened.session.count) AS 'Traces seen', sum(monitoring.trace.sampled.count) AS 'Traces kept' WHERE account = INSERT_THE_MONITORING_ACCOUNT_ID TIMESERIES
```

<DNT>**Which traces were kept?**</DNT> (gráfico inferior):

```sql
FROM Metric SELECT sum(monitoring.trace.sampled.count) WHERE account = INSERT_THE_MONITORING_ACCOUNT_ID AND newRelic.traceFilter.type IS NOT NULL FACET newRelic.traceFilter.type LIMIT 3 TIMESERIES
```
