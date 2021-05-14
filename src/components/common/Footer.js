import React from "react";
import SocialLinks from "../index/SocialLinks";
import { useStaticQuery, graphql } from "gatsby";

function Footer() {
  const data = useStaticQuery(graphql`
    {
      wpPage(id: {}, slug: { eq: "contact" }) {
        id
        content
      }
    }
  `);
  const post = data.wpPage;
  return (
    <div id="kontakt">
      <footer className="footer text-white">
        <div className="footer-inner  md:pb-24 ">
          <div className="flex flex-col md:flex-row p-4 pb-16 md:pb-0 mx-auto text-sm  px-8 md:px-16">
            <div className="flex-1 flex">
              <div className="pb-8">
                <header className="mb-8  pt-4 md:pt-8">
                  <h3 className="font-bold text-3xl">Bloody Beasts</h3>
                  <h2 className="font-bold text-2xl">and where to find us</h2>
                </header>
                <div className="user-content contact">
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
              </div>
            </div>
            <div className="flex-1 pt-4 md:pt-8">
              <div className="w-full max-w-2xl">
                <iframe
                  src="https://snazzymaps.com/embed/236298"
                  width="100%"
                  height="300px"
                ></iframe>
              </div>
              <br />
              <p>
                <strong>T:</strong> +46 70-483 62 88 <strong>E:</strong>{" "}
                <a href="mailto:charlotte@bloodyhoney.se">
                  hello@bloodyhoney.se
                  <br />
                </a>
                <strong>Besök oss:</strong> Södra Förstadsgatan 63, 214 20 Malmö
              </p>
            </div>
          </div>
          <div className="text-sm text-center"> </div>
        </div>
      </footer>
      <div className="bg-grass py-2 -mt-1">
        <div className="flex flex-row md:px-16 items-center justify-center md:justify-start pb-2">
          <div className="flex flex-col md:flex-row items-center pb-2">
            <div className="md:-ml-2">
              <SocialLinks fill={"#ffffff"} />
            </div>
            <div className="text-white font-bold text-center md:ml-8">
              &copy; Bloodhoney {new Date().getFullYear()}.
            </div>
            <div className="text-white font-normal text-center px-1">
              Hemsida:{" "}
              <a href="https://www.olleburlin.se" className="font-bold">
                Olle Burlin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
