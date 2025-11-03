---
title: 'Augmenting User Experiences: Leveraging Session Replay for Core Web Vital Optimization'
summary: 'Connect Core Web Vitals data with Session Replays for faster, visual root cause analysis, and performance optimization in Browser monitoring.'
releaseDate: '2025–07–31'
learnMoreLink: 'https://docs.newrelic.com/docs/tutorial-improve-site-performance/guide-to-monitoring-core-web-vitals/'
---

We're excited to announce a powerful new update to the Browser performance monitoring that directly connects your Core Web Vitals (CWV) data with our Session Replays feature.

## The Problem We're Solving

Previously, identifying and troubleshooting the root cause of poor Core Web Vitals performance could be a time-consuming process. You could see that your Largest Contentful Paint (LCP) was high or your Interaction to Next Paint (INP) was slow, but you lacked a quick, direct way to see exactly what users were experiencing. This often involved manual guesswork, searching through logs, or attempting to recreate the issue on your own.

## What's Changed

We've integrated Session Replays directly into your CWV data tables across various dashboards, including:

* **Geography:** See which countries are experiencing the slowest performance and watch real user sessions from those locations.
* **Operating System:** Understand if performance issues are isolated to specific OS types.
* **Device Type & Browser:** Quickly pinpoint if a particular browser or device is a root cause.
* **Page URLs:** Focus on the exact pages where CWV metrics are struggling.

You'll now see the *Session Replays* column next to your CWV metrics (LCP, INP, CLS) in these tables. This column shows the count of available session replays for that specific data point.

## How to Use the New Feature

Clicking on the session replay count will take you directly to the Session Replay list view. The view will be pre-filtered to highlight the sessions most relevant to the performance issue. The filter priority is set to address the most critical CWV issues first:

* **Largest Contentful Paint (LCP):** Sessions with a poor LCP will be prioritized.
* **Interaction to Next Paint (INP):** If LCP is good, we'll focus on sessions with slow INP.
* **Cumulative Layout Shift (CLS):** Finally, sessions with high CLS will be highlighted.

This new workflow allows you to move from identifying a problem (e.g., high LCP for a specific page) to observing the user experience (watching the session replay) in a single click.


## Use Cases & Benefits


* **Faster Root Cause Analysis:** Instantly move from a metric to a visual representation of the user experience. See firsthand what is causing a poor LCP or a slow INP without digging through code and logs.
* **Prioritize Fixes with Real-World Context:** Instead of just knowing a page is slow, you can watch a replay and see a large image loading late, a script blocking rendering, or a pop-up causing a layout shift.
* **Validate Performance Improvements:** After deploying a fix, you can use the Session Replays count to monitor if the sessions associated with the CWV issue are decreasing, providing a clear way to validate your efforts.

## Who is Affected?

This update is now available to all users with Browser entity instrumentation and Session Replays enabled. It is particularly beneficial for Product Managers and Developers focused on enhancing user experience and performance.

We anticipate this integration will greatly simplify your performance analysis, leading to the creation of faster and more reliable web applications.

<img
  title="Image of the converged APM experience"
  alt="Image of the converged APM experience"
  src="/images/sessionreplayinCoreWebVital.webp"
/>

**Note:** If you're not seeing session replays for a specific CWV data point, your sampling rate may be too low. To capture more sessions and troubleshoot effectively, you can increase the sampling rate for both total and errored sessions in your Browser Application settings.


**To adjust your sampling rate:**

1. Go to your Browser app's settings.
2. Find the "Session Replay" configuration.
3. Increase the sampling rate percentages for "Total sessions" and "Sessions with errors"

**Note:** You must have Session Replay Modify/Update permissions.
