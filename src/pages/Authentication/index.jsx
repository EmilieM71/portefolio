/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import LogIn from '../../components/LogIn';
// import Administration from '../../components/Administration';
import AuthContext from '../../contexts/auth';

function Authentication() {
  const { user, setUser } = useContext(AuthContext);

  if (user) return <Redirect to="/administration" />;

  return (
    <div className="container">
      <LogIn setUser={setUser} />
    </div>
  );
}

export default Authentication;
