# Summary

This action exists to workaround a small problem with [the action](https://github.com/srggrs/assign-one-project-github-action) we were using. Once the issue is resolved, we can delete this and go back to just using that action normally.

The particular issue is the public action referencing an old docker image, when it should be using latest.

This specific line change: `image: 'docker://srggrs/assign-one-project-github-action:1.2.1'` resolves that.
