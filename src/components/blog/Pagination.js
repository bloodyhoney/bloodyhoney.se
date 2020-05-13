/* eslint react/prop-types: 0 */

import React from "react";
import { Link } from "gatsby";

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <div>
      <nav className="pagination pt-8 mx-auto w-full py-8" role="navigation">
        <div
          className={`${
            previousPagePath ? `justify-between` : `justify-end`
          } flex flex-row `}
        >
          {previousPagePath && (
            <div className="navbar-item bg-white rounded-full text-black font-bold py-3 px-6">
              <Link to={previousPagePath} rel="prev">
                Föregående sida
              </Link>
            </div>
          )}
          {nextPagePath && (
            <div className="navbar-item bg-white rounded-full text-black font-bold py-3 px-6">
              <Link to={nextPagePath} rel="next">
                Nästa sida
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
