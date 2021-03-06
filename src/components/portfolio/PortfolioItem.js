/* eslint react/prop-types: 0 */
import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

function PortfolioItem({ item }) {
  return (
    <div className="portfolio-item group">
      <Link to={`/portfolio/${item.node.slug}`}>
        <div className="relative overflow-hidden">
          <div className="z-10 overlay-effect h-100 w-100"></div>
          <div className="">
            <Img
              sizes={{
                ...item.node.featuredImage.node.localFile.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
            />
          </div>
          <div className="info-box z-20 uppercase absolute bottom-0 left-0 w-full  text-white block px-4">
            <div className="portfolio-title">
              <h2 className="font-bold text-lg pt-2 pb-1">
                {item.node.ytterligareInfo?.omrade}
              </h2>
            </div>
            <div className="content">
              <div className="capitalize text-sm pt-1 pb-2">
                {item.node.ytterligareInfo?.blurb}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioItem;
