import React from "react";

import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <div>
        <h2 className="bg-yellow-400 text-2xl font-bold text-center  my-8 p-3">
          404
        </h2>
      </div>
    </>
  );
}

export default NotFoundPage;
