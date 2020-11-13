// import axios from 'axios';

export const actionTypes = {
  FETCH_CITIZENS: 'FETCH_CITIZENS',
};

export default {
  fetchCitizens: () => (dispatch) => {
    // const url = '';
    //
    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response);
    //     const { citizens } = response;
    //     if (citizens) {
    //       dispatch({
    //         type: actionTypes.FETCH_CITIZENS,
    //         payload: { citizens },
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const tempCitizens = [
      {
        name: 'John Doe',
        address: 'Wroclaw, ul. Dluga 5',
        debt: 1000,
        quarantine: 14,
      },
      {
        name: 'Max Mustermann',
        address: 'Berlin, ul. Lange 1',
        debt: 0,
        quarantine: 3,
      },
      {
        name: 'Jan Kowalski',
        address: 'Warszawa, ul. Marszałkowska 25',
        debt: 3000,
        quarantine: 0,
      },
      {
        name: 'Someone Else',
        address: 'Olsztyn, ul. Słowackiego 1',
        debt: 3000,
        quarantine: 4,
      },
    ];

    dispatch({
      type: actionTypes.FETCH_CITIZENS,
      payload: { citizens: tempCitizens },
    });
  },
};
