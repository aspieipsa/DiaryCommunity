import React from 'react';
import Entry from './Entry.js';
import EntryComment from './EntryComment.js';
import CommentForm from './CommentForm.js';

const EntryPage = props => {
  let comments = props.entry.comments.map(comment => (
    <EntryComment comment={comment} key={comment.commentID} />
  ));

  return (
    <div>
      <Entry entry={props.entry} />
      <section>{comments}</section>
      <CommentForm />
    </div>
  );
};

export default EntryPage;
