module.exports = {
  siteMetadata: {
    title: `Vashon Motorworks`,
    description: `Automotive and general mechanic services provided by Vashon Motorworks.`,
    author: `Bobby House`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon/hdpi/Favicon.png`, // This path is relative to the root of the site.
      },
    }, {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
            fonts: [{
                family: 'Pacifico'
            }, {
                family: 'Work Sans',
            }]
        }

    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
