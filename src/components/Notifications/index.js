import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import notificationActions from 'state/actions/notificationActions';
import Notification from './Notification';

const Notifications = ({ notifications }) => {
  const dispatch = useDispatch();

  const handleNotificationClose = (id) => {
    dispatch(notificationActions.removeNotification(id));
  };

  return (
    <div
      className="z-50 absolute top-0 left-0 right-0 mt-5 w-1/3"
      style={{ margin: '0 auto' }}
    >
      {notifications.map((notification) => (
        <Notification
          key={_.uniqueId()}
          onCloseClick={handleNotificationClose}
          id={notification.id}
          durationMs={notification.durationMs}
          message={notification.message}
          type={notification.type}
        />
      ))}
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      durationMs: PropTypes.number,
    }),
  ).isRequired,
};

export default Notifications;
