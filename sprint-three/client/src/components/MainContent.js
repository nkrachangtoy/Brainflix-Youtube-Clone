import React, { Component } from "react";
import axios from "axios";

// ICONS //
import playIcon from "../assets/Icons/SVG/Icon-play.svg";
import pauseIcon from "../assets/Icons/SVG/Icon-pause.svg";
import fullScreenIcon from "../assets/Icons/SVG/Icon-fullscreen.svg";
import volumeIcon from "../assets/Icons/SVG/Icon-volume.svg";
import scrubberIcon from "../assets/Icons/SVG/Icon-scrubber-control.svg";
import likeIcon from "../assets/Icons/SVG/Icon-likes.svg";
import viewIcon from "../assets/Icons/SVG/Icon-views.svg";
import ListComments from "./Comment";
import ListSideVideo from "./SideVideo";
import dateUtil, { timeSince } from "./dateUtil";

class MainContent extends Component {
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
    this.getVideo(); // call getVideo method, single video
  }

  componentDidUpdate(prevProps) {
    const oldVideoId = prevProps.match.params.videoId;
    const newVideoId = this.props.match.params.videoId;

    console.log(oldVideoId, newVideoId);
    if (newVideoId !== oldVideoId) {
      this.getVideo(newVideoId);
    }
  }

  /**
   * This function will get videos and update state
   */
  getVideos() {
    axios
      .get(`/videos`)
      .then((response) => {
        console.log(response.data);
        this.setState({ videos: response.data });
      })
      .catch((error) => console.log(error));
  }

  /**
   * This function will get a single video and update state
   */
  getVideo(videoId) {
    if (videoId === undefined) {
      videoId = "1af0jruup5gu";
    }
    axios
      .get(`/videos/${videoId}`)
      .then((response) => {
        this.setState({ video: response.data });
      })

      .catch((error) => console.log(error));
  }

  /**
   * Component render method, create the UI
   */

  render() {
    console.log(this.state);
    const {
      id,
      title,
      channel,
      image,
      video,
      description,
      views,
      likes,
      duration,
      timestamp,
      comments,
    } = this.state.video;
    const { videos } = this.state;

    if (id === undefined) {
      return <p>Loading</p>;
    }

    if (comments === undefined) {
      return <p>Loading Comments</p>;
    }

    if (video === undefined) {
      return <p>Loading Side Videos</p>;
    }

    return (
      <main>
        <div className="video-player">
          <div className="video-player__container">
            <video poster={image} className="video-player__video"></video>
            <div className="video-player__controls">
              <button className="video-player__btn">
                <img src={playIcon} alt="Play Button" />
              </button>

              <div className="video-player__progress-bar">
                <div className="video-player__progress-timeline">
                  <img
                    className="video-player__progress-scrubber"
                    src={scrubberIcon}
                    alt="Progress scrubber"
                  />
                </div>
                <div className="video-player__progress-text">
                  0:00 / {duration}
                </div>
              </div>

              <div className="video-player__btn-group">
                <button className="video-player__btn">
                  <img src={fullScreenIcon} alt="Fullscreen Button" />
                </button>
                <button className="video-player__btn">
                  <img src={volumeIcon} alt="Volume Control Button" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-wrapper">
          <div>
            <section className="video-info">
              <span className="video-info__title">{title}</span>
              <div className="video-primary-info">
                <div className="video-primary-info__left-renderer">
                  <span className="video-primary-info__left-renderer--channel-name">
                    By {channel}
                  </span>
                  <span className="video-primary-info__left-renderer--upload-date">
                    {dateUtil.timeSince(timestamp)}
                  </span>
                </div>
                <div className="video-primary-info__right-renderer">
                  <span className="video-primary-info__right-renderer--views">
                    <img
                      src={viewIcon}
                      alt="View Icon"
                      className="video-primary-info__icon"
                    />
                    {views}
                  </span>
                  <span className="video-primary-info__right-renderer--likes">
                    <img
                      src={likeIcon}
                      alt="Like Icon"
                      className="video-primary-info__icon"
                    />
                    {likes}
                  </span>
                </div>
              </div>
              <div className="video-secondary-info">
                <p className="video-secondary-info__text">{description}</p>
              </div>
            </section>
            <section className="comments">
              <span className="comments__count">
                {comments.length} Comments
              </span>
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
                  <button
                    type="submit"
                    id="commentCount"
                    className="comments-form__btn"
                  >
                    COMMENT
                  </button>
                </div>
              </div>
              <ul className="comments-list">
                {comments.map((defaultComment) => (
                  <ListComments
                    key={defaultComment.id}
                    id={defaultComment.id}
                    name={defaultComment.name}
                    timestamp={defaultComment.timestamp}
                    comment={defaultComment.comment}
                  />
                ))}
              </ul>
            </section>
          </div>
          <aside className="side-videos">
            <span className="side-videos__title">NEXT VIDEO</span>
            <div className="side-videos-list-wrapper">
              {videos
                .filter((video) => video.id !== id)
                .map((props) => (
                  <ListSideVideo videos={videos} {...props} />
                ))}
            </div>
          </aside>
        </div>
      </main>
    );
  }
}

export default MainContent;
