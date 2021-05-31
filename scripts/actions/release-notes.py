from github import Github
from invoke import run
import os
import re

# Get token from Workflow environment variable
token = os.getenv('GITHUB_TOKEN', '...')

# Initialize GitHub with token
g = Github(token)

# Create heading for Release Notes
result = "## :rocket: What's new?\n\n\n"

# Get the Docs repo
repo = g.get_repo("newrelic/docs-website")

# Compare diff between main and develop
diff = repo.compare("main", "develop")

# Loop through commits and add details to result
for com in diff.commits:
  line = "@" + com.author.login
  line += " - " + com.commit.message.splitlines()[0]
  line += " [->](" + com.html_url + ")"
  result += line
  result += "\n"

# Set result as an Env for use in Workflow
run('echo "RESULT<<EOF" >> $GITHUB_ENV')
run('echo "%s" >> $GITHUB_ENV' % result)
run('echo "EOF" >> $GITHUB_ENV')
