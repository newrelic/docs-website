---
subject: Ruby agent
releaseDate: '2022-01-10'
version: 8.3.0
downloadLink: 'https://rubygems.org/downloads/newrelic_rpm-8.3.0.gem'
features: ["Add support for Ruby 3.1.0"]
bugs: ["Encode ASCII-8BIT log messages correctly", "Update AdaptiveSampler#sampled? algorithm"]
security: []
---

## v8.3.0

* **Updated the agent to support Ruby 3.1.0**

  Most of the changes involved updating the multiverse suite to exclude runs for older versions of instrumented gems that are not compatible with Ruby 3.1.0. In addition, Infinite Tracing testing was updated to accommodate `YAML::unsafe_load` for Psych 4 support.

* **Bugfix: Update AdaptiveSampler#sampled? algorithm**

  One of the clauses in `AdaptiveSampler#sampled?` would always return false due to Integer division returning a result of zero. This method has been updated to use Float division instead, to exponentially back off the number of samples required. This may increase the number of traces collected for transactions. A huge thank you to @romul for bringing this to our attention and breaking down the problem!

* **Bugfix: Correctly encode ASCII-8BIT log messages**

  The encoding update for the DecoratingLogger in v8.2.0 did not account for ASCII-8BIT encoded characters qualifying as `valid_encoding?`. Now, ASCII-8BIT characters will be encoded as UTF-8 and include replacement characters as needed. We're very grateful for @nikajukic's collaboration and submission of a test case to resolve this issue.

## Support statement

New Relic recommends that you upgrade the agent regularly and at a minimum every 3 months. As of this release, the oldest supported version is [5.6.0.349](https://docs.newrelic.com/docs/release-notes/agent-release-notes/ruby-release-notes/ruby-agent-560349).
