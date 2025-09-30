from github import Github
from invoke import run
import os
import re
import json

# Get token from Workflow environment variable
token = os.getenv('GITHUB_TOKEN', '...')

# Initialize GitHub with token
github = Github(token)

# Create heading for Release Notes
result = "## :rocket: What's new?\n\n\n"

# Get the Docs repo
repo = github.get_repo("newrelic/docs-website")

# Get latest merge number environment variable
lastRelease = os.getenv('LAST_RELEASE', '...')

# Get newly created tag environment variable
newTag = os.getenv('NEW_TAG', '...')

# Compare diff between previous release and develop
diff = repo.compare(lastRelease, "develop")

# Loop through commits and add details to result
for commit in diff.commits:
  try:
    result += "@{author} - {message} [->]({url})\n".format(
      author=commit.author.login,
      message=commit.commit.message.splitlines()[0],
      url=commit.html_url
    )
  except AttributeError:
    pass

# Encode the string to escape characters
result = result.replace('"','\\"')

# Limit the characters in the notes to 25000 as per api restrictions
result = result[0:24999]

# Set result as an Env for use in Workflow
run('gh release create {newTag} -t {newTag} -n "{result}"'.format(newTag=newTag,result=result))
