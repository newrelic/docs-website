---
subject: PHP agent
releaseDate: '2013-01-08'
version: 3.1.5.136
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

* Revert to using a UNIX-domain socket for agent to daemon communication. This is the same mechanism used in the 2.x and 1.x series of agents. This was done for speed purposes. The default socket path is the same as it was for the older versions of the agent: `/tmp/.newrelic.sock`. The `newrelic.daemon.port` option in the INI file and the `port`option in the daemon configuration file (newrelic.cfg) can now take either a path to a UNIX-domain socket, or an integer in the range 1-65534. If you use a path, then a UNIX-doman socket will be used. If you use an integer, then a TCP socket will be used on the specified port.
* Correct the "banner" displayed in the log file to show the version of the running PHP. Previously it was incorrectly showing the version that we had compiled with.
* On platforms that support it, now attempt to display a stack dump in the unlikely event that the agent receives a SIGSEGV signal due to a bug. Displaying this stack is not always possible but when it works it is a big help for technical support to diagnose the exact cause of the problem. This feature existed in the 2.x series of agent but was not working correctly in the 3.x series until now.
* Fixed a problem where a communications failure between the agent and daemon when sending a transaction trace would result in a core dump (rare).
* Fixed a problem with Memcache metrics using the wrong metric name.
* Fixed a coredump that would occur when sending SQL tracers that were both un-obfuscated and contained lots of UNICODE characters (very rare).
* If a SIGSEGV signal is ever received make sure the daemon exits completely so that it can be respawned. Under certain conditions it could become "stuck" which would slow down the agent and stop all data from being sent to New Relic.
