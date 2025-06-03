# Manumatic testing of translation pipeline

## Background

There previously wasn't a way to run through the code components of the translation pipeline w/o pushing the code into the mainline branch, and running the workflows on github. We do have unit tests, but the coverage isn't complete, and may not cover interactions we care about -- connecting to the database, interacting with smartling api.

The hope with this script is that it is a decent first attempt at being able to proactively test the pipeline end-to-end. You can run the script, and for some small controlable input, it will execute the primary steps of the translation process in less than a minute and give you general feedback. This is not necesarilly the best way to test, nor is it the end goal of what can be done, but is hopefully a decent iteration for the moment.

# Prerequisites

Most of the manual work involved is getting everything you need to be able to run the script. You will need to fill out most of the empty values for variables in the script, as well as make edits to a file.

## Fill in script variables

You'll need to fill out values for variables in `script.sh`.

1. Provide a github token. A GitHub token can be generated through the GitHub UI.

```sh
export GITHUB_TOKEN='' # token with no permissions
```

2. Provide translation variables. Values for the translation variables can be found through the vendor UI.

```sh
export TRANSLATION_VENDOR_PROJECT='' # use machine translation project
export TRANSLATION_VENDOR_USER='' # MT user
export TRANSLATION_VENDOR_SECRET='' # MT user secret
```

3. Finally, the DB_CONNECTION_INFO secret needs to be populated in `connection_info.json`. The recommendation for this is to spin up a local postgres instance and connect to that, so that you dont need to test against a resource in the cloud. See the next section for setting up a local postgres instance on Docker. The values for this are currently:

```json
{
  "username": "root",
  "password": "root",
  "host": "localhost",
  "database": "translations"
}
```

## Setup local environment

This section assumes you are using Docker for the local environment, so be sure to install Docker if you don't have it installed already.

Once you have Docker installed, from the `root` of the repository, run `yarn db:start`. This executes a `docker-compose` command using [this compose file](./docker-compose.yml). Three containers will be spun up: one for postgres, one for pgadmin, and one for executing a migration (using Node.js sequelize).

The migration takes the longest to execute. Once you see text similar to:

```
migration_1 | wait-for-it.sh: timeout occurred after waiting 15 seconds for db:5432
migration_1 |
migration_1 | Sequelize CLI [Node: 16.13.1, CLI: 6.3.0, ORM: 6.12.0-alpha.1]
migration_1 |
migration_1 | Loaded configuration file "config/config.json".
migration_1 | Using environment "development".
migration_1 | == 20211201221649-test: migrating =======
migration_1 | == 20211201221649-test: migrated (0.124s)
migration_1 |
testing_migration_1 exited with code 0
```

that will indicate that database is running & set up -- tables exist, and data is populated.

Once the migration is complete, you can run the testing script, or set up pgadmin and connect to the postgres database. This last bit isn't needed, but is useful for debugging and introspecting the database during development.

## How to connect to postgres database in pgadmin

1. To connect to the pgadmin UI, open a browser and navigate to `http://localhost:15432`. Login with username:`admin@pgadmin.com` and password:`password`. The url, username, and password are all defined in [the docker-compose file](./docker-compose.yml) for the pgadmin service.
2. To connect to your postgres container, click on `Create A Server`. On the `Connection` tab, enter the following details:
   ```
   Hostname/address: postgres
   Port: 5432
   Maintenance database: postgres
   Username: root
   Password: root
   ```
   You may also need to go into the `General` and give a name to the server. You can call it `translations` (but it can be called anything).

<img width="200" alt="portfolio_view" src="https://github.com/newrelic/docs-website/blob/feature/machine-translation/scripts/actions/translation_workflow/testing/pgadmin_query.png">
## Use node 16
The script requires node.js version 16. The following commands use `nvm` to install and use node 16.
  ```bash
  nvm install 16
  nvm use 16
  ```

## Make a change to translate

The last thing you will need to do is make a unique change to the file `src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx`. The reason being that the PR URL the script uses is for a PR which changes only that file. In order to get the vendor to recognize content for translation, we have to submit unique content everytime. The simplest thing to do here is just delete the existing body of the document, and replace it with something like "bird" or a short phrase, etc.

