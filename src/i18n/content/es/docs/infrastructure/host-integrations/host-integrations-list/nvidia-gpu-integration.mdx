---
title: Integración de GPU NVIDIA
tags:
  - NVIDIA integration
  - GPU integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with GPU metrics.
freshnessValidatedDate: '2023-08-10T00:00:00.000Z'
translationType: machine
---

Nuestra integración de GPU NVIDIA le permite monitor el estado de sus GPU. Esta integración utiliza nuestro agente de infraestructura con la integración Flex, que nos permite acceder a la utilidad SMI de NVIDIA.

<img
  title="NVIDIA GPUs dashboard"
  alt="NVIDIA GPUs dashboard"
  src="/images/infrastructure_screenshot-full_NVIDIA-GPU-dashboard.webp"
/>

<figcaption>
  Después de configurar nuestra integración de GPU NVIDIA, le brindamos un dashboard para su GPU métrica.
</figcaption>

Cuando lo instales, obtendrás un dashboard prediseñado que contiene métricas de GPU cruciales:

* Utilización de GPU
* Recuentos de errores de ECC
* Procesos de cálculo activos
* Estados de reloj y rendimiento
* Temperatura y velocidad del ventilador.
* Información dinámica y estática sobre cada dispositivo compatible.

<Steps>
  <Step>
    ## Instalar el agente de infraestructura

    Para capturar datos con New Relic, instale nuestro agente de infraestructura. Nuestro agente de infraestructura recopila e ingiere datos para que pueda realizar un seguimiento del rendimiento de sus GPU.

    Puede instalar el agente de infraestructura de dos maneras diferentes:

    * Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
    * Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial de instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) y [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/).
  </Step>

  <Step>
    ## Configurar la integración Flex para GPU NVIDIA

    Flex viene incluido con el agente New Relic Infrastructure y se puede integrar con [NVIDIA SMI](https://developer.nvidia.com/nvidia-management-library-nvml), una utilidad de línea de comando para monitor dispositivos GPU NVIDIA.

    <Callout variant="important">
      nvidia-smi viene preinstalado con controladores de pantalla NVIDIA GPU en Linux y Windows Server.
    </Callout>

    Siga estos pasos para configurar Flex:

    1. Cree un archivo llamado `nvidia-smi-gpu-monitoring.yml` en esta ruta:

       ```shell
       sudo touch /etc/newrelic-infra/integrations.d/nvidia-smi-gpu-monitoring.yml
       ```

       También puedes descargarlo desde el [repositorio de git](https://github.com/newrelic/nri-flex/blob/master/examples/nvidia-smi-gpu-monitoring.yml).

    2. Actualice el archivo `nvidia-smi-gpu-monitoring.yml` con la configuración de integración:

```yml
--- 
integrations:
- name: nri-flex
# interval: 30s
config:
  name: NvidiaSMI
  variable_store:
    metrics: 
      "name,driver_version,count,serial,pci.bus_id,pci.domain,pci.bus,\
      pci.device_id,pci.sub_device_id,pcie.link.gen.current,pcie.link.gen.max,\
      pcie.link.width.current,pcie.link.width.max,index,display_mode,display_active,\
      persistence_mode,accounting.mode,accounting.buffer_size,driver_model.current,\
      driver_model.pending,vbios_version,inforom.img,inforom.oem,inforom.ecc,inforom.pwr,\
      gom.current,gom.pending,fan.speed,pstate,clocks_throttle_reasons.supported,\
      clocks_throttle_reasons.gpu_idle,clocks_throttle_reasons.applications_clocks_setting,\
      clocks_throttle_reasons.sw_power_cap,clocks_throttle_reasons.hw_slowdown,clocks_throttle_reasons.hw_thermal_slowdown,\
      clocks_throttle_reasons.hw_power_brake_slowdown,clocks_throttle_reasons.sw_thermal_slowdown,\
      clocks_throttle_reasons.sync_boost,memory.total,memory.used,memory.free,compute_mode,\
      utilization.gpu,utilization.memory,encoder.stats.sessionCount,encoder.stats.averageFps,\
      encoder.stats.averageLatency,ecc.mode.current,ecc.mode.pending,ecc.errors.corrected.volatile.device_memory,\
      ecc.errors.corrected.volatile.dram,ecc.errors.corrected.volatile.register_file,ecc.errors.corrected.volatile.l1_cache,\
      ecc.errors.corrected.volatile.l2_cache,ecc.errors.corrected.volatile.texture_memory,ecc.errors.corrected.volatile.cbu,\
      ecc.errors.corrected.volatile.sram,ecc.errors.corrected.volatile.total,ecc.errors.corrected.aggregate.device_memory,\
      ecc.errors.corrected.aggregate.dram,ecc.errors.corrected.aggregate.register_file,ecc.errors.corrected.aggregate.l1_cache,\
      ecc.errors.corrected.aggregate.l2_cache,ecc.errors.corrected.aggregate.texture_memory,ecc.errors.corrected.aggregate.cbu,\
      ecc.errors.corrected.aggregate.sram,ecc.errors.corrected.aggregate.total,ecc.errors.uncorrected.volatile.device_memory,\
      ecc.errors.uncorrected.volatile.dram,ecc.errors.uncorrected.volatile.register_file,ecc.errors.uncorrected.volatile.l1_cache,\
      ecc.errors.uncorrected.volatile.l2_cache,ecc.errors.uncorrected.volatile.texture_memory,ecc.errors.uncorrected.volatile.cbu,\
      ecc.errors.uncorrected.volatile.sram,ecc.errors.uncorrected.volatile.total,ecc.errors.uncorrected.aggregate.device_memory,\
      ecc.errors.uncorrected.aggregate.dram,ecc.errors.uncorrected.aggregate.register_file,ecc.errors.uncorrected.aggregate.l1_cache,\
      ecc.errors.uncorrected.aggregate.l2_cache,ecc.errors.uncorrected.aggregate.texture_memory,ecc.errors.uncorrected.aggregate.cbu,\
      ecc.errors.uncorrected.aggregate.sram,ecc.errors.uncorrected.aggregate.total,retired_pages.single_bit_ecc.count,\
      retired_pages.double_bit.count,retired_pages.pending,temperature.gpu,temperature.memory,power.management,power.draw,\
      power.limit,enforced.power.limit,power.default_limit,power.min_limit,power.max_limit,clocks.current.graphics,clocks.current.sm,\
      clocks.current.memory,clocks.current.video,clocks.applications.graphics,clocks.applications.memory,\
      clocks.default_applications.graphics,clocks.default_applications.memory,clocks.max.graphics,clocks.max.sm,clocks.max.memory,\
      mig.mode.current,mig.mode.pending"
  apis:
    - name: NvidiaGpu
      commands:
        - run: nvidia-smi --query-gpu=${var:metrics} --format=csv # update this if you have an alternate path
          output: csv
      rename_keys:
        " ": ""
        "\\[MiB\\]": ".MiB"
        "\\[%\\]": ".percent"
        "\\[W\\]": ".watts"
        "\\[MHz\\]": ".MHz"
      value_parser:
        "clocks|power|fan|memory|temp|util|ecc|stats|gom|mig|count|pcie": '\d*\.?\d+'
        '.': '\[N\/A\]|N\/A|Not Active|Disabled|Enabled|Default'
```
  </Step>

  <Step>
    ## Confirme que se están ingiriendo GPU métricas

    La configuración de Flex será detectada y ejecutada automáticamente por el agente de infraestructura; no es necesario reiniciar el agente. Puede confirmar que se están ingiriendo métricas ejecutando esta consulta NRQL:

    ```sql
    SELECT * FROM NvidiaGpuSample
    ```
  </Step>

  <Step>
    ## Monitor su aplicación

    Puede utilizar nuestra plantilla dashboard prediseñadas para monitor su GPU métrica. Sigue estos pasos:

    1. Vaya a

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/)**
       </DNT>

       y haga clic en

       <DNT>
         **Dashboards**
       </DNT>

       .

    2. Haga clic en la pestaña

       <DNT>
         **Import dashboard**
       </DNT>

       .

    3. Copie el contenido del archivo (`.json`) desde el [panel de la GPU NVIDIA](https://raw.githubusercontent.com/newrelic/nri-flex/master/examples/nvidia-smi-gpu-monitoring-dashboard.json).

    4. Seleccione la cuenta de destino donde se debe importar el dashboard .

    5. Haga clic en

       <DNT>
         **Import dashboard**
       </DNT>

       para confirmar la acción.

       Su dashboard `NVIDIA GPU Monitoring` se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aquí hay una consulta NRQL para ver toda la telemetría disponible:

       ```sql
       SELECT * FROM NvidiaGpuSample
       ```
  </Step>
</Steps>

## ¿Que sigue? [#next]

Puede adaptar la configuración de Flex para incluir o excluir información disponible en la utilidad NVIDIA SMI.

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
