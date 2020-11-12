import React from 'react';
import PropTypes from 'prop-types';

const AuthorizedTemplate = ({ children }) => (
  <div className="flex">{children}</div>
);

AuthorizedTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthorizedTemplate;
