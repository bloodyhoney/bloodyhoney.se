import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import InstagramItem from "./InstagramItem";

const Instagram = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(limit: 8, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            timestamp
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300, quality: 70) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.allInstaNode.edges.map((post) => {
          return <InstagramItem key={post.node.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Instagram;
