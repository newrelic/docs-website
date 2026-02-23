---
title: 'Upcoming End-of-Life: Google Core Web Vital (FID)'
summary: 'How will I be impacted?'
releaseDate: '2024-08-01'
learnMoreLink: 'https://support.newrelic.com/s/hubtopic/aAXPh0000002q8z/upcoming-endoflife-google-core-web-vital-fid' 
---

<Callout variant="important">
  New Relic will try to extend the reporting of FID until January 15, 2025 in the browser agent to help give customers more time to transition to INP. However, unexpected degradations may occur due to the Google FID EOL that occurred on September 9, 2024, and we recommend updating to use INP as soon as possible.
</Callout>

## What you need to do

On September 9, 2024, [Google is deprecating the FID metric](https://developers.google.com/search/blog/2023/05/introducing-inp), in favor of Interaction to Next Paint (“INP”). Since New Relic uses certain libraries and APIs that leverage the FID metric, you will need to take the actions below before September 9, 2024 to avoid inaccurate or unexpected behavior with dashboards, alerts, and service level reporting. 

## Action needed

To avoid inaccurate alerts, charts, and service levels, you must make the following changes **before September 9, 2024**:

1. Edit all **custom dashboards** using FID from the `PageViewTiming` event and replace with INP. 
2. Edit any NRQL **alert conditions** using FID from the `PageViewTiming` event and replace with INP. 
3. Edit any **Service Levels** using FID from the `PageViewTiming` event and use INP.

Resources for how you can identify which dashboards, alerts, and service levels use the FID metric can be found below. 

Additionally, if you're using copy and paste browser instrumentation or are pinned to a version prior to [version 1227](https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1227/), you must update the browser agent to version 1227 or higher to ensure that you have access to using the INP metric. To check which browser agent version you're on and for instructions on how to update your agent, please [see our documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/installation/update-browser-agent/). If you're using version 1227 or higher, you do not need to update your browser agent for this EOL; however, we recommend that customers keep all agents up to date.

## Additional resources

Customers can use the following queries (either NRQL or via NerdGraph) to identify dashboards, alerts, and service levels that use the FID metric. 

### Dashboards 

Use the [`NrdbQuery` event](https://docs-preview.newrelic.com/docs/query-based-pricing#custom-query) query to find whether FID is being used in a custom dashboard.
  
`SELECT uniques(source.dashboardId) FROM NrdbQuery WHERE  query like '%firstInputDelay%' SINCE THIS WEEK`

### Alerts 

Use the following [alerts-specific NerdGraph query](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) in your account to find whether FID is being used in a NRQL alert condition. 

```sql
{
  actor {
    account(id: {account-id}) {
      alerts {
        nrqlConditionsSearch(searchCriteria: {queryLike: "firstInputDelay"}) {
          nextCursor
          nrqlConditions {
            id
            name
            nrql {
              query
            }
          }
        }
      }
    }
  }
}
```

### Service Levels 

Use the following [browser monitoring and Service Levels-specific NerdGraph](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) queries in your account to determine which SLIs are affected:

  1. Get the GUID of all the browser monitoring apps that have SLIs:
  
      ```sql
      {
        actor {
          entitySearch(
            query: "domain = 'BROWSER' AND type = 'APPLICATION' AND `tags.nr.has_slis` = 'true'"
          ) {
            results {
              entities {
                guid
              }
            }
          }
        }
      }
      ```

  2. For each of these browser monitoring apps, get the list of SLIs and check if in the `WHERE` clause of the query there is a reference to `firstInputDelay`:

      ```sql
      {
        actor {
          entity(guid: "<browser_guid>") {
            serviceLevel {
              indicators {
                events {
                  validEvents {
                    where
                  }
                }
              }
            }
          }
        }
      }
      ```
