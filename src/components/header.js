import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "./logo/Logo";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Scrollspy from "react-scrollspy";
import Headroom from "react-headroom";
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <Headroom>
      <header id="#top" className="bg-black bg-opacity-75">
        <div className="flex flex-wrap items-center justify-between p-4 mx-auto md:py-2 uppercase md:px-8">
          <Link to="/">
            <div className="w-48 -mb-2">
              <Logo />
            </div>
          </Link>

          <button
            className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
          >
            <Scrollspy
              items={["topp", "portfolio", "om", "blogg", "kontakt"]}
              currentClassName="font-bold"
            >
              {[
                {
                  route: `/#topp`,
                  title: `Topp`,
                },
                {
                  route: `/#portfolio`,
                  title: `Portfolio`,
                },
                {
                  route: `#om`,
                  title: `Om oss`,
                },
                {
                  route: `/#blogg`,
                  title: `Blogg`,
                },
                {
                  route: `/#kontakt`,
                  title: `Kontakt`,
                },
              ].map((link) => (
                <AnchorLink
                  className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
                  key={link.title}
                  to={link.route}
                  activeClassName="font-bold"
                >
                  {link.title}
                </AnchorLink>
              ))}
            </Scrollspy>
          </nav>
        </div>
      </header>
    </Headroom>
  );
}

export default Header;
