import axios from 'axios';

export const actionTypes = {
  FETCH_STATISTICS: 'FETCH_STATISTICS',
};

export default {
  fetchStatistics: () => (dispatch) => {
    const url = '';

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        const { statistics } = response;

        if (statistics) {
          dispatch({
            type: actionTypes.FETCH_STATISTICS,
            payload: { statistics },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
