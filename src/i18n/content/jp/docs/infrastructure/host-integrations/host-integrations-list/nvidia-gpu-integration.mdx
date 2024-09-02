---
title: NVIDIA GPUの統合
tags:
  - NVIDIA integration
  - GPU integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with GPU metrics.
freshnessValidatedDate: '2023-08-10T00:00:00.000Z'
translationType: machine
---

NVIDIA GPU 統合により、GPU のステータスを監視できます。この統合では、インフラストラクチャ エージェントと Flex 統合が使用され、NVIDIA の SMI ユーティリティにアクセスできるようになります。

<img
  title="NVIDIA GPUs dashboard"
  alt="NVIDIA GPUs dashboard"
  src="/images/infrastructure_screenshot-full_NVIDIA-GPU-dashboard.webp"
/>

<figcaption>
  NVIDIA GPU 統合を設定すると、GPU メトリクスのダッシュボードが提供されます。
</figcaption>

インストールすると、重要な GPU メトリクスを含む事前に構築されたダッシュボードが表示されます。

* GPU使用率
* ECCエラー数
* アクティブな計算プロセス
* クロックとパフォーマンスの状態
* 温度とファン速度
* サポートされている各デバイスに関する動的情報と静的情報

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします

    New Relic でデータをキャプチャするには、インフラストラクチャ エージェントをインストールします。当社のインフラストラクチャ エージェントはデータを収集して取り込むため、GPU のパフォーマンスを追跡できます。

    インフラストラクチャ エージェントは、次の 2 つの方法でインストールできます。

    * [ガイド付きインストール](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd)は、システムを検査し、システムに最適なアプリケーション監視エージェントとともにインフラストラクチャ エージェントをインストールする CLI ツールです。ガイド付きインストールの仕組みの詳細については、[ガイド付きインストールの概要](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview)をご覧ください。
    * インフラストラクチャ エージェントを手動でインストールしたい場合は、 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) 、 [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)の手動インストールのチュートリアルに従ってください。
  </Step>

  <Step>
    ## NVIDIA GPU の Flex 統合を構成する

    Flex は New Relic インフラストラクチャ エージェントにバンドルされており、NVIDIA GPU デバイスを監視するコマンド ライン ユーティリティである [NVIDIA SMI](https://developer.nvidia.com/nvidia-management-library-nvml)と統合できます。

    <Callout variant="important">
      nvidia-smi は、Linux および Windows Server に NVIDIA GPU ディスプレイ ドライバーがプリインストールされた状態で出荷されます。
    </Callout>

    Flex を構成するには、次の手順に従います。

    1. このパスに `nvidia-smi-gpu-monitoring.yml` という名前のファイルを作成します。

```shell
sudo touch /etc/newrelic-infra/integrations.d/nvidia-smi-gpu-monitoring.yml
```

       [git リポジトリ](https://github.com/newrelic/nri-flex/blob/master/examples/nvidia-smi-gpu-monitoring.yml)からダウンロードすることもできます。

    2. 統合構成を使用して`nvidia-smi-gpu-monitoring.yml`ファイルを更新します。

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
    ## GPU メトリクスが取り込まれていることを確認する

    Flex 構成はインフラストラクチャ エージェントによって自動的に検出され、実行されるため、エージェントを再起動する必要はありません。次の NRQL クエリを実行すると、メトリクスが取り込まれていることを確認できます。

```sql
SELECT * FROM NvidiaGpuSample
```
  </Step>

  <Step>
    ## アプリケーションを監視する

    事前に構築されたダッシュボード テンプレートを使用して、GPU メトリクスを監視できます。次の手順を実行します：

    1. <DNT>
         **[one.newrelic.com](https://one.newrelic.com/)**
       </DNT>

       に移動し、

       <DNT>
         **Dashboards**
       </DNT>

       をクリックします。

    2. <DNT>
         **Import dashboard**
       </DNT>

       タブをクリックします。

    3. [NVIDIA GPU ダッシュボード](https://raw.githubusercontent.com/newrelic/nri-flex/master/examples/nvidia-smi-gpu-monitoring-dashboard.json)からファイルの内容 ( `.json` ) をコピーします。

    4. ダッシュボードをインポートする必要があるターゲット アカウントを選択します。

    5. <DNT>
         **Import dashboard**
       </DNT>

       をクリックしてアクションを確認します。

       `NVIDIA GPU Monitoring`ダッシュボードはカスタムダッシュボードとみなされ、 <DNT>**Dashboards**</DNT> UI に表示されます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)を参照してください。

       利用可能なすべてのテレメトリを表示する NRQL クエリは次のとおりです。

```sql
SELECT * FROM NvidiaGpuSample
```
  </Step>
</Steps>

## 次は何ですか？ [#next]

Flex 構成を調整して、NVIDIA SMI ユーティリティから入手可能な情報を含めたり除外したりできます。

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。

* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。

* [ダッシュボードを管理して](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)、

  <InlinePopover type="dashboards"/>

  表示モードを調整したり、ダッシュボードにコンテンツを追加したりできます。
