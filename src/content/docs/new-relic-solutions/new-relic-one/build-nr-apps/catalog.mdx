---
title: "Update your Nerdpack's catalog information"
tags:
    - New Relic 
    - Nerdpack
metaDescription: Learn to describe your Nerdpack in the Instant Observability catalog.
freshnessValidatedDate: never
---

Add screenshots, descriptions, and other metadata to your Nerdpack, and upload it all to [Instant observability](https://newrelic.com/instant-observability).

## Update your CLI [#update-cli]

Before you run any commands, ensure that you have the latest version of the CLI:

```shell
nr1 update
```

## Check your permissions [#check-permissions]

To publish your Nerdpack and update its catalog information, you need:

* Access to the account that published it.
* The [necessary permissions](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) for managing Nerdpacks.

## Publish your Nerdpack [#publish-nerdpack]

You need to [publish](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) Nerdpacks that you create before you can update their catalog information.

## Update your Nerdpack's catalog metadata [#update-nerdpack]

After you've published your Nerdpack to the [Instant observability](https://newrelic.com/instant-observability) catalog, update the Nerdpack's metadata to let users know all about your Nerdlets or visualizations.

```json fileName=catalog/config.json
{
  "tagline": "",
  "details": "",
  "categoryTerms": [],
  "keywords": [],
  "repository": "",
  "whatsNew": "",
  "support": {
    "email": {
      "address": ""
    },
    "issues": {
      "url": ""
    },
    "community": {
      "url": ""
    }
  }
}
```

<Steps>
  <Step>
    From [New Relic](https://one.newrelic.com) homepage, go to <DNT>**+ Integrations & Agents**</DNT> in the top navigation bar.
  </Step>

  <Step>
    Find your published Nerdpack using the Apps filter or search bar. Notice that there is no information or details page other than the Nerdpack's name and the brief description found in `nr1.json`. There are no screenshots, icons, details, or what's new features. For these, you need to provide catalog information to your Nerdpack.
  </Step>

  <Step>
    From the root of your Nerdpack, create **catalog** directories to house your Nerdpack's screenshots and metadata:

    ```sh
    nr1 create --type catalog
    [output] {success}✔{normal}  created: launchers/launcher/catalog
    [output] {success}✔{normal}  created: nerdlets/home/catalog
    [output]
    [output] {success}✔{normal}  catalog created successfully!
    [output]    {purple}catalog{normal} is available at "./catalog"
    ```

    Inside your root `catalog` directory, you'll find specific files and directories for portraying information about your Nerdpack to your users:

    ```sh
    ls catalog
    [output] README.md         additionalInfo.md config.json       documentation.md  {blue}screenshots
    ```

    <table>
      <thead>
        <tr>
          <th>
            File
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            README.md
          </td>

          <td>
            A markdown file that instructs you how to use the information and metadata in catalog
          </td>
        </tr>

        <tr>
          <td>
            config.json
          </td>

          <td>
            A JSON file that contains the following fields:

            * `tagline`: A brief headline for the application. This cannot exceed 30 characters.
            * `repository`: The URL for the Nerdpack's remote repository. This cannot exceed 1000 characters.
            * `details`: The purpose of the Nerdpack and how to use it. This cannot exceed 1000 characters. Use newlines for formatting, and don't include any markdown or HTML.
            * `categoryTerms`: A list of terms that matches the Nerdpack to a category in the [Instant Observability](https://newrelic.com/instant-observability) catalog. You can look up a mapping of category terms with NerdGraph:
              * [US Query](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
              * [EU Query](https://api.eu.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

            * `keywords`: A list of relevant words to improve the search discoverability of the Nerdpack. This cannot exceed 50 words, and each word cannot exceed 64 characters.
            * `support`: An object that contains:
              * `issues`: A URL for the repository's issues list. For example, the **Issues** tab if using GitHub.
              * `email`: A valid email address for the team supporting the application.
              * `community`: A URL for a support thread, forum, or website for troubleshooting and usage support.
            * `whatsNew`: A bulleted list of changes in the current release version. This cannot exceed 500 characters. Use newlines for formatting, and don't include markdown or HTML.

            Check out our [Pageview Map application's `config.json`](https://github.com/newrelic/nr1-pageview-map/blob/main/catalog/config.json) to see a real-life implementation.
          </td>
        </tr>

        <tr>
          <td>
            documentation.md
          </td>

          <td>
            A markdown file that tells users how to use the Nerdpack's Nerdlets or visualizations. This shows in the detail view's **Documentation** tab.
          </td>
        </tr>

        <tr>
          <td>
            additionalInfo.md
          </td>

          <td>
            An optional markdown file for any additional information about using your application
          </td>
        </tr>

        <tr>
          <td>
            screenshots
          </td>

          <td>
            A directory that contains screenshots showcasing your Nerdpack, such as select images of Nerdlets or visualizations. This can contain no more than 6 images. All screenshots must meet the following criteria:

            * 3:2 aspect ratio
            * PNG format
            * landscape orientation
            * 1600 to 2400 pixels wide
          </td>
        </tr>
      </tbody>
    </table>

    This command also generates a `catalog` directory for each launcher, Nerdlet, and visualization in your Nerdpack. Inside you'll find a directory that allows you to add screenshots for each Nerdpack item.

    ```shell
    ls launchers/launcher/catalog
    [output] {blue}screenshots
    [output]
    ls nerdlets/home/catalog
    [output] {blue}screenshots
    ```
  </Step>

  <Step>
    Update your Nerdpack's `documentation.md` file:

    ```md fileName=catalog/documentation.md
    Enter your first and last name into the fields provided. When you're done, press **Submit** to see a personalized "Hello!" message.
    ```
  </Step>

  <Step>
    Update your `config.json` file:

    ```json fileName=catalog/config.json
    {
        "tagline": "Say hi!",
        "details": "DemoApp says Hello to a user.",
        "categoryTerms": [],
        "keywords": ["hello world"],
        "repository": "https://github.com/newrelic/developer-website",
        "whatsNew": "feat: Initial commit"
    }
    ```
  </Step>

  <Step>
    Include screenshots in your root `screenshots` directory or any Nerdpack item `screenshots` directory.
  </Step>

  <Step>
    Submit the information to the Instant Observability catalog:

    ```shell
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.0
    ```
  </Step>

  <Step>
    Go to Instant Observability to see your changes. Click your Nerdpack to see the new details. Then, click **What's inside** to see any screenshots you uploaded for individual items in your Nerdpack.
  </Step>
</Steps>

## Update your Nerdpack's icons [#nerdpack-icons]

Within a Nerdpack, you can set two types of icons:

* One for your entire Nerdpack, which represents your Nerdpack in the catalog.
* One for each of your launchers, which represents your Nerdlets.

Replace these icons and publish your Nerdpack to see the changes.

<Steps>
  <Step>
    Update the `icon.png` in the root of your Nerdpack. This icon is used in the catalog and the Nerdpack's detail page.
  </Step>

  <Step>
    If you're building a Nerdpack with one or more launchers, update the `icon.png` in each of your launcher's subfolders.
  </Step>

  <Step>
    Update your `package.json` version:

    ```json fileName=package.json lineHighlight=4
    {
      "private": true,
      "name": "demo-app",
      "version": "1.0.1",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "f2dbc999-e9a3-49b9-933d-5a704c6750bd"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    This allows you to publish a new version of your Nerdpack.
  </Step>

  <Step>
    [Publish](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) your Nerdpack:

    ```sh
    nr1 nerdpack:publish
    ```
  </Step>

  <Step>
    Update your `whatsNew` string in `catalog/config.json`:

    ```json fileName=catalog/config.json
    {
      "tagline": "Say hi!",
      "details": "DemoApp says Hello to a user.",
      "categoryTerms": [],
      "keywords": ["hello world"],
      "repository": "https://github.com/newrelic/developer-website",
      "whatsNew": "feat: Add new icons"
    }
    ```

    This will tell users what you added in the latest version of your Nerdpack.
  </Step>

  <Step>
    Submit this new metadata to the catalog:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.1
    ```
  </Step>

  <Step>
    Go to the catalog and [subscribe to your Nerdpack](/docs/new-relic-solutions/new-relic-one/build-nr-apps/subscribe) to see your new icon.
  </Step>
</Steps>

## Resolve issues with submitting catalog information [#resolve-issues]

Sometimes, when you work with catalog metadata, you may run into issues. Consider some common solutions for resolving these issues.

### Publish your Nerdpack [#publish-nerdpack]

Remember that you can only submit catalog metadata for Nerdpacks that have already been published. If you try to submit information for a Nerdpack that hasn't been published, the CLI will try to help:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}1 error while updating DemoApp 1.0.0
[output]  {error}›
[output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
[output]  {error}›{normal}   Code: UNKNOWN
```

### Resize your images [#resize-images]

Screenshots for the catalog must meet the criteria specified previously in this guide. If they don't, the CLI will try to help:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a size ratio of 4:2. Update size ratio to 3:2.
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a width of 3054px. Update size to be between 1600px and 2400px.
[output]  {error}›{normal}   Code: UNKNOWN
```

### Check the length of your strings [#check-strings]

Most of the content in `config.json` has string-length requirements. Make sure you review those requirements and adhere to them when you update your `config.json` file. Otherwise, you'll see errors when you try to submit your configuration to the catalog:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {success}✔{normal}  Screenshots uploaded
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `details` has a character length of 2204. Must be no longer than 1000 characters
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `tagline` has a character length of 266. Must be no longer than 30 characters
[output]  {error}›{normal}   Code: UNKNOWN
```
