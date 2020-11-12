import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => (
  <div className="flex w-full justify-between">
    <Logo type="dark" />
    <NavBar />
  </div>
);

export default Header;
