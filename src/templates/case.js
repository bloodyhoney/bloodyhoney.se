/* eslint react/prop-types: 0 */

import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import VimeoPlayer from "../components/portfolio/VimeoPlayer";

function portfolioItem({ data }) {
  const portfolio = data.allWordpressWpPortfolio.edges[0].node;
  const video01 = data.allWordpressWpPortfolio.edges[0].node.acf.video01;
  const video02 = data.allWordpressWpPortfolio.edges[0].node.acf.video02;
  const video03 = data.allWordpressWpPortfolio.edges[0].node.acf.video03;

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="">
        <div id="hero-image" className="">
          <Img
            sizes={{
              ...portfolio.featured_media.localFile.childImageSharp.fluid,
              aspectRatio: 16 / 9,
            }}
          />
        </div>
        <div id="content" className="flex flex-col max-w-4xl mx-auto p-16">
          <div className="w-full">
            <header>
              <h1 className="text-center font-bold text-4xl mb-8">
                <div
                  dangerouslySetInnerHTML={{ __html: portfolio.title }}
                ></div>
              </h1>
            </header>
            <div className="text-lg mb-8">
              <div
                dangerouslySetInnerHTML={{ __html: portfolio.acf.bild02 }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col">
            {video01 ? (
              <div className="w-full mb-8">
                <VimeoPlayer id={video01} />
              </div>
            ) : (
              ""
            )}

            {video02 ? (
              <div className="w-full mb-8">
                <VimeoPlayer id={video02} />
              </div>
            ) : (
              ""
            )}
            {video03 ? (
              <div className="w-full mb-8">
                <VimeoPlayer id={video03} />
              </div>
            ) : (
              ""
            )}
          </div>
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
          acf {
            bild02
            video01
          }
          title
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          slug
          date(formatString: "MMMM Do, Y")
          content
          wordpress_id
        }
      }
    }
  }
`;
