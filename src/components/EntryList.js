import React from 'react';
import Entry from './Entry.js';
import EntryForm from './EntryForm.js';
import EntryOptions from './EntryOptions.js';

class EntryList extends React.Component {
  state = {
    entries: []
  };

  componentDidMount() {
    fetch(this.props.fetchRoute + this.props.userURL)
      .then(res => res.json())
      .then(entries => this.setState({ entries }));
  }

  render() {
    return (
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
  }
}

export default EntryList;
