---
title: Integración del controlador Openstack
tags:
  - Openstack Controller integrationn
  - New Relic integrations
metaDescription: Install our Openstack Controller dashboards and see your Openstack Controller data in New Relic.
freshnessValidatedDate: '2023-08-28T00:00:00.000Z'
translationType: machine
---

Nuestra integración de controlador openstack está diseñada para recopilar información de todos los nodos de cálculo y los servidores que lo ejecutan. Todas las métricas recopiladas de estos servicios de OpenStack se incorporan a la información valiosa (NRDB) de sus cuentas New Relic para su análisis, visualización y alertas. Para que puedas visualizar todos tus datos más importantes, en su lugar.

<img
  title="Openstack Controller dashboard"
  alt="Openstack Controller dashboard"
  src="/images/infrastructure_screenshot-full_openstack-controller-dashboard.webp"
/>

<figcaption>
  Después de configurar nuestro Openstack Controller, puede instalar un dashboard para su Openstack Controller métrica.
</figcaption>

## Instalar el agente de infraestructura [#infra]

Para ingresar datos en New Relic, instale nuestro agente de infraestructura. Nuestro agente de infraestructura recopila e ingiere datos para que pueda realizar un seguimiento del rendimiento de su aplicación. La versión debe ser 1.10.7 o superior para admitir la integración NRI-Flex.

Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Configurar nr1-openstack

1. Clonar el repositorio

   ```
   git clone https://github.com/newrelic-experimental/nr1-openstack
   ```

2. Utilice este comando para abrir el directorio `openstack-agent` presente en el repositorio clonado.

   ```shell
   cd nr1-openstack/openstack-agent/
   ```

