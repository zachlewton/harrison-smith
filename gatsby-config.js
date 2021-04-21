// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/gatsby-config/
//  */

// module.exports = {
//   plugins: [
//     `gatsby-plugin-netlify-cms`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/blog`,
//         name: `markdown-pages`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/data`,
//         name: `data`,
//       },
//     },
//     {
//       resolve: `gatsby-transformer-sharp`,
//       options: {
//         // The option defaults to true
//         checkSupportedExtensions: false,
//       },
//     },
//     `gatsby-plugin-emotion`,
//     `gatsby-plugin-sass`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//         plugins: [
//           {
//             resolve: `gatsby-remark-images`,
//             options: {
//               maxWidth: 5000,
//             },
//           },
//           {
//             resolve: `gatsby-plugin-netlify-cms-paths`,
//             options: {
//               // Path to your Netlify CMS config file
//               cmsConfig: `/static/admin/config.yml`,
//             },
//           },
//         ],
//       },
//     },
//   ],
// }

const myCustomQueries = {
  xs: "(max-width: 950px)",
  sm: "(max-width: 1110px)",
  md: "(max-width: 1429px)",
  l: "(max-width: 300000000px)",

  portrait: "(orientation: portrait)",
}

module.exports = {
  siteMetadata: {
    title: `Harrison Patrick Smith`,
    url: `https://www.harrisonpatricksmith.com/`,
    image: "static/icon.png",
    author: "zach lewton",
    description: `Website for Harrison Patrick Smith's Music`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "uploads",
        path: `${__dirname}/static/assets`,
      },
    },

    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    // {
    // 	resolve: `gatsby-source-filesystem`,
    // 	options: {
    // 		name: 'images',
    // 		path: `${__dirname}/src/images`,
    // 	},
    // },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 5000,
            },
          },
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              // Path to your Netlify CMS config file
              cmsConfig: `/static/admin/config.yml`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harrison Patrick Smith`,
        title: `Harrison Patrick Smith Music`,
        short_name: `HarrisonSmithMusic`,
        start_url: `/`,

        lang: `en`,
        description: `Website for Harrison Patrick Smith's music`,
        display: `standalone`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
