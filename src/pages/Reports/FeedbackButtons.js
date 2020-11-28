import Button from 'components/Button';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from 'hooks/useOutsideClick';
import PunishmentDropdown from './PunishmentDropdown';

const responses = [
  {
    id: 0,
    name: 'Odrzuć',
  },
  {
    id: 1,
    name: 'Kwarantanna',
  },
  {
    id: 2,
    name: 'Mandat 500 PLN',
  },

  {
    id: 3,
    name: 'Mandat 3 000 PLN',
  },
  {
    id: 4,
    name: 'Mandat 30 000 PLN',
  },
];

const FeedbackButtons = ({ display, reportId, onFeedbackSend }) => {
  const dropdownRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useOutsideClick(dropdownRef, () => setDropdownOpen(false));

  const handlePunishmentSelection = (punishmentId) => {
    setDropdownOpen(false);
    onFeedbackSend(reportId, punishmentId);
  };

  if (!display) {
    return null;
  }

  return (
    <div className="flex relative">
      <Button
        text={responses[0].name}
        onClick={() => onFeedbackSend(reportId, responses[0].id)}
      />
      <span className="ml-5">
        <Button text="Ukaraj" primary onClick={() => setDropdownOpen(true)} />
      </span>
      <div
        style={{ right: '-170px' }}
        className="absolute top-0 z-10"
        ref={dropdownRef}
      >
        <PunishmentDropdown
          open={dropdownOpen}
          punishments={responses.slice(1)}
          onPunishmentSelection={handlePunishmentSelection}
        />
      </div>
    </div>
  );
};

FeedbackButtons.propTypes = {
  display: PropTypes.bool.isRequired,
  reportId: PropTypes.number.isRequired,
  onFeedbackSend: PropTypes.func.isRequired,
};

export default FeedbackButtons;
