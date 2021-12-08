import { fetchCafeteria, fetchCafeterias } from "../util/cafeteria_api_util";

export const RECEIVE_NEW_CAFETERIA = "RECEIVE_NEW_CAFETERIA";
export const RECEIVE_CAFETERIAS = "RECEIVE_CAFETERIAS";


export const receiveCafeteria = cafeteria => ({
  type: RECEIVE_NEW_CAFETERIA,
  cafeteria
});

export const receiveCafeterias = cafeterias => ({
  type: RECEIVE_CAFETERIAS,
  cafeterias
})

export const requestCafeteria = cafeteriaId => dispatch => (
  fetchCafeteria(cafeteriaId)
  .then(cafeteria => dispatch(receiveCafeteria(cafeteria)))
  .catch(err => console.log(err))
)

export const requestCafeterias = () => dispatch => (
  fetchCafeterias()
  .then(cafeterias => dispatch(receiveCafeterias(cafeterias)))
  .catch(err => console.log(err))
)