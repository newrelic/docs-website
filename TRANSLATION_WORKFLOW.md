# High-level overview

## Purpose

The site has content & accepts contributions in english, but users can be located anywhere in the world. The translation process takes the english content and translates it into other languages.

**NOTE:** "TV" means "Translation Vendor" in the context of this document.

## What is the translation process

The translation process has the following high-level steps:

1. When a PR to main is merged, if it includes translatable files, queue those files up to be translated.
2. Submit queued translation requests to vendor.
3. Check for finished translations, download translated files and add them to the repo.
   - We have a batching function that will only allow us to fetch 50 file URIs at a time. This is due to the TV API design where file URIs are fetched via query parameters instead of part of the body of the API request.

Additionally, we've recently added the ability to have content be machine translated, but the process is ultimately still the same, we just decide in the first step if content should be machine or human translated.

**NOTE:** Check out the workflow Figma design for a visual reference [here](https://www.figma.com/file/Ph8QXJlXm2Xxu2As27HBqx/Send-Translation?node-id=0%3A1).

- [High-level overview](#high-level-overview)
  - [Purpose](#purpose)
  - [What is the translation process](#what-is-the-translation-process)
- [Detailed Overview](#detailed-overview)
  - [Background](#background)
  - [Workflow 1: Queueing Translation Requests](#workflow-1-queueing-translation-requests)
    - [Manually triggering workflow](#manually-triggering-workflow)
    - [Summary](#summary)
  - [Workflow 2a: Sending content for machine translation](#workflow-2a-sending-content-for-machine-translation)
    - [Summary](#summary-1)
  - [Workflow 2b: Sending content for human translation](#workflow-2b-sending-content-for-human-translation)
    - [Summary](#summary-2)
  - [Workflow 3: Downloading finished translations, cleaning up](#workflow-3-downloading-finished-translations-cleaning-up)
    - [Summary](#summary-3)
- [Manually triggering workflow:](#manually-triggering-workflow-1)
- [Scenarios](#scenarios)
  - [There’s a bunch of content that has been deployed to production (i.e. merged into the main branch) and you want to send those translated files over sooner than the two week interval.](#theres-a-bunch-of-content-that-has-been-deployed-to-production-ie-merged-into-the-main-branch-and-you-want-to-send-those-translated-files-over-sooner-than-the-two-week-interval)
  - [There’s a job completed, and you want those changes in a pull request right away](#theres-a-job-completed-and-you-want-those-changes-in-a-pull-request-right-away)
  - [You have some files that you want to add to the `translations` queue.](#you-have-some-files-that-you-want-to-add-to-the-translations-queue)
  - [There is a file that hasn’t been translated before into that language](#there-is-a-file-that-hasnt-been-translated-before-into-that-language)
  - [There is a file where you want to re-run a translation but hasn’t been edited recently](#there-is-a-file-where-you-want-to-re-run-a-translation-but-hasnt-been-edited-recently)
- [Key concepts / Glossary](#key-concepts--glossary)
  - [GitHub Branches and Pull Requests](#github-branches-and-pull-requests)
  - [GitHub Actions](#github-actions)
- [PostgreSQL tables](#postgresql-tables)
  - [Translations](#translations)
  - [Jobs](#jobs)
  - [TranslationsJobs](#translationsjobs)
  - [Locales](#locales)
  - [Statuses](#statuses)
  - [Serialization / Deserialization](#serialization--deserialization)
- [Gatsby Cloud](#gatsby-cloud)
- [Context](#context)
<!-- toc -->

# Detailed Overview

## Background

The whole process is executed as a series of GitHub workflows which can be found [here](https://github.com/newrelic/docs-website/tree/develop/.github/workflows).

The workflows are:

- _Queueing Translation Requests_
  - This workflow takes a PR, looks for translatable files, and queues them up for either human or machine translation
- _Sending Content for Machine Translation_
  - This workflow takes queued up machine translation requests, and submits them to the vendor
- _Sending Content for Human Translation_
  - This workflow takes queued up human translation requests, and submits them to the vendor
- _Checking for Finished Translations, Downloading Content, Cleaning Up_
  - This workflow has two jobs (one for human, one for machine) which check a given project for finished translations, downloads translated files, and PRs them back into the repository

## Workflow 1: Queueing Translation Requests

This workflow looks through all of the files that are being merged into the main branch, finds the files that are of the `.mdx` type and have the `translate` frontmatter. It then adds the file names (i.e. the slugs) to a PostgreSQL database table called `translations` along with the `locale` they are to be translated to and a `status` of `PENDING`.

All of the changed files will be added to this queue continuously on every merge to main with a status of `PENDING`. If a particular file is changed multiple times in this period, it is only queued if it not already queued with the `PENDING` status.

As part of the machine translation work, this step also determines whether a file is meant to be human or machine translated. To do this, we look at the `translate` frontmatter, which indicates to us what is meant to be human translated. Anything not included in the `translate` frontmatter, or if the frontmatter is missing entirely, indicates to us that a document should be machine translated. Once we know that, we set the `project_id` field in the `translations` database table for the translation request record.

### Manually triggering workflow

There is an additional github action to be able to manually queue up specific files. This can be manually triggered in the Actions tab of github under the workflow `Manually Add Slugs to Translation Queue`. When clicking `Run workflow` you will be prompted to enter the slugs that you would like to queue up, separated by comma. An example input would be `src/content/docs/codestream/how-use-codestream/discuss-code.mdx,src/content/docs/infrastructure/host-integrations/host-integrations-list/nginx/nginx-integration.mdx`. You additionally can select to queue it up for machine translation and give a locale, such as `ja-JP, ko-KR`.

### Summary

- Executes: on every merge to the `main` branch
- Can be manually triggered? `Yes`, when using manual version of workflow
- Steps:
  - Looks at the files that have been changed on the merge
  - Will save the filename, locale and status to the Translation table if not already pending
    - `project_id` set to either machine or human translation project
      - Project IDs are stored in One Password

## Workflow 2a: Sending content for machine translation

This workflow takes all machine translation requests from the `translations` table (based on `project_id`), serializes the content into a form that can be consumed by the vendor, sends the visual context for each page off of what is on `docs.newrelic.com`, it then creates a job for each language specified in the queue, as well as a batch for each job. It saves those id's to the `jobs` database table which are used later to check on the status of the job.

### Summary

- Executes: `daily`
- Can be manually triggered? `Yes`
- Steps:
  - Get files from `Translation` table with `PENDING` status
  - Get page from filenames and `serialize` the content
  - Send serialized content to TV and create `job`
  - Create `batch` for each job
  - Sends visual context by fetching the latest version of page from docs.newrelic.com
  - Add jobs in the `Job` table with `job_uid, batch_uid, status, project_id`
  - Add entries to the `TranslationsJobs` table with `translation_id, job_id`
  - Update translations in the `Translation` table with status `IN_PROGRESS` or `ERRORED` on upload failure

## Workflow 2b: Sending content for human translation

This workflow takes all human translation requests from the `translations` table (based on `project_id`), serializes the content into a form that can be consumed by the vendor, sends the visual context for each page off of what is on `docs.newrelic.com`, it then creates a job for each language specified in the queue, as well as a batch for each job. It saves those id's to the `jobs` database table which are used later to check on the status of the job.

### Summary

- Executes: on the `1st` and `15th` of the month
- Can be manually triggered? `Yes`
- Steps:
  - Get files from `Translation` table with `PENDING` status
  - Get page from filenames and `serialize` the content
  - Send serialized content to TV and create `job`
  - Create `batch` for each job
  - Sends visual context by fetching the latest version of page from docs.newrelic.com
  - Add jobs in the `Job` table with `job_uid, batch_uid, status, project_id`
  - Add entries to the `TranslationsJobs` table with `translation_id, job_id`
  - Update translations in the `Translation` table with status `IN_PROGRESS` or `ERRORED` on upload failure

## Workflow 3: Downloading finished translations, cleaning up

This workflow executes every day at 1am. It has nearly identical workflow jobs -- one job is for human translations, the other for machine translations. Each workflow job will check if its respective type (machine or human) has completed translation jobs from the vendor. For each completed job, it will update the status of the `translation` and the `job` in the PostgreSQL tables to `COMPLETED`. It will download the translated file from the Translation Vendor, deserialize the file and turn it back into the mdx format, and then create a pull request into the ‘develop’ branch with the translated files.

After the pull request is successfully created, it will remove completed `translations` and `jobs` from the database, and remove the context for that id from the vendor’s store of contexts.

### Summary

- Executes: `daily`
- Can be manually triggered? `Yes`
- Steps:
  - Get saved job ids from job id table
  - Checks TV if the job is completed by job id
  - If the job is not completed, nothing happens and the job will stop on the “Fetch translated content and deserialize” step.
  - If completed:
    - Updates table statuses to `COMPLETED`
    - Downloads translated files
    - Saves translated files
    - Creates a pull request to develop with the newly translated files
    - Deletes Job and Translation from respective tables
    - Deletes context

And there you have it! The files will be fully translated and added to our staging environment. In order to deploy it to production, another PR from develop to main needs to be created (i.e. a release).

# Manually triggering workflow:

If there are time sensitive jobs that you would like to have translated, then a manual trigger might be necessary! To manually trigger any workflow, you must go to the repository: https://github.com/newrelic/docs-website

1. Go to the [`Actions`](https://github.com/newrelic/docs-website/actions) tab from the homepage of the repository.

- You can then see all of the workflows that we have available. There are three specific to the localization workflow:
  - Add Slugs to Translation Queue
  - Check status of translation jobs
  - Send content to be translated.

2. Select the workflow that you would like to run manually.
3. Click on run workflow, which will open a dropdown.

- **!** This should always be run from the branch develop. That will be the default branch that pops up, so there are no changes that need to be made from the drop down. Just click Run workflow!
- Clicking on Run workflow will start the workflow. You will see it pop up in the workflow history. It might take a few seconds to pop up. If you see a yellow dot appear next to it, that means it is being queued.
- Once you see a spinning yellow circle appear around the yellow dot, it means that the workflow has begun executing. When it has started executing, you can then click on it to see the progress of the workflow.

4. To see the progress of the content, you will need to click on the box that says “Send content” or has some other name. This, in the context of Github Actions, is a job. All of the localization workflows only have one job. Click on the job to see the workflow executing.
5. In the job, you will see the steps of the workflow. You can click on the steps to see the logging output.
6. When the job is complete, the yellow mark will turn to a green checkmark. If the result is not what you expected (there isn’t a PR made, the content didn’t get sent to the vendor) you can look through the logging to see what happened.

# Scenarios

Some scenarios for running a manual workflow.

### There’s a bunch of content that has been deployed to production (i.e. merged into the main branch) and you want to send those translated files over sooner than the two week interval.

If you only want to send everything that is in the translation queue earlier, then you will just need to trigger the **Send content to be translated** workflow. Just follow the steps above to trigger the workflow. The result should be a job in TV. If there is no job, this could be for a couple of reasons:
_ There are no files in the translation table.
_ The job didn’t execute correctly but didn’t fail. Reach out to an engineer on the Docs Engineering team to find out what went wrong (maybe some edge case we missed).

### There’s a job completed, and you want those changes in a pull request right away

If you would like to get content from a completed job into GitHub sooner than the daily execution of the workflow, you will need to trigger the **Check status of translation jobs workflow**. You can do this by following the guidelines above for triggering a manual workflow.

### You have some files that you want to add to the `translations` queue.

There are two cases to consider when adding files to the translation queue.

1. There is a file that hasn’t been translated before into that language, and you want to set it up to be translated into that language.
1. There is a file where you want to re-run a translation but hasn’t been edited recently.

### There is a file that hasn’t been translated before into that language

If this is the case, this will require you to make a PR to configure that file to be translated. Specifically, you will want to add that language to the `translate` property in the frontmatter. If the `translate` property does not exist, you will want to add the property and then list the language underneath.

To make a PR from the GitHub UI, you will need to navigate to the page that you want to translate in the github repo. If you don’t know where it resides in the repo but do know where it resides on the site, you can click on the “edit this page” button in the right navigation of the site, which will take you to the file in GitHub.

Once you are in the file, you may click the little pen icon in the right hand corner to edit the page. Then you can use the in-browser code editor to make changes and create a new branch. For example, if you would like to have the content to be translated into Japanese, you will need to add the front matter for that. For more information on creating a PR, reach out the documentation team! They are leading workshops on contributing to the docs site.

### There is a file where you want to re-run a translation but hasn’t been edited recently

This is a case we hopefully wouldn’t run into, since we are constantly keeping track of all the files that have been edited and regularly sending them to be translated. If, however, something happens and there is some need to run a translation on a file that hasn’t been edited recently (no changes to frontmatter, no editing of the content) then reach out to someone on the Docs Engineering team. We may suggest running the translation separately as not part of the workflow (i.e. uploading the files manually, downloading them and then creating a PR) or we can add the filenames manually to the translation queue, but this is not recommended.

### File is deleted from active job in TV

If the file can be identified and has not been labelled as a COMPLETED entry in the DB AND the file cannot be found in the TV UI as complete or listed as IN_PROGRESS, our current fix is to delete the file entry in the DB and let the process start from the beginning for this particular file by manually triggering an upload/queue of the file impacted.

### A file errors during deserialization (Check status of translation jobs).

Individual files won't be marked as `ERRORED` in the DB the same way Jobs will be. In order to see a list of files that have errored during the fetch/deserialization process (the "Check status of translation jobs" github action) a NRQL query can be run in the NR staging env:

`SELECT slug, locale from TranslationWorkflowError where target = 'file' and workflow = 'checkTranslationsAndDeserialize' since 1 month ago limit 100`

When this occurs, we'll need to update the translation engine being used in TV. This is usually done by our i18n specialist.

#### Example:

In some jp files, we've seen issues where `</a>` tags have been moved to the beginning of some blocks of code they were meant to close. This breaks the deserialization process and keeps the file in TV vs getting PR'd. This has led to us deleting said file and attempting to retrigger the process via a manual trigger, or updating the html file in TV and manually checking the file status via a triggering of the "Check status of translation jobs" action.

# Key concepts / Glossary

## GitHub Branches and Pull Requests

On our site, we have a little bit of a different set up. We have two branches that are the source of truth for our codebase. We have the `develop` branch which holds the code for our “staging environment” (meaning everything that we want to change before publishing it to the whole world) and then the `main` branch which holds the code for our “production environment.”

When we make changes to our codebase, we branch off the develop branch and then merge pull requests into the develop branch. When we want to release all these changes to production, we then create a pull request to merge develop into the main branch. We call the pull requests from the develop branch into the main branch “releases” since they are releasing the content to production.

## GitHub Actions

Github Actions are just basically scripts that are run in one of three ways:

- By some other interaction on GitHub (creating a pull request, merging one branch into another, ect).
- On a time interval (cron job: everyday at 6pm, every two weeks at 1am, ect.)
- Or manually triggering the action (or “workflow” or “script”) from the GitHub UI.
  Github Actions are also called workflows, and inside those workflows are jobs (separate scripts that run to complete the workflow). Most of our workflows only have one job, which contains a series of steps.

# PostgreSQL tables

We have the following tables in our localization workflow:

## Translations

- `id`
- `slug`
- `status`
- `locale`
- `project_id`

## Jobs

- `id`
- `job_uid`
- `batch_uid`
- `status`

## TranslationsJobs

- `job_id`
- `translation_id`

## Locales

- `id`
- `locale` - one of `[ja-JP, ko-KR]`

## Statuses

- `id`
- `status` - one of `[PENDING, IN_PROGRESS, IN_REVIEW, COMPLETED, ERRORED]`

## Serialization / Deserialization

In order for TV to be able to process our files, we need to convert it into a format that they accept. For that reason, we serialize our mdx files into html.

In this, we take our mdx components and convert them into plain html. We specifically turn our components into divs and props into serialized strings as either attributes of the div or as children of the div. Therefore, only the content that is relevant to the translator is provided while the rest is hidden as attributes html elements.

When getting this content back from TV, we get back the same format that we sent it to them with the strings replaced with the translated strings. Then we take all the “serialized” components and convert them back into mdx, and take the file and save it as mdx.

This can be tested via the `yarn serialize` && `yarn deserialize` scripts. These scripts are used by passing a file path to them and will output the result of the function to the terminal. ex: `yarn serialize path/to/file.mdx`.

# Gatsby Cloud

Although not listed on the diagrams above, Gatsby Cloud is where we host and deploy our site. Every time we merge into the main branch, Gatsby Cloud is triggered to build the latest updates from GitHub. It fetches the code from the main branch and builds the site. Once the site has passed the checks, it deploys the built site to [docs.newrelic.com](https://docs.newrelic.com). If the site fails to build, then the new version is not deployed and the engineers are notified.

# Context

Although also not described in detail in the Automatic workflow section, we also send visual context to TV during the _Send Content to be Translated_ workflow. This context is the html straight from the current version of the docs site available on [docs.newrelic.com](https://docs.newrelic.com). When we send the context to TV, they run automatic matching on the files that we have uploaded to the contexts that we have uploaded. In the _Check status of translation files_ workflow, we delete the contexts for the job that we have created. The reason for this is to ensure that no outdated contexts are being matched.
