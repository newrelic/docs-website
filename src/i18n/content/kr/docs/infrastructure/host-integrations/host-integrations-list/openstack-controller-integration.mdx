---
title: OpenStack 컨트롤러 통합
tags:
  - Openstack Controller integrationn
  - New Relic integrations
metaDescription: Install our Openstack Controller dashboards and see your Openstack Controller data in New Relic.
freshnessValidatedDate: '2023-08-28T00:00:00.000Z'
translationType: machine
---

OpenStack 컨트롤러 통합은 모든 컴퓨팅 노드와 이를 실행하는 서버에서 정보를 수집하도록 설계되었습니다. 이러한 OpenStack 서비스에서 수집된 모든 지표는 분석, 시각화 및 경고를 위해 New Relic Account Insights(NRDB)로 수집됩니다. 따라서 가장 중요한 데이터를 모두 한 곳에서 볼 수 있습니다.

<img
  title="Openstack Controller dashboard"
  alt="Openstack Controller dashboard"
  src="/images/infrastructure_screenshot-full_openstack-controller-dashboard.webp"
/>

<figcaption>
  Openstack Controller를 설정한 후 Openstack Controller 지표에 대한 대시보드를 설치할 수 있습니다.
</figcaption>

## 인프라 에이전트 설치 [#infra]

데이터를 New Relic으로 가져오려면 인프라 에이전트를 설치하십시오. 당사의 인프라 에이전트는 데이터를 수집하고 수집하므로 앱의 성능을 추적할 수 있습니다. NRI-Flex 통합을 지원하려면 버전이 1.10.7 이상이어야 합니다.

두 가지 방법으로 인프라 에이전트를 설치할 수 있습니다.

* [가이드 설치](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) 는 시스템을 검사하고 시스템에 가장 적합한 애플리케이션 모니터링 에이전트와 함께 인프라 에이전트를 설치하는 CLI 도구입니다. 가이드 설치 작동 방식에 대해 자세히 알아보려면 [가이드 설치 개요](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview) 를 확인하세요.
* 인프라 에이전트를 수동으로 설치하려면 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)또는 [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/)용 수동 설치에 대한 자습서를 따를 수 있습니다.

## nr1-openstack 구성

1. 저장소 복제

   ```
   git clone https://github.com/newrelic-experimental/nr1-openstack
   ```

2. 복제된 저장소에 있는 `openstack-agent` 디렉터리를 열려면 이 명령을 사용합니다.

   ```shell
   cd nr1-openstack/openstack-agent/
   ```

