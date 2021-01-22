/* eslint react/prop-types: 0 */
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Portfolio from "../components/portfolio/Portfolio";

function PortfolioPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Portfolio"
      />

      <section className="flex flex-col items-center md:flex-row">
        <Portfolio />
      </section>
    </Layout>
  );
}

export default PortfolioPage;
