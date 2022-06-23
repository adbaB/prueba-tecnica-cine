 import config from './config.json'
const API_KEY = config.API_KEY
export const getApi = (path) =>  `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}&include_adult=false`