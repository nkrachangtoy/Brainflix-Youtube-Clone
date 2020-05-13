import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <video src="{props.video}" className="hero__video"></video>
    </div>
  );
}

export default Hero;
