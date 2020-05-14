import React from "react";

function MainContent() {
  return (
    <main>
      <section className="video-info">
        <span className="video-info__title">BMX Rampage: 2018 Highlights</span>
        <div className="video-primary-info">
          <span className="video-primary-info__creator">By Red Cow</span>
          <span className="video-primary-info__upload-date">12/18/2018</span>
          <span className="video-primary-info__view-count">
            <img src="" alt="View Icon" />
            1,001,023
          </span>
          <span className="video-primary-info__like-count">
            <img src="" alt="Like Icon" />
            110,985
          </span>
        </div>
        <div className="video-secondary-info">
          <p className="video-secondary-info__text">
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </div>
      </section>
      <section className="comments">
        <span className="comments__count">3 Comments</span>
        <div className="comments-form">
          <div className="comments-form__profile-icon">
            Profile picture will go here
          </div>
          <input
            type="text"
            name="newComment"
            class="comments-form__comment-box"
            placeholder="Write comment here"
          />
          <button className="comments-form__btn">COMMENT</button>
        </div>
      </section>
      <section className="related">
        <span className="related__title">NEXT VIDEO</span>
        <div className="related-video">
          <div className="related-video__thumbnail">Video thumbnail</div>
          <span className="related-video__title">Video title</span>
          <span className="related-video__creator">Video creator</span>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
