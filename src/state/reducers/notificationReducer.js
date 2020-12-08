import _ from 'lodash';

import { actionTypes } from 'state/actions/notificationActions';

const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTIFICATION:
      return {
        notifications: [
          ...state.notifications,
          { id: _.uniqueId(), ...action.payload.notification },
        ],
      };

    case actionTypes.REMOVE_NOTIFICATION:
      return {
        notifications: [
          ...state.notifications.filter(
            (notification) => notification.id !== action.payload.notificationId,
          ),
        ],
      };

    case actionTypes.CLEAR_NOTIFICATIONS:
      return {
        notifications: [],
      };

    default:
      return state;
  }
};

export default notificationReducer;
