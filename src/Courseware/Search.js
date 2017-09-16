// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import type Show from './types';
import Header from './Header';

type Props = {
  shows: Array<Show> //can be mixed, string, etc.. Do not use ANY
};
type State = {
  searchTerm: string
};

class Search extends Component<Props, State> {
  static defaultProps = {
    shows: []
  };
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent<HTMLInputElement>
  ) => {
    console.log(event.currentTarget.value);
    this.setState({ searchTerm: event.currentTarget.value });
  };
  render() {
    return (
      <div className="search">
        <Header
          showSearch={true}
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
