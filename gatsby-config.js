/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `programmer = [ "python", "django", "js", "react", "react-native", "css, "apis" ]`,
    description: `Portfolio of Shekhar K. Sharma, a seasoned user experience designer, and a full-stack web developer.`,
    author: `absqueued`,
    image: `https://www.shekhardesigner.com/og_card.png`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Abril Fatface\:400`,
          `Quicksand\:300,500`,
          `Stalemate`,
          `Tillana`
        ],
        display: `swap`
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ne`, `fr`],
        defaultLanguage: `en`,
        redirect: true,
      }
    }
  ]
}
