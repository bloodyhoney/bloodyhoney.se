import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import InstagramItem from "./InstagramItem";

const Instagram = () => {
  const data = useStaticQuery(graphql`
    {
      allInstagramContent(
        limit: 8
        filter: { username: { eq: "bloodyhoney_studio" } }
      ) {
        nodes {
          id
          media_id
          permalink
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.allInstagramContent.nodes.map((post) => {
          return <InstagramItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Instagram;
