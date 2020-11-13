import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, primary, onClick }) => (
  <button
    className={`text-center px-10 py-2 rounded-xl hover:opacity-75 active:opacity-50 transition-all ease-in-out duration-100 ${
      primary
        ? 'bg-cvsPurple text-cvsGray font-medium'
        : ' bg-cvsGray text-cvsDark'
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
