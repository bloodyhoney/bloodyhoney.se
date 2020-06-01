import React from "react";

import LayoutFront from "../components/layout-front";
import SEO from "../components/seo";
import Presentation from "../components/index/Presentation";
import Portfolio from "../components/portfolio/Portfolio";
import BlogCarousel from "../components/blog/BlogCarousel";

function IndexPage() {
  return (
    <LayoutFront>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section id="portfolio">
        <Portfolio />
      </section>
      <section>
        <Presentation />
      </section>
      <section id="#blogg" className="relative">
        <BlogCarousel />
      </section>
    </LayoutFront>
  );
}

export default IndexPage;
