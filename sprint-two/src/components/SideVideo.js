import React from "react";
import { Link } from "react-router-dom";

function ListSideVideo(props) {
  return (
    <div className="side-video">
      <Link to="/videos/" className="side-video__link">
        <div className="side-video__thumbnail">
          <img className="side-video__thumbnail--img" src="" />
        </div>
        <div className="side-video__wrapper">
          <span className="side-video__title">{props.title}</span>
          <span className="side-video__channel">{props.channel}</span>
        </div>
      </Link>
    </div>
  );
}

export default ListSideVideo;
