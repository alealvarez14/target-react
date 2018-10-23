import React from 'react';
import { func, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from '../common/Loading';
import Input from '../common/Input';
import SelectInput from '../common/SelectInput';
import { validations, signUp } from '../../utils/constraints';

const messages = defineMessages({
  name: { id: 'signup.form.name' },
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' },
  passConfirmation: { id: 'signup.form.passconfirmation' },
  gender: { id: 'signup.form.gender' }
});

const genders = ['female', 'male', 'other'];

export const SignUpForm = ({ handleSubmit, submitting, intl }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        name="name"
        label={intl.formatMessage(messages.name)}
        component={Input}
        type="text"
      />
    </div>
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
        placeholder="Min. 6 characters long"
        label={intl.formatMessage(messages.password)}
        component={Input}
        type="password"
      />
    </div>
    <div>
      <Field
        name="passwordConfirmation"
        label={intl.formatMessage(messages.passConfirmation)}
        component={Input}
        type="password"
      />
    </div>

    <div>
      <Field
        name="gender"
        defaultLabel="Select your gender"
        component={SelectInput}
        label={intl.formatMessage(messages.gender)}
        values={genders}
      />
    </div>

    <div className="bottom-container">
      <button className="buttons-black" type="submit">
        <FormattedMessage id="signup.form.submit" />
      </button>
      {submitting && <Loading />}
    </div>
  </form>
);

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
  intl: intlShape.isRequired
};

export default reduxForm({
  form: 'signUp',
  validate: validations(signUp, { fullMessages: false })
})(injectIntl(SignUpForm));
