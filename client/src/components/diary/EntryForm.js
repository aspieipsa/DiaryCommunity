import React from "react";
import "./css/EntryForm.css";

class EntryForm extends React.Component {
  handleInputOnChange = event => {
    this.setState({ entryTitle: event.target.value });
  };

  handleTextAreaOnChange = event => {
    this.setState({ entryBody: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    let entry = {
      title: this.state.entryTitle,
      body: this.state.entryBody,
      author: this.state.entryAuthor
    };

    this.props.addEntry(entry);
  };

  render() {
    return (
      <form
        className="entry-form--form col-md-10"
        onSubmit={this.handleOnSubmit}
      >
        <input
          className="entry-form--title"
          type="text"
          onChange={this.handleInputOnChange}
          value={this.state.entryTitle}
        />
        <textarea
          className="entry-form--body"
          onChange={this.handleTextAreaOnChange}
          value={this.state.entryBody}
        />
        <button className="entry-form--button">Submit</button>
        <button className="entry-form--button" type="cancel">
          Cancel
        </button>
      </form>
    );
  }
}

export default EntryForm;
