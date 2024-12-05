---
title: 'Application not responding: Track and analyze ANR errors'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Application not responding
  - Errors
metaDescription: Use New Relic's Application Not Monitoring UI page to track and analyze ANR errors. 
freshnessValidatedDate: 2024-06-24
---

In Android mobile apps, [Application Not Responding (ANR) errors](https://developer.android.com/topic/performance/vitals/anr) are triggered when the main UI thread of an application is blocked for more than five seconds. ANR errors can be caused by various factors, such as network calls, complex calculations, or resource contention. By monitoring their frequency and occurrence patterns, you gain valuable insights into your app's overall stability and user experience.

## How ANR errors are reported to New Relic [#anr-reporting]

By default, the Android agent reports ANR errors as [`MobileApplicationExit`](/attribute-dictionary/?event=MobileApplicationExit) events, which leverage Android’s [`ApplicationExitInfo` API](https://developer.android.com/reference/android/app/ApplicationExitInfo) to monitor and report on the different causes for app termination. The agent reads the `ApplicationExitInfo` API on the next app launch and asynchronously sends `MobileApplicationExit` events to New Relic for each app exit in the history.

### Understanding ANR discrepancies between New Relic and Google Play Console [#new-relic-vs-google-play]

You might encounter variations in ANR counts and rates between New Relic and Google Play Console. This is due to differences in data collection methods:

* Android version coverage:
  * New Relic focuses on ANRs from devices running Android 11 or higher.
  * Google Play Console captures ANRs across all Android versions.
* Device and app scope:
  * New Relic reports from devices with the New Relic agent installed, regardless of app source.
  * Google Play Console reports exclusively from certified devices with apps downloaded through the Play Store.

For more information, see the [Google Play documentation](https://developer.android.com/topic/performance/vitals).

## View ANRs in New Relic [#view-anr-in-new-relic]

By default, our Android agent collects and reports ANR errors to New Relic. You can find ANR data in two places:

* On the Summary page, there's a widget called <DNT>**ANR rate**</DNT> displaying the percentage of errors.
* On the ANR page, where you can view a breakdown of error rates, groups of users affected, and attribute details.

<img
  title="ANR UI page"
  alt="screenshot of ANR UI page"
  src="/images/mobile_screenshot-full_anr-ui-page.webp"
  style="float: left;"
/>

To view the ANR page:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities)**</DNT>.
2. Click <DNT>**Mobile**</DNT>.
3. Select an Android app.
4. In the left pane, click <DNT>**ANR**</DNT>.

### Filter by ANR groups [#filter]

The widgets on the ANR page are based on groups of ANRs. By default, ANRs are grouped by the `description` attribute.

<img
  title="top occurences chart"
  width="50%"
  alt="screenshot of top occurences chart"
  src="/images/mobile_screenshot-crop_group-by.webp"
  style="float: left;"
/>

To change how ANRs are grouped (such as device type, app version, or a [custom attribute](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/)), click the <DNT>**Group by**</DNT> and select an attribute from the list. The ANR page will update to show data for the new ANR group.

### Monitor the ANR rate [#anr-rate-chart]

The <DNT>**ANR rate**</DNT> chart to see at a glance if there are any unexpected spikes, dips or patterns with ANRs in general.

For example, if you released a recent app version, the ANR rate chart shows the percentage of sessions that experienced errors over time as a percentage of all sessions, broken out by app version. The average ANR session percent is shown in the upper right.

<img
  title="anr rate chart"
  alt="screenshot of anr rate chart"
  src="/images/mobile_screenshot-crop_anr-rate-chart.webp"
  style="float: left;"
  width="60%"
/>

The <DNT>**ANR rate by day**</DNT> chart shows the percentage of unique users that experienced an ANR over time as a percentage of all unique users.

Note: Regardless of the time selected, this chart will show the average ANR rate for the last 28 days.

### View ANR occurences by importance [#anr-occurences]

The <DNT>**ANR occurrences by importance**</DNT> chart shows the distribution of ANRs by relative importance of the app’s process before termination due to an ANR. More information about an app’s process importance can be found [here](https://developer.android.com/reference/android/app/ApplicationExitInfo#getImportance).

<img
  title="anr occurrences by importance"
  alt="screenshot of anrs by importance"
  src="/images/mobile_screenshot-crop_anr-occurences-by-importance.webp"
  style="float: left;"
/>

### Go deeper with ANR profiles [#anr-profiles]

ANR profiles shows the distribution of attributes across all your ANR occurrences helping you identify patterns to quickly narrow down and troubleshoot the root-cause.

<img
  title="anr profiles"
  alt="screenshot of anr profiles"
  src="/images/mobile_screenshot-crop_anr-profiles.webp"
  style="float: left;"
/>

## Disable ANR monitoring [#disable-anr-monitoring]

<Callout variant="important">
  Server-side configuration always take precedence over local agent configuration.
  For mobile apps with less than 100,000 concurrently active devices, it may take up to 10 minutes to apply changes to end-user devices. For apps with greater than 100,000 active devices, it may take several hours.
</Callout>

If you need to disable ANR monitoring:

1. In New Relic, navigate to your mobile app.
2. In the left pane under <DNT>**Settings**</DNT>, click <DNT>**Application**</DNT>.
3. Toggle **Application Not Responding (ANR)** off.
4. Click **Save**.

<img
  title="ANR setting toggle"
  alt="Screenshot of the ANR setting"
  src="/images/mobile_screenshot-crop_anr-setting-toggle.webp"
  style="float: left;"
/>
