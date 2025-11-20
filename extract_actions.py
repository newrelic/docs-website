#!/usr/bin/env python3
"""
Script to extract action sections from existing files and create new organized files
"""

import re
import os

BASE_DIR = "src/content/docs/workflow-automation/setup-and-configuration/actions-catalog"

# Define file extractions mapping
# Format: (source_file, line_start, line_end, dest_file, title_suffix, description)
AWS_EXTRACTIONS = [
    # EC2
    ("aws.mdx", 773, 1449, "aws-ec2.mdx", "AWS EC2 actions", "EC2 instance and snapshot management"),
    # SystemsManager
    ("aws.mdx", 1451, 2341, "aws-systemsmanager.mdx", "AWS Systems Manager actions", "Systems Manager automation and document operations"),
    # Execute API
    ("aws.mdx", 2343, 2720, "aws-execute-api.mdx", "AWS Execute API", "Execute any AWS API operation"),
    # CloudWatch
    ("aws.mdx", 2721, 3110, "aws-cloudwatch.mdx", "AWS CloudWatch actions", "CloudWatch Logs operations"),
    # S3
    ("aws.mdx", 3111, 4311, "aws-s3.mdx", "AWS S3 actions", "S3 bucket and object operations"),
    # SNS
    ("aws.mdx", 4312, 4549, "aws-sns.mdx", "AWS SNS actions", "SNS topic operations"),
    # SQS
    ("aws.mdx", 4550, 4914, "aws-sqs.mdx", "AWS SQS actions", "SQS queue operations"),
]

HTTP_EXTRACTIONS = [
    ("http.mdx", 34, 180, "http-get.mdx", "HTTP GET", "HTTP GET request operations"),
    ("http.mdx", 181, 337, "http-post.mdx", "HTTP POST", "HTTP POST request operations"),
    ("http.mdx", 338, 505, "http-put.mdx", "HTTP PUT", "HTTP PUT request operations"),
    ("http.mdx", 506, 665, "http-delete.mdx", "HTTP DELETE", "HTTP DELETE request operations"),
]

NEWRELIC_EXTRACTIONS = [
    ("new-relic.mdx", 30, 353, "newrelic-ingest.mdx", "New Relic Ingest actions", "Send events and logs to New Relic"),
    ("new-relic.mdx", 355, 520, "newrelic-nerdgraph.mdx", "New Relic NerdGraph actions", "Execute NerdGraph queries and mutations"),
    ("new-relic.mdx", 522, 626, "newrelic-nrdb.mdx", "New Relic NRDB actions", "Query New Relic database"),
    ("new-relic.mdx", 628, 1133, "newrelic-notification.mdx", "New Relic Notification actions", "Send notifications through New Relic"),
]

COMMUNICATION_EXTRACTIONS = [
    ("communication.mdx", 32, 445, "slack-chat.mdx", "Slack Chat actions", "Slack messaging operations"),
]

PAGERDUTY_EXTRACTIONS = [
    ("pagerduty.mdx", 23, 1016, "pagerduty-incident.mdx", "PagerDuty Incident actions", "PagerDuty incident management"),
]

UTILS_EXTRACTIONS = [
    ("others.mdx", 14, 197, "utils-datetime.mdx", "Utilities - DateTime", "Date and time utilities"),
    ("others.mdx", 199, 320, "utils-transform.mdx", "Utilities - Transform", "Data transformation utilities"),
    ("others.mdx", 322, 420, "utils-uuid.mdx", "Utilities - UUID", "UUID generation utilities"),
]

def read_file_lines(filepath, start_line, end_line):
    """Read specific lines from a file"""
    with open(filepath, 'r') as f:
        lines = f.readlines()
        return ''.join(lines[start_line-1:end_line])

def get_prerequisites(source_file):
    """Extract prerequisites section from source file"""
    with open(source_file, 'r') as f:
        content = f.read()
        match = re.search(r'## Prerequisites.*?(?=##|\Z)', content, re.DOTALL)
        if match:
            return match.group(0)
    return ""

def create_file(source_file, start_line, end_line, dest_file, title, description):
    """Create a new action file from extracted content"""
    source_path = os.path.join(BASE_DIR, source_file)
    dest_path = os.path.join(BASE_DIR, dest_file)

    # Get prerequisites
    prereqs = get_prerequisites(source_path)

    # Get action content
    action_content = read_file_lines(source_path, start_line, end_line)

    # Create frontmatter
    tags_base = [
        "workflow automation",
        "workflow",
        "workflow automation actions",
    ]

    if "aws" in dest_file.lower():
        tags_base.extend(["AWS actions", f"{title}"])
    elif "http" in dest_file.lower():
        tags_base.extend(["HTTP actions", f"{title}"])
    elif "newrelic" in dest_file.lower():
        tags_base.extend(["New Relic actions", f"{title}"])
    elif "slack" in dest_file.lower():
        tags_base.extend(["Slack actions", "communication actions", f"{title}"])
    elif "pagerduty" in dest_file.lower():
        tags_base.extend(["PagerDuty actions", f"{title}"])
    elif "utils" in dest_file.lower():
        tags_base.extend(["utility actions", f"{title}"])

    tags_str = "\n  - ".join(tags_base)

    frontmatter = f"""---
title: "{title}"
tags:
  - {tags_str}
metaDescription: "A list of available {title.lower()} in the actions catalog for workflow definitions"
freshnessValidatedDate: never
---

<Callout title="preview">
  We're still working on this feature, but we'd love for you to try it out!

  This feature is currently provided as part of a preview program pursuant to our [pre-release policies](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

This page provides a comprehensive reference for {title.lower()} available in the workflow automation actions catalog. These actions enable you to {description.lower()}.

"""

    # Write the file
    with open(dest_path, 'w') as f:
        f.write(frontmatter)
        if prereqs:
            f.write(prereqs + "\n\n")
        f.write(action_content)

    print(f"Created: {dest_file}")

def main():
    """Main execution"""
    print("Starting extraction...")

    # Process all extractions
    all_extractions = (
        AWS_EXTRACTIONS +
        HTTP_EXTRACTIONS +
        NEWRELIC_EXTRACTIONS +
        COMMUNICATION_EXTRACTIONS +
        PAGERDUTY_EXTRACTIONS +
        UTILS_EXTRACTIONS
    )

    for source, start, end, dest, title, desc in all_extractions:
        try:
            create_file(source, start, end, dest, title, desc)
        except Exception as e:
            print(f"Error creating {dest}: {e}")

    print("\nExtraction complete!")

if __name__ == "__main__":
    main()
