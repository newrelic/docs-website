---
title: 'Publish your New Relic application'
metaDescription: 'Publish your New Relic application'
freshnessValidatedDate: never
---

<Callout variant="tip">
  This lesson is part of a course that teaches you how to build a New Relic application from the ground up. If you haven't already, check out the Overview.

  Each lesson in the course builds upon the last, so make sure you've completed the last lesson, Describe your app for the catalog, before starting this one.
</Callout>

In the last lesson, you created catalog information for the A/B test app you've been building throughout this course. Now, it's time to publish your app to the Instant Observability catalog and submit those catalog details.

## Versions and tags [#versions]

Publishing an application requires two key pieces of information:

* version
* tag

An application's version identifies the code it contains and is stored in the Nerdpack's root-level `package.json` file. Every time you modify code in your Nerdpack and are ready to release it, you'll update the version in `package.json`. For example, if you fix some bugs in the first major version your application code, you might publish the changes under version `1.0.1`.

An app version's tags describe its state. For example, version `0.0.1` of a work-in-progress application might be published with a `DEV` tag to indicate that it's in development.

<Callout variant="tip">
  There are some rules governing how you can use tags and you can read about those in our tags documentation.
</Callout>

## Publish your first application [#publish]

<Steps>
  <Step>
    Change to the `publish/ab-test` directory of the [coursework repository](https://github.com/newrelic-experimental/nru-programmability-course):

    ```sh
    cd nru-programmability-course/publish/ab-test
    ```

    This directory contains the code that we expect your application to have at this point in the course. By navigating to the correct directory at the start of each lesson, you leave your custom code behind, thereby protecting yourself from carrying incorrect code from one lesson to the next.
  </Step>

  <Step>
    Navigate to the root of your Nerdpack at `nru-programmability-course/publish/ab-test`.
  </Step>

  <Step>
    Generate your own app UUID:

    ```sh
    nr1 nerdpack:uuid -gf
    ```

    The UUID is used to identify your app in the New Relic app registry. Because you're using code that we developed for this course, an application with the existing UUID already exists in the registry. By generating your own, you're now able to publish this application.

    <Callout
      variant="tip"
      title="Technical detail"
    >
      The UUID also ties your app to your account and, therefore, allows the application to make Nerdgraph requests on behalf of the account that installed it.
    </Callout>
  </Step>

  <Step>
    In `package.json`, set `version` to `1.0.0`:

    ```json
    {
      "private": true,
      "name": "ab-test",
      "version": "1.0.0",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "2d923ba6-d231-4dd3-830f-b1923577a422"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    New Relic uses [semantic versioning](https://semver.org) and, under this convention, `1.0.0` signals the first major release. Now, you're ready to publish!
  </Step>

  <Step>
    Replace all instances of `<YOUR NEW RELIC ACCOUNT ID>` and `<YOUR NEW RELIC ENTITY GUID>` in your project with your actual New Relic [account ID](/docs/accounts/accounts-billing/account-setup/account-id) and entity GUID, respectively.
  </Step>

  <Step>
    Publish your New Relic application:

    ```sh
    nr1 nerdpack:publish -t DEV
    ```

    That's it! You published your application to New Relic's registry. The `-t` parameter specifies a tag for your published version. Among other logs, you should see the following confirmation in your console:

    ```sh
    [output] Publishing Nerdpack AbTest ({blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain})
    [output]  {success}✔{plain}  Nerdpack published successfully!
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}DEV{plain}.
    ```

    For now, you've tagged the 1.0.0 release as `DEV` because it's still a work in progress.
  </Step>

  <Step>
    View your app's registry information:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 4
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}5 minutes ago  {green}DEV
    ```

    The results of this command detail the information stored in New Relic's registry for your application, including its UUID, version, and account ID.
  </Step>
</Steps>

## View your application in Instant Observability [#view-app]

Now that your application is published and tagged, you can view it in the Instant Observability catalog.

