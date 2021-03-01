---
subject: Infrastructure agent
releaseDate: '2020-01-15'
version: 1.8.32
---

### Notes

A new version of the agent has been released. Follow standard procedures to [update your Infrastructure agent](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

### Features

* Now the Infrastructure agent, when running on Linux, can collect [Docker container metrics](/docs/infrastructure/install-configure-manage-infrastructure/docker-installation/docker-container-monitoring-infrastructure) like CPU, memory, I/O and network. This feature is enabled by default for all [supported Linux OSs](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure#operating-systems). Please, ensure the host meets the [requirements](/docs/infrastructure/install-configure-manage-infrastructure/docker-installation/docker-container-monitoring-infrastructure#requirements).
* The [new integration config files](/docs/integrations/integrations-sdk/file-specifications/integration-configuration-file-specifications-agent-v180) now support the `when` section. It allows you to control the execution of an integration if a given file exists. Here's an example:

```
integrations:
  - name: ssh-integration
    when:
      file_exists: /var/run/sshd.pid
```

The agent will execute `ssh-integration` only if the `/var/run/sshd.pid` file exists.

### Bug fixes

* Agent service wasn't stopping / restarting properly on upstart-based Linux distributions.
* In Integration config files: Dollar symbols were unintentionally being expanded into environment variables. Before, `pa$$word` would have been expanded to `pa${}${}word`; this behavior has been corrected.
* Improved [NFS](https://en.wikipedia.org/wiki/Network_File_System) support. Read and write bytes per second were not being correctly set to `0`, resulting JSON marshalling errors.
