import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import quarantineIcon from 'assets/icons/quarantine.svg';
import quarantineActiveIcon from 'assets/icons/quarantine-active.svg';

const Quarantine = ({ days }) => (
  <div
    className={`flex items-center justify-center w-1/3 ${
      days > 0 ? 'font-medium text-cvsRed' : 'opacity-50'
    }`}
  >
    <Icon
      size={24}
      src={days > 0 ? quarantineActiveIcon : quarantineIcon}
      alt="Quarantine"
    />
    <div className="ml-4">{days > 0 ? days : '-'} dni</div>
  </div>
);

Quarantine.propTypes = {
  days: PropTypes.number.isRequired,
};

export default Quarantine;
