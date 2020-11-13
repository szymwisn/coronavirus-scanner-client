import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import debtIcon from 'assets/icons/debt.svg';
import debtActiveIcon from 'assets/icons/debt-active.svg';

const Debt = ({ value }) => (
  <div
    className={`flex items-center justify-center w-1/3 ${
      value > 0 ? 'font-medium text-cvsPurple' : 'opacity-50'
    }`}
  >
    <Icon size={24} src={value > 0 ? debtActiveIcon : debtIcon} alt="Debt" />
    <div className="ml-4">{value > 0 ? value : '-'} PLN</div>
  </div>
);

Debt.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Debt;
