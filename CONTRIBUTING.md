# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Guidelines for contributing](#guidelines-for-contributing)
  - [Getting started](#getting-started)
    - [Local development](#local-development)
    - [Dependencies](#dependencies)
    - [Unit tests](#unit-tests)
    - [Using multiple versions of Node](#using-multiple-versions-of-node)
    - [Quick edits](#quick-edits)
    - [Cloning vs Forking](#cloning-vs-forking)
    - [Submitting a PR from a forked repo](#submitting-a-pr-from-a-forked-repo)
    - [Submitting a PR from a cloned repo](#submitting-a-pr-from-a-cloned-repo)
    - [Using the `develop` branch](#using-the-develop-branch)
    - [Draft PRs](#draft-prs)
    - [Using Conventional Commits](#using-conventional-commits)
      - [Use `chore`](#use-chore)
      - [Use `fix`](#use-fix)
      - [Use `feat`](#use-feat)
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

### Local development

You can serve this site locally to quickly see your changes and additions before you PR them. To get started, navigate into your new site’s directory and start it up, as follows.

```shell
cd docs-website/
yarn
yarn start
```

Your site is now running at `http://localhost:8000`!

### Dependencies

Node v12 is used in this project as specified in [.nvmrc](https://github.com/newrelic/developer-website/blob/master/.nvmrc).

### Unit tests

To run the unit tests, run `yarn test` in the terminal. If you would like to
have the tests automatically re-run, use `yarn run test:watch`

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

To be able to [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository and contribute you will need to be given write access to the repository. This is reserved for New Relic Doc Writers. Contact the Developer Experience team (developer-website-content Slack channel) if you need write access.

To contribute without write access, you can [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and contribute as needed.

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

### Using Conventional Commits

Please help the maintainers by leveraging the following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
standards in your pull request title and commit messages.

#### Use `chore`

- for minor changes / additions / corrections to content.
- for minor changes / additions / corrections to images.
- for minor non-functional changes / additions to github actions, github templates, package or config updates, etc

```bash
git commit -m "chore: adjusting config and content"
```

#### Use `fix`

- for minor functional corrections to code.

```bash
git commit -m "fix: typo and prop error in the code of conduct"
```

#### Use `feat`

- for major functional changes or additions to code.

```bash
git commit -m "feat(media): creating a video landing page"
```

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

## Deleting pages

1. If you feel a page needs to be deleted file a [Documentation Request](https://github.com/newrelic/docs-website/issues/new/choose).
2. The Documentation Team will review the request to delete an existing documentation page.
3. If the deletion is approved, The Developer Experience Team will delete the page.

## Updating the navigation

For the steps to update the left-navigation pane, see [Update left-navigation pane](https://docs.newrelic.com/docs/content/style-guide/processes-and-procedures).

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
