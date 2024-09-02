---
title: Linkerd integração
tags:
  - New Relic integrations
  - Linkerd integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Linkerd.
freshnessValidatedDate: '2024-05-29T00:00:00.000Z'
translationType: machine
---

Nossa integração Linkerd é uma malha de serviço para Kubernetes. Ele torna a execução de serviços mais fácil e segura, proporcionando depuração de tempo de execução, observabilidade, confiabilidade e segurança – tudo isso sem exigir nenhuma alteração em seu código.

<img
  title="Linkerd dashboard"
  alt="Linkerd dashboard"
  src="/images/infrastructure_screenshot_full-linkerd-dashboard.webp"
/>

<figcaption>
  Após configurar nossa integração no Linkerd, você verá um dashboard com sua métrica do Linkerd.
</figcaption>

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra-install]

    Para usar a integração do Linkerd, você também precisa [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração que você instalará na próxima etapa amplia seu monitoramento com dados específicos do Linkerd.
  </Step>

  <Step>
    ## Expor métrica do Linkerd [#expose-linkerd-metrics]

    1. Use o seguinte script para verificar todos os pods do Linkerd:

       ```shell
           kubectl get pods -n <LINKERD_NAMESPACE>
       ```

       * Substitua `LINKERD_NAMESPACE` pelo namespace real onde seu pod Linkerd está sendo executado.

    2. Em seguida, certifique-se de enviar todas as métricas para a porta 4191 para cada pod do Linkerd:

       ```shell
           kubectl port-forward --address 0.0.0.0 -n <LINKERD_NAMESPACE> <LINKERD_POD_NAME> 4191:4191 &
       ```

       * Substitua `LINKERD_NAMESPACE` pelo namespace real onde seu pod Linkerd está sendo executado e `LINKERD_POD_NAME` pelo nome real de cada pod Linkerd.
  </Step>

  <Step>
    ## Habilite a integração do Linkerd com nri-prometheus [#enable-linkerd]

    Para configurar a integração do Linkerd, siga estas etapas:

    1. Crie um arquivo chamado `nri-prometheus-config.yml` no diretório integração:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Adicione o trecho a seguir ao arquivo `nri-prometheus-config.yml` para permitir que o agente capture dados do Linkerd:

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true 
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk 
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "YOUR_DESIRED_CLUSTER_NAME"

             targets:
               - description: Linkerd metrics list
                 urls: ["http://<ip-address>:4191/metrics","http://<ip-address>:9090/metrics"]

             #     tls_config:
             #     ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #     cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to 30s.
             # scrape_timeout: "30s"

             # Length in time to distribute the scraping from the endpoints
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (&gt;400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false
             insecure_skip_verify: true
           timeout: 10s
       ```
  </Step>

  <Step>
    ## Reinicie o agente do New Relic Infrastructure

    Reinicie seu agente de infraestrutura.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    Em alguns minutos, seu aplicativo enviará métricas para [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encontre seus dados

    Você pode escolher nosso modelo dashboard pré-construído chamado `Linkerd` para monitor seu aplicativo métrica do Linkerd. Siga estas etapas para usar nosso modelo dashboard pré-construído:

    1. De [one.newrelic.com](https://one.newrelic.com), vá para a página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       .

    2. Clique em

       <DNT>
         **Dashboards**
       </DNT>

       .

    3. Na barra de pesquisa, digite `Linkerd`.

    4. Quando a opção dashboard do Linkerd aparecer, clique para instalá-lo.

       Seu dashboard do Linkerd é considerado um dashboard personalizado e pode ser encontrado na interface do <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aqui está uma consulta NRQL para verificar o total de conexões downstream do Linkerd:

       ```sql
       SELECT latest(process_virtual_memory_bytes)/(1024*1024) as 'Memory in MB' FROM Metric
       ```
  </Step>
</Steps>

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
