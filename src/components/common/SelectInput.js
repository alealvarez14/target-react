import React from 'react';
import { array, string, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { parseInputErrors } from '../../utils/helpers';

const SelectInput = ({
  input,
  defaultLabel,
  label,
  values,
  meta: { touched, error }
}) => (
  <div>
    {label && <label>{label}</label>}
    <div className="options-input">
      <select className="fields" {...input} {...{ label }}>
        <option value="" disabled="true">{defaultLabel}</option>
        {values.map((item, index) => (<option key={index}> {item} </option>))}
      </select>
      {touched && error &&
        <span className="error-message">
          <FormattedMessage
            id={parseInputErrors(error)}
            defaultMessage={`${label} ${parseInputErrors(error)}`}
          />
        </span>
      }
    </div>
  </div>
);

SelectInput.propTypes = {
  input: object.isRequired,
  defaultLabel: string,
  label: string,
  meta: object,
  values: array
};

export default SelectInput;
