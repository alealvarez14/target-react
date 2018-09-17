import React from 'react';
import { func, bool, array } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from '../common/Loading';
import Input from '../common/Input';
import { validations, login } from '../../utils/constraints';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' }
});

const DisplayErrors = ({ errors }) => {
  if (!errors) {
    return;
  }
  return (
    <ul className="error-bullets">
      {errors.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

export const LoginForm = ({ handleSubmit, error, submitting, intl }) => (
  <div>
    <form onSubmit={handleSubmit}>
      {error && <DisplayErrors errors={error} />}
      <div>
        <Field
          name="email"
          label={intl.formatMessage(messages.email)}
          component={Input}
          type="email"
        />
      </div>
      <div>
        <Field
          name="password"
          label={intl.formatMessage(messages.password)}
          component={Input}
          type="password"
        />
      </div>
      <div className="bottom-container">
        <button className="buttons-black" type="submit">
          <FormattedMessage id="login.form.submit" />
        </button>
        {submitting && <Loading />}
      </div>
    </form>
    <br />
    <p className="information-text"><FormattedMessage id="login.forgot_password" /></p>
  </div>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  intl: intlShape.isRequired,
  submitting: bool.isRequired,
  error: array
};

export default reduxForm({
  form: 'login',
  validate: validations(login, { fullMessages: false })
})(injectIntl(LoginForm));
