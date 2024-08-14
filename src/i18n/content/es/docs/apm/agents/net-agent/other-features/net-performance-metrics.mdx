---
title: Rendimiento .NET métrico
tags:
  - Agents
  - NET agent
  - Other features
freshnessValidatedDate: never
translationType: machine
---

El agente .NET de New Relic recopila métricas del tiempo de ejecución de .NET sobre el rendimiento de su aplicación. Estas métricas pueden proporcionar información valiosa sobre cuánta CPU y memoria consume una aplicación, así como cómo el rendimiento de una aplicación puede verse afectado por la recolección de basura y la contención de recursos del grupo de subprocesos.

La suite completa de .NET Performance métrica está disponible .NET agente versiones 8.20 y superiores.

Puedes ver estas métricas en <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**</DNT>. Seleccione una aplicación y vaya a <DNT>**More views > Dotnet VMs**</DNT>.

También puedes ver estas métricas por:

* Creando un [dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards) personalizado.

* Usando

  <DNT>
    **Metric explorer**
  </DNT>

  en

  <DNT>
    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**
  </DNT>

  \> seleccione una aplicación y vaya a

  <DNT>
    **More views**
  </DNT>

  .

## CPU métrica [#cpu-metrics]

Se recogen las siguientes métricas de CPU:

* <DNT>
    **CPU/User/Utilization**
  </DNT>

  El porcentaje de CPU que consume este proceso.

* <DNT>
    **CPU/User Time**
  </DNT>

  La cantidad de tiempo que el proceso ha dedicado a ejecutar el código de la aplicación.

## Memoria métrica [#memory-metrics]

Se recogen las siguientes Memorias métricas:

* <DNT>
    **Memory/Physical**
  </DNT>

  La cantidad de memoria privada (física), en MB, asignada al proceso.

* <DNT>
    **Memory/WorkingSet**
  </DNT>

  Cantidad de memoria física asignada al proceso.

## Recogida de basura métrica [#garbage-collection]

El recolector de basura .NET se ejecuta en segundo plano y es responsable de identificar y recuperar la memoria vinculada a objetos a los que una aplicación ya no hace referencia. La siguiente métrica puede ser útil para identificar patrones de asignación de objetos y posibles escenarios de sobreasignación. Este [artículo](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) explica con más detalle los fundamentos de la recolección de basura en .NET.

<Callout variant="tip">
  La recolección de basura métrica está disponible para:

  * Todas las versiones del framework .NET
  * .NET Core 3.0 y superior.
</Callout>

<Callout variant="important">
  Para aplicaciones .NET framework , el usuario de Windows bajo el cual se ejecuta su aplicación debe tener acceso a los datos del contador de rendimiento de Windows. Por lo general, esto se logra agregando el usuario a los grupos "Usuario de Monitor de rendimiento" y "Usuario log de rendimiento". Los permisos insuficientes darán lugar a que el agente no recoja la basura métrica.
</Callout>

### Métrica general [#overall-metrics]

Adicionalmente se recogen las siguientes métricas de recogida de basura:

* <DNT>
    **GC/Handles**
  </DNT>

  El número de referencias a objetos.

* <DNT>
    **GC/Induced**
  </DNT>

  Normalmente, el tiempo de ejecución realiza la recolección de basura automáticamente. Esta métrica identifica la cantidad de veces que la recolección de basura fue invocada manualmente mediante una llamada explícita a `GC.Collect` desde el código de la aplicación.

* <DNT>
    **GC/PercentTimeInGC**
  </DNT>

  (solo framework .NET)  
  El porcentaje de tiempo transcurrido que el tiempo de ejecución de .NET ha dedicado a realizar la recolección de basura desde el último ciclo de recolección de basura.

### Generación - 0 montón [#gen-0-heap]

Se recogen las siguientes métricas de GC Gen0:

* <DNT>
    **GC/Gen0/Size**
  </DNT>

  La cantidad de memoria (en MB) que está _disponible_ para ser asignada en la Generación 0. Esto no indica la cantidad de memoria que está _utilizando_ la Generación 0, sino el máximo disponible para ser asignado.

* <DNT>
    **GC/Gen0/Promoted**
  </DNT>

  La cantidad de memoria (en MB) que sobrevivió a la recolección de basura y se promovió de Gen0 a Gen1. La memoria sobrevive a la recolección de basura cuando hay una referencia activa a ella.

* <DNT>
    **GC/Gen0/Collections**
  </DNT>

  Número de veces que el recolector de basura ejecutó la recolección de basura de generación 0.

### Generación - 1 montón [#gen-1-heap]

Se recogen las siguientes métricas de GC Gen1:

* <DNT>
    **GC/Gen1/Size**
  </DNT>

  La cantidad de memoria (en MB) que se _utiliza_ en el montón de Generación 1. Esto difiere de Gen0/Size, que mide la cantidad máxima de memoria _disponible_ para el montón de generación 0.

