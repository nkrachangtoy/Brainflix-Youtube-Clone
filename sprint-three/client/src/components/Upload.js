import React from "react";
import PreviewImage from "../assets/Images/Upload-video-preview.jpg";
class UploadPage extends React.Component {
  handleSubmit = (e) => {
    const videoTitle = e.target.value;
    const videoDescription = e.target.value;
    this.setState({
      title: videoTitle,
      description: videoDescription,
    });
  };

  render() {
    return (
      <div className="upload-page">
        <span className="upload-page__title">Upload Video</span>
        <div className="upload-page__container">
          <div className="upload-page__video-wrapper">
            <span className="upload-page__video--title">VIDEO THUMBNAIL</span>
            <img
              src={PreviewImage}
              className="upload-page__video--thumbnail"
              alt="Video Thumbnail"
            />
          </div>
          <form className="upload-page__form-wrapper">
            <label
              htmlFor="videoTitle"
              className="upload-page__comment-box--label"
            >
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              name="videoTitle"
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
          </form>
        </div>
        <div className="upload-page__btn-wrapper">
          <button
            type="submit"
            onSubmit={this.handleSubmit}
            className="upload-page__btn--publish"
          >
            PUBLISH
          </button>
          <button type="submit" className="upload-page__btn--cancel">
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}

export default UploadPage;
