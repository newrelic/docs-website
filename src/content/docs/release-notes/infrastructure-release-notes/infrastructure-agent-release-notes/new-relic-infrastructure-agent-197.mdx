---
subject: Infrastructure agent
releaseDate: '2020-02-10'
version: 1.9.7
---

### Notes

A new version of the agent has been released. Follow standard procedures to [update your Infrastructure agent](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

### Bug fixes

* Updated bundled `nri-docker` integration version to [v1.1.1](https://github.com/newrelic/nri-docker/releases/tag/v1.1.1).
  * This version fixes missing Docker container metrics improving Linux `cgroup` path detection. This issue happened when `cgroup` was not mounted in the standard path `/sys/fs/cgroup`. Now it can discover different `cgroup` paths.
  * Still cgroup PIDs (process and thread count) is not available on Kernel versions lower than 4.3 [see support](http://man7.org/linux/man-pages/man7/cgroups.7.html). Therefore column threadCount won't be available for these systems. For instance Amazon-Linux v1 runs on kernel 4.13.
* Fixed permissions to `/tmp/nri-integrations` directory while updating the agent from [root mode to privileged or unprivileged mode](/docs/infrastructure/install-configure-infrastructure/linux-installation/linux-agent-running-modes).
  * This changes the owner of the `/tmp/nri-integrations` folder, which is used by some integrations and the [Infrastructure integrations SDK](https://github.com/newrelic/infra-integrations-sdk/) to cache data.
* Fixed issue when running in Kubernetes where an integration configuration change provided by `ConfigMap` wouldn't be picked up by the agent, breaking the hot config reload feature for integrations.
