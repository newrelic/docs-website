---
title: Consultar datos de Pixie
tags:
  - Pixie Auto-telemetry
  - Service monitoring
  - Kubernetes
  - eBPF
metaDescription: Learn how to query Pixie data using the query builder and NerdGraph API
freshnessValidatedDate: never
translationType: machine
---

Puede crear sus propios gráficos dashboard y [consultar](/docs/using-new-relic/data/understand-data/query-new-relic-data) sus telemetry data persistentes de Pixie utilizando el generador de consultas y la API NerdGraph.

New Relic conserva telemetry data seleccionados de Pixie para almacenamiento a largo plazo. Obtenga más información sobre el modelo de almacenamiento híbrido para la integración de New Relic Pixie [aquí](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview).

## Métrica y especificaciones

### HTTP métrica

Consulte por la duración de la solicitud HTTP entrante. Por ejemplo:

```sql
FROM Metric SELECT average(http.server.duration)
WHERE instrumentation.provider='pixie'
FACET service.name
```

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tipo de evento
      </th>

      <th>
        Métrica
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Nombre de la métrica
      </td>

      <td>
        `http.server.duration`
      </td>
    </tr>

    <tr>
      <td>
        Especificaciones
      </td>

      <td>
        [Especificación de métrica HTTP de OpenTelemetry](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/semantic_conventions/http-metrics.md)
      </td>
    </tr>

    <tr>
      <td>
        Descripción
      </td>

      <td>
        Mide la duración de la solicitud HTTP entrante.
      </td>
    </tr>

    <tr>
      <td>
        Tipo de datos OTEL
      </td>

      <td>
        `MetricDataTypeDoubleSummary` con `min(quantile=0)` y `max(quantile=1)`
      </td>
    </tr>

    <tr>
      <td>
        Unidad
      </td>

      <td>
        milisegundos
      </td>
    </tr>

    <tr>
      <td>
        Atributo requerido
      </td>

      <td>
        `service.name`
      </td>
    </tr>

    <tr>
      <td>
        Atributo estático
      </td>

      <td>
        `instrumentation.provider` = `pixie`
      </td>
    </tr>

    <tr>
      <td>
        Atributo HTTP
      </td>

      <td>
        `http.status_code`
      </td>
    </tr>

    <tr>
      <td>
        Entidad atributo
      </td>

      <td>
        `service.instance.id` <br/>`k8s.cluster.name` <br/>`k8s.namespace.name` <br/>`k8s.pod.name` <br/>`k8s.container.name`<br/>
      </td>
    </tr>
  </tbody>
</table>

### JVM métrica

Consulta para medir el tiempo transcurrido en un recolector de basura JVM determinado en milisegundos. Por ejemplo:

```sql
FROM Metric SELECT average(runtime.jvm.gc.collection)
WHERE instrumentation.provider = 'pixie' FACET service.name, gc
```

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tipo de evento
      </th>

      <th>
        Métrica
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Nombre de la métrica
      </td>

      <td>
        `runtime.jvm.gc.collection`
      </td>
    </tr>

    <tr>
      <td>
        Especificaciones
      </td>

      <td>
        [opentelemetry.jvm.gc.collection](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/instrumentation/runtime-metrics/library/src/main/java/io/opentelemetry/instrumentation/runtimemetrics/GarbageCollector.java)
      </td>
    </tr>

    <tr>
      <td>
        Descripción
      </td>

      <td>
        Tiempo empleado en un recolector de basura JVM determinado en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        Unidad
      </td>

      <td>
        milisegundos
      </td>
    </tr>

    <tr>
      <td>
        Atributo requerido
      </td>

      <td>
        `service.name`
      </td>
    </tr>

    <tr>
      <td>
        Atributo estático
      </td>

      <td>
        `instrumentation.provider` = `pixie`
      </td>
    </tr>

    <tr>
      <td>
        Atributo JVM
      </td>

      <td>
        `gc` = `young|full`
      </td>
    </tr>

    <tr>
      <td>
        Entidad atributo
      </td>

      <td>
        `service.instance.id` <br/>`k8s.cluster.name` <br/>`k8s.namespace.name` <br/>`k8s.pod.name` <br/>`k8s.container.name`<br/>
      </td>
    </tr>
  </tbody>
</table>

Consulta para conocer el número de bytes en un área de memoria JVM determinada. Por ejemplo:

```sql
FROM Metric SELECT average(runtime.jvm.memory.area)
WHERE type = 'used' AND instrumentation.provider = 'pixie'
FACET service.name
```

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tipo de evento
      </th>

      <th>
        Métrica
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Nombre de la métrica
      </td>

      <td>
        `runtime.jvm.memory.area`
      </td>
    </tr>

    <tr>
      <td>
        Especificaciones
      </td>

      <td>
        [OpenTelemetry-java-instrumentación](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/instrumentation/runtime-metrics/library/src/main/java/io/opentelemetry/instrumentation/runtimemetrics/MemoryPools.java)
      </td>
    </tr>

    <tr>
      <td>
        Descripción
      </td>

      <td>
        Bytes de un área de memoria JVM determinada.
      </td>
    </tr>

    <tr>
      <td>
        Unidad
      </td>

      <td>
        bytes
      </td>
    </tr>

    <tr>
      <td>
        Atributo requerido
      </td>

      <td>
        `service.name`
      </td>
    </tr>

    <tr>
      <td>
        Atributo estático
      </td>

      <td>
        `instrumentation.provider` = `pixie`
      </td>
    </tr>

    <tr>
      <td>
        Atributo JVM
      </td>

      <td>
        `type` = `used|total|max` <br/>`area` = `heap`<br/>
      </td>
    </tr>

    <tr>
      <td>
        Entidad atributo
      </td>

      <td>
        `service.instance.id` <br/>`k8s.cluster.name` <br/>`k8s.namespace.name` <br/>`k8s.pod.name` <br/>`k8s.container.name`<br/>
      </td>
    </tr>
  </tbody>
</table>

### Intervalo de servidor HTTP

Ejemplo de consulta:

```sql
FROM Span SELECT uniques(name)
WHERE span.kind = 'server'
AND instrumentation.provider = 'pixie'
AND service.name = 'orders'
```

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Especificaciones
      </th>

      <th>
        Convenciones semánticas para tramos HTTP
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tipo de evento
      </td>

      <td>
        Durar
      </td>
    </tr>

    <tr>
      <td>
        Atributo requerido
      </td>

      <td>
        `name` = `normalized HTTP path` <br/>`service.name` <br/>`trace.id` <br/>`span.id`<br/>
      </td>
    </tr>

    <tr>
      <td>
        Atributo estático
      </td>

      <td>
        `span.kind` = `server` <br/>`instrumentation.provider` = `pixie`<br/>
      </td>
    </tr>

    <tr>
      <td>
        Atributo HTTP
      </td>

      <td>
        `http.host` <br/>`http.method` <br/>`http.path` <br/>`http.status_code` <br/>`http.url` <br/>`http.user_agent`<br/>
      </td>
    </tr>
  </tbody>
</table>
