import React from 'react';
import './css/CommentForm.css';

class CommentForm extends React.Component {
  state = {
    commentAuthor: 'Simoroshka',
    commentBody: ''
  };

  handleTextAreaOnChange = event => {
    this.setState({ commentBody: event.target.value });
  };

  handleSubmitOnClick = () => {
    let comment = {
      body: this.state.commentBody,
      author: this.state.commentAuthor
    };

    this.props.addComment(comment);
  };

  render() {
    return (
      <div className="comment-form--form">
        <h2>Add a comment: </h2>
        <textarea
          className="comment-form--body"
          onChange={this.handleTextAreaOnChange}
          value={this.state.commentBody}
        />
        <button
          className="comment-form--button"
          onClick={this.handleSubmitOnClick}
        >
          Submit
        </button>
        <button className="comment-form--button" type="cancel">
          Cancel
        </button>
      </div>
    );
  }
}

export default CommentForm;
