module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:1337",
    title: "Dark-Schematic",
    description: "Website dedicated to the NetFlix series called Dark. Complicated bundle of time travels and their dependencies"
  },
  plugins: [
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
        singleTypes: [`homepage`, `header`],
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
