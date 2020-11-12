import { actionTypes } from 'state/actions/citizensActions';

const initialState = {
  citizens: [],
};

const citizensReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CITIZENS:
      return {
        ...state,
        citizens: action.payload.citizens,
      };

    default:
      return state;
  }
};

export default citizensReducer;
