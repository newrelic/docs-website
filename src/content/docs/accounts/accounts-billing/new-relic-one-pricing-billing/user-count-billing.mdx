---
title: "Users: Billing and rules"
tags:
  - Accounts
  - Accounts and billing
  - New Relic pricing and billing
translate:
  - jp
metaDescription: "For New Relic pricing, an explanation of how billable users are calculated and rules for downgrading users."
freshnessValidatedDate: 2024-11-08
---

On [our pricing model](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing), the count of billable users is a billing factor.

## Learn about costs [#cost]

If you're not yet a New Relic customer and are curious about costs, first see [our main pricing page](https://newrelic.com/pricing).

If you're an existing New Relic customer and want to understand your billing, see the [billing UI](/docs/accounts/accounts-billing/general-account-settings/introduction-account-settings). If your organization contains multiple accounts, you must be in the primary reporting account (typically the first account created in your organization) to see all users in your organization.

## Which users are billable? [#billable-users]

Billable users are users with a [user type](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) of either core user or full platform user. Basic users are free.

Users are billable at the moment they're added as billable users to a New Relic organization. Even if a billable user has never logged in to New Relic and has a `Pending invite` tag in the UI, they're still billable.

## Manage users [#manage]

For how to manage users, see [User management](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks).


## Manage user costs [#primary-version]

You can use the [usage UI](/docs/accounts/accounts-billing/general-account-settings/introduction-account-settings/#pricing) to get an overview of your billable user count. If you need more detail than the UI provides, you can also run [usage-related NRQL queries](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/usage-queries-alerts).

<CollapserGroup>
  <Collapser
    id="user-count"
    title="How billable users are counted"
  >
    Billing for billable users is done per calendar month. To determine an organization's count of billable users in a calendar month, we count the users during that month who had a <DNT>**billable user type**</DNT> of either full platform user or core user. A user's <DNT>**billable user type**</DNT> is defined as the highest user type at which a user was set during a calendar month. We use UTC timezone to define the start and end of a calendar month.

    For an example of how this works in practice: If a user is set as a full platform user at any point during a calendar month, their billable user type for that month is `full platform user`, and won't change, even if they downgrade later in that month. This is the case even if that user is changed to a full platform user only briefly.

    If you're planning on adding billable users or changing your users' user type, you should keep these rules in mind. Some tips:

    * If you want to add a billable user or upgrade a user, you will probably want to do that at the beginning of the month.
    * If you want to downgrade a user, you will probably want to do that at the end of the month.
    * We use UTC time to determine the start and end of a month. This means that if, for example, you were on Pacific time and you wanted to downgrade users on the last day of the month, you'd have to make those changes by 5pm Pacific time.

    Users in your organization with the same email address are only counted as one user. For more information, see [User tracking](/docs/accounts/accounts-billing/account-setup/multiple-logins-found#user-records).

    For users on our [newer user model](/docs/accounts/original-accounts-billing/original-users-roles/overview-user-models): users are billable when they're added by admins as billable users. Even if a billable user has never logged in to New Relic and has a `Pending invite` tag in the UI, they're still billable. (For users on our [original user model](/docs/accounts/original-accounts-billing/original-users-roles/users-roles-original-user-model), `Pending invite` users are not billable.)

    For more on adding and inviting users, see [Add users](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#add-users).

    The cost of your billable users depends on an organization's [pricing edition](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/#editions) (Standard, Pro, or Enterprise), or on any custom deal you might have with New Relic.

    When a New Relic organization first starts being billed, their billable user count is pro-rated based on when during the month they started. If an organization cancels their subscription, prorating is also applied for their last month.
  </Collapser>

  <Collapser
    id="user-downgrade-rules"
    title="User downgrade rules"
  >
    The rules pertaining to how many times you can downgrade full platform users differ depending on whether your [usage plan](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing#usage-plans) is pay-as-you-go or a commitment contract.

    ### Pay-as-you-go downgrade rules

    For the [pay-as-you-go usage plan](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing#usage-plans), there are no rules limiting the downgrading of users. But note that the [billing calculation](#user-count) can impact your decisions of when to upgrade or downgrade users.

    ### Commitment contracts downgrade rules

    Before upgrading or downgrading a user, you should understand [how user billing works](#user-count).

    For organizations with [commitment contracts](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/#usage-plans), the rule governing full platform user downgrades and upgrades is this:

    <DNT>**If a full platform user is downgraded to a lower user type in a later month and then returned to a full platform user in a later month, and this downgrade/upgrade cycle happens twice in a contract year, that user will be billed as a full platform user for the remainder of the year, regardless of edits to their user type.**</DNT> There are no rules governing user type changes that happen within a month because of [how user billing works](#user-count): a user's billable user type for a calendar month is the highest user type they are set at during that month.

    Here are details on the terms used in the context of this rule:

    * A <DNT>**downgrade**</DNT> means going from being billed as a full platform user in one calendar month to, in a later calendar month, being billed as a lower user type (core or basic), or deleted.
    * An <DNT>**upgrade**</DNT> means going from being billed as a core user, basic user (or a previously deleted user) in one calendar month to, in a later calendar month, being billed as a full platform user.
    * A <DNT>**contract year**</DNT> begins on your contract's starting point, or on the anniversary of that point. If your organization started out on a different pricing plan and switched to a commitment contract, the user type downgrade rule will apply from the date you opted in until your contract renewal date or the annual anniversary date of your commitment term, whichever is earlier.

    <Callout variant="tip">
      <DNT>
        **Why do we have rules governing full platform user downgrades/upgrades?**
      </DNT>

      The full platform user type is intended to be a long-term classification. We rely on estimates of billable users when we create a commitment contract, and these rules ensure that we're implementing those contractual limits consistently.
    </Callout>

    #### Example of downgrade limits

Let's say a contract year starts in March. And, let's say the user cycles through these account types from month to month:

    1. The user is billed as a full platform user in March
    2. The user is billed as a basic user in April (<DNT>**downgrade**</DNT>)
    3. The user is billed as a full platform user in June (<DNT>**upgrade**</DNT>)
    4. The user is billed as a basic user in July (<DNT>**downgrade**</DNT>)

    If that user returns in any subsequent month to being a full platform user, they will be billed for the remainder of that contract year as a full platform user, even if they are downgraded again to be a basic user or core user after that.
  </Collapser>
</CollapserGroup>

## Tiered pricing [#tiered-pricing]

Some organizations have access to tiered pricing for billable users. For details on that, see [Tiered pricing](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing#tiered-pricing).

