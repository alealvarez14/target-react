import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginForm from '../components/user/LoginForm';
import VideoDisplay from '../components/common/VideoDisplay';
import { login } from '../actions/sessionActions';
import routes from '../constants/routesPaths';
import * as smilies from '../assets/smilies.svg';
import '../styles/components/loginPage.scss';

const LoginPage = ({ login, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="grid-x">
      <div className="cell medium-auto login-container">
        <img className="smilies" src={smilies} alt="smilies" />
        <h1 className="uppercase-title"><FormattedMessage id="login.title" /></h1>
        <h2><FormattedMessage id="login.subtitle" /></h2>
        <h3><FormattedMessage id="login.subtext" /></h3>
        <div className="form-container">
          <LoginForm onSubmit={login} />
          <div className="bottom-container">
            <h2><FormattedMessage id="login.facebook_btn" /></h2>
            <hr />
            <Link to={routes.signUp}>
              <FormattedMessage id="login.signup" />
            </Link>
          </div>
        </div>
      </div>
      <div className="cell medium-auto">
        <VideoDisplay />
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  login: func.isRequired,
  authenticated: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS()))
});

export default connect(mapState, mapDispatch)(LoginPage);
