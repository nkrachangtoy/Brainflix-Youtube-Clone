import React from "react";
import likeIcon from "../assets/Icons/SVG/Icon-likes.svg";
import viewIcon from "../assets/Icons/SVG/Icon-views.svg";
import ListComments from "./Comment";
import ListSideVideo from "./SideVideo";
import dateUtil, { timeSince } from "./dateUtil";

export default function MainContent({
  commentData,
  mainVideo,
  sideVideo,
  count,
}) {
  return (
    <main>
      <section className="video-info">
        <span className="video-info__title">{mainVideo.title}</span>
        <div className="video-primary-info">
          <div className="video-primary-info__left-renderer">
            <span className="video-primary-info__left-renderer--channel-name">
              By {mainVideo.channel}
            </span>
            <span className="video-primary-info__left-renderer--upload-date">
              {dateUtil.timeSince(mainVideo.timestamp)}
            </span>
          </div>
          <div className="video-primary-info__right-renderer">
            <span className="video-primary-info__right-renderer--views">
              <img
                src={viewIcon}
                alt="View Icon"
                className="video-primary-info__icon"
              />
              {mainVideo.views}
            </span>
            <span className="video-primary-info__right-renderer--likes">
              <img
                src={likeIcon}
                alt="Like Icon"
                className="video-primary-info__icon"
              />
              {mainVideo.likes}
            </span>
          </div>
        </div>
        <div className="video-secondary-info">
          <p className="video-secondary-info__text">{mainVideo.description}</p>
        </div>
      </section>
      <section className="comments">
        <span className="comments__count">{count} Comments</span>
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
              <button
                type="submit"
                id="commentCount"
                // onSubmit={handleClick}
                className="comments-form__btn"
              >
                COMMENT
              </button>
            </form>
          </div>
        </div>
        {commentData.map((defaultComment) => (
          <ListComments
            key={defaultComment.id}
            id={defaultComment.id}
            name={defaultComment.name}
            timestamp={defaultComment.timestamp}
            comment={defaultComment.comment}
          />
        ))}
      </section>
      <section className="related">
        <span className="related__title">NEXT VIDEO</span>
        <div className="related__video-list-wrapper">
          {sideVideo.map((video) => (
            <ListSideVideo
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              path={video.path}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
