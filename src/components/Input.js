import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, placeholder, onChange }) => (
  <input
    type="text"
    value={value === undefined ? '' : value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
