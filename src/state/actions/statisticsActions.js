// import axios from 'axios';

export const actionTypes = {
  FETCH_STATISTICS: 'FETCH_STATISTICS',
};

export default {
  fetchStatistics: () => (dispatch) => {
    // const url = '';

    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response);
    //     const { statistics } = response;

    //     if (statistics) {
    //       dispatch({
    //         type: actionTypes.FETCH_STATISTICS,
    //         payload: { statistics },
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const tempStatistics = [
      {
        name: 'Statistic 1',
        value: 'Val 1',
      },
      {
        name: 'Statistic 2',
        value: 'Val 2',
      },
      {
        name: 'Statistic 3',
        value: 'Val 3',
      },
      {
        name: 'Statistic 4',
        value: 'Val 4',
      },
      {
        name: 'Statistic 5',
        value: 'Val 5',
      },
    ];

    dispatch({
      type: actionTypes.FETCH_STATISTICS,
      payload: { statistics: tempStatistics },
    });
  },
};
