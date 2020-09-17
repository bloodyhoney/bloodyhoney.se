import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPortfolio(
        limit: 8
        sort: { fields: acf___case_kategori___term_order }
      ) {
        edges {
          node {
            title
            slug
            acf {
              case_kategori {
                name
                slug
              }
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 70) {
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
