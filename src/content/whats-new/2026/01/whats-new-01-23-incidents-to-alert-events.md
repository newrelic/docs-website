---
title: "UI enhancement: Simplifying terminology to 'Alert events'"
summary: "Effective February 16th, 2026, New Relic will rename 'Incidents' to 'Alert events' across the platform UI to enhance clarity and align with standard industry nomenclature. These updates are purely cosmetic and will be applied automatically to your workspace."
releaseDate: "2026-01-23"
---

Effective **February 16th, 2026**, New Relic will rename "Incidents" to "Alert events" across the platform UI to enhance clarity and align with standard industry nomenclature.

## Why it's changing

This shift supports a streamlined flow: individual Alert events are correlated into Issues, which can then be triaged to determine if they warrant a formal Incident response. This evolution ensures our platform remains intuitive and consistent with the industry's direction, providing you with a clearer path from initial signal to resolution.

Soon we will be introducing the formal concept of an Incident on the New Relic platform, which will round out the three-part flow and align our platform terminology with common ITSM practices as we develop more incident management and response features. By aligning our language across the platform, we are making it easier for you to navigate and manage your operational health and identify real problems faster.

## What's changing

We are updating naming across the following areas to ensure a unified and simplified experience and pave the way for more incident management features on the New Relic platform:

* **Alert condition builders**: The term "Incident" will be changed to "Alert event" across all alert condition building and editing experiences.

* **Decisions UI**: Terminology within the Decisions capability—including builders, previews, logic samples, and tooltips—will be updated. For example, "Entire incident" will now be labeled "Entire alert event."

* **Muting rules**: All visual references to "violations" and "incidents" within Muting Rules configuration and management views will be updated to "Alert events."

* **Workflows & notifications**: Terminology within Workflow configurations and notification templates (email, Slack, etc.) will reflect the new "Alert event" standard.

* **Admin panel**: Access management roles and account-level privileges will be updated from "Incident" to "Alert event" for better clarity.

* **Issue page**: All visual references on the Issue details page and associated views will be renamed to "Alert events."

Additionally, we're introducing enhanced Slack commands for incident management:

* `/nr inc` - Start a new incident and become the incident commander from any channel, or update details of an existing incident.
* `/nr sev {severity_level}` - Set or update the incident severity quickly.
* `/nr timeline` or `/nr tl` - Add a quick update to the Upboard timeline, akin to posting a status with the 911 status command.
* `/nr summary` - Request an incident summary from the NR AI assistant to save precious time reading the whole thread.
* `/nr ic me` - Take the Incident Commander role.
* `/nr cm me` - Take the Communication Manager role.
* `/nr resolve` - Mark the incident as resolved.
* `/nr help` - See the bot command output.
* `/nr retro` - Generate Retrospective document. Retro can be generated once the incident is resolved.

## Actions to take

**None.** These updates are purely cosmetic and will be applied automatically to your workspace. Your existing alert conditions, workflows, and account permissions will continue to function without interruption.

## Key dates

- **February 16th, 2026**: All visual references to "Incidents" within the New Relic UI will transition to "Alert events."