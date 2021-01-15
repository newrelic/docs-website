const { graphql } = require('@octokit/graphql');

const ORG = 'newrelic';
const PROJECT = 14;

/**
 * @typedef {Object} Column
 * @property {string} name
 * @property {number} points
 */

/**
 * @typedef {Object} Milestone
 * @property {string} title
 * @property {Column[]} columns
 */

/**
 * Fetch the current issues a given organization and project.
 * @param {string} login The Github user or organization.
 * @param {number} project The project number.
 * @returns {Promise} Raw data from Github.
 */
const fetchData = async (login, project) => {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GH_TOKEN}`,
    },
  });

  const query = `
    query ($login: String!, $project: Int!) {
      organization(login: $login) {
        project(number: $project) {
          columns(first: 10) {
            nodes {
              name
              cards {
                nodes {
                  content {
                    ... on Issue {
                      title
                      milestone {
                        id
                        title
                      }
                      labels(first: 20) {
                        nodes {
                          id
                          name
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
    }
  `;

  const data = await graphqlWithAuth(query, { login, project });

  return data;
};

/**
 * Converts the raw API response to a format we would like to store.
 * @param {object} data Raw data from Github API.
 * @returns {Milestone[]} Milestone data to be saved.
 */
const getMilestoneData = (data) => {
  const { nodes } = data.organization.project.columns;

  // flatten out the data we get back from graphQL
  const columns = nodes.map(({ name, cards }) => {
    const issues = cards.nodes.map((node) => {
      const { title, milestone, labels } = node.content;

      if (!labels) return { title, milestone, points: 0 };

      const pointsLabel = labels.nodes
        .map((label) => label.name)
        .find((name) => /^sp\:/.test(name));

      const points = pointsLabel
        ? parseInt(pointsLabel.replace('sp:', ''), 10)
        : 0;

      return {
        title,
        milestone,
        points,
      };
    });

    return { name, issues };
  });

  // milestone names ordered newest > oldest
  const milestones = [
    ...new Set(
      columns.flatMap((column) => {
        return [
          ...new Set(
            column.issues
              .map((issue) => issue.milestone)
              .filter(Boolean)
              .sort((a, b) => a.id < b.id)
              .map((milestone) => milestone.title)
          ),
        ];
      })
    ),
  ];

  // get all the milestones, with points, by column
  const allMilestoneData = milestones.reduce((acc, title) => {
    const columnData = columns.map(({ name, issues }) => ({
      name,
      points: issues
        .filter((issue) => Boolean(issue.milestone))
        .filter((issue) => issue.milestone.title === title)
        .map((issue) => issue.points)
        .reduce((sum, n) => sum + n, 0),
    }));

    return [...acc, { title, columns: columnData }];
  }, []);

  // TODO: abstract filters for ignoring data
  // return any milestone that has points in a column other than done
  return allMilestoneData.filter(
    (milestone) =>
      milestone.columns
        .filter((column) => column.name.toLowerCase() !== 'done')
        .map((column) => column.points)
        .reduce((sum, n) => sum + n, 0) > 0
  );
};

/** Entrypoint. */
const main = async () => {
  const data = await fetchData(ORG, PROJECT);
  const milestones = getMilestoneData(data);

  console.dir(milestones, { depth: null });
};

main();
