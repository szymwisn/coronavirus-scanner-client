import axios from 'axios';

export const actionTypes = {
  FETCH_REPORTS: 'FETCH_REPORTS',
  SEND_FEEDBACK: 'SEND_FEEDBACK',
};

export default {
  fetchReports: () => (dispatch) => {
    const url = '';

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        const { reports } = response;

        if (reports) {
          dispatch({
            type: actionTypes.FETCH_REPORTS,
            payload: { reports },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  sendFeedback: (reportId, actionType) => (dispatch) => {
    const url = '';

    axios
      .post(url)
      .then((response) => {
        console.log(response);
        dispatch({
          type: actionTypes.SEND_FEEDBACK,
          payload: { reportId, actionType },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
