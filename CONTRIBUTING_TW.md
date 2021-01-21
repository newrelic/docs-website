This document will guide you through the entire workflow for editing the New Relic documentation site.

## Resources

- VSCode (or another text editor)
  - [VSCode has great Github integrations](https://code.visualstudio.com/docs/editor/github)
- [Github account](https://github.com/join)
- [Github Desktop](https://desktop.github.com/)

## Setup your local environment

Install Github Desktop, and then navigate to Github Desktop's preferences. On Macs, click on **Github Desktop** in the top left corner of your screen and select **Preferences**. Select the blue **Sign In** button and follow the prompts in the browser window. 

Once Github Desktop is set up, navigate to the [Docs Site repository](https://github.com/newrelic/docs-website) on Github. Click the green **Code** button and then select **Open with Github Desktop**. This will clone the entire repository to your local machine. You can ensure the repo was cloned by navigating to your local Github folder (The default is **~/Documents/Github**). Once you have cloned the repo, you do not need to clone it again in the future.  

## Run the site locally

You will use the Terminal to build the site locally. This will allow you to preview changes before opening a PR. While running, the site will reflect any local changes made. Node and Yarn are tools we use to build the site on your local machine.

### Prerequisites
- [Install Node](https://nodejs.org/en/download/)
- Install Yarn 
  - `npm install -g yarn`

### Build the site
1. In your Terminal, change your directory `cd` to your cloned repo, **docs-website**. 
    - `cd ~/Documents/GitHub/docs-website`
2. Run yarn with the following commands:
    - `yarn`
    - `yarn start`
3. The site will take a few minutes to build. Once it finishes building, you can access your preview site in your browser by navigating to [http://localhost:8000/](http://localhost:8000/)

## Work on a branch, not a fork
Some teams work on branches, some teams work on forks; the docs team works in branches. As long as a branch has been pushed upstream, this allows us to work collaboratively and ensure that no work is ever lost when someone goes on FTO.

To create a branch on the docs-website repo:
1. Open Github Desktop
2. Click on **Current branch: xxx**
3. Click on **New Branch**
4. You will be prompted to name your new branch. Ensure the name is relevant to the work done. For example, if you are working on What’s New pages, you might name the branch **Whats-new-updates**.

## Edit a doc

Once your local environment and branch are set up, you are ready to edit a doc. Check out the docs site style guide for writing guidelines.

1. First, ensure your **Current Branch** in Github Desktop is set to the correct branch, not **Develop**.
2. Navigate to the doc you want to edit in Finder. If I wanted to edit a Python agent doc, I would navigate to: `~/Documents/Github/docs-website/src/content/docs/agents/python-agent/hosting-services/python-agent-stackato.mdx`
3. Edit the doc in your text-editor of choice. You should write docs in markdown language. Reference the style guide for help with formatting markdown
4. Save the file with your edits, then follow the same process for any other docs you wish to edit.

## Committing your changes

Once your edits are done, you can commit them. This stages your changes, which you will later push upstream.

1. Navigate to Github Desktop. The left column should have a record of all the edits you have made to docs. 
2. In the bottom left corner, name your commit and add a good description of your edits. It should be descriptive enough to ensure that someone can understand all the changes made by simply scanning this description.
3. Press **Commit to yourbranchname**

## Publish your commits

Once you have committed your changes, you are almost ready to open your Pull Request.

First, you need to ensure your branch is pushed upstream.

1. On Github desktop, click the blue **Publish Branch** button if available.
2. If you do not see the Publish Branch, click the blue **Push Origin** button. 

This will push all your commits upstream and make them available to everyone else through the Github repository.

## Open your pull request

Now that your commits are available to everyone, you need to notify people that your changes are ready to be merged into the main branch (**develop**).

To do this, you open a pull request:

1. On Github Desktop, click the blue **Create Pull Request button**.
2. This will open Github in your browser, and prompt you to fill in your pull request. If you scroll down, you can review all your commits to ensure they reflect all your changes.
3. Just like your commit description, your pull request description should be detailed and give the full context of your changes. 
    - Feel free to add any additional context here (issue or Jira number, SMEs, etc.)
4. Once you are satisfied with your pull request, click the green **Create pull request button**. 
5. You can either publish the changes directly by approving the pull request yourself, or you can request for another Tech Writer to peer edit it. 
    - To request a review from another Tech Writer: in GitHub open the PR, navigate to the conversation **Conversation**, and then select or type in a reviewer name in the **Reviewer** section. 
6. Once the pull request has been approved by another tech writer or you are confident the changes are ready to be published, click the green **Merge pull request** button. This will merge your branch and commits into the repository and should now be reflected in the docs site. 

## Editing workflow in GitHub

If you’re peer editing a doc or have been otherwise assigned to a PR as a reviewer, you have a few choices for how and where to do the work.  The most streamlined and open-source approach is to do the edit using GitHub options, rather than copying the file to a google doc and editing there. 

### Developmental edit pass

For cases where you have questions and suggestions rather than straight copy edits, follow these steps.

1. Open the PR that you’re assigned to review.
2. On the Files changed tab, you can either:
    - Click Review changes and then select one of the following:
      - **Comment** - use if you have a comment that doesn’t require follow up.
      - **Approve** - use if you just want to approve the PR. You can request changes in the Leave a comment area, and select Approve if you want to let the writer make the edits and merge the file without a follow-up review from you.
      - **Request changes** - use for times when you want to make sure the changes you request are included. You’ll be notified with any updates that the writer makes. 
    - OR, start making comments on lines or sections of the doc. To do this, click the add comment icon , and leave an edit or comment for that specific line in the page. With this option, you get the choice between adding a single comment or starting a review. If you’re going to make comments throughout a doc, choose **Start a review** so the comments will all be rolled into one commit.
3. Click **Finish your review** to complete your review. This triggers a notification to the writer alerting them that you’ve made suggestions. 

### Copy edit workflow

If you have copy edits for a file rather than comments and suggestions, you can make the changes to the file in different ways. Here are two main options:

1. Edit using the GitHub browser: on the **Files changed** tab, in the diff window, click  and select **Edit file**. When you finish your edits, add a comment at the bottom of the file and choose to either **commit the changes directly**, or **create a branch and start a pull request**. Choose to branch and start a pull request if you expect a writer to review the diff and accept or revise your edits.
2. Edit locally: check out the branch containing the file you want to edit, make the edits on your local drive, save, and commit your changes to the branch. 
    - Note that this approach adds your edits to the open pull request. You can now see the changes you added to the file on the **Files changed** tab in the PR.

These are just a few of many editing options. You’ll find your preferred way, just as you have with the Drupal tools.  

### Revise and publish a doc

If you’re notified that a reviewer has submitted a review to your file, go to your PR and review the changes. You might see them in the diff view, if they’re part of a review with comments; otherwise, they might appear as copy edits in the file. 

1. Respond to any comments in the file. Either reply with follow up discussion, or click **Resolve conversation**.  
1. When you’ve resolved all the comments, and all of the automatic checks have passed, you can merge the pull request. Merging the pull request sets in motion the automated build process and your changes will be published shortly. 

**Note**: You will only be able to merge when the **Merge pull request** button is green. If it’s not green, review for any comments you missed, or other messages that indicate why GitHub is blocking you from merging.




