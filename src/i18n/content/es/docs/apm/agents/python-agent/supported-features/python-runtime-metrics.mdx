---
title: Tiempo de ejecución de Python métrica
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: The Python agent records runtime metrics for garbage collection and CPU/ memory usage
freshnessValidatedDate: never
translationType: machine
---

El agente Python registra la métrica del tiempo de ejecución para permitirle analizar el rendimiento de sus procesos e intérprete de Python. Esto incluye métricas relacionadas con el uso de CPU, uso de memoria y recolección de basura.

## Uso de CPU

Con CPU runtime métrica, puede monitor el uso de la CPU examinando la utilización de la CPU del usuario y del sistema, y también ver el tiempo invertido en diferentes componentes de la CPU. Están disponibles las siguientes métricas de uso de CPU:

* <DNT>
    **CPU time**
  </DNT>

  : realiza un seguimiento de la cantidad de tiempo que se pasa en diferentes estados de la CPU. Esto incluye usuario (tiempo que ejecuta el código de la aplicación) y sistema (tiempo que pasa en el sistema operativo). Esta métrica se representa como el tiempo total transcurrido en segundos.

* <DNT>
    **CPU utilization**
  </DNT>

  : analiza la cantidad de recursos de procesamiento que utilizan a lo largo del tiempo los diferentes componentes de la CPU. Esto incluye el componente del usuario (para ejecutar el código de la aplicación) y el componente del sistema (para ejecutar el código del kernel). Esta métrica se informa como un porcentaje que representa el tiempo invertido en el componente de CPU especificado dividido por el tiempo total de CPU transcurrido.

## Uso de memoria

Puede monitor el consumo y la utilización general de la memoria de su sistema por proceso y host. Están disponibles las siguientes métricas de uso de memoria:

* <DNT>
    **Total physical memory**
  </DNT>

  : monitor la cantidad de memoria física total en megabytes que utiliza su sistema a lo largo del tiempo. Esta métrica también está disponible para ID de procesos individuales.

* <DNT>
    **Memory utilization**
  </DNT>

  : realice un seguimiento de la utilización de la memoria a lo largo del tiempo para su sistema y para procesos individuales. Esta métrica está representada por el valor de la memoria física total que utiliza su sistema (o un proceso específico) dividido por la cantidad total de memoria disponible.

## Recolección de basura

<Callout variant="important">
  La creación de perfiles de recolección de basura está deshabilitada de forma predeterminada en el agente. Para habilitarlo, consulte nuestra documentación [aquí](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics).
</Callout>

El recolector de basura encuentra objetos de datos no utilizados y reclama ese espacio de memoria para que pueda ser utilizado por otro proceso. El agente Python proporciona la siguiente métrica de recolección de basura:

* <DNT>
    **Object count by type**
  </DNT>

  : Obtenga información valiosa sobre los tipos de objetos más comunes que recopila el recolector de basura al ver sus recuentos de recolección asociados. Puede personalizar la cantidad máxima de tipos de objetos que le gustaría ver informados por este tipo de métrica configurando la [opción top_object_count_limit](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics).

* <DNT>
    **Object count by generation**
  </DNT>

  : A medida que la recolección ocurre en cada generación del recolector de basura, los objetos que sobreviven se promueven a generaciones superiores. Esta métrica le permite ver la cantidad de objetos que se almacenan en cada una de las generaciones del recolector de basura a lo largo del tiempo.

* <DNT>
    **Total time by generation**
  </DNT>

  : Analice la cantidad de tiempo que dedica el recolector de basura en cada generación de recolección.

* <DNT>
    **Garbage collector collections**
  </DNT>

  : El número de colecciones está influenciado por el umbral de objeto establecido para cada generación. Cuando se alcance el umbral, se activará un proceso de recolección. Las colecciones también se pueden activar manualmente dentro del código de la aplicación con llamadas a [gc.collect()](https://docs.python.org/3/library/gc.html#gc.collect). Esta métrica informa la cantidad de barridos del recolector de basura que se han producido en cada generación a lo largo del tiempo.

* <DNT>
    **Garbage collector uncollectable**
  </DNT>

  : En algunos casos, es posible que el recolector de basura no pueda alcanzar y liberar un determinado objeto, considerándolo inrecuperable. Esta métrica le permite ver la cantidad de objetos que el recolector de basura no pudo recolectar en cada generación.

* <DNT>
    **Garbage collector collected**
  </DNT>

  : Esta métrica informa la cantidad total de objetos que recopiló el recolector de basura en cada generación.
