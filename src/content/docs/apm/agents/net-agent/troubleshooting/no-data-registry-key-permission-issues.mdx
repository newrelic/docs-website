---
title: No data and registry key permission issues
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET app is not reporting data and you see permissions errors for registry keys, follow these troubleshooting procedures.'
redirects:
  - /docs/agents/net-agent/troubleshooting/no-data-registry-key-permission-issues
  - /docs/agents/net-agent/troubleshooting/user-needs-read-permissions-new-relic-registry-keys
  - /docs/agents/net-agent/troubleshooting/application-pool-identity-user-needs-read-permissions-new-relic-registry-keys
  - /docs/agents/net-agent/troubleshooting/new-no-data-registry-key-permission-issues
freshnessValidatedDate: never
---

## Problem

After generating traffic for your .NET app and waiting five minutes, data still does not appear in the New Relic UI.

## Solution

<Callout variant="important">
  Check with your system administrator before changing permissions.
</Callout>

1. Ensure the app pool identity has `read` access to the New Relic registry key located at:

   ```
   HKLM\SOFTWARE\New Relic\.NET Agent\
   ```
2. Grant all users on the system access to this registry key, or allow only the app pool identity to access the key.

   <CollapserGroup>
     <Collapser
       id="grant-everyone"
       title="To grant the Everyone user access to the registry key:"
     >
       1. As Admin, open the Windows registry.
       2. Select <DNT>**Computer > HKEY_LOCAL_MACHINE > Software > New Relic**</DNT>. Right-click <DNT>**.NET Agent**</DNT>, then select <DNT>**Permissions**</DNT>.
       3. If you do not see an <DNT>**Everyone**</DNT> user in the <DNT>**Group or user names**</DNT> list, create the user: Select <DNT>**Add**</DNT>. Then, from <DNT>**Select Users or Groups**</DNT>: In the <DNT>**Enter the object name to select**</DNT> field, type `Everyone`. Select <DNT>**OK**</DNT>.
       4. In the <DNT>**Group or user names**</DNT> list, select <DNT>**Everyone**</DNT>. Then, in the <DNT>**Permissions for**</DNT> table, select the <DNT>**Allow**</DNT> checkbox for <DNT>**Read**</DNT> permissions.
     </Collapser>

     <Collapser
       id="grant-app-pool"
       title="To grant individual app pool identities access to the registry key:"
     >
       1. Determine your app pool identity, which uses this standard format:

          ```
          IIS AppPool\APP_POOL_NAME
          ```
       2. As admin, open the Windows registry.
       3. Select <DNT>**Computer > HKEY_LOCAL_MACHINE > Software > New Relic**</DNT>. Right-click <DNT>**.NET Agent**</DNT>, then select <DNT>**Permissions**</DNT>.
       4. From the <DNT>**Permissions for .NET Agent**</DNT> dialog, select <DNT>**Add**</DNT>. Then, from <DNT>**Select Users or Groups**</DNT>: In the <DNT>**Enter the object name to select**</DNT> field, type your app pool identity (for example, `IIS AppPool\APP_POOL_NAME`). Select <DNT>**OK**</DNT>.
       5. In the <DNT>**Group or user names**</DNT> list, select your new app pool identity. Then, in the <DNT>**Permissions for**</DNT> table, select the <DNT>**Allow**</DNT> checkbox for <DNT>**Read**</DNT> permissions.
     </Collapser>
   </CollapserGroup>
3. From the command line, perform an <DNT>**IISRESET**</DNT>.
4. If updating permissions does not resolve the problem, follow the .NET agent's troubleshooting procedures for [missing data](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

<Callout variant="tip">
  To prevent this problem from happening with future installs, uninstall WSM 3.3.5.0. If you do not want to make changes to your registry, uninstall WSM and .NET, then reinstall the latest versions.
</Callout>

## Cause

A common reason why data does not appear is because the New Relic .NET agent cannot access its registry keys. You may see registry permission errors in your profiler logs at:

```
%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs\
```

For example, you may see:

```
[Info] ... Logger initialized
[Error] ... Unable to find New Relic Home directory in registry or environment.
[Error] ... An exception was thrown while initializing the profiler.
```
