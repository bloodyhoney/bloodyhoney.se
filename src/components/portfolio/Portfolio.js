import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCase(limit: 8) {
        edges {
          node {
            title
            slug
            ytterligareInfo {
              omrade
              blurb
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
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
        {data.allWpCase.edges.map((item, index) => {
          return <PortfolioItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Portfolio;
