import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Administration({ user }) {
  // eslint-disable-next-line no-console
  console.log(user);
  return (
    <div className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <ul className="navbar-header">
          <li>
            <Link to="/profile" className="navbar-brand">
              Modifier mon profil
            </Link>
          </li>
          <li>
            <Link to="/project" className="navbar-brand">
              Modifier les projets
            </Link>
          </li>
          <li>
            <Link to="/experience" className="navbar-brand">
              Modifier mon parcours
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Administration.defaultProps = {

//     user.id: '',
//     user.name: '',

// };

Administration.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Administration;
