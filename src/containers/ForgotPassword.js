import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ForgotPassForm from '../components/user/ForgotPassForm';
import VideoDisplay from '../components/common/VideoDisplay';
import routes from '../constants/routesPaths';
import smilies from '../assets/smilies.svg';
import { forgotPassword } from '../actions/userActions';

const ForgotPassword = ({ forgotPassword, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="grid-x">
      <div className="cell medium-auto login-container">
        <img className="smilies" src={smilies} alt="smilies" />
        <h1 className="uppercase-title">
          <FormattedMessage id="login.title" />
        </h1>
        <h2><FormattedMessage id="forgotpassword.title" /></h2>
        <div className="form-container">
          <ForgotPassForm onSubmit={forgotPassword} />
        </div>
      </div>
      <div className="cell medium-auto">
        <VideoDisplay />
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  forgotPassword: func.isRequired,
  authenticated: bool.isRequired,
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  forgotPassword: user => dispatch(forgotPassword(user.toJS()))
});

export default connect(mapState, mapDispatch)(ForgotPassword);
