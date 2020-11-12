import { actionTypes } from 'state/actions/reportsActions';

const initialState = {
  reports: [],
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPORTS:
      return {
        ...state,
        reports: action.payload.reports,
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
