/* eslint react/prop-types: 0 */
import React from "react";
import VimeoPlayer from "./VimeoPlayer";

function CaseSlide({ video, text }) {
  console.log(video);

  return (
    <div className="flex h-full items-center justify-center y-auto">
      <div className="slide-item w-full h-full flex items-center justify-center flex-row px-8">
        {text ? (
          <div className="flex-1 px-12">
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        ) : (
          ""
        )}
        {video ? (
          <div className="flex-1 px-12 py-8">
            <div className="w-full">
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
