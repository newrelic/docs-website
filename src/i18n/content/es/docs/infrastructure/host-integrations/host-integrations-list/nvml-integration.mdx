---
title: Integración NVML
tags:
  - NVML integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with nvml metrics.
freshnessValidatedDate: never
translationType: machine
---

La integración de NVML con New Relic proporciona información valiosa sobre la utilización de GPU y el rendimiento métrico de su aplicación y sistemas, lo que facilita la optimización de recursos, la identificación del cuello de botella y el mantenimiento de la estabilidad y eficiencia generales en su entorno.

<img
  title="NVML dashboard"
  alt="nvml dashboard"
  src="/images/infrastructure_screenshot-full_nvml-dashboard.webp"
/>

<figcaption>
  Luego de configurar la integración NVML con New Relic, vea sus datos en un dashboard listo para usar.
</figcaption>

## Configurar la integración NVML

Complete los siguientes pasos para configurar la integración NVML:

<Steps>
  <Step>
    ## Instalar el agente de infraestructura

    Para emplear la integración NVML, primero debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host. El agente de infraestructura monitorea el host en sí, mientras que la integración nvml extiende su monitoreo con datos específicos de su clúster gpu.
  </Step>

  <Step>
    ## Utilice NRI-Flex para capturar métricas

    Flex viene incluido con el agente New Relic Infrastructure . Debe configurar NRI-Flex para nvml y crear un archivo de configuración flexible. Sigue estos pasos:

    1. Cree un archivo llamado `nvml-config.yml` en la siguiente ruta:

       * para Linux, `/etc/newrelic-infra/integrations.d`
       * para Windows, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`

    2. Utilice el siguiente fragmento para actualizar su archivo de configuración llamado `nvml-config.yml`

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: NVMLexample
             apis:
               - name: nvml
                 file: <PATH_TO_METRIC_CSV_FILE>
       ```
  </Step>

  <Step>
    ## Reiniciar el agente de infraestructura. [#restart-infra]

    Utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura. Este es un comando básico que debería funcionar para la mayoría de las personas:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Ver tu nvml métrica en New Relic [#view-data]

    Una vez que haya completado la configuración anterior, podrá ver su métrica utilizando nuestra plantilla dashboard prediseñadas. Para acceder a este dashboard:

    1. Vaya a **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**.
    2. Haga clic en la pestaña del **Dashboards** .
    3. En el cuadro de búsqueda, escriba `nvml`.
    4. Selecciónelo y haga clic en **Install**.

       Para instrumentar el nvml inicio rápido y ver métricas y alertas, también puede seguir nuestra [página NVML inicio rápido](https://newrelic.com/instant-observability/nvml) haciendo clic en el botón `Install now` .

       Aquí hay una consulta de ejemplo para verificar la cantidad de dispositivos en la GPU:

       ```sql
       SELECT latest(temperature_gpu) FROM nvmlSample TIMESERIES 
       ```
  </Step>
</Steps>

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
