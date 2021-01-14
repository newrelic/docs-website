---
subject: Ruby agent
releaseDate: '2017-08-28'
version: 4.4.0.336
downloadLink: 'https://rubygems.org/gems/newrelic_rpm'
redirects:
  - /docs/release-notes/agent-release-notes/ruby-agent-440336
---

### Notes

* Include test helper for 3rd party use

  In 4.2.0, all test files were excluded from being packaged in the gem. An agent class method `NewRelic::Agent.require_test_helper` was used by 3rd party gem authors to test extensions to the agent. The required file is now included in the gem.
* Collect cloud metadata from Azure, GCP, PCF, and AWS cloud platform

  The agent now collects additional metadata when running in AWS, GCP, Azure, and PCF. This information is used to provide an enhanced experience when the agent is deployed on those platforms.
* Install `at_exit` hook when running JRuby

  The agent now installs an `at_exit` hook when running JRuby, which wasn't done before because of constraints related to older JRuby versions that are no longer supported.
* User/Utilization and System/Utilization metrics not recorded after Resque forks

  The agent no longer records invalid User/Utilization and System/Utilization metrics, which can lead to negative values, in forks of Resque processes.
* Add `identifier` field to agent connect settings

  The agent now includes a unique identifier in its connect settings, ensuring that when multiple agents connect to multiple different apps, data are reported for each of the apps.
* Clear transaction state after forking now opt-in

  The agent waits to connect until the first web request when it detects it's running in a forking dispatcher. When clearing the transaction state in this situation we lose the first frame of the transaction and the subsequent trace becomes corrupted. We've made this feature opt-in and is turned off by default. This behavior only affects the first transaction after a dispatcher forks.
