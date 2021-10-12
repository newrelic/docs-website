---
title: Organization Settings & Admin
description: 
---

## Managing People & Roles

Select "My Organization" from the [My Organization](myorganization) menu at the
top of the CodeStream pane to invite people to the organization and assign or
remove admin privileges.

![Admin Privileges](../assets/images/AdminRights2.png)

Select "Blame Map" to define code ownership with your organization.

![Blame Map](../assets/images/MyOrgBlameMap.png)

By default, when you comment on code, CodeStream mentions (or offers to email)
the author(s) of the code you are commenting on. But if that person has left the
company it might not be the right thing to do. Note that non-admins are able to
set up blame maps for themselves to handle situations where the email address
they use to commit code is different than the one they used to sign up for
CodeStream.

## Organization Settings

If you are an organiztion admin, look for the Organization Admin menu under the
headshot menu at the top of the CodeStream pane.

![Organization Settings](../assets/images/OrganizationSettings.png)

## Onboarding Settings

Domain-based joining allows anyone with email addresses on the specified domains
to join your CodeStream organization without being first invited. Not only does
this make it very easy to get your teammates on board, but it ensures that
they'll be part of your organization (as opposed to accidentally creating their
own).

![Domain-based Joining](../assets/images/OnboardingDomainJoining.png)

## Feedback Request Assignment & Approval

Admins can control how both feedback request assignments and approvals work
for the organization. 

![Feedback Request Settings](../assets/images/FRTeamSettings.png)

By default, the person requesting feedback can decide how approvals work, but
you can, instead, set a default behavior for all feedback requests for the
organization.

* Any reviewer can approve - Any one can approve the feedback request,
  regardless of how many reviewers are assigned.
* All reviewers must approve individually - Each assigned reviewer must
  individually approve the feedback request before it’s considered approved.

You can also decide if and how CodeStream suggests reviewers. Round-robin will
cycle through all developers in the organization. Random will randomly assign
the feedback request to any developer in the organization. The Authorship
options will suggest up to three reviewers based on the developers who wrote the
lines of code impacted by the changes, as well as other developers who may have
committed to the branch.

## Change Organization Name

Update the name of your CodeStream organization at any time.

![Change Team Name](../assets/images/ChangeOrgName.png)

## Data Export 

A lightweight export facility for getting your organization's discussions out of
CodeStream. Click the icon to copy all of the data to the clipboard.

![Data Export](../assets/images/DataExport.png)

