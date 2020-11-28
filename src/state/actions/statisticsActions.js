import axios from 'axios';
import dateFormat from 'dateformat';

export const actionTypes = {
  FETCH_STATISTICS: 'FETCH_STATISTICS',
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

        console.log(stats);

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
                ? stats.total_punishments / stats.recived_forms
                : 0
            }%`,
          },
          {
            name: 'Nierozwiązane zgłoszenia',
            value: `${
              stats.recived_forms !== 0
                ? stats.total_punishments / stats.recived_forms
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

        // const stats = {
        //   biggest_debts: 5000,
        //   biggest_first_name: 'Someone',
        //   biggest_id: 4;
        //   biggest_second_name: 'Else';
        //   dealt_forms: 0;
        //   earnings: 0;
        //   longest_quarantine_apartment_number: 6;
        //   longest_quarantine_days: 14;
        //   longest_quarantine_hause_number: 4;
        //   longest_quarantine_street: 'Testowa';
        //   on_quarantine: 1;
        //   recived_forms: 0;
        //   the_worst_first_name: 'Someone';
        //   the_worst_is: 4;
        //   the_worst_num_application: 0;
        //   the_worst_second_name: 'Else';
        //   total_punishments: 0;
        // }

        dispatch({
          type: actionTypes.FETCH_STATISTICS,
          payload: { statistics },
        });
      })
      .catch((err) => {
        console.log(err);
      });

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
