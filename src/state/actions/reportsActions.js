import axios from 'axios';

export const actionTypes = {
  FETCH_REPORTS: 'FETCH_REPORTS',
  SEND_FEEDBACK: 'SEND_FEEDBACK',
};

export default {
  fetchReports: () => (dispatch) => {
    axios
      .get('/api/getApplications')
      .then((response) => {
        console.log(response.data);

        const reports = response.data.map((report) => ({
          attachment: report.picture
            ? {
                name: report.picture,
                src: report.picture,
              }
            : null,
          id: report.id,
          cause: report.cause.toString(),
          date: new Date(report.date),
          description: report.explanation,
          solved: report.status,
          sender: `${report.first_name} ${report.second_name}`,
          lat: report.latitude,
          long: report.longlitude,
        }));

        const unsolvedReports = reports.filter((report) => !report.solved)
          .length;

        dispatch({
          type: actionTypes.FETCH_REPORTS,
          payload: { reports, unsolvedReports },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  sendFeedback: (reportId, feedbackType) => (dispatch) => {
    axios
      .post('/api/updateApplication', {
        applicationId: reportId,
        punishment: feedbackType,
        status: true,
      })
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
