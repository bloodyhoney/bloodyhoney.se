/* eslint react/prop-types: 0 */
import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function BlogFeedItem({ post }) {
  const blogg = post.node;
  return (
    <div>
      <Link to={`blogg/${blogg.slug}`}>
        <div className="group">
          <div>
            <Img
              sizes={{
                ...blogg.featured_media.localFile.childImageSharp.fluid,
                aspectRatio: 16 / 9,
              }}
            />
          </div>
          <div className="font-bold my-2">
            {" "}
            <div dangerouslySetInnerHTML={{ __html: blogg.title }}></div>
          </div>
          <div>
            {" "}
            <div dangerouslySetInnerHTML={{ __html: blogg.excerpt }}></div>
          </div>
          <div className="text-sm text-gray-500">{blogg.date}</div>
        </div>
      </Link>
    </div>
  );
}

export default BlogFeedItem;
