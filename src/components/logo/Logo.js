import Lottie from "react-lottie";
import animationData from "../../components/logo/bloodylogo.json";
import React from "react";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Logo() {
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default Logo;
