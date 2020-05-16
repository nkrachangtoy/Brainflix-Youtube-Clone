import React from "react";

function ListSideVideo({ id, title, channel, path }) {
  return (
    <div className="related-video">
      <div className="related-video__thumbnail">
        <img className="related-video__thumbnail--img" src={path} alt={title} />
      </div>
      <div className="related-video__wrapper">
        <span className="related-video__title">{title}</span>
        <span className="related-video__channel">{channel}</span>
      </div>
    </div>
  );
}

export default ListSideVideo;
