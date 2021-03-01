---
subject: Infrastructure agent
releaseDate: '2019-07-11'
version: 1.4.0
redirects:
  - /docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes/new-relic-infrastructure-agent-141
---

### Notes

A new version of the agent has been released. Follow standard procedures to [update your Infrastructure agent](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

### Added

Improved logging and troubleshooting features:

* Logging agent config options at startup (with obfuscation of sensitive data).
* Logging all the config options of the loaded integrations at startup (with obfuscation of sensitive data).
* Improve log messages related to integrations.
* Integrations health checks
* New binary called newrelic-infra-ctl for sending notifications to the agent for:
  * Enabling verbose logs for 5 minutes
  * Integrations health check

### Agent daemon notification

For notifying the agent to perform actions, the newrelic-infra-ctl command was created. It has the sole responsibility of sending a notification to the agent process that's running inside the host.

In Linux this communication happens via POSIX signals. newrelic-infra-ctl first tries to find if there is an agent process running. If it finds it, it checks if the process is running inside a Docker container. This is because signals to Docker containers are sent with the docker kill command. Once it knows the pid and the signaling method to use, it sends a SIGUSR1 signal to the agent. The agent just has to set a signal handler for when it receives a SIGUSR1.

In Windows, things are a little different. The only signals that we could send to the process were exit signals. In Windows processes communicate by sending messages to their respective windows, but you might be wondering (as I was), the agent is a daemon process so it doesn't have a window. The solution, easy, a hidden window. On startup the agent creates a hidden window, and sets a handler that listens for messages that arrive in that window. newrelic-infra-ctl finds that windows and sends messages to it.

### Changed

* Decorate samples with reportingAgent attribute and replace loopback address if found in reportingEndpoint and reportingEntityKey samples attributes.
* Do not log config.pid_file property in the Windows agent.
