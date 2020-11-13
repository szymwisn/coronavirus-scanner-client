import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

const NavItem = ({ item, unsolvedReports }) => {
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
        className={`relative flex h-full px-4 flex-col justify-center items-center text-center hover:opacity-75 active:opacity-50 transition-all ease-in-out duration-100 ${
          active
            ? 'border-t-2 border-solid border-cvsPurple'
            : 'border-t-2 border-solid border-white'
        }`}
      >
        {unsolvedReports > 0 && item.path.toLowerCase() === '/reports' ? (
          <div
            style={{
              top: '13px',
              right: '32px',
            }}
            className="absolute w-4 h-4 rounded-xl top-0 right-0 p-1 text-cvsGray bg-cvsRed flex items-center content-center"
          >
            {unsolvedReports}
          </div>
        ) : (
          ''
        )}
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

NavItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconActive: PropTypes.string.isRequired,
  }).isRequired,
  unsolvedReports: PropTypes.number.isRequired,
};

export default NavItem;
