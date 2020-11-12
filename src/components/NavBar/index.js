import React from 'react';
import _ from 'lodash';

import NavItem from 'components/NavBar/NavItem';
import reportsIcon from 'assets/icons/reports.svg';
import reportsActiveIcon from 'assets/icons/reports-active.svg';
import statisticsIcon from 'assets/icons/statistics.svg';
import statisticsActiveIcon from 'assets/icons/statistics-active.svg';
import citizensIcon from 'assets/icons/citizens.svg';
import citizensActiveIcon from 'assets/icons/citizens-active.svg';

const navItems = [
  {
    name: 'Zgłoszenia',
    path: '/reports',
    icon: reportsIcon,
    iconActive: reportsActiveIcon,
  },
  {
    name: 'Statystyki',
    path: '/statistics',
    icon: statisticsIcon,
    iconActive: statisticsActiveIcon,
  },
  {
    name: 'Obywatele',
    path: '/citizens',
    icon: citizensIcon,
    iconActive: citizensActiveIcon,
  },
];

const NavBar = () => (
  <div className="px-4 flex flex-row flex-no-wrap justify-between shadow-cvsDark rounded-sm">
    {navItems.map((item) => (
      <NavItem key={_.uniqueId()} item={item} />
    ))}
  </div>
);

export default NavBar;
