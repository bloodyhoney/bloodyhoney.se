import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Quotes from "./Quotes";
function Presentation() {
  const data = useStaticQuery(graphql`
    {
      wpPage(id: {}, slug: { eq: "det-har-ar-bloody-honey" }) {
        id
        content
      }
    }
  `);
  const post = data.wpPage;
  return (
    <div className="lg:flex testimonials">
      <div className="flex items-center lg:w-1/2 p-4 md:p-16 mango-gradient text-yellow-400">
        <div className="">
          <header id="om">
            <div className="text-xl">Det här är</div>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Bloody Honey
            </h3>
          </header>
          <div className="text-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        </div>
      </div>
      <div className="flex-1  lg:w-1/2  bg-gray-900 box text-gray-600 ">
        <div className="w-full h-full">
          <Quotes />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
