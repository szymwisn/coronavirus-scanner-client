import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import closeIcon from 'assets/icons/close.svg';

const calcStyle = (type) => {
  switch (type.toLowerCase()) {
    case 'warning':
      return 'bg-cvsYellow';
    case 'error':
      return 'bg-cvsRed';
    default:
      return 'bg-cvsGreen';
  }
};

const Notification = ({ id, message, type, durationMs, onCloseClick }) => {
  useEffect(() => {
    setTimeout(() => {
      onCloseClick(id);
    }, durationMs);
  }, [id, durationMs, onCloseClick]);

  return (
    <div
      className={`mt-5 p-2 w-full flex justify-between rounded-sm shadow-cvsDark text-white ${calcStyle(
        type,
      )}`}
    >
      {message}
      <button type="button" onClick={() => onCloseClick(id)}>
        <Icon src={closeIcon} alt="Close" size={16} />
      </button>
    </div>
  );
};

Notification.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  durationMs: PropTypes.number,
  onCloseClick: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  durationMs: 3000,
};

export default Notification;
