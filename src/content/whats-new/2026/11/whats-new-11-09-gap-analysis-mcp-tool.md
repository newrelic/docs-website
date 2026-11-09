---
title: 'Detect missing New Relic instrumentation with the Gap Analysis MCP tool'
summary: 'Scans local repository files to identify gaps across config files, APM agents, Browser agents, and CI/CD Change Tracking workflows.'
releaseDate: '2026-11-09'
learnMoreLink: 'https://docs.newrelic.com/docs/agentic-ai/mcp/tool-reference/#gap-analysis'
---

The `analyze_github_newrelic_gaps` tool lets your MCP client — such as GitHub Copilot, Claude, or Cursor — read your local project files and audit your repository for missing or misconfigured New Relic instrumentation. Ask your AI assistant "Are we missing any New Relic instrumentation in this project?" and the tool scans your repository automatically.

## What it checks

The tool audits four areas of your repository:

- **New Relic config file**: Verifies whether a valid configuration file containing an entity name exists in the repository root, and whether the entity name exactly matches the reporting entity name in New Relic.
- **APM agent**: Verifies whether the service actively reports data to New Relic APM and whether supported APM dependencies (Python only) are installed and linked to the repository via a `BUILT_FROM` relationship.
- **Browser agent**: Detects whether the New Relic Browser monitoring snippet is properly embedded in your project's HTML files or page templates.
- **Change Tracking**: Checks whether the New Relic Change Tracking GitHub Action (`newrelic/deployment-marker-action`) is included in your CI/CD workflows under `.github/workflows/*.yml`.

## Gap states

Each monitored area reports one of four states:

| State | Meaning |
|---|---|
| Not Implemented | No implementation or instrumentation found in the repository. |
| Implemented & Working | Found and correctly configured to report to New Relic. |
| Implemented & Broken | Found instrumentation, but no matching entity name detected in New Relic, suggesting a configuration or linkage mismatch. |
| Dismissed | Previously dismissed with a `dismissed` label on the corresponding GitHub Issue; suppressed from repeat alerting. |

## Get started

1. Install the New Relic GitHub App from the GitHub Marketplace and opt in to gap analysis during setup.
2. Link your APM entities to the repository by specifying `NEW_RELIC_METADATA_REPOSITORY_URL` or adding `repository.url` in your New Relic config to establish a `BUILT_FROM` relationship.
3. Ensure your MCP client has access to the New Relic MCP server. This tool requires OAuth authentication and is not available with an API key.

## Limitations

Keep the following constraints in mind when using this tool:

- Supports single-service repositories only; not monorepos with multiple services.
- When using Autopilot, supports GitHub.com repositories only.
- Detects APM instrumentation for Python only.
- Checks for the Change Tracking GitHub Action only; other deployment marker methods appear as not detected.
- Does not analyze Terraform, Helm, Kubernetes manifests, or mobile SDKs.
- Results vary by AI model and harness.

[Learn more](https://docs.newrelic.com/docs/agentic-ai/mcp/tool-reference/#gap-analysis)
