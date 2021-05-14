import React from "react";
import Img from "gatsby-image";

function Quote({ quote }) {
  const title = quote.node.title;
  const citat = quote.node.citat.innehall;
  const image = quote.node.featuredImage?.node.localFile.childImageSharp.fluid;
  console.log(image);

  return (
    <div className="h-full w-full ">
      {image && <Img fluid={image} className="relative h-full w-full" />}
      {!image && (
        <div className="text-center h-full flex items-center justify-center px-8 space-y-4 py-4">
          <div>
            <header>
              <h3 className="text-6xl font-bold text-yellow-400">&rdquo;</h3>
            </header>
            <div className="text-pink-500 font-bold text-xl md:text-3xl italic">
              <div dangerouslySetInnerHTML={{ __html: citat }}></div>
            </div>
            <div className="text-xl md:text-2xl text-yellow-400">- {title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quote;
