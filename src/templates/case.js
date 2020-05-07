/* eslint react/prop-types: 0 */

import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";

function portfolioItem({ data }) {
  console.log(data);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <div className="max-w-xl mx-auto my-8">
          <header className="mb-8">
            <h3 className="text-2xl font-bold "></h3>
            <div>{data.allWordpressWpPortfolio.edges[0].node.title}</div>
          </header>
          <div className="max-w-xl"></div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
}

export default portfolioItem;

export const query = graphql`
  query($slug: String!) {
    allWordpressWpPortfolio(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title

          slug
          date(formatString: "MMMM Do, Y")
          content
          wordpress_id
        }
      }
    }
  }
`;
