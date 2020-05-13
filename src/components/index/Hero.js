import React from "react";

import Logo from "../../components/logo/Logo";
function Hero() {
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
          <div className="mb-0 hero-logo">
            <Logo />
          </div>
          <div className="border-b border-4 border-white w-full mt-4 mb-8"></div>
          <div className="text-2xl uppercase">
            Ett riktigt rävans grymt produktionsbolag
          </div>
          <div className="my-12">
            <a
              href="#kontakt"
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
