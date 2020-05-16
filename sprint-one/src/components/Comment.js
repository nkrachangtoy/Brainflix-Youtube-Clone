import React from "react";

function ListComments({ id, name, timestamp, comment, likes }) {
  return (
    <ul className="comments-list">
      <li className="comments-list__item">
        <div className="comments-list__profile-icon"></div>
        <span className="comments-list__item--name">{name}</span>
        <span className="comments-list__item--date">{timestamp}</span>
        <span className="comments-list__item--comment">{comment}</span>
      </li>
    </ul>
  );
}

export default ListComments;
