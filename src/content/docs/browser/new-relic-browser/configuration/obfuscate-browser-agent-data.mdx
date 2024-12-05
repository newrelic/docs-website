---
title: Obfuscate Browser Agent Data
tags:
  - Browser monitoring
  - Obfuscation
metaDescription: "You can configure the browser agent to obfuscate the data it sends."
freshnessValidatedDate: 2023-10-24
---

<Callout variant="important">
  This feature is currently available for those using the copy/paste or NPM browser installation methods. There is currently no UI or NerdGraph configuration options available. We are continuing to work on improving access to these and other configuration options.
</Callout>

While New Relic's recommendation is to avoid using sensitive information in the public structure of your application, we also understand that this is not always possible. You can configure the browser agent to selectively obfuscate data in every payload it sends.  This can be useful if your application uses sensitive data in places that the agent captures, such as navigation paths, error messages, and more.

## How it works [#how-it-works]

As of browser agent [version 1216](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) and higher, obfuscation rules can be applied to outgoing harvest payloads.

To set up these rules, you'll need to configure the following browser agent property:

* The property `init.obfuscate` contains an array of selectors and replacements which will be used to modify each harvest before sending.
  * Since obfuscation currently requires you to use the copy/paste or NPM installation methods, you’ll need to manually edit your JavaScript configuration section and set the `obfuscate` array to contain your obfuscation conditions.

### Recommendations

When configuring this property, we recommend the following:

* Use intentional regex patterns to obfuscate only what needs obfuscation.
  * Needlessly obfuscating can have side-effects such as less granularity when grouping data and less ability to digest what the agent captured.
* Replace your sensitive data with neutral and generic terms that also indicate what data has been redacted.
  * Example: `/account-id/g` --> `ACCOUNT_ID`

### Copy/paste installation [#copy-paste]

If you're using the copy/paste installation method, add the following configuration to your browser JavaScript configurations before the agent loader:

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
}
```

### NPM installation [#npm]

If you’re using the NPM browser installation method, add the following configuration when initializing the browser agent:

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
  }
})
```

### Examples

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /user-id/g,
        replacement: 'USER_ID'
      },
    ]
}
```

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /account-id/g,
        replacement: 'ACCOUNT_ID'
      },
    ]
  }
})
```
