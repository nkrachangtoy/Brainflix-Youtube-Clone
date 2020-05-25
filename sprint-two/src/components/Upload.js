import React from "react";

function UploadPage() {
  return (
    <div className="upload-page">
      <div className="upload-page__container">
        <span className="upload-page__title">Upload Video</span>
        <span className="upload-page__video--title">VIDEO THUMBNAIL</span>
        <img src="" className="upload-page__video--thumbnail" />
        <form>
          <label htmlFor="" className="upload-page__comment-box--label">
            TITLE YOUR VIDEO
          </label>
          <input
            type="text"
            name="videotitle"
            className="upload-page__comment-box--title"
            placeholder="Add a title to your video"
          />
          <label
            htmlFor="videoDescription"
            className="upload-page__comment-box--label"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            type="text"
            name="videoDescription"
            className="upload-page__comment-box--description"
            placeholder="Add a description of your video"
          />
          <div className="upload-page__btn-wrapper">
            <button type="submit" className="upload-page__btn">
              PUBLISH
            </button>
            <button type="submit" className="upload-page__btn">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
