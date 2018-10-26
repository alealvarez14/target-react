import React from 'react';
import { bool, func, array } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import Loading from '../common/Loading';
import Input from '../common/Input';
import Errors from '../common/Errors';
import { validations, forgotPass } from '../../utils/constraints';

const messages = defineMessages({
  email: { id: 'login.form.email' }
});

export const ForgotPassForm = ({ handleSubmit, error, submitting, intl, submitSucceeded }) => (
  submitSucceeded ?
    <div>
      <h3>An email has been sent containing instructions!</h3>
      <h3>Please check your inbox</h3>
    </div>
    :
    <div>
      <form onSubmit={handleSubmit}>
        {error && <Errors errors={error} />}
        <div>
          <Field
            name="email"
            label={intl.formatMessage(messages.email)}
            component={Input}
            type="email"
          />
        </div>
        <div className="bottom-container">
          <button className="buttons-black" type="submit">
            <FormattedMessage id="forgotpassword.form.submit" />
          </button>
          {submitting && <Loading />}
        </div>
      </form>
    </div>
);

ForgotPassForm.propTypes = {
  handleSubmit: func.isRequired,
  intl: intlShape.isRequired,
  submitting: bool.isRequired,
  submitSucceeded: bool.isRequired,
  error: array
};

export default reduxForm({
  form: 'forgotPass',
  validate: validations(forgotPass, { fullMessages: false })
})(injectIntl(ForgotPassForm));
