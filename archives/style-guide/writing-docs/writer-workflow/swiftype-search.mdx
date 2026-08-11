---
title: Swiftype search
---

Swiftype is the elastic-based search engine that powers the search in `docs.newrelic.com`.

As a technical writer at New Relic, you may need to log into Swiftype and do a variety of tasks to make sure your docs are recognized during internal searches.

## Swiftype crawler info [#crawler-info]

The crawler says it crawls every 12 hours. The rate at which it crawls is relatively slow, which means it could take longer than that to pick up page changes. It also uses some combination of `sitemap.xml` and link collection when crawling.

We can trigger a manual crawl once every 12 hours, if needed. Or, we can have Swiftype crawl specific pages when needed.

The average re-index time for docs is four days.

## Manually add new page to Swiftype index [#manually-index]

You may want to manually add a new page to the Swiftype index when the crawl is too slow and you want the page available right away.

To manually add a new page in Swiftype:

1. Make sure your doc type isn't in the ignore list by going to **Domains > [https://docs.newrelic.com/](https://docs.newrelic.com/)**.
2. Go to **New Relic > Content**.
3. In the text input box that says **Filter pages**, paste the URL of the page you want indexed.
4. If the page is not in the index, Swiftype will provide the option to **Add this URL**. Click that option to add the page to the index.
5. Insert the URL, making sure to do the following:
   * Use the entire URL like so: `https://docs.newrelic.com/docs/path/to/doc/`
   * Ensure the URL has a trailing slash

Swiftype should index it within a minute or so. To check if it's indexed, refresh the page and paste the URL. Note that sometimes the admin UI is cached or lags. You can ask a colleague to check, use the REST API to check, clear the cache, or reload the page and check again.

## Manually update existing Swiftype record [#manual-index]

Similar to manually adding a new page to the index, you can update an existing record if the crawl is too slow and you want the index updated right away. Use this method if you've changed a page's URL and the old URL is redirected to the new one. For an extended discussion about this, see the section [changing URLs](#url-changes) below.

To manually update or reindex an existing record:

1. Go to **New Relic > Content**.
2. Paste the old URL (the one the page was last indexed with).
3. If it's found in the index, you should see the entry for it, so select **Details**.
4. On the record detail page, select **Reindex**.
5. Re-add the ranking for this doc by following the steps in [Rank results for a given search term](#rank-results).

Swiftype should reindex within a minute. Note that that record will be removed from the index, along with any custom rankings you set for it, and a new record is created for the new URL that the crawler was redirected to. So, be prepared to update the result rankings.

## Manually remove existing swiftype record [#remove-records]

You may want to manually remove an existing record from the index in these cases:

* When you want to quickly remove a record for a page that was deleted with no redirects
* If you notice that there's more than one record for a page that changed URLs recently (one for the old URL, one for the new one that was discovered outside of the redirect).

To manually remove a record from the index:

1. Go to **New Relic > Content**.
2. Paste the URL for the record you want to remove.
3. Select **Details**.
4. Select **Delete this Document** at the bottom of the **Details** page.

## Rank results for a given search term [#rank-results]

Rank results for given search terms to move certain pages higher or lower in the results. You can also exclude a record from the results for a given search term.

Since the pages for all our websites are handled by one engine, it clutters the ranking listing. It's best to search for specific URLs instead of browsing for the relevant page URLs.

<Callout variant="tip">
  If a URL changes for a given record, the result ranking is lost and needs to be added for the new record associated with the new URL.
</Callout>

To rank results:

1. Go to **New Relic > Result Rankings**.
2. Enter the search term in the text input that you want to rank for (capitalization doesn't matter).
3. Drag results higher or lower. You'll likely want to search for the page URL, pin it, and move it around.
4. Remove a result by selecting the **X** button on the result.

For more details, see the [official Swiftype docs](https://swiftype.com/documentation/site-search/guides/result-rankings).

## Add alias [#add-alias]

When you set a result ranking, you can also add aliases. An alias is similar to a [synonym](#add-synonym), but is only applicable to a specific result set.

To add aliases:

1. Go to **New Relic > Result Rankings**.
2. Enter the search term.
3. Add the alias in the text input.

## Add synonym [#add-synonym]

Add synonyms when you want one search term to show the same results as another. Previous examples include:

* RBAC = roles based access controls
* servers = new relic infrastructure

To add synonyms, go to **New Relic > Synonyms**.

For more information, see the [official docs](https://swiftype.com/documentation/site-search/guides/synonyms).

## Best practice: Important search terms [#important-search-terms]

We probably want to ensure that results are ranked and accurate for search terms that are:

* Known to be really vague with noisy results (example: browser)
* The most popular search terms on our site
* Glossary terms

## Best practice: URL changes [#url-changes]

If a page that's already indexed has its URL changed, Swiftype will remove that record associated with the old URL. And, if a redirect exists to a new URL, Swiftype will create a new record for the page that's associated with the new URL. When that happens, result rankings for the old record are lost and must be re-added for the new record with the new URL.

Triggering a recrawl in Swiftype will eventually fix this, but it may take a long time. Alternatively you can delete specific results for old pages and manually tell it to index new ones. This _should_ be synced down to `docs-library-service` when it next goes to update its cache for a given search term.
