---
title: Integração de GPU NVIDIA
tags:
  - NVIDIA integration
  - GPU integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with GPU metrics.
freshnessValidatedDate: '2023-08-10T00:00:00.000Z'
translationType: machine
---

Nossa integração com GPU NVIDIA permite monitor o status de suas GPUs. Esta integração utiliza nosso agente de infraestrutura com a integração Flex, que nos permite acessar o utilitário SMI da NVIDIA.

<img
  title="NVIDIA GPUs dashboard"
  alt="NVIDIA GPUs dashboard"
  src="/images/infrastructure_screenshot-full_NVIDIA-GPU-dashboard.webp"
/>

<figcaption>
  Depois de configurar nossa integração de GPU NVIDIA, fornecemos um dashboard para sua métrica de GPU.
</figcaption>

Ao instalar, você obterá um dashboard pré-construído contendo métricas cruciais de GPU:

* Utilização de GPU
* Contagens de erros ECC
* Processos de computador ativos
* Estados de relógio e desempenho
* Temperatura e velocidade do ventilador
* Informações dinâmicas e estáticas sobre cada dispositivo compatível

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura

    Para capturar dados com o New Relic, instale nosso agente de infraestrutura. Nosso agente de infraestrutura coleta e ingere dados para que você possa acompanhar o desempenho de suas GPUs.

    É possível instalar o agente de infraestrutura de duas maneiras diferentes:

    * Nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) é uma ferramenta CLI que inspeciona seu sistema e instala o agente de infraestrutura junto com o agente de monitoramento do aplicativo que melhor funciona para seu sistema. Para saber mais sobre como funciona nossa instalação guiada, confira nossa [Visão geral da instalação guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
    * Se preferir instalar nosso agente de infraestrutura manualmente, você pode seguir um tutorial para instalação manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/).
  </Step>

  <Step>
    ## Configure a integração Flex para GPUs NVIDIA

    O Flex vem junto com o agente New Relic Infrastructure e pode ser integrado ao [NVIDIA SMI](https://developer.nvidia.com/nvidia-management-library-nvml), um utilitário de linha de comando para monitor dispositivos GPU NVIDIA.

    <Callout variant="important">
      nvidia-smi vem pré-instalado com drivers de vídeo NVIDIA GPU no Linux e Windows Server.
    </Callout>

    Siga estas etapas para configurar o Flex:

    1. Crie um arquivo chamado `nvidia-smi-gpu-monitoring.yml` neste caminho:

```shell
sudo touch /etc/newrelic-infra/integrations.d/nvidia-smi-gpu-monitoring.yml
```

       Você também pode fazer download do [repositório git](https://github.com/newrelic/nri-flex/blob/master/examples/nvidia-smi-gpu-monitoring.yml).

    2. Atualize o arquivo `nvidia-smi-gpu-monitoring.yml` com a configuração de integração:

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
    ## Confirme se as métricas da GPU estão sendo ingeridas

    A configuração do Flex será detectada e executada automaticamente pelo agente de infraestrutura, não sendo necessário reiniciar o agente. Você pode confirmar que as métricas estão sendo ingeridas executando esta consulta NRQL:

```sql
SELECT * FROM NvidiaGpuSample
```
  </Step>

  <Step>
    ## Monitor seu aplicativo

    Você pode usar nosso modelo dashboard pré-construído para monitor suas métricas de GPU. Siga esses passos:

    1. Vá para

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/)**
       </DNT>

       e clique em

       <DNT>
         **Dashboards**
       </DNT>

       .

    2. Clique na guia

       <DNT>
         **Import dashboard**
       </DNT>

       .

    3. Copie o conteúdo do arquivo (`.json`) do [painel da GPU NVIDIA](https://raw.githubusercontent.com/newrelic/nri-flex/master/examples/nvidia-smi-gpu-monitoring-dashboard.json).

    4. Selecione a conta de destino para a qual o dashboard precisa ser importado.

    5. Clique em

       <DNT>
         **Import dashboard**
       </DNT>

       para confirmar a ação.

       Seu dashboard `NVIDIA GPU Monitoring` é considerado um painel personalizado e pode ser encontrado na interface do <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aqui está uma consulta NRQL para visualizar toda a telemetria disponível:

```sql
SELECT * FROM NvidiaGpuSample
```
  </Step>
</Steps>

## Qual é o próximo? [#next]

Você pode adaptar a configuração do Flex para incluir ou excluir informações disponíveis no utilitário NVIDIA SMI.

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o

  <InlinePopover type="dashboards"/>

  modo de exibição ou para adicionar mais conteúdo ao dashboard.
