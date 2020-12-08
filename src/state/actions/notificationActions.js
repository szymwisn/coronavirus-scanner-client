export const actionTypes = {
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',
};

export default {
  addNotification: (notification) => {
    return {
      type: actionTypes.ADD_NOTIFICATION,
      payload: { notification },
    };
  },

  removeNotification: (notificationId) => {
    return {
      type: actionTypes.REMOVE_NOTIFICATION,
      payload: { notificationId },
    };
  },

  clearNotifications: () => {
    return {
      type: actionTypes.CLEAR_NOTIFICATIONS,
    };
  },
};
