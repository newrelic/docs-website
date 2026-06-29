---
title: 'Enhanced dashboard exports and a new chart image snapshot mutation in NerdGraph'
summary: 'Generate PDF snapshots of full dashboard pages and standalone chart images via two new NerdGraph mutations.'
releaseDate: '2026-06-29'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/dashboards-charts-import-export-data/'
---

We've enhanced the `dashboardCreateSnapshotUrl` mutation with new export options and introduced `dashboardWidgetCreateSnapshotUrl`, a new mutation for generating standalone chart images programmatically.

## Full dashboard snapshots with more control

The `dashboardCreateSnapshotUrl` mutation now supports additional parameters so you can tailor each export to your exact needs:

* **Format** — choose PDF or PNG output
* **Custom dimensions** — specify width and height in pixels for the rendered image
* **Variable overrides** — pin specific template variable values independently of what's active on the dashboard
* **Time window** — define an exact time range for the snapshot, separate from the dashboard's current view
* **Filter support** — apply custom filters at snapshot time

The returned URL is publicly accessible (no authentication required) and time-limited, making it a reliable building block for scheduled reports, automated digests, and embedding dashboard views in external tools.

## Chart images without a saved dashboard

The new `dashboardWidgetCreateSnapshotUrl` mutation lets you generate a PNG image from any widget definition — no dashboard required. Pass a self-contained widget configuration and get back a snapshot URL valid for three months.

This opens up new automation possibilities: generate chart images on demand from your own tooling and embed them in Slack notifications, email reports, or status pages — without first creating and maintaining a dashboard in the UI.

Both `dashboardCreateSnapshotUrl` and `dashboardWidgetCreateSnapshotUrl` endpoints support our latest visualization features, from thresholds to the new gauge visualization.

Both mutations are available today in the [NerdGraph API Explorer](https://api.newrelic.com/graphiql).