3. 파일 이름을 `config/os-config.json.template` 에서 `config/os-config.json` 로 바꾸고 아래에 설명된 대로 파일을 편집합니다.

   * `nr_agent_home` 를) 업데이트하려면 복제된 저장소에서 <DNT>**config/**</DNT> 폴더의 상위 디렉터리를 입력해야 합니다.

   * 엔드포인트 URL의 세부정보를 보려면 아래 명령을 실행하세요.

     ```shell
     openstack catalog list
     ```

   * `keystone_url` 값을 얻으려면 `name: keystone` 및 `type: identity` 에 대한 엔드포인트 URL을 복사하세요.

   * `keystone_api_version` 을 찾으려면 아래 명령을 실행하세요.

     ```shell
     curl -i http://<HOST_IP>/identify
     ```

   * `glance_api_version` 을 찾으려면 아래 명령을 실행하세요.

     ```shell
     curl -i http://<HOST_IP>/image
     ```

   * OpenStack 로그인 비밀번호를 사용하여 아래 구성 파일에서 `ADMIN_PASSWORD` 업데이트하세요.

   json 파일이 업데이트되면 다음과 같이 표시됩니다.

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

4. 아래 명령을 사용하여 <DNT>**scripts**</DNT> 폴더에 대한 실행 권한을 부여합니다(<DNT>**scripts/flex-osmetrics.sh**</DNT> 은 뉴렐릭 인프라 에이전트에 의해 호출됩니다).

   ```shell
   chmod +x scripts/flex-osmetrics.sh
   ```

5. <DNT>**config/os-config.json**</DNT> 에서 해당 리소스에 대해 <DNT>**enabled**</DNT> <DNT>**false**</DNT> 로 설정하여 리소스 캡처를 비활성화할 수 있습니다.

## OpenStack을 위한 nri-flex 구성

호스트에 인프라 에이전트를 설치한 후. `nri-flex` 바이너리도 함께 설치됩니다.

Flex 구성 파일을 만들려면 다음 단계를 따르세요.

<CollapserGroup>
  <Collapser
    id="file1"
    title="파일 1. flex-openstack-system.yaml 파일 생성"
  >
    1. 이 경로에 `flex-openstack-system.yaml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `flex-openstack-system.yml` 파일을 업데이트합니다.

       * <DNT>
           **variable_store**
         </DNT>

         아래에서 `authUrl`, `userDomainID`, `username` 및 `password` 변수의 값을 Openstack 설치에 적합한 값으로 설정합니다.

       구성 파일이 업데이트되면 다음과 같이 표시됩니다.

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
    title="파일 2. openstack.block_storage.yml 파일 생성"
  >
    1. 이 경로에 `openstack.block_storage.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `openstack.block_storage.yml` 파일을 업데이트합니다.

       * yaml 파일의

         <DNT>
           **variable_store**
         </DNT>

         에서 `nrAgentHome` 변수의 값을 뉴렐릭 openstack 에이전트의 홈 디렉터리( `ohi-integration/` 폴더의 상위 디렉터리)로 설정합니다.

       구성 파일이 업데이트되면 다음과 같이 표시됩니다.

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
    title="파일 3. openstack.images.yml 파일 생성"
  >
    1. 이 경로에 `openstack.images.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `openstack.images.yml` 파일을 업데이트합니다.

       * yaml 파일의

         <DNT>
           **variable_store**
         </DNT>

         에서 `nrAgentHome` 변수의 값을 뉴렐릭 openstack 에이전트의 홈 디렉터리( `ohi-integration/` 폴더의 상위 디렉터리)로 설정합니다.

       구성 파일이 업데이트되면 다음과 같이 표시됩니다.

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
    title="파일 4. openstack.keystone.yml 파일 생성"
  >
    1. 이 경로에 `openstack.keystone.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `openstack.keystone.yml` 파일을 업데이트합니다.

       * yaml 파일의

         <DNT>
           **variable_store**
         </DNT>

         아래에서 `nrAgentHome` 변수의 값을 뉴렐릭 openstack 에이전트의 홈 디렉터리( `ohi-integration/` 폴더의 상위 디렉터리)로 설정합니다. 설정 파일이 업데이트되면 다음과 같이 표시됩니다.

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
    title="파일 5. openstack.limits.yml 파일 생성"
  >
    1. 이 경로에 `openstack.limits.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `openstack.limits.yml` 파일을 업데이트합니다.

       * yaml 파일의

         <DNT>
           **variable_store**
         </DNT>

         아래에서 `nrAgentHome` 변수의 값을 뉴렐릭 openstack 에이전트의 홈 디렉터리( `ohi-integration/` 폴더의 상위 디렉터리)로 설정합니다. 설정 파일이 업데이트되면 다음과 같이 표시됩니다.

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
    title="파일 6. openstack.networks.yml 파일 생성"
  >
    1. 이 경로에 `openstack.networks.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `openstack.networks.yml` 파일을 업데이트합니다.

       * yaml 파일의

         <DNT>
           **variable_store**
         </DNT>

         아래에서 `nrAgentHome` 변수의 값을 뉴렐릭 openstack 에이전트의 홈 디렉터리( `ohi-integration/` 폴더의 상위 디렉터리)로 설정합니다. 설정 파일이 업데이트되면 다음과 같이 표시됩니다.

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
    title="파일 7. openstack.nova.yml 파일 생성"
  >
    1. 이 경로에 `openstack.nova.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `openstack.nova.yml` 파일을 업데이트합니다.

       * yaml 파일의

         <DNT>
           **variable_store**
         </DNT>

         아래에서 `nrAgentHome` 변수의 값을 뉴렐릭 openstack 에이전트의 홈 디렉터리( `ohi-integration/` 폴더의 상위 디렉터리)로 설정합니다. 설정 파일이 업데이트되면 다음과 같이 표시됩니다.

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
    title="파일 8. openstack.resource_providers.yml 파일 생성"
  >
    1. 이 경로에 `openstack.resource_providers.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `openstack.resource_providers.yml` 파일을 업데이트합니다.

       * yaml 파일의

         <DNT>
           **variable_store**
         </DNT>

         아래에서 `nrAgentHome` 변수의 값을 뉴렐릭 openstack 에이전트의 홈 디렉터리( `ohi-integration/` 폴더의 상위 디렉터리)로 설정합니다. 설정 파일이 업데이트되면 다음과 같이 표시됩니다.

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

## Openstack Controller 로그를 New Relic으로 전달

[로그 전달을](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) 사용하여 Openstack Controller 로그를 New Relic으로 전달할 수 있습니다.

Linux 시스템에서는 `logging.yml` 라는 로그 파일이 다음 경로에 있어야 합니다.

```shell
cd /etc/newrelic-infra/logging.d/
```

Openstack Controller 로그를 New Relic으로 보내려면 아래 스크립트를 `logging.yml` 파일에 추가하세요.

```yml
logs:
  - name: openstack.log
    file: <nr1-openstack-DIRECTORY>/openstack-agent/logs/nr_openstack_agent.log
    attributes:
      logtype: openstack_log
```

## New Relic 인프라 에이전트 다시 시작

데이터 읽기를 시작하기 전에 [인프라 에이전트 문서](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) 의 지침을 사용하여 인프라 에이전트를 다시 시작하십시오.

```shell
sudo systemctl restart newrelic-infra.service
```

## 애플리케이션 모니터링

`Openstack Controller` 이라는 사전 구축된 대시보드 템플릿을 선택하여 Openstack 애플리케이션 측정항목을 모니터링할 수 있습니다.

1. <DNT>
     **[one.newrelic.com](https://one.newrelic.com/)**
   </DNT>

   으로 이동하여

   <DNT>
     **+ Integrations & Agents**
   </DNT>

   를) 클릭합니다.

2. <DNT>
     **Dashboards**
   </DNT>

   탭을 클릭합니다.

3. 검색 상자에 `Openstack Controller`입력합니다.

4. 미리 빌드된 대시보드가 표시되면 클릭하여 계정에 설치하십시오.

위의 단계에 따라 애플리케이션이 통합되면 대시보드에 메트릭이 표시되어야 합니다.

OpenStack 퀵스타트를 다운로드하고 지표 및 알림을 보려면 <DNT>**Install now**</DNT> 버튼이 있는 [OpenStack Controller 퀵스타트 페이지를](https://newrelic.com/instant-observability/openstack-controller) 팔로우할 수도 있습니다.

다음은 몇 가지 예시 쿼리입니다.

<DNT>**Example:**</DNT> 이벤트 유형 수 보기

```sql
select count(*) from OSBlockStorageSample, OSLimitSample, OSNetworkSample, OSResourceProviderSample, OSImageSample, OSKeystoneSample, OSNovaSample since 10 minutes ago facet eventType() timeseries
```

## 다음은 뭐지?

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)

* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)

* [대시보드를 관리하여](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)

  <InlinePopover type="dashboards"/>

  디스플레이 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가하세요.
