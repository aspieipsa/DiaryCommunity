import React from 'react';
import { connect } from 'react-redux';
import { fetchEntries } from '../../actions';
import { map } from 'lodash';
import Entry from './Entry.js';
/*
import EntryOptions from './EntryOptions.js';*/

class EntryList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries(this.props.uri);
  }

  renderEntries() {
    if (this.props.entries.length === 0) return <p>No entries</p>;
    console.log(this.props.entries);
    return map(this.props.entries, entry => <Entry key={entry._id} title={entry.title} author={entry.author.name} body={entry.body} />);
  }

  render() {
    return <div className="col s8 m9">{this.renderEntries()}</div>;
  }
}

function mapStateToProps(state) {
  return { entries: state.entries };
}

export default connect(mapStateToProps, { fetchEntries })(EntryList);
