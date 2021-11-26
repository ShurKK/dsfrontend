module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:1337",
    title: "Dark-Schematic",
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
      // Along with your other options...
      shouldDownloadImage: () => true,
    }
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        collectionTypes: ["action", "bio-updates", "character", "characters-relations", "episodes", "seasons"],
        singleTypes: [`homepage`],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      }
    },
  ],
};
