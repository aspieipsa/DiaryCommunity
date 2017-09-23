import React from 'react';
import './css/EntryComment.css';

const EntryComment = props => {
  return (
    <div className="entry-comment--comment-box">
      <p className="entry-comment--comment-author">
        <a href="#">{props.comment.author}</a> said:
      </p>
      <p className="entry-comment--comment-body">{props.comment.body}</p>
    </div>
  );
};

export default EntryComment;
