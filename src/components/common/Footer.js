import React from "react";
import SocialLinks from "../index/SocialLinks";

function Footer() {
  return (
    <div id="kontakt">
      <footer className="footer bg-purple-900 text-white pt-16">
        <div className="footer-inner pb-8">
          <nav className="flex flex-row p-4 max-w-6xl mx-auto text-sm md:p-8">
            <div className="flex-1">
              <div>
                <header className="mb-8">
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
            <div className="flex-1">
              <div className="w-full">
                <iframe
                  src="https://snazzymaps.com/embed/236298"
                  width="100%"
                  height="400px"
                ></iframe>
              </div>
              <br />
            </div>
          </nav>
          <div className="text-sm text-center"> </div>
        </div>
        <div className="bg-grass py-8">
          <div className="text-center mb-4">
            <SocialLinks fill={"#ffffff"} />
          </div>
          <div className="text-green-500 text-center">
            &copy; Bloodhoney {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
