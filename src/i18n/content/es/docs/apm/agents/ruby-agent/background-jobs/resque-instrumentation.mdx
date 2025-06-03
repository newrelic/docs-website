---
title: Resque instrumentación
tags:
  - Agents
  - Ruby agent
  - Background jobs
metaDescription: Additional information about configuring the New Relic Ruby instrumentation of Resque jobs.
freshnessValidatedDate: never
translationType: machine
---

Además de su aplicación web en sí, el agente New Relic Ruby también puede instrumentar sus trabajos de Resque.

## Capturar argumentos laborales [#capturing_job_parameters]

A partir de la versión 3.6.9 del agente Ruby, Opcionalmente, puede configurar el agente Ruby para capturar los argumentos del trabajo de Resque en la traza de la transacción y los errores de traza. Esto puede resultar especialmente útil al intentar reproducir trabajos fallidos. De forma predeterminada, esta característica está desactivada en caso de que los argumentos de su trabajo contengan información confidencial. Para habilitar esta característica, edite su <DNT>**newrelic.yml**</DNT> según corresponda para su versión de agente:

* Para newrelic_rpm 3.12.0 o superior: `attributes.include: job.resque.args.*`
* Para newrelic_rpm 3.6.9 a 3.11.X: `resque.capture_params: true`

Esta característica es distinta de la configuración genérica de nivel superior `capture_params` , que controla si los parámetros de solicitud HTTP se capturan en la traza de la transacción y los errores de traza para las solicitudes web. Puede configurar estos dos ajustes de forma independiente.

## Resque versiones 1.23.1 o superiores [#resque_1_23_1_plus]

Si está ejecutando Resque 1.23.1 o superior, no debería necesitar realizar ningún cambio de código fuera de los procedimientos normales de instalación del agente para que funcione la instrumentación Resque de New Relic.

<DNT>**Exception:**</DNT> Si le sobran llamadas a `NewRelic::Agent` métodos de sus enlaces Resque `before_first_fork`, `before_fork` o `after_fork` de cuando ejecutaba una versión anterior de Resque, asegúrese de <DNT>**remove**</DNT> esas llamadas después de actualizar a Resque 1.23. .1 o superior.

## Modos de bifurcación alternativos [#resque_plugins]

Las gemas [resque-multi-job-forks](https://github.com/stulentsev/resque-multi-job-forks) o [resque-jobs-per-fork](https://github.com/samgranieri/resque-jobs-per-fork) cambian el comportamiento de bifurcación de Resque para que no se bifurque para cada trabajo individual, sino que se bifurque una vez por lote de trabajos. De manera similar, puede configurar la variable de entorno `FORK_PER_JOB` en `false` para deshabilitar completamente la bifurcación en Resque.

Si utiliza cualquiera de estos modos de bifurcación alternativos en su aplicación, asegúrese de ejecutar el agente Ruby <DNT>**version 3.9.7 or higher**</DNT>. Las versiones anteriores del agente Ruby no funcionan correctamente con estos modos de bifurcación alternativos. Si está actualizando a 3.9.7 o superior, asegúrese de eliminar cualquier llamada directa a `NewRelic::Agent` métodos como `manual_start` o `after_fork` que haya estado usando anteriormente para que el agente funcione en estos entornos. .

## Versiones antiguas de Resque (&lt; 1.23.1) [#old_resque]

Es posible utilizar el agente Ruby de New Relic con versiones de Resque anteriores a 1.23.1. Sin embargo, New Relic recomienda actualizar a Resque 1.23.1 o superior para obtener mejores resultados.

Muchas aplicaciones utilizan los enlaces expuestos por Resque (`before_fork`, `after_fork`, etc.) para inyectar código personalizado en puntos críticos durante la vida útil de los trabajos de Resque. El agente de New Relic Ruby también debe utilizar estos ganchos para poder colocar su instrumentación.

Las versiones de Resque anteriores a la 1.23.1 no permiten definir enlaces varias veces; la última definición tendrá prioridad. Si no puede actualizar a una versión de Resque >= 1.23.1 (que permite que los enlaces se definan varias veces sin sobrescribirse entre sí), puede modificar sus enlaces Resque personalizados agregando el código New Relic necesario. Aquí hay un ejemplo.

<DNT>
  **Example: Modifying custom Resque hooks**
</DNT>

Puede omitir las definiciones de cualquier enlace para el que no tenga un código personalizado. En este caso, el agente los instalará automáticamente.

```ruby
Resque.before_first_fork do
  # ... your custom hook code ...
  NewRelic::Agent.manual_start(:dispatcher => :resque,
                               :sync_startup => true,
                               :start_channel_listener => true)
end
    
Resque.before_fork do |job|
  # ... your custom hook code ...
  NewRelic::Agent.register_report_channel(job.object_id)
end
    
Resque.after_fork do |job|
  # ... your custom hook code ...
  NewRelic::Agent.after_fork(:report_to_channel => job.object_id,
                             :report_instance_busy => false)
end
```

## Trabajos estancados [#deadlocks]

Algunos clientes (particularmente aquellos con un rendimiento laboral muy alto) han informado interbloqueos intermitentes en sus procesos de trabajo de Resque con el agente Ruby habilitado. Estos interbloqueos se deben a una mala interacción entre el hilo en segundo plano que utiliza el agente Ruby para enviar datos a los servidores de New Relic y el comportamiento de bifurcación de Resque.

Utilice cualquiera de estas opciones para resolver estos problemas:

* Deshabilite el comportamiento de bifurcación de Resque estableciendo la variable de entorno `FORK_PER_JOB` en `false` al generar procesos de Resque.
* Utilice la biblioteca `resolv-replace` de la biblioteca estándar de Ruby para reemplazar el código de resolución DNS nativo de Ruby con una versión pura de Ruby.

El agente Ruby utiliza un hilo en segundo plano en el proceso maestro de Resque para enviar datos al recolector de New Relic. En algunos entornos, este hilo adquirirá un bloqueo nativo durante la resolución DNS (al resolver el nombre de host del recolector New Relic).

Si este bloqueo nativo lo mantiene el subproceso en segundo plano mientras el subproceso principal del proceso maestro de Resque llama a la bifurcación para crear un proceso secundario, aún se marcará como retenido en el proceso secundario bifurcado. Sin embargo, dado que `fork` solo copia el subproceso que realiza la llamada, el subproceso en segundo plano que contenía el bloqueo nativo no existirá en el proceso secundario y, por lo tanto, el bloqueo nativo nunca se liberará. Si el proceso secundario intenta realizar alguna resolución de DNS, intentará adquirir el mismo bloqueo nativo y punto muerto. Para evitar este [problema de Github](https://github.com/resque/resque/issues/1101), use `resolv-replace` en lugar de la ruta de resolución DNS predeterminada de Ruby.
