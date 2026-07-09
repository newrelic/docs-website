---
title: "1-Click Log Forwarding for Java Applications"
summary: "Quickly enable or disable Java application logs directly in the UI"
releaseDate: "2025-02-12"
---

In software, time is of the essence, especially when an issue may arise that may leave your customers without access to your service. These are the scenarios when you need logs the most. Traditionally, enabling or disabling logs in Java applications required coordinating with DevOps teams, manual configuration, and prolonged downtime. New Relic is excited to introduce a new feature that simplifies this process, adding ease and efficiency to your workflow.

![Java application logs](/images/one-click-java-app-logs.webp "Java application logs table")

## Why is this important:

Engineers often face friction when needing to adjust Java application logging settings for tasks like debugging. This commonly includes rooting through configuration files or waiting for a DevOps team to implement changes, which can disrupt the development cycle.

This new feature allows users to turn Java application logs on and off directly within the curated application UI, through our Server-Side Configuration. This gives users immediate control over logging in their service, streamlining the debugging process and enhancing agility.

## How to Get Started:

1. Ensure your application is running on New Relic version 7.6.0 or higher.
1. Access the Server-Side Configuration in the UI by locating Application underneath the Settings section of the secondary navigation or simply click enable logs in the banner at the top of the APM UI. 
1. Turn on the Server Side Configuration toggle next to “Server-side agent configuration”
1. Opt in to Application log forwarding in the secondary radio option
1. Turn on application log forwarding in the main Application log forwarding section of the Server Side Configuration UI.

![Java application settings](/images/one-click-java-app-settings.webp "Java application settings with arrows highlighting where to toggle on the server-side agent configuration and application log forwarding")

## Things to Keep in Mind:

- Only available on Java applications 7.6.0 and higher.
- If you turn on Server Side Configuration and opt-in to each individual section then you will override existing client-side settings for those values in the `.yml` files, or Java properties.
- Will not work if you are managing configurations via environment variables. 
- Beyond logging, users can manage other configurations such as application transaction tracing and error handling, providing more control and granularity over their application's operation.

By integrating this feature, New Relic continues to empower teams by reducing friction, accelerating development cycles, and providing deeper insight into their systems, all through a user-friendly interface. Transform your approach to application management and make cumbersome configuration changes a thing of the past—experience the freedom of Server-Side Configuration today!
