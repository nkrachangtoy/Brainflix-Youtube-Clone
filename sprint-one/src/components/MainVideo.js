import React from "react";
import playIcon from "../assets/Icons/SVG/Icon-play.svg";
import pauseIcon from "../assets/Icons/SVG/Icon-pause.svg";
import fullScreenIcon from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../assets/Icons/SVG/Icon-volume.svg";
import scrubberIcon from "../assets/Icons/SVG/Icon-scrubber-control.svg";
import poster from "../assets/Images/video-list-0.jpg";

function MainVideo(mainVideo) {
  return (
    <div className="video-player">
      <div className="video-player__controls">
        <button className="video-player__btn">
          <img src={playIcon} alt=""></img>
        </button>

        <div className="video-player__progress-bar">
          <div className="video-player__progress-timeline">
            <img
              className="video-player__progress-scrubber"
              src={scrubberIcon}
              alt=""
            ></img>
          </div>
          <div className="video-player__progress-text">
            0:00 /{mainVideo.duration}
          </div>
        </div>

        <div className="video-player__btn-group">
          <button className="video-player__btn">
            <img src={fullScreenIcon} alt=""></img>
          </button>
          <button className="video-player__btn">
            <img src={volumeIcon} alt=""></img>
          </button>
        </div>
      </div>
      <video poster={poster} className="video-player__video" src=""></video>
    </div>
  );
}
export default MainVideo;
