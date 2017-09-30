import React from 'react';
import Entry from './Entry.js';
import EntryForm from './EntryForm.js';
import EntryOptions from './EntryOptions.js';

class EntryList extends React.Component {
  state = {
    entries: [],
    isLoggedIn: false
  };

  componentDidMount() {
    console.log('Mounted');
    console.log(this.props.location.state.detail);
    fetch(this.props.fetchRoute + this.props.userURL)
      .then(res => res.json())
      .then(promiseValue => {
        if (promiseValue === false) {
          this.setState({ isLoggedIn: false });
        } else {
          this.setState({ entries: promiseValue });
        }
      });
  }

  render() {
    let contentToDisplay = <h1>Not logged in!</h1>;

    if (this.state.isLoggedIn)
      contentToDisplay = (
        <div className="col-md-10">
          {this.state.entries.map(entry => (
            <div key={entry._id}>
              <Entry
                author={entry.author}
                title={entry.title}
                body={entry.body}
              />
              <EntryOptions userURL={this.props.userURL} entryID={entry._id} />
            </div>
          ))}
        </div>
      );

    return contentToDisplay;
  }
}

export default EntryList;
