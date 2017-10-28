import React from 'react';

class EntryForm extends React.Component {
  state = {};

  handleInputOnChange = event => {
    this.setState({ entryTitle: event.target.value });
  };

  handleTextAreaOnChange = event => {
    this.setState({ entryBody: event.target.value });
  };

  handleOnSubmit = event => {
    console.log(event);
    event.preventDefault();
    let entry = {
      title: this.state.entryTitle,
      body: this.state.entryBody,
    };

    this.props.onSubmit(entry);
  };

  render() {
    return (
      <div className="col s9">
        <h5>Новая запись</h5>
        <label htmlFor="title" />
        <h6>Заголовок</h6>
        <input id="title" className="input-field" type="text" onChange={this.handleInputOnChange} value={this.state.entryTitle} />
        <h6>Сообщение</h6>
        <div className="input-field">
          <textarea className="materialize-textarea" onChange={this.handleTextAreaOnChange} value={this.state.entryBody} />
        </div>
        <a className="waves-effect waves-light btn" onClick={this.handleOnSubmit}>
          Submit
        </a>
        <a style={{ marginLeft: '20px' }} className="waves-effect waves-light blue-grey lighten-4 btn" onClick={this.props.onCancel}>
          Cancel
        </a>
      </div>
    );
  }
}

export default EntryForm;
