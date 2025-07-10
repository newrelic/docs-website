---
title: "Your browser data, your terms: New control options"
summary: "Gain ultimate control over browser session data. Easily disable session traces and replay with one central toggle, enhancing your data privacy and compliance."
releaseDate: "2025-07-10"
learnMoreLink: ''
getStartedLink: ''
---

Recognizing the critical need for robust data privacy controls and streamlined management of browser-side data, we've consolidated how you manage session traces and session replay. This update provides a more immediate and transparent way to control data collection related to user sessions.

Key updates:
- **Unified session data control:** The Access browser local storage toggle is now the central control for all session-level data captured by the browser agent, including session traces and session replay.
- **Comprehensive data disablement:** When this toggle is turned off, the New Relic browser agent will halt its use of the browser's persistent storage mechanisms. This action immediately prevents the collection of all session trace and session replay data, providing you with direct command over the browser's handling of session-related information.
- **Simplified management:** This change addresses the demand for a clear, single point of control over how session IDs and other session-level attributes are collected, enhancing your ability to meet data privacy and compliance requirements.

This update doesn’t require any agent update on your end.

<img
  title="Image of the Access browser local storage toggle deactivated in browser application settings"
  alt="Image of the Access browser local storage toggle deactivated in browser application settings"
  src="/images/browser-localStorage-whats-new.webp"
/>