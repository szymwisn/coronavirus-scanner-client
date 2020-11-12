import React from 'react';
import { Link } from 'react-router-dom';

import logoDark from 'assets/images/logo-dark.png';
import logoLight from 'assets/images/logo-light.png';

const Logo = ({ type }) => (
  <Link to="/">
    <img
      src={type.toLowerCase() === 'dark' ? logoDark : logoLight}
      alt="Coronavirus Scanner"
      width={221}
      height={78}
    />
  </Link>
);

export default Logo;
