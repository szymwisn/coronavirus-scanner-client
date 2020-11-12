import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, primary, onClick }) => (
  <button
    className={`text-center py-4 px-10 rounded-xl ${
      primary ? 'bg-cvsPurple text-cvsGray' : ' bg-cvsGray text-cvsDark'
    }`}
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  primary: false,
};

export default Button;
