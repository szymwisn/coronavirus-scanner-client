import axios from 'axios';
import dateFormat from 'dateformat';

export const actionTypes = {
  FETCH_STATISTICS: 'FETCH_STATISTICS',
  FAILURE: 'FAILURE',
};

export default {
  fetchStatistics: (dateFrom, dateTo) => (dispatch) => {
    const DATE_FORMAT = 'yyyy-mm-dd';

    let dateFromStr = '';
    let dateToStr = '';

    if (!dateFrom) {
      const onceUponATime = new Date().setFullYear(1900);
      dateFromStr = dateFormat(onceUponATime, DATE_FORMAT);
    } else {
      dateFromStr = dateFormat(dateFrom, DATE_FORMAT);
    }

    if (!dateTo) {
      const today = new Date();
      dateToStr = dateFormat(today, DATE_FORMAT);
    } else {
      dateToStr = dateFormat(dateFrom, DATE_FORMAT);
    }

    axios
      .get(`/api/getStats?dateFrom=${dateFromStr}&dateTo=${dateToStr}`)
      .then((response) => {
        const stats = response.data;

        const statistics = [
          {
            name: 'Wszystkie zgłoszenia',
            value: stats.recived_forms,
          },
          {
            name: 'Zamknięte zgłoszenia',
            value: stats.dealt_forms,
          },
          {
            name: 'Zaakceptowane zgłoszenia',
            value: stats.total_punishments,
          },
          {
            name: 'Skuteczność',
            value: `${
              stats.recived_forms !== 0
                ? (
                    (100 * stats.total_punishments) /
                    stats.recived_forms
                  ).toFixed(2)
                : 0
            }%`,
          },
          {
            name: 'Nierozwiązane zgłoszenia',
            value: `${
              stats.recived_forms !== 0
                ? (
                    (100 * stats.total_punishments) /
                    stats.recived_forms
                  ).toFixed(2)
                : 0
            }%`,
          },
          {
            name: 'Wpływ do budżetu',
            value: stats.earnings,
          },
          {
            name: 'Aktualnie na kwarantannie',
            value: stats.on_quarantine,
          },
          {
            name: 'Największy dług',
            value: `${stats.biggest_debts} PLN, ${stats.biggest_first_name} ${stats.biggest_second_name}`,
          },
          {
            name: 'Najdłuższa kwarantanna',
            value: `${stats.longest_quarantine_days} dni, TODO CITY, ul. ${stats.longest_quarantine_street} ${stats.longest_quarantine_hause_number}/${stats.longest_quarantine_apartment_number}`,
          },
        ];

        dispatch({
          type: actionTypes.FETCH_STATISTICS,
          payload: { statistics },
        });
      })
      .catch((_) => {
        dispatch({
          type: actionTypes.FAILURE,
          notification: {
            type: 'error',
            message: 'Nie udało się pobrać statystyk!',
          },
        });
      });
  },
};
