import React from 'react';
import { array } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { parseInputErrors } from '../../utils/helpers';

const Errors = ({ errors }) => (
  <div>
    {errors.map(error => (
      <span className="error-message">
        <FormattedMessage
          id={parseInputErrors(error)}
          defaultMessage={parseInputErrors(error)}
        />
      </span>
    ))}
  </div>
);

Errors.propTypes = {
  errors: array
};

export default Errors;
