/* eslint react/prop-types: 0 */
import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";

function PortfolioItem({ item }) {
  const excerptRaw = item.node.excerpt;

  const excerpt = excerptRaw;
  const trimmedExcerpt = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
  };

  return (
    <div className="blog-item w-full">
      <Link to={`/${item.node.slug}`}>
        <div className="relative overflow-hidden group m-0 md:m-4">
          <div>
            <Img
              sizes={{
                ...item.node.featuredImage.node.localFile.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
            />
          </div>
          <div className="info-box z-20 uppercase absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-75 text-white block px-4">
            <div className="portfolio-title">
              <h2 className="font-bold text-md pt-2 pb-1">
                <div
                  dangerouslySetInnerHTML={{ __html: item.node.title }}
                ></div>
              </h2>
            </div>
            <div className="content">
              <div className="capitalize text-sm pt-1 pb-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: trimmedExcerpt(excerpt, 100),
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioItem;
