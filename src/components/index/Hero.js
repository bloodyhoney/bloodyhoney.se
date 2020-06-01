import React from "react";

import Logo from "../../components/logo/Logo";
import { AnchorLink } from "gatsby-plugin-anchor-links";
function Hero() {
  return (
    <div id="topp" className="flex-1 video-bg">
      <div className="vimeo-wrapper">
        <iframe
          src="https://player.vimeo.com/video/316772070?background=1&autoplay=1&muted=1&loop=1&byline=0&title=0"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullscreen
        ></iframe>
      </div>
      <div className="flex flex-wrap flex-col h-full justify-center items-center text-white">
        <div className="flex flex-wrap flex-col items-center px-8">
          <div className="mb-0 w-full md:w-1/2 -ml-4">
            <Logo />
          </div>
          <div className="border-b border-4 border-white w-full md:w-1/2 mt-4 mb-8"></div>
          <div className="text-xl md:text-2xl uppercase text-center">
            Ett riktigt rävans grymt produktionsbolag
          </div>
          <div className="my-12">
            <AnchorLink
              to={`/#kontakt`}
              className="rounded-full p-4 bg-white hover:bg-pink-200 text-gray-900 transition-all duration-200"
            >
              Kontakt
            </AnchorLink>
          </div>
          <div className="ca3-scroll-down-link ca3-scroll-down-arrow w-16 h-16"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
