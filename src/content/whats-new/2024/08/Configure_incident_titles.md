---
title: "Configure titles templates for improved alert processing"
summary: "Title templates of alert conditions can now be customized with incident variable tokens"
releaseDate: '2024-08-19'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts/create-alert/condition-details/title-template/'
---

With the latest update to our alert creation experience, you now have the ability to use any of the variable tokens available for the Incident event to customize the title templates of alert conditions. Previously, titles for alert conditions were automatically generated based on the name of the entity and the metric when an entity is present, or the alert condition name with the facet tags appended to it. With this update, you can make your incident titles more concise, descriptive, and distinct for more effective alert notification processing and navigation.

The title template uses the same `{{variable}}` [syntax and incident event variables](https://docs.newrelic.com/docs/alerts/create-alert/condition-details/incident-event-attributes/) as the [custom incident descriptions](https://docs.newrelic.com/docs/alerts/create-alert/condition-details/alert-custom-incident-descriptions/). For consistency, and forward compatibility, we have also simplified the label of the “Incident description template” field to “Description template”.

![Configure incident titles](/images/whats-new_screenshot-full_config-incident-titles.webp "Configure incident titles")

**To get started**:
Configurable title templates are available for new alert conditions on the ‘Add details’ section of form for creating alert conditions, and on the bottom section of the alert conditions detail page. This field can also be edited using the alert condition APIs and in our latest Terraform provider. You can find more information in our [documentation](https://docs.newrelic.com/docs/alerts/create-alert/condition-details/title-template/).
