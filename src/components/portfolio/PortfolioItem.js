/* eslint react/prop-types: 0 */
import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

function PortfolioItem({ item }) {
  return (
    <div className="">
      <Link to={`portfolio/${item.node.slug}`}>
        <div className="relative group">
          <div>
            <Img
              sizes={{
                ...item.node.featured_media.localFile.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-pink-400 bg-opacity-75 text-white  block p-2">
            <h2>
              <div dangerouslySetInnerHTML={{ __html: item.node.title }}></div>
            </h2>

            <div className="hidden group-hover:block">
              Film & TV motion graphics till Barn, dokumentärt och långfilm
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioItem;
