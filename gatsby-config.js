module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-algolia',
      options: {
        appId: 'A8AA6VFYQ9',
        apiKey: '52c14cf75c582fbc28aa2ce96c65d0fc',
        index: 'Car_production',
        facets: ['make', 'colour', 'price', 'year'],
        hitsPerPage: 21,
        pages: ['new', 'used', 'demo'],
        template: 'src/components/carsIndex.js'
      }
    },
  ],
}
