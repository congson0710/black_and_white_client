import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import auth from '../Auth';
import '../App.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    auth.logout();
    this.props.history.replace('/');
  };

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Black And White
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">All Book Ratings</Link>
          </li>
          <li>
            {auth.isAuthenticated() ? (
              <Link to="/create">Upload a Rated Book</Link>
            ) : (
              ''
            )}
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {auth.isAuthenticated() ? (
            <li>
              <button
                className="btn btn-danger log"
                onClick={() => this.logout()}
              >
                Log out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="btn btn-info br4 log"
                onClick={() => auth.login()}
              >
                Login With Auth0
              </button>
            </li>
          )}
          <li>
            <Link to="/login">
              <button className="btn btn-primary br4 log">Login</button>
            </Link>
          </li>
          <li>
            <Link to="/sign_up">
              <button className="btn btn-primary br4 log">Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
