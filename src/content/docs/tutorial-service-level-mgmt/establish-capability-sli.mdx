---
title: "Establish capability SLIs"
metaDescription: "New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders."
redirects:
freshnessValidatedDate: never
---

Having service levels on critical business capabilities, like login or authorize payment, will rapidly close the language barrier between IT and business. Service level scores on capabilities also give you better opportunities to fix service levels when they begin to worsen. For example, if the login service level begins to degrade, you'll know to look at identity mangement dependencies and workflows starting at the consumer-facing API.

You don't need to have intimate knowledge of an application or service in order to complete this task. You only need to find the consumer-facing API (service boundary) and follow the steps below to create a capability service level:

1. Identify the service boundary application as described in the [establishing an output SLI](/docs/tutorial-service-level-mgmt/establish-output-sli/) doc.

2. Run the following NRQL query to identify baselines on the most frequently used transactions. Remember to replace `Order-Processing` with the application name you identified.

   ```
   FROM Transaction SELECT count(*), percentile(duration, 95) WHERE appName='Order-Processing' FACET name SINCE 1 WEEK AGO
   ```

   You should see something similar to the screenshot below. You'll see the first transaction states it has something to do with "purchase." You can now create a "purchase" capability service level.

   <img
     alt="transaction list query"
     src="/images/queries-nrql_screenshot-full_transaction-list-nrql.webp"
   />

3. Add `WHERE name='Controller/Sinatra//purchase'` to the end of your query, replacing `Controller/Sinatra//purchase` with your transaction name.

4. Run the query to make sure it works. You should now see only the one transaction in your result. Copy this query and the `DURATION (95%)` result into a notepad. You'll need both in a moment.

5. Create a new service level in the platform. Starting a new service level is described in [Establishing an input performance SLI](#establishing-input-sli).

In this case you want to find your application (APM `Entity` type) in the list so we can retain the metadata (tags) through the entity GUID. Instead of "Synthetic monitor" as in section above, select "APM" in the entity filter dropdown.

6. Select the "Latency" guided workflow so the valid queries auto-populate for you.

7. Use your notepad to copy just the `name='your/transaction/name/here'`.

8. Add this condition to both queries in service levels, **preceded with an `AND `**, as underlined in the screenshot below.

   <img
     alt="capability query clause"
     src="/images/apm_screenshot-crop_capability-filter-clause.webp"
   />

9. Adjust the `duration < 1.78` portion of the second query to match the `DURATION (95%)` result in your original baseline copied to your notepad.

10. Name this service level, update the description, and save the service level.

From here, we recommend you set up a few of these capability service levels and present to the application team and your leadership for feedback.

<UserJourneyControls
  nextStep={{path: "/docs/tutorial-service-level-mgmt/improve-with-slm/", title: "Next step", body: "Learn how to use SLM techniques to improve your reliability"}}
  previousStep={{path: "/docs/tutorial-service-level-mgmt/establish-input-sli/", title: "Previous step", body: "Learn how to create input indicators and objectives"}}
/>
