import { actionTypes } from 'state/actions/userActions';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        user: {
          id: action.payload.user.id,
          name: action.payload.user.name,
        },
      };

    case actionTypes.LOGOUT:
      return {
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
