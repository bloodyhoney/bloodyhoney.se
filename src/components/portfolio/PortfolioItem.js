/* eslint react/prop-types: 0 */
import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

function PortfolioItem({ item }) {
  return (
    <div className="portfolio-item">
      <Link to={`portfolio/${item.node.slug}`}>
        <div className="relative group">
          <div className="z-10 overlay-effect h-100 w-100"></div>
          <div className="">
            <Img
              sizes={{
                ...item.node.featured_media.localFile.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
            />
          </div>
          <div className="info-box z-20 uppercase absolute bottom-0 left-0 w-full bg-pink-600 bg-opacity-75 text-white block px-4 py-2">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-lg">
                <div
                  dangerouslySetInnerHTML={{ __html: item.node.title }}
                ></div>
              </h2>
            </div>

            <div className="hidden group-hover:block capitalize text-sm pt-4">
              Film & TV motion graphics till Barn, dokumentärt och långfilm
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioItem;
