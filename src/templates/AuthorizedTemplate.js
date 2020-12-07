import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

const AuthorizedTemplate = ({ user, children, unsolvedReports }) => (
  <div className="p-5 flex flex-col w-screen h-screen">
    <Header unsolvedReports={unsolvedReports} user={user} />
    <div className="mt-20 h-full overflow-hidden">{children}</div>
  </div>
);

AuthorizedTemplate.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  unsolvedReports: PropTypes.number.isRequired,
};

export default AuthorizedTemplate;
