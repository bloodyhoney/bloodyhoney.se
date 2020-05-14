import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./common/Footer";
import Hero from "./index/Hero";

function LayoutFront({ children }) {
  return (
    <div>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <div>
          <Header />
        </div>
        <div className="flex flex-grow">
          <Hero />
        </div>
      </div>
      <main className="flex-1 w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

LayoutFront.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFront;
