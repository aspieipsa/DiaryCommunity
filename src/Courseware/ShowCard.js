// @flow

import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './mystyles.css';
import type Show from './types';

const ShowCard = (props: Show) => (
  <Link className="showcard-wrapper" to={`/details/${props.imdbID}`}>
    <img
      className="showcard-poster"
      alt={`${props.title} Show Poster`}
      src={`/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Link>
);

export default ShowCard;
