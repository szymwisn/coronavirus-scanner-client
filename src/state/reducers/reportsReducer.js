import { actionTypes } from 'state/actions/reportsActions';

const initialState = {
  reports: [],
  unsolvedReports: 0,
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPORTS:
      return {
        ...state,
        reports: action.payload.reports,
        unsolvedReports: action.payload.unsolvedReports,
      };

    case actionTypes.SEND_FEEDBACK:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reportsReducer;
