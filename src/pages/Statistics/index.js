import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Statistic from './Statistic';

const Statistics = ({ statistics }) => (
  <div className="flex flex-col items-center">
    {statistics.map((statistic) => (
      <Statistic key={_.uniqueId()} statistic={statistic} />
    ))}
  </div>
);

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
