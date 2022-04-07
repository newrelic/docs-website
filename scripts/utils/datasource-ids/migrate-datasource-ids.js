const {
  fetchNRGraphqlResults,
} = require('../utils/datasource-ids/nr-graphql-helpers');
const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');

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

const DOCS_URL_REGEXP = /^(?=\${DOCS})(.*)'/g;

const writeIdsToDocs = async () => {
  const { data } = await fetchNRGraphqlResults({
    queryString: DATASOURCE_DOCS_URL_QUERY,
  });
  const dataSources = data?.actor?.nr1Catalog?.search?.results?.reduce(
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

  dataSources.forEach(({ id, slug }) => {
    const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const contents = fs.readFileSync(
        path.join(process.cwd(), 'src/content', `${slug}.mdx`)
      );

      const { data } = frontmatter(contents);
      console.log(data);
    }
  });
};
