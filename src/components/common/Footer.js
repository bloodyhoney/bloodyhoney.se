import React from "react";
import SocialLinks from "../index/SocialLinks";

function Footer() {
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
                <h3 className="font-bold text-xl">Charlotte</h3>
                <p>
                  Chefen &amp; creative director
                  <br />
                  <a href="mailto:charlotte@bloodyhoney.se">
                    charlotte@bloodyhoney.se
                  </a>
                  , 070-483 62 88
                </p>
                <h3 className="font-bold text-xl">Emma</h3>
                <div>
                  Kreativ projektledare
                  <br />
                  <a href="mailto:emma@bloodyhoney.se">emma@bloodyhoney.se</a>,
                  073-597 39 10<p></p>
                  <h3 className="font-bold text-xl">Brian</h3>
                  <p>
                    Engelsk copy med extra allt
                    <br />
                    <a href="mailto:brian@bloodyhoney.se">
                      brian@bloodyhoney.se
                    </a>
                    , 070-422 48 70
                  </p>
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
