---
title: 'Reference the current dashboard from anywhere with {{selfEntity}}'
summary: 'A new template variable resolves to the current dashboard''s entity GUID, so widget names, NRQL queries, markdown widgets, facet links, and other raw configuration fields stay accurate even after you duplicate a dashboard.'
releaseDate: '2026-10-16'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/filter-new-relic-one-dashboards-facets/'
---

New Relic dashboards now support a `{{selfEntity}}` template variable that resolves to the dashboard's own entity GUID, wherever you reference it in that dashboard's configuration.

## What you can do with {{selfEntity}}

Previously, making a widget reference its own dashboard — for example, to keep facet linking pointed at the right place — meant hardcoding that dashboard's GUID. Duplicate the dashboard, and every hardcoded reference still pointed back at the original, breaking facet links and any other self-referencing configuration.

Now you can drop `{{selfEntity}}` into any part of a widget's raw configuration, and New Relic resolves it to whichever dashboard the widget currently lives on:

- **Facet linking**: Add `{{selfEntity}}` to `linkedEntityGuids` so a widget always links back to its own dashboard, not the one it was copied from.
- **Widget names**: Reference `{{selfEntity}}` in a widget's title.
- **NRQL queries**: Use `{{selfEntity}}` inside a query, for example to filter results to the dashboard's own entity.
- **Markdown widgets**: Reference `{{selfEntity}}` inside markdown widget text.
- **Any other rawConfiguration field**: Use `{{selfEntity}}` in any field where you'd otherwise hardcode a dashboard GUID.

## How to get started

- **Facet linking on existing dashboards**: In the UI, disable facet linking on the widget and apply the change, then re-enable it. This replaces the hardcoded dashboard GUID with `{{selfEntity}}`.
- **Facet linking on new dashboards**: `{{selfEntity}}` is used automatically — no manual step needed.
- **Terraform or JSON-defined dashboards**: Remove any hardcoded GUIDs and replace them with `{{selfEntity}}`, for example:

```json
"widgets": [
  {
    "id": "XXXXXXXX",
    "title": "Latest versions",
    "layout": {
      "column": 1,
      "row": 1,
      "width": 4,
      "height": 5
    },
    "visualization": {
      "id": "viz.table"
    },
    "rawConfiguration": {
      "facet": {
        "showOtherSeries": false
      },
      "linkedEntityGuids": [
        "{{selfEntity}}"
      ],
      "nrqlQueries": [
        {
          "accountIds": [
            XXXXXXX,
            1
          ],
          "query": "YOUR_QUERY"
        }
      ],
    }
  }
]
```

To learn more, see [Filter New Relic dashboards by facets](https://docs.newrelic.com/docs/query-your-data/rds/filter-new-relic-one-dashboards-facets/)
