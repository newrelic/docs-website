---
title: OpenStack コントローラーの統合
tags:
  - Openstack Controller integrationn
  - New Relic integrations
metaDescription: Install our Openstack Controller dashboards and see your Openstack Controller data in New Relic.
freshnessValidatedDate: '2023-08-28T00:00:00.000Z'
translationType: machine
---

OpenStack コントローラーの統合は、すべての計算ノードとそれを実行しているサーバーから情報を収集するように設計されています。これらの OpenStack サービスから収集されたすべてのメトリクスは、分析、視覚化、アラートのために New Relic アカウント インサイト (NRDB) に取り込まれます。そのため、最も重要なデータをすべて 1 か所で確認できます。

<img
  title="Openstack Controller dashboard"
  alt="Openstack Controller dashboard"
  src="/images/infrastructure_screenshot-full_openstack-controller-dashboard.webp"
/>

<figcaption>
  Openstack コントローラーをセットアップした後、Openstack コントローラーのメトリクス用のダッシュボードをインストールできます。
</figcaption>

## インフラストラクチャエージェントをインストールします [#infra]

データを New Relic に取り込むには、インフラストラクチャ エージェントをインストールします。当社のインフラストラクチャ エージェントはデータを収集して取り込むので、アプリのパフォーマンスを追跡できます。NRI-Flex 統合をサポートするには、バージョンが 1.10.7 以降である必要があります。

インフラストラクチャ エージェントは、次の 2 つの方法でインストールできます。

* [ガイド付きインストール](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd)は、システムを検査し、システムに最適なアプリケーション監視エージェントとともにインフラストラクチャ エージェントをインストールする CLI ツールです。ガイド付きインストールの仕組みの詳細については、[ガイド付きインストールの概要](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview)をご覧ください。
* インフラストラクチャ エージェントを手動でインストールする場合は、 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux)、 [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)、または [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/)の手動インストールのチュートリアルに従うことができます。

## nr1-openstack を構成する

1. リポジトリのクローンを作成する

   ```
   git clone https://github.com/newrelic-experimental/nr1-openstack
   ```

2. このコマンドを使用して、クローンされたリポジトリにある`openstack-agent`ディレクトリを開きます。

   ```shell
   cd nr1-openstack/openstack-agent/
   ```

