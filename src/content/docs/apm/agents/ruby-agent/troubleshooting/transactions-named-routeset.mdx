---
title: 'Transaction labelled `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`'
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'Find out what to do if you see transactions named Middleware/Rack/ActionDispatch::Routing::RouteSet#call in your APM UI.'
freshnessValidatedDate: 2023-11-13
---

## Problem [#problem]

You see transactions in the APM UI named `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`, but you're unsure what they are.

## Cause [#cause]

Transactions with the name `Middleware/Rack/ActionDispatch::Routing::RouteSet#call` represent a route in your rails app that hasn't been instrumented. Since the rails middleware is instrumented, New Relic can capture the time spent on the transaction, but cannot provide any details beyond that.

There are a variety of situations that can lead to transactions named `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`. We've provided two solutions for the most common causes to this transaction type.

## Solution [#solution]

<Tabs>
  <TabsBar>
    <TabsBarItem id="route-gem">
      Add custom instrumentation to an uninstrumented gem
    </TabsBarItem>

    <TabsBarItem id="route-controller">
      Instrument your controller directly
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="route-gem">
      If a route in your app passes through instrumented middleware to an uninstrumented gem, then you need to add custom instrumentation to that gem to see more specific data about the transaction. To add custom instrumentation, we recommend reading our [Ruby custom instrumentation doc](/docs/agents/ruby-agent/installation-configuration/ruby-custom-instrumentation).

      Adding custom instrumentation to your application is the best way to get more details about these transactions.
    </TabsPageItem>

    <TabsPageItem id="route-controller">
      The Ruby agent instruments controllers by inserting instrumentation into `ActionController::Base`. If a route passes through a controller that does not inherit `ActionController::Base`, however, then that controller needs instrumentation. Instrument your controller directly by adding this to your controller class:

      ```ruby
      include NewRelic::Agent::Instrumentation::ControllerInstrumentation
      ```
    </TabsPageItem>
  </TabsPages>
</Tabs>
