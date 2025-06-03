---
title: "Tag your Nerdpack's release version"
tags:
    - New Relic 
    - Nerdpack
metaDescription: Learn to tag your Nerdpack's release version.
freshnessValidatedDate: never
---

Tag your Nerdpack versions to track and subscribe to them. Untag versions to prevent subscriptions or hide Nerdpacks from the catalog.

## Update your CLI

Before you run any commands, ensure that you have the latest version of the CLI:

```sh
nr1 update
```

## Check your permissions

To tag a Nerdpack version, you need:

* Access to the account that published it
* The [needed permissions](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) for managing Nerdpacks.

## Publish your Nerdpack

You need to [publish](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) Nerdpacks that you create before you can tag them.

## Tag a version

After you've published a Nerdpack version to the New Relic app catalog, you can tag it with the `nr1` CLI.

<Steps>
  <Step>
    In the root folder of your Nerdpack, run `nr1 nerdpack:tag`:

    ```sh
    nr1 nerdpack:tag --tag=DEV
    [output] {success}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {green}1.0.0{normal} as {green}DEV{normal}.
    ```

    Here, you tagged version `1.0.0` as `DEV`.

    Now, you, and other users on your account, can use this tag:

    * You see the tag as an option to subscribe to when you add the Nerdpack to your account
    * If you subscribe to the `DEV` tag and it gets updated later—say, `DEV` is applied to version `1.0.1`—you automatically get upgraded to the new version without having to subscribe again.

    <Callout variant="important">
      One of the features of tagging release versions is that users who are subscribed to a tag automatically get updates when that tag is used for another version. This means that if a user is testing one version, say `1.0.0`, and you apply that same tag to  another version, say `1.0.1`, that user will see version `1.0.1` in their account, and they can no longer access the Nerdpack they were testing before. Often times, this is the expected behavior, but make sure you consider this side effect when you use tags.
    </Callout>
  </Step>

  <Step>
    View your Nerdpack's registry information:

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date         Tags
    [output] -------  -----------  ----
    [output] 1.0.0    {muted}5 hours ago{green}  DEV
    ```

    This output confirms your `DEV` tag on version `1.0.0`.
  </Step>
</Steps>

## Untag a version

As you build more versions of your Nerdpack, you may update your tags to newer versions. However, you can also remove a tag from your Nerdpack with `nr1`.

<Steps>
  <Step>
    From your Nerdpack's root directory, view your registry information:

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date               Tags
    [output] -------  -----------------  ----
    [output] 2.0.0    {muted}a few seconds ago{green}  DEV
    [output] 1.0.1    {muted}8 minutes ago{green}      BETA, STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```

    Here, you see that version `1.0.0` has no tags, version `1.0.1` has two tags, `BETA` and `STABLE`, and version `2.0.0` has one tag, `DEV`.
  </Step>

  <Step>
    Remove the `BETA` tag from your Nerdpack versions:

    ```sh
    nr1 nerdpack:untag --tag=BETA
    [output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}BETA{normal}.
    ```
  </Step>

  <Step>
    Verify that the tag was removed from your Nerdpack:

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date            Tags
    [output] -------  --------------  ----
    [output] 2.0.0    {muted}5 minutes ago{green}   DEV
    [output] 1.0.1    {muted}13 minutes ago{green}  STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```
  </Step>
</Steps>

## Resolve issues with tagging a Nerdpack version

Sometimes, when you tag to a Nerdpack version, you may come across issues. Whether you can't tag your Nerdpack or you can't untag your Nerdpack, consider some common solutions for resolving these issues.

### Publish your Nerdpack

If you try to tag your Nerdpack without first publishing it, you'll get an error:

```sh
nr1 nerdpack:tag --tag=DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

This error message doesn't say much, but you can use the `--verbose` option to see more information:

```sh
nr1 nerdpack:tag --tag=DEV --verbose
[output] init version: @oclif/command@1.8.0 argv: [ {green}'--tag=DEV'{normal}, {green}'--verbose'{normal}, [length]: {yellow}2{normal} ]
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
[output] Using profile {muted}account-1234567
[output] {purple}Request:{normal} POST https://api.newrelic.com/graphql
[output] {purple}Data:{green} mutation {
[output]                 {green}nerdpackTagVersion(
[output]                     {green}nerdpackId: "ab123c45-678d-9012-efg3-45hi6jkl7890",
[output]                     {green}versionTag: {
[output]                         {green}tag: "DEV",
[output]                         {green}version: "1.0.0"
[output]                     {green}}
[output]                 {green}) {
[output]                     {green}nerdpackId
[output]                     {green}tags
[output]                     {green}version
[output]                 {green}}
[output]             {green}}
[output] {purple}Headers: {
[output]   {green}'API-Key'{normal}: {green}'<YOU USER KEY>'{normal},
[output]   {green}'Content-Type'{normal}: {green}'application/graphql'
[output] }
```

This more verbose error message shows the GraphQL that runs behind the scenes for `nr1 nerdpack:tag`. The important part of the message here is:

```sh
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
```

The `dist` directory is created when you publish your app. So, because it hasn't been published yet, this directory doesn't exist and `nr1` falls back to `package.json` to look for details about your Nerdpack. But, because the UUID in your `package.json` isn't in the New Relic registry, the command failed.

So, before you tag your versions, publish them to the registry:

```sh
nr1 nerdpack:publish
nr1 nerdpack:tag --tag=DEV
```

<Callout variant="tip">
  Remember that you can also tag a version at the same time you deploy it!

  ```sh
  nr1 nerdpack:publish --tag=DEV
  ```
</Callout>

### Unsubscribe from the Nerdpack

You can only remove tags that have no subscribers. If you try to remove a tag that users are subscribed to, you'll get an error:

```sh
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago  {green}DEV
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
[output]
nr1 nerdpack:untag -t DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

In this case, check to see if you're subscribed to the Nerdpack:

```sh
nr1 subscription:list
[output] {muted}Listing subscribed deployed nerdpacks on your account:
[output] Version  UUID                                  Name               Date         User
[output] -------  ------------------------------------  -----------------  -----------  ----------
[output] 2.0.0    {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal}  MyAwesomeNerdpack  {muted}an hour ago  1000383529
```

This shows that you're subscribed to `MyAwesomeNerdpack`. Unsubscribe, then try to remove the `DEV` tag again:

```sh
nr1 nerdpack:unsubscribe
[output] Unsubscribed account {green}1234567{normal} from the nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} on the {green}DEV{normal} channel.
[output]
nr1 nerdpack:untag --tag=DEV
[output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}DEV{normal}.
[output]
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: {green}1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
```
