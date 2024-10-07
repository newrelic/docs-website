---
title: NVIDIA GPU 통합
tags:
  - NVIDIA integration
  - GPU integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with GPU metrics.
freshnessValidatedDate: '2023-08-10T00:00:00.000Z'
translationType: machine
---

NVIDIA GPU 통합을 통해 GPU 상태를 모니터링할 수 있습니다. 이 통합에서는 NVIDIA의 SMI 유틸리티에 액세스할 수 있는 Flex 통합과 함께 인프라 에이전트를 사용합니다.

<img
  title="NVIDIA GPUs dashboard"
  alt="NVIDIA GPUs dashboard"
  src="/images/infrastructure_screenshot-full_NVIDIA-GPU-dashboard.webp"
/>

<figcaption>
  NVIDIA GPU 통합을 설정하면 GPU 지표에 대한 대시보드가 제공됩니다.
</figcaption>

설치하면 중요한 GPU 지표가 포함된 사전 구축된 대시보드가 제공됩니다.

* GPU 활용도
* ECC 오류 수
* 활성 컴퓨팅 프로세스
* 시계 및 성능 상태
* 온도 및 팬 속도
* 지원되는 각 장치에 대한 동적 및 정적 정보

<Steps>
  <Step>
    ## 인프라 에이전트 설치

    New Relic으로 데이터를 캡처하려면 인프라 에이전트를 설치하세요. 당사의 인프라 에이전트는 GPU 성능을 추적할 수 있도록 데이터를 수집하고 수집합니다.

    두 가지 방법으로 인프라 에이전트를 설치할 수 있습니다.

    * [가이드 설치](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) 는 시스템을 검사하고 시스템에 가장 적합한 애플리케이션 모니터링 에이전트와 함께 인프라 에이전트를 설치하는 CLI 도구입니다. 가이드 설치 작동 방식에 대해 자세히 알아보려면 [가이드 설치 개요](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview) 를 확인하세요.
    * 인프라 에이전트를 수동으로 설치하려는 경우 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) 용 수동 설치 자습서를 따를 수 있습니다.
  </Step>

  <Step>
    ## NVIDIA GPU용 Flex 통합 구성

    Flex는 New Relic 인프라 에이전트와 함께 번들로 제공되며 NVIDIA GPU 장치를 모니터링하는 명령줄 유틸리티인 [NVIDIA SMI](https://developer.nvidia.com/nvidia-management-library-nvml) 와 통합될 수 있습니다.

    <Callout variant="important">
      nvidia-smi는 Linux 및 Windows Server에 NVIDIA GPU 디스플레이 드라이버가 사전 설치되어 제공됩니다.
    </Callout>

    Flex를 구성하려면 다음 단계를 따르세요.

    1. 다음 경로에 `nvidia-smi-gpu-monitoring.yml` 이라는 파일을 만듭니다.

```shell
sudo touch /etc/newrelic-infra/integrations.d/nvidia-smi-gpu-monitoring.yml
```

       [git 저장소](https://github.com/newrelic/nri-flex/blob/master/examples/nvidia-smi-gpu-monitoring.yml) 에서 다운로드할 수도 있습니다.

    2. 통합 구성으로 `nvidia-smi-gpu-monitoring.yml` 파일을 업데이트합니다.

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
    ## GPU 측정항목이 수집되고 있는지 확인

    Flex 구성은 인프라 에이전트에 의해 자동으로 감지되고 실행되므로 에이전트를 다시 시작할 필요가 없습니다. 다음 NRQL 쿼리를 실행하여 측정항목이 수집되고 있는지 확인할 수 있습니다.

```sql
SELECT * FROM NvidiaGpuSample
```
  </Step>

  <Step>
    ## 애플리케이션 모니터링

    사전 구축된 대시보드 템플릿을 사용하여 GPU 지표를 모니터링할 수 있습니다. 다음과 같이하세요:

    1. <DNT>
         **[one.newrelic.com](https://one.newrelic.com/)**
       </DNT>

       으로 이동하여

       <DNT>
         **Dashboards**
       </DNT>

       를) 클릭합니다.

    2. <DNT>
         **Import dashboard**
       </DNT>

       탭을 클릭합니다.

    3. [NVIDIA GPU 대시보드](https://raw.githubusercontent.com/newrelic/nri-flex/master/examples/nvidia-smi-gpu-monitoring-dashboard.json) 에서 파일 콘텐츠(`.json`)를 복사합니다.

    4. 대시보드를 가져와야 하는 대상 계정을 선택합니다.

    5. 작업을 확인하려면

       <DNT>
         **Import dashboard**
       </DNT>

       클릭하세요.

       귀하의 `NVIDIA GPU Monitoring` 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

       다음은 사용 가능한 모든 원격 분석을 보기 위한 NRQL 쿼리입니다.

```sql
SELECT * FROM NvidiaGpuSample
```
  </Step>
</Steps>

## 다음은 뭐지? [#next]

NVIDIA SMI 유틸리티에서 사용할 수 있는 정보를 포함하거나 제외하도록 Flex 구성을 조정할 수 있습니다.

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)

* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)

* [대시보드를 관리하여](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)

  <InlinePopover type="dashboards"/>

  디스플레이 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가하세요.
