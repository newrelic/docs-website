const {
  fetchNRGraphqlResults,
} = require('../utils/datasource-ids/nr-graphql-helpers');
const { fetchPaginatedGHResults } = require('./utils/github-api-helpers');
const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');
const { Command } = require('commander');
const { prop } = require('../utils/functional');
const { get } = require('lodash');

const DOCS_URL_REGEXP = /^(?=\${DOCS})(.*)'/g;

const DATASOURCE_ID_QUERY = `# gql 
query DataSourceIdQuery {
  actor {
    nr1Catalog {
      search(filter: {types: DATA_SOURCE}) {
        results {
          ... on Nr1CatalogDataSource {
            id
          }
        }
      }
    }
  }
}
`;

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

const getCommandLineOptions = () => {
  // Sets up commander to use input arguments for this scripts from the CLI or GitHub Actions - CM
  const program = new Command();
  program.option('-u, --url <url>', 'url to PR of file changes');
  program.parse(process.argv);
  return program.opts();
};

// const writeIdsToDocs = async () => {
//   const { data } = await fetchNRGraphqlResults({
//     queryString: DATASOURCE_DOCS_URL_QUERY,
//   });
//   const dataSources = data?.actor?.nr1Catalog?.search?.results?.reduce(
//     (acc, { id, metadata }) => {
//       const fullUrl = metadata?.install?.primary?.url;
//       if (fullUrl?.startsWith('${DOCS}')) {
//         const slug = fullUrl.split('${DOCS}')[1];
//         return [...acc, { id, slug }];
//       }
//       return acc;
//     },
//     []
//   );

//   dataSources.forEach(({ id, slug }) => {
//     const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
//     if (fs.existsSync(filePath)) {
//       const contents = fs.readFileSync(
//         path.join(process.cwd(), 'src/content', `${slug}.mdx`)
//       );

//       const { data } = frontmatter(contents);
//       console.log(data);
//     }
//   });
// };

// 1. Read file data
// 2. Modify frontmatter
// 3. Write file

const getFileFrontmatter = (mdxFile) => {
  const contents = fs.readFileSync(path.join(process.cwd(), mdxFile));
  const { data } = frontmatter(contents);

  return data;
};

const main = async () => {
  const options = getCommandLineOptions();
  const url = options.url || null;
  let mdxFileData;

  if (url) {
    const prFileData = await fetchPaginatedGHResults(
      url,
      process.env.GITHUB_TOKEN
    );

    mdxFileData = prFileData
      .filter((file) => path.extname(file.filename) === '.mdx')
      .filter((f) => f.status !== 'removed')
      .map(prop('filename'));

    const mdxFileFrontmatter = mdxFileData.map(getFileFrontmatter);
    const mdxFilesWithDatasources = mdxFileFrontmatter.filter(
      ({ dataSource }) => dataSource !== undefined
    );

    if (mdxFilesWithDatasources.length === 0) {
      return console.log('No files with data sources updated');
    }

    const { data } = await fetchNRGraphqlResults({
      queryString: DATASOURCE_ID_QUERY,
    });
    const ids = get(data, 'actor.nr1Catalog.search.results')?.map(
      ({ id }) => id
    );

    const invalidIds = mdxFilesWithDatasources.filter(({ dataSource }) => {
      const includesId = ids.includes(dataSource);

      return !includesId;
    });

    if (invalidIds.length === 0) {
      return console.log(`All ids match existing data sources`);
    }
    if (invalidIds.length > 0) {
      console.error(`ERROR: Found matching ids`);
      console.error(`id should be one of existing unique dataSource ids`);
      process.exit(1);
    }
  }
};

main();
