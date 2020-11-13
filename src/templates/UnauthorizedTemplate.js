import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/Logo';

const UnauthorizedTemplate = ({ children }) => (
  <div className="p-5 flex flex-col w-screen h-screen bg-cvsPurple bg-virus-bg">
    <Logo type="light" />
    <div className="w-full h-full flex justify-center items-center">
      {children}
    </div>
  </div>
);

UnauthorizedTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UnauthorizedTemplate;
