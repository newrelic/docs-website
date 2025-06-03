---
title: Integração do Openstack Controller
tags:
  - Openstack Controller integrationn
  - New Relic integrations
metaDescription: Install our Openstack Controller dashboards and see your Openstack Controller data in New Relic.
freshnessValidatedDate: '2023-08-28T00:00:00.000Z'
translationType: machine
---

Nossa integração de controlador openstack foi projetada para coletar informações de todos os nós do computador e dos servidores que os executam. Todas as métricas coletadas desses serviços openstack são ingeridas em seus New Relic de contas insights (NRDB) para análise, visualização e alertas. Assim você pode visualizar todos os seus dados mais importantes, local completo.

<img
  title="Openstack Controller dashboard"
  alt="Openstack Controller dashboard"
  src="/images/infrastructure_screenshot-full_openstack-controller-dashboard.webp"
/>

<figcaption>
  Após configurar nosso Openstack Controller, você pode instalar um dashboard para sua métrica Openstack Controller.
</figcaption>

## Instalar o agente de infraestrutura [#infra]

Para colocar dados no New Relic, instale nosso agente de infraestrutura. Nosso agente de infraestrutura coleta e ingere dados para que você possa acompanhar o desempenho do seu aplicativo. A versão deve ser 1.10.7 ou superior para suportar a integração NRI-Flex.

É possível instalar o agente de infraestrutura de duas maneiras diferentes:

* Nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) é uma ferramenta CLI que inspeciona seu sistema e instala o agente de infraestrutura junto com o agente de monitoramento do aplicativo que melhor funciona para seu sistema. Para saber mais sobre como funciona nossa instalação guiada, confira nossa [Visão geral da instalação guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Se preferir instalar nosso agente de infraestrutura manualmente, você pode seguir um tutorial para instalação manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) ou [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Configurar nr1-openstack

1. Clonar o repositório

   ```
   git clone https://github.com/newrelic-experimental/nr1-openstack
   ```

2. Use este comando para abrir o diretório `openstack-agent` presente no repositório clonado.

   ```shell
   cd nr1-openstack/openstack-agent/
   ```

3. Renomeie o arquivo `config/os-config.json.template` para `config/os-config.json` e edite o arquivo conforme mencionado abaixo

   * Atualize `nr_agent_home`, você precisa inserir o diretório pai da pasta <DNT>**config/**</DNT> do seu repositório clonado.

   * Execute o comando abaixo para ver detalhes dos URLs do endpoint.

     ```shell
     openstack catalog list
     ```

   * Para obter o valor de `keystone_url`, copie o URL do endpoint para `name: keystone` e `type: identity`.

   * Para encontrar o `keystone_api_version`, execute o comando abaixo.

     ```shell
     curl -i http://<HOST_IP>/identify
     ```

   * Para encontrar o `glance_api_version`, execute o comando abaixo.

     ```shell
     curl -i http://<HOST_IP>/image
     ```

   * Atualize `ADMIN_PASSWORD` no arquivo de configuração abaixo, usando sua senha de login do openstack.

   Depois que seu arquivo JSON for atualizado, ele ficará assim:

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

4. Use o comando abaixo para conceder permissão de execução para a pasta <DNT>**scripts**</DNT> (<DNT>**scripts/flex-osmetrics.sh**</DNT> será invocado pelo agente New Relic Infrastructure )

   ```shell
   chmod +x scripts/flex-osmetrics.sh
   ```

5. Você pode desativar a captura de quaisquer recursos definindo <DNT>**enabled**</DNT> como <DNT>**false**</DNT> para esse recurso em <DNT>**config/os-config.json**</DNT>.

## Configurando nri-flex para openstack

Depois de instalar o agente de infraestrutura em seu host. O binário `nri-flex` também é instalado com ele.

Para criar arquivos de configuração flexíveis, siga estas etapas:

<CollapserGroup>
  <Collapser
    id="file1"
    title="Arquivo 1. Crie o arquivo flex-openstack-system.yaml"
  >
    1. Crie um arquivo chamado `flex-openstack-system.yaml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `flex-openstack-system.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         , defina os valores das variáveis `authUrl`, `userDomainID`, `username` e `password` com os valores corretos para sua instalação do Openstack.

       Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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
    title="Arquivo 2. Crie o arquivo openstack.block_storage.yml"
  >
    1. Crie um arquivo chamado `openstack.block_storage.yml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `openstack.block_storage.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         no arquivo yaml para definir o valor da variável `nrAgentHome` para o diretório inicial do agente openstack da New Relic (diretório pai da pasta `ohi-integration/` )

       Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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
    title="Arquivo 3. Crie o arquivo openstack.images.yml"
  >
    1. Crie um arquivo chamado `openstack.images.yml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `openstack.images.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         no arquivo yaml para definir o valor da variável `nrAgentHome` para o diretório inicial do agente openstack da New Relic (diretório pai da pasta `ohi-integration/` )

       Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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
    title="Arquivo 4. Crie o arquivo openstack.keystone.yml"
  >
    1. Crie um arquivo chamado `openstack.keystone.yml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `openstack.keystone.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         no arquivo yaml para definir o valor da variável `nrAgentHome` para o diretório inicial do agente openstack New Relic (diretório pai da pasta `ohi-integration/` ). Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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
    title="Arquivo 5. Crie o arquivo openstack.limits.yml"
  >
    1. Crie um arquivo chamado `openstack.limits.yml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `openstack.limits.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         no arquivo yaml para definir o valor da variável `nrAgentHome` para o diretório inicial do agente openstack New Relic (diretório pai da pasta `ohi-integration/` ). Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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
    title="Arquivo 6. Crie o arquivo openstack.networks.yml"
  >
    1. Crie um arquivo chamado `openstack.networks.yml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `openstack.networks.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         no arquivo yaml para definir o valor da variável `nrAgentHome` para o diretório inicial do agente openstack New Relic (diretório pai da pasta `ohi-integration/` ). Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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
    title="Arquivo 7. Crie o arquivo openstack.nova.yml"
  >
    1. Crie um arquivo chamado `openstack.nova.yml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `openstack.nova.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         no arquivo yaml para definir o valor da variável `nrAgentHome` para o diretório inicial do agente openstack New Relic (diretório pai da pasta `ohi-integration/` ). Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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
    title="Arquivo 8. Crie o arquivo openstack.resource_providers.yml"
  >
    1. Crie um arquivo chamado `openstack.resource_providers.yml` neste caminho.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `openstack.resource_providers.yml` com estas configurações:

       * Em

         <DNT>
           **variable_store**
         </DNT>

         no arquivo yaml para definir o valor da variável `nrAgentHome` para o diretório inicial do agente openstack New Relic (diretório pai da pasta `ohi-integration/` ). Depois que seu arquivo de configuração for atualizado, ele ficará assim:

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

## Encaminhar log do controlador Openstack para New Relic

Você pode usar nosso [encaminhamento de logs](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para encaminhar o log do Openstack Controller para New Relic.

Em máquinas Linux, seu arquivo de log denominado `logging.yml` deve estar presente neste caminho:

```shell
cd /etc/newrelic-infra/logging.d/
```

Adicione o script abaixo ao arquivo `logging.yml` para enviar o log do Openstack Controller para New Relic.

```yml
logs:
  - name: openstack.log
    file: <nr1-openstack-DIRECTORY>/openstack-agent/logs/nr_openstack_agent.log
    attributes:
      logtype: openstack_log
```

## Reinicie o agente do New Relic Infrastructure

Antes de começar a ler seus dados, use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura.

```shell
sudo systemctl restart newrelic-infra.service
```

## Monitor seu aplicativo

Você pode escolher nosso modelo dashboard pré-construído chamado `Openstack Controller` para monitor seu aplicativo métrica Openstack.

1. Vá para

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/)**
   </DNT>

   e clique em

   <DNT>
     **+ Integrations & Agents**
   </DNT>

   .

2. Clique na guia

   <DNT>
     **Dashboards**
   </DNT>

   .

3. Na caixa de pesquisa, digite `Openstack Controller`.

4. Ao ver nosso dashboard pré-construído, clique nele para instalá-lo em sua conta.

Depois que seu aplicativo estiver integrado seguindo as etapas acima, o dashboard deverá exibir métricas.

Para instrumentar o OpenStack início rápido e ver métricas e alertas, você também pode seguir nossa [página OpenStack Controller início rápido](https://newrelic.com/instant-observability/openstack-controller) que possui um botão <DNT>**Install now**</DNT> .

Aqui estão alguns exemplos de consulta:

<DNT>**Example:**</DNT> visualizar a contagem dos tipos de eventos

```sql
select count(*) from OSBlockStorageSample, OSLimitSample, OSNetworkSample, OSResourceProviderSample, OSImageSample, OSKeystoneSample, OSNovaSample since 10 minutes ago facet eventType() timeseries
```

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o

  <InlinePopover type="dashboards"/>

  modo de exibição ou para adicionar mais conteúdo ao dashboard.
