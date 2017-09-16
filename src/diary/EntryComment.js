import React from 'react';

const EntryComment = props => {
  return (
    <div>
      <p>{props.comment.author} said:</p>
      <p>{props.comment.body}</p>
    </div>
  );
};

export default EntryComment;
