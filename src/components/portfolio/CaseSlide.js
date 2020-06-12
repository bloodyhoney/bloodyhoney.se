/* eslint react/prop-types: 0 */
import React from "react";
import VimeoPlayer from "./VimeoPlayer";

function CaseSlide({ video, text }) {
  return (
    <div className="flex h-full items-center justify-center y-auto">
      <div className="slide-item w-full h-full flex items-center justify-center flex-col md:flex-row px-8">
        {text ? (
          <div className="md:flex-1 md:px-12">
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        ) : (
          ""
        )}
        {video ? (
          <div className="md:flex-1 md:px-12 py-8 w-full">
            <div className="w-full h-full">
              <VimeoPlayer id={video} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CaseSlide;
