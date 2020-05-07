import { Link } from "gatsby";
import React, { useState } from "react";
import Headroom from "react-headroom";
import Logo from "./common/Logo";
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <Headroom>
      <header className="bg-black">
        <div className="flex flex-wrap items-center justify-between p-4 mx-auto md:py-4 md:px-8">
          <Link to="/">
            <div className="w-48">
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
            {[
              {
                route: `/`,
                title: `Topp`,
              },
              {
                route: `/portfolio`,
                title: `Portfolio`,
              },
              {
                route: `/om-oss`,
                title: `Om oss`,
              },
              {
                route: `/shop`,
                title: `Shop`,
              },
              {
                route: `/blogg`,
                title: `blogg`,
              },
              {
                route: `/kontakt`,
                title: `Kontakt`,
              },
            ].map((link) => (
              <Link
                className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </Headroom>
  );
}

export default Header;
