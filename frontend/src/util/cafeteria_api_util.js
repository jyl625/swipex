import axios from 'axios';

export const fetchCafeterias = () => (
  axios.get('api/cafeterias')
)

export const fetchCafeteria = cafeteriaId => (
  axios.get(`api/cafertias/${cafeteriaId}`)
)
