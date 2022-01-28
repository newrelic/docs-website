# I18n Utility Script

This is a CLI utility for:
* identifying orphaned translation related files
* deleting orphaned files
* identifying rename changes to make for translation related files
* making rename changes for translation related files

Orphaned files are files in `i18n/content/docs` that don't have an English equivalent. They're unused and safe to delete.

For the rename changes, this refers to when you move an english document and don't move an existing translated version of that doc. So if we have a doc `hello/world.txt` and we rename it to `hello/goodbye.txt` we also want to rename the translated versions of that document (if they exist). The last two commands will print out subsequent rename changes that need to be made (based on what has been renamed already in the english content directory) and make those changes for you.

## Important Notes

There are a couple scenarios that are easy enough to find yourself in where you may not see output that you expect to, or you think the script isn't running correctly.

### Scenario: Branch is not up to date

It may be the case that you see a (rename) change listed that you did not make. The script runs against `origin/develop` and creates a diff between the two branches. This can include changes that do not exist locally if the branch is behind develop. The more behind a branch is, the higher the chance of running into this is.

The fix: keep working branch up to date. Merge or rebase with develop frequently.

### Scenario: No renames detected

If files are manually being moved around, there is a chance that git does not detect that as a rename operation. Instead, git may initially see this as having created & deleted two files. If the script is run in this instance, renamed files will not be detected.

The fix: As much as possible, when renaming files/folders, the `git mv` command should be used. This explicitly tells git the operation is a rename, and the script should work as expected.

## Commands & Examples

### Commands

The following commands are available when running the script:
```sh
help
list-orphans
delete-orphans
list-renames
make-renames
```

To run a given command, simply append it to the yarn script command: `yarn i18n-utility`. 

### Examples

#### List orphans

```sh
# invoke
> yarn i18n-utility list-orphans

# output
Found 2 orphaned files.
[
    "~/repos/docs-website/src/i18n/content/jp/docs/accounts/accounts-billing/general-account-settings/introduction-account-settings.mdx",
    "~/repos/docs-website/src/i18n/content/jp/docs/accounts/accounts-billing/new-relic-one-user-management/images/New-Relic-capabilities-UI-screenshot.png",
]
```

#### Delete orphans

```sh
# invoke
> yarn i18n-utility delete-orphans

# output
Deleting: /Users/kkenney/repos/docs-website/src/i18n/content/jp/docs/accounts/accounts-billing/general-account-settings/introduction-account-settings.mdx
Deleting: /Users/kkenney/repos/docs-website/src/i18n/content/jp/docs/accounts/accounts-billing/new-relic-one-user-management/images/New-Relic-capabilities-UI-screenshot.png
```

#### List renames

```sh
# invoke
> yarn i18n-utility list-renames

# output
1 files will be moved.
[
    {
        "from": "src/i18n/content/jp/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx",
        "to": "src/i18n/content/jp/docs/change-passwords-user-preferences.mdx"
    }
]
```

#### Make renames

```sh
# invoke
> yarn i18n-utility make-renames

# output
Moving src/i18n/content/jp/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx to src/i18n/content/jp/docs/change-passwords-user-preferences.mdx
```

## Code Layout & Organization

The script uses [commander](https://github.com/tj/commander.js/) to implement common CLI functionality.

The file names -- `actions.ts`, `commands.ts` -- reflect core terms from Commander, which are explained below.

The overall organization (and why) is:
- `cli.ts` is the entrypoint for running the CLI. It houses `Program` and is where we explicitly connect commands to the CLI.
- `commands.ts` is where the CLI commands are defined. Commands are exported from here & connected in `cli.ts`. Additionally, actions are imported into here and hooked up for each command.
- `actions.ts` is where the implementation of functionality happens. At the the moment, the code is organized in such a way that if you have the `list-orphans` command, there is a method in actions called `list-orphans` that defines the actual functionality of that command. There are actually more actions than there are commands, to fill in intermediate steps that dont have explicit commands, but the approach above is kind of the guiding rail.
