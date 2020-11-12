import axios from 'axios';

export const actionTypes = {
  FETCH_CITIZENS: 'FETCH_CITIZENS',
};

export default {
  fetchCitizens: () => (dispatch) => {
    const url = '';

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        const { citizens } = response;

        if (citizens) {
          dispatch({
            type: actionTypes.FETCH_CITIZENS,
            payload: { citizens },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
