---
title: Openstack Controller integration
tags:
  - Openstack Controller integrationn
  - New Relic integrations
metaDescription: Install our Openstack Controller dashboards and see your Openstack Controller data in New Relic.
freshnessValidatedDate: 2023-08-28
---

Our openstack controller integration is designed to collect information from all compute nodes and the servers running it. All metrics collected from these openstack services are ingested into your New Relic accounts insights (NRDB) for analysis, visualization and alerting. So you can view all your most important data, all in one place.

<img
  title="Openstack Controller dashboard"
  alt="Openstack Controller dashboard"
  src="/images/infrastructure_screenshot-full_openstack-controller-dashboard.webp"
/>

<figcaption>
  After setting up our Openstack Controller, you can install a dashboard for your Openstack Controller metrics.
</figcaption>

## Install the infrastructure agent [#infra]

To get data into New Relic, install our infrastructure agent. Our infrastructure agent collects and ingests data so you can keep track of your app's performance. The version should be 1.10.7 or higher to support NRI-Flex integration.

You can install the infrastructure agent two different ways:

* Our [guided install](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) is a CLI tool that inspects your system and installs the infrastructure agent alongside the application monitoring agent that best works for your system. To learn more about how our guided install works, check out our [Guided install overview](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* If you'd rather install our infrastructure agent manually, you can follow a tutorial for manual installation for [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/), or [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Configure nr1-openstack

1. Clone the repository

   ```
   git clone https://github.com/newrelic-experimental/nr1-openstack
   ```

2. Use this command to open the `openstack-agent` directory present in the cloned repository.

   ```shell
   cd nr1-openstack/openstack-agent/
   ```

3. Rename the file `config/os-config.json.template` to `config/os-config.json` and edit the file as mentioned below

   * Update `nr_agent_home`, you need to enter the parent directory of the <DNT>**config/**</DNT> folder from  your cloned repository.

   * Run the below command to see details of endpoint urls.
     ```shell
     openstack catalog list
     ```

   * To get the value of `keystone_url`, copy the endpoint url for `name: keystone` and `type: identity`.

   * To find the `keystone_api_version`, run the below command.
     ```shell
     curl -i http://<HOST_IP>/identify
     ```

   * To find the `glance_api_version`, run the below command.
     ```shell
     curl -i http://<HOST_IP>/image
     ```

   * Update `ADMIN_PASSWORD` in the below configuration file, by using your openstack login password.

   Once your json file is updated, it will look like this:

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

4. Use the below command to give execute permission for the <DNT>**scripts**</DNT> folder (<DNT>**scripts/flex-osmetrics.sh**</DNT> will be invoked by New Relic Infrastructure Agent)

   ```shell
   chmod +x scripts/flex-osmetrics.sh
   ```

5. You could disable the capture of any resources by setting <DNT>**enabled**</DNT> to <DNT>**false**</DNT> for that resource in <DNT>**config/os-config.json**</DNT>.

## Configuring nri-flex for openstack

Once you’ve installed the infrastructure agent on your host. `nri-flex` binary is also installed with it.

To create a flex configuration files follow these steps:

<CollapserGroup>
  <Collapser
    id="file1"
    title="File 1. Create the flex-openstack-system.yaml file"
  >
    1. Create a file named `flex-openstack-system.yaml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `flex-openstack-system.yml` with these configurations:

       * Under <DNT>**variable_store**</DNT>, set the values for `authUrl`, `userDomainID`, `username`, and `password` variables to the correct values for your Openstack installation.

       Once your configuration file is updated, it will look like this:

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
    title="File 2. Create the openstack.block_storage.yml file"
  >
    1. Create a file named `openstack.block_storage.yml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `openstack.block_storage.yml` with these configurations:

       * Under <DNT>**variable_store**</DNT> in the yaml file to set the value for `nrAgentHome` variable to New Relic openstack agent’s home directory (parent directory of the `ohi-integration/` folder)

       Once your configuration file is updated, it will look like this:

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
    title="File 3. Create the openstack.images.yml file "
  >
    1. Create a file named `openstack.images.yml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `openstack.images.yml` with these configurations:

       * Under <DNT>**variable_store**</DNT> in the yaml file to set the value for `nrAgentHome` variable to New Relic openstack agent’s home directory (parent directory of the `ohi-integration/` folder)

       Once your configuration file is updated, it will look like this:

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
    title="File 4. Create the openstack.keystone.yml file"
  >
    1. Create a file named `openstack.keystone.yml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `openstack.keystone.yml` with these configurations:

       * Under <DNT>**variable_store**</DNT> in the yaml file to set the value for `nrAgentHome` variable to New Relic openstack agent’s home directory (parent directory of the `ohi-integration/` folder)
         Once your configuration file is updated, it will look like this:

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
    title="File 5. Create the openstack.limits.yml file"
  >
    1. Create a file named `openstack.limits.yml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `openstack.limits.yml` with these configurations:

       * Under <DNT>**variable_store**</DNT> in the yaml file to set the value for `nrAgentHome` variable to New Relic openstack agent’s home directory (parent directory of the `ohi-integration/` folder)
         Once your configuration file is updated, it will look like this:

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
    title="File 6. Create the openstack.networks.yml file"
  >
    1. Create a file named `openstack.networks.yml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `openstack.networks.yml` with these configurations:
       * Under <DNT>**variable_store**</DNT> in the yaml file to set the value for `nrAgentHome` variable to New Relic openstack agent’s home directory (parent directory of the `ohi-integration/` folder)
         Once your configuration file is updated, it will look like this:
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
    title="File 7. Create the openstack.nova.yml file"
  >
    1. Create a file named `openstack.nova.yml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `openstack.nova.yml` with these configurations:

       * Under <DNT>**variable_store**</DNT> in the yaml file to set the value for `nrAgentHome` variable to New Relic openstack agent’s home directory (parent directory of the `ohi-integration/` folder)
         Once your configuration file is updated, it will look like this:

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
    title="File 8. Create the openstack.resource_providers.yml file"
  >
    1. Create a file named `openstack.resource_providers.yml` in this path.
       ```shell
       /etc/newrelic-infra/integrations.d
       ```
    2. Update the file `openstack.resource_providers.yml` with these configurations:

       * Under <DNT>**variable_store**</DNT> in the yaml file to set the value for `nrAgentHome` variable to New Relic openstack agent’s home directory (parent directory of the `ohi-integration/` folder)
         Once your configuration file is updated, it will look like this:

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

## Forward Openstack Controller logs to New Relic

You can use our [log forwarding](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) to forward Openstack Controller logs to New Relic.

On Linux machines, your log file named `logging.yml` should be present in this path:

```shell
cd /etc/newrelic-infra/logging.d/
```

Add the below script to the `logging.yml` file to send Openstack Controller logs to New Relic.

```yml
logs:
  - name: openstack.log
    file: <nr1-openstack-DIRECTORY>/openstack-agent/logs/nr_openstack_agent.log
    attributes:
      logtype: openstack_log
```

## Restart the New Relic infrastructure agent

Before you can start reading your data, use the instructions in our [infrastructure agent docs](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) to restart your infrastructure agent.

```shell
sudo systemctl restart newrelic-infra.service
```

## Monitor your application

You can choose our pre-built dashboard template named `Openstack Controller` to monitor your Openstack application metrics.

1. Go to <DNT>**[one.newrelic.com](https://one.newrelic.com/)**</DNT> and click on <DNT>**+ Integrations & Agents**</DNT>.
2. Click on the <DNT>**Dashboards**</DNT> tab.
3. In the search box, type `Openstack Controller`.
4. When you see our pre-build dashboard, click on it to install it in your account.

Once your application is integrated by following the above steps, the dashboard should display metrics.

To instrument the OpenStack quickstart and to see metrics and alerts, you can also follow our [OpenStack Controller quickstart page](https://newrelic.com/instant-observability/openstack-controller) that has an <DNT>**Install now**</DNT> button.

Here are some example queries:

<DNT>**Example:**</DNT> view the count of the event types

```sql
select count(*) from OSBlockStorageSample, OSLimitSample, OSNetworkSample, OSResourceProviderSample, OSImageSample, OSKeystoneSample, OSNovaSample since 10 minutes ago facet eventType() timeseries
```

## What's next?

To learn more about building NRQL queries and generating dashboards, check out these docs:

* [Introduction to the query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) to create basic and advanced queries.
* [Introduction to dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) to customize your dashboard and carry out different actions.
* [Manage your dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) to adjust your <InlinePopover type="dashboards"/> display mode, or to add more content to your dashboard.
