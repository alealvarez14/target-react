import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';

import sessionApi from '../api/sessionApi';
import userApi from '../api/userApi';
import routes from '../constants/routesPaths';

export const signUp = user =>
  () =>
    sessionApi.signUp({ user }).then(({ user }) => {
      sessionService.saveUser(user);
    }).catch((err) => {
      throw new SubmissionError(err.errors);
    });

export const forgotPassword = user =>
  () =>
    userApi.forgotPassword({
      email: user.email,
      redirectUrl: `${window.location.origin}${routes.resetPassword}`
    }).catch((err) => {
      throw new SubmissionError({
        _error: err.errors
      });
    });
