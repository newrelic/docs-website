---
title: Señales relacionadas de traza entidad
tags:
  - Understand dependencies
  - Distributed tracing
  - UI and data
metaDescription: Learn how distributed tracing data is used to surface performance impacts caused by traced entities.
freshnessValidatedDate: '2024-01-08T00:00:00.000Z'
translationType: machine
---

[Los datos de rastreo distribuido](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#trace-structure) representan cómo el desempeño de la entidad en todos sus sistemas distribuidos se impacta entre sí. La información valiosa de estos datos aparece con respecto a la entidad individual que ve, mostrando cuándo su desempeño podría verse afectado por otra entidad de traza.

La vista del rastreo distribuido información valiosa muestra tres tipos de señales de rendimiento de la traza entidad relacionada.

* <DNT>
    **Call counts**
  </DNT>

  : entidad que realiza un número significativamente mayor de llamadas a través del servicio que estás viendo. Este aumento afecta el rendimiento de su servicio.

* <DNT>
    **Exclusive time**
  </DNT>

  : entidad a la que llama el servicio que estás viendo, que aporta significativamente más latencia. La latencia (tiempo exclusivo) aportada por una entidad es el tiempo de reloj en el que tenía uno o más procesos en ejecución pero **no** estaba realizando ninguna llamada externa.

* <DNT>
    **Error rates**
  </DNT>

  : entidad llamada por el servicio que estás viendo, que tiene más procesos que terminan en errores.

La vista de rastreo distribuido información valiosa se centra en ayudarlo a identificar cambios significativos en el rendimiento que podrían estar afectando el servicio que está viendo. Las trazas de entidad solo aparecen en la lista si su impacto en el rendimiento es relativamente significativo al que estás viendo, y si ese impacto ha aumentado con respecto a los rangos de tiempo seleccionados y anteriores. Para mantener este enfoque, otras entidades que participan en traza con la que estás viendo no se muestran aquí si su impacto en el rendimiento es relativamente consistente o menor.

## Lista de entidades con un impacto y cambio significativo en el rendimiento [#entity-list]

* <DNT>
    **View impacted signals at a glance**
  </DNT>

  : Cuando la traza entidad relacionada sufre cambios significativos que impactan el rendimiento, verá inmediatamente una lista de las señales afectadas, junto con sus cambios específicos.

* <DNT>
    **Isolate key signals for quick action**
  </DNT>

  : Si una entidad está provocando cambios importantes en el impacto en el rendimiento, cada una de esas señales se resaltará en su propia tarjeta dedicada dentro de la lista, lo que le permitirá identificar y abordar rápidamente problemas potenciales.

<img
  title="Signal Insights in Horizontal view"
  alt="Signal Insights in Horizontal view"
  src="/images/apm_screenshot-crop_distributed-tracing-in-the-apm-summary-page.webp"
/>

Cada elemento de la lista muestra:

* Dirección de la ruta de llamada: `Upstream` o `Downstream` seguida del número promedio de saltos en las rutas de llamadas entre esa entidad y su servicio.

  * `Upstream`: entidad que envía llamadas a su servicio, directa o indirectamente.
  * `Downstream`: entidad a la que llama su servicio, directa o indirectamente.

* El rendimiento de la señal con un cambio significativo en el impacto en su servicio, en conjunto y a lo largo del tiempo.

* El nombre de la entidad.

* El rendimiento de la entidad:

  * <DNT>
      **Count**
    </DNT>

    : El número de llamadas de traza hacia o desde la entidad listada, cuando está en una ruta de llamada con su entidad.

  * <DNT>
      **Error rate**
    </DNT>

    : el porcentaje de llamadas a la entidad enumerada que arrojaron errores cuando se llamaron.

  * <DNT>
      **Exclusive time**
    </DNT>

    : La duración promedio exclusiva de las llamadas que incluyen su entidad y la entidad enumerada en la ruta de la llamada.

* <DNT>
    **View Trace**
  </DNT>

  Botón: Haga clic en este botón para ver [los detalles UIusuario de la traza](/docs/distributed-tracing/ui-data/trace-details/) para un rastreo distribuido donde se registró este impacto en el desempeño entre la otra entidad y su servicio.

## Comparar con opciones [#compare-trace-data]

De forma predeterminada, el rendimiento del tiempo seleccionado en el selector de tiempo se compara con el tiempo inmediatamente anterior, durante la misma duración. Por ejemplo, al visualizar los últimos 30 minutos en el selector de tiempo, el rendimiento se compara con los 30 minutos justo antes de ese momento. Esto también le permite seleccionar un pico en uno de los otros gráficos de la página y ver si esto se correlaciona con un impacto significativo en el rendimiento de una entidad traza relacionada.

Puede anular el comportamiento predeterminado de comparación con cambiando el valor del menú desplegable Comparar con en la parte superior de la página [Resumen de APM](/docs/apm/agents/manage-apm-agents/agent-data/triage-run-diagnostics/) . Modificar esta selección actualizará el final de la ventana de tiempo de comparación (sin cambiar la duración) utilizada para calcular el cambio porcentual de los valores de la señal de las siguientes maneras:

* <DNT>
    **None**
  </DNT>

  : La ventana de tiempo de comparación finalizará al comienzo de la ventana del selector de tiempo.

* <DNT>
    **Yesterday**
  </DNT>

  : La ventana de tiempo de comparación finalizará un día antes del inicio de la ventana de selección de tiempo.

* <DNT>
    **Last week**
  </DNT>

  : La ventana de tiempo de comparación finalizará 7 días antes del inicio de la ventana de selección de tiempo.

Si no se conservan datos de seguimiento en la ventana de comparación, el subtítulo del rastreo distribuido información valiosa no contendrá una cláusula "comparado con".

## Acciones adicionales UI [#additional-actions]

Haga clic en el ícono de ajustes en la parte superior derecha del componente para realizar acciones adicionales:

* <DNT>
    **View all**
  </DNT>

  para ver una vista de página completa de esta lista cuando se muestran muchas señales.

* <DNT>
    **Guided install**
  </DNT>

  le guía por los pasos para habilitar rastreo distribuido para este servicio.

* <DNT>
    **Instrumentation status**
  </DNT>

  enumera el estado de configuración de rastreo distribuido para todos sus servicios.

* <DNT>
    **See our docs**
  </DNT>

  es un enlace a esta página.

<img
  title="Signal summaries example"
  alt="Example of signal summaries view"
  src="/images/distributed-tracing_signal-summaries_controls.webp"
/>

## Vista de página completa [#full-page-view]

La vista de página completa muestra la misma lista de señales importantes pero con más espacio para desplazarse por listas más largas. También incluye una opción de filtro para centrarse en señales de un tipo particular.

<img
  title="Signal summaries example"
  alt="Example of signal summaries view"
  src="/images/distributed-tracing_entity-summaries_full_page.webp"
/>

## Vista totalmente clara [#all-clear-view]

La visión clara significa que ningún servicio ascendente o descendente tuvo cambios significativos en su impacto en el rendimiento.

<img
  title="Signal summaries example"
  alt="Example of signal summaries view"
  src="/images/distributed-tracing_signal-summaries-with-all-clear-example.webp"
/>

## Comprender los mensajes de datos de seguimiento faltantes [#no-trace-data]

Para asegurarse de que está trabajando con el rastreo distribuido información valiosa más relevante, aquí hay un desglose de los mensajes que puede encontrar cuando los datos no están disponibles, junto con las acciones recomendadas:

* `No data for this time range`:

  * Este mensaje indica que ha seleccionado un período de tiempo para su servicio que queda fuera del período de retención actual para los datos de traza.
  * Para acceder a información valiosa, ajuste el rango de tiempo para centrarse en un período de la última semana.

* `No data from your entity`:

  * Este mensaje sugiere que su servicio no está reportando datos de rastreo distribuido actualmente.
  * Para desbloquear esta valiosa información, configure rastreo distribuido para su servicio siguiendo la [instalación guiada](https://onenr.io/0OQM6lV3DwG). Si eres nuevo en rastreo distribuido, empieza leyendo [rastreo distribuido: Guía de planificación](https://docs.newrelic.com/docs/distributed-tracing/concepts/distributed-tracing-planning-guide/).

* `No data from related entities`;

  * Este mensaje indica que su servicio está reportando datos pero su dependencia no.
  * Al [habilitar rastreo distribuido para tus servicios](https://onenr.io/0OQM6lV3DwG), tu dependencia también debería habilitarse automáticamente.
