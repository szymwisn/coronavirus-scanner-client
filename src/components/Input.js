import React from 'react';

const Input = ({ value, placeholder, onChange }) => (
  <input
    type="text"
    value={value === undefined ? '' : value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;
