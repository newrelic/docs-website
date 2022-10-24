const { fetchNRGraphqlResults } = require('../nr-graphql-helpers');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { parse } = require('node-html-parser');
const frontmatter = require('remark-frontmatter');
const yaml = require('js-yaml');
const unified = require('unified');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const remarkParse = require('remark-parse');
const remarkStringify = require('remark-stringify');
const fencedCodeBlock = require('../../../codemods/fencedCodeBlock');

const TRAILING_SLASH = /\/$/;
const hasTrailingSlash = (pathname) =>
  pathname === '/' ? false : TRAILING_SLASH.test(pathname);

const removeTrailingSlash = (pathname) =>
  pathname.slice(0, pathname.length - 1);

const DATASOURCE_DOCS_URL_QUERY = `# gql 
query DataSourceDocsUrlQuery {
  actor {
    nr1Catalog {
      search(filter: {types: DATA_SOURCE}) {
        results {
          ... on Nr1CatalogDataSource {
            id
            metadata {
              install {
                primary {
                  ... on Nr1CatalogLinkInstallDirective {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const checkDocForRedirect = async (slug) => {
  const url = `https://docs.newrelic.com${slug}`;
  const response = await fetch(url);
  const data = await response.text();
  const body = parse(data);
  const metaTags = body.getElementsByTagName('meta');
  const redirect = metaTags.find((metaTag) => {
    return metaTag.attributes['http-equiv'] === 'refresh';
  });
  if (redirect) {
    const redirectSlug = redirect.attributes.content.split("'")[1];
    return hasTrailingSlash(redirectSlug)
      ? removeTrailingSlash(redirectSlug)
      : redirectSlug;
  }
  return hasTrailingSlash(slug) ? removeTrailingSlash(slug) : slug;
};

const writeIdsToDocs = async () => {
  const { data } = await fetchNRGraphqlResults({
    queryString: DATASOURCE_DOCS_URL_QUERY,
  });
  const results = data?.actor?.nr1Catalog?.search?.results?.reduce(
    (acc, { id, metadata }) => {
      const fullUrl = metadata?.install?.primary?.url;
      if (fullUrl?.startsWith('${DOCS}')) {
        const slug = fullUrl.split('${DOCS}')[1];
        return [...acc, { id, slug }];
      }
      return acc;
    },
    []
  );

  const dataSources = await Promise.all(
    results.map(async ({ slug, id }) => {
      const verifiedSlug = await checkDocForRedirect(slug);
      return { id, slug: verifiedSlug };
    })
  );

  dataSources.forEach(async ({ id, slug }) => {
    const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(
        path.join(process.cwd(), 'src/content', `${slug}.mdx`),
        'utf-8'
      );
      const updateFrontMatter = () => {
        const transformer = (tree) => {
          if (tree?.children[0]?.type === 'yaml') {
            const frontmatterObj = yaml.load(tree.children[0].value);
            frontmatterObj.dataSource = id;
            const frontmatterStr = yaml
              .dump(frontmatterObj, { lineWidth: -1 })
              .trim();
            tree.children[0].value = frontmatterStr;

            return tree;
          }
        };

        return transformer;
      };

      const processor = unified()
        .use(remarkParse)
        .use(remarkStringify, {
          bullet: '*',
          fences: true,
          listItemIndent: '1',
        })
        .use(remarkMdx)
        .use(remarkMdxjs)
        .use(frontmatter, ['yaml'])
        .use(fencedCodeBlock)
        .use(updateFrontMatter);

      const { contents } = await processor.process(fileData);
      fs.writeFileSync(filePath, contents, 'utf-8');
    }
  });
};

const main = async () => {
  await writeIdsToDocs();
};

main();
