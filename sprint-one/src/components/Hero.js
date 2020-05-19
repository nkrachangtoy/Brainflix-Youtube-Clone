import React from "react";
import MainVideo from "./MainVideo";

function Hero({ mainVideo }) {
  return (
    <div className="hero">
      <MainVideo
        duration={mainVideo.duration}
        path={mainVideo.path}
        video={mainVideo.video}
      />
    </div>
  );
}

export default Hero;
