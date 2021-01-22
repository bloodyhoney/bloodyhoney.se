/* eslint react/prop-types: 0 */

import React from "react";

function VimeoPlayer({ id }) {
  return (
    <div className="embed-container w-full h-full">
      <iframe
        title="vimeo-player"
        src={`https://player.vimeo.com/video/${id}/`}
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default VimeoPlayer;
