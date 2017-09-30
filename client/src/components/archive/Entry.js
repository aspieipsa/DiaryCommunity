import React from 'react';
import './css/Entry.css';

/* Entry consists of a single diary entry, with the entry body and entry meta. */
const Entry = props => {
  return (
    <section className="container-fluid entry--entry">
      <div className="row">
        <div className="col-lg-1 entry--meta">{props.author}</div>
        <div className="col-lg-11 entry--body">
          <h2>{props.title}</h2>
          {props.body}
        </div>
      </div>
    </section>
  );
};

export default Entry;
