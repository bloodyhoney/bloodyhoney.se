import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../common/Logo";
function Hero() {
  const data = useStaticQuery(graphql`
    {
      allWordpressSiteMetadata {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `);
  const site = data.allWordpressSiteMetadata.edges[0].node;

  return (
    <div className="relative video-bg">
      <div className="vimeo-wrapper">
        <iframe
          src="https://player.vimeo.com/video/316772070?background=1&autoplay=1&muted=1&loop=1&byline=0&title=0"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullscreen
        ></iframe>
      </div>
      <div className="flex flex-row h-full justify-center items-center text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-8 w-1/2">
            <Logo />
          </div>
          <div className="text-2xl">{site.description}</div>
          <div className="my-8">
            <a
              href="#contact"
              className="border border-white rounded-full p-4 hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
