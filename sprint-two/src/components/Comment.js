import React from "react";
import dateUtil, { timeSince } from "./dateUtil";

function ListComments({ key, id, name, timestamp, comment }) {
  return (
    <ul className="comments-list">
      <li key={id} className="comments-list__item">
        <div className="comments-list__item--profile-icon"></div>
        <span className="comments-list__item--name">{name}</span>
        <span className="comments-list__item--date">{timestamp}</span>
        <span className="comments-list__item--comment">{comment}</span>
      </li>
    </ul>
  );
}

export default ListComments;
