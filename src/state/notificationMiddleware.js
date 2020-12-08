import notificationActions from 'state/actions/notificationActions';

const notificationMiddleware = (storeAPI) => (next) => (action) => {
  if (action.notification) {
    storeAPI.dispatch(notificationActions.addNotification(action.notification));
  }

  return next(action);
};

export default notificationMiddleware;
