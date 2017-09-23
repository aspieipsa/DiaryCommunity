import React from 'react';
import Entry from './Entry.js';
import EntryForm from './EntryForm.js';
import EntryOptions from './EntryOptions.js';
//import preload from "./data.json";

class EntryList extends React.Component {
  state = {
    entries: []
  };

  componentDidMount() {
    this.setState({ entries: this.props.entries });
  }

  /* 
  addEntry = entry => {
    let entries = this.state.entries;
    entries.push(entry);
    this.setState({ entries });
  }; */

  render() {
    return (
      <div className="col-md-10">
        {this.state.entries.map(entry => (
          <div>
            <Entry entry={entry} key={entry.entryID} />
            <EntryOptions userURL={entry.userURL} entryID={entry.entryID} />
          </div>
        ))}
        {/*<EntryForm addEntry={this.addEntry} />*/}
      </div>
    );
  }
}

export default EntryList;
