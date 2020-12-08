import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import notificationMiddleware from 'state/notificationMiddleware';
import reducers from 'state/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(notificationMiddleware),
  ),
);
