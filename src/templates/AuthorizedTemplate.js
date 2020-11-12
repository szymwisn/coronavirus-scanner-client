import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';

const AuthorizedTemplate = ({ children }) => (
  <div className="p-5 flex flex-col w-screen h-screen">
    <Header />
    <div>{children}</div>
  </div>
);

AuthorizedTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthorizedTemplate;
