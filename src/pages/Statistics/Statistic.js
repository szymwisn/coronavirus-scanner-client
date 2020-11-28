import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ statistic }) => (
  <div className="w-3/5 p-4 mb-4 rounded-sm bg-cvsGray flex justify-between">
    <div>{statistic.name}</div>
    <div>{statistic.value}</div>
  </div>
);

Statistic.propTypes = {
  statistic: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Statistic;