* <DNT>
    **GC/Gen1/Promoted**
  </DNT>

  La cantidad de memoria (en MB) que sobrevivió a la recolección de basura y se promovió de Gen1 a Gen2. La memoria sobrevive a la recolección de basura cuando hay una referencia activa a ella.

* <DNT>
    **GC/Gen1/Collections**
  </DNT>

  Número de veces que el recolector de basura ejecutó la recolección de basura de generación 1.

### Generación - 2 montón [#gen-2-heap]

Se recogen las siguientes métricas de GC Gen2:

* <DNT>
    **GC/Gen2/Size**
  </DNT>

  La cantidad de memoria (en MB) que _utiliza_ Gen2 Heap.

* <DNT>
    **GC/Gen2/Survived**
  </DNT>

  (Solo .NET Core)  
  La cantidad de memoria (en MB) que ha sobrevivido a la recolección de basura. La memoria sobrevive a la recolección de basura cuando hay una referencia activa a ella. A diferencia de Gen0 y Gen1, la memoria que sobrevive a la recolección de basura _no_ se promueve.

* <DNT>
    **GC/Gen2/Collections**
  </DNT>

  Número de veces que el recolector de basura ejecutó la recolección de basura de generación 2.

### Montón de objetos grandes (LOH) [#large-object-heap]

Se recogen las siguientes métricas GC LOH:

* <DNT>
    **GC/LOH/Size**
  </DNT>

  La cantidad de memoria (en MB) que _utiliza_ el montón de objetos grandes (LOH). En .NET Core, el montón de objetos grandes a veces se denomina Gen3.

* <DNT>
    **GC/LOH/Survived**
  </DNT>

  (Solo .NET Core) La cantidad de memoria (en MB) que ha sobrevivido a la recolección de basura. La memoria sobrevive a la recolección de basura cuando hay una referencia activa a ella. A diferencia de Gen0 y Gen1, la memoria que sobrevive a la recolección de basura _no_ se promueve.

## Grupo de subprocesos administrado métrica [#managed-thread-pool]

El tiempo de ejecución de .NET gestiona un grupo de subprocesos. Las siguientes métricas brindan visibilidad del rendimiento de una aplicación en términos del grupo de subprocesos y pueden ayudar a identificar áreas de escasez del grupo de subprocesos. La inanición/contención del grupo de subprocesos se produce cuando no hay suficientes subprocesos disponibles para procesar las solicitudes realizadas por una aplicación. El siguiente [artículo](https://docs.microsoft.com/en-us/dotnet/standard/threading/the-managed-thread-pool) describe las diversas características del grupo de subprocesos administrado. Tenga en cuenta que estas métricas _no_ incluyen información sobre subprocesos que no son administrados por el grupo de subprocesos.

### Hilos de trabajo [#worker-threads]

Los subprocesos de trabajo son subprocesos vinculados a la CPU que se emplean para realizar trabajos en nombre de un proceso.

* <DNT>
    **Threadpool/Worker/Available**
  </DNT>

  Identifica el número de subprocesos administrados disponibles para el proceso. Las cifras constantemente bajas indican un posible escenario de hambruna.

* <DNT>
    **Threadpool/Worker/InUse**
  </DNT>

  Identifica el número de subprocesos de trabajo que el proceso utiliza actualmente.

### Hilos de finalización [#completion-threads]

Los subprocesos de finalización, a veces denominados subprocesos de E/S, se emplean para monitor la finalización de las operaciones de E/S.

* <DNT>
    **Threadpool/Completion/Available**
  </DNT>

  Esta métrica identifica la cantidad de subprocesos que están actualmente disponibles para el proceso. Las cifras constantemente bajas indican un posible escenario de hambruna.

* <DNT>
    **Threadpool/Completion/InUse**
  </DNT>

  Esta métrica identifica la cantidad de subprocesos de finalización que el proceso utiliza actualmente.

### Rendimiento [#throughput]

El rendimiento métrico mide cuánto trabajo se ha solicitado realizar en un subproceso diferente, la cantidad de trabajo que se ha iniciado y cuánto trabajo está esperando a que un recurso del grupo de subprocesos esté disponible.

* <DNT>
    **Threadpool/Throughput/Requested**
  </DNT>

  Identifica el número de veces que se ha solicitado que el trabajo se ejecute en un subproceso administrado de grupo de subprocesos diferente.

* <DNT>
    **Threadpool/Throughput/Started**
  </DNT>

  Identifica la cantidad de elementos de trabajo solicitados para ejecutarse en un subproceso independiente que ha iniciado la ejecución.

* <DNT>
    **Threadpool/Throughput/QueueLength**
  </DNT>

  Identifica la cantidad de elementos de trabajo que se han solicitado, pero que están esperando para comenzar. Los números que aumentan constantemente indican una posible situación de inanición del grupo de subprocesos. El siguiente [artículo](https://docs.microsoft.com/en-us/dotnet/api/system.threading.threadpool.setmaxthreads) describe cómo modificar la cantidad de subprocesos que están disponibles para una aplicación.
