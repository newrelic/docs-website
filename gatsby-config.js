module.exports = {
  siteMetadata: {
    title: 'New Relic Documentation',
    description:
      'Description TBD',
    author: 'New Relic',
    repository: 'https://github.com/newrelic/docs-website',
    siteUrl: 'https://docs.newrelic.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        layout: {
          contentPadding: '2rem',
          maxWidth: '1700px',
        },
        newrelic: {
          configs: {
            development: {
              instrumentationType: 'proAndSPA',
              accountId: '10175106',
              trustKey: '1',
              agentID: '23865145',
              licenseKey: '528f970912',
              applicationID: '23865145',
              beacon: 'staging-bam.nr-data.net',
              errorBeacon: 'staging-bam.nr-data.net',
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
