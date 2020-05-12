import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../../components/logo/Logo";
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
        <div className="flex flex-col justify-center items-center px-16">
          <div className="mb-0 w-1/2 px-16">
            <Logo />
          </div>
          <div className="border-b border-4 border-white w-1/2 mt-0 mb-8"></div>
          <div className="text-2xl">{site.description}</div>
          <div className="my-12">
            <a
              href="#contact"
              className="rounded-full p-4 bg-white hover:bg-pink-200 text-gray-900 transition-all duration-200"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
