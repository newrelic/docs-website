---
title: Integração Apache Flink
tags:
  - Integrations
  - Configure Prometheus OpenMetrics for Flink
  - Apache Flink integration on New Relic
metaDescription: Get a dashboard of all your most important Flink metrics with our quickstart.
freshnessValidatedDate: never
translationType: machine
---

Com nosso dashboard Apache Flink, você pode rastrear facilmente seu log, ficar de olho nas fontes de instrumentação e obter uma visão geral do tempo de operação e do período de inatividade de toda a instância do seu aplicativo. Desenvolvido com nosso agente de infraestrutura e nossa integração Prometheus OpenMetrics, o Flink <InlinePopover type="dashboards"/>aproveita a raspagem endpoint OpenMetrics para que você possa visualizar todos os seus dados mais importantes, em local completo.

<img
  src="/images/dashboards_screenshot-full_apache-flink-quickstart.webp"
  title="Apache Flink dashboard landing page"
  alt="A screenshot of a dashboard with Apache Flink metrics."
/>

<figcaption>
  Depois de configurar o Flink com New Relic, seus dados serão exibidos em um painel como este, pronto para uso.
</figcaption>

## Instalar o agente de infraestrutura [#install]

Antes de colocar os dados do Flink no New Relic, primeiro instale nosso agente de infraestrutura e depois exponha sua métrica instalando o Prometheus OpenMetrics.

Existem duas maneiras de instalar nosso agente de infraestrutura:

* Através de nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=5e236fa2-fbfd-1f53-e55d-9241d2a73068).
* Instale o agente de infraestrutura [manualmente](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), através da linha de comando.

## Configure o Apache Flink para expor métricas [#expose-apache-flink-metrics]

Você precisará do arquivo jar do Apache Flink prometheus para expor a métrica em uma porta configurada. Idealmente, ao baixar o Apache Flink, o arquivo denominado `flink-metrics-prometheus-VERSION.jar` será colocado no caminho abaixo.

Caminho de arquivo: `FLINK-DIRECTORY/plugins/metrics-prometheus/`

Atualize o arquivo de configuração do flink para expor métrica nas portas 9250 a 9260

Caminho do arquivo de configuração do Apache Flink: `FLINK-DIRECTORY/conf/flink-conf.yaml`

```yml
metrics.reporters: prom
metrics.reporter.prom.class: org.apache.flink.metrics.prometheus.PrometheusReporter
metrics.reporter.prom.factory.class: org.apache.flink.metrics.prometheus.PrometheusReporterFactory
metrics.reporter.prom.host: localhost
metrics.reporter.prom.port: 9250-9260
```

Siga o comando abaixo para iniciar um cluster Apache Flink

```bash
./bin/start-cluster.sh
```

Agora você deve conseguir ver as métricas nos URLs abaixo

* Métrica do gerente de trabalho

```yml
http://YOUR_DOMAIN:9250
```

* Métrica do gerenciador de tarefas

```yml
http://YOUR_DOMAIN:9251
```

Você também pode verificar se há outras portas do gerenciador de tarefas em execução no seu PC executando o comando abaixo:

```yml
sudo lsof -i -P -n | grep LISTEN
```

## Configurar `nri-prometheus` para Apache Flink [#configure]

Primeiro, crie um arquivo chamado `nri-prometheus-config.yml` no caminho abaixo

Caminho: `/etc/newrelic-infra/integrations.d`

Agora, atualize os campos listados abaixo:

* cluster_name: "YOUR_DESIRED_CLUSTER_NAME", por exemplo: `cluster_name: "apache_flink"`
* urls: \["http&#x3A;//YOUR_DOMAIN:9250", "http&#x3A;//YOUR_DOMAIN:9251"], por exemplo: `urls: ["http://localhost:9250", "http://localhost:9251"]`

Seu arquivo `nri-prometheus-config.yml` deverá ficar assim:

