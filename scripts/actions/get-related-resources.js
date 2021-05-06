const fs = require('fs');
const frontmatter = require('@github-docs/frontmatter');
const _ = require('lodash');
const fetch = require('sync-fetch');
const { appendTrailingSlash, stripTrailingSlash } = require('./url');

const additionalLocales = ['jp'];
const engineKey = 'Ad9HfGjDw4GRkcmJjUut';
const limit = 3;
const frontMatterArray = [];

const quote = (str) => `"${str}"`;

const uniq = (arr) => [...new Set(arr)];

const getExcludedUrls = (frontmatter, siteUrl) => {
  const resources = frontmatter.resources || [];
  const redirects = frontmatter.redirects || [];

  return resources
    .map((resource) => resource.url)
    .concat(redirects)
    .map((url) => (url.startsWith('/') ? siteUrl + url : url));
};

const normalizeUrl = (url) => {
  const prefix = url.startsWith('!') ? '!' : '';
  const plainUrl = url.replace(/^!/, '');

  return [
    prefix + appendTrailingSlash(plainUrl),
    prefix + stripTrailingSlash(plainUrl),
  ];
};

const getFrontMatter = (filepath) => {
  const mdxfile = fs.readFileSync(filepath, 'utf8');
  const { data: frontMatter } = frontmatter(mdxfile);
  const slug = filepath.match(/content(.*?).mdx/)[1];
  frontMatter.slug = `${slug}/`;

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
  const res = fetch(
    'https://search-api.swiftype.com/api/v1/public/engines/search.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: query,
        engine_key: engineKey,
        per_page: limit,
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

const getQueryParams = (frontmatter, excludedUrls, siteUrl) => {
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

const getBatchResultsFromSwiftype = ({ frontMatterArray, siteUrl }) => {
  const queries = frontMatterArray.map((pageFrontMatter) =>
    getQueryParams(
      pageFrontMatter,
      getExcludedUrls(pageFrontMatter, siteUrl),
      siteUrl
    )
  );
  const batchedQueries = _.chunk(queries, 10);
  const queryResults = batchedQueries.map((queryBatch) => {
    const requests = queryBatch.map((query) =>
      search(query, { engineKey, limit })
    );
    const results = requests;
    console.log('remaining:', results[results.length - 1].remainingRequests);
    if (results[results.length - 1].remainingRequests < 150) {
      setTimeout(() => {
        console.log(
          `waiting for swiftype request limit to reset. remaining requests: ${
            results[results.length - 1].remainingRequests
          }`
        );
      }, 300000);
    }
    return results.reduce((acc, result) => {
      acc[result.slug] = result.page;
      return acc;
    }, {});
  });

  const flattenedResults = queryResults.reduce((acc, batch) => {
    acc = {
      ...acc,
      ...batch,
    };
    return acc;
  }, {});

  fs.writeFileSync(
    '../../src/data/swiftype-resources.json',
    JSON.stringify(flattenedResults, null, 2)
  );
};

findMdxFiles('../../src/content/docs');

const testPages = frontMatterArray.slice(0, 600);

getBatchResultsFromSwiftype({
  frontMatterArray: testPages,
  siteUrl: 'https://docs.newrelic.com',
});
