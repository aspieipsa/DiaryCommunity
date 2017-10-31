import React from 'react';
import { Link }  from 'react-router-dom';

const Menu = props => {
  console.log(props);
  return (
    <div className="col s4 m3">
      <div className="card-panel brown">
        <span className="white-text">{`Тут будет меню и всё такое.`}</span>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <a className="waves-effect waves-light btn" onClick={props.addEntry}>
            Новая запись
          </a>
          { props.user &&
            <Link to={`/${props.user.uri}/entry/edit`} className="waves-effect waves-light btn" >
              Новая запись
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Menu;
