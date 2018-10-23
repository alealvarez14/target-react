import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { signUp } from '../actions/userActions';
import VideoDisplay from '../components/common/VideoDisplay';
import SignUpForm from '../components/user/SignUpForm';
import routes from '../constants/routesPaths';

const SignUpPage = ({ signUp, authenticated }) => {
  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="grid-x">
      <div className="cell medium-auto login-container">
        <h1 className="uppercase-title"><FormattedMessage id="signup.title" /></h1>
        <div className="form-container">
          <SignUpForm onSubmit={signUp} />
          <div className="bottom-container">
            <hr />
            <Link to={routes.login}>
              <FormattedMessage id="signup.signin" />
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

SignUpPage.propTypes = {
  signUp: func.isRequired,
  authenticated: bool.isRequired
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user.toJS()))
});

export default connect(mapState, mapDispatch)(SignUpPage);
