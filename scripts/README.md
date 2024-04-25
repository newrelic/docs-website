# scripts

## serde.js

this script is for manually testing our MDX -> HTML serialization and HTML -> MDX deserialization.
serializing/deserializing is an important part of our i18n workflows.

`yarn serialize` and `yarn deserialize` are convenient shortcuts.
you can also run `./serde.js serialize` or `./serde.js deserialize`.

the first argument is that path to the file you want to (de)serialize.
there is an optional option `--output` or `-o` that will write the results to a file instead of stdout.

## verify-mdx.js

This script runs on MD/MDX files to troubleshooting errors and verify content during PR checks. It shows a progress bar in the terminal as it can take several minutes to read every file. It outputs any errors found when it is complete.

It can optionally take an array of files supplied in the terminal separated by spaces.

- `yarn verify-mdx src/content/file1.mdx src/content/file2.mdx`

Otherwise, it will read all files under `/src/content/` and `src/i18n/content`.

- `yarn verify-mdx`

#### This script checks for the correct use of:

- markdown and JSX syntax
- valid yaml frontmatter
  - We also check for the required field `freshnessValidatedDate` which must be a date (`YYYY-MM-DD`) or `never`
  - `release-notes`, `security-bulletins` and `whats-new` posts will also be scanned for a required `releaseDate` field in the frontmatter.
- `<img />` sources and imports which utilizes the [image-import-utils script](#image-import-utils.js)
  - this util has its own progress bar and error output section in the terminal

## image-import-utils.js

Script used by `verify-mdx.js` that verifies the use of images in content files.

#### This script verifies

- each import statement is followed by an empty newline
- each import statement is formatted correctly
- image names used in `src` attributes have a matching import statement
- image paths in import statements have a matching file in `/src/images`

## docsAndLastDateEdited.mjs

This script scans all english MDX docs excluding `/whats-new/`, `/release-notes/`, `/security-bulletins/`, and `/style-guide/` and outputs a CSV. The columns contains the doc's relative filepath, last rename date (freshness date) if within 180 days, last edited date in the git commit history, and an array of all recent authors from the last 180 days. It takes no arguments and will run in around ~5 mins. There's a handy progress bar that shows in the terminal during execution.

`yarn docs-freshness` will run this script.

### Example csv output

| Doc                                                            | Freshness Date  | Last Modified Date | Recent Authors                                            |
| -------------------------------------------------------------- | --------------- | ------------------ | --------------------------------------------------------- |
| src/content/docs/there/back-again/an-unexpected-party.mdx      | Tue Mar 14 2023 | Thu Jun 22 2023    | [Bill Baggins - 2023-06-22]                               |
| src/content/docs/there/back-again/over-hill-and-under-hill.mdx | never           | Tue Jul 25 2023    | [Gary d'Grey - 2023-07-25]                                |
| src/content/docs/there/back-again/on-the-doorstep.mdx          | never           | Mon Oct 02 2023    | [Thomas Bombadil - 2023-10-02],[Gary d'Grey - 2023-07-25] |
| src/content/docs/there/back-again/the-return-journey.mdx       | Mon Jan 09 2023 | Tue Mar 07 2023    |                                                           |

## addFreshnessToFrontmatter.mjs

This script scans all english MDX docs excluding `/whats-new/`, `/release-notes/`, `/security-bulletins/`, and `/style-guide/` and inserts a new frontmatter field: `freshnessValidatedDate`. It checks if a doc is stale (created more than 180 days ago). If it is, the value is set to `never`, otherwise it is set to that date (`YYYY-MM-DD`).
It takes no arguments and will complete in about ~20min. It was created to be run once on the repo, though it could be modified in the future to add this date to specific docs if we find a needs for that.

## actions/check-for-keys.sh

This script runs upon making a PR to the develop branch via a github action (`.github/workflows/check-for-keys.yml`). It scans all files, save one (`gatsby-config.js`), for any potential New Relic API keys based on a list of regex. It also scans all git commit history for any commits made in a PR to develop, looks at the diff for all said commits and scans those for API keys as well. This is intended to ensure no API keys are committed to the docs site or git history.
