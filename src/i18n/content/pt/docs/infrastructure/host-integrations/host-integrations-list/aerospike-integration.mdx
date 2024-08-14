---
title: Aerospike plataforma integração
tags:
  - New Relic integrations
  - Aerospike
metaDescription: Use New Relic's infrastructure monitoring to get a dashboard with metrics from your Aerospike platform.
freshnessValidatedDate: never
translationType: machine
---

Nossa integração Aerospike monitora o desempenho da sua plataforma de dados Aerospike, ajudando você a diagnosticar problemas em seu aplicativo e otimizar seu código. Nossa integração Aerospike oferece um dashboard pré-construído com as métricas mais importantes do aplicativo Aerospike.

<img
  title="aerospike dashboard"
  alt="A screenshot depicting an Aerospike pre-built dashboard"
  src="/images/infrastructure_screenshot-full_aerospike-dashboard.webp"
/>

<figcaption>
  Depois de configurar a integração com o New Relic, veja seus dados em painéis como estes, prontos para uso.
</figcaption>

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra]

    Para usar a integração do Aerospike, primeiro você precisa [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração que você instalará na próxima etapa amplia seu monitoramento com dados específicos do Aerospike.
  </Step>

  <Step>
    ## Instale a integração Aerospike

    1. Para instalar o nri-aerospike, use o seguinte comando:

       ```bash
       sudo apt-get install nri-aerospike
       ```

    2. Verifique se `nri-aerospike` foi instalado com sucesso por:

       * Verificando se <DNT>**Exporter**</DNT> está instalado no diretório `/var/db/newrelic-infra/newrelic-integrations/bin` .
       * Verificando um arquivo de configuração no diretório `/etc/newrelic-infra/integrations.d`
  </Step>

  <Step>
    ## Configure a integração:

    1. Renomeie o arquivo de configuração de amostra de `aerospike-config.yml.sample` para `aerospike-config.yml`:

       ```shell
       sudo cp aerospike-config.yml.sample aerospike-config.yml
       ```

    2. Edite o arquivo de configuração conforme necessário. A seguir está um exemplo básico de um arquivo de configuração:

       ```yml
       integrations:
         - name: nri-aerospike
           config:
             # API URL of the aerospike service
             aerospike_db_host: localhost
             aerospike_db_port: 3000

             # Port to expose scrape endpoint on, If this is not provided a random port will be used to launch the exporter
             exporter_port: 9145

             # Cluster name is used on the aerospike.prometheus.json.template - 
             # all the metrics captured by nri-prometheus will be categorized under this cluster name
             aerospike_cluster_name: YOUR_DESIRED_CLUSTER_NAME
             scrape_timeout: 5s
      
             label_type: development
             label_source: aerospike

             exporter_files_path: /tmp
       ```

       Depois de configurar `nri-aerospike` com sucesso, você pode ver a lista de métricas do monitor Aerospike em `http://localhost:9145/metrics`.
  </Step>

  <Step>
    ## Encontre seus dados [#find-data]

    Para obter o dashboard do Aerospike:

    1. De [one.newrelic.com](https://one.newrelic.com), vá para a [página<DNT>**Integrations & Agents**</DNT> ](https://one.newrelic.com/marketplace).
    2. Clique em <DNT>**Dashboards**</DNT>.
    3. Na barra de pesquisa, digite `Aerospike`.
    4. O dashboard do Aerospike deve aparecer. Clique nele para instalá-lo.

       Seu dashboard do Aerospike é considerado um painel personalizado e pode ser encontrado na interface do <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Essa integração reporta dados na forma de nosso [agente de infraestrutura](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events).

       Aqui está um exemplo de consulta NRQL que verifica a porcentagem de capacidade de memória livre no namespace:

       ```sql
       FROM Metric 
       SELECT latest (aerospike_namespace_memory_free_pct)
       ```
  </Step>
</Steps>

## Qual é o próximo? [#whats-next]

Para saber mais sobre como consultar seus dados e criar dashboards personalizados, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [Introdução ao painel personalizado](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)