```yml
integrations:
  - name: nri-prometheus
    config:
      standalone: false
      # Defaults to true. When standalone is set to `false`, `nri-prometheus` requires an infrastructure agent to send data.
      emitters: infra-sdk
      # When running with infrastructure agent emitters will have to include infra-sdk
      cluster_name: "YOUR_DESIRED_CLUSTER_NAME"
      # Match the name of your cluster with the name seen in New Relic. 
      targets:
        - description: "YOUR_DESIRED_DESCRIPTION_HERE"
          urls: ["http://YOUR_DOMAIN:9250", "http://YOUR_DOMAIN:9251"]
      #    tls_config:
      #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
      #      cert_file_path: "/etc/etcd/etcd-client.crt"
      #      key_file_path: "/etc/etcd/etcd-client.key"

      verbose: false
      # Defaults to false. This determines whether or not the integration should run in verbose mode.
      audit: false
      # Defaults to false and does not include verbose mode. Audit mode logs the uncompressed data sent to New Relic and can lead to a high log volume.
      # scrape_timeout: "YOUR_TIMEOUT_DURATION"
      # `scrape_timeout` is not a mandatory configuration and defaults to 30s. The HTTP client timeout when fetching data from endpoints.
      scrape_duration: "5s"
      # worker_threads: 4
      # `worker_threads` is not a mandatory configuration and defaults to `4` for clusters with more than 400 endpoints. Slowly increase the worker thread until scrape time falls between the desired `scrape_duration`. Note: Increasing this value too much results in huge memory consumption if too many metrics are scraped at once.
      insecure_skip_verify: false
      # Defaults to false. Determins if the integration should skip TLS verification or not.
    timeout: 10s
```

## Configurar manualmente o encaminhamento de logs [#logs]

Você pode usar nossa documentação [de encaminhamento de logs](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para encaminhar log específico do aplicativo para New Relic.

Ao instalar o agente de infraestrutura nas máquinas Linux, seu arquivo de log denominado `logging.yml` deverá estar presente neste caminho: `/etc/newrelic-infra/logging.d/`.

Se você não encontrar seu arquivo de log no caminho acima, será necessário criar um arquivo de log seguindo a documentação de encaminhamento de logs acima.

Aqui está um exemplo do nome do log que será semelhante ao abaixo:

```yml
- name: flink-u1-taskexecutor-0-u1-VirtualBox.log
```

Adicione o script abaixo ao arquivo `logging.yml` para enviar o log do Apache Flink para New Relic.

```yml
logs:
  - name: flink-<REST_OF_THE_FILE_NAME>.log 
    file: <FLINK-DIRECTORY>/log/flink-<REST_OF_THE_FILE_NAME>.log
    attributes:
      logtype: flink_logs
```

## Reinicie o agente New Relic Infrastructure [#restart-infrastructure-agent]

Antes de começar a ler seus dados, [reinicie seu agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/).

## Monitor Apache Flink no New Relic

Se você quiser usar nosso modelo dashboard pré-construído chamado Apache Flink para monitor sua métrica do Apache Flink, siga estas etapas:

1. Vá para

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/)**
   </DNT>

   e clique em

   <DNT>
     **+ Integrations & Agents**
   </DNT>

   .

2. Clique na guia

   <DNT>
     **Dashboards**
   </DNT>

   .

3. Na caixa de pesquisa, pesquise

   <DNT>
     **Apache Flink**
   </DNT>

   .

4. Clique no dashboard do Apache Flink para instalá-lo em sua conta.

Depois que seu aplicativo estiver integrado seguindo as etapas acima, o dashboard deverá refletir as métricas dele.

Para instrumentar o Apache Flink início rápido e ver métricas e alertas, você também pode seguir nossa [página Apache Flink início rápido](https://newrelic.com/instant-observability/apache-flink) clicando no botão <DNT>**Install now**</DNT> .

## Use NRQL para consultar seus dados

Você pode usar NRQL para [consultar seus dados](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial/). Por exemplo, se você quiser visualizar o número total de checkpoints concluídos no criador de consulta da New Relic, use esta consulta NRQL :

```sql
FROM Metric SELECT latest(flink_jobmanager_job_numberOfCompletedCheckpoints) AS 'Number of Completed Checkpoints'
```

## Qual é o próximo?

Se quiser personalizar ainda mais seu painel do Apache Flink, você pode aprender mais sobre como criar uma consulta NRQL e gerenciar seu <InlinePopover type="dashboards"/>na interface do New Relic :

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
