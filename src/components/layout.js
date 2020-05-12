import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "../components/common/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      <Header />

      <main className="flex-1 w-full mx-auto">{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
