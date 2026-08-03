require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `corsham-office-rentals`,
    siteUrl: `https://corshamofficerentals.co.uk`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'chergncb',
        dataset: 'production',
        watchMode: false,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: 'chergncb',
        dataset: 'production',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
