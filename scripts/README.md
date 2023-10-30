# scripts

## serde.js

this script is for manually testing our MDX -> HTML serialization and HTML -> MDX deserialization.
serializing/deserializing is an important part of our i18n workflows.

`yarn serialize` and `yarn deserialize` are convenient shortcuts.
you can also run `./serde.js serialize` or `./serde.js deserialize`.

the first argument is that path to the file you want to (de)serialize.
there is an optional option `--output` or `-o` that will write the results to a file instead of stdout.

## docsAndLastDateEdited.mjs

This script is for creating a CSV with all english docs (.mdx) and their last edited date in the git commit history. It takes no arguments and will run in around ~11 mins. There's a handy progress bar that shows in the terminal during execution.

`yarn docs-freshness` will run this script.
