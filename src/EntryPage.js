import React from 'react';
import Entry from './components/Entry.js';
import EntryComment from './components/EntryComment.js';
import CommentForm from './components/CommentForm.js';
import SideBar from './components/SideBar.js';

/* EntryPage represents a diary page containing a single entry, its comments, the comment form to add a new comment, and the sidebar. */
class EntryPage extends React.Component {
  state = {
    data: { comments: [] }
  };

  componentDidMount() {
    fetch(this.props.fetchRoute + this.props.userURL + '/' + this.props.entryID)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    let comments = this.state.data.comments.map(comment => (
      <EntryComment comment={comment} key={comment._id} />
    ));

    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <div className="col-md-10">
            <Entry
              author={this.state.data.author}
              title={this.state.data.title}
              body={this.state.data.body}
            />
            <section>{comments}</section>
            <CommentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default EntryPage;
