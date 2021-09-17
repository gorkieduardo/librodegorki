module.exports = {
  siteMetadata: {
    title: `El blog de Gorki`,
    description: `Este es un blog dedicado a los saberes necesarios: leer, redactar, calcular, diseñar...`,
    author: `@gorkieduardo`,
  },
  plugins: [
    "gatsby-plugin-emotion",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/incons/ 
        }
      }
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "7b9d88e12d19c7788b5780814e2718",
      },
      
    },
    
  ],
  
}
