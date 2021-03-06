/* eslint react/prop-types: 0 */

import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

function newsItemTemplate({ data }) {
  let news = data.allWpPost.edges[0].node;
  console.log(news);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center blogg">
        <div className="max-w-xl mx-auto my-8">
          <header className="mb-8">
            <h3 className="text-2xl font-bold ">
              <Link to={`news/${news.slug}`}>
                <div dangerouslySetInnerHTML={{ __html: news.title }} />
              </Link>
            </h3>
          </header>

          <div>
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default newsItemTemplate;

export const query = graphql`
  query($slug: String!) {
    allWpPost(limit: 10, filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
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
          date(formatString: "MMMM Do, Y")
          content
          id
        }
      }
    }
  }
`;
