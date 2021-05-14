import React from "react";
import Img from "gatsby-image";

export default function InstagramItem({ post }) {
  return (
    <div className="w-full">
      <a
        href={post.permalink}
        title="View on Instagram"
        target="_blank noreferrer noopener"
      >
        <Img fluid={post.localFile.childImageSharp.fluid} />
      </a>
    </div>
  );
}
