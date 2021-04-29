import React from "react";
import Img from "gatsby-image";

export default function InstagramItem({ post }) {
  return (
    <div className="w-full">
      <a
        href={`https://www.instagram.com/p/${post.node.id}`}
        title="View on Instagram"
        target="_blank noreferrer noopener"
      >
        <Img fluid={post.node.localFile.childImageSharp.fluid} />
      </a>
    </div>
  );
}
