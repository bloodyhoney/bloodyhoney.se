import React from "react";

import LayoutFront from "../components/layout-front";
import SEO from "../components/seo";
import Presentation from "../components/index/Presentation";
import Hero from "../components/index/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import BlogCarousel from "../components/blog/BlogCarousel";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section>
        <Hero />
      </section>

      <section>
        <Portfolio />
      </section>
      <section>
        <Presentation />
      </section>
      <section className="relative">
        <BlogCarousel />
      </section>
    </Layout>
  );
}

export default IndexPage;
