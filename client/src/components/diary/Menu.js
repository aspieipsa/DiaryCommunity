import React from 'react';

const Menu = props => {
  return (
    <div className="col s4 m3">
      <div className="card-panel brown">
        <span className="white-text">{`Тут будет меню и всё такое.`}</span>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <a className="waves-effect waves-light btn" onClick={props.addEntry}>
            Новая запись
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
