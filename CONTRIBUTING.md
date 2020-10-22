# Table of Contents

- [Guidelines for contributing](#guidelines-for-contributing)
- [Style guide](https://github.com/newrelic/developer-website/blob/develop/STYLE_GUIDE.md)
- [Updating the navigation](#updating-the-navigation)

# Guidelines for contributing

Contributions are always welcome. Before contributing please read the
[code of conduct](./CODE_OF_CONDUCT.md) and [search the issue tracker](issues); your issue may have already been discussed or fixed in `main`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) this repository, commit your changes, and [send a Pull Request](https://help.github.com/articles/using-pull-requests/).

Note that our [code of conduct](./CODE_OF_CONDUCT.md) applies to all platforms and venues related to this project; please follow it in all your interactions with the project and its participants.

If you wish to make ducmentation edits, create a guide, or add new documentation, follow our documentation contribution guidelines below. **TODO**

If you'd like to make code contributions, follow the code [style guide](https://github.com/newrelic/developer-website/blob/develop/STYLE_GUIDE.md).

# Updating the navigation

Navigation for [docs.newrelic.com](https://docs.newrelic.com) is stored in `YAML` files located in the [`src/nav`](https://github.com/newrelic/docs-website/tree/develop/src/nav) directory. Each top-level navigation should have it's own configuration file. For example, here is a snippet of the [`src/nav/insights.yml`](https://github.com/newrelic/docs-website/blob/develop/src/nav/insights.yml) configuration:

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

## Adding a new page

1. Determine which section of the navigation you would like the page to belong to (i.e. _Full Stack Observability_).
2. Find the configuration file for that section (i.e. [`src/nav/full-stack-observability.yml`](https://github.com/newrelic/docs-website/blob/develop/src/nav/full-stack-observability.yml)).
3. Find the parent page you would like the new page to live under.
4. Add a "node" for the page under the parent page's `children`.

If you intend on adding an entirely new section to the navigation, create a new file in the [`src/nav`](https://github.com/newrelic/docs-website/tree/develop/src/nav) directory using the same format as outlined above.

## Moving a page to a new location

1. Determine which section of the navigation the page.
2. Find the configuration file for that section.
3. Find the page within the configuration file and delete that entry.
4. Follow the steps above to add the page to a new location.
