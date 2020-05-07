import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPortfolio(limit: 8) {
        edges {
          node {
            title
            slug
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="w-full parent">
        {data.allWordpressWpPortfolio.edges.map((item, index) => {
          return <PortfolioItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Portfolio;
