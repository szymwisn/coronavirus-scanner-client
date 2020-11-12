import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import NavBar from './NavBar';

const Header = ({ unsolvedReports }) => (
  <div className="flex w-full justify-between">
    <div className="flex-1">
      <Logo type="dark" />
    </div>
    <NavBar unsolvedReports={unsolvedReports} />
    <div className="flex-1" />
  </div>
);

Header.propTypes = {
  unsolvedReports: PropTypes.number.isRequired,
};

export default Header;
