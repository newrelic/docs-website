---
title: Integración Temporal Cloud
tags:
  - Temporal Cloud integration
  - Temporal Cloud monitoring
  - New Relic integrations
metaDescription: Install our Temporal Cloud dashboards and see your Temporal Cloud data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Nuestra integración Temporal en la nube monitorea el rendimiento de sus datos de Temporal Cloud, ayudándolo a diagnosticar problemas en su flujo de trabajo, espacio de nombres y aplicación escalable. Nuestra integración Temporal en la nube le brinda un dashboard prediseñado con su métrica Temporal Cloud más importante.

<img
  title="Temporal Cloud"
  alt="A screenshot depicting the Temporal Cloud dashboard"
  src="/images/infrastructure_screenshot-full_temporal_cloud-dashboard.webp"
/>

<figcaption>
  Después de configurar la integración con New Relic, vea sus datos en un panel como este, listo para usar.
</figcaption>

<Steps>
  <Step>
    ## Instalar el agente de infraestructura [#infra]

    Para emplear la integración Temporal Cloud, primero debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host. El agente de infraestructura monitorea el host en sí, mientras que la integración que instalará en el siguiente paso amplía su monitoreo con datos Temporal específicos, como base de datos e instancia métrica.
  </Step>

  <Step>
    ## Configurar `nri-flex` [#configure-flex]

    Una vez que las métricas de Temporal Cloud estén expuestas en el extremo Prometheus, al que se puede acceder a través de `https://<account-id>.tmprl.cloud/prometheus`, deberá [configurar su instalación](https://docs.temporal.io/production-deployment/cloud/metrics/general-setup) en consecuencia.

    <Callout
      title="Nota"
      variant="tip"
    >
      Flex requiere una [cuentaNew Relic ](https://docs.newrelic.com/docs/accounts/accounts-billing/account-setup/create-your-new-relic-account)y es compatible con el siguiente sistema operativo/plataforma:

      1. Linux
      2. Windows
      3. Kubernetes

         Para obtener más información sobre distribuciones y versiones compatibles, consulte la [página de compatibilidad del agente de infraestructura](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure).
    </Callout>

    1. Cree un archivo con el nombre `nri-flex-temporal-cloud-config.yml` en esta ruta:

       ```shell
       touch /etc/newrelic-infra/integrations.d/
       ```

    2. A continuación se muestra un archivo de configuración `nri-flex` . Cerciorar de copiar y pegar su contenido en su archivo `nri-flex-temporal-cloud-config.yml` creado previamente y recuerde actualizar su ID de cuenta en la URL extremo de Prometheus, así como las rutas de los archivos de certificado:

       ```yml
       integrations:
         - name: nri-flex
           config:
             name: temporalCloudIntegration
             apis:
               - event_type: temporalCloudFrontendServiceError
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_frontend_service_error_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudFrontendServiceRequest
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_frontend_service_request_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudPollSuccess
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_poll_success_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudPollSuccessSync
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_poll_success_sync_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudPollTimeout
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_poll_timeout_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudResourceExhaustedErrors
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_resource_exhausted_error_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudScheduleActionSuccess
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_schedule_action_success_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudScheduleBufferOverruns
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_schedule_buffer_overruns_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudScheduleMissedCatchupWindow
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_schedule_missed_catchup_window_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudScheduleRateLimited
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_schedule_rate_limited_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudServiceLatencyBucket
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_service_latency_bucket
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudServiceLatencyCount
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_service_latency_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudServiceLatencySum
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_service_latency_sum
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudStateTransition
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_state_transition_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudTotalAction
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_total_action_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudWorkflowCancel
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_workflow_cancel_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudWorkflowContinued
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_workflow_continued_as_new_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudWorkflowFailed
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_workflow_failed_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudWorkflowSuccess
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_workflow_success_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudWorkflowTerminate
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_workflow_terminate_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
               - event_type: temporalCloudWorkflowTimeout
                 url: https://<your_account>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_workflow_timeout_count
                 headers:
                   accept: application/json
                 split_array: true
                 leaf_array: true
                 tls_config:
                   enable: true
                   ca: <your_file_path>/ca-certificates.crt
                   key: <your_file_path>/ca.key
                   cert: <your_file_path>/ca.pem
       ```

    3. Emplee nuestras instrucciones [para resetear su agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/):

       ```bash
       sudo systemctl restart newrelic-infra.service
       ```

    4. Espere unos minutos hasta que los datos comiencen a ingresar a su [cuenta New Relic](https://one.newrelic.com/).
  </Step>

  <Step>
    ## Encuentra tus datos [#find-your-data]

    Puede elegir nuestra plantilla dashboard prediseñada llamada Temporal Cloud para monitor su Temporal Cloud métrica. Siga estos pasos para emplear nuestra plantilla dashboard prediseñadas:

    1. Desde [one.newrelic.com](https://one.newrelic.com/), vaya a la página de **+ Integrations & Agents** .
    2. Haga clic en **Dashboards**.
    3. En la barra de búsqueda, escribe **Temporal Cloud**.
    4. Debería aparecer el dashboard Temporal Cloud. Haga clic en él para instalarlo.

       Su dashboard Temporal Cloud se considera un panel personalizado y se puede encontrar en la UI del panel. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

       Aquí hay una consulta NRQL para verificar el recuento de solicitudes del servicio frontend de Temporal Cloud:

       ```sql
       FROM temporalCloudFrontendServiceRequest SELECT latest(`data.result-value1`) FACET `data.result-metric-__name__`
       ```
  </Step>
</Steps>

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
