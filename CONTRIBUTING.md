# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Guidelines for contributing](#guidelines-for-contributing)
  - [Getting started](#getting-started)
    - [Using multiple versions of Node](#using-multiple-versions-of-node)
    - [Quick edits](#quick-edits)
    - [Cloning vs Forking](#cloning-vs-forking)
    - [Submitting a PR from a forked repo](#submitting-a-pr-from-a-forked-repo)
    - [Submitting a PR from a cloned repo](#submitting-a-pr-from-a-cloned-repo)
    - [Using the `develop` branch](#using-the-develop-branch)
    - [Draft PRs](#draft-prs)
    - [Deploy previews with Amplify](#deploy-previews-with-amplify)
  - [Style guide adherence](#style-guide-adherence)
  - [Reusable components](#reusable-components)
  - [Editing existing pages](#editing-existing-pages)
  - [Creating new pages](#creating-new-pages)
    - [Adding a what's new post](#adding-a-whats-new-post)
    - [What's new post frontmatter example](#whats-new-post-frontmatter-example)
  - [Deleting pages](#deleting-pages)
  - [Updating the navigation](#updating-the-navigation)
  - [Adding a new page](#adding-a-new-page)
  - [Moving a page to a new location](#moving-a-page-to-a-new-location)
  - [Private edits](#private-edits)
    - [Bring your private work back into the public repository](#bring-your-private-work-back-into-the-public-repository)

## Guidelines for contributing

The Documentation Team and Developer Experience Team at New Relic welcomes contributions to this repository.
There are several ways you can contribute.

If you wish to make documentation edits or add new
documentation, follow our documentation contribution guidelines below.

If you'd like to to make code contributions follow the code contribution
guidelines below.

## Getting started

### Using multiple versions of Node

If you intend to run multiple versions of Node please be aware that the New Relic
Developer Site is currently on Node v12. Therefore it's recommended you use Node Version Manager [NVM](https://github.com/nvm-sh/nvm) to manage Node versions.

Review [this article](https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)
which clearly explains the setup and configuration of NVM.

### Quick edits

If you see a minor problem in our documentation that you want to quickly fix,
you can use the Github `Edit This File` button to submit a change.

0. Create a [Github](https://github.com/) account if you don't already have one.
1. View the file on Github.
2. In the file click on the pencil icon within the code block.
3. Provide a clear explanation of the change as a comment.
4. create a new branch.
5. Submit a `PR`.
6. And you are done!

### Cloning vs Forking

To be able to [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository and contribute you will need to be given write access to the repository. This is reserved for New Relic Employees only. Contact the Developer Experience team (developer-website-content Slack channel) if you need write access.

As a non New Relic employee you can [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and contribute as needed.

### Submitting a PR from a forked repo

0. Create a [Github](https://github.com/) account if you don't already have one.
1. `Fork` this this repository.
2. Make your changes.
3. Test your changes! Review the project's [READ ME](README.md) for instructions on how to build and run tests locally.
4. Submit a `Pull Request` to this project with your changes.
5. If/when your `PR` is accepted, the automation in this project will build the site and deploy a new version of the code to `docs.newrelic.com`.
6. And you are done!

### Submitting a PR from a cloned repo

0. Create a [Github](https://github.com/) account if you don't already have one.
1. `Clone` this repository.
2. Create a new branch locally.
3. Make your changes.
4. Test your changes! Review the project's [READ ME](README.md) for instructions on how to build and run tests locally.
5. Submit a `Pull Request` to this project with your changes.
6. If/when your `PR` is accepted, the automation in this project will build the site and deploy a new version of the code to `docs.newrelic.com`.
7. And you are done!

### Using the `develop` branch

Use the `develop` branch when creating your working branch locally. `develop` will always contain the most
current source code. The `develop` branch will be merged into the `main` branch by the maintainers when a new release is ready to ship.

All pull requests should be made against the `develop` branch.

### Draft PRs

`Draft PRs` are ideal for in progress work or work you need others to contribute to.

To submit a [Draft PR](https://github.blog/2019-02-14-introducing-draft-pull-requests/):

1. Make your code changes and submit a `Pull Request`.
2. Select Create a draft pull request on the PR submission screen on Github.
   You can find this by clicking on the Create pull request button at the bottom of the
   `PR` you wish to submit.
3. Once you are ready to have the `PR` reviewed and merge, click the Ready for review button on the `PR`.

### Deploy previews with Amplify

PRs that are opened from a branch in this repo (not forks) will generate preview links on Amplify automatically. Amplify preview links can be found within the PR under the `Checks` Tab.

## Style guide adherence

In order to drive consistency in our documentation New Relic has provided a detailed [Style Guide](STYLE_GUIDE.md)
for you to follow when making contributions. Refer to this guide prior to contributing.
When making documentation contributions follow these guidelines.

## Reusable components

In order to drive simplicity and ease of use New Relic has provided a set of reusable components you can leverage
when creating documentation. Refer to our [Component Guide](COMPONENT_GUIDE.md) for more information.

## Editing existing pages

1. To edit an existing page you can view the page's source code by clicking on the `Edit` icon in the upper right corner of the site.
2. Follow the instructions above to `Fork` or `Clone` the repo and make your edits.
3. Follow the instructions above to submit a `PR` for your change.

## Creating new pages

1. If you'd like to create an entirely new page of documentation file a [Documentation Request](https://github.com/newrelic/docs-website/issues/new/choose)
2. The Documentation Team will review the request to add a new documentation page.
3. If a new page is approved you may be asked to help write the page content.
4. If you are willing to assist in the process of creating a new page, then follow the instructions above to `Fork` or `Clone` the repo and make your edits.
5. Follow the instructions above to submit a `PR` for your change.

### Adding a what's new post

New Relic uses "what's new" posts, or NR1 announcements, to let our customers know about new features and updates in the [New Relic One](https://one.newrelic.com/launcher/jerome.plg-whats-new-launcher?pane=eyJuZXJkbGV0SWQiOiJqZXJvbWUucGxnLXdoYXRzLW5ldyJ9) product. You can also find What's new on our [Docs site](https://docs.newrelic.com/whats-new).

To add a new post:

1. If the post doesn't exist, create the folder for the current year and month in the [`src/content/whats-new/`](https://github.com/newrelic/docs-website/tree/develop/src/content/whats-new) directory (e.g. `src/content/whats-new/2020/12` for December 2020). **Note:** The year and month definition will determine where to place the post in the navigation on the [Docs site](https://docs.newrelic.com/whats-new).
2. Create a markdown file (`.md`) in the correct year and month directory (**note:** this is _not_ a MDX file).
3. Add the correct frontmatter to the top of your markdown file between a set of ---. This marks it as a frontmatter content block.

``` md

| field            | Description
| ---------------- | -----------
| `contentType`    | This value should _always_ be `nr1Announcement` for what's new posts
| `template`       | This value should _always_ be `whatsNew` for what's new posts
| `title`          | The title of the post
| `summary`        | A short summary of the post
| `releaseDate`    | The date of the post in the format `YYYY-MM-DD` (i.e. `2020-12-05` For December 5, 2020)
| `learnMoreLink`  | A link to learn more about the feature being announced (i.e. a link to the blog)
| `getStartedLink` | A link to a relevant documentation site post

```

### What's new post frontmatter example

``` md
---
title: Percentiles now available in events-to-metrics service
contentType: nr1Announcement
template: whatsNew
summary: >-
  For the events-to-metrics service, return an attribute's approximate value at
  a given percentile.
id: '41551'
releaseDate: '2020-12-01'
learnMoreLink: >-
  https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions#func-percentile
getStartedLink: >-
  https://docs.newrelic.com/docs/accounts/accounts/data-management/introduction-events-metrics-service
---

```

4. Submit a pull request for your new what's new post.

## Deleting pages

1. If you feel a page needs to be deleted file a [Documentation Request](https://github.com/newrelic/docs-website/issues/new/choose).
2. The Documentation Team will review the request to delete an existing documentation page.
3. If the deletion is approved, The Developer Experience Team will delete the page.

## Updating the navigation

Navigation for [docs.newrelic.com](https://docs.newrelic.com) is stored in `YAML` files located in the [src/nav](./src/nav) directory. Each top-level navigation should have it's own configuration file. For example, here is a snippet of the [src/nav/insights.yml](./src/nav/insights.yml) configuration:

```yml
title: Insights
children:
  - title: Use Insights UI
    children:
      - title: Getting started
        children:
          - title: Introduction to New Relic Insights
            path: /docs/insights/use-insights-ui/getting-started/introduction-new-relic-insights
      - title: Manage dashboards
        children:
          - title: Chart types
            path: /docs/insights/use-insights-ui/manage-dashboards/chart-types
          - title: Filter Insights dashboards
            path: /docs/insights/use-insights-ui/manage-dashboards/filter-insights-dashboards
          - title: View, organize, share Insights dashboards
            path: /docs/insights/use-insights-ui/manage-dashboards/view-organize-share-insights-dashboards
```

Each "node" in the `.yml` configuration file can have the following properties:

| Key        | Required? | Description                               |
| ---------- | --------- | ----------------------------------------- |
| `title`    | yes       | The text that is shown in the navigation. |
| `path`     | no        | The URL path to the page.                 |
| `children` | no        | Any sub-navigation "nodes".               |

When the user goes to a page, we determine which section of the site they are on and load the appropriate `.yml` file to populate the sidebar navigation. The navigation for the homepage is an aggregate of all the top-level pages.

**NOTE**: Each category has it's own `index.md` page (list of pages for that category). When updating the navigation, you may also want to update these pages to better reflect the new information architecture.

## Adding a new page

1. Determine which section of the navigation you would like the page to belong to (i.e. _Full Stack Observability_).
2. Find the configuration file for that section (i.e. [src/nav/full-stack-observability.yml](./src/nav/full-stack-observability.yml)).
3. Find the parent page you would like the new page to live under.
4. Add a "node" for the page under the parent page's `children`.

If you intend on adding an entirely new section to the navigation, create a new file in the [src/nav](./src/nav) directory using the same format as outlined above.

## Moving a page to a new location

1. Determine which section of the navigation the page.
2. Find the configuration file for that section.
3. Find the page within the configuration file and delete that entry.
4. Follow the steps above to add the page to a new location.

## Private edits

If you have access to a private version of this repository, you can contribute and review content without sharing it publicly.

_NOTE: with all of these steps, if you have SSH Keys set up, you will want to use the SSH URL (not the HTTPS URL)._

### Bring your private work back into the public repository
1. Click the fork button in the GitHub UI for the [docs-website repository](https://github.com/newrelic/docs-website).
2. Clone the fork on your computer: `git clone https://github.com/yourname/docs-website`.
3. Change into the fork repo: `cd docs-website`.
4. Connect the private repo: `git remote add private https://github.com/yourname/private-repo.git`.
5. Make a new branch: `git checkout -b your_branch_name`.
6. Pull in content from you private repo: `git pull private main`.
7. Push your new work up to GitHub: `git push origin your_branch_name`.
