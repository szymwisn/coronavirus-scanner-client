import axios from 'axios';

export const actionTypes = {
  FETCH_REPORTS: 'FETCH_REPORTS',
  SEND_FEEDBACK: 'SEND_FEEDBACK',
};

export default {
  fetchReports: () => (dispatch) => {
    // const url = '';

    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response);
    //     const { reports } = response;

    //     if (reports) {
    //       dispatch({
    //         type: actionTypes.FETCH_REPORTS,
    //         payload: { reports },
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const tempReports = [
      {
        attachment: {
          name: 'obrazek.png',
          src: '/obrazek.png',
        },
        id: '3',
        cause: 'Example cause',
        date: new Date(),
        description: 'Lorem ipsum dolor',
        solved: false,
        suspect: 'John Doe',
      },

      {
        attachment: null,
        id: '2',
        cause: 'Example cause',
        date: new Date(),
        description: 'Lorem ipsum dolor',
        solved: true,
        suspect: 'John Doe',
      },
      {
        attachment: null,
        id: '1',
        cause: 'Good cause',
        date: new Date(),
        description: 'Something something something',
        solved: true,
        suspect: 'Someone Else',
      },
    ];

    console.log(tempReports);

    const unsolvedReports = tempReports.filter((report) => !report.solved)
      .length;

    dispatch({
      type: actionTypes.FETCH_REPORTS,
      payload: { reports: tempReports, unsolvedReports },
    });
  },

  sendFeedback: (reportId, feedbackType) => (dispatch) => {
    const url = '';

    axios
      .post(url)
      .then((response) => {
        console.log(response);
        dispatch({
          type: actionTypes.SEND_FEEDBACK,
          payload: { reportId, feedbackType },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
