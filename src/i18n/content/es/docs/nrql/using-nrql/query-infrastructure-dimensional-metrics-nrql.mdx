---
title: Utilice dimensional métrica para consultar más datos
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'Learn how dimensional metrics work for infrastructure data, and how to query them.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

<Callout title="PREVISUALIZAR característica">
  Esta característica se encuentra actualmente en versión preliminar.
</Callout>

[Las métricas dimensionales](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) son un estándar de la industria para almacenar y consultar datos métricos. New Relic almacena toda la infraestructura métrica [como datos de eventos](/docs/data-apis/understand-data/new-relic-data-types/#metric-event-attributes), pero también puedes consultarlos como dimensional métrica.

En New Relic, informamos [métrica](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics) de varias maneras, incluida [la métrica dimensional](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics), que nuestra API métrica, el SDK de telemetría, algunas integraciones de código abierto y nuestros servicios de infraestructura pueden utilizar.

Este tipo de métrica le permite:

* Disfrute de una experiencia de consulta mejorada para datos de infraestructura.
* Descubre todas tus métricas en un solo lugar.
* Utilice fuentes más métricas, como [Prometheus](/docs/integrations/prometheus-integrations/get-started/new-relic-prometheus-openmetrics-integration-kubernetes).

Por ejemplo, puedes utilizar la siguiente consulta para obtener la duración máxima de tu función Lambda:

<table>
  <tbody>
    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with samples**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM ServerlessSample
        SELECT max(provider.duration.Maximum)
        WHERE provider = 'LambdaFunction'
        ```
      </td>
    </tr>

    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with metrics**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM Metric
        SELECT max(aws.lambda.function.duration)
        ```
      </td>
    </tr>
  </tbody>
</table>

## Empezar [#compatibility-reqs]

No necesita ningún agente ni actualizaciones de integración para utilizar estas métricas. Admitimos [alertas NRQL](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) basadas en métricas dimensionales, excepto para datos provenientes de integración en la nube (como métricas de [AWS polling integración](/docs/infrastructure/amazon-integrations/aws-integrations-list), [GCP](/docs/integrations/google-cloud-platform-integrations) y [Azure](/docs/integrations/microsoft-azure-integrations/azure-integrations-list)). New Relic ingiere AWS CloudWatch Metric Streams métrica como métrica dimensional, y le recomendamos utilizar NRQL <InlinePopover type="alerts"/>en estos casos.

## Dónde y cómo consultar dimensional métrica [#where]

New Relic admite todas [las características de consulta NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions) actuales. Puede utilizar `WHERE`, `FACET` y funciones de selección de tiempo como `SINCE`, `UNTIL` y `COMPARE WITH` para realizar consultas.

## Convenciones de nomenclatura para métrica y atributo [#naming-conventions]

Todos los nombres de métricas y atributos para métrica dimensional siguen la misma convención de nomenclatura para que sean fáciles de encontrar y usar. Los nombres de métrica y atributo tienen espacios de nombres con puntos: por ejemplo, el prefijo `host.` se usa para host métrica, el prefijo `k8s.` se usa para Kubernetes métrica y `aws.` se usa para AWS métrica.

El siguiente gráfico muestra cómo un `ProcessSample` que contiene tres métricas (`cpuPercent`, `ioTotalReadBytes` y `ioTotalWriteBytes`) se divide en tres métricas separadas. Tenga en cuenta la denominación actualizada de la métrica y el atributo.

<img
  title="naming-convention.png"
  alt="naming-convention.png"
  src="/images/queries-nrql_diagram_dimensional-metrics-naming-convention.webp"
/>

<figcaption>
  Convención de nomenclatura métrica dimensional
</figcaption>

## Diferencias en consulta dimensional métrica y evento [#known-limitations]

Las métricas dimensionales son un tipo de datos fundamentalmente diferente en comparación con los datos de eventos. A continuación, encontrarás algunas diferencias notables al realizar consultas dimensionales métricas:

* Métrica consulta con `*` no devuelve [datos de muestra de infraestructura](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events). Por ejemplo:

  ```sql
  SELECT * FROM Metric
  ```

* Métrica consulta con `metricName LIKE` no devuelve datos de muestra de infraestructura. Por ejemplo:

  ```sql
  SELECT uniques(metricName) FROM Metric where metricName like 'k8%'
  ```

* Para seleccionar un atributo que comience con `tags.` se debe proporcionar un nombre de métrica. Por ejemplo, esto no funciona sin la cláusula `WHERE` :

  ```sql
  SELECT uniques(tags.environment) FROM Metric WHERE metricName='aws.lambda.function.duration'
  ```

* Es posible que los resultados no estén completos si los criterios de selección coinciden con demasiadas muestras. Por ejemplo, esta consulta se asigna a todos los ejemplos de infraestructura y puede devolver resultados incompletos:

  ```sql
  SELECT uniqueCount(entity.guid) FROM Metric
  ```

* No admitimos la característica comodín métrica recientemente introducida, por ejemplo:

  ```sql
  SELECT average(host.swap%Bytes) FROM Metric
  ```

* [Las funciones](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#functions) utilizadas en múltiples métricas pueden fallar o devolver resultados incorrectos, por ejemplo:

  ```sql
  FROM Metric SELECT latest(metricNameA + metricNameB)
  ```

* Cuando incluye `RAW` en una consulta, la solicitud se transforma internamente e imprime datos de eventos agregados equivalentes. No imprimirá datos sin procesar. Consulte la consulta de ejemplo para ver este comportamiento:

  ```sql
  SELECT max(host.cpuPercent) FROM Metric TIMESERIES 1 MINUTE SINCE 60 MINUTES AGO RAW
  ```

* No admitimos el uso de `keyset` con `TIMESERIES` y, al hacerlo, se devolverá un error. Vea el ejemplo a continuación:

  ```sql
  FROM Metric SELECT keyset() WHERE instrumentation.provider = 'infrastructure' TIMESERIES
  ```

Para obtener una descripción general de las diferencias en los tipos de datos, consulte [Tipos de datos de New Relic](/docs/data-apis/understand-data/new-relic-data-types).

## Ejemplos de consulta dimensional [#query-examples]

A continuación se muestran algunos ejemplos de consulta NQRL con y sin dimensional métrica:

<CollapserGroup>
  <Collapser
    id="example-aws-ebs"
    title="Ejemplo de consulta de AWS EBS"
  >
    Obtenga el tiempo total de escritura por volumen de EBS:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM BlockDeviceSample
            SELECT sum('provider.volumeTotalWriteTime.Sum')
            WHERE provider = 'EbsVolume'
            FACET entityName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(aws.ebs.volume.TotalWriteTime)
            FACET entity.name
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-service-bus"
    title="Ejemplo de consulta del bus de servicio de Azure"
  >
    Número máximo de mensajes en un tema de Azure Service Bus por grupo de recursos:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureServiceBusTopicSample
            SELECT max(activeMessages.Maximum)
            FACET resourceGroupName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(azure.servicebus.topic.activeMessages)
            FACET azure.resourceGroup
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-functions"
    title="Ejemplo de consulta Azure Functions"
  >
    Número de ejecuciones de funciones de Azure Functions en las últimas 6 horas por región a lo largo del tiempo:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureFunctionsAppSample
            SELECT sum(functionExecutionCount.Total)
            FACET regionName
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(azure.functions.app.functionExecutionCount)
            FACET azure.region
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-vm"
    title="Ejemplo de consulta de máquina virtual (VM) de Azure"
  >
    Compare la cantidad de máquinas virtuales (VM) de Azure durante los últimos treinta minutos con la misma hora hace una semana:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureVirtualMachineScaleSetSample
            SELECT uniqueCount(vMName)
            FACET name
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT uniqueCount(azure.vms.vmName)
            FACET azure.resourceName
            WHERE azure.resourceType='Microsoft.Compute/virtualMachineScaleSets'
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-nginx"
    title="Ejemplo de consulta NGINX"
  >
    El número promedio de solicitudes NGINX por segundo a lo largo del tiempo:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM NginxSample
            SELECT average(net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT average(nginx.server.net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-mysql"
    title="Ejemplo de consulta MySQL"
  >
    El número máximo de conexiones MySQL utilizadas:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM MysqlSample
            SELECT max(net.maxUsedConnections)
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(mysql.node.net.maxUsedConnections)
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
