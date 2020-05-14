import React from "react";

function MainContent(props) {
  return (
    <main>
      <section className="video-info">
        <span className="video-info__title">BMX Rampage: 2018 Highlights</span>
        <div className="video-primary-info">
          <span className="video-primary-info__creator">By Red Cow</span>
          <span className="video-primary-info__upload-date">12/18/2018</span>
          <span className="video-primary-info__view-count">
            <img src="" alt="View Icon" className="video-primary-info__icon" />
            1,001,023
          </span>
          <span className="video-primary-info__like-count">
            <img src="" alt="Like Icon" className="video-primary-info__icon" />
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
          <div className="comments-form__profile-icon"></div>
          <div className="comments-form__comment-box--wrapper">
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
                class="comments-form__comment-box"
                placeholder="Write comment here"
              />
            </form>
            <button className="comments-form__btn">COMMENT</button>
          </div>
        </div>
        <ul className="comments-list">
          <li className="comments-list__item">
            <div className="comments-list__profile-icon"></div>
            <span className="comments-list__item--name">{props.name[0]}</span>
            <span className="comments-list__item--date">{props.date[0]}</span>
            <span className="comments-list__item--comment">
              {props.comment[0]}
            </span>
          </li>
          <li className="comments-list__item">
            <div className="comments-list__profile-icon"></div>
            <span className="comments-list__item--name">{props.name[1]}</span>
            <span className="comments-list__item--date">{props.date[1]}</span>
            <span className="comments-list__item--comment">
              {props.comment[1]}
            </span>
          </li>
          <li className="comments-list__item">
            <div className="comments-list__profile-icon"></div>
            <span className="comments-list__item--name">{props.name[2]}</span>
            <span className="comments-list__item--date">{props.date[2]}</span>
            <span className="comments-list__item--comment">
              {props.comment[2]}
            </span>
          </li>
        </ul>
      </section>
      <section className="related">
        <span className="related__title">NEXT VIDEO</span>
        <div className="related-video">
          <div className="related-video__thumbnail"></div>
          <div className="related-video__wrapper">
            <span className="related-video__title">
              Become A Travel Pro In One Easy Lesson
            </span>
            <span className="related-video__creator">Todd Welch</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
