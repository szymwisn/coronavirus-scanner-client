import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, type, placeholder, onChange }) => (
  <input
    className="w-full rounded-sm bg-cvsGray shadow-cvsDark px-4 py-2"
    type={type}
    value={value === undefined ? '' : value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
