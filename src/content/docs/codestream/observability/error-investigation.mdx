---
title: Error investigation
metaDescription: "Investigating errors using CodeStream."
redirects:
freshnessValidatedDate: 2024-12-11
---

CodeStream shows you errors for any APM or browser monitoring service, including errors assigned to you and recent errors happening in the code opened in your IDE. You can control the timeframe via the dropdown list in the heading of this section. Note that this list may be a subset of the errors shown in the [errors inbox](/docs/errors-inbox/errors-inbox/) on New Relic.

<img
  title="The list of recent errors in CodeStream."
  alt="A screenshot of the list of recent errors in CodeStream."
  src="/images/codestream_screenshot-crop_errors-list.webp"
/>

Just click on an error to dig into the root cause and collaborate with teammates on the investigation.

<Video
  type="wistia"
  id="l65l4cqqhd"
/>

Click any frame in the stack trace to jump straight to the corresponding file and line number. If you're [associating git references with your errors](#buildsha), CodeStream opens a read-only editor tab of the file that triggered the error in the environment. If you aren't associating git references, then a local version of the file opens instead. You won't be able to click stack trace frames that represent code not part of your repository (e.g., an external library).

For errors in browser monitoring services you'll need to [upload sourcemaps](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors/) so that the stack trace can be un-minified, allowing you to jump to the code for each frame.

As you navigate the stack trace, you can find code that seems like the source of your problem and start a discussion with the comment button. CodeStream automatically mentions the most recent person to touch that code, making it easy for you to bring the right people into the discussion.

<img
  title="A comment with the most recent code contributor automatically mentioned."
  alt="A screenshot of a comment with the most recent code contributor automatically mentioned."
  src="/images/codestream_screenshot-crop_error-auto-mention.webp"
/>

Once you've identified the problem you can assign the error, or update the error status from `unresolved` to `resolved` or `ignored`.

## Starting from the errors inbox [#errors-inbox]

You can jump into this same errors experience directly from an error in the [errors inbox](/docs/errors-inbox/errors-inbox/) on New Relic. When viewing an error with a stack trace, click <DNT>**Open in IDE**</DNT> to go directly to the code in your IDE.

<img
  title="A stack trace error in errors inbox with the &quot;Open in IDE button"
  alt="A screenshot of a stack trace error in errors inbox with the &quot;Open in IDE button.&quot;"
  src="/images/codestream_screenshot-crop_open-in-ide-codestream.webp"
/>

Also note that discussions are kept in sync between CodeStream and the errors inbox, so you can participate from either location.

### Associate build SHAs or release tags with errors [#buildsha]

When viewing an error in CodeStream, you may see a build SHA or release tag associated with the error if it doesn't have a git reference. CodeStream uses the git reference to match the specific stack trace error with the version of the code running in the environment that triggered the error. While you don't need a git reference configured to investigate the error, bear in mind that you may not be looking at the version of the code that caused it.

<img
  title="The git reference not configured warning message."
  alt="A screenshot of the git reference not configured warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-configured.webp"
/>

You can use an environment variable to let the New Relic <InlinePopover type="apm"/> agent know the [commit sha](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection) associated with each build of your project. You can also use the [release tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging) associated with the
running version of your software.

For APM, the commit sha and/or release tag (`tags.commit` and `tags.releaseTag`) are added as attributes on `Transaction` and `TransactionError` events. You can use APM environment variables to set these attributes. We recommend setting one or both of these variables as part of your build pipeline:

* `NEW_RELIC_METADATA_COMMIT`: The commit sha. You can include the whole thing or only the first seven characters (e.g., `734713b`).
* `NEW_RELIC_METADATA_RELEASE_TAG`: A release tag (such as `v0.1.209` or `release-209`). This has the advantage of being human readable.

For more on how to set these variables, here are specific configuration details for each language:

* [Go](/docs/agents/go-agent/configuration/go-agent-configuration/)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file/)
* [.NET](/docs/agents/net-agent/configuration/net-agent-configuration/)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration/)
* [Python](/docs/agents/python-agent/configuration/python-agent-configuration/)

If you do have git references configured, CodeStream will let you know if the version of the code you're on locally doesn't contain the reference associated with the error. In this case, you may want to check out the version of the code that does contain that reference so that you can more effectively investigate and resolve the error.

<img
  title="The git reference not found warning message."
  alt="A screenshot of the git reference not found warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-found.webp"
/>

CodeStream will also let you know if the error doesn't have a stack trace associated with it. This happens with older errors when the stack trace has aged out on New Relic.
