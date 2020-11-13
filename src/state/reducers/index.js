import { combineReducers } from 'redux';

import citizensReducer from 'state/reducers/citizensReducer';
import reportsReducer from 'state/reducers/reportsReducer';
import statisticsReducer from 'state/reducers/statisticsReducer';
import userReducer from 'state/reducers/userReducer';

export default combineReducers({
  citizensReducer,
  reportsReducer,
  statisticsReducer,
  userReducer,
});
