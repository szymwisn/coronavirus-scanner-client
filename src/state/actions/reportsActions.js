import axios from 'axios';

export const actionTypes = {
  FETCH_REPORTS: 'FETCH_REPORTS',
  SEND_FEEDBACK: 'SEND_FEEDBACK',
  FAILURE: 'FAILURE',
};

export default {
  fetchReports: () => (dispatch) => {
    axios
      .get('/api/getApplications')
      .then((response) => {
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
      .catch((_) => {
        dispatch({
          type: actionTypes.FAILURE,
          notification: {
            type: 'error',
            message: 'Nie udało się pobrać listy zgłoszeń!',
          },
        });
      });
  },

  sendFeedback: (reportId, feedbackType) => (dispatch) => {
    axios
      .put(
        '/api/updateApplication',
        {
          applicationId: reportId,
          punishment: feedbackType,
          status: true,
        },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem('jwt')}`,
          },
        },
      )
      .then((_) => {
        dispatch({
          type: actionTypes.SEND_FEEDBACK,
          payload: { reportId, feedbackType },
          notification: {
            type: 'success',
            message: 'Zamknięto zgłoszenie!',
          },
        });
      })
      .catch((_) => {
        dispatch({
          type: actionTypes.FAILURE,
          notification: {
            type: 'error',
            message: 'Nie udało się zamknąć zgłoszenia!',
          },
        });
      });
  },
};