3. Cambie el nombre del archivo `config/os-config.json.template` a `config/os-config.json` y edítelo como se menciona a continuación

   * Actualice `nr_agent_home`, debe ingresar al directorio principal de la carpeta <DNT>**config/**</DNT> de su repositorio clonado.

   * Ejecute el siguiente comando para ver detalles de las URL extremas.

     ```shell
     openstack catalog list
     ```

   * Para obtener el valor de `keystone_url`, copie la URL extrema de `name: keystone` y `type: identity`.

   * Para encontrar el `keystone_api_version`, ejecute el siguiente comando.

     ```shell
     curl -i http://<HOST_IP>/identify
     ```

   * Para encontrar el `glance_api_version`, ejecute el siguiente comando.

     ```shell
     curl -i http://<HOST_IP>/image
     ```

   * Actualice `ADMIN_PASSWORD` en el siguiente archivo de configuración, utilizando su contraseña de inicio de sesión de OpenStack.

   Una vez que su archivo json esté actualizado, se verá así:

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

4. Utilice el siguiente comando para otorgar permiso de ejecución para la carpeta <DNT>**scripts**</DNT> (<DNT>**scripts/flex-osmetrics.sh**</DNT> será invocado por el agente New Relic Infrastructure )

   ```shell
   chmod +x scripts/flex-osmetrics.sh
   ```

5. Puede deshabilitar la captura de cualquier recurso configurando <DNT>**enabled**</DNT> en <DNT>**false**</DNT> para ese recurso en <DNT>**config/os-config.json**</DNT>.

## Configurando nri-flex para openstack

Una vez que haya instalado el agente de infraestructura en su host. `nri-flex` binario también se instala con él.

Para crear archivos de configuración flexibles, siga estos pasos:

<CollapserGroup>
  <Collapser
    id="file1"
    title="Archivo 1. Cree el archivo flex-openstack-system.yaml"
  >
    1. Cree un archivo llamado `flex-openstack-system.yaml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `flex-openstack-system.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         , establezca los valores para las `authUrl`, `userDomainID`, `username` y `password` en los valores correctos para su instalación de Openstack.

       Una vez que su archivo de configuración esté actualizado, se verá así:

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
    title="Archivo 2. Cree el archivo openstack.block_storage.yml"
  >
    1. Cree un archivo llamado `openstack.block_storage.yml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `openstack.block_storage.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         en el archivo yaml para establecer el valor de la variable `nrAgentHome` en el directorio de inicio del agente OpenStack de New Relic (directorio principal de la carpeta `ohi-integration/` )

       Una vez que su archivo de configuración esté actualizado, se verá así:

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
    title="Archivo 3. Cree el archivo openstack.images.yml"
  >
    1. Cree un archivo llamado `openstack.images.yml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `openstack.images.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         en el archivo yaml para establecer el valor de la variable `nrAgentHome` en el directorio de inicio del agente OpenStack de New Relic (directorio principal de la carpeta `ohi-integration/` )

       Una vez que su archivo de configuración esté actualizado, se verá así:

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
    title="Archivo 4. Cree el archivo openstack.keystone.yml"
  >
    1. Cree un archivo llamado `openstack.keystone.yml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `openstack.keystone.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         en el archivo yaml para establecer el valor de la variable `nrAgentHome` en el directorio de inicio del agente OpenStack de New Relic (directorio principal de la carpeta `ohi-integration/` ). Una vez que se actualice su archivo de configuración, se verá así:

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
    title="Archivo 5. Cree el archivo openstack.limits.yml"
  >
    1. Cree un archivo llamado `openstack.limits.yml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `openstack.limits.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         en el archivo yaml para establecer el valor de la variable `nrAgentHome` en el directorio de inicio del agente OpenStack de New Relic (directorio principal de la carpeta `ohi-integration/` ). Una vez que se actualice su archivo de configuración, se verá así:

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
    title="Archivo 6. Cree el archivo openstack.networks.yml"
  >
    1. Cree un archivo llamado `openstack.networks.yml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `openstack.networks.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         en el archivo yaml para establecer el valor de la variable `nrAgentHome` en el directorio de inicio del agente OpenStack de New Relic (directorio principal de la carpeta `ohi-integration/` ). Una vez que se actualice su archivo de configuración, se verá así:

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
    title="Archivo 7. Cree el archivo openstack.nova.yml"
  >
    1. Cree un archivo llamado `openstack.nova.yml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `openstack.nova.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         en el archivo yaml para establecer el valor de la variable `nrAgentHome` en el directorio de inicio del agente OpenStack de New Relic (directorio principal de la carpeta `ohi-integration/` ). Una vez que se actualice su archivo de configuración, se verá así:

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
    title="Archivo 8. Cree el archivo openstack.resource_providers.yml"
  >
    1. Cree un archivo llamado `openstack.resource_providers.yml` en esta ruta.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `openstack.resource_providers.yml` con esta configuración:

       * En

         <DNT>
           **variable_store**
         </DNT>

         en el archivo yaml para establecer el valor de la variable `nrAgentHome` en el directorio de inicio del agente OpenStack de New Relic (directorio principal de la carpeta `ohi-integration/` ). Una vez que se actualice su archivo de configuración, se verá así:

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

## Reenviar el registro del controlador Openstack a New Relic

Puede utilizar nuestro [reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro de Openstack Controller a New Relic.

En máquinas Linux, su archivo de registro llamado `logging.yml` debe estar presente en esta ruta:

```shell
cd /etc/newrelic-infra/logging.d/
```

Agregue el siguiente script al archivo `logging.yml` para enviar el registro de Openstack Controller a New Relic.

```yml
logs:
  - name: openstack.log
    file: <nr1-openstack-DIRECTORY>/openstack-agent/logs/nr_openstack_agent.log
    attributes:
      logtype: openstack_log
```

## Reinicie el agente New Relic Infrastructure

Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

```shell
sudo systemctl restart newrelic-infra.service
```

## Monitor su aplicación

Puede elegir nuestra plantilla dashboard prediseñadas llamada `Openstack Controller` para monitor su aplicación métrica Openstack.

1. Vaya a

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/)**
   </DNT>

   y haga clic en

   <DNT>
     **+ Add data**
   </DNT>

   .

2. Haga clic en la pestaña

   <DNT>
     **Dashboards**
   </DNT>

   .

3. En el cuadro de búsqueda, escriba `Openstack Controller`.

4. Cuando vea nuestro dashboard prediseñado, haga clic en él para instalarlo en su cuenta.

Una vez que su aplicación esté integrada siguiendo los pasos anteriores, el dashboard debería mostrar métrica.

Para instrumentar el inicio rápido de OpenStack y ver métricas y alertas, también puede seguir nuestra [página de inicio rápido de OpenStack Controller](https://newrelic.com/instant-observability/openstack-controller) que tiene un botón <DNT>**Install now**</DNT> .

A continuación se muestran algunos ejemplos de consultas:

<DNT>**Example:**</DNT> ver el recuento de los tipos de eventos

```sql
select count(*) from OSBlockStorageSample, OSLimitSample, OSNetworkSample, OSResourceProviderSample, OSImageSample, OSKeystoneSample, OSNovaSample since 10 minutes ago facet eventType() timeseries
```

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
