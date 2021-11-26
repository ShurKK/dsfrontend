/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          path: require.resolve("path-browserify"),
        },
        fallback: {
          fs: false,
        },
      },
    })
    if (stage === "build-javascript" || stage === "develop") {
      actions.setWebpackConfig({
        plugins: [plugins.provide({ process: "process/browser" })],
      })
    }
  }
  
