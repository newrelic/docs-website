---
title: Etiquetas métricas predeterminadas y atributo métrico
tags:
  - Integrations
  - Prometheus integrations
  - Install and configure Prometheus agent
metaDescription: Default metric labels and metric attributes
freshnessValidatedDate: never
translationType: machine
---

# Etiquetas métricas [#metric-labels]

Las etiquetas son metadatos o atributos, y existen algunas fuentes de etiquetas métricas. En las siguientes tablas, consulte las fuentes de las etiquetas y cuándo se agregan:

<CollapserGroup>
  <Collapser
    id="all-targets"
    title="Todo objetivo"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Etiqueta
          </th>

          <th>
            Descripción
          </th>

          <th>
            Ejemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `prometheus_server`
          </td>

          <td>
            Nombre de la instancia de Prometheus que eliminó la métrica. Cuando lo instalas en Kubernetes, es el nombre del pod.
          </td>

          <td>
            `prometheus_server: newrelic-prometheus-agent-0`
          </td>
        </tr>

        <tr>
          <td>
            `instance`
          </td>

          <td>
            Anfitrión y puerto del objetivo raspado.
          </td>

          <td>
            `instance: 172.17.0.5:8083`
          </td>
        </tr>

        <tr>
          <td>
            `job`
          </td>

          <td>
            Nombre del trabajo de raspado que descubrió el objetivo.
          </td>

          <td>
            `job: kubernetes-job-pod`
          </td>
        </tr>

        <tr>
          <td>
            `instrumentation.name`
          </td>

          <td>
            Nombre de la instrumentación de New Relic.
          </td>

          <td>
            `instrumentation.name: remote-write`
          </td>
        </tr>

        <tr>
          <td>
            `instrumentation.provider`
          </td>

          <td>
            Nombre del proveedor de instrumentación de New Relic.
          </td>

          <td>
            `instrumentation.provider: prometheus`
          </td>
        </tr>

        <tr>
          <td>
            `instrumentation.source`
          </td>

          <td>
            Coincide con el nombre en `prometheus_server`.
          </td>

          <td>
            `instrumentation.source: newrelic-prometheus-agent-0`
          </td>
        </tr>

        <tr>
          <td>
            `instrumentation.version`
          </td>

          <td>
            Versión de la New Relic extrema de escritura remota API.
          </td>

          <td>
            `instrumentation.version: 0.0.2`
          </td>
        </tr>

        <tr>
          <td>
            `newrelic.source`
          </td>

          <td>
            Nombre de la fuente de instrumentación de New Relic.
          </td>

          <td>
            `newrelic.source: prometheusAPI`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="k8-targets"
    title="Kubernetes objetivo"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Kind
          </th>

          <th>
            Etiqueta
          </th>

          <th>
            Descripción
          </th>

          <th>
            Ejemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Pod/extremo
          </td>

          <td>
            `cluster_name`
          </td>

          <td>
            Nombre del clúster definido en la instalación.
          </td>

          <td>
            `cluster_name: my-cluster`
          </td>
        </tr>

        <tr>
          <td>
            Pod/extremo
          </td>

          <td>
            `namespace`
          </td>

          <td>
            Namespace del objetivo.
          </td>

          <td>
            `namespace: default`
          </td>
        </tr>

        <tr>
          <td>
            Pod/extremo
          </td>

          <td>
            `pod`
          </td>

          <td>
            Nombre de la pod.
          </td>

          <td>
            `pod: my-pod`
          </td>
        </tr>

        <tr>
          <td>
            Pod/extremo
          </td>

          <td>
            `node`
          </td>

          <td>
            Nombre del nodo donde se ejecuta el pod o el extremo.
          </td>

          <td>
            `node: minikube`
          </td>
        </tr>

        <tr>
          <td>
            Extremo
          </td>

          <td>
            `service`
          </td>

          <td>
            Nombre del servicio extremo.
          </td>

          <td>
            `service: my-service`
          </td>
        </tr>

        <tr>
          <td>
            Extremo
          </td>

          <td>
            `YOUR_SERVICE_LABELS`
          </td>

          <td>
            Las etiquetas Kubernetes del servicio extremo.
          </td>

          <td>
            `k8s_io_service: MyService`
          </td>
        </tr>

        <tr>
          <td>
            Pod
          </td>

          <td>
            `YOUR_POD_LABELS`
          </td>

          <td>
            Las etiquetas de Kubernetes del pod.
          </td>

          <td>
            `k8s_io_app: MyApp`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

<Callout variant="important">
  Para cumplir con el [modelo de datos de Prometheus](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), los nombres de las etiquetas de Kubernetes se desinfectan después de eliminarlos para reemplazar cualquier carácter no admitido en `_`. Por ejemplo, la etiqueta de Kubernetes `k8s.io/app` se agrega como `k8s_io_app`. Los valores de las etiquetas no se modifican.
</Callout>

# Métrica generada [#generated-metrics]

<Callout variant="tip">
  Estas métricas contienen todas las [etiquetas métricas](#metric-labels).
</Callout>

Se generan las siguientes métricas para cada objetivo raspado:

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `up`
      </td>

      <td>
        El valor será `0` si el raspado falló; de lo contrario, será `1`.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_duration_seconds`
      </td>

      <td>
        Duración del raspado.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_samples_scraped`
      </td>

      <td>
        El número de muestras que expuso el objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_samples_post_metric_relabeling`
      </td>

      <td>
        Se aplicó el número de muestras restantes después del reetiquetado métrico.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_series_added`
      </td>

      <td>
        El número aproximado de nuevas series en este scrape.
      </td>
    </tr>
  </tbody>
</table>
