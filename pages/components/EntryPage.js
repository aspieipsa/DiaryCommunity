import React from 'react';
import Entry from './Entry.js';
import EntryComment from './EntryComment.js';
import CommentForm from './CommentForm.js';
import SideBar from './SideBar.js';

/* EntryPage represents a diary page containing a single entry, its comments, the comment form to add a new comment, and the sidebar. */
const EntryPage = props => {
  let comments = props.entry.comments.map(comment => (
    <EntryComment comment={comment} key={comment.commentID} />
  ));

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="col-md-10">
          <Entry entry={props.entry} />
          <section>{comments}</section>
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
