/* eslint react/prop-types: 0 */
import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialLinks({ fill }) {
  return (
    <div>
      <nav className="">
        {[
          {
            url: `https://www.instagram.com/bloodyhoney_studio/`,
          },
          {
            url: `https://www.facebook.com/BloodyHoneyse`,
          },
          {
            url: `https://vimeo.com/user7138070`,
          },
          {
            url: `https://www.youtube.com/channel/UCDm4P0fqQnYWn5G8oW792qg`,
          },
          {
            url: `https://www.linkedin.com/company/bloody-honey`,
          },
        ].map((link) => (
          <SocialIcon
            className="block text-white md:inline-block w-2"
            key={link.title}
            url={link.url}
            fgColor={fill}
            bgColor="transparent"
            style={{ height: 50, width: 50 }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.title}
          </SocialIcon>
        ))}
      </nav>
    </div>
  );
}

export default SocialLinks;
