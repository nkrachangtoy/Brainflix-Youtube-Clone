import React, { Component } from "react";
import axios from "axios";
import ListComments from "./Comment";
import ListSideVideo from "./SideVideo";

// ICONS //
import playIcon from "../assets/Icons/SVG/Icon-play.svg";
import pauseIcon from "../assets/Icons/SVG/Icon-pause.svg";
import fullScreenIcon from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../assets/Icons/SVG/Icon-volume.svg";
import scrubberIcon from "../assets/Icons/SVG/Icon-scrubber-control.svg";

class MainVideo extends Component {
  //instance variables
  apiURL = "https://project-2-api.herokuapp.com";
  apiKEY = "45a8230c-9edb-48e2-ba52-917171c763bc";

  // Component state object
  state = {
    videos: [],
    video: {},
  };

  /**
   * Lifecycle componentDidMount method to call axios
   * Fetch initial data and store in state
   */
  componentDidMount() {
    this.getVideos(); // call getVideos method, many videos
    this.getVideos(1); // call getVideo method, single video
  }

  /**
   * This function will get videos and update state
   */
  getVideos() {
    axios
      .get(`${this.apiURL}/videos/?api_key=${this.apiKEY}`)
      .then((response) => {
        console.log(response.data);
        this.setState({});
      })
      .catch((error) => console.log(error));
  }

  /**
   * This function will get a single video and update state
   */
  getVideo(videoId) {
    axios
      .get(`${this.apiURL}/videos/${videoId}/?api_key=${this.apiKEY}`)
      .then((response) => {
        console.log(response.data);
        this.setState({});
      })
      .catch((error) => console.log(error));
  }

  /**
   * Component render method, create the UI
   */
  render() {
    return (
      <div className="comment-sidebar-wrapper">
        <div>
          <div className="video-player">
            <div className="video-player__container">
              <video poster="" className="video-player__video" src=""></video>
              <div className="video-player__controls">
                <button className="video-player__btn">
                  <img src={playIcon} alt="" />
                </button>

                <div className="video-player__progress-bar">
                  <div className="video-player__progress-timeline">
                    <img
                      className="video-player__progress-scrubber"
                      src={scrubberIcon}
                      alt=""
                    ></img>
                  </div>
                  <div className="video-player__progress-text">0:00 / 0:42</div>
                </div>

                <div className="video-player__btn-group">
                  <button className="video-player__btn">
                    <img src={fullScreenIcon} alt="" />
                  </button>
                  <button className="video-player__btn">
                    <img src={volumeIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className="video-info">
            <span className="video-info__title">{}</span>
            <div className="video-primary-info">
              <div className="video-primary-info__left-renderer">
                <span className="video-primary-info__left-renderer--channel-name">
                  By {}
                </span>
                <span className="video-primary-info__left-renderer--upload-date">
                  {/* {dateUtil.timeSince()} */}
                </span>
              </div>
              <div className="video-primary-info__right-renderer">
                <span className="video-primary-info__right-renderer--views">
                  <img
                    // src={viewIcon}
                    alt="View Icon"
                    className="video-primary-info__icon"
                  />
                  {}
                </span>
                <span className="video-primary-info__right-renderer--likes">
                  <img
                    // src={likeIcon}
                    alt="Like Icon"
                    className="video-primary-info__icon"
                  />
                  {}
                </span>
              </div>
            </div>
            <div className="video-secondary-info">
              <p className="video-secondary-info__text"></p>
            </div>
          </section>
          <section className="comments">
            <span className="comments__count">3 Comments</span>
            <div className="comments-form">
              <div className="comments-form__profile-icon"></div>
              <div className="comments-form__comment-box-wrapper">
                <form>
                  <label
                    htmlFor="addComment"
                    className="comments-form__comment-box--label"
                  >
                    JOIN THE CONVERSATION
                  </label>
                  <input
                    type="text"
                    name="addComment"
                    className="comments-form__comment-box"
                    placeholder="Write comment here"
                  />
                </form>
                <button type="submit" className="comments-form__btn">
                  COMMENT
                </button>
              </div>
            </div>
            <ListComments />
          </section>
        </div>
        <section className="related">
          <span className="related__title">NEXT VIDEO</span>
          <div className="related__video-list-wrapper">
            <ListSideVideo />
          </div>
        </section>
      </div>
    );
  }
}
export default MainVideo;
