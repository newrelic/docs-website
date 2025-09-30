---
subject: Ruby agent
releaseDate: '2024-09-30'
version: 9.14.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.14.0.gem
features: ["Add Apache Kafka instrumentation for the rdkafka and ruby-kafka gems", "Add a configuration option to permit custom method tracers to be defined automatically", "Collect just MIME type for ActionDispatch 7.0+ requests"]
bugs: ["Corrected Boolean coercion for `newrelic.yml` configuration", "JRuby not saving configuration values correctly in configuration manager", "Update condition to verify Bundler.rubygems.installed_specs is available", "Support view_component v3.15.0+"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.14.0

Version 9.14.0 adds Apache Kafka instrumentation for the rdkafka and ruby-kafka gems, introduces a configuration-based, automatic way to add custom instrumentation method tracers, correctly captures MIME type for ActionDispatch 7.0+ requests, properly handles Boolean coercion for `newrelic.yml` configuration, fixes a JRuby bug in the configuration manager, fixes a bug related to `Bundler.rubygems.installed_specs`, and fixes a bug to make the agent compatible with ViewComponent v3.15.0+.

- **Feature: Add Apache Kafka instrumentation for the rdkafka and ruby-kafka gems**

  The agent now has instrumentation for both the rdkafka and ruby-kafka gems. The agent will record transactions and message broker segments for produce and consume calls made using these gems. [PR#2824](https://github.com/newrelic/newrelic-ruby-agent/pull/2824) [PR#2842](https://github.com/newrelic/newrelic-ruby-agent/pull/2842)

- **Feature: Add a configuration option to permit custom method tracers to be defined automatically**

  A new `:automatic_custom_instrumentation_method_list` configuration parameter has been added to permit the user to define a list of fully qualified (namespaced) Ruby methods for the agent to automatically add custom instrumentation for without requiring any code modifications to be made to the classes that define the methods.

  The list should be an array of `CLASS#METHOD` (for instance methods) and/or `CLASS.METHOD` (for class methods) strings.

  Use fully qualified class names (using the `::` delimiter) that include any module or class namespacing.

  Here is some Ruby source code that defines a `render_png` instance method for an `Image` class and a `notify` class method for a `User` class, both within a `MyCompany` module namespace:

  ```
  module MyCompany
    class Image
      def render_png
        # code to render a PNG
      end
    end

    class User
      def self.notify
        # code to notify users
      end
    end
  end
  ```

  Given that source code, the `newrelic.yml` config file might request instrumentation for both of these methods like so:

  ```
  automatic_custom_instrumentation_method_list:
    - MyCompany::Image#render_png
    - MyCompany::User.notify
  ```

  That configuration example uses YAML array syntax to specify both methods. Alternatively, a comma-delimited string can be used instead:

  ```
  automatic_custom_instrumentation_method_list: 'MyCompany::Image#render_png, MyCompany::User.notify'
  ```

  Whitespace around the comma(s) in the list is optional. When configuring the agent with a list of methods via the `NEW_RELIC_AUTOMATIC_CUSTOM_INSTRUMENTATION_METHOD_LIST` environment variable, this comma-delimited string format should be used:

  ```
  export NEW_RELIC_AUTOMATIC_CUSTOM_INSTRUMENTATION_METHOD_LIST='MyCompany::Image#render_png, MyCompany::User.notify'
  ```

  [PR#2851](https://github.com/newrelic/newrelic-ruby-agent/pull/2851)

- **Feature: Collect just MIME type for ActionDispatch 7.0+ requests**

  Rails 7.0 [introduced changes](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#actiondispatch-request-content-type-now-returns-content-type-header-as-it-is) to the behavior of `ActionDispatch::Request#content_type`, adding extra request-related details the agent wasn't expecting to collect. Additionally, the agent's use of `content_type ` was triggering deprecation warnings. The agent now uses `ActionDispatch::Request#media_type` to capture the MIME type. Thanks to [@internethostage](https://github.com/internethostage) for letting us know about this change. [Issue#2500](https://github.com/newrelic/newrelic-ruby-agent/issues/2500) [PR#2855](https://github.com/newrelic/newrelic-ruby-agent/pull/2855)

- **Bugfix: Corrected Boolean coercion for `newrelic.yml` configuration**

  Previously, any String assigned to New Relic configurations expecting a Boolean value were evaluated as `true`. This could lead to unexpected behavior. For example, setting `application_logging.enabled: 'false'` in `newrelic.yml` would incorrectly evaluate to `application_logging.enabled: true` due to the truthy nature of Strings.

  Now, the agent strictly interprets Boolean configuration values. It recognizes both actual Boolean values and certain Strings/Symbols:
  - `'true'`, `'yes'`, or `'on'` (evaluates to `true`)
  - `'false'`, `'no'`, or `'off'` (evaluates to `false`)

  Any other inputs will revert to the setting's default configuration value. [PR#2847](https://github.com/newrelic/newrelic-ruby-agent/pull/2847)

- **Bugfix: JRuby not saving configuration values correctly in configuration manager**

  Previously, a change made to fix a different JRuby bug caused the agent to not save configuration values correctly in the configuration manager when running on JRuby. This has been fixed. [PR#2848](https://github.com/newrelic/newrelic-ruby-agent/pull/2848)

- **Bugfix: Update condition to verify Bundler.rubygems.installed_specs is available**

  To address a recent Bundler deprecation warning, we started using `Bundler.rubygems.installed_specs` instead of `Bundler.rubygems.all_specs` in environments that seemed appropriate. We discovered the version constraint we used was too low. Now, rather than check the version, we check for the method using `respond_to?`. [PR#2853](https://github.com/newrelic/newrelic-ruby-agent/pull/2853)

- **Bugfix: Support view_component v3.15.0+**

  Previously the agent had been making use of a private API to obtain a component identifier value. This private API was dropped in v3.15.0 of view_component, resulting in errors from the New Relic Ruby agent's continued attempts to use it. Many thanks to community member [@navidemad](https://github.com/navidemad) for bringing this issue to our attention and supplying a bugfix with [PR#2870](https://github.com/newrelic/newrelic-ruby-agent/pull/2870).


