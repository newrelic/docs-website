---
title: "On-host integrations: Installation and configuration"
tags:
  - Integrations
  - On-host integrations
  - Installation
translate:
  - jp
metaDescription: Details about the New Relic on-host infrastructure integrations for third-party services that work in tandem with the infrastructure agent.
redirects:
  - /docs/integrations/host-integrations/installation/install-infrastructure-host-integrations
  - /docs/install-integrations-package-mysql-nginx-cassandra
  - /docs/install-integrations-package
  - /docs/infrastructure/integrations/install-integrations-package
  - /docs/infrastructure/integrations/getting-started/install-host-integrations
  - /docs/infrastructure/host-integrations/getting-started/install-host-integrations-built-new-relic
  - /docs/infrastructure/host-integrations/installation/install-host-integrations-built-new-relic
  - /docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic
freshnessValidatedDate: never
---

Some of our [on-host integrations](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations) are built in a specific way and tightly bundled with the infrastructure agent, meaning they have similar install and configuration processes.

This documentation contains the basic installation procedures for these types of integrations. For technical details about how these integrations work, see [On-host integration data reporting](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting).

## Installation methods [#install]

Your services may be running on a single physical host, on a VM, or in a container orchestrated by Kubernetes or Amazon ECS. Choose your desired installation method.

After you do the basic install of an integration, you must return to the documentation for a specific integration to read the configuration instructions.

### Orchestrated environments [#orchestrated]

Our options for containerized, orchestrated environments:

* <img style={{ width: '32px', height: '32px', verticalAlign: 'middle'}} class="inline" title="Kubernetes" alt="Kubernetes" src="/images/os_icon_k8.webp"/> [Install on-host integrations on Kubernetes](/docs/integrations/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes)
* <img style={{ width: '32px', height: '32px', verticalAlign: 'middle'}} class="inline" title="ECS" alt="ECS" src="/images/os_icon_ecs.webp"/> [Install on-host integrations on Amazon ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs) (EC2 launch type)

### Running on VMs or on-premises hosts [#standard]

Choose your scenario:

