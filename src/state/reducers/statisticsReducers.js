import { actionTypes } from 'state/actions/statisticsActions';

const initialState = {
  statistics: [],
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STATISTICS:
      return {
        ...state,
        statistics: action.payload.statistics,
      };

    default:
      return state;
  }
};

export default statisticsReducer;
