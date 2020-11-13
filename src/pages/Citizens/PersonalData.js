import React from 'react';
import PropTypes from 'prop-types';

const PersonalData = ({ name, address }) => (
  <div className="flex flex-col w-1/3">
    <div className="font-medium">{name}</div>
    <div>{address}</div>
  </div>
);

PersonalData.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default PersonalData;
