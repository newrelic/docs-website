# Translation Utility Script

## Introduction

### Translated files and translation directory structure

The english version of the site has content located under `src/content/docs`. For locale specific versions of the site, japanese for example, we translate a piece of content (an mdx file) into japanese and store the file in a path that mirrors the english version of the site. For japansese, this would be `src/i18n/content/jp/docs`. If we have an english file that lives at `src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx` its japanese equivalent would live at `src/i18n/content/jp/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx`. For other locales, you can swap out the locale value in the path to get the appropriate location. For another language, say korean, its content would live under the path `src/i18n/content/kr/docs/`.

### Orphaned files -- what are they, how does a file become orphaned, why do we care

Periodically, changes are made to the english content. If the change is solely limited to content, a translation will be submitted for the new updated file and the process works seamlessly.

An orphaned file is a file that lives under `src/i18n/content/[locale]/docs` that does not have an english counterpart (underneath `src/content/docs`). Files that are orphaned are NOT providing any value, and exist only to take up space in the repository. Additionally, in the process of creating an orphaned file, content may be out of date or incorrect.

If we move or delete an english file and forget to do the same for its translated counterparts, we create orphaned files. For content that we delete, this strictly is just taking up space in the repository. For content that we move, if we dont also move the equivalent translated content, the translated version of the site will display english content despite us having translated content -- this is because localized pages on the site are explicitly tied to file paths matching up. This isn't permanent, but in the period in which content is being translated the localized version of the site will not be as accurate as it could be.

### Utility

This is a command-line utility to:

* identify orphaned translation related files
* delete orphaned files
* identify rename changes to make for translation related files
* make rename changes for translation related files

## Troubleshooting

There are a couple scenarios that are easy enough to find yourself in where you may not see output that you expect to, or you think the script isn't running correctly.

### Scenario: You see a rename change you didn't make

It may be the case that you see a (rename) change listed that you did not make. The script runs against `origin/develop` and creates a diff between the two branches. This can include changes that do not exist locally if the branch is behind develop. The more behind a branch is, the higher the chance of running into this is.

The fix: keep working branch up to date. Merge or rebase with develop frequently (this is a good habit to have in general).

### Scenario: Your rename isn't detected by git

Git will naturally see renames changes as add a new file, delete your old file. For example, if you rename a file `README.md` -> `NEW_README.md`, git will see this as deleting README.md, and adding NEW_README.md until you stage BOTH changes. At that point, git uses a diff algorithm to make a best guess at whether to consolidate that change as a rename. If you only move or rename file, and do not change content, git should see that as a rename.

However, if you move a file and change its content, depending on how much the file is changed, git may not be able to detect that you renamed a file. The more a file changes (and changes significantly), the likelier git thinks its a new file.

The fix: If you intend to rename & change the content of a file, try to commit those changes separately -- one commit for the rename, one for the content update. Also, if you are renaming a file, using the `git mv` command explicitly tells git that you are renaming a file. This will also let you make content & rename changes in one commit.

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

* `cli.ts` is the entrypoint for running the CLI. It houses `Program` and is where we explicitly connect commands to the CLI.
* `commands.ts` is where the CLI commands are defined. Commands are exported from here & connected in `cli.ts`. Additionally, actions are imported into here and hooked up for each command.
* `actions.ts` is where the implementation of functionality happens. At the the moment, the code is organized in such a way that if you have the `list-orphans` command, there is a method in actions called `list-orphans` that defines the actual functionality of that command. There are actually more actions than there are commands, to fill in intermediate steps that dont have explicit commands, but the approach above is kind of the guiding rail.
