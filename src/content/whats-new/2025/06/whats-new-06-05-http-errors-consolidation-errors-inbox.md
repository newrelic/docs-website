---
title: "Enhanced Mobile Request Errors Grouping Logic"
summary: "We're improving how Mobile Request Errors are grouped to enable more effective troubleshooting and analysis. The new grouping logic will provide more actionable insights while maintaining performance for high-volume customers."
releaseDate: "2025-06-05"
---

## Changes:

- **Enhanced URL Grouping:** Errors will now be grouped by requestDomain + requestPath instead of only requestDomain
- **Intelligent Resource URL Handling:** Special handling for resource URLs is now available (images, videos, static content, etc.,)
    *   File names in URLs will be replaced with <FILE_NAME> placeholder
    *   Image size directories in URLs will be replaced with <FILE_SIZE_DIRECTORY> placeholder
    *   Numbers in between forward slashes will be replaced with <NUMBER_IN_URL> placeholder

## Benefits:

- More precise error grouping for easier triage and assignment
- Better differentiation between API endpoints and Resource URLs
- Improved ability to identify patterns in error occurrences

## Examples

- **Before:**
    *   cdn.example.com/101010/image/300/300/user-images/example.png
- **After:** Special handling for resource URLs is now available (images, videos, static content, etc.,)
    *   cdn.example.com/<NUMBER_IN_URL>/image/<FILE_SIZE_DIRECTORY>/user-images/<FILE_NAME>

![triage tab](/images/errors-inbox-http-errors-triage.webp "triage tab")
![group tab](/images/errors-inbox-http-errors-group.webp "group tab")

## Who's Affected:
All customers using Mobile Request Errors functionality will benefit from this update. This change is especially valuable for high-volume customers who previously experienced grouping issues, no additional action is required from customers to take advantage of this enhancement.
