import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icon from 'components/Icon';

const NavItem = ({ item }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (item.path === location.pathname) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [item.path, location.pathname]);

  return (
    <Link to={item.path}>
      <div
        className={`flex h-full px-4 flex-col justify-center items-center text-center ${
          active
            ? 'border-t-2 border-solid border-cvsPurple'
            : 'border-t-2 border-solid border-white'
        }`}
      >
        <div className="w-full flex justify-center">
          <Icon
            src={active ? item.iconActive : item.icon}
            size={24}
            alt={item.name}
            active={active}
          />
        </div>
        <span className={active ? 'text-cvsPurple' : ''}>{item.name}</span>
      </div>
    </Link>
  );
};

export default NavItem;
