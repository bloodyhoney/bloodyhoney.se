/* eslint react/prop-types: 0 */

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogFeedPage from "../components/blog/BlogFeedPage";
import Pagination from "../components/blog/Pagination";
import SEO from "../components/seo";

function BlogPage(props) {
  const { data, pageContext } = props;
  const { edges: posts } = data.allWpPost;

  return (
    <div className="blogg">
      <Layout>
        <SEO
          keywords={[`Bloodey Honey`, `tailwind`, `react`, `tailwindcss`]}
          title="Bloody Honey"
        />

        <BlogFeedPage posts={posts} />
        <div className="max-w-6xl mx-auto">
          <Pagination pageContext={pageContext} pathPrefix="/" />
        </div>
      </Layout>
    </div>
  );
}

export default BlogPage;

BlogPage.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
};

export const pageQuery = graphql`
  query BlogQuery($limit: Int!, $skip: Int!) {
    allWpPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 70) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          slug
          date(formatString: "Do MMMM  YYYY", locale: "Sv")
          content
        }
      }
    }
  }
`;
