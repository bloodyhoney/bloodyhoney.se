const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { paginate } = require("gatsby-awesome-pagination");

const getOnlyPublished = (edges) =>
  _.filter(edges, ({ node }) => node.status === "publish");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWpCase(limit: 8) {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const caseTemplate = path.resolve(`./src/templates/case.js`);

    // Create an Artist for each WordPress Artist
    _.each(result.data.allWpCase.edges, ({ node: portfolioItem }) => {
      createPage({
        path: `/portfolio/${portfolioItem.slug}/`,
        component: caseTemplate,
        context: {
          slug: portfolioItem.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
