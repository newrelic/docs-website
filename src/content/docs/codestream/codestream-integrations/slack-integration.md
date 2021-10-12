---
title: Slack Integration
description: 
---

When you post a comment, issue or feedback request your teammates will get
notified via the activity feed, and potentially via email. Sometimes, though,
you might want to share to Slack as well. This would allow you to reach people
who haven’t yet joined CodeStream, or maybe don’t spend a lot of time in their
IDE. 

## Sharing to Slack

When posting a comment, issue or feedback request, clicking on the Slack link at
the bottom of the form will take you off to the web to authenticate with one of
your Slack workspaces. 

![Connect to Share](../assets/images/NewCodemark-NotConnected2.png)

Once you’ve connected to a workspace you’ll be able to select a channel or
direct message to share to.

![Select Channel](../assets/images/PostTo-Slack.png)

By default, CodeStream will remember if/where you last shared and the form will
default to the same selections the next time. If you’d like to specify a default
channel to use based on the repository you are in, click the gear menu at the
top of the “Post to” popup and you can set the default behavior for each
repository.

Note that you can also share an existing post to Slack, even one created by a
teammate. Just go to the comment, issue or feedback request and look for the
“Share” option under the ellipses menu.

Look for the "Shared To" section to keep track of where a post has been shared.
You can even click on an entry to go straight to the given conversation on Slack.

![Shared To Section](../assets/images/SharedTo.png)

## Participating from Slack

A comment, issue or feedback request shared to Slack is much more powerful than
a simple notification. Your teammates can participate in the discussion right
from Slack!

![Codemark on Slack](../assets/images/ShareOnSlack1.png)

### View Discussion & Reply

Your teammates can click “View Discussion & Reply” to add a reply, and that
reply will get posted to CodeStream. Any previous replies will be displayed as
well so that they can catch up on the entire discussion. 

![Reply from Slack](../assets/images/animated/ReplyFromSlack.gif)

Note that your teammates don’t need to be CodeStream users in order to
participate in discussions via Slack.

### Open in IDE

Click “Open in IDE” to view both the code, and the discussion, right inside your
IDE. You’ll be first taken through a CodeStream web page where you’ll specify
which IDE to open, and CodeStream will remember this selection for the next time
you view a discussion from the same repository. You’ll then be taken to the
appropriate source file in your IDE, scrolled to the relevant block of code,
with the discussion displayed in the CodeStream pane. If you don’t happen to
have the given repository open in your IDE, CodeStream will automatically open
the source file for you (assuming you’ve opened that repository previously, with
CodeStream installed, so that we know where to find it).

Note that if you’re using a JetBrains IDE you’ll need to first install the
[Toolbox App](https://www.jetbrains.com/toolbox-app/) so that CodeStream can
deep link into the IDE.

### Open on GitHub (or Bitbucket or GitLab)

If the code block is from a repository hosted on GitHub, Bitbucket or GitLab,
this button will take you to the corresponding block of code on that hosting
service.

## Resolution of Codemarks & Feedback Requests

When a codemark or feedback request gets resolved/approved (or rejected or
reopened), a reply is automatically posted to any corresponding conversations on
Slack.

![Resolved on Slack](../assets/images/ResolvedOnSlack.png)

Many organizations have non-developers that participate in discussions, or at
least passively monitor them, through Slack, and these notifications help keep
those people in the loop as discussions or feedback requests get resolved.
