import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export default {
  login: (loginForm) => (dispatch) => {
    const tokenFromLocalStorage = localStorage.getItem('jwt');

    if (!tokenFromLocalStorage) {
      axios
        .post('/api/signin', loginForm)
        .then((response) => {
          const { token } = response.data;
          const decodedToken = jwtDecode(token);

          const user = {
            id: decodedToken.user_id,
            name: decodedToken.username,
          };

          localStorage.setItem('jwt', token);

          dispatch({
            type: actionTypes.LOGIN,
            payload: {
              user,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const decodedToken = jwtDecode(tokenFromLocalStorage);

      const user = {
        id: decodedToken.user_id,
        name: decodedToken.username,
      };

      dispatch({
        type: actionTypes.LOGIN,
        payload: {
          user,
        },
      });
    }
  },

  logout: () => {
    localStorage.removeItem('jwt');

    return {
      type: actionTypes.LOGOUT,
    };
  },
};
