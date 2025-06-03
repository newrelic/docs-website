---
title: Rótulos métricos padrão e atributo métrico
tags:
  - Integrations
  - Prometheus integrations
  - Install and configure Prometheus agent
metaDescription: Default metric labels and metric attributes
freshnessValidatedDate: never
translationType: machine
---

# Rótulos métricos [#metric-labels]

Os rótulos são metadados ou atributo, e existem algumas fontes de rótulos métricos. Nas tabelas a seguir, veja as fontes dos rótulos e quando eles são adicionados:

<CollapserGroup>
  <Collapser
    id="all-targets"
    title="Todo o destino"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Rótulo
          </th>

          <th>
            Descrição
          </th>

          <th>
            Exemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `prometheus_server`
          </td>

          <td>
            Nome da instância do Prometheus que eliminou a métrica. Quando você instala no Kubernetes, é o nome do pod.
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
            Host e porta do destino copiado.
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
            Nome do trabalho de raspagem que descobriu o destino.
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
            Nome da instrumentação New Relic.
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
            Nome do fornecedor de instrumentação da New Relic.
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
            Corresponde ao nome em `prometheus_server`.
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
            Versão da API de endpoint de gravação remota New Relic.
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
            Nome da fonte de instrumentação do New Relic.
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
    title="Destino Kubernetes"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Tipo
          </th>

          <th>
            Rótulo
          </th>

          <th>
            Descrição
          </th>

          <th>
            Exemplo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Pod/ponto final
          </td>

          <td>
            `cluster_name`
          </td>

          <td>
            Nome do cluster definido na instalação.
          </td>

          <td>
            `cluster_name: my-cluster`
          </td>
        </tr>

        <tr>
          <td>
            Pod/ponto final
          </td>

          <td>
            `namespace`
          </td>

          <td>
            Namespace do destino.
          </td>

          <td>
            `namespace: default`
          </td>
        </tr>

        <tr>
          <td>
            Pod/ponto final
          </td>

          <td>
            `pod`
          </td>

          <td>
            Nome do pod.
          </td>

          <td>
            `pod: my-pod`
          </td>
        </tr>

        <tr>
          <td>
            Pod/ponto final
          </td>

          <td>
            `node`
          </td>

          <td>
            Nome do nó onde o pod ou endpoint está em execução.
          </td>

          <td>
            `node: minikube`
          </td>
        </tr>

        <tr>
          <td>
            Ponto final
          </td>

          <td>
            `service`
          </td>

          <td>
            Nome do serviço de terminal.
          </td>

          <td>
            `service: my-service`
          </td>
        </tr>

        <tr>
          <td>
            Ponto final
          </td>

          <td>
            `YOUR_SERVICE_LABELS`
          </td>

          <td>
            Os rótulos Kubernetes do serviço de endpoint.
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
            Os rótulos do Kubernetes do pod.
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
  Para estar em conformidade com o [Prometheus DataModel](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), os nomes dos rótulos do Kubernetes são limpos após serem copiados para substituir qualquer caractere não suportado em `_`. Por exemplo, o rótulo Kubernetes `k8s.io/app` é adicionado como `k8s_io_app`. Os valores do rótulo não são modificados.
</Callout>

# Métrica gerada [#generated-metrics]

<Callout variant="tip">
  Estas métricas contêm todos os [rótulos métricos](#metric-labels).
</Callout>

As seguintes métricas são geradas para cada destino raspado:

<table>
  <thead>
    <tr>
      <th style={{ width: "400px" }}>
        Métrica
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `up`
      </td>

      <td>
        O valor será `0` se a coleta falhar, caso contrário será `1`.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_duration_seconds`
      </td>

      <td>
        Duração do arranhão.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_samples_scraped`
      </td>

      <td>
        O número de amostras que o destino expôs.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_samples_post_metric_relabeling`
      </td>

      <td>
        O número de amostras restantes após a aplicação da nova rotulagem métrica.
      </td>
    </tr>

    <tr>
      <td>
        `scrape_series_added`
      </td>

      <td>
        O número aproximado de novas séries nesta raspagem.
      </td>
    </tr>
  </tbody>
</table>
