import React from 'react';
import Entry from './Entry.js';
import EntryForm from './EntryForm.js';
import preload from './data.json';

class EntryList extends React.Component {
  state = {
    entries: []
  };

  componentDidMount() {
    this.setState({ entries: preload.entries });
  }

  addEntry = entry => {
    let entries = this.state.entries;
    entries.push(entry);
    this.setState({ entries });
  };

  render() {
    console.log(this.state.entries);
    return (
      <div>
        {this.state.entries.map(entry => (
          <Entry entry={entry} key={entry.entryID} />
        ))}
        <EntryForm addEntry={this.addEntry} />
      </div>
    );
  }
}

export default EntryList;