<CollapserGroup>
  <Collapser
    id="windows"
    title={<>Install using MSI files (<img src="/images/os_icon_windows.webp" title="Windows" alt="Windows" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/> Windows)</>}
  >
    To install:

    1. If you don't already have it, [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic).
    2. Download the latest .MSI installer image for the desired integration [from our repository](https://download.newrelic.com/infrastructure_agent/windows/integrations/).
    3. In an admin account, run the install script using an absolute path.
       ```
       msiexec.exe /qn /i PATH\TO\integration-name.msi
       ```
    4. Return to the docs for your integration and complete the configuration instructions.
  </Collapser>

  <Collapser
    id="apt"
    title={<>Install with apt (<img src="/images/os_icon_debian.webp" title="Debian icon" alt="Debian.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Debian, <img src="/images/os_icon_ubuntu.webp" title="ubuntu icon" alt="ubuntu icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Ubuntu)</>}
  >
    To install an integration with `apt`:

    1. If you don't already have it, [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) for your operating system.
    2. From the command line, run:

       ```
       sudo apt-get update
       ```
    3. Run the following command, where `INTEGRATION_FILE_NAME` represents the integration's file name. For more information, see the [integration's documentation](/docs/integrations/host-integrations/host-integrations-list).

       ```
       sudo apt-get install INTEGRATION_FILE_NAME
       ```
    4. Return to the docs for your integration and complete the configuration instructions.
  </Collapser>

  <Collapser
    id="yum"
    title={<>Install with yum (<img src="/images/os_icon_amazon-linux.webp" title="amazon linux.webp" alt="amazon linux.webp" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Amazon Linux, <img src="/images/os_icon_centos.webp" title="centos icon" alt="centos icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>CentOS, <img src="/images/os_icon_redhat.webp" title="redhat icon" alt="redhat icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>RHEL)</>}
  >
    To install an integration package with `yum`:

    1. If you don't already have it, [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) for your operating system.
    2. From the command line, run:

       ```
       sudo yum -q makecache -y --disablerepo='*' --enablerepo='newrelic-infra'
       ```
    3. Run the following command, where `INTEGRATION_FILE_NAME` represents the integration's file name. For more information, see the [specific on-host integration](/docs/infrastructure/host-integrations/host-integrations-list).

       ```
       sudo yum install INTEGRATION_FILE_NAME
       ```
    4. Return to the docs for your integration and complete the configuration instructions.
  </Collapser>

  <Collapser
    id="zypper"
    title={<>Install with zypper (<img src="/images/os_icon_suse.webp" title="suse icon" alt="suse icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>SLES)</>}
  >
    To install an on-host integration with zypper:

    1. If you don't already have it, [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) for your operating system.
    2. From the command line, run:

       ```
       sudo zypper -n ref -r newrelic-infra
       ```
    3. Run the following command, where `INTEGRATION_FILE_NAME` represents the integration's file name. For more information, see the [integration's documentation](/docs/integrations/host-integrations/host-integrations-list).

       ```
       sudo zypper -n install INTEGRATION_FILE_NAME
       ```
    4. Return to the docs for your integration and complete the configuration instructions.
  </Collapser>

  <Collapser
    id="tarball"
    title={<>Install from tarball (<img src="/images/os_icon_linux.webp" title="Linux" alt="Linux icon" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}/>Other distros)</>}
  >
    <Callout variant="tip">
      We recommend [using your distribution package manager to install the infrastructure agent](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/install-infrastructure-linux-using-package-manager). If you choose to [manually install the agent](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux), you may also want to install the on-host integrations from the provided tarballs.
    </Callout>

    The manual install process is not automated. If you opt for manual install, you must place the different files in the correct folders, and ensure that the agent has all the permissions to execute the integrations.

    To install an integration from a tarball:

    1. Download the packaged integration file from the [tarball repository](https://download.newrelic.com/infrastructure_agent/binaries/linux/amd64/).
    2. Unpack the tarball file according to our [integration file structure and placement rules](/docs/integrations/integrations-sdk/getting-started/integration-file-structure-activation), so the agent is able to find the definitions, configurations, and executables of the integration.
    3. Place the binary that contains the definition file inside `newrelic-integrations` or `custom-integrations` in the [agent directory](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#agent-directory).
    4. Place the integration's config file under the [plugin directory](/docs/infrastructure/install-configure-manage-infrastructure/linux-installation/tarball-manual-install-infrastructure-linux#configure-plugin).
    5. Return to the docs for your integration and complete the configuration instructions. If your integration requires use of the JMX tool, details about that are below.

       For integrations that require our `nrjmx` tool, follow these additional instructions:

       #### Use of the New Relic JMX tool [#nrjmx]

       Some integrations (such as [JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration), [Cassandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration), and [Kafka](/docs/integrations/host-integrations/host-integrations-list/kafka-monitoring-integration)) require the `nrjmx` tool. If your integration needs this, download it from [our repository](https://download.newrelic.com/infrastructure_agent/binaries/linux/noarch/) and unpack it.

       <Callout variant="important">
         `nrjmx` requires Java 8 or higher.
       </Callout>

       For JMX integration version 2.3.3 or higher and Cassandra integration version 2.3.0 or higher, the `nrjmx` tool is included as a dependency. For this reason, when using a package manager, the `nrjmx` tool doesn't have to be installed manually.

       If you have `nrjmx` already installed and install `nri-jmx`, our JMX tool keeps the already-installed version. If you don't have `nrjmx` already installed, it gets the latest `nrjmx` release.

       By default, the `nrjmx` location is `/usr/bin/nrjmx/*`. To install in a different location, set the new path in the `NR_JMX_TOOL` environment variable.
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Update the agent [#upgrade]

To keep on-host integrations up to date, follow standard procedures to [update the on-host integration package](/docs/infrastructure/host-integrations/installation/update-infrastructure-host-integration-package).

## Technical details [#technical-details]

These integrations are built with the same file structure and configuration structure. For details about their structure and how they report data, see [Data reporting](/docs/infrastructure/host-integrations/understand-use-data/host-integration-data-collection-reporting).
