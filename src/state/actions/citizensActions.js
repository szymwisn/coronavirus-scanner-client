import axios from 'axios';

export const actionTypes = {
  FETCH_CITIZENS: 'FETCH_CITIZENS',
};

export default {
  fetchCitizens: () => (dispatch) => {
    axios
      .get('/api/users/')
      .then((response) => {
        console.log(response.data);
        const citizens = response.data;

        dispatch({
          type: actionTypes.FETCH_CITIZENS,
          payload: {
            citizens: citizens
              .filter((citizen) => !citizen.is_worker)
              .map((citizen) => ({
                name: `${citizen.first_name} ${citizen.second_name}`,
                address: `${citizen.city}, ul. ${citizen.street} ${citizen.hause_number}/${citizen.apartment_number}`,
                debt: citizen.debt,
                quarantine: citizen.quarantine_days_left,
                sentApplications: citizen.applications,
              })),
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
