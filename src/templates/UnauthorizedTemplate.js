import React from 'react';
import PropTypes from 'prop-types';

const UnauthorizedTemplate = ({ children }) => <>{children}</>;

UnauthorizedTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UnauthorizedTemplate;