3. ファイル名 `config/os-config.json.template` を `config/os-config.json` に変更し、以下のようにファイルを編集します。

   * `nr_agent_home`を更新するには、複製したリポジトリから<DNT>**config/**</DNT>フォルダーの親ディレクトリを入力する必要があります。

   * 以下のコマンドを実行して、エンドポイント URL の詳細を表示します。

     ```shell
     openstack catalog list
     ```

   * `keystone_url`の値を取得するには、 `name: keystone` と `type: identity`のエンドポイント URL をコピーします。

   * `keystone_api_version`を見つけるには、以下のコマンドを実行します。

     ```shell
     curl -i http://<HOST_IP>/identify
     ```

   * `glance_api_version`を見つけるには、以下のコマンドを実行します。

     ```shell
     curl -i http://<HOST_IP>/image
     ```

   * openstack ログイン パスワードを使用して、以下の構成ファイルの `ADMIN_PASSWORD` を更新します。

   json ファイルが更新されると、次のようになります。

   ```
   {
     "config": {
       "nr_agent_home": "nr_agent_home",
       "keystone_url": "http://HOST_IP/identity",
       "keystone_api_version": "v3",
       "nova_api_version": "v2.1",
       "cinder_api_version": "v3",
       "neutron_api_version": "v2.0",
       "glance_api_version": "v2.16",
       "ssl_verify": false,
       "add_lists": true,
       "user": {
         "password": "ADMIN_PASSWORD",
         "name": "admin",
         "domain": {
           "id": "default"
         }
       },
       "service_types": {
         "keystone": {
           "enabled": true,
           "component_name": "identity",
           "metrics": [
             "openstack.identity.credentials_count",
             "openstack.identity.domains_count",
             "openstack.identity.groups_count",
             "openstack.identity.policies_count",
             "openstack.identity.projects_count",
             "openstack.identity.regions_count",
             "openstack.identity.roles_count",
             "openstack.identity.services_count",
             "openstack.identity.users_count",
             "openstack.identity.floatingips_count",
             "openstack.identity.routers_count",
             "openstack.identity.security_groups_count",
             "openstack.identity.subnets_count"
           ]
         },
         "hypervisors": {
           "enabled": true,
           "component_name": "nova",
           "metrics": [
             "openstack.nova.hypervisor.current_workload",
             "openstack.nova.hypervisor.disk_available_least",
             "openstack.nova.hypervisor.free_disk_gb",
             "openstack.nova.hypervisor.free_ram_mb",
             "openstack.nova.hypervisor.host_ip",
             "openstack.nova.hypervisor.hypervisor_hostname",
             "openstack.nova.hypervisor.hypervisor_type",
             "openstack.nova.hypervisor.hypervisor_version",
             "openstack.nova.hypervisor.id",
             "openstack.nova.hypervisor.load_average_1",
             "openstack.nova.hypervisor.load_average_15",
             "openstack.nova.hypervisor.load_average_5",
             "openstack.nova.hypervisor.local_gb",
             "openstack.nova.hypervisor.local_gb_used",
             "openstack.nova.hypervisor.memory_mb",
             "openstack.nova.hypervisor.memory_mb_used",
             "openstack.nova.hypervisor.running_vms",
             "openstack.nova.hypervisor.service.disabled_reason",
             "openstack.nova.hypervisor.service.host",
             "openstack.nova.hypervisor.service.id",
             "openstack.nova.hypervisor.state",
             "openstack.nova.hypervisor.status",
             "openstack.nova.hypervisor.uptime",
             "openstack.nova.hypervisor.user_count",
             "openstack.nova.hypervisor.vcpus",
             "openstack.nova.hypervisor.vcpus_used"
           ]
         },
         "resource_providers": {
           "enabled": true,
           "component_name": "placement",
           "metrics": [
             "openstack.placement.inventories.DISK_GB.allocation_ratio",
             "openstack.placement.inventories.DISK_GB.max_unit",
             "openstack.placement.inventories.DISK_GB.min_unit",
             "openstack.placement.inventories.DISK_GB.reserved",
             "openstack.placement.inventories.DISK_GB.step_size",
             "openstack.placement.inventories.DISK_GB.total",
             "openstack.placement.inventories.MEMORY_MB.allocation_ratio",
             "openstack.placement.inventories.MEMORY_MB.max_unit",
             "openstack.placement.inventories.MEMORY_MB.min_unit",
             "openstack.placement.inventories.MEMORY_MB.reserved",
             "openstack.placement.inventories.MEMORY_MB.step_size",
             "openstack.placement.inventories.MEMORY_MB.total",
             "openstack.placement.inventories.VCPU.allocation_ratio",
             "openstack.placement.inventories.VCPU.max_unit",
             "openstack.placement.inventories.VCPU.min_unit",
             "openstack.placement.inventories.VCPU.reserved",
             "openstack.placement.inventories.VCPU.step_size",
             "openstack.placement.inventories.VCPU.total",
             "openstack.placement.resource.name",
             "openstack.placement.resource.uuid",
             "openstack.placement.resource_provider_generation",
             "openstack.placement.usages.DISK_GB",
             "openstack.placement.usages.MEMORY_MB",
             "openstack.placement.usages.VCPU"
           ]
         },
         "images": {
           "enabled": true,
           "component_name": "glance",
           "metrics": [
             "openstack.glance.image.AppCode",
             "openstack.glance.image.Name",
             "openstack.glance.image.ServiceName",
             "openstack.glance.image.ServiceOwner",
             "openstack.glance.image.signature_verified",
             "openstack.glance.image.image_type",
             "openstack.glance.image.checksum",
             "openstack.glance.image.container_format",
             "openstack.glance.image.created_at",
             "openstack.glance.image.disk_format",
             "openstack.glance.image.file",
             "openstack.glance.image.hw_rng_model",
             "openstack.glance.image.id",
             "openstack.glance.image.min_disk",
             "openstack.glance.image.min_ram",
             "openstack.glance.image.name",
             "openstack.glance.image.os_hash_algo",
             "openstack.glance.image.os_hash_value",
             "openstack.glance.image.os_hidden",
             "openstack.glance.image.owner",
             "openstack.glance.image.owner_specified.openstack.md5",
             "openstack.glance.image.owner_specified.openstack.object",
             "openstack.glance.image.owner_specified.openstack.sha256",
             "openstack.glance.image.protected",
             "openstack.glance.image.schema",
             "openstack.glance.image.self",
             "openstack.glance.image.size",
             "openstack.glance.image.status",
             "openstack.glance.image.tags",
             "openstack.glance.image.updated_at",
             "openstack.glance.image.virtual_size",
             "openstack.glance.image.visibility"
           ]

         },
         "nova": {
           "enabled": true,
           "component_name": "compute",
           "metrics": [
             "openstack.compute.agents_count",
             "openstack.compute.aggregates_count",
             "openstack.compute.flavors_count",
             "openstack.compute.keypairs_count",
             "openstack.compute.services_count"
           ]
         },
         "block_storage": {
           "enabled": true,
           "component_name": "cinder",
           "metrics": [
             "openstack.cinder.limits.maxTotalBackupGigabytes",
             "openstack.cinder.limits.maxTotalBackups",
             "openstack.cinder.limits.maxTotalSnapshots",
             "openstack.cinder.limits.maxTotalVolumeGigabytes",
             "openstack.cinder.limits.maxTotalVolumes",
             "openstack.cinder.limits.totalBackupGigabytesUsed",
             "openstack.cinder.limits.totalBackupsUsed",
             "openstack.cinder.limits.totalGigabytesUsed",
             "openstack.cinder.limits.totalSnapshotsUsed",
             "openstack.cinder.limits.totalVolumesUsed",
             "openstack.cinder.snapshots.count",
             "openstack.cinder.snapshots.size",
             "openstack.cinder.volumes.count",
             "openstack.cinder.volumes.size"
           ]
         },
         "limits": {
           "enabled": true,
           "component_name": "nova",
           "metrics": [
             "openstack.nova.limits.maxImageMeta",
             "openstack.nova.limits.maxPersonality",
             "openstack.nova.limits.maxPersonalitySize",
             "openstack.nova.limits.maxSecurityGroupRules",
             "openstack.nova.limits.maxSecurityGroups",
             "openstack.nova.limits.maxServerGroupMembers",
             "openstack.nova.limits.maxServerGroups",
             "openstack.nova.limits.maxServerMeta",
             "openstack.nova.limits.maxTotalCores",
             "openstack.nova.limits.maxTotalFloatingIps",
             "openstack.nova.limits.maxTotalInstances",
             "openstack.nova.limits.maxTotalKeypairs",
             "openstack.nova.limits.maxTotalRAMSize",
             "openstack.nova.limits.totalCoresUsed",
             "openstack.nova.limits.totalFloatingIpsUsed",
             "openstack.nova.limits.totalInstancesUsed",
             "openstack.nova.limits.totalRAMUsed",
             "openstack.nova.limits.totalSecurityGroupsUsed",
             "openstack.nova.limits.totalServerGroupsUsed"
           ]
         },
         "servers": {
           "enabled": true,
           "component_name": "nova",
           "metrics": [
             "openstack.nova.server.cpu0_time",
             "openstack.nova.server.cpu1_time",
             "openstack.nova.server.cpu2_time",
             "openstack.nova.server.cpu3_time",
             "openstack.nova.server.cpu4_time",
             "openstack.nova.server.cpu5_time",
             "openstack.nova.server.cpu6_time",
             "openstack.nova.server.cpu7_time",
         "openstack.nova.server.hypervisor_name",
             "openstack.nova.server.id",
             "openstack.nova.server.memory",
             "openstack.nova.server.memory-actual",
             "openstack.nova.server.memory-available",
             "openstack.nova.server.memory-disk_caches",
             "openstack.nova.server.memory-hugetlb_pgalloc",
             "openstack.nova.server.memory-hugetlb_pgfail",
             "openstack.nova.server.memory-last_update",
             "openstack.nova.server.memory-major_fault",
             "openstack.nova.server.memory-minor_fault",
             "openstack.nova.server.memory-rss",
             "openstack.nova.server.memory-swap_in",
             "openstack.nova.server.memory-swap_out",
             "openstack.nova.server.memory-unused",
             "openstack.nova.server.memory-usable",
             "openstack.nova.server.name",
             "openstack.nova.server.rx",
             "openstack.nova.server.rx_drop",
             "openstack.nova.server.rx_errors",
             "openstack.nova.server.rx_packets",
             "openstack.nova.server.tx",
             "openstack.nova.server.tx_drop",
             "openstack.nova.server.tx_errors",
             "openstack.nova.server.tx_packets",
             "openstack.nova.server.memory-hugetlb_pgfail",
             "openstack.nova.server.vda_errors",
             "openstack.nova.server.vda_read",
             "openstack.nova.server.vda_read_req",
             "openstack.nova.server.vda_write",
             "openstack.nova.server.vda_write_req",
             "openstack.nova.server.vdb_errors",
             "openstack.nova.server.vdb_read",
             "openstack.nova.server.vdb_read_req",
             "openstack.nova.server.vdb_write",
             "openstack.nova.server.vdb_write_req",
             "openstack.nova.server.vdc_errors",
             "openstack.nova.server.vdc_read",
             "openstack.nova.server.vdc_read_req",
             "openstack.nova.server.vdc_write",
             "openstack.nova.server.vdc_write_req",
             "openstack.nova.server.vdd_errors",
             "openstack.nova.server.vdd_read",
             "openstack.nova.server.vdd_read_req",
             "openstack.nova.server.vdd_write",
             "openstack.nova.server.vdd_write_req",
             "openstack.nova.server.vde_errors",
             "openstack.nova.server.vde_read",
             "openstack.nova.server.vde_read_req",
             "openstack.nova.server.vde_write",
             "openstack.nova.server.vde_write_req"
           ]
         },
         "networks": {
           "enabled": true,
           "component_name": "neutron",
           "metrics": [
             "openstack.neutron.network.admin_state_up",
             "openstack.neutron.network.created_at",
             "openstack.neutron.network.description",
             "openstack.neutron.network.floatingips_count",
             "openstack.neutron.network.id",
             "openstack.neutron.network.ipv4_address_scope",
             "openstack.neutron.network.ipv6_address_scope",
             "openstack.neutron.network.is_default",
             "openstack.neutron.network.l2_adjacency",
             "openstack.neutron.network.mtu",
             "openstack.neutron.network.name",
             "openstack.neutron.network.port_security_enabled",
             "openstack.neutron.network.project_id",
             "openstack.neutron.network.provider:network_type",
             "openstack.neutron.network.provider:physical_network",
             "openstack.neutron.network.provider:segmentation_id",
             "openstack.neutron.network.qos_policy_id",
             "openstack.neutron.network.revision_number",
             "openstack.neutron.network.router:external",
             "openstack.neutron.network.routers_count",
             "openstack.neutron.network.security_groups_count",
             "openstack.neutron.network.shared",
             "openstack.neutron.network.status",
             "openstack.neutron.network.subnets_count",
             "openstack.neutron.network.tenant_id",
             "openstack.neutron.network.updated_at"
           ]
         }
       },
       "logging": {
         "logger_name": "nr.os.mon",
         "log_file_name": "nr_openstack_agent.log",
         "log_level": "WARNING",
         "formatter": "%(asctime)-15s | %(name)-18s | %(process)d | %(levelname)-8s | %(threadName)s | %(funcName)-27s | %(lineno)04d | %(message)s"
       }
     }
   }

   ```

4. 以下のコマンドを使用して、<DNT>**scripts**</DNT> フォルダーの実行権限を付与します (<DNT>**scripts/flex-osmetrics.sh**</DNT> はNew Relic Infrastructureエージェントによって呼び出されます)

   ```shell
   chmod +x scripts/flex-osmetrics.sh
   ```

5. <DNT>**config/os-config.json**</DNT>でそのリソースの<DNT>**enabled**</DNT>を<DNT>**false**</DNT>に設定すると、リソースのキャプチャを無効にできます。

## OpenStack 用の nri-flex の構成

インフラストラクチャ エージェントをホストにインストールしたら。`nri-flex` バイナリも一緒にインストールされます。

フレックス構成ファイルを作成するには、次の手順に従います。

<CollapserGroup>
  <Collapser
    id="file1"
    title="ファイル 1. flex-openstack-system.yaml ファイルを作成します。"
  >
    1. このパスに `flex-openstack-system.yaml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `flex-openstack-system.yml` を次の構成で更新します。

       * <DNT>
           **variable_store**
         </DNT>

         で、 `authUrl` 、 `userDomainID` 、 `username` 、および`password`変数の値を Openstack インストレーションの正しい値に設定します。

       構成ファイルが更新されると、次のようになります。

       ```yml
         integrations:
           - name: nri-flex
             inventory_source: metadata/system
             interval: 60s
             config:
               name: OpenStack
               variable_store:
                 authUrl: __KEYSTONE_URL__
                 userDomainID: __USER_DOMAIN_ID__
                 username: __ADMIN_USER_NAME__
                 password: __ADMIN_PASSWORD__
                 authString: --os-auth-url=${var:authUrl} --os-username=${var:username} --os-password=${var:password} --os-user-domain-id=${var:userDomainID}
               apis:
                 - name: OpenStackProjectLookup
                   commands:
                     - run: openstack project list -f json ${var:authString}
                   ignore_output: true
                 - name: OpenStackHypervisorLookup
                   commands:
                     - run: openstack hypervisor list -f json ${var:authString} --os-project-id=${lookup.OpenStackProjectLookupSample:ID}
                   custom_attributes:
                     projectID: ${lookup.OpenStackProjectLookupSample:ID}
                     projectName: ${lookup.OpenStackProjectLookupSample:Name}
                   ignore_output: true
                 - name: OpenStackServerList
                   run_async: true
                   commands:
                     - run: openstack server list -f json ${var:authString} --os-project-id=${lookup.OpenStackHypervisorLookupSample:projectID} --host=${lookup.OpenStackHypervisorLookupSample:Hypervisor Hostname}
                   custom_attributes:
                     hypervisorHostname: ${lookup.OpenStackHypervisorLookupSample:Hypervisor Hostname}
                     hypervisorID: ${lookup.OpenStackHypervisorLookupSample:ID}
                     projectID: ${lookup.OpenStackHypervisorLookupSample:projectID}
                     projectName: ${lookup.OpenStackHypervisorLookupSample:projectName}
                   ignore_output: true
                 ### Servers   -----------------------------------------------------
                 - name: System
                   run_async: true
                   entity: ${lookup.OpenStackServerListSample:hypervisorHostname}:${lookup.OpenStackServerListSample:hypervisorID}:${lookup.OpenStackServerListSample:Name}
                   commands:
                     - run: openstack server show --diagnostics ${lookup.OpenStackServerListSample:ID} -f json ${var:authString} --os-project-id=${lookup.OpenStackServerListSample:projectID}
                   custom_attributes:
                     domainID: ${var:userDomainID}
                     hypervisorHostname: ${lookup.OpenStackServerListSample:hypervisorHostname}
                     hypervisorID: ${lookup.OpenStackServerListSample:hypervisorID}
                     projectID: ${lookup.OpenStackServerListSample:projectID}
                     projectName: ${lookup.OpenStackServerListSample:projectName}
                     serverID: ${lookup.OpenStackServerListSample:ID}
                     Flavor: ${lookup.OpenStackServerListSample:Flavor}
                     Image: ${lookup.OpenStackServerListSample:Image}
                     Name: ${lookup.OpenStackServerListSample:Name}
                     Networks: ${lookup.OpenStackServerListSample:Networks}
                     Status: ${lookup.OpenStackServerListSample:Status}
                   rename_keys:
                     \S+_rx: rx
                     \S+_tx: tx
                   inventory:
                     serverID: name
                 ### Hypervisors -----------------------------------------------------
                 - name: System
                   run_async: true
                   entity: ${lookup.OpenStackHypervisorLookupSample:Hypervisor Hostname}:${lookup.OpenStackHypervisorLookupSample:ID}
                   commands:
                     - run: openstack hypervisor show ${lookup.OpenStackHypervisorLookupSample:ID} -f json ${var:authString} --os-project-id=${lookup.OpenStackHypervisorLookupSample:projectID}
                       split_by: ":"
                   remove_keys:
                     - cpu_info
                   custom_attributes:
                     domainID: ${var:userDomainID}
                   dedupe_lookups:
                     - ID
                   inventory:
                     id: name
                   value_mapper:
                     load_average=>loadAverageOneMinute:
                       - (.+), (.+), (.+)=>$1
                     load_average=>loadAverageFiveMinute:
                       - (.+), (.+), (.+)=>$2
                     load_average=>loadAverageFifteenMinute:
                       - (.+), (.+), (.+)=>$3
       ```
  </Collapser>

  <Collapser
    id="file2"
    title="ファイル 2. openstack.block_storage.yml ファイルを作成する"
  >
    1. このパスに `openstack.block_storage.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `openstack.block_storage.yml` を次の構成で更新します。

       * yaml ファイルの

         <DNT>
           **variable_store**
         </DNT>

         で、 `nrAgentHome`変数の値を New Relic openstack エージェントのホーム ディレクトリ ( `ohi-integration/`フォルダの親ディレクトリ) に設定します。

       構成ファイルが更新されると、次のようになります。

       ```yml
         ---
         # change all base directories to NR Openstack agent home directory 
         # "_ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_" -> NR Openstack agent installation location
         integrations:
           - name: nri-flex
             interval: 30s
             config:
               name: openstackTestIntegration
               variable_store:
                 nrAgentHome: _ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_
                 osServiceType: block_storage
               apis:
                 - name: OSBlockStorage
                   commands:
                     - run: "mkdir -p ${var:nrAgentHome}/logs 2>/dev/null ; ${var:nrAgentHome}/scripts/flex-osmetrics.sh ${var:osServiceType} 2>>${var:nrAgentHome}/logs/os-mon-${var:osServiceType}-err.log"
       ```
  </Collapser>

  <Collapser
    id="file3"
    title="ファイル 3. openstack.images.yml ファイルを作成する"
  >
    1. このパスに `openstack.images.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `openstack.images.yml` を次の構成で更新します。

       * yaml ファイルの

         <DNT>
           **variable_store**
         </DNT>

         で、 `nrAgentHome`変数の値を New Relic openstack エージェントのホーム ディレクトリ ( `ohi-integration/`フォルダの親ディレクトリ) に設定します。

       構成ファイルが更新されると、次のようになります。

       ```yml
         ---
         # change all base directories to NR Openstack agent home directory 
         # "_ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_" -> NR Openstack agent installation location
         integrations:
           - name: nri-flex
             interval: 30s
             config:
               name: openstackTestIntegration
               variable_store:
                 nrAgentHome: _ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_
                 osServiceType: block_storage
               apis:
                 - name: OSBlockStorage
                   commands:
                     - run: "mkdir -p ${var:nrAgentHome}/logs 2>/dev/null ; ${var:nrAgentHome}/scripts/flex-osmetrics.sh ${var:osServiceType} 2>>${var:nrAgentHome}/logs/os-mon-${var:osServiceType}-err.log"
       ```
  </Collapser>

  <Collapser
    id="file4"
    title="ファイル 4. openstack.keystone.yml ファイルを作成する"
  >
    1. このパスに `openstack.keystone.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `openstack.keystone.yml` を次の構成で更新します。

       * yaml ファイルの

         <DNT>
           **variable_store**
         </DNT>

         で、 `nrAgentHome`変数の値を New Relic openstack エージェントのホーム ディレクトリ ( `ohi-integration/`フォルダの親ディレクトリ) に設定します。設定ファイルが更新されると、次のようになります。

       ```yml
         ---
         # change all base directories to NR Openstack agent home directory 
         # "_ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_" -> NR Openstack agent installation location
         integrations:
           - name: nri-flex
             interval: 30s
             config:
               name: openstackTestIntegration
               variable_store:
                 nrAgentHome: _ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_
                 osServiceType: keystone
               apis:
                 - name: OSKeystone
                   commands:
                     - run: "mkdir -p ${var:nrAgentHome}/logs 2>/dev/null ; ${var:nrAgentHome}/scripts/flex-osmetrics.sh ${var:osServiceType} 2>>${var:nrAgentHome}/logs/os-mon-${var:osServiceType}-err.log"
       ```
  </Collapser>

  <Collapser
    id="file5"
    title="ファイル 5. openstack.limits.yml ファイルを作成する"
  >
    1. このパスに `openstack.limits.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `openstack.limits.yml` を次の構成で更新します。

       * yaml ファイルの

         <DNT>
           **variable_store**
         </DNT>

         で、 `nrAgentHome`変数の値を New Relic openstack エージェントのホーム ディレクトリ ( `ohi-integration/`フォルダの親ディレクトリ) に設定します。設定ファイルが更新されると、次のようになります。

       ```yml
         ---
         # change all base directories to NR Openstack agent home directory 
         # "_ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_" -> NR Openstack agent installation location
         integrations:
           - name: nri-flex
             interval: 30s
             config:
               name: openstackTestIntegration
               variable_store:
                 nrAgentHome: _ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_
                 osServiceType: limits
               apis:
                 - name: OSLimit
                   commands:
                     - run: "mkdir -p ${var:nrAgentHome}/logs 2>/dev/null ; ${var:nrAgentHome}/scripts/flex-osmetrics.sh ${var:osServiceType} 2>>${var:nrAgentHome}/logs/os-mon-${var:osServiceType}-err.log"
       ```
  </Collapser>

  <Collapser
    id="file6"
    title="ファイル 6. openstack.networks.yml ファイルを作成する"
  >
    1. このパスに `openstack.networks.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `openstack.networks.yml` を次の構成で更新します。

       * yaml ファイルの

         <DNT>
           **variable_store**
         </DNT>

         で、 `nrAgentHome`変数の値を New Relic openstack エージェントのホーム ディレクトリ ( `ohi-integration/`フォルダの親ディレクトリ) に設定します。設定ファイルが更新されると、次のようになります。

       ```yml
         ---
         # change all base directories to NR Openstack agent home directory 
         # "_ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_" -> NR Openstack agent installation location
         integrations:
           - name: nri-flex
             interval: 30s
             config:
               name: openstackTestIntegration
               variable_store:
                 nrAgentHome: _ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_
                 osServiceType: networks
               apis:
                 - name: OSNetwork
                   commands:
                     - run: "mkdir -p ${var:nrAgentHome}/logs 2>/dev/null ; ${var:nrAgentHome}/scripts/flex-osmetrics.sh ${var:osServiceType} 2>>${var:nrAgentHome}/logs/os-mon-${var:osServiceType}-err.log"
       ```
  </Collapser>

  <Collapser
    id="file7"
    title="ファイル 7. openstack.nova.yml ファイルを作成する"
  >
    1. このパスに `openstack.nova.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `openstack.nova.yml` を次の構成で更新します。

       * yaml ファイルの

         <DNT>
           **variable_store**
         </DNT>

         で、 `nrAgentHome`変数の値を New Relic openstack エージェントのホーム ディレクトリ ( `ohi-integration/`フォルダの親ディレクトリ) に設定します。設定ファイルが更新されると、次のようになります。

       ```yml
         ---
         # change all base directories to NR Openstack agent home directory 
         # "_ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_" -> NR Openstack agent installation location
         integrations:
           - name: nri-flex
             interval: 30s
             config:
               name: openstackTestIntegration
               variable_store:
                 nrAgentHome: _ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_
                 osServiceType: nova
               apis:
                 - name: OSNova
                   commands:
                     - run: "mkdir -p ${var:nrAgentHome}/logs 2>/dev/null ; ${var:nrAgentHome}/scripts/flex-osmetrics.sh ${var:osServiceType} 2>>${var:nrAgentHome}/logs/os-mon-${var:osServiceType}-err.log"
       ```
  </Collapser>

  <Collapser
    id="file8"
    title="ファイル 8. openstack.resource_providers.yml ファイルを作成する"
  >
    1. このパスに `openstack.resource_providers.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `openstack.resource_providers.yml` を次の構成で更新します。

       * yaml ファイルの

         <DNT>
           **variable_store**
         </DNT>

         で、 `nrAgentHome`変数の値を New Relic openstack エージェントのホーム ディレクトリ ( `ohi-integration/`フォルダの親ディレクトリ) に設定します。設定ファイルが更新されると、次のようになります。

       ```yml
         ---
         # change all base directories to NR Openstack agent home directory 
         # "_ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_" -> NR Openstack agent installation location
         integrations:
           - name: nri-flex
             interval: 30s
             config:
               name: openstackTestIntegration
               variable_store:
                 nrAgentHome: _ABSOLUTE_PATH_TO_NR_AGENT_HOME_DIR_
                 osServiceType: resource_providers
               apis:
                 - name: OSResourceProvider
                   commands:
                     - run: "mkdir -p ${var:nrAgentHome}/logs 2>/dev/null ; ${var:nrAgentHome}/scripts/flex-osmetrics.sh ${var:osServiceType} 2>>${var:nrAgentHome}/logs/os-mon-${var:osServiceType}-err.log"    
       ```
  </Collapser>
</CollapserGroup>

## Openstack コントローラーのログを New Relic に転送する

[ログ転送を](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/)使用して、Openstack コントローラーのログを New Relic に転送できます。

Linux マシンでは、 `logging.yml` という名前のログ ファイルが次のパスに存在する必要があります。

```shell
cd /etc/newrelic-infra/logging.d/
```

以下のスクリプトを`logging.yml`ファイルに追加して、Openstack コントローラーのログを New Relic に送信します。

```yml
logs:
  - name: openstack.log
    file: <nr1-openstack-DIRECTORY>/openstack-agent/logs/nr_openstack_agent.log
    attributes:
      logtype: openstack_log
```

## New Relic インフラストラクチャ エージェントを再起動します

データの読み取りを開始する前に、 [インフラストラクチャ エージェントのドキュメント](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) の手順に従ってインフラストラクチャ エージェントを再起動します。

```shell
sudo systemctl restart newrelic-infra.service
```

## アプリケーションを監視する

`Openstack Controller` という名前の事前に構築されたダッシュボード テンプレートを選択して、OpenStack アプリケーションのメトリクスを監視できます。

1. <DNT>
     **[one.newrelic.com](https://one.newrelic.com/)**
   </DNT>

   に移動し、

   <DNT>
     **+ Integrations & Agents**
   </DNT>

   をクリックします。

2. <DNT>
     **Dashboards**
   </DNT>

   タブをクリックします。

3. 検索ボックスに `Openstack Controller`と入力します。

4. 事前構築ダッシュボードが表示されたら、それをクリックしてアカウントにインストールします。

上記の手順に従ってアプリケーションが統合されると、ダッシュボードにメトリクスが表示されるはずです。

OpenStack クイックスタートを計測し、メトリクスとアラートを確認するには、 <DNT>**Install now**</DNT>ボタンがある[OpenStack コントローラー クイックスタート ページに](https://newrelic.com/instant-observability/openstack-controller)アクセスすることもできます。

以下に、クエリの例を示します。

<DNT>**Example:**</DNT> イベントタイプの数を表示する

```sql
select count(*) from OSBlockStorageSample, OSLimitSample, OSNetworkSample, OSResourceProviderSample, OSImageSample, OSKeystoneSample, OSNovaSample since 10 minutes ago facet eventType() timeseries
```

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。

* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。

* [ダッシュボードを管理して](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)、

  <InlinePopover type="dashboards"/>

  表示モードを調整したり、ダッシュボードにコンテンツを追加したりできます。