To move through the entire Machine Translation workflow you will also need to remove the `translate: jp` entry in the frontmatter of the file, otherwise it will think it needs to be Human Translated.

# Run the script

Run script from docs-website (repo root)

Once all the setup is complete, assuming there are no issues that crop up, you should be able to run the script like so:

```sh
./scripts/actions/translation_workflow/testing/script.sh
```

This will execute the script, and only one other step remains. Halfway through the script, after the file has been uploaded for translation, you will need to authorize the job with the vendor. To do that, navigate to the job in the vendor UI, and click `authorize` once you do that, the script should continue and run to completion.

A complete execution will produce an output similar to:

```sh
\$ node scripts/actions/add-files-to-translation-queue.js https://api.github.com/repos/newrelic/docs-website/pulls/3271/files
Done in 4.52s.
Successful response
Records to be sent: {"ja-JP":[{"id":3,"slug":"src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx","status":"PENDING","locale":"ja-JP","date_created":"2021-07-29T15:10:14.534Z","date_modified":"2021-07-29T15:10:14.534Z"}]}
Successful response
Successful response
[*] Successfully uploaded src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx.
[*] Successfully uploaded src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
Successful response
Successful response
AWAITING_AUTHORIZATION
Job -- f5lauqavyoq9 -- is still translating. Current wait: 0
Successful response
AWAITING_AUTHORIZATION
Job -- f5lauqavyoq9 -- is still translating. Current wait: 5000
Successful response
AWAITING_AUTHORIZATION
Job -- f5lauqavyoq9 -- is still translating. Current wait: 10000
Successful response
AWAITING_AUTHORIZATION
Job -- f5lauqavyoq9 -- is still translating. Current wait: 15000
Successful response
IN_PROGRESS
Job -- f5lauqavyoq9 -- is still translating. Current wait: 20000
Successful response
IN_PROGRESS
Job -- f5lauqavyoq9 -- is still translating. Current wait: 25000
Successful response
COMPLETED
Translation Complete
Successful response
[*]Getting status for batch: glzideuwre8p
Successful response
Successful response
[*]Jobs completed: [{"id":3,"job_uid":"f5lauqavyoq9","batch_uid":"glzideuwre8p","status":"COMPLETED","locale":"ja-JP","date_created":"2021-07-29T15:10:22.543Z","date_modified":"2021-07-29T15:11:22.979Z"}][*]1 batches ready to be deserialized
[*]batchUids: glzideuwre8p
"batchesToDeserialize=1" >> $GITHUB_OUTPUT
[*] Deserializing /accounts/accounts/account-maintenance/change-passwords-user-preferences
[*]Content deserialized
"batchUids= " >> $GITHUB_OUTPUT,
"completedBatches=[object Object]"
"deserializedFileUris=src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx" >> $GITHUB_OUTPUT
Successful response
Successful response
[*] Successfully deleted https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[*] Successfully deleted src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[*] Successfully deleted https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[*] Successfully deleted src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[*] Successfully deleted src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[!] Unable to delete src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[!] Unable to delete https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[!] Unable to delete https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[!] Unable to delete src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[*] Successfully deleted src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[!] Unable to delete https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[*] Successfully deleted src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[*] Successfully deleted https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[*] Successfully deleted src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[*] Successfully deleted https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[!] Unable to delete src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[!] Unable to delete src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[!] Unable to delete src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[!] Unable to delete https://docs.newrelic.com/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences context.
[!] Unable to delete src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx context.
[!] Unable to delete all contexts
Deleting jobs: [{"id":3,"job_uid":"f5lauqavyoq9","batch_uid":"glzideuwre8p","status":"COMPLETED","locale":"ja-JP","date_created":"2021-07-29T15:10:22.543Z","date_modified":"2021-07-29T15:11:22.979Z"}]
Deleting translations: [{"id":3,"slug":"src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx","status":"COMPLETED","locale":"ja-JP","date_created":"2021-07-29T15:10:14.534Z","date_modified":"2021-07-29T15:11:23.643Z"}]
Deleted translations & jobs
```

### Errors

If you run into any issues during deployment and need to alter anything related to the Docker containers, you will need to run `yarn db:clean` to remove the cached data, and run `yarn db:start` again once changes are made.
