---
title: Integración de monitoreo de Amazon Elasticsearch
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon Elasticsearch monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar datos de Amazon Elasticsearch a New Relic. Este documento explica la característica de la integración, cómo activarla y qué datos se pueden reportar.

## Característica [#features]

[Amazon Elasticsearch Service](https://aws.amazon.com/elasticsearch-service/) es un servicio completamente administrado que ofrece API fácil de usar de Elasticsearch y capacidades en tiempo real junto con la disponibilidad, escalabilidad y seguridad requeridas por la carga de trabajo de producción. La integración de monitoreo Elasticsearch de New Relic le permite rastrear el estado del clúster, la utilización de la CPU, la latencia de lectura/escritura, el rendimiento y otras métricas, en momentos específicos. Los datos de Elasticsearch también están disponibles [para consultar, analizar y representar gráficamente sus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/).

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de Amazon Elasticsearch:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto

## Ver y usar datos [#find-data]

Para [ver y utilizar](/docs/integrations/infrastructure-integrations/get-started/understand-use-data-infrastructure-integrations/) los datos de esta integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de Elasticsearch.

Para [consultar y explorar sus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data), utilice el tipo de evento `DatastoreSample` con el valor `provider` apropiado:

* `ElasticsearchCluster` para cluster
* `ElasticsearchNode` para nodos

## Datos métricos [#metrics]

La integración Elasticsearch recoge estas métricas para clúster:

<table>
  <thead>
    <tr>
      <th style={{ width: "255px" }}>
        Nombre
      </th>

      <th style={{ width: "180px" }}>
        Estadísticas relevantes
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ClusterStatus.green`
      </td>

      <td>
        Mínimo máximo
      </td>

      <td>
        Indica que todos los fragmentos de índice se asignan a nodos del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ClusterStatus.yellow`
      </td>

      <td>
        Mínimo máximo
      </td>

      <td>
        Indica que los fragmentos principales de todos los índices se asignan a nodos de un clúster, pero los fragmentos de réplica de al menos un índice no. El clúster de un solo nodo siempre se inicializa con este estado de clúster porque no hay un segundo nodo al que se pueda asignar una réplica.

        Puede aumentar el recuento de nodos para obtener un estado de clúster verde o puede utilizar la API de Amazon ES para establecer la configuración `number_of_replicas` de su índice en 0. Para obtener más información, consulte la documentación de Amazon para [Actualizar la configuración de índices](https://www.elastic.co/guide/en/elasticsearch/reference/1.4/indices-update-settings.html).
      </td>
    </tr>

    <tr>
      <td>
        `ClusterStatus.red`
      </td>

      <td>
        Mínimo máximo
      </td>

      <td>
        Indica que los fragmentos principal y de réplica de al menos un índice no están asignados a nodos en un clúster. Para obtener más información, consulte la documentación de Amazon sobre [el estado del clúster rojo](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-handling-errors.html#aes-handling-errors-red-cluster-status).
      </td>
    </tr>

    <tr>
      <td>
        `Nodes`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        La cantidad de nodos en el clúster de Amazon ES.
      </td>
    </tr>

    <tr>
      <td>
        `SearchableDocuments`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El número total de documentos que se pueden buscar en todos los índices del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `DeletedDocuments`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El número total de documentos eliminados en todos los índices del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `CPUUtilization`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El porcentaje máximo de recursos de CPU utilizados para los nodos de datos del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `FreeStorageSpace`
      </td>

      <td>
        Mínimo
      </td>

      <td>
        El espacio libre, en megabytes, para todos los nodos de datos del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ClusterUsedSpace`
      </td>

      <td>
        Mínimo máximo
      </td>

      <td>
        El espacio total utilizado, en megabytes, para un clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ClusterIndexWritesBlocked`
      </td>

      <td>
        Máximo
      </td>

      <td>
        Indica si su clúster acepta o bloquea solicitudes de escritura entrantes. Un valor de 0 significa que el clúster acepta solicitudes. Un valor de 1 significa que está bloqueando solicitudes.
      </td>
    </tr>

    <tr>
      <td>
        `JVMMemoryPressure`
      </td>

      <td>
        Máximo
      </td>

      <td>
        El porcentaje máximo del montón de Java utilizado para todos los nodos de datos del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `AutomatedSnapshotFailure`
      </td>

      <td>
        Mínimo máximo
      </td>

      <td>
        La cantidad de instantáneas automatizadas fallidas para el clúster. Un valor de 1 indica que no se tomó ninguna instantánea automática para el dominio en las 36 horas anteriores.
      </td>
    </tr>

    <tr>
      <td>
        `CPUCreditBalance`
      </td>

      <td>
        Mínimo
      </td>

      <td>
        Los créditos de CPU restantes están disponibles para los nodos de datos del clúster. Un crédito de CPU proporciona el rendimiento de un núcleo de CPU completo durante un minuto. Esta métrica está disponible solo para t2.micro.elasticsearch, t2.small.elasticsearch, y t2.medium.elasticsearch tipo de instancia.
      </td>
    </tr>

    <tr>
      <td>
        `KibanaHealthyNodes`
      </td>

      <td>
        Mínimo
      </td>

      <td>
        Un control de salud para Kibana. Un valor de 1 indica un comportamiento normal. Un valor de 0 indica que Kibana es inaccesible. En la mayoría de los casos, el estado de Kibana refleja el estado del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `KMSKeyError`
      </td>

      <td>
        Mínimo máximo
      </td>

      <td>
        Un valor de 1 indica que la clave maestra de los clientes de KMS utilizada para cifrar datos en reposo se ha deshabilitado. Para restaurar el dominio a sus operaciones normales, vuelva a habilitar la clave.
      </td>
    </tr>

    <tr>
      <td>
        `KMSKeyInaccessible`
      </td>

      <td>
        Mínimo máximo
      </td>

      <td>
        Un valor de 1 indica que la clave maestra de los clientes de KMS utilizada para cifrar datos en reposo se eliminó o se revocaron sus concesiones a Amazon ES. No se pueden recuperar dominios que se encuentren en este estado. Sin embargo, si tiene una instantánea manual, puede usarla para migrar los datos del dominio a un nuevo dominio.
      </td>
    </tr>

    <tr>
      <td>
        `InvalidHostHeaderRequests`
      </td>

      <td>
        Suma
      </td>

      <td>
        La cantidad de solicitudes HTTP realizadas al clúster de Elasticsearch que incluían un encabezado de host no válido (o faltante).
      </td>
    </tr>

    <tr>
      <td>
        `ElasticsearchRequests`
      </td>

      <td>
        Suma
      </td>

      <td>
        La cantidad de solicitudes realizadas al clúster de Elasticsearch.
      </td>
    </tr>

    <tr>
      <td>
        `RequestCount`
      </td>

      <td>
        Suma
      </td>

      <td>
        La cantidad de solicitudes a un dominio y el código de respuesta HTTP (2xx, 3xx, 4xx, 5xx) para cada solicitud.
      </td>
    </tr>

    <tr>
      <td>
        `MasterCPUUtilization`
      </td>

      <td>
        Promedio
      </td>

      <td>
        El porcentaje máximo de recursos de CPU utilizados por los nodos maestros dedicados. Recomendamos aumentar el tamaño del tipo de instancia cuando esta métrica alcance el 60 por ciento.
      </td>
    </tr>

    <tr>
      <td>
        `MasterJVMMemoryPressure`
      </td>

      <td>
        Máximo
      </td>

      <td>
        El porcentaje máximo del montón de Java utilizado para todos los nodos maestros dedicados del clúster. Recomendamos pasar a un tipo de instancia más grande cuando esta métrica alcance el 85 por ciento.
      </td>
    </tr>

    <tr>
      <td>
        `MasterCPUCreditBalance`
      </td>

      <td>
        Mínimo
      </td>

      <td>
        Los créditos de CPU restantes están disponibles para los nodos maestros dedicados en el clúster. Un crédito de CPU proporciona el rendimiento de un núcleo de CPU completo durante un minuto. Esta métrica está disponible solo para t2.micro.elasticsearch, t2.small.elasticsearch, y t2.medium.elasticsearch tipo de instancia.
      </td>
    </tr>

    <tr>
      <td>
        `MasterReachableFromNode`
      </td>

      <td>
        Mínimo
      </td>

      <td>
        Un control de estado para `MasterNotDiscovered` excepciones. Un valor de 1 indica un comportamiento normal. Un valor de 0 indica que `/_cluster/health/` está fallando.

        Las fallas significan que el nodo maestro se detuvo o no se puede acceder a él. Por lo general, son el resultado de un problema de conectividad de red o de dependencia de AWS.
      </td>
    </tr>

    <tr>
      <td>
        `ReadLatency`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        La latencia, en segundos, para operaciones de lectura en volúmenes de EBS.
      </td>
    </tr>

    <tr>
      <td>
        `WriteLatency`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        La latencia, en segundos, para operaciones de escritura en volúmenes de EBS.
      </td>
    </tr>

    <tr>
      <td>
        `ReadThroughput`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El rendimiento, en bytes por segundo, para operaciones de lectura en volúmenes de EBS.
      </td>
    </tr>

    <tr>
      <td>
        `WriteThroughput`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El rendimiento, en bytes por segundo, para operaciones de escritura en volúmenes de EBS.
      </td>
    </tr>

    <tr>
      <td>
        `DiskQueueDepth`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El número de solicitudes de entrada y salida (E/S) pendientes para un volumen de EBS.
      </td>
    </tr>

    <tr>
      <td>
        `ReadIOPS`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El número de operaciones de entrada y salida (E/S) por segundo para operaciones de lectura en volúmenes de EBS.
      </td>
    </tr>

    <tr>
      <td>
        `WriteIOPS`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El número de operaciones de entrada y salida (E/S) por segundo para operaciones de escritura en volúmenes de EBS.
      </td>
    </tr>
  </tbody>
</table>

Se recopilan las siguientes métricas para el clúster Elasticsearch, y opcionalmente también para cada instancia o nodo en un dominio:

<table>
  <thead>
    <tr>
      <th style={{ width: "255px" }}>
        Nombre
      </th>

      <th style={{ width: "180px" }}>
        Estadísticas relevantes
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `IndexingLatency`
      </td>

      <td>
        Para nodos: promedio

        Para clúster: Promedio, Máximo
      </td>

      <td>
        El tiempo promedio, en milisegundos, que le toma a un fragmento completar una operación de indexación.
      </td>
    </tr>

    <tr>
      <td>
        `IndexingRate`
      </td>

      <td>
        Para nodos: promedio

        Para clúster: Promedio, Máximo, Suma
      </td>

      <td>
        El número de operaciones de indexación por minuto.
      </td>
    </tr>

    <tr>
      <td>
        `SearchLatency`
      </td>

      <td>
        Para nodos: promedio

        Para clúster: Promedio, Máximo
      </td>

      <td>
        El tiempo promedio, en milisegundos, que le toma a un fragmento completar una operación de búsqueda.
      </td>
    </tr>

    <tr>
      <td>
        `SearchRate`
      </td>

      <td>
        Para nodos: promedio

        Para clúster: Promedio, Máximo, Suma
      </td>

      <td>
        El número total de solicitudes de búsqueda por minuto para todos los fragmentos de un nodo.
      </td>
    </tr>

    <tr>
      <td>
        `SysMemoryUtilization`
      </td>

      <td>
        Mínimo, Máximo, Promedio
      </td>

      <td>
        El porcentaje de la memoria de la instancia que está en uso.
      </td>
    </tr>

    <tr>
      <td>
        `JVMGCYoungCollectionCount`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        El número de veces que se ha realizado la recolección de basura de la "generación joven". Una cantidad grande y cada vez mayor de ejecuciones es una parte normal de las operaciones del clúster.
      </td>
    </tr>

    <tr>
      <td>
        `JVMGCYoungCollectionTime`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        La cantidad de tiempo, en milisegundos, que el clúster ha dedicado a realizar la recolección de basura de "generación joven".
      </td>
    </tr>

    <tr>
      <td>
        `JVMGCOldCollectionCount`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        El número de veces que se ha ejecutado la recolección de basura de "vieja generación". En un clúster con recursos suficientes, este número debería seguir siendo pequeño y crecer con poca frecuencia.
      </td>
    </tr>

    <tr>
      <td>
        `JVMGCOldCollectionTime`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        La cantidad de tiempo, en milisegundos, que el clúster ha dedicado a realizar la recolección de basura de "antigua generación".
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolForce_mergeQueue`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        El número de tareas en cola en el grupo de subprocesos de fusión forzada. Si el tamaño de la cola es constantemente alto, considere ampliar su clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolForce_mergeRejected`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma
      </td>

      <td>
        El número de tareas rechazadas en el grupo de subprocesos de fusión forzada. Si este número crece continuamente, considere ampliar su clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolForce_mergeThreads`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, promedio
      </td>

      <td>
        El tamaño del grupo de subprocesos de fusión forzada.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolIndexQueue`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        El número de tareas en cola en el grupo de subprocesos de índice. Si el tamaño de la cola es constantemente alto, considere ampliar su clúster. El tamaño máximo de la cola de índice es 200.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolIndexRejected`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma
      </td>

      <td>
        El número de tareas rechazadas en el grupo de subprocesos de índice. Si este número crece continuamente, considere ampliar su clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolIndexThreads`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, promedio
      </td>

      <td>
        El tamaño del grupo de subprocesos de índice.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolSearchQueue`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        El número de tareas en cola en el grupo de subprocesos de búsqueda. Si el tamaño de la cola es constantemente alto, considere ampliar su clúster. El tamaño máximo de la cola de búsqueda es 1000.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolSearchRejected`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma
      </td>

      <td>
        El número de tareas rechazadas en el grupo de hilos de búsqueda. Si este número crece continuamente, considere ampliar su clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolSearchThreads`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, promedio
      </td>

      <td>
        El tamaño del grupo de hilos de búsqueda.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolBulkQueue`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, máximo, promedio
      </td>

      <td>
        El número de tareas en cola en el grupo de subprocesos masivos. Si el tamaño de la cola es constantemente alto, considere ampliar su clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolBulkRejected`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma
      </td>

      <td>
        El número de tareas rechazadas en el grupo de subprocesos masivos. Si este número crece continuamente, considere ampliar su clúster.
      </td>
    </tr>

    <tr>
      <td>
        `ThreadpoolBulkThreads`
      </td>

      <td>
        Para nodos: Máximo

        Para clúster: suma, promedio
      </td>

      <td>
        El tamaño del grupo de subprocesos masivos.
      </td>
    </tr>
  </tbody>
</table>
