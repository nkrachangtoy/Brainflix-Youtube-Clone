import React from "react";

function MainVideo() {
  return (
    <div class="video-player">
      <div class="video-player__controls">
        <button class="video-player__btn">
          <i class="fas fa-play"></i>
        </button>

        <div class="video-player__progress-bar">
          <div class="video-player__progress-timeline">
            <div class="video-player__progress-scrubber"></div>
          </div>
          <div class="video-player__progress-text">0:00 / 0:42</div>
        </div>

        <div class="video-player__btn-group">
          <button class="video-player__btn">
            <i class="fas fa-expand"></i>
          </button>
          <button class="video-player__btn">
            <i class="fas fa-volume-up"></i>
          </button>
        </div>
      </div>
      <video poster="" class="video-player__video" src=""></video>
    </div>
  );
}
export default MainVideo;
