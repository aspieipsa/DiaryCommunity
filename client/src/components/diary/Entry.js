import React from 'react';

/* Entry consists of a single diary entry, with the entry body and entry meta. */
const Entry = props => {
  return (
    <div className="card-panel brown lighten-2">
      <div className="entry--meta">{props.author}</div>
      <div className="entry--body">
        <h5>{props.title}</h5>
        {props.body}
      </div>
    </div>
  );
};

export default Entry;
