// @flow

import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './mystyles.css';
import type Show from './types';

class ShowCard extends Component<Show> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Link className="showcard-wrapper" to={`/details/${this.props.imdbID}`}>
        <img
          className="showcard-poster"
          alt={`${this.props.title} Show Poster`}
          src={`/img/posters/${this.props.poster}`}
        />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Link>
    );
  }
}

export default ShowCard;
