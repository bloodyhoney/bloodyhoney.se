import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import InstagramItem from "./InstagramItem";

const Instagram = () => {
  const data = useStaticQuery(graphql`
    {
      allInstagramContent(
        limit: 7
        filter: { username: { eq: "bloodyhoney_studio" } }
      ) {
        nodes {
          id
          media_id
          permalink
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 400
                maxHeight: 400
                quality: 80
                cropFocus: CENTER
              ) {
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
        <div className="bg-yellow-400 h-full w-full flex flex-col justify-center items-center text-pink-600 md:text-xl">
          Follow us on Instagram
          <br />
          <a
            href="https://www.instagram.com/bloodyhoney_studio"
            className="font-bold"
          >
            @bloodyhoney_studio
          </a>
        </div>
        {data.allInstagramContent.nodes.map((post) => {
          return <InstagramItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Instagram;
