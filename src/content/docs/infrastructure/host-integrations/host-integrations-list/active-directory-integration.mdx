---
title: Active Directory integration
tags:
  - Active Directory integration
  - New Relic integrations
metaDescription: Install our Active Directory integration to monitor the health of your environment.
freshnessValidatedDate: never
---

With our <DNT>Active Directory</DNT> integration, you can easily monitor the health of your directory services environment and proactively alert on potential issues.

Built with our infrastructure agent, the <DNT>Active Directory</DNT> integration gives you a set of pre-built <InlinePopover type="dashboards"/> and <InlinePopover type="alerts"/> that let you view your most critical performance data, all in one place.

<img
  src="/images/infrastructure_screenshot_full_active-directory-dashboard.webp"
  title="Active Directory dashboard"
  alt="A screenshot of a dashboard with Active Directory performance metrics."
/>

<figcaption>
  After setting up the <DNT>Active Directory</DNT> integration with New Relic, see your data in a dashboard like this, right out of the box.
</figcaption>

To get the most out of this page, select the installation method that fits your environment. You need a [New Relic account](https://newrelic.com/signup) before starting the installation process.

<Callout variant="tip">
  **Use guided install to quickly see your data in the UI**

  The guided install is a single CLI command you can run to monitor your <DNT>Active Directory</DNT> services. It's a good option for small organizations, or for anyone who wants to test out New Relic.

  <ButtonGroup>
    <ButtonLink
      role="button"
      to="https://one.newrelic.com/marketplace?state=8f14e646-461e-b010-4675-3a0658bb3d20"
      variant="primary"
    >
      Guided install
    </ButtonLink>
  </ButtonGroup>

  For a more permanent and scalable solution, we recommend the standard manual install of the integrations: keep reading for how to do that.
</Callout>

<Steps>
  <Step>
    ## Install the infrastructure agent [#infra]

    To use the <DNT>Active Directory</DNT> integration, you need to first [install the infrastructure agent](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) on the same host. The infrastructure agent monitors the host itself, while the integration you'll install in the next step extends your monitoring with <DNT>Active Directory</DNT>-specific data.
  </Step>

  <Step>
    ## Clone the Active Directory integration repo [#clone]

    Run the following command in your CLI to clone the New Relic <DNT>Active Directory</DNT> integration repository:

    ```bash
    git clone https://github.com/newrelic/newrelic-active-directory-integration.git
    ```
  </Step>

  <Step>
    ## Copy configuration files [#copy-config]

    Copy the relevant configuration files from the repository to the agent, replacing `$ROOT_PATH` with the path where you cloned the repository:

    ```powershell
    # integrations.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\integrations.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\integrations.d" -Recurse

    # logging.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\logging.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\logging.d" -Recurse
    ```
  </Step>

  <Step>
    ## Install the integration [#install-io]

    Install the [<DNT>Active Directory</DNT> quickstart](https://newrelic.com/instant-observability/active-directory) from the New Relic I/O catalog to add the relevant dashboard and alerts.  

  </Step>

  <Step>
    ## Find and use data [#find-date]

    The collection of telemetry from <DNT>Active Directory</DNT> depends on various configuration and script files located in the infrastructure agent's directory structure like this:

    ```
    C:\Program Files\New Relic\newrelic-infra\
        ├── integrations.d
        │   ├── windows-active-directory-performance-counters.ps1
        │   ├── windows-active-directory-performance-counters.yml
        │   ├── windows-active-directory-replication-checks.yml
        │   ├── windows-active-directory-replication-failures.ps1
        │   ├── windows-active-directory-replication-partners.ps1
        │   └── windows-active-directory-services.yml
        └── logging.d
            └── windows-active-directory.yml
    ```

    Each of these files works together to present a full observability footprint. The resulting telemetry in New Relic consists of Metrics, Events, and Log data.
  </Step>
</Steps>

## Event details

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **COUNTER NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `addressBookClientSessions`
      </td>

      <td>
        `\NTDS\AB Client Sessions`
      </td>

      <td>
        Number of connected address book client sessions
      </td>
    </tr>

    <tr>
      <td>
        `inboundFullSyncObjectsRemaining`
      </td>

      <td>
        `\NTDS\DRA Inbound Full Sync Objects Remaining`
      </td>

      <td>
        The number of objects remaining until the full synchronization is completed
      </td>
    </tr>

    <tr>
      <td>
        `draInbound`
      </td>

      <td>
        `\NTDS\DRA Inbound Values (DNs only)/sec`
      </td>

      <td>
        The number of object property values received from inbound replication partners that are DNs that reference other objects
      </td>
    </tr>

    <tr>
      <td>
        `draOutbound`
      </td>

      <td>
        `\NTDS\DRA Outbound Values (DNs only)/sec`
      </td>

      <td>
        The number of object property values containing DNs sent to outbound replication partners
      </td>
    </tr>

    <tr>
      <td>
        `draPendingReplicationSync`
      </td>

      <td>
        `\NTDS\DRA Pending Replication Synchronizations`
      </td>

      <td>
        The number of directory synchronizations that are queued for this server but not yet processed
      </td>
    </tr>

    <tr>
      <td>
        `directoryReadsPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Reads/sec`
      </td>

      <td>
        The number of directory reads per second
      </td>
    </tr>

    <tr>
      <td>
        `directoryWritesPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Writes/sec`
      </td>

      <td>
        The number of directory writes per second
      </td>
    </tr>

    <tr>
      <td>
        `directoryNotifyQueueSize`
      </td>

      <td>
        `\NTDS\DS Notify Queue Size`
      </td>

      <td>
        The number of pending update notifications that are queued but not yet transmitted to clients
      </td>
    </tr>

    <tr>
      <td>
        `directoryThreadsInUse`
      </td>

      <td>
        `\NTDS\DS Threads in Use`
      </td>

      <td>
        The current number of threads that the directory service is using
      </td>
    </tr>

    <tr>
      <td>
        `ldapActiveThreads`
      </td>

      <td>
        `\NTDS\LDAP Active Threads`
      </td>

      <td>
        The current number of threads that the LDAP subsytem of the local directory service uses
      </td>
    </tr>

    <tr>
      <td>
        `ldapBindTime`
      </td>

      <td>
        `\NTDS\LDAP Bind Time`
      </td>

      <td>
        The time (in milliseconds) that is taken to complete the last LDAP bind
      </td>
    </tr>

    <tr>
      <td>
        `ldapClientSessions`
      </td>

      <td>
        `\NTDS\LDAP Client Sessions`
      </td>

      <td>
        The number of currently connected LDAP client sessions
      </td>
    </tr>

    <tr>
      <td>
        `ldapSearchesPerSec`
      </td>

      <td>
        `\NTDS\LDAP Searches/sec`
      </td>

      <td>
        The rate at which LDAP clients perform search operations
      </td>
    </tr>

    <tr>
      <td>
        `ldapSuccessfulBindsPerSec`
      </td>

      <td>
        `\NTDS\LDAP Successful Binds/sec`
      </td>

      <td>
        The number of LDAP binds per second
      </td>
    </tr>

    <tr>
      <td>
        `contextSwitchesPerSec`
      </td>

      <td>
        `\System\Context Switches/sec`
      </td>

      <td>
        The combined rate at which all processors on the computer are switched from one thread to another
      </td>
    </tr>

    <tr>
      <td>
        `processorQueueLength`
      </td>

      <td>
        `\System\Processor Queue Length`
      </td>

      <td>
        The number of threads waiting to be executed in queue
      </td>
    </tr>
  </tbody>
</table>

## Windows Services [#windows-services]

Collection of <DNT>Active Directory</DNT> Windows Services is accomplished via the native Windows Services integration using this configuration file:

```
windows-active-directory-services.yml
```

The results of this collection are stored as dimensional metrics with the decorated label: `label.primary_app = 'active_directory'`.

## Metric details

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **SERVICE NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ADWS`
      </td>

      <td>
        <DNT>Active Directory</DNT> Web Services
      </td>
    </tr>

    <tr>
      <td>
        `DFS`
      </td>

      <td>
        Distributed File System
      </td>
    </tr>

    <tr>
      <td>
        `DFSR`
      </td>

      <td>
        DFS Replication
      </td>
    </tr>

    <tr>
      <td>
        `DNS`
      </td>

      <td>
        DNS Server
      </td>
    </tr>

    <tr>
      <td>
        `Dnscache`
      </td>

      <td>
        DNS Client
      </td>
    </tr>

    <tr>
      <td>
        `IsmServ`
      </td>

      <td>
        Intersite Messaging
      </td>
    </tr>

    <tr>
      <td>
        `kdc`
      </td>

      <td>
        Kerberos Key Distribution Center
      </td>
    </tr>

    <tr>
      <td>
        `lanmanserver`
      </td>

      <td>
        Server
      </td>
    </tr>

    <tr>
      <td>
        `lanmanworkstation`
      </td>

      <td>
        Workstation
      </td>
    </tr>

    <tr>
      <td>
        `Netlogon`
      </td>

      <td>
        Net logon
      </td>
    </tr>

    <tr>
      <td>
        `NTDS`
      </td>

      <td>
        Active Directory Domain Services
      </td>
    </tr>

    <tr>
      <td>
        `RpcSs`
      </td>

      <td>
        Remote Procedure Call (RPC)
      </td>
    </tr>

    <tr>
      <td>
        `SamSs`
      </td>

      <td>
        Security Accounts Manager
      </td>
    </tr>

    <tr>
      <td>
        `W32Time`
      </td>

      <td>
        Windows Time
      </td>
    </tr>
  </tbody>
</table>

## Event details

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureCount`
      </td>

      <td>
        Integer indicating the total count of replication failures that have occurred on the specified domain controller.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureType`
      </td>

      <td>
        String representation of the latest type of replication failure experienced by the specified domain controller.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `firstFailureTime`
      </td>

      <td>
        Timestamp (`MM/dd/yyyy h:mm:ss tt`) string indicating the first observed failure on the specified domain controller.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `lastError`
      </td>

      <td>
        Integer indicating the last error code received for a replication failure on the specified domain controller.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `server`
      </td>

      <td>
        String name of the domain controller where the replication failure occurred.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationAttempt`
      </td>

      <td>
        Timestamp (`MM/dd/yyyy h:mm:ss tt`) string indicating the last attempt at replication between the server and partner.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationSuccess`
      </td>

      <td>
        Timestamp (`MM/dd/yyyy h:mm:ss tt`) string indicating the last successful replication between the server and partner.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `partner`
      </td>

      <td>
        Short name of the remote partner for replication.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `server`
      </td>

      <td>
        Short name of the local server for
      </td>
    </tr>
  </tbody>
</table>

## Windows Event Logs [#event-logs]

Collection of <DNT>Active Directory</DNT> Windows Events is performed with the integrated log forwarder on the infrastructure agent using this configuration file:

```
windows-active-directory.yml
```

The results of this collection are stored as logs with the decorated label: `logtype = 'active_directory'`.

## Log details

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **CHANNEL**
        </DNT>
      </th>

      <th>
        <DNT>
          **EVENT ID**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Security
      </td>

      <td>
        `4609`
      </td>

      <td>
        Windows is shutting down
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4616`
      </td>

      <td>
        The system time was changed
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4625`
      </td>

      <td>
        An account failed to log on
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4648`
      </td>

      <td>
        A logon was attempted using explicit credentials
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4649`
      </td>

      <td>
        A replay attach was detected
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4950`
      </td>

      <td>
        An IPsec Main Mode security association was established
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4697`
      </td>

      <td>
        A service was installed in the system
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4713`
      </td>

      <td>
        Kerberos policy was changed
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4714`
      </td>

      <td>
        Encrypted data recovery policy was changed
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4719`
      </td>

      <td>
        System audit policy was changed
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4720`
      </td>

      <td>
        A user account was created
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4723`
      </td>

      <td>
        An attempt was made to change an account's password
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4724`
      </td>

      <td>
        An attempt was made to reset an accounts password
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4725`
      </td>

      <td>
        A user account was disabled
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4726`
      </td>

      <td>
        A user account was deleted
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4738`
      </td>

      <td>
        A user account was changed
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4739`
      </td>

      <td>
        Domain Policy was changed
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4740`
      </td>

      <td>
        A user account was locked out
      </td>
    </tr>

    <tr>
      <td>
        Security
      </td>

      <td>
        `4781`
      </td>

      <td>
        A computer account was created
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `1083`
      </td>

      <td>
        The security descriptor version number could not be determined
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `1202`
      </td>

      <td>
        Security policies were propagated with warning. 0x534 : No mapping between account names and security IDs was done
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `1265`
      </td>

      <td>
        The attempt to establish a replication link for the following writable directory partition failed
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `1311`
      </td>

      <td>
        The Knowledge Consistency Checker (KCC) has detected problems with the following directory partition
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `1388`
      </td>

      <td>
        During the past [number] days; replication errors in one or more directory partitions have caused replication to be disabled for the specified naming context on the current domain controller
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `1645`
      </td>

      <td>
        <DNT>Active Directory</DNT> Domain Services has detected that the domain is still using the default password for the 'Administrator' account
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `5805`
      </td>

      <td>
        The session setup from the computer [computer name] failed to authenticate
      </td>
    </tr>

    <tr>
      <td>
        System
      </td>

      <td>
        `5807`
      </td>

      <td>
        During the past [number] days; there have been a few replication errors in the forest. There may be network or connectivity problems in the forest
      </td>
    </tr>
  </tbody>
</table>

## Check the source code [#source-code]

This integration is open source software. That means you can [browse its source code](https://github.com/newrelic/newrelic-active-directory-integration) and send improvements, or create your own fork and build it.
