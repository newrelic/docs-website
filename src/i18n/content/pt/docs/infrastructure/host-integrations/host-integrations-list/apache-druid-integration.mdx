---
title: Integração Apache Druid
tags:
  - Druid integration
  - apache druid integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with druid metrics.
freshnessValidatedDate: '2024-04-21T00:00:00.000Z'
translationType: machine
---

A integração do Apache Druid com New Relic aprimora sua capacidade de monitor, analisar e otimizar o desempenho do seu cluster Druid. A integração Apache Druid fornece poderoso recurso de monitoramento e alertas para que você possa garantir a confiabilidade e eficiência de sua plataforma de análise baseada em Druid.

<img
  title="Apache Druid dashboard"
  alt="Apache Druid dashboard"
  src="/images/infrastructure_screenshot-full_apache-druid-dashboard.webp"
/>

<figcaption>
  Depois de configurar a integração do Apache Druid com New Relic, veja seus dados em um dashboard pronto para uso.
</figcaption>

## Configure a integração do Apache Druid

Conclua as etapas a seguir para configurar a integração do Apache Druid:

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura

    Para usar a integração do Apache Druid, primeiro é necessário [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração Apache Druid amplia seu monitoramento com dados específicos para seu cluster Druid.
  </Step>

  <Step>
    ## Expor a métrica do Druid usando o Prometheus Emitter [#Expose]

    1. Adicione `prometheus.emitter` ao final da lista de carregamento de extensões em seu arquivo `apache-druid-$version/conf/druid/single-server/micro-quickstart/_common/common.runtime.properties` :

       ```ini
       druid.extensions.loadList=["druid-hdfs-storage", "druid-kafka-indexing-service", "druid-datasketches", "druid-multi-stage-query", "prometheus-emitter"]
       ```

    2. Nos caminhos de arquivo listados na coluna da esquerda, adicione o trecho de código listado nas colunas da direita.

       <table>
         <thead>
           <tr>
             <th>
               Caminho de arquivo
             </th>

             <th>
               Trecho de código
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `PATH/TO/broker/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19091
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/coordinator-overlord/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19092
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/historical/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19093
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/middleManager/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19094
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/router/runtime.properties`
             </td>

             <td>
               ```ini
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19095
               ```
             </td>
           </tr>
         </tbody>
       </table>
  </Step>

  <Step>
    ## Instale a extensão do emissor Prometheus [#prometheus-emitter-extension]

    1. Execute os seguintes comandos para criar uma pasta chamada `prometheus-emitter` dentro do diretório de pastas `extensions` da configuração do Apache Druid:

       ```shell
       cd apache-druid-$version/extensions/
       ```

       ```shell
       sudo mkdir prometheus-emitter
       ```

    2. Navegue até o diretório de download do druid e execute o seguinte comando para criar arquivos jar que o servidor chama na inicialização:

       ```shell
       sudo java \
         -cp "lib/*" \
         -Ddruid.extensions.directory="extensions" \
         -Ddruid.extensions.hadoopDependenciesDir="hadoop-dependencies" \
         org.apache.druid.cli.Main tools pull-deps \
         --no-default-hadoop \
         -c "org.apache.druid.extensions.contrib:prometheus-emitter:24.0.0"
       ```
  </Step>

  <Step>
    ## Configurar `nri-prometheus` para Apache Druid [#configure]

    1. Crie um arquivo chamado `nri-prometheus-config.yml`:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Adicione o trecho a seguir ao arquivo `nri-prometheus-config.yml` para ativar a captura de dados do Apache Druid:

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "Apache-druid"

             targets:
               - description: Secure etcd example
                 urls: ["http://<YOUR_HOST_IP>:19091/metrics","http://<YOUR_HOST_IP>:19092/metrics", "http://<YOUR_HOST_IP>:19093/metrics","http://<YOUR_HOST_IP>:19094/metrics","http://<YOUR_HOST_IP>:19095/metrics"]
             #    tls_config:
             #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #      cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false.
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care.
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to "5s" if it is not set.
             # This timeout in seconds is passed as well as a X-Prometheus-Scrape-Timeout-Seconds header to the exporters
             # scrape_timeout: "5s"

             # Length in time to distribute the scraping from the endpoints. Default to "30s" if it is not set.
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (>400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false.
             insecure_skip_verify: false

           timeout: 10s
       ```
  </Step>

  <Step>
    ## Encaminhar logs do Druid para New Relic

    1. Edite o arquivo de log denominado `logging.yml` localizado no seguinte caminho:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Adicione o seguinte trecho ao arquivo `logging.yml` :

       ```yml
       - name: druid-logs
         file: /home/<Druid-Download Directory>/log/*.log
         attributes:
             logtype: apache-druid
       ```
  </Step>

  <Step>
    ## Reinicie o agente de infraestrutura [#restart-infra]

    Use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura. Este é um comando básico que deve funcionar para a maioria das pessoas:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Veja sua métrica Druid no New Relic [#view-data]

    Depois de concluir a configuração acima, você poderá visualizar sua métrica usando nosso modelo dashboard pré-construído. Para acessar este dashboard:

    1. Acesse **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**.
    2. Clique na guia do **Dashboards** .
    3. Na caixa de pesquisa, digite `Apache druid`.
    4. Selecione-o e clique em **Install**.

       Para instrumentar o Apache Druid início rápido e ver métricas e alertas, você também pode seguir nossa [página Apache Druid início rápido](https://newrelic.com/instant-observability/apache-druid) clicando no botão `Install now` .

       Aqui está um exemplo de consulta para verificar o tamanho médio do segmento Druid:

       ```sql
       SELECT average(druid_segment_size) AS  'MiB' FROM Metric SINCE 30 MINUTES AGO
       ```
  </Step>
</Steps>

## Qual é o próximo? [#whats-next]

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o

  <InlinePopover type="dashboards"/>

  modo de exibição ou para adicionar mais conteúdo ao dashboard.
