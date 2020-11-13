import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Citizen from 'pages/Citizens/Citizen';

const Citizens = ({ citizens }) => (
  <div className="flex flex-col items-center">
    {citizens.map((citizen) => (
      <Citizen key={_.uniqueId()} citizen={citizen} />
    ))}
  </div>
);

Citizens.propTypes = {
  citizens: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      debt: PropTypes.number.isRequired,
      quarantine: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Citizens;
