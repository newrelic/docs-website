---
title: Consulte dados do Pixie
tags:
  - Pixie Auto-telemetry
  - Service monitoring
  - Kubernetes
  - eBPF
metaDescription: Learn how to query Pixie data using the query builder and NerdGraph API
freshnessValidatedDate: never
translationType: machine
---

Você pode construir seus próprios gráficos dashboard e [consultar](/docs/using-new-relic/data/understand-data/query-new-relic-data) seus dados de telemetria Pixie persistentes usando o criador de consulta e a API NerdGraph.

A New Relic persiste em dados de telemetria Pixie selecionados para armazenamento de longo prazo. Saiba mais sobre o modelo de armazenamento híbrido para integração do New Relic Pixie [aqui](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview).

## Métricas e especificações

### Métrica HTTP

Consulte a duração da solicitação HTTP de entrada. Por exemplo:

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
        Nome da métrica
      </td>

      <td>
        `http.server.duration`
      </td>
    </tr>

    <tr>
      <td>
        Especificações
      </td>

      <td>
        [Especificação de métrica HTTP OpenTelemetry](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/semantic_conventions/http-metrics.md)
      </td>
    </tr>

    <tr>
      <td>
        Descrição
      </td>

      <td>
        Mede a duração da solicitação HTTP de entrada.
      </td>
    </tr>

    <tr>
      <td>
        Tipo de dados OTEL
      </td>

      <td>
        `MetricDataTypeDoubleSummary` com `min(quantile=0)` e `max(quantile=1)`
      </td>
    </tr>

    <tr>
      <td>
        Unidade
      </td>

      <td>
        milissegundos
      </td>
    </tr>

    <tr>
      <td>
        Atributo obrigatório
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
        Entidade atributo
      </td>

      <td>
        `service.instance.id` <br/>`k8s.cluster.name` <br/>`k8s.namespace.name` <br/>`k8s.pod.name` <br/>`k8s.container.name`<br/>
      </td>
    </tr>
  </tbody>
</table>

### Métrica JVM

Consulta para medir o tempo gasto em um determinado coletor de lixo JVM em milissegundos. Por exemplo:

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
        Nome da métrica
      </td>

      <td>
        `runtime.jvm.gc.collection`
      </td>
    </tr>

    <tr>
      <td>
        Especificações
      </td>

      <td>
        [opentelemetry.jvm.gc.collection](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/instrumentation/runtime-metrics/library/src/main/java/io/opentelemetry/instrumentation/runtimemetrics/GarbageCollector.java)
      </td>
    </tr>

    <tr>
      <td>
        Descrição
      </td>

      <td>
        Tempo gasto em um determinado coletor de lixo JVM em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        Unidade
      </td>

      <td>
        milissegundos
      </td>
    </tr>

    <tr>
      <td>
        Atributo obrigatório
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
        Entidade atributo
      </td>

      <td>
        `service.instance.id` <br/>`k8s.cluster.name` <br/>`k8s.namespace.name` <br/>`k8s.pod.name` <br/>`k8s.container.name`<br/>
      </td>
    </tr>
  </tbody>
</table>

Consulta para descobrir o número de bytes em uma determinada área de memória JVM . Por exemplo:

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
        Nome da métrica
      </td>

      <td>
        `runtime.jvm.memory.area`
      </td>
    </tr>

    <tr>
      <td>
        Especificações
      </td>

      <td>
        [OpenTelemetry-java-instrumentação](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/instrumentation/runtime-metrics/library/src/main/java/io/opentelemetry/instrumentation/runtimemetrics/MemoryPools.java)
      </td>
    </tr>

    <tr>
      <td>
        Descrição
      </td>

      <td>
        Bytes de uma determinada área de memória JVM.
      </td>
    </tr>

    <tr>
      <td>
        Unidade
      </td>

      <td>
        bytes
      </td>
    </tr>

    <tr>
      <td>
        Atributo obrigatório
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
        Entidade atributo
      </td>

      <td>
        `service.instance.id` <br/>`k8s.cluster.name` <br/>`k8s.namespace.name` <br/>`k8s.pod.name` <br/>`k8s.container.name`<br/>
      </td>
    </tr>
  </tbody>
</table>

### Extensão do servidor HTTP

Exemplo de consulta:

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
        Especificações
      </th>

      <th>
        Convenções semânticas para extensões HTTP
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tipo de evento
      </td>

      <td>
        Período
      </td>
    </tr>

    <tr>
      <td>
        Atributo obrigatório
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
