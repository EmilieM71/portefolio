/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import PartTitle from './PartTitle';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirection: false,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // debugger;

    const { email, password } = this.state;
    const { setUser } = this.props;
    axios
      .post(
        `http://localhost:5000/api/admin/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        NotificationManager.success('Vous êtes connecté');
        // eslint-disable-next-line no-console
        setUser(response.data);
        this.setState({ redirection: true });
      })
      .catch((error) => {
        if (error.response) {
          NotificationManager.error('Identifiants incorrects');
        } else {
          NotificationManager.error(
            'Erreur',
            'Veuillez réessayer ultérieurement',
          );
        }
      });
  };

  render() {
    const { email, password, redirection } = this.state;

    if (redirection) {
      return <Redirect to="/administration" />;
    }
    return (
      <div className="container">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <PartTitle title="Se connecter" />
            <div className="form-group row m-2">
              <label className="col-md-4 control-label" htmlFor="adminEmail">
                Email
              </label>
              <div className="col-md-4">
                <input
                  id="adminEmail"
                  name="email"
                  type="email"
                  className="form-control input-md"
                  required=""
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row m-2">
              <label className="col-md-4 control-label" htmlFor="adminPassword">
                Mot de passe{' '}
              </label>
              <div className="col-md-4">
                <input
                  id="adminPassword"
                  name="password"
                  type="text"
                  className="form-control input-md"
                  required=""
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row m-2">
              <div className="col-mx-auto">
                <button
                  type="submit"
                  id="singlebutton"
                  name="singlebutton"
                  className="btn btn-primary"
                >
                  Se connecter
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

LogIn.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LogIn;
