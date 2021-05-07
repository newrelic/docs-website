const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');
const _ = require('lodash');
const fetch = require('sync-fetch');
const {
  quote,
  uniq,
  getExcludedUrls,
  normalizeUrl,
} = require('./utils/related-resources-helpers');

const QUERIES_PER_BATCH = 100;
const RATE_LIMIT_DEBOUNCE_TIME = 300000; // 5 minutes

// max we can query in an hour without hitting lmit
const REMAING_LIMIT_TO_PAUSE = 14 * QUERIES_PER_BATCH;

const SWIFTYPE_RESOURCES_DIR = path.join(
  process.cwd(),
  '/src/data/swiftype-resources'
);

const additionalLocales = ['jp'];
const engineKey = 'Ad9HfGjDw4GRkcmJjUut';
const siteUrl = 'https://docs.newrelic.com';
const limit = 3;
const frontMatterArray = [];

const getFrontMatter = (filepath) => {
  const mdxfile = fs.readFileSync(filepath, 'utf8');
  const { data: frontMatter } = frontmatter(mdxfile);
  const slug = filepath.match(/content(.*?).mdx/)[1];
  frontMatter.slug = slug;

  const includedTypes = ['apiDoc', 'troubleshooting'];
  const excludedFolders = ['/docs/release-notes', '/whats-new'];

  if (excludedFolders.some((path) => slug.includes(path))) {
    return null;
  }

  if (frontmatter.type == null || includedTypes.includes(frontmatter.type)) {
    return frontMatter;
  }
  return null;
};

const findMdxFiles = (path) => {
  const files = fs.readdirSync(path);

  files.forEach((file) => {
    if (file.includes('.mdx')) {
      const frontMatter = getFrontMatter(`${path}/${file}`);
      if (frontMatter) {
        frontMatterArray.push(frontMatter);
      }
    } else if (!file.includes('.')) {
      findMdxFiles(`${path}/${file}`);
    }
  });

  return frontMatterArray;
};

const search = ({ query = {}, slug }, { engineKey, limit }) => {
  const { q, search_fields, filters } = query;

  const res = fetch(
    'https://search-api.swiftype.com/api/v1/public/engines/search.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q,
        engine_key: engineKey,
        per_page: limit,
        filters,
        search_fields
      }),
    }
  );
  const { records } = res.json();
  return {
    page: records.page,
    remainingRequests: res.headers.get('x-ratelimit-remaining'),
    slug,
  };
};

const getQueryParams = (frontmatter, excludedUrls) => {
  const { tags, title, slug } = frontmatter;

  const locale = slug && slug.split('/')[0];
  const postfix = additionalLocales.includes(locale) ? `-${locale}` : '';

  return {
    query: {
      q: tags ? tags.map(quote).join(' OR ') : title,
      search_fields: {
        page: ['tags^10', 'body^5', 'title^1.5', '*'],
      },
      filters: {
        page: {
          type: [
            `docs${postfix}`,
            `developer${postfix}`,
            `opensource${postfix}`,
          ],
          document_type: [
            '!views_page_menu',
            '!term_page_api_menu',
            '!term_page_landing_page',
          ],
          url: uniq([
            ...excludedUrls.flatMap((url) => normalizeUrl(`!${url}`)),
            ...normalizeUrl(`!${siteUrl + slug}`),
          ]),
        },
      },
    },
    slug,
  };
};

const removeOldResources = () => {
  const files = fs.readdirSync(SWIFTYPE_RESOURCES_DIR);
  for (const file of files) {
    fs.unlinkSync(path.join(SWIFTYPE_RESOURCES_DIR, file));
  }
};

const getBatchResultsFromSwiftype = (frontMatterArray) => {
  const queries = frontMatterArray.map((pageFrontMatter) =>
    getQueryParams(pageFrontMatter, getExcludedUrls(pageFrontMatter, siteUrl))
  );
  const batchedQueries = _.chunk(queries, QUERIES_PER_BATCH);
  const queryResults = batchedQueries.map((queryBatch) => {
    const results = queryBatch.map((query) =>
      search(query, { engineKey, limit })
    );
    if (
      results[results.length - 1].remainingRequests < REMAING_LIMIT_TO_PAUSE
    ) {
      setTimeout(() => {
        console.log(
          `waiting for swiftype request limit to reset. remaining requests: ${
            results[results.length - 1].remainingRequests
          }`
        );
      }, RATE_LIMIT_DEBOUNCE_TIME);
    }
    return results.reduce((acc, result) => {
      acc[result.slug] = result.page;
      return acc;
    }, {});
  });

  // if the SWIFTYPE_RESOURCES_DIR doesn't exist, create it
  if (!fs.existsSync(SWIFTYPE_RESOURCES_DIR)) {
    fs.mkdirSync(SWIFTYPE_RESOURCES_DIR);
  }

  removeOldResources();

  queryResults.forEach((result, index) => {
    const filename = `swiftype-resources-${index + 1}.json`;
    const filepath = path.join(SWIFTYPE_RESOURCES_DIR, filename);
    const json = JSON.stringify(result, null, 2);

    fs.writeFileSync(filepath, json);
  });
};

findMdxFiles('./src/content/docs');

getBatchResultsFromSwiftype(frontMatterArray);
