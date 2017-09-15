import React from 'react';
import { string } from 'prop-types';
import './mystyles.css';

const ShowCard = props => (
  <div className="showcard-wrapper">
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
  </div>
);

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;
