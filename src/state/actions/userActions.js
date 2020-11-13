// import axios from 'axios';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export default {
  login: (loginForm) => (dispatch) => {
    console.log(loginForm);
    // const url = '';

    // axios
    //   .post(url, loginForm)
    //   .then((response) => {
    //     console.log(response);
    //     const { userId } = response;

    //     if (userId) {
    //       dispatch({
    //         type: actionTypes.LOGIN,
    //         payload: { userId },
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const tempUser = {
      id: 'userId',
      name: 'John Doe',
    };

    dispatch({ type: actionTypes.LOGIN, payload: { user: tempUser } });
  },

  logout: () => {
    return { type: actionTypes.LOGOUT };
  },
};
