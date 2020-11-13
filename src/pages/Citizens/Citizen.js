import React from 'react';
import PropTypes from 'prop-types';

import PersonalData from 'pages/Citizens/PersonalData';
import Debt from 'pages/Citizens/Debt';
import Quarantine from 'pages/Citizens/Quarantine';

const Citizen = ({ citizen }) => (
  <div className="w-3/5 p-4 mb-4 rounded-sm bg-cvsGray flex justify-between">
    <PersonalData name={citizen.name} address={citizen.address} />
    <Debt value={citizen.debt} />
    <Quarantine days={citizen.quarantine} />
  </div>
);

Citizen.propTypes = {
  citizen: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    debt: PropTypes.number.isRequired,
    quarantine: PropTypes.number.isRequired,
  }).isRequired,
};

export default Citizen;
