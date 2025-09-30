---
title: Resolución de problemas de uso grande de memoria (Node.js)
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: If you installed the New Relic Node.js agent and your application's memory usage increases read this troubleshooting doc for potential causes and solutions.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Instaló el agente New Relic Node.js y el uso de memoria de su aplicación Node.js aumentó.

## Solución

Hay varias causas posibles para este aumento de memoria y posibles soluciones para cada una.

<CollapserGroup>
  <Collapser
    id="cluster"
    title="Aumento causado por asignaciones de losas de trabajadores del clúster"
  >
    Node.js proporciona el [módulo clúster](http://nodejs.org/api/cluster.html). Esto permite manejar solicitudes en paralelo utilizando todos los núcleos de procesador disponibles en un host. Sin embargo, cada trabajador del clúster asigna su propio búfer de losa para la transacción SSL y mantiene su propia copia de los datos del agente Node.js. Esto multiplica la sobrecarga de memoria por la cantidad de trabajadores del clúster utilizados. Esto también es cierto si un host ejecuta varias aplicaciones Node.js al mismo tiempo.

    <DNT>
      **Solution:**
    </DNT>

    Algunos proveedores de servicios en la nube utilizan entornos que indican una mayor cantidad de núcleos de procesador de los que realmente se pueden usar en un momento dado. Reducir la cantidad de trabajadores del clúster o ejecutar sin soporte de clúster puede disminuir el uso de memoria sin afectar el rendimiento.
  </Collapser>

  <Collapser
    id="log"
    title="Aumento causado por mensaje de registro almacenado en el disco"
  >
    Los mensajes de registro se registran en el disco de forma predeterminada. Debido a cómo se manejan los datos del mensaje, los objetos del mensaje se pueden mover a <DNT>**Old-pointer-space**</DNT> para la recolección de basura. Esto significa que los objetos permanecen en la memoria por un tiempo, incluso después de que desaparezcan todas las referencias a ellos. Esto conduce a una mayor cantidad de memoria consumida por un proceso en un momento dado. También se utiliza tiempo de procesamiento adicional para la recolección de basura.

    <DNT>
      **Solution:**
    </DNT>

    Dependiendo de su versión de Node.js, el agente puede tener de forma predeterminada el nivel de registros `trace` o `info` . Reduzca la detalle del registro a niveles `info` o `warn` para disminuir notablemente el uso de memoria y el tiempo dedicado a la recolección de basura.
  </Collapser>

  <Collapser
    id="mongo"
    title="Aumento causado por cursores MongoDB filtrados"
  >
    Muchos controladores de base de datos utilizan una abstracción llamada `cursor`. Los cursores brindan la capacidad de iterar a través de los resultados de la consulta. Por ejemplo, el controlador <DNT>**mongodb**</DNT> proporciona cursores al ejecutar `find` consulta.

    Los cursores viven como objetos en el tiempo de ejecución de Node.js y como entidad en el servidor MongoDB. Cuando una aplicación ha terminado de usar un `cursor`, debe cerrarla para liberar recursos tanto en el servidor como en la aplicación cliente.

    En Node.js, es posible que un cursor sea recolectado como basura, liberando recursos en la aplicación, sin cerrar el `cursor` en el servidor. Esto puede pasar desapercibido en la aplicación. Sin embargo, el agente New Relic Node.js realiza un seguimiento de los cursores abiertos para medir el tiempo dedicado a iterar los resultados. Si su aplicación no cierra todos los cursores que utiliza, el agente continuará rastreando los cursores obsoletos y perdiendo memoria.

    <DNT>
      **Solution:**
    </DNT>

    Asegúrese de que todos los `cursor` creados en su aplicación estén cerrados llamando `cursor.close()` después de que la aplicación termine de procesar los resultados de la consulta.
  </Collapser>

  <Collapser
    id="agent"
    title="Aumento causado por el almacenamiento de datos del agente."
  >
    El agente de Node.js registra datos para cada transacción que maneja su aplicación. Los datos generalmente se agrupan por nombre de transacción. La memoria utilizada por el agente aumenta con el número de transacciones diferentes registradas en cada ciclo de recolección de un minuto de duración.

    Además, se guarda una mayor cantidad de datos durante cada transacción, pero finalmente se descartan cuando se completa la transacción. La memoria utilizada por el agente aumenta con el número de transacciones concurrentes manejadas por la aplicación.

    <DNT>
      **Solution:**
    </DNT>

    Si se identifica el almacenamiento de datos del agente como la causa de un aumento en el uso de la memoria, la mejor manera de solucionarlo es agregando memoria adicional a su host o cambiando a una instancia de nube más grande.
  </Collapser>
</CollapserGroup>
