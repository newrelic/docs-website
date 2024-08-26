---
title: Synthetics job manager transition guide
tags:
  - Synthetics
  - Synthetic monitoring
  - Private locations
metaDescription: Upgrade your private locations from containerized private minion (CPM) to the synthetics job manager
redirects:
freshnessValidatedDate: never
---

In early 2022, we released a [new runtime](/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime) for public locations that simplified script creation, gave scripted monitors access to Chrome 100 and Node.js 16, and introduced automated monitor management with our [NerdGraph API](/docs/apis/nerdgraph/examples/nerdgraph-synthetics-tutorial).

The synthetics job manager brings monitors on the newest runtime to your private locations, enabling your monitors to more closely match a real user's experience.

If you're ready to install the job manager, you can check out our [install doc](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager) for installation procedures, or read through our [configuration doc](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-configuration) for working with new or existing [private locations](/docs/synthetics/synthetic-monitoring/private-locations/private-locations-overview-monitor-internal-sites-add-new-locations).

<Callout variant="important">
  As of August 26, 2024, you can no longer create new monitors using legacy runtimes on public or private locations.
  
  On October 22, 2024, we will [end of life](/whats-new/2024/04/whats-new-04-09-eol-synthetics-runtime-cpm) the containerized private minion (CPM) and the legacy synthetics runtime versions it supports. Please review our [recommended migration steps](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/#monitorMigration) to avoid degradation of your private location monitors.
</Callout>

## Smaller container images for your synthetics [#docker]

Job managers execute your synthetics from runtime-specific container images tailored to the jobs you want to execute. While CPMs bundled legacy runtimes and artifacts into one growing file, our job manager instead separates our Chrome, Node, and job management work into separate, smaller images.

With more control over job configuration for your private locations, job managers also let you:

* Opt out of running a subset of runtime images if they are not required for their monitors.
* Update your runtime images (ping, API, and browser) independently of synthetics job manager updates.
* Configure and size your deployment how you want it.

## Simplified deployment with job managers [#deploy]

Unlike CPMs, which used file sharing to coordinate jobs in private locations, job managers [communicate via HTTP](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager) with web services. This removes certain deployment requirements, such as specifying mounted volume in your docker configuration or persistent volumes in your Kubernetes configuration.

By simplifying deployment, the job manager:

* Reduces the possibility of permissions-related errors in high security environments.
* Reduces the risk of internal engine errors by no longer creating unique docker networks for non-ping monitor jobs.
* Gives better support at deployment for Kubernetes labels, annotations, node selectors, tolerations, and affinity across all components

## Recommended migration steps [#monitorMigration]

When you install the job manager, we recommend that you use the same private location key as your existing CPM. This simplifies the migration process. Keep in mind that:

* CPMs execute monitors that use the legacy runtime
* Job managers execute monitors that use the newest runtime
* Ping monitors are load balanced, so both CPM and job managers can execute them

1. Retrieve your existing private location's key by [editing the private location](https://one.newrelic.com/synthetics/private-location-list)
2. [Install job manager](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager) using this key.
3. The [runtime upgrades UI](/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui/) will start testing the legacy runtime monitors assigned to this private location and populating test results. Running these tests and populating the UI may take a few hours. Use the UI to upgrade monitor runtimes.
4. Once all legacy runtime monitors on the private location have been updated, you can uninstall your containerized private minion (CPM).

If you're running more than one Docker private location container in the same host, you'll have port and other resource conflicts. To avoid this port contention, make sure you do the following when you start setting up job managers:

* Run job managers and CPMs on different hosts.
* Run each job manager on a separate host.
* Run each CPM on a different host.

Want a fresh start instead? Create a new private location for the job manager. Your private location configuration and migration path comes down to your own personal preference. Using a new private location will prevent the runtime upgrades UI from proactively testing your legacy runtime monitors. This path would also require you to modify monitor configurations to use the new private location.

## Upgrade your monitors [#upgrade]

The synthetics job manager is not legacy runtime compatible. CPMs, on the other hand, are not compatible with the newest runtime. If your job managers and CPMs are sharing a key, then your CPMs will handle any monitors on the legacy runtime, while the job manager will handle any monitors on the newest runtime. In other words, CPMs cannot run scripted monitors that use Chrome 100+ or Node.js 16.

**Bulk monitor runtime upgrades:**
The [runtime upgrades UI](/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui/) provides proactive upgrade test results and allows you to bulk upgrade monitor runtimes.

**Individual monitor runtime upgrades:**

1. Go to <DNT>**[one.newrelic.com > Synthetic monitoring](https://one.newrelic.com/synthetics-nerdlets)**</DNT>, then select the monitor you want to edit.
2. From the <DNT>**Settings**</DNT> tab, click <DNT>**General**</DNT>.
3. Switch to the newest runtime view via the dropdown menu. For scripted API monitors, choose Node.js 16. For scripted browser monitors, choose Chrome 100+.
4. If using separate private locations for containerized private minions and synthetics job managers, update the location selection.
5. Click <DNT>**Validate**</DNT> to check that your monitors function in the new runtime. Make any script modifications if needed.
6. Save.

<Callout variant="tip">
  Refer to [our runtime upgrade troubleshooting guide](/docs/synthetics/synthetic-monitoring/troubleshooting/runtime-upgrade-troubleshooting) for common upgrade errors and solutions.
</Callout>

Decided to upgrade to the new runtime? Check out our [NerdGraph APIs](/docs/apis/nerdgraph/examples/nerdgraph-synthetics-tutorial/#update-monitors) to programmatically update monitors.

## Version requirements [#requirements]

Some capabilities require a minimum version of job manager and runtime container images.

<table id="min-versions">
  <thead>
    <tr>
      <th>
        Capability
      </th>

      <th>
        Job manager version
      </th>

      <th>
        Runtime version(s)
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Step monitor
      </td>

      <td>
        release-332
      </td>

      <td>
        Node browser runtime v2.2.22
      </td>
    </tr>

    <tr>
      <td>
        Broken links monitor
      </td>

      <td>
        release-341
      </td>

      <td>
        Node API runtime v1.2.54
      </td>
    </tr>

    <tr>
      <td>
        Certificate check monitor
      </td>

      <td>
        release-341
      </td>

      <td>
        Node API runtime v1.2.54
      </td>
    </tr>

    <tr>
      <td>
        VSE support
      </td>

      <td>
        release-345
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        User-Defined Variables
      </td>

      <td>
        release-347
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        Custom node modules
      </td>

      <td>
        release-363
      </td>

      <td>
        Node browser runtime v2.2.49
        Node API runtime v1.2.63
      </td>
    </tr>
  </tbody>
</table>
