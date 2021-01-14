const { graphql } = require('@octokit/graphql');

const ORG = 'newrelic';

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_TOKEN}`,
  },
});

const main = async () => {
  const resp = await graphqlWithAuth(
    `query ($login: String!) {
      organization(login: $login) {
        repositories {
          totalCount
        }
      }
    }`,
    { login: ORG }
  );

  console.log(resp);
};

main();
