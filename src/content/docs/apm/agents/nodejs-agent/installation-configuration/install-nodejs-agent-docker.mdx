---
title: Install the Node.js agent for Docker
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
metaDescription: How to use New Relic's Node.js agent to instrument Node.js applications deployed in Docker containers.
redirects:
  - /docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent-docker
  - /docs/agents/nodejs-agent/installation-configuration/install-new-relic-nodejs-agent-docker
freshnessValidatedDate: never
---

You can use our Node.js agent to instrument Node.js applications deployed in Docker containers. This document explains how to build, configure, and deploy your Dockerized Node.js application that you've instrumented with New Relic.

If you need general help with the Node.js agent installation, see our [main installation instructions](/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent).

## Instrument your container [#instrument]

<Callout variant="caution">
Don't include your license key in your Dockerfile or Docker image. For more information, see [our documentation on license key security](/docs/accounts/install-new-relic/account-setup/license-key#license-key-security).
</Callout>

By making a few configuration changes and adding New Relic environment variables to your existing Dockerfile, you can instrument your Dockerized app with our Node.js agent. 

1. Add `newrelic` to your `package.json`:

    ```json
    "newrelic": "latest",
    ```

    You can update the value `latest` to install a specific version, or use any of the other options provided by the [`package.json` format](https://docs.npmjs.com/files/package.json#dependencies). Check [the Node.js agent release notes](/docs/release-notes/agent-release-notes/nodejs-release-notes) for information about past agent versions.
1. Inject the agent in your `node` start command to instrument your application. Your container setup may allow you to edit the `ENTRYPOINT` to include `newrelic` module first with the Node.js `-r`/`--require` flag when the node command is invoked. If your Dockerfile contains any of these start commands, you can change them this way:

    * Change `node YOUR_PROGRAM.js` to `node -r newrelic YOUR_PROGRAM.js`
    * Change `ENTRYPOINT ['node', 'YOUR_PROGRAM.js']` to `ENTRYPOINT ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
    * Change `CMD ['node', 'YOUR_PROGRAM.js']` to `CMD ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
    * If you have an npm script to run your program such as `npm start`, you can programmatically modify this script by running `npm pkg set scripts.start="node -r newrelic your-program.js"`.
    * If you can't control how your program runs, you can load the `newrelic` module before any other module in your program by adding `require('newrelic')` to the top of your entry file.
1. Build your Docker image the way you normally do.
1. To run your Docker app with the agent enabled, add your <InlinePopover type="licenseKey"/> and [app name](/docs/agents/manage-apm-agents/app-naming/name-your-application) to your `docker run` command as environment variables:

    ```bash
    docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
            -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
            YOUR_IMAGE_NAME:latest
    ```

<InstallFeedback/>

## Other configuration options [#configure]

<Callout variant="important">
    If your Node.js agent is older than [v7.2.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-7-2-0) you will need to add the environment variable `NEW_RELIC_NO_CONFIG_FILE=true` to your Dockerfile so the agent can run without a configuration file.  More information on our configuration settings and order of precedence can be found [here](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/).

    If your Node.js agent is older than [v8.3.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-8-3-0) and you want to use [distributed tracing](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing), you'll need to enable it by setting the environment variable `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED` to `true`.
</Callout>

In addition to setting your application name or license key, you can set [other configuration options](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) by starting your container with the `-e` option. You can also:

    * Enable a feature flag using its environment variable (`NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED`), as in this snippet below, replacing `NAME_OF_FEATURE_FLAG` with the capitalized name of the feature flag:

        ```bash
        docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
                -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
                -e NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
                YOUR_IMAGE_NAME:latest
        ```
    * Set configuration options in your Dockerfile using `ENV` directives:

        ```dockerfile
        ENV NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
            NEW_RELIC_LOG=stdout
            # etc.
        ```