<Steps>
  <Step>
    Go to [New Relic](https://one.newrelic.com). Notice that you're not using the `?nerdpacks=local` querystring parameter. You don't need it anymore because you're not serving your app locally.
  </Step>

  <Step>
    From the homepage, navigate to **Integrations & Agents** in the top navigation bar.

    Select **Apps & Visualizations**.

    From here, you can see your application among the resources.

    Notice that this is different than when you locally served your app. Local apps and published apps you're subscribed to show under **Your apps** in the Apps overlay instead.
  </Step>

  <Step>
    Click on your app to see more details.

    Notice the release date and app version. This page should show the information you created in the last lesson. It doesn't yet, because you haven't submitted that information to the catalog, and publishing your app doesn't do that for you.
  </Step>
</Steps>

## Submit catalog information [#submit]

Even though you've published your application, there are some things that the catalog doesn't know about. These are the descriptions, screenshots, and metadata you created in the last lesson. `nr1 catalog` is used to submit and view this information.

<Steps>
  <Step>
    Submit your catalog information:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from nru-programmability-course/publish/ab-test...
    [output]  {success}✔{normal}  Screenshots uploaded from: nru-programmability-course/publish/ab-test
    [output]  {green}✔  {plain}Updated metadata for AbTest 1.0.0
    ```

    If everything goes right, you should see a success message notifying you that the screenshots and metadata were updated.

    You may, however, get an error when submitting this information to the catalog:

    ```sh
    [output] Uploading screenshots...
    [output]  {error}›   {plain}Error: {error}1 error while updating AbTest 1.0.0
    [output]  {error}›
    [output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
    [output]  {error}›   {plain}Code: UNKNOWN
    ```

    If you do, try again in a minute or two. It can take a few seconds for the catalog to update with the new version of your application.

    If that doesn't work, make sure you published your app with `nr1 nerdpack:publish`.
  </Step>

  <Step>
    View your catalog information:

    ```sh
    nr1 catalog:info
    [output] AbTest (Nerdpack):
    [output]     {purple}categoryTerms.0: {plain}browser agent
    [output]     {purple}description: {plain}Nerdpack ab-test
    [output]     {purple}details: {plain}Display test data for our newsletter subscription A/B test
    [output]     {purple}displayName: {plain}AbTest
    [output]     {purple}keywords.0: {plain}a/b test
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output]     {purple}previews.0.url: {plain}https://application-catalog-production.s3.us-east-2.amazonaws.com/nerdpacks/a...
    [output]     {purple}releaseDate: {plain}2021-03-12T15:46:09.600138Z
    [output]     {purple}repository: {plain}https://github.com/newrelic-experimental/nru-programmability-course
    [output]     {purple}tagline: {plain}Win @ newsletter subscriptions
    [output]     {purple}version: {plain}1.0.0
    [output]     {purple}whatsNew.changes: {plain}Initial release! Includes:
    [output]     - A variety of charts for understanding the test r...
    [output]     {purple}whatsNew.version: {plain}1.0.0
    [output] AbTestLauncher (Launcher):
    [output]     {purple}description: {plain}Describe me
    [output]     {purple}displayName: {plain}AbTestLauncher
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output] AbTestNerdlet (Nerdlet):
    [output]     {purple}displayName: {plain}AbTestNerdlet
    [output]     {purple}supportedEntityTypes.mode: NONE
    ```

    All the information from `catalog` shows here.
  </Step>

  <Step>
    View your app.

    Click on the app to see more.

    You see the screenshots added to your launcher or Nerdlet under **What's inside**.

    Here, you see app details, a documentation tab, release notes, and screenshots.
  </Step>
</Steps>

## Update your version tag [#update]

Your app looks great in the Instant Observability catalog, complete with metadata, images, and documentation. Before, you tagged the app as `DEV` because all of the information wasn't ready for public consumption. Now, it is. It's time to update your version tag.

<Steps>
  <Step>
    Update your `1.0.0` app version from `DEV` to `STABLE`:

    ```sh
    nr1 nerdpack:tag -t STABLE
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}STABLE{plain}.
    ```

    Without specifying a version, `nr1` uses the version specified in `package.json`. You can specify a version with the `-V` command. Learn more about `nerdpack:tag` with the `nr1 nerdpack:tag --help` command.
  </Step>

  <Step>
    View your app information:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}30 minutes ago  {green}STABLE
    ```

    The app is now tagged with `STABLE`, indicating it's ready for public use.

    <Callout
      variant="tip"
      title="Technical detail"
    >
      Even though the app is ready for public use, it's still only visible to users of your account. Other accounts can't see apps created by other private accounts unless those apps are added to the public Instant Observability catalog.
    </Callout>
  </Step>
</Steps>

Now that your app is published and its metadata is submitted, you can subscribe your account to the app from Instant Observability. In the next lesson, you'll learn the ways to subscribe and unsubscribe to your new application.

<Callout variant="course">
  This lesson is part of a course that teaches you how to build a New Relic application from the ground up. Continue on to the next lesson: Subscribe to your New Relic application.
</Callout>
