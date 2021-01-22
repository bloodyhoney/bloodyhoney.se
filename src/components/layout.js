import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "../components/common/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-black text-white">
      <Header />

      <main className="w-full">{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
