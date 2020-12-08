import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import userActions from 'state/actions/userActions';
import Logo from 'components/Logo';
import NavBar from 'components/NavBar';
import Button from 'components/Button';

const Header = ({ user, unsolvedReports }) => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className="flex w-full justify-between">
      <Logo type="dark" />
      <NavBar unsolvedReports={unsolvedReports} />
      <div className="flex items-center">
        <div className="mr-4">
          Witaj, <span className="font-medium">{user.name}</span>
        </div>
        <Button text="Wyloguj" onClick={handleLogoutClick} />
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  unsolvedReports: PropTypes.number.isRequired,
};

export default Header;
