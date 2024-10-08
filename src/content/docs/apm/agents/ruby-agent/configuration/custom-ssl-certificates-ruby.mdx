---
title: Custom SSL certificates (Ruby)
tags:
  - Agents
  - Ruby agent
  - Configuration
metaDescription: 'Ruby agent: Specify custom CA bundles to validate SSL communication via a proxy server.'
redirects:
  - /docs/agents/ruby-agent/configuration/custom-ssl-certificates-ruby
  - /docs/agents/ruby-agent/installation-configuration/ssl-settings-ruby-agent
  - /docs/agents/ruby-agent/installation-configuration/custom-ssl-certificates-ruby
freshnessValidatedDate: never
---

New Relic [requires HTTPS](/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls) for all traffic to APM and the New Relic REST API. The Ruby agent connects to New Relic collector servers over SSL by default. Usually, this default is enough.

## Installing SSL Certificates

If you deploy a Ruby application and agent to a container or server without CA certificates installed, you must install them yourself to make HTTPS connections to New Relic servers. Version 7.0 of the agent introduced this change. You can install these CA certificates in various ways, depending on your host. The following external links are helpful guidance for testing the readiness of your host and installing CA certificates:

* [Troubleshooting SSL Certificate Errors](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors)
* [Automated SSL Check](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#automated-ssl-check)
* [Installing CA Certificates](https://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu/719047#719047)
* [How to handle Certificates in Docker](https://serverfault.com/questions/975775/how-to-handle-certificates-in-dockerfile)

## Use a custom CA bundle [#using-custom]

In certain configurations, you may need to use a custom CA bundle. For example, you may use an HTTP proxy to intercept and decrypt SSL traffic from the agent, which then establishes a separate SSL connection to New Relic.

To configure the agent to use a custom CA bundle when validating the [SSL certificate](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#ssl-certificate) presented by a proxy, set the `ca_bundle_path` configuration setting in your <DNT>**newrelic.yml**</DNT> file or via the `NEW_RELIC_CA_BUNDLE_PATH` environment variable:

```yml
common: &default_settings
  ca_bundle_path: certificates/mycert.pem
  # ... other settings ...
```

Specify a path to a <DNT>**.pem**</DNT> file containing each certificate you want the agent to use when validating the identity of the proxy or server. You can concatenate multiple certificates into a single <DNT>**.pem**</DNT> file.

* <DNT>**Relative path:**</DNT> If you specify a relative path, the agent will assign a path relative to the working directory of your app server process at runtime.
* <DNT>**Absolute path:**</DNT> If your working directory is `/` rather than the root of your application, be sure to specify an absolute path.
