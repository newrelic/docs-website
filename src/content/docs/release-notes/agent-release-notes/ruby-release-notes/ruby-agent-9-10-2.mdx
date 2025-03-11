---
subject: Ruby agent
releaseDate: '2024-06-06'
version: 9.10.2
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.10.2.gem
features: []
bugs: ["DynamoDB instrumentation logging errors when trying to get account_id", "Remove Rails::Command::RakeCommand from the default list of autostart.denylisted_constants"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.10.2

Version 9.10.2 fixes a bug related to the new DynamoDB instrumentation and removes `Rails::Command::RakeCommand` from the default list of denylisted constants.

* **Bugfix: DynamoDB instrumentation logging errors when trying to get account_id**

  When trying to access data needed to add the `account_id` to the DynamoDB span, the agent encountered an error when certain credentials classes were used. This has been fixed. Thanks to [@kichik](https://github.com/kichik) for bringing this to our attention. [PR#2864](https://github.com/newrelic/newrelic-ruby-agent/pull/2684)

* **Bugfix: Remove `Rails::Command::RakeCommand` from the default list of `autostart.denylisted_constants`**

  The default value for the `autostart.denylisted_constants` configuration was changed in 9.10.0 to include `Rails::Command::RunnerCommand` and `Rails::Command::RakeCommand`. The inclusion of `Rails::Command::RakeCommand` prevented the agent from starting automatically when Solid Queue was started using `bin/rails solid_queue:start`. We recognize there are many commands nested within `Rails::Command::RakeCommand` and have decided to remove it from the default list. We encourage users who do not want the agent to run on `Rails::Command::RakeCommand` to add the constant to their configuration. This can be accomplished by adding the following to your `newrelic.yml` file:

  ```yaml
    autostart.denylisted_constants: "Rails::Command::ConsoleCommand,Rails::Command::CredentialsCommand,Rails::Command::Db::System::ChangeCommand,Rails::Command::DbConsoleCommand,Rails::Command::DestroyCommand,Rails::Command::DevCommand,Rails::Command::EncryptedCommand,Rails::Command::GenerateCommand,Rails::Command::InitializersCommand,Rails::Command::NotesCommand,Rails::Command::RakeCommand,Rails::Command::RoutesCommand,Rails::Command::RunnerCommand,Rails::Command::SecretsCommand,Rails::Console,Rails::DBConsole"
  ```

  Thank you, [@edariedl](https://github.com/edariedl), for reporting this issue. [Issue#2677](https://github.com/newrelic/newrelic-ruby-agent/issues/2677) [PR#2694](https://github.com/newrelic/newrelic-ruby-agent/pull/2694)
