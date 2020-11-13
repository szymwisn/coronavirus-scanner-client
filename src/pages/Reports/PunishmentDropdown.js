import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const PunishmentDropdown = ({ open, punishments, onPunishmentSelection }) => {
  if (!open) {
    return null;
  }

  return (
    <ul className="p-4 bg-cvsGray shadow-cvsDark rounded-sm leading-6">
      {punishments.map((penalty) => (
        <li key={_.uniqueId()}>
          <button
            type="button"
            onClick={() => onPunishmentSelection(penalty.id)}
            className="hover:opacity-75"
          >
            {penalty.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

PunishmentDropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  punishments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onPunishmentSelection: PropTypes.func.isRequired,
};

export default PunishmentDropdown;
