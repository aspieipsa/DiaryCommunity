import React from "react";
import { connect } from "react-redux";
import { fetchEntries } from "../../actions";
import _ from "lodash";
import Entry from "./Entry.js";
/*
import EntryOptions from './EntryOptions.js';*/

class EntryList extends React.Component {
  componentDidMount() {
    this.props.fetchEntries(this.props.customURL);
  }

  renderEntries() {
    return _.map(this.props.entries, entry => (
      <Entry
        key={entry.id}
        title={entry.title}
        author={entry.author}
        body={entry.body}
      />
    ));
  }

  render() {
    return <div className="container">{this.renderEntries()}</div>;
  }
}

function mapStateToProps(state) {
  return { entries: state.entries };
}

export default connect(mapStateToProps, { fetchEntries })(EntryList);
