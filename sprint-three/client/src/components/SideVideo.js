import React from "react";
import { Link } from "react-router-dom";

function ListSideVideo(videos, match) {
  return (
    <div key={videos.id} className="side-video">
      <Link to={`/videos/${videos.id}`} className="side-video__link">
        <div className="side-video__thumbnail">
          <img
            className="side-video__thumbnail--img"
            src={videos.image}
            alt="Video Thumbnail"
          />
        </div>
        <div className="side-video__wrapper">
          <span className="side-video__title">{videos.title}</span>
          <span className="side-video__channel">{videos.channel}</span>
        </div>
      </Link>
    </div>
  );
}

export default ListSideVideo;
