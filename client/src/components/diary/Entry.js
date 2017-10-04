import React from "react";
import "./css/Entry.css";

/* Entry consists of a single diary entry, with the entry body and entry meta. */
const Entry = props => {
  return (
    <section className="entry--entry">
      <div className="row">
        <div className="entry--meta">{props.author}</div>
        <div className="entry--body">
          <h2>{props.title}</h2>
          {props.body}
        </div>
      </div>
    </section>
  );
};

export default Entry;
