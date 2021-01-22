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
  `)
    .then((result) => {
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
    })

    .then(() => {
      return graphql(`
        {
          allWpPost(limit: 50) {
            edges {
              node {
                id
                slug
                status
              }
            }
          }
        }
      `);
    })
    .then((result) => {
      if (result.errors) {
        result.errors.forEach((e) => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const postTemplate = path.resolve(`./src/templates/post.js`);
      const blogTemplate = path.resolve(`./src/templates/blog.js`);

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWpPost.edges;
      const posts =
        process.env.NODE_ENV === "production"
          ? getOnlyPublished(allPosts)
          : allPosts;

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/blogg/${post.slug}/`,
          component: postTemplate,
          context: {
            slug: post.slug,
            limit: 50,
          },
        });
      });

      // Create a paginated blog, e.g., /, /page/2, /page/3
      paginate({
        createPage,
        items: posts,
        itemsPerPage: 9,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/blogg` : `/page`),
        component: blogTemplate,
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
