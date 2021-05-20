/* eslint react/prop-types: 0 */
import React from "react";
import VimeoPlayer from "./VimeoPlayer";

function CaseSlide({ video, text, color }) {
  console.log(color);
  return (
    <div className="h-full max-w-6xl mx-auto md:px-4">
      <div className="slide-item  flex flex-col h-full h-screen justify-center items-center  px-8">
        {text ? (
          <div className="md:px-12 bg-black text-white bg-opacity-25 p-4 relative overflow-scroll md:overflow-visible mt-24 mb-12 ">
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        ) : (
          ""
        )}
        {video ? (
          <div className="md:flex-1 md:px-12 py-8 h-full relative w-full ">
            <div className="w-full h-full flex flex-col justify-center items-center">
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
