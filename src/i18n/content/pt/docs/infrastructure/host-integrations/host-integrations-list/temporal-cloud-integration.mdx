---
title: Integração Temporal Cloud
tags:
  - Temporal Cloud integration
  - Temporal Cloud monitoring
  - New Relic integrations
metaDescription: Install our Temporal Cloud dashboards and see your Temporal Cloud data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Nossa integração Temporal na nuvem monitora o desempenho dos dados da sua Nuvem Temporal, ajudando você a diagnosticar problemas em seu fluxo de trabalho, namespace e aplicativo escalável. Nossa integração Temporal na nuvem oferece um dashboard pré-construído com suas métricas de Nuvem Temporal mais importantes.

<img title="Temporal Cloud" alt="A screenshot depicting the Temporal Cloud dashboard" src="/images/infrastructure_screenshot-full_temporal_cloud-dashboard.webp" />

<figcaption>
  Depois de configurar a integração com o New Relic, veja seus dados em painéis como estes, prontos para uso.
</figcaption>

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra]

    Para utilizar a integração Temporal Cloud, é necessário primeiro [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração que você instalará na próxima etapa estende seu monitoramento com dados específicos do Temporal, como banco de dados e instância métrica.
  </Step>

  <Step>
    ## Configurar `nri-flex` [#configure-flex]

    Depois que as métricas da Temporal Cloud forem expostas no endpoint do Prometheus, acessível via `https://<account-id>.tmprl.cloud/prometheus`, você precisará [definir sua configuração](https://docs.temporal.io/production-deployment/cloud/metrics/general-setup) adequadamente.

    <Callout title="Observação" variant="tip">
      O Flex requer uma [contaNew Relic ](/docs/accounts/accounts-billing/account-setup/create-your-new-relic-account)e é compatível com os seguintes sistemas operacionais/plataformas:

      1. Linux

      2. Windows

      3. Kubernetes

         Para obter mais informações sobre distribuições e versões compatíveis, consulte a [página de compatibilidade do agente de infraestrutura](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure).
    </Callout>

    1. Crie um arquivo com o nome `nri-flex-temporal-cloud-config.yml` neste caminho:

       ```shell
       touch /etc/newrelic-infra/integrations.d/
       ```

    2. Abaixo está um arquivo de configuração `nri-flex` . Certifique-se de copiar e colar seu conteúdo no arquivo `nri-flex-temporal-cloud-config.yml` criado anteriormente e lembre-se de atualizar o ID da sua conta no URL do endpoint do Prometheus, bem como os caminhos para os arquivos de certificado:

       ```yml
       integrations:
        - name: nri-flex
          config:
            name: temporalCloudIntegration
            global:
              base_url: https://<your_account_id>.tmprl.cloud/prometheus/api/v1/
              headers:
                accept: application/json
              tls_config:
                enable: true
                key: /certs/client.key
                cert: /certs/client.pem
            interval: 60s
            timeout: 55s
            apis:
              - event_type: temporalCloudFrontendServiceError
                # sum(increase(temporal_cloud_v0_frontend_service_error_count[1m])) by (temporal_namespace,operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_frontend_service_error_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudFrontendServiceRequest
                # sum(increase(temporal_cloud_v0_frontend_service_request_count[1m])) by (temporal_namespace,operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_frontend_service_request_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollSuccess
                # sum(increase(temporal_cloud_v0_poll_success_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollSuccessSync
                # sum(increase(temporal_cloud_v0_poll_success_sync_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_success_sync_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollTimeout
                # sum(increase(temporal_cloud_v0_poll_timeout_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_timeout_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudResourceExhaustedErrors
                # sum(increase(temporal_cloud_v0_resource_exhausted_error_count[1m])) by (temporal_namespace,resource_exhausted_cause)
                url: query?query=sum%28increase%28temporal_cloud_v0_resource_exhausted_error_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Cresource_exhausted_cause%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleActionSuccess
                # sum(increase(temporal_cloud_v0_schedule_action_success_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_action_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleBufferOverruns
                # sum(increase(temporal_cloud_v0_schedule_buffer_overruns_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_buffer_overruns_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleMissedCatchupWindow
                # sum(increase(temporal_cloud_v0_schedule_missed_catchup_window_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_missed_catchup_window_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleRateLimited
                # sum(increase(temporal_cloud_v0_schedule_rate_limited_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_rate_limited_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudStateTransition
                # sum(increase(temporal_cloud_v0_state_transition_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_state_transition_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudTotalAction
                # sum(increase(temporal_cloud_v0_total_action_count[1m])) by (temporal_namespace, namespace_mode)
                url: query?query=sum%28increase%28temporal_cloud_v0_total_action_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20namespace_mode%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowCancel
                # sum(increase(temporal_cloud_v0_workflow_cancel_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_cancel_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowContinued
                # sum(increase(temporal_cloud_v0_workflow_continued_as_new_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_continued_as_new_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowFailed
                # sum(increase(temporal_cloud_v0_workflow_failed_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_failed_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowSuccess
                # sum(increase(temporal_cloud_v0_workflow_success_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowTerminate
                # sum(increase(temporal_cloud_v0_workflow_terminate_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_terminate_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowTimeout
                # sum(increase(temporal_cloud_v0_workflow_timeout_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_timeout_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowExecutionLatencySecP95
                # histogram_quantile(0.95, sum(rate(temporal_cloud_v0_service_latency_bucket[1m] offset 1m)) by (temporal_namespace, operation, le))
                url: query?query=histogram_quantile%280.95%2C%20sum%28rate%28temporal_cloud_v0_service_latency_bucket%5B1m%5D%20offset%201m%29%29%20by%20%28temporal_namespace%2C%20operation%2C%20le%29%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudReplicationLagSecP95
                # histogram_quantile(0.95, sum(rate(temporal_cloud_v0_replication_lag_bucket[1m] offset 1m)) by (temporal_namespace, le))
                url: query?query=histogram_quantile%280.95%2C%20sum%28rate%28temporal_cloud_v0_replication_lag_bucket%5B1m%5D%20offset%201m%29%29%20by%20%28temporal_namespace%2C%20le%29%29
                split_array: true
                leaf_array: true
       ```

    3. Use nossas instruções [para reiniciar seu agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/):

       ```bash
       sudo systemctl restart newrelic-infra.service
       ```

    4. Aguarde alguns minutos até que os dados comecem a fluir para sua [conta New Relic](https://one.newrelic.com/).
  </Step>

  <Step>
    ## Encontre seus dados [#find-your-data]

    Você pode escolher nosso modelo dashboard pré-construído chamado Nuvem Temporal para monitor sua métrica de Nuvem Temporal. Siga estas etapas para usar nosso modelo dashboard pré-construído:

    1. De [one.newrelic.com](https://one.newrelic.com/), acesse a página **+ Integrations &amp; Agents** .
    2. Clique no **Dashboards**.
    3. Na barra de pesquisa, digite **Temporal Cloud**.
    4. O dashboard da Nuvem Temporal deve aparecer. Clique nele para instalá-lo.

    Seu dashboard do Temporal Cloud é considerado um dashboard personalizado e pode ser encontrado na interface do painel. Para obter documentos sobre como usar e editar o painel, consulte [nossa documentação dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

    Aqui está uma consulta NRQL para verificar as solicitações de serviço de frontend do Temporal Cloud agrupadas por namespace e operação:

    ```sql
    FROM temporalCloudFrontendServiceRequest SELECT latest(`data.result-value1`) FACET `data.result-metric-temporal_namespace` AS namespace, `data.result-metric-operation` AS operation TIMESERIES 1 minute
    ```
  </Step>
</Steps>

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.