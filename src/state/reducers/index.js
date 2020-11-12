import { combineReducers } from 'redux';

import citizensReducers from 'state/reducers/citizensReducers';
import reportsReducers from 'state/reducers/reportsReducers';
import statisticsReducers from 'state/reducers/statisticsReducers';

export default combineReducers({
  citizensReducers,
  reportsReducers,
  statisticsReducers,
});
