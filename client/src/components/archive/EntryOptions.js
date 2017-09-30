import React from 'react';
import './css/EntryOptions.css';

const EntryOptions = props => {
  return (
    <div>
      <ul className="entry-options--option-list">
        <li className="entry-options--option">
          <a href={`/${props.userURL}/${props.entryID}`}>View comments</a>
        </li>
        {/* The options below should be visible only if the user visualising the entry is logged in as its owner. How?*/}
        <li className="entry-options--option">
          <a href="#">Edit this entry</a>
        </li>
        <li className="entry-options--option">
          <a href="#">Delete this entry</a>
        </li>
      </ul>
    </div>
  );
};

export default EntryOptions;
