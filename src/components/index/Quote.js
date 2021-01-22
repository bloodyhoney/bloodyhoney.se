import React from "react";

function Quote({ quote }) {
  const title = quote.node.title;
  const citat = quote.node.citat.innehall;
  return (
    <div className="text-center">
      <header>
        <h3 className="text-6xl font-bold text-yellow-400">&rdquo;</h3>
      </header>
      <div className="text-pink-500 font-bold text-xl md:text-3xl pb-6 italic">
        <div dangerouslySetInnerHTML={{ __html: citat }}></div>
      </div>
      <div className="text-xl md:text-2xl text-yellow-400">- {title}</div>
    </div>
  );
}

export default Quote;
