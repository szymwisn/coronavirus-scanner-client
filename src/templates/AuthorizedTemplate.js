import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

const AuthorizedTemplate = ({ children, unsolvedReports }) => (
  <div className="p-5 flex flex-col w-screen h-screen">
    <Header unsolvedReports={unsolvedReports} />
    <div className="mt-20">{children}</div>
  </div>
);

AuthorizedTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  unsolvedReports: PropTypes.number.isRequired,
};

export default AuthorizedTemplate;
